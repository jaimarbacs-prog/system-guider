const St = (i, t, e = "") => {
  const s = document.createElement("button");
  return s.type = "button", s.className = `sg-button ${e ? `sg-button--${e}` : ""}`.trim(), s.dataset.action = t, s.textContent = i, s;
}, O = (i, t, e) => {
  const s = document.createElement(i);
  return s.className = t, s.textContent = e, s;
}, Q = (i, t = "ghost", { icon: e = "", ariaLabel: s = "", withLabel: n = !1 } = {}) => {
  const r = document.createElement("button");
  return r.type = "button", r.className = `sg-button sg-button--tiny ${t ? `sg-button--${t}` : ""}`.trim(), e ? (r.classList.add(n ? "sg-button--with-icon" : "sg-button--icon"), n ? r.innerHTML = `${e}<span>${i}</span>` : r.innerHTML = e, r.setAttribute("aria-label", s || i), r.title = s || i) : r.textContent = i, r;
}, gs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 3.25v9.5M3.25 8h9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, xi = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.6 2.7a1.5 1.5 0 0 1 2.1 2.1L5.8 12.7 2.5 13.5l.8-3.3L11.6 2.7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
`, Je = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 4.5h9M6.2 4.5V3.4h3.6v1.1M5.2 4.5l.6 8.1h4.4l.6-8.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Ui = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8.2 6.6 11.3 12.5 4.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, fs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, ms = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8h9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`, ys = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.8" width="6.6" height="6.6" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M6.4 5.1h4.4c.9 0 1.6.7 1.6 1.6v4.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, bs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.4 4.4 11.6 11.6M11.6 4.4 4.4 11.6" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/>
  </svg>
`, Ye = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M5 3.2 12.2 8 5 12.8V3.2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>
`, Ss = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.8v7.2M5.2 7.2 8 10l2.8-2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, vs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M6.2 3.2h3.6v1.5H6.2V3.2Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M5.2 4h-.8A1.4 1.4 0 0 0 3 5.4v7.2A1.4 1.4 0 0 0 4.4 14h7.2A1.4 1.4 0 0 0 13 12.6V5.4A1.4 1.4 0 0 0 11.6 4h-.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, ws = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 9.8V2.8M5.2 5.2 8 2.4l2.8 2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, ks = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M2.6 4.4h3.2l1.2 1.3h6.4v6.5H2.6V4.4Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, _s = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 3.2h3.4A2.2 2.2 0 0 1 8 4.4v8.4a1.8 1.8 0 0 0-1.4-.6H3.2V3.2Zm9.6 0H9.4A2.2 2.2 0 0 0 8 4.4v8.4c.4-.4.9-.6 1.4-.6h3.4V3.2Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
  </svg>
