const K = (n, t, e = "") => {
  const i = document.createElement("button");
  return i.type = "button", i.className = `sg-button ${e ? `sg-button--${e}` : ""}`.trim(), i.dataset.action = t, i.textContent = n, i;
}, T = (n, t, e) => {
  const i = document.createElement(n);
  return i.className = t, i.textContent = e, i;
}, vt = (n) => {
  const t = n == null ? void 0 : n.target;
  return t instanceof Element ? t : (t == null ? void 0 : t.parentElement) instanceof Element ? t.parentElement : null;
};
class ze {
  constructor({ labels: t, zIndex: e, handlers: i, visible: s = !0 }) {
    this.labels = t, this.handlers = i, this.state = { mode: "idle", steps: [], collapsed: !1, pageUrl: "", hasPageGuide: !1, pageGuides: [], focusGuideTitle: !1 }, this.position = null, this.dragging = null, this.root = document.createElement("aside"), this.root.className = "sg-panel", this.root.style.zIndex = String(e + 2), this.root.setAttribute("aria-label", "System Guider"), this.root.addEventListener("click", (r) => this.handleClick(r)), this.root.addEventListener("input", (r) => this.handleInput(r)), this.root.addEventListener("change", (r) => this.handleInput(r)), this.root.addEventListener("mouseover", (r) => this.handlePreview(r)), this.root.addEventListener("mouseout", (r) => this.handlePreviewEnd(r)), this.root.addEventListener("dragstart", (r) => this.handleDragStart(r)), this.root.addEventListener("dragover", (r) => r.preventDefault()), this.root.addEventListener("drop", (r) => this.handleDrop(r)), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.recordingIndicator = this.createRecordingIndicator(e), document.body.append(this.root), document.body.append(this.recordingIndicator), this.setVisible(s), this.render();
  }
  createRecordingIndicator(t) {
    const e = document.createElement("div");
    e.className = "sg-recording-indicator", e.style.zIndex = String(t + 4), e.hidden = !0, e.setAttribute("role", "status"), e.setAttribute("aria-live", "polite");
    const i = document.createElement("span");
    i.className = "sg-recording-indicator__live", i.setAttribute("aria-hidden", "true"), i.append(document.createElement("span"));
    const s = T("span", "sg-recording-indicator__status", "RECORDING…"), r = document.createElement("button");
    r.type = "button", r.className = "sg-recording-indicator__stop", r.title = "Stop recording", r.setAttribute("aria-label", "Stop recording");
    const o = document.createElement("span");
    o.className = "sg-recording-indicator__stop-icon", o.setAttribute("aria-hidden", "true");
    const a = T("span", "sg-recording-indicator__stop-label", "STOP");
    return r.append(o, a), r.addEventListener("click", (l) => {
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
    const i = this.root.getBoundingClientRect(), s = i.width || 360, r = i.height || 200, o = Math.max(8, window.innerWidth - s - 8), a = Math.max(8, window.innerHeight - r - 8);
    return {
      left: Math.min(Math.max(8, t), o),
      top: Math.min(Math.max(8, e), a)
    };
  }
  /** Move the panel if it covers the highlighted step target. */
  avoidHighlight(t) {
    var g;
    if (!t || this.root.classList.contains("sg-panel--hidden") || this.visible === !1 || ((g = this.state) == null ? void 0 : g.mode) === "playback" || this.dragging) return;
    const e = this.root.getBoundingClientRect();
    if (e.width < 2 || e.height < 2) return;
    const i = 14;
    if (!!(t.right + i < e.left || t.left - i > e.right || t.bottom + i < e.top || t.top - i > e.bottom)) return;
    const r = 16, o = e.width, a = e.height, l = window.innerWidth, c = window.innerHeight, d = l - t.right - r, u = t.left - r, h = c - t.bottom - r, p = t.top - r;
    let f = e.left, y = e.top;
    d >= o ? (f = t.right + r, y = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8))) : u >= o ? (f = t.left - o - r, y = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8))) : h >= Math.min(a, 180) ? (f = this.clampPosition(e.left, 0).left, y = t.bottom + r) : p >= Math.min(a, 180) ? (f = this.clampPosition(e.left, 0).left, y = t.top - a - r) : d >= u ? (f = Math.max(8, Math.min(l - o - 8, t.right + r)), y = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8))) : (f = Math.max(8, Math.min(l - o - 8, t.left - o - r)), y = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8)));
    const b = this.clampPosition(f, y);
    Math.abs(b.left - e.left) < 2 && Math.abs(b.top - e.top) < 2 || (this.position = b, this.applyPosition());
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
    const o = document.createElement("header");
    o.className = "sg-panel__header", o.addEventListener("pointerdown", (f) => this.startDrag(f));
    const a = document.createElement("div");
    a.className = "sg-panel__brand";
    const l = document.createElement("span");
    l.className = "sg-panel__brand-icon", l.setAttribute("aria-hidden", "true"), l.innerHTML = `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 3c.55 3.1 2.1 4.65 5.2 5.2-3.1.55-4.65 2.1-5.2 5.2-.55-3.1-2.1-4.65-5.2-5.2C9.9 7.65 11.45 6.1 12 3Z" fill="currentColor"/>
        <path d="M18.2 14.2c.25 1.35.9 2 2.25 2.25-1.35.25-2 .9-2.25 2.25-.25-1.35-.9-2-2.25-2.25 1.35-.25 2-.9 2.25-2.25Z" fill="currentColor"/>
      </svg>
    `;
    const c = document.createElement("div");
    c.className = "sg-panel__brand-copy", t === "recording" ? c.append(
      T("span", "sg-eyebrow", "● LIVE RECORDING"),
      T("h2", "sg-panel__title", this.titleForMode(t))
    ) : c.append(
      T("h2", "sg-panel__title", "System Guider"),
      T("div", "sg-panel__subtitle", this.titleForMode(t))
    ), a.append(l, c);
    const d = K(e ? "Open" : "Minimize", "toggle-collapse", "ghost");
    if (d.setAttribute("aria-expanded", String(!e)), o.append(a, d), this.root.append(o), e) {
      this.applyPosition();
      return;
    }
    const u = document.createElement("div");
    u.className = "sg-panel__body", t === "idle" && this.renderIdle(u), (t === "recording" || t === "manage") && this.renderSteps(u, t), t === "manage-routes" && this.renderManageRoutes(u, { globalSettingsOpen: r }), this.root.append(u);
    const h = this.renderFooter(t);
    h && this.root.append(h), this.applyPosition();
    const p = t === "recording" && (Number(this.state.newStepsCount) || 0) > 0;
    queueMicrotask(() => {
      const f = this.root.querySelector(".sg-panel__body");
      f && (p ? f.scrollTop = f.scrollHeight : f.scrollTop = s, this._bodyScrollTop = f.scrollTop);
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
      T("p", "sg-lead", "Record actions, refine the steps, then replay a polished walkthrough.")
    ), this.state.pageUrl && t.append(T("p", "sg-page-key", `Page: ${this.state.pageUrl}`)), this.renderPageGuidesList(t);
    const e = document.createElement("div");
    e.className = "sg-empty", e.append(
      T("strong", "", this.state.hasPageGuide ? "Guide ready for this page" : "Ready when you are"),
      T(
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
    i.className = "sg-page-guides", i.append(T("div", "sg-page-guides__label", "Saved guides on this page"));
    const s = document.createElement("ul");
    s.className = "sg-page-guides__list", e.forEach((r, o) => {
      const a = document.createElement("li");
      a.className = "sg-page-guides__item", r.id === this.state.currentGuideId && a.classList.add("is-current");
      const l = document.createElement("strong");
      l.textContent = r.title || `Guide ${o + 1}`;
      const c = document.createElement("span");
      c.textContent = `${r.steps} step${r.steps === 1 ? "" : "s"}`, a.append(l, c), s.append(a);
    }), i.append(s), t.append(i);
  }
  renderSteps(t, e) {
    var s, r;
    if (this.state.flashMessage && t.append(T("p", "sg-status", this.state.flashMessage)), e === "recording") {
      const o = !!this.state.recordingAppend, a = Number(this.state.newStepsCount) || 0, l = document.createElement("p");
      l.className = "sg-lead", o ? l.textContent = a > 0 ? `Keep going — ${a} new step${a === 1 ? "" : "s"} added. Interact again for more, then Stop Recording.` : "Interact with the page as many times as you need. Each action becomes a new step. Click Stop Recording when done." : l.textContent = a > 0 ? `Capturing… ${a} step${a === 1 ? "" : "s"} so far. Keep interacting, then Stop Recording.` : "Perform the flow on screen. Add as many steps as you need, then Stop Recording.", t.append(l);
    }
    if (e === "manage") {
      const o = this.state.steps.length, a = document.createElement("section");
      a.className = "sg-guide-editor";
      const l = document.createElement("label");
      l.className = "sg-guide-field sg-guide-field--rename";
      const c = document.createElement("span");
      c.className = "sg-guide-field__label-row";
      const d = document.createElement("span");
      d.className = "sg-guide-field__label-left", d.append(document.createTextNode("Guide name")), this.state.dirty && d.append(T("em", "sg-guide-editor__badge", "Unsaved"));
      const u = K("Save", "save-page", "primary");
      u.classList.add("sg-button--compact", "sg-guide-field__save"), u.disabled = this.state.steps.length === 0, c.append(d, u), l.append(c);
      const h = document.createElement("input");
      h.className = "sg-field sg-field--guide-title", h.value = this.state.guideTitle || "", h.dataset.guideField = "title", h.placeholder = "Example: Create employee schedule", h.setAttribute("aria-label", "Guide name"), h.addEventListener("keydown", (q) => {
        q.key === "Enter" && (q.preventDefault(), h.blur());
      }), h.addEventListener("blur", () => {
        var q, N;
        (N = (q = this.handlers).commitGuideTitle) == null || N.call(q);
      }), l.append(h);
      const p = document.createElement("details");
      p.className = "sg-step-settings sg-guide-settings";
      const f = document.createElement("summary");
      f.className = "sg-step-settings__summary", f.textContent = "Guide options", p.append(f);
      const y = document.createElement("div");
      y.className = "sg-step-settings__body";
      const b = document.createElement("label");
      b.className = "sg-check";
      const g = document.createElement("input");
      g.type = "checkbox", g.dataset.guideSetting = "reloadOnNavigate", g.checked = !!((s = this.state.guideSettings) != null && s.reloadOnNavigate), b.append(g, document.createTextNode(" Reload on other route"));
      const w = document.createElement("label");
      w.className = "sg-check";
      const C = document.createElement("input");
      C.type = "checkbox", C.dataset.guideSetting = "resetBeforePlay", C.checked = ((r = this.state.guideSettings) == null ? void 0 : r.resetBeforePlay) === "reload", w.append(C, document.createTextNode(" Reload before play")), y.append(b, w), p.append(y), l.append(p), a.append(l);
      const S = document.createElement("div");
      S.className = "sg-guide-editor__steps-head";
      const E = document.createElement("div");
      E.className = "sg-guide-editor__steps-meta", E.append(
        T("span", "sg-guide-editor__steps-label", "Steps"),
        T("span", "sg-guide-editor__steps-count", String(o))
      );
      const A = K("Add steps", "add-steps", "secondary");
      A.classList.add("sg-button--compact", "sg-guide-editor__add-steps"), S.append(E, A), a.append(S), t.append(a), this.state.focusGuideTitle && queueMicrotask(() => {
        h.focus(), h.select();
      });
    }
    if (!this.state.steps.length) {
      t.append(T("div", "sg-empty", e === "manage" ? "No steps in this guide yet." : "No steps yet — start interacting with the page."));
      return;
    }
    const i = document.createElement("ol");
    i.className = "sg-step-list", this.state.steps.forEach((o, a) => {
      var y, b, g, w, C;
      const l = document.createElement("li");
      l.className = "sg-step", l.dataset.stepId = o.id, l.draggable = !1, o.invalid && l.classList.add("sg-step--invalid");
      const c = Number(this.state.recordingStepsBaseline) || 0, d = e === "recording" && a >= c;
      d && l.classList.add("sg-step--new");
      const u = document.createElement("div");
      if (u.className = "sg-step__top", e === "manage") {
        const S = document.createElement("span");
        S.className = "sg-step__drag", S.draggable = !0, S.title = "Drag to reorder", S.setAttribute("aria-label", `Drag step ${a + 1}`), S.textContent = "⋮⋮", S.addEventListener("dragstart", (E) => {
          E.dataTransfer.setData("text/plain", o.id), E.dataTransfer.effectAllowed = "move", l.classList.add("sg-step--dragging");
        }), S.addEventListener("dragend", () => {
          l.classList.remove("sg-step--dragging");
        }), u.append(S);
      }
      u.append(
        T("span", "sg-step__number", String(a + 1)),
        T("span", "sg-step__action", o.action)
      ), d && u.append(T("span", "sg-step__new", "New")), o.invalid && u.append(T("span", "sg-step__warning", "Target missing"));
      const h = document.createElement("input");
      h.className = "sg-field sg-step__title", h.value = o.title, h.dataset.field = "title", h.disabled = e === "recording", h.placeholder = "Step title", h.setAttribute("aria-label", `Step ${a + 1} title`);
      const p = T("code", "sg-step__selector", o.selector || "No target"), f = document.createElement("div");
      if (f.className = "sg-step__body", f.append(h, p), l.append(u, f), e === "manage" || e === "recording") {
        const S = document.createElement("div");
        S.className = "sg-step__controls";
        const E = (N, F, j = "") => {
          const O = K(N, F, j);
          return O.classList.add("sg-button--compact"), O.addEventListener("click", (L) => {
            var I, x;
            L.preventDefault(), L.stopPropagation(), (x = (I = this.handlers)[F]) == null || x.call(I, o.id);
          }), O;
        }, A = document.createElement("div");
        A.className = "sg-step__controls-left";
        const q = document.createElement("div");
        if (q.className = "sg-step__controls-right", e === "manage") {
          if (o.action === "input") {
            const O = document.createElement("label");
            O.className = "sg-check sg-check--compact";
            const L = document.createElement("input");
            L.type = "checkbox", L.dataset.field = "waitRequired", L.checked = !!((y = o.waitFor) != null && y.required), O.append(L, document.createTextNode(" Require value")), A.append(O);
          }
          const N = this.state.steps.length, F = a + 1, j = (O) => {
            const L = document.createElement("div");
            L.className = "sg-step__move-picker";
            const I = O === "up", x = K(I ? "↑" : "↓", "", "ghost");
            x.classList.add("sg-button--compact", "sg-step__move-btn"), x.setAttribute("aria-haspopup", "listbox"), x.setAttribute("aria-expanded", "false"), x.title = I ? "Move to an earlier step" : "Move to a later step", x.setAttribute("aria-label", I ? `Move step ${F} to an earlier position` : `Move step ${F} to a later position`);
            const H = I ? Array.from({ length: a }, (R, B) => F - 1 - B) : Array.from({ length: N - F }, (R, B) => F + 1 + B);
            H.length || (x.disabled = !0);
            const G = document.createElement("div");
            return G.className = "sg-step__move-menu", G.hidden = !0, G.setAttribute("role", "listbox"), G.setAttribute("aria-label", I ? "Earlier step numbers" : "Later step numbers"), H.forEach((R) => {
              const B = document.createElement("button");
              B.type = "button", B.className = "sg-step__move-option", B.textContent = String(R), B.setAttribute("role", "option"), B.title = `Move to step ${R}`, B.addEventListener("click", (D) => {
                var Y, V;
                D.preventDefault(), D.stopPropagation(), this.closeMoveMenus(), (V = (Y = this.handlers)["move-to"]) == null || V.call(Y, o.id, R);
              }), G.append(B);
            }), x.addEventListener("click", (R) => {
              if (R.preventDefault(), R.stopPropagation(), x.disabled) return;
              const B = G.hidden;
              this.closeMoveMenus(), B && (G.hidden = !1, x.setAttribute("aria-expanded", "true"));
            }), L.append(x, G), L;
          };
          A.append(j("up"), j("down"));
        }
        if (q.append(
          E("Play", "play-here", "ghost"),
          E("Remove", "remove", "danger")
        ), S.append(A, q), e === "manage") {
          const N = document.createElement("details");
          N.className = "sg-step-settings";
          const F = document.createElement("summary");
          F.className = "sg-step-settings__summary", F.textContent = "Settings", N.append(F);
          const j = document.createElement("div");
          j.className = "sg-step-settings__body";
          const O = document.createElement("label");
          O.className = "sg-step-settings__field", O.append(document.createTextNode("Step description"));
          const L = document.createElement("textarea");
          L.className = "sg-field sg-step__description", L.rows = 2, L.value = o.description || "", L.dataset.field = "description", L.placeholder = "Shown next to the highlight while playing", L.setAttribute("aria-label", `Step ${a + 1} description`), O.append(L);
          const I = document.createElement("label");
          I.className = "sg-check";
          const x = document.createElement("input");
          x.type = "checkbox", x.dataset.stepSetting = "autoScroll", x.checked = ((b = o.settings) == null ? void 0 : b.autoScroll) !== !1, I.append(x, document.createTextNode(" Auto-scroll"));
          const H = document.createElement("label");
          H.className = "sg-step-settings__field", H.append(document.createTextNode("Show delay (ms)"));
          const G = document.createElement("input");
          G.type = "number", G.min = "0", G.step = "50", G.className = "sg-field", G.value = String(((g = o.settings) == null ? void 0 : g.delay) ?? 0), G.dataset.stepSetting = "delay", H.append(G);
          const R = document.createElement("label");
          R.className = "sg-step-settings__field", R.append(document.createTextNode("Hide delay (ms)"));
          const B = document.createElement("input");
          B.type = "number", B.min = "0", B.step = "50", B.className = "sg-field", B.value = String(((w = o.settings) == null ? void 0 : w.hideDelay) ?? 0), B.dataset.stepSetting = "hideDelay", R.append(B);
          const D = document.createElement("label");
          D.className = "sg-check";
          const Y = document.createElement("input");
          Y.type = "checkbox", Y.dataset.stepSetting = "autoSkipMissing", Y.checked = ((C = o.settings) == null ? void 0 : C.autoSkipMissing) !== !1, D.append(Y, document.createTextNode(" Auto-skip if missing")), j.append(O, I, H, R, D), N.append(j), l.append(S, N);
        } else
          l.append(S);
      }
      i.append(l);
    }), t.append(i);
  }
  renderManageRoutes(t, { globalSettingsOpen: e = !1 } = {}) {
    this.state.flashMessage && t.append(T("p", "sg-status", this.state.flashMessage));
    const i = this.state.settings || {}, s = Array.isArray(this.state.allGuides) ? this.state.allGuides : [], r = document.createElement("div");
    if (r.className = "sg-page-guides", r.append(T("div", "sg-page-guides__label", `All guides (${s.length})`)), !s.length)
      r.append(T("p", "sg-lead", "No guides saved yet."));
    else {
      const k = /* @__PURE__ */ new Map();
      s.forEach((M) => {
        const _ = M.url || "/";
        k.has(_) || k.set(_, []), k.get(_).push(M);
      }), [...k.entries()].sort((M, _) => M[0].localeCompare(_[0])).forEach(([M, _]) => {
        const W = document.createElement("div");
        W.className = "sg-manage-section", W.append(T("div", "sg-manage-section__path", M));
        const Q = document.createElement("ul");
        Q.className = "sg-page-guides__list", _.forEach((J) => {
          const mt = document.createElement("li");
          mt.className = "sg-page-guides__item sg-page-guides__item--actions", mt.dataset.guideId = J.id;
          const kt = document.createElement("div");
          kt.className = "sg-page-guides__copy";
          const Ct = document.createElement("div");
          Ct.className = "sg-page-guides__head";
          const yt = document.createElement("span");
          yt.className = "sg-page-guides__icon", yt.setAttribute("aria-hidden", "true"), yt.innerHTML = `
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M7 4.75h7.5L17 7.25V19.25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
              <path d="M9 10.5h6M9 13.5h6M9 16.5h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
          `;
          const xt = document.createElement("div");
          xt.className = "sg-page-guides__title-row";
          const Lt = document.createElement("strong");
          Lt.textContent = J.title || "Untitled";
          const _t = document.createElement("span");
          _t.className = "sg-page-guides__badge", _t.textContent = `${J.steps} step${J.steps === 1 ? "" : "s"}`, xt.append(Lt, _t), Ct.append(yt, xt), kt.append(Ct);
          const bt = document.createElement("div");
          bt.className = "sg-page-guides__actions";
          const Et = K("Play", "play-guide", "ghost");
          if (Et.dataset.guideId = J.id, this.state.readOnly)
            bt.append(Et);
          else {
            const Bt = K("Edit steps", "edit-guide", "secondary");
            Bt.dataset.guideId = J.id;
            const It = K("Delete", "delete-guide", "danger");
            It.dataset.guideId = J.id, bt.append(Bt, Et, It);
          }
          mt.append(kt, bt), Q.append(mt);
        }), W.append(Q), r.append(W);
      });
    }
    t.append(r);
    const o = document.createElement("details");
    o.className = "sg-global-settings", e && (o.open = !0);
    const a = document.createElement("summary");
    a.className = "sg-global-settings__summary", a.innerHTML = `
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
    l.className = "sg-global-settings__body", l.append(T("p", "sg-lead", "App defaults (used when a guide has no own settings). Step delays are per step inside each guide."));
    const c = document.createElement("div");
    c.className = "sg-settings sg-settings--nested", c.append(T("div", "sg-page-guides__label", "Current account"));
    const d = document.createElement("label");
    d.className = "sg-step-settings__field sg-settings__row", d.append(document.createTextNode("Account ID"));
    const u = document.createElement("input");
    u.type = "text", u.className = "sg-field sg-account-id__field", u.readOnly = !0, u.tabIndex = 0, u.setAttribute("aria-readonly", "true");
    const h = this.state.accountId;
    u.value = h == null || h === "" ? "Not set" : String(h), u.title = "Logged-in account ID from the host app", d.append(u), c.append(d), c.append(T(
      "p",
      "sg-lead",
      "Use this ID in the editor allow-list below. Host apps set it via Guider setAccountId / options.accountId."
    )), l.append(c);
    const p = document.createElement("div");
    p.className = "sg-settings sg-settings--nested", p.append(T("div", "sg-page-guides__label", "Default settings"));
    const f = document.createElement("label");
    f.className = "sg-check sg-settings__row";
    const y = document.createElement("input");
    y.type = "checkbox", y.dataset.setting = "reloadOnNavigate", y.checked = !!i.reloadOnNavigate, f.append(y, document.createTextNode(" Default: reload when opening a guide on another route")), p.append(f);
    const b = document.createElement("label");
    b.className = "sg-check sg-settings__row";
    const g = document.createElement("input");
    g.type = "checkbox", g.dataset.setting = "resetBeforePlay", g.checked = i.resetBeforePlay === "reload", b.append(g, document.createTextNode(" Default: reload page before playing")), p.append(b);
    const w = document.createElement("label");
    w.className = "sg-step-settings__field sg-settings__row", w.append(document.createTextNode("Theme mode"));
    const C = document.createElement("select");
    C.className = "sg-field", C.dataset.setting = "theme", [
      ["dark", "Dark"],
      ["light", "Light"]
    ].forEach(([k, M]) => {
      const _ = document.createElement("option");
      _.value = k, _.textContent = M, (i.theme || "dark") === k && (_.selected = !0), C.append(_);
    }), w.append(C), p.append(w);
    const S = document.createElement("div");
    S.className = "sg-settings sg-settings--nested", S.append(T("div", "sg-page-guides__label", "Access & toolbar"));
    const E = document.createElement("label");
    E.className = "sg-step-settings__field sg-settings__row", E.append(document.createTextNode("Editor account IDs (not listed = Play only)"));
    const A = document.createElement("textarea");
    A.className = "sg-field", A.rows = 3, A.placeholder = "e.g. 1, 12, 45", A.dataset.setting = "editorAccountIds", A.value = Array.isArray(i.editorAccountIds) ? i.editorAccountIds.join(", ") : String(i.editorAccountIds || ""), E.append(A), S.append(E);
    const q = document.createElement("label");
    q.className = "sg-step-settings__field sg-settings__row", q.append(document.createTextNode("Bypass PIN (hover orb + type to open panel)"));
    const N = document.createElement("input");
    N.type = "text", N.className = "sg-field", N.inputMode = "numeric", N.autocomplete = "off", N.placeholder = "123456", N.maxLength = 12, N.dataset.setting = "bypassPin", N.value = String(i.bypassPin ?? "123456"), q.append(N), S.append(q);
    const F = document.createElement("label");
    F.className = "sg-check sg-settings__row";
    const j = document.createElement("input");
    j.type = "checkbox", j.dataset.setting = "showAccountId", j.checked = i.showAccountId !== !1, F.append(j, document.createTextNode(" Show account ID on launcher")), S.append(F);
    const O = document.createElement("label");
    O.className = "sg-step-settings__field sg-settings__row", O.append(document.createTextNode("Hide toolbar on URLs (one per line)"));
    const L = document.createElement("textarea");
    L.className = "sg-field", L.rows = 3, L.placeholder = `/login
/time-log`, L.dataset.setting = "hiddenUrls", L.value = Array.isArray(i.hiddenUrls) ? i.hiddenUrls.join(`
`) : String(i.hiddenUrls || ""), O.append(L), S.append(O), S.append(T(
      "p",
      "sg-lead",
      "Accounts not in this list only see Play guides (and search). Add an ID to allow Record and Panel. Empty list = Play only for everyone. Hover the orb and type the bypass PIN to open settings when locked out."
    ));
    const I = i.ui || {}, x = document.createElement("div");
    x.className = "sg-settings sg-settings--nested", x.append(T("div", "sg-page-guides__label", "Playback appearance"));
    const H = (k, M, _) => {
      const W = document.createElement("label");
      W.className = "sg-check sg-settings__row";
      const Q = document.createElement("input");
      Q.type = "checkbox", Q.dataset.setting = k, Q.checked = !!_, W.append(Q, document.createTextNode(` ${M}`)), x.append(W);
    };
    H("ui.animations", "Enable animations", I.animations !== !1), H("ui.spotlightFade", "Spotlight fade in/out", I.spotlightFade !== !1), H("ui.animatedCursor", "Animated cursor between steps", I.animatedCursor);
    const G = document.createElement("label");
    G.className = "sg-step-settings__field sg-settings__row", G.append(document.createTextNode("Highlight motion"));
    const R = document.createElement("select");
    R.className = "sg-field", R.dataset.setting = "ui.highlightMotion", [
      ["none", "None"],
      ["pulse", "Pulse"],
      ["wobble", "Wobble"],
      ["fade", "Fade"]
    ].forEach(([k, M]) => {
      const _ = document.createElement("option");
      _.value = k, _.textContent = M, (I.highlightMotion || "pulse") === k && (_.selected = !0), R.append(_);
    }), G.append(R), x.append(G);
    const B = document.createElement("label");
    B.className = "sg-step-settings__field sg-settings__row", B.append(document.createTextNode("Transition speed (ms)"));
    const D = document.createElement("input");
    D.type = "number", D.min = "0", D.max = "1000", D.step = "20", D.className = "sg-field", D.dataset.setting = "ui.transitionMs", D.value = String(I.transitionMs ?? 220), B.append(D), x.append(B);
    const Y = document.createElement("label");
    Y.className = "sg-step-settings__field sg-settings__row", Y.append(document.createTextNode("Overlay dim (%)"));
    const V = document.createElement("input");
    V.type = "range", V.min = "0", V.max = "90", V.step = "5", V.className = "sg-field sg-field--range", V.dataset.setting = "ui.overlayOpacity", V.value = String(Math.round((Number(I.overlayOpacity) || 0.58) * 100));
    const at = document.createElement("span");
    at.className = "sg-settings__range-value", at.textContent = `${V.value}%`, V.addEventListener("input", () => {
      at.textContent = `${V.value}%`;
    }), Y.append(V, at), x.append(Y);
    const lt = document.createElement("div");
    lt.className = "sg-settings__colors";
    const P = (k, M, _) => {
      const W = document.createElement("label");
      W.className = "sg-settings__color-row";
      const Q = document.createElement("span");
      Q.textContent = M;
      const J = document.createElement("input");
      J.type = "color", J.dataset.setting = k, J.value = _ || "#000000", W.append(Q, J), lt.append(W);
    };
    P("ui.tipBg", "Tip background", I.tipBg || "#0f1b33"), P("ui.tipText", "Tip text", I.tipText || "#f8fafc"), P("ui.skipBg", "Skip background", I.skipBg || "#2563eb"), P("ui.skipText", "Skip text", I.skipText || "#ffffff"), P("ui.spotlightColor", "Spotlight", I.spotlightColor || "#3b82f6"), x.append(lt);
    const U = K("Reset appearance", "reset-ui-settings", "ghost");
    U.classList.add("sg-button--compact"), x.append(U), l.append(p, S, x), o.append(a, l), t.append(o);
  }
  renderPlayback(t) {
    const {
      currentStep: e,
      currentIndex: i = 0,
      total: s = 0,
      failed: r,
      autoSkipping: o
    } = this.state, a = document.createElement("div");
    a.className = "sg-progress", a.append(
      T("span", "", `Step ${Math.min(i + 1, s)} of ${s}`),
      T("span", "", `${s ? Math.round((i + 1) / s * 100) : 0}%`)
    );
    const l = document.createElement("div");
    l.className = "sg-progress__bar";
    const c = document.createElement("span");
    if (c.style.width = `${s ? (i + 1) / s * 100 : 0}%`, l.append(c), t.append(a, l), e && t.append(
      T("h3", "sg-playback__title", e.title),
      T("p", "sg-playback__description", e.description)
    ), r) {
      const d = String(this.state.message || "").trim();
      t.append(T(
        "p",
        "sg-status sg-status--error",
        d || (o ? "Target not found. Skipping to the next step…" : "Target not found. Follow this guide's requirements first, then continue — or skip this step.")
      ));
    } else this.state.waiting && (this.state.waitKind === "target" || this.state.waitKind === "navigate") && t.append(T(
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
      const i = K("Play guide", "play", "secondary");
      i.classList.add("sg-panel__btn-play"), i.disabled = this.state.steps.length === 0;
      const s = document.createElement("div");
      s.className = "sg-panel__footer-more", s.append(
        K("All guides", "open-manage", "ghost"),
        K("Download", "download", "ghost"),
        K("Download all", "download-all", "ghost"),
        K("Copy JSON", "copy", "ghost"),
        K("Close", "close", "ghost")
      ), e.append(i, s);
    } else if (t === "manage-routes") {
      e.classList.add("sg-panel__footer--manage");
      const i = document.createElement("div");
      i.className = "sg-panel__footer-actions", i.append(
        K("Load guides", "load", "secondary"),
        K("Paste JSON", "paste", "secondary"),
        K("Download all", "download-all", "primary")
      );
      const s = document.createElement("div");
      s.className = "sg-panel__footer-more", s.append(K("Close", "close", "ghost")), e.append(i, s);
    } else t === "playback" && (e.append(
      K(this.labels.back, "prev", "secondary"),
      K(this.labels.skip, "skip", "secondary"),
      K(this.labels.next, "next", "primary"),
      K(this.labels.close, "close", "ghost")
    ), e.querySelector('[data-action="prev"]').disabled = this.state.currentIndex <= 0, e.querySelector('[data-action="next"]').disabled = !!(this.state.waiting || this.state.failed));
    return e;
  }
  handleClick(t) {
    var l, c, d, u, h, p, f;
    const e = vt(t);
    if (!e) return;
    e.closest(".sg-step__move-picker") || this.closeMoveMenus();
    const i = e.closest("[data-action]"), s = i == null ? void 0 : i.dataset.action;
    if (!s) return;
    if (t.preventDefault(), t.stopPropagation(), s === "toggle-collapse") {
      this.update({ collapsed: !this.state.collapsed });
      return;
    }
    const r = e.closest("[data-step-id]"), o = (l = e.closest("[data-guide-id]")) == null ? void 0 : l.dataset.guideId;
    if (s === "play-guide" || s === "delete-guide" || s === "edit-guide") {
      (d = (c = this.handlers)[s]) == null || d.call(c, o);
      return;
    }
    const a = (r == null ? void 0 : r.dataset.stepId) || ((h = (u = i == null ? void 0 : i.closest) == null ? void 0 : u.call(i, "[data-step-id]")) == null ? void 0 : h.dataset.stepId);
    (f = (p = this.handlers)[s]) == null || f.call(p, a);
  }
  closeMoveMenus() {
    this.root.querySelectorAll(".sg-step__move-menu:not([hidden])").forEach((t) => {
      t.hidden = !0;
    }), this.root.querySelectorAll('.sg-step__move-btn[aria-expanded="true"]').forEach((t) => {
      t.setAttribute("aria-expanded", "false");
    });
  }
  handleInput(t) {
    var c, d, u, h, p, f, y, b, g, w, C, S;
    const e = vt(t);
    if (!e) return;
    const i = e.dataset.setting;
    if (i) {
      const E = e.type === "checkbox" ? e.checked : e.value;
      (d = (c = this.handlers)["update-setting"]) == null || d.call(c, i, E);
      return;
    }
    const s = e.dataset.guideSetting;
    if (s) {
      const E = e.dataset.guideId || this.state.currentGuideId, A = e.type === "checkbox" ? e.checked : e.value;
      (h = (u = this.handlers)["edit-guide-setting"]) == null || h.call(u, E, s, A);
      return;
    }
    const r = e.dataset.stepSetting;
    if (r) {
      const E = (p = e.closest("[data-step-id]")) == null ? void 0 : p.dataset.stepId, A = e.type === "checkbox" ? e.checked : e.value;
      (y = (f = this.handlers)["edit-step-setting"]) == null || y.call(f, E, r, A);
      return;
    }
    const o = e.dataset.guideField;
    if (o) {
      (g = (b = this.handlers).editGuide) == null || g.call(b, o, e.value);
      return;
    }
    const a = e.dataset.field, l = (w = e.closest("[data-step-id]")) == null ? void 0 : w.dataset.stepId;
    !a || !l || (S = (C = this.handlers).edit) == null || S.call(C, l, a, a === "waitRequired" ? e.checked : e.value);
  }
  handlePreview(t) {
    var s, r, o;
    const e = vt(t), i = (s = e == null ? void 0 : e.closest) == null ? void 0 : s.call(e, "[data-step-id]");
    i && !i.contains(t.relatedTarget) && ((o = (r = this.handlers).preview) == null || o.call(r, i.dataset.stepId));
  }
  handlePreviewEnd(t) {
    var s, r, o;
    const e = vt(t), i = (s = e == null ? void 0 : e.closest) == null ? void 0 : s.call(e, "[data-step-id]");
    i && !i.contains(t.relatedTarget) && ((o = (r = this.handlers).previewEnd) == null || o.call(r));
  }
  handleDragStart(t) {
    const e = vt(t);
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
    var r, o, a;
    t.preventDefault();
    const e = vt(t), i = (r = e == null ? void 0 : e.closest) == null ? void 0 : r.call(e, "[data-step-id]"), s = t.dataTransfer.getData("text/plain");
    s && i && s !== i.dataset.stepId && ((a = (o = this.handlers).drop) == null || a.call(o, s, i.dataset.stepId));
  }
  startDrag(t) {
    var s, r;
    if (t.button != null && t.button !== 0) return;
    const e = vt(t);
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
const Mt = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, et = (n) => String(n || "").replace(/\s+/g, " ").trim().toLowerCase(), Pe = (n) => {
  var o, a, l, c;
  if (!(n instanceof Element)) return "";
  const t = ((o = n.closest) == null ? void 0 : o.call(n, ".p-float-label")) || n.parentElement, e = (a = t == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, ":scope > label, label");
  if (e) {
    const d = et(e.textContent);
    if (d) return d;
  }
  const i = (l = n.querySelector) == null ? void 0 : l.call(n, '.nav-link-title, .menu-title, .sidebar-title, [class*="title"]');
  if (i) {
    const d = et(i.textContent);
    if (d) return d;
  }
  const s = n.cloneNode(!0);
  (c = s.querySelectorAll) == null || c.call(s, "script, style, svg, i, .nav-icon, .sidebar-pending-dot, .badge, .p-dropdown-label, .p-multiselect-label").forEach((d) => d.remove());
  const r = et(s.textContent);
  return r || et(
    n.getAttribute("aria-label") || n.getAttribute("title") || n.getAttribute("placeholder") || n.getAttribute("name") || ""
  );
}, Le = (n) => {
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
function Be(n) {
  var i, s, r, o;
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
  for (let a = 0; a < 12 && e; a += 1) {
    let l = e.previousElementSibling;
    for (; l; ) {
      if ((i = l.matches) != null && i.call(l, t))
        return et(l.textContent).slice(0, 80);
      const u = (s = l.querySelector) == null ? void 0 : s.call(l, t);
      if (u) return et(u.textContent).slice(0, 80);
      l = l.previousElementSibling;
    }
    const c = e.parentElement;
    if (!c || c === document.body) break;
    let d = c.previousElementSibling;
    for (; d; ) {
      if ((r = d.matches) != null && r.call(d, t))
        return et(d.textContent).slice(0, 80);
      const u = (o = d.querySelector) == null ? void 0 : o.call(d, t);
      if (u) return et(u.textContent).slice(0, 80);
      d = d.previousElementSibling;
    }
    e = c;
  }
  return "";
}
function Ve(n) {
  var y, b, g;
  if (!(n instanceof Element)) return null;
  const t = ((y = n.closest) == null ? void 0 : y.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")) || ((b = n.matches) != null && b.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? n : null), e = t || n, i = Pe(e), s = Le(e), r = Be(e), o = e.getAttribute("data-guider") || "", a = et(t ? "" : e.getAttribute("aria-label") || ""), l = e.getAttribute("name") || "", c = et(e.getAttribute("placeholder") || ""), d = e.getAttribute("role") || (t ? "combobox" : ""), u = e.tagName.toLowerCase(), h = e.getAttribute("type") || "", p = t && ((g = [...t.querySelectorAll("[id]")].find((w) => w.id && !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(w.id))) == null ? void 0 : g.id) || "", f = !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(e.id || "") && e.id || p || "";
  return !i && !s && !o && !l && !a && !f ? null : {
    ...i ? { text: i } : {},
    ...s ? { href: s } : {},
    ...r ? { section: r } : {},
    ...o ? { dataGuider: o } : {},
    ...a ? { ariaLabel: a } : {},
    ...l ? { name: l } : {},
    ...c ? { placeholder: c } : {},
    ...d ? { role: d } : {},
    ...u ? { tag: u } : {},
    ...h ? { type: h } : {},
    ...f ? { id: f } : {}
  };
}
function Ut(n, t) {
  const e = et(n), i = et(t);
  if (!e || !i) return 0;
  if (e === i) return 50;
  const s = e.split(/\s+/).filter(Boolean), r = i.split(/\s+/).filter(Boolean);
  if (s.length === r.length && r.every((o) => s.includes(o)))
    return 40;
  if (e.includes(i)) {
    const o = Math.max(0, s.length - r.length);
    return Math.max(4, 18 - o * 6);
  }
  return i.includes(e) && e.length >= 3 ? 8 : 0;
}
function Je(n, t) {
  const e = et(n).replace(/\/+$/, ""), i = et(t).replace(/\/+$/, "");
  return !e || !i ? 0 : e === i ? 45 : e.endsWith(i) || i.endsWith(e) ? 28 : e.includes(i) || i.includes(e) ? 12 : -25;
}
function Xe(n, t) {
  const e = et(n), i = et(t);
  return !e || !i ? 0 : e === i ? 30 : e.includes(i) || i.includes(e) ? 12 : -20;
}
function Se(n, t) {
  if (!(n instanceof Element) || !t || typeof t != "object") return 0;
  let e = 0;
  const i = n.getAttribute("data-guider") || "";
  return t.dataGuider && (i === t.dataGuider ? e += 100 : i && (e -= 40)), t.id && n.id && n.id === t.id && (e += 80), t.href && (e += Je(Le(n), t.href)), t.text ? (e += Ut(Pe(n), t.text), t.ariaLabel && (e += Math.round(Ut(n.getAttribute("aria-label") || "", t.ariaLabel) * 0.5))) : t.ariaLabel && (e += Ut(n.getAttribute("aria-label") || "", t.ariaLabel)), t.section && (e += Xe(Be(n), t.section)), t.name && n.getAttribute("name") === t.name && (e += 25), t.placeholder && (e += Math.round(Ut(n.getAttribute("placeholder") || "", t.placeholder) * 0.6)), t.tag && n.tagName.toLowerCase() === t.tag && (e += 4), t.role && n.getAttribute("role") === t.role && (e += 6), t.type && n.getAttribute("type") === t.type && (e += 6), e;
}
function Ze(n) {
  const t = [];
  if (n != null && n.dataGuider && t.push(`[data-guider="${Mt(n.dataGuider)}"]`), n != null && n.id && t.push(`#${Mt(n.id)}`), n != null && n.href) {
    const e = String(n.href);
    t.push(`a[href="${Mt(e)}"]`), t.push(`a[href="${Mt(e)}/"]`);
    const i = e.replace(/^\//, "");
    i && i !== e && t.push(`a[href="/${Mt(i)}"]`);
  }
  return n != null && n.name && t.push(`[name="${Mt(n.name)}"]`), t.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label'), t.join(", ");
}
function Ye(n, t = document) {
  var r;
  const e = t instanceof Element || t === document ? t : document;
  let i = [];
  try {
    i = [...e.querySelectorAll(Ze(n))];
  } catch {
    i = [...e.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-guider]')];
  }
  const s = [];
  for (const o of i)
    o instanceof Element && ((r = o.closest) != null && r.call(o, ".sg-panel, .sg-overlay, .sg-launcher") || (s.push(o), o.matches("label") && o.control instanceof Element && s.push(o.control)));
  return [...new Set(s)];
}
const Qe = 40;
function ke(n, {
  selector: t = "",
  root: e = document,
  threshold: i = Qe
} = {}) {
  const s = [];
  if (t)
    try {
      const o = document.querySelector(t);
      if (o instanceof Element) {
        const a = n ? Se(o, n) : 35;
        s.push({ element: o, score: a, via: "selector" });
      }
    } catch {
    }
  if (n && typeof n == "object")
    for (const o of Ye(n, e)) {
      const a = Se(o, n);
      a > 0 && s.push({ element: o, score: a, via: "score" });
    }
  if (!s.length) return null;
  s.sort((o, a) => a.score - o.score || (o.via === "selector" ? -1 : 1));
  const r = s[0];
  return !r || r.score < i ? (r == null ? void 0 : r.via) === "selector" && t && (t.startsWith("[data-guider=") || t.startsWith("#")) ? r.element : null : r.element;
}
const Gt = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
};
function tt(n) {
  return n instanceof Element ? n.matches(
    'input[type="password"], [data-guider-ignore], [contenteditable][data-sensitive]'
  ) : !0;
}
function Ce(n) {
  return !n || typeof n != "string" ? !0 : /^(pv_|apv_|pr_|p_)id_?\d+$/i.test(n) || /^[a-z]{1,5}_id_\d+$/i.test(n);
}
const xe = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect";
function ti(n) {
  var r, o;
  if (!(n instanceof Element)) return null;
  const t = (r = n.closest) == null ? void 0 : r.call(n, xe);
  t && (n = t);
  const e = n.getAttribute("data-guider");
  if (e) return `[data-guider="${Gt(e)}"]`;
  if (n.id && !Ce(n.id)) {
    const a = `#${Gt(n.id)}`;
    if (document.querySelectorAll(a).length === 1) return a;
  }
  if ((o = n.matches) != null && o.call(n, xe)) {
    const a = [...n.querySelectorAll("[id]")].find(
      (c) => c.id && !Ce(c.id)
    ), l = [...n.classList].find((c) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(c));
    if (a && l) {
      const c = `${n.tagName.toLowerCase()}.${Gt(l)}:has(#${Gt(a.id)})`;
      try {
        if (document.querySelectorAll(c).length === 1) return c;
      } catch {
      }
    }
  }
  const i = [];
  let s = n;
  for (; s && s !== document.body && i.length < 5; ) {
    let a = s.tagName.toLowerCase();
    const l = [...s.classList].find(
      (u) => !/^(active|selected|open|focus|hover|ng-|css-|jsx-|p-placeholder|p-focus|p-inputtext|p-disabled|p-highlight|p-inputwrapper|p-inputwrapper-filled|p-inputwrapper-focus|p-overlay-open)$/i.test(u)
    );
    l && (a += `.${Gt(l)}`);
    const c = s.parentElement;
    if (c) {
      const u = [...c.children].filter(
        (h) => h.tagName === s.tagName
      );
      u.length > 1 && (a += `:nth-of-type(${u.indexOf(s) + 1})`);
    }
    i.unshift(a);
    const d = i.join(" > ");
    if (document.querySelectorAll(d).length === 1) return d;
    s = c;
  }
  return i.join(" > ") || null;
}
function Nt(n) {
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
function ut(n) {
  if (!(n instanceof Element) || !n.isConnected) return !1;
  const t = getComputedStyle(n);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = n.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function ei(n) {
  if (!(n instanceof Element)) return !1;
  const t = n.getBoundingClientRect();
  return !(t.bottom < 0 || t.right < 0 || t.top > window.innerHeight || t.left > window.innerWidth);
}
function Xt(n) {
  return ut(n) && ei(n);
}
function ii(n, { behavior: t = "smooth", block: e = "center" } = {}) {
  if (!(n instanceof Element) || !n.isConnected) return;
  const i = [];
  let s = n.parentElement;
  for (; s && s !== document.documentElement; )
    i.push(s), s = s.parentElement;
  i.forEach((r) => {
    const o = getComputedStyle(r), a = /(auto|scroll|overlay)/.test(o.overflowY) && r.scrollHeight > r.clientHeight + 1, l = /(auto|scroll|overlay)/.test(o.overflowX) && r.scrollWidth > r.clientWidth + 1;
    if (!a && !l) return;
    const c = r.getBoundingClientRect(), d = n.getBoundingClientRect();
    if (a) {
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
function Ft(n) {
  var s, r, o, a;
  if (!(n instanceof Element)) return null;
  const t = (s = n.closest) == null ? void 0 : s.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
  if (t && ut(t)) return t;
  if (ut(n)) {
    const l = (r = n.closest) == null ? void 0 : r.call(
      n,
      '.p-overlaypanel, .modal-content, .card, .offcanvas, [class*="overlay-custom"], .attendance-tracking, .filter-panel'
    );
    return l && l !== n && !n.matches('input, textarea, select, button, a, [role="combobox"]'), n;
  }
  let e = n.parentElement;
  for (let l = 0; l < 8 && e && !((o = e.matches) != null && o.call(e, ".p-overlaypanel, .modal, .modal-content, .card, .offcanvas, body, html")); l += 1) {
    const c = (a = e.getBoundingClientRect) == null ? void 0 : a.call(e);
    if (c && (c.width > 420 || c.height > 280)) {
      e = e.parentElement;
      continue;
    }
    if (Xt(e)) return e;
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
  if (i && ut(i)) {
    const l = i.getBoundingClientRect();
    if (l.width <= 420 && l.height <= 280) return i;
  }
  return ut(n) ? n : null;
}
function si(n) {
  return [n.top, n.left, n.width, n.height].map((t) => Math.round(t * 2) / 2).join(":");
}
async function ni(n, {
  timeout: t = 1500,
  stableFrames: e = 4,
  interval: i = 50
} = {}) {
  if (!(n instanceof Element)) return null;
  const s = Date.now() + t;
  let r = "", o = 0;
  for (; Date.now() <= s; ) {
    if (!n.isConnected) return null;
    if (!ut(n))
      o = 0, r = "";
    else {
      const a = si(n.getBoundingClientRect());
      if (a === r ? o += 1 : (r = a, o = 1), o >= e) return n;
    }
    await new Promise((a) => setTimeout(a, i));
  }
  return Xt(n) ? n : null;
}
const ri = /* @__PURE__ */ new Set(["none", "pulse", "wobble", "fade"]), ae = () => ({
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
}), Ie = () => ({
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
  ui: ae()
});
function Ge(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => String(t).trim()).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\s,;]+/).map((t) => t.trim()).filter(Boolean)
  )];
}
function Re(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => ee(t)).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\n,;]+/).map((t) => ee(t)).filter(Boolean)
  )];
}
function ee(n) {
  let t = String(n || "").trim();
  if (!t) return "";
  try {
    /^https?:\/\//i.test(t) && (t = new URL(t).pathname);
  } catch {
  }
  return t = t.split("?")[0].split("#")[0], t.startsWith("/") || (t = `/${t}`), t.length > 1 && (t = t.replace(/\/+$/, "")), t.toLowerCase();
}
function oi(n, t = []) {
  const e = ee(n || "/"), i = Re(t);
  return i.length ? i.some((s) => {
    if (s.endsWith("*")) {
      const r = s.slice(0, -1);
      return e === r.replace(/\/+$/, "") || e.startsWith(r);
    }
    return e === s || e.startsWith(`${s}/`);
  }) : !1;
}
function ai(n, t = []) {
  const e = Ge(t);
  if (!e.length || n == null || n === "") return !1;
  const i = String(n).trim();
  return e.includes(i);
}
function li(n, t = "123456") {
  return n == null ? String(t ?? "").replace(/\D/g, "").slice(0, 12) : String(n).replace(/\D/g, "").slice(0, 12);
}
function Rt(n, t) {
  const e = String(n || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(e)) return e.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(e)) {
    const [, i, s, r] = e;
    return `#${i}${i}${s}${s}${r}${r}`.toLowerCase();
  }
  return t;
}
function Ht(n = {}) {
  const t = ae();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = String(n.highlightMotion || t.highlightMotion);
  return {
    animations: n.animations !== !1,
    highlightMotion: ri.has(e) ? e : t.highlightMotion,
    spotlightFade: n.spotlightFade !== !1,
    animatedCursor: !!n.animatedCursor,
    tipBg: Rt(n.tipBg, t.tipBg),
    tipText: Rt(n.tipText, t.tipText),
    skipBg: Rt(n.skipBg, t.skipBg),
    skipText: Rt(n.skipText, t.skipText),
    spotlightColor: Rt(n.spotlightColor, t.spotlightColor),
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
function gt(n = {}) {
  var r, o;
  const t = Ie();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = Number((r = n.ui) == null ? void 0 : r.overlayOpacity), i = Number((o = n.ui) == null ? void 0 : o.transitionMs), s = {
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
    editorAccountIds: Ge(
      n.editorAccountIds ?? n.guiderAccounts ?? t.editorAccountIds
    ),
    bypassPin: li(
      Object.prototype.hasOwnProperty.call(n, "bypassPin") ? n.bypassPin : t.bypassPin,
      t.bypassPin
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(n, "showAccountId") ? n.showAccountId !== !1 : t.showAccountId !== !1,
    hiddenUrls: Re(
      n.hiddenUrls ?? n.hiddenRoutes ?? t.hiddenUrls
    ),
    ui: Ht(s)
  };
}
function Ot(n = {}) {
  const t = gt(n), e = t.ui, i = t.theme === "light" ? "light" : "dark", s = document.documentElement;
  return s && (s.dataset.sgTheme = i, s.style.setProperty("--sg-tip-bg", e.tipBg), s.style.setProperty("--sg-tip-text", e.tipText), s.style.setProperty("--sg-skip-bg", e.skipBg), s.style.setProperty("--sg-skip-text", e.skipText), s.style.setProperty("--sg-spotlight", e.spotlightColor), s.style.setProperty("--sg-overlay-opacity", String(e.overlayOpacity)), s.style.setProperty("--sg-spotlight-ms", `${e.transitionMs}ms`), s.dataset.sgAnimations = e.animations ? "on" : "off", s.dataset.sgHighlightMotion = e.highlightMotion, s.dataset.sgSpotlightFade = e.spotlightFade ? "on" : "off"), e;
}
const ht = 'input:not([type="password"]), textarea, select', Oe = [
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
].join(", "), ci = [
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
].join(", "), di = [
  ".p-datepicker-prev",
  ".p-datepicker-next",
  ".p-datepicker-prev-icon",
  ".p-datepicker-next-icon",
  ".p-datepicker-header",
  ".p-datepicker-title",
  ".p-datepicker-month",
  ".p-datepicker-year",
  ".p-datepicker-buttonbar"
].join(", "), _e = [
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
].join(", "), ot = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect", zt = [
  ".p-dropdown-panel",
  ".p-multiselect-panel",
  ".p-autocomplete-panel",
  ".p-cascadeselect-panel"
].join(", ");
function $e(n) {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function Z(n) {
  return n instanceof Element ? n.matches(ot) ? n : n.closest(ot) : null;
}
function ui(n) {
  var i;
  const t = (i = n.labels) == null ? void 0 : i[0];
  if (!t) return "";
  const e = t.cloneNode(!0);
  return e.querySelectorAll("input, select, textarea, button").forEach((s) => s.remove()), e.textContent.trim();
}
function hi(n) {
  var s;
  const t = Z(n) || n, e = ((s = t.closest) == null ? void 0 : s.call(t, '.p-float-label, .form-group, .mb-1, .mb-3, .col, [class*="form-group"]')) || t.parentElement;
  if (!(e instanceof Element)) return "";
  const i = e.querySelector(":scope > label, label");
  return i instanceof Element ? i.textContent.trim().replace(/\s+/g, " ") : "";
}
function pi(n) {
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
function ie(n) {
  return String(n || "").replace(/\s+/g, " ").replace(/\s+\d+$/, "").trim().slice(0, 80);
}
function gi(n) {
  var o;
  const t = Z(n), e = hi(n);
  if (e) return ie(e);
  const i = n.matches("input, textarea, select"), r = (!i && !t ? pi(n) : "") || (t ? "" : n.getAttribute("aria-label")) || n.getAttribute("title") || ui(n) || (i ? n.getAttribute("placeholder") : "") || n.getAttribute("placeholder") || n.getAttribute("name") || ((o = t == null ? void 0 : t.matches) != null && o.call(t, ".p-autocomplete") ? "Search" : "") || (t ? "Dropdown" : n.tagName.toLowerCase());
  return ie(r);
}
function fi({ label: n, choiceField: t, isNativeField: e, action: i }) {
  const s = ie(n);
  return t ? s ? `Select ${s}` : "Choose a value" : e ? s ? `Enter ${s}` : "Enter a value" : i === "click" ? s ? `Click ${s}` : "Click here" : s || "Continue";
}
function St(n) {
  var t;
  return !!((t = n == null ? void 0 : n.closest) != null && t.call(n, Oe));
}
function se(n) {
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
function mi(n) {
  return !(n instanceof Element) || se(n) ? !1 : !!n.closest(di);
}
function Pt(n) {
  if (!(n instanceof Element)) return !1;
  if (n instanceof HTMLInputElement && (["date", "datetime-local", "time", "month", "week"].includes(n.type) || n.getAttribute("inputmode") === "none" || /date|time/i.test(n.name || "") || /date|time/i.test(n.id || "") || n.className.toLowerCase().includes("date")) || n.closest(".p-calendar, .p-datepicker-trigger")) return !0;
  const t = n.closest(ci);
  return t ? /date|time|calendar|picker/i.test(t.className) ? !0 : !!t.querySelector('button, [class*="calendar"], table, .flatpickr-calendar, .dp__menu') : !1;
}
function Ee(n) {
  var l, c, d;
  if (!(n instanceof Element)) return null;
  const t = document.querySelectorAll(
    '.p-calendar input[aria-expanded="true"], .p-calendar [aria-expanded="true"], input[aria-expanded="true"]'
  );
  for (const u of t) {
    if (!(u instanceof Element) || tt(u)) continue;
    const h = u.closest(".p-calendar") || u, p = (l = h.matches) != null && l.call(h, "input") ? h : (c = h.querySelector) == null ? void 0 : c.call(h, 'input:not([type="hidden"])');
    if (p && !tt(p)) return p;
  }
  const e = document.querySelector(".p-calendar.p-inputwrapper-focus, .p-calendar.p-focus, .p-calendar.p-overlay-open");
  if (e) {
    const u = e.querySelector('input:not([type="hidden"])');
    if (u && !tt(u)) return u;
  }
  const i = document.activeElement;
  if (i instanceof HTMLInputElement && Pt(i) && !tt(i))
    return i;
  const r = [...(document.querySelector('.p-overlaypanel, .modal.show, [role="dialog"]') || document.body).querySelectorAll('input:not([type="hidden"]):not([type="password"])')].filter((u) => Pt(u) && !tt(u));
  if (!r.length) return null;
  const o = ((d = n.getBoundingClientRect) == null ? void 0 : d.call(n).top) ?? 0, a = r.map((u) => ({ node: u, top: u.getBoundingClientRect().top })).filter((u) => u.top <= o + 8).sort((u, h) => h.top - u.top)[0];
  return (a == null ? void 0 : a.node) || r[0] || null;
}
function ft(n) {
  return n instanceof Element ? !!(n instanceof HTMLSelectElement || Pt(n) || Z(n) || n.closest(zt) || n.matches('[role="combobox"], [aria-autocomplete], [aria-haspopup="listbox"]') || n.getAttribute("aria-expanded") != null || n.closest('[role="combobox"]')) : !1;
}
function Vt(n) {
  if (!n) return null;
  const t = Z(n);
  if (t) return t;
  if (n.matches(ht) || n.matches('[role="combobox"]')) return n;
  const e = n.querySelector(`${ht}, [role="combobox"]`);
  return Z(e) || e;
}
function ne(n) {
  if (!(n instanceof Element)) return null;
  const t = n.querySelector('[role="listbox"], .p-dropdown-items, .p-multiselect-items, .p-autocomplete-items'), e = (t == null ? void 0 : t.id) || n.id;
  if (e) {
    const s = $e(e), r = Nt(`[aria-controls="${s}"], [aria-owns="${s}"]`), o = Z(r) || Vt(r);
    if (o) return Z(o) || o;
  }
  const i = document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-dropdown.p-inputwrapper-focus",
    ".p-multiselect.p-overlay-open",
    ".p-multiselect.p-inputwrapper-focus",
    ".p-autocomplete.p-focus",
    `${ot} [aria-expanded="true"]`,
    `${ot}[aria-expanded="true"]`
  ].join(", "));
  return Z(i);
}
function te(n) {
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
function nt(n) {
  var l;
  if (!(n instanceof Element)) return null;
  const t = Z(n);
  if (t) return t;
  if (se(n)) {
    const c = n.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .ant-picker-dropdown, .p-datepicker-panel"), d = Ee(c || n);
    if (d) return d;
  }
  const e = n.closest(zt);
  if (e) {
    const c = ne(e);
    if (c) return c;
  }
  const i = n.closest(".p-calendar");
  if (i) {
    const c = i.querySelector('input:not([type="hidden"])');
    if (c) return c;
  }
  if (n.matches(ht)) return n;
  const s = n.closest(ht);
  if (s) return s;
  const r = n.matches('[role="combobox"]') ? n : n.closest('[role="combobox"]');
  if (r) return Z(r) || r;
  const o = n.closest(Oe);
  if (o) {
    if (se(o)) {
      const g = Ee(
        o.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .p-datepicker-panel") || o
      );
      if (g) return g;
    }
    const c = ne(o.closest(zt) || o.closest(_e));
    if (c) return c;
    const d = document.activeElement;
    if (d instanceof Element && (d.matches(ht) || d.matches('[role="combobox"]') || Z(d)) && !tt(d))
      return Z(d) || d;
    const u = o.closest(_e);
    if (u != null && u.id) {
      const g = $e(u.id), w = Nt(`[aria-controls="${g}"], [aria-owns="${g}"]`), C = Vt(w);
      if (C) return C;
    }
    const h = document.querySelector(
      `${ot} [aria-expanded="true"], ${ot}[aria-expanded="true"], [aria-expanded="true"]`
    ), p = Vt(h);
    if (p && !tt(p)) return p;
    const f = te(u) || te(o) || te(h);
    if (f) {
      const g = f.querySelector(ot);
      if (g && !tt(g)) return g;
      const w = f.querySelector(`select, ${ht}, [role="combobox"]`);
      if (w && !tt(w)) return Z(w) || w;
    }
    const b = [...((u == null ? void 0 : u.closest('.modal.show, .modal, [role="dialog"], .p-overlaypanel, form')) || document.body).querySelectorAll(`${ot}, select, [role="combobox"]`)].filter((g) => !tt(g)).map((g) => Z(g) || g);
    if (b.length) {
      const g = ((l = u == null ? void 0 : u.getBoundingClientRect) == null ? void 0 : l.call(u).top) ?? o.getBoundingClientRect().top, w = b.map((C) => ({ node: C, top: C.getBoundingClientRect().top })).filter((C) => C.top <= g + 8).sort((C, S) => S.top - C.top)[0];
      if (w) return w.node;
    }
  }
  const a = n.closest(".p-calendar, .input-group, .date, .mx-datepicker, .vdatetime, .flatpickr-wrapper, .dp__main");
  if (a) {
    const c = a.querySelector(ht);
    if (c) return c;
  }
  return n.closest(`button, a, [role="button"], input, select, textarea, [role="combobox"], ${ot}, [data-guider]`) || n;
}
function yi(n = document) {
  const t = [
    ...n.querySelectorAll(`${ot}, select, [role="combobox"], input:not([type="hidden"]):not([type="password"]), textarea`)
  ], e = /* @__PURE__ */ new Set();
  return t.map((i) => Z(i) || i).filter((i) => {
    if (e.has(i) || tt(i)) return !1;
    e.add(i);
    const s = getComputedStyle(i);
    if (s.display === "none" || s.visibility === "hidden") return !1;
    const r = i.getBoundingClientRect();
    return r.width >= 2 && r.height >= 2;
  });
}
function wt() {
  const n = ne(document.querySelector(zt)) || Z(document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-multiselect.p-overlay-open",
    `${ot} [aria-expanded="true"]`,
    `${ot}[aria-expanded="true"]`
  ].join(", ")));
  if (n && !tt(n)) return n;
  const t = document.querySelector('[aria-expanded="true"]'), e = Vt(t);
  if (e && !tt(e)) return e;
  const i = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show, .p-overlaypanel');
  if (!i) return null;
  const s = document.activeElement;
  return s instanceof Element && i.contains(s) && (s.matches(ht) || s.matches('[role="combobox"]') || Z(s)) && !tt(s) ? Z(s) || s : null;
}
class bi {
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
    return !this.active || !(t instanceof Element) || tt(t) || !!t.closest(".sg-panel, .sg-overlay, .sg-launcher, .sg-recording-indicator");
  }
  capture(t, e) {
    var b, g;
    if (this.shouldIgnore(t)) return;
    const i = e === "click" && St(t), s = nt(t);
    if (!s || tt(s)) return;
    const r = ti(s);
    if (!r) return;
    const o = s.matches(ht), a = ft(s) || i, l = o || i || a ? "input" : e, c = Date.now(), d = `${l}:${r}`, u = l === "input" && d === this.lastKey, h = d === this.lastKey && c - this.lastAt < 300;
    if (u || h) return;
    this.lastKey = d, this.lastAt = c;
    const p = gi(s), f = fi({
      label: p,
      choiceField: a,
      isNativeField: o,
      action: l
    }), y = Ve(s);
    this.onStep({
      id: ((g = (b = globalThis.crypto) == null ? void 0 : b.randomUUID) == null ? void 0 : g.call(b)) || `step-${c}-${Math.random().toString(36).slice(2, 7)}`,
      selector: r,
      ...y ? { match: y } : {},
      action: l,
      title: f,
      // Keep description empty by default — tip shows the friendly title only.
      // Authors can add longer help text later in step settings.
      description: "",
      waitFor: o || i || a ? {
        type: "input",
        required: !0,
        mode: a || i ? "interaction" : "value"
      } : null
    });
  }
  onClick(t) {
    const e = t.target instanceof Element ? t.target : null;
    e && (e instanceof HTMLSelectElement && !St(e) || mi(e) || this.capture(t.target, "click"));
  }
  onFocus(t) {
    var i;
    const e = t.target;
    if ((i = e.matches) != null && i.call(e, ht) && !(e instanceof HTMLSelectElement)) {
      if (Pt(e)) {
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
const Zt = [
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
].join(", "), le = [
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
].join(", "), De = [
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
function re(n) {
  if (!(n instanceof HTMLElement) || n.closest(".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip")) return !1;
  const t = getComputedStyle(n);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = n.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function Jt(n) {
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
function vi(n) {
  if (!(n instanceof Element)) return null;
  const t = n.closest(De);
  if (t && Jt(t)) return t;
  const e = n.closest('table, [role="grid"]');
  return e && e.querySelector(Zt) && Jt(e) ? e : null;
}
function wi(n) {
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
    if (!re(i) || !Jt(i) || i === n || n.contains(i) || !(i.matches(De) || !!((l = i.querySelector) != null && l.call(i, Zt))) && !i.matches(le)) return !1;
    const r = i.getBoundingClientRect(), o = r.top >= t.top - 48 && r.top <= t.bottom + 380, a = r.left < t.right + 140 && r.right > t.left - 140;
    return o && a;
  });
}
function Te(n = null) {
  const t = /* @__PURE__ */ new Set(), e = (i) => {
    var c;
    if (!(n instanceof Element)) return !0;
    const s = n.getBoundingClientRect(), r = i.getBoundingClientRect(), o = r.top >= s.top - 64 && r.top <= s.bottom + 420, a = r.left < s.right + 220 && r.right > s.left - 220;
    if (o && a) return !0;
    const l = [i.id];
    return (c = i.querySelectorAll) == null || c.call(i, "[id]").forEach((d) => {
      d.id && l.push(d.id);
    }), l.some((d) => {
      var p, f;
      if (!d) return !1;
      const u = ((f = (p = globalThis.CSS) == null ? void 0 : p.escape) == null ? void 0 : f.call(p, d)) || d.replace(/"/g, '\\"'), h = document.querySelector(`[aria-controls="${u}"], [aria-owns="${u}"]`);
      return !!(h && (n === h || n.contains(h) || h.contains(n)));
    });
  };
  return document.querySelectorAll(le).forEach((i) => {
    !re(i) || !Jt(i) || e(i) && t.add(i);
  }), document.querySelectorAll(Zt).forEach((i) => {
    const s = vi(i);
    s && re(s) && e(s) && t.add(s);
  }), n instanceof Element && wi(n).forEach((i) => t.add(i)), [...t];
}
class Si {
  constructor({
    overlayOpacity: t = 0.58,
    zIndex: e = 2147483e3,
    onSkip: i = null,
    skipLabel: s = "Skip Step",
    onHighlightBox: r = null,
    onTargetLost: o = null,
    ui: a = null
  } = {}) {
    this.opacity = t, this.zIndex = e, this.onSkip = i, this.skipLabel = s, this.onHighlightBox = r, this.onTargetLost = o, this.ui = Ht(a || { overlayOpacity: t }), this.root = null, this.frame = null, this.blocks = null, this.skipChip = null, this.goChip = null, this.onGo = null, this.stepTip = null, this.stepTipContent = null, this.guideCursor = null, this.cursorTimer = null, this.warningBanner = null, this.waitingBanner = null, this.controlsEnabled = !1, this.raf = null, this.target = null, this.highlightHost = null, this.blockOutside = !1, this.raisedTarget = null, this.previousTargetStyle = null, this.resizeObserver = null, this.menuObserver = null, this.menuWatchTimer = null, this.menuRefreshTimer = null, this.relayoutTimers = [], this.elevatedMenus = [], this.syncing = !1, this.targetLostNotified = !1, this.lastHighlightCenter = null, this.onViewportChange = () => this.scheduleLayout(), this.onBlockInteraction = (l) => {
      this.allowsInteractionAt(l.clientX, l.clientY) || (l.preventDefault(), l.stopPropagation());
    }, this.onSkipClick = (l) => {
      var c;
      l.preventDefault(), l.stopPropagation(), (c = this.onSkip) == null || c.call(this);
    }, this.onGoClick = (l) => {
      var c;
      l.preventDefault(), l.stopPropagation(), (c = this.onGo) == null || c.call(this);
    };
  }
  applyUiSettings(t) {
    this.ui = Ht(t || {}), this.opacity = this.ui.overlayOpacity, this.root && (this.root.style.setProperty("--sg-overlay-opacity", String(this.opacity)), this.syncSpotlightMotionClass());
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
      var a;
      if (!this.motionsEnabled() || !((a = this.ui) != null && a.animatedCursor) || !t || !e) {
        s();
        return;
      }
      this.mountGuideCursor();
      const r = Math.max(0, Number(i) || this.ui.transitionMs || 220), o = this.guideCursor;
      o.hidden = !1, o.style.transition = "none", o.style.left = `${Math.round(t.x)}px`, o.style.top = `${Math.round(t.y)}px`, o.offsetWidth, o.style.transition = `left ${r}ms ease, top ${r}ms ease, opacity ${Math.max(120, r / 2)}ms ease`, o.style.left = `${Math.round(e.x)}px`, o.style.top = `${Math.round(e.y)}px`, clearTimeout(this.cursorTimer), this.cursorTimer = setTimeout(() => {
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
      const o = this.waitingBanner.querySelector(".sg-waiting-banner__count");
      o && r !== String(s) && (o.classList.remove("sg-waiting-banner__count--tick"), o.offsetWidth, o.classList.add("sg-waiting-banner__count--tick"));
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
  mountGoChip() {
    this.goChip || (this.goChip = document.createElement("button"), this.goChip.type = "button", this.goChip.className = "sg-go-chip", this.goChip.textContent = "Go", this.goChip.style.zIndex = String(this.zIndex + 32), this.goChip.hidden = !0, this.goChip.addEventListener("click", this.onGoClick), document.body.append(this.goChip));
  }
  /** Show Continue/Go for text input steps (blur + advance on click). */
  showGoChip(t, e = "Go") {
    if (this.mountGoChip(), this.onGo = typeof t == "function" ? t : null, this.goChip.textContent = String(e || "Go"), this.goChip.hidden = !1, this.positionSkipChipFallback(), this.frame) {
      const i = Number.parseFloat(this.frame.style.getPropertyValue("--sg-x")) || 0, s = Number.parseFloat(this.frame.style.getPropertyValue("--sg-y")) || 0, r = Number.parseFloat(this.frame.style.getPropertyValue("--sg-w")) || 0, o = Number.parseFloat(this.frame.style.getPropertyValue("--sg-h")) || 0;
      r > 0 && o > 0 && this.positionSkipChip(i, s, r, o);
    }
  }
  hideGoChip() {
    this.onGo = null, this.goChip && (this.goChip.hidden = !0);
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
    const r = String(t || "").trim(), o = String(e || "").trim(), a = Number.isFinite(Number(i)) ? Math.max(1, Number(i)) : null, l = Number.isFinite(Number(s)) ? Math.max(1, Number(s)) : null;
    if (this.stepTipContent = {
      title: r,
      description: o,
      stepNumber: a,
      totalSteps: l
    }, !r) {
      this.hideStepTip();
      return;
    }
    this.stepTip.replaceChildren(), this.skipChip && (this.skipChip.hidden = !0);
    const c = document.createElement("div");
    c.className = "sg-step-tip__badge", c.textContent = String(a || 1), c.setAttribute(
      "aria-label",
      l ? `Step ${a || 1} of ${l}` : `Step ${a || 1}`
    );
    const d = document.createElement("div");
    if (d.className = "sg-step-tip__title", d.textContent = r, this.stepTip.append(c, d), o) {
      const h = document.createElement("div");
      h.className = "sg-step-tip__description", h.textContent = o, this.stepTip.append(h);
    }
    const u = document.createElement("button");
    u.type = "button", u.className = "sg-step-tip__skip", u.textContent = this.skipLabel, u.addEventListener("click", this.onSkipClick), this.stepTip.append(u), this.stepTip.hidden = !1;
  }
  hideStepTip() {
    this.stepTip && (this.stepTip.hidden = !0), this.stepTipContent = null, this.skipChip && (this.skipChip.hidden = !this.controlsEnabled);
  }
  positionSkipChip(t, e, i, s) {
    if (!this.controlsEnabled) return;
    const r = 10, o = window.innerWidth, a = window.innerHeight, l = this.stepTip && !this.stepTip.hidden, c = l ? this.stepTip.offsetWidth || 220 : 0, d = l ? this.stepTip.offsetHeight || 48 : 0, u = this.goChip && !this.goChip.hidden, h = u ? this.goChip.offsetWidth || 72 : 0, p = u ? this.goChip.offsetHeight || 36 : 0, f = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, y = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, b = 8;
    let g = 0, w = 0;
    u && (g = t + i + r, w = e + Math.max(0, Math.round((s - p) / 2)), g + h > o - 8 && (g = Math.max(8, t - h - r)), w < 8 && (w = 8), w + p > a - 8 && (w = Math.max(8, a - p - 8)), this.goChip.style.left = `${g}px`, this.goChip.style.top = `${w}px`);
    const C = Math.max(c, f), S = (l ? d : 0) + (l && f ? b : 0) + (f ? y : 0);
    let E = u ? g + h + r : t + i + r, A = u ? Math.min(w, e) : e;
    E + C > o - 8 && (E = Math.min(Math.max(8, t), o - C - 8), A = e + s + r), A < 8 && (A = 8), A + S > a - 8 && (A = Math.max(8, a - S - 8)), E = Math.min(Math.max(8, E), o - C - 8), l && (this.stepTip.style.left = `${E}px`, this.stepTip.style.top = `${A}px`, A += d + b), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${E}px`, this.skipChip.style.top = `${A}px`);
  }
  positionSkipChipFallback() {
    if (!this.controlsEnabled) return;
    const t = this.stepTip && !this.stepTip.hidden, e = t ? this.stepTip.offsetWidth || 220 : 0, i = t ? this.stepTip.offsetHeight || 48 : 0, s = this.goChip && !this.goChip.hidden, r = s ? this.goChip.offsetWidth || 72 : 0, o = s ? this.goChip.offsetHeight || 36 : 0, a = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, l = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, c = 8, d = this.warningBanner && !this.warningBanner.hidden, u = this.waitingBanner && !this.waitingBanner.hidden, h = d ? this.warningBanner.offsetHeight || 40 : 0, p = u ? this.waitingBanner.offsetHeight || 40 : 0, f = 24 + h + p + (d || u ? 12 : 0), y = (t ? i + c : 0) + (a ? l : 0), b = Math.max(8, Math.round((window.innerWidth - Math.max(e, a || e)) / 2));
    let g = Math.max(8, window.innerHeight - f - y - (s ? o + c : 0));
    t && (this.stepTip.style.left = `${b}px`, this.stepTip.style.top = `${g}px`, g += i + c), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${b}px`, this.skipChip.style.top = `${g}px`, g += l + c), s && (this.goChip.style.left = `${Math.max(8, Math.round((window.innerWidth - r) / 2))}px`, this.goChip.style.top = `${g}px`);
  }
  createBlock(t) {
    const e = document.createElement("div");
    return e.className = `sg-overlay__block sg-overlay__block--${t}`, ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((i) => e.addEventListener(i, this.onBlockInteraction, !0)), e;
  }
  highlight(t, e = !0, { blockOutside: i = !1, tip: s = null } = {}) {
    var r, o;
    t instanceof Element && (this.hideWarning(), this.hideWaiting(), this.hideGuideCursor(), this.targetLostNotified = !1, this.mount(), this.controlsEnabled && (this.mountSkipChip(), this.mountStepTip()), this.root && (this.root.style.display = "", this.root.style.setProperty("--sg-overlay-opacity", String(((r = this.ui) == null ? void 0 : r.overlayOpacity) ?? this.opacity))), this.clearRelayoutTimers(), this.unobserveTarget(), this.target = t, this.highlightHost = Ft(t) || t, this.blockOutside = !!i, this.root.classList.toggle("sg-overlay--blocking", this.blockOutside), this.raiseTarget(this.blockOutside ? this.highlightHost : null), s && s.title ? this.setStepTip(s) : this.hideStepTip(), e && ut(this.highlightHost) && ii(this.highlightHost, { behavior: "smooth", block: "center" }), this.observeTarget(this.highlightHost), this.watchMenus(), this.root.classList.add("sg-overlay--visible"), this.syncSpotlightMotionClass(), this.frame && this.motionsEnabled() && ((o = this.ui) != null && o.spotlightFade) && (this.frame.classList.remove("sg-spotlight--fade-in"), this.frame.offsetWidth, this.frame.classList.add("sg-spotlight--fade-in")), this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter(), [80, 180, 320, 520, 800].forEach((a) => {
      this.relayoutTimers.push(setTimeout(() => {
        this.target && (this.highlightHost = Ft(this.target) || this.target, this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter());
      }, a));
    }));
  }
  /** Refresh cutout/menus without re-raising the target (avoids closing open dropdowns). */
  refreshMenus() {
    !this.root || !this.target || this.syncing || (this.elevateOpenMenus(), this.scheduleLayout());
  }
  getVisibleMenus() {
    const t = this.highlightHost || this.target;
    return Te(t);
  }
  allowsInteractionAt(t, e) {
    const i = this.highlightHost || this.target, s = Te(i);
    return s.length ? s.some((r) => {
      const o = r.getBoundingClientRect();
      return t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
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
        var r, o;
        const s = i.target instanceof Element ? i.target : (r = i.target) == null ? void 0 : r.parentElement;
        return !s || (o = s.closest) != null && o.call(s, ".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip") ? !1 : i.type === "childList" ? !0 : i.attributeName === "class" || i.attributeName === "aria-expanded" || i.attributeName === "hidden";
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
    const t = Ft(this.target) || this.highlightHost || this.target;
    if (!(t instanceof Element) || !t.isConnected) {
      this.hide(), this.targetLostNotified || (this.targetLostNotified = !0, (h = this.onTargetLost) == null || h.call(this));
      return;
    }
    this.highlightHost = t;
    const e = t.getBoundingClientRect();
    if (e.width < 1 || e.height < 1)
      return;
    const i = 8;
    let s = e.left - i, r = e.top - i, o = e.right + i, a = e.bottom + i;
    this.getVisibleMenus().forEach((f) => {
      const y = f.getBoundingClientRect();
      s = Math.min(s, y.left - i), r = Math.min(r, y.top - i), o = Math.max(o, y.right + i), a = Math.max(a, y.bottom + i);
    });
    const l = Math.max(0, s), c = Math.max(0, r), d = Math.max(8, o - s), u = Math.max(8, a - r);
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
    const r = window.innerWidth, o = window.innerHeight;
    this.frame.style.setProperty("--sg-x", `${t}px`), this.frame.style.setProperty("--sg-y", `${e}px`), this.frame.style.setProperty("--sg-w", `${i}px`), this.frame.style.setProperty("--sg-h", `${s}px`), this.blocks.top.style.cssText = `top:0;left:0;width:${r}px;height:${e}px;`, this.blocks.left.style.cssText = `top:${e}px;left:0;width:${t}px;height:${s}px;`, this.blocks.right.style.cssText = `top:${e}px;left:${t + i}px;width:${Math.max(0, r - t - i)}px;height:${s}px;`, this.blocks.bottom.style.cssText = `top:${e + s}px;left:0;width:${r}px;height:${Math.max(0, o - e - s)}px;`;
  }
  raiseTarget(t) {
    if (this.raisedTarget && this.raisedTarget !== t && this.restoreTarget(), !t || this.raisedTarget === t || !Xt(t)) return;
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
    ), this.root && (this.root.classList.remove("sg-overlay--visible", "sg-overlay--blocking"), this.root.style.display = "none"), this.frame && (this.frame.style.removeProperty("--sg-x"), this.frame.style.removeProperty("--sg-y"), this.frame.style.removeProperty("--sg-w"), this.frame.style.removeProperty("--sg-h")), this.controlsEnabled && this.positionSkipChipFallback(), this.hideWaiting(), this.hideGoChip(), this.hideStepTip(), this.hideGuideCursor();
  }
  destroy() {
    var t;
    cancelAnimationFrame(this.raf), this.clearRelayoutTimers(), this.unobserveTarget(), this.unwatchMenus(), this.restoreElevatedMenus(), this.restoreTarget(), window.removeEventListener("resize", this.onViewportChange), window.removeEventListener("scroll", this.onViewportChange, !0), this.blocks && Object.values(this.blocks).forEach((e) => {
      ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((i) => e.removeEventListener(i, this.onBlockInteraction, !0));
    }), this.skipChip && (this.skipChip.removeEventListener("click", this.onSkipClick), this.skipChip.remove(), this.skipChip = null), this.goChip && (this.goChip.removeEventListener("click", this.onGoClick), this.goChip.remove(), this.goChip = null, this.onGo = null), this.stepTip && (this.stepTip.remove(), this.stepTip = null, this.stepTipContent = null), this.warningBanner && (this.warningBanner.remove(), this.warningBanner = null), this.waitingBanner && (this.waitingBanner.remove(), this.waitingBanner = null), this.guideCursor && (clearTimeout(this.cursorTimer), this.guideCursor.remove(), this.guideCursor = null), (t = this.root) == null || t.remove(), this.root = null, this.frame = null, this.blocks = null, this.target = null, this.highlightHost = null;
  }
}
function ki(n, t) {
  var o, a, l, c;
  const e = n instanceof Element ? n : t;
  if (!(e instanceof Element)) return !1;
  const i = (o = e.closest) == null ? void 0 : o.call(e, 'a[href], [href], [data-inertia], .nav-link, .custom-nav-class, [role="link"]');
  if (!i || i.hasAttribute("download")) return !1;
  const s = (((a = i.getAttribute) == null ? void 0 : a.call(i, "target")) || "").toLowerCase();
  if (s && s !== "_self") return !1;
  const r = (((l = i.getAttribute) == null ? void 0 : l.call(i, "href")) || "").trim();
  return r && r !== "#" && !r.toLowerCase().startsWith("javascript:") ? !0 : ((c = i.matches) == null ? void 0 : c.call(i, 'a, .nav-link, .custom-nav-class, [data-inertia], [role="link"]')) || !1;
}
function Ci(n) {
  const t = String((n == null ? void 0 : n.title) || "").trim(), e = String((n == null ? void 0 : n.description) || "").trim();
  if (!e || e === t) return "";
  const i = e.replace(/^(click|select|enter|choose)\s+/i, "").trim(), s = t.replace(/^(click|select|enter|choose)\s+/i, "").trim();
  return i && s && i.toLowerCase() === s.toLowerCase() || /^(click|select|enter|choose)\s+.+/i.test(e) && e.length <= t.length + 12 ? "" : e;
}
class xi {
  constructor({
    overlay: t,
    timeout: e = 5e3,
    autoAdvanceOnInput: i = !0,
    autoAdvanceDelay: s = 600,
    autoSkipMissing: r = !0,
    autoSkipMissingDelay: o = 400,
    stableWaitTimeout: a = 1500,
    targetWaitTimeout: l = 2e4,
    targetRetryInterval: c = 250,
    targetReadyHits: d = 2,
    stepDelay: u = 0,
    autoScroll: h = !0,
    ui: p = null,
    onChange: f,
    onFail: y,
    onComplete: b,
    onClickAdvance: g = null
  }) {
    this.overlay = t, this.timeout = e, this.autoAdvanceOnInput = i, this.autoAdvanceDelay = s, this.autoSkipMissing = r, this.autoSkipMissingDelay = o, this.stableWaitTimeout = a, this.targetWaitTimeout = Math.max(1e3, Number(l) || 2e4), this.targetRetryInterval = Math.max(50, Number(c) || 250), this.targetReadyHits = Math.max(1, Number(d) || 2), this.stepDelay = u, this.autoScroll = h !== !1, this.ui = Ht(p || {}), this.onChange = f, this.onFail = y, this.onComplete = b, this.onClickAdvance = g, this.steps = [], this.index = 0, this.active = !1, this.token = 0, this.waitCleanup = null, this.autoSkipTimer = null, this.navWaitTimer = null, this.readyWaitInterval = null, this.readyWaitResolve = null, this.targetLostTimer = null, this.rebindDebounceTimer = null, this.waitingForNavigation = !1, this.lastChoiceField = null, this.lastCompletedField = null;
  }
  setUiOptions(t) {
    this.ui = Ht(t || {});
  }
  setOptions(t = {}) {
    t.autoAdvanceDelay != null && (this.autoAdvanceDelay = Number(t.autoAdvanceDelay) || 0), t.stepDelay != null && (this.stepDelay = Number(t.stepDelay) || 0), t.autoScroll != null && (this.autoScroll = !!t.autoScroll), t.timeout != null && (this.timeout = Number(t.timeout) || this.timeout), t.stableWaitTimeout != null && (this.stableWaitTimeout = Number(t.stableWaitTimeout) || this.stableWaitTimeout), t.targetWaitTimeout != null && (this.targetWaitTimeout = Math.max(1e3, Number(t.targetWaitTimeout) || this.targetWaitTimeout)), t.targetRetryInterval != null && (this.targetRetryInterval = Math.max(50, Number(t.targetRetryInterval) || this.targetRetryInterval)), t.targetReadyHits != null && (this.targetReadyHits = Math.max(1, Number(t.targetReadyHits) || this.targetReadyHits));
  }
  resolveStepField(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ke(t.match, { selector: t.selector || "" }) || Nt(t.selector);
    return e ? nt(e) || e : null;
  }
  findStepTarget(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ke(t.match, { selector: t.selector || "" });
    if (e && ut(e)) return e;
    const i = Nt(t.selector);
    return i && ut(i) ? i : null;
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
    let o = 0, a = 0, l = null, c = null;
    return new Promise((d) => {
      this.readyWaitResolve = d;
      const u = (p) => {
        this.readyWaitResolve === d && this.clearReadyWait(p);
      }, h = () => {
        var b, g, w, C;
        if (!this.active || e !== this.token) {
          u(null);
          return;
        }
        o += 1;
        const p = this.findStepTarget(t);
        if (p) {
          if (a = p === l ? a + 1 : 1, l = p, a >= this.targetReadyHits) {
            u(p);
            return;
          }
        } else
          a = 0, l = null;
        const f = Date.now() - s;
        if (f >= r) {
          u(p || null);
          return;
        }
        const y = Math.max(0, Math.ceil((r - f) / 1e3));
        if (y !== c) {
          c = y;
          const S = `Waiting… ${y}s`;
          this.onChange(t, this.index, {
            waiting: !0,
            failed: !1,
            waitKind: "target",
            retryCount: o,
            message: S
          }), (g = (b = this.overlay).showWaiting) == null || g.call(b, S, { seconds: y }), (C = (w = this.overlay).positionSkipChipFallback) == null || C.call(w);
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
      return t.action === "click" || t.action === "input" ? wt() : null;
    if (St(e))
      return nt(e) || e;
    if (t.action === "click") {
      const i = nt(e);
      if (i && ft(i)) return i;
    }
    return e;
  }
  async showCurrent() {
    var h, p, f, y, b, g, w, C, S, E, A, q, N, F, j, O, L, I, x, H, G, R, B, D, Y, V, at, lt;
    if (!this.active) return;
    this.clearWait();
    const t = ++this.token, e = this.steps[this.index], i = ((p = (h = this.overlay) == null ? void 0 : h.getHighlightCenter) == null ? void 0 : p.call(h)) || ((f = this.overlay) == null ? void 0 : f.lastHighlightCenter) || null;
    this.onChange(e, this.index, { waiting: !1, failed: !1 }), this.overlay.hide();
    const s = Number((y = e == null ? void 0 : e.settings) == null ? void 0 : y.delay) || 0;
    if (s > 0 && (await new Promise((P) => setTimeout(P, s)), !this.active || t !== this.token))
      return;
    if (e.action === "manual" || !e.selector && !e.match) {
      this.overlay.hide();
      return;
    }
    const r = await this.waitUntilTargetReady(e, t);
    if (!this.active || t !== this.token) return;
    let o = this.normalizeStepTarget(e, r);
    if (o) {
      const P = !!this.lastCompletedField, U = P ? Math.min(220, this.stableWaitTimeout) : this.stableWaitTimeout;
      o = await ni(o, {
        timeout: U,
        stableFrames: P ? 2 : 4
      }) || o;
    }
    if (!this.active || t !== this.token) return;
    if (o && !ut(o)) {
      const P = await this.waitUntilTargetReady(e, t);
      if (!this.active || t !== this.token) return;
      o = this.normalizeStepTarget(e, P);
    }
    if (!this.active || t !== this.token) return;
    const a = !!(o && (ft(o) || Pt(o)) || ((b = e.waitFor) == null ? void 0 : b.mode) === "interaction" || St(r));
    if (a && (!o || !Xt(o))) {
      const P = (k) => {
        var _, W, Q, J;
        if (!(k instanceof Element)) return !1;
        if ((_ = k.matches) != null && _.call(k, 'input[type="search"]')) return !0;
        const M = [
          (W = k.getAttribute) == null ? void 0 : W.call(k, "placeholder"),
          (Q = k.getAttribute) == null ? void 0 : Q.call(k, "name"),
          (J = k.getAttribute) == null ? void 0 : J.call(k, "aria-label"),
          k.id,
          k.className
        ].filter(Boolean).join(" ").toLowerCase();
        return /\bsearch\b/.test(M);
      }, U = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show');
      if (U) {
        const k = yi(U).filter((_) => (_.matches('select, [role="combobox"]') || ft(_)) && !P(_));
        let M = wt();
        if (M && P(M) && (M = null), !M && this.lastChoiceField && U.contains(this.lastChoiceField)) {
          const _ = ((w = (g = this.lastChoiceField).getBoundingClientRect) == null ? void 0 : w.call(g).top) ?? -1 / 0;
          M = k.find((W) => W.getBoundingClientRect().top > _ + 4) || null;
        }
        M || (M = k[0] || null), M && (o = M);
      }
    }
    const l = Ft(o) || o;
    if (!o && !l) {
      this.overlay.hide();
      const P = this.missingTargetMessage(e);
      (S = (C = this.overlay).showWarning) == null || S.call(C, P), this.onFail(e, this.index), this.onChange(e, this.index, {
        waiting: !1,
        failed: !0,
        autoSkipping: !1,
        failKind: "missing-target",
        message: P
      }), (A = (E = this.overlay).positionSkipChipFallback) == null || A.call(E);
      return;
    }
    (N = (q = this.overlay).hideWarning) == null || N.call(q), (j = (F = this.overlay).hideWaiting) == null || j.call(F);
    const c = o || l;
    if (i && ((O = this.ui) != null && O.animatedCursor) && ((L = this.ui) != null && L.animations)) {
      const P = (I = c.getBoundingClientRect) == null ? void 0 : I.call(c);
      if (P && P.width >= 1 && P.height >= 1) {
        const U = {
          x: P.left + P.width / 2,
          y: P.top + P.height / 2
        };
        if (await ((H = (x = this.overlay).animateCursorTo) == null ? void 0 : H.call(x, i, U, this.ui.transitionMs)), !this.active || t !== this.token) return;
      }
    }
    const d = e.action === "input" || ((G = e.waitFor) == null ? void 0 : G.type) === "input" || a || ft(c), u = ((R = e == null ? void 0 : e.settings) == null ? void 0 : R.autoScroll) !== !1;
    if (this.overlay.highlight(l || c, u, {
      // Keep spotlight cutout for selects so the active field stays bright.
      blockOutside: !0,
      tip: {
        title: e.title || "",
        description: Ci(e),
        stepNumber: this.index + 1,
        totalSteps: this.steps.length
      }
    }), d) {
      let P = (B = c.matches) != null && B.call(c, "input, textarea, select, .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? c : ((D = c.querySelector) == null ? void 0 : D.call(c, "input, textarea, select, .p-dropdown, .p-multiselect")) || c;
      const U = (Y = P.closest) == null ? void 0 : Y.call(P, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      U && (P = U);
      const k = Number((V = e == null ? void 0 : e.settings) == null ? void 0 : V.autoAdvanceDelay), M = this.autoAdvanceDelay;
      Number.isFinite(k) && (this.autoAdvanceDelay = k);
      const _ = a || ft(P) || !!U || ((at = e.waitFor) == null ? void 0 : at.mode) === "interaction";
      this.watchInput(P, {
        ...e,
        waitFor: {
          type: "input",
          required: !0,
          mode: _ ? "interaction" : ((lt = e.waitFor) == null ? void 0 : lt.mode) || "value"
        }
      }, !0), this.autoAdvanceDelay = M;
      return;
    }
    e.action === "click" && this.watchClick(c, e);
  }
  watchClick(t, e) {
    const i = this.index;
    this.onChange(e, i, { waiting: !0, failed: !1, waitKind: "click" });
    const s = async (r) => {
      var c, d, u;
      const o = r.target instanceof Element ? r.target : null;
      if (!o || !(o === t || t.contains(o)) || !this.active || this.index !== i) return;
      this.overlay.hide(), this.clearWait();
      const a = this.resolveNextIndex(i), l = ki(o, t);
      if ((c = this.onClickAdvance) == null || c.call(this, e, i, a, { mayNavigate: l }), await this.applyHideDelay(e), !!this.active) {
        if (a >= this.steps.length) {
          this.complete();
          return;
        }
        if (this.index = a, l) {
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
    var s, r, o, a;
    if (!this.active || this.readyWaitInterval != null || this.readyWaitResolve || this.waitingForNavigation) return !1;
    const t = this.steps[this.index];
    if (!t) return !1;
    const e = ((s = this.overlay) == null ? void 0 : s.target) || ((r = this.overlay) == null ? void 0 : r.highlightHost);
    if (!(e instanceof Element) || !e.isConnected || !ut(e) || !((a = (o = this.overlay) == null ? void 0 : o.root) != null && a.classList.contains("sg-overlay--visible"))) return !1;
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
        const o = this.resolveStepField(r);
        if (o && o === i) {
          s += 1;
          continue;
        }
      }
      break;
    }
    return s;
  }
  watchInput(t, e, i = !0) {
    var mt, kt, Ct, yt, xt, Lt, _t, bt, Et, Bt, It, pe;
    const s = this.index, r = (mt = t == null ? void 0 : t.closest) == null ? void 0 : mt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
    r && (t = r);
    const o = t instanceof HTMLSelectElement, a = Pt(t), l = !!((kt = t == null ? void 0 : t.matches) != null && kt.call(t, ".p-autocomplete") || (Ct = t == null ? void 0 : t.closest) != null && Ct.call(t, ".p-autocomplete")), c = !!((yt = t == null ? void 0 : t.matches) != null && yt.call(t, ".p-multiselect") || (xt = t == null ? void 0 : t.closest) != null && xt.call(t, ".p-multiselect")), d = !!((Lt = t == null ? void 0 : t.matches) != null && Lt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") || (_t = t == null ? void 0 : t.closest) != null && _t.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")), u = o || a || ((bt = e.waitFor) == null ? void 0 : bt.mode) === "interaction" || ft(t) || d, h = t instanceof HTMLInputElement && ["date", "datetime-local", "time", "month", "week", "color", "range"].includes(t.type);
    let p = !1, f = !1, y = !1, b = null, g = null, w = null, C = null;
    const S = o || h || u || d || l ? Math.min(this.autoAdvanceDelay || 0, 50) : this.autoAdvanceDelay, E = ((Et = t.closest) == null ? void 0 : Et.call(t, '.modal.show, .modal, [role="dialog"], .p-overlaypanel')) || document.querySelector('.modal.show, [role="dialog"], .p-overlaypanel') || document, A = le, q = [
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
    ].join(", "), N = [
      ".p-autocomplete-panel",
      ".p-dropdown-panel",
      ".p-multiselect-panel",
      ".p-cascadeselect-panel"
    ].join(", "), F = [
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
    ].join(", "), j = (m) => !!(m instanceof Element && (m.matches(Zt) || St(m))), O = () => {
      var it, X, st;
      if (!c || !(t instanceof Element)) return !1;
      if (t.classList.contains("p-overlay-open") || t.classList.contains("p-inputwrapper-focus") && t.querySelector('[aria-expanded="true"]') || t.getAttribute("aria-expanded") === "true" || (it = t.querySelector) != null && it.call(t, '[aria-expanded="true"]')) return !0;
      const m = document.querySelector(".p-multiselect-panel");
      if (!(m instanceof Element)) return !1;
      const v = (X = globalThis.getComputedStyle) == null ? void 0 : X.call(globalThis, m);
      if (v && (v.display === "none" || v.visibility === "hidden")) return !1;
      const $ = nt(m) || wt();
      return !!($ && ($ === t || t.contains($) || (st = $.contains) != null && st.call($, t)));
    }, L = () => c && O(), I = () => {
      var $, it;
      const m = ($ = t.matches) != null && $.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? t : (it = t.closest) == null ? void 0 : it.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (!m) return "";
      const v = m.querySelector(".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      return !v || v.classList.contains("p-placeholder") || v.classList.contains("p-dropdown-label-empty") ? "" : v instanceof HTMLInputElement ? String(v.value || "").trim() : String(v.textContent || "").trim();
    }, x = () => {
      var v;
      const m = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement ? t : ((v = t.querySelector) == null ? void 0 : v.call(t, 'input:not([type="hidden"]), textarea, select')) || t;
      return m instanceof HTMLInputElement && ["checkbox", "radio"].includes(m.type) ? String(m.checked) : m instanceof HTMLInputElement || m instanceof HTMLTextAreaElement || m instanceof HTMLSelectElement ? String(m.value ?? "") : I();
    };
    let H = x();
    const G = () => u ? p : t instanceof HTMLInputElement && ["checkbox", "radio"].includes(t.type) ? t.checked : d ? p || !!I() : String(x()).trim().length > 0, R = () => {
      this.onChange(e, s, {
        waiting: i && !G(),
        failed: !1,
        waitKind: u || d ? "choice" : "input"
      });
    }, B = (m) => {
      var it, X;
      if (!(m instanceof Element)) return;
      const v = Ft(m) || m;
      if (this.overlay.target === v || this.overlay.highlightHost === v || this.overlay.target === m || this.overlay.highlightHost === m) {
        (X = (it = this.overlay).refreshMenus) == null || X.call(it);
        return;
      }
      this.overlay.highlight(v, !1, { blockOutside: !0 });
    }, D = !u && !d && !l, Y = () => {
      var v;
      const m = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : (v = t.querySelector) == null ? void 0 : v.call(t, 'input:not([type="hidden"]), textarea');
      if (m instanceof HTMLElement)
        try {
          m.blur();
        } catch {
        }
      try {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      } catch {
      }
    }, V = () => {
      this.active && this.index === s && this.next();
    }, at = (m = t) => {
      var v, $;
      !this.active || this.index !== s || p || (p = !0, H = x(), clearTimeout(b), ($ = (v = this.overlay).hideGoChip) == null || $.call(v), m instanceof Element && (this.lastChoiceField = m, this.lastCompletedField = nt(m) || m), R(), Y(), this.overlay.hide(), b = setTimeout(V, D ? Math.min(S, 120) : S));
    }, lt = () => {
      var m, v, $, it, X, st;
      if (D) {
        if (!this.active || this.index !== s || p) {
          (v = (m = this.overlay).hideGoChip) == null || v.call(m);
          return;
        }
        G() ? (it = ($ = this.overlay).showGoChip) == null || it.call($, () => {
          var ct, Tt;
          if (!(!this.active || this.index !== s || p)) {
            if (!G()) {
              R(), (Tt = (ct = this.overlay).hideGoChip) == null || Tt.call(ct);
              return;
            }
            at(t);
          }
        }, "Go") : (st = (X = this.overlay).hideGoChip) == null || st.call(X);
      }
    }, P = (m = t) => {
      if (!this.active || this.index !== s || p || L()) return;
      if (!(u || d ? !0 : G())) {
        R(), lt();
        return;
      }
      if (D) {
        H = x(), R(), lt();
        return;
      }
      if (!this.autoAdvanceOnInput) {
        p = !0, H = x(), m instanceof Element && (this.lastChoiceField = m, this.lastCompletedField = nt(m) || m), R();
        return;
      }
      at(m);
    }, U = (m) => {
      var st, ct, Tt, dt;
      if (!(m instanceof Element)) return !1;
      if (m === t || t.contains(m)) return !0;
      const v = (st = t.querySelector) == null ? void 0 : st.call(t, "input, textarea, select");
      if (v && (m === v || v.contains(m))) return !0;
      const $ = nt(m);
      if ($ && ($ === t || t.contains($) || (ct = $.contains) != null && ct.call($, t)))
        return !0;
      if (m.closest(N) && (l || d)) {
        const pt = nt(m) || wt();
        if (pt && (pt === t || t.contains(pt) || (Tt = pt.contains) != null && Tt.call(pt, t)))
          return !0;
        const At = wt();
        return !!(At && (At === t || t.contains(At)));
      }
      const X = wt();
      return !!(X && (X === t || t.contains(X) || (dt = X.contains) != null && dt.call(X, t)));
    }, k = (m = t) => {
      !this.active || this.index !== s || p || L() || (clearTimeout(b), b = setTimeout(() => P(m), 0));
    }, M = () => {
      !c || p || L() || (y || x() !== H) && k(t);
    }, _ = (m) => {
      const v = m == null ? void 0 : m.target;
      if (l) {
        if (!y) return;
        k(t);
        return;
      }
      if (c) {
        U(v instanceof Element ? v : t) && (y = !0, f = !0), M();
        return;
      }
      if (!(d && !a && !o && ((m == null ? void 0 : m.type) === "input" || (m == null ? void 0 : m.type) === "change" && !y && !f))) {
        if (u && v instanceof Element && (E.contains(v) || !!v.closest(A) || U(v)) && (v.matches("select, input, textarea") || ft(v) || St(v))) {
          if (d && v.matches("input, textarea") && !St(v) && (m == null ? void 0 : m.type) === "input")
            return;
          k(nt(v) || t);
          return;
        }
        u && v instanceof Element && !U(v) || !u && !d && v instanceof Element && !U(v) || k(t);
      }
    }, W = (m) => {
      var pt, At, ge, fe, me, ye, be, ve;
      if (!u || p) return;
      const v = m.target instanceof Element ? m.target : null;
      if (!v) return;
      const $ = E.contains(v), X = !!v.closest(A), st = v.closest(q), ct = j(v);
      if (c && !!v.closest([
        ".p-multiselect-close",
        ".p-multiselect-remove",
        '[data-pc-section="closebutton"]',
        '[data-pc-section="clearicon"]',
        ".p-multiselect-header .p-multiselect-close"
      ].join(", ")) && U(v)) {
        f = !0, setTimeout(M, 40);
        return;
      }
      if ((st || ct) && U(v)) {
        if (f = !0, v.matches("input, textarea") && !st && !ct) {
          (At = (pt = this.overlay).refreshMenus) == null || At.call(pt);
          return;
        }
        if (l && !st) {
          (fe = (ge = this.overlay).refreshMenus) == null || fe.call(ge);
          return;
        }
        if (m.type === "pointerdown" || m.type === "pointerup" || m.type === "click" || ct) {
          if (y = !0, c) {
            (ye = (me = this.overlay).refreshMenus) == null || ye.call(me);
            return;
          }
          k(nt(v) || wt() || t);
        }
        return;
      }
      if (!$ && !X && !ct) {
        c && f && setTimeout(M, 40);
        return;
      }
      const dt = v.closest(F);
      if (dt && ($ || E.contains(dt)) && !X && !st && !ct) {
        f = !0;
        const Qt = nt(dt) || dt;
        if ((U(Qt) || U(dt)) && (B(Qt), (ve = (be = this.overlay).refreshMenus) == null || ve.call(be), c && setTimeout(M, 40)), dt instanceof HTMLSelectElement && m.type === "pointerdown") {
          const we = () => k(Qt), Ke = Date.now();
          dt.addEventListener("change", we, { once: !0 }), dt.addEventListener("focusout", () => {
            Date.now() - Ke < 280 || setTimeout(we, 40);
          }, { once: !0 });
        }
      }
    };
    if (t.addEventListener("input", _), t.addEventListener("change", _), document.addEventListener("change", _, !0), document.addEventListener("input", _, !0), document.addEventListener("pointerdown", W, !0), document.addEventListener("pointerup", W, !0), document.addEventListener("click", W, !0), d && typeof MutationObserver < "u") {
      const m = (Bt = t.querySelector) == null ? void 0 : Bt.call(t, ".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      m && !l && (g = new MutationObserver(() => {
        if (x() !== H) {
          if (c) {
            y = !0, f = !0, M();
            return;
          }
          k(t);
        }
      }), g.observe(m, {
        characterData: !0,
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "value"]
      }));
      const v = ((It = t.querySelector) == null ? void 0 : It.call(t, "[aria-expanded]")) || ((pe = t.hasAttribute) != null && pe.call(t, "aria-expanded") ? t : null);
      v && (w = new MutationObserver(() => {
        if (!(!f || p) && v.getAttribute("aria-expanded") === "false" && !(l && !y)) {
          if (c) {
            M();
            return;
          }
          (y || x() !== H) && k(t);
        }
      }), w.observe(v, { attributes: !0, attributeFilter: ["aria-expanded"] })), c && (C = new MutationObserver(() => {
        M();
      }), C.observe(t, {
        attributes: !0,
        attributeFilter: ["class", "aria-expanded"]
      }));
    }
    const Q = setInterval(() => {
      if (!p) {
        if (l) {
          if (!y) return;
          k(t);
          return;
        }
        if (c) {
          x() !== H && (y = !0, f = !0), M();
          return;
        }
        if (x() !== H) {
          H = x(), k(t);
          return;
        }
        D && lt();
      }
    }, 80), J = (m) => {
      !D || p || m.key === "Enter" && U(m.target instanceof Element ? m.target : t) && G() && (m.preventDefault(), at(t));
    };
    this.waitCleanup = () => {
      var m, v;
      clearTimeout(b), clearInterval(Q), g == null || g.disconnect(), w == null || w.disconnect(), C == null || C.disconnect(), (v = (m = this.overlay).hideGoChip) == null || v.call(m), t.removeEventListener("input", _), t.removeEventListener("change", _), document.removeEventListener("change", _, !0), document.removeEventListener("input", _, !0), document.removeEventListener("keydown", J, !0), document.removeEventListener("pointerdown", W, !0), document.removeEventListener("pointerup", W, !0), document.removeEventListener("click", W, !0);
    }, R(), D && (document.addEventListener("keydown", J, !0), lt());
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
function z(n) {
  const t = String(n || "/").trim() || "/";
  try {
    if (/^https?:\/\//i.test(t))
      return new URL(t).pathname || "/";
  } catch {
  }
  const e = t.split("?")[0].split("#")[0] || "/";
  return e.startsWith("/") ? e : `/${e}`;
}
function _i(n) {
  return z(n).split("/").map((t) => t.trim()).filter(Boolean);
}
function Ei(n) {
  return String(n || "root").replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
}
function Ti(n = []) {
  const t = { path: "/", label: "Home", guides: [], children: /* @__PURE__ */ new Map() }, e = (s, r, o) => (s.children.has(r) || s.children.set(r, {
    path: o,
    label: Ei(r),
    guides: [],
    children: /* @__PURE__ */ new Map()
  }), s.children.get(r));
  for (const s of n) {
    if (!s || typeof s != "object") continue;
    const r = z(s.url || "/"), o = _i(r);
    if (!o.length) {
      t.guides.push(s);
      continue;
    }
    let a = t, l = "";
    o.forEach((c) => {
      l += `/${c}`, a = e(a, c, l);
    }), a.guides.push(s);
  }
  const i = (s) => ({
    path: s.path,
    label: s.label,
    guides: [...s.guides].sort((r, o) => String(r.title || "").localeCompare(String(o.title || ""))),
    children: [...s.children.values()].map(i).sort((r, o) => r.label.localeCompare(o.label))
  });
  return [i(t)].filter((s) => s.guides.length > 0 || s.children.length > 0);
}
function Fe(n, t = 0, e = []) {
  for (const i of n || []) {
    const s = [];
    Fe(i.children, t + 1, s);
    const r = i.guides || [];
    if (r.length) {
      e.push({ type: "section", depth: t, path: i.path, label: i.label });
      for (const o of r)
        e.push({ type: "guide", depth: t + 1, guide: o });
    }
    e.push(...s);
  }
  return e;
}
const Ai = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="4" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="4" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
</svg>`, Mi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
</svg>`, Ni = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M10.2 8.4L16.2 12L10.2 15.6V8.4Z" fill="currentColor"/>
</svg>`, Pi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" fill="currentColor"/>
</svg>`;
function He(n = "sg") {
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
const Li = He("sgA"), Bi = He("sgB"), Ii = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 3.75h6M5.25 6.75h13.5M8.25 6.75V18a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V6.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 10.5v6M13.5 10.5v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Gi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Ri = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`, Oi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M6 14.5V6.5A1.5 1.5 0 0 1 7.5 5H15.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, $i = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 6.5 16 12 9 17.5V6.5Z" fill="currentColor"/>
</svg>`, Ae = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 3c.6 3.4 2.3 5.1 5.7 5.7-3.4.6-5.1 2.3-5.7 5.7-.6-3.4-2.3-5.1-5.7-5.7C9.7 8.1 11.4 6.4 12 3Z" fill="currentColor"/>
  <path d="M18.5 14.5c.25 1.3.9 1.95 2.2 2.2-1.3.25-1.95.9-2.2 2.2-.25-1.3-.9-1.95-2.2-2.2 1.3-.25 1.95-.9 2.2-2.2Z" fill="currentColor"/>
</svg>`, Di = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
class Fi {
  constructor({
    zIndex: t,
    onOpenPanel: e,
    onBypassOpenPanel: i,
    onStartRecording: s,
    onPlayPageGuide: r,
    onDeleteGuide: o,
    onOpenManage: a,
    onStopTutorial: l,
    onSearchGuide: c
  }) {
    this.onOpenPanel = e, this.onBypassOpenPanel = i, this.onStartRecording = s, this.onPlayPageGuide = r, this.onDeleteGuide = o, this.onOpenManage = a, this.onStopTutorial = l, this.onSearchGuide = c, this.playing = !1, this.guideCount = 0, this.apiReady = !0, this.readOnly = !1, this.visible = !0, this.menuOpen = !1, this.searchGuides = [], this.searchCurrentUrl = "/", this.accountId = null, this.bypassPin = "123456", this.bypassBuffer = "", this.orbHovering = !1, this.showAccountId = !0, this.root = document.createElement("div"), this.root.className = "sg-launcher", this.root.style.zIndex = String(t + 5), this.root.setAttribute("aria-label", "System Guider actions"), this.optionsRoot = document.createElement("section"), this.optionsRoot.className = "sg-guide-picker", this.optionsRoot.hidden = !0, this.optionsRoot.setAttribute("aria-label", "All guides"), this.trigger = document.createElement("button"), this.trigger.type = "button", this.trigger.className = "sg-launcher__trigger", this.trigger.dataset.action = "toggle-menu", this.trigger.setAttribute("aria-label", "Show System Guider toolbar"), this.trigger.setAttribute("aria-expanded", "false"), this.trigger.title = "Show toolbar", this.trigger.innerHTML = `
      <span class="sg-launcher__avatar">${Li}</span>
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
      icon: Mi,
      shortcut: "R"
    }), o = this.createTile({
      action: "open-panel",
      variant: "panel",
      title: "Panel",
      subtitle: "Guide controls",
      icon: Ai,
      shortcut: "P"
    }), a = this.createTile({
      action: "play-page",
      variant: "play",
      title: "Play guides",
      subtitle: "Start a tutorial",
      icon: Ni
    });
    this.stopButton = this.createTile({
      action: "stop-tutorial",
      variant: "stop",
      title: "Stop",
      subtitle: "End tutorial",
      icon: Pi
    }), this.stopButton.hidden = !0, i.append(a, r, o, this.stopButton), this.petalGroup = i;
    const l = document.createElement("button");
    l.type = "button", l.className = "sg-launcher__orb", l.dataset.action = "toggle-menu", l.setAttribute("aria-label", "Hide System Guider toolbar"), l.title = "Close", l.innerHTML = `
      <span class="sg-launcher__avatar">${Bi}</span>
    `, this.orb = l, e.append(s, i, l);
    const c = document.createElement("form");
    c.className = "sg-launcher__search", c.setAttribute("role", "search"), c.innerHTML = `
      <span class="sg-launcher__search-spark">${Ae}</span>
      <input
        type="text"
        class="sg-launcher__search-input"
        placeholder="Search guides or press /"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search guides"
      />
      <button type="submit" class="sg-launcher__search-go" aria-label="Search">${Di}</button>
    `, this.searchInput = c.querySelector(".sg-launcher__search-input"), this.searchInput.addEventListener("input", () => this.renderSearchResults()), c.addEventListener("submit", (u) => {
      u.preventDefault(), this.submitSearch();
    }), this.searchResults = document.createElement("div"), this.searchResults.className = "sg-launcher__results", this.searchResults.hidden = !0, this.accountLabel = document.createElement("span"), this.accountLabel.className = "sg-launcher__account", this.accountLabel.hidden = !0;
    const d = document.createElement("div");
    return d.className = "sg-launcher__hint", d.innerHTML = "Press <kbd>Esc</kbd> to close", t.append(e, c, this.searchResults, this.accountLabel, d), this.syncAccountLabel(), t;
  }
  createTile({ action: t, variant: e, title: i, subtitle: s = "", icon: r, shortcut: o = "" }) {
    const a = document.createElement("button");
    return a.type = "button", a.className = `sg-launcher__tile sg-launcher__tile--${e}`, a.dataset.action = t, a.setAttribute("aria-label", i), a.title = i, a.innerHTML = `
      ${o ? `<span class="sg-launcher__shortcut">${o}</span>` : ""}
      <span class="sg-launcher__icon">${r}</span>
      <span class="sg-launcher__tile-copy">
        <span class="sg-launcher__tile-title">${i}</span>
        ${s ? `<span class="sg-launcher__tile-subtitle">${s}</span>` : ""}
      </span>
    `, a;
  }
  layoutPetals() {
    var r;
    if (!this.petalGroup) return;
    const t = Array.from(this.petalGroup.children).filter((o) => !o.hidden);
    t.forEach((o, a) => {
      o.style.setProperty("--sg-petal-index", String(a));
    });
    const e = t.length;
    this.petalGroup.dataset.count = String(e);
    const i = t.some((o) => o.classList.contains("sg-launcher__tile--record")), s = t.some((o) => o.classList.contains("sg-launcher__tile--panel"));
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
    e.forEach((o, a) => {
      const l = r[a];
      if (!l) return;
      const c = i.getPointAtLength(Math.min(1, Math.max(0, o)) * s);
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
    const e = t || Array.from(((u = this.petalGroup) == null ? void 0 : u.children) || []).filter((h) => !h.hidden), i = e.length, s = e.some((h) => h.classList.contains("sg-launcher__tile--record")), r = e.some((h) => h.classList.contains("sg-launcher__tile--panel")), o = this.connector.querySelector(".sg-launcher__connector-line--play"), a = this.connector.querySelector(".sg-launcher__connector-line--record"), l = this.connector.querySelector(".sg-launcher__connector-line--panel");
    if (a && (a.style.display = s ? "" : "none"), l && (l.style.display = r ? "" : "none"), !o) return;
    const c = o.querySelector("path"), d = !s && !r;
    d && i === 1 ? c == null || c.setAttribute("d", "M54 112C58 118 72 122 96 120") : d && i === 2 ? c == null || c.setAttribute("d", "M52 100C48 84 64 72 96 74") : c == null || c.setAttribute("d", "M46 108C34 78 58 28 96 28"), this.placeConnectorDots(o), s && this.placeConnectorDots(a), r && this.placeConnectorDots(l);
  }
  matchGuides(t) {
    const e = String(t || "").trim().toLowerCase(), i = Array.isArray(this.searchGuides) ? this.searchGuides : [];
    return e ? i.map((s) => {
      const r = String(s.title || "").toLowerCase(), o = String(s.url || "").toLowerCase();
      let a = 0;
      return r.startsWith(e) && (a += 3), r.includes(e) && (a += 2), o.includes(e) && (a += 1), { guide: s, score: a };
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
      const o = Array.isArray(s.steps) ? s.steps.length : 0;
      r.innerHTML = `
        <span class="sg-launcher__result-spark">${Ae}</span>
        <span class="sg-launcher__result-copy">
          <span class="sg-launcher__result-title"></span>
          <span class="sg-launcher__result-meta"></span>
        </span>
        <span class="sg-launcher__result-arrow">→</span>
      `, r.querySelector(".sg-launcher__result-title").textContent = s.title || "Untitled guide", r.querySelector(".sg-launcher__result-meta").textContent = `${s.url || "/"} · ${o} step${o === 1 ? "" : "s"}`, this.searchResults.append(r);
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
    var i, s, r, o, a, l, c, d, u, h, p, f;
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
        (o = this.onPlayPageGuide) == null || o.call(this), this.setMenuOpen(!1);
        return;
      }
      if (e === "stop-tutorial") {
        (a = this.onStopTutorial) == null || a.call(this);
        return;
      }
      if (e === "search-select") {
        const y = (l = t.target.closest("[data-guide-id]")) == null ? void 0 : l.dataset.guideId, b = (c = this.searchGuides) == null ? void 0 : c.find((g) => g.id === y);
        b && this.selectSearchGuide(b);
        return;
      }
      if (e === "close-picker" && this.hideGuideOptions(), e === "open-manage") {
        if (this.readOnly) return;
        this.hideGuideOptions(), (d = this.onOpenManage) == null || d.call(this);
      }
      if (e === "select-guide") {
        const y = (u = t.target.closest("[data-guide-id]")) == null ? void 0 : u.dataset.guideId, b = (h = this.guides) == null ? void 0 : h.find((g) => g.id === y);
        if (b) {
          const g = this.onSelectGuide;
          this.hideGuideOptions(), g == null || g(b);
        }
      }
      if (e === "delete-guide") {
        if (this.readOnly) return;
        t.preventDefault(), t.stopPropagation();
        const y = (p = t.target.closest("[data-guide-id]")) == null ? void 0 : p.dataset.guideId;
        if (!y) return;
        (f = this.onDeleteGuide) == null || f.call(this, y);
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
    var o;
    const e = this.bypassPin;
    if (!e || !this.orbHovering || !this.visible || t.metaKey || t.ctrlKey || t.altKey) return !1;
    const i = t.target;
    if (i instanceof HTMLElement && (i.tagName === "INPUT" || i.tagName === "TEXTAREA" || i.tagName === "SELECT" || i.isContentEditable)) return !1;
    const r = t.key;
    return r === "Backspace" ? (t.preventDefault(), this.bypassBuffer = this.bypassBuffer.slice(0, -1), !0) : r === "Escape" ? (this.bypassBuffer = "", !1) : /^[0-9]$/.test(r) ? (t.preventDefault(), this.bypassBuffer = `${this.bypassBuffer}${r}`.slice(-Math.max(e.length, 12)), (this.bypassBuffer === e || this.bypassBuffer.endsWith(e)) && (this.bypassBuffer = "", (o = this.onBypassOpenPanel) == null || o.call(this)), !0) : !1;
  }
  onKeyDown(t) {
    var r, o, a, l;
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
      t.preventDefault(), (o = this.searchInput) == null || o.focus();
      return;
    }
    if (i) return;
    const s = String(t.key || "").toLowerCase();
    s === "r" && !this.recordButton.disabled && (t.preventDefault(), (a = this.onStartRecording) == null || a.call(this), this.setMenuOpen(!1)), s === "p" && !this.panelButton.disabled && (t.preventDefault(), (l = this.onOpenPanel) == null || l.call(this), this.setMenuOpen(!1));
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
    const o = document.createElement("div");
    o.className = "sg-guide-picker__brand";
    const a = document.createElement("span");
    a.className = "sg-guide-picker__brand-icon", a.setAttribute("aria-hidden", "true"), a.innerHTML = Gi;
    const l = document.createElement("div");
    l.className = "sg-guide-picker__brand-copy";
    const c = document.createElement("strong");
    c.className = "sg-guide-picker__title", c.textContent = i ? "All Guides" : "Page Guides";
    const d = document.createElement("span");
    d.className = "sg-guide-picker__subtitle", d.textContent = i ? "Manage your guides" : "Choose a guide to play", l.append(c, d), o.append(a, l);
    const u = document.createElement("div");
    u.className = "sg-guide-picker__actions";
    const h = document.createElement("button");
    h.type = "button", h.className = "sg-guide-picker__manage", h.dataset.action = "open-manage", h.innerHTML = `<span class="sg-guide-picker__manage-icon">${Ri}</span><span>Manage</span>`, h.hidden = this.readOnly, this.manageButton = h;
    const p = document.createElement("button");
    p.type = "button", p.className = "sg-guide-picker__close", p.dataset.action = "close-picker", p.setAttribute("aria-label", "Close guide options"), p.textContent = "×", u.append(h, p), r.append(o, u);
    const f = document.createElement("div");
    if (f.className = "sg-guide-picker__list", t.length)
      if (i) {
        const y = Fe(Ti(t));
        let b = 0;
        y.forEach((g) => {
          if (g.type === "section") {
            const w = document.createElement("div");
            w.className = "sg-guide-picker__section", w.style.setProperty("--sg-toc-depth", String(g.depth));
            const C = z(s), S = z(g.path);
            (C === S || S !== "/" && C.startsWith(`${S}/`)) && w.classList.add("is-current");
            const E = document.createElement("span");
            E.className = "sg-guide-picker__section-label", E.textContent = g.label;
            const A = document.createElement("span");
            A.className = "sg-guide-picker__section-meta";
            const q = document.createElement("span");
            q.className = "sg-guide-picker__section-path", q.textContent = g.path;
            const N = document.createElement("button");
            N.type = "button", N.className = "sg-guide-picker__copy-path", N.title = "Copy path", N.setAttribute("aria-label", `Copy ${g.path}`), N.innerHTML = Oi, N.addEventListener("click", async (F) => {
              var j, O;
              F.preventDefault(), F.stopPropagation();
              try {
                await ((O = (j = navigator.clipboard) == null ? void 0 : j.writeText) == null ? void 0 : O.call(j, g.path)), N.classList.add("is-copied"), setTimeout(() => N.classList.remove("is-copied"), 900);
              } catch {
              }
            }), A.append(q, N), w.append(E, A), f.append(w);
            return;
          }
          b += 1, f.append(this.createGuideRow(g.guide, b, {
            depth: g.depth,
            currentUrl: s
          }));
        });
      } else
        t.forEach((y, b) => {
          f.append(this.createGuideRow(y, b + 1, { depth: 0, currentUrl: s }));
        });
    else {
      const y = document.createElement("div");
      y.className = "sg-guide-picker__empty", y.textContent = "No guides saved yet.", f.append(y);
    }
    this.optionsRoot.append(r, f), this.optionsRoot.hidden = !1, this.syncClosedRail();
  }
  createGuideRow(t, e, { depth: i = 0, currentUrl: s = "/" } = {}) {
    const r = document.createElement("div");
    r.className = "sg-guide-picker__row", r.dataset.guideId = t.id, r.style.setProperty("--sg-toc-depth", String(i));
    const o = z(t.url || "/");
    o === z(s) && r.classList.add("is-current-page");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-guide-picker__option", a.dataset.action = "select-guide", a.dataset.guideId = t.id;
    const l = document.createElement("span");
    l.className = "sg-guide-picker__number", l.textContent = String(e).padStart(2, "0");
    const c = document.createElement("span");
    c.className = "sg-guide-picker__copy";
    const d = document.createElement("strong");
    d.textContent = t.title || "Untitled guide";
    const u = document.createElement("small"), h = Array.isArray(t.steps) ? t.steps.length : Number(t.steps) || 0, p = document.createElement("span");
    p.className = "sg-guide-picker__path", p.textContent = o;
    const f = document.createElement("span");
    f.className = "sg-guide-picker__dot", f.textContent = "·";
    const y = document.createElement("span");
    y.textContent = `${h} step${h === 1 ? "" : "s"}`, u.append(p, f, y), c.append(d, u);
    const b = document.createElement("span");
    b.className = "sg-guide-picker__play", b.setAttribute("aria-hidden", "true"), b.innerHTML = $i, a.append(l, c, b);
    const g = document.createElement("button");
    return g.type = "button", g.className = "sg-guide-picker__delete", g.dataset.action = "delete-guide", g.dataset.guideId = t.id, g.setAttribute("aria-label", `Delete ${t.title || "guide"}`), g.title = "Delete guide", g.innerHTML = Ii, this.readOnly && (g.hidden = !0), r.append(a, g), r;
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
const Hi = (n) => JSON.parse(JSON.stringify(n));
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
  }), Hi({
    id: String(n.id || `guide-${Date.now()}`),
    title: String(n.title || "Untitled guide"),
    version: Number(n.version) || 1,
    ...n.url ? { url: String(n.url) } : {},
    ...n.settings && typeof n.settings == "object" && !Array.isArray(n.settings) ? { settings: n.settings } : {},
    steps: n.steps
  });
}
function Me(n) {
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
  if (e.forEach((r, o) => {
    try {
      i.push(rt(r));
    } catch (a) {
      s.push(`Guide ${o + 1}: ${a.message}`);
    }
  }), !i.length)
    throw new TypeError(s[0] || "No valid guides found in the file.");
  return { guides: i, errors: s };
}
function Yt(n) {
  return JSON.stringify(rt(n), null, 2);
}
function Ui(n) {
  const t = (Array.isArray(n) ? n : []).map((e) => rt(e));
  return JSON.stringify({
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    guides: t
  }, null, 2);
}
function Wi(n, t) {
  !n || typeof localStorage > "u" || localStorage.setItem(n, Yt(t));
}
function qi(n) {
  if (!n || typeof localStorage > "u") return null;
  const t = localStorage.getItem(n);
  return t ? rt(JSON.parse(t)) : null;
}
function Ue(n, t, e = "application/json") {
  const i = new Blob([n], { type: e }), s = URL.createObjectURL(i), r = document.createElement("a");
  r.href = s, r.download = t, r.click(), URL.revokeObjectURL(s);
}
function ji(n, t = "system-guide.json") {
  Ue(Yt(n), t);
}
function Ki(n, t = "system-guider-guides.json") {
  Ue(Ui(n), t);
}
async function zi(n) {
  var e;
  const t = Yt(n);
  if (!((e = navigator.clipboard) != null && e.writeText))
    throw new Error("Clipboard API is unavailable in this browser.");
  return await navigator.clipboard.writeText(t), t;
}
function Vi(n = ((e) => (e = globalThis.location) == null ? void 0 : e.href)(), t = "pathname") {
  var i;
  try {
    const s = new URL(n, ((i = globalThis.location) == null ? void 0 : i.origin) || "http://localhost");
    return t === "full" ? `${s.pathname}${s.search}` || "/" : s.pathname || "/";
  } catch {
    return "/";
  }
}
function Ji(n = "pathname") {
  var t;
  return Vi((t = globalThis.location) == null ? void 0 : t.href, n);
}
function We(n) {
  return `${n || "system-guider"}:by-url`;
}
function ce(n) {
  if (typeof localStorage > "u") return {};
  try {
    const t = localStorage.getItem(We(n)), e = t ? JSON.parse(t) : {};
    return e && typeof e == "object" ? e : {};
  } catch {
    return {};
  }
}
function qe(n, t) {
  typeof localStorage > "u" || localStorage.setItem(We(n), JSON.stringify(t));
}
function de(n) {
  return Array.isArray(n) ? n.filter(Boolean) : n ? [n] : [];
}
function Wt(n, t, e) {
  const i = ce(n), s = de(i[t]), r = s.findIndex((o) => (o == null ? void 0 : o.id) === e.id);
  return r >= 0 ? s[r] = e : s.push(e), i[t] = s, qe(n, i), s;
}
function Xi(n) {
  const t = ce(n), e = [];
  return Object.entries(t).forEach(([i, s]) => {
    de(s).forEach((r) => {
      e.push({ ...r, url: (r == null ? void 0 : r.url) || i });
    });
  }), e;
}
function Zi(n, t, e) {
  const i = ce(n), s = de(i[t]).filter((r) => (r == null ? void 0 : r.id) !== e);
  return s.length ? i[t] = s : delete i[t], qe(n, i), s;
}
function ue(n) {
  return `${n || "system-guider"}:pending-play`;
}
function qt(n, t) {
  typeof sessionStorage > "u" || sessionStorage.setItem(ue(n), JSON.stringify(t));
}
function Yi(n) {
  if (typeof sessionStorage > "u") return null;
  const t = ue(n), e = sessionStorage.getItem(t);
  if (sessionStorage.removeItem(t), !e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function jt(n) {
  typeof sessionStorage > "u" || sessionStorage.removeItem(ue(n));
}
function je(n) {
  return String(n || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";
}
function Qi(n) {
  const t = String(n || "/").split(/[\\/]+/).map((e) => e.trim()).filter(Boolean).map(je);
  return t.length ? t.join("/") : "root";
}
function ts(n) {
  return `${je((n == null ? void 0 : n.title) || (n == null ? void 0 : n.id) || "guide")}.json`;
}
function oe(n, t = n == null ? void 0 : n.url) {
  return `${Qi(t)}/${ts(n)}`;
}
function es(n = {}) {
  if (n === !1) return null;
  const t = n === !0 || n == null ? {} : n;
  return {
    baseUrl: t.baseUrl || "/__sg/guides",
    publicBase: t.publicBase || "/guides",
    downloadFallback: t.downloadFallback !== !1,
    ...t
  };
}
async function he(n, t, e) {
  const i = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }, s = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/);
  s != null && s[1] && (i["X-XSRF-TOKEN"] = decodeURIComponent(s[1]));
  const r = document.querySelector('meta[name="csrf-token"]');
  r != null && r.content && (i["X-CSRF-TOKEN"] = r.content);
  const o = await fetch(n, {
    method: t,
    headers: i,
    credentials: "same-origin",
    body: e ? JSON.stringify(e) : void 0
  });
  if (!o.ok) {
    const l = await o.text().catch(() => "");
    let c = l;
    try {
      const d = JSON.parse(l);
      c = d.message || d.error || `HTTP ${o.status}`, String(c).trim() || (c = `HTTP ${o.status}`);
    } catch {
      c || (c = `HTTP ${o.status}`);
    }
    throw new Error(c);
  }
  return (o.headers.get("content-type") || "").includes("application/json") ? o.json() : null;
}
async function Kt(n, t, e) {
  const i = oe(t, e);
  try {
    const s = await he(n.baseUrl, "POST", {
      guide: t,
      urlKey: e || t.url || "/",
      path: i
    });
    return { ok: !0, path: (s == null ? void 0 : s.path) || i, via: "api" };
  } catch (s) {
    if (!n.downloadFallback) throw s;
    const r = i.replace(/\//g, "__"), o = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), a = URL.createObjectURL(o), l = document.createElement("a");
    return l.href = a, l.download = r, l.click(), URL.revokeObjectURL(a), { ok: !0, path: i, via: "download", error: s.message };
  }
}
async function is(n, { guideId: t, urlKey: e, path: i }) {
  try {
    return await he(n.baseUrl, "DELETE", { guideId: t, urlKey: e, path: i }), { ok: !0 };
  } catch {
    return { ok: !1 };
  }
}
async function ss(n) {
  const t = `${String(n.publicBase || "/guides").replace(/\/$/, "")}/index.json`, e = await fetch(t, { headers: { Accept: "application/json" } });
  if (!e.ok) return { version: 1, guides: [] };
  const i = await e.json();
  return i && typeof i == "object" ? { version: Number(i.version) || 1, guides: Array.isArray(i.guides) ? i.guides : [] } : { version: 1, guides: [] };
}
async function Ne(n) {
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
async function ns(n) {
  const t = await ss(n), e = String(n.publicBase || "/guides").replace(/\/$/, ""), i = [];
  for (const s of t.guides) {
    const r = s == null ? void 0 : s.path;
    if (r)
      try {
        const o = await fetch(`${e}/${r}`, {
          headers: { Accept: "application/json" }
        });
        if (!o.ok) continue;
        const a = await o.json();
        a && Array.isArray(a.steps) && i.push({
          ...a,
          url: a.url || s.url,
          title: a.title || s.title,
          id: a.id || s.id
        });
      } catch {
      }
  }
  return i;
}
async function rs(n) {
  const t = String(n.publicBase || "/guides").replace(/\/$/, ""), e = await fetch(`${t}/settings.json`, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });
  if (!e.ok) return null;
  const i = await e.json();
  return i && typeof i == "object" && !Array.isArray(i) ? i : null;
}
async function os(n, t) {
  const e = await he(n.baseUrl, "POST", {
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
const as = {
  next: "Next Step",
  back: "Back",
  close: "Close Guide",
  skip: "Skip Step",
  startRecording: "Start Recording",
  stopRecording: "Stop Recording"
}, $t = (n = "") => ({
  id: `guide-${Date.now()}`,
  title: n ? `Guide for ${n}` : "New system guide",
  version: 1,
  url: n || void 0,
  steps: []
});
class ls {
  constructor(t = {}) {
    var e, i, s, r, o, a, l, c;
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
      labels: { ...as, ...t.labels }
    }, this.settings = gt({
      ...Ie(),
      ...t.settings || {}
    }), this.options.resetBeforePlay = this.settings.resetBeforePlay || this.options.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay ?? this.options.resetBeforePlayDelay, Ot(this.settings), this.fileStorage = es(this.options.fileStorage), this.fileGuides = [], this.guideSaveTimer = null, this.settingsSaveTimer = null, this.apiReady = !this.fileStorage, this.apiProbeTimer = null, this.guide = $t(this.getUrlKey()), this.mode = "idle", this.dirty = !1, this.recordingAppend = !1, this.destroyed = !1, this.recordingStepsBaseline = 0, this.panelVisible = !this.options.showLauncher, this.readOnly = !1, this.bypassUnlocked = !1, this.launcherVisible = this.options.showLauncher !== !1, this.accountId = t.accountId ?? null, this.overlay = new Si({
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
    }), this.recorder = new bi({ onStep: (d) => this.recordStep(d) }), this.player = new xi({
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
    }), this.playbackResumeTimer = null, this.panel = new ze({
      labels: this.options.labels,
      zIndex: this.options.zIndex,
      handlers: this.createHandlers(),
      visible: this.panelVisible
    }), this.launcher = this.options.showLauncher ? new Fi({
      zIndex: this.options.zIndex,
      onOpenPanel: () => this.togglePanel(),
      onBypassOpenPanel: () => this.openPanelViaBypass(),
      onStartRecording: () => this.startRecording(),
      onPlayPageGuide: () => this.playPageGuide(),
      onDeleteGuide: (d) => this.deletePageGuide(d),
      onOpenManage: () => this.openManageRoutes(),
      onStopTutorial: () => this.close(!0),
      onSearchGuide: (d) => this.playGuide(d)
    }) : null, (i = this.launcher) == null || i.setApiReady(this.apiReady), (s = this.launcher) == null || s.setReadOnly(this.readOnly), (a = (r = this.launcher) == null ? void 0 : r.setBypassPin) == null || a.call(r, (o = this.settings) == null ? void 0 : o.bypassPin), (c = (l = this.launcher) == null ? void 0 : l.setAccountId) == null || c.call(l, this.accountId), this.onKeyDown = this.onKeyDown.bind(this), this.onUrlChange = this.onUrlChange.bind(this), document.addEventListener("keydown", this.onKeyDown), window.addEventListener("popstate", this.onUrlChange), this.installHistoryHooks(), this.applyAccessPolicy(), this.bootstrap();
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
      const e = await ns(this.fileStorage);
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
        const r = await rs(this.fileStorage);
        if (!r) return;
        this.settings = gt({
          ...this.settings,
          ...r,
          ...this.options.settings || {}
        }), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, Ot(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (s = (i = this.player) == null ? void 0 : i.setUiOptions) == null || s.call(i, this.settings.ui), this.applyAccessPolicy();
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
    var i, s, r, o;
    const e = !!t;
    return this.launcherVisible === e ? ((i = this.launcher) == null || i.setVisible(this.launcherVisible), this) : (this.launcherVisible = e, (s = this.launcher) == null || s.setVisible(this.launcherVisible), this.launcherVisible || ((o = (r = this.launcher) == null ? void 0 : r.setMenuOpen) == null || o.call(r, !1), this.mode !== "playback" && this.mode !== "recording" && this.closePanel()), this);
  }
  /** Sync read-only + toolbar visibility from settings + current account/url. */
  applyAccessPolicy() {
    var s, r, o, a, l, c, d, u;
    const t = this.bypassUnlocked || ai(this.accountId, (s = this.settings) == null ? void 0 : s.editorAccountIds);
    this.setReadOnly(!t);
    const e = oi(this.getUrlKey(), (r = this.settings) == null ? void 0 : r.hiddenUrls), i = this.options.showLauncher !== !1 && !e;
    return this.setLauncherVisible(i), (l = (o = this.launcher) == null ? void 0 : o.setBypassPin) == null || l.call(o, (a = this.settings) == null ? void 0 : a.bypassPin), (u = (c = this.launcher) == null ? void 0 : c.setShowAccountId) == null || u.call(c, ((d = this.settings) == null ? void 0 : d.showAccountId) !== !1), this;
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
        const o = qi(this.options.storageKey);
        o && this.load(o, { dirty: !1, mode: "manage" });
      }
    } catch {
    }
    await this.ensureGuideApiReady(), this.syncLauncher(), this.render(), Ot(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (s = (i = this.player) == null ? void 0 : i.setUiOptions) == null || s.call(i, this.settings.ui), this.resumePendingPlay();
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
    if (this.clearApiProbeTimer(), await Ne(this.fileStorage) || this.fileStorage.downloadFallback)
      return this.setApiReady(!0), !0;
    if (this.setApiReady(!1), this.destroyed) return !1;
    const e = async () => {
      if (this.destroyed || !this.fileStorage) return;
      if (await Ne(this.fileStorage) || this.fileStorage.downloadFallback) {
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
    return typeof this.options.getUrlKey == "function" ? String(this.options.getUrlKey() || "/") : Ji(this.options.urlMatch);
  }
  getGuideForCurrentPage() {
    return this.getGuidesForCurrentPage()[0] || null;
  }
  getGuidesForCurrentPage() {
    const t = z(this.getUrlKey());
    return this.getAllGuides().filter((e) => z(e.url || "/") === t);
  }
  getAllGuides() {
    const t = [];
    Object.entries(this.options.guides || {}).forEach(([o, a]) => {
      (Array.isArray(a) ? a : a ? [a] : []).forEach((c) => t.push({ ...c, url: c.url || o }));
    });
    const e = this.options.guidesByUrl ? Xi(this.options.storageKey) : [], i = this.fileGuides || [], s = /* @__PURE__ */ new Map(), r = this.fileStorage ? [...t, ...e, ...i] : [...t, ...i, ...e];
    for (const o of r)
      try {
        const a = rt(o);
        s.set(a.id, a);
      } catch {
      }
    return [...s.values()].sort((o, a) => String(o.url || "").localeCompare(String(a.url || "")) || String(o.title || "").localeCompare(String(a.title || "")));
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
    }), this.options.guidesByUrl && Wt(this.options.storageKey, t, this.guide), this.dirty = !1, this.persistDraft(), Array.isArray(this.fileGuides)) {
      const i = this.fileGuides.findIndex((s) => s.id === this.guide.id);
      i >= 0 ? this.fileGuides[i] = { ...this.fileGuides[i], ...this.guide } : this.fileGuides = [...this.fileGuides, structuredClone(this.guide)];
    }
    return this.syncLauncher(), this.render({
      flashMessage: `Saved “${this.guide.title || "Untitled guide"}”.`
    }), this.fileStorage && (oe(this.guide, t), Kt(this.fileStorage, this.guide, t).then(async (i) => {
      var s;
      await this.reloadFileGuides(), i.via === "download" && ((s = globalThis.alert) == null || s.call(
        globalThis,
        `Guide downloaded as ${String(i.path).replace(/\//g, "__")}. Place it in your app public/guides/ (same route folders).`
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
      const o = e.find((a) => a.id === t);
      return o ? this.playGuide(o) : ((s = globalThis.alert) == null || s.call(globalThis, "That guide could not be found."), this);
    }
    return (r = this.launcher) == null || r.showGuideOptions(
      e,
      (o) => this.playGuide(o),
      { hierarchical: !0, currentUrl: this.getUrlKey() }
    ), this;
  }
  async playGuide(t) {
    var r;
    this.assertUsable();
    const e = rt(t), i = z(e.url || "/"), s = z(this.getUrlKey());
    if (i !== s) {
      if (qt(this.options.storageKey, {
        guideId: e.id,
        urlKey: i,
        guide: e,
        stepIndex: 0
      }), this.getGuidePlaybackSettings(e).reloadOnNavigate || typeof this.options.navigate != "function")
        return globalThis.location.assign(i), this;
      try {
        await this.options.navigate(i);
      } catch (a) {
        return (r = globalThis.alert) == null || r.call(globalThis, `Could not open ${i}: ${(a == null ? void 0 : a.message) || a}`), this;
      }
      return this.resumePendingPlay({ soft: !0 }), this;
    }
    return this.startPageGuide(e);
  }
  deletePageGuide(t) {
    var r, o, a;
    if (this.assertUsable(), this.readOnly) return this;
    if (!t) return this;
    if (!((r = globalThis.confirm) != null && r.call(globalThis, "Delete this page guide? This cannot be undone."))) return this;
    const e = this.getAllGuides().find((l) => l.id === t), i = z((e == null ? void 0 : e.url) || this.getUrlKey());
    this.options.guidesByUrl && Zi(this.options.storageKey, i, t), this.fileGuides = (this.fileGuides || []).filter((l) => l.id !== t), this.fileStorage && e && is(this.fileStorage, {
      guideId: t,
      urlKey: i,
      path: oe(e, i)
    }).then(() => this.reloadFileGuides()).catch(() => {
    });
    const s = this.getAllGuides().filter((l) => l.id !== t);
    if (((o = this.guide) == null ? void 0 : o.id) === t) {
      const l = s.find((c) => z(c.url) === z(this.getUrlKey())) || s[0];
      l ? this.load(l, { dirty: !1, mode: this.mode === "manage-routes" ? "manage-routes" : "idle" }) : (this.guide = $t(this.getUrlKey()), this.mode = this.mode === "manage-routes" ? "manage-routes" : "idle", this.dirty = !1, this.persistDraft());
    }
    return this.syncLauncher(), this.render(), s.length && this.launcher && !this.launcher.optionsRoot.hidden ? this.launcher.showGuideOptions(
      s,
      (l) => this.playGuide(l),
      { hierarchical: !0, currentUrl: this.getUrlKey() }
    ) : (a = this.launcher) == null || a.hideGuideOptions(), this;
  }
  startPageGuide(t, { skipReset: e = !1, stepIndex: i = 0 } = {}) {
    const s = rt(t), r = this.getGuidePlaybackSettings(s);
    if (!e && r.resetBeforePlay === "reload")
      return qt(this.options.storageKey, {
        guideId: s.id,
        urlKey: z(s.url || this.getUrlKey()),
        guide: s,
        stepIndex: 0
      }), globalThis.location.reload(), this;
    e || jt(this.options.storageKey), this.load(s, { dirty: !1, mode: "manage" });
    const a = Math.max(0, Math.min(Number(i) || 0, Math.max(s.steps.length - 1, 0)));
    return this.startFrom(a);
  }
  persistPlaybackProgress(t, { mayNavigate: e = !1 } = {}) {
    var s, r;
    if (!((s = this.guide) != null && s.id)) return;
    const i = ((r = this.guide.steps) == null ? void 0 : r.length) || 0;
    if (t >= i) {
      jt(this.options.storageKey);
      return;
    }
    qt(this.options.storageKey, {
      guideId: this.guide.id,
      guide: this.guide,
      stepIndex: t,
      resumeAnyUrl: !0,
      mayNavigate: !!e,
      savedAt: Date.now()
    });
  }
  resumePendingPlay({ soft: t = !1 } = {}) {
    const e = Yi(this.options.storageKey);
    if (!(e != null && e.guideId) && !(e != null && e.guide)) return;
    const i = !!e.resumeAnyUrl, s = z(e.urlKey || "/"), r = z(this.getUrlKey());
    if (e.urlKey && !i && s !== r) {
      t && (qt(this.options.storageKey, e), window.setTimeout(() => this.resumePendingPlay({ soft: !0 }), 300));
      return;
    }
    const o = t ? 120 : Math.max(0, Number(this.settings.resetBeforePlayDelay || this.options.resetBeforePlayDelay) || 450);
    window.setTimeout(() => {
      var l, c;
      if (this.destroyed) return;
      let a = this.getAllGuides().find((d) => d.id === e.guideId);
      if (!a && e.guide)
        try {
          a = rt(e.guide);
        } catch {
          a = null;
        }
      if (!a) {
        (l = globalThis.alert) == null || l.call(globalThis, "The page guide could not be resumed after navigation.");
        return;
      }
      try {
        const d = t ? Math.max(0, Number(e.stepIndex) || 0) : 0;
        this.startPageGuide(a, { skipReset: !0, stepIndex: d });
      } catch (d) {
        (c = globalThis.alert) == null || c.call(globalThis, `Could not resume page guide: ${d.message}`);
      }
    }, o);
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
    const e = gt(this.settings), i = t != null && t.settings && typeof t.settings == "object" ? t.settings : {};
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
    var r, o, a, l, c, d;
    if (this.readOnly && (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "reloadOnNavigate" || t === "resetBeforePlay" || t === "resetBeforePlayDelay" || t === "theme" || String(t || "").startsWith("ui.")))
      return this;
    const i = gt({ ...this.settings });
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
    return this.settings = gt(i), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, Ot(this.settings), (o = (r = this.overlay) == null ? void 0 : r.applyUiSettings) == null || o.call(r, this.settings.ui), (l = (a = this.player) == null ? void 0 : a.setUiOptions) == null || l.call(a, this.settings.ui), this.scheduleSettingsSave(), (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin") && this.applyAccessPolicy(), t === "showAccountId" && ((d = (c = this.launcher) == null ? void 0 : c.setShowAccountId) == null || d.call(c, this.settings.showAccountId)), t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || String(t || "").startsWith("ui.") && (t.includes("Bg") || t.includes("Text") || t.includes("Color") || t === "ui.overlayOpacity" || t === "ui.transitionMs") || this.render(), this;
  }
  resetUiSettings() {
    var t, e, i, s;
    return this.settings = gt({
      ...this.settings,
      ui: ae()
    }), Ot(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (s = (i = this.player) == null ? void 0 : i.setUiOptions) == null || s.call(i, this.settings.ui), this.scheduleSettingsSave(), this.render(), this;
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
    const t = gt(this.settings), e = await os(this.fileStorage, t);
    e != null && e.settings && typeof e.settings == "object" && (this.settings = gt({
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
        const t = z(this.guide.url || this.getUrlKey());
        Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((e) => e.id === this.guide.id ? { ...this.guide } : e)), await Kt(this.fileStorage, this.guide, t);
        return;
      }
      if (this.options.guidesByUrl) {
        Wt(this.options.storageKey, z(this.guide.url || this.getUrlKey()), this.guide);
        return;
      }
      this.persistDraft();
    }
  }
  editGuideSetting(t, e, i) {
    var o, a, l;
    const s = t || ((o = this.guide) == null ? void 0 : o.id);
    let r = ((a = this.guide) == null ? void 0 : a.id) === s ? this.guide : this.getAllGuides().find((c) => c.id === s);
    if (!r) return this;
    if (r = { ...r, settings: { ...r.settings || {} } }, e === "autoScroll" && (i ? delete r.settings.autoScroll : r.settings.autoScroll = !1), e === "reloadOnNavigate" && (i ? r.settings.reloadOnNavigate = !0 : delete r.settings.reloadOnNavigate), e === "resetBeforePlay" && (i ? r.settings.resetBeforePlay = "reload" : delete r.settings.resetBeforePlay), Object.keys(r.settings).length === 0 && delete r.settings, ((l = this.guide) == null ? void 0 : l.id) === r.id && (this.guide = r, this.dirty = !0, this.persistDraft()), Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((c) => c.id === r.id ? { ...c, ...r } : c)), this.fileStorage) {
      const c = z(r.url || this.getUrlKey());
      Kt(this.fileStorage, r, c).then(() => this.reloadFileGuides()).catch(() => {
      });
    } else this.options.guidesByUrl && Wt(this.options.storageKey, z(r.url || "/"), r);
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
    var e, i, s, r, o, a, l, c, d, u, h, p, f, y, b;
    const t = this.getAllGuides().length;
    (e = this.launcher) == null || e.setApiReady(this.apiReady), (i = this.launcher) == null || i.setReadOnly(this.readOnly), (o = (s = this.launcher) == null ? void 0 : s.setBypassPin) == null || o.call(s, (r = this.settings) == null ? void 0 : r.bypassPin), (c = (a = this.launcher) == null ? void 0 : a.setShowAccountId) == null || c.call(a, ((l = this.settings) == null ? void 0 : l.showAccountId) !== !1), (u = (d = this.launcher) == null ? void 0 : d.setAccountId) == null || u.call(d, this.accountId), (h = this.launcher) == null || h.setVisible(this.launcherVisible), (p = this.launcher) == null || p.setSearchData(this.getAllGuides(), this.getUrlKey()), (f = this.launcher) == null || f.setPlayState(t), (y = this.launcher) == null || y.setPanelOpen(this.panelVisible), (b = this.launcher) == null || b.setPlaying(this.mode === "playback");
  }
  onUrlChange() {
    if (this.applyAccessPolicy(), this.mode === "recording") return;
    if (this.mode === "playback") {
      this.rebindPlaybackAfterNavigation();
      return;
    }
    const t = this.mode === "manage-routes" && !this.readOnly, e = this.getGuideForCurrentPage();
    e ? this.load(e, { dirty: !1, mode: t ? "manage-routes" : "idle" }) : (this.guide = $t(this.getUrlKey()), this.mode = t ? "manage-routes" : "idle", this.dirty = !1, this.render()), this.syncLauncher();
  }
  render(t = {}) {
    var s, r, o;
    const e = this.guide.steps.map((a) => ({
      ...a,
      invalid: a.action !== "manual" && !Nt(a.selector)
    })), i = !!this.focusGuideTitle;
    this.focusGuideTitle = !1, this.panel.update({
      mode: this.mode,
      steps: e,
      guideTitle: this.guide.title,
      pageUrl: this.getUrlKey(),
      hasPageGuide: this.hasGuideForCurrentPage(),
      pageGuides: this.getGuidesForCurrentPage().map((a) => {
        var l;
        return {
          id: a.id,
          title: a.title,
          steps: ((l = a.steps) == null ? void 0 : l.length) || 0,
          url: a.url
        };
      }),
      allGuides: this.getAllGuides().map((a) => {
        var l;
        return {
          id: a.id,
          title: a.title,
          steps: ((l = a.steps) == null ? void 0 : l.length) || 0,
          url: a.url,
          settings: a.settings || {}
        };
      }),
      settings: { ...this.settings },
      guideSettings: ((s = this.guide) == null ? void 0 : s.settings) || {},
      currentGuideId: ((r = this.guide) == null ? void 0 : r.id) || null,
      accountId: this.accountId,
      recordingAppend: !!this.recordingAppend,
      recordingStepsBaseline: Number(this.recordingStepsBaseline) || 0,
      newStepsCount: this.mode === "recording" ? Math.max(0, (((o = this.guide.steps) == null ? void 0 : o.length) || 0) - (Number(this.recordingStepsBaseline) || 0)) : 0,
      focusGuideTitle: i,
      dirty: !!this.dirty,
      readOnly: !!this.readOnly,
      flashMessage: "",
      ...t
    }), this.syncLauncher();
  }
  startRecording() {
    return this.assertUsable(), this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.guide = $t(this.getUrlKey()), this.dirty = !1, this.recordingAppend = !1, this.recordingStepsBaseline = 0, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  /** Append more recorded interactions to the current guide (from Manage steps). */
  continueRecording() {
    return this.assertUsable(), this.readOnly ? this : (this.guide || (this.guide = $t(this.getUrlKey())), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.recordingAppend = !0, this.recordingStepsBaseline = this.guide.steps.length, this.mode = "recording", this.recorder.start(), this.render(), this);
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
    const s = this.guide.steps.findIndex((a) => String(a.id) === i);
    if (s < 0) return this;
    const r = Math.max(0, Math.min(Number(e), this.guide.steps.length - 1));
    if (r === s) return this;
    const [o] = this.guide.steps.splice(s, 1);
    return this.guide.steps.splice(r, 0, o), this.changed(), this;
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
    const r = this.guide.steps.findIndex((o) => String(o.id) === s);
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
    const e = this.guide.steps.find((s) => s.id === t), i = e && Nt(e.selector);
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
    var i, s, r, o;
    (s = (i = this.options).onStepFail) == null || s.call(i, structuredClone(t), e), this.render({
      currentStep: t,
      currentIndex: e,
      total: this.guide.steps.length,
      waiting: !1,
      failed: !0,
      autoSkipping: !1,
      message: ((o = (r = this.player) == null ? void 0 : r.missingTargetMessage) == null ? void 0 : o.call(r, t)) || ""
    });
  }
  onPlaybackComplete() {
    var t, e;
    jt(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), (e = (t = this.options).onComplete) == null || e.call(t);
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
    return !this.options.allowClose && !t || this.dirty && !t && globalThis.confirm && !globalThis.confirm("Close with unsaved guide changes?") ? !1 : (this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), jt(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.mode = "idle", this.render(), this.options.showLauncher && this.closePanel(), (i = (e = this.options).onClose) == null || i.call(e), !0);
  }
  exportJSON() {
    return Yt(this.guide);
  }
  downloadJSON(t = `${this.guide.id}.json`) {
    return ji(this.guide, t), this.dirty = !1, this;
  }
  downloadAllGuides() {
    var i;
    this.assertUsable();
    const t = this.getAllGuides();
    if (!t.length)
      return (i = globalThis.alert) == null || i.call(globalThis, "No guides to download yet."), this;
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return Ki(t, `system-guider-guides-${e}.json`), this;
  }
  async copyJSON() {
    const t = await zi(this.guide);
    return this.dirty = !1, t;
  }
  /** Persist one guide to local map + backend (file storage) without changing the active editor. */
  async persistImportedGuide(t) {
    const e = rt(t), i = z(e.url || "/");
    if (e.url = i, this.options.guidesByUrl && Wt(this.options.storageKey, i, e), Array.isArray(this.fileGuides)) {
      const s = this.fileGuides.findIndex((r) => r.id === e.id);
      s >= 0 ? this.fileGuides[s] = { ...e } : this.fileGuides = [...this.fileGuides, { ...e }];
    } else
      this.fileGuides = [{ ...e }];
    return this.fileStorage && await Kt(this.fileStorage, e, i), e;
  }
  /**
   * Import one or more guides from JSON text/objects/files.
   * Auto-saves each guide to the backend when file storage is enabled.
   */
  async importGuides(t, { sourceLabel: e = "import" } = {}) {
    var l;
    if (this.readOnly) return [];
    this.assertUsable();
    const { guides: i, errors: s } = Me(t), r = [], o = [...s];
    for (const c of i)
      try {
        r.push(await this.persistImportedGuide(c));
      } catch (d) {
        o.push(`${c.title || c.id}: ${d.message}`);
      }
    if (this.fileStorage)
      try {
        await this.reloadFileGuides();
      } catch {
      }
    this.syncLauncher(), this.mode = "manage-routes", this.openPanel();
    const a = r.length ? `Loaded ${r.length} guide${r.length === 1 ? "" : "s"} from ${e}${this.fileStorage ? " and saved to backend" : ""}.` : `No guides loaded from ${e}.`;
    return this.render({ flashMessage: a }), o.length && ((l = globalThis.alert) == null || l.call(
      globalThis,
      `${r.length ? `Some guides had issues:
` : `Could not load guides:
`}${o.slice(0, 8).join(`
`)}`
    )), r;
  }
  openGuideFile() {
    const t = document.createElement("input");
    t.type = "file", t.accept = "application/json,.json", t.multiple = !0, t.addEventListener("change", async () => {
      var o, a, l;
      const e = [...t.files || []];
      if (!e.length) return;
      const i = [], s = [];
      for (const c of e)
        try {
          const d = await c.text(), { guides: u, errors: h } = Me(d);
          i.push(...u), s.push(...h.map((p) => `${c.name}: ${p}`));
        } catch (d) {
          s.push(`${c.name}: ${d.message}`);
        }
      if (!i.length) {
        (o = globalThis.alert) == null || o.call(globalThis, s[0] || "No valid guide JSON selected.");
        return;
      }
      const r = [...new Map(i.map((c) => [c.id, c])).values()];
      try {
        await this.importGuides(
          { guides: r },
          { sourceLabel: e.length === 1 ? e[0].name : `${e.length} files` }
        ), s.length && ((a = globalThis.alert) == null || a.call(globalThis, `Loaded with warnings:
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
    this.fileStorage || Wi(this.options.storageKey, this.guide);
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
let Dt = null;
const cs = {
  init(n = {}) {
    if (typeof window > "u" || typeof document > "u")
      throw new Error("System Guider can only be initialized in a browser.");
    return Dt == null || Dt.destroy(), Dt = new ls(n), Dt;
  }
};
export {
  cs as default
};
