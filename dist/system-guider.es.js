const U = (n, t, e = "") => {
  const i = document.createElement("button");
  return i.type = "button", i.className = `sg-button ${e ? `sg-button--${e}` : ""}`.trim(), i.dataset.action = t, i.textContent = n, i;
}, E = (n, t, e) => {
  const i = document.createElement(n);
  return i.className = t, i.textContent = e, i;
}, bt = (n) => {
  const t = n == null ? void 0 : n.target;
  return t instanceof Element ? t : (t == null ? void 0 : t.parentElement) instanceof Element ? t.parentElement : null;
};
class Ue {
  constructor({ labels: t, zIndex: e, handlers: i, visible: s = !0 }) {
    this.labels = t, this.handlers = i, this.state = { mode: "idle", steps: [], collapsed: !1, pageUrl: "", hasPageGuide: !1, pageGuides: [], focusGuideTitle: !1 }, this.position = null, this.dragging = null, this.root = document.createElement("aside"), this.root.className = "sg-panel", this.root.style.zIndex = String(e + 2), this.root.setAttribute("aria-label", "System Guider"), this.root.addEventListener("click", (r) => this.handleClick(r)), this.root.addEventListener("input", (r) => this.handleInput(r)), this.root.addEventListener("change", (r) => this.handleInput(r)), this.root.addEventListener("mouseover", (r) => this.handlePreview(r)), this.root.addEventListener("mouseout", (r) => this.handlePreviewEnd(r)), this.root.addEventListener("dragstart", (r) => this.handleDragStart(r)), this.root.addEventListener("dragover", (r) => r.preventDefault()), this.root.addEventListener("drop", (r) => this.handleDrop(r)), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.recordingIndicator = this.createRecordingIndicator(e), document.body.append(this.root), document.body.append(this.recordingIndicator), this.setVisible(s), this.render();
  }
  createRecordingIndicator(t) {
    const e = document.createElement("div");
    e.className = "sg-recording-indicator", e.style.zIndex = String(t + 4), e.hidden = !0, e.setAttribute("role", "status"), e.setAttribute("aria-live", "polite");
    const i = document.createElement("span");
    i.className = "sg-recording-indicator__live", i.setAttribute("aria-hidden", "true"), i.append(document.createElement("span"));
    const s = E("span", "sg-recording-indicator__status", "RECORDING…"), r = document.createElement("button");
    r.type = "button", r.className = "sg-recording-indicator__stop", r.title = "Stop recording", r.setAttribute("aria-label", "Stop recording");
    const a = document.createElement("span");
    a.className = "sg-recording-indicator__stop-icon", a.setAttribute("aria-hidden", "true");
    const o = E("span", "sg-recording-indicator__stop-label", "STOP");
    return r.append(a, o), r.addEventListener("click", (l) => {
      var c, d;
      l.preventDefault(), l.stopPropagation(), (d = (c = this.handlers)["stop-recording"]) == null || d.call(c);
    }), e.append(i, s, r), e;
  }
  setVisible(t) {
    this.visible = !!t, this.root.classList.toggle("sg-panel--hidden", !this.visible), this.root.setAttribute("aria-hidden", String(!this.visible));
  }
  applyPosition() {
    if (!this.position) {
      this.root.classList.remove("sg-panel--moved"), this.root.style.left = "", this.root.style.top = "", this.root.style.right = "", this.root.style.bottom = "";
      return;
    }
    this.root.classList.add("sg-panel--moved"), this.root.style.left = `${this.position.left}px`, this.root.style.top = `${this.position.top}px`, this.root.style.right = "auto", this.root.style.bottom = "auto";
  }
  clampPosition(t, e) {
    const i = this.root.getBoundingClientRect(), s = i.width || 360, r = i.height || 200, a = Math.max(8, window.innerWidth - s - 8), o = Math.max(8, window.innerHeight - r - 8);
    return {
      left: Math.min(Math.max(8, t), a),
      top: Math.min(Math.max(8, e), o)
    };
  }
  /** Move the panel if it covers the highlighted step target. */
  avoidHighlight(t) {
    var m;
    if (!t || this.root.classList.contains("sg-panel--hidden") || this.visible === !1 || ((m = this.state) == null ? void 0 : m.mode) === "playback" || this.dragging) return;
    const e = this.root.getBoundingClientRect();
    if (e.width < 2 || e.height < 2) return;
    const i = 14;
    if (!!(t.right + i < e.left || t.left - i > e.right || t.bottom + i < e.top || t.top - i > e.bottom)) return;
    const r = 16, a = e.width, o = e.height, l = window.innerWidth, c = window.innerHeight, d = l - t.right - r, u = t.left - r, h = c - t.bottom - r, p = t.top - r;
    let g = e.left, f = e.top;
    d >= a ? (g = t.right + r, f = Math.min(Math.max(8, t.top), Math.max(8, c - o - 8))) : u >= a ? (g = t.left - a - r, f = Math.min(Math.max(8, t.top), Math.max(8, c - o - 8))) : h >= Math.min(o, 180) ? (g = this.clampPosition(e.left, 0).left, f = t.bottom + r) : p >= Math.min(o, 180) ? (g = this.clampPosition(e.left, 0).left, f = t.top - o - r) : d >= u ? (g = Math.max(8, Math.min(l - a - 8, t.right + r)), f = Math.min(Math.max(8, t.top), Math.max(8, c - o - 8))) : (g = Math.max(8, Math.min(l - a - 8, t.left - a - r)), f = Math.min(Math.max(8, t.top), Math.max(8, c - o - 8)));
    const y = this.clampPosition(g, f);
    Math.abs(y.left - e.left) < 2 && Math.abs(y.top - e.top) < 2 || (this.position = y, this.applyPosition());
  }
  update(t) {
    this.state = { ...this.state, ...t }, this.applyTheme(), this.render();
  }
  applyTheme() {
    var e;
    const t = ((e = this.state.settings) == null ? void 0 : e.theme) === "light" ? "light" : "dark";
    this.root.dataset.sgTheme = t;
  }
  render() {
    const { mode: t, collapsed: e } = this.state;
    if (this.root.dataset.mode = t, this.root.classList.toggle("sg-panel--collapsed", e), this.recordingIndicator.hidden = t !== "recording", t === "playback") {
      this.root.classList.add("sg-panel--hidden"), this.root.setAttribute("aria-hidden", "true"), this.root.replaceChildren();
      return;
    }
    const i = this.root.querySelector(".sg-panel__body"), s = i ? i.scrollTop : this._bodyScrollTop || 0;
    i && (this._bodyScrollTop = i.scrollTop);
    const r = !!this.root.querySelector(".sg-global-settings[open]");
    this.root.classList.toggle("sg-panel--hidden", !this.visible), this.root.setAttribute("aria-hidden", String(!this.visible)), this.applyTheme(), this.root.replaceChildren();
    const a = document.createElement("header");
    a.className = "sg-panel__header", a.addEventListener("pointerdown", (g) => this.startDrag(g));
    const o = document.createElement("div");
    o.className = "sg-panel__brand";
    const l = document.createElement("span");
    l.className = "sg-panel__brand-icon", l.setAttribute("aria-hidden", "true"), l.innerHTML = `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 3c.55 3.1 2.1 4.65 5.2 5.2-3.1.55-4.65 2.1-5.2 5.2-.55-3.1-2.1-4.65-5.2-5.2C9.9 7.65 11.45 6.1 12 3Z" fill="currentColor"/>
        <path d="M18.2 14.2c.25 1.35.9 2 2.25 2.25-1.35.25-2 .9-2.25 2.25-.25-1.35-.9-2-2.25-2.25 1.35-.25 2-.9 2.25-2.25Z" fill="currentColor"/>
      </svg>
    `;
    const c = document.createElement("div");
    c.className = "sg-panel__brand-copy", t === "recording" ? c.append(
      E("span", "sg-eyebrow", "● LIVE RECORDING"),
      E("h2", "sg-panel__title", this.titleForMode(t))
    ) : c.append(
      E("h2", "sg-panel__title", "System Guider"),
      E("div", "sg-panel__subtitle", this.titleForMode(t))
    ), o.append(l, c);
    const d = U(e ? "Open" : "Minimize", "toggle-collapse", "ghost");
    if (d.setAttribute("aria-expanded", String(!e)), a.append(o, d), this.root.append(a), e) {
      this.applyPosition();
      return;
    }
    const u = document.createElement("div");
    u.className = "sg-panel__body", t === "idle" && this.renderIdle(u), (t === "recording" || t === "manage") && this.renderSteps(u, t), t === "manage-routes" && this.renderManageRoutes(u, { globalSettingsOpen: r }), this.root.append(u);
    const h = this.renderFooter(t);
    h && this.root.append(h), this.applyPosition();
    const p = t === "recording" && (Number(this.state.newStepsCount) || 0) > 0;
    queueMicrotask(() => {
      const g = this.root.querySelector(".sg-panel__body");
      g && (p ? g.scrollTop = g.scrollHeight : g.scrollTop = s, this._bodyScrollTop = g.scrollTop);
    });
  }
  titleForMode(t) {
    if (t === "recording" && this.state.recordingAppend) {
      const e = Number(this.state.newStepsCount) || 0;
      return e > 0 ? `Adding steps (${e} new)` : "Adding steps";
    }
    return {
      idle: "Create a guided flow",
      recording: "Capturing your flow",
      manage: "Edit this guide",
      playback: this.state.guideTitle || "Guide in progress",
      "manage-routes": "Manage guides & settings"
    }[t];
  }
  renderIdle(t) {
    t.append(
      E("p", "sg-lead", "Record actions, refine the steps, then replay a polished walkthrough.")
    ), this.state.pageUrl && t.append(E("p", "sg-page-key", `Page: ${this.state.pageUrl}`)), this.renderPageGuidesList(t);
    const e = document.createElement("div");
    e.className = "sg-empty", e.append(
      E("strong", "", this.state.hasPageGuide ? "Guide ready for this page" : "Ready when you are"),
      E(
        "span",
        "",
        this.state.hasPageGuide ? "Use Play guides, or tap Record on the floating launcher to capture a new flow." : "Tap Record on the floating launcher to capture a new flow."
      )
    ), t.append(e);
  }
  renderPageGuidesList(t) {
    const e = Array.isArray(this.state.pageGuides) ? this.state.pageGuides : [];
    if (!e.length) return;
    const i = document.createElement("div");
    i.className = "sg-page-guides", i.append(E("div", "sg-page-guides__label", "Saved guides on this page"));
    const s = document.createElement("ul");
    s.className = "sg-page-guides__list", e.forEach((r, a) => {
      const o = document.createElement("li");
      o.className = "sg-page-guides__item", r.id === this.state.currentGuideId && o.classList.add("is-current");
      const l = document.createElement("strong");
      l.textContent = r.title || `Guide ${a + 1}`;
      const c = document.createElement("span");
      c.textContent = `${r.steps} step${r.steps === 1 ? "" : "s"}`, o.append(l, c), s.append(o);
    }), i.append(s), t.append(i);
  }
  renderSteps(t, e) {
    var s, r;
    if (this.state.flashMessage && t.append(E("p", "sg-status", this.state.flashMessage)), e === "recording") {
      const a = !!this.state.recordingAppend, o = Number(this.state.newStepsCount) || 0, l = document.createElement("p");
      l.className = "sg-lead", a ? l.textContent = o > 0 ? `Keep going — ${o} new step${o === 1 ? "" : "s"} added. Interact again for more, then Stop Recording.` : "Interact with the page as many times as you need. Each action becomes a new step. Click Stop Recording when done." : l.textContent = o > 0 ? `Capturing… ${o} step${o === 1 ? "" : "s"} so far. Keep interacting, then Stop Recording.` : "Perform the flow on screen. Add as many steps as you need, then Stop Recording.", t.append(l);
    }
    if (e === "manage") {
      const a = this.state.steps.length, o = document.createElement("section");
      o.className = "sg-guide-editor";
      const l = document.createElement("label");
      l.className = "sg-guide-field sg-guide-field--rename";
      const c = document.createElement("span");
      c.className = "sg-guide-field__label-row";
      const d = document.createElement("span");
      d.className = "sg-guide-field__label-left", d.append(document.createTextNode("Guide name")), this.state.dirty && d.append(E("em", "sg-guide-editor__badge", "Unsaved"));
      const u = U("Save", "save-page", "primary");
      u.classList.add("sg-button--compact", "sg-guide-field__save"), u.disabled = this.state.steps.length === 0, c.append(d, u), l.append(c);
      const h = document.createElement("input");
      h.className = "sg-field sg-field--guide-title", h.value = this.state.guideTitle || "", h.dataset.guideField = "title", h.placeholder = "Example: Create employee schedule", h.setAttribute("aria-label", "Guide name"), h.addEventListener("keydown", (F) => {
        F.key === "Enter" && (F.preventDefault(), h.blur());
      }), h.addEventListener("blur", () => {
        var F, T;
        (T = (F = this.handlers).commitGuideTitle) == null || T.call(F);
      }), l.append(h);
      const p = document.createElement("details");
      p.className = "sg-step-settings sg-guide-settings";
      const g = document.createElement("summary");
      g.className = "sg-step-settings__summary", g.textContent = "Guide options", p.append(g);
      const f = document.createElement("div");
      f.className = "sg-step-settings__body";
      const y = document.createElement("label");
      y.className = "sg-check";
      const m = document.createElement("input");
      m.type = "checkbox", m.dataset.guideSetting = "reloadOnNavigate", m.checked = !!((s = this.state.guideSettings) != null && s.reloadOnNavigate), y.append(m, document.createTextNode(" Reload on other route"));
      const w = document.createElement("label");
      w.className = "sg-check";
      const _ = document.createElement("input");
      _.type = "checkbox", _.dataset.guideSetting = "resetBeforePlay", _.checked = ((r = this.state.guideSettings) == null ? void 0 : r.resetBeforePlay) === "reload", w.append(_, document.createTextNode(" Reload before play")), f.append(y, w), p.append(f), l.append(p), o.append(l);
      const S = document.createElement("div");
      S.className = "sg-guide-editor__steps-head";
      const N = document.createElement("div");
      N.className = "sg-guide-editor__steps-meta", N.append(
        E("span", "sg-guide-editor__steps-label", "Steps"),
        E("span", "sg-guide-editor__steps-count", String(a))
      );
      const I = U("Add steps", "add-steps", "secondary");
      I.classList.add("sg-button--compact", "sg-guide-editor__add-steps"), S.append(N, I), o.append(S), t.append(o), this.state.focusGuideTitle && queueMicrotask(() => {
        h.focus(), h.select();
      });
    }
    if (!this.state.steps.length) {
      t.append(E("div", "sg-empty", e === "manage" ? "No steps in this guide yet." : "No steps yet — start interacting with the page."));
      return;
    }
    const i = document.createElement("ol");
    i.className = "sg-step-list", this.state.steps.forEach((a, o) => {
      var f, y, m, w, _;
      const l = document.createElement("li");
      l.className = "sg-step", l.dataset.stepId = a.id, l.draggable = !1, a.invalid && l.classList.add("sg-step--invalid");
      const c = Number(this.state.recordingStepsBaseline) || 0, d = e === "recording" && o >= c;
      d && l.classList.add("sg-step--new");
      const u = document.createElement("div");
      if (u.className = "sg-step__top", e === "manage") {
        const S = document.createElement("span");
        S.className = "sg-step__drag", S.draggable = !0, S.title = "Drag to reorder", S.setAttribute("aria-label", `Drag step ${o + 1}`), S.textContent = "⋮⋮", S.addEventListener("dragstart", (N) => {
          N.dataTransfer.setData("text/plain", a.id), N.dataTransfer.effectAllowed = "move", l.classList.add("sg-step--dragging");
        }), S.addEventListener("dragend", () => {
          l.classList.remove("sg-step--dragging");
        }), u.append(S);
      }
      u.append(
        E("span", "sg-step__number", String(o + 1)),
        E("span", "sg-step__action", a.action)
      ), d && u.append(E("span", "sg-step__new", "New")), a.invalid && u.append(E("span", "sg-step__warning", "Target missing"));
      const h = document.createElement("input");
      h.className = "sg-field sg-step__title", h.value = a.title, h.dataset.field = "title", h.disabled = e === "recording", h.placeholder = "Step title", h.setAttribute("aria-label", `Step ${o + 1} title`);
      const p = E("code", "sg-step__selector", a.selector || "No target"), g = document.createElement("div");
      if (g.className = "sg-step__body", g.append(h, p), l.append(u, g), e === "manage" || e === "recording") {
        const S = document.createElement("div");
        S.className = "sg-step__controls";
        const N = (T, $, H = "") => {
          const R = U(T, $, H);
          return R.classList.add("sg-button--compact"), R.addEventListener("click", (M) => {
            var B, x;
            M.preventDefault(), M.stopPropagation(), (x = (B = this.handlers)[$]) == null || x.call(B, a.id);
          }), R;
        }, I = document.createElement("div");
        I.className = "sg-step__controls-left";
        const F = document.createElement("div");
        if (F.className = "sg-step__controls-right", e === "manage") {
          if (a.action === "input") {
            const R = document.createElement("label");
            R.className = "sg-check sg-check--compact";
            const M = document.createElement("input");
            M.type = "checkbox", M.dataset.field = "waitRequired", M.checked = !!((f = a.waitFor) != null && f.required), R.append(M, document.createTextNode(" Require value")), I.append(R);
          }
          const T = this.state.steps.length, $ = o + 1, H = (R) => {
            const M = document.createElement("div");
            M.className = "sg-step__move-picker";
            const B = R === "up", x = U(B ? "↑" : "↓", "", "ghost");
            x.classList.add("sg-button--compact", "sg-step__move-btn"), x.setAttribute("aria-haspopup", "listbox"), x.setAttribute("aria-expanded", "false"), x.title = B ? "Move to an earlier step" : "Move to a later step", x.setAttribute("aria-label", B ? `Move step ${$} to an earlier position` : `Move step ${$} to a later position`);
            const W = B ? Array.from({ length: o }, (D, P) => $ - 1 - P) : Array.from({ length: T - $ }, (D, P) => $ + 1 + P);
            W.length || (x.disabled = !0);
            const G = document.createElement("div");
            return G.className = "sg-step__move-menu", G.hidden = !0, G.setAttribute("role", "listbox"), G.setAttribute("aria-label", B ? "Earlier step numbers" : "Later step numbers"), W.forEach((D) => {
              const P = document.createElement("button");
              P.type = "button", P.className = "sg-step__move-option", P.textContent = String(D), P.setAttribute("role", "option"), P.title = `Move to step ${D}`, P.addEventListener("click", (K) => {
                var Q, O;
                K.preventDefault(), K.stopPropagation(), this.closeMoveMenus(), (O = (Q = this.handlers)["move-to"]) == null || O.call(Q, a.id, D);
              }), G.append(P);
            }), x.addEventListener("click", (D) => {
              if (D.preventDefault(), D.stopPropagation(), x.disabled) return;
              const P = G.hidden;
              this.closeMoveMenus(), P && (G.hidden = !1, x.setAttribute("aria-expanded", "true"));
            }), M.append(x, G), M;
          };
          I.append(H("up"), H("down"));
        }
        if (F.append(
          N("Play", "play-here", "ghost"),
          N("Remove", "remove", "danger")
        ), S.append(I, F), e === "manage") {
          const T = document.createElement("details");
          T.className = "sg-step-settings";
          const $ = document.createElement("summary");
          $.className = "sg-step-settings__summary", $.textContent = "Settings", T.append($);
          const H = document.createElement("div");
          H.className = "sg-step-settings__body";
          const R = document.createElement("label");
          R.className = "sg-step-settings__field", R.append(document.createTextNode("Step description"));
          const M = document.createElement("textarea");
          M.className = "sg-field sg-step__description", M.rows = 2, M.value = a.description || "", M.dataset.field = "description", M.placeholder = "Shown next to the highlight while playing", M.setAttribute("aria-label", `Step ${o + 1} description`), R.append(M);
          const B = document.createElement("label");
          B.className = "sg-check";
          const x = document.createElement("input");
          x.type = "checkbox", x.dataset.stepSetting = "autoScroll", x.checked = ((y = a.settings) == null ? void 0 : y.autoScroll) !== !1, B.append(x, document.createTextNode(" Auto-scroll"));
          const W = document.createElement("label");
          W.className = "sg-step-settings__field", W.append(document.createTextNode("Show delay (ms)"));
          const G = document.createElement("input");
          G.type = "number", G.min = "0", G.step = "50", G.className = "sg-field", G.value = String(((m = a.settings) == null ? void 0 : m.delay) ?? 0), G.dataset.stepSetting = "delay", W.append(G);
          const D = document.createElement("label");
          D.className = "sg-step-settings__field", D.append(document.createTextNode("Hide delay (ms)"));
          const P = document.createElement("input");
          P.type = "number", P.min = "0", P.step = "50", P.className = "sg-field", P.value = String(((w = a.settings) == null ? void 0 : w.hideDelay) ?? 0), P.dataset.stepSetting = "hideDelay", D.append(P);
          const K = document.createElement("label");
          K.className = "sg-check";
          const Q = document.createElement("input");
          Q.type = "checkbox", Q.dataset.stepSetting = "autoSkipMissing", Q.checked = ((_ = a.settings) == null ? void 0 : _.autoSkipMissing) !== !1, K.append(Q, document.createTextNode(" Auto-skip if missing")), H.append(R, B, W, D, K), T.append(H), l.append(S, T);
        } else
          l.append(S);
      }
      i.append(l);
    }), t.append(i);
  }
  renderManageRoutes(t, { globalSettingsOpen: e = !1 } = {}) {
    this.state.flashMessage && t.append(E("p", "sg-status", this.state.flashMessage));
    const i = this.state.settings || {}, s = Array.isArray(this.state.allGuides) ? this.state.allGuides : [], r = document.createElement("div");
    if (r.className = "sg-page-guides", r.append(E("div", "sg-page-guides__label", `All guides (${s.length})`)), !s.length)
      r.append(E("p", "sg-lead", "No guides saved yet."));
    else {
      const C = /* @__PURE__ */ new Map();
      s.forEach((L) => {
        const A = L.url || "/";
        C.has(A) || C.set(A, []), C.get(A).push(L);
      }), [...C.entries()].sort((L, A) => L[0].localeCompare(A[0])).forEach(([L, A]) => {
        const z = document.createElement("div");
        z.className = "sg-manage-section", z.append(E("div", "sg-manage-section__path", L));
        const tt = document.createElement("ul");
        tt.className = "sg-page-guides__list", A.forEach((X) => {
          const ft = document.createElement("li");
          ft.className = "sg-page-guides__item sg-page-guides__item--actions", ft.dataset.guideId = X.id;
          const St = document.createElement("div");
          St.className = "sg-page-guides__copy";
          const kt = document.createElement("div");
          kt.className = "sg-page-guides__head";
          const mt = document.createElement("span");
          mt.className = "sg-page-guides__icon", mt.setAttribute("aria-hidden", "true"), mt.innerHTML = `
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M7 4.75h7.5L17 7.25V19.25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
              <path d="M9 10.5h6M9 13.5h6M9 16.5h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          `;
          const _t = document.createElement("div");
          _t.className = "sg-page-guides__title-row";
          const At = document.createElement("strong");
          At.textContent = X.title || "Untitled";
          const xt = document.createElement("span");
          xt.className = "sg-page-guides__badge", xt.textContent = `${X.steps} step${X.steps === 1 ? "" : "s"}`, _t.append(At, xt), kt.append(mt, _t), St.append(kt);
          const b = document.createElement("div");
          b.className = "sg-page-guides__actions";
          const v = U("Play", "play-guide", "ghost");
          if (v.dataset.guideId = X.id, this.state.readOnly)
            b.append(v);
          else {
            const Z = U("Edit steps", "edit-guide", "secondary");
            Z.dataset.guideId = X.id;
            const V = U("Delete", "delete-guide", "danger");
            V.dataset.guideId = X.id, b.append(Z, v, V);
          }
          ft.append(St, b), tt.append(ft);
        }), z.append(tt), r.append(z);
      });
    }
    t.append(r);
    const a = document.createElement("details");
    a.className = "sg-global-settings", e && (a.open = !0);
    const o = document.createElement("summary");
    o.className = "sg-global-settings__summary", o.innerHTML = `
      <span class="sg-global-settings__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
          <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="sg-global-settings__copy">
        <span class="sg-global-settings__label">Global Settings</span>
        <span class="sg-global-settings__hint">Configure default guide preferences</span>
      </span>
    `;
    const l = document.createElement("div");
    l.className = "sg-global-settings__body", l.append(E("p", "sg-lead", "App defaults (used when a guide has no own settings). Step delays are per step inside each guide."));
    const c = document.createElement("div");
    c.className = "sg-settings sg-settings--nested", c.append(E("div", "sg-page-guides__label", "Current account"));
    const d = document.createElement("label");
    d.className = "sg-step-settings__field sg-settings__row", d.append(document.createTextNode("Account ID"));
    const u = document.createElement("input");
    u.type = "text", u.className = "sg-field sg-account-id__field", u.readOnly = !0, u.tabIndex = 0, u.setAttribute("aria-readonly", "true");
    const h = this.state.accountId;
    u.value = h == null || h === "" ? "Not set" : String(h), u.title = "Logged-in account ID from the host app", d.append(u), c.append(d), c.append(E(
      "p",
      "sg-lead",
      "Use this ID in the editor allow-list below. Host apps set it via Guider setAccountId / options.accountId."
    )), l.append(c);
    const p = document.createElement("div");
    p.className = "sg-settings sg-settings--nested", p.append(E("div", "sg-page-guides__label", "Default settings"));
    const g = document.createElement("label");
    g.className = "sg-check sg-settings__row";
    const f = document.createElement("input");
    f.type = "checkbox", f.dataset.setting = "reloadOnNavigate", f.checked = !!i.reloadOnNavigate, g.append(f, document.createTextNode(" Default: reload when opening a guide on another route")), p.append(g);
    const y = document.createElement("label");
    y.className = "sg-check sg-settings__row";
    const m = document.createElement("input");
    m.type = "checkbox", m.dataset.setting = "resetBeforePlay", m.checked = i.resetBeforePlay === "reload", y.append(m, document.createTextNode(" Default: reload page before playing")), p.append(y);
    const w = document.createElement("label");
    w.className = "sg-step-settings__field sg-settings__row", w.append(document.createTextNode("Theme mode"));
    const _ = document.createElement("select");
    _.className = "sg-field", _.dataset.setting = "theme", [
      ["dark", "Dark"],
      ["light", "Light"]
    ].forEach(([C, L]) => {
      const A = document.createElement("option");
      A.value = C, A.textContent = L, (i.theme || "dark") === C && (A.selected = !0), _.append(A);
    }), w.append(_), p.append(w);
    const S = document.createElement("div");
    S.className = "sg-settings sg-settings--nested", S.append(E("div", "sg-page-guides__label", "Access & toolbar"));
    const N = document.createElement("label");
    N.className = "sg-step-settings__field sg-settings__row", N.append(document.createTextNode("Editor account IDs (not listed = Play only)"));
    const I = document.createElement("textarea");
    I.className = "sg-field", I.rows = 3, I.placeholder = "e.g. 1, 12, 45", I.dataset.setting = "editorAccountIds", I.value = Array.isArray(i.editorAccountIds) ? i.editorAccountIds.join(", ") : String(i.editorAccountIds || ""), N.append(I), S.append(N);
    const F = document.createElement("label");
    F.className = "sg-step-settings__field sg-settings__row", F.append(document.createTextNode("Bypass PIN (hover orb + type to open panel)"));
    const T = document.createElement("input");
    T.type = "text", T.className = "sg-field", T.inputMode = "numeric", T.autocomplete = "off", T.placeholder = "123456", T.maxLength = 12, T.dataset.setting = "bypassPin", T.value = String(i.bypassPin ?? "123456"), F.append(T), S.append(F);
    const $ = document.createElement("label");
    $.className = "sg-check sg-settings__row";
    const H = document.createElement("input");
    H.type = "checkbox", H.dataset.setting = "showAccountId", H.checked = i.showAccountId !== !1, $.append(H, document.createTextNode(" Show account ID on launcher")), S.append($);
    const R = document.createElement("label");
    R.className = "sg-step-settings__field sg-settings__row", R.append(document.createTextNode("Hide toolbar on URLs (one per line)"));
    const M = document.createElement("textarea");
    M.className = "sg-field", M.rows = 3, M.placeholder = `/login
/time-log`, M.dataset.setting = "hiddenUrls", M.value = Array.isArray(i.hiddenUrls) ? i.hiddenUrls.join(`
`) : String(i.hiddenUrls || ""), R.append(M), S.append(R), S.append(E(
      "p",
      "sg-lead",
      "Accounts not in this list only see Play guides (and search). Add an ID to allow Record and Panel. Empty list = Play only for everyone. Hover the orb and type the bypass PIN to open settings when locked out."
    ));
    const B = i.ui || {}, x = document.createElement("div");
    x.className = "sg-settings sg-settings--nested", x.append(E("div", "sg-page-guides__label", "Playback appearance"));
    const W = (C, L, A) => {
      const z = document.createElement("label");
      z.className = "sg-check sg-settings__row";
      const tt = document.createElement("input");
      tt.type = "checkbox", tt.dataset.setting = C, tt.checked = !!A, z.append(tt, document.createTextNode(` ${L}`)), x.append(z);
    };
    W("ui.animations", "Enable animations", B.animations !== !1), W("ui.spotlightFade", "Spotlight fade in/out", B.spotlightFade !== !1), W("ui.animatedCursor", "Animated cursor between steps", B.animatedCursor);
    const G = document.createElement("label");
    G.className = "sg-step-settings__field sg-settings__row", G.append(document.createTextNode("Highlight motion"));
    const D = document.createElement("select");
    D.className = "sg-field", D.dataset.setting = "ui.highlightMotion", [
      ["none", "None"],
      ["pulse", "Pulse"],
      ["wobble", "Wobble"],
      ["fade", "Fade"]
    ].forEach(([C, L]) => {
      const A = document.createElement("option");
      A.value = C, A.textContent = L, (B.highlightMotion || "pulse") === C && (A.selected = !0), D.append(A);
    }), G.append(D), x.append(G);
    const P = document.createElement("label");
    P.className = "sg-step-settings__field sg-settings__row", P.append(document.createTextNode("Transition speed (ms)"));
    const K = document.createElement("input");
    K.type = "number", K.min = "0", K.max = "1000", K.step = "20", K.className = "sg-field", K.dataset.setting = "ui.transitionMs", K.value = String(B.transitionMs ?? 220), P.append(K), x.append(P);
    const Q = document.createElement("label");
    Q.className = "sg-step-settings__field sg-settings__row", Q.append(document.createTextNode("Overlay dim (%)"));
    const O = document.createElement("input");
    O.type = "range", O.min = "0", O.max = "90", O.step = "5", O.className = "sg-field sg-field--range", O.dataset.setting = "ui.overlayOpacity", O.value = String(Math.round((Number(B.overlayOpacity) || 0.58) * 100));
    const J = document.createElement("span");
    J.className = "sg-settings__range-value", J.textContent = `${O.value}%`, O.addEventListener("input", () => {
      J.textContent = `${O.value}%`;
    }), Q.append(O, J), x.append(Q);
    const st = document.createElement("div");
    st.className = "sg-settings__colors";
    const k = (C, L, A) => {
      const z = document.createElement("label");
      z.className = "sg-settings__color-row";
      const tt = document.createElement("span");
      tt.textContent = L;
      const X = document.createElement("input");
      X.type = "color", X.dataset.setting = C, X.value = A || "#000000", z.append(tt, X), st.append(z);
    };
    k("ui.tipBg", "Tip background", B.tipBg || "#0f1b33"), k("ui.tipText", "Tip text", B.tipText || "#f8fafc"), k("ui.skipBg", "Skip background", B.skipBg || "#2563eb"), k("ui.skipText", "Skip text", B.skipText || "#ffffff"), k("ui.spotlightColor", "Spotlight", B.spotlightColor || "#3b82f6"), x.append(st);
    const q = U("Reset appearance", "reset-ui-settings", "ghost");
    q.classList.add("sg-button--compact"), x.append(q), l.append(p, S, x), a.append(o, l), t.append(a);
  }
  renderPlayback(t) {
    const {
      currentStep: e,
      currentIndex: i = 0,
      total: s = 0,
      failed: r,
      autoSkipping: a
    } = this.state, o = document.createElement("div");
    o.className = "sg-progress", o.append(
      E("span", "", `Step ${Math.min(i + 1, s)} of ${s}`),
      E("span", "", `${s ? Math.round((i + 1) / s * 100) : 0}%`)
    );
    const l = document.createElement("div");
    l.className = "sg-progress__bar";
    const c = document.createElement("span");
    if (c.style.width = `${s ? (i + 1) / s * 100 : 0}%`, l.append(c), t.append(o, l), e && t.append(
      E("h3", "sg-playback__title", e.title),
      E("p", "sg-playback__description", e.description)
    ), r) {
      const d = String(this.state.message || "").trim();
      t.append(E(
        "p",
        "sg-status sg-status--error",
        d || (a ? "Target not found. Skipping to the next step…" : "Target not found. Follow this guide's requirements first, then continue — or skip this step.")
      ));
    } else this.state.waiting && (this.state.waitKind === "target" || this.state.waitKind === "navigate") && t.append(E(
      "p",
      "sg-status sg-status--waiting",
      String(this.state.message || "Waiting…").trim() || "Waiting…"
    ));
  }
  renderFooter(t) {
    const e = document.createElement("footer");
    if (e.className = "sg-panel__footer", t === "idle" || t === "recording")
      return null;
    if (t === "manage") {
      e.classList.add("sg-panel__footer--manage");
      const i = U("Play guide", "play", "secondary");
      i.classList.add("sg-panel__btn-play"), i.disabled = this.state.steps.length === 0;
      const s = document.createElement("div");
      s.className = "sg-panel__footer-more", s.append(
        U("All guides", "open-manage", "ghost"),
        U("Download", "download", "ghost"),
        U("Download all", "download-all", "ghost"),
        U("Copy JSON", "copy", "ghost"),
        U("Close", "close", "ghost")
      ), e.append(i, s);
    } else if (t === "manage-routes") {
      e.classList.add("sg-panel__footer--manage");
      const i = document.createElement("div");
      i.className = "sg-panel__footer-actions", i.append(
        U("Load guides", "load", "secondary"),
        U("Paste JSON", "paste", "secondary"),
        U("Download all", "download-all", "primary")
      );
      const s = document.createElement("div");
      s.className = "sg-panel__footer-more", s.append(U("Close", "close", "ghost")), e.append(i, s);
    } else t === "playback" && (e.append(
      U(this.labels.back, "prev", "secondary"),
      U(this.labels.skip, "skip", "secondary"),
      U(this.labels.next, "next", "primary"),
      U(this.labels.close, "close", "ghost")
    ), e.querySelector('[data-action="prev"]').disabled = this.state.currentIndex <= 0, e.querySelector('[data-action="next"]').disabled = !!(this.state.waiting || this.state.failed));
    return e;
  }
  handleClick(t) {
    var l, c, d, u, h, p, g;
    const e = bt(t);
    if (!e) return;
    e.closest(".sg-step__move-picker") || this.closeMoveMenus();
    const i = e.closest("[data-action]"), s = i == null ? void 0 : i.dataset.action;
    if (!s) return;
    if (t.preventDefault(), t.stopPropagation(), s === "toggle-collapse") {
      this.update({ collapsed: !this.state.collapsed });
      return;
    }
    const r = e.closest("[data-step-id]"), a = (l = e.closest("[data-guide-id]")) == null ? void 0 : l.dataset.guideId;
    if (s === "play-guide" || s === "delete-guide" || s === "edit-guide") {
      (d = (c = this.handlers)[s]) == null || d.call(c, a);
      return;
    }
    const o = (r == null ? void 0 : r.dataset.stepId) || ((h = (u = i == null ? void 0 : i.closest) == null ? void 0 : u.call(i, "[data-step-id]")) == null ? void 0 : h.dataset.stepId);
    (g = (p = this.handlers)[s]) == null || g.call(p, o);
  }
  closeMoveMenus() {
    this.root.querySelectorAll(".sg-step__move-menu:not([hidden])").forEach((t) => {
      t.hidden = !0;
    }), this.root.querySelectorAll('.sg-step__move-btn[aria-expanded="true"]').forEach((t) => {
      t.setAttribute("aria-expanded", "false");
    });
  }
  handleInput(t) {
    var c, d, u, h, p, g, f, y, m, w, _, S;
    const e = bt(t);
    if (!e) return;
    const i = e.dataset.setting;
    if (i) {
      const N = e.type === "checkbox" ? e.checked : e.value;
      (d = (c = this.handlers)["update-setting"]) == null || d.call(c, i, N);
      return;
    }
    const s = e.dataset.guideSetting;
    if (s) {
      const N = e.dataset.guideId || this.state.currentGuideId, I = e.type === "checkbox" ? e.checked : e.value;
      (h = (u = this.handlers)["edit-guide-setting"]) == null || h.call(u, N, s, I);
      return;
    }
    const r = e.dataset.stepSetting;
    if (r) {
      const N = (p = e.closest("[data-step-id]")) == null ? void 0 : p.dataset.stepId, I = e.type === "checkbox" ? e.checked : e.value;
      (f = (g = this.handlers)["edit-step-setting"]) == null || f.call(g, N, r, I);
      return;
    }
    const a = e.dataset.guideField;
    if (a) {
      (m = (y = this.handlers).editGuide) == null || m.call(y, a, e.value);
      return;
    }
    const o = e.dataset.field, l = (w = e.closest("[data-step-id]")) == null ? void 0 : w.dataset.stepId;
    !o || !l || (S = (_ = this.handlers).edit) == null || S.call(_, l, o, o === "waitRequired" ? e.checked : e.value);
  }
  handlePreview(t) {
    var s, r, a;
    const e = bt(t), i = (s = e == null ? void 0 : e.closest) == null ? void 0 : s.call(e, "[data-step-id]");
    i && !i.contains(t.relatedTarget) && ((a = (r = this.handlers).preview) == null || a.call(r, i.dataset.stepId));
  }
  handlePreviewEnd(t) {
    var s, r, a;
    const e = bt(t), i = (s = e == null ? void 0 : e.closest) == null ? void 0 : s.call(e, "[data-step-id]");
    i && !i.contains(t.relatedTarget) && ((a = (r = this.handlers).previewEnd) == null || a.call(r));
  }
  handleDragStart(t) {
    const e = bt(t);
    if (!e) return;
    if (!e.closest(".sg-step__drag")) {
      t.preventDefault();
      return;
    }
    if (e.closest(".sg-panel__header")) {
      t.preventDefault();
      return;
    }
    const i = e.closest("[data-step-id]");
    i && (t.dataTransfer.setData("text/plain", i.dataset.stepId), t.dataTransfer.effectAllowed = "move");
  }
  handleDrop(t) {
    var r, a, o;
    t.preventDefault();
    const e = bt(t), i = (r = e == null ? void 0 : e.closest) == null ? void 0 : r.call(e, "[data-step-id]"), s = t.dataTransfer.getData("text/plain");
    s && i && s !== i.dataset.stepId && ((o = (a = this.handlers).drop) == null || o.call(a, s, i.dataset.stepId));
  }
  startDrag(t) {
    var s, r;
    if (t.button != null && t.button !== 0) return;
    const e = bt(t);
    if (e != null && e.closest("button, a, input, textarea, select, label, .sg-step__drag, .sg-step__controls")) return;
    const i = this.root.getBoundingClientRect();
    this.dragging = {
      offsetX: t.clientX - i.left,
      offsetY: t.clientY - i.top,
      pointerId: t.pointerId
    }, this.position = this.clampPosition(i.left, i.top), this.applyPosition(), this.root.classList.add("sg-panel--dragging");
    try {
      (r = (s = t.currentTarget).setPointerCapture) == null || r.call(s, t.pointerId);
    } catch {
    }
    window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerup", this.onPointerUp), window.addEventListener("pointercancel", this.onPointerUp), t.preventDefault();
  }
  onPointerMove(t) {
    this.dragging && (this.position = this.clampPosition(
      t.clientX - this.dragging.offsetX,
      t.clientY - this.dragging.offsetY
    ), this.applyPosition());
  }
  onPointerUp() {
    this.dragging && (this.dragging = null, this.root.classList.remove("sg-panel--dragging"), window.removeEventListener("pointermove", this.onPointerMove), window.removeEventListener("pointerup", this.onPointerUp), window.removeEventListener("pointercancel", this.onPointerUp));
  }
  destroy() {
    this.onPointerUp(), this.recordingIndicator.remove(), this.root.remove();
  }
}
const Ct = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, it = (n) => String(n || "").replace(/\s+/g, " ").trim().toLowerCase(), Ee = (n) => {
  var a, o, l, c;
  if (!(n instanceof Element)) return "";
  const t = ((a = n.closest) == null ? void 0 : a.call(n, ".p-float-label")) || n.parentElement, e = (o = t == null ? void 0 : t.querySelector) == null ? void 0 : o.call(t, ":scope > label, label");
  if (e) {
    const d = it(e.textContent);
    if (d) return d;
  }
  const i = (l = n.querySelector) == null ? void 0 : l.call(n, '.nav-link-title, .menu-title, .sidebar-title, [class*="title"]');
  if (i) {
    const d = it(i.textContent);
    if (d) return d;
  }
  const s = n.cloneNode(!0);
  (c = s.querySelectorAll) == null || c.call(s, "script, style, svg, i, .nav-icon, .sidebar-pending-dot, .badge, .p-dropdown-label, .p-multiselect-label").forEach((d) => d.remove());
  const r = it(s.textContent);
  return r || it(
    n.getAttribute("aria-label") || n.getAttribute("title") || n.getAttribute("placeholder") || n.getAttribute("name") || ""
  );
}, Te = (n) => {
  var e;
  if (!(n instanceof Element)) return "";
  const t = n.getAttribute("href") || n.getAttribute("data-href") || "";
  if (!t || t === "#" || t.startsWith("javascript:")) return "";
  try {
    const i = new URL(t, ((e = globalThis.location) == null ? void 0 : e.origin) || "http://localhost");
    return `${i.pathname}${i.search}`.replace(/\/+$/, "") || "/";
  } catch {
    return t.split("#")[0].replace(/\/+$/, "") || t;
  }
};
function Ae(n) {
  var i, s, r, a;
  if (!(n instanceof Element)) return "";
  const t = [
    ".dropdown-header",
    ".nav-header",
    ".nav-subtitle",
    ".menu-header",
    ".sidebar-header",
    '[class*="nav-header"]',
    '[class*="menu-header"]',
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ].join(", ");
  let e = n;
  for (let o = 0; o < 12 && e; o += 1) {
    let l = e.previousElementSibling;
    for (; l; ) {
      if ((i = l.matches) != null && i.call(l, t))
        return it(l.textContent).slice(0, 80);
      const u = (s = l.querySelector) == null ? void 0 : s.call(l, t);
      if (u) return it(u.textContent).slice(0, 80);
      l = l.previousElementSibling;
    }
    const c = e.parentElement;
    if (!c || c === document.body) break;
    let d = c.previousElementSibling;
    for (; d; ) {
      if ((r = d.matches) != null && r.call(d, t))
        return it(d.textContent).slice(0, 80);
      const u = (a = d.querySelector) == null ? void 0 : a.call(d, t);
      if (u) return it(u.textContent).slice(0, 80);
      d = d.previousElementSibling;
    }
    e = c;
  }
  return "";
}
function We(n) {
  var f, y, m;
  if (!(n instanceof Element)) return null;
  const t = ((f = n.closest) == null ? void 0 : f.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")) || ((y = n.matches) != null && y.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? n : null), e = t || n, i = Ee(e), s = Te(e), r = Ae(e), a = e.getAttribute("data-guider") || "", o = it(t ? "" : e.getAttribute("aria-label") || ""), l = e.getAttribute("name") || "", c = it(e.getAttribute("placeholder") || ""), d = e.getAttribute("role") || (t ? "combobox" : ""), u = e.tagName.toLowerCase(), h = e.getAttribute("type") || "", p = t && ((m = [...t.querySelectorAll("[id]")].find((w) => w.id && !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(w.id))) == null ? void 0 : m.id) || "", g = !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(e.id || "") && e.id || p || "";
  return !i && !s && !a && !l && !o && !g ? null : {
    ...i ? { text: i } : {},
    ...s ? { href: s } : {},
    ...r ? { section: r } : {},
    ...a ? { dataGuider: a } : {},
    ...o ? { ariaLabel: o } : {},
    ...l ? { name: l } : {},
    ...c ? { placeholder: c } : {},
    ...d ? { role: d } : {},
    ...u ? { tag: u } : {},
    ...h ? { type: h } : {},
    ...g ? { id: g } : {}
  };
}
function Gt(n, t) {
  const e = it(n), i = it(t);
  if (!e || !i) return 0;
  if (e === i) return 50;
  const s = e.split(/\s+/).filter(Boolean), r = i.split(/\s+/).filter(Boolean);
  if (s.length === r.length && r.every((a) => s.includes(a)))
    return 40;
  if (e.includes(i)) {
    const a = Math.max(0, s.length - r.length);
    return Math.max(4, 18 - a * 6);
  }
  return i.includes(e) && e.length >= 3 ? 8 : 0;
}
function qe(n, t) {
  const e = it(n).replace(/\/+$/, ""), i = it(t).replace(/\/+$/, "");
  return !e || !i ? 0 : e === i ? 45 : e.endsWith(i) || i.endsWith(e) ? 28 : e.includes(i) || i.includes(e) ? 12 : -25;
}
function je(n, t) {
  const e = it(n), i = it(t);
  return !e || !i ? 0 : e === i ? 30 : e.includes(i) || i.includes(e) ? 12 : -20;
}
function me(n, t) {
  if (!(n instanceof Element) || !t || typeof t != "object") return 0;
  let e = 0;
  const i = n.getAttribute("data-guider") || "";
  return t.dataGuider && (i === t.dataGuider ? e += 100 : i && (e -= 40)), t.id && n.id && n.id === t.id && (e += 80), t.href && (e += qe(Te(n), t.href)), t.text ? (e += Gt(Ee(n), t.text), t.ariaLabel && (e += Math.round(Gt(n.getAttribute("aria-label") || "", t.ariaLabel) * 0.5))) : t.ariaLabel && (e += Gt(n.getAttribute("aria-label") || "", t.ariaLabel)), t.section && (e += je(Ae(n), t.section)), t.name && n.getAttribute("name") === t.name && (e += 25), t.placeholder && (e += Math.round(Gt(n.getAttribute("placeholder") || "", t.placeholder) * 0.6)), t.tag && n.tagName.toLowerCase() === t.tag && (e += 4), t.role && n.getAttribute("role") === t.role && (e += 6), t.type && n.getAttribute("type") === t.type && (e += 6), e;
}
function Ke(n) {
  const t = [];
  if (n != null && n.dataGuider && t.push(`[data-guider="${Ct(n.dataGuider)}"]`), n != null && n.id && t.push(`#${Ct(n.id)}`), n != null && n.href) {
    const e = String(n.href);
    t.push(`a[href="${Ct(e)}"]`), t.push(`a[href="${Ct(e)}/"]`);
    const i = e.replace(/^\//, "");
    i && i !== e && t.push(`a[href="/${Ct(i)}"]`);
  }
  return n != null && n.name && t.push(`[name="${Ct(n.name)}"]`), t.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label'), t.join(", ");
}
function ze(n, t = document) {
  var r;
  const e = t instanceof Element || t === document ? t : document;
  let i = [];
  try {
    i = [...e.querySelectorAll(Ke(n))];
  } catch {
    i = [...e.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-guider]')];
  }
  const s = [];
  for (const a of i)
    a instanceof Element && ((r = a.closest) != null && r.call(a, ".sg-panel, .sg-overlay, .sg-launcher") || (s.push(a), a.matches("label") && a.control instanceof Element && s.push(a.control)));
  return [...new Set(s)];
}
const Ve = 40;
function ye(n, {
  selector: t = "",
  root: e = document,
  threshold: i = Ve
} = {}) {
  const s = [];
  if (t)
    try {
      const a = document.querySelector(t);
      if (a instanceof Element) {
        const o = n ? me(a, n) : 35;
        s.push({ element: a, score: o, via: "selector" });
      }
    } catch {
    }
  if (n && typeof n == "object")
    for (const a of ze(n, e)) {
      const o = me(a, n);
      o > 0 && s.push({ element: a, score: o, via: "score" });
    }
  if (!s.length) return null;
  s.sort((a, o) => o.score - a.score || (a.via === "selector" ? -1 : 1));
  const r = s[0];
  return !r || r.score < i ? (r == null ? void 0 : r.via) === "selector" && t && (t.startsWith("[data-guider=") || t.startsWith("#")) ? r.element : null : r.element;
}
const Mt = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
};
function et(n) {
  return n instanceof Element ? n.matches(
    'input[type="password"], [data-guider-ignore], [contenteditable][data-sensitive]'
  ) : !0;
}
function be(n) {
  return !n || typeof n != "string" ? !0 : /^(pv_|apv_|pr_|p_)id_?\d+$/i.test(n) || /^[a-z]{1,5}_id_\d+$/i.test(n);
}
const ve = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect";
function Je(n) {
  var r, a;
  if (!(n instanceof Element)) return null;
  const t = (r = n.closest) == null ? void 0 : r.call(n, ve);
  t && (n = t);
  const e = n.getAttribute("data-guider");
  if (e) return `[data-guider="${Mt(e)}"]`;
  if (n.id && !be(n.id)) {
    const o = `#${Mt(n.id)}`;
    if (document.querySelectorAll(o).length === 1) return o;
  }
  if ((a = n.matches) != null && a.call(n, ve)) {
    const o = [...n.querySelectorAll("[id]")].find(
      (c) => c.id && !be(c.id)
    ), l = [...n.classList].find((c) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(c));
    if (o && l) {
      const c = `${n.tagName.toLowerCase()}.${Mt(l)}:has(#${Mt(o.id)})`;
      try {
        if (document.querySelectorAll(c).length === 1) return c;
      } catch {
      }
    }
  }
  const i = [];
  let s = n;
  for (; s && s !== document.body && i.length < 5; ) {
    let o = s.tagName.toLowerCase();
    const l = [...s.classList].find(
      (u) => !/^(active|selected|open|focus|hover|ng-|css-|jsx-|p-placeholder|p-focus|p-inputtext|p-disabled|p-highlight|p-inputwrapper|p-inputwrapper-filled|p-inputwrapper-focus|p-overlay-open)$/i.test(u)
    );
    l && (o += `.${Mt(l)}`);
    const c = s.parentElement;
    if (c) {
      const u = [...c.children].filter(
        (h) => h.tagName === s.tagName
      );
      u.length > 1 && (o += `:nth-of-type(${u.indexOf(s) + 1})`);
    }
    i.unshift(o);
    const d = i.join(" > ");
    if (document.querySelectorAll(d).length === 1) return d;
    s = c;
  }
  return i.join(" > ") || null;
}
function Et(n) {
  var t;
  if (!n || typeof n != "string") return null;
  try {
    let e = document.querySelector(n);
    if (!e && /\.p-placeholder|\.p-inputtext|\.p-focus/.test(n)) {
      const i = n.replace(/\.p-placeholder/g, "").replace(/\.p-inputtext/g, "").replace(/\.p-focus/g, "").replace(/\s{2,}/g, " ").replace(/>\s*>/g, ">").trim();
      i && (e = document.querySelector(i));
    }
    if (e) {
      const i = (t = e.closest) == null ? void 0 : t.call(e, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (i) return i;
    }
    return e;
  } catch {
    return null;
  }
}
function ct(n) {
  if (!(n instanceof Element) || !n.isConnected) return !1;
  const t = getComputedStyle(n);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = n.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function Xe(n) {
  if (!(n instanceof Element)) return !1;
  const t = n.getBoundingClientRect();
  return !(t.bottom < 0 || t.right < 0 || t.top > window.innerHeight || t.left > window.innerWidth);
}
function qt(n) {
  return ct(n) && Xe(n);
}
function Ze(n, { behavior: t = "smooth", block: e = "center" } = {}) {
  if (!(n instanceof Element) || !n.isConnected) return;
  const i = [];
  let s = n.parentElement;
  for (; s && s !== document.documentElement; )
    i.push(s), s = s.parentElement;
  i.forEach((r) => {
    const a = getComputedStyle(r), o = /(auto|scroll|overlay)/.test(a.overflowY) && r.scrollHeight > r.clientHeight + 1, l = /(auto|scroll|overlay)/.test(a.overflowX) && r.scrollWidth > r.clientWidth + 1;
    if (!o && !l) return;
    const c = r.getBoundingClientRect(), d = n.getBoundingClientRect();
    if (o) {
      const u = d.top + d.height / 2 - (c.top + r.clientHeight / 2);
      Math.abs(u) > 2 && (r.scrollTop += u);
    }
    if (l) {
      const u = d.left + d.width / 2 - (c.left + r.clientWidth / 2);
      Math.abs(u) > 2 && (r.scrollLeft += u);
    }
  });
  try {
    n.scrollIntoView({ behavior: t, block: e, inline: "nearest" });
  } catch {
    n.scrollIntoView();
  }
}
function It(n) {
  var s, r, a, o;
  if (!(n instanceof Element)) return null;
  const t = (s = n.closest) == null ? void 0 : s.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
  if (t && ct(t)) return t;
  if (ct(n)) {
    const l = (r = n.closest) == null ? void 0 : r.call(
      n,
      '.p-overlaypanel, .modal-content, .card, .offcanvas, [class*="overlay-custom"], .attendance-tracking, .filter-panel'
    );
    return l && l !== n && !n.matches('input, textarea, select, button, a, [role="combobox"]'), n;
  }
  let e = n.parentElement;
  for (let l = 0; l < 8 && e && !((a = e.matches) != null && a.call(e, ".p-overlaypanel, .modal, .modal-content, .card, .offcanvas, body, html")); l += 1) {
    const c = (o = e.getBoundingClientRect) == null ? void 0 : o.call(e);
    if (c && (c.width > 420 || c.height > 280)) {
      e = e.parentElement;
      continue;
    }
    if (qt(e)) return e;
    e = e.parentElement;
  }
  const i = n.closest([
    ".p-dropdown",
    ".p-multiselect",
    ".p-autocomplete",
    ".p-float-label",
    ".form-group",
    ".mb-3",
    ".n-form-item",
    ".el-form-item",
    ".v-input",
    ".mx-datepicker",
    ".dp__main",
    ".input-group",
    '[class*="form-item"]',
    '[class*="FormItem"]',
    "label"
  ].join(", "));
  if (i && ct(i)) {
    const l = i.getBoundingClientRect();
    if (l.width <= 420 && l.height <= 280) return i;
  }
  return ct(n) ? n : null;
}
function Ye(n) {
  return [n.top, n.left, n.width, n.height].map((t) => Math.round(t * 2) / 2).join(":");
}
async function Qe(n, {
  timeout: t = 1500,
  stableFrames: e = 4,
  interval: i = 50
} = {}) {
  if (!(n instanceof Element)) return null;
  const s = Date.now() + t;
  let r = "", a = 0;
  for (; Date.now() <= s; ) {
    if (!n.isConnected) return null;
    if (!ct(n))
      a = 0, r = "";
    else {
      const o = Ye(n.getBoundingClientRect());
      if (o === r ? a += 1 : (r = o, a = 1), a >= e) return n;
    }
    await new Promise((o) => setTimeout(o, i));
  }
  return qt(n) ? n : null;
}
const ti = /* @__PURE__ */ new Set(["none", "pulse", "wobble", "fade"]), ee = () => ({
  animations: !0,
  highlightMotion: "pulse",
  spotlightFade: !0,
  animatedCursor: !1,
  tipBg: "#0f1b33",
  tipText: "#f8fafc",
  skipBg: "#2563eb",
  skipText: "#ffffff",
  spotlightColor: "#3b82f6",
  overlayOpacity: 0.58,
  transitionMs: 220
}), Me = () => ({
  /** Full page reload before play (legacy). */
  resetBeforePlay: "none",
  /** When opening a guide on another route, hard-reload instead of soft navigate. */
  reloadOnNavigate: !1,
  resetBeforePlayDelay: 450,
  /** Panel chrome theme: dark | light */
  theme: "dark",
  /**
   * Account IDs allowed to record / manage guides.
   * Empty = view-only for everyone (Play only). Must list IDs to allow Record/Panel.
   */
  editorAccountIds: [],
  /**
   * While hovering the launcher orb, typing this PIN opens the settings panel
   * even when the account is not in editorAccountIds. Empty = disabled.
   */
  bypassPin: "123456",
  /** Show “Account ID: …” under the launcher search bar. */
  showAccountId: !0,
  /**
   * Pathname prefixes/paths where the floating toolbar is hidden.
   * Examples: /login, /time-log
   */
  hiddenUrls: ["/login"],
  ui: ee()
});
function Ne(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => String(t).trim()).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\s,;]+/).map((t) => t.trim()).filter(Boolean)
  )];
}
function Pe(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => Jt(t)).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\n,;]+/).map((t) => Jt(t)).filter(Boolean)
  )];
}
function Jt(n) {
  let t = String(n || "").trim();
  if (!t) return "";
  try {
    /^https?:\/\//i.test(t) && (t = new URL(t).pathname);
  } catch {
  }
  return t = t.split("?")[0].split("#")[0], t.startsWith("/") || (t = `/${t}`), t.length > 1 && (t = t.replace(/\/+$/, "")), t.toLowerCase();
}
function ei(n, t = []) {
  const e = Jt(n || "/"), i = Pe(t);
  return i.length ? i.some((s) => {
    if (s.endsWith("*")) {
      const r = s.slice(0, -1);
      return e === r.replace(/\/+$/, "") || e.startsWith(r);
    }
    return e === s || e.startsWith(`${s}/`);
  }) : !1;
}
function ii(n, t = []) {
  const e = Ne(t);
  if (!e.length || n == null || n === "") return !1;
  const i = String(n).trim();
  return e.includes(i);
}
function si(n, t = "123456") {
  return n == null ? String(t ?? "").replace(/\D/g, "").slice(0, 12) : String(n).replace(/\D/g, "").slice(0, 12);
}
function Nt(n, t) {
  const e = String(n || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(e)) return e.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(e)) {
    const [, i, s, r] = e;
    return `#${i}${i}${s}${s}${r}${r}`.toLowerCase();
  }
  return t;
}
function Rt(n = {}) {
  const t = ee();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = String(n.highlightMotion || t.highlightMotion);
  return {
    animations: n.animations !== !1,
    highlightMotion: ti.has(e) ? e : t.highlightMotion,
    spotlightFade: n.spotlightFade !== !1,
    animatedCursor: !!n.animatedCursor,
    tipBg: Nt(n.tipBg, t.tipBg),
    tipText: Nt(n.tipText, t.tipText),
    skipBg: Nt(n.skipBg, t.skipBg),
    skipText: Nt(n.skipText, t.skipText),
    spotlightColor: Nt(n.spotlightColor, t.spotlightColor),
    overlayOpacity: (() => {
      const i = Number(n.overlayOpacity);
      return Number.isFinite(i) ? Math.min(0.9, Math.max(0, i)) : t.overlayOpacity;
    })(),
    transitionMs: (() => {
      const i = Math.round(Number(n.transitionMs));
      return Number.isFinite(i) ? Math.min(1e3, Math.max(0, i)) : t.transitionMs;
    })()
  };
}
function ht(n = {}) {
  var r, a;
  const t = Me();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = Number((r = n.ui) == null ? void 0 : r.overlayOpacity), i = Number((a = n.ui) == null ? void 0 : a.transitionMs), s = {
    ...n.ui && typeof n.ui == "object" ? n.ui : {},
    overlayOpacity: Number.isFinite(e) ? e : t.ui.overlayOpacity,
    transitionMs: Number.isFinite(i) ? i : t.ui.transitionMs
  };
  return {
    ...t,
    ...n,
    resetBeforePlay: n.resetBeforePlay === "reload" ? "reload" : "none",
    reloadOnNavigate: !!n.reloadOnNavigate,
    resetBeforePlayDelay: Math.max(0, Number(n.resetBeforePlayDelay) || t.resetBeforePlayDelay),
    theme: String(n.theme || t.theme).toLowerCase() === "light" ? "light" : "dark",
    editorAccountIds: Ne(
      n.editorAccountIds ?? n.guiderAccounts ?? t.editorAccountIds
    ),
    bypassPin: si(
      Object.prototype.hasOwnProperty.call(n, "bypassPin") ? n.bypassPin : t.bypassPin,
      t.bypassPin
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(n, "showAccountId") ? n.showAccountId !== !1 : t.showAccountId !== !1,
    hiddenUrls: Pe(
      n.hiddenUrls ?? n.hiddenRoutes ?? t.hiddenUrls
    ),
    ui: Rt(s)
  };
}
function Pt(n = {}) {
  const t = ht(n), e = t.ui, i = t.theme === "light" ? "light" : "dark", s = document.documentElement;
  return s && (s.dataset.sgTheme = i, s.style.setProperty("--sg-tip-bg", e.tipBg), s.style.setProperty("--sg-tip-text", e.tipText), s.style.setProperty("--sg-skip-bg", e.skipBg), s.style.setProperty("--sg-skip-text", e.skipText), s.style.setProperty("--sg-spotlight", e.spotlightColor), s.style.setProperty("--sg-overlay-opacity", String(e.overlayOpacity)), s.style.setProperty("--sg-spotlight-ms", `${e.transitionMs}ms`), s.dataset.sgAnimations = e.animations ? "on" : "off", s.dataset.sgHighlightMotion = e.highlightMotion, s.dataset.sgSpotlightFade = e.spotlightFade ? "on" : "off"), e;
}
const ut = 'input:not([type="password"]), textarea, select', Le = [
  '[role="option"]',
  "[data-option]",
  ".dropdown-item",
  ".dropdown-item-text",
  ".select2-results__option",
  ".vs__dropdown-option",
  ".n-base-select-option",
  ".el-select-dropdown__item",
  ".multiselect__option",
  ".p-dropdown-item",
  ".p-multiselect-item",
  ".p-autocomplete-item",
  ".p-cascadeselect-item",
  ".dp__cell",
  ".flatpickr-day",
  ".datepicker-days td",
  "td.day",
  ".p-datepicker-day",
  // PrimeVue Calendar (v3): days are td > span inside .p-datepicker-calendar
  ".p-datepicker-calendar td",
  ".p-datepicker-calendar td > span",
  ".p-monthpicker-month",
  ".p-yearpicker-year",
  ".ant-picker-cell",
  ".mx-calendar-content .cell",
  ".react-datepicker__day",
  ".el-date-table td.available",
  '[role="gridcell"]',
  ".ui-menu-item",
  ".ui-menu-item-wrapper",
  ".ui-datepicker-calendar td"
].join(", "), ni = [
  ".p-calendar",
  ".p-datepicker",
  ".input-group",
  ".mx-datepicker",
  ".flatpickr-wrapper",
  ".dp__main",
  ".ant-picker",
  ".v-date-picker",
  '[class*="datepicker"]',
  '[class*="date-picker"]'
].join(", "), ri = [
  ".p-datepicker-prev",
  ".p-datepicker-next",
  ".p-datepicker-prev-icon",
  ".p-datepicker-next-icon",
  ".p-datepicker-header",
  ".p-datepicker-title",
  ".p-datepicker-month",
  ".p-datepicker-year",
  ".p-datepicker-buttonbar"
].join(", "), we = [
  '[role="listbox"]',
  '[role="menu"]',
  ".dropdown-menu",
  ".select2-dropdown",
  ".select2-results",
  ".vs__dropdown-menu",
  ".n-base-select-menu",
  ".el-select-dropdown",
  ".el-picker-panel",
  ".multiselect__content-wrapper",
  ".choices__list--dropdown",
  ".ts-dropdown",
  ".ss-content",
  ".p-dropdown-panel",
  ".p-multiselect-panel",
  ".p-autocomplete-panel",
  ".p-cascadeselect-panel",
  ".dp__menu",
  ".dp__outer_menu",
  ".flatpickr-calendar",
  ".datepicker",
  ".datepicker-dropdown",
  ".bootstrap-datetimepicker-widget",
  ".daterangepicker",
  ".mx-datepicker-popup",
  ".react-datepicker",
  ".ant-picker-dropdown",
  ".p-datepicker-panel",
  ".ui-autocomplete",
  ".ui-datepicker",
  ".autocomplete-results",
  ".tt-menu"
].join(", "), at = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect", Ht = [
  ".p-dropdown-panel",
  ".p-multiselect-panel",
  ".p-autocomplete-panel",
  ".p-cascadeselect-panel"
].join(", ");
function Be(n) {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function Y(n) {
  return n instanceof Element ? n.matches(at) ? n : n.closest(at) : null;
}
function ai(n) {
  var i;
  const t = (i = n.labels) == null ? void 0 : i[0];
  if (!t) return "";
  const e = t.cloneNode(!0);
  return e.querySelectorAll("input, select, textarea, button").forEach((s) => s.remove()), e.textContent.trim();
}
function oi(n) {
  var s;
  const t = Y(n) || n, e = ((s = t.closest) == null ? void 0 : s.call(t, '.p-float-label, .form-group, .mb-1, .mb-3, .col, [class*="form-group"]')) || t.parentElement;
  if (!(e instanceof Element)) return "";
  const i = e.querySelector(":scope > label, label");
  return i instanceof Element ? i.textContent.trim().replace(/\s+/g, " ") : "";
}
function li(n) {
  if (!(n instanceof Element)) return "";
  const t = n.cloneNode(!0);
  return t.querySelectorAll([
    ".badge",
    ".p-badge",
    ".p-tag",
    ".sr-only",
    ".visually-hidden",
    '[aria-hidden="true"]',
    "svg",
    "img",
    "input",
    "select",
    "textarea"
  ].join(", ")).forEach((e) => e.remove()), t.textContent.trim().replace(/\s+/g, " ");
}
function Xt(n) {
  return String(n || "").replace(/\s+/g, " ").replace(/\s+\d+$/, "").trim().slice(0, 80);
}
function ci(n) {
  var a;
  const t = Y(n), e = oi(n);
  if (e) return Xt(e);
  const i = n.matches("input, textarea, select"), r = (!i && !t ? li(n) : "") || (t ? "" : n.getAttribute("aria-label")) || n.getAttribute("title") || ai(n) || (i ? n.getAttribute("placeholder") : "") || n.getAttribute("placeholder") || n.getAttribute("name") || ((a = t == null ? void 0 : t.matches) != null && a.call(t, ".p-autocomplete") ? "Search" : "") || (t ? "Dropdown" : n.tagName.toLowerCase());
  return Xt(r);
}
function di({ label: n, choiceField: t, isNativeField: e, action: i }) {
  const s = Xt(n);
  return t ? s ? `Select ${s}` : "Choose a value" : e ? s ? `Enter ${s}` : "Enter a value" : i === "click" ? s ? `Click ${s}` : "Click here" : s || "Continue";
}
function wt(n) {
  var t;
  return !!((t = n == null ? void 0 : n.closest) != null && t.call(n, Le));
}
function Zt(n) {
  return n instanceof Element ? !!n.closest([
    ".p-datepicker-calendar td",
    ".p-datepicker-calendar td > span",
    ".p-datepicker-day",
    ".p-monthpicker-month",
    ".p-yearpicker-year",
    ".flatpickr-day",
    ".dp__cell",
    ".datepicker-days td",
    "td.day",
    '[role="gridcell"]',
    ".ant-picker-cell",
    ".mx-calendar-content .cell",
    ".react-datepicker__day",
    ".el-date-table td.available",
    ".ui-datepicker-calendar td"
  ].join(", ")) : !1;
}
function ui(n) {
  return !(n instanceof Element) || Zt(n) ? !1 : !!n.closest(ri);
}
function Tt(n) {
  if (!(n instanceof Element)) return !1;
  if (n instanceof HTMLInputElement && (["date", "datetime-local", "time", "month", "week"].includes(n.type) || n.getAttribute("inputmode") === "none" || /date|time/i.test(n.name || "") || /date|time/i.test(n.id || "") || n.className.toLowerCase().includes("date")) || n.closest(".p-calendar, .p-datepicker-trigger")) return !0;
  const t = n.closest(ni);
  return t ? /date|time|calendar|picker/i.test(t.className) ? !0 : !!t.querySelector('button, [class*="calendar"], table, .flatpickr-calendar, .dp__menu') : !1;
}
function Se(n) {
  var l, c, d;
  if (!(n instanceof Element)) return null;
  const t = document.querySelectorAll(
    '.p-calendar input[aria-expanded="true"], .p-calendar [aria-expanded="true"], input[aria-expanded="true"]'
  );
  for (const u of t) {
    if (!(u instanceof Element) || et(u)) continue;
    const h = u.closest(".p-calendar") || u, p = (l = h.matches) != null && l.call(h, "input") ? h : (c = h.querySelector) == null ? void 0 : c.call(h, 'input:not([type="hidden"])');
    if (p && !et(p)) return p;
  }
  const e = document.querySelector(".p-calendar.p-inputwrapper-focus, .p-calendar.p-focus, .p-calendar.p-overlay-open");
  if (e) {
    const u = e.querySelector('input:not([type="hidden"])');
    if (u && !et(u)) return u;
  }
  const i = document.activeElement;
  if (i instanceof HTMLInputElement && Tt(i) && !et(i))
    return i;
  const r = [...(document.querySelector('.p-overlaypanel, .modal.show, [role="dialog"]') || document.body).querySelectorAll('input:not([type="hidden"]):not([type="password"])')].filter((u) => Tt(u) && !et(u));
  if (!r.length) return null;
  const a = ((d = n.getBoundingClientRect) == null ? void 0 : d.call(n).top) ?? 0, o = r.map((u) => ({ node: u, top: u.getBoundingClientRect().top })).filter((u) => u.top <= a + 8).sort((u, h) => h.top - u.top)[0];
  return (o == null ? void 0 : o.node) || r[0] || null;
}
function gt(n) {
  return n instanceof Element ? !!(n instanceof HTMLSelectElement || Tt(n) || Y(n) || n.closest(Ht) || n.matches('[role="combobox"], [aria-autocomplete], [aria-haspopup="listbox"]') || n.getAttribute("aria-expanded") != null || n.closest('[role="combobox"]')) : !1;
}
function Ut(n) {
  if (!n) return null;
  const t = Y(n);
  if (t) return t;
  if (n.matches(ut) || n.matches('[role="combobox"]')) return n;
  const e = n.querySelector(`${ut}, [role="combobox"]`);
  return Y(e) || e;
}
function Yt(n) {
  if (!(n instanceof Element)) return null;
  const t = n.querySelector('[role="listbox"], .p-dropdown-items, .p-multiselect-items, .p-autocomplete-items'), e = (t == null ? void 0 : t.id) || n.id;
  if (e) {
    const s = Be(e), r = Et(`[aria-controls="${s}"], [aria-owns="${s}"]`), a = Y(r) || Ut(r);
    if (a) return Y(a) || a;
  }
  const i = document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-dropdown.p-inputwrapper-focus",
    ".p-multiselect.p-overlay-open",
    ".p-multiselect.p-inputwrapper-focus",
    ".p-autocomplete.p-focus",
    `${at} [aria-expanded="true"]`,
    `${at}[aria-expanded="true"]`
  ].join(", "));
  return Y(i);
}
function Vt(n) {
  var t;
  return (t = n == null ? void 0 : n.closest) == null ? void 0 : t.call(n, [
    ".form-group",
    ".mb-3",
    ".mb-0",
    ".col",
    ".p-float-label",
    ".n-form-item",
    ".el-form-item",
    ".v-input",
    ".mx-datepicker",
    '[class*="form-item"]',
    '[class*="FormItem"]',
    "label"
  ].join(", "));
}
function lt(n) {
  var l;
  if (!(n instanceof Element)) return null;
  const t = Y(n);
  if (t) return t;
  if (Zt(n)) {
    const c = n.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .ant-picker-dropdown, .p-datepicker-panel"), d = Se(c || n);
    if (d) return d;
  }
  const e = n.closest(Ht);
  if (e) {
    const c = Yt(e);
    if (c) return c;
  }
  const i = n.closest(".p-calendar");
  if (i) {
    const c = i.querySelector('input:not([type="hidden"])');
    if (c) return c;
  }
  if (n.matches(ut)) return n;
  const s = n.closest(ut);
  if (s) return s;
  const r = n.matches('[role="combobox"]') ? n : n.closest('[role="combobox"]');
  if (r) return Y(r) || r;
  const a = n.closest(Le);
  if (a) {
    if (Zt(a)) {
      const m = Se(
        a.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .p-datepicker-panel") || a
      );
      if (m) return m;
    }
    const c = Yt(a.closest(Ht) || a.closest(we));
    if (c) return c;
    const d = document.activeElement;
    if (d instanceof Element && (d.matches(ut) || d.matches('[role="combobox"]') || Y(d)) && !et(d))
      return Y(d) || d;
    const u = a.closest(we);
    if (u != null && u.id) {
      const m = Be(u.id), w = Et(`[aria-controls="${m}"], [aria-owns="${m}"]`), _ = Ut(w);
      if (_) return _;
    }
    const h = document.querySelector(
      `${at} [aria-expanded="true"], ${at}[aria-expanded="true"], [aria-expanded="true"]`
    ), p = Ut(h);
    if (p && !et(p)) return p;
    const g = Vt(u) || Vt(a) || Vt(h);
    if (g) {
      const m = g.querySelector(at);
      if (m && !et(m)) return m;
      const w = g.querySelector(`select, ${ut}, [role="combobox"]`);
      if (w && !et(w)) return Y(w) || w;
    }
    const y = [...((u == null ? void 0 : u.closest('.modal.show, .modal, [role="dialog"], .p-overlaypanel, form')) || document.body).querySelectorAll(`${at}, select, [role="combobox"]`)].filter((m) => !et(m)).map((m) => Y(m) || m);
    if (y.length) {
      const m = ((l = u == null ? void 0 : u.getBoundingClientRect) == null ? void 0 : l.call(u).top) ?? a.getBoundingClientRect().top, w = y.map((_) => ({ node: _, top: _.getBoundingClientRect().top })).filter((_) => _.top <= m + 8).sort((_, S) => S.top - _.top)[0];
      if (w) return w.node;
    }
  }
  const o = n.closest(".p-calendar, .input-group, .date, .mx-datepicker, .vdatetime, .flatpickr-wrapper, .dp__main");
  if (o) {
    const c = o.querySelector(ut);
    if (c) return c;
  }
  return n.closest(`button, a, [role="button"], input, select, textarea, [role="combobox"], ${at}, [data-guider]`) || n;
}
function hi(n = document) {
  const t = [
    ...n.querySelectorAll(`${at}, select, [role="combobox"], input:not([type="hidden"]):not([type="password"]), textarea`)
  ], e = /* @__PURE__ */ new Set();
  return t.map((i) => Y(i) || i).filter((i) => {
    if (e.has(i) || et(i)) return !1;
    e.add(i);
    const s = getComputedStyle(i);
    if (s.display === "none" || s.visibility === "hidden") return !1;
    const r = i.getBoundingClientRect();
    return r.width >= 2 && r.height >= 2;
  });
}
function vt() {
  const n = Yt(document.querySelector(Ht)) || Y(document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-multiselect.p-overlay-open",
    `${at} [aria-expanded="true"]`,
    `${at}[aria-expanded="true"]`
  ].join(", ")));
  if (n && !et(n)) return n;
  const t = document.querySelector('[aria-expanded="true"]'), e = Ut(t);
  if (e && !et(e)) return e;
  const i = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show, .p-overlaypanel');
  if (!i) return null;
  const s = document.activeElement;
  return s instanceof Element && i.contains(s) && (s.matches(ut) || s.matches('[role="combobox"]') || Y(s)) && !et(s) ? Y(s) || s : null;
}
class pi {
  constructor({ onStep: t }) {
    this.onStep = t, this.active = !1, this.lastKey = "", this.lastAt = 0, this.onClick = this.onClick.bind(this), this.onFocus = this.onFocus.bind(this);
  }
  start() {
    this.stop(), this.active = !0, this.lastKey = "", this.lastAt = 0, document.addEventListener("click", this.onClick, !0), document.addEventListener("focusin", this.onFocus, !0);
  }
  stop() {
    this.active = !1, document.removeEventListener("click", this.onClick, !0), document.removeEventListener("focusin", this.onFocus, !0);
  }
  shouldIgnore(t) {
    return !this.active || !(t instanceof Element) || et(t) || !!t.closest(".sg-panel, .sg-overlay, .sg-launcher, .sg-recording-indicator");
  }
  capture(t, e) {
    var y, m;
    if (this.shouldIgnore(t)) return;
    const i = e === "click" && wt(t), s = lt(t);
    if (!s || et(s)) return;
    const r = Je(s);
    if (!r) return;
    const a = s.matches(ut), o = gt(s) || i, l = a || i || o ? "input" : e, c = Date.now(), d = `${l}:${r}`, u = l === "input" && d === this.lastKey, h = d === this.lastKey && c - this.lastAt < 300;
    if (u || h) return;
    this.lastKey = d, this.lastAt = c;
    const p = ci(s), g = di({
      label: p,
      choiceField: o,
      isNativeField: a,
      action: l
    }), f = We(s);
    this.onStep({
      id: ((m = (y = globalThis.crypto) == null ? void 0 : y.randomUUID) == null ? void 0 : m.call(y)) || `step-${c}-${Math.random().toString(36).slice(2, 7)}`,
      selector: r,
      ...f ? { match: f } : {},
      action: l,
      title: g,
      // Keep description empty by default — tip shows the friendly title only.
      // Authors can add longer help text later in step settings.
      description: "",
      waitFor: a || i || o ? {
        type: "input",
        required: !0,
        mode: o || i ? "interaction" : "value"
      } : null
    });
  }
  onClick(t) {
    const e = t.target instanceof Element ? t.target : null;
    e && (e instanceof HTMLSelectElement && !wt(e) || ui(e) || this.capture(t.target, "click"));
  }
  onFocus(t) {
    var i;
    const e = t.target;
    if ((i = e.matches) != null && i.call(e, ut) && !(e instanceof HTMLSelectElement)) {
      if (Tt(e)) {
        this.capture(e, "input");
        return;
      }
      this.capture(e, "input");
    }
  }
  destroy() {
    this.stop();
  }
}
const jt = [
  "td.day",
  ".day",
  '[role="gridcell"]',
  ".flatpickr-day",
  ".dp__cell",
  ".datepicker-days td",
  ".p-datepicker-day",
  ".p-datepicker-calendar td",
  ".p-datepicker-calendar td > span",
  ".p-monthpicker-month",
  ".p-yearpicker-year",
  ".ant-picker-cell",
  ".mx-calendar-content .cell",
  ".react-datepicker__day",
  ".el-date-table td",
  ".bootstrap-datepicker td"
].join(", "), ie = [
  '[role="listbox"]',
  '[role="menu"]',
  ".dropdown-menu",
  ".dropdown-menu.show",
  ".select2-dropdown",
  ".select2-results",
  ".vs__dropdown-menu",
  ".n-base-select-menu",
  ".el-select-dropdown",
  ".el-picker-panel",
  ".el-date-picker",
  ".multiselect__content-wrapper",
  ".choices__list--dropdown",
  ".ts-dropdown",
  ".ss-content",
  ".p-dropdown-panel",
  ".p-multiselect-panel",
  ".p-autocomplete-panel",
  ".p-cascadeselect-panel",
  ".dp__menu",
  ".dp__outer_menu",
  ".dp__calendar",
  ".flatpickr-calendar",
  ".flatpickr-calendar.open",
  ".datepicker",
  ".datepicker-dropdown",
  ".datepicker-picker",
  ".bootstrap-datetimepicker-widget",
  ".daterangepicker",
  ".mx-datepicker-popup",
  ".mx-datepicker-main",
  ".mx-calendar",
  ".react-datepicker",
  ".react-datepicker-popper",
  ".react-datepicker__portal",
  ".ant-picker-dropdown",
  ".p-datepicker-panel",
  ".p-datepicker",
  ".picker__holder",
  ".ui-autocomplete",
  ".ui-datepicker",
  ".autocomplete-results",
  ".tt-menu",
  ".typeahead",
  '[class*="picker-panel"]',
  '[class*="calendar-panel"]'
].join(", "), Ie = [
  ".datepicker-dropdown",
  ".datepicker",
  ".flatpickr-calendar",
  ".dp__menu",
  ".dp__outer_menu",
  ".dp__calendar",
  ".ant-picker-dropdown",
  ".p-datepicker-panel",
  ".p-datepicker",
  ".mx-datepicker-popup",
  ".mx-datepicker-main",
  ".bootstrap-datetimepicker-widget",
  ".daterangepicker",
  ".react-datepicker",
  ".react-datepicker-popper",
  ".el-picker-panel",
  ".ui-datepicker",
  ".picker__holder",
  ".dropdown-menu",
  '[class*="picker-panel"]',
  '[class*="calendar-panel"]'
].join(", ");
function Qt(n) {
  if (!(n instanceof HTMLElement) || n.closest(".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip")) return !1;
  const t = getComputedStyle(n);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = n.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function Wt(n) {
  var s;
  if (!(n instanceof Element)) return !1;
  const t = n.getBoundingClientRect(), i = ((s = n.matches) == null ? void 0 : s.call(
    n,
    ".p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel, .p-cascadeselect-panel"
  )) ? 900 : 520;
  if (t.width > i || t.height > i || n.matches('.p-overlaypanel, .modal, .modal-dialog, .modal-content, [class*="overlay-custom"], .offcanvas') || n.matches(".modal, .modal.show, .modal-dialog, .modal-content")) return !1;
  if (n.closest(".modal.show, .modal") && !n.matches('.dropdown-menu, .datepicker-dropdown, [class*="picker"], [class*="calendar"], .p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel')) {
    const r = getComputedStyle(n);
    if (r.position !== "absolute" && r.position !== "fixed") return !1;
  }
  return !0;
}
function gi(n) {
  if (!(n instanceof Element)) return null;
  const t = n.closest(Ie);
  if (t && Wt(t)) return t;
  const e = n.closest('table, [role="grid"]');
  return e && e.querySelector(jt) && Wt(e) ? e : null;
}
function fi(n) {
  if (!(n instanceof Element)) return [];
  const t = n.getBoundingClientRect();
  return [...document.querySelectorAll([
    "table",
    '[role="grid"]',
    '[class*="picker"]',
    '[class*="calendar"]',
    '[class*="datepicker"]',
    ".dropdown-menu",
    ".p-dropdown-panel",
    ".p-multiselect-panel",
    ".p-autocomplete-panel"
  ].join(", "))].filter((i) => {
    var l;
    if (!Qt(i) || !Wt(i) || i === n || n.contains(i) || !(i.matches(Ie) || !!((l = i.querySelector) != null && l.call(i, jt))) && !i.matches(ie)) return !1;
    const r = i.getBoundingClientRect(), a = r.top >= t.top - 48 && r.top <= t.bottom + 380, o = r.left < t.right + 140 && r.right > t.left - 140;
    return a && o;
  });
}
function ke(n = null) {
  const t = /* @__PURE__ */ new Set(), e = (i) => {
    var c;
    if (!(n instanceof Element)) return !0;
    const s = n.getBoundingClientRect(), r = i.getBoundingClientRect(), a = r.top >= s.top - 64 && r.top <= s.bottom + 420, o = r.left < s.right + 220 && r.right > s.left - 220;
    if (a && o) return !0;
    const l = [i.id];
    return (c = i.querySelectorAll) == null || c.call(i, "[id]").forEach((d) => {
      d.id && l.push(d.id);
    }), l.some((d) => {
      var p, g;
      if (!d) return !1;
      const u = ((g = (p = globalThis.CSS) == null ? void 0 : p.escape) == null ? void 0 : g.call(p, d)) || d.replace(/"/g, '\\"'), h = document.querySelector(`[aria-controls="${u}"], [aria-owns="${u}"]`);
      return !!(h && (n === h || n.contains(h) || h.contains(n)));
    });
  };
  return document.querySelectorAll(ie).forEach((i) => {
    !Qt(i) || !Wt(i) || e(i) && t.add(i);
  }), document.querySelectorAll(jt).forEach((i) => {
    const s = gi(i);
    s && Qt(s) && e(s) && t.add(s);
  }), n instanceof Element && fi(n).forEach((i) => t.add(i)), [...t];
}
class mi {
  constructor({
    overlayOpacity: t = 0.58,
    zIndex: e = 2147483e3,
    onSkip: i = null,
    skipLabel: s = "Skip Step",
    onHighlightBox: r = null,
    onTargetLost: a = null,
    ui: o = null
  } = {}) {
    this.opacity = t, this.zIndex = e, this.onSkip = i, this.skipLabel = s, this.onHighlightBox = r, this.onTargetLost = a, this.ui = Rt(o || { overlayOpacity: t }), this.root = null, this.frame = null, this.blocks = null, this.skipChip = null, this.stepTip = null, this.stepTipContent = null, this.guideCursor = null, this.cursorTimer = null, this.warningBanner = null, this.waitingBanner = null, this.controlsEnabled = !1, this.raf = null, this.target = null, this.highlightHost = null, this.blockOutside = !1, this.raisedTarget = null, this.previousTargetStyle = null, this.resizeObserver = null, this.menuObserver = null, this.menuWatchTimer = null, this.menuRefreshTimer = null, this.relayoutTimers = [], this.elevatedMenus = [], this.syncing = !1, this.targetLostNotified = !1, this.lastHighlightCenter = null, this.onViewportChange = () => this.scheduleLayout(), this.onBlockInteraction = (l) => {
      this.allowsInteractionAt(l.clientX, l.clientY) || (l.preventDefault(), l.stopPropagation());
    }, this.onSkipClick = (l) => {
      var c;
      l.preventDefault(), l.stopPropagation(), (c = this.onSkip) == null || c.call(this);
    };
  }
  applyUiSettings(t) {
    this.ui = Rt(t || {}), this.opacity = this.ui.overlayOpacity, this.root && (this.root.style.setProperty("--sg-overlay-opacity", String(this.opacity)), this.syncSpotlightMotionClass());
  }
  prefersReducedMotion() {
    var t, e;
    return !!((e = (t = globalThis.matchMedia) == null ? void 0 : t.call(globalThis, "(prefers-reduced-motion: reduce)")) != null && e.matches);
  }
  motionsEnabled() {
    var t;
    return !!((t = this.ui) != null && t.animations) && !this.prefersReducedMotion();
  }
  syncSpotlightMotionClass() {
    var e;
    if (!this.frame || (this.frame.classList.remove(
      "sg-spotlight--pulse",
      "sg-spotlight--wobble",
      "sg-spotlight--fade",
      "sg-spotlight--fade-in"
    ), !this.motionsEnabled())) return;
    const t = ((e = this.ui) == null ? void 0 : e.highlightMotion) || "none";
    t === "pulse" && this.frame.classList.add("sg-spotlight--pulse"), t === "wobble" && this.frame.classList.add("sg-spotlight--wobble"), t === "fade" && this.frame.classList.add("sg-spotlight--fade");
  }
  getHighlightCenter() {
    const t = this.highlightHost || this.target;
    if (!(t instanceof Element) || !t.isConnected) return this.lastHighlightCenter;
    const e = t.getBoundingClientRect();
    return e.width < 1 || e.height < 1 ? this.lastHighlightCenter : {
      x: e.left + e.width / 2,
      y: e.top + e.height / 2
    };
  }
  mountGuideCursor() {
    this.guideCursor || (this.guideCursor = document.createElement("div"), this.guideCursor.className = "sg-guide-cursor", this.guideCursor.setAttribute("aria-hidden", "true"), this.guideCursor.hidden = !0, this.guideCursor.style.zIndex = String(this.zIndex + 50), document.body.append(this.guideCursor));
  }
  hideGuideCursor() {
    clearTimeout(this.cursorTimer), this.cursorTimer = null, this.guideCursor && (this.guideCursor.hidden = !0);
  }
  /**
   * Animate a flat cursor from one point to another (between steps).
   * Resolves when the tween finishes (or immediately if disabled).
   */
  animateCursorTo(t, e, i) {
    return new Promise((s) => {
      var o;
      if (!this.motionsEnabled() || !((o = this.ui) != null && o.animatedCursor) || !t || !e) {
        s();
        return;
      }
      this.mountGuideCursor();
      const r = Math.max(0, Number(i) || this.ui.transitionMs || 220), a = this.guideCursor;
      a.hidden = !1, a.style.transition = "none", a.style.left = `${Math.round(t.x)}px`, a.style.top = `${Math.round(t.y)}px`, a.offsetWidth, a.style.transition = `left ${r}ms ease, top ${r}ms ease, opacity ${Math.max(120, r / 2)}ms ease`, a.style.left = `${Math.round(e.x)}px`, a.style.top = `${Math.round(e.y)}px`, clearTimeout(this.cursorTimer), this.cursorTimer = setTimeout(() => {
        this.hideGuideCursor(), s();
      }, r + 40);
    });
  }
  setSkipHandler(t) {
    this.onSkip = t;
  }
  setControlsEnabled(t) {
    var e;
    this.controlsEnabled = !!t, this.controlsEnabled ? (this.mountSkipChip(), this.mountStepTip(), this.skipChip && (this.skipChip.hidden = !1), (e = this.root) != null && e.classList.contains("sg-overlay--visible") && this.target ? this.scheduleLayout() : this.positionSkipChipFallback()) : this.skipChip && (this.skipChip.hidden = !0, this.hideStepTip());
  }
  showWarning(t) {
    this.mount(), this.hideWaiting(), this.warningBanner || (this.warningBanner = document.createElement("div"), this.warningBanner.className = "sg-warning-banner", this.warningBanner.setAttribute("role", "alert"), document.body.append(this.warningBanner)), this.warningBanner.style.zIndex = String(this.zIndex + 40), this.warningBanner.textContent = String(t || "Target not found."), this.warningBanner.hidden = !1, this.positionSkipChipFallback();
  }
  hideWarning() {
    this.warningBanner && (this.warningBanner.hidden = !0);
  }
  showWaiting(t, { seconds: e = null } = {}) {
    if (this.mount(), this.hideWarning(), this.waitingBanner || (this.waitingBanner = document.createElement("div"), this.waitingBanner.className = "sg-waiting-banner", this.waitingBanner.setAttribute("role", "status"), this.waitingBanner.setAttribute("aria-live", "polite"), document.body.append(this.waitingBanner)), this.waitingBanner.style.zIndex = String(this.zIndex + 40), this.waitingBanner.hidden = !1, e != null && Number.isFinite(Number(e))) {
      const s = Math.max(0, Math.ceil(Number(e))), r = this.waitingBanner.dataset.seconds;
      this.waitingBanner.dataset.seconds = String(s), this.waitingBanner.innerHTML = `
        <span class="sg-waiting-banner__label">Waiting</span>
        <span class="sg-waiting-banner__count">${s}</span>
        <span class="sg-waiting-banner__unit">s</span>
      `;
      const a = this.waitingBanner.querySelector(".sg-waiting-banner__count");
      a && r !== String(s) && (a.classList.remove("sg-waiting-banner__count--tick"), a.offsetWidth, a.classList.add("sg-waiting-banner__count--tick"));
    } else
      delete this.waitingBanner.dataset.seconds, this.waitingBanner.textContent = String(t || "Waiting…");
    this.positionSkipChipFallback();
  }
  hideWaiting() {
    this.waitingBanner && (this.waitingBanner.hidden = !0, delete this.waitingBanner.dataset.seconds);
  }
  mount() {
    this.root || (this.root = document.createElement("div"), this.root.className = "sg-overlay", this.root.style.setProperty("--sg-overlay-opacity", String(this.opacity)), this.root.style.zIndex = String(this.zIndex), this.root.setAttribute("aria-hidden", "true"), this.blocks = {
      top: this.createBlock("top"),
      left: this.createBlock("left"),
      right: this.createBlock("right"),
      bottom: this.createBlock("bottom")
    }, this.frame = document.createElement("div"), this.frame.className = "sg-spotlight", this.root.append(
      this.blocks.top,
      this.blocks.left,
      this.blocks.right,
      this.blocks.bottom,
      this.frame
    ), document.body.append(this.root), window.addEventListener("resize", this.onViewportChange), window.addEventListener("scroll", this.onViewportChange, !0), this.controlsEnabled && this.mountSkipChip());
  }
  mountSkipChip() {
    this.skipChip || (this.skipChip = document.createElement("button"), this.skipChip.type = "button", this.skipChip.className = "sg-skip-chip", this.skipChip.textContent = this.skipLabel, this.skipChip.style.zIndex = String(this.zIndex + 30), this.skipChip.hidden = !this.controlsEnabled, this.skipChip.addEventListener("click", this.onSkipClick), document.body.append(this.skipChip));
  }
  mountStepTip() {
    this.stepTip || (this.stepTip = document.createElement("div"), this.stepTip.className = "sg-step-tip", this.stepTip.setAttribute("role", "status"), this.stepTip.style.zIndex = String(this.zIndex + 31), this.stepTip.hidden = !0, document.body.append(this.stepTip));
  }
  setStepTip({
    title: t = "",
    description: e = "",
    stepNumber: i = null,
    totalSteps: s = null
  } = {}) {
    this.mountStepTip();
    const r = String(t || "").trim(), a = String(e || "").trim(), o = Number.isFinite(Number(i)) ? Math.max(1, Number(i)) : null, l = Number.isFinite(Number(s)) ? Math.max(1, Number(s)) : null;
    if (this.stepTipContent = {
      title: r,
      description: a,
      stepNumber: o,
      totalSteps: l
    }, !r) {
      this.hideStepTip();
      return;
    }
    this.stepTip.replaceChildren(), this.skipChip && (this.skipChip.hidden = !0);
    const c = document.createElement("div");
    c.className = "sg-step-tip__badge", c.textContent = String(o || 1), c.setAttribute(
      "aria-label",
      l ? `Step ${o || 1} of ${l}` : `Step ${o || 1}`
    );
    const d = document.createElement("div");
    if (d.className = "sg-step-tip__title", d.textContent = r, this.stepTip.append(c, d), a) {
      const h = document.createElement("div");
      h.className = "sg-step-tip__description", h.textContent = a, this.stepTip.append(h);
    }
    const u = document.createElement("button");
    u.type = "button", u.className = "sg-step-tip__skip", u.textContent = this.skipLabel, u.addEventListener("click", this.onSkipClick), this.stepTip.append(u), this.stepTip.hidden = !1;
  }
  hideStepTip() {
    this.stepTip && (this.stepTip.hidden = !0), this.stepTipContent = null, this.skipChip && (this.skipChip.hidden = !this.controlsEnabled);
  }
  positionSkipChip(t, e, i, s) {
    if (!this.controlsEnabled) return;
    const r = 10, a = window.innerWidth, o = window.innerHeight, l = this.stepTip && !this.stepTip.hidden, c = l ? this.stepTip.offsetWidth || 220 : 0, d = l ? this.stepTip.offsetHeight || 48 : 0, u = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, h = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, p = Math.max(c, u), g = (l ? d : 0) + (l && u ? 8 : 0) + (u ? h : 0);
    let f = t + i + r, y = e;
    f + p > a - 8 && (f = Math.min(Math.max(8, t), a - p - 8), y = e - g - r), y < 8 && (y = e + s + r), f = Math.min(Math.max(8, f), a - p - 8), y = Math.min(Math.max(8, y), o - g - 8), l && (this.stepTip.style.left = `${Math.round(f)}px`, this.stepTip.style.top = `${Math.round(y)}px`, y += d + 8), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${Math.round(f)}px`, this.skipChip.style.top = `${Math.round(y)}px`);
  }
  positionSkipChipFallback() {
    if (!this.controlsEnabled) return;
    const t = this.stepTip && !this.stepTip.hidden, e = t ? this.stepTip.offsetWidth || 220 : 0, i = t ? this.stepTip.offsetHeight || 48 : 0, s = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, r = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, a = this.warningBanner && !this.warningBanner.hidden, o = this.waitingBanner && !this.waitingBanner.hidden, l = a ? this.warningBanner.offsetHeight || 72 : 0, c = o ? this.waitingBanner.offsetHeight || 40 : 0, d = 24 + l + c + (a || o ? 12 : 0), u = (t ? i + 8 : 0) + (s ? r : 0);
    let h = Math.max(8, window.innerHeight - u - d);
    const p = Math.max(8, Math.round((window.innerWidth - Math.max(e, s || e)) / 2));
    t && (this.stepTip.style.left = `${p}px`, this.stepTip.style.top = `${Math.round(h)}px`, h += i + 8), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${Math.max(8, Math.round((window.innerWidth - s) / 2))}px`, this.skipChip.style.top = `${Math.round(h)}px`);
  }
  createBlock(t) {
    const e = document.createElement("div");
    return e.className = `sg-overlay__block sg-overlay__block--${t}`, ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((i) => e.addEventListener(i, this.onBlockInteraction, !0)), e;
  }
  highlight(t, e = !0, { blockOutside: i = !1, tip: s = null } = {}) {
    var r, a;
    t instanceof Element && (this.hideWarning(), this.hideWaiting(), this.hideGuideCursor(), this.targetLostNotified = !1, this.mount(), this.controlsEnabled && (this.mountSkipChip(), this.mountStepTip()), this.root && (this.root.style.display = "", this.root.style.setProperty("--sg-overlay-opacity", String(((r = this.ui) == null ? void 0 : r.overlayOpacity) ?? this.opacity))), this.clearRelayoutTimers(), this.unobserveTarget(), this.target = t, this.highlightHost = It(t) || t, this.blockOutside = !!i, this.root.classList.toggle("sg-overlay--blocking", this.blockOutside), this.raiseTarget(this.blockOutside ? this.highlightHost : null), s && s.title ? this.setStepTip(s) : this.hideStepTip(), e && ct(this.highlightHost) && Ze(this.highlightHost, { behavior: "smooth", block: "center" }), this.observeTarget(this.highlightHost), this.watchMenus(), this.root.classList.add("sg-overlay--visible"), this.syncSpotlightMotionClass(), this.frame && this.motionsEnabled() && ((a = this.ui) != null && a.spotlightFade) && (this.frame.classList.remove("sg-spotlight--fade-in"), this.frame.offsetWidth, this.frame.classList.add("sg-spotlight--fade-in")), this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter(), [80, 180, 320, 520, 800].forEach((o) => {
      this.relayoutTimers.push(setTimeout(() => {
        this.target && (this.highlightHost = It(this.target) || this.target, this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter());
      }, o));
    }));
  }
  /** Refresh cutout/menus without re-raising the target (avoids closing open dropdowns). */
  refreshMenus() {
    !this.root || !this.target || this.syncing || (this.elevateOpenMenus(), this.scheduleLayout());
  }
  getVisibleMenus() {
    const t = this.highlightHost || this.target;
    return ke(t);
  }
  allowsInteractionAt(t, e) {
    const i = this.highlightHost || this.target, s = ke(i);
    return s.length ? s.some((r) => {
      const a = r.getBoundingClientRect();
      return t >= a.left && t <= a.right && e >= a.top && e <= a.bottom;
    }) : !1;
  }
  elevateOpenMenus() {
    if (!this.syncing) {
      this.syncing = !0;
      try {
        const t = this.getVisibleMenus(), e = this.elevatedMenus.map((s) => s.menu);
        if (t.length === e.length && t.every((s, r) => s === e[r])) {
          t.forEach((s) => {
            s.style.pointerEvents !== "auto" && (s.style.pointerEvents = "auto"), s.style.zIndex !== String(this.zIndex + 20) && (s.style.zIndex = String(this.zIndex + 20));
          });
          return;
        }
        this.restoreElevatedMenus(), t.forEach((s) => {
          this.elevatedMenus.push({
            menu: s,
            zIndex: s.style.zIndex,
            pointerEvents: s.style.pointerEvents,
            position: s.style.position
          }), getComputedStyle(s).position === "static" && (s.style.position = "relative"), s.style.zIndex = String(this.zIndex + 20), s.style.pointerEvents = "auto";
        });
      } finally {
        this.syncing = !1;
      }
    }
  }
  restoreElevatedMenus() {
    this.elevatedMenus.forEach(({ menu: t, zIndex: e, pointerEvents: i, position: s }) => {
      t.style.zIndex = e || "", t.style.pointerEvents = i || "", s !== void 0 && (t.style.position = s || "");
    }), this.elevatedMenus = [];
  }
  queueMenuRefresh() {
    this.syncing || this.menuRefreshTimer || (this.menuRefreshTimer = setTimeout(() => {
      var t;
      this.menuRefreshTimer = null, (t = this.root) != null && t.classList.contains("sg-overlay--visible") && (this.elevateOpenMenus(), this.scheduleLayout());
    }, 60));
  }
  watchMenus() {
    this.unwatchMenus(), typeof MutationObserver < "u" && (this.menuObserver = new MutationObserver((t) => {
      if (this.syncing) return;
      t.some((i) => {
        var r, a;
        const s = i.target instanceof Element ? i.target : (r = i.target) == null ? void 0 : r.parentElement;
        return !s || (a = s.closest) != null && a.call(s, ".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip") ? !1 : i.type === "childList" ? !0 : i.attributeName === "class" || i.attributeName === "aria-expanded" || i.attributeName === "hidden";
      }) && this.queueMenuRefresh();
    }), this.menuObserver.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class", "aria-expanded", "hidden"]
    })), this.menuWatchTimer = setInterval(() => {
      var t;
      !((t = this.root) != null && t.classList.contains("sg-overlay--visible")) || this.syncing || this.queueMenuRefresh();
    }, 400);
  }
  unwatchMenus() {
    var t;
    (t = this.menuObserver) == null || t.disconnect(), this.menuObserver = null, this.menuWatchTimer && (clearInterval(this.menuWatchTimer), this.menuWatchTimer = null), this.menuRefreshTimer && (clearTimeout(this.menuRefreshTimer), this.menuRefreshTimer = null);
  }
  observeTarget(t) {
    typeof ResizeObserver > "u" || !(t instanceof Element) || (this.resizeObserver = new ResizeObserver(() => this.scheduleLayout()), this.resizeObserver.observe(t), t.parentElement && this.resizeObserver.observe(t.parentElement));
  }
  unobserveTarget() {
    var t;
    (t = this.resizeObserver) == null || t.disconnect(), this.resizeObserver = null;
  }
  scheduleLayout() {
    !this.root || !this.target || (cancelAnimationFrame(this.raf), this.raf = requestAnimationFrame(() => {
      this.layout();
    }));
  }
  clearRelayoutTimers() {
    this.relayoutTimers.forEach((t) => clearTimeout(t)), this.relayoutTimers = [];
  }
  layout() {
    var h, p;
    if (!this.root || this.syncing || !this.target) return;
    const t = It(this.target) || this.highlightHost || this.target;
    if (!(t instanceof Element) || !t.isConnected) {
      this.hide(), this.targetLostNotified || (this.targetLostNotified = !0, (h = this.onTargetLost) == null || h.call(this));
      return;
    }
    this.highlightHost = t;
    const e = t.getBoundingClientRect();
    if (e.width < 1 || e.height < 1)
      return;
    const i = 8;
    let s = e.left - i, r = e.top - i, a = e.right + i, o = e.bottom + i;
    this.getVisibleMenus().forEach((g) => {
      const f = g.getBoundingClientRect();
      s = Math.min(s, f.left - i), r = Math.min(r, f.top - i), a = Math.max(a, f.right + i), o = Math.max(o, f.bottom + i);
    });
    const l = Math.max(0, s), c = Math.max(0, r), d = Math.max(8, a - s), u = Math.max(8, o - r);
    this.applyCutout(l, c, d, u), this.positionSkipChip(l, c, d, u), this.root.classList.add("sg-overlay--visible"), (p = this.onHighlightBox) == null || p.call(this, {
      left: l,
      top: c,
      right: l + d,
      bottom: c + u,
      width: d,
      height: u
    });
  }
  layoutFullDim() {
    const t = window.innerWidth, e = window.innerHeight;
    this.frame.style.setProperty("--sg-x", `${Math.max(16, t / 2 - 40)}px`), this.frame.style.setProperty("--sg-y", `${Math.max(16, e / 2 - 24)}px`), this.frame.style.setProperty("--sg-w", "80px"), this.frame.style.setProperty("--sg-h", "48px"), this.blocks.top.style.cssText = `top:0;left:0;width:${t}px;height:${e}px;`, this.blocks.left.style.cssText = "top:0;left:0;width:0;height:0;", this.blocks.right.style.cssText = "top:0;left:0;width:0;height:0;", this.blocks.bottom.style.cssText = "top:0;left:0;width:0;height:0;", this.root.classList.add("sg-overlay--visible");
  }
  applyCutout(t, e, i, s) {
    const r = window.innerWidth, a = window.innerHeight;
    this.frame.style.setProperty("--sg-x", `${t}px`), this.frame.style.setProperty("--sg-y", `${e}px`), this.frame.style.setProperty("--sg-w", `${i}px`), this.frame.style.setProperty("--sg-h", `${s}px`), this.blocks.top.style.cssText = `top:0;left:0;width:${r}px;height:${e}px;`, this.blocks.left.style.cssText = `top:${e}px;left:0;width:${t}px;height:${s}px;`, this.blocks.right.style.cssText = `top:${e}px;left:${t + i}px;width:${Math.max(0, r - t - i)}px;height:${s}px;`, this.blocks.bottom.style.cssText = `top:${e + s}px;left:0;width:${r}px;height:${Math.max(0, a - e - s)}px;`;
  }
  raiseTarget(t) {
    if (this.raisedTarget && this.raisedTarget !== t && this.restoreTarget(), !t || this.raisedTarget === t || !qt(t)) return;
    this.raisedTarget = t, this.previousTargetStyle = {
      position: t.style.position,
      zIndex: t.style.zIndex,
      pointerEvents: t.style.pointerEvents
    }, getComputedStyle(t).position === "static" && (t.style.position = "relative"), t.style.zIndex = String(this.zIndex + 1), t.style.pointerEvents = "auto", t.classList.add("sg-target-active");
  }
  restoreTarget() {
    if (!this.raisedTarget) return;
    const t = this.raisedTarget, e = this.previousTargetStyle || {};
    t.style.position = e.position || "", t.style.zIndex = e.zIndex || "", t.style.pointerEvents = e.pointerEvents || "", t.classList.remove("sg-target-active"), this.raisedTarget = null, this.previousTargetStyle = null;
  }
  hide() {
    const t = this.getHighlightCenter();
    t && (this.lastHighlightCenter = t), cancelAnimationFrame(this.raf), this.raf = null, this.target = null, this.highlightHost = null, this.blockOutside = !1, this.clearRelayoutTimers(), this.unobserveTarget(), this.unwatchMenus(), this.restoreElevatedMenus(), this.restoreTarget(), this.frame && this.frame.classList.remove(
      "sg-spotlight--pulse",
      "sg-spotlight--wobble",
      "sg-spotlight--fade",
      "sg-spotlight--fade-in"
    ), this.root && (this.root.classList.remove("sg-overlay--visible", "sg-overlay--blocking"), this.root.style.display = "none"), this.frame && (this.frame.style.removeProperty("--sg-x"), this.frame.style.removeProperty("--sg-y"), this.frame.style.removeProperty("--sg-w"), this.frame.style.removeProperty("--sg-h")), this.controlsEnabled && this.positionSkipChipFallback(), this.hideWaiting(), this.hideStepTip(), this.hideGuideCursor();
  }
  destroy() {
    var t;
    cancelAnimationFrame(this.raf), this.clearRelayoutTimers(), this.unobserveTarget(), this.unwatchMenus(), this.restoreElevatedMenus(), this.restoreTarget(), window.removeEventListener("resize", this.onViewportChange), window.removeEventListener("scroll", this.onViewportChange, !0), this.blocks && Object.values(this.blocks).forEach((e) => {
      ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((i) => e.removeEventListener(i, this.onBlockInteraction, !0));
    }), this.skipChip && (this.skipChip.removeEventListener("click", this.onSkipClick), this.skipChip.remove(), this.skipChip = null), this.stepTip && (this.stepTip.remove(), this.stepTip = null, this.stepTipContent = null), this.warningBanner && (this.warningBanner.remove(), this.warningBanner = null), this.waitingBanner && (this.waitingBanner.remove(), this.waitingBanner = null), this.guideCursor && (clearTimeout(this.cursorTimer), this.guideCursor.remove(), this.guideCursor = null), (t = this.root) == null || t.remove(), this.root = null, this.frame = null, this.blocks = null, this.target = null, this.highlightHost = null;
  }
}
function yi(n, t) {
  var a, o, l, c;
  const e = n instanceof Element ? n : t;
  if (!(e instanceof Element)) return !1;
  const i = (a = e.closest) == null ? void 0 : a.call(e, 'a[href], [href], [data-inertia], .nav-link, .custom-nav-class, [role="link"]');
  if (!i || i.hasAttribute("download")) return !1;
  const s = (((o = i.getAttribute) == null ? void 0 : o.call(i, "target")) || "").toLowerCase();
  if (s && s !== "_self") return !1;
  const r = (((l = i.getAttribute) == null ? void 0 : l.call(i, "href")) || "").trim();
  return r && r !== "#" && !r.toLowerCase().startsWith("javascript:") ? !0 : ((c = i.matches) == null ? void 0 : c.call(i, 'a, .nav-link, .custom-nav-class, [data-inertia], [role="link"]')) || !1;
}
function bi(n) {
  const t = String((n == null ? void 0 : n.title) || "").trim(), e = String((n == null ? void 0 : n.description) || "").trim();
  if (!e || e === t) return "";
  const i = e.replace(/^(click|select|enter|choose)\s+/i, "").trim(), s = t.replace(/^(click|select|enter|choose)\s+/i, "").trim();
  return i && s && i.toLowerCase() === s.toLowerCase() || /^(click|select|enter|choose)\s+.+/i.test(e) && e.length <= t.length + 12 ? "" : e;
}
class vi {
  constructor({
    overlay: t,
    timeout: e = 5e3,
    autoAdvanceOnInput: i = !0,
    autoAdvanceDelay: s = 600,
    autoSkipMissing: r = !0,
    autoSkipMissingDelay: a = 400,
    stableWaitTimeout: o = 1500,
    targetWaitTimeout: l = 2e4,
    targetRetryInterval: c = 250,
    targetReadyHits: d = 2,
    stepDelay: u = 0,
    autoScroll: h = !0,
    ui: p = null,
    onChange: g,
    onFail: f,
    onComplete: y,
    onClickAdvance: m = null
  }) {
    this.overlay = t, this.timeout = e, this.autoAdvanceOnInput = i, this.autoAdvanceDelay = s, this.autoSkipMissing = r, this.autoSkipMissingDelay = a, this.stableWaitTimeout = o, this.targetWaitTimeout = Math.max(1e3, Number(l) || 2e4), this.targetRetryInterval = Math.max(50, Number(c) || 250), this.targetReadyHits = Math.max(1, Number(d) || 2), this.stepDelay = u, this.autoScroll = h !== !1, this.ui = Rt(p || {}), this.onChange = g, this.onFail = f, this.onComplete = y, this.onClickAdvance = m, this.steps = [], this.index = 0, this.active = !1, this.token = 0, this.waitCleanup = null, this.autoSkipTimer = null, this.navWaitTimer = null, this.readyWaitInterval = null, this.readyWaitResolve = null, this.targetLostTimer = null, this.rebindDebounceTimer = null, this.waitingForNavigation = !1, this.lastChoiceField = null, this.lastCompletedField = null;
  }
  setUiOptions(t) {
    this.ui = Rt(t || {});
  }
  setOptions(t = {}) {
    t.autoAdvanceDelay != null && (this.autoAdvanceDelay = Number(t.autoAdvanceDelay) || 0), t.stepDelay != null && (this.stepDelay = Number(t.stepDelay) || 0), t.autoScroll != null && (this.autoScroll = !!t.autoScroll), t.timeout != null && (this.timeout = Number(t.timeout) || this.timeout), t.stableWaitTimeout != null && (this.stableWaitTimeout = Number(t.stableWaitTimeout) || this.stableWaitTimeout), t.targetWaitTimeout != null && (this.targetWaitTimeout = Math.max(1e3, Number(t.targetWaitTimeout) || this.targetWaitTimeout)), t.targetRetryInterval != null && (this.targetRetryInterval = Math.max(50, Number(t.targetRetryInterval) || this.targetRetryInterval)), t.targetReadyHits != null && (this.targetReadyHits = Math.max(1, Number(t.targetReadyHits) || this.targetReadyHits));
  }
  resolveStepField(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ye(t.match, { selector: t.selector || "" }) || Et(t.selector);
    return e ? lt(e) || e : null;
  }
  findStepTarget(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ye(t.match, { selector: t.selector || "" });
    if (e && ct(e)) return e;
    const i = Et(t.selector);
    return i && ct(i) ? i : null;
  }
  clearReadyWait(t = null) {
    var i, s;
    this.readyWaitInterval != null && (clearInterval(this.readyWaitInterval), this.readyWaitInterval = null);
    const e = this.readyWaitResolve;
    this.readyWaitResolve = null, e && e(t), (s = (i = this.overlay).hideWaiting) == null || s.call(i);
  }
  /**
   * Poll until the step target exists in the DOM (SPA/page load safe).
   * Owns a single interval — always cleared via clearReadyWait / clearWait / stop.
   */
  waitUntilTargetReady(t, e) {
    this.clearReadyWait(null);
    const i = this.findStepTarget(t);
    if (i) return Promise.resolve(i);
    const s = Date.now(), r = Math.max(this.timeout, this.targetWaitTimeout);
    let a = 0, o = 0, l = null, c = null;
    return new Promise((d) => {
      this.readyWaitResolve = d;
      const u = (p) => {
        this.readyWaitResolve === d && this.clearReadyWait(p);
      }, h = () => {
        var y, m, w, _;
        if (!this.active || e !== this.token) {
          u(null);
          return;
        }
        a += 1;
        const p = this.findStepTarget(t);
        if (p) {
          if (o = p === l ? o + 1 : 1, l = p, o >= this.targetReadyHits) {
            u(p);
            return;
          }
        } else
          o = 0, l = null;
        const g = Date.now() - s;
        if (g >= r) {
          u(p || null);
          return;
        }
        const f = Math.max(0, Math.ceil((r - g) / 1e3));
        if (f !== c) {
          c = f;
          const S = `Waiting… ${f}s`;
          this.onChange(t, this.index, {
            waiting: !0,
            failed: !1,
            waitKind: "target",
            retryCount: a,
            message: S
          }), (m = (y = this.overlay).showWaiting) == null || m.call(y, S, { seconds: f }), (_ = (w = this.overlay).positionSkipChipFallback) == null || _.call(w);
        }
      };
      h(), this.readyWaitResolve === d && (this.readyWaitInterval = setInterval(h, this.targetRetryInterval));
    });
  }
  dedupeSteps(t) {
    const e = [];
    let i = null;
    for (const s of t) {
      if (s.action === "input" && s.selector) {
        const r = this.resolveStepField(s);
        if (r && r === i) continue;
        i = r || null;
      } else
        i = null;
      e.push(s);
    }
    return e;
  }
  async start(t, e = 0) {
    if (this.stop(), this.steps = this.dedupeSteps(t), this.index = Math.max(0, Math.min(e, Math.max(t.length - 1, 0))), this.active = !0, !t.length) {
      this.complete();
      return;
    }
    await this.showCurrent();
  }
  missingTargetMessage(t) {
    const e = String((t == null ? void 0 : t.title) || "").trim();
    return [
      `Target for ${e ? `"${e}"` : "this step"} was not found on this page.`,
      "Please follow this guide's requirements first",
      "(for example: create or open a record that shows this field),",
      "then continue — or skip this step."
    ].join(" ");
  }
  normalizeStepTarget(t, e) {
    if (!e)
      return t.action === "click" || t.action === "input" ? vt() : null;
    if (wt(e))
      return lt(e) || e;
    if (t.action === "click") {
      const i = lt(e);
      if (i && gt(i)) return i;
    }
    return e;
  }
  async showCurrent() {
    var h, p, g, f, y, m, w, _, S, N, I, F, T, $, H, R, M, B, x, W, G, D, P, K, Q, O, J, st;
    if (!this.active) return;
    this.clearWait();
    const t = ++this.token, e = this.steps[this.index], i = ((p = (h = this.overlay) == null ? void 0 : h.getHighlightCenter) == null ? void 0 : p.call(h)) || ((g = this.overlay) == null ? void 0 : g.lastHighlightCenter) || null;
    this.onChange(e, this.index, { waiting: !1, failed: !1 }), this.overlay.hide();
    const s = Number((f = e == null ? void 0 : e.settings) == null ? void 0 : f.delay) || 0;
    if (s > 0 && (await new Promise((k) => setTimeout(k, s)), !this.active || t !== this.token))
      return;
    if (e.action === "manual" || !e.selector && !e.match) {
      this.overlay.hide();
      return;
    }
    const r = await this.waitUntilTargetReady(e, t);
    if (!this.active || t !== this.token) return;
    let a = this.normalizeStepTarget(e, r);
    if (a) {
      const k = !!this.lastCompletedField, q = k ? Math.min(220, this.stableWaitTimeout) : this.stableWaitTimeout;
      a = await Qe(a, {
        timeout: q,
        stableFrames: k ? 2 : 4
      }) || a;
    }
    if (!this.active || t !== this.token) return;
    if (a && !ct(a)) {
      const k = await this.waitUntilTargetReady(e, t);
      if (!this.active || t !== this.token) return;
      a = this.normalizeStepTarget(e, k);
    }
    if (!this.active || t !== this.token) return;
    const o = !!(a && (gt(a) || Tt(a)) || ((y = e.waitFor) == null ? void 0 : y.mode) === "interaction" || wt(r));
    if (o && (!a || !qt(a))) {
      const k = (C) => {
        var A, z, tt, X;
        if (!(C instanceof Element)) return !1;
        if ((A = C.matches) != null && A.call(C, 'input[type="search"]')) return !0;
        const L = [
          (z = C.getAttribute) == null ? void 0 : z.call(C, "placeholder"),
          (tt = C.getAttribute) == null ? void 0 : tt.call(C, "name"),
          (X = C.getAttribute) == null ? void 0 : X.call(C, "aria-label"),
          C.id,
          C.className
        ].filter(Boolean).join(" ").toLowerCase();
        return /\bsearch\b/.test(L);
      }, q = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show');
      if (q) {
        const C = hi(q).filter((A) => (A.matches('select, [role="combobox"]') || gt(A)) && !k(A));
        let L = vt();
        if (L && k(L) && (L = null), !L && this.lastChoiceField && q.contains(this.lastChoiceField)) {
          const A = ((w = (m = this.lastChoiceField).getBoundingClientRect) == null ? void 0 : w.call(m).top) ?? -1 / 0;
          L = C.find((z) => z.getBoundingClientRect().top > A + 4) || null;
        }
        L || (L = C[0] || null), L && (a = L);
      }
    }
    const l = It(a) || a;
    if (!a && !l) {
      this.overlay.hide();
      const k = this.missingTargetMessage(e);
      (S = (_ = this.overlay).showWarning) == null || S.call(_, k), this.onFail(e, this.index), this.onChange(e, this.index, {
        waiting: !1,
        failed: !0,
        autoSkipping: !1,
        failKind: "missing-target",
        message: k
      }), (I = (N = this.overlay).positionSkipChipFallback) == null || I.call(N);
      return;
    }
    (T = (F = this.overlay).hideWarning) == null || T.call(F), (H = ($ = this.overlay).hideWaiting) == null || H.call($);
    const c = a || l;
    if (i && ((R = this.ui) != null && R.animatedCursor) && ((M = this.ui) != null && M.animations)) {
      const k = (B = c.getBoundingClientRect) == null ? void 0 : B.call(c);
      if (k && k.width >= 1 && k.height >= 1) {
        const q = {
          x: k.left + k.width / 2,
          y: k.top + k.height / 2
        };
        if (await ((W = (x = this.overlay).animateCursorTo) == null ? void 0 : W.call(x, i, q, this.ui.transitionMs)), !this.active || t !== this.token) return;
      }
    }
    const d = e.action === "input" || ((G = e.waitFor) == null ? void 0 : G.type) === "input" || o || gt(c), u = ((D = e == null ? void 0 : e.settings) == null ? void 0 : D.autoScroll) !== !1;
    if (this.overlay.highlight(l || c, u, {
      // Keep spotlight cutout for selects so the active field stays bright.
      blockOutside: !0,
      tip: {
        title: e.title || "",
        description: bi(e),
        stepNumber: this.index + 1,
        totalSteps: this.steps.length
      }
    }), d) {
      let k = (P = c.matches) != null && P.call(c, "input, textarea, select, .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? c : ((K = c.querySelector) == null ? void 0 : K.call(c, "input, textarea, select, .p-dropdown, .p-multiselect")) || c;
      const q = (Q = k.closest) == null ? void 0 : Q.call(k, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      q && (k = q);
      const C = Number((O = e == null ? void 0 : e.settings) == null ? void 0 : O.autoAdvanceDelay), L = this.autoAdvanceDelay;
      Number.isFinite(C) && (this.autoAdvanceDelay = C);
      const A = o || gt(k) || !!q || ((J = e.waitFor) == null ? void 0 : J.mode) === "interaction";
      this.watchInput(k, {
        ...e,
        waitFor: {
          type: "input",
          required: !0,
          mode: A ? "interaction" : ((st = e.waitFor) == null ? void 0 : st.mode) || "value"
        }
      }, !0), this.autoAdvanceDelay = L;
      return;
    }
    e.action === "click" && this.watchClick(c, e);
  }
  watchClick(t, e) {
    const i = this.index;
    this.onChange(e, i, { waiting: !0, failed: !1, waitKind: "click" });
    const s = async (r) => {
      var c, d, u;
      const a = r.target instanceof Element ? r.target : null;
      if (!a || !(a === t || t.contains(a)) || !this.active || this.index !== i) return;
      this.overlay.hide(), this.clearWait();
      const o = this.resolveNextIndex(i), l = yi(a, t);
      if ((c = this.onClickAdvance) == null || c.call(this, e, i, o, { mayNavigate: l }), await this.applyHideDelay(e), !!this.active) {
        if (o >= this.steps.length) {
          this.complete();
          return;
        }
        if (this.index = o, l) {
          this.waitingForNavigation = !0, this.onChange(this.steps[this.index], this.index, {
            waiting: !0,
            failed: !1,
            waitKind: "navigate",
            message: "Waiting…"
          }), (u = (d = this.overlay).showWaiting) == null || u.call(d, "Waiting…"), clearTimeout(this.navWaitTimer), this.navWaitTimer = setTimeout(() => {
            !this.active || !this.waitingForNavigation || (this.waitingForNavigation = !1, this.scheduleRebindCurrent({ force: !0, delay: 0 }));
          }, 1500);
          return;
        }
        this.showCurrent();
      }
    };
    t.addEventListener("click", s, !0), this.waitCleanup = () => {
      t.removeEventListener("click", s, !0);
    };
  }
  /** True when the current step spotlight is already live on a matching DOM node. */
  isCurrentStepBound() {
    var s, r, a, o;
    if (!this.active || this.readyWaitInterval != null || this.readyWaitResolve || this.waitingForNavigation) return !1;
    const t = this.steps[this.index];
    if (!t) return !1;
    const e = ((s = this.overlay) == null ? void 0 : s.target) || ((r = this.overlay) == null ? void 0 : r.highlightHost);
    if (!(e instanceof Element) || !e.isConnected || !ct(e) || !((o = (a = this.overlay) == null ? void 0 : a.root) != null && o.classList.contains("sg-overlay--visible"))) return !1;
    const i = this.findStepTarget(t);
    return i ? i === e || e.contains(i) || i.contains(e) : !1;
  }
  /**
   * Single coalesced path to (re)show the current step — avoids double spotlight animation
   * when nav timer + pushState + target-lost all fire close together.
   */
  scheduleRebindCurrent({ force: t = !1, delay: e = 180 } = {}) {
    clearTimeout(this.navWaitTimer), this.navWaitTimer = null, clearTimeout(this.targetLostTimer), this.targetLostTimer = null, clearTimeout(this.rebindDebounceTimer), this.rebindDebounceTimer = setTimeout(() => {
      this.rebindDebounceTimer = null, this.active && (!t && this.isCurrentStepBound() || (this.waitingForNavigation = !1, this.showCurrent()));
    }, Math.max(0, e));
  }
  /** Call after host navigation (Inertia) so the next step binds to the new DOM. */
  continueAfterNavigation() {
    this.active && (clearTimeout(this.navWaitTimer), this.navWaitTimer = null, this.waitingForNavigation = !1, this.scheduleRebindCurrent({ force: !1, delay: 180 }));
  }
  /**
   * Spotlight target was remounted/removed while still on this step (content refresh).
   * Re-bind the same step — do not advance.
   */
  onSpotlightTargetLost() {
    this.active && (this.readyWaitInterval != null || this.readyWaitResolve || this.waitingForNavigation || this.rebindDebounceTimer == null && this.scheduleRebindCurrent({ force: !0, delay: 160 }));
  }
  resolveNextIndex(t = this.index) {
    const e = this.steps[t], i = this.lastCompletedField;
    let s = t + 1;
    for (; s < this.steps.length; ) {
      const r = this.steps[s];
      if ((e == null ? void 0 : e.action) !== "input" || (r == null ? void 0 : r.action) !== "input") break;
      if (r.selector === e.selector) {
        s += 1;
        continue;
      }
      if (i) {
        const a = this.resolveStepField(r);
        if (a && a === i) {
          s += 1;
          continue;
        }
      }
      break;
    }
    return s;
  }
  watchInput(t, e, i = !0) {
    var L, A, z, tt, X, ft, St, kt, mt, _t, At, xt;
    const s = this.index, r = (L = t == null ? void 0 : t.closest) == null ? void 0 : L.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
    r && (t = r);
    const a = t instanceof HTMLSelectElement, o = Tt(t), l = !!((A = t == null ? void 0 : t.matches) != null && A.call(t, ".p-autocomplete") || (z = t == null ? void 0 : t.closest) != null && z.call(t, ".p-autocomplete")), c = !!((tt = t == null ? void 0 : t.matches) != null && tt.call(t, ".p-multiselect") || (X = t == null ? void 0 : t.closest) != null && X.call(t, ".p-multiselect")), d = !!((ft = t == null ? void 0 : t.matches) != null && ft.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") || (St = t == null ? void 0 : t.closest) != null && St.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")), u = a || o || ((kt = e.waitFor) == null ? void 0 : kt.mode) === "interaction" || gt(t) || d, h = t instanceof HTMLInputElement && ["date", "datetime-local", "time", "month", "week", "color", "range"].includes(t.type);
    let p = !1, g = !1, f = !1, y = null, m = null, w = null, _ = null;
    const S = a || h || u || d || l ? Math.min(this.autoAdvanceDelay || 0, 50) : this.autoAdvanceDelay, N = ((mt = t.closest) == null ? void 0 : mt.call(t, '.modal.show, .modal, [role="dialog"], .p-overlaypanel')) || document.querySelector('.modal.show, [role="dialog"], .p-overlaypanel') || document, I = ie, F = [
      ".p-dropdown-item",
      ".p-multiselect-item",
      ".p-autocomplete-item",
      ".p-cascadeselect-item",
      '[role="option"]',
      ".dropdown-item",
      ".select2-results__option",
      ".el-select-dropdown__item",
      ".n-base-select-option",
      ".vs__dropdown-option",
      ".multiselect__option"
    ].join(", "), T = [
      ".p-autocomplete-panel",
      ".p-dropdown-panel",
      ".p-multiselect-panel",
      ".p-cascadeselect-panel"
    ].join(", "), $ = [
      "select",
      '[role="combobox"]',
      "input",
      "textarea",
      '[aria-haspopup="listbox"]',
      '[aria-haspopup="true"]',
      '[aria-haspopup="dialog"]',
      "[aria-expanded]",
      ".dropdown-toggle",
      ".select2-selection",
      ".vs__dropdown-toggle",
      ".n-base-selection",
      ".el-select",
      ".multiselect",
      ".choices",
      ".ts-control",
      ".p-dropdown",
      ".p-dropdown-trigger",
      ".p-dropdown-label",
      ".p-multiselect",
      ".p-multiselect-trigger",
      ".p-multiselect-label",
      ".p-autocomplete",
      ".p-cascadeselect",
      ".input-group button",
      ".input-group .btn",
      '[class*="datepicker"] button',
      ".mx-input-append",
      ".ant-picker-suffix",
      ".p-datepicker-trigger"
    ].join(", "), H = (b) => !!(b instanceof Element && (b.matches(jt) || wt(b))), R = () => {
      var V, ot, dt;
      if (!c || !(t instanceof Element)) return !1;
      if (t.classList.contains("p-overlay-open") || t.classList.contains("p-inputwrapper-focus") && t.querySelector('[aria-expanded="true"]') || t.getAttribute("aria-expanded") === "true" || (V = t.querySelector) != null && V.call(t, '[aria-expanded="true"]')) return !0;
      const b = document.querySelector(".p-multiselect-panel");
      if (!(b instanceof Element)) return !1;
      const v = (ot = globalThis.getComputedStyle) == null ? void 0 : ot.call(globalThis, b);
      if (v && (v.display === "none" || v.visibility === "hidden")) return !1;
      const Z = lt(b) || vt();
      return !!(Z && (Z === t || t.contains(Z) || (dt = Z.contains) != null && dt.call(Z, t)));
    }, M = () => c && R(), B = () => {
      var Z, V;
      const b = (Z = t.matches) != null && Z.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? t : (V = t.closest) == null ? void 0 : V.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (!b) return "";
      const v = b.querySelector(".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      return !v || v.classList.contains("p-placeholder") || v.classList.contains("p-dropdown-label-empty") ? "" : v instanceof HTMLInputElement ? String(v.value || "").trim() : String(v.textContent || "").trim();
    }, x = () => t instanceof HTMLInputElement && ["checkbox", "radio"].includes(t.type) ? String(t.checked) : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement ? String(t.value ?? "") : B();
    let W = x();
    const G = () => u ? p : t instanceof HTMLInputElement && ["checkbox", "radio"].includes(t.type) ? t.checked : d ? p || !!B() : String(x()).trim().length > 0, D = () => {
      this.onChange(e, s, {
        waiting: i && !G(),
        failed: !1,
        waitKind: u || d ? "choice" : "input"
      });
    }, P = (b) => {
      var V, ot;
      if (!(b instanceof Element)) return;
      const v = It(b) || b;
      if (this.overlay.target === v || this.overlay.highlightHost === v || this.overlay.target === b || this.overlay.highlightHost === b) {
        (ot = (V = this.overlay).refreshMenus) == null || ot.call(V);
        return;
      }
      this.overlay.highlight(v, !1, { blockOutside: !0 });
    }, K = () => {
      this.active && this.index === s && this.next();
    }, Q = (b = t) => {
      !this.active || this.index !== s || p || M() || (p = !0, W = x(), clearTimeout(y), b instanceof Element && (this.lastChoiceField = b, this.lastCompletedField = lt(b) || b), D(), !(u || d ? !0 : G()) || !this.autoAdvanceOnInput) || (this.overlay.hide(), y = setTimeout(K, S));
    }, O = (b) => {
      var ot, dt, pt;
      if (!(b instanceof Element)) return !1;
      if (b === t || t.contains(b)) return !0;
      const v = lt(b);
      if (v && (v === t || t.contains(v) || (ot = v.contains) != null && ot.call(v, t)))
        return !0;
      if (b.closest(T) && (l || d)) {
        const yt = lt(b) || vt();
        if (yt && (yt === t || t.contains(yt) || (dt = yt.contains) != null && dt.call(yt, t)))
          return !0;
        const nt = vt();
        return !!(nt && (nt === t || t.contains(nt)));
      }
      const V = vt();
      return !!(V && (V === t || t.contains(V) || (pt = V.contains) != null && pt.call(V, t)));
    }, J = (b = t) => {
      !this.active || this.index !== s || p || M() || (clearTimeout(y), y = setTimeout(() => Q(b), 0));
    }, st = () => {
      !c || p || M() || (f || x() !== W) && J(t);
    }, k = (b) => {
      const v = b == null ? void 0 : b.target;
      if (l) {
        if (!f) return;
        J(t);
        return;
      }
      if (c) {
        O(v instanceof Element ? v : t) && (f = !0, g = !0), st();
        return;
      }
      if (!(d && !o && !a && ((b == null ? void 0 : b.type) === "input" || (b == null ? void 0 : b.type) === "change" && !f && !g))) {
        if (u && v instanceof Element && (N.contains(v) || !!v.closest(I) || O(v)) && (v.matches("select, input, textarea") || gt(v) || wt(v))) {
          if (d && v.matches("input, textarea") && !wt(v) && (b == null ? void 0 : b.type) === "input")
            return;
          J(lt(v) || t);
          return;
        }
        u && v instanceof Element && !O(v) || J(t);
      }
    }, q = (b) => {
      var oe, le, ce, de, ue, he, pe, ge;
      if (!u || p) return;
      const v = b.target instanceof Element ? b.target : null;
      if (!v) return;
      const Z = N.contains(v), ot = !!v.closest(I), dt = v.closest(F), pt = H(v);
      if (c && !!v.closest([
        ".p-multiselect-close",
        ".p-multiselect-remove",
        '[data-pc-section="closebutton"]',
        '[data-pc-section="clearicon"]',
        ".p-multiselect-header .p-multiselect-close"
      ].join(", ")) && O(v)) {
        g = !0, setTimeout(st, 40);
        return;
      }
      if ((dt || pt) && O(v)) {
        if (g = !0, v.matches("input, textarea") && !dt && !pt) {
          (le = (oe = this.overlay).refreshMenus) == null || le.call(oe);
          return;
        }
        if (l && !dt) {
          (de = (ce = this.overlay).refreshMenus) == null || de.call(ce);
          return;
        }
        if (b.type === "pointerdown" || b.type === "pointerup" || b.type === "click" || pt) {
          if (f = !0, c) {
            (he = (ue = this.overlay).refreshMenus) == null || he.call(ue);
            return;
          }
          J(lt(v) || vt() || t);
        }
        return;
      }
      if (!Z && !ot && !pt) {
        c && g && setTimeout(st, 40);
        return;
      }
      const nt = v.closest($);
      if (nt && (Z || N.contains(nt)) && !ot && !dt && !pt) {
        g = !0;
        const zt = lt(nt) || nt;
        if ((O(zt) || O(nt)) && (P(zt), (ge = (pe = this.overlay).refreshMenus) == null || ge.call(pe), c && setTimeout(st, 40)), nt instanceof HTMLSelectElement && b.type === "pointerdown") {
          const fe = () => J(zt), He = Date.now();
          nt.addEventListener("change", fe, { once: !0 }), nt.addEventListener("focusout", () => {
            Date.now() - He < 280 || setTimeout(fe, 40);
          }, { once: !0 });
        }
      }
    };
    if (t.addEventListener("input", k), t.addEventListener("change", k), document.addEventListener("change", k, !0), document.addEventListener("input", k, !0), document.addEventListener("pointerdown", q, !0), document.addEventListener("pointerup", q, !0), document.addEventListener("click", q, !0), d && typeof MutationObserver < "u") {
      const b = (_t = t.querySelector) == null ? void 0 : _t.call(t, ".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      b && !l && (m = new MutationObserver(() => {
        if (x() !== W) {
          if (c) {
            f = !0, g = !0, st();
            return;
          }
          J(t);
        }
      }), m.observe(b, {
        characterData: !0,
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "value"]
      }));
      const v = ((At = t.querySelector) == null ? void 0 : At.call(t, "[aria-expanded]")) || ((xt = t.hasAttribute) != null && xt.call(t, "aria-expanded") ? t : null);
      v && (w = new MutationObserver(() => {
        if (!(!g || p) && v.getAttribute("aria-expanded") === "false" && !(l && !f)) {
          if (c) {
            st();
            return;
          }
          (f || x() !== W) && J(t);
        }
      }), w.observe(v, { attributes: !0, attributeFilter: ["aria-expanded"] })), c && (_ = new MutationObserver(() => {
        st();
      }), _.observe(t, {
        attributes: !0,
        attributeFilter: ["class", "aria-expanded"]
      }));
    }
    const C = setInterval(() => {
      if (!p) {
        if (l) {
          if (!f) return;
          J(t);
          return;
        }
        if (c) {
          x() !== W && (f = !0, g = !0), st();
          return;
        }
        x() !== W && J(t);
      }
    }, 80);
    this.waitCleanup = () => {
      clearTimeout(y), clearInterval(C), m == null || m.disconnect(), w == null || w.disconnect(), _ == null || _.disconnect(), t.removeEventListener("input", k), t.removeEventListener("change", k), document.removeEventListener("change", k, !0), document.removeEventListener("input", k, !0), document.removeEventListener("pointerdown", q, !0), document.removeEventListener("pointerup", q, !0), document.removeEventListener("click", q, !0);
    }, D();
  }
  async applyHideDelay(t) {
    var i;
    const e = Math.max(0, Number((i = t == null ? void 0 : t.settings) == null ? void 0 : i.hideDelay) || 0);
    e && (this.overlay.hide(), await new Promise((s) => setTimeout(s, e)));
  }
  async next() {
    if (!this.active) return;
    const t = this.steps[this.index], e = this.resolveNextIndex(this.index);
    if (await this.applyHideDelay(t), !!this.active) {
      if (e >= this.steps.length) {
        this.complete();
        return;
      }
      this.index = e, this.waitingForNavigation = !1, clearTimeout(this.navWaitTimer), this.showCurrent();
    }
  }
  prev() {
    !this.active || this.index <= 0 || (this.index -= 1, this.waitingForNavigation = !1, clearTimeout(this.navWaitTimer), this.showCurrent());
  }
  skip() {
    this.next();
  }
  complete() {
    this.stop(), this.onComplete();
  }
  clearWait() {
    var t;
    clearTimeout(this.autoSkipTimer), this.autoSkipTimer = null, this.clearReadyWait(null), (t = this.waitCleanup) == null || t.call(this), this.waitCleanup = null;
  }
  stop() {
    var t, e, i, s;
    this.active = !1, this.token += 1, this.waitingForNavigation = !1, clearTimeout(this.navWaitTimer), this.navWaitTimer = null, clearTimeout(this.targetLostTimer), this.targetLostTimer = null, clearTimeout(this.rebindDebounceTimer), this.rebindDebounceTimer = null, this.lastChoiceField = null, this.lastCompletedField = null, this.clearWait(), (e = (t = this.overlay).hideWarning) == null || e.call(t), (s = (i = this.overlay).hideWaiting) == null || s.call(i), this.overlay.hide();
  }
  destroy() {
    this.stop();
  }
}
function j(n) {
  const t = String(n || "/").trim() || "/";
  try {
    if (/^https?:\/\//i.test(t))
      return new URL(t).pathname || "/";
  } catch {
  }
  const e = t.split("?")[0].split("#")[0] || "/";
  return e.startsWith("/") ? e : `/${e}`;
}
function wi(n) {
  return j(n).split("/").map((t) => t.trim()).filter(Boolean);
}
function Si(n) {
  return String(n || "root").replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
}
function ki(n = []) {
  const t = { path: "/", label: "Home", guides: [], children: /* @__PURE__ */ new Map() }, e = (s, r, a) => (s.children.has(r) || s.children.set(r, {
    path: a,
    label: Si(r),
    guides: [],
    children: /* @__PURE__ */ new Map()
  }), s.children.get(r));
  for (const s of n) {
    if (!s || typeof s != "object") continue;
    const r = j(s.url || "/"), a = wi(r);
    if (!a.length) {
      t.guides.push(s);
      continue;
    }
    let o = t, l = "";
    a.forEach((c) => {
      l += `/${c}`, o = e(o, c, l);
    }), o.guides.push(s);
  }
  const i = (s) => ({
    path: s.path,
    label: s.label,
    guides: [...s.guides].sort((r, a) => String(r.title || "").localeCompare(String(a.title || ""))),
    children: [...s.children.values()].map(i).sort((r, a) => r.label.localeCompare(a.label))
  });
  return [i(t)].filter((s) => s.guides.length > 0 || s.children.length > 0);
}
function Re(n, t = 0, e = []) {
  for (const i of n || []) {
    const s = [];
    Re(i.children, t + 1, s);
    const r = i.guides || [];
    if (r.length) {
      e.push({ type: "section", depth: t, path: i.path, label: i.label });
      for (const a of r)
        e.push({ type: "guide", depth: t + 1, guide: a });
    }
    e.push(...s);
  }
  return e;
}
const _i = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="4" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="4" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
</svg>`, xi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
</svg>`, Ci = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M10.2 8.4L16.2 12L10.2 15.6V8.4Z" fill="currentColor"/>
</svg>`, Ei = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" fill="currentColor"/>
</svg>`;
function Ge(n = "sg") {
  return `
<svg class="sg-siri" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
  <defs>
    <clipPath id="${n}-clip">
      <circle cx="40" cy="40" r="32"/>
    </clipPath>
    <radialGradient id="${n}-base" cx="42%" cy="38%" r="68%">
      <stop offset="0%" stop-color="#343178"/>
      <stop offset="55%" stop-color="#15123d"/>
      <stop offset="100%" stop-color="#07051d"/>
    </radialGradient>
    <linearGradient id="${n}-pink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.12"/>
      <stop offset="48%" stop-color="#ec4899" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#f0abfc" stop-opacity="0.42"/>
    </linearGradient>
    <linearGradient id="${n}-cyan" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.12"/>
      <stop offset="48%" stop-color="#22d3ee" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#67e8f9" stop-opacity="0.36"/>
    </linearGradient>
    <linearGradient id="${n}-blue" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#111827" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#a5b4fc" stop-opacity="0.34"/>
    </linearGradient>
    <linearGradient id="${n}-rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c4b5fd"/>
      <stop offset="42%" stop-color="#7c3aed"/>
      <stop offset="76%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#312e81"/>
    </linearGradient>
    <radialGradient id="${n}-glass" cx="35%" cy="24%" r="72%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="28%" stop-color="#ffffff" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.18"/>
    </radialGradient>
    <filter id="${n}-soft" x="-35%" y="-35%" width="170%" height="170%">
      <feGaussianBlur stdDeviation="1.2"/>
    </filter>
    <filter id="${n}-liquid" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5"/>
    </filter>
  </defs>

  <circle class="sg-siri__outer-glow" cx="40" cy="40" r="34" fill="none" stroke="url(#${n}-rim)" stroke-width="4" opacity="0.24"/>
  <g clip-path="url(#${n}-clip)">
    <circle cx="40" cy="40" r="32" fill="url(#${n}-base)"/>
    <g class="sg-siri__liquid" filter="url(#${n}-liquid)">
      <g class="sg-siri__fluid sg-siri__fluid--pink">
        <ellipse cx="39" cy="23" rx="29" ry="14" fill="url(#${n}-pink)" transform="rotate(-16 40 40)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--cyan">
        <path d="M8 43C24 29 48 28 72 43C58 61 35 64 8 43Z" fill="url(#${n}-cyan)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--blue">
        <path d="M19 13C50 21 66 43 59 73C38 60 24 41 19 13Z" fill="url(#${n}-blue)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--light">
        <ellipse cx="40" cy="40" rx="20" ry="9" fill="#ecfeff" opacity="0.58" transform="rotate(22 40 40)"/>
      </g>
      <circle class="sg-siri__center-glow" cx="40" cy="40" r="9" fill="#ffffff" opacity="0.58"/>
    </g>
    <circle cx="40" cy="40" r="32" fill="url(#${n}-glass)"/>
  </g>
  <circle class="sg-siri__rim" cx="40" cy="40" r="32.5" fill="none" stroke="url(#${n}-rim)" stroke-width="1.5"/>
  <ellipse cx="34" cy="19" rx="15" ry="5" fill="#ffffff" opacity="0.12" transform="rotate(-12 34 19)"/>
</svg>`;
}
const Ti = Ge("sgA"), Ai = Ge("sgB"), Mi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 3.75h6M5.25 6.75h13.5M8.25 6.75V18a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V6.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 10.5v6M13.5 10.5v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Ni = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Pi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`, Li = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M6 14.5V6.5A1.5 1.5 0 0 1 7.5 5H15.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Bi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 6.5 16 12 9 17.5V6.5Z" fill="currentColor"/>
</svg>`, _e = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 3c.6 3.4 2.3 5.1 5.7 5.7-3.4.6-5.1 2.3-5.7 5.7-.6-3.4-2.3-5.1-5.7-5.7C9.7 8.1 11.4 6.4 12 3Z" fill="currentColor"/>
  <path d="M18.5 14.5c.25 1.3.9 1.95 2.2 2.2-1.3.25-1.95.9-2.2 2.2-.25-1.3-.9-1.95-2.2-2.2 1.3-.25 1.95-.9 2.2-2.2Z" fill="currentColor"/>
</svg>`, Ii = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
class Ri {
  constructor({
    zIndex: t,
    onOpenPanel: e,
    onBypassOpenPanel: i,
    onStartRecording: s,
    onPlayPageGuide: r,
    onDeleteGuide: a,
    onOpenManage: o,
    onStopTutorial: l,
    onSearchGuide: c
  }) {
    this.onOpenPanel = e, this.onBypassOpenPanel = i, this.onStartRecording = s, this.onPlayPageGuide = r, this.onDeleteGuide = a, this.onOpenManage = o, this.onStopTutorial = l, this.onSearchGuide = c, this.playing = !1, this.guideCount = 0, this.apiReady = !0, this.readOnly = !1, this.visible = !0, this.menuOpen = !1, this.searchGuides = [], this.searchCurrentUrl = "/", this.accountId = null, this.bypassPin = "123456", this.bypassBuffer = "", this.orbHovering = !1, this.showAccountId = !0, this.root = document.createElement("div"), this.root.className = "sg-launcher", this.root.style.zIndex = String(t + 5), this.root.setAttribute("aria-label", "System Guider actions"), this.optionsRoot = document.createElement("section"), this.optionsRoot.className = "sg-guide-picker", this.optionsRoot.hidden = !0, this.optionsRoot.setAttribute("aria-label", "All guides"), this.trigger = document.createElement("button"), this.trigger.type = "button", this.trigger.className = "sg-launcher__trigger", this.trigger.dataset.action = "toggle-menu", this.trigger.setAttribute("aria-label", "Show System Guider toolbar"), this.trigger.setAttribute("aria-expanded", "false"), this.trigger.title = "Show toolbar", this.trigger.innerHTML = `
      <span class="sg-launcher__avatar">${Ti}</span>
    `, this.menu = this.createMenu(), this.recordButton = this.menu.querySelector('[data-action="start-recording"]'), this.panelButton = this.menu.querySelector('[data-action="open-panel"]'), this.playButton = this.menu.querySelector('[data-action="play-page"]'), this.playTitle = this.playButton.querySelector(".sg-launcher__tile-title"), this.root.append(this.optionsRoot, this.menu, this.trigger), this.bindOrbHover([this.trigger, this.orb].filter(Boolean)), this.applyControlsDisabled(), this.setMenuOpen(!1), this.onKeyDown = this.onKeyDown.bind(this), this.root.addEventListener("click", (d) => this.handleClick(d)), document.addEventListener("keydown", this.onKeyDown), document.body.append(this.root);
  }
  createMenu() {
    const t = document.createElement("div");
    t.className = "sg-launcher__menu", t.setAttribute("role", "dialog"), t.setAttribute("aria-label", "System Guider menu");
    const e = document.createElement("div");
    e.className = "sg-launcher__radial", this.radial = e;
    const i = document.createElement("div");
    i.className = "sg-launcher__petals";
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.classList.add("sg-launcher__connector"), s.setAttribute("viewBox", "0 0 304 150"), s.setAttribute("aria-hidden", "true"), s.innerHTML = `
      <g class="sg-launcher__connector-line sg-launcher__connector-line--play">
        <path d="M46 108C34 78 58 28 96 28" pathLength="100"/>
        <circle r="2.4"/>
        <circle r="2.4"/>
        <circle r="2.6"/>
      </g>
      <g class="sg-launcher__connector-line sg-launcher__connector-line--record">
        <path d="M52 100C48 84 64 72 96 74" pathLength="100"/>
        <circle r="2.3"/>
        <circle r="2.3"/>
        <circle r="2.5"/>
      </g>
      <g class="sg-launcher__connector-line sg-launcher__connector-line--panel">
        <path d="M54 112C58 118 72 122 96 120" pathLength="100"/>
        <circle r="2.3"/>
        <circle r="2.3"/>
        <circle r="2.5"/>
      </g>
    `, this.connector = s, this.placeAllConnectorDots();
    const r = this.createTile({
      action: "start-recording",
      variant: "record",
      title: "Record",
      subtitle: "Create a guide",
      icon: xi,
      shortcut: "R"
    }), a = this.createTile({
      action: "open-panel",
      variant: "panel",
      title: "Panel",
      subtitle: "Guide controls",
      icon: _i,
      shortcut: "P"
    }), o = this.createTile({
      action: "play-page",
      variant: "play",
      title: "Play guides",
      subtitle: "Start a tutorial",
      icon: Ci
    });
    this.stopButton = this.createTile({
      action: "stop-tutorial",
      variant: "stop",
      title: "Stop",
      subtitle: "End tutorial",
      icon: Ei
    }), this.stopButton.hidden = !0, i.append(o, r, a, this.stopButton), this.petalGroup = i;
    const l = document.createElement("button");
    l.type = "button", l.className = "sg-launcher__orb", l.dataset.action = "toggle-menu", l.setAttribute("aria-label", "Hide System Guider toolbar"), l.title = "Close", l.innerHTML = `
      <span class="sg-launcher__avatar">${Ai}</span>
    `, this.orb = l, e.append(s, i, l);
    const c = document.createElement("form");
    c.className = "sg-launcher__search", c.setAttribute("role", "search"), c.innerHTML = `
      <span class="sg-launcher__search-spark">${_e}</span>
      <input
        type="text"
        class="sg-launcher__search-input"
        placeholder="Search guides or press /"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search guides"
      />
      <button type="submit" class="sg-launcher__search-go" aria-label="Search">${Ii}</button>
    `, this.searchInput = c.querySelector(".sg-launcher__search-input"), this.searchInput.addEventListener("input", () => this.renderSearchResults()), c.addEventListener("submit", (u) => {
      u.preventDefault(), this.submitSearch();
    }), this.searchResults = document.createElement("div"), this.searchResults.className = "sg-launcher__results", this.searchResults.hidden = !0, this.accountLabel = document.createElement("span"), this.accountLabel.className = "sg-launcher__account", this.accountLabel.hidden = !0;
    const d = document.createElement("div");
    return d.className = "sg-launcher__hint", d.innerHTML = "Press <kbd>Esc</kbd> to close", t.append(e, c, this.searchResults, this.accountLabel, d), this.syncAccountLabel(), t;
  }
  createTile({ action: t, variant: e, title: i, subtitle: s = "", icon: r, shortcut: a = "" }) {
    const o = document.createElement("button");
    return o.type = "button", o.className = `sg-launcher__tile sg-launcher__tile--${e}`, o.dataset.action = t, o.setAttribute("aria-label", i), o.title = i, o.innerHTML = `
      ${a ? `<span class="sg-launcher__shortcut">${a}</span>` : ""}
      <span class="sg-launcher__icon">${r}</span>
      <span class="sg-launcher__tile-copy">
        <span class="sg-launcher__tile-title">${i}</span>
        ${s ? `<span class="sg-launcher__tile-subtitle">${s}</span>` : ""}
      </span>
    `, o;
  }
  layoutPetals() {
    var r;
    if (!this.petalGroup) return;
    const t = Array.from(this.petalGroup.children).filter((a) => !a.hidden);
    t.forEach((a, o) => {
      a.style.setProperty("--sg-petal-index", String(o));
    });
    const e = t.length;
    this.petalGroup.dataset.count = String(e);
    const i = t.some((a) => a.classList.contains("sg-launcher__tile--record")), s = t.some((a) => a.classList.contains("sg-launcher__tile--panel"));
    (r = this.radial) == null || r.classList.toggle("is-compact", !i && !s), this.syncConnectorLayout(t);
  }
  /** Place connector dots exactly on their path (by arc length). */
  placeConnectorDots(t, e = [0.36, 0.68, 1]) {
    if (!t) return;
    const i = t.querySelector("path");
    if (!i || typeof i.getTotalLength != "function") return;
    let s = 0;
    try {
      s = i.getTotalLength();
    } catch {
      return;
    }
    if (!s) return;
    const r = t.querySelectorAll("circle");
    e.forEach((a, o) => {
      const l = r[o];
      if (!l) return;
      const c = i.getPointAtLength(Math.min(1, Math.max(0, a)) * s);
      l.setAttribute("cx", String(Math.round(c.x * 10) / 10)), l.setAttribute("cy", String(Math.round(c.y * 10) / 10));
    });
  }
  placeAllConnectorDots() {
    this.connector && this.connector.querySelectorAll(".sg-launcher__connector-line").forEach((t) => {
      this.placeConnectorDots(t);
    });
  }
  syncConnectorLayout(t) {
    var u;
    if (!this.connector) return;
    const e = t || Array.from(((u = this.petalGroup) == null ? void 0 : u.children) || []).filter((h) => !h.hidden), i = e.length, s = e.some((h) => h.classList.contains("sg-launcher__tile--record")), r = e.some((h) => h.classList.contains("sg-launcher__tile--panel")), a = this.connector.querySelector(".sg-launcher__connector-line--play"), o = this.connector.querySelector(".sg-launcher__connector-line--record"), l = this.connector.querySelector(".sg-launcher__connector-line--panel");
    if (o && (o.style.display = s ? "" : "none"), l && (l.style.display = r ? "" : "none"), !a) return;
    const c = a.querySelector("path"), d = !s && !r;
    d && i === 1 ? c == null || c.setAttribute("d", "M54 112C58 118 72 122 96 120") : d && i === 2 ? c == null || c.setAttribute("d", "M52 100C48 84 64 72 96 74") : c == null || c.setAttribute("d", "M46 108C34 78 58 28 96 28"), this.placeConnectorDots(a), s && this.placeConnectorDots(o), r && this.placeConnectorDots(l);
  }
  matchGuides(t) {
    const e = String(t || "").trim().toLowerCase(), i = Array.isArray(this.searchGuides) ? this.searchGuides : [];
    return e ? i.map((s) => {
      const r = String(s.title || "").toLowerCase(), a = String(s.url || "").toLowerCase();
      let o = 0;
      return r.startsWith(e) && (o += 3), r.includes(e) && (o += 2), a.includes(e) && (o += 1), { guide: s, score: o };
    }).filter((s) => s.score > 0).sort((s, r) => r.score - s.score).slice(0, 6).map((s) => s.guide) : i.slice(0, 6);
  }
  renderSearchResults() {
    var i;
    if (!this.searchResults) return;
    const t = ((i = this.searchInput) == null ? void 0 : i.value) || "", e = this.matchGuides(t);
    if (this.searchResults.replaceChildren(), !t.trim()) {
      this.searchResults.hidden = !0;
      return;
    }
    if (!e.length) {
      const s = document.createElement("div");
      s.className = "sg-launcher__result-empty", s.textContent = "No matching guides", this.searchResults.append(s), this.searchResults.hidden = !1;
      return;
    }
    e.forEach((s) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sg-launcher__result", r.dataset.action = "search-select", r.dataset.guideId = s.id;
      const a = Array.isArray(s.steps) ? s.steps.length : 0;
      r.innerHTML = `
        <span class="sg-launcher__result-spark">${_e}</span>
        <span class="sg-launcher__result-copy">
          <span class="sg-launcher__result-title"></span>
          <span class="sg-launcher__result-meta"></span>
        </span>
        <span class="sg-launcher__result-arrow">→</span>
      `, r.querySelector(".sg-launcher__result-title").textContent = s.title || "Untitled guide", r.querySelector(".sg-launcher__result-meta").textContent = `${s.url || "/"} · ${a} step${a === 1 ? "" : "s"}`, this.searchResults.append(r);
    }), this.searchResults.hidden = !1;
  }
  submitSearch() {
    var e;
    const t = this.matchGuides(((e = this.searchInput) == null ? void 0 : e.value) || "");
    t.length && this.selectSearchGuide(t[0]);
  }
  selectSearchGuide(t) {
    var e;
    t && (this.searchInput && (this.searchInput.value = ""), this.renderSearchResults(), this.setMenuOpen(!1), (e = this.onSearchGuide) == null || e.call(this, t));
  }
  setSearchData(t, e = "/") {
    this.searchGuides = Array.isArray(t) ? t : [], this.searchCurrentUrl = e, this.menuOpen && this.renderSearchResults();
  }
  handleClick(t) {
    var i, s, r, a, o, l, c, d, u, h, p, g;
    const e = (i = t.target.closest("[data-action]")) == null ? void 0 : i.dataset.action;
    if (e) {
      if (e === "toggle-menu") {
        this.setMenuOpen(!this.menuOpen);
        return;
      }
      if (e === "start-recording") {
        if (this.readOnly) return;
        (s = this.onStartRecording) == null || s.call(this), this.setMenuOpen(!1);
        return;
      }
      if (e === "open-panel") {
        if (this.readOnly) return;
        (r = this.onOpenPanel) == null || r.call(this), this.setMenuOpen(!1);
        return;
      }
      if (e === "play-page") {
        (a = this.onPlayPageGuide) == null || a.call(this), this.setMenuOpen(!1);
        return;
      }
      if (e === "stop-tutorial") {
        (o = this.onStopTutorial) == null || o.call(this);
        return;
      }
      if (e === "search-select") {
        const f = (l = t.target.closest("[data-guide-id]")) == null ? void 0 : l.dataset.guideId, y = (c = this.searchGuides) == null ? void 0 : c.find((m) => m.id === f);
        y && this.selectSearchGuide(y);
        return;
      }
      if (e === "close-picker" && this.hideGuideOptions(), e === "open-manage") {
        if (this.readOnly) return;
        this.hideGuideOptions(), (d = this.onOpenManage) == null || d.call(this);
      }
      if (e === "select-guide") {
        const f = (u = t.target.closest("[data-guide-id]")) == null ? void 0 : u.dataset.guideId, y = (h = this.guides) == null ? void 0 : h.find((m) => m.id === f);
        if (y) {
          const m = this.onSelectGuide;
          this.hideGuideOptions(), m == null || m(y);
        }
      }
      if (e === "delete-guide") {
        if (this.readOnly) return;
        t.preventDefault(), t.stopPropagation();
        const f = (p = t.target.closest("[data-guide-id]")) == null ? void 0 : p.dataset.guideId;
        if (!f) return;
        (g = this.onDeleteGuide) == null || g.call(this, f);
      }
    }
  }
  bindOrbHover(t) {
    const e = (i) => {
      this.orbHovering = !!i, i || (this.bypassBuffer = "");
    };
    t.forEach((i) => {
      i.addEventListener("pointerenter", () => e(!0)), i.addEventListener("pointerleave", () => e(!1));
    });
  }
  setBypassPin(t) {
    this.bypassPin = String(t || "").replace(/\D/g, "").slice(0, 12), this.bypassBuffer = "";
  }
  tryBypassPin(t) {
    var a;
    const e = this.bypassPin;
    if (!e || !this.orbHovering || !this.visible || t.metaKey || t.ctrlKey || t.altKey) return !1;
    const i = t.target;
    if (i instanceof HTMLElement && (i.tagName === "INPUT" || i.tagName === "TEXTAREA" || i.tagName === "SELECT" || i.isContentEditable)) return !1;
    const r = t.key;
    return r === "Backspace" ? (t.preventDefault(), this.bypassBuffer = this.bypassBuffer.slice(0, -1), !0) : r === "Escape" ? (this.bypassBuffer = "", !1) : /^[0-9]$/.test(r) ? (t.preventDefault(), this.bypassBuffer = `${this.bypassBuffer}${r}`.slice(-Math.max(e.length, 12)), (this.bypassBuffer === e || this.bypassBuffer.endsWith(e)) && (this.bypassBuffer = "", (a = this.onBypassOpenPanel) == null || a.call(this)), !0) : !1;
  }
  onKeyDown(t) {
    var r, a, o, l;
    if (this.tryBypassPin(t)) return;
    if (t.key === "Escape") {
      if (!this.optionsRoot.hidden) {
        this.hideGuideOptions();
        return;
      }
      if (this.menuOpen && ((r = this.searchInput) != null && r.value)) {
        t.preventDefault(), this.searchInput.value = "", this.renderSearchResults();
        return;
      }
      this.menuOpen && (t.preventDefault(), this.setMenuOpen(!1));
      return;
    }
    if (!this.menuOpen || t.metaKey || t.ctrlKey || t.altKey) return;
    const e = t.target, i = e instanceof HTMLElement && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable);
    if (t.key === "/" && !i) {
      t.preventDefault(), (a = this.searchInput) == null || a.focus();
      return;
    }
    if (i) return;
    const s = String(t.key || "").toLowerCase();
    s === "r" && !this.recordButton.disabled && (t.preventDefault(), (o = this.onStartRecording) == null || o.call(this), this.setMenuOpen(!1)), s === "p" && !this.panelButton.disabled && (t.preventDefault(), (l = this.onOpenPanel) == null || l.call(this), this.setMenuOpen(!1));
  }
  setMenuOpen(t) {
    this.menuOpen = !!t, this.root.classList.toggle("is-menu-open", this.menuOpen), this.syncClosedRail(), this.menu.hidden = !this.menuOpen, this.trigger.hidden = this.menuOpen || !this.optionsRoot.hidden, this.trigger.setAttribute("aria-expanded", String(this.menuOpen)), this.trigger.setAttribute(
      "aria-label",
      this.menuOpen ? "Hide System Guider toolbar" : "Show System Guider toolbar"
    ), this.trigger.title = this.menuOpen ? "Hide toolbar" : "Show toolbar", this.menuOpen ? (this.layoutPetals(), this.renderSearchResults()) : this.searchInput && (this.searchInput.value = "", this.searchResults && (this.searchResults.hidden = !0));
  }
  syncClosedRail() {
    const t = !this.optionsRoot.hidden, e = !this.menuOpen && !t;
    this.root.classList.toggle("is-menu-closed", e), this.trigger.hidden = !e;
  }
  setPlayState(t) {
    this.guideCount = t, this.playTitle && (this.playTitle.textContent = t > 1 ? `Play guides (${t})` : "Play guides"), this.applyControlsDisabled();
  }
  setApiReady(t) {
    this.apiReady = !!t, this.root.classList.toggle("is-api-pending", !this.apiReady), this.applyControlsDisabled();
  }
  setReadOnly(t) {
    this.readOnly = !!t, this.root.classList.toggle("is-readonly", this.readOnly), this.recordButton && (this.recordButton.hidden = this.readOnly), this.panelButton && (this.panelButton.hidden = this.readOnly), this.manageButton && (this.manageButton.hidden = this.readOnly), this.applyControlsDisabled(), this.menuOpen && this.layoutPetals();
  }
  setAccountId(t) {
    this.accountId = t == null || t === "" ? null : String(t), this.syncAccountLabel();
  }
  setShowAccountId(t) {
    this.showAccountId = t !== !1, this.syncAccountLabel();
  }
  syncAccountLabel() {
    if (!this.accountLabel) return;
    const t = this.accountId == null || this.accountId === "" ? "" : String(this.accountId), e = !!(this.showAccountId && t);
    this.accountLabel.hidden = !e, this.accountLabel.textContent = e ? `Account ID: ${t}` : "";
  }
  setVisible(t) {
    this.visible = !!t, this.root.hidden = !this.visible, this.root.classList.toggle("is-hidden", !this.visible), this.visible || this.setMenuOpen(!1);
  }
  applyPlayDisabled() {
    this.applyControlsDisabled();
  }
  applyControlsDisabled() {
    const t = !this.apiReady, e = !!this.playing, i = !!this.readOnly;
    if (this.playButton.disabled = t || e || (this.guideCount ?? 0) < 1, t)
      this.playButton.title = "Waiting for guide API…";
    else if ((this.guideCount ?? 0) < 1)
      this.playButton.title = "No guides saved yet";
    else if (e)
      this.playButton.title = "Stop the tutorial first";
    else {
      const s = this.guideCount ?? 0;
      this.playButton.title = `${s} guide${s === 1 ? "" : "s"} available`;
    }
    this.recordButton.disabled = t || e || i, this.panelButton.disabled = t || e || i, this.stopButton.disabled = !e, this.stopButton.hidden = !e, this.stopButton.classList.toggle("is-disabled", !e), this.menuOpen && this.layoutPetals(), i ? (this.recordButton.title = "View-only: recording disabled", this.panelButton.title = "View-only: manage disabled") : t ? (this.recordButton.title = "Waiting for guide API…", this.panelButton.title = "Waiting for guide API…") : e ? (this.recordButton.title = "Stop the tutorial first", this.panelButton.title = "Stop the tutorial first") : (this.recordButton.title = "Start recording", this.panelButton.title = "Guide Panel"), this.stopButton.title = e ? "Stop tutorial" : "No tutorial playing";
  }
  showGuideOptions(t, e, { hierarchical: i = !0, currentUrl: s = "/" } = {}) {
    this.guides = t, this.onSelectGuide = e, this.optionsRoot.replaceChildren(), this.setMenuOpen(!1);
    const r = document.createElement("header");
    r.className = "sg-guide-picker__header";
    const a = document.createElement("div");
    a.className = "sg-guide-picker__brand";
    const o = document.createElement("span");
    o.className = "sg-guide-picker__brand-icon", o.setAttribute("aria-hidden", "true"), o.innerHTML = Ni;
    const l = document.createElement("div");
    l.className = "sg-guide-picker__brand-copy";
    const c = document.createElement("strong");
    c.className = "sg-guide-picker__title", c.textContent = i ? "All Guides" : "Page Guides";
    const d = document.createElement("span");
    d.className = "sg-guide-picker__subtitle", d.textContent = i ? "Manage your guides" : "Choose a guide to play", l.append(c, d), a.append(o, l);
    const u = document.createElement("div");
    u.className = "sg-guide-picker__actions";
    const h = document.createElement("button");
    h.type = "button", h.className = "sg-guide-picker__manage", h.dataset.action = "open-manage", h.innerHTML = `<span class="sg-guide-picker__manage-icon">${Pi}</span><span>Manage</span>`, h.hidden = this.readOnly, this.manageButton = h;
    const p = document.createElement("button");
    p.type = "button", p.className = "sg-guide-picker__close", p.dataset.action = "close-picker", p.setAttribute("aria-label", "Close guide options"), p.textContent = "×", u.append(h, p), r.append(a, u);
    const g = document.createElement("div");
    if (g.className = "sg-guide-picker__list", t.length)
      if (i) {
        const f = Re(ki(t));
        let y = 0;
        f.forEach((m) => {
          if (m.type === "section") {
            const w = document.createElement("div");
            w.className = "sg-guide-picker__section", w.style.setProperty("--sg-toc-depth", String(m.depth));
            const _ = j(s), S = j(m.path);
            (_ === S || S !== "/" && _.startsWith(`${S}/`)) && w.classList.add("is-current");
            const N = document.createElement("span");
            N.className = "sg-guide-picker__section-label", N.textContent = m.label;
            const I = document.createElement("span");
            I.className = "sg-guide-picker__section-meta";
            const F = document.createElement("span");
            F.className = "sg-guide-picker__section-path", F.textContent = m.path;
            const T = document.createElement("button");
            T.type = "button", T.className = "sg-guide-picker__copy-path", T.title = "Copy path", T.setAttribute("aria-label", `Copy ${m.path}`), T.innerHTML = Li, T.addEventListener("click", async ($) => {
              var H, R;
              $.preventDefault(), $.stopPropagation();
              try {
                await ((R = (H = navigator.clipboard) == null ? void 0 : H.writeText) == null ? void 0 : R.call(H, m.path)), T.classList.add("is-copied"), setTimeout(() => T.classList.remove("is-copied"), 900);
              } catch {
              }
            }), I.append(F, T), w.append(N, I), g.append(w);
            return;
          }
          y += 1, g.append(this.createGuideRow(m.guide, y, {
            depth: m.depth,
            currentUrl: s
          }));
        });
      } else
        t.forEach((f, y) => {
          g.append(this.createGuideRow(f, y + 1, { depth: 0, currentUrl: s }));
        });
    else {
      const f = document.createElement("div");
      f.className = "sg-guide-picker__empty", f.textContent = "No guides saved yet.", g.append(f);
    }
    this.optionsRoot.append(r, g), this.optionsRoot.hidden = !1, this.syncClosedRail();
  }
  createGuideRow(t, e, { depth: i = 0, currentUrl: s = "/" } = {}) {
    const r = document.createElement("div");
    r.className = "sg-guide-picker__row", r.dataset.guideId = t.id, r.style.setProperty("--sg-toc-depth", String(i));
    const a = j(t.url || "/");
    a === j(s) && r.classList.add("is-current-page");
    const o = document.createElement("button");
    o.type = "button", o.className = "sg-guide-picker__option", o.dataset.action = "select-guide", o.dataset.guideId = t.id;
    const l = document.createElement("span");
    l.className = "sg-guide-picker__number", l.textContent = String(e).padStart(2, "0");
    const c = document.createElement("span");
    c.className = "sg-guide-picker__copy";
    const d = document.createElement("strong");
    d.textContent = t.title || "Untitled guide";
    const u = document.createElement("small"), h = Array.isArray(t.steps) ? t.steps.length : Number(t.steps) || 0, p = document.createElement("span");
    p.className = "sg-guide-picker__path", p.textContent = a;
    const g = document.createElement("span");
    g.className = "sg-guide-picker__dot", g.textContent = "·";
    const f = document.createElement("span");
    f.textContent = `${h} step${h === 1 ? "" : "s"}`, u.append(p, g, f), c.append(d, u);
    const y = document.createElement("span");
    y.className = "sg-guide-picker__play", y.setAttribute("aria-hidden", "true"), y.innerHTML = Bi, o.append(l, c, y);
    const m = document.createElement("button");
    return m.type = "button", m.className = "sg-guide-picker__delete", m.dataset.action = "delete-guide", m.dataset.guideId = t.id, m.setAttribute("aria-label", `Delete ${t.title || "guide"}`), m.title = "Delete guide", m.innerHTML = Mi, this.readOnly && (m.hidden = !0), r.append(o, m), r;
  }
  hideGuideOptions() {
    this.optionsRoot.hidden = !0, this.optionsRoot.replaceChildren(), this.guides = null, this.onSelectGuide = null, this.syncClosedRail();
  }
  setPanelOpen(t) {
    this.panelButton.classList.toggle("is-active", t), this.panelButton.setAttribute("aria-pressed", String(t));
  }
  setPlaying(t) {
    this.playing = !!t, this.root.classList.toggle("is-playing", this.playing), this.playing && (this.hideGuideOptions(), this.panelButton.classList.remove("is-active"), this.panelButton.setAttribute("aria-pressed", "false"), this.setMenuOpen(!0)), this.applyControlsDisabled();
  }
  destroy() {
    this.hideGuideOptions(), document.removeEventListener("keydown", this.onKeyDown), this.root.remove();
  }
}
const Gi = (n) => JSON.parse(JSON.stringify(n));
function rt(n) {
  if (!n || typeof n != "object" || !Array.isArray(n.steps))
    throw new TypeError("Guide must be an object with a steps array.");
  const t = /* @__PURE__ */ new Set();
  return n.steps.forEach((e, i) => {
    if (!e || typeof e != "object")
      throw new TypeError(`Step ${i + 1} must be an object.`);
    if (typeof e.id != "string" || !e.id.trim())
      throw new TypeError(`Step ${i + 1} requires an id.`);
    if (t.has(e.id)) throw new TypeError(`Duplicate step id: ${e.id}`);
    if (t.add(e.id), !["click", "input", "manual"].includes(e.action))
      throw new TypeError(`Unsupported action in step ${i + 1}.`);
    if (e.action !== "manual" && typeof e.selector != "string" && !e.match)
      throw new TypeError(`Step ${i + 1} requires a selector or match hints.`);
    if (e.match != null && (typeof e.match != "object" || Array.isArray(e.match)))
      throw new TypeError(`Step ${i + 1} match must be an object.`);
  }), Gi({
    id: String(n.id || `guide-${Date.now()}`),
    title: String(n.title || "Untitled guide"),
    version: Number(n.version) || 1,
    ...n.url ? { url: String(n.url) } : {},
    ...n.settings && typeof n.settings == "object" && !Array.isArray(n.settings) ? { settings: n.settings } : {},
    steps: n.steps
  });
}
function xe(n) {
  const t = typeof n == "string" ? JSON.parse(n) : n;
  let e = [];
  if (Array.isArray(t))
    e = t;
  else if (t && typeof t == "object" && Array.isArray(t.guides))
    e = t.guides;
  else if (t && typeof t == "object" && Array.isArray(t.steps))
    e = [t];
  else
    throw new TypeError("Expected a guide JSON, an array of guides, or a { guides: [...] } bundle.");
  const i = [], s = [];
  if (e.forEach((r, a) => {
    try {
      i.push(rt(r));
    } catch (o) {
      s.push(`Guide ${a + 1}: ${o.message}`);
    }
  }), !i.length)
    throw new TypeError(s[0] || "No valid guides found in the file.");
  return { guides: i, errors: s };
}
function Kt(n) {
  return JSON.stringify(rt(n), null, 2);
}
function Oi(n) {
  const t = (Array.isArray(n) ? n : []).map((e) => rt(e));
  return JSON.stringify({
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    guides: t
  }, null, 2);
}
function $i(n, t) {
  !n || typeof localStorage > "u" || localStorage.setItem(n, Kt(t));
}
function Di(n) {
  if (!n || typeof localStorage > "u") return null;
  const t = localStorage.getItem(n);
  return t ? rt(JSON.parse(t)) : null;
}
function Oe(n, t, e = "application/json") {
  const i = new Blob([n], { type: e }), s = URL.createObjectURL(i), r = document.createElement("a");
  r.href = s, r.download = t, r.click(), URL.revokeObjectURL(s);
}
function Fi(n, t = "system-guide.json") {
  Oe(Kt(n), t);
}
function Hi(n, t = "system-guider-guides.json") {
  Oe(Oi(n), t);
}
async function Ui(n) {
  var e;
  const t = Kt(n);
  if (!((e = navigator.clipboard) != null && e.writeText))
    throw new Error("Clipboard API is unavailable in this browser.");
  return await navigator.clipboard.writeText(t), t;
}
function Wi(n = ((e) => (e = globalThis.location) == null ? void 0 : e.href)(), t = "pathname") {
  var i;
  try {
    const s = new URL(n, ((i = globalThis.location) == null ? void 0 : i.origin) || "http://localhost");
    return t === "full" ? `${s.pathname}${s.search}` || "/" : s.pathname || "/";
  } catch {
    return "/";
  }
}
function qi(n = "pathname") {
  var t;
  return Wi((t = globalThis.location) == null ? void 0 : t.href, n);
}
function $e(n) {
  return `${n || "system-guider"}:by-url`;
}
function se(n) {
  if (typeof localStorage > "u") return {};
  try {
    const t = localStorage.getItem($e(n)), e = t ? JSON.parse(t) : {};
    return e && typeof e == "object" ? e : {};
  } catch {
    return {};
  }
}
function De(n, t) {
  typeof localStorage > "u" || localStorage.setItem($e(n), JSON.stringify(t));
}
function ne(n) {
  return Array.isArray(n) ? n.filter(Boolean) : n ? [n] : [];
}
function Ot(n, t, e) {
  const i = se(n), s = ne(i[t]), r = s.findIndex((a) => (a == null ? void 0 : a.id) === e.id);
  return r >= 0 ? s[r] = e : s.push(e), i[t] = s, De(n, i), s;
}
function ji(n) {
  const t = se(n), e = [];
  return Object.entries(t).forEach(([i, s]) => {
    ne(s).forEach((r) => {
      e.push({ ...r, url: (r == null ? void 0 : r.url) || i });
    });
  }), e;
}
function Ki(n, t, e) {
  const i = se(n), s = ne(i[t]).filter((r) => (r == null ? void 0 : r.id) !== e);
  return s.length ? i[t] = s : delete i[t], De(n, i), s;
}
function re(n) {
  return `${n || "system-guider"}:pending-play`;
}
function $t(n, t) {
  typeof sessionStorage > "u" || sessionStorage.setItem(re(n), JSON.stringify(t));
}
function zi(n) {
  if (typeof sessionStorage > "u") return null;
  const t = re(n), e = sessionStorage.getItem(t);
  if (sessionStorage.removeItem(t), !e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function Dt(n) {
  typeof sessionStorage > "u" || sessionStorage.removeItem(re(n));
}
function Fe(n) {
  return String(n || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";
}
function Vi(n) {
  const t = String(n || "/").split(/[\\/]+/).map((e) => e.trim()).filter(Boolean).map(Fe);
  return t.length ? t.join("/") : "root";
}
function Ji(n) {
  return `${Fe((n == null ? void 0 : n.title) || (n == null ? void 0 : n.id) || "guide")}.json`;
}
function te(n, t = n == null ? void 0 : n.url) {
  return `${Vi(t)}/${Ji(n)}`;
}
function Xi(n = {}) {
  if (n === !1) return null;
  const t = n === !0 || n == null ? {} : n;
  return {
    baseUrl: t.baseUrl || "/__sg/guides",
    publicBase: t.publicBase || "/guides",
    downloadFallback: t.downloadFallback !== !1,
    ...t
  };
}
async function ae(n, t, e) {
  const i = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }, s = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/);
  s != null && s[1] && (i["X-XSRF-TOKEN"] = decodeURIComponent(s[1]));
  const r = document.querySelector('meta[name="csrf-token"]');
  r != null && r.content && (i["X-CSRF-TOKEN"] = r.content);
  const a = await fetch(n, {
    method: t,
    headers: i,
    credentials: "same-origin",
    body: e ? JSON.stringify(e) : void 0
  });
  if (!a.ok) {
    const l = await a.text().catch(() => "");
    let c = l;
    try {
      const d = JSON.parse(l);
      c = d.message || d.error || `HTTP ${a.status}`, String(c).trim() || (c = `HTTP ${a.status}`);
    } catch {
      c || (c = `HTTP ${a.status}`);
    }
    throw new Error(c);
  }
  return (a.headers.get("content-type") || "").includes("application/json") ? a.json() : null;
}
async function Ft(n, t, e) {
  const i = te(t, e);
  try {
    const s = await ae(n.baseUrl, "POST", {
      guide: t,
      urlKey: e || t.url || "/",
      path: i
    });
    return { ok: !0, path: (s == null ? void 0 : s.path) || i, via: "api" };
  } catch (s) {
    if (!n.downloadFallback) throw s;
    const r = i.replace(/\//g, "__"), a = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), o = URL.createObjectURL(a), l = document.createElement("a");
    return l.href = o, l.download = r, l.click(), URL.revokeObjectURL(o), { ok: !0, path: i, via: "download", error: s.message };
  }
}
async function Zi(n, { guideId: t, urlKey: e, path: i }) {
  try {
    return await ae(n.baseUrl, "DELETE", { guideId: t, urlKey: e, path: i }), { ok: !0 };
  } catch {
    return { ok: !1 };
  }
}
async function Yi(n) {
  const t = `${String(n.publicBase || "/guides").replace(/\/$/, "")}/index.json`, e = await fetch(t, { headers: { Accept: "application/json" } });
  if (!e.ok) return { version: 1, guides: [] };
  const i = await e.json();
  return i && typeof i == "object" ? { version: Number(i.version) || 1, guides: Array.isArray(i.guides) ? i.guides : [] } : { version: 1, guides: [] };
}
async function Ce(n) {
  if (!(n != null && n.baseUrl)) return !1;
  try {
    return (await fetch(n.baseUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      credentials: "same-origin",
      cache: "no-store"
    })).ok;
  } catch {
    return !1;
  }
}
async function Qi(n) {
  const t = await Yi(n), e = String(n.publicBase || "/guides").replace(/\/$/, ""), i = [];
  for (const s of t.guides) {
    const r = s == null ? void 0 : s.path;
    if (r)
      try {
        const a = await fetch(`${e}/${r}`, {
          headers: { Accept: "application/json" }
        });
        if (!a.ok) continue;
        const o = await a.json();
        o && Array.isArray(o.steps) && i.push({
          ...o,
          url: o.url || s.url,
          title: o.title || s.title,
          id: o.id || s.id
        });
      } catch {
      }
  }
  return i;
}
async function ts(n) {
  const t = String(n.publicBase || "/guides").replace(/\/$/, ""), e = await fetch(`${t}/settings.json`, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });
  if (!e.ok) return null;
  const i = await e.json();
  return i && typeof i == "object" && !Array.isArray(i) ? i : null;
}
async function es(n, t) {
  const e = await ae(n.baseUrl, "POST", {
    type: "settings",
    settings: t,
    path: "settings.json"
  });
  return {
    ok: !0,
    path: (e == null ? void 0 : e.path) || "settings.json",
    via: "api",
    settings: e != null && e.settings && typeof e.settings == "object" ? e.settings : null
  };
}
const is = {
  next: "Next Step",
  back: "Back",
  close: "Close Guide",
  skip: "Skip Step",
  startRecording: "Start Recording",
  stopRecording: "Stop Recording"
}, Lt = (n = "") => ({
  id: `guide-${Date.now()}`,
  title: n ? `Guide for ${n}` : "New system guide",
  version: 1,
  url: n || void 0,
  steps: []
});
class ss {
  constructor(t = {}) {
    var e, i, s, r, a, o, l, c;
    this.options = {
      overlayOpacity: 0.58,
      allowClose: !0,
      zIndex: 2147483e3,
      selectorTimeout: 5e3,
      autoAdvanceOnInput: !0,
      autoAdvanceDelay: 600,
      autoSkipMissing: !0,
      autoSkipMissingDelay: 400,
      stableWaitTimeout: 1500,
      targetWaitTimeout: 2e4,
      targetRetryInterval: 250,
      showLauncher: !0,
      guidesByUrl: !0,
      urlMatch: "pathname",
      resetBeforePlay: "none",
      resetBeforePlayDelay: 450,
      /** Host navigation (e.g. Inertia router.visit). Receives url string; may return a Promise. */
      navigate: null,
      guides: {},
      storageKey: "system-guider",
      fileStorage: !1,
      ...t,
      labels: { ...is, ...t.labels }
    }, this.settings = ht({
      ...Me(),
      ...t.settings || {}
    }), this.options.resetBeforePlay = this.settings.resetBeforePlay || this.options.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay ?? this.options.resetBeforePlayDelay, Pt(this.settings), this.fileStorage = Xi(this.options.fileStorage), this.fileGuides = [], this.guideSaveTimer = null, this.settingsSaveTimer = null, this.apiReady = !this.fileStorage, this.apiProbeTimer = null, this.guide = Lt(this.getUrlKey()), this.mode = "idle", this.dirty = !1, this.recordingAppend = !1, this.destroyed = !1, this.recordingStepsBaseline = 0, this.panelVisible = !this.options.showLauncher, this.readOnly = !1, this.bypassUnlocked = !1, this.launcherVisible = this.options.showLauncher !== !1, this.accountId = t.accountId ?? null, this.overlay = new mi({
      ...this.options,
      skipLabel: ((e = this.options.labels) == null ? void 0 : e.skip) || "Skip Step",
      onSkip: () => this.skip(),
      onHighlightBox: (d) => {
        var u;
        return (u = this.panel) == null ? void 0 : u.avoidHighlight(d);
      },
      onTargetLost: () => {
        var d, u;
        return (u = (d = this.player) == null ? void 0 : d.onSpotlightTargetLost) == null ? void 0 : u.call(d);
      },
      ui: this.settings.ui
    }), this.recorder = new pi({ onStep: (d) => this.recordStep(d) }), this.player = new vi({
      overlay: this.overlay,
      timeout: this.options.selectorTimeout,
      autoAdvanceOnInput: this.options.autoAdvanceOnInput,
      autoAdvanceDelay: this.options.autoAdvanceDelay,
      autoSkipMissing: this.options.autoSkipMissing,
      autoSkipMissingDelay: this.options.autoSkipMissingDelay,
      stableWaitTimeout: this.options.stableWaitTimeout,
      targetWaitTimeout: this.options.targetWaitTimeout,
      targetRetryInterval: this.options.targetRetryInterval,
      stepDelay: 0,
      autoScroll: !0,
      ui: this.settings.ui,
      onChange: (d, u, h) => this.onPlaybackChange(d, u, h),
      onFail: (d, u) => this.onPlaybackFail(d, u),
      onComplete: () => this.onPlaybackComplete(),
      onClickAdvance: (d, u, h, p) => {
        this.persistPlaybackProgress(h, p);
      }
    }), this.playbackResumeTimer = null, this.panel = new Ue({
      labels: this.options.labels,
      zIndex: this.options.zIndex,
      handlers: this.createHandlers(),
      visible: this.panelVisible
    }), this.launcher = this.options.showLauncher ? new Ri({
      zIndex: this.options.zIndex,
      onOpenPanel: () => this.togglePanel(),
      onBypassOpenPanel: () => this.openPanelViaBypass(),
      onStartRecording: () => this.startRecording(),
      onPlayPageGuide: () => this.playPageGuide(),
      onDeleteGuide: (d) => this.deletePageGuide(d),
      onOpenManage: () => this.openManageRoutes(),
      onStopTutorial: () => this.close(!0),
      onSearchGuide: (d) => this.playGuide(d)
    }) : null, (i = this.launcher) == null || i.setApiReady(this.apiReady), (s = this.launcher) == null || s.setReadOnly(this.readOnly), (o = (r = this.launcher) == null ? void 0 : r.setBypassPin) == null || o.call(r, (a = this.settings) == null ? void 0 : a.bypassPin), (c = (l = this.launcher) == null ? void 0 : l.setAccountId) == null || c.call(l, this.accountId), this.onKeyDown = this.onKeyDown.bind(this), this.onUrlChange = this.onUrlChange.bind(this), document.addEventListener("keydown", this.onKeyDown), window.addEventListener("popstate", this.onUrlChange), this.installHistoryHooks(), this.applyAccessPolicy(), this.bootstrap();
  }
  /** Inertia/Vue soft navigations use pushState — popstate alone misses them. */
  installHistoryHooks() {
    if (this._historyHooksInstalled) return;
    this._historyHooksInstalled = !0, this._origPushState = history.pushState.bind(history), this._origReplaceState = history.replaceState.bind(history);
    const t = () => {
      queueMicrotask(() => {
        this.destroyed || this.onUrlChange();
      });
    };
    history.pushState = (...e) => {
      this._origPushState(...e), t();
    }, history.replaceState = (...e) => {
      this._origReplaceState(...e), t();
    };
  }
  restoreHistoryHooks() {
    this._historyHooksInstalled && (this._origPushState && (history.pushState = this._origPushState), this._origReplaceState && (history.replaceState = this._origReplaceState), this._historyHooksInstalled = !1, this._origPushState = null, this._origReplaceState = null);
  }
  async reloadFileGuides() {
    var t;
    if (!this.fileStorage) {
      this.fileGuides = [];
      return;
    }
    try {
      const e = await Qi(this.fileStorage);
      if (this.fileGuides = Array.isArray(e) ? e : [], this.dirty && ((t = this.guide) != null && t.id)) {
        const i = structuredClone(this.guide), s = this.fileGuides.findIndex((r) => r.id === this.guide.id);
        s >= 0 ? this.fileGuides[s] = i : this.fileGuides = [...this.fileGuides, i];
      }
    } catch {
      this.fileGuides = [];
    }
    this.syncLauncher(), this.render();
  }
  async reloadFileSettings() {
    var t, e, i, s;
    if (this.fileStorage)
      try {
        const r = await ts(this.fileStorage);
        if (!r) return;
        this.settings = ht({
          ...this.settings,
          ...r,
          ...this.options.settings || {}
        }), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, Pt(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (s = (i = this.player) == null ? void 0 : i.setUiOptions) == null || s.call(i, this.settings.ui), this.applyAccessPolicy();
      } catch {
      }
  }
  /** Host app sets the logged-in account id used for editor allow-list checks. */
  setAccountId(t) {
    var e, i;
    return this.accountId = t == null || t === "" ? null : String(t), (i = (e = this.launcher) == null ? void 0 : e.setAccountId) == null || i.call(e, this.accountId), this.applyAccessPolicy(), this;
  }
  setReadOnly(t) {
    var i, s;
    const e = !!t;
    return this.readOnly === e ? ((i = this.launcher) == null || i.setReadOnly(this.readOnly), this) : (this.readOnly = e, (s = this.launcher) == null || s.setReadOnly(this.readOnly), this.readOnly && (this.mode === "recording" || this.mode === "manage" || this.mode === "manage-routes") && (this.mode === "recording" && this.stopRecording(), this.mode = "idle", this.closePanel()), this.render(), this);
  }
  setLauncherVisible(t) {
    var i, s, r, a;
    const e = !!t;
    return this.launcherVisible === e ? ((i = this.launcher) == null || i.setVisible(this.launcherVisible), this) : (this.launcherVisible = e, (s = this.launcher) == null || s.setVisible(this.launcherVisible), this.launcherVisible || ((a = (r = this.launcher) == null ? void 0 : r.setMenuOpen) == null || a.call(r, !1), this.mode !== "playback" && this.mode !== "recording" && this.closePanel()), this);
  }
  /** Sync read-only + toolbar visibility from settings + current account/url. */
  applyAccessPolicy() {
    var s, r, a, o, l, c, d, u;
    const t = this.bypassUnlocked || ii(this.accountId, (s = this.settings) == null ? void 0 : s.editorAccountIds);
    this.setReadOnly(!t);
    const e = ei(this.getUrlKey(), (r = this.settings) == null ? void 0 : r.hiddenUrls), i = this.options.showLauncher !== !1 && !e;
    return this.setLauncherVisible(i), (l = (a = this.launcher) == null ? void 0 : a.setBypassPin) == null || l.call(a, (o = this.settings) == null ? void 0 : o.bypassPin), (u = (c = this.launcher) == null ? void 0 : c.setShowAccountId) == null || u.call(c, ((d = this.settings) == null ? void 0 : d.showAccountId) !== !1), this;
  }
  /** Unlock editor mode via orb hover + PIN, then open Global Settings panel. */
  openPanelViaBypass() {
    var t, e;
    return this.mode === "playback" ? this : this.fileStorage && !this.apiReady ? this : (this.bypassUnlocked = !0, this.setReadOnly(!1), this.openManageRoutes(), (e = (t = this.launcher) == null ? void 0 : t.setMenuOpen) == null || e.call(t, !1), this);
  }
  async bootstrap() {
    var t, e, i, s;
    await Promise.all([this.reloadFileGuides(), this.reloadFileSettings()]);
    try {
      const r = this.getGuideForCurrentPage();
      if (r) this.load(r, { dirty: !1, mode: "idle" });
      else if (!this.fileStorage) {
        const a = Di(this.options.storageKey);
        a && this.load(a, { dirty: !1, mode: "manage" });
      }
    } catch {
    }
    await this.ensureGuideApiReady(), this.syncLauncher(), this.render(), Pt(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (s = (i = this.player) == null ? void 0 : i.setUiOptions) == null || s.call(i, this.settings.ui), this.resumePendingPlay();
  }
  setApiReady(t) {
    var e;
    this.apiReady = !!t, (e = this.launcher) == null || e.setApiReady(this.apiReady);
  }
  clearApiProbeTimer() {
    this.apiProbeTimer && (clearTimeout(this.apiProbeTimer), this.apiProbeTimer = null);
  }
  /**
   * With file storage, Record/Panel/Play stay locked until `/__sg/guides` answers.
   * Retries quietly so a late Laravel/Vite boot unlocks the launcher.
   * If downloadFallback is on, unlock after probe failure (save can download).
   */
  async ensureGuideApiReady() {
    if (!this.fileStorage)
      return this.setApiReady(!0), !0;
    if (this.clearApiProbeTimer(), await Ce(this.fileStorage) || this.fileStorage.downloadFallback)
      return this.setApiReady(!0), !0;
    if (this.setApiReady(!1), this.destroyed) return !1;
    const e = async () => {
      if (this.destroyed || !this.fileStorage) return;
      if (await Ce(this.fileStorage) || this.fileStorage.downloadFallback) {
        this.setApiReady(!0), this.clearApiProbeTimer(), this.syncLauncher();
        return;
      }
      this.apiProbeTimer = setTimeout(e, 2e3);
    };
    return this.apiProbeTimer = setTimeout(e, 2e3), !1;
  }
  createHandlers() {
    return {
      "start-recording": () => this.startRecording(),
      "add-steps": () => this.continueRecording(),
      "stop-recording": () => this.stopRecording(),
      load: () => this.openGuideFile(),
      paste: () => this.pasteGuide(),
      play: () => this.start(),
      "play-here": (t) => this.startFrom(t),
      prev: () => this.prev(),
      next: () => this.next(),
      skip: () => this.skip(),
      close: () => this.close(),
      "save-page": () => this.saveGuideForCurrentPage(),
      download: () => this.downloadJSON(),
      "download-all": () => this.downloadAllGuides(),
      copy: () => this.copyJSON().catch((t) => {
        var e;
        (e = globalThis.alert) == null || e.call(globalThis, `Could not copy guide: ${t.message}`);
      }),
      remove: (t) => this.confirmRemove(t),
      "move-up": (t) => this.moveRelative(t, -1),
      "move-down": (t) => this.moveRelative(t, 1),
      "move-to": (t, e) => this.moveToPosition(t, e),
      edit: (t, e, i) => this.editStep(t, e, i),
      editGuide: (t, e) => this.editGuide(t, e),
      commitGuideTitle: () => this.commitGuideTitle(),
      preview: (t) => this.preview(t),
      previewEnd: () => this.overlay.hide(),
      drop: (t, e) => this.dropStep(t, e),
      "open-manage": () => this.openManageRoutes(),
      "close-manage": () => {
        this.mode = "idle", this.render();
      },
      "update-setting": (t, e) => this.updateSetting(t, e),
      "reset-ui-settings": () => this.resetUiSettings(),
      "play-guide": (t) => {
        const e = this.getAllGuides().find((i) => i.id === t);
        e && this.playGuide(e);
      },
      "edit-guide": (t) => this.openGuideForEdit(t),
      "delete-guide": (t) => this.deletePageGuide(t),
      "edit-step-setting": (t, e, i) => this.editStepSetting(t, e, i),
      "edit-guide-setting": (t, e, i) => this.editGuideSetting(t, e, i)
    };
  }
  getUrlKey() {
    return typeof this.options.getUrlKey == "function" ? String(this.options.getUrlKey() || "/") : qi(this.options.urlMatch);
  }
  getGuideForCurrentPage() {
    return this.getGuidesForCurrentPage()[0] || null;
  }
  getGuidesForCurrentPage() {
    const t = j(this.getUrlKey());
    return this.getAllGuides().filter((e) => j(e.url || "/") === t);
  }
  getAllGuides() {
    const t = [];
    Object.entries(this.options.guides || {}).forEach(([a, o]) => {
      (Array.isArray(o) ? o : o ? [o] : []).forEach((c) => t.push({ ...c, url: c.url || a }));
    });
    const e = this.options.guidesByUrl ? ji(this.options.storageKey) : [], i = this.fileGuides || [], s = /* @__PURE__ */ new Map(), r = this.fileStorage ? [...t, ...e, ...i] : [...t, ...i, ...e];
    for (const a of r)
      try {
        const o = rt(a);
        s.set(o.id, o);
      } catch {
      }
    return [...s.values()].sort((a, o) => String(a.url || "").localeCompare(String(o.url || "")) || String(a.title || "").localeCompare(String(o.title || "")));
  }
  hasGuideForCurrentPage() {
    return this.getGuidesForCurrentPage().length > 0;
  }
  saveGuideForCurrentPage() {
    var e;
    if (this.assertUsable(), this.readOnly) return this;
    if (!this.guide.steps.length)
      return (e = globalThis.alert) == null || e.call(globalThis, "Add at least one step before saving this page guide."), this;
    const t = this.getUrlKey();
    if (this.guide = rt({
      ...this.guide,
      url: t,
      title: this.guide.title || `Guide for ${t}`
    }), this.options.guidesByUrl && Ot(this.options.storageKey, t, this.guide), this.dirty = !1, this.persistDraft(), Array.isArray(this.fileGuides)) {
      const i = this.fileGuides.findIndex((s) => s.id === this.guide.id);
      i >= 0 ? this.fileGuides[i] = { ...this.fileGuides[i], ...this.guide } : this.fileGuides = [...this.fileGuides, structuredClone(this.guide)];
    }
    return this.syncLauncher(), this.render({
      flashMessage: `Saved “${this.guide.title || "Untitled guide"}”.`
    }), this.fileStorage && (te(this.guide, t), Ft(this.fileStorage, this.guide, t).then(async (i) => {
      var s;
      await this.reloadFileGuides(), i.via === "download" && ((s = globalThis.alert) == null || s.call(
        globalThis,
        `Guide downloaded as ${String(i.path).replace(/\//g, "__")}. Place it in Smart Attendance public/guides/ (same route folders).`
      ));
    }).catch((i) => {
      var s;
      (s = globalThis.alert) == null || s.call(globalThis, `Guide saved locally, but file storage failed: ${i.message}`);
    })), this;
  }
  playPageGuide(t) {
    var i, s, r;
    if (this.assertUsable(), this.fileStorage && !this.apiReady) return this;
    const e = this.getAllGuides();
    if (!e.length)
      return this.openPanel(), (i = globalThis.alert) == null || i.call(globalThis, "No guides saved yet. Record one first."), this;
    if (t) {
      const a = e.find((o) => o.id === t);
      return a ? this.playGuide(a) : ((s = globalThis.alert) == null || s.call(globalThis, "That guide could not be found."), this);
    }
    return (r = this.launcher) == null || r.showGuideOptions(
      e,
      (a) => this.playGuide(a),
      { hierarchical: !0, currentUrl: this.getUrlKey() }
    ), this;
  }
  async playGuide(t) {
    var r;
    this.assertUsable();
    const e = rt(t), i = j(e.url || "/"), s = j(this.getUrlKey());
    if (i !== s) {
      if ($t(this.options.storageKey, {
        guideId: e.id,
        urlKey: i,
        guide: e,
        stepIndex: 0
      }), this.getGuidePlaybackSettings(e).reloadOnNavigate || typeof this.options.navigate != "function")
        return globalThis.location.assign(i), this;
      try {
        await this.options.navigate(i);
      } catch (o) {
        return (r = globalThis.alert) == null || r.call(globalThis, `Could not open ${i}: ${(o == null ? void 0 : o.message) || o}`), this;
      }
      return this.resumePendingPlay({ soft: !0 }), this;
    }
    return this.startPageGuide(e);
  }
  deletePageGuide(t) {
    var r, a, o;
    if (this.assertUsable(), this.readOnly) return this;
    if (!t) return this;
    if (!((r = globalThis.confirm) != null && r.call(globalThis, "Delete this page guide? This cannot be undone."))) return this;
    const e = this.getAllGuides().find((l) => l.id === t), i = j((e == null ? void 0 : e.url) || this.getUrlKey());
    this.options.guidesByUrl && Ki(this.options.storageKey, i, t), this.fileGuides = (this.fileGuides || []).filter((l) => l.id !== t), this.fileStorage && e && Zi(this.fileStorage, {
      guideId: t,
      urlKey: i,
      path: te(e, i)
    }).then(() => this.reloadFileGuides()).catch(() => {
    });
    const s = this.getAllGuides().filter((l) => l.id !== t);
    if (((a = this.guide) == null ? void 0 : a.id) === t) {
      const l = s.find((c) => j(c.url) === j(this.getUrlKey())) || s[0];
      l ? this.load(l, { dirty: !1, mode: this.mode === "manage-routes" ? "manage-routes" : "idle" }) : (this.guide = Lt(this.getUrlKey()), this.mode = this.mode === "manage-routes" ? "manage-routes" : "idle", this.dirty = !1, this.persistDraft());
    }
    return this.syncLauncher(), this.render(), s.length && this.launcher && !this.launcher.optionsRoot.hidden ? this.launcher.showGuideOptions(
      s,
      (l) => this.playGuide(l),
      { hierarchical: !0, currentUrl: this.getUrlKey() }
    ) : (o = this.launcher) == null || o.hideGuideOptions(), this;
  }
  startPageGuide(t, { skipReset: e = !1, stepIndex: i = 0 } = {}) {
    const s = rt(t), r = this.getGuidePlaybackSettings(s);
    if (!e && r.resetBeforePlay === "reload")
      return $t(this.options.storageKey, {
        guideId: s.id,
        urlKey: j(s.url || this.getUrlKey()),
        guide: s,
        stepIndex: 0
      }), globalThis.location.reload(), this;
    e || Dt(this.options.storageKey), this.load(s, { dirty: !1, mode: "manage" });
    const o = Math.max(0, Math.min(Number(i) || 0, Math.max(s.steps.length - 1, 0)));
    return this.startFrom(o);
  }
  persistPlaybackProgress(t, { mayNavigate: e = !1 } = {}) {
    var s, r;
    if (!((s = this.guide) != null && s.id)) return;
    const i = ((r = this.guide.steps) == null ? void 0 : r.length) || 0;
    if (t >= i) {
      Dt(this.options.storageKey);
      return;
    }
    $t(this.options.storageKey, {
      guideId: this.guide.id,
      guide: this.guide,
      stepIndex: t,
      resumeAnyUrl: !0,
      mayNavigate: !!e,
      savedAt: Date.now()
    });
  }
  resumePendingPlay({ soft: t = !1 } = {}) {
    const e = zi(this.options.storageKey);
    if (!(e != null && e.guideId) && !(e != null && e.guide)) return;
    const i = !!e.resumeAnyUrl, s = j(e.urlKey || "/"), r = j(this.getUrlKey());
    if (e.urlKey && !i && s !== r) {
      t && ($t(this.options.storageKey, e), window.setTimeout(() => this.resumePendingPlay({ soft: !0 }), 300));
      return;
    }
    const a = t ? 120 : Math.max(0, Number(this.settings.resetBeforePlayDelay || this.options.resetBeforePlayDelay) || 450);
    window.setTimeout(() => {
      var l, c;
      if (this.destroyed) return;
      let o = this.getAllGuides().find((d) => d.id === e.guideId);
      if (!o && e.guide)
        try {
          o = rt(e.guide);
        } catch {
          o = null;
        }
      if (!o) {
        (l = globalThis.alert) == null || l.call(globalThis, "The page guide could not be resumed after navigation.");
        return;
      }
      try {
        const d = t ? Math.max(0, Number(e.stepIndex) || 0) : 0;
        this.startPageGuide(o, { skipReset: !0, stepIndex: d });
      } catch (d) {
        (c = globalThis.alert) == null || c.call(globalThis, `Could not resume page guide: ${d.message}`);
      }
    }, a);
  }
  rebindPlaybackAfterNavigation() {
    var t;
    this.mode === "playback" && (clearTimeout(this.playbackResumeTimer), this.persistPlaybackProgress(((t = this.player) == null ? void 0 : t.index) ?? 0, { mayNavigate: !0 }), this.playbackResumeTimer = window.setTimeout(() => {
      var e;
      if (!this.destroyed) {
        if (this.mode === "playback" && ((e = this.player) != null && e.active)) {
          this.player.continueAfterNavigation();
          return;
        }
        this.resumePendingPlay({ soft: !0 });
      }
    }, 200));
  }
  /** Effective navigation settings: per-guide first, then global defaults. */
  getGuidePlaybackSettings(t = this.guide) {
    const e = ht(this.settings), i = t != null && t.settings && typeof t.settings == "object" ? t.settings : {};
    return {
      reloadOnNavigate: i.reloadOnNavigate != null ? !!i.reloadOnNavigate : e.reloadOnNavigate,
      resetBeforePlay: i.resetBeforePlay === "reload" || i.resetBeforePlay === "none" ? i.resetBeforePlay : e.resetBeforePlay,
      resetBeforePlayDelay: Number.isFinite(Number(i.resetBeforePlayDelay)) ? Math.max(0, Number(i.resetBeforePlayDelay)) : e.resetBeforePlayDelay
    };
  }
  openManageRoutes() {
    return this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.mode = "manage-routes", this.render(), this.openPanel(), this);
  }
  openGuideForEdit(t) {
    var i;
    if (this.assertUsable(), this.readOnly) return this;
    const e = this.getAllGuides().find((s) => s.id === t);
    return e ? (this.load(e, { dirty: !1, mode: "manage" }), this.openPanel(), this) : ((i = globalThis.alert) == null || i.call(globalThis, "Guide not found."), this);
  }
  updateSetting(t, e) {
    var r, a, o, l, c, d;
    if (this.readOnly && (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "reloadOnNavigate" || t === "resetBeforePlay" || t === "resetBeforePlayDelay" || t === "theme" || String(t || "").startsWith("ui.")))
      return this;
    const i = ht({ ...this.settings });
    if (t === "reloadOnNavigate" && (i.reloadOnNavigate = !!e), t === "resetBeforePlay" && (i.resetBeforePlay = e ? "reload" : "none"), t === "resetBeforePlayDelay" && (i.resetBeforePlayDelay = Math.max(0, Number(e) || 0)), t === "theme" && (i.theme = String(e || "dark").toLowerCase() === "light" ? "light" : "dark"), t === "editorAccountIds" && (i.editorAccountIds = e), t === "hiddenUrls" && (i.hiddenUrls = e), t === "bypassPin" && (i.bypassPin = e), t === "showAccountId" && (i.showAccountId = !!e), String(t || "").startsWith("ui.")) {
      const u = String(t).slice(3), h = { ...i.ui };
      if (u === "animations" || u === "spotlightFade" || u === "animatedCursor")
        h[u] = !!e;
      else if (u === "highlightMotion")
        h.highlightMotion = String(e || "pulse");
      else if (u === "overlayOpacity") {
        const p = Number(e);
        h.overlayOpacity = Number.isFinite(p) ? Math.min(0.9, Math.max(0, p > 1 ? p / 100 : p)) : h.overlayOpacity;
      } else u === "transitionMs" ? h.transitionMs = Math.max(0, Math.round(Number(e) || 0)) : ["tipBg", "tipText", "skipBg", "skipText", "spotlightColor"].includes(u) && (h[u] = String(e || ""));
      i.ui = h;
    }
    return this.settings = ht(i), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, Pt(this.settings), (a = (r = this.overlay) == null ? void 0 : r.applyUiSettings) == null || a.call(r, this.settings.ui), (l = (o = this.player) == null ? void 0 : o.setUiOptions) == null || l.call(o, this.settings.ui), this.scheduleSettingsSave(), (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin") && this.applyAccessPolicy(), t === "showAccountId" && ((d = (c = this.launcher) == null ? void 0 : c.setShowAccountId) == null || d.call(c, this.settings.showAccountId)), t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || String(t || "").startsWith("ui.") && (t.includes("Bg") || t.includes("Text") || t.includes("Color") || t === "ui.overlayOpacity" || t === "ui.transitionMs") || this.render(), this;
  }
  resetUiSettings() {
    var t, e, i, s;
    return this.settings = ht({
      ...this.settings,
      ui: ee()
    }), Pt(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (s = (i = this.player) == null ? void 0 : i.setUiOptions) == null || s.call(i, this.settings.ui), this.scheduleSettingsSave(), this.render(), this;
  }
  scheduleSettingsSave() {
    clearTimeout(this.settingsSaveTimer), this.settingsSaveTimer = setTimeout(() => {
      this.flushSettingsSave().catch(() => {
      });
    }, 250);
  }
  async flushSettingsSave() {
    var i, s;
    if (!this.fileStorage) return;
    const t = ht(this.settings), e = await es(this.fileStorage, t);
    e != null && e.settings && typeof e.settings == "object" && (this.settings = ht({
      ...this.settings,
      ...e.settings
    }), (s = (i = this.launcher) == null ? void 0 : i.setBypassPin) == null || s.call(i, this.settings.bypassPin), this.applyAccessPolicy());
  }
  editStepSetting(t, e, i) {
    const s = this.guide.steps.find((r) => r.id === t);
    if (s) {
      if (s.settings = { ...s.settings || {} }, e === "delay" || e === "hideDelay") {
        const r = Math.max(0, Math.round(Number(i) || 0));
        r ? s.settings[e] = r : delete s.settings[e];
      }
      e === "autoAdvanceDelay" && (i === "" || i == null ? delete s.settings.autoAdvanceDelay : s.settings.autoAdvanceDelay = Math.max(0, Number(i) || 0)), e === "autoScroll" && (i ? delete s.settings.autoScroll : s.settings.autoScroll = !1), e === "autoSkipMissing" && (i ? delete s.settings.autoSkipMissing : s.settings.autoSkipMissing = !1), Object.keys(s.settings).length === 0 && delete s.settings, this.dirty = !0, this.scheduleGuideSave();
    }
  }
  scheduleGuideSave() {
    clearTimeout(this.guideSaveTimer), this.guideSaveTimer = setTimeout(() => {
      this.flushGuideSave().catch(() => {
      });
    }, 300);
  }
  async flushGuideSave() {
    if (this.guide) {
      if (this.fileStorage) {
        const t = j(this.guide.url || this.getUrlKey());
        Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((e) => e.id === this.guide.id ? { ...this.guide } : e)), await Ft(this.fileStorage, this.guide, t);
        return;
      }
      if (this.options.guidesByUrl) {
        Ot(this.options.storageKey, j(this.guide.url || this.getUrlKey()), this.guide);
        return;
      }
      this.persistDraft();
    }
  }
  editGuideSetting(t, e, i) {
    var a, o, l;
    const s = t || ((a = this.guide) == null ? void 0 : a.id);
    let r = ((o = this.guide) == null ? void 0 : o.id) === s ? this.guide : this.getAllGuides().find((c) => c.id === s);
    if (!r) return this;
    if (r = { ...r, settings: { ...r.settings || {} } }, e === "autoScroll" && (i ? delete r.settings.autoScroll : r.settings.autoScroll = !1), e === "reloadOnNavigate" && (i ? r.settings.reloadOnNavigate = !0 : delete r.settings.reloadOnNavigate), e === "resetBeforePlay" && (i ? r.settings.resetBeforePlay = "reload" : delete r.settings.resetBeforePlay), Object.keys(r.settings).length === 0 && delete r.settings, ((l = this.guide) == null ? void 0 : l.id) === r.id && (this.guide = r, this.dirty = !0, this.persistDraft()), Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((c) => c.id === r.id ? { ...c, ...r } : c)), this.fileStorage) {
      const c = j(r.url || this.getUrlKey());
      Ft(this.fileStorage, r, c).then(() => this.reloadFileGuides()).catch(() => {
      });
    } else this.options.guidesByUrl && Ot(this.options.storageKey, j(r.url || "/"), r);
    return this.render(), this;
  }
  togglePanel() {
    if (this.mode !== "playback") {
      if (this.panelVisible && this.mode === "manage-routes") {
        this.closePanel();
        return;
      }
      this.openManageRoutes();
    }
  }
  openPanel() {
    this.mode !== "playback" && (this.panelVisible = !0, this.panel.setVisible(!0), this.syncLauncher());
  }
  closePanel() {
    this.mode !== "recording" && (this.panelVisible = !1, this.panel.setVisible(!1), this.syncLauncher());
  }
  syncLauncher() {
    var e, i, s, r, a, o, l, c, d, u, h, p, g, f, y;
    const t = this.getAllGuides().length;
    (e = this.launcher) == null || e.setApiReady(this.apiReady), (i = this.launcher) == null || i.setReadOnly(this.readOnly), (a = (s = this.launcher) == null ? void 0 : s.setBypassPin) == null || a.call(s, (r = this.settings) == null ? void 0 : r.bypassPin), (c = (o = this.launcher) == null ? void 0 : o.setShowAccountId) == null || c.call(o, ((l = this.settings) == null ? void 0 : l.showAccountId) !== !1), (u = (d = this.launcher) == null ? void 0 : d.setAccountId) == null || u.call(d, this.accountId), (h = this.launcher) == null || h.setVisible(this.launcherVisible), (p = this.launcher) == null || p.setSearchData(this.getAllGuides(), this.getUrlKey()), (g = this.launcher) == null || g.setPlayState(t), (f = this.launcher) == null || f.setPanelOpen(this.panelVisible), (y = this.launcher) == null || y.setPlaying(this.mode === "playback");
  }
  onUrlChange() {
    if (this.applyAccessPolicy(), this.mode === "recording") return;
    if (this.mode === "playback") {
      this.rebindPlaybackAfterNavigation();
      return;
    }
    const t = this.mode === "manage-routes" && !this.readOnly, e = this.getGuideForCurrentPage();
    e ? this.load(e, { dirty: !1, mode: t ? "manage-routes" : "idle" }) : (this.guide = Lt(this.getUrlKey()), this.mode = t ? "manage-routes" : "idle", this.dirty = !1, this.render()), this.syncLauncher();
  }
  render(t = {}) {
    var s, r, a;
    const e = this.guide.steps.map((o) => ({
      ...o,
      invalid: o.action !== "manual" && !Et(o.selector)
    })), i = !!this.focusGuideTitle;
    this.focusGuideTitle = !1, this.panel.update({
      mode: this.mode,
      steps: e,
      guideTitle: this.guide.title,
      pageUrl: this.getUrlKey(),
      hasPageGuide: this.hasGuideForCurrentPage(),
      pageGuides: this.getGuidesForCurrentPage().map((o) => {
        var l;
        return {
          id: o.id,
          title: o.title,
          steps: ((l = o.steps) == null ? void 0 : l.length) || 0,
          url: o.url
        };
      }),
      allGuides: this.getAllGuides().map((o) => {
        var l;
        return {
          id: o.id,
          title: o.title,
          steps: ((l = o.steps) == null ? void 0 : l.length) || 0,
          url: o.url,
          settings: o.settings || {}
        };
      }),
      settings: { ...this.settings },
      guideSettings: ((s = this.guide) == null ? void 0 : s.settings) || {},
      currentGuideId: ((r = this.guide) == null ? void 0 : r.id) || null,
      accountId: this.accountId,
      recordingAppend: !!this.recordingAppend,
      recordingStepsBaseline: Number(this.recordingStepsBaseline) || 0,
      newStepsCount: this.mode === "recording" ? Math.max(0, (((a = this.guide.steps) == null ? void 0 : a.length) || 0) - (Number(this.recordingStepsBaseline) || 0)) : 0,
      focusGuideTitle: i,
      dirty: !!this.dirty,
      readOnly: !!this.readOnly,
      flashMessage: "",
      ...t
    }), this.syncLauncher();
  }
  startRecording() {
    return this.assertUsable(), this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.guide = Lt(this.getUrlKey()), this.dirty = !1, this.recordingAppend = !1, this.recordingStepsBaseline = 0, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  /** Append more recorded interactions to the current guide (from Manage steps). */
  continueRecording() {
    return this.assertUsable(), this.readOnly ? this : (this.guide || (this.guide = Lt(this.getUrlKey())), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.recordingAppend = !0, this.recordingStepsBaseline = this.guide.steps.length, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  stopRecording() {
    this.assertUsable(), this.recorder.stop(), this.mode = "manage", this.dirty = this.guide.steps.length > 0, this.guide.url = this.getUrlKey();
    const t = !!this.recordingAppend, e = Math.max(0, this.guide.steps.length - (Number(this.recordingStepsBaseline) || 0));
    this.recordingAppend = !1, this.recordingStepsBaseline = this.guide.steps.length;
    const i = (/* @__PURE__ */ new Date()).toLocaleString(), s = `${this.guide.steps.length} step${this.guide.steps.length === 1 ? "" : "s"} · ${i}`;
    return !!(this.guide.title && this.guide.title !== `Guide for ${this.guide.url}` && !/^\d+ steps? · /.test(this.guide.title)) || (this.guide.title = s), this.focusGuideTitle = !t, this.persistDraft(), this.guide.steps.length && this.saveGuideForCurrentPage(), this.render({
      flashMessage: t && e > 0 ? `${e} step${e === 1 ? "" : "s"} added. Rename below if needed.` : "Guide saved. Rename it below if you want a clearer title."
    }), structuredClone(this.guide);
  }
  recordStep(t) {
    var e, i;
    this.guide.steps.push(t), this.dirty = !0, this.persistDraft(), (i = (e = this.options).onRecordStep) == null || i.call(e, structuredClone(t)), this.render();
  }
  load(t, { dirty: e = !1, mode: i = "manage" } = {}) {
    this.assertUsable();
    const s = typeof t == "string" ? JSON.parse(t) : t;
    return this.guide = rt(s), this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.mode = i, this.dirty = e, this.render(), this;
  }
  updateSteps(t) {
    return this.guide.steps = rt({ ...this.guide, steps: t }).steps, this.changed(), this;
  }
  removeStep(t) {
    var s;
    const e = String(t || "").trim();
    if (!e || !((s = this.guide) != null && s.steps)) return this;
    const i = this.guide.steps.findIndex((r) => String(r.id) === e);
    if (i < 0) return this;
    if (this.guide.steps = this.guide.steps.filter((r) => String(r.id) !== e), this.mode === "recording") {
      const r = Number(this.recordingStepsBaseline) || 0;
      i < r && (this.recordingStepsBaseline = Math.max(0, r - 1));
    }
    return this.changed(), this;
  }
  confirmRemove(t) {
    const e = String(t || "").trim();
    if (!e) return;
    (typeof globalThis.confirm == "function" ? globalThis.confirm("Remove this guide step?") : !0) && this.removeStep(e);
  }
  moveStep(t, e) {
    const i = String(t || "").trim();
    if (!i) return this;
    const s = this.guide.steps.findIndex((o) => String(o.id) === i);
    if (s < 0) return this;
    const r = Math.max(0, Math.min(Number(e), this.guide.steps.length - 1));
    if (r === s) return this;
    const [a] = this.guide.steps.splice(s, 1);
    return this.guide.steps.splice(r, 0, a), this.changed(), this;
  }
  moveRelative(t, e) {
    const i = String(t || "").trim();
    if (!i || !e) return this;
    const s = this.guide.steps.findIndex((r) => String(r.id) === i);
    return s < 0 ? this : this.moveStep(i, s + e);
  }
  /** Move a step to a 1-based position (e.g. 1 = first step). */
  moveToPosition(t, e) {
    const i = String(t || "").trim(), s = Math.floor(Number(e));
    return !i || !Number.isFinite(s) || s < 1 ? this : this.moveStep(i, s - 1);
  }
  dropStep(t, e) {
    const i = String(t || "").trim(), s = String(e || "").trim();
    if (!i || !s || i === s) return this;
    const r = this.guide.steps.findIndex((a) => String(a.id) === s);
    return r < 0 ? this : this.moveStep(i, r);
  }
  editStep(t, e, i) {
    const s = this.guide.steps.find((r) => r.id === t);
    s && (e === "waitRequired" ? s.waitFor = i ? { type: "input", required: !0 } : null : ["title", "description"].includes(e) && (s[e] = String(i)), this.dirty = !0, this.persistDraft(), ["title", "description"].includes(e) && this.scheduleGuideSave(), e === "waitRequired" && this.render());
  }
  editGuide(t, e) {
    if (t !== "title") return;
    const i = String(e).trim() || this.guide.title;
    this.guide.title = i, this.dirty = !0, this.persistDraft(), Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((s) => s.id === this.guide.id ? { ...s, title: i } : s)), this.syncLauncher();
  }
  commitGuideTitle() {
    var t, e;
    return (e = (t = this.guide) == null ? void 0 : t.steps) != null && e.length ? this.saveGuideForCurrentPage() : this;
  }
  changed() {
    var t;
    if (this.dirty = !0, this.persistDraft(), Array.isArray(this.fileGuides) && ((t = this.guide) != null && t.id)) {
      const e = structuredClone(this.guide), i = this.fileGuides.findIndex((s) => s.id === this.guide.id);
      i >= 0 ? this.fileGuides[i] = e : this.fileGuides = [...this.fileGuides, e];
    }
    this.scheduleGuideSave(), this.render();
  }
  preview(t) {
    const e = this.guide.steps.find((s) => s.id === t), i = e && Et(e.selector);
    i && this.overlay.highlight(i, !1);
  }
  start() {
    return this.startFrom(0);
  }
  startFrom(t = 0) {
    if (this.assertUsable(), !this.guide.steps.length) throw new Error("Cannot start a guide with no steps.");
    const e = typeof t == "number" ? t : this.guide.steps.findIndex((i) => i.id === t);
    if (e < 0) throw new Error("The requested guide step does not exist.");
    return this.recorder.stop(), this.closePanel(), this.mode = "playback", this.overlay.setControlsEnabled(!0), this.player.setOptions({
      autoScroll: !0,
      stepDelay: 0
    }), this.persistPlaybackProgress(e), this.render({
      currentStep: this.guide.steps[e],
      currentIndex: e,
      total: this.guide.steps.length,
      waiting: !1,
      failed: !1
    }), this.player.start(this.guide.steps, e), this;
  }
  onPlaybackChange(t, e, i) {
    var s, r;
    (r = (s = this.options).onStepChange) == null || r.call(s, structuredClone(t), e), this.render({
      currentStep: t,
      currentIndex: e,
      total: this.guide.steps.length,
      ...i
    });
  }
  onPlaybackFail(t, e) {
    var i, s, r, a;
    (s = (i = this.options).onStepFail) == null || s.call(i, structuredClone(t), e), this.render({
      currentStep: t,
      currentIndex: e,
      total: this.guide.steps.length,
      waiting: !1,
      failed: !0,
      autoSkipping: !1,
      message: ((a = (r = this.player) == null ? void 0 : r.missingTargetMessage) == null ? void 0 : a.call(r, t)) || ""
    });
  }
  onPlaybackComplete() {
    var t, e;
    Dt(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), (e = (t = this.options).onComplete) == null || e.call(t);
  }
  next() {
    return this.player.next(), this;
  }
  prev() {
    return this.player.prev(), this;
  }
  skip() {
    return this.player.skip(), this;
  }
  close(t = !1) {
    var e, i;
    return !this.options.allowClose && !t || this.dirty && !t && globalThis.confirm && !globalThis.confirm("Close with unsaved guide changes?") ? !1 : (this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), Dt(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.mode = "idle", this.render(), this.options.showLauncher && this.closePanel(), (i = (e = this.options).onClose) == null || i.call(e), !0);
  }
  exportJSON() {
    return Kt(this.guide);
  }
  downloadJSON(t = `${this.guide.id}.json`) {
    return Fi(this.guide, t), this.dirty = !1, this;
  }
  downloadAllGuides() {
    var i;
    this.assertUsable();
    const t = this.getAllGuides();
    if (!t.length)
      return (i = globalThis.alert) == null || i.call(globalThis, "No guides to download yet."), this;
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return Hi(t, `system-guider-guides-${e}.json`), this;
  }
  async copyJSON() {
    const t = await Ui(this.guide);
    return this.dirty = !1, t;
  }
  /** Persist one guide to local map + backend (file storage) without changing the active editor. */
  async persistImportedGuide(t) {
    const e = rt(t), i = j(e.url || "/");
    if (e.url = i, this.options.guidesByUrl && Ot(this.options.storageKey, i, e), Array.isArray(this.fileGuides)) {
      const s = this.fileGuides.findIndex((r) => r.id === e.id);
      s >= 0 ? this.fileGuides[s] = { ...e } : this.fileGuides = [...this.fileGuides, { ...e }];
    } else
      this.fileGuides = [{ ...e }];
    return this.fileStorage && await Ft(this.fileStorage, e, i), e;
  }
  /**
   * Import one or more guides from JSON text/objects/files.
   * Auto-saves each guide to the backend when file storage is enabled.
   */
  async importGuides(t, { sourceLabel: e = "import" } = {}) {
    var l;
    if (this.readOnly) return [];
    this.assertUsable();
    const { guides: i, errors: s } = xe(t), r = [], a = [...s];
    for (const c of i)
      try {
        r.push(await this.persistImportedGuide(c));
      } catch (d) {
        a.push(`${c.title || c.id}: ${d.message}`);
      }
    if (this.fileStorage)
      try {
        await this.reloadFileGuides();
      } catch {
      }
    this.syncLauncher(), this.mode = "manage-routes", this.openPanel();
    const o = r.length ? `Loaded ${r.length} guide${r.length === 1 ? "" : "s"} from ${e}${this.fileStorage ? " and saved to backend" : ""}.` : `No guides loaded from ${e}.`;
    return this.render({ flashMessage: o }), a.length && ((l = globalThis.alert) == null || l.call(
      globalThis,
      `${r.length ? `Some guides had issues:
` : `Could not load guides:
`}${a.slice(0, 8).join(`
`)}`
    )), r;
  }
  openGuideFile() {
    const t = document.createElement("input");
    t.type = "file", t.accept = "application/json,.json", t.multiple = !0, t.addEventListener("change", async () => {
      var a, o, l;
      const e = [...t.files || []];
      if (!e.length) return;
      const i = [], s = [];
      for (const c of e)
        try {
          const d = await c.text(), { guides: u, errors: h } = xe(d);
          i.push(...u), s.push(...h.map((p) => `${c.name}: ${p}`));
        } catch (d) {
          s.push(`${c.name}: ${d.message}`);
        }
      if (!i.length) {
        (a = globalThis.alert) == null || a.call(globalThis, s[0] || "No valid guide JSON selected.");
        return;
      }
      const r = [...new Map(i.map((c) => [c.id, c])).values()];
      try {
        await this.importGuides(
          { guides: r },
          { sourceLabel: e.length === 1 ? e[0].name : `${e.length} files` }
        ), s.length && ((o = globalThis.alert) == null || o.call(globalThis, `Loaded with warnings:
${s.slice(0, 8).join(`
`)}`));
      } catch (c) {
        (l = globalThis.alert) == null || l.call(globalThis, `Could not load guides: ${c.message}`);
      }
    }, { once: !0 }), t.click();
  }
  pasteGuide() {
    var e;
    const t = (e = globalThis.prompt) == null ? void 0 : e.call(globalThis, "Paste System Guider JSON (one guide, array, or { guides: [...] })");
    t && this.importGuides(t, { sourceLabel: "clipboard" }).catch((i) => {
      var s;
      (s = globalThis.alert) == null || s.call(globalThis, `Could not load guide: ${i.message}`);
    });
  }
  persistDraft() {
    this.fileStorage || $i(this.options.storageKey, this.guide);
  }
  onKeyDown(t) {
    if (t.key === "Escape" && this.mode === "playback" && this.options.allowClose && this.close(), t.key === "Enter" && this.mode === "playback") {
      const e = this.panel.root.querySelector('[data-action="next"]');
      e && !e.disabled && this.next();
    }
  }
  assertUsable() {
    if (this.destroyed) throw new Error("This System Guider instance was destroyed.");
  }
  destroy() {
    var t;
    this.destroyed || (this.destroyed = !0, this.clearApiProbeTimer(), clearTimeout(this.playbackResumeTimer), clearTimeout(this.guideSaveTimer), clearTimeout(this.settingsSaveTimer), this.recorder.destroy(), this.player.destroy(), this.overlay.destroy(), this.panel.destroy(), (t = this.launcher) == null || t.destroy(), document.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("popstate", this.onUrlChange), this.restoreHistoryHooks());
  }
}
let Bt = null;
const ns = {
  init(n = {}) {
    if (typeof window > "u" || typeof document > "u")
      throw new Error("System Guider can only be initialized in a browser.");
    return Bt == null || Bt.destroy(), Bt = new ss(n), Bt;
  }
};
export {
  ns as default
};