`, Qe = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.2" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.6 10.2V3.8A1.2 1.2 0 0 1 4.8 2.6h6.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, Ei = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" stroke-width="1.35"/>
    <path d="M8 1.8v1.4M8 12.8v1.4M1.8 8h1.4M12.8 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, Cs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 4.2h9.6v8.2H3.2V4.2Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.2 2.8h5.6v1.8H5.2V2.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.5 7.2h5M5.5 9.6h3.6" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, xs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="5.4" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.4 13.2c.7-2.4 2.2-3.6 4.6-3.6s3.9 1.2 4.6 3.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, Es = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.4 12.6 4.2v3.4c0 2.7-1.8 4.8-4.6 5.8-2.8-1-4.6-3.1-4.6-5.8V4.2L8 2.4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
    <path d="M6.1 8.1 7.4 9.4 10 6.8" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Ti = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="5.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M8 5v3.2l2.2 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Ts = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.8 9.8A4.8 4.8 0 0 1 6.2 4.2 5.4 5.4 0 1 0 11.8 9.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, Vt = (i) => {
  const t = i == null ? void 0 : i.target;
  return t instanceof Element ? t : (t == null ? void 0 : t.parentElement) instanceof Element ? t.parentElement : null;
}, Ai = ({ value: i, placeholder: t, onChange: e, onSave: s, onCancel: n }) => {
  const r = document.createElement("li");
  r.className = "sg-string-list__item sg-string-list__item--draft";
  const o = document.createElement("input");
  o.type = "text", o.className = "sg-field sg-string-list__draft-input", o.value = i, o.placeholder = t, o.setAttribute("aria-label", t || "Value"), o.addEventListener("input", () => e(o.value)), o.addEventListener("keydown", (d) => {
    d.key === "Enter" && (d.preventDefault(), s()), d.key === "Escape" && (d.preventDefault(), n());
  });
  const a = document.createElement("div");
  a.className = "sg-string-list__actions";
  const l = Q("Save", "primary", { icon: Ui, ariaLabel: "Save" });
  l.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), s();
  });
  const c = Q("Cancel", "ghost", { icon: fs, ariaLabel: "Cancel" });
  return c.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), n();
  }), a.append(l, c), r.append(o, a), r;
};
class As {
  constructor({ labels: t, zIndex: e, handlers: s, visible: n = !0 }) {
    var r, o;
    this.labels = t, this.handlers = s, this.state = { mode: "idle", steps: [], collapsed: !1, pageUrl: "", hasPageGuide: !1, pageGuides: [], focusGuideTitle: !1 }, this.position = null, this.dragging = null, this.settingsSection = "guides", this.root = document.createElement("aside"), this.root.className = "sg-panel", this.root.style.zIndex = String(e + 2), this.root.setAttribute("aria-label", "System Guider"), this.root.addEventListener("click", (a) => this.handleClick(a)), this.root.addEventListener("pointerdown", (a) => this.startDrag(a)), this.root.addEventListener("input", (a) => this.handleInput(a)), this.root.addEventListener("change", (a) => this.handleInput(a)), this.root.addEventListener("mouseover", (a) => this.handlePreview(a)), this.root.addEventListener("mouseout", (a) => this.handlePreviewEnd(a)), this.root.addEventListener("dragstart", (a) => this.handleDragStart(a)), this.root.addEventListener("dragover", (a) => a.preventDefault()), this.root.addEventListener("drop", (a) => this.handleDrop(a)), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.recordingIndicator = this.createRecordingIndicator(e), document.body.append(this.root), document.body.append(this.recordingIndicator), this.root.addEventListener("animationend", (a) => {
      a.target === this.root && a.animationName === "sg-slide-in" && this.root.classList.add("sg-panel--settled");
    }), (o = (r = window.matchMedia) == null ? void 0 : r.call(window, "(prefers-reduced-motion: reduce)")) != null && o.matches && this.root.classList.add("sg-panel--settled"), this.setVisible(n), this.render();
  }
  createRecordingIndicator(t) {
    const e = document.createElement("div");
    e.className = "sg-recording-indicator", e.style.zIndex = String(t + 4), e.hidden = !0, e.setAttribute("role", "status"), e.setAttribute("aria-live", "polite");
    const s = document.createElement("span");
    s.className = "sg-recording-indicator__live", s.setAttribute("aria-hidden", "true"), s.innerHTML = `
      <svg class="sg-recording-indicator__pulse" viewBox="0 0 40 40" focusable="false">
        <circle class="sg-recording-indicator__ring sg-recording-indicator__ring--outer" cx="20" cy="20" r="15" fill="none"/>
        <circle class="sg-recording-indicator__ring sg-recording-indicator__ring--inner" cx="20" cy="20" r="10.5" fill="none"/>
        <circle class="sg-recording-indicator__dot" cx="20" cy="20" r="5.5"/>
      </svg>
    `;
    const n = document.createElement("span");
    n.className = "sg-recording-indicator__wave", n.setAttribute("aria-hidden", "true"), n.innerHTML = `
      <svg viewBox="0 0 22 18" focusable="false">
        <rect class="sg-recording-indicator__bar" x="1" y="6" width="2.5" height="6" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="5.5" y="3" width="2.5" height="12" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="10" y="1" width="2.5" height="16" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="14.5" y="4" width="2.5" height="10" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="19" y="6.5" width="2.5" height="5" rx="1.25"/>
      </svg>
    `;
    const r = O("span", "sg-recording-indicator__status", "Recording..."), o = document.createElement("span");
    o.className = "sg-recording-indicator__divider", o.setAttribute("aria-hidden", "true");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-recording-indicator__stop", a.title = "Stop recording", a.setAttribute("aria-label", "Stop recording");
    const l = document.createElement("span");
    l.className = "sg-recording-indicator__stop-icon", l.setAttribute("aria-hidden", "true"), l.innerHTML = `
      <svg viewBox="0 0 12 12" focusable="false">
        <rect x="1.5" y="1.5" width="9" height="9" rx="2"/>
      </svg>
    `;
    const c = O("span", "sg-recording-indicator__stop-label", "Stop");
    return a.append(l, c), a.addEventListener("click", (d) => {
      var u, h;
      d.preventDefault(), d.stopPropagation(), (h = (u = this.handlers)["stop-recording"]) == null || h.call(u);
    }), e.append(s, n, r, o, a), e;
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
    const s = this.root.getBoundingClientRect(), n = s.width || 360, r = s.height || 200, o = Math.max(8, window.innerWidth - n - 8), a = Math.max(8, window.innerHeight - r - 8);
    return {
      left: Math.min(Math.max(8, t), o),
      top: Math.min(Math.max(8, e), a)
    };
  }
  /** Move the panel if it covers the highlighted step target. */
  avoidHighlight(t) {
    var y;
    if (!t || this.root.classList.contains("sg-panel--hidden") || this.visible === !1 || ((y = this.state) == null ? void 0 : y.mode) === "playback" || this.dragging) return;
    const e = this.root.getBoundingClientRect();
    if (e.width < 2 || e.height < 2) return;
    const s = 14;
    if (!!(t.right + s < e.left || t.left - s > e.right || t.bottom + s < e.top || t.top - s > e.bottom)) return;
    const r = 16, o = e.width, a = e.height, l = window.innerWidth, c = window.innerHeight, d = l - t.right - r, u = t.left - r, h = c - t.bottom - r, p = t.top - r;
    let g = e.left, f = e.top;
    d >= o ? (g = t.right + r, f = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8))) : u >= o ? (g = t.left - o - r, f = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8))) : h >= Math.min(a, 180) ? (g = this.clampPosition(e.left, 0).left, f = t.bottom + r) : p >= Math.min(a, 180) ? (g = this.clampPosition(e.left, 0).left, f = t.top - a - r) : d >= u ? (g = Math.max(8, Math.min(l - o - 8, t.right + r)), f = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8))) : (g = Math.max(8, Math.min(l - o - 8, t.left - o - r)), f = Math.min(Math.max(8, t.top), Math.max(8, c - a - 8)));
    const m = this.clampPosition(g, f);
    Math.abs(m.left - e.left) < 2 && Math.abs(m.top - e.top) < 2 || (this.position = m, this.applyPosition());
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
    const s = this.root.querySelector(".sg-panel__body"), n = s ? s.scrollTop : this._bodyScrollTop || 0;
    s && (this._bodyScrollTop = s.scrollTop), this.root.classList.toggle("sg-panel--hidden", !this.visible), this.root.setAttribute("aria-hidden", String(!this.visible)), this.applyTheme(), this.root.replaceChildren();
    const r = document.createElement("header");
    r.className = "sg-panel__header", e && r.classList.add("sg-panel__header--collapsed");
    const o = document.createElement("div");
    o.className = "sg-panel__brand";
    const a = document.createElement("span");
    a.className = "sg-panel__brand-icon", a.setAttribute("aria-hidden", "true"), a.innerHTML = `
      <svg class="sg-brand-mark" viewBox="0 0 24 24" focusable="false">
        <path
          class="sg-brand-mark__route"
          d="M5.25 17.75c0-3.1 1.7-4.65 4.4-4.65h2.15c2.7 0 4.35-1.55 4.35-4.65"
          pathLength="100"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <circle class="sg-brand-mark__node sg-brand-mark__node--start" cx="5.25" cy="17.75" r="2"/>
        <circle class="sg-brand-mark__node sg-brand-mark__node--middle" cx="11.1" cy="13.1" r="1.65"/>
        <circle class="sg-brand-mark__node sg-brand-mark__node--end" cx="16.15" cy="8.45" r="2.1"/>
        <path
          class="sg-brand-mark__spark"
          d="M18.6 3.2c.3 1.55 1.05 2.3 2.6 2.6-1.55.3-2.3 1.05-2.6 2.6-.3-1.55-1.05-2.3-2.6-2.6 1.55-.3 2.3-1.05 2.6-2.6Z"
        />
      </svg>
    `;
    const l = document.createElement("div");
    l.className = "sg-panel__brand-copy", t === "recording" ? l.append(
      O("span", "sg-eyebrow", "● LIVE RECORDING"),
      O("h2", "sg-panel__title", this.titleForMode(t))
    ) : l.append(
      O("h2", "sg-panel__title", "System Guider"),
      O("div", "sg-panel__subtitle", this.titleForMode(t))
    ), o.append(a, l);
    const c = document.createElement("div");
    if (c.className = "sg-panel__header-actions", t === "manage-routes") {
      const p = Q(e ? "Open" : "Minimize", "ghost", {
        icon: e ? ys : ms,
        ariaLabel: e ? "Open settings" : "Minimize"
      });
      if (p.dataset.action = "toggle-collapse", p.classList.add("sg-panel__chrome-btn", "sg-panel__header-minimize"), p.setAttribute("aria-expanded", String(!e)), c.append(p), !e) {
        const g = Q("Close", "ghost", {
          icon: bs,
          ariaLabel: "Close settings"
        });
        g.dataset.action = "close", g.classList.add("sg-panel__chrome-btn", "sg-panel__header-close"), c.append(g);
      }
    } else {
      const p = St(e ? "Open" : "Minimize", "toggle-collapse", "ghost");
      p.setAttribute("aria-expanded", String(!e)), c.append(p);
    }
    if (r.append(o, c), this.root.append(r), e) {
      this.applyPosition();
      return;
    }
    const d = document.createElement("div");
    d.className = "sg-panel__body", t === "idle" && this.renderIdle(d), (t === "recording" || t === "manage") && this.renderSteps(d, t), t === "manage-routes" && this.renderManageRoutes(d), this.root.append(d);
    const u = this.renderFooter(t);
    u && this.root.append(u), this.applyPosition();
    const h = t === "recording" && (Number(this.state.newStepsCount) || 0) > 0;
    queueMicrotask(() => {
      const p = this.root.querySelector(".sg-panel__body");
      p && (h ? p.scrollTop = p.scrollHeight : p.scrollTop = n, this._bodyScrollTop = p.scrollTop);
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
      "manage-routes": "Settings"
    }[t];
  }
  /**
   * List editor with Add / Edit / Delete for string settings (account ids, hidden urls).
   */
  createEditableStringList({
    label: t,
    settingKey: e,
    items: s = [],
    placeholder: n = "",
    emptyText: r = "No items yet",
    addLabel: o = "Add"
  }) {
    const a = document.createElement("div");
    a.className = "sg-string-list sg-settings__row", a.dataset.stringList = e;
    let l = [...s].map((p) => String(p)), c = null, d = "";
    const u = (p) => {
      var g, f;
      l = [...p], c = null, d = "", (f = (g = this.handlers)["update-setting"]) == null || f.call(g, e, l), h();
    }, h = () => {
      a.replaceChildren();
      const p = document.createElement("div");
      p.className = "sg-string-list__head", p.append(O("span", "sg-string-list__label", t));
      const g = Q(o, "secondary", { icon: gs, ariaLabel: o || "Add" });
      g.classList.add("sg-string-list__add"), g.disabled = c !== null, g.addEventListener("click", (m) => {
        var y;
        m.preventDefault(), m.stopPropagation(), c = "add", d = "", h(), (y = a.querySelector(".sg-string-list__draft-input")) == null || y.focus();
      }), p.append(g), a.append(p);
      const f = document.createElement("ul");
      if (f.className = "sg-string-list__items", c === "add" && f.append(Ai({
        value: d,
        placeholder: n,
        onChange: (m) => {
          d = m;
        },
        onSave: () => {
          const m = String(d || "").trim();
          if (!m) {
            c = null, d = "", h();
            return;
          }
          if (l.includes(m)) {
            c = null, d = "", h();
            return;
          }
          u([...l, m]);
        },
        onCancel: () => {
          c = null, d = "", h();
        }
      })), !l.length && c !== "add") {
        const m = document.createElement("li");
        m.className = "sg-string-list__empty", m.textContent = r, f.append(m);
      }
      l.forEach((m, y) => {
        if (c === y) {
          f.append(Ai({
            value: d,
            placeholder: n,
            onChange: (k) => {
              d = k;
            },
            onSave: () => {
              const k = String(d || "").trim();
              if (!k) {
                c = null, d = "", h();
                return;
              }
              const C = [...l];
              C[y] = k, u([...new Set(C)]);
            },
            onCancel: () => {
              c = null, d = "", h();
            }
          }));
          return;
        }
        const S = document.createElement("li");
        S.className = "sg-string-list__item";
        const w = document.createElement("code");
        w.className = "sg-string-list__value", w.textContent = m, w.title = m;
        const _ = document.createElement("div");
        _.className = "sg-string-list__actions";
        const x = Q("Edit", "ghost", { icon: xi, ariaLabel: "Edit" });
        x.disabled = c !== null, x.addEventListener("click", (k) => {
          var C, T;
          k.preventDefault(), k.stopPropagation(), c = y, d = m, h(), (C = a.querySelector(".sg-string-list__draft-input")) == null || C.focus(), (T = a.querySelector(".sg-string-list__draft-input")) == null || T.select();
        });
        const b = Q("Delete", "danger", { icon: Je, ariaLabel: "Delete" });
        b.disabled = c !== null, b.addEventListener("click", (k) => {
          k.preventDefault(), k.stopPropagation(), u(l.filter((C, T) => T !== y));
        }), _.append(x, b), S.append(w, _), f.append(S);
      }), a.append(f);
    };
    return h(), a;
  }
  renderIdle(t) {
    t.append(
      O("p", "sg-lead", "Record actions, refine the steps, then replay a polished walkthrough.")
    ), this.state.pageUrl && t.append(O("p", "sg-page-key", `Page: ${this.state.pageUrl}`)), this.renderPageGuidesList(t);
    const e = document.createElement("div");
    e.className = "sg-empty", e.append(
      O("strong", "", this.state.hasPageGuide ? "Guide ready for this page" : "Ready when you are"),
      O(
        "span",
        "",
        this.state.hasPageGuide ? "Use Play guides, or tap Record on the floating launcher to capture a new flow." : "Tap Record on the floating launcher to capture a new flow."
      )
    ), t.append(e);
  }
  renderPageGuidesList(t) {
    const e = Array.isArray(this.state.pageGuides) ? this.state.pageGuides : [];
    if (!e.length) return;
    const s = document.createElement("div");
    s.className = "sg-page-guides sg-settings-content__section", s.append(O("div", "sg-page-guides__label", "Saved guides on this page"));
    const n = document.createElement("ul");
    n.className = "sg-page-guides__list", e.forEach((r, o) => {
      const a = document.createElement("li");
      a.className = "sg-page-guides__item", r.id === this.state.currentGuideId && a.classList.add("is-current");
      const l = document.createElement("strong"), c = String(r.title || `Guide ${o + 1}`).trim(), d = c.split(" · "), u = (d[0] || `Guide ${o + 1}`).trim(), h = d.slice(1).join(" · ").trim(), p = /^\d+\s+steps?$/i.test(u);
      l.textContent = p ? h || `Guide ${o + 1}` : c;
      const g = document.createElement("span");
      g.textContent = `${r.steps} step${r.steps === 1 ? "" : "s"}`, a.append(l, g), n.append(a);
    }), s.append(n), t.append(s);
  }
  renderSteps(t, e) {
    var n, r;
    if (this.state.flashMessage && t.append(O("p", "sg-status", this.state.flashMessage)), e === "recording") {
      const o = !!this.state.recordingAppend, a = Number(this.state.newStepsCount) || 0, l = document.createElement("p");
      l.className = "sg-lead", o ? l.textContent = a > 0 ? `Keep going — ${a} new step${a === 1 ? "" : "s"} added. Interact again for more, then Stop Recording.` : "Interact with the page as many times as you need. Each action becomes a new step. Click Stop Recording when done." : l.textContent = a > 0 ? `Capturing… ${a} step${a === 1 ? "" : "s"} so far. Keep interacting, then Stop Recording.` : "Perform the flow on screen. Add as many steps as you need, then Stop Recording.", t.append(l);
    }
    if (e === "manage") {
      const o = this.state.steps.length, a = document.createElement("section");
      a.className = "sg-guide-editor";
      const l = document.createElement("div");
      l.className = "sg-guide-field sg-guide-field--rename";
      const c = document.createElement("span");
      c.className = "sg-guide-field__label-row";
      const d = document.createElement("span");
      d.className = "sg-guide-field__label-left";
      const u = document.createElement("span");
      u.className = "sg-guide-field__label-icon", u.setAttribute("aria-hidden", "true"), u.innerHTML = Cs, d.append(u, document.createTextNode("Guide name")), this.state.dirty && d.append(O("em", "sg-guide-editor__badge", "Unsaved"));
      const h = Q("Save", "primary", { icon: Ui, withLabel: !0, ariaLabel: "Save guide" });
      h.dataset.action = "save-page", h.classList.add("sg-guide-field__save"), h.disabled = this.state.steps.length === 0, c.append(d, h), l.append(c);
      const p = document.createElement("input");
      p.className = "sg-field sg-field--guide-title", p.value = this.state.guideTitle || "", p.dataset.guideField = "title", p.placeholder = "Example: Create employee schedule", p.setAttribute("aria-label", "Guide name"), p.addEventListener("keydown", (T) => {
        T.key === "Enter" && (T.preventDefault(), p.blur());
      }), p.addEventListener("blur", () => {
        var T, L;
        (L = (T = this.handlers).commitGuideTitle) == null || L.call(T);
      }), l.append(p);
      const g = document.createElement("details");
      g.className = "sg-step-settings sg-guide-settings";
      const f = document.createElement("summary");
      f.className = "sg-step-settings__summary sg-step-settings__summary--split", f.innerHTML = '<span>Guide options</span><span class="sg-step-settings__chevron" aria-hidden="true">▾</span>', g.append(f);
      const m = document.createElement("div");
      m.className = "sg-step-settings__body";
      const y = document.createElement("label");
      y.className = "sg-check";
      const S = document.createElement("input");
      S.type = "checkbox", S.dataset.guideSetting = "reloadOnNavigate", S.checked = !!((n = this.state.guideSettings) != null && n.reloadOnNavigate), y.append(S, document.createTextNode(" Reload on other route"));
      const w = document.createElement("label");
      w.className = "sg-check";
      const _ = document.createElement("input");
      _.type = "checkbox", _.dataset.guideSetting = "resetBeforePlay", _.checked = ((r = this.state.guideSettings) == null ? void 0 : r.resetBeforePlay) === "reload", w.append(_, document.createTextNode(" Reload before play")), m.append(y, w), g.append(m), l.append(g), a.append(l);
      const x = document.createElement("div");
      x.className = "sg-guide-editor__steps";
      const b = document.createElement("div");
      b.className = "sg-guide-editor__steps-head";
      const k = document.createElement("div");
      k.className = "sg-guide-editor__steps-meta", k.append(
        O("span", "sg-guide-editor__steps-label", "Steps"),
        O("span", "sg-guide-editor__steps-count", String(o))
      );
      const C = St("Add steps", "add-steps", "secondary");
      C.classList.add("sg-button--compact", "sg-guide-editor__add-steps"), b.append(k, C), x.append(b), a.append(x), t.append(a), this._stepsBlock = x, this.state.focusGuideTitle && queueMicrotask(() => {
        p.focus(), p.select();
      });
    } else
      this._stepsBlock = null;
    if (!this.state.steps.length) {
      const o = O("div", "sg-empty", e === "manage" ? "No steps in this guide yet." : "No steps yet — start interacting with the page.");
      e === "manage" && this._stepsBlock ? this._stepsBlock.append(o) : t.append(o);
      return;
    }
    const s = document.createElement("ol");
    s.className = "sg-step-list", this.state.steps.forEach((o, a) => {
      var y, S, w, _, x;
      const l = document.createElement("li");
      l.className = "sg-step", l.dataset.stepId = o.id, l.draggable = !1, o.invalid && l.classList.add("sg-step--invalid");
      const c = Number(this.state.recordingStepsBaseline) || 0, d = e === "recording" && a >= c;
      d && l.classList.add("sg-step--new");
      const u = document.createElement("div");
      u.className = "sg-step__top";
      const h = document.createElement("div");
      if (h.className = "sg-step__top-left", e === "manage") {
        const b = document.createElement("span");
        b.className = "sg-step__drag", b.draggable = !0, b.title = "Drag to reorder", b.setAttribute("aria-label", `Drag step ${a + 1}`), b.textContent = "⋮⋮", b.addEventListener("dragstart", (k) => {
          k.dataTransfer.setData("text/plain", o.id), k.dataTransfer.effectAllowed = "move", l.classList.add("sg-step--dragging");
        }), b.addEventListener("dragend", () => {
          l.classList.remove("sg-step--dragging");
        }), h.append(b);
      }
      if (h.append(
        O("span", "sg-step__number", String(a + 1)),
        O("span", "sg-step__action", o.action)
      ), d && h.append(O("span", "sg-step__new", "New")), o.invalid && h.append(O("span", "sg-step__warning", "Target missing")), u.append(h), e === "manage") {
        const b = document.createElement("div");
        b.className = "sg-step__top-right";
        const k = Q("Play", "ghost", { icon: Ye, withLabel: !0, ariaLabel: "Play from here" });
        k.classList.add("sg-step__play"), k.addEventListener("click", (T) => {
          var L, B;
          T.preventDefault(), T.stopPropagation(), (B = (L = this.handlers)["play-here"]) == null || B.call(L, o.id);
        });
        const C = Q("Remove", "danger", { icon: Je, ariaLabel: "Remove step" });
        C.classList.add("sg-step__remove-icon"), C.addEventListener("click", (T) => {
          var L, B;
          T.preventDefault(), T.stopPropagation(), (B = (L = this.handlers).remove) == null || B.call(L, o.id);
        }), b.append(k, C), u.append(b);
      }
      const p = document.createElement("input");
      p.className = "sg-field sg-step__title", p.value = o.title, p.dataset.field = "title", p.disabled = e === "recording", p.placeholder = "Step title", p.setAttribute("aria-label", `Step ${a + 1} title`);
      const g = document.createElement("div");
      g.className = "sg-step__selector-wrap";
      const f = Array.isArray(o.selectorAlternatives) ? o.selectorAlternatives.filter((b) => b == null ? void 0 : b.selector) : [];
      if (f.length > 1) {
        const b = document.createElement("select");
        b.className = "sg-field sg-step__selector-select", b.dataset.field = "selector", b.setAttribute("aria-label", `Step ${a + 1} target selector`);
        const k = String(o.selector || ""), C = /* @__PURE__ */ new Set(), T = (L, { selected: B = !1, suggested: j = !1 } = {}) => {
          const M = String(L.selector || "");
          if (!M || C.has(M)) return;
          C.add(M);
          const A = document.createElement("option");
          A.value = M;
          const P = String(L.title || "").trim(), $ = String(L.detail || "").trim(), q = M.length > 52 ? `${M.slice(0, 50)}…` : M;
          let D = P || $ || q;
          P && $ && $ !== P ? D = `${P} — ${$}` : P && q !== P && (D = `${P} (${q})`), (j || L.suggested) && (D = `★ ${D}`), A.textContent = D, A.title = M, (B || M === k) && (A.selected = !0), b.append(A);
        };
        f.forEach((L) => T(L)), k && !C.has(k) && T({ selector: k, title: "Current" }, { selected: !0 }), g.append(b);
      } else
        g.append(O("code", "sg-step__selector", o.selector || "No target"));
      if (e === "manage" && o.selector) {
        const b = Q("Copy", "ghost", { icon: Qe, ariaLabel: "Copy selector" });
        b.classList.add("sg-step__selector-copy"), b.addEventListener("click", async (k) => {
          var C, T;
          k.preventDefault(), k.stopPropagation();
          try {
            await ((T = (C = navigator.clipboard) == null ? void 0 : C.writeText) == null ? void 0 : T.call(C, String(o.selector))), b.title = "Copied", setTimeout(() => {
              b.title = "Copy selector";
            }, 1e3);
          } catch {
          }
        }), g.append(b);
      }
      const m = document.createElement("div");
      if (m.className = "sg-step__body", m.append(p, g), l.append(u, m), e === "manage" || e === "recording") {
        const b = document.createElement("div");
        b.className = "sg-step__controls";
        const k = (L, B, j = "") => {
          const M = St(L, B, j);
          return M.classList.add("sg-button--compact"), M.addEventListener("click", (A) => {
            var P, $;
            A.preventDefault(), A.stopPropagation(), ($ = (P = this.handlers)[B]) == null || $.call(P, o.id);
          }), M;
        }, C = document.createElement("div");
        C.className = "sg-step__controls-left";
        const T = document.createElement("div");
        if (T.className = "sg-step__controls-right", e === "manage") {
          if (o.action === "input") {
            const M = document.createElement("label");
            M.className = "sg-check sg-check--compact";
            const A = document.createElement("input");
            A.type = "checkbox", A.dataset.field = "waitRequired", A.checked = !!((y = o.waitFor) != null && y.required), M.append(A, document.createTextNode(" Require value")), C.append(M);
          }
          const L = this.state.steps.length, B = a + 1, j = (M) => {
            const A = document.createElement("div");
            A.className = "sg-step__move-picker";
            const P = M === "up", $ = St(P ? "↑" : "↓", "", "ghost");
            $.classList.add("sg-button--compact", "sg-step__move-btn"), $.setAttribute("aria-haspopup", "listbox"), $.setAttribute("aria-expanded", "false"), $.title = P ? "Move to an earlier step" : "Move to a later step", $.setAttribute("aria-label", P ? `Move step ${B} to an earlier position` : `Move step ${B} to a later position`);
            const q = P ? Array.from({ length: a }, (F, U) => B - 1 - U) : Array.from({ length: L - B }, (F, U) => B + 1 + U);
            q.length || ($.disabled = !0);
            const D = document.createElement("div");
            return D.className = "sg-step__move-menu", D.hidden = !0, D.setAttribute("role", "listbox"), D.setAttribute("aria-label", P ? "Earlier step numbers" : "Later step numbers"), q.forEach((F) => {
              const U = document.createElement("button");
              U.type = "button", U.className = "sg-step__move-option", U.textContent = String(F), U.setAttribute("role", "option"), U.title = `Move to step ${F}`, U.addEventListener("click", (et) => {
                var rt, ut;
                et.preventDefault(), et.stopPropagation(), this.closeMoveMenus(), (ut = (rt = this.handlers)["move-to"]) == null || ut.call(rt, o.id, F);
              }), D.append(U);
            }), $.addEventListener("click", (F) => {
              if (F.preventDefault(), F.stopPropagation(), $.disabled) return;
              const U = D.hidden;
              this.closeMoveMenus(), U && (D.hidden = !1, $.setAttribute("aria-expanded", "true"));
            }), A.append($, D), A;
          };
          C.append(j("up"), j("down"));
        } else
          T.append(
            k("Play", "play-here", "ghost"),
            k("Remove", "remove", "danger")
          );
        if (b.append(C), T.childNodes.length && b.append(T), e === "manage") {
          const L = document.createElement("details");
          L.className = "sg-step-settings";
          const B = document.createElement("summary");
          B.className = "sg-step-settings__summary sg-step-settings__summary--split", B.innerHTML = `
            <span class="sg-step-settings__summary-left">
              <span class="sg-step-settings__gear" aria-hidden="true">${Ei}</span>
              Settings
            </span>
            <span class="sg-step-settings__chevron" aria-hidden="true">▾</span>
          `, L.append(B);
          const j = document.createElement("div");
          j.className = "sg-step-settings__body";
          const M = document.createElement("label");
          M.className = "sg-step-settings__field", M.append(document.createTextNode("Step description"));
          const A = document.createElement("textarea");
          A.className = "sg-field sg-step__description", A.rows = 2, A.value = o.description || "", A.dataset.field = "description", A.placeholder = "Shown next to the highlight while playing", A.setAttribute("aria-label", `Step ${a + 1} description`), M.append(A);
          const P = document.createElement("label");
          P.className = "sg-check";
          const $ = document.createElement("input");
          $.type = "checkbox", $.dataset.stepSetting = "autoScroll", $.checked = ((S = o.settings) == null ? void 0 : S.autoScroll) !== !1, P.append($, document.createTextNode(" Auto-scroll"));
          const q = document.createElement("label");
          q.className = "sg-step-settings__field", q.append(document.createTextNode("Show delay (ms)"));
          const D = document.createElement("input");
          D.type = "number", D.min = "0", D.step = "50", D.className = "sg-field", D.value = String(((w = o.settings) == null ? void 0 : w.delay) ?? 0), D.dataset.stepSetting = "delay", q.append(D);
          const F = document.createElement("label");
          F.className = "sg-step-settings__field", F.append(document.createTextNode("Hide delay (ms)"));
          const U = document.createElement("input");
          U.type = "number", U.min = "0", U.step = "50", U.className = "sg-field", U.value = String(((_ = o.settings) == null ? void 0 : _.hideDelay) ?? 0), U.dataset.stepSetting = "hideDelay", F.append(U);
          const et = document.createElement("label");
          et.className = "sg-check";
          const rt = document.createElement("input");
          rt.type = "checkbox", rt.dataset.stepSetting = "autoSkipMissing", rt.checked = ((x = o.settings) == null ? void 0 : x.autoSkipMissing) !== !1, et.append(rt, document.createTextNode(" Auto-skip if still missing after wait")), j.append(M, P, q, F, et), L.append(j), l.append(b, L);
        } else
          l.append(b);
      }
      s.append(l);
    }), e === "manage" && this._stepsBlock ? this._stepsBlock.append(s) : t.append(s);
  }
  renderManageRoutes(t) {
    this.state.flashMessage && t.append(O("p", "sg-status", this.state.flashMessage));
    const e = this.state.settings || {}, s = Array.isArray(this.state.allGuides) ? this.state.allGuides : [], n = document.createElement("div");
    n.className = "sg-page-guides";
    const r = document.createElement("div");
    r.className = "sg-page-guides__label-row";
    const o = document.createElement("span");
    if (o.className = "sg-page-guides__label-icon", o.setAttribute("aria-hidden", "true"), o.innerHTML = _s, r.append(o, O("div", "sg-page-guides__label", `All guides (${s.length})`)), n.append(r), !s.length)
      n.append(O("p", "sg-lead", "No guides saved yet."));
    else {
      const I = /* @__PURE__ */ new Map();
      s.forEach((G) => {
        const N = G.url || "/";
        I.has(N) || I.set(N, []), I.get(N).push(G);
      }), [...I.entries()].sort((G, N) => G[0].localeCompare(N[0])).forEach(([G, N]) => {
        const V = document.createElement("div");
        V.className = "sg-manage-section";
        const nt = document.createElement("div");
        nt.className = "sg-manage-section__path";
        const kt = document.createElement("span");
        kt.className = "sg-manage-section__path-icon", kt.setAttribute("aria-hidden", "true"), kt.innerHTML = ks, nt.append(kt, document.createTextNode(G)), V.append(nt);
        const ne = document.createElement("ul");
        ne.className = "sg-page-guides__list", N.forEach((Tt) => {
          const _t = document.createElement("li");
          _t.className = "sg-page-guides__item sg-page-guides__item--actions", _t.dataset.guideId = Tt.id;
          const Ve = document.createElement("div");
          Ve.className = "sg-page-guides__copy";
          const Ke = document.createElement("div");
          Ke.className = "sg-page-guides__head";
          const ze = document.createElement("div");
          ze.className = "sg-page-guides__title-row";
          const ki = String(Tt.title || "Untitled").split(" · "), _i = (ki[0] || "Untitled").trim(), Ci = ki.slice(1).join(" · ").trim(), ps = `${Tt.steps} step${Tt.steps === 1 ? "" : "s"}`, Ze = /^(\d+)\s+steps?$/i.test(_i), ae = document.createElement("div");
          if (ae.className = "sg-page-guides__title-line", !Ze) {
            const gt = document.createElement("strong");
            gt.textContent = _i, ae.append(gt);
          }
          if (Ci) {
            const gt = document.createElement("span");
            gt.className = `sg-page-guides__meta${Ze ? " sg-page-guides__meta--solo" : ""}`, gt.textContent = Ci, ae.append(gt);
          } else if (Ze) {
            const gt = document.createElement("span");
            gt.className = "sg-page-guides__meta sg-page-guides__meta--solo", gt.textContent = "Untitled guide", ae.append(gt);
          }
          const Xe = document.createElement("span");
          Xe.className = "sg-page-guides__badge", Xe.textContent = ps, ze.append(ae, Xe), Ke.append(ze), Ve.append(Ke);
          const Ee = document.createElement("div");
          Ee.className = "sg-page-guides__actions";
          const le = Q("Play", "secondary", { icon: Ye, ariaLabel: "Play guide" });
          if (le.classList.add("sg-page-guides__action", "sg-page-guides__action--play"), le.dataset.action = "play-guide", le.dataset.guideId = Tt.id, this.state.readOnly)
            Ee.append(le);
          else {
            const gt = Q("Edit", "secondary", { icon: xi, ariaLabel: "Edit steps" });
            gt.classList.add("sg-page-guides__action", "sg-page-guides__action--edit"), gt.dataset.action = "edit-guide", gt.dataset.guideId = Tt.id;
            const Te = Q("Delete", "danger", { icon: Je, ariaLabel: "Delete guide" });
            Te.classList.add("sg-page-guides__action", "sg-page-guides__action--delete"), Te.dataset.action = "delete-guide", Te.dataset.guideId = Tt.id, Ee.append(gt, le, Te);
          }
          _t.append(Ve, Ee), ne.append(_t);
        }), V.append(ne), n.append(V);
      });
    }
    const a = document.createElement("div");
    a.className = "sg-guides-tools";
    const l = Q("Load", "secondary", { icon: Ss, withLabel: !0 });
    l.dataset.action = "load";
    const c = Q("Paste", "secondary", { icon: vs, withLabel: !0 });
    c.dataset.action = "paste";
    const d = Q("Export", "primary", { icon: ws, withLabel: !0 });
    d.dataset.action = "download-all", a.append(l, c, d), n.append(a), t.append(n);
    const u = document.createElement("div");
    u.className = "sg-settings sg-settings--nested sg-settings-card sg-account-panel";
    const h = document.createElement("div");
    h.className = "sg-account-panel__head";
    const p = document.createElement("span");
    p.className = "sg-account-panel__head-icon", p.setAttribute("aria-hidden", "true"), p.innerHTML = xs, h.append(p, O("div", "sg-page-guides__label", "Current account")), u.append(h);
    const g = this.state.accountId, f = !(g == null || g === ""), m = document.createElement("div");
    m.className = `sg-account-card${f ? "" : " sg-account-card--empty"}`;
    const y = document.createElement("div");
    y.className = "sg-account-card__left";
    const S = document.createElement("span");
    S.className = "sg-account-card__badge", S.textContent = "ID";
    const w = document.createElement("div");
    w.className = "sg-account-card__meta", w.append(O("span", "sg-account-card__caption", "Your account ID"));
    const _ = document.createElement("strong");
    if (_.className = "sg-account-card__value", _.textContent = f ? String(g) : "Not signed in", _.title = f ? "Logged-in account ID from the host app" : "Host app has not passed an account ID yet", w.append(_), y.append(S, w), m.append(y), f) {
      const I = Q("Copy", "secondary", {
        icon: Qe,
        withLabel: !0,
        ariaLabel: "Copy account ID"
      });
      I.classList.add("sg-account-card__copy"), I.addEventListener("click", async (G) => {
        var nt, kt;
        G.preventDefault(), G.stopPropagation();
        const N = String(g), V = I.querySelector("span");
        try {
          await ((kt = (nt = navigator.clipboard) == null ? void 0 : nt.writeText) == null ? void 0 : kt.call(nt, N)), V ? V.textContent = "Copied" : I.textContent = "Copied", setTimeout(() => {
            V ? V.textContent = "Copy" : I.innerHTML = `${Qe}<span>Copy</span>`;
          }, 1200);
        } catch {
          V ? V.textContent = N : I.textContent = N;
        }
      }), m.append(I);
    }
    u.append(m);
    const x = document.createElement("p");
    x.className = "sg-account-panel__hint";
    const b = document.createElement("span");
    b.className = "sg-account-panel__hint-icon", b.setAttribute("aria-hidden", "true"), b.innerHTML = Es;
    const k = document.createElement("span");
    f ? k.innerHTML = "Add this ID under <strong>Access</strong> to allow editing." : k.textContent = "Sign in or pass an account ID from the host app.", x.append(b, k), u.append(x);
    const C = document.createElement("div");
    C.className = "sg-settings sg-settings--nested sg-settings-card sg-defaults-panel";
    const T = document.createElement("div");
    T.className = "sg-defaults-panel__head";
    const L = document.createElement("span");
    L.className = "sg-defaults-panel__head-icon", L.setAttribute("aria-hidden", "true"), L.innerHTML = Ei, T.append(L, O("div", "sg-page-guides__label", "Default settings")), C.append(T);
    const B = document.createElement("div");
    B.className = "sg-defaults-panel__checks";
    const j = document.createElement("label");
    j.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const M = document.createElement("input");
    M.type = "checkbox", M.dataset.setting = "reloadOnNavigate", M.checked = !!e.reloadOnNavigate, j.append(M, document.createTextNode(" Reload when opening another route")), B.append(j);
    const A = document.createElement("label");
    A.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const P = document.createElement("input");
    P.type = "checkbox", P.dataset.setting = "resetBeforePlay", P.checked = e.resetBeforePlay === "reload", A.append(P, document.createTextNode(" Reload page before playing")), B.append(A), C.append(B);
    const $ = document.createElement("label");
    $.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", $.append(document.createTextNode("Reload resume delay (ms)"));
    const q = document.createElement("div");
    q.className = "sg-field-shell";
    const D = document.createElement("span");
    D.className = "sg-field-shell__icon", D.setAttribute("aria-hidden", "true"), D.innerHTML = Ti;
    const F = document.createElement("input");
    F.type = "number", F.min = "0", F.max = "10000", F.step = "50", F.className = "sg-field sg-field--shell", F.dataset.setting = "resetBeforePlayDelay", F.value = String(e.resetBeforePlayDelay ?? 450), q.append(D, F), $.append(q), C.append($);
    const U = document.createElement("label");
    U.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const et = document.createElement("input");
    et.type = "checkbox", et.dataset.setting = "pageSettleAfterClick", et.checked = e.pageSettleAfterClick !== !1, U.append(et, document.createTextNode(" Wait for page loaders after click")), C.append(U);
    const rt = this.createEditableStringList({
      label: "Loading selectors (skeleton / busy)",
      settingKey: "loadingSelectors",
      items: Array.isArray(e.loadingSelectors) ? e.loadingSelectors : [".skeleton", ".shimmer", '[aria-busy="true"]', ".p-skeleton"],
      placeholder: "e.g. .p-skeleton",
      emptyText: "Using built-in defaults",
      addLabel: "Add"
    });
    rt.classList.add("sg-defaults-panel__field"), C.append(rt);
    const ut = document.createElement("label");
    ut.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", ut.append(document.createTextNode("Post-ready delay (ms)"));
    const H = document.createElement("div");
    H.className = "sg-field-shell";
    const z = document.createElement("span");
    z.className = "sg-field-shell__icon", z.setAttribute("aria-hidden", "true"), z.innerHTML = Ti;
    const R = document.createElement("input");
    R.type = "number", R.min = "0", R.max = "10000", R.step = "50", R.className = "sg-field sg-field--shell", R.dataset.setting = "postReadyDelay", R.value = String(e.postReadyDelay ?? 1500), H.append(z, R), ut.append(H), C.append(ut);
    const K = document.createElement("label");
    K.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", K.append(document.createTextNode("Theme mode"));
    const Z = document.createElement("div");
    Z.className = "sg-field-shell sg-field-shell--select";
    const lt = document.createElement("span");
    lt.className = "sg-field-shell__icon", lt.setAttribute("aria-hidden", "true"), lt.innerHTML = Ts;
    const Bt = document.createElement("select");
    Bt.className = "sg-field sg-field--shell", Bt.dataset.setting = "theme", [
      ["dark", "Dark"],
      ["light", "Light"]
    ].forEach(([I, G]) => {
      const N = document.createElement("option");
      N.value = I, N.textContent = G, (e.theme || "dark") === I && (N.selected = !0), Bt.append(N);
    });
    const Lt = document.createElement("span");
    Lt.className = "sg-field-shell__chevron", Lt.setAttribute("aria-hidden", "true"), Lt.textContent = "▾", Z.append(lt, Bt, Lt), K.append(Z), C.append(K);
    const wt = document.createElement("div");
    wt.className = "sg-settings sg-settings--nested sg-settings-card", wt.append(O("div", "sg-page-guides__label", "Access & toolbar"));
    const ve = this.createEditableStringList({
      label: "Editor account IDs (not listed = Play only)",
      settingKey: "editorAccountIds",
      items: Array.isArray(e.editorAccountIds) ? e.editorAccountIds : [],
      placeholder: "e.g. 12",
      emptyText: "No editor accounts — Play only for everyone",
      addLabel: "Add"
    });
    wt.append(ve);
    const Ht = document.createElement("label");
    Ht.className = "sg-step-settings__field sg-settings__row", Ht.append(document.createTextNode("Bypass PIN (hover orb + type to open panel)"));
    const Xt = document.createElement("div");
    Xt.className = "sg-password-field";
    const mt = document.createElement("input");
    mt.type = "password", mt.className = "sg-field", mt.inputMode = "numeric", mt.autocomplete = "new-password", mt.placeholder = "••••••", mt.maxLength = 12, mt.dataset.setting = "bypassPin", mt.value = String(e.bypassPin ?? "123456");
    const Rt = Q("Show", "ghost", {
      icon: `
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M1.8 8s2.6-4.2 6.2-4.2S14.2 8 14.2 8s-2.6 4.2-6.2 4.2S1.8 8 1.8 8Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="8" cy="8" r="1.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      `,
      ariaLabel: "Show PIN"
    });
    Rt.classList.add("sg-password-field__toggle"), Rt.addEventListener("click", (I) => {
      I.preventDefault(), I.stopPropagation();
      const G = mt.type === "password";
      mt.type = G ? "text" : "password", Rt.title = G ? "Hide PIN" : "Show PIN", Rt.setAttribute("aria-label", G ? "Hide PIN" : "Show PIN");
    }), Xt.append(mt, Rt), Ht.append(Xt), wt.append(Ht);
    const Jt = document.createElement("label");
    Jt.className = "sg-check sg-settings__row";
    const Ut = document.createElement("input");
    Ut.type = "checkbox", Ut.dataset.setting = "showOrb", Ut.checked = e.showOrb !== !1, Jt.append(Ut, document.createTextNode(" Show floating orb (off = hide System Guider)")), wt.append(Jt);
    const Yt = document.createElement("label");
    Yt.className = "sg-check sg-settings__row";
    const Wt = document.createElement("input");
    Wt.type = "checkbox", Wt.dataset.setting = "showAccountId", Wt.checked = !!e.showAccountId, Yt.append(Wt, document.createTextNode(" Show account ID on launcher")), wt.append(Yt);
    const we = this.createEditableStringList({
      label: "Hide toolbar on URLs",
      settingKey: "hiddenUrls",
      items: Array.isArray(e.hiddenUrls) ? e.hiddenUrls : [],
      placeholder: "/login",
      emptyText: "No hidden URLs — toolbar shows everywhere",
      addLabel: "Add"
    });
    wt.append(we), wt.append(O(
      "p",
      "sg-lead",
      "Only listed IDs can record or manage. The bypass PIN provides recovery access."
    ));
    const ht = e.ui || {}, v = document.createElement("div");
    v.className = "sg-settings sg-settings--nested sg-settings-card", v.append(O("div", "sg-page-guides__label", "Playback appearance"));
    const E = document.createElement("label");
    E.className = "sg-step-settings__field sg-settings__row", E.append(document.createTextNode("Font family"));
    const W = document.createElement("select");
    W.className = "sg-field", W.dataset.setting = "ui.fontFamily", [
      ["system", "System"],
      ["inter", "Inter"],
      ["arial", "Arial"],
      ["roboto", "Roboto"],
      ["serif", "Serif"]
    ].forEach(([I, G]) => {
      const N = document.createElement("option");
      N.value = I, N.textContent = G, (ht.fontFamily || "system") === I && (N.selected = !0), W.append(N);
    }), E.append(W), v.append(E);
    const ot = (I, G, N) => {
      const V = document.createElement("label");
      V.className = "sg-check sg-settings__row";
      const nt = document.createElement("input");
      nt.type = "checkbox", nt.dataset.setting = I, nt.checked = !!N, V.append(nt, document.createTextNode(` ${G}`)), v.append(V);
    };
    ot("ui.animations", "Enable animations", ht.animations !== !1), ot("ui.spotlightFade", "Spotlight fade in/out", ht.spotlightFade !== !1), ot("ui.animatedCursor", "Animated cursor between steps", ht.animatedCursor);
    const X = document.createElement("label");
    X.className = "sg-step-settings__field sg-settings__row", X.append(document.createTextNode("Highlight motion"));
    const st = document.createElement("select");
    st.className = "sg-field", st.dataset.setting = "ui.highlightMotion", [
      ["none", "None"],
      ["pulse", "Pulse"],
      ["wobble", "Wobble"],
      ["fade", "Fade"]
    ].forEach(([I, G]) => {
      const N = document.createElement("option");
      N.value = I, N.textContent = G, (ht.highlightMotion || "pulse") === I && (N.selected = !0), st.append(N);
    }), X.append(st), v.append(X);
    const ct = document.createElement("label");
    ct.className = "sg-step-settings__field sg-settings__row", ct.append(document.createTextNode("Transition speed (ms)"));
    const pt = document.createElement("input");
    pt.type = "number", pt.min = "0", pt.max = "1000", pt.step = "20", pt.className = "sg-field", pt.dataset.setting = "ui.transitionMs", pt.value = String(ht.transitionMs ?? 220), ct.append(pt), v.append(ct);
    const at = document.createElement("div");
    at.className = "sg-appearance-dim sg-settings__row";
    const yt = document.createElement("div");
    yt.className = "sg-appearance-dim__head", yt.append(O("span", "sg-appearance-dim__label", "Overlay dim"));
    const Et = document.createElement("span");
    Et.className = "sg-appearance-dim__value";
    const dt = document.createElement("input");
    dt.type = "range", dt.min = "0", dt.max = "90", dt.step = "5", dt.className = "sg-field sg-field--range", dt.dataset.setting = "ui.overlayOpacity", dt.value = String(Math.round((Number(ht.overlayOpacity) || 0.58) * 100)), Et.textContent = `${dt.value}%`, dt.addEventListener("input", () => {
      Et.textContent = `${dt.value}%`, at.style.setProperty("--sg-dim-pct", `${dt.value}%`);
    }), at.style.setProperty("--sg-dim-pct", `${dt.value}%`), yt.append(Et), at.append(yt, dt), v.append(at);
    const Qt = document.createElement("div");
    Qt.className = "sg-settings__colors";
    const Ot = (I, G, N) => {
      const V = document.createElement("label");
      V.className = "sg-settings__color-row";
      const nt = document.createElement("span");
      nt.className = "sg-settings__color-meta", nt.append(O("span", "sg-settings__color-label", G));
      const kt = document.createElement("span");
      kt.className = "sg-settings__color-hex";
      const ne = String(N || "#000000").toLowerCase();
      kt.textContent = ne, nt.append(kt);
      const Tt = document.createElement("span");
      Tt.className = "sg-settings__color-swatch";
      const _t = document.createElement("input");
      _t.type = "color", _t.dataset.setting = I, _t.value = ne, _t.setAttribute("aria-label", G), _t.addEventListener("input", () => {
        kt.textContent = String(_t.value || "").toLowerCase();
      }), Tt.append(_t), V.append(nt, Tt), Qt.append(V);
    };
    Ot("ui.tipBg", "Tip background", ht.tipBg || "#0f1b33"), Ot("ui.tipText", "Tip text", ht.tipText || "#f8fafc"), Ot("ui.skipBg", "Skip background", ht.skipBg || "#2563eb"), Ot("ui.skipText", "Skip text", ht.skipText || "#ffffff"), Ot("ui.spotlightColor", "Spotlight", ht.spotlightColor || "#3b82f6"), v.append(Qt);
    const oe = St("Reset appearance", "reset-ui-settings", "secondary");
    oe.classList.add("sg-button--compact", "sg-appearance-reset"), v.append(oe);
    const te = e.launcher || {}, jt = document.createElement("div");
    jt.className = "sg-settings sg-settings--nested sg-settings-card", jt.append(O("div", "sg-page-guides__label", "Orb"));
    const Gt = document.createElement("label");
    Gt.className = "sg-step-settings__field sg-settings__row", Gt.append(document.createTextNode("Size"));
    const qt = document.createElement("select");
    qt.className = "sg-field", qt.dataset.setting = "launcher.size", [
      ["56", "Small"],
      ["68", "Medium"],
      ["80", "Large"]
    ].forEach(([I, G]) => {
      const N = document.createElement("option");
      N.value = I, N.textContent = G, Number(te.size ?? 80) === Number(I) && (N.selected = !0), qt.append(N);
    }), Gt.append(qt);
    const ee = document.createElement("label");
    ee.className = "sg-step-settings__field sg-settings__row", ee.append(document.createTextNode("Position"));
    const ke = document.createElement("select");
    ke.className = "sg-field", ke.dataset.setting = "launcher.position", [
      ["bottom-right", "Bottom right"],
      ["bottom-left", "Bottom left"],
      ["top-right", "Top right"],
      ["top-left", "Top left"]
    ].forEach(([I, G]) => {
      const N = document.createElement("option");
      N.value = I, N.textContent = G, (te.position || "bottom-right") === I && (N.selected = !0), ke.append(N);
    }), ee.append(ke);
    const je = document.createElement("label");
    je.className = "sg-check sg-settings__row";
    const _e = document.createElement("input");
    _e.type = "checkbox", _e.dataset.setting = "launcher.animations", _e.checked = te.animations !== !1, je.append(_e, document.createTextNode(" Animate orb")), jt.append(Gt, ee, je);
    const qe = document.createElement("div");
    qe.className = "sg-settings-layout";
    const ie = document.createElement("nav");
    ie.className = "sg-settings-sidebar", ie.setAttribute("aria-label", "Panel sections"), ie.append(O("div", "sg-settings-sidebar__title", "System Guider"));
    const Ce = document.createElement("div");
    Ce.className = "sg-settings-content";
    const xe = {
      guides: n,
      account: u,
      general: C,
      access: wt,
      appearance: v,
      orb: jt
    };
    Object.entries(xe).forEach(([I, G]) => {
      G.classList.add("sg-settings-content__section"), G.dataset.settingsSection = I;
    }), Ce.append(...Object.values(xe));
    const vi = {
      guides: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path d="M4 2.75h7l3 3v9.5H4v-12.5Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="M11 2.75v3h3M6.5 9h5M6.5 11.75h5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      `,
      account: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <circle cx="9" cy="6.25" r="2.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M4.25 14.5c.45-2.45 2.15-3.7 4.75-3.7s4.3 1.25 4.75 3.7" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      `,
      general: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path d="M3 5h7M13 5h2M3 9h2M8 9h7M3 13h6M12 13h3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="11.5" cy="5" r="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="6.5" cy="9" r="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="10.5" cy="13" r="1.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
        </svg>
      `,
      access: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <rect x="3.5" y="7.5" width="11" height="7.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M6 7.5V5.75a3 3 0 0 1 6 0V7.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="9" cy="11" r="1" fill="currentColor"/>
        </svg>
      `,
      appearance: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path d="M9 2.5a6.5 6.5 0 1 0 0 13h1.1a1.35 1.35 0 0 0 .25-2.68l-.4-.08a1.25 1.25 0 0 1 .25-2.47h1.55A3.75 3.75 0 0 0 15.5 6.5c0-2.2-2.65-4-6.5-4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
          <circle cx="6" cy="6.25" r=".85" fill="currentColor"/>
          <circle cx="9" cy="4.85" r=".85" fill="currentColor"/>
          <circle cx="12" cy="6.25" r=".85" fill="currentColor"/>
        </svg>
      `,
      orb: `
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <circle cx="9" cy="9" r="5.75" fill="none" stroke="currentColor" stroke-width="1.35"/>
          <circle cx="9" cy="9" r="2.25" fill="none" stroke="currentColor" stroke-width="1.35"/>
          <path d="M9 1.75v1.5M9 14.75v1.5M1.75 9h1.5M14.75 9h1.5" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
        </svg>
      `
    }, wi = (I) => {
      this.settingsSection = xe[I] ? I : "guides", Object.entries(xe).forEach(([G, N]) => {
        N.hidden = G !== this.settingsSection;
      }), ie.querySelectorAll(".sg-settings-sidebar__item").forEach((G) => {
        const N = G.dataset.section === this.settingsSection;
        G.classList.toggle("is-active", N), G.setAttribute("aria-current", N ? "page" : "false");
      }), Ce.scrollTop = 0;
    }, se = (I, G, N) => {
      const V = document.createElement("button");
      return V.type = "button", V.className = "sg-settings-sidebar__item", V.innerHTML = vi[G] || vi.general, V.dataset.tooltip = I, V.dataset.section = N, V.setAttribute("aria-label", I), V.title = I, V.addEventListener("click", () => {
        wi(N);
      }), ie.append(V), V;
    };
    se("Guides", "guides", "guides"), se("Account", "account", "account"), se("Defaults", "general", "general"), se("Access", "access", "access"), se("Appearance", "appearance", "appearance"), se("Orb", "orb", "orb"), qe.append(ie, Ce), t.append(qe), wi(this.settingsSection);
  }
  renderPlayback(t) {
    const {
      currentStep: e,
      currentIndex: s = 0,
      total: n = 0,
      failed: r,
      autoSkipping: o
    } = this.state, a = document.createElement("div");
    a.className = "sg-progress", a.append(
      O("span", "", `Step ${Math.min(s + 1, n)} of ${n}`),
      O("span", "", `${n ? Math.round((s + 1) / n * 100) : 0}%`)
    );
    const l = document.createElement("div");
    l.className = "sg-progress__bar";
    const c = document.createElement("span");
    if (c.style.width = `${n ? (s + 1) / n * 100 : 0}%`, l.append(c), t.append(a, l), e && t.append(
      O("h3", "sg-playback__title", e.title),
      O("p", "sg-playback__description", e.description)
    ), r) {
      const d = String(this.state.message || "").trim();
      t.append(O(
        "p",
        "sg-status sg-status--error",
        d || (o ? "Target not found after wait. Skipping to the next step…" : "Target not found. Follow this guide's requirements first, then continue — or skip this step.")
      ));
    } else this.state.waiting && (this.state.waitKind === "target" || this.state.waitKind === "navigate" || this.state.waitKind === "settle" || this.state.waitKind === "loading") && t.append(O(
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
      const s = Q("Play guide", "secondary", {
        icon: Ye,
        withLabel: !0,
        ariaLabel: "Play guide"
      });
      s.dataset.action = "play", s.classList.add("sg-panel__btn-play"), s.disabled = this.state.steps.length === 0;
      const n = document.createElement("div");
      n.className = "sg-panel__footer-more", n.append(
        St("All guides", "open-manage", "ghost"),
        St("Download", "download", "ghost"),
        St("Download all", "download-all", "ghost"),
        St("Copy JSON", "copy", "ghost"),
        St("Close", "close", "ghost")
      ), e.append(s, n);
    } else {
      if (t === "manage-routes")
        return null;
      if (t === "playback") {
        !!this.state.canPrev && e.append(St(this.labels.back || "Back", "prev", "secondary")), e.append(
          St(this.labels.next || this.labels.skip || "Next Step", "next", "primary"),
          St(this.labels.close, "close", "ghost")
        );
        const n = e.querySelector('[data-action="next"]');
        n && (n.disabled = !!(this.state.waiting || this.state.failed));
      }
    }
    return e;
  }
  handleClick(t) {
    var l, c, d, u, h, p, g;
    const e = Vt(t);
    if (!e) return;
    e.closest(".sg-step__move-picker") || this.closeMoveMenus();
    const s = e.closest("[data-action]"), n = s == null ? void 0 : s.dataset.action;
    if (!n) return;
    if (t.preventDefault(), t.stopPropagation(), n === "toggle-collapse") {
      this.update({ collapsed: !this.state.collapsed });
      return;
    }
    const r = e.closest("[data-step-id]"), o = (l = e.closest("[data-guide-id]")) == null ? void 0 : l.dataset.guideId;
    if (n === "play-guide" || n === "delete-guide" || n === "edit-guide") {
      (d = (c = this.handlers)[n]) == null || d.call(c, o);
      return;
    }
    const a = (r == null ? void 0 : r.dataset.stepId) || ((h = (u = s == null ? void 0 : s.closest) == null ? void 0 : u.call(s, "[data-step-id]")) == null ? void 0 : h.dataset.stepId);
    (g = (p = this.handlers)[n]) == null || g.call(p, a);
  }
  closeMoveMenus() {
    this.root.querySelectorAll(".sg-step__move-menu:not([hidden])").forEach((t) => {
      t.hidden = !0;
    }), this.root.querySelectorAll('.sg-step__move-btn[aria-expanded="true"]').forEach((t) => {
      t.setAttribute("aria-expanded", "false");
    });
  }
  handleInput(t) {
    var c, d, u, h, p, g, f, m, y, S, w, _;
    const e = Vt(t);
    if (!e) return;
    const s = e.dataset.setting;
    if (s) {
      const x = e.type === "checkbox" ? e.checked : e.value;
      (d = (c = this.handlers)["update-setting"]) == null || d.call(c, s, x);
      return;
    }
    const n = e.dataset.guideSetting;
    if (n) {
      const x = e.dataset.guideId || this.state.currentGuideId, b = e.type === "checkbox" ? e.checked : e.value;
      (h = (u = this.handlers)["edit-guide-setting"]) == null || h.call(u, x, n, b);
      return;
    }
    const r = e.dataset.stepSetting;
    if (r) {
      const x = (p = e.closest("[data-step-id]")) == null ? void 0 : p.dataset.stepId, b = e.type === "checkbox" ? e.checked : e.value;
      (f = (g = this.handlers)["edit-step-setting"]) == null || f.call(g, x, r, b);
      return;
    }
    const o = e.dataset.guideField;
    if (o) {
      (y = (m = this.handlers).editGuide) == null || y.call(m, o, e.value);
      return;
    }
    const a = e.dataset.field, l = (S = e.closest("[data-step-id]")) == null ? void 0 : S.dataset.stepId;
    !a || !l || (_ = (w = this.handlers).edit) == null || _.call(w, l, a, a === "waitRequired" ? e.checked : e.value);
  }
  handlePreview(t) {
    var n, r, o;
    const e = Vt(t), s = (n = e == null ? void 0 : e.closest) == null ? void 0 : n.call(e, "[data-step-id]");
    s && !s.contains(t.relatedTarget) && ((o = (r = this.handlers).preview) == null || o.call(r, s.dataset.stepId));
  }
  handlePreviewEnd(t) {
    var n, r, o;
    const e = Vt(t), s = (n = e == null ? void 0 : e.closest) == null ? void 0 : n.call(e, "[data-step-id]");
    s && !s.contains(t.relatedTarget) && ((o = (r = this.handlers).previewEnd) == null || o.call(r));
  }
  handleDragStart(t) {
    const e = Vt(t);
    if (!e) return;
    if (!e.closest(".sg-step__drag")) {
      t.preventDefault();
      return;
    }
    if (e.closest(".sg-panel__header")) {
      t.preventDefault();
      return;
    }
    const s = e.closest("[data-step-id]");
    s && (t.dataTransfer.setData("text/plain", s.dataset.stepId), t.dataTransfer.effectAllowed = "move");
  }
  handleDrop(t) {
    var r, o, a;
    t.preventDefault();
    const e = Vt(t), s = (r = e == null ? void 0 : e.closest) == null ? void 0 : r.call(e, "[data-step-id]"), n = t.dataTransfer.getData("text/plain");
    n && s && n !== s.dataset.stepId && ((a = (o = this.handlers).drop) == null || a.call(o, n, s.dataset.stepId));
  }
  startDrag(t) {
    var o, a;
    if (t.button != null && t.button !== 0) return;
    const e = Vt(t);
    if (e != null && e.closest("button, a, input, textarea, select, label, .sg-step__drag, .sg-step__controls")) return;
    const s = !!(e != null && e.closest(".sg-panel__header")), n = !!(e != null && e.matches(
      ".sg-panel, .sg-panel__body, .sg-settings-layout, .sg-settings-content, .sg-settings-sidebar"
    ));
    if (!s && !n) return;
    const r = this.root.getBoundingClientRect();
    this.dragging = {
      offsetX: t.clientX - r.left,
      offsetY: t.clientY - r.top,
      startX: t.clientX,
      startY: t.clientY,
      pointerId: t.pointerId,
      active: !1
    };
    try {
      (a = (o = t.currentTarget).setPointerCapture) == null || a.call(o, t.pointerId);
    } catch {
    }
    window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerup", this.onPointerUp), window.addEventListener("pointercancel", this.onPointerUp), t.preventDefault();
  }
  onPointerMove(t) {
    if (this.dragging) {
      if (!this.dragging.active) {
        const e = t.clientX - this.dragging.startX, s = t.clientY - this.dragging.startY;
        if (e * e + s * s < 25) return;
        this.dragging.active = !0, this.root.classList.add("sg-panel--settled"), this.position = this.clampPosition(
          t.clientX - this.dragging.offsetX,
          t.clientY - this.dragging.offsetY
        ), this.applyPosition(), this.root.classList.add("sg-panel--dragging");
      }
      this.position = this.clampPosition(
        t.clientX - this.dragging.offsetX,
        t.clientY - this.dragging.offsetY
      ), this.applyPosition();
    }
  }
  onPointerUp() {
    if (!this.dragging) return;
    const t = this.dragging.active;
    this.dragging = null, t && this.root.classList.remove("sg-panel--dragging"), window.removeEventListener("pointermove", this.onPointerMove), window.removeEventListener("pointerup", this.onPointerUp), window.removeEventListener("pointercancel", this.onPointerUp);
  }
  destroy() {
    this.onPointerUp(), this.recordingIndicator.remove(), this.root.remove();
  }
}
const At = (i) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(i) : String(i).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, J = (i) => String(i || "").replace(/\s+/g, " ").trim().toLowerCase(), zt = [
  ".branch-card",
  ".day-column",
  ".day-name",
  "[data-guider-tile]",
  '[class*="branch-card"]',
  ".schedule-card",
  ".stat-card",
  ".kpi-card"
].join(", "), di = (i) => {
  var l, c, d, u, h, p, g, f, m, y, S, w;
  if (!(i instanceof Element)) return "";
  if (i.id)
    try {
      const _ = document.querySelector(`label[for="${At(i.id)}"]`);
      if (_) {
        const x = J(_.textContent);
        if (x) return x;
      }
    } catch {
    }
  const t = (l = i.closest) == null ? void 0 : l.call(i, [
    ".field",
    ".form-group",
    ".p-field",
    ".p-float-label",
    ".n-form-item",
    ".el-form-item",
    ".v-input",
    '[class*="form-item"]',
    '[class*="FormItem"]'
  ].join(", "));
  if (t) {
    const _ = t.querySelector(":scope > label, :scope label");
    if (_) {
      const b = J(_.textContent);
      if (b) return b;
    }
    const x = (c = t.getAttribute) == null ? void 0 : c.call(t, "name");
    if (x) {
      const b = J(x.replace(/_/g, " "));
      if (b) return b;
    }
  }
  const e = ((d = i.closest) == null ? void 0 : d.call(i, ".p-float-label")) || i.parentElement, s = (u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, ":scope > label, label");
  if (s) {
    const _ = J(s.textContent);
    if (_) return _;
  }
  const n = (h = i.matches) != null && h.call(i, zt) ? i : (p = i.closest) == null ? void 0 : p.call(i, zt);
  if (n) {
    if ((g = n.matches) != null && g.call(n, ".day-column, .day-name")) {
      const k = (f = n.querySelector) == null ? void 0 : f.call(n, ".day-date"), C = J((k == null ? void 0 : k.textContent) || "");
      if (C && C !== "—" && C.length <= 80) return C;
    }
    const _ = (m = n.querySelector) == null ? void 0 : m.call(
      n,
      'h1, h2, h3, h4, h5, .card-title, [class*="card-title"], [class*="tile-title"]'
    );
    if (_) {
      const k = J(_.textContent);
      if (k && k.length <= 80) return k;
    }
    const x = (y = n.querySelector) == null ? void 0 : y.call(n, ".day-name"), b = J((x == null ? void 0 : x.textContent) || "");
    if (b && b !== "—" && b.length <= 40) return b;
  }
  const r = (S = i.querySelector) == null ? void 0 : S.call(i, '.nav-link-title, .menu-title, .sidebar-title, [class*="title"]');
  if (r) {
    const _ = J(r.textContent);
    if (_) return _;
  }
  const o = i.cloneNode(!0);
  (w = o.querySelectorAll) == null || w.call(o, "script, style, svg, i, .nav-icon, .sidebar-pending-dot, .badge, .p-dropdown-label, .p-multiselect-label").forEach((_) => _.remove());
  const a = J(o.textContent);
  return a || J(
    i.getAttribute("aria-label") || i.getAttribute("title") || i.getAttribute("placeholder") || i.getAttribute("name") || ""
  );
}, Wi = (i) => {
  var e;
  if (!(i instanceof Element)) return "";
  const t = i.getAttribute("href") || i.getAttribute("data-href") || "";
  if (!t || t === "#" || t.startsWith("javascript:")) return "";
  try {
    const s = new URL(t, ((e = globalThis.location) == null ? void 0 : e.origin) || "http://localhost");
    return `${s.pathname}${s.search}`.replace(/\/+$/, "") || "/";
  } catch {
    return t.split("#")[0].replace(/\/+$/, "") || t;
  }
};
function ji(i) {
  var s, n, r, o;
  if (!(i instanceof Element)) return "";
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
  let e = i;
  for (let a = 0; a < 12 && e; a += 1) {
    let l = e.previousElementSibling;
    for (; l; ) {
      if ((s = l.matches) != null && s.call(l, t))
        return J(l.textContent).slice(0, 80);
      const u = (n = l.querySelector) == null ? void 0 : n.call(l, t);
      if (u) return J(u.textContent).slice(0, 80);
      l = l.previousElementSibling;
    }
    const c = e.parentElement;
    if (!c || c === document.body) break;
    let d = c.previousElementSibling;
    for (; d; ) {
      if ((r = d.matches) != null && r.call(d, t))
        return J(d.textContent).slice(0, 80);
      const u = (o = d.querySelector) == null ? void 0 : o.call(d, t);
      if (u) return J(u.textContent).slice(0, 80);
      d = d.previousElementSibling;
    }
    e = c;
  }
  return "";
}
function Mi(i) {
  var f, m, y, S;
  if (!(i instanceof Element)) return null;
  const t = ((f = i.closest) == null ? void 0 : f.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")) || ((m = i.matches) != null && m.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? i : null), e = t || i, s = di(e), n = Wi(e), r = ji(e), o = e.getAttribute("data-guider") || "", a = J(t ? "" : e.getAttribute("aria-label") || "");
  let l = e.getAttribute("name") || "";
  if (!l || /^(pv_|apv_|pr_|p_)/i.test(l)) {
    let w = e.parentElement;
    for (let _ = 0; _ < 14 && w && w !== document.body; _ += 1) {
      const x = ((y = w.getAttribute) == null ? void 0 : y.call(w, "name")) || "";
      if (x && !/^(pv_|apv_|pr_|p_)/i.test(x) && x.length <= 80) {
        l = x;
        break;
      }
      w = w.parentElement;
    }
  }
  const c = J(e.getAttribute("placeholder") || ""), d = e.getAttribute("role") || (t ? "combobox" : ""), u = e.tagName.toLowerCase(), h = e.getAttribute("type") || "", p = t && ((S = [...t.querySelectorAll("[id]")].find((w) => w.id && !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(w.id))) == null ? void 0 : S.id) || "", g = !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(e.id || "") && e.id || p || "";
  return !s && !n && !o && !l && !a && !g ? null : {
    ...s ? { text: s } : {},
    ...n ? { href: n } : {},
    ...r ? { section: r } : {},
    ...o ? { dataGuider: o } : {},
    ...a ? { ariaLabel: a } : {},
    ...l ? { name: l } : {},
    ...c ? { placeholder: c } : {},
    ...d ? { role: d } : {},
    ...u ? { tag: u } : {},
    ...h ? { type: h } : {},
    ...g ? { id: g } : {}
  };
}
function Ae(i, t) {
  const e = J(i), s = J(t);
  if (!e || !s) return 0;
  if (e === s) return 50;
  const n = e.split(/\s+/).filter(Boolean), r = s.split(/\s+/).filter(Boolean);
  if (n.length === r.length && r.every((o) => n.includes(o)))
    return 40;
  if (e.includes(s)) {
    const o = Math.max(0, n.length - r.length);
    return Math.max(4, 18 - o * 6);
  }
  return s.includes(e) && e.length >= 3 ? 8 : 0;
}
function Ms(i, t) {
  const e = J(i).replace(/\/+$/, ""), s = J(t).replace(/\/+$/, "");
  return !e || !s ? 0 : e === s ? 45 : e.endsWith(s) || s.endsWith(e) ? 28 : e.includes(s) || s.includes(e) ? 12 : -25;
}
function Ls(i, t) {
  const e = J(i), s = J(t);
  return !e || !s ? 0 : e === s ? 30 : e.includes(s) || s.includes(e) ? 12 : -20;
}
function Be(i, t) {
  var n, r, o;
  if (!(i instanceof Element) || !t || typeof t != "object") return 0;
  let e = 0;
  const s = i.getAttribute("data-guider") || "";
  if (t.dataGuider && (s === t.dataGuider ? e += 100 : s && (e -= 40)), t.id && i.id && i.id === t.id && (e += 80), t.href && (e += Ms(Wi(i), t.href)), t.text ? (e += Ae(di(i), t.text), t.ariaLabel && (e += Math.round(Ae(i.getAttribute("aria-label") || "", t.ariaLabel) * 0.5))) : t.ariaLabel && (e += Ae(i.getAttribute("aria-label") || "", t.ariaLabel)), t.section && (e += Ls(ji(i), t.section)), t.name) {
    const a = i.getAttribute("name") || "", l = ((o = (r = (n = i.closest) == null ? void 0 : n.call(
      i,
      '.field, .form-group, .p-field, .n-form-item, .el-form-item, [class*="form-item"]'
    )) == null ? void 0 : r.getAttribute) == null ? void 0 : o.call(r, "name")) || "";
    (a === t.name || l === t.name) && (e += 45);
  }
  return t.placeholder && (e += Math.round(Ae(i.getAttribute("placeholder") || "", t.placeholder) * 0.6)), t.tag && i.tagName.toLowerCase() === t.tag && (e += 4), t.role && i.getAttribute("role") === t.role && (e += 6), t.type && i.getAttribute("type") === t.type && (e += 6), e;
}
function Ns(i) {
  const t = [];
  if (i != null && i.dataGuider && t.push(`[data-guider="${At(i.dataGuider)}"]`), i != null && i.id && t.push(`#${At(i.id)}`), i != null && i.href) {
    const e = String(i.href);
    t.push(`a[href="${At(e)}"]`), t.push(`a[href="${At(e)}/"]`);
    const s = e.replace(/^\//, "");
    s && s !== e && t.push(`a[href="/${At(s)}"]`);
  }
  return i != null && i.name && (t.push(`[name="${At(i.name)}"]`), t.push(`.field[name="${At(i.name)}"]`), t.push(`.field[name="${At(i.name)}"] textarea`), t.push(`.field[name="${At(i.name)}"] input`)), t.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label'), t.push(zt), t.join(", ");
}
function Bs(i, t = document) {
  var o, a;
  const e = t instanceof Element || t === document ? t : document;
  let s = [];
  try {
    s = [...e.querySelectorAll(Ns(i))];
  } catch {
    s = [...e.querySelectorAll(`a, button, [role="button"], input, select, textarea, [data-guider], ${zt}`)];
  }
  const n = [];
  for (const l of s)
    l instanceof Element && ((o = l.closest) != null && o.call(l, ".sg-panel, .sg-overlay, .sg-launcher") || (n.push(l), l.matches("label") && l.control instanceof Element && n.push(l.control)));
  const r = J((i == null ? void 0 : i.text) || "");
  if (r.length >= 2)
    try {
      for (const l of e.querySelectorAll(zt)) {
        if (!(l instanceof Element) || (a = l.closest) != null && a.call(l, ".sg-panel, .sg-overlay, .sg-launcher")) continue;
        const c = di(l);
        c && (c === r || c.includes(r) || r.includes(c)) && n.push(l);
      }
    } catch {
    }
  return [...new Set(n)];
}
const Ps = 40;
function De(i) {
  const t = String(i || "").trim();
  return t ? /:nth-(?:of-type|child)\s*\(/i.test(t) ? !0 : t.includes("#") || t.includes("[data-guider") ? !1 : (t.match(/>/g) || []).length >= 2 : !1;
}
function Is(i) {
  const t = String(i || "").trim();
  return t ? t.replace(/^(fill\s+in|enter|type|pick\s+a|pick|select|choose|click)\s+/i, "").trim().toLowerCase() : "";
}
function $s(i) {
  const t = i != null && i.match && typeof i.match == "object" && !Array.isArray(i.match) ? { ...i.match } : {}, e = Is(i == null ? void 0 : i.title);
  if (e.length >= 3) {
    t.text ? t.text !== e && t.text.length <= e.length + 2 && !t.dataGuider && !t.id && !t.text.includes(e) && !e.includes(t.text) && (t.text = e) : t.text = e;
    const s = /^(input|textarea|select)$/i.test(String(t.tag || "")) || !!t.placeholder || !!t.type || t.role === "combobox";
    !t.name && s && e === e.toLowerCase() && /^[a-z][a-z0-9\s_-]*$/.test(e) && (t.name = e.replace(/\s+/g, "_"));
  }
  return t.text || t.dataGuider || t.id || t.name || t.ariaLabel || Object.keys(t).length ? t : null;
}
function Pe(i, {
  root: t = document,
  tag: e = ""
} = {}) {
  var l, c;
  const s = String(i || "").trim();
  if (!s) return null;
  const n = At(s), r = t instanceof Element || t === document ? t : document, o = String(e || "").toLowerCase(), a = [];
  (o === "textarea" || o === "input" || o === "select") && (a.push(`.field[name="${n}"] ${o}`), a.push(`[name="${n}"] ${o}`), a.push(`.form-group[name="${n}"] ${o}`)), a.push(
    `[name="${n}"] textarea`,
    `[name="${n}"] input:not([type="hidden"])`,
    `[name="${n}"] select`,
    `[name="${n}"] .p-dropdown`,
    `[name="${n}"] .p-autocomplete`,
    `[name="${n}"] .p-calendar`,
    `[name="${n}"] .p-multiselect`,
    `.field[name="${n}"] textarea`,
    `.field[name="${n}"] input:not([type="hidden"])`,
    `.field[name="${n}"] select`,
    `.field[name="${n}"] .p-dropdown`,
    `.field[name="${n}"] .p-autocomplete`,
    `.field[name="${n}"] .p-calendar`,
    `.mb-0[name="${n}"] .p-dropdown`,
    `.mb-0[name="${n}"] .p-autocomplete`,
    `.mb-0[name="${n}"] input:not([type="hidden"])`,
    `.mb-0[name="${n}"] textarea`,
    `.field[name="${n}"]`,
    `.mb-0[name="${n}"]`,
    `[name="${n}"]`
  );
  for (const d of a)
    try {
      const u = [...r.querySelectorAll(d)];
      for (const h of u) {
        if (!(h instanceof Element) || (l = h.closest) != null && l.call(h, ".sg-panel, .sg-overlay, .sg-launcher")) continue;
        if (h.matches("textarea, input, select, .p-dropdown, .p-autocomplete, .p-calendar, .p-multiselect"))
          return h;
        const p = (c = h.querySelector) == null ? void 0 : c.call(
          h,
          'textarea, input:not([type="hidden"]), select, .p-dropdown, .p-autocomplete, .p-calendar'
        );
        return p || h;
      }
    } catch {
    }
  return null;
}
function Rs(i, {
  selector: t = "",
  root: e = document,
  threshold: s = Ps
} = {}) {
  const n = [], r = i && typeof i == "object" && !Array.isArray(i), o = De(t), a = Os(t);
  if (t)
    try {
      const u = document.querySelector(t);
      if (u instanceof Element) {
        const h = r ? Be(u, i) : 35, p = Li(u) || a;
        (p || !o || !r || h >= s) && n.push({
          element: u,
          score: p ? Math.max(h, 48) : h,
          via: "selector",
          tile: p
        });
      }
    } catch {
    }
  if (r && i.name && !a) {
    const u = Pe(i.name, { root: e, tag: i.tag });
    if (u) {
      const h = Be(u, i);
      n.push({ element: u, score: Math.max(h, 55), via: "name" });
    }
  }
  if (r)
    for (const u of Bs(i, e)) {
      const h = Be(u, i);
      h > 0 && n.push({ element: u, score: h, via: "score", tile: Li(u) });
    }
  const l = n.find((u) => u.via === "selector" && u.tile);
  let c = n;
  if (l && (c = n.filter((u) => {
    var h, p;
    return u.via === "selector" || u.via === "name" || u.tile || Gs(u.element) && (i != null && i.name) ? !0 : (p = (h = u.element) == null ? void 0 : h.matches) != null && p.call(h, 'button, a, [role="button"], .p-button, .nav-link') ? u.score >= 50 : u.score >= l.score + 15;
  })), !c.length) return null;
  c.sort((u, h) => {
    if (h.score !== u.score) return h.score - u.score;
    if (l) {
      const m = { selector: 0, name: 1, score: 2 }, y = m[u.via] ?? 3, S = m[h.via] ?? 3;
      return y !== S ? y - S : 0;
    }
    const p = { name: 0, score: 1, selector: 2 }, g = p[u.via] ?? 3, f = p[h.via] ?? 3;
    return o && g !== f ? g - f : u.via === "selector" ? -1 : 1;
  });
  const d = c[0];
  return !d || d.score < s ? (d == null ? void 0 : d.via) === "selector" && t && (t.startsWith("[data-guider=") || t.startsWith("#")) || (d == null ? void 0 : d.via) === "selector" && d.tile || (d == null ? void 0 : d.via) === "name" && d.score >= 40 ? d.element : null : d.element;
}
function Li(i) {
  var t, e;
  return i instanceof Element ? ((t = i.matches) == null ? void 0 : t.call(i, zt)) || !!((e = i.closest) != null && e.call(i, zt)) : !1;
}
function Os(i) {
  return /\.(day-column|branch-card|schedule-card|stat-card|kpi-card)|data-guider-tile|branch-card/i.test(
    String(i || "")
  );
}
function Gs(i) {
  var t, e;
  return i instanceof Element ? !!((t = i.matches) != null && t.call(
    i,
    'input, textarea, select, [role="combobox"], .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect, .p-calendar, .field, .form-group'
  ) || (e = i.closest) != null && e.call(i, ".field, .form-group, .p-field, .p-float-label")) : !1;
}
const Mt = (i) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(i) : String(i).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, Fe = [
  ".branch-card",
  ".day-column",
  ".day-name",
  "[data-guider-tile]",
  '[class*="branch-card"]',
  ".schedule-card",
  ".stat-card",
  ".kpi-card"
].join(", "), Ds = [
  "button",
  "a[href]",
  '[role="button"]',
  ".p-button",
  "input",
  "select",
  "textarea",
  '[role="combobox"]',
  ".p-dropdown",
  ".p-multiselect",
  ".p-autocomplete",
  ".p-cascadeselect"
].join(", ");
function $t(i) {
  return i instanceof Element ? i.matches(Fe) : !1;
}
function Zt(i) {
  var s, n, r, o;
  if (!(i instanceof Element)) return null;
  const t = (s = i.closest) == null ? void 0 : s.call(i, Fe);
  if (!t) return null;
  const e = (n = i.closest) == null ? void 0 : n.call(i, Ds);
  if (e && t.contains(e) && e !== t) return null;
  if ((r = t.matches) != null && r.call(t, ".day-name")) {
    const a = (o = t.closest) == null ? void 0 : o.call(t, ".day-column");
    if (a) return a;
  }
  return t;
}
function it(i) {
  return i instanceof Element ? i.matches(
    'input[type="password"], [data-guider-ignore], [contenteditable][data-sensitive]'
  ) : !0;
}
function ye(i) {
  return !i || typeof i != "string" ? !0 : /^(pv_|apv_|pr_|p_)id_?\d+$/i.test(i) || /^[a-z]{1,5}_id_\d+$/i.test(i);
}
const Ie = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect", Fs = /^(pv_|apv_|pr_|p_)/i;
function qi(i) {
  const t = String(i || "").trim();
  return !(!t || t.length > 80 || Fs.test(t));
}
function Vi(i) {
  var e;
  if (!(i instanceof Element)) return "";
  let t = i;
  for (let s = 0; s < 14 && t && t !== document.body; s += 1) {
    const n = ((e = t.getAttribute) == null ? void 0 : e.call(t, "name")) || "";
    if (qi(n)) return n;
    t = t.parentElement;
  }
  return "";
}
function Ni(i) {
  var e;
  if (!(i instanceof Element)) return null;
  let t = i;
  for (let s = 0; s < 14 && t && t !== document.body; s += 1) {
    if (qi((e = t.getAttribute) == null ? void 0 : e.call(t, "name"))) return t;
    t = t.parentElement;
  }
  return null;
}
function Hs(i, t) {
  var r, o, a, l;
  if (!(i instanceof Element) || !t) return null;
  const e = Mt(t), s = i.tagName.toLowerCase(), n = [];
  if ((r = i.matches) != null && r.call(i, Ie)) {
    const c = [...i.classList].find((d) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(d));
    c && (n.push(`[name="${e}"] .${Mt(c)}`), n.push(`.field[name="${e}"] .${Mt(c)}`), n.push(`.mb-0[name="${e}"] .${Mt(c)}`), n.push(`[name="${e}"] ${s}.${Mt(c)}`));
  }
  (s === "textarea" || s === "select" || s === "input") && (n.push(`[name="${e}"] ${s}`), n.push(`.field[name="${e}"] ${s}`), n.push(`.form-group[name="${e}"] ${s}`), n.push(`.mb-0[name="${e}"] ${s}`)), n.push(`[name="${e}"]`), n.push(`.field[name="${e}"]`), n.push(`.mb-0[name="${e}"]`);
  for (const c of n)
    try {
      const d = [...document.querySelectorAll(c)];
      if (d.length === 1) return c;
      if (d.length > 1 && d.includes(i)) {
        const u = d.filter((h) => h === i || h.contains(i));
        if (u.length === 1 && u[0] === i) return c;
      }
      if (d.length === 1 && ((a = (o = d[0]).contains) != null && a.call(o, i)) && i !== d[0] && (l = i.matches) != null && l.call(i, Ie)) {
        const u = [...i.classList].find((h) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(h));
        if (u) {
          const h = `[name="${e}"] .${Mt(u)}`;
          if (document.querySelectorAll(h).length === 1) return h;
        }
      }
    } catch {
    }
  return null;
}
function ei(i) {
  var a, l, c, d;
  if (!(i instanceof Element)) return null;
  const t = (a = i.closest) == null ? void 0 : a.call(i, Ie);
  t && (i = t);
  const e = i.getAttribute("data-guider");
  if (e) return `[data-guider="${Mt(e)}"]`;
  if (i.id && !ye(i.id)) {
    const u = `#${Mt(i.id)}`;
    if (document.querySelectorAll(u).length === 1) return u;
  }
  const s = Vi(i), n = Hs(i, s);
  if (n) return n;
  if ((l = i.matches) != null && l.call(i, Ie)) {
    const u = [...i.querySelectorAll("[id]")].find(
      (p) => p.id && !ye(p.id)
    ), h = [...i.classList].find((p) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(p));
    if (u && h) {
      const p = `${i.tagName.toLowerCase()}.${Mt(h)}:has(#${Mt(u.id)})`;
      try {
        if (document.querySelectorAll(p).length === 1) return p;
      } catch {
      }
    }
  }
  if ($t(i) || Zt(i)) {
    const u = $t(i) ? i : Zt(i);
    u && (i = u);
  }
  if ((c = i.matches) != null && c.call(i, ".day-column")) {
    const u = (d = i.closest) == null ? void 0 : d.call(i, ".schedule-grid-content"), h = i.parentElement;
    if (u && h === u) {
      const p = [...h.children].indexOf(i) + 1;
      if (p > 0) {
        const g = `.schedule-grid-content > .day-column:nth-child(${p})`;
        try {
          if (document.querySelectorAll(g).length === 1) return g;
        } catch {
        }
      }
    }
  }
  const r = [];
  let o = i;
  for (; o && o !== document.body && r.length < 5; ) {
    let u = o.tagName.toLowerCase();
    const h = [...o.classList].find(
      (f) => !/^(active|selected|open|focus|hover|ng-|css-|jsx-|p-placeholder|p-focus|p-inputtext|p-disabled|p-highlight|p-inputwrapper|p-inputwrapper-filled|p-inputwrapper-focus|p-overlay-open)$/i.test(f)
    );
    h && (u += `.${Mt(h)}`);
    const p = o.parentElement;
    if (p)
      if (h && $t(o)) {
        if ([...p.children].filter(
          (m) => {
            var y;
            return m instanceof Element && ((y = m.classList) == null ? void 0 : y.contains(h));
          }
        ).length > 1) {
          const m = [...p.children].indexOf(o) + 1;
          u += `:nth-child(${m})`;
        }
      } else {
        const f = [...p.children].filter(
          (m) => m.tagName === o.tagName
        );
        f.length > 1 && (u += `:nth-of-type(${f.indexOf(o) + 1})`);
      }
    r.unshift(u);
    const g = r.join(" > ");
    if (document.querySelectorAll(g).length === 1) return g;
    if (r.length === 1 && $t(o) && p)
      try {
        if (p.querySelectorAll(`:scope > ${u}`).length === 1) return g;
      } catch {
      }
    o = p;
  }
  return r.join(" > ") || null;
}
function ui(i) {
  var t;
  if (!i || typeof i != "string") return null;
  try {
    let e = document.querySelector(i);
    if (!e && /\.p-placeholder|\.p-inputtext|\.p-focus/.test(i)) {
      const s = i.replace(/\.p-placeholder/g, "").replace(/\.p-inputtext/g, "").replace(/\.p-focus/g, "").replace(/\s{2,}/g, " ").replace(/>\s*>/g, ">").trim();
      s && (e = document.querySelector(s));
    }
    if (e) {
      const s = (t = e.closest) == null ? void 0 : t.call(e, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (s) return s;
    }
    return e;
  } catch {
    return null;
  }
}
const hi = '.skeleton, .shimmer, [aria-busy="true"], .p-skeleton';
let Ki = hi;
function Us(i) {
  Ki = String(i || "").trim() || hi;
}
function zi() {
  return Ki || hi;
}
function Zi(i) {
  var t;
  if (!(i instanceof Element)) return !1;
  try {
    const e = zi();
    return i.closest(e) ? !0 : !!((t = i.querySelector) != null && t.call(i, e));
  } catch {
    return !1;
  }
}
function ii(i = document) {
  var t;
  try {
    const e = i instanceof Element || i === document ? i : document;
    return !!((t = e.querySelector) != null && t.call(e, zi()));
  } catch {
    return !1;
  }
}
async function Ws({
  timeout: i = 2e4,
  appearGraceMs: t = 300,
  postReadyDelay: e = 1500,
  pollInterval: s = 100,
  signal: n = null,
  isLoading: r = ii,
  onTick: o = null
} = {}) {
  const a = Date.now() + Math.max(0, Number(i) || 0), l = Math.max(0, Number(t) || 0), c = Math.max(0, Number(e) || 0), d = Math.max(40, Number(s) || 100), u = () => !!(n != null && n.aborted), h = (g) => new Promise((f) => setTimeout(f, g));
  let p = r();
  if (!p && l > 0) {
    const g = Date.now() + l;
    for (; !p && Date.now() < g; ) {
      if (u()) return !1;
      o == null || o({ phase: "grace", remainingMs: Math.max(0, a - Date.now()), sawLoading: !1 }), await h(d), p = r();
    }
  }
  if (u()) return !1;
  if (!p) return !0;
  for (; r() && Date.now() <= a; ) {
    if (u()) return !1;
    const g = Math.max(0, a - Date.now());
    o == null || o({ phase: "loading", remainingMs: g, sawLoading: !0 }), await h(d);
  }
  return u() ? !1 : (c > 0 && (o == null || o({ phase: "settle", remainingMs: c, sawLoading: !0 }), await h(c)), !u());
}
function xt(i) {
  if (!(i instanceof Element) || !i.isConnected || Zi(i)) return !1;
  const t = getComputedStyle(i);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = i.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function js(i) {
  if (!(i instanceof Element)) return !1;
  const t = i.getBoundingClientRect();
  return !(t.bottom < 0 || t.right < 0 || t.top > window.innerHeight || t.left > window.innerWidth);
}
function He(i) {
  return xt(i) && js(i);
}
function qs(i, { behavior: t = "smooth", block: e = "center" } = {}) {
  if (!(i instanceof Element) || !i.isConnected) return;
  const s = [];
  let n = i.parentElement;
  for (; n && n !== document.documentElement; )
    s.push(n), n = n.parentElement;
  s.forEach((r) => {
    const o = getComputedStyle(r), a = /(auto|scroll|overlay)/.test(o.overflowY) && r.scrollHeight > r.clientHeight + 1, l = /(auto|scroll|overlay)/.test(o.overflowX) && r.scrollWidth > r.clientWidth + 1;
    if (!a && !l) return;
    const c = r.getBoundingClientRect(), d = i.getBoundingClientRect();
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
    i.scrollIntoView({ behavior: t, block: e, inline: "nearest" });
  } catch {
    i.scrollIntoView();
  }
}
function ge(i) {
  var n, r, o, a;
  if (!(i instanceof Element)) return null;
  const t = (n = i.closest) == null ? void 0 : n.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
  if (t && xt(t)) return t;
  if (xt(i)) {
    const l = (r = i.closest) == null ? void 0 : r.call(
      i,
      '.p-overlaypanel, .modal-content, .card, .offcanvas, [class*="overlay-custom"], .filter-panel'
    );
    return l && l !== i && !i.matches('input, textarea, select, button, a, [role="combobox"]'), i;
  }
  let e = i.parentElement;
  for (let l = 0; l < 8 && e && !((o = e.matches) != null && o.call(e, ".p-overlaypanel, .modal, .modal-content, .card, .offcanvas, body, html")); l += 1) {
    const c = (a = e.getBoundingClientRect) == null ? void 0 : a.call(e);
    if (c && (c.width > 420 || c.height > 280)) {
      e = e.parentElement;
      continue;
    }
    if (He(e)) return e;
    e = e.parentElement;
  }
  const s = i.closest([
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
  if (s && xt(s)) {
    const l = s.getBoundingClientRect();
    if (l.width <= 420 && l.height <= 280) return s;
  }
  return xt(i) ? i : null;
}
function Vs(i) {
  return [i.top, i.left, i.width, i.height].map((t) => Math.round(t * 2) / 2).join(":");
}
function Kt(i, { requirePresent: t = !0 } = {}) {
  var c;
  if (!(i != null && i.selector) && !(i != null && i.match) && !(i != null && i.title)) return null;
  const e = $s(i), s = Rs(e, { selector: (i == null ? void 0 : i.selector) || "" });
  if (s && (!t || xt(s)))
    return Bi(s);
  const n = (e == null ? void 0 : e.name) || String((e == null ? void 0 : e.text) || "").replace(/\s+/g, "_");
  if (n) {
    const d = Pe(n, { tag: e == null ? void 0 : e.tag });
    if (d && (!t || xt(d))) return d;
  }
  const r = (i == null ? void 0 : i.selector) || "", o = ui(r);
  if (!o || t && !xt(o)) return null;
  const a = Bi(o);
  if (!(De(r) && e)) return a;
  const l = e ? Be(a, e) : 0;
  return l >= 18 || ($t(a) || (c = a.closest) != null && c.call(a, Fe)) && (l >= 8 || !(e != null && e.name) || !Pe(e.name, { tag: e.tag })) ? a : e != null && e.name && Pe(e.name, { tag: e.tag }) || e != null && e.dataGuider || e != null && e.id ? null : !(e != null && e.name) && !(e != null && e.href) ? a : null;
}
function Bi(i) {
  return i instanceof Element && Zt(i) || i;
}
function Ks(i) {
  return !i || i.action === "manual" ? !0 : !i.selector && !i.match && !i.title ? !1 : !!Kt(i);
}
async function zs(i, {
  timeout: t = 1500,
  stableFrames: e = 4,
  interval: s = 50
} = {}) {
  if (!(i instanceof Element)) return null;
  const n = Date.now() + t;
  let r = "", o = 0;
  for (; Date.now() <= n; ) {
    if (!i.isConnected) return null;
    if (!xt(i))
      o = 0, r = "";
    else {
      const a = Vs(i.getBoundingClientRect());
      if (a === r ? o += 1 : (r = a, o = 1), o >= e) return i;
    }
    await new Promise((a) => setTimeout(a, s));
  }
  return He(i) ? i : null;
}
const Zs = /* @__PURE__ */ new Set(["none", "pulse", "wobble", "fade"]), Xs = /* @__PURE__ */ new Set(["system", "inter", "arial", "roboto", "serif"]), Js = /* @__PURE__ */ new Set(["bottom-right", "bottom-left", "top-right", "top-left"]), Pi = {
  system: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  inter: "Inter, ui-sans-serif, system-ui, sans-serif",
  arial: "Arial, Helvetica, sans-serif",
  roboto: "Roboto, Arial, sans-serif",
  serif: 'Georgia, "Times New Roman", serif'
}, pi = () => ({
  fontFamily: "system",
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
}), Xi = () => ({
  size: 80,
  position: "bottom-right",
  animations: !0
}), Ji = [
  ".skeleton",
  ".shimmer",
  '[aria-busy="true"]',
  ".p-skeleton"
];
function Yi(i) {
  let t = [];
  Array.isArray(i) ? t = i.map((s) => String(s || "").trim()).filter(Boolean) : i != null && i !== "" && (t = String(i).split(/[\n,]+/).map((s) => s.trim()).filter(Boolean));
  const e = [...new Set(t)];
  return e.length ? e : [...Ji];
}
function Ys(i) {
  return Yi(i).join(", ");
}
const Qi = () => ({
  /** Full page reload before play (legacy). */
  resetBeforePlay: "none",
  /** When opening a guide on another route, hard-reload instead of soft navigate. */
  reloadOnNavigate: !1,
  resetBeforePlayDelay: 450,
  /**
   * After a click step, wait for page loaders (skeleton / shimmer / aria-busy)
   * to clear before highlighting the next step. Default true.
   */
  pageSettleAfterClick: !0,
  /** Max ms to wait for page loaders after a click. */
  pageSettleTimeout: 2e4,
  /** Ms to allow loaders to appear after a click before treating the page as idle. */
  pageSettleAppearGraceMs: 300,
  /** Extra ms after loaders clear before highlighting. Only used when a loader was seen. Default 1500. */
  postReadyDelay: 1500,
  /**
   * CSS selectors that mark loading / skeleton UI.
   * Playback waits until none match (and targets containing them are not ready).
   */
  loadingSelectors: [...Ji],
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
  /** Show “Account ID: …” under the launcher search bar. Off by default. */
  showAccountId: !1,
  /**
   * Show the floating orb / launcher. Default true.
   * Set false in settings.json to turn off System Guider UI on the host app.
   */
  showOrb: !0,
  /**
   * Pathname prefixes/paths where the floating toolbar is hidden.
   * Includes `/` for apps that serve login (or no-guider pages) at the root.
   * Examples: /login, /, /time-log
   */
  hiddenUrls: ["/login", "/"],
  launcher: Xi(),
  ui: pi()
});
function ts(i) {
  return Array.isArray(i) ? [...new Set(i.map((t) => String(t).trim()).filter(Boolean))] : i == null || i === "" ? [] : [...new Set(
    String(i).split(/[\s,;]+/).map((t) => t.trim()).filter(Boolean)
  )];
}
function es(i) {
  return Array.isArray(i) ? [...new Set(i.map((t) => si(t)).filter(Boolean))] : i == null || i === "" ? [] : [...new Set(
    String(i).split(/[\n,;]+/).map((t) => si(t)).filter(Boolean)
  )];
}
function si(i) {
  let t = String(i || "").trim();
  if (!t) return "";
  try {
    /^https?:\/\//i.test(t) && (t = new URL(t).pathname);
  } catch {
  }
  return t = t.split("?")[0].split("#")[0], t.startsWith("/") || (t = `/${t}`), t.length > 1 && (t = t.replace(/\/+$/, "")), t.toLowerCase();
}
function Qs(i, t = []) {
  const e = si(i || "/"), s = es(t);
  return s.length ? s.some((n) => {
    if (n.endsWith("*")) {
      const r = n.slice(0, -1);
      return e === r.replace(/\/+$/, "") || e.startsWith(r);
    }
    return e === n || e.startsWith(`${n}/`);
  }) : !1;
}
function tn(i, t = []) {
  const e = ts(t);
  if (!e.length || i == null || i === "") return !1;
  const s = String(i).trim();
  return e.includes(s);
}
function en(i, t = "123456") {
  return i == null ? String(t ?? "").replace(/\D/g, "").slice(0, 12) : String(i).replace(/\D/g, "").slice(0, 12);
}
function ce(i, t) {
  const e = String(i || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(e)) return e.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(e)) {
    const [, s, n, r] = e;
    return `#${s}${s}${n}${n}${r}${r}`.toLowerCase();
  }
  return t;
}
function be(i = {}) {
  const t = pi();
  if (!i || typeof i != "object" || Array.isArray(i)) return t;
  const e = String(i.highlightMotion || t.highlightMotion), s = String(i.fontFamily || t.fontFamily).toLowerCase();
  return {
    fontFamily: Xs.has(s) ? s : t.fontFamily,
    animations: i.animations !== !1,
    highlightMotion: Zs.has(e) ? e : t.highlightMotion,
    spotlightFade: i.spotlightFade !== !1,
    animatedCursor: !!i.animatedCursor,
    tipBg: ce(i.tipBg, t.tipBg),
    tipText: ce(i.tipText, t.tipText),
    skipBg: ce(i.skipBg, t.skipBg),
    skipText: ce(i.skipText, t.skipText),
    spotlightColor: ce(i.spotlightColor, t.spotlightColor),
    overlayOpacity: (() => {
      const n = Number(i.overlayOpacity);
      return Number.isFinite(n) ? Math.min(0.9, Math.max(0, n)) : t.overlayOpacity;
    })(),
    transitionMs: (() => {
      const n = Math.round(Number(i.transitionMs));
      return Number.isFinite(n) ? Math.min(1e3, Math.max(0, n)) : t.transitionMs;
    })()
  };
}
function sn(i = {}) {
  const t = Xi();
  if (!i || typeof i != "object" || Array.isArray(i)) return t;
  const e = String(i.position || t.position).toLowerCase(), s = Math.round(Number(i.size));
  return {
    size: Number.isFinite(s) ? Math.min(96, Math.max(48, s)) : t.size,
    position: Js.has(e) ? e : t.position,
    animations: i.animations !== !1
  };
}
function Pt(i = {}) {
  var r, o;
  const t = Qi();
  if (!i || typeof i != "object" || Array.isArray(i)) return t;
  const e = Number((r = i.ui) == null ? void 0 : r.overlayOpacity), s = Number((o = i.ui) == null ? void 0 : o.transitionMs), n = {
    ...i.ui && typeof i.ui == "object" ? i.ui : {},
    overlayOpacity: Number.isFinite(e) ? e : t.ui.overlayOpacity,
    transitionMs: Number.isFinite(s) ? s : t.ui.transitionMs
  };
  return {
    ...t,
    ...i,
    resetBeforePlay: i.resetBeforePlay === "reload" ? "reload" : "none",
    reloadOnNavigate: !!i.reloadOnNavigate,
    resetBeforePlayDelay: Math.max(0, Number(i.resetBeforePlayDelay) || t.resetBeforePlayDelay),
    pageSettleAfterClick: Object.prototype.hasOwnProperty.call(i, "pageSettleAfterClick") ? !!i.pageSettleAfterClick : !!t.pageSettleAfterClick,
    pageSettleTimeout: Math.max(0, Number(i.pageSettleTimeout) || t.pageSettleTimeout),
    pageSettleAppearGraceMs: Math.max(0, Number(
      Object.prototype.hasOwnProperty.call(i, "pageSettleAppearGraceMs") ? i.pageSettleAppearGraceMs : t.pageSettleAppearGraceMs
    ) || 0),
    postReadyDelay: Math.max(0, Number(
      Object.prototype.hasOwnProperty.call(i, "postReadyDelay") ? i.postReadyDelay : t.postReadyDelay
    ) || 0),
    loadingSelectors: Yi(
      Object.prototype.hasOwnProperty.call(i, "loadingSelectors") ? i.loadingSelectors : t.loadingSelectors
    ),
    theme: String(i.theme || t.theme).toLowerCase() === "light" ? "light" : "dark",
    editorAccountIds: ts(
      i.editorAccountIds ?? i.guiderAccounts ?? t.editorAccountIds
    ),
    bypassPin: en(
      Object.prototype.hasOwnProperty.call(i, "bypassPin") ? i.bypassPin : t.bypassPin,
      t.bypassPin
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(i, "showAccountId") ? !!i.showAccountId : !!t.showAccountId,
    showOrb: Object.prototype.hasOwnProperty.call(i, "showOrb") ? !!i.showOrb : Object.prototype.hasOwnProperty.call(i, "showLauncher") ? !!i.showLauncher : !!t.showOrb,
    hiddenUrls: es(
      i.hiddenUrls ?? i.hiddenRoutes ?? t.hiddenUrls
    ),
    launcher: sn(i.launcher),
    ui: be(n)
  };
}
function de(i = {}) {
  const t = Pt(i), e = t.ui, s = t.theme === "light" ? "light" : "dark", n = document.documentElement;
  return n && (n.dataset.sgTheme = s, n.style.setProperty("--sg-tip-bg", e.tipBg), n.style.setProperty("--sg-tip-text", e.tipText), n.style.setProperty("--sg-skip-bg", e.skipBg), n.style.setProperty("--sg-skip-text", e.skipText), n.style.setProperty("--sg-spotlight", e.spotlightColor), n.style.setProperty("--sg-overlay-opacity", String(e.overlayOpacity)), n.style.setProperty("--sg-spotlight-ms", `${e.transitionMs}ms`), n.style.setProperty("--sg-font-family", Pi[e.fontFamily] || Pi.system), n.dataset.sgAnimations = e.animations ? "on" : "off", n.dataset.sgHighlightMotion = e.highlightMotion, n.dataset.sgSpotlightFade = e.spotlightFade ? "on" : "off"), e;
}
const nn = [
  ".sg-panel",
  ".sg-overlay",
  ".sg-launcher",
  ".sg-recording-indicator",
  ".sg-target-picker",
  ".modal-backdrop"
].join(", "), rn = [
  "html",
  "body",
  "#app",
  "#root",
  "#__next",
  "#content",
  "main",
  "header",
  "footer",
  "aside",
  "nav.navbar",
  ".navbar",
  ".sidebar",
  ".main-sidebar",
  ".content-wrapper",
  ".container-fluid",
  ".wrapper",
  "[data-inertia]"
].join(", "), ni = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  '[role="button"]',
  '[role="combobox"]',
  '[role="link"]',
  ".p-dropdown",
  ".p-multiselect",
  ".p-autocomplete",
  ".p-cascadeselect",
  ".p-button",
  ".nav-link",
  "[data-guider]",
  Fe
].join(", ");
function is(i) {
  var s, n, r, o, a, l;
  if (!(i instanceof Element)) return "";
  const t = ((s = i.getAttribute) == null ? void 0 : s.call(i, "aria-label")) || ((n = i.getAttribute) == null ? void 0 : n.call(i, "placeholder")) || ((r = i.getAttribute) == null ? void 0 : r.call(i, "title")) || "";
  if (t) return String(t).trim().slice(0, 48);
  if ((o = i.matches) != null && o.call(i, 'button, a, [role="button"], .p-button, label') || $t(i)) {
    if ($t(i)) {
      const d = (a = i.querySelector) == null ? void 0 : a.call(
        i,
        'h1, h2, h3, h4, h5, .day-name, .card-title, [class*="card-title"]'
      ), u = String((d == null ? void 0 : d.textContent) || "").replace(/\s+/g, " ").trim();
      if (u) return u.slice(0, 48);
    }
    const c = i.cloneNode(!0);
    return (l = c.querySelectorAll) == null || l.call(c, 'script, style, svg, img, .badge, .p-badge, [aria-hidden="true"]').forEach((d) => d.remove()), String(c.textContent || "").replace(/\s+/g, " ").trim().slice(0, 48);
  }
  const e = i.getAttribute("name") || "";
  return e || "";
}
function on(i) {
  const t = i.tagName.toLowerCase(), e = i.getAttribute("name") || "", s = i.id && !ye(i.id) ? i.id : "", n = i.getAttribute("data-guider") || "", r = i.getAttribute("href") || "", o = [...i.classList].filter((c) => !/^(p-focus|p-inputtext|p-placeholder|active|open|show|p-component)$/i.test(c)).slice(0, 2), a = [t];
  n ? a.push(`[data-guider="${n}"]`) : e ? a.push(`[name="${e}"]`) : s ? a.push(`#${s}`) : o.length && a.push(`.${o.join(".")}`), r && r !== "#" && a.push(r.slice(0, 32));
  const l = is(i);
  return {
    title: a.join(""),
    detail: l && l.toLowerCase() !== e.toLowerCase() ? l : e || s || n || ""
  };
}
function fe(i) {
  var e;
  if (!(i instanceof Element) || i === document.body || i === document.documentElement || (e = i.matches) != null && e.call(i, rn)) return !0;
  const t = (i.id || "").toLowerCase();
  return !!["app", "root", "content", "__next", "main", "wrapper"].includes(t);
}
function me(i, t) {
  var r, o;
  if (!(i instanceof Element)) return !0;
  const e = (r = i.getBoundingClientRect) == null ? void 0 : r.call(i);
  if (!e) return !0;
  const s = Math.max(window.innerWidth || 0, 1), n = Math.max(window.innerHeight || 0, 1);
  if (e.width >= s * 0.85 && e.height >= n * 0.55 || e.width * e.height >= s * n * 0.45) return !0;
  if (t instanceof Element) {
    const a = (o = t.getBoundingClientRect) == null ? void 0 : o.call(t);
    if (a && a.width > 0 && a.height > 0 && e.width * e.height / (a.width * a.height) > 40)
      return !0;
  }
  return !1;
}
function an(i, t) {
  var e;
  if (!(i instanceof Element) || fe(i) || me(i, t)) return !1;
  if (i.getAttribute("data-guider") || i.getAttribute("name") || $t(i) || (e = i.matches) != null && e.call(i, ".field, .form-group, .p-field, .p-float-label, .mb-0, .input-group, .btn-group"))
    return !0;
  if (i.id && !ye(i.id)) {
    const s = i.getBoundingClientRect();
    if (s.width <= 480 && s.height <= 320) return !0;
  }
  return !1;
}
function ln(i, t, { interactive: e = null, raw: s = null } = {}) {
  var a, l, c, d, u, h, p;
  let n = 0;
  if (!(i instanceof Element) || fe(i)) return -999;
  e && i === e && (n += 140), s && i === s && ((a = i.matches) != null && a.call(i, ni)) && (n += 120), (l = i.matches) != null && l.call(i, ni) && (n += 50), i.getAttribute("data-guider") && (n += 100), i.id && !ye(i.id) && (n += 35), i.getAttribute("name") && (n += 95);
  const r = Vi(i);
  r && (n += 55, i.getAttribute("name") === r && (n += 25)), (c = i.matches) != null && c.call(i, 'a[href]:not([href="#"])') && (n += 40), (d = i.matches) != null && d.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect, .p-button") && (n += 45), (u = i.matches) != null && u.call(i, "input, textarea, select, button") && (n += 40), (h = i.matches) != null && h.call(i, "a.nav-link, .nav-link") && (n += 35), (p = i.matches) != null && p.call(i, ".branch-card, .day-column, [data-guider-tile]") ? n += 70 : $t(i) && (n += 40), De(t) && (n -= 25), me(i, e || s) && (n -= 120);
  const o = is(i);
  return o && o.length <= 40 && (n += 8), n;
}
function cn(i, { interactive: t = null } = {}) {
  var u;
  if (!(i instanceof Element)) return [];
  const e = t instanceof Element ? t : i, s = Ni(i) || Ni(e), n = Zt(i) || Zt(e), r = /* @__PURE__ */ new Set(), o = [], a = (h) => {
    var f;
    if (!(h instanceof Element) || r.has(h) || h === document.body || h === document.documentElement || fe(h) || me(h, e) && h !== e && h !== i || (f = h.closest) != null && f.call(h, nn) || it(h)) return;
    const p = ei(h);
    if (!p) return;
    r.add(h);
    const g = on(h);
    o.push({
      element: h,
      selector: p,
      title: g.title,
      detail: g.detail,
      score: ln(h, p, { interactive: e, raw: i }),
      fragile: De(p)
    });
  };
  n && a(n), a(e), i !== e && ((u = i.matches) != null && u.call(i, ni)) && a(i), s && !fe(s) && !me(s, e) && a(s);
  let l = e.parentElement || i.parentElement;
  for (let h = 0; h < 6 && l && !(fe(l) || me(l, e)); h += 1)
    an(l, e) && a(l), l = l.parentElement;
  o.sort((h, p) => p.score - h.score);
  let c = o.slice(0, 6);
  if (!c.length && e && (a(e), c = o.slice(0, 1)), !c.length) return [];
  const d = c[0].score;
  return c.map((h, p) => ({
    ...h,
    suggested: p === 0 && d >= 40
  }));
}
const Nt = 'input:not([type="password"]), textarea, select', ss = [
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
].join(", "), dn = [
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
].join(", "), un = [
  ".p-datepicker-prev",
  ".p-datepicker-next",
  ".p-datepicker-prev-icon",
  ".p-datepicker-next-icon",
  ".p-datepicker-header",
  ".p-datepicker-title",
  ".p-datepicker-month",
  ".p-datepicker-year",
  ".p-datepicker-buttonbar"
].join(", "), Ii = [
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
].join(", "), bt = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect", $e = [
  ".p-dropdown-panel",
  ".p-multiselect-panel",
  ".p-autocomplete-panel",
  ".p-cascadeselect-panel"
].join(", ");
function ns(i) {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(i) : String(i).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function tt(i) {
  return i instanceof Element ? i.matches(bt) ? i : i.closest(bt) : null;
}
function hn(i) {
  var s;
  const t = (s = i.labels) == null ? void 0 : s[0];
  if (!t) return "";
  const e = t.cloneNode(!0);
  return e.querySelectorAll("input, select, textarea, button").forEach((n) => n.remove()), e.textContent.trim();
}
function pn(i) {
  var n;
  const t = tt(i) || i, e = ((n = t.closest) == null ? void 0 : n.call(t, '.p-float-label, .form-group, .mb-1, .mb-3, .col, [class*="form-group"]')) || t.parentElement;
  if (!(e instanceof Element)) return "";
  const s = e.querySelector(":scope > label, label");
  return s instanceof Element ? s.textContent.trim().replace(/\s+/g, " ") : "";
}
function ri(i) {
  if (!(i instanceof Element)) return "";
  const t = i.cloneNode(!0);
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
function rs(i) {
  return String(i || "").replace(/\s+/g, " ").replace(/\s+\d+$/, "").trim().slice(0, 80);
}
function gn(i) {
  const t = String(i || "").trim();
  if (!t || t.length < 2 || /^(div|span|button|a|input|select|svg|path|g|rect|li|ul|td|th|tr|table|canvas)$/i.test(t) || /^(click|submit|button|link|here|null|undefined)$/i.test(t)) return !0;
  const e = t.replace(/\D/g, "");
  return !!(e.length >= 8 && e.length >= t.replace(/\s/g, "").length * 0.7 || !/\s/.test(t) && t.length > 28 || /^[.#\[]/.test(t) || /[{};>]/.test(t) || (t.match(/\b20\d{2}\b/g) || []).length >= 3);
}
function vt(i) {
  const t = rs(i);
  return gn(t) ? "" : t;
}
function oi(i) {
  var s, n, r, o, a, l;
  if (!(i instanceof Element)) return "";
  const t = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "legend",
    "figcaption",
    ".card-title",
    ".card-header",
    ".panel-title",
    ".modal-title",
    '[class*="card-title"]',
    '[class*="chart-title"]',
    '[class*="section-title"]',
    "[data-guider-label]"
  ].join(", ");
  let e = i;
  for (let c = 0; c < 10 && e; c += 1) {
    const d = (s = e.getAttribute) == null ? void 0 : s.call(e, "aria-labelledby");
    if (d) {
      const g = document.getElementById(d.split(/\s+/)[0]), f = vt(g == null ? void 0 : g.textContent);
      if (f) return f;
    }
    const u = (n = e.getAttribute) == null ? void 0 : n.call(e, "data-guider-label");
    if (u) {
      const g = vt(u);
      if (g) return g;
    }
    let h = e.previousElementSibling;
    for (; h; ) {
      if ((r = h.matches) != null && r.call(h, t)) {
        const f = vt(h.textContent);
        if (f) return f;
      }
      const g = (o = h.querySelector) == null ? void 0 : o.call(h, t);
      if (g) {
        const f = vt(g.textContent);
        if (f) return f;
      }
      h = h.previousElementSibling;
    }
    const p = (l = (a = e.parentElement) == null ? void 0 : a.querySelector) == null ? void 0 : l.call(
      a,
      ":scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > .card-title, :scope > .card-header"
    );
    if (p && !p.contains(i)) {
      const g = vt(p.textContent);
      if (g) return g;
    }
    e = e.parentElement;
  }
  return "";
}
function gi(i) {
  return i instanceof Element ? !!i.closest([
    "canvas",
    "svg",
    ".chart",
    ".chartjs",
    '[class*="chart"]',
    '[class*="Chart"]',
    ".apexcharts-canvas",
    ".highcharts-container",
    ".recharts-wrapper",
    '[class*="legend"]'
  ].join(", ")) : !1;
}
function fn(i) {
  return !(i instanceof Element) || !It(i) ? "" : vt(ri(i) || i.textContent);
}
function $i(i) {
  var t, e, s, n, r;
  return i instanceof Element ? (t = i.matches) != null && t.call(i, 'input[type="checkbox"], input[type="radio"]') ? i : ((n = (s = (e = i.closest) == null ? void 0 : e.call(i, ".p-checkbox, .p-radiobutton")) == null ? void 0 : s.querySelector) == null ? void 0 : n.call(s, 'input[type="checkbox"], input[type="radio"]')) || ((r = i.querySelector) == null ? void 0 : r.call(i, 'input[type="checkbox"], input[type="radio"]')) || null : null;
}
function mn(i) {
  var a, l, c, d, u, h, p;
  const t = tt(i), e = vt(pn(i));
  if (e) return e;
  const s = Zt(i);
  if (s) {
    const g = vt((l = (a = s.querySelector) == null ? void 0 : a.call(s, ".day-date")) == null ? void 0 : l.textContent);
    if (g && g !== "—") return g;
    const f = vt(
      (d = (c = s.querySelector) == null ? void 0 : c.call(s, "h1, h2, h3, h4, h5, .card-title")) == null ? void 0 : d.textContent
    );
    if (f) return f;
    const m = vt((h = (u = s.querySelector) == null ? void 0 : u.call(s, ".day-name")) == null ? void 0 : h.textContent);
    if (m && m !== "—") return m;
    const y = vt(ri(s));
    if (y && y !== "—") return y;
  }
  const n = i.matches("input, textarea, select"), r = !n && !t ? vt(ri(i)) : "";
  if (r) return r;
  const o = [
    t ? "" : i.getAttribute("aria-label"),
    i.getAttribute("title"),
    hn(i),
    n ? i.getAttribute("placeholder") : "",
    i.getAttribute("placeholder"),
    i.getAttribute("name"),
    i.getAttribute("data-guider-label"),
    // Skip section headings for tiles — they steal labels ("BRANCH").
    s ? "" : oi(i),
    (p = t == null ? void 0 : t.matches) != null && p.call(t, ".p-autocomplete") ? "Search" : "",
    t ? "Dropdown" : ""
  ];
  for (const g of o) {
    const f = vt(g);
    if (f) return f;
  }
  return gi(i) ? oi(i) || "chart" : "";
}
function Re(i) {
  const t = rs(i);
  return t ? /^[A-Z0-9\s\-_/]+$/.test(t) && t.length <= 24 ? t : t.charAt(0).toUpperCase() + t.slice(1) : "";
}
function yn({
  label: i,
  choiceField: t,
  isNativeField: e,
  action: s,
  element: n,
  optionText: r = ""
}) {
  var l, c, d, u, h;
  const o = Re(i), a = Re(r);
  if (Se(n) || n && Ft(n))
    return o && !/^date|calendar$/i.test(o) ? `Pick a date for ${o}` : "Pick a date";
  if (t)
    return a && o ? `Select ${o}: ${a}` : a ? `Choose “${a}”` : o ? `Select ${o}` : "Choose a value";
  if (e) {
    const p = (((l = n == null ? void 0 : n.getAttribute) == null ? void 0 : l.call(n, "type")) || "").toLowerCase();
    return p === "checkbox" || p === "radio" ? o ? `Toggle ${o}` : "Toggle this option" : (c = n == null ? void 0 : n.matches) != null && c.call(n, "textarea") ? o ? `Fill in ${o}` : "Enter details" : o ? `Enter ${o}` : "Enter a value";
  }
  return s === "click" || s === "input" ? gi(n) ? o && o.toLowerCase() !== "chart" ? `Interact with ${o}` : "Interact with the chart" : (d = n == null ? void 0 : n.matches) != null && d.call(n, 'a, [role="link"]') || (u = n == null ? void 0 : n.closest) != null && u.call(n, "a[href]") ? o ? `Go to ${o}` : "Follow this link" : (h = n == null ? void 0 : n.matches) != null && h.call(n, 'button, [role="button"], input[type="submit"], input[type="button"]') ? /^(save|submit|continue|next|confirm|apply|search|login|sign in)$/i.test(o) ? o : o ? `Click ${o}` : "Click this button" : o ? `Click ${o}` : "Click here" : o || "Continue";
}
function bn({
  title: i,
  label: t,
  choiceField: e,
  isNativeField: s,
  element: n,
  optionText: r = ""
}) {
  var d, u, h;
  const o = Re(t), a = Re(r), l = oi(n);
  if (Se(n) || n && Ft(n))
    return "Choose a day on the calendar to continue.";
  if (e && a)
    return o ? `Pick “${a}” from ${o}.` : `Pick “${a}” from the list.`;
  if (e)
    return o ? `Open ${o} and choose a value.` : "Open the dropdown and choose a value.";
  if (s) {
    const p = (((d = n == null ? void 0 : n.getAttribute) == null ? void 0 : d.call(n, "type")) || "").toLowerCase();
    return p === "checkbox" || p === "radio" ? o ? `Check or uncheck ${o}.` : "Toggle this option." : o ? `Type the value for ${o}.` : "Type a value in this field.";
  }
  if (gi(n))
    return `Use ${o && o.toLowerCase() !== "chart" ? o : l || "the chart"} to continue to the next step.`;
  if ((u = n == null ? void 0 : n.matches) != null && u.call(n, 'a, [role="link"]') || (h = n == null ? void 0 : n.closest) != null && h.call(n, "a[href]"))
    return o ? `Open ${o} to move forward.` : "Follow this link to continue.";
  const c = String(i || "").replace(/^(click|select|enter|choose|go to|interact with|toggle|pick|fill in)\s+/i, "").trim();
  return o && c && o.toLowerCase() === c.toLowerCase() ? "" : l && o && l.toLowerCase() !== o.toLowerCase() ? `In ${l}, continue with ${o}.` : "";
}
function It(i) {
  var t;
  return !!((t = i == null ? void 0 : i.closest) != null && t.call(i, ss));
}
function Se(i) {
  return i instanceof Element ? !!i.closest([
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
function Sn(i) {
  return !(i instanceof Element) || Se(i) ? !1 : !!i.closest(un);
}
function Ft(i) {
  if (!(i instanceof Element)) return !1;
  if (i instanceof HTMLInputElement && (["date", "datetime-local", "time", "month", "week"].includes(i.type) || i.getAttribute("inputmode") === "none" || /date|time/i.test(i.name || "") || /date|time/i.test(i.id || "") || i.className.toLowerCase().includes("date")) || i.closest(".p-calendar, .p-datepicker-trigger")) return !0;
  const t = i.closest(dn);
  return t ? /date|time|calendar|picker/i.test(t.className) ? !0 : !!t.querySelector('button, [class*="calendar"], table, .flatpickr-calendar, .dp__menu') : !1;
}
function Ri(i) {
  var l, c, d;
  if (!(i instanceof Element)) return null;
  const t = document.querySelectorAll(
    '.p-calendar input[aria-expanded="true"], .p-calendar [aria-expanded="true"], input[aria-expanded="true"]'
  );
  for (const u of t) {
    if (!(u instanceof Element) || it(u)) continue;
    const h = u.closest(".p-calendar") || u, p = (l = h.matches) != null && l.call(h, "input") ? h : (c = h.querySelector) == null ? void 0 : c.call(h, 'input:not([type="hidden"])');
    if (p && !it(p)) return p;
  }
  const e = document.querySelector(".p-calendar.p-inputwrapper-focus, .p-calendar.p-focus, .p-calendar.p-overlay-open");
  if (e) {
    const u = e.querySelector('input:not([type="hidden"])');
    if (u && !it(u)) return u;
  }
  const s = document.activeElement;
  if (s instanceof HTMLInputElement && Ft(s) && !it(s))
    return s;
  const r = [...(document.querySelector('.p-overlaypanel, .modal.show, [role="dialog"]') || document.body).querySelectorAll('input:not([type="hidden"]):not([type="password"])')].filter((u) => Ft(u) && !it(u));
  if (!r.length) return null;
  const o = ((d = i.getBoundingClientRect) == null ? void 0 : d.call(i).top) ?? 0, a = r.map((u) => ({ node: u, top: u.getBoundingClientRect().top })).filter((u) => u.top <= o + 8).sort((u, h) => h.top - u.top)[0];
  return (a == null ? void 0 : a.node) || r[0] || null;
}
function Dt(i) {
  return i instanceof Element ? !!(i instanceof HTMLSelectElement || Ft(i) || tt(i) || i.closest($e) || i.matches('[role="combobox"], [aria-autocomplete], [aria-haspopup="listbox"]') || i.getAttribute("aria-expanded") != null || i.closest('[role="combobox"]')) : !1;
}
function Oe(i) {
  if (!i) return null;
  const t = tt(i);
  if (t) return t;
  if (i.matches(Nt) || i.matches('[role="combobox"]')) return i;
  const e = i.querySelector(`${Nt}, [role="combobox"]`);
  return tt(e) || e;
}
function ai(i) {
  if (!(i instanceof Element)) return null;
  const t = i.querySelector('[role="listbox"], .p-dropdown-items, .p-multiselect-items, .p-autocomplete-items'), e = (t == null ? void 0 : t.id) || i.id;
  if (e) {
    const n = ns(e), r = ui(`[aria-controls="${n}"], [aria-owns="${n}"]`), o = tt(r) || Oe(r);
    if (o) return tt(o) || o;
  }
  const s = document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-dropdown.p-inputwrapper-focus",
    ".p-multiselect.p-overlay-open",
    ".p-multiselect.p-inputwrapper-focus",
    ".p-autocomplete.p-focus",
    `${bt} [aria-expanded="true"]`,
    `${bt}[aria-expanded="true"]`
  ].join(", "));
  return tt(s);
}
function ti(i) {
  var t;
  return (t = i == null ? void 0 : i.closest) == null ? void 0 : t.call(i, [
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
function ft(i) {
  var u, h, p;
  if (!(i instanceof Element)) return null;
  const t = tt(i);
  if (t) return t;
  if (Se(i)) {
    const g = i.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .ant-picker-dropdown, .p-datepicker-panel"), f = Ri(g || i);
    if (f) return f;
  }
  const e = i.closest($e);
  if (e) {
    const g = ai(e);
    if (g) return g;
  }
  const s = i.closest(".p-calendar");
  if (s) {
    const g = s.querySelector('input:not([type="hidden"])');
    if (g) return g;
  }
  if (i.matches(Nt)) return i;
  const n = i.closest(Nt);
  if (n) return n;
  const r = i.matches('[role="combobox"]') ? i : i.closest('[role="combobox"]');
  if (r) return tt(r) || r;
  const o = i.closest(ss);
  if (o) {
    if (Se(o)) {
      const b = Ri(
        o.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .p-datepicker-panel") || o
      );
      if (b) return b;
    }
    const g = ai(o.closest($e) || o.closest(Ii));
    if (g) return g;
    const f = document.activeElement;
    if (f instanceof Element && (f.matches(Nt) || f.matches('[role="combobox"]') || tt(f)) && !it(f))
      return tt(f) || f;
    const m = o.closest(Ii);
    if (m != null && m.id) {
      const b = ns(m.id), k = ui(`[aria-controls="${b}"], [aria-owns="${b}"]`), C = Oe(k);
      if (C) return C;
    }
    const y = document.querySelector(
      `${bt} [aria-expanded="true"], ${bt}[aria-expanded="true"], [aria-expanded="true"]`
    ), S = Oe(y);
    if (S && !it(S)) return S;
    const w = ti(m) || ti(o) || ti(y);
    if (w) {
      const b = w.querySelector(bt);
      if (b && !it(b)) return b;
      const k = w.querySelector(`select, ${Nt}, [role="combobox"]`);
      if (k && !it(k)) return tt(k) || k;
    }
    const x = [...((m == null ? void 0 : m.closest('.modal.show, .modal, [role="dialog"], .p-overlaypanel, form')) || document.body).querySelectorAll(`${bt}, select, [role="combobox"]`)].filter((b) => !it(b)).map((b) => tt(b) || b);
    if (x.length) {
      const b = ((u = m == null ? void 0 : m.getBoundingClientRect) == null ? void 0 : u.call(m).top) ?? o.getBoundingClientRect().top, k = x.map((C) => ({ node: C, top: C.getBoundingClientRect().top })).filter((C) => C.top <= b + 8).sort((C, T) => T.top - C.top)[0];
      if (k) return k.node;
    }
  }
  const a = i.closest(".p-calendar, .input-group, .date, .mx-datepicker, .vdatetime, .flatpickr-wrapper, .dp__main");
  if (a) {
    const g = a.querySelector(Nt);
    if (g) return g;
  }
  const l = i.closest(
    `button, a, [role="button"], input, select, textarea, [role="combobox"], ${bt}, [data-guider]`
  );
  if (l) return l;
  const c = Zt(i);
  if (c) return c;
  const d = (h = i.closest) == null ? void 0 : h.call(
    i,
    ".field, .form-group, .p-field, .p-float-label, .mb-0, .input-group, .p-calendar"
  );
  if (d) {
    const g = (p = d.querySelector) == null ? void 0 : p.call(
      d,
      `${bt}, input:not([type="hidden"]), textarea, select, button, a`
    );
    if (g) return tt(g) || g;
  }
  return i;
}
function vn(i = document) {
  const t = [
    ...i.querySelectorAll(`${bt}, select, [role="combobox"], input:not([type="hidden"]):not([type="password"]), textarea`)
  ], e = /* @__PURE__ */ new Set();
  return t.map((s) => tt(s) || s).filter((s) => {
    if (e.has(s) || it(s)) return !1;
    e.add(s);
    const n = getComputedStyle(s);
    if (n.display === "none" || n.visibility === "hidden") return !1;
    const r = s.getBoundingClientRect();
    return r.width >= 2 && r.height >= 2;
  });
}
function re() {
  const i = ai(document.querySelector($e)) || tt(document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-multiselect.p-overlay-open",
    `${bt} [aria-expanded="true"]`,
    `${bt}[aria-expanded="true"]`
  ].join(", ")));
  if (i && !it(i)) return i;
  const t = document.querySelector('[aria-expanded="true"]'), e = Oe(t);
  if (e && !it(e)) return e;
  const s = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show, .p-overlaypanel');
  if (!s) return null;
  const n = document.activeElement;
  return n instanceof Element && s.contains(n) && (n.matches(Nt) || n.matches('[role="combobox"]') || tt(n)) && !it(n) ? tt(n) || n : null;
}
class wn {
  constructor({ onStep: t } = {}) {
    this.onStep = t, this.active = !1, this.lastKey = "", this.lastAt = 0, this.lastToggleEl = null, this.onClick = this.onClick.bind(this), this.onFocus = this.onFocus.bind(this);
  }
  start() {
    this.stop(), this.active = !0, this.lastKey = "", this.lastAt = 0, this.lastToggleEl = null, document.addEventListener("click", this.onClick, !0), document.addEventListener("focusin", this.onFocus, !0);
  }
  stop() {
    this.active = !1, document.removeEventListener("click", this.onClick, !0), document.removeEventListener("focusin", this.onFocus, !0);
  }
  shouldIgnore(t) {
    return !this.active || !(t instanceof Element) || it(t) || !!t.closest(".sg-panel, .sg-overlay, .sg-launcher, .sg-recording-indicator, .sg-target-picker");
  }
  buildSelectorAlternatives(t, e) {
    const s = ft(e) || e, n = cn(t, { interactive: s }), r = [], o = /* @__PURE__ */ new Set(), a = (l, c = {}) => {
      if (!(l instanceof Element)) return null;
      const d = c.selector || ei(l);
      if (!d || o.has(d)) return null;
      o.add(d);
      const u = Mi(l), h = {
        selector: d,
        label: c.title || c.detail || d,
        title: c.title || "",
        detail: c.detail || "",
        suggested: !!c.suggested,
        element: l,
        ...u ? { match: u } : {}
      };
      return r.push(h), h;
    };
    return n.length ? n.forEach((l, c) => {
      a(l.element, {
        ...l,
        suggested: l.suggested || c === 0
      });
    }) : a(e, { suggested: !0 }), r.length && !r.some((l) => l.suggested) && (r[0].suggested = !0), r;
  }
  commitCapture(t, e, s = t) {
    var C, T, L, B, j;
    if (!(t instanceof Element) || !t.isConnected || it(t)) return;
    const n = e === "click" && It(s);
    let r = ft(t) || t;
    if (!r || it(r)) return;
    if (!ft(t) && t.querySelector) {
      const M = t.querySelector(
        `${bt}, input:not([type="hidden"]), textarea, select`
      );
      M && (r = tt(M) || M);
    }
    const o = this.buildSelectorAlternatives(s, r), a = o.find((M) => M.suggested) || o[0];
    (a == null ? void 0 : a.element) instanceof Element && (r = a.element);
    const l = (a == null ? void 0 : a.selector) || ei(r);
    if (!l) return;
    const c = r.matches(Nt), d = $i(s) || $i(r), u = Dt(r) || n, h = c || n || u ? "input" : e, p = Date.now(), g = `${h}:${l}`, f = h === "input" && g === this.lastKey, m = g === this.lastKey && p - this.lastAt < 300, y = !!(d && this.lastToggleEl && (this.lastToggleEl === d || (T = (C = this.lastToggleEl).contains) != null && T.call(C, d) || (L = d.contains) != null && L.call(d, this.lastToggleEl)) && p - this.lastAt < 600);
    if (f || m || y) return;
    this.lastKey = g, this.lastAt = p, this.lastToggleEl = d || null;
    const S = mn(r), w = n ? fn(s) : "", _ = yn({
      label: S,
      choiceField: u,
      isNativeField: c,
      action: h,
      element: r,
      optionText: w
    }), x = bn({
      title: _,
      label: S,
      choiceField: u,
      isNativeField: c,
      element: r,
      optionText: w
    }), b = (a == null ? void 0 : a.match) || Mi(r), k = o.map(({ selector: M, label: A, title: P, detail: $, suggested: q, match: D }) => ({
      selector: M,
      label: A,
      title: P,
      detail: $,
      suggested: q,
      ...D ? { match: D } : {}
    }));
    this.onStep({
      id: ((j = (B = globalThis.crypto) == null ? void 0 : B.randomUUID) == null ? void 0 : j.call(B)) || `step-${p}-${Math.random().toString(36).slice(2, 7)}`,
      selector: l,
      ...b ? { match: b } : {},
      ...k.length > 1 ? { selectorAlternatives: k } : {},
      action: h,
      title: _,
      description: x,
      waitFor: c || n || u ? {
        type: "input",
        required: !0,
        mode: u || n ? "interaction" : "value"
      } : null
    });
  }
  capture(t, e) {
    this.shouldIgnore(t) || this.commitCapture(t, e, t);
  }
  onClick(t) {
    const e = t.target instanceof Element ? t.target : null;
    if (!e || this.shouldIgnore(e) || typeof t.button == "number" && t.button !== 0 || e instanceof HTMLSelectElement && !It(e) || Sn(e)) return;
    if (It(e)) {
      this.capture(e, "click");
      return;
    }
    const s = ft(e);
    !s || it(s) || this.commitCapture(s, "click", e);
  }
  onFocus(t) {
    var s;
    const e = t.target;
    if ((s = e == null ? void 0 : e.matches) != null && s.call(e, Nt) && !this.shouldIgnore(e) && !e.matches('input[type="checkbox"], input[type="radio"]') && !(e instanceof HTMLSelectElement)) {
      if (Ft(e)) {
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
const kn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>', _n = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>', Cn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>', xn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>', Ue = [
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
].join(", "), fi = [
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
].join(", "), os = [
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
function li(i) {
  if (!(i instanceof HTMLElement) || i.closest(".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip")) return !1;
  const t = getComputedStyle(i);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = i.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function Ge(i) {
  var n;
  if (!(i instanceof Element)) return !1;
  const t = i.getBoundingClientRect(), s = ((n = i.matches) == null ? void 0 : n.call(
    i,
    ".p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel, .p-cascadeselect-panel"
  )) ? 900 : 520;
  if (t.width > s || t.height > s || i.matches('.p-overlaypanel, .modal, .modal-dialog, .modal-content, [class*="overlay-custom"], .offcanvas') || i.matches(".modal, .modal.show, .modal-dialog, .modal-content")) return !1;
  if (i.closest(".modal.show, .modal") && !i.matches('.dropdown-menu, .datepicker-dropdown, [class*="picker"], [class*="calendar"], .p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel')) {
    const r = getComputedStyle(i);
    if (r.position !== "absolute" && r.position !== "fixed") return !1;
  }
  return !0;
}
function En(i) {
  if (!(i instanceof Element)) return null;
  const t = i.closest(os);
  if (t && Ge(t)) return t;
  const e = i.closest('table, [role="grid"]');
  return e && e.querySelector(Ue) && Ge(e) ? e : null;
}
function Tn(i) {
  if (!(i instanceof Element)) return [];
  const t = i.getBoundingClientRect();
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
  ].join(", "))].filter((s) => {
    var l;
    if (!li(s) || !Ge(s) || s === i || i.contains(s) || !(s.matches(os) || !!((l = s.querySelector) != null && l.call(s, Ue))) && !s.matches(fi)) return !1;
    const r = s.getBoundingClientRect(), o = r.top >= t.top - 48 && r.top <= t.bottom + 380, a = r.left < t.right + 140 && r.right > t.left - 140;
    return o && a;
  });
}
function Oi(i = null) {
  const t = /* @__PURE__ */ new Set(), e = (s) => {
    var c;
    if (!(i instanceof Element)) return !0;
    const n = i.getBoundingClientRect(), r = s.getBoundingClientRect(), o = r.top >= n.top - 64 && r.top <= n.bottom + 420, a = r.left < n.right + 220 && r.right > n.left - 220;
    if (o && a) return !0;
    const l = [s.id];
    return (c = s.querySelectorAll) == null || c.call(s, "[id]").forEach((d) => {
      d.id && l.push(d.id);
    }), l.some((d) => {
      var p, g;
      if (!d) return !1;
      const u = ((g = (p = globalThis.CSS) == null ? void 0 : p.escape) == null ? void 0 : g.call(p, d)) || d.replace(/"/g, '\\"'), h = document.querySelector(`[aria-controls="${u}"], [aria-owns="${u}"]`);
      return !!(h && (i === h || i.contains(h) || h.contains(i)));
    });
  };
  return document.querySelectorAll(fi).forEach((s) => {
    !li(s) || !Ge(s) || e(s) && t.add(s);
  }), document.querySelectorAll(Ue).forEach((s) => {
    const n = En(s);
    n && li(n) && e(n) && t.add(n);
  }), i instanceof Element && Tn(i).forEach((s) => t.add(s)), [...t];
}
class An {
  constructor({
    overlayOpacity: t = 0.58,
    zIndex: e = 2147483e3,
    onSkip: s = null,
    onEnd: n = null,
    onPrev: r = null,
    skipLabel: o = "Next Step",
    prevLabel: a = "Prev",
    onHighlightBox: l = null,
    onTargetLost: c = null,
    ui: d = null
  } = {}) {
    this.opacity = t, this.zIndex = e, this.onSkip = s, this.onEnd = n, this.onPrev = r, this.skipLabel = o, this.prevLabel = a, this.onHighlightBox = l, this.onTargetLost = c, this.ui = be(d || { overlayOpacity: t }), this.root = null, this.frame = null, this.blocks = null, this.skipChip = null, this.goChip = null, this.onGo = null, this.stepTip = null, this.stepTipContent = null, this.guideCursor = null, this.cursorTimer = null, this.warningBanner = null, this.waitingBanner = null, this.controlsEnabled = !1, this.raf = null, this.target = null, this.highlightHost = null, this.blockOutside = !1, this.raisedTarget = null, this.previousTargetStyle = null, this.resizeObserver = null, this.menuObserver = null, this.menuWatchTimer = null, this.menuRefreshTimer = null, this.relayoutTimers = [], this.elevatedMenus = [], this.syncing = !1, this.targetLostNotified = !1, this.lastHighlightCenter = null, this.onViewportChange = () => this.scheduleLayout(), this.onBlockInteraction = (u) => {
      this.allowsInteractionAt(u.clientX, u.clientY) || (u.preventDefault(), u.stopPropagation());
    }, this.onSkipClick = (u) => {
      var h;
      u.preventDefault(), u.stopPropagation(), (h = this.onSkip) == null || h.call(this);
    }, this.onPrevClick = (u) => {
      var h;
      u.preventDefault(), u.stopPropagation(), (h = this.onPrev) == null || h.call(this);
    }, this.onEndClick = (u) => {
      var h;
      u.preventDefault(), u.stopPropagation(), (h = this.onEnd || this.onSkip) == null || h();
    }, this.onGoClick = (u) => {
      var h;
      u.preventDefault(), u.stopPropagation(), (h = this.onGo) == null || h.call(this);
    };
  }
  applyUiSettings(t) {
    this.ui = be(t || {}), this.opacity = this.ui.overlayOpacity, this.root && (this.root.style.setProperty("--sg-overlay-opacity", String(this.opacity)), this.syncSpotlightMotionClass());
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
  animateCursorTo(t, e, s) {
    return new Promise((n) => {
      var a;
      if (!this.motionsEnabled() || !((a = this.ui) != null && a.animatedCursor) || !t || !e) {
        n();
        return;
      }
      this.mountGuideCursor();
      const r = Math.max(0, Number(s) || this.ui.transitionMs || 220), o = this.guideCursor;
      o.hidden = !1, o.style.transition = "none", o.style.left = `${Math.round(t.x)}px`, o.style.top = `${Math.round(t.y)}px`, o.offsetWidth, o.style.transition = `left ${r}ms ease, top ${r}ms ease, opacity ${Math.max(120, r / 2)}ms ease`, o.style.left = `${Math.round(e.x)}px`, o.style.top = `${Math.round(e.y)}px`, clearTimeout(this.cursorTimer), this.cursorTimer = setTimeout(() => {
        this.hideGuideCursor(), n();
      }, r + 40);
    });
  }
  setSkipHandler(t) {
    this.onSkip = t;
  }
  setPrevHandler(t) {
    this.onPrev = t;
  }
  setControlsEnabled(t) {
    var e;
    this.controlsEnabled = !!t, this.controlsEnabled ? (this.mountSkipChip(), this.mountStepTip(), (e = this.root) != null && e.classList.contains("sg-overlay--visible") && this.target && this.scheduleLayout(), this.syncSkipChipVisibility()) : this.skipChip && (this.skipChip.hidden = !0, this.hideStepTip());
  }
  /**
   * Show floating Next Step only with a live spotlight, or while waiting/missing
   * (so the user can still Skip). Hide during bare step transitions to avoid flicker.
   */
  syncSkipChipVisibility() {
    var o;
    if (!this.controlsEnabled) {
      this.skipChip && (this.skipChip.hidden = !0);
      return;
    }
    if (this.mountSkipChip(), !!(this.stepTip && !this.stepTip.hidden)) {
      this.skipChip.hidden = !0;
      return;
    }
    const e = !!((o = this.root) != null && o.classList.contains("sg-overlay--visible") && this.target), s = !!(this.waitingBanner && !this.waitingBanner.hidden), n = !!(this.warningBanner && !this.warningBanner.hidden), r = e || s || n;
    this.skipChip.hidden = !r, r && !e && this.positionSkipChipFallback();
  }
  showWarning(t) {
    this.mount(), this.hideWaiting(), this.warningBanner || (this.warningBanner = document.createElement("div"), this.warningBanner.className = "sg-warning-banner", this.warningBanner.setAttribute("role", "alert"), document.body.append(this.warningBanner)), this.warningBanner.style.zIndex = String(this.zIndex + 40), this.warningBanner.textContent = String(t || "Target not found."), this.warningBanner.hidden = !1, this.syncSkipChipVisibility();
  }
  hideWarning() {
    this.warningBanner && (this.warningBanner.hidden = !0), this.syncSkipChipVisibility();
  }
  showWaiting(t, { seconds: e = null } = {}) {
    if (this.mount(), this.hideWarning(), this.waitingBanner || (this.waitingBanner = document.createElement("div"), this.waitingBanner.className = "sg-waiting-banner", this.waitingBanner.setAttribute("role", "status"), this.waitingBanner.setAttribute("aria-live", "polite"), document.body.append(this.waitingBanner)), this.waitingBanner.style.zIndex = String(this.zIndex + 40), this.waitingBanner.hidden = !1, e != null && Number.isFinite(Number(e))) {
      const n = Math.max(0, Math.ceil(Number(e))), r = this.waitingBanner.dataset.seconds;
      this.waitingBanner.dataset.seconds = String(n), this.waitingBanner.innerHTML = `
        <span class="sg-waiting-banner__label">Waiting</span>
        <span class="sg-waiting-banner__count">${n}</span>
        <span class="sg-waiting-banner__unit">s</span>
      `;
      const o = this.waitingBanner.querySelector(".sg-waiting-banner__count");
      o && r !== String(n) && (o.classList.remove("sg-waiting-banner__count--tick"), o.offsetWidth, o.classList.add("sg-waiting-banner__count--tick"));
    } else
      delete this.waitingBanner.dataset.seconds, this.waitingBanner.textContent = String(t || "Waiting…");
    this.syncSkipChipVisibility();
  }
  hideWaiting() {
    this.waitingBanner && (this.waitingBanner.hidden = !0, delete this.waitingBanner.dataset.seconds), this.syncSkipChipVisibility();
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
      const s = Number.parseFloat(this.frame.style.getPropertyValue("--sg-x")) || 0, n = Number.parseFloat(this.frame.style.getPropertyValue("--sg-y")) || 0, r = Number.parseFloat(this.frame.style.getPropertyValue("--sg-w")) || 0, o = Number.parseFloat(this.frame.style.getPropertyValue("--sg-h")) || 0;
      r > 0 && o > 0 && this.positionSkipChip(s, n, r, o);
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
    stepNumber: s = null,
    totalSteps: n = null,
    showPrev: r = !1
  } = {}) {
    this.mountStepTip();
    const o = String(t || "").trim(), a = String(e || "").trim(), l = Number.isFinite(Number(s)) ? Math.max(1, Number(s)) : null, c = Number.isFinite(Number(n)) ? Math.max(1, Number(n)) : null, d = !!r && typeof this.onPrev == "function";
    if (this.stepTipContent = {
      title: o,
      description: a,
      stepNumber: l,
      totalSteps: c,
      showPrev: d
    }, !o) {
      this.hideStepTip();
      return;
    }
    this.stepTip.replaceChildren(), this.skipChip && (this.skipChip.hidden = !0);
    const u = document.createElement("span");
    u.className = "sg-step-tip__arrow", u.setAttribute("aria-hidden", "true");
    const h = document.createElement("div");
    h.className = "sg-step-tip__header";
    const p = document.createElement("div");
    p.className = "sg-step-tip__badge", p.textContent = String(l || 1), p.setAttribute(
      "aria-label",
      c ? `Step ${l || 1} of ${c}` : `Step ${l || 1}`
    );
    const g = document.createElement("span");
    g.className = "sg-step-tip__counter", g.textContent = c ? `Step ${l || 1} of ${c}` : `Step ${l || 1}`;
    const f = document.createElement("button");
    f.type = "button", f.className = "sg-step-tip__close", f.setAttribute("aria-label", "End tutorial"), f.innerHTML = kn, f.addEventListener("click", this.onEndClick), h.append(p, g, f);
    const m = document.createElement("div");
    if (m.className = "sg-step-tip__title", m.textContent = o, this.stepTip.append(u, h, m), a) {
      const k = document.createElement("div");
      k.className = "sg-step-tip__description", k.textContent = a, this.stepTip.append(k);
    }
    const y = document.createElement("div");
    y.className = "sg-step-tip__divider";
    const S = document.createElement("div");
    S.className = "sg-step-tip__actions";
    const w = document.createElement("button");
    if (w.type = "button", w.className = "sg-step-tip__end", w.innerHTML = `${xn}<span>End Tutorial</span>`, w.addEventListener("click", this.onEndClick), S.append(w), d) {
      const k = document.createElement("button");
      k.type = "button", k.className = "sg-step-tip__prev", k.innerHTML = `${Cn}<span>${this.prevLabel || "Prev"}</span>`, k.addEventListener("click", this.onPrevClick), S.append(k);
    }
    const _ = document.createElement("button");
    _.type = "button", _.className = "sg-step-tip__next";
    const b = (c ? Number(l) >= Number(c) : !1) ? "Finish" : this.skipLabel || "Next Step";
    _.innerHTML = `<span>${b}</span>${_n}`, _.addEventListener("click", this.onSkipClick), S.append(_), this.stepTip.append(y, S), this.stepTip.hidden = !1;
  }
  hideStepTip() {
    this.stepTip && (this.stepTip.hidden = !0, this.stepTip.removeAttribute("data-arrow"), this.stepTip.style.removeProperty("--sg-arrow-offset"), this.stepTip.style.removeProperty("--sg-arrow-fill")), this.stepTipContent = null, this.syncSkipChipVisibility();
  }
  resolveStepTipFill() {
    const t = this.stepTip;
    if (!t) return "#0f1b33";
    const e = getComputedStyle(t).getPropertyValue("--sg-tip-bg").trim();
    if (e) return e;
    const s = getComputedStyle(document.documentElement).getPropertyValue("--sg-tip-bg").trim();
    if (s) return s;
    const n = getComputedStyle(t).backgroundColor;
    return n && n !== "rgba(0, 0, 0, 0)" && n !== "transparent" ? n : "#0f1b33";
  }
  /**
   * Point the tip caret toward the highlight box based on tip placement.
   */
  updateStepTipArrow(t, e, s, n) {
    if (!this.stepTip || this.stepTip.hidden) return;
    const r = this.stepTip, o = r.getBoundingClientRect(), a = o.left, l = o.top, c = o.width || r.offsetWidth || 220, d = o.height || r.offsetHeight || 48, u = a + c / 2, h = l + d / 2, p = t + s / 2, g = e + n / 2, f = a + c, m = l + d, y = t + s, S = e + n, w = {
      left: a - y,
      right: t - f,
      top: l - S,
      bottom: e - m
    };
    let _ = "left", x = -1 / 0;
    for (const [C, T] of Object.entries(w))
      T > x && (x = T, _ = C);
    if (x < 4) {
      const C = p - u, T = g - h;
      _ = Math.abs(C) >= Math.abs(T) ? C < 0 ? "left" : "right" : T < 0 ? "top" : "bottom";
    }
    const b = 18;
    let k = 0;
    _ === "left" || _ === "right" ? k = Math.min(Math.max(g - l, b), d - b) : k = Math.min(Math.max(p - a, b), c - b), r.dataset.arrow = _, r.style.setProperty("--sg-arrow-offset", `${Math.round(k)}px`), r.style.setProperty("--sg-arrow-fill", this.resolveStepTipFill());
  }
  positionSkipChip(t, e, s, n) {
    if (!this.controlsEnabled) return;
    const r = 10, o = 8, a = window.innerWidth, l = window.innerHeight, c = this.stepTip && !this.stepTip.hidden, d = c ? this.stepTip.offsetWidth || 220 : 0, u = c ? this.stepTip.offsetHeight || 48 : 0, h = this.goChip && !this.goChip.hidden, p = h ? this.goChip.offsetWidth || 72 : 0, g = h ? this.goChip.offsetHeight || 36 : 0, f = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, m = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, y = 8;
    let S = 0, w = 0;
    h && (S = t + s + r, w = e + Math.max(0, Math.round((n - g) / 2)), S + p > a - o && (S = Math.max(o, t - p - r)), w < o && (w = o), w + g > l - o && (w = Math.max(o, l - g - o)), this.goChip.style.left = `${S}px`, this.goChip.style.top = `${w}px`);
    const _ = Math.max(d, f), x = (c ? u : 0) + (c && f ? y : 0) + (f ? m : 0), b = t + s / 2, k = e + n / 2, C = (A, P) => ({
      left: Math.min(Math.max(o, A), Math.max(o, a - _ - o)),
      top: Math.min(Math.max(o, P), Math.max(o, l - x - o))
    }), T = [
      C(b - _ / 2, e + n + r),
      // below, centered
      C(b - _ / 2, e - x - r),
      // above, centered
      C(t - _ - r, k - x / 2),
      // left, centered
      C(t + s + r, k - x / 2),
      // right, centered
      C(t, e + n + r),
      // below-start
      C(t + s - _, e + n + r)
      // below-end
    ];
    h && T.unshift(
      C(S + p + r, Math.min(w, e)),
      C(S - _ - r, Math.min(w, e))
    );
    let L = T[0], B = 1 / 0;
    for (const A of T) {
      const P = A.left + _ / 2, $ = A.top + x / 2, q = P - b, D = $ - k;
      let F = q * q + D * D;
      const U = Math.max(0, Math.min(A.left + _, t + s) - Math.max(A.left, t)), et = Math.max(0, Math.min(A.top + x, e + n) - Math.max(A.top, e));
      U > 0 && et > 0 && (F += 1e6 + U * et), F < B && (B = F, L = A);
    }
    let j = L.left, M = L.top;
    c && (this.stepTip.style.left = `${j}px`, this.stepTip.style.top = `${M}px`, this.updateStepTipArrow(t, e, s, n), M += u + y), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${j}px`, this.skipChip.style.top = `${M}px`);
  }
  positionSkipChipFallback() {
    if (!this.controlsEnabled) return;
    const t = this.highlightHost || this.target;
    if (t instanceof Element && t.isConnected) {
      const w = t.getBoundingClientRect();
      if (w.width > 0 && w.height > 0) {
        this.positionSkipChip(w.left, w.top, w.width, w.height);
        return;
      }
    }
    const e = this.stepTip && !this.stepTip.hidden, s = e ? this.stepTip.offsetWidth || 220 : 0, n = e ? this.stepTip.offsetHeight || 48 : 0, r = this.goChip && !this.goChip.hidden, o = r ? this.goChip.offsetWidth || 72 : 0, a = r ? this.goChip.offsetHeight || 36 : 0, l = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, c = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, d = 8, u = this.warningBanner && !this.warningBanner.hidden, h = this.waitingBanner && !this.waitingBanner.hidden, p = u ? this.warningBanner.offsetHeight || 40 : 0, g = h ? this.waitingBanner.offsetHeight || 40 : 0, f = 24 + p + g + (u || h ? 12 : 0), m = (e ? n + d : 0) + (l ? c : 0), y = Math.max(8, Math.round((window.innerWidth - Math.max(s, l || s)) / 2));
    let S = Math.max(8, window.innerHeight - f - m - (r ? a + d : 0));
    e && (this.stepTip.style.left = `${y}px`, this.stepTip.style.top = `${S}px`, this.stepTip.removeAttribute("data-arrow"), S += n + d), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${y}px`, this.skipChip.style.top = `${S}px`, S += c + d), r && (this.goChip.style.left = `${Math.max(8, Math.round((window.innerWidth - o) / 2))}px`, this.goChip.style.top = `${S}px`);
  }
  createBlock(t) {
    const e = document.createElement("div");
    return e.className = `sg-overlay__block sg-overlay__block--${t}`, ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((s) => e.addEventListener(s, this.onBlockInteraction, !0)), e;
  }
  highlight(t, e = !0, { blockOutside: s = !1, tip: n = null } = {}) {
    var r, o;
    t instanceof Element && (this.hideWarning(), this.hideWaiting(), this.hideGuideCursor(), this.targetLostNotified = !1, this.mount(), this.controlsEnabled && (this.mountSkipChip(), this.mountStepTip()), this.root && (this.root.style.display = "", this.root.style.setProperty("--sg-overlay-opacity", String(((r = this.ui) == null ? void 0 : r.overlayOpacity) ?? this.opacity))), this.clearRelayoutTimers(), this.unobserveTarget(), this.target = t, this.highlightHost = ge(t) || t, this.blockOutside = !!s, this.root.classList.toggle("sg-overlay--blocking", this.blockOutside), this.raiseTarget(this.blockOutside ? this.highlightHost : null), n && n.title ? this.setStepTip(n) : this.hideStepTip(), e && xt(this.highlightHost) && qs(this.highlightHost, { behavior: "smooth", block: "center" }), this.observeTarget(this.highlightHost), this.watchMenus(), this.root.classList.add("sg-overlay--visible"), this.syncSpotlightMotionClass(), this.frame && this.motionsEnabled() && ((o = this.ui) != null && o.spotlightFade) && (this.frame.classList.remove("sg-spotlight--fade-in"), this.frame.offsetWidth, this.frame.classList.add("sg-spotlight--fade-in")), this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter(), this.syncSkipChipVisibility(), [80, 180, 320, 520, 800].forEach((a) => {
      this.relayoutTimers.push(setTimeout(() => {
        this.target && (this.highlightHost = ge(this.target) || this.target, this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter(), this.syncSkipChipVisibility());
      }, a));
    }));
  }
  /** Refresh cutout/menus without re-raising the target (avoids closing open dropdowns). */
  refreshMenus() {
    !this.root || !this.target || this.syncing || (this.elevateOpenMenus(), this.scheduleLayout());
  }
  getVisibleMenus() {
    const t = this.highlightHost || this.target;
    return Oi(t);
  }
  allowsInteractionAt(t, e) {
    const s = this.highlightHost || this.target, n = Oi(s);
    return n.length ? n.some((r) => {
      const o = r.getBoundingClientRect();
      return t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
    }) : !1;
  }
  elevateOpenMenus() {
    if (!this.syncing) {
      this.syncing = !0;
      try {
        const t = this.getVisibleMenus(), e = this.elevatedMenus.map((n) => n.menu);
        if (t.length === e.length && t.every((n, r) => n === e[r])) {
          t.forEach((n) => {
            n.style.pointerEvents !== "auto" && (n.style.pointerEvents = "auto"), n.style.zIndex !== String(this.zIndex + 20) && (n.style.zIndex = String(this.zIndex + 20));
          });
          return;
        }
        this.restoreElevatedMenus(), t.forEach((n) => {
          this.elevatedMenus.push({
            menu: n,
            zIndex: n.style.zIndex,
            pointerEvents: n.style.pointerEvents,
            position: n.style.position
          }), getComputedStyle(n).position === "static" && (n.style.position = "relative"), n.style.zIndex = String(this.zIndex + 20), n.style.pointerEvents = "auto";
        });
      } finally {
        this.syncing = !1;
      }
    }
  }
  restoreElevatedMenus() {
    this.elevatedMenus.forEach(({ menu: t, zIndex: e, pointerEvents: s, position: n }) => {
      t.style.zIndex = e || "", t.style.pointerEvents = s || "", n !== void 0 && (t.style.position = n || "");
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
      t.some((s) => {
        var r, o;
        const n = s.target instanceof Element ? s.target : (r = s.target) == null ? void 0 : r.parentElement;
        return !n || (o = n.closest) != null && o.call(n, ".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip") ? !1 : s.type === "childList" ? !0 : s.attributeName === "class" || s.attributeName === "aria-expanded" || s.attributeName === "hidden";
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
    const t = ge(this.target) || this.highlightHost || this.target;
    if (!(t instanceof Element) || !t.isConnected) {
      this.hide(), this.targetLostNotified || (this.targetLostNotified = !0, (h = this.onTargetLost) == null || h.call(this));
      return;
    }
    this.highlightHost = t;
    const e = t.getBoundingClientRect();
    if (e.width < 1 || e.height < 1)
      return;
    const s = 8;
    let n = e.left - s, r = e.top - s, o = e.right + s, a = e.bottom + s;
    this.getVisibleMenus().forEach((g) => {
      const f = g.getBoundingClientRect();
      n = Math.min(n, f.left - s), r = Math.min(r, f.top - s), o = Math.max(o, f.right + s), a = Math.max(a, f.bottom + s);
    });
    const l = Math.max(0, n), c = Math.max(0, r), d = Math.max(8, o - n), u = Math.max(8, a - r);
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
  applyCutout(t, e, s, n) {
    const r = window.innerWidth, o = window.innerHeight;
    this.frame.style.setProperty("--sg-x", `${t}px`), this.frame.style.setProperty("--sg-y", `${e}px`), this.frame.style.setProperty("--sg-w", `${s}px`), this.frame.style.setProperty("--sg-h", `${n}px`), this.blocks.top.style.cssText = `top:0;left:0;width:${r}px;height:${e}px;`, this.blocks.left.style.cssText = `top:${e}px;left:0;width:${t}px;height:${n}px;`, this.blocks.right.style.cssText = `top:${e}px;left:${t + s}px;width:${Math.max(0, r - t - s)}px;height:${n}px;`, this.blocks.bottom.style.cssText = `top:${e + n}px;left:0;width:${r}px;height:${Math.max(0, o - e - n)}px;`;
  }
  raiseTarget(t) {
    if (this.raisedTarget && this.raisedTarget !== t && this.restoreTarget(), !t || this.raisedTarget === t || !He(t)) return;
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
    ), this.root && (this.root.classList.remove("sg-overlay--visible", "sg-overlay--blocking"), this.root.style.display = "none"), this.frame && (this.frame.style.removeProperty("--sg-x"), this.frame.style.removeProperty("--sg-y"), this.frame.style.removeProperty("--sg-w"), this.frame.style.removeProperty("--sg-h")), this.hideWaiting(), this.hideGoChip(), this.hideStepTip(), this.hideGuideCursor(), this.syncSkipChipVisibility();
  }
  destroy() {
    var t;
    cancelAnimationFrame(this.raf), this.clearRelayoutTimers(), this.unobserveTarget(), this.unwatchMenus(), this.restoreElevatedMenus(), this.restoreTarget(), window.removeEventListener("resize", this.onViewportChange), window.removeEventListener("scroll", this.onViewportChange, !0), this.blocks && Object.values(this.blocks).forEach((e) => {
      ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((s) => e.removeEventListener(s, this.onBlockInteraction, !0));
    }), this.skipChip && (this.skipChip.removeEventListener("click", this.onSkipClick), this.skipChip.remove(), this.skipChip = null), this.goChip && (this.goChip.removeEventListener("click", this.onGoClick), this.goChip.remove(), this.goChip = null, this.onGo = null), this.stepTip && (this.stepTip.remove(), this.stepTip = null, this.stepTipContent = null), this.warningBanner && (this.warningBanner.remove(), this.warningBanner = null), this.waitingBanner && (this.waitingBanner.remove(), this.waitingBanner = null), this.guideCursor && (clearTimeout(this.cursorTimer), this.guideCursor.remove(), this.guideCursor = null), (t = this.root) == null || t.remove(), this.root = null, this.frame = null, this.blocks = null, this.target = null, this.highlightHost = null;
  }
}
const Mn = [
  ".modal.show",
  ".modal.in",
  '[role="dialog"][aria-modal="true"]',
  '[role="dialog"].show',
  ".p-dialog",
  ".p-overlaypanel",
  ".p-sidebar"
].join(", ");
function Gi(i) {
  if (!(i instanceof Element)) return null;
  try {
    return i.closest(Mn);
  } catch {
    return null;
  }
}
function Ln(i) {
  var s;
  if ((i == null ? void 0 : i.action) !== "click") return !1;
  const t = String(((s = i.match) == null ? void 0 : s.href) || "").trim();
  if (t && t !== "#" && !/^javascript:/i.test(t)) return !0;
  const e = String(i.selector || "");
  return !!/\.nav-link|\.custom-nav-class|\[data-inertia\]/i.test(e);
}
function Nn(i, t) {
  var l, c;
  if (!Array.isArray(i) || t <= 0) return !1;
  const e = i[t], s = i[t - 1];
  if (!s || ((l = e == null ? void 0 : e.settings) == null ? void 0 : l.allowPrev) === !1) return !1;
  if (((c = e == null ? void 0 : e.settings) == null ? void 0 : c.allowPrev) === !0) return !0;
  if (Ln(s)) return !1;
  const n = Kt(s, { requirePresent: !0 });
  if (!n) return !1;
  const r = Kt(e, { requirePresent: !1 }), o = Gi(n), a = Gi(r);
  return !(s.action === "click" && (a && !o || a && o && a !== o));
}
function Bn(i, t) {
  var l, c, d, u, h;
  const e = i instanceof Element ? i : t;
  if (!(e instanceof Element)) return !1;
  const s = (l = e.closest) == null ? void 0 : l.call(e, 'a[href], [href], [data-inertia], .nav-link, .custom-nav-class, [role="link"]');
  if (!s || s.hasAttribute("download")) return !1;
  const n = (((c = s.getAttribute) == null ? void 0 : c.call(s, "target")) || "").toLowerCase();
  if (n && n !== "_self") return !1;
  const r = (((d = s.getAttribute) == null ? void 0 : d.call(s, "href")) || "").trim(), o = r.toLowerCase();
  return !(!r || r === "#" || o.startsWith("javascript:")) || (u = s.matches) != null && u.call(s, ".nav-link, .custom-nav-class, [data-inertia]") ? !0 : ((h = s.matches) != null && h.call(s, '.btn, .btn-added, .btn-searchset, button, [role="button"]') || [...s.classList || []].some((p) => /^btn([_-]|$)/i.test(p)), !1);
}
function Pn(i) {
  const t = String((i == null ? void 0 : i.title) || "").trim(), e = String((i == null ? void 0 : i.description) || "").trim();
  if (!e || e === t) return "";
  const s = e.replace(/^(click|select|enter|choose)\s+/i, "").trim(), n = t.replace(/^(click|select|enter|choose)\s+/i, "").trim();
  return s && n && s.toLowerCase() === n.toLowerCase() || /^(click|select|enter|choose)\s+.+/i.test(e) && e.length <= t.length + 12 ? "" : e;
}
class In {
  constructor({
    overlay: t,
    timeout: e = 5e3,
    autoAdvanceOnInput: s = !0,
    autoAdvanceDelay: n = 600,
    autoSkipMissing: r = !0,
    autoSkipMissingDelay: o = 400,
    /**
     * When auto-skip is on and the page is idle (no skeletons), how long to wait
     * with no match before treating the target as missing. Default 2000.
     * Loading / skeleton still uses the full targetWaitTimeout (+ settle cap).
     */
    autoSkipIdleMissTimeout: a = 2e3,
    stableWaitTimeout: l = 1500,
    targetWaitTimeout: c = 2e4,
    targetRetryInterval: d = 250,
    targetReadyHits: u = 2,
    stepDelay: h = 0,
    autoScroll: p = !0,
    /** After a click step: wait for page loaders/skeletons before the next step. */
    pageSettleAfterClick: g = !0,
    pageSettleTimeout: f = 2e4,
    pageSettleAppearGraceMs: m = 300,
    /** Extra settle ms after loaders clear (and after non-loading clicks). */
    postReadyDelay: y = 1500,
    ui: S = null,
    onChange: w,
    onFail: _,
    onComplete: x,
    onClickAdvance: b = null
  }) {
    this.overlay = t, this.timeout = e, this.autoAdvanceOnInput = s, this.autoAdvanceDelay = n, this.autoSkipMissing = r, this.autoSkipMissingDelay = o, this.autoSkipIdleMissTimeout = Math.max(300, Number(a) || 2e3), this.stableWaitTimeout = l, this.targetWaitTimeout = Math.max(1e3, Number(c) || 2e4), this.targetRetryInterval = Math.max(50, Number(d) || 250), this.targetReadyHits = Math.max(1, Number(u) || 2), this.stepDelay = h, this.autoScroll = p !== !1, this.pageSettleAfterClick = g !== !1, this.pageSettleTimeout = Math.max(0, Number(f) || 2e4), this.pageSettleAppearGraceMs = Math.max(0, Number(m) || 0), this.postReadyDelay = Math.max(0, Number(y) || 0), this.ui = be(S || {}), this.onChange = w, this.onFail = _, this.onComplete = x, this.onClickAdvance = b, this.steps = [], this.index = 0, this.active = !1, this.token = 0, this.waitCleanup = null, this.autoSkipTimer = null, this.navWaitTimer = null, this.readyWaitInterval = null, this.readyWaitResolve = null, this.targetLostTimer = null, this.rebindDebounceTimer = null, this.waitingForNavigation = !1, this.settleBeforeShow = !1, this.pageSettleAbort = null, this.lastChoiceField = null, this.lastCompletedField = null;
  }
  setUiOptions(t) {
    this.ui = be(t || {});
  }
  setOptions(t = {}) {
    t.autoAdvanceDelay != null && (this.autoAdvanceDelay = Number(t.autoAdvanceDelay) || 0), t.stepDelay != null && (this.stepDelay = Number(t.stepDelay) || 0), t.autoScroll != null && (this.autoScroll = !!t.autoScroll), t.timeout != null && (this.timeout = Number(t.timeout) || this.timeout), t.stableWaitTimeout != null && (this.stableWaitTimeout = Number(t.stableWaitTimeout) || this.stableWaitTimeout), t.targetWaitTimeout != null && (this.targetWaitTimeout = Math.max(1e3, Number(t.targetWaitTimeout) || this.targetWaitTimeout)), t.targetRetryInterval != null && (this.targetRetryInterval = Math.max(50, Number(t.targetRetryInterval) || this.targetRetryInterval)), t.targetReadyHits != null && (this.targetReadyHits = Math.max(1, Number(t.targetReadyHits) || this.targetReadyHits)), t.pageSettleAfterClick != null && (this.pageSettleAfterClick = !!t.pageSettleAfterClick), t.pageSettleTimeout != null && (this.pageSettleTimeout = Math.max(0, Number(t.pageSettleTimeout) || 0)), t.pageSettleAppearGraceMs != null && (this.pageSettleAppearGraceMs = Math.max(0, Number(t.pageSettleAppearGraceMs) || 0)), t.postReadyDelay != null && (this.postReadyDelay = Math.max(0, Number(t.postReadyDelay) || 0)), t.autoSkipMissing != null && (this.autoSkipMissing = !!t.autoSkipMissing), t.autoSkipMissingDelay != null && (this.autoSkipMissingDelay = Math.max(0, Number(t.autoSkipMissingDelay) || 0)), t.autoSkipIdleMissTimeout != null && (this.autoSkipIdleMissTimeout = Math.max(300, Number(t.autoSkipIdleMissTimeout) || 2e3));
  }
  abortPageSettle() {
    if (this.pageSettleAbort) {
      try {
        this.pageSettleAbort.abort();
      } catch {
      }
      this.pageSettleAbort = null;
    }
  }
  /**
   * After a click that may refresh content: wait for skeletons / aria-busy to clear.
   * Fully silent — no Waiting banner / status. If no loader appears during grace,
   * returns immediately (no postReadyDelay).
   */
  async waitForPageSettle(t) {
    if (!this.pageSettleAfterClick) return !0;
    this.abortPageSettle();
    const e = typeof AbortController < "u" ? new AbortController() : null;
    this.pageSettleAbort = e;
    const s = await Ws({
      timeout: Math.max(this.timeout, this.pageSettleTimeout, this.targetWaitTimeout),
      appearGraceMs: this.pageSettleAppearGraceMs,
      postReadyDelay: this.postReadyDelay,
      signal: e == null ? void 0 : e.signal,
      isLoading: ii,
      onTick: null
    });
    return this.pageSettleAbort === e && (this.pageSettleAbort = null), !this.active || t !== this.token ? !1 : s;
  }
  resolveStepField(t) {
    if (!(t != null && t.selector) && !(t != null && t.match) && !(t != null && t.title)) return null;
    const e = Kt(t, { requirePresent: !1 });
    return e ? ft(e) || e : null;
  }
  findStepTarget(t) {
    return Kt(t, { requirePresent: !0 });
  }
  /** Soft resolve — may return a node that still has skeleton / aria-busy. */
  findStepTargetCandidate(t) {
    return Kt(t, { requirePresent: !1 });
  }
  /** True when page loaders are up, or the step's candidate is still skeleton/busy. */
  isWaitingOnTargetLoad(t) {
    if (ii()) return !0;
    const e = this.findStepTargetCandidate(t);
    return !!(e && Zi(e));
  }
  clearReadyWait(t = null) {
    var s, n;
    this.readyWaitInterval != null && (clearInterval(this.readyWaitInterval), this.readyWaitInterval = null);
    const e = this.readyWaitResolve;
    this.readyWaitResolve = null, e && e(t), (n = (s = this.overlay).hideWaiting) == null || n.call(s);
  }
  /**
   * Poll until the step target is present and ready (SPA/page load safe).
   * - Ready match → resolve element
   * - Skeleton / page loading → wait up to hard cap (do not fast-skip)
   * - Idle + auto-skip on → short idle-miss timeout, then null (auto-skip)
   * - Idle + auto-skip off → full targetWaitTimeout, then null (TARGET MISSING)
   */
  waitUntilTargetReady(t, e) {
    this.clearReadyWait(null);
    const s = this.findStepTarget(t);
    if (s) return Promise.resolve(s);
    const n = Date.now(), r = Math.max(this.timeout, this.targetWaitTimeout), o = r + Math.max(0, Number(this.pageSettleTimeout) || 0), a = Math.max(0, Number(this.pageSettleAppearGraceMs) || 0), c = this.shouldAutoSkipMissing(t) ? Math.min(r, Math.max(300, Number(this.autoSkipIdleMissTimeout) || 2e3)) : r;
    let d = 0, u = 0, h = null, p = null, g = null;
    return new Promise((f) => {
      this.readyWaitResolve = f;
      const m = (S) => {
        this.readyWaitResolve === f && this.clearReadyWait(S);
      }, y = () => {
        var T, L, B, j;
        if (!this.active || e !== this.token) {
          m(null);
          return;
        }
        d += 1;
        const S = this.findStepTarget(t);
        if (S) {
          if (u = S === h ? u + 1 : 1, h = S, g = null, u >= this.targetReadyHits) {
            m(S);
            return;
          }
        } else
          u = 0, h = null;
        const w = Date.now() - n, _ = !S && this.isWaitingOnTargetLoad(t);
        _ ? g = null : !S && w >= a ? g == null && (g = Date.now()) : g = null;
        const x = g == null ? 0 : Date.now() - g, b = _ ? o : a + c, k = Math.max(0, Math.ceil((b - w) / 1e3));
        if (w >= o) {
          m(S || null);
          return;
        }
        if (!_ && !S && g != null && x >= c) {
          m(null);
          return;
        }
        const C = _ ? `loading:${k}` : `target:${k}`;
        if (C !== p) {
          p = C;
          const M = _ ? `Waiting for content… ${k}s` : `Waiting… ${k}s`;
          this.onChange(t, this.index, {
            waiting: !0,
            failed: !1,
            waitKind: _ ? "loading" : "target",
            retryCount: d,
            message: M
          }), (L = (T = this.overlay).showWaiting) == null || L.call(T, M, { seconds: k }), (j = (B = this.overlay).positionSkipChipFallback) == null || j.call(B);
        }
      };
      y(), this.readyWaitResolve === f && (this.readyWaitInterval = setInterval(y, this.targetRetryInterval));
    });
  }
  dedupeSteps(t) {
    const e = [];
    let s = null;
    for (const n of t) {
      if (n.action === "input" && n.selector) {
        const r = this.resolveStepField(n);
        if (r && r === s) continue;
        s = r || null;
      } else
        s = null;
      e.push(n);
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
  /** Per-step override wins; otherwise global player option (default true). */
  shouldAutoSkipMissing(t) {
    var e, s;
    return ((e = t == null ? void 0 : t.settings) == null ? void 0 : e.autoSkipMissing) === !1 ? !1 : ((s = t == null ? void 0 : t.settings) == null ? void 0 : s.autoSkipMissing) === !0 ? !0 : this.autoSkipMissing !== !1;
  }
  /**
   * After full target wait failed: briefly show skip status, then advance.
   * Does not call onFail — intentional skip, not a hard failure.
   */
  scheduleAutoSkipMissing(t, e) {
    var r, o, a, l, c, d;
    const s = "Target not found after wait. Skipping to the next step…";
    (o = (r = this.overlay).hideWarning) == null || o.call(r), (l = (a = this.overlay).showWaiting) == null || l.call(a, s), this.onChange(t, this.index, {
      waiting: !1,
      failed: !0,
      autoSkipping: !0,
      failKind: "missing-target",
      message: s
    }), (d = (c = this.overlay).positionSkipChipFallback) == null || d.call(c), clearTimeout(this.autoSkipTimer);
    const n = Math.max(0, Number(this.autoSkipMissingDelay) || 0);
    this.autoSkipTimer = setTimeout(() => {
      var u, h, p, g;
      this.autoSkipTimer = null, !(!this.active || e !== this.token) && ((h = (u = this.overlay).hideWaiting) == null || h.call(u), (g = (p = this.overlay).hideWarning) == null || g.call(p), this.next());
    }, n);
  }
  normalizeStepTarget(t, e) {
    if (!e) return null;
    if (It(e))
      return ft(e) || e;
    if (t.action === "click") {
      const s = ft(e);
      if (s && Dt(s)) return s;
    }
    return e;
  }
  async showCurrent() {
    var h, p, g, f, m, y, S, w, _, x, b, k, C, T, L, B, j, M, A, P, $, q, D, F, U, et, rt, ut;
    if (!this.active) return;
    this.clearWait();
    const t = ++this.token, e = this.steps[this.index], s = ((p = (h = this.overlay) == null ? void 0 : h.getHighlightCenter) == null ? void 0 : p.call(h)) || ((g = this.overlay) == null ? void 0 : g.lastHighlightCenter) || null;
    this.onChange(e, this.index, { waiting: !1, failed: !1 }), this.overlay.hide();
    const n = Number((f = e == null ? void 0 : e.settings) == null ? void 0 : f.delay) || 0;
    if (n > 0 && (await new Promise((H) => setTimeout(H, n)), !this.active || t !== this.token) || this.settleBeforeShow && (this.settleBeforeShow = !1, !await this.waitForPageSettle(t) || !this.active || t !== this.token))
      return;
    if (e.action === "manual" || !e.selector && !e.match) {
      this.overlay.hide();
      return;
    }
    const r = await this.waitUntilTargetReady(e, t);
    if (!this.active || t !== this.token) return;
    let o = this.normalizeStepTarget(e, r);
    if (o) {
      const H = !!this.lastCompletedField, z = H ? Math.min(220, this.stableWaitTimeout) : this.stableWaitTimeout;
      o = await zs(o, {
        timeout: z,
        stableFrames: H ? 2 : 4
      }) || o;
    }
    if (!this.active || t !== this.token) return;
    if (o && !xt(o)) {
      const H = await this.waitUntilTargetReady(e, t);
      if (!this.active || t !== this.token) return;
      o = this.normalizeStepTarget(e, H);
    }
    if (!this.active || t !== this.token) return;
    const a = !!(o && (Dt(o) || Ft(o)) || ((m = e.waitFor) == null ? void 0 : m.mode) === "interaction" || It(r));
    if (r && a && (!o || !He(o))) {
      const H = (R) => {
        var Z, lt, Bt, Lt;
        if (!(R instanceof Element)) return !1;
        if ((Z = R.matches) != null && Z.call(R, 'input[type="search"]')) return !0;
        const K = [
          (lt = R.getAttribute) == null ? void 0 : lt.call(R, "placeholder"),
          (Bt = R.getAttribute) == null ? void 0 : Bt.call(R, "name"),
          (Lt = R.getAttribute) == null ? void 0 : Lt.call(R, "aria-label"),
          R.id,
          R.className
        ].filter(Boolean).join(" ").toLowerCase();
        return /\bsearch\b/.test(K);
      }, z = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show');
      if (z) {
        const R = vn(z).filter((Z) => (Z.matches('select, [role="combobox"]') || Dt(Z)) && !H(Z));
        let K = re();
        if (K && H(K) && (K = null), !K && this.lastChoiceField && z.contains(this.lastChoiceField)) {
          const Z = ((S = (y = this.lastChoiceField).getBoundingClientRect) == null ? void 0 : S.call(y).top) ?? -1 / 0;
          K = R.find((lt) => lt.getBoundingClientRect().top > Z + 4) || null;
        }
        K || (K = R[0] || null), K && (o = K);
      }
    }
    const l = ge(o) || o;
    if (!o && !l) {
      if (this.overlay.hide(), this.shouldAutoSkipMissing(e)) {
        this.scheduleAutoSkipMissing(e, t);
        return;
      }
      const H = this.missingTargetMessage(e);
      (_ = (w = this.overlay).showWarning) == null || _.call(w, H), this.onFail(e, this.index), this.onChange(e, this.index, {
        waiting: !1,
        failed: !0,
        autoSkipping: !1,
        failKind: "missing-target",
        message: H
      }), (b = (x = this.overlay).positionSkipChipFallback) == null || b.call(x);
      return;
    }
    (C = (k = this.overlay).hideWarning) == null || C.call(k), (L = (T = this.overlay).hideWaiting) == null || L.call(T);
    const c = o || l;
    if (s && ((B = this.ui) != null && B.animatedCursor) && ((j = this.ui) != null && j.animations)) {
      const H = (M = c.getBoundingClientRect) == null ? void 0 : M.call(c);
      if (H && H.width >= 1 && H.height >= 1) {
        const z = {
          x: H.left + H.width / 2,
          y: H.top + H.height / 2
        };
        if (await ((P = (A = this.overlay).animateCursorTo) == null ? void 0 : P.call(A, s, z, this.ui.transitionMs)), !this.active || t !== this.token) return;
      }
    }
    const d = e.action === "input" || (($ = e.waitFor) == null ? void 0 : $.type) === "input" || a || Dt(c), u = ((q = e == null ? void 0 : e.settings) == null ? void 0 : q.autoScroll) !== !1;
    if (this.overlay.highlight(l || c, u, {
      // Keep spotlight cutout for selects so the active field stays bright.
      blockOutside: !0,
      tip: {
        title: e.title || "",
        description: Pn(e),
        stepNumber: this.index + 1,
        totalSteps: this.steps.length,
        showPrev: this.canGoPrev()
      }
    }), d) {
      let H = (D = c.matches) != null && D.call(c, "input, textarea, select, .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? c : ((F = c.querySelector) == null ? void 0 : F.call(c, "input, textarea, select, .p-dropdown, .p-multiselect")) || c;
      const z = (U = H.closest) == null ? void 0 : U.call(H, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      z && (H = z);
      const R = Number((et = e == null ? void 0 : e.settings) == null ? void 0 : et.autoAdvanceDelay), K = this.autoAdvanceDelay;
      Number.isFinite(R) && (this.autoAdvanceDelay = R);
      const Z = a || Dt(H) || !!z || ((rt = e.waitFor) == null ? void 0 : rt.mode) === "interaction";
      this.watchInput(H, {
        ...e,
        waitFor: {
          type: "input",
          required: !0,
          mode: Z ? "interaction" : ((ut = e.waitFor) == null ? void 0 : ut.mode) || "value"
        }
      }, !0), this.autoAdvanceDelay = K;
      return;
    }
    e.action === "click" && this.watchClick(c, e);
  }
  watchClick(t, e) {
    const s = this.index;
    this.onChange(e, s, { waiting: !0, failed: !1, waitKind: "click" });
    const n = async (r) => {
      var c, d, u;
      const o = r.target instanceof Element ? r.target : null;
      if (!o || !(o === t || t.contains(o)) || !this.active || this.index !== s) return;
      this.overlay.hide(), this.clearWait();
      const a = this.resolveNextIndex(s), l = Bn(o, t);
      if ((c = this.onClickAdvance) == null || c.call(this, e, s, a, { mayNavigate: l }), await this.applyHideDelay(e), !!this.active) {
        if (a >= this.steps.length) {
          this.complete();
          return;
        }
        if (this.index = a, this.settleBeforeShow = !0, l) {
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
    t.addEventListener("click", n, !0), this.waitCleanup = () => {
      t.removeEventListener("click", n, !0);
    };
  }
  /** True when the current step spotlight is already live on a matching DOM node. */
  isCurrentStepBound() {
    var n, r, o, a;
    if (!this.active || this.readyWaitInterval != null || this.readyWaitResolve || this.waitingForNavigation || this.settleBeforeShow || this.pageSettleAbort) return !1;
    const t = this.steps[this.index];
    if (!t) return !1;
    const e = ((n = this.overlay) == null ? void 0 : n.target) || ((r = this.overlay) == null ? void 0 : r.highlightHost);
    if (!(e instanceof Element) || !e.isConnected || !xt(e) || !((a = (o = this.overlay) == null ? void 0 : o.root) != null && a.classList.contains("sg-overlay--visible"))) return !1;
    const s = this.findStepTarget(t);
    return s ? s === e || e.contains(s) || s.contains(e) : !1;
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
    const e = this.steps[t], s = this.lastCompletedField;
    let n = t + 1;
    for (; n < this.steps.length; ) {
      const r = this.steps[n];
      if ((e == null ? void 0 : e.action) !== "input" || (r == null ? void 0 : r.action) !== "input") break;
      if (r.selector === e.selector) {
        n += 1;
        continue;
      }
      if (s) {
        const o = this.resolveStepField(r);
        if (o && o === s) {
          n += 1;
          continue;
        }
      }
      break;
    }
    return n;
  }
  watchInput(t, e, s = !0) {
    var wt, ve, Ht, Xt, mt, Rt, Jt, Ut, Yt, Wt, we, ht;
    const n = this.index, r = (wt = t == null ? void 0 : t.closest) == null ? void 0 : wt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
    r && (t = r);
    const o = t instanceof HTMLSelectElement, a = Ft(t), l = !!((ve = t == null ? void 0 : t.matches) != null && ve.call(t, ".p-autocomplete") || (Ht = t == null ? void 0 : t.closest) != null && Ht.call(t, ".p-autocomplete")), c = !!((Xt = t == null ? void 0 : t.matches) != null && Xt.call(t, ".p-multiselect") || (mt = t == null ? void 0 : t.closest) != null && mt.call(t, ".p-multiselect")), d = !!((Rt = t == null ? void 0 : t.matches) != null && Rt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") || (Jt = t == null ? void 0 : t.closest) != null && Jt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")), u = o || a || ((Ut = e.waitFor) == null ? void 0 : Ut.mode) === "interaction" || Dt(t) || d, h = t instanceof HTMLInputElement && ["date", "datetime-local", "time", "month", "week", "color", "range"].includes(t.type);
    let p = !1, g = !1, f = !1, m = null, y = null, S = null, w = null;
    const _ = o || h || u || d || l ? Math.min(this.autoAdvanceDelay || 0, 50) : this.autoAdvanceDelay, x = ((Yt = t.closest) == null ? void 0 : Yt.call(t, '.modal.show, .modal, [role="dialog"], .p-overlaypanel')) || document.querySelector('.modal.show, [role="dialog"], .p-overlaypanel') || document, b = fi, k = [
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
    ].join(", "), C = [
      ".p-autocomplete-panel",
      ".p-dropdown-panel",
      ".p-multiselect-panel",
      ".p-cascadeselect-panel"
    ].join(", "), T = [
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
    ].join(", "), L = (v) => !!(v instanceof Element && (v.matches(Ue) || It(v))), B = () => {
      var ot, X, st;
      if (!c || !(t instanceof Element)) return !1;
      if (t.classList.contains("p-overlay-open") || t.classList.contains("p-inputwrapper-focus") && t.querySelector('[aria-expanded="true"]') || t.getAttribute("aria-expanded") === "true" || (ot = t.querySelector) != null && ot.call(t, '[aria-expanded="true"]')) return !0;
      const v = document.querySelector(".p-multiselect-panel");
      if (!(v instanceof Element)) return !1;
      const E = (X = globalThis.getComputedStyle) == null ? void 0 : X.call(globalThis, v);
      if (E && (E.display === "none" || E.visibility === "hidden")) return !1;
      const W = ft(v) || re();
      return !!(W && (W === t || t.contains(W) || (st = W.contains) != null && st.call(W, t)));
    }, j = () => c && B(), M = () => {
      var W, ot;
      const v = (W = t.matches) != null && W.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? t : (ot = t.closest) == null ? void 0 : ot.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (!v) return "";
      const E = v.querySelector(".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      return !E || E.classList.contains("p-placeholder") || E.classList.contains("p-dropdown-label-empty") ? "" : E instanceof HTMLInputElement ? String(E.value || "").trim() : String(E.textContent || "").trim();
    }, A = () => {
      var E;
      const v = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement ? t : ((E = t.querySelector) == null ? void 0 : E.call(t, 'input:not([type="hidden"]), textarea, select')) || t;
      return v instanceof HTMLInputElement && ["checkbox", "radio"].includes(v.type) ? String(v.checked) : v instanceof HTMLInputElement || v instanceof HTMLTextAreaElement || v instanceof HTMLSelectElement ? String(v.value ?? "") : M();
    };
    let P = A();
    const $ = () => u ? p : t instanceof HTMLInputElement && ["checkbox", "radio"].includes(t.type) ? t.checked : d ? p || !!M() : String(A()).trim().length > 0, q = () => {
      this.onChange(e, n, {
        waiting: s && !$(),
        failed: !1,
        waitKind: u || d ? "choice" : "input"
      });
    }, D = (v) => {
      var ot, X;
      if (!(v instanceof Element)) return;
      const E = ge(v) || v;
      if (this.overlay.target === E || this.overlay.highlightHost === E || this.overlay.target === v || this.overlay.highlightHost === v) {
        (X = (ot = this.overlay).refreshMenus) == null || X.call(ot);
        return;
      }
      this.overlay.highlight(E, !1, { blockOutside: !0 });
    }, F = !u && !d && !l, U = () => {
      var E;
      const v = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : (E = t.querySelector) == null ? void 0 : E.call(t, 'input:not([type="hidden"]), textarea');
      if (v instanceof HTMLElement)
        try {
          v.blur();
        } catch {
        }
      try {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      } catch {
      }
    }, et = () => {
      this.active && this.index === n && this.next();
    }, rt = (v = t) => {
      var E, W;
      !this.active || this.index !== n || p || (p = !0, P = A(), clearTimeout(m), (W = (E = this.overlay).hideGoChip) == null || W.call(E), v instanceof Element && (this.lastChoiceField = v, this.lastCompletedField = ft(v) || v), q(), U(), this.overlay.hide(), m = setTimeout(et, F ? Math.min(_, 120) : _));
    }, ut = () => {
      var v, E, W, ot, X, st;
      if (F) {
        if (!this.active || this.index !== n || p) {
          (E = (v = this.overlay).hideGoChip) == null || E.call(v);
          return;
        }
        $() ? (ot = (W = this.overlay).showGoChip) == null || ot.call(W, () => {
          var ct, pt;
          if (!(!this.active || this.index !== n || p)) {
            if (!$()) {
              q(), (pt = (ct = this.overlay).hideGoChip) == null || pt.call(ct);
              return;
            }
            rt(t);
          }
        }, "Go") : (st = (X = this.overlay).hideGoChip) == null || st.call(X);
      }
    }, H = (v = t) => {
      if (!this.active || this.index !== n || p || j()) return;
      if (!(u || d ? !0 : $())) {
        q(), ut();
        return;
      }
      if (F) {
        P = A(), q(), ut();
        return;
      }
      if (!this.autoAdvanceOnInput) {
        p = !0, P = A(), v instanceof Element && (this.lastChoiceField = v, this.lastCompletedField = ft(v) || v), q();
        return;
      }
      rt(v);
    }, z = (v) => {
      var st, ct, pt, at;
      if (!(v instanceof Element)) return !1;
      if (v === t || t.contains(v)) return !0;
      const E = (st = t.querySelector) == null ? void 0 : st.call(t, "input, textarea, select");
      if (E && (v === E || E.contains(v))) return !0;
      const W = ft(v);
      if (W && (W === t || t.contains(W) || (ct = W.contains) != null && ct.call(W, t)))
        return !0;
      if (v.closest(C) && (l || d)) {
        const yt = ft(v) || re();
        if (yt && (yt === t || t.contains(yt) || (pt = yt.contains) != null && pt.call(yt, t)))
          return !0;
        const Et = re();
        return !!(Et && (Et === t || t.contains(Et)));
      }
      const X = re();
      return !!(X && (X === t || t.contains(X) || (at = X.contains) != null && at.call(X, t)));
    }, R = (v = t) => {
      !this.active || this.index !== n || p || j() || (clearTimeout(m), m = setTimeout(() => H(v), 0));
    }, K = () => {
      !c || p || j() || (f || A() !== P) && R(t);
    }, Z = (v) => {
      const E = v == null ? void 0 : v.target;
      if (l) {
        if (!f) return;
        R(t);
        return;
      }
      if (c) {
        z(E instanceof Element ? E : t) && (f = !0, g = !0), K();
        return;
      }
      if (!(d && !a && !o && ((v == null ? void 0 : v.type) === "input" || (v == null ? void 0 : v.type) === "change" && !f && !g))) {
        if (u && E instanceof Element && (x.contains(E) || !!E.closest(b) || z(E)) && (E.matches("select, input, textarea") || Dt(E) || It(E))) {
          if (d && E.matches("input, textarea") && !It(E) && (v == null ? void 0 : v.type) === "input")
            return;
          R(ft(E) || t);
          return;
        }
        u && E instanceof Element && !z(E) || !u && !d && E instanceof Element && !z(E) || R(t);
      }
    }, lt = (v) => {
      var yt, Et, dt, Qt, Ot, oe, te, jt;
      if (!u || p) return;
      const E = v.target instanceof Element ? v.target : null;
      if (!E) return;
      const W = x.contains(E), X = !!E.closest(b), st = E.closest(k), ct = L(E);
      if (c && !!E.closest([
        ".p-multiselect-close",
        ".p-multiselect-remove",
        '[data-pc-section="closebutton"]',
        '[data-pc-section="clearicon"]',
        ".p-multiselect-header .p-multiselect-close"
      ].join(", ")) && z(E)) {
        g = !0, setTimeout(K, 40);
        return;
      }
      if ((st || ct) && z(E)) {
        if (g = !0, E.matches("input, textarea") && !st && !ct) {
          (Et = (yt = this.overlay).refreshMenus) == null || Et.call(yt);
          return;
        }
        if (l && !st) {
          (Qt = (dt = this.overlay).refreshMenus) == null || Qt.call(dt);
          return;
        }
        if (v.type === "pointerdown" || v.type === "pointerup" || v.type === "click" || ct) {
          if (f = !0, c) {
            (oe = (Ot = this.overlay).refreshMenus) == null || oe.call(Ot);
            return;
          }
          R(ft(E) || re() || t);
        }
        return;
      }
      if (!W && !X && !ct) {
        c && g && setTimeout(K, 40);
        return;
      }
      const at = E.closest(T);
      if (at && (W || x.contains(at)) && !X && !st && !ct) {
        g = !0;
        const Gt = ft(at) || at;
        if ((z(Gt) || z(at)) && (D(Gt), (jt = (te = this.overlay).refreshMenus) == null || jt.call(te), c && setTimeout(K, 40)), at instanceof HTMLSelectElement && v.type === "pointerdown") {
          const qt = () => R(Gt), ee = Date.now();
          at.addEventListener("change", qt, { once: !0 }), at.addEventListener("focusout", () => {
            Date.now() - ee < 280 || setTimeout(qt, 40);
          }, { once: !0 });
        }
      }
    };
    if (t.addEventListener("input", Z), t.addEventListener("change", Z), document.addEventListener("change", Z, !0), document.addEventListener("input", Z, !0), document.addEventListener("pointerdown", lt, !0), document.addEventListener("pointerup", lt, !0), document.addEventListener("click", lt, !0), d && typeof MutationObserver < "u") {
      const v = (Wt = t.querySelector) == null ? void 0 : Wt.call(t, ".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      v && !l && (y = new MutationObserver(() => {
        if (A() !== P) {
          if (c) {
            f = !0, g = !0, K();
            return;
          }
          R(t);
        }
      }), y.observe(v, {
        characterData: !0,
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "value"]
      }));
      const E = ((we = t.querySelector) == null ? void 0 : we.call(t, "[aria-expanded]")) || ((ht = t.hasAttribute) != null && ht.call(t, "aria-expanded") ? t : null);
      E && (S = new MutationObserver(() => {
        if (!(!g || p) && E.getAttribute("aria-expanded") === "false" && !(l && !f)) {
          if (c) {
            K();
            return;
          }
          (f || A() !== P) && R(t);
        }
      }), S.observe(E, { attributes: !0, attributeFilter: ["aria-expanded"] })), c && (w = new MutationObserver(() => {
        K();
      }), w.observe(t, {
        attributes: !0,
        attributeFilter: ["class", "aria-expanded"]
      }));
    }
    const Bt = setInterval(() => {
      if (!p) {
        if (l) {
          if (!f) return;
          R(t);
          return;
        }
        if (c) {
          A() !== P && (f = !0, g = !0), K();
          return;
        }
        if (A() !== P) {
          P = A(), R(t);
          return;
        }
        F && ut();
      }
    }, 80), Lt = (v) => {
      !F || p || v.key === "Enter" && z(v.target instanceof Element ? v.target : t) && $() && (v.preventDefault(), rt(t));
    };
    this.waitCleanup = () => {
      var v, E;
      clearTimeout(m), clearInterval(Bt), y == null || y.disconnect(), S == null || S.disconnect(), w == null || w.disconnect(), (E = (v = this.overlay).hideGoChip) == null || E.call(v), t.removeEventListener("input", Z), t.removeEventListener("change", Z), document.removeEventListener("change", Z, !0), document.removeEventListener("input", Z, !0), document.removeEventListener("keydown", Lt, !0), document.removeEventListener("pointerdown", lt, !0), document.removeEventListener("pointerup", lt, !0), document.removeEventListener("click", lt, !0);
    }, q(), F && (document.addEventListener("keydown", Lt, !0), ut());
  }
  async applyHideDelay(t) {
    var s;
    const e = Math.max(0, Number((s = t == null ? void 0 : t.settings) == null ? void 0 : s.hideDelay) || 0);
    e && (this.overlay.hide(), await new Promise((n) => setTimeout(n, e)));
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
  canGoPrev() {
    return Nn(this.steps, this.index);
  }
  prev() {
    !this.active || !this.canGoPrev() || (this.index -= 1, this.waitingForNavigation = !1, clearTimeout(this.navWaitTimer), this.showCurrent());
  }
  skip() {
    this.next();
  }
  complete() {
    this.stop(), this.onComplete();
  }
  clearWait() {
    var t;
    clearTimeout(this.autoSkipTimer), this.autoSkipTimer = null, this.abortPageSettle(), this.clearReadyWait(null), (t = this.waitCleanup) == null || t.call(this), this.waitCleanup = null;
  }
  stop() {
    var t, e, s, n;
    this.active = !1, this.token += 1, this.waitingForNavigation = !1, this.settleBeforeShow = !1, clearTimeout(this.navWaitTimer), this.navWaitTimer = null, clearTimeout(this.targetLostTimer), this.targetLostTimer = null, clearTimeout(this.rebindDebounceTimer), this.rebindDebounceTimer = null, this.lastChoiceField = null, this.lastCompletedField = null, this.clearWait(), (e = (t = this.overlay).hideWarning) == null || e.call(t), (n = (s = this.overlay).hideWaiting) == null || n.call(s), this.overlay.hide();
  }
  destroy() {
    this.stop();
  }
}
function Y(i) {
  const t = String(i || "/").trim() || "/";
  try {
    if (/^https?:\/\//i.test(t))
      return new URL(t).pathname || "/";
  } catch {
  }
  const e = t.split("?")[0].split("#")[0] || "/";
  return e.startsWith("/") ? e : `/${e}`;
}
function $n(i) {
  return Y(i).split("/").map((t) => t.trim()).filter(Boolean);
}
function Rn(i) {
  return String(i || "root").replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
}
function On(i = []) {
  const t = { path: "/", label: "Home", guides: [], children: /* @__PURE__ */ new Map() }, e = (n, r, o) => (n.children.has(r) || n.children.set(r, {
    path: o,
    label: Rn(r),
    guides: [],
    children: /* @__PURE__ */ new Map()
  }), n.children.get(r));
  for (const n of i) {
    if (!n || typeof n != "object") continue;
    const r = Y(n.url || "/"), o = $n(r);
    if (!o.length) {
      t.guides.push(n);
      continue;
    }
    let a = t, l = "";
    o.forEach((c) => {
      l += `/${c}`, a = e(a, c, l);
    }), a.guides.push(n);
  }
  const s = (n) => ({
    path: n.path,
    label: n.label,
    guides: [...n.guides].sort((r, o) => String(r.title || "").localeCompare(String(o.title || ""))),
    children: [...n.children.values()].map(s).sort((r, o) => r.label.localeCompare(o.label))
  });
  return [s(t)].filter((n) => n.guides.length > 0 || n.children.length > 0);
}
function as(i, t = 0, e = []) {
  for (const s of i || []) {
    const n = [];
    as(s.children, t + 1, n);
    const r = s.guides || [];
    if (r.length) {
      e.push({ type: "section", depth: t, path: s.path, label: s.label });
      for (const o of r)
        e.push({ type: "guide", depth: t + 1, guide: o });
    }
    e.push(...n);
  }
  return e;
}
const Gn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="4" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="4" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
</svg>`, Dn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
</svg>`, Fn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M10.2 8.4L16.2 12L10.2 15.6V8.4Z" fill="currentColor"/>
</svg>`, Hn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" fill="currentColor"/>
</svg>`;
function ls(i = "sg") {
  return `
<svg class="sg-siri" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
  <defs>
    <clipPath id="${i}-clip">
      <circle cx="40" cy="40" r="32"/>
    </clipPath>
    <radialGradient id="${i}-base" cx="42%" cy="38%" r="68%">
      <stop offset="0%" stop-color="#343178"/>
      <stop offset="55%" stop-color="#15123d"/>
      <stop offset="100%" stop-color="#07051d"/>
    </radialGradient>
    <linearGradient id="${i}-pink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.12"/>
      <stop offset="48%" stop-color="#ec4899" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#f0abfc" stop-opacity="0.42"/>
    </linearGradient>
    <linearGradient id="${i}-cyan" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.12"/>
      <stop offset="48%" stop-color="#22d3ee" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#67e8f9" stop-opacity="0.36"/>
    </linearGradient>
    <linearGradient id="${i}-blue" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#111827" stop-opacity="0.15"/>
      <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="#a5b4fc" stop-opacity="0.34"/>
    </linearGradient>
    <linearGradient id="${i}-rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c4b5fd"/>
      <stop offset="42%" stop-color="#7c3aed"/>
      <stop offset="76%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#312e81"/>
    </linearGradient>
    <radialGradient id="${i}-glass" cx="35%" cy="24%" r="72%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="28%" stop-color="#ffffff" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.18"/>
    </radialGradient>
    <filter id="${i}-soft" x="-35%" y="-35%" width="170%" height="170%">
      <feGaussianBlur stdDeviation="1.2"/>
    </filter>
    <filter id="${i}-liquid" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.5"/>
    </filter>
  </defs>

  <circle class="sg-siri__outer-glow" cx="40" cy="40" r="34" fill="none" stroke="url(#${i}-rim)" stroke-width="4" opacity="0.24"/>
  <g clip-path="url(#${i}-clip)">
    <circle cx="40" cy="40" r="32" fill="url(#${i}-base)"/>
    <g class="sg-siri__liquid" filter="url(#${i}-liquid)">
      <g class="sg-siri__fluid sg-siri__fluid--pink">
        <ellipse cx="39" cy="23" rx="29" ry="14" fill="url(#${i}-pink)" transform="rotate(-16 40 40)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--cyan">
        <path d="M8 43C24 29 48 28 72 43C58 61 35 64 8 43Z" fill="url(#${i}-cyan)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--blue">
        <path d="M19 13C50 21 66 43 59 73C38 60 24 41 19 13Z" fill="url(#${i}-blue)"/>
      </g>
      <g class="sg-siri__fluid sg-siri__fluid--light">
        <ellipse cx="40" cy="40" rx="20" ry="9" fill="#ecfeff" opacity="0.58" transform="rotate(22 40 40)"/>
      </g>
      <circle class="sg-siri__center-glow" cx="40" cy="40" r="9" fill="#ffffff" opacity="0.58"/>
    </g>
    <circle cx="40" cy="40" r="32" fill="url(#${i}-glass)"/>
  </g>
  <circle class="sg-siri__rim" cx="40" cy="40" r="32.5" fill="none" stroke="url(#${i}-rim)" stroke-width="1.5"/>
  <ellipse cx="34" cy="19" rx="15" ry="5" fill="#ffffff" opacity="0.12" transform="rotate(-12 34 19)"/>
</svg>`;
}
const Un = ls("sgA"), Wn = ls("sgB"), jn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 3.75h6M5.25 6.75h13.5M8.25 6.75V18a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V6.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 10.5v6M13.5 10.5v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, qn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Vn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`, Kn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M6 14.5V6.5A1.5 1.5 0 0 1 7.5 5H15.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, zn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 6.5 16 12 9 17.5V6.5Z" fill="currentColor"/>
</svg>`, Di = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 3c.6 3.4 2.3 5.1 5.7 5.7-3.4.6-5.1 2.3-5.7 5.7-.6-3.4-2.3-5.1-5.7-5.7C9.7 8.1 11.4 6.4 12 3Z" fill="currentColor"/>
  <path d="M18.5 14.5c.25 1.3.9 1.95 2.2 2.2-1.3.25-1.95.9-2.2 2.2-.25-1.3-.9-1.95-2.2-2.2 1.3-.25 1.95-.9 2.2-2.2Z" fill="currentColor"/>
</svg>`, Zn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
class Xn {
  constructor({
    zIndex: t,
    onOpenPanel: e,
    onBypassOpenPanel: s,
    onStartRecording: n,
    onPlayPageGuide: r,
    onDeleteGuide: o,
    onOpenManage: a,
    onStopTutorial: l,
    onSearchGuide: c
  }) {
    this.onOpenPanel = e, this.onBypassOpenPanel = s, this.onStartRecording = n, this.onPlayPageGuide = r, this.onDeleteGuide = o, this.onOpenManage = a, this.onStopTutorial = l, this.onSearchGuide = c, this.playing = !1, this.guideCount = 0, this.apiReady = !0, this.readOnly = !1, this.visible = !1, this.menuOpen = !1, this.searchGuides = [], this.searchCurrentUrl = "/", this.accountId = null, this.bypassPin = "123456", this.bypassBuffer = "", this.orbHovering = !1, this.showAccountId = !1, this.launcherSettings = {
      size: 80,
      position: "bottom-right",
      animations: !0
    }, this.root = document.createElement("div"), this.root.className = "sg-launcher is-hidden", this.root.hidden = !0, this.root.style.zIndex = String(t + 5), this.root.setAttribute("aria-label", "System Guider actions"), this.root.setAttribute("aria-hidden", "true"), this.optionsRoot = document.createElement("section"), this.optionsRoot.className = "sg-guide-picker", this.optionsRoot.hidden = !0, this.optionsRoot.setAttribute("aria-label", "All guides"), this.trigger = document.createElement("button"), this.trigger.type = "button", this.trigger.className = "sg-launcher__trigger", this.trigger.dataset.action = "toggle-menu", this.trigger.setAttribute("aria-label", "Show System Guider toolbar"), this.trigger.setAttribute("aria-expanded", "false"), this.trigger.title = "Show toolbar", this.trigger.innerHTML = `
      <span class="sg-launcher__avatar">${Un}</span>
    `, this.menu = this.createMenu(), this.recordButton = this.menu.querySelector('[data-action="start-recording"]'), this.panelButton = this.menu.querySelector('[data-action="open-panel"]'), this.playButton = this.menu.querySelector('[data-action="play-page"]'), this.playTitle = this.playButton.querySelector(".sg-launcher__tile-title"), this.root.append(this.optionsRoot, this.menu, this.trigger), this.bindOrbHover([this.trigger, this.orb].filter(Boolean)), this.applyControlsDisabled(), this.setMenuOpen(!1), this.onKeyDown = this.onKeyDown.bind(this), this.root.addEventListener("click", (d) => this.handleClick(d)), document.addEventListener("keydown", this.onKeyDown), document.body.append(this.root), this.setLauncherSettings(this.launcherSettings);
  }
  createMenu() {
    const t = document.createElement("div");
    t.className = "sg-launcher__menu", t.setAttribute("role", "dialog"), t.setAttribute("aria-label", "System Guider menu");
    const e = document.createElement("div");
    e.className = "sg-launcher__radial", this.radial = e;
    const s = document.createElement("div");
    s.className = "sg-launcher__petals";
    const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.classList.add("sg-launcher__connector"), n.setAttribute("viewBox", "0 0 304 150"), n.setAttribute("aria-hidden", "true"), n.innerHTML = `
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
    `, this.connector = n, this.placeAllConnectorDots();
    const r = this.createTile({
      action: "start-recording",
      variant: "record",
      title: "Record",
      subtitle: "Create a guide",
      icon: Dn,
      shortcut: "R"
    }), o = this.createTile({
      action: "open-panel",
      variant: "panel",
      title: "Panel",
      subtitle: "Guide controls",
      icon: Gn,
      shortcut: "P"
    }), a = this.createTile({
      action: "play-page",
      variant: "play",
      title: "Play guides",
      subtitle: "Start a tutorial",
      icon: Fn
    });
    this.stopButton = this.createTile({
      action: "stop-tutorial",
      variant: "stop",
      title: "Stop",
      subtitle: "End tutorial",
      icon: Hn
    }), this.stopButton.hidden = !0, s.append(a, r, o, this.stopButton), this.petalGroup = s;
    const l = document.createElement("button");
    l.type = "button", l.className = "sg-launcher__orb", l.dataset.action = "toggle-menu", l.setAttribute("aria-label", "Hide System Guider toolbar"), l.title = "Close", l.innerHTML = `
      <span class="sg-launcher__avatar">${Wn}</span>
    `, this.orb = l, e.append(n, s, l);
    const c = document.createElement("form");
    c.className = "sg-launcher__search", c.setAttribute("role", "search"), c.innerHTML = `
      <span class="sg-launcher__search-spark">${Di}</span>
      <input
        type="text"
        class="sg-launcher__search-input"
        placeholder="Search guides or press /"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search guides"
      />
      <button type="submit" class="sg-launcher__search-go" aria-label="Search">${Zn}</button>
    `, this.searchInput = c.querySelector(".sg-launcher__search-input"), this.searchInput.addEventListener("input", () => this.renderSearchResults()), c.addEventListener("submit", (u) => {
      u.preventDefault(), this.submitSearch();
    }), this.searchResults = document.createElement("div"), this.searchResults.className = "sg-launcher__results", this.searchResults.hidden = !0, this.accountLabel = document.createElement("span"), this.accountLabel.className = "sg-launcher__account", this.accountLabel.hidden = !0;
    const d = document.createElement("div");
    return d.className = "sg-launcher__hint", d.innerHTML = "Press <kbd>Esc</kbd> to close", t.append(e, c, this.searchResults, this.accountLabel, d), this.syncAccountLabel(), t;
  }
  createTile({ action: t, variant: e, title: s, subtitle: n = "", icon: r, shortcut: o = "" }) {
    const a = document.createElement("button");
    return a.type = "button", a.className = `sg-launcher__tile sg-launcher__tile--${e}`, a.dataset.action = t, a.setAttribute("aria-label", s), a.title = s, a.innerHTML = `
      ${o ? `<span class="sg-launcher__shortcut">${o}</span>` : ""}
      <span class="sg-launcher__icon">${r}</span>
      <span class="sg-launcher__tile-copy">
        <span class="sg-launcher__tile-title">${s}</span>
        ${n ? `<span class="sg-launcher__tile-subtitle">${n}</span>` : ""}
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
    const s = t.some((o) => o.classList.contains("sg-launcher__tile--record")), n = t.some((o) => o.classList.contains("sg-launcher__tile--panel"));
    (r = this.radial) == null || r.classList.toggle("is-compact", !s && !n), this.syncConnectorLayout(t);
  }
  /** Place connector dots exactly on their path (by arc length). */
  placeConnectorDots(t, e = [0.36, 0.68, 1]) {
    if (!t) return;
    const s = t.querySelector("path");
    if (!s || typeof s.getTotalLength != "function") return;
    let n = 0;
    try {
      n = s.getTotalLength();
    } catch {
      return;
    }
    if (!n) return;
    const r = t.querySelectorAll("circle");
    e.forEach((o, a) => {
      const l = r[a];
      if (!l) return;
      const c = s.getPointAtLength(Math.min(1, Math.max(0, o)) * n);
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
    const e = t || Array.from(((u = this.petalGroup) == null ? void 0 : u.children) || []).filter((h) => !h.hidden), s = e.length, n = e.some((h) => h.classList.contains("sg-launcher__tile--record")), r = e.some((h) => h.classList.contains("sg-launcher__tile--panel")), o = this.connector.querySelector(".sg-launcher__connector-line--play"), a = this.connector.querySelector(".sg-launcher__connector-line--record"), l = this.connector.querySelector(".sg-launcher__connector-line--panel");
    if (a && (a.style.display = n ? "" : "none"), l && (l.style.display = r ? "" : "none"), !o) return;
    const c = o.querySelector("path"), d = !n && !r;
    d && s === 1 ? c == null || c.setAttribute("d", "M54 112C58 118 72 122 96 120") : d && s === 2 ? c == null || c.setAttribute("d", "M52 100C48 84 64 72 96 74") : c == null || c.setAttribute("d", "M46 108C34 78 58 28 96 28"), this.placeConnectorDots(o), n && this.placeConnectorDots(a), r && this.placeConnectorDots(l);
  }
  matchGuides(t) {
    const e = String(t || "").trim().toLowerCase(), s = Array.isArray(this.searchGuides) ? this.searchGuides : [];
    return e ? s.map((n) => {
      const r = String(n.title || "").toLowerCase(), o = String(n.url || "").toLowerCase();
      let a = 0;
      return r.startsWith(e) && (a += 3), r.includes(e) && (a += 2), o.includes(e) && (a += 1), { guide: n, score: a };
    }).filter((n) => n.score > 0).sort((n, r) => r.score - n.score).slice(0, 6).map((n) => n.guide) : s.slice(0, 6);
  }
  renderSearchResults() {
    var s;
    if (!this.searchResults) return;
    const t = ((s = this.searchInput) == null ? void 0 : s.value) || "", e = this.matchGuides(t);
    if (this.searchResults.replaceChildren(), !t.trim()) {
      this.searchResults.hidden = !0;
      return;
    }
    if (!e.length) {
      const n = document.createElement("div");
      n.className = "sg-launcher__result-empty", n.textContent = "No matching guides", this.searchResults.append(n), this.searchResults.hidden = !1;
      return;
    }
    e.forEach((n) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sg-launcher__result", r.dataset.action = "search-select", r.dataset.guideId = n.id;
      const o = Array.isArray(n.steps) ? n.steps.length : 0, a = String(n.title || "Untitled guide").trim(), l = a.split(" · "), c = (l[0] || "Untitled guide").trim(), d = l.slice(1).join(" · ").trim(), h = /^\d+\s+steps?$/i.test(c) ? d || "Untitled guide" : a;
      r.innerHTML = `
        <span class="sg-launcher__result-spark">${Di}</span>
        <span class="sg-launcher__result-copy">
          <span class="sg-launcher__result-title"></span>
          <span class="sg-launcher__result-meta"></span>
        </span>
        <span class="sg-launcher__result-arrow">→</span>
      `, r.querySelector(".sg-launcher__result-title").textContent = h, r.querySelector(".sg-launcher__result-meta").textContent = `${n.url || "/"} · ${o} step${o === 1 ? "" : "s"}`, this.searchResults.append(r);
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
    var s, n, r, o, a, l, c, d, u, h, p, g;
    const e = (s = t.target.closest("[data-action]")) == null ? void 0 : s.dataset.action;
    if (e) {
      if (e === "toggle-menu") {
        this.setMenuOpen(!this.menuOpen);
        return;
      }
      if (e === "start-recording") {
        if (this.readOnly) return;
        (n = this.onStartRecording) == null || n.call(this), this.setMenuOpen(!1);
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
        const f = (l = t.target.closest("[data-guide-id]")) == null ? void 0 : l.dataset.guideId, m = (c = this.searchGuides) == null ? void 0 : c.find((y) => y.id === f);
        m && this.selectSearchGuide(m);
        return;
      }
      if (e === "close-picker" && this.hideGuideOptions(), e === "open-manage") {
        if (this.readOnly) return;
        this.hideGuideOptions(), (d = this.onOpenManage) == null || d.call(this);
      }
      if (e === "select-guide") {
        const f = (u = t.target.closest("[data-guide-id]")) == null ? void 0 : u.dataset.guideId, m = (h = this.guides) == null ? void 0 : h.find((y) => y.id === f);
        if (m) {
          const y = this.onSelectGuide;
          this.hideGuideOptions(), y == null || y(m);
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
    const e = (s) => {
      this.orbHovering = !!s, s || (this.bypassBuffer = "");
    };
    t.forEach((s) => {
      s.addEventListener("pointerenter", () => e(!0)), s.addEventListener("pointerleave", () => e(!1));
    });
  }
  setBypassPin(t) {
    this.bypassPin = String(t || "").replace(/\D/g, "").slice(0, 12), this.bypassBuffer = "";
  }
  tryBypassPin(t) {
    var o;
    const e = this.bypassPin;
    if (!e || !this.orbHovering || !this.visible || t.metaKey || t.ctrlKey || t.altKey) return !1;
    const s = t.target;
    if (s instanceof HTMLElement && (s.tagName === "INPUT" || s.tagName === "TEXTAREA" || s.tagName === "SELECT" || s.isContentEditable)) return !1;
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
    const e = t.target, s = e instanceof HTMLElement && (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable);
    if (t.key === "/" && !s) {
      t.preventDefault(), (o = this.searchInput) == null || o.focus();
      return;
    }
    if (s) return;
    const n = String(t.key || "").toLowerCase();
    n === "r" && !this.recordButton.disabled && (t.preventDefault(), (a = this.onStartRecording) == null || a.call(this), this.setMenuOpen(!1)), n === "p" && !this.panelButton.disabled && (t.preventDefault(), (l = this.onOpenPanel) == null || l.call(this), this.setMenuOpen(!1));
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
    this.showAccountId = !!t, this.syncAccountLabel();
  }
  setLauncherSettings(t = {}) {
    const e = Math.min(96, Math.max(48, Math.round(Number(t.size) || 80))), s = ["bottom-right", "bottom-left", "top-right", "top-left"], n = s.includes(t.position) ? t.position : "bottom-right", r = t.animations !== !1;
    this.launcherSettings = { size: e, position: n, animations: r }, this.root.style.setProperty("--sg-orb-size", `${e}px`), s.forEach((o) => {
      this.root.classList.toggle(`is-position-${o}`, n === o);
    }), this.root.classList.toggle("is-orb-static", !r);
  }
  syncAccountLabel() {
    if (!this.accountLabel) return;
    const t = this.accountId == null || this.accountId === "" ? "" : String(this.accountId), e = !!(this.showAccountId && t);
    this.accountLabel.hidden = !e, this.accountLabel.textContent = e ? `Account ID: ${t}` : "";
  }
  setVisible(t) {
    this.visible = !!t, this.root.hidden = !this.visible, this.root.classList.toggle("is-hidden", !this.visible), this.root.setAttribute("aria-hidden", String(!this.visible)), this.visible || this.setMenuOpen(!1);
  }
  applyPlayDisabled() {
    this.applyControlsDisabled();
  }
  applyControlsDisabled() {
    const t = !this.apiReady, e = !!this.playing, s = !!this.readOnly;
    if (this.playButton.disabled = t || e || (this.guideCount ?? 0) < 1, t)
      this.playButton.title = "Waiting for guide API…";
    else if ((this.guideCount ?? 0) < 1)
      this.playButton.title = "No guides saved yet";
    else if (e)
      this.playButton.title = "Stop the tutorial first";
    else {
      const n = this.guideCount ?? 0;
      this.playButton.title = `${n} guide${n === 1 ? "" : "s"} available`;
    }
    this.recordButton.disabled = t || e || s, this.panelButton.disabled = t || e || s, this.stopButton.disabled = !e, this.stopButton.hidden = !e, this.stopButton.classList.toggle("is-disabled", !e), this.menuOpen && this.layoutPetals(), s ? (this.recordButton.title = "View-only: recording disabled", this.panelButton.title = "View-only: manage disabled") : t ? (this.recordButton.title = "Waiting for guide API…", this.panelButton.title = "Waiting for guide API…") : e ? (this.recordButton.title = "Stop the tutorial first", this.panelButton.title = "Stop the tutorial first") : (this.recordButton.title = "Start recording", this.panelButton.title = "Guide Panel"), this.stopButton.title = e ? "Stop tutorial" : "No tutorial playing";
  }
  showGuideOptions(t, e, { hierarchical: s = !0, currentUrl: n = "/" } = {}) {
    this.guides = t, this.onSelectGuide = e, this.optionsRoot.replaceChildren(), this.setMenuOpen(!1);
    const r = document.createElement("header");
    r.className = "sg-guide-picker__header";
    const o = document.createElement("div");
    o.className = "sg-guide-picker__brand";
    const a = document.createElement("span");
    a.className = "sg-guide-picker__brand-icon", a.setAttribute("aria-hidden", "true"), a.innerHTML = qn;
    const l = document.createElement("div");
    l.className = "sg-guide-picker__brand-copy";
    const c = document.createElement("strong");
    c.className = "sg-guide-picker__title", c.textContent = s ? "All Guides" : "Page Guides";
    const d = document.createElement("span");
    d.className = "sg-guide-picker__subtitle", d.textContent = s ? "Manage your guides" : "Choose a guide to play", l.append(c, d), o.append(a, l);
    const u = document.createElement("div");
    u.className = "sg-guide-picker__actions";
    const h = document.createElement("button");
    h.type = "button", h.className = "sg-guide-picker__manage", h.dataset.action = "open-manage", h.innerHTML = `<span class="sg-guide-picker__manage-icon">${Vn}</span><span>Manage</span>`, h.hidden = this.readOnly, this.manageButton = h;
    const p = document.createElement("button");
    p.type = "button", p.className = "sg-guide-picker__close", p.dataset.action = "close-picker", p.setAttribute("aria-label", "Close guide options"), p.textContent = "×", u.append(h, p), r.append(o, u);
    const g = document.createElement("div");
    if (g.className = "sg-guide-picker__list", t.length)
      if (s) {
        const f = as(On(t));
        let m = 0;
        f.forEach((y) => {
          if (y.type === "section") {
            const S = document.createElement("div");
            S.className = "sg-guide-picker__section", S.style.setProperty("--sg-toc-depth", String(y.depth));
            const w = Y(n), _ = Y(y.path);
            (w === _ || _ !== "/" && w.startsWith(`${_}/`)) && S.classList.add("is-current");
            const x = document.createElement("span");
            x.className = "sg-guide-picker__section-label", x.textContent = y.label;
            const b = document.createElement("span");
            b.className = "sg-guide-picker__section-meta";
            const k = document.createElement("span");
            k.className = "sg-guide-picker__section-path", k.textContent = y.path;
            const C = document.createElement("button");
            C.type = "button", C.className = "sg-guide-picker__copy-path", C.title = "Copy path", C.setAttribute("aria-label", `Copy ${y.path}`), C.innerHTML = Kn, C.addEventListener("click", async (T) => {
              var L, B;
              T.preventDefault(), T.stopPropagation();
              try {
                await ((B = (L = navigator.clipboard) == null ? void 0 : L.writeText) == null ? void 0 : B.call(L, y.path)), C.classList.add("is-copied"), setTimeout(() => C.classList.remove("is-copied"), 900);
              } catch {
              }
            }), b.append(k, C), S.append(x, b), g.append(S);
            return;
          }
          m += 1, g.append(this.createGuideRow(y.guide, m, {
            depth: y.depth,
            currentUrl: n
          }));
        });
      } else
        t.forEach((f, m) => {
          g.append(this.createGuideRow(f, m + 1, { depth: 0, currentUrl: n }));
        });
    else {
      const f = document.createElement("div");
      f.className = "sg-guide-picker__empty", f.textContent = "No guides saved yet.", g.append(f);
    }
    this.optionsRoot.append(r, g), this.optionsRoot.hidden = !1, this.syncClosedRail();
  }
  createGuideRow(t, e, { depth: s = 0, currentUrl: n = "/" } = {}) {
    const r = document.createElement("div");
    r.className = "sg-guide-picker__row", r.dataset.guideId = t.id, r.style.setProperty("--sg-toc-depth", String(s));
    const o = Y(t.url || "/");
    o === Y(n) && r.classList.add("is-current-page");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-guide-picker__option", a.dataset.action = "select-guide", a.dataset.guideId = t.id;
    const l = document.createElement("span");
    l.className = "sg-guide-picker__number", l.textContent = String(e).padStart(2, "0");
    const c = document.createElement("span");
    c.className = "sg-guide-picker__copy";
    const d = document.createElement("strong"), u = String(t.title || "Untitled guide").trim(), h = u.split(" · "), p = (h[0] || "Untitled guide").trim(), g = h.slice(1).join(" · ").trim(), f = /^\d+\s+steps?$/i.test(p);
    d.textContent = f ? g || "Untitled guide" : u;
    const m = document.createElement("small"), y = Array.isArray(t.steps) ? t.steps.length : Number(t.steps) || 0, S = document.createElement("span");
    S.className = "sg-guide-picker__path", S.textContent = o;
    const w = document.createElement("span");
    w.className = "sg-guide-picker__dot", w.textContent = "·";
    const _ = document.createElement("span");
    _.textContent = `${y} step${y === 1 ? "" : "s"}`, m.append(S, w, _), c.append(d, m);
    const x = document.createElement("span");
    x.className = "sg-guide-picker__play", x.setAttribute("aria-hidden", "true"), x.innerHTML = zn, a.append(l, c, x);
    const b = document.createElement("button");
    return b.type = "button", b.className = "sg-guide-picker__delete", b.dataset.action = "delete-guide", b.dataset.guideId = t.id, b.setAttribute("aria-label", `Delete ${t.title || "guide"}`), b.title = "Delete guide", b.innerHTML = jn, this.readOnly && (b.hidden = !0), r.append(a, b), r;
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
const Jn = (i) => JSON.parse(JSON.stringify(i));
function Ct(i) {
  if (!i || typeof i != "object" || !Array.isArray(i.steps))
    throw new TypeError("Guide must be an object with a steps array.");
  const t = /* @__PURE__ */ new Set();
  return i.steps.forEach((e, s) => {
    if (!e || typeof e != "object")
      throw new TypeError(`Step ${s + 1} must be an object.`);
    if (typeof e.id != "string" || !e.id.trim())
      throw new TypeError(`Step ${s + 1} requires an id.`);
    if (t.has(e.id)) throw new TypeError(`Duplicate step id: ${e.id}`);
    if (t.add(e.id), !["click", "input", "manual"].includes(e.action))
      throw new TypeError(`Unsupported action in step ${s + 1}.`);
    if (e.action !== "manual" && typeof e.selector != "string" && !e.match)
      throw new TypeError(`Step ${s + 1} requires a selector or match hints.`);
    if (e.match != null && (typeof e.match != "object" || Array.isArray(e.match)))
      throw new TypeError(`Step ${s + 1} match must be an object.`);
  }), Jn({
    id: String(i.id || `guide-${Date.now()}`),
    title: String(i.title || "Untitled guide"),
    version: Number(i.version) || 1,
    ...i.url ? { url: String(i.url) } : {},
    ...i.settings && typeof i.settings == "object" && !Array.isArray(i.settings) ? { settings: i.settings } : {},
    steps: i.steps
  });
}
function Fi(i) {
  const t = typeof i == "string" ? JSON.parse(i) : i;
  let e = [];
  if (Array.isArray(t))
    e = t;
  else if (t && typeof t == "object" && Array.isArray(t.guides))
    e = t.guides;
  else if (t && typeof t == "object" && Array.isArray(t.steps))
    e = [t];
  else
    throw new TypeError("Expected a guide JSON, an array of guides, or a { guides: [...] } bundle.");
  const s = [], n = [];
  if (e.forEach((r, o) => {
    try {
      s.push(Ct(r));
    } catch (a) {
      n.push(`Guide ${o + 1}: ${a.message}`);
    }
  }), !s.length)
    throw new TypeError(n[0] || "No valid guides found in the file.");
  return { guides: s, errors: n };
}
function We(i) {
  return JSON.stringify(Ct(i), null, 2);
}
function Yn(i) {
  const t = (Array.isArray(i) ? i : []).map((e) => Ct(e));
  return JSON.stringify({
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    guides: t
  }, null, 2);
}
function Qn(i, t) {
  !i || typeof localStorage > "u" || localStorage.setItem(i, We(t));
}
function tr(i) {
  if (!i || typeof localStorage > "u") return null;
  const t = localStorage.getItem(i);
  return t ? Ct(JSON.parse(t)) : null;
}
function cs(i, t, e = "application/json") {
  const s = new Blob([i], { type: e }), n = URL.createObjectURL(s), r = document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function er(i, t = "system-guide.json") {
  cs(We(i), t);
}
function ir(i, t = "system-guider-guides.json") {
  cs(Yn(i), t);
}
async function sr(i) {
  var e;
  const t = We(i);
  if (!((e = navigator.clipboard) != null && e.writeText))
    throw new Error("Clipboard API is unavailable in this browser.");
  return await navigator.clipboard.writeText(t), t;
}
function nr(i = ((e) => (e = globalThis.location) == null ? void 0 : e.href)(), t = "pathname") {
  var s;
  try {
    const n = new URL(i, ((s = globalThis.location) == null ? void 0 : s.origin) || "http://localhost");
    return t === "full" ? `${n.pathname}${n.search}` || "/" : n.pathname || "/";
  } catch {
    return "/";
  }
}
function rr(i = "pathname") {
  var t;
  return nr((t = globalThis.location) == null ? void 0 : t.href, i);
}
function ds(i) {
  return `${i || "system-guider"}:by-url`;
}
function mi(i) {
  if (typeof localStorage > "u") return {};
  try {
    const t = localStorage.getItem(ds(i)), e = t ? JSON.parse(t) : {};
    return e && typeof e == "object" ? e : {};
  } catch {
    return {};
  }
}
function us(i, t) {
  typeof localStorage > "u" || localStorage.setItem(ds(i), JSON.stringify(t));
}
function yi(i) {
  return Array.isArray(i) ? i.filter(Boolean) : i ? [i] : [];
}
function Me(i, t, e) {
  const s = mi(i), n = yi(s[t]), r = n.findIndex((o) => (o == null ? void 0 : o.id) === e.id);
  return r >= 0 ? n[r] = e : n.push(e), s[t] = n, us(i, s), n;
}
function or(i) {
  const t = mi(i), e = [];
  return Object.entries(t).forEach(([s, n]) => {
    yi(n).forEach((r) => {
      e.push({ ...r, url: (r == null ? void 0 : r.url) || s });
    });
  }), e;
}
function ar(i, t, e) {
  const s = mi(i), n = yi(s[t]).filter((r) => (r == null ? void 0 : r.id) !== e);
  return n.length ? s[t] = n : delete s[t], us(i, s), n;
}
function bi(i) {
  return `${i || "system-guider"}:pending-play`;
}
function Le(i, t) {
  typeof sessionStorage > "u" || sessionStorage.setItem(bi(i), JSON.stringify(t));
}
function lr(i) {
  if (typeof sessionStorage > "u") return null;
  const t = bi(i), e = sessionStorage.getItem(t);
  if (sessionStorage.removeItem(t), !e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function ue(i) {
  typeof sessionStorage > "u" || sessionStorage.removeItem(bi(i));
}
function hs(i) {
  return String(i || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";
}
function cr(i) {
  const t = String(i || "/").split(/[\\/]+/).map((e) => e.trim()).filter(Boolean).map(hs);
  return t.length ? t.join("/") : "root";
}
function dr(i) {
  return `${hs((i == null ? void 0 : i.title) || (i == null ? void 0 : i.id) || "guide")}.json`;
}
function ci(i, t = i == null ? void 0 : i.url) {
  return `${cr(t)}/${dr(i)}`;
}
function ur(i = {}) {
  if (i === !1) return null;
  const t = i === !0 || i == null ? {} : i;
  return {
    baseUrl: t.baseUrl || "/__sg/guides",
    publicBase: t.publicBase || "/guides",
    downloadFallback: t.downloadFallback !== !1,
    ...t
  };
}
async function Si(i, t, e) {
  const s = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }, n = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/);
  n != null && n[1] && (s["X-XSRF-TOKEN"] = decodeURIComponent(n[1]));
  const r = document.querySelector('meta[name="csrf-token"]');
  r != null && r.content && (s["X-CSRF-TOKEN"] = r.content);
  const o = await fetch(i, {
    method: t,
    headers: s,
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
async function Ne(i, t, e) {
  const s = ci(t, e);
  try {
    const n = await Si(i.baseUrl, "POST", {
      guide: t,
      urlKey: e || t.url || "/",
      path: s
    });
    return { ok: !0, path: (n == null ? void 0 : n.path) || s, via: "api" };
  } catch (n) {
    if (!i.downloadFallback) throw n;
    const r = s.replace(/\//g, "__"), o = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), a = URL.createObjectURL(o), l = document.createElement("a");
    return l.href = a, l.download = r, l.click(), URL.revokeObjectURL(a), { ok: !0, path: s, via: "download", error: n.message };
  }
}
async function hr(i, { guideId: t, urlKey: e, path: s }) {
  try {
    return await Si(i.baseUrl, "DELETE", { guideId: t, urlKey: e, path: s }), { ok: !0 };
  } catch {
    return { ok: !1 };
  }
}
async function pr(i) {
  const t = `${String(i.publicBase || "/guides").replace(/\/$/, "")}/index.json`, e = await fetch(t, { headers: { Accept: "application/json" } });
  if (!e.ok) return { version: 1, guides: [] };
  const s = await e.json();
  return s && typeof s == "object" ? { version: Number(s.version) || 1, guides: Array.isArray(s.guides) ? s.guides : [] } : { version: 1, guides: [] };
}
async function Hi(i) {
  if (!(i != null && i.baseUrl)) return !1;
  try {
    return (await fetch(i.baseUrl, {
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
async function gr(i) {
  const t = await pr(i), e = String(i.publicBase || "/guides").replace(/\/$/, ""), s = [];
  for (const n of t.guides) {
    const r = n == null ? void 0 : n.path;
    if (r)
      try {
        const o = await fetch(`${e}/${r}`, {
          headers: { Accept: "application/json" }
        });
        if (!o.ok) continue;
        const a = await o.json();
        a && Array.isArray(a.steps) && s.push({
          ...a,
          url: a.url || n.url,
          title: a.title || n.title,
          id: a.id || n.id
        });
      } catch {
      }
  }
  return s;
}
async function fr(i) {
  const t = String(i.publicBase || "/guides").replace(/\/$/, ""), e = await fetch(`${t}/settings.json`, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });
  if (!e.ok) return null;
  const s = await e.json();
  return s && typeof s == "object" && !Array.isArray(s) ? s : null;
}
async function mr(i, t) {
  const e = await Si(i.baseUrl, "POST", {
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
const yr = {
  next: "Next Step",
  back: "Back",
  close: "Close Guide",
  skip: "Next Step",
  startRecording: "Start Recording",
  stopRecording: "Stop Recording"
}, he = (i = "") => ({
  id: `guide-${Date.now()}`,
  title: i ? `Guide for ${i}` : "New system guide",
  version: 1,
  url: i || void 0,
  steps: []
});
class br {
  constructor(t = {}) {
    var e, s, n, r, o, a, l, c, d, u, h, p, g, f, m;
    this.options = {
      overlayOpacity: 0.58,
      allowClose: !0,
      zIndex: 2147483e3,
      selectorTimeout: 5e3,
      autoAdvanceOnInput: !0,
      autoAdvanceDelay: 600,
      autoSkipMissing: !0,
      autoSkipMissingDelay: 400,
      autoSkipIdleMissTimeout: 2e3,
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
      labels: { ...yr, ...t.labels }
    }, this.settings = Pt({
      ...Qi(),
      ...t.settings || {}
    }), this.options.resetBeforePlay = this.settings.resetBeforePlay || this.options.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay ?? this.options.resetBeforePlayDelay, this.options.pageSettleAfterClick = this.settings.pageSettleAfterClick, this.options.pageSettleTimeout = this.settings.pageSettleTimeout, this.options.postReadyDelay = this.settings.postReadyDelay, this.applyLoadingUiFromSettings(), de(this.settings), this.fileStorage = ur(this.options.fileStorage), this.fileGuides = [], this.guideSaveTimer = null, this.settingsSaveTimer = null, this.apiReady = !this.fileStorage, this.apiProbeTimer = null, this.guide = he(this.getUrlKey()), this.mode = "idle", this.dirty = !1, this.recordingAppend = !1, this.destroyed = !1, this.recordingStepsBaseline = 0, this.panelVisible = !this.options.showLauncher, this.readOnly = !1, this.bypassUnlocked = !1, this.launcherVisible = !1, this.settingsReady = !this.fileStorage, this.accountId = t.accountId ?? null, this.overlay = new An({
      ...this.options,
      skipLabel: ((e = this.options.labels) == null ? void 0 : e.skip) || ((s = this.options.labels) == null ? void 0 : s.next) || "Next Step",
      prevLabel: ((n = this.options.labels) == null ? void 0 : n.back) || ((r = this.options.labels) == null ? void 0 : r.prev) || "Prev",
      onSkip: () => this.skip(),
      onPrev: () => this.prev(),
      onEnd: () => this.endPlayback(),
      onHighlightBox: (y) => {
        var S;
        return (S = this.panel) == null ? void 0 : S.avoidHighlight(y);
      },
      onTargetLost: () => {
        var y, S;
        return (S = (y = this.player) == null ? void 0 : y.onSpotlightTargetLost) == null ? void 0 : S.call(y);
      },
      ui: this.settings.ui
    }), this.recorder = new wn({
      onStep: (y) => this.recordStep(y)
    }), this.player = new In({
      overlay: this.overlay,
      timeout: this.options.selectorTimeout,
      autoAdvanceOnInput: this.options.autoAdvanceOnInput,
      autoAdvanceDelay: this.options.autoAdvanceDelay,
      autoSkipMissing: this.options.autoSkipMissing,
      autoSkipMissingDelay: this.options.autoSkipMissingDelay,
      autoSkipIdleMissTimeout: this.options.autoSkipIdleMissTimeout ?? 2e3,
      stableWaitTimeout: this.options.stableWaitTimeout,
      targetWaitTimeout: this.options.targetWaitTimeout,
      targetRetryInterval: this.options.targetRetryInterval,
      pageSettleAfterClick: this.settings.pageSettleAfterClick !== !1,
      pageSettleTimeout: this.settings.pageSettleTimeout ?? 2e4,
      postReadyDelay: this.settings.postReadyDelay ?? 1500,
      stepDelay: 0,
      autoScroll: !0,
      ui: this.settings.ui,
      onChange: (y, S, w) => this.onPlaybackChange(y, S, w),
      onFail: (y, S) => this.onPlaybackFail(y, S),
      onComplete: () => this.onPlaybackComplete(),
      onClickAdvance: (y, S, w, _) => {
        this.persistPlaybackProgress(w, _);
      }
    }), this.playbackResumeTimer = null, this.panel = new As({
      labels: this.options.labels,
      zIndex: this.options.zIndex,
      handlers: this.createHandlers(),
      visible: this.panelVisible
    }), this.launcher = this.options.showLauncher ? new Xn({
      zIndex: this.options.zIndex,
      onOpenPanel: () => this.togglePanel(),
      onBypassOpenPanel: () => this.openPanelViaBypass(),
      onStartRecording: () => this.startRecording(),
      onPlayPageGuide: () => this.playPageGuide(),
      onDeleteGuide: (y) => this.deletePageGuide(y),
      onOpenManage: () => this.openManageRoutes(),
      onStopTutorial: () => this.close(!0),
      onSearchGuide: (y) => this.playGuide(y)
    }) : null, (o = this.launcher) == null || o.setApiReady(this.apiReady), (a = this.launcher) == null || a.setReadOnly(this.readOnly), (d = (l = this.launcher) == null ? void 0 : l.setBypassPin) == null || d.call(l, (c = this.settings) == null ? void 0 : c.bypassPin), (p = (u = this.launcher) == null ? void 0 : u.setLauncherSettings) == null || p.call(u, (h = this.settings) == null ? void 0 : h.launcher), (f = (g = this.launcher) == null ? void 0 : g.setAccountId) == null || f.call(g, this.accountId), (m = this.launcher) == null || m.setVisible(!1), this.onKeyDown = this.onKeyDown.bind(this), this.onUrlChange = this.onUrlChange.bind(this), document.addEventListener("keydown", this.onKeyDown), window.addEventListener("popstate", this.onUrlChange), this.installHistoryHooks(), this.applyAccessPolicy(), this.bootstrap();
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
      const e = await gr(this.fileStorage);
      if (this.fileGuides = Array.isArray(e) ? e : [], this.dirty && ((t = this.guide) != null && t.id)) {
        const s = structuredClone(this.guide), n = this.fileGuides.findIndex((r) => r.id === this.guide.id);
        n >= 0 ? this.fileGuides[n] = s : this.fileGuides = [...this.fileGuides, s];
      }
    } catch {
      this.fileGuides = [];
    }
    this.syncLauncher(), this.render();
  }
  async reloadFileSettings() {
    var t, e, s, n, r, o, a, l;
    if (!this.fileStorage) {
      this.settingsReady = !0;
      return;
    }
    try {
      const c = await fr(this.fileStorage);
      c && (this.settings = Pt({
        ...this.settings,
        ...c,
        ...this.options.settings || {}
      }), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, this.options.pageSettleAfterClick = this.settings.pageSettleAfterClick, this.options.pageSettleTimeout = this.settings.pageSettleTimeout, this.options.postReadyDelay = this.settings.postReadyDelay, this.applyLoadingUiFromSettings(), de(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (n = (s = this.player) == null ? void 0 : s.setUiOptions) == null || n.call(s, this.settings.ui), (o = (r = this.player) == null ? void 0 : r.setOptions) == null || o.call(r, {
        pageSettleAfterClick: this.settings.pageSettleAfterClick,
        pageSettleTimeout: this.settings.pageSettleTimeout,
        postReadyDelay: this.settings.postReadyDelay
      }), (l = (a = this.launcher) == null ? void 0 : a.setLauncherSettings) == null || l.call(a, this.settings.launcher));
    } catch {
    } finally {
      this.settingsReady = !0, this.applyAccessPolicy();
    }
  }
  /** Sync settings.loadingSelectors into selector settle / present checks. */
  applyLoadingUiFromSettings() {
    var t;
    Us(Ys((t = this.settings) == null ? void 0 : t.loadingSelectors));
  }
  /** Host app sets the logged-in account id used for editor allow-list checks. */
  setAccountId(t) {
    var e, s;
    return this.accountId = t == null || t === "" ? null : String(t), (s = (e = this.launcher) == null ? void 0 : e.setAccountId) == null || s.call(e, this.accountId), this.applyAccessPolicy(), this;
  }
  setReadOnly(t) {
    var s, n;
    const e = !!t;
    return this.readOnly === e ? ((s = this.launcher) == null || s.setReadOnly(this.readOnly), this) : (this.readOnly = e, (n = this.launcher) == null || n.setReadOnly(this.readOnly), this.readOnly && (this.mode === "recording" || this.mode === "manage" || this.mode === "manage-routes") && (this.mode === "recording" && this.stopRecording(), this.mode = "idle", this.closePanel()), this.render(), this);
  }
  setLauncherVisible(t) {
    var s, n, r, o;
    const e = !!t;
    return this.launcherVisible === e ? ((s = this.launcher) == null || s.setVisible(this.launcherVisible), this) : (this.launcherVisible = e, (n = this.launcher) == null || n.setVisible(this.launcherVisible), this.launcherVisible || ((o = (r = this.launcher) == null ? void 0 : r.setMenuOpen) == null || o.call(r, !1), this.mode !== "playback" && this.mode !== "recording" && this.closePanel()), this);
  }
  /** Sync read-only + toolbar visibility from settings + current account/url. */
  applyAccessPolicy() {
    var r, o, a, l, c, d, u, h, p, g, f, m;
    const t = this.bypassUnlocked || tn(this.accountId, (r = this.settings) == null ? void 0 : r.editorAccountIds);
    if (this.setReadOnly(!t), this.fileStorage && !this.settingsReady)
      return this.setLauncherVisible(!1), this;
    const e = Qs(this.getUrlKey(), (o = this.settings) == null ? void 0 : o.hiddenUrls), s = ((a = this.settings) == null ? void 0 : a.showOrb) !== !1, n = this.options.showLauncher !== !1 && s && !e;
    return this.setLauncherVisible(n), (d = (l = this.launcher) == null ? void 0 : l.setBypassPin) == null || d.call(l, (c = this.settings) == null ? void 0 : c.bypassPin), (p = (u = this.launcher) == null ? void 0 : u.setShowAccountId) == null || p.call(u, !!((h = this.settings) != null && h.showAccountId)), (m = (g = this.launcher) == null ? void 0 : g.setLauncherSettings) == null || m.call(g, (f = this.settings) == null ? void 0 : f.launcher), this;
  }
  /** Unlock editor mode via orb hover + PIN, then open Global Settings panel. */
  openPanelViaBypass() {
    var t, e;
    return this.mode === "playback" ? this : this.fileStorage && !this.apiReady ? this : (this.bypassUnlocked = !0, this.setReadOnly(!1), this.openManageRoutes(), (e = (t = this.launcher) == null ? void 0 : t.setMenuOpen) == null || e.call(t, !1), this);
  }
  async bootstrap() {
    var t, e, s, n;
    await Promise.all([this.reloadFileGuides(), this.reloadFileSettings()]), this.settingsReady = !0, this.applyAccessPolicy();
    try {
      const r = this.getGuideForCurrentPage();
      if (r) this.load(r, { dirty: !1, mode: "idle" });
      else if (!this.fileStorage) {
        const o = tr(this.options.storageKey);
        o && this.load(o, { dirty: !1, mode: "manage" });
      }
    } catch {
    }
    await this.ensureGuideApiReady(), this.syncLauncher(), this.render(), de(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (n = (s = this.player) == null ? void 0 : s.setUiOptions) == null || n.call(s, this.settings.ui), this.resumePendingPlay();
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
    if (this.clearApiProbeTimer(), await Hi(this.fileStorage) || this.fileStorage.downloadFallback)
      return this.setApiReady(!0), !0;
    if (this.setApiReady(!1), this.destroyed) return !1;
    const e = async () => {
      if (this.destroyed || !this.fileStorage) return;
      if (await Hi(this.fileStorage) || this.fileStorage.downloadFallback) {
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
      edit: (t, e, s) => this.editStep(t, e, s),
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
        const e = this.getAllGuides().find((s) => s.id === t);
        e && this.playGuide(e);
      },
      "edit-guide": (t) => this.openGuideForEdit(t),
      "delete-guide": (t) => this.deletePageGuide(t),
      "edit-step-setting": (t, e, s) => this.editStepSetting(t, e, s),
      "edit-guide-setting": (t, e, s) => this.editGuideSetting(t, e, s)
    };
  }
  getUrlKey() {
    return typeof this.options.getUrlKey == "function" ? String(this.options.getUrlKey() || "/") : rr(this.options.urlMatch);
  }
  getGuideForCurrentPage() {
    return this.getGuidesForCurrentPage()[0] || null;
  }
  getGuidesForCurrentPage() {
    const t = Y(this.getUrlKey());
    return this.getAllGuides().filter((e) => Y(e.url || "/") === t);
  }
  getAllGuides() {
    const t = [];
    Object.entries(this.options.guides || {}).forEach(([o, a]) => {
      (Array.isArray(a) ? a : a ? [a] : []).forEach((c) => t.push({ ...c, url: c.url || o }));
    });
    const e = this.options.guidesByUrl ? or(this.options.storageKey) : [], s = this.fileGuides || [], n = /* @__PURE__ */ new Map(), r = this.fileStorage ? [...t, ...e, ...s] : [...t, ...s, ...e];
    for (const o of r)
      try {
        const a = Ct(o);
        n.set(a.id, a);
      } catch {
      }
    return [...n.values()].sort((o, a) => String(o.url || "").localeCompare(String(a.url || "")) || String(o.title || "").localeCompare(String(a.title || "")));
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
    if (this.guide = Ct({
      ...this.guide,
      url: t,
      title: this.guide.title || `Guide for ${t}`
    }), this.options.guidesByUrl && Me(this.options.storageKey, t, this.guide), this.dirty = !1, this.persistDraft(), Array.isArray(this.fileGuides)) {
      const s = this.fileGuides.findIndex((n) => n.id === this.guide.id);
      s >= 0 ? this.fileGuides[s] = { ...this.fileGuides[s], ...this.guide } : this.fileGuides = [...this.fileGuides, structuredClone(this.guide)];
    }
    return this.syncLauncher(), this.render({
      flashMessage: `Saved “${this.guide.title || "Untitled guide"}”.`
    }), this.fileStorage && (ci(this.guide, t), Ne(this.fileStorage, this.guide, t).then(async (s) => {
      var n;
      await this.reloadFileGuides(), s.via === "download" && ((n = globalThis.alert) == null || n.call(
        globalThis,
        `Guide downloaded as ${String(s.path).replace(/\//g, "__")}. Place it in your app public/guides/ (same route folders).`
      ));
    }).catch((s) => {
      var n;
      (n = globalThis.alert) == null || n.call(globalThis, `Guide saved locally, but file storage failed: ${s.message}`);
    })), this;
  }
  playPageGuide(t) {
    var s, n, r;
    if (this.assertUsable(), this.fileStorage && !this.apiReady) return this;
    const e = this.getAllGuides();
    if (!e.length)
      return this.openPanel(), (s = globalThis.alert) == null || s.call(globalThis, "No guides saved yet. Record one first."), this;
    if (t) {
      const o = e.find((a) => a.id === t);
      return o ? this.playGuide(o) : ((n = globalThis.alert) == null || n.call(globalThis, "That guide could not be found."), this);
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
    const e = Ct(t), s = Y(e.url || "/"), n = Y(this.getUrlKey());
    if (s !== n) {
      if (Le(this.options.storageKey, {
        guideId: e.id,
        urlKey: s,
        guide: e,
        stepIndex: 0
      }), this.getGuidePlaybackSettings(e).reloadOnNavigate || typeof this.options.navigate != "function")
        return globalThis.location.assign(s), this;
      try {
        await this.options.navigate(s);
      } catch (a) {
        return (r = globalThis.alert) == null || r.call(globalThis, `Could not open ${s}: ${(a == null ? void 0 : a.message) || a}`), this;
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
    const e = this.getAllGuides().find((l) => l.id === t), s = Y((e == null ? void 0 : e.url) || this.getUrlKey());
    this.options.guidesByUrl && ar(this.options.storageKey, s, t), this.fileGuides = (this.fileGuides || []).filter((l) => l.id !== t), this.fileStorage && e && hr(this.fileStorage, {
      guideId: t,
      urlKey: s,
      path: ci(e, s)
    }).then(() => this.reloadFileGuides()).catch(() => {
    });
    const n = this.getAllGuides().filter((l) => l.id !== t);
    if (((o = this.guide) == null ? void 0 : o.id) === t) {
      const l = n.find((c) => Y(c.url) === Y(this.getUrlKey())) || n[0];
      l ? this.load(l, { dirty: !1, mode: this.mode === "manage-routes" ? "manage-routes" : "idle" }) : (this.guide = he(this.getUrlKey()), this.mode = this.mode === "manage-routes" ? "manage-routes" : "idle", this.dirty = !1, this.persistDraft());
    }
    return this.syncLauncher(), this.render(), n.length && this.launcher && !this.launcher.optionsRoot.hidden ? this.launcher.showGuideOptions(
      n,
      (l) => this.playGuide(l),
      { hierarchical: !0, currentUrl: this.getUrlKey() }
    ) : (a = this.launcher) == null || a.hideGuideOptions(), this;
  }
  startPageGuide(t, { skipReset: e = !1, stepIndex: s = 0 } = {}) {
    const n = Ct(t), r = this.getGuidePlaybackSettings(n);
    if (!e && r.resetBeforePlay === "reload")
      return Le(this.options.storageKey, {
        guideId: n.id,
        urlKey: Y(n.url || this.getUrlKey()),
        guide: n,
        stepIndex: 0
      }), globalThis.location.reload(), this;
    e || ue(this.options.storageKey), this.load(n, { dirty: !1, mode: "manage" });
    const a = Math.max(0, Math.min(Number(s) || 0, Math.max(n.steps.length - 1, 0)));
    return this.startFrom(a);
  }
  persistPlaybackProgress(t, { mayNavigate: e = !1 } = {}) {
    var n, r;
    if (!((n = this.guide) != null && n.id)) return;
    const s = ((r = this.guide.steps) == null ? void 0 : r.length) || 0;
    if (t >= s) {
      ue(this.options.storageKey);
      return;
    }
    Le(this.options.storageKey, {
      guideId: this.guide.id,
      guide: this.guide,
      stepIndex: t,
      resumeAnyUrl: !0,
      mayNavigate: !!e,
      savedAt: Date.now()
    });
  }
  resumePendingPlay({ soft: t = !1 } = {}) {
    const e = lr(this.options.storageKey);
    if (!(e != null && e.guideId) && !(e != null && e.guide)) return;
    const s = !!e.resumeAnyUrl, n = Y(e.urlKey || "/"), r = Y(this.getUrlKey());
    if (e.urlKey && !s && n !== r) {
      t && (Le(this.options.storageKey, e), window.setTimeout(() => this.resumePendingPlay({ soft: !0 }), 300));
      return;
    }
    const o = t ? 120 : Math.max(0, Number(this.settings.resetBeforePlayDelay || this.options.resetBeforePlayDelay) || 450);
    window.setTimeout(() => {
      var l, c;
      if (this.destroyed) return;
      let a = this.getAllGuides().find((d) => d.id === e.guideId);
      if (!a && e.guide)
        try {
          a = Ct(e.guide);
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
    const e = Pt(this.settings), s = t != null && t.settings && typeof t.settings == "object" ? t.settings : {};
    return {
      reloadOnNavigate: s.reloadOnNavigate != null ? !!s.reloadOnNavigate : e.reloadOnNavigate,
      resetBeforePlay: s.resetBeforePlay === "reload" || s.resetBeforePlay === "none" ? s.resetBeforePlay : e.resetBeforePlay,
      resetBeforePlayDelay: Number.isFinite(Number(s.resetBeforePlayDelay)) ? Math.max(0, Number(s.resetBeforePlayDelay)) : e.resetBeforePlayDelay
    };
  }
  openManageRoutes() {
    return this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.mode === "recording" && this.recorder.stop(), this.mode = "manage-routes", this.render(), this.openPanel(), this);
  }
  openGuideForEdit(t) {
    var s;
    if (this.assertUsable(), this.readOnly) return this;
    this.mode === "recording" && this.recorder.stop();
    const e = this.getAllGuides().find((n) => n.id === t);
    return e ? (this.load(e, { dirty: !1, mode: "manage" }), this.openPanel(), this) : ((s = globalThis.alert) == null || s.call(globalThis, "Guide not found."), this);
  }
  updateSetting(t, e) {
    var r, o, a, l, c, d, u, h, p, g;
    if (this.readOnly && (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "showOrb" || t === "reloadOnNavigate" || t === "resetBeforePlay" || t === "resetBeforePlayDelay" || t === "pageSettleAfterClick" || t === "pageSettleTimeout" || t === "postReadyDelay" || t === "loadingSelectors" || t === "theme" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.")))
      return this;
    const s = Pt({ ...this.settings });
    if (t === "reloadOnNavigate" && (s.reloadOnNavigate = !!e), t === "resetBeforePlay" && (s.resetBeforePlay = e ? "reload" : "none"), t === "resetBeforePlayDelay" && (s.resetBeforePlayDelay = Math.max(0, Number(e) || 0)), t === "pageSettleAfterClick" && (s.pageSettleAfterClick = !!e), t === "pageSettleTimeout" && (s.pageSettleTimeout = Math.max(0, Number(e) || 0)), t === "postReadyDelay" && (s.postReadyDelay = Math.max(0, Number(e) || 0)), t === "loadingSelectors" && (s.loadingSelectors = e), t === "theme" && (s.theme = String(e || "dark").toLowerCase() === "light" ? "light" : "dark"), t === "editorAccountIds" && (s.editorAccountIds = e), t === "hiddenUrls" && (s.hiddenUrls = e), t === "bypassPin" && (s.bypassPin = e), t === "showAccountId" && (s.showAccountId = !!e), t === "showOrb" && (s.showOrb = !!e), String(t || "").startsWith("launcher.")) {
      const f = String(t).slice(9), m = { ...s.launcher };
      f === "size" && (m.size = Number(e)), f === "position" && (m.position = String(e || "bottom-right")), f === "animations" && (m.animations = !!e), s.launcher = m;
    }
    if (String(t || "").startsWith("ui.")) {
      const f = String(t).slice(3), m = { ...s.ui };
      if (f === "animations" || f === "spotlightFade" || f === "animatedCursor")
        m[f] = !!e;
      else if (f === "highlightMotion")
        m.highlightMotion = String(e || "pulse");
      else if (f === "overlayOpacity") {
        const y = Number(e);
        m.overlayOpacity = Number.isFinite(y) ? Math.min(0.9, Math.max(0, y > 1 ? y / 100 : y)) : m.overlayOpacity;
      } else f === "transitionMs" ? m.transitionMs = Math.max(0, Math.round(Number(e) || 0)) : f === "fontFamily" ? m.fontFamily = String(e || "system") : ["tipBg", "tipText", "skipBg", "skipText", "spotlightColor"].includes(f) && (m[f] = String(e || ""));
      s.ui = m;
    }
    return this.settings = Pt(s), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, this.options.pageSettleAfterClick = this.settings.pageSettleAfterClick, this.options.pageSettleTimeout = this.settings.pageSettleTimeout, this.options.postReadyDelay = this.settings.postReadyDelay, this.applyLoadingUiFromSettings(), de(this.settings), (o = (r = this.overlay) == null ? void 0 : r.applyUiSettings) == null || o.call(r, this.settings.ui), (l = (a = this.player) == null ? void 0 : a.setUiOptions) == null || l.call(a, this.settings.ui), (d = (c = this.player) == null ? void 0 : c.setOptions) == null || d.call(c, {
      pageSettleAfterClick: this.settings.pageSettleAfterClick,
      pageSettleTimeout: this.settings.pageSettleTimeout,
      postReadyDelay: this.settings.postReadyDelay
    }), (h = (u = this.launcher) == null ? void 0 : u.setLauncherSettings) == null || h.call(u, this.settings.launcher), this.scheduleSettingsSave(), (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showOrb") && this.applyAccessPolicy(), t === "showAccountId" && ((g = (p = this.launcher) == null ? void 0 : p.setShowAccountId) == null || g.call(p, this.settings.showAccountId)), t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "showOrb" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.") && (t.includes("Bg") || t.includes("Text") || t.includes("Color") || t === "ui.overlayOpacity" || t === "ui.transitionMs" || t === "ui.fontFamily") || this.render(), this;
  }
  resetUiSettings() {
    var t, e, s, n;
    return this.settings = Pt({
      ...this.settings,
      ui: pi()
    }), de(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (n = (s = this.player) == null ? void 0 : s.setUiOptions) == null || n.call(s, this.settings.ui), this.scheduleSettingsSave(), this.render(), this;
  }
  scheduleSettingsSave() {
    clearTimeout(this.settingsSaveTimer), this.settingsSaveTimer = setTimeout(() => {
      this.flushSettingsSave().catch(() => {
      });
    }, 250);
  }
  async flushSettingsSave() {
    var s, n;
    if (!this.fileStorage) return;
    const t = Pt(this.settings), e = await mr(this.fileStorage, t);
    e != null && e.settings && typeof e.settings == "object" && (this.settings = Pt({
      ...this.settings,
      ...e.settings
    }), (n = (s = this.launcher) == null ? void 0 : s.setBypassPin) == null || n.call(s, this.settings.bypassPin), this.applyAccessPolicy());
  }
  editStepSetting(t, e, s) {
    const n = this.guide.steps.find((r) => r.id === t);
    if (n) {
      if (n.settings = { ...n.settings || {} }, e === "delay" || e === "hideDelay") {
        const r = Math.max(0, Math.round(Number(s) || 0));
        r ? n.settings[e] = r : delete n.settings[e];
      }
      e === "autoAdvanceDelay" && (s === "" || s == null ? delete n.settings.autoAdvanceDelay : n.settings.autoAdvanceDelay = Math.max(0, Number(s) || 0)), e === "autoScroll" && (s ? delete n.settings.autoScroll : n.settings.autoScroll = !1), e === "autoSkipMissing" && (s ? delete n.settings.autoSkipMissing : n.settings.autoSkipMissing = !1), Object.keys(n.settings).length === 0 && delete n.settings, this.dirty = !0, this.scheduleGuideSave();
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
        const t = Y(this.guide.url || this.getUrlKey());
        Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((e) => e.id === this.guide.id ? { ...this.guide } : e)), await Ne(this.fileStorage, this.guide, t);
        return;
      }
      if (this.options.guidesByUrl) {
        Me(this.options.storageKey, Y(this.guide.url || this.getUrlKey()), this.guide);
        return;
      }
      this.persistDraft();
    }
  }
  editGuideSetting(t, e, s) {
    var o, a, l;
    const n = t || ((o = this.guide) == null ? void 0 : o.id);
    let r = ((a = this.guide) == null ? void 0 : a.id) === n ? this.guide : this.getAllGuides().find((c) => c.id === n);
    if (!r) return this;
    if (r = { ...r, settings: { ...r.settings || {} } }, e === "autoScroll" && (s ? delete r.settings.autoScroll : r.settings.autoScroll = !1), e === "reloadOnNavigate" && (s ? r.settings.reloadOnNavigate = !0 : delete r.settings.reloadOnNavigate), e === "resetBeforePlay" && (s ? r.settings.resetBeforePlay = "reload" : delete r.settings.resetBeforePlay), Object.keys(r.settings).length === 0 && delete r.settings, ((l = this.guide) == null ? void 0 : l.id) === r.id && (this.guide = r, this.dirty = !0, this.persistDraft()), Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((c) => c.id === r.id ? { ...c, ...r } : c)), this.fileStorage) {
      const c = Y(r.url || this.getUrlKey());
      Ne(this.fileStorage, r, c).then(() => this.reloadFileGuides()).catch(() => {
      });
    } else this.options.guidesByUrl && Me(this.options.storageKey, Y(r.url || "/"), r);
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
    var e, s, n, r, o, a, l, c, d, u, h, p, g, f, m, y, S, w;
    const t = this.getAllGuides().length;
    (e = this.launcher) == null || e.setApiReady(this.apiReady), (s = this.launcher) == null || s.setReadOnly(this.readOnly), (o = (n = this.launcher) == null ? void 0 : n.setBypassPin) == null || o.call(n, (r = this.settings) == null ? void 0 : r.bypassPin), (c = (a = this.launcher) == null ? void 0 : a.setShowAccountId) == null || c.call(a, !!((l = this.settings) != null && l.showAccountId)), (h = (d = this.launcher) == null ? void 0 : d.setLauncherSettings) == null || h.call(d, (u = this.settings) == null ? void 0 : u.launcher), (g = (p = this.launcher) == null ? void 0 : p.setAccountId) == null || g.call(p, this.accountId), (f = this.launcher) == null || f.setVisible(this.launcherVisible), (m = this.launcher) == null || m.setSearchData(this.getAllGuides(), this.getUrlKey()), (y = this.launcher) == null || y.setPlayState(t), (S = this.launcher) == null || S.setPanelOpen(this.panelVisible), (w = this.launcher) == null || w.setPlaying(this.mode === "playback");
  }
  onUrlChange() {
    if (this.applyAccessPolicy(), this.mode === "recording") return;
    if (this.mode === "playback") {
      this.rebindPlaybackAfterNavigation();
      return;
    }
    const t = this.mode === "manage-routes" && !this.readOnly, e = this.getGuideForCurrentPage();
    e ? this.load(e, { dirty: !1, mode: t ? "manage-routes" : "idle" }) : (this.guide = he(this.getUrlKey()), this.mode = t ? "manage-routes" : "idle", this.dirty = !1, this.render()), this.syncLauncher();
  }
  render(t = {}) {
    var n, r, o;
    const e = this.guide.steps.map((a) => ({
      ...a,
      invalid: !Ks(a)
    })), s = !!this.focusGuideTitle;
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
      guideSettings: ((n = this.guide) == null ? void 0 : n.settings) || {},
      currentGuideId: ((r = this.guide) == null ? void 0 : r.id) || null,
      accountId: this.accountId,
      recordingAppend: !!this.recordingAppend,
      recordingStepsBaseline: Number(this.recordingStepsBaseline) || 0,
      newStepsCount: this.mode === "recording" ? Math.max(0, (((o = this.guide.steps) == null ? void 0 : o.length) || 0) - (Number(this.recordingStepsBaseline) || 0)) : 0,
      focusGuideTitle: s,
      dirty: !!this.dirty,
      readOnly: !!this.readOnly,
      flashMessage: "",
      ...t
    }), this.syncLauncher();
  }
  startRecording() {
    return this.assertUsable(), this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.guide = he(this.getUrlKey()), this.dirty = !1, this.recordingAppend = !1, this.recordingStepsBaseline = 0, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  /** Append more recorded interactions to the current guide (from Manage steps). */
  continueRecording() {
    return this.assertUsable(), this.readOnly ? this : (this.guide || (this.guide = he(this.getUrlKey())), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.recordingAppend = !0, this.recordingStepsBaseline = this.guide.steps.length, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  stopRecording() {
    this.assertUsable(), this.recorder.stop(), this.mode = "manage", this.dirty = this.guide.steps.length > 0, this.guide.url = this.getUrlKey();
    const t = !!this.recordingAppend, e = Math.max(0, this.guide.steps.length - (Number(this.recordingStepsBaseline) || 0));
    this.recordingAppend = !1, this.recordingStepsBaseline = this.guide.steps.length;
    const s = (/* @__PURE__ */ new Date()).toLocaleString(), n = `${this.guide.steps.length} step${this.guide.steps.length === 1 ? "" : "s"} · ${s}`;
    return !!(this.guide.title && this.guide.title !== `Guide for ${this.guide.url}` && !/^\d+ steps? · /.test(this.guide.title)) || (this.guide.title = n), this.focusGuideTitle = !t, this.persistDraft(), this.guide.steps.length && this.saveGuideForCurrentPage(), this.openPanel(), this.render({
      flashMessage: t && e > 0 ? `${e} step${e === 1 ? "" : "s"} added. Rename below if needed.` : "Guide saved. Rename it below if you want a clearer title."
    }), structuredClone(this.guide);
  }
  recordStep(t) {
    var e, s;
    this.guide.steps.push(t), this.dirty = !0, this.persistDraft(), (s = (e = this.options).onRecordStep) == null || s.call(e, structuredClone(t)), this.openPanel(), this.render();
  }
  load(t, { dirty: e = !1, mode: s = "manage" } = {}) {
    this.assertUsable();
    const n = typeof t == "string" ? JSON.parse(t) : t;
    return this.guide = Ct(n), this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.mode = s, this.dirty = e, this.render(), this;
  }
  updateSteps(t) {
    return this.guide.steps = Ct({ ...this.guide, steps: t }).steps, this.changed(), this;
  }
  removeStep(t) {
    var n;
    const e = String(t || "").trim();
    if (!e || !((n = this.guide) != null && n.steps)) return this;
    const s = this.guide.steps.findIndex((r) => String(r.id) === e);
    if (s < 0) return this;
    if (this.guide.steps = this.guide.steps.filter((r) => String(r.id) !== e), this.mode === "recording") {
      const r = Number(this.recordingStepsBaseline) || 0;
      s < r && (this.recordingStepsBaseline = Math.max(0, r - 1));
    }
    return this.changed(), this;
  }
  confirmRemove(t) {
    const e = String(t || "").trim();
    if (!e) return;
    (typeof globalThis.confirm == "function" ? globalThis.confirm("Remove this guide step?") : !0) && this.removeStep(e);
  }
  moveStep(t, e) {
    const s = String(t || "").trim();
    if (!s) return this;
    const n = this.guide.steps.findIndex((a) => String(a.id) === s);
    if (n < 0) return this;
    const r = Math.max(0, Math.min(Number(e), this.guide.steps.length - 1));
    if (r === n) return this;
    const [o] = this.guide.steps.splice(n, 1);
    return this.guide.steps.splice(r, 0, o), this.changed(), this;
  }
  moveRelative(t, e) {
    const s = String(t || "").trim();
    if (!s || !e) return this;
    const n = this.guide.steps.findIndex((r) => String(r.id) === s);
    return n < 0 ? this : this.moveStep(s, n + e);
  }
  /** Move a step to a 1-based position (e.g. 1 = first step). */
  moveToPosition(t, e) {
    const s = String(t || "").trim(), n = Math.floor(Number(e));
    return !s || !Number.isFinite(n) || n < 1 ? this : this.moveStep(s, n - 1);
  }
  dropStep(t, e) {
    const s = String(t || "").trim(), n = String(e || "").trim();
    if (!s || !n || s === n) return this;
    const r = this.guide.steps.findIndex((o) => String(o.id) === n);
    return r < 0 ? this : this.moveStep(s, r);
  }
  editStep(t, e, s) {
    const n = this.guide.steps.find((r) => r.id === t);
    if (n) {
      if (e === "waitRequired")
        n.waitFor = s ? { type: "input", required: !0 } : null;
      else if (e === "selector") {
        const r = String(s || "").trim();
        if (!r) return;
        n.selector = r;
        const o = Array.isArray(n.selectorAlternatives) ? n.selectorAlternatives : [], a = o.find((l) => (l == null ? void 0 : l.selector) === r);
        a != null && a.match && typeof a.match == "object" && (n.match = { ...a.match }), o.length && (n.selectorAlternatives = o.map((l) => ({
          ...l,
          suggested: (l == null ? void 0 : l.selector) === r
        })));
      } else ["title", "description"].includes(e) && (n[e] = String(s));
      this.dirty = !0, this.persistDraft(), ["title", "description", "selector"].includes(e) && this.scheduleGuideSave(), e === "waitRequired" && this.render();
    }
  }
  editGuide(t, e) {
    if (t !== "title") return;
    const s = String(e).trim() || this.guide.title;
    this.guide.title = s, this.dirty = !0, this.persistDraft(), Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((n) => n.id === this.guide.id ? { ...n, title: s } : n)), this.syncLauncher();
  }
  commitGuideTitle() {
    var t, e;
    return (e = (t = this.guide) == null ? void 0 : t.steps) != null && e.length ? this.saveGuideForCurrentPage() : this;
  }
  changed() {
    var t;
    if (this.dirty = !0, this.persistDraft(), Array.isArray(this.fileGuides) && ((t = this.guide) != null && t.id)) {
      const e = structuredClone(this.guide), s = this.fileGuides.findIndex((n) => n.id === this.guide.id);
      s >= 0 ? this.fileGuides[s] = e : this.fileGuides = [...this.fileGuides, e];
    }
    this.scheduleGuideSave(), this.render();
  }
  preview(t) {
    const e = this.guide.steps.find((n) => n.id === t), s = e && Kt(e);
    s && this.overlay.highlight(s, !1);
  }
  start() {
    return this.startFrom(0);
  }
  startFrom(t = 0) {
    if (this.assertUsable(), !this.guide.steps.length) throw new Error("Cannot start a guide with no steps.");
    const e = typeof t == "number" ? t : this.guide.steps.findIndex((s) => s.id === t);
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
  onPlaybackChange(t, e, s) {
    var n, r, o, a;
    (r = (n = this.options).onStepChange) == null || r.call(n, structuredClone(t), e), this.render({
      currentStep: t,
      currentIndex: e,
      total: this.guide.steps.length,
      canPrev: ((a = (o = this.player) == null ? void 0 : o.canGoPrev) == null ? void 0 : a.call(o)) ?? !1,
      ...s
    });
  }
  onPlaybackFail(t, e) {
    var s, n, r, o, a, l;
    (n = (s = this.options).onStepFail) == null || n.call(s, structuredClone(t), e), this.render({
      currentStep: t,
      currentIndex: e,
      total: this.guide.steps.length,
      waiting: !1,
      failed: !0,
      autoSkipping: !1,
      canPrev: ((o = (r = this.player) == null ? void 0 : r.canGoPrev) == null ? void 0 : o.call(r)) ?? !1,
      message: ((l = (a = this.player) == null ? void 0 : a.missingTargetMessage) == null ? void 0 : l.call(a, t)) || ""
    });
  }
  onPlaybackComplete() {
    var t, e;
    ue(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), (e = (t = this.options).onComplete) == null || e.call(t);
  }
  endPlayback() {
    var t;
    return this.mode !== "playback" && !((t = this.player) != null && t.active) ? this : (ue(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), this);
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
    var e, s;
    return !this.options.allowClose && !t || this.dirty && !t && globalThis.confirm && !globalThis.confirm("Close with unsaved guide changes?") ? !1 : (this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), ue(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.mode = "idle", this.render(), this.options.showLauncher && this.closePanel(), (s = (e = this.options).onClose) == null || s.call(e), !0);
  }
  exportJSON() {
    return We(this.guide);
  }
  downloadJSON(t = `${this.guide.id}.json`) {
    return er(this.guide, t), this.dirty = !1, this;
  }
  downloadAllGuides() {
    var s;
    this.assertUsable();
    const t = this.getAllGuides();
    if (!t.length)
      return (s = globalThis.alert) == null || s.call(globalThis, "No guides to download yet."), this;
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return ir(t, `system-guider-guides-${e}.json`), this;
  }
  async copyJSON() {
    const t = await sr(this.guide);
    return this.dirty = !1, t;
  }
  /** Persist one guide to local map + backend (file storage) without changing the active editor. */
  async persistImportedGuide(t) {
    const e = Ct(t), s = Y(e.url || "/");
    if (e.url = s, this.options.guidesByUrl && Me(this.options.storageKey, s, e), Array.isArray(this.fileGuides)) {
      const n = this.fileGuides.findIndex((r) => r.id === e.id);
      n >= 0 ? this.fileGuides[n] = { ...e } : this.fileGuides = [...this.fileGuides, { ...e }];
    } else
      this.fileGuides = [{ ...e }];
    return this.fileStorage && await Ne(this.fileStorage, e, s), e;
  }
  /**
   * Import one or more guides from JSON text/objects/files.
   * Auto-saves each guide to the backend when file storage is enabled.
   */
  async importGuides(t, { sourceLabel: e = "import" } = {}) {
    var l;
    if (this.readOnly) return [];
    this.assertUsable();
    const { guides: s, errors: n } = Fi(t), r = [], o = [...n];
    for (const c of s)
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
      const s = [], n = [];
      for (const c of e)
        try {
          const d = await c.text(), { guides: u, errors: h } = Fi(d);
          s.push(...u), n.push(...h.map((p) => `${c.name}: ${p}`));
        } catch (d) {
          n.push(`${c.name}: ${d.message}`);
        }
      if (!s.length) {
        (o = globalThis.alert) == null || o.call(globalThis, n[0] || "No valid guide JSON selected.");
        return;
      }
      const r = [...new Map(s.map((c) => [c.id, c])).values()];
      try {
        await this.importGuides(
          { guides: r },
          { sourceLabel: e.length === 1 ? e[0].name : `${e.length} files` }
        ), n.length && ((a = globalThis.alert) == null || a.call(globalThis, `Loaded with warnings:
${n.slice(0, 8).join(`
`)}`));
      } catch (c) {
        (l = globalThis.alert) == null || l.call(globalThis, `Could not load guides: ${c.message}`);
      }
    }, { once: !0 }), t.click();
  }
  pasteGuide() {
    var e;
    const t = (e = globalThis.prompt) == null ? void 0 : e.call(globalThis, "Paste System Guider JSON (one guide, array, or { guides: [...] })");
    t && this.importGuides(t, { sourceLabel: "clipboard" }).catch((s) => {
      var n;
      (n = globalThis.alert) == null || n.call(globalThis, `Could not load guide: ${s.message}`);
    });
  }
  persistDraft() {
    this.fileStorage || Qn(this.options.storageKey, this.guide);
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
let pe = null;
const vr = {
  init(i = {}) {
    if (typeof window > "u" || typeof document > "u")
      throw new Error("System Guider can only be initialized in a browser.");
    return pe == null || pe.destroy(), pe = new br(i), pe;
  }
};
export {
  vr as default
};
