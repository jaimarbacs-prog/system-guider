const gt = (n, t, e = "") => {
  const s = document.createElement("button");
  return s.type = "button", s.className = `sg-button ${e ? `sg-button--${e}` : ""}`.trim(), s.dataset.action = t, s.textContent = n, s;
}, B = (n, t, e) => {
  const s = document.createElement(n);
  return s.className = t, s.textContent = e, s;
}, Q = (n, t = "ghost", { icon: e = "", ariaLabel: s = "", withLabel: i = !1 } = {}) => {
  const r = document.createElement("button");
  return r.type = "button", r.className = `sg-button sg-button--tiny ${t ? `sg-button--${t}` : ""}`.trim(), e ? (r.classList.add(i ? "sg-button--with-icon" : "sg-button--icon"), i ? r.innerHTML = `${e}<span>${n}</span>` : r.innerHTML = e, r.setAttribute("aria-label", s || n), r.title = s || n) : r.textContent = n, r;
}, Bs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 3.25v9.5M3.25 8h9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, Ye = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.6 2.7a1.5 1.5 0 0 1 2.1 2.1L5.8 12.7 2.5 13.5l.8-3.3L11.6 2.7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
`, Pe = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 4.5h9M6.2 4.5V3.4h3.6v1.1M5.2 4.5l.6 8.1h4.4l.6-8.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, hs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8.2 6.6 11.3 12.5 4.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Ps = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, Is = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8h9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`, Rs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.8" width="6.6" height="6.6" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M6.4 5.1h4.4c.9 0 1.6.7 1.6 1.6v4.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, Gs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.4 4.4 11.6 11.6M11.6 4.4 4.4 11.6" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/>
  </svg>
`, Ie = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M5 3.2 12.2 8 5 12.8V3.2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>
`, Os = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.8v7.2M5.2 7.2 8 10l2.8-2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, $s = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M6.2 3.2h3.6v1.5H6.2V3.2Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M5.2 4h-.8A1.4 1.4 0 0 0 3 5.4v7.2A1.4 1.4 0 0 0 4.4 14h7.2A1.4 1.4 0 0 0 13 12.6V5.4A1.4 1.4 0 0 0 11.6 4h-.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, Ds = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 9.8V2.8M5.2 5.2 8 2.4l2.8 2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Hs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M2.6 4.4h3.2l1.2 1.3h6.4v6.5H2.6V4.4Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, Fs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 3.2h3.4A2.2 2.2 0 0 1 8 4.4v8.4a1.8 1.8 0 0 0-1.4-.6H3.2V3.2Zm9.6 0H9.4A2.2 2.2 0 0 0 8 4.4v8.4c.4-.4.9-.6 1.4-.6h3.4V3.2Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
  </svg>
`, Re = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.2" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.6 10.2V3.8A1.2 1.2 0 0 1 4.8 2.6h6.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, Qe = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" stroke-width="1.35"/>
    <path d="M8 1.8v1.4M8 12.8v1.4M1.8 8h1.4M12.8 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, Us = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 4.2h9.6v8.2H3.2V4.2Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.2 2.8h5.6v1.8H5.2V2.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.5 7.2h5M5.5 9.6h3.6" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, Ws = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="5.4" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.4 13.2c.7-2.4 2.2-3.6 4.6-3.6s3.9 1.2 4.6 3.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, js = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.4 12.6 4.2v3.4c0 2.7-1.8 4.8-4.6 5.8-2.8-1-4.6-3.1-4.6-5.8V4.2L8 2.4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
    <path d="M6.1 8.1 7.4 9.4 10 6.8" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, qs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="5.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M8 5v3.2l2.2 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, zs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.8 9.8A4.8 4.8 0 0 1 6.2 4.2 5.4 5.4 0 1 0 11.8 9.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, zt = (n) => {
  const t = n == null ? void 0 : n.target;
  return t instanceof Element ? t : (t == null ? void 0 : t.parentElement) instanceof Element ? t.parentElement : null;
}, ts = ({ value: n, placeholder: t, onChange: e, onSave: s, onCancel: i }) => {
  const r = document.createElement("li");
  r.className = "sg-string-list__item sg-string-list__item--draft";
  const o = document.createElement("input");
  o.type = "text", o.className = "sg-field sg-string-list__draft-input", o.value = n, o.placeholder = t, o.setAttribute("aria-label", t || "Value"), o.addEventListener("input", () => e(o.value)), o.addEventListener("keydown", (d) => {
    d.key === "Enter" && (d.preventDefault(), s()), d.key === "Escape" && (d.preventDefault(), i());
  });
  const a = document.createElement("div");
  a.className = "sg-string-list__actions";
  const c = Q("Save", "primary", { icon: hs, ariaLabel: "Save" });
  c.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), s();
  });
  const l = Q("Cancel", "ghost", { icon: Ps, ariaLabel: "Cancel" });
  return l.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), i();
  }), a.append(c, l), r.append(o, a), r;
};
class Ks {
  constructor({ labels: t, zIndex: e, handlers: s, visible: i = !0 }) {
    var r, o;
    this.labels = t, this.handlers = s, this.state = { mode: "idle", steps: [], collapsed: !1, pageUrl: "", hasPageGuide: !1, pageGuides: [], focusGuideTitle: !1 }, this.position = null, this.dragging = null, this.settingsSection = "guides", this.root = document.createElement("aside"), this.root.className = "sg-panel", this.root.style.zIndex = String(e + 2), this.root.setAttribute("aria-label", "System Guider"), this.root.addEventListener("click", (a) => this.handleClick(a)), this.root.addEventListener("pointerdown", (a) => this.startDrag(a)), this.root.addEventListener("input", (a) => this.handleInput(a)), this.root.addEventListener("change", (a) => this.handleInput(a)), this.root.addEventListener("mouseover", (a) => this.handlePreview(a)), this.root.addEventListener("mouseout", (a) => this.handlePreviewEnd(a)), this.root.addEventListener("dragstart", (a) => this.handleDragStart(a)), this.root.addEventListener("dragover", (a) => a.preventDefault()), this.root.addEventListener("drop", (a) => this.handleDrop(a)), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.recordingIndicator = this.createRecordingIndicator(e), document.body.append(this.root), document.body.append(this.recordingIndicator), this.root.addEventListener("animationend", (a) => {
      a.target === this.root && a.animationName === "sg-slide-in" && this.root.classList.add("sg-panel--settled");
    }), (o = (r = window.matchMedia) == null ? void 0 : r.call(window, "(prefers-reduced-motion: reduce)")) != null && o.matches && this.root.classList.add("sg-panel--settled"), this.setVisible(i), this.render();
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
    const i = document.createElement("span");
    i.className = "sg-recording-indicator__wave", i.setAttribute("aria-hidden", "true"), i.innerHTML = `
      <svg viewBox="0 0 22 18" focusable="false">
        <rect class="sg-recording-indicator__bar" x="1" y="6" width="2.5" height="6" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="5.5" y="3" width="2.5" height="12" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="10" y="1" width="2.5" height="16" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="14.5" y="4" width="2.5" height="10" rx="1.25"/>
        <rect class="sg-recording-indicator__bar" x="19" y="6.5" width="2.5" height="5" rx="1.25"/>
      </svg>
    `;
    const r = B("span", "sg-recording-indicator__status", "Recording..."), o = document.createElement("span");
    o.className = "sg-recording-indicator__divider", o.setAttribute("aria-hidden", "true");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-recording-indicator__stop", a.title = "Stop recording", a.setAttribute("aria-label", "Stop recording");
    const c = document.createElement("span");
    c.className = "sg-recording-indicator__stop-icon", c.setAttribute("aria-hidden", "true"), c.innerHTML = `
      <svg viewBox="0 0 12 12" focusable="false">
        <rect x="1.5" y="1.5" width="9" height="9" rx="2"/>
      </svg>
    `;
    const l = B("span", "sg-recording-indicator__stop-label", "Stop");
    return a.append(c, l), a.addEventListener("click", (d) => {
      var h, p;
      d.preventDefault(), d.stopPropagation(), (p = (h = this.handlers)["stop-recording"]) == null || p.call(h);
    }), e.append(s, i, r, o, a), e;
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
    const s = this.root.getBoundingClientRect(), i = s.width || 360, r = s.height || 200, o = Math.max(8, window.innerWidth - i - 8), a = Math.max(8, window.innerHeight - r - 8);
    return {
      left: Math.min(Math.max(8, t), o),
      top: Math.min(Math.max(8, e), a)
    };
  }
  /** Move the panel if it covers the highlighted step target. */
  avoidHighlight(t) {
    var m;
    if (!t || this.root.classList.contains("sg-panel--hidden") || this.visible === !1 || ((m = this.state) == null ? void 0 : m.mode) === "playback" || this.dragging) return;
    const e = this.root.getBoundingClientRect();
    if (e.width < 2 || e.height < 2) return;
    const s = 14;
    if (!!(t.right + s < e.left || t.left - s > e.right || t.bottom + s < e.top || t.top - s > e.bottom)) return;
    const r = 16, o = e.width, a = e.height, c = window.innerWidth, l = window.innerHeight, d = c - t.right - r, h = t.left - r, p = l - t.bottom - r, u = t.top - r;
    let g = e.left, f = e.top;
    d >= o ? (g = t.right + r, f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8))) : h >= o ? (g = t.left - o - r, f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8))) : p >= Math.min(a, 180) ? (g = this.clampPosition(e.left, 0).left, f = t.bottom + r) : u >= Math.min(a, 180) ? (g = this.clampPosition(e.left, 0).left, f = t.top - a - r) : d >= h ? (g = Math.max(8, Math.min(c - o - 8, t.right + r)), f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8))) : (g = Math.max(8, Math.min(c - o - 8, t.left - o - r)), f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8)));
    const b = this.clampPosition(g, f);
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
    const s = this.root.querySelector(".sg-panel__body"), i = s ? s.scrollTop : this._bodyScrollTop || 0;
    s && (this._bodyScrollTop = s.scrollTop), this.root.classList.toggle("sg-panel--hidden", !this.visible), this.root.setAttribute("aria-hidden", String(!this.visible)), this.applyTheme(), this.root.replaceChildren();
    const r = document.createElement("header");
    r.className = "sg-panel__header";
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
    const c = document.createElement("div");
    c.className = "sg-panel__brand-copy", t === "recording" ? c.append(
      B("span", "sg-eyebrow", "● LIVE RECORDING"),
      B("h2", "sg-panel__title", this.titleForMode(t))
    ) : c.append(
      B("h2", "sg-panel__title", "System Guider"),
      B("div", "sg-panel__subtitle", this.titleForMode(t))
    ), o.append(a, c);
    const l = document.createElement("div");
    if (l.className = "sg-panel__header-actions", t === "manage-routes") {
      const u = Q(e ? "Open" : "Minimize", "ghost", {
        icon: e ? Rs : Is,
        ariaLabel: e ? "Open settings" : "Minimize"
      });
      if (u.dataset.action = "toggle-collapse", u.classList.add("sg-panel__chrome-btn", "sg-panel__header-minimize"), u.setAttribute("aria-expanded", String(!e)), l.append(u), !e) {
        const g = Q("Close", "ghost", {
          icon: Gs,
          ariaLabel: "Close settings"
        });
        g.dataset.action = "close", g.classList.add("sg-panel__chrome-btn", "sg-panel__header-close"), l.append(g);
      }
    } else {
      const u = gt(e ? "Open" : "Minimize", "toggle-collapse", "ghost");
      u.setAttribute("aria-expanded", String(!e)), l.append(u);
    }
    if (r.append(o, l), this.root.append(r), e) {
      this.applyPosition();
      return;
    }
    const d = document.createElement("div");
    d.className = "sg-panel__body", t === "idle" && this.renderIdle(d), (t === "recording" || t === "manage") && this.renderSteps(d, t), t === "manage-routes" && this.renderManageRoutes(d), this.root.append(d);
    const h = this.renderFooter(t);
    h && this.root.append(h), this.applyPosition();
    const p = t === "recording" && (Number(this.state.newStepsCount) || 0) > 0;
    queueMicrotask(() => {
      const u = this.root.querySelector(".sg-panel__body");
      u && (p ? u.scrollTop = u.scrollHeight : u.scrollTop = i, this._bodyScrollTop = u.scrollTop);
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
    placeholder: i = "",
    emptyText: r = "No items yet",
    addLabel: o = "Add"
  }) {
    const a = document.createElement("div");
    a.className = "sg-string-list sg-settings__row", a.dataset.stringList = e;
    let c = [...s].map((u) => String(u)), l = null, d = "";
    const h = (u) => {
      var g, f;
      c = [...u], l = null, d = "", (f = (g = this.handlers)["update-setting"]) == null || f.call(g, e, c), p();
    }, p = () => {
      a.replaceChildren();
      const u = document.createElement("div");
      u.className = "sg-string-list__head", u.append(B("span", "sg-string-list__label", t));
      const g = Q(o, "secondary", { icon: Bs, ariaLabel: o || "Add" });
      g.classList.add("sg-string-list__add"), g.disabled = l !== null, g.addEventListener("click", (b) => {
        var m;
        b.preventDefault(), b.stopPropagation(), l = "add", d = "", p(), (m = a.querySelector(".sg-string-list__draft-input")) == null || m.focus();
      }), u.append(g), a.append(u);
      const f = document.createElement("ul");
      if (f.className = "sg-string-list__items", l === "add" && f.append(ts({
        value: d,
        placeholder: i,
        onChange: (b) => {
          d = b;
        },
        onSave: () => {
          const b = String(d || "").trim();
          if (!b) {
            l = null, d = "", p();
            return;
          }
          if (c.includes(b)) {
            l = null, d = "", p();
            return;
          }
          h([...c, b]);
        },
        onCancel: () => {
          l = null, d = "", p();
        }
      })), !c.length && l !== "add") {
        const b = document.createElement("li");
        b.className = "sg-string-list__empty", b.textContent = r, f.append(b);
      }
      c.forEach((b, m) => {
        if (l === m) {
          f.append(ts({
            value: d,
            placeholder: i,
            onChange: (E) => {
              d = E;
            },
            onSave: () => {
              const E = String(d || "").trim();
              if (!E) {
                l = null, d = "", p();
                return;
              }
              const k = [...c];
              k[m] = E, h([...new Set(k)]);
            },
            onCancel: () => {
              l = null, d = "", p();
            }
          }));
          return;
        }
        const v = document.createElement("li");
        v.className = "sg-string-list__item";
        const w = document.createElement("code");
        w.className = "sg-string-list__value", w.textContent = b, w.title = b;
        const C = document.createElement("div");
        C.className = "sg-string-list__actions";
        const x = Q("Edit", "ghost", { icon: Ye, ariaLabel: "Edit" });
        x.disabled = l !== null, x.addEventListener("click", (E) => {
          var k, L;
          E.preventDefault(), E.stopPropagation(), l = m, d = b, p(), (k = a.querySelector(".sg-string-list__draft-input")) == null || k.focus(), (L = a.querySelector(".sg-string-list__draft-input")) == null || L.select();
        });
        const _ = Q("Delete", "danger", { icon: Pe, ariaLabel: "Delete" });
        _.disabled = l !== null, _.addEventListener("click", (E) => {
          E.preventDefault(), E.stopPropagation(), h(c.filter((k, L) => L !== m));
        }), C.append(x, _), v.append(w, C), f.append(v);
      }), a.append(f);
    };
    return p(), a;
  }
  renderIdle(t) {
    t.append(
      B("p", "sg-lead", "Record actions, refine the steps, then replay a polished walkthrough.")
    ), this.state.pageUrl && t.append(B("p", "sg-page-key", `Page: ${this.state.pageUrl}`)), this.renderPageGuidesList(t);
    const e = document.createElement("div");
    e.className = "sg-empty", e.append(
      B("strong", "", this.state.hasPageGuide ? "Guide ready for this page" : "Ready when you are"),
      B(
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
    s.className = "sg-page-guides sg-settings-content__section", s.append(B("div", "sg-page-guides__label", "Saved guides on this page"));
    const i = document.createElement("ul");
    i.className = "sg-page-guides__list", e.forEach((r, o) => {
      const a = document.createElement("li");
      a.className = "sg-page-guides__item", r.id === this.state.currentGuideId && a.classList.add("is-current");
      const c = document.createElement("strong"), l = String(r.title || `Guide ${o + 1}`).trim(), d = l.split(" · "), h = (d[0] || `Guide ${o + 1}`).trim(), p = d.slice(1).join(" · ").trim(), u = /^\d+\s+steps?$/i.test(h);
      c.textContent = u ? p || `Guide ${o + 1}` : l;
      const g = document.createElement("span");
      g.textContent = `${r.steps} step${r.steps === 1 ? "" : "s"}`, a.append(c, g), i.append(a);
    }), s.append(i), t.append(s);
  }
  renderSteps(t, e) {
    var i, r;
    if (this.state.flashMessage && t.append(B("p", "sg-status", this.state.flashMessage)), e === "recording") {
      const o = !!this.state.recordingAppend, a = Number(this.state.newStepsCount) || 0, c = document.createElement("p");
      c.className = "sg-lead", o ? c.textContent = a > 0 ? `Keep going — ${a} new step${a === 1 ? "" : "s"} added. Interact again for more, then Stop Recording.` : "Interact with the page as many times as you need. Each action becomes a new step. Click Stop Recording when done." : c.textContent = a > 0 ? `Capturing… ${a} step${a === 1 ? "" : "s"} so far. Keep interacting, then Stop Recording.` : "Perform the flow on screen. Add as many steps as you need, then Stop Recording.", t.append(c);
    }
    if (e === "manage") {
      const o = this.state.steps.length, a = document.createElement("section");
      a.className = "sg-guide-editor";
      const c = document.createElement("label");
      c.className = "sg-guide-field sg-guide-field--rename";
      const l = document.createElement("span");
      l.className = "sg-guide-field__label-row";
      const d = document.createElement("span");
      d.className = "sg-guide-field__label-left";
      const h = document.createElement("span");
      h.className = "sg-guide-field__label-icon", h.setAttribute("aria-hidden", "true"), h.innerHTML = Us, d.append(h, document.createTextNode("Guide name")), this.state.dirty && d.append(B("em", "sg-guide-editor__badge", "Unsaved"));
      const p = Q("Save", "primary", { icon: hs, withLabel: !0, ariaLabel: "Save guide" });
      p.dataset.action = "save-page", p.classList.add("sg-guide-field__save"), p.disabled = this.state.steps.length === 0, l.append(d, p), c.append(l);
      const u = document.createElement("input");
      u.className = "sg-field sg-field--guide-title", u.value = this.state.guideTitle || "", u.dataset.guideField = "title", u.placeholder = "Example: Create employee schedule", u.setAttribute("aria-label", "Guide name"), u.addEventListener("keydown", (L) => {
        L.key === "Enter" && (L.preventDefault(), u.blur());
      }), u.addEventListener("blur", () => {
        var L, I;
        (I = (L = this.handlers).commitGuideTitle) == null || I.call(L);
      }), c.append(u);
      const g = document.createElement("details");
      g.className = "sg-step-settings sg-guide-settings";
      const f = document.createElement("summary");
      f.className = "sg-step-settings__summary sg-step-settings__summary--split", f.innerHTML = '<span>Guide options</span><span class="sg-step-settings__chevron" aria-hidden="true">▾</span>', g.append(f);
      const b = document.createElement("div");
      b.className = "sg-step-settings__body";
      const m = document.createElement("label");
      m.className = "sg-check";
      const v = document.createElement("input");
      v.type = "checkbox", v.dataset.guideSetting = "reloadOnNavigate", v.checked = !!((i = this.state.guideSettings) != null && i.reloadOnNavigate), m.append(v, document.createTextNode(" Reload on other route"));
      const w = document.createElement("label");
      w.className = "sg-check";
      const C = document.createElement("input");
      C.type = "checkbox", C.dataset.guideSetting = "resetBeforePlay", C.checked = ((r = this.state.guideSettings) == null ? void 0 : r.resetBeforePlay) === "reload", w.append(C, document.createTextNode(" Reload before play")), b.append(m, w), g.append(b), c.append(g), a.append(c);
      const x = document.createElement("div");
      x.className = "sg-guide-editor__steps";
      const _ = document.createElement("div");
      _.className = "sg-guide-editor__steps-head";
      const E = document.createElement("div");
      E.className = "sg-guide-editor__steps-meta", E.append(
        B("span", "sg-guide-editor__steps-label", "Steps"),
        B("span", "sg-guide-editor__steps-count", String(o))
      );
      const k = gt("Add steps", "add-steps", "secondary");
      k.classList.add("sg-button--compact", "sg-guide-editor__add-steps"), _.append(E, k), x.append(_), a.append(x), t.append(a), this._stepsBlock = x, this.state.focusGuideTitle && queueMicrotask(() => {
        u.focus(), u.select();
      });
    } else
      this._stepsBlock = null;
    if (!this.state.steps.length) {
      const o = B("div", "sg-empty", e === "manage" ? "No steps in this guide yet." : "No steps yet — start interacting with the page.");
      e === "manage" && this._stepsBlock ? this._stepsBlock.append(o) : t.append(o);
      return;
    }
    const s = document.createElement("ol");
    s.className = "sg-step-list", this.state.steps.forEach((o, a) => {
      var m, v, w, C, x;
      const c = document.createElement("li");
      c.className = "sg-step", c.dataset.stepId = o.id, c.draggable = !1, o.invalid && c.classList.add("sg-step--invalid");
      const l = Number(this.state.recordingStepsBaseline) || 0, d = e === "recording" && a >= l;
      d && c.classList.add("sg-step--new");
      const h = document.createElement("div");
      h.className = "sg-step__top";
      const p = document.createElement("div");
      if (p.className = "sg-step__top-left", e === "manage") {
        const _ = document.createElement("span");
        _.className = "sg-step__drag", _.draggable = !0, _.title = "Drag to reorder", _.setAttribute("aria-label", `Drag step ${a + 1}`), _.textContent = "⋮⋮", _.addEventListener("dragstart", (E) => {
          E.dataTransfer.setData("text/plain", o.id), E.dataTransfer.effectAllowed = "move", c.classList.add("sg-step--dragging");
        }), _.addEventListener("dragend", () => {
          c.classList.remove("sg-step--dragging");
        }), p.append(_);
      }
      if (p.append(
        B("span", "sg-step__number", String(a + 1)),
        B("span", "sg-step__action", o.action)
      ), d && p.append(B("span", "sg-step__new", "New")), o.invalid && p.append(B("span", "sg-step__warning", "Target missing")), h.append(p), e === "manage") {
        const _ = document.createElement("div");
        _.className = "sg-step__top-right";
        const E = Q("Play", "ghost", { icon: Ie, withLabel: !0, ariaLabel: "Play from here" });
        E.classList.add("sg-step__play"), E.addEventListener("click", (L) => {
          var I, G;
          L.preventDefault(), L.stopPropagation(), (G = (I = this.handlers)["play-here"]) == null || G.call(I, o.id);
        });
        const k = Q("Remove", "danger", { icon: Pe, ariaLabel: "Remove step" });
        k.classList.add("sg-step__remove-icon"), k.addEventListener("click", (L) => {
          var I, G;
          L.preventDefault(), L.stopPropagation(), (G = (I = this.handlers).remove) == null || G.call(I, o.id);
        }), _.append(E, k), h.append(_);
      }
      const u = document.createElement("input");
      u.className = "sg-field sg-step__title", u.value = o.title, u.dataset.field = "title", u.disabled = e === "recording", u.placeholder = "Step title", u.setAttribute("aria-label", `Step ${a + 1} title`);
      const g = document.createElement("div");
      g.className = "sg-step__selector-wrap";
      const f = B("code", "sg-step__selector", o.selector || "No target");
      if (g.append(f), e === "manage" && o.selector) {
        const _ = Q("Copy", "ghost", { icon: Re, ariaLabel: "Copy selector" });
        _.classList.add("sg-step__selector-copy"), _.addEventListener("click", async (E) => {
          var k, L;
          E.preventDefault(), E.stopPropagation();
          try {
            await ((L = (k = navigator.clipboard) == null ? void 0 : k.writeText) == null ? void 0 : L.call(k, String(o.selector))), _.title = "Copied", setTimeout(() => {
              _.title = "Copy selector";
            }, 1e3);
          } catch {
          }
        }), g.append(_);
      }
      const b = document.createElement("div");
      if (b.className = "sg-step__body", b.append(u, g), c.append(h, b), e === "manage" || e === "recording") {
        const _ = document.createElement("div");
        _.className = "sg-step__controls";
        const E = (I, G, J = "") => {
          const j = gt(I, G, J);
          return j.classList.add("sg-button--compact"), j.addEventListener("click", (T) => {
            var O, $;
            T.preventDefault(), T.stopPropagation(), ($ = (O = this.handlers)[G]) == null || $.call(O, o.id);
          }), j;
        }, k = document.createElement("div");
        k.className = "sg-step__controls-left";
        const L = document.createElement("div");
        if (L.className = "sg-step__controls-right", e === "manage") {
          if (o.action === "input") {
            const j = document.createElement("label");
            j.className = "sg-check sg-check--compact";
            const T = document.createElement("input");
            T.type = "checkbox", T.dataset.field = "waitRequired", T.checked = !!((m = o.waitFor) != null && m.required), j.append(T, document.createTextNode(" Require value")), k.append(j);
          }
          const I = this.state.steps.length, G = a + 1, J = (j) => {
            const T = document.createElement("div");
            T.className = "sg-step__move-picker";
            const O = j === "up", $ = gt(O ? "↑" : "↓", "", "ghost");
            $.classList.add("sg-button--compact", "sg-step__move-btn"), $.setAttribute("aria-haspopup", "listbox"), $.setAttribute("aria-expanded", "false"), $.title = O ? "Move to an earlier step" : "Move to a later step", $.setAttribute("aria-label", O ? `Move step ${G} to an earlier position` : `Move step ${G} to a later position`);
            const K = O ? Array.from({ length: a }, (R, D) => G - 1 - D) : Array.from({ length: I - G }, (R, D) => G + 1 + D);
            K.length || ($.disabled = !0);
            const q = document.createElement("div");
            return q.className = "sg-step__move-menu", q.hidden = !0, q.setAttribute("role", "listbox"), q.setAttribute("aria-label", O ? "Earlier step numbers" : "Later step numbers"), K.forEach((R) => {
              const D = document.createElement("button");
              D.type = "button", D.className = "sg-step__move-option", D.textContent = String(R), D.setAttribute("role", "option"), D.title = `Move to step ${R}`, D.addEventListener("click", (et) => {
                var tt, ct;
                et.preventDefault(), et.stopPropagation(), this.closeMoveMenus(), (ct = (tt = this.handlers)["move-to"]) == null || ct.call(tt, o.id, R);
              }), q.append(D);
            }), $.addEventListener("click", (R) => {
              if (R.preventDefault(), R.stopPropagation(), $.disabled) return;
              const D = q.hidden;
              this.closeMoveMenus(), D && (q.hidden = !1, $.setAttribute("aria-expanded", "true"));
            }), T.append($, q), T;
          };
          k.append(J("up"), J("down"));
        } else
          L.append(
            E("Play", "play-here", "ghost"),
            E("Remove", "remove", "danger")
          );
        if (_.append(k), L.childNodes.length && _.append(L), e === "manage") {
          const I = document.createElement("details");
          I.className = "sg-step-settings";
          const G = document.createElement("summary");
          G.className = "sg-step-settings__summary sg-step-settings__summary--split", G.innerHTML = `
            <span class="sg-step-settings__summary-left">
              <span class="sg-step-settings__gear" aria-hidden="true">${Qe}</span>
              Settings
            </span>
            <span class="sg-step-settings__chevron" aria-hidden="true">▾</span>
          `, I.append(G);
          const J = document.createElement("div");
          J.className = "sg-step-settings__body";
          const j = document.createElement("label");
          j.className = "sg-step-settings__field", j.append(document.createTextNode("Step description"));
          const T = document.createElement("textarea");
          T.className = "sg-field sg-step__description", T.rows = 2, T.value = o.description || "", T.dataset.field = "description", T.placeholder = "Shown next to the highlight while playing", T.setAttribute("aria-label", `Step ${a + 1} description`), j.append(T);
          const O = document.createElement("label");
          O.className = "sg-check";
          const $ = document.createElement("input");
          $.type = "checkbox", $.dataset.stepSetting = "autoScroll", $.checked = ((v = o.settings) == null ? void 0 : v.autoScroll) !== !1, O.append($, document.createTextNode(" Auto-scroll"));
          const K = document.createElement("label");
          K.className = "sg-step-settings__field", K.append(document.createTextNode("Show delay (ms)"));
          const q = document.createElement("input");
          q.type = "number", q.min = "0", q.step = "50", q.className = "sg-field", q.value = String(((w = o.settings) == null ? void 0 : w.delay) ?? 0), q.dataset.stepSetting = "delay", K.append(q);
          const R = document.createElement("label");
          R.className = "sg-step-settings__field", R.append(document.createTextNode("Hide delay (ms)"));
          const D = document.createElement("input");
          D.type = "number", D.min = "0", D.step = "50", D.className = "sg-field", D.value = String(((C = o.settings) == null ? void 0 : C.hideDelay) ?? 0), D.dataset.stepSetting = "hideDelay", R.append(D);
          const et = document.createElement("label");
          et.className = "sg-check";
          const tt = document.createElement("input");
          tt.type = "checkbox", tt.dataset.stepSetting = "autoSkipMissing", tt.checked = ((x = o.settings) == null ? void 0 : x.autoSkipMissing) !== !1, et.append(tt, document.createTextNode(" Auto-skip if missing")), J.append(j, O, K, R, et), I.append(J), c.append(_, I);
        } else
          c.append(_);
      }
      s.append(c);
    }), e === "manage" && this._stepsBlock ? this._stepsBlock.append(s) : t.append(s);
  }
  renderManageRoutes(t) {
    this.state.flashMessage && t.append(B("p", "sg-status", this.state.flashMessage));
    const e = this.state.settings || {}, s = Array.isArray(this.state.allGuides) ? this.state.allGuides : [], i = document.createElement("div");
    i.className = "sg-page-guides";
    const r = document.createElement("div");
    r.className = "sg-page-guides__label-row";
    const o = document.createElement("span");
    if (o.className = "sg-page-guides__label-icon", o.setAttribute("aria-hidden", "true"), o.innerHTML = Fs, r.append(o, B("div", "sg-page-guides__label", `All guides (${s.length})`)), i.append(r), !s.length)
      i.append(B("p", "sg-lead", "No guides saved yet."));
    else {
      const N = /* @__PURE__ */ new Map();
      s.forEach((P) => {
        const M = P.url || "/";
        N.has(M) || N.set(M, []), N.get(M).push(P);
      }), [...N.entries()].sort((P, M) => P[0].localeCompare(M[0])).forEach(([P, M]) => {
        const W = document.createElement("div");
        W.className = "sg-manage-section";
        const st = document.createElement("div");
        st.className = "sg-manage-section__path";
        const mt = document.createElement("span");
        mt.className = "sg-manage-section__path-icon", mt.setAttribute("aria-hidden", "true"), mt.innerHTML = Hs, st.append(mt, document.createTextNode(P)), W.append(st);
        const Yt = document.createElement("ul");
        Yt.className = "sg-page-guides__list", M.forEach((Ct) => {
          const yt = document.createElement("li");
          yt.className = "sg-page-guides__item sg-page-guides__item--actions", yt.dataset.guideId = Ct.id;
          const Me = document.createElement("div");
          Me.className = "sg-page-guides__copy";
          const Le = document.createElement("div");
          Le.className = "sg-page-guides__head";
          const Ne = document.createElement("div");
          Ne.className = "sg-page-guides__title-row";
          const Ze = String(Ct.title || "Untitled").split(" · "), Xe = (Ze[0] || "Untitled").trim(), Je = Ze.slice(1).join(" · ").trim(), As = `${Ct.steps} step${Ct.steps === 1 ? "" : "s"}`, Ae = /^(\d+)\s+steps?$/i.test(Xe), se = document.createElement("div");
          if (se.className = "sg-page-guides__title-line", !Ae) {
            const ht = document.createElement("strong");
            ht.textContent = Xe, se.append(ht);
          }
          if (Je) {
            const ht = document.createElement("span");
            ht.className = `sg-page-guides__meta${Ae ? " sg-page-guides__meta--solo" : ""}`, ht.textContent = Je, se.append(ht);
          } else if (Ae) {
            const ht = document.createElement("span");
            ht.className = "sg-page-guides__meta sg-page-guides__meta--solo", ht.textContent = "Untitled guide", se.append(ht);
          }
          const Be = document.createElement("span");
          Be.className = "sg-page-guides__badge", Be.textContent = As, Ne.append(se, Be), Le.append(Ne), Me.append(Le);
          const fe = document.createElement("div");
          fe.className = "sg-page-guides__actions";
          const ie = Q("Play", "secondary", { icon: Ie, ariaLabel: "Play guide" });
          if (ie.classList.add("sg-page-guides__action", "sg-page-guides__action--play"), ie.dataset.action = "play-guide", ie.dataset.guideId = Ct.id, this.state.readOnly)
            fe.append(ie);
          else {
            const ht = Q("Edit", "secondary", { icon: Ye, ariaLabel: "Edit steps" });
            ht.classList.add("sg-page-guides__action", "sg-page-guides__action--edit"), ht.dataset.action = "edit-guide", ht.dataset.guideId = Ct.id;
            const me = Q("Delete", "danger", { icon: Pe, ariaLabel: "Delete guide" });
            me.classList.add("sg-page-guides__action", "sg-page-guides__action--delete"), me.dataset.action = "delete-guide", me.dataset.guideId = Ct.id, fe.append(ht, ie, me);
          }
          yt.append(Me, fe), Yt.append(yt);
        }), W.append(Yt), i.append(W);
      });
    }
    const a = document.createElement("div");
    a.className = "sg-guides-tools";
    const c = Q("Load", "secondary", { icon: Os, withLabel: !0 });
    c.dataset.action = "load";
    const l = Q("Paste", "secondary", { icon: $s, withLabel: !0 });
    l.dataset.action = "paste";
    const d = Q("Export", "primary", { icon: Ds, withLabel: !0 });
    d.dataset.action = "download-all", a.append(c, l, d), i.append(a), t.append(i);
    const h = document.createElement("div");
    h.className = "sg-settings sg-settings--nested sg-settings-card sg-account-panel";
    const p = document.createElement("div");
    p.className = "sg-account-panel__head";
    const u = document.createElement("span");
    u.className = "sg-account-panel__head-icon", u.setAttribute("aria-hidden", "true"), u.innerHTML = Ws, p.append(u, B("div", "sg-page-guides__label", "Current account")), h.append(p);
    const g = this.state.accountId, f = !(g == null || g === ""), b = document.createElement("div");
    b.className = `sg-account-card${f ? "" : " sg-account-card--empty"}`;
    const m = document.createElement("div");
    m.className = "sg-account-card__left";
    const v = document.createElement("span");
    v.className = "sg-account-card__badge", v.textContent = "ID";
    const w = document.createElement("div");
    w.className = "sg-account-card__meta", w.append(B("span", "sg-account-card__caption", "Your account ID"));
    const C = document.createElement("strong");
    if (C.className = "sg-account-card__value", C.textContent = f ? String(g) : "Not signed in", C.title = f ? "Logged-in account ID from the host app" : "Host app has not passed an account ID yet", w.append(C), m.append(v, w), b.append(m), f) {
      const N = Q("Copy", "secondary", {
        icon: Re,
        withLabel: !0,
        ariaLabel: "Copy account ID"
      });
      N.classList.add("sg-account-card__copy"), N.addEventListener("click", async (P) => {
        var st, mt;
        P.preventDefault(), P.stopPropagation();
        const M = String(g), W = N.querySelector("span");
        try {
          await ((mt = (st = navigator.clipboard) == null ? void 0 : st.writeText) == null ? void 0 : mt.call(st, M)), W ? W.textContent = "Copied" : N.textContent = "Copied", setTimeout(() => {
            W ? W.textContent = "Copy" : N.innerHTML = `${Re}<span>Copy</span>`;
          }, 1200);
        } catch {
          W ? W.textContent = M : N.textContent = M;
        }
      }), b.append(N);
    }
    h.append(b);
    const x = document.createElement("p");
    x.className = "sg-account-panel__hint";
    const _ = document.createElement("span");
    _.className = "sg-account-panel__hint-icon", _.setAttribute("aria-hidden", "true"), _.innerHTML = js;
    const E = document.createElement("span");
    f ? E.innerHTML = "Add this ID under <strong>Access</strong> to allow editing." : E.textContent = "Sign in or pass an account ID from the host app.", x.append(_, E), h.append(x);
    const k = document.createElement("div");
    k.className = "sg-settings sg-settings--nested sg-settings-card sg-defaults-panel";
    const L = document.createElement("div");
    L.className = "sg-defaults-panel__head";
    const I = document.createElement("span");
    I.className = "sg-defaults-panel__head-icon", I.setAttribute("aria-hidden", "true"), I.innerHTML = Qe, L.append(I, B("div", "sg-page-guides__label", "Default settings")), k.append(L);
    const G = document.createElement("div");
    G.className = "sg-defaults-panel__checks";
    const J = document.createElement("label");
    J.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const j = document.createElement("input");
    j.type = "checkbox", j.dataset.setting = "reloadOnNavigate", j.checked = !!e.reloadOnNavigate, J.append(j, document.createTextNode(" Reload when opening another route")), G.append(J);
    const T = document.createElement("label");
    T.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const O = document.createElement("input");
    O.type = "checkbox", O.dataset.setting = "resetBeforePlay", O.checked = e.resetBeforePlay === "reload", T.append(O, document.createTextNode(" Reload page before playing")), G.append(T), k.append(G);
    const $ = document.createElement("label");
    $.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", $.append(document.createTextNode("Reload resume delay (ms)"));
    const K = document.createElement("div");
    K.className = "sg-field-shell";
    const q = document.createElement("span");
    q.className = "sg-field-shell__icon", q.setAttribute("aria-hidden", "true"), q.innerHTML = qs;
    const R = document.createElement("input");
    R.type = "number", R.min = "0", R.max = "10000", R.step = "50", R.className = "sg-field sg-field--shell", R.dataset.setting = "resetBeforePlayDelay", R.value = String(e.resetBeforePlayDelay ?? 450), K.append(q, R), $.append(K), k.append($);
    const D = document.createElement("label");
    D.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", D.append(document.createTextNode("Theme mode"));
    const et = document.createElement("div");
    et.className = "sg-field-shell sg-field-shell--select";
    const tt = document.createElement("span");
    tt.className = "sg-field-shell__icon", tt.setAttribute("aria-hidden", "true"), tt.innerHTML = zs;
    const ct = document.createElement("select");
    ct.className = "sg-field sg-field--shell", ct.dataset.setting = "theme", [
      ["dark", "Dark"],
      ["light", "Light"]
    ].forEach(([N, P]) => {
      const M = document.createElement("option");
      M.value = N, M.textContent = P, (e.theme || "dark") === N && (M.selected = !0), ct.append(M);
    });
    const H = document.createElement("span");
    H.className = "sg-field-shell__chevron", H.setAttribute("aria-hidden", "true"), H.textContent = "▾", et.append(tt, ct, H), D.append(et), k.append(D);
    const U = document.createElement("div");
    U.className = "sg-settings sg-settings--nested sg-settings-card", U.append(B("div", "sg-page-guides__label", "Access & toolbar"));
    const F = this.createEditableStringList({
      label: "Editor account IDs (not listed = Play only)",
      settingKey: "editorAccountIds",
      items: Array.isArray(e.editorAccountIds) ? e.editorAccountIds : [],
      placeholder: "e.g. 12",
      emptyText: "No editor accounts — Play only for everyone",
      addLabel: "Add"
    });
    U.append(F);
    const z = document.createElement("label");
    z.className = "sg-step-settings__field sg-settings__row", z.append(document.createTextNode("Bypass PIN (hover orb + type to open panel)"));
    const Z = document.createElement("div");
    Z.className = "sg-password-field";
    const X = document.createElement("input");
    X.type = "password", X.className = "sg-field", X.inputMode = "numeric", X.autocomplete = "new-password", X.placeholder = "••••••", X.maxLength = 12, X.dataset.setting = "bypassPin", X.value = String(e.bypassPin ?? "123456");
    const Et = Q("Show", "ghost", {
      icon: `
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M1.8 8s2.6-4.2 6.2-4.2S14.2 8 14.2 8s-2.6 4.2-6.2 4.2S1.8 8 1.8 8Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="8" cy="8" r="1.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      `,
      ariaLabel: "Show PIN"
    });
    Et.classList.add("sg-password-field__toggle"), Et.addEventListener("click", (N) => {
      N.preventDefault(), N.stopPropagation();
      const P = X.type === "password";
      X.type = P ? "text" : "password", Et.title = P ? "Hide PIN" : "Show PIN", Et.setAttribute("aria-label", P ? "Hide PIN" : "Show PIN");
    }), Z.append(X, Et), z.append(Z), U.append(z);
    const Mt = document.createElement("label");
    Mt.className = "sg-check sg-settings__row";
    const Ot = document.createElement("input");
    Ot.type = "checkbox", Ot.dataset.setting = "showAccountId", Ot.checked = !!e.showAccountId, Mt.append(Ot, document.createTextNode(" Show account ID on launcher")), U.append(Mt);
    const pe = this.createEditableStringList({
      label: "Hide toolbar on URLs",
      settingKey: "hiddenUrls",
      items: Array.isArray(e.hiddenUrls) ? e.hiddenUrls : [],
      placeholder: "/login",
      emptyText: "No hidden URLs — toolbar shows everywhere",
      addLabel: "Add"
    });
    U.append(pe), U.append(B(
      "p",
      "sg-lead",
      "Only listed IDs can record or manage. The bypass PIN provides recovery access."
    ));
    const dt = e.ui || {}, ft = document.createElement("div");
    ft.className = "sg-settings sg-settings--nested sg-settings-card", ft.append(B("div", "sg-page-guides__label", "Playback appearance"));
    const $t = document.createElement("label");
    $t.className = "sg-step-settings__field sg-settings__row", $t.append(document.createTextNode("Font family"));
    const Dt = document.createElement("select");
    Dt.className = "sg-field", Dt.dataset.setting = "ui.fontFamily", [
      ["system", "System"],
      ["inter", "Inter"],
      ["arial", "Arial"],
      ["roboto", "Roboto"],
      ["serif", "Serif"]
    ].forEach(([N, P]) => {
      const M = document.createElement("option");
      M.value = N, M.textContent = P, (dt.fontFamily || "system") === N && (M.selected = !0), Dt.append(M);
    }), $t.append(Dt), ft.append($t);
    const Vt = (N, P, M) => {
      const W = document.createElement("label");
      W.className = "sg-check sg-settings__row";
      const st = document.createElement("input");
      st.type = "checkbox", st.dataset.setting = N, st.checked = !!M, W.append(st, document.createTextNode(` ${P}`)), ft.append(W);
    };
    Vt("ui.animations", "Enable animations", dt.animations !== !1), Vt("ui.spotlightFade", "Spotlight fade in/out", dt.spotlightFade !== !1), Vt("ui.animatedCursor", "Animated cursor between steps", dt.animatedCursor);
    const Ht = document.createElement("label");
    Ht.className = "sg-step-settings__field sg-settings__row", Ht.append(document.createTextNode("Highlight motion"));
    const Ft = document.createElement("select");
    Ft.className = "sg-field", Ft.dataset.setting = "ui.highlightMotion", [
      ["none", "None"],
      ["pulse", "Pulse"],
      ["wobble", "Wobble"],
      ["fade", "Fade"]
    ].forEach(([N, P]) => {
      const M = document.createElement("option");
      M.value = N, M.textContent = P, (dt.highlightMotion || "pulse") === N && (M.selected = !0), Ft.append(M);
    }), Ht.append(Ft), ft.append(Ht);
    const Ut = document.createElement("label");
    Ut.className = "sg-step-settings__field sg-settings__row", Ut.append(document.createTextNode("Transition speed (ms)"));
    const St = document.createElement("input");
    St.type = "number", St.min = "0", St.max = "1000", St.step = "20", St.className = "sg-field", St.dataset.setting = "ui.transitionMs", St.value = String(dt.transitionMs ?? 220), Ut.append(St), ft.append(Ut);
    const Bt = document.createElement("div");
    Bt.className = "sg-appearance-dim sg-settings__row";
    const y = document.createElement("div");
    y.className = "sg-appearance-dim__head", y.append(B("span", "sg-appearance-dim__label", "Overlay dim"));
    const S = document.createElement("span");
    S.className = "sg-appearance-dim__value";
    const A = document.createElement("input");
    A.type = "range", A.min = "0", A.max = "90", A.step = "5", A.className = "sg-field sg-field--range", A.dataset.setting = "ui.overlayOpacity", A.value = String(Math.round((Number(dt.overlayOpacity) || 0.58) * 100)), S.textContent = `${A.value}%`, A.addEventListener("input", () => {
      S.textContent = `${A.value}%`, Bt.style.setProperty("--sg-dim-pct", `${A.value}%`);
    }), Bt.style.setProperty("--sg-dim-pct", `${A.value}%`), y.append(S), Bt.append(y, A), ft.append(Bt);
    const nt = document.createElement("div");
    nt.className = "sg-settings__colors";
    const V = (N, P, M) => {
      const W = document.createElement("label");
      W.className = "sg-settings__color-row";
      const st = document.createElement("span");
      st.className = "sg-settings__color-meta", st.append(B("span", "sg-settings__color-label", P));
      const mt = document.createElement("span");
      mt.className = "sg-settings__color-hex";
      const Yt = String(M || "#000000").toLowerCase();
      mt.textContent = Yt, st.append(mt);
      const Ct = document.createElement("span");
      Ct.className = "sg-settings__color-swatch";
      const yt = document.createElement("input");
      yt.type = "color", yt.dataset.setting = N, yt.value = Yt, yt.setAttribute("aria-label", P), yt.addEventListener("input", () => {
        mt.textContent = String(yt.value || "").toLowerCase();
      }), Ct.append(yt), W.append(st, Ct), nt.append(W);
    };
    V("ui.tipBg", "Tip background", dt.tipBg || "#0f1b33"), V("ui.tipText", "Tip text", dt.tipText || "#f8fafc"), V("ui.skipBg", "Skip background", dt.skipBg || "#2563eb"), V("ui.skipText", "Skip text", dt.skipText || "#ffffff"), V("ui.spotlightColor", "Spotlight", dt.spotlightColor || "#3b82f6"), ft.append(nt);
    const rt = gt("Reset appearance", "reset-ui-settings", "secondary");
    rt.classList.add("sg-button--compact", "sg-appearance-reset"), ft.append(rt);
    const ut = e.launcher || {}, _t = document.createElement("div");
    _t.className = "sg-settings sg-settings--nested sg-settings-card", _t.append(B("div", "sg-page-guides__label", "Orb"));
    const ot = document.createElement("label");
    ot.className = "sg-step-settings__field sg-settings__row", ot.append(document.createTextNode("Size"));
    const pt = document.createElement("select");
    pt.className = "sg-field", pt.dataset.setting = "launcher.size", [
      ["56", "Small"],
      ["68", "Medium"],
      ["80", "Large"]
    ].forEach(([N, P]) => {
      const M = document.createElement("option");
      M.value = N, M.textContent = P, Number(ut.size ?? 80) === Number(N) && (M.selected = !0), pt.append(M);
    }), ot.append(pt);
    const kt = document.createElement("label");
    kt.className = "sg-step-settings__field sg-settings__row", kt.append(document.createTextNode("Position"));
    const Wt = document.createElement("select");
    Wt.className = "sg-field", Wt.dataset.setting = "launcher.position", [
      ["bottom-right", "Bottom right"],
      ["bottom-left", "Bottom left"],
      ["top-right", "Top right"],
      ["top-left", "Top left"]
    ].forEach(([N, P]) => {
      const M = document.createElement("option");
      M.value = N, M.textContent = P, (ut.position || "bottom-right") === N && (M.selected = !0), Wt.append(M);
    }), kt.append(Wt);
    const Zt = document.createElement("label");
    Zt.className = "sg-check sg-settings__row";
    const jt = document.createElement("input");
    jt.type = "checkbox", jt.dataset.setting = "launcher.animations", jt.checked = ut.animations !== !1, Zt.append(jt, document.createTextNode(" Animate orb")), _t.append(ot, kt, Zt);
    const Xt = document.createElement("div");
    Xt.className = "sg-settings-layout";
    const Lt = document.createElement("nav");
    Lt.className = "sg-settings-sidebar", Lt.setAttribute("aria-label", "Panel sections"), Lt.append(B("div", "sg-settings-sidebar__title", "System Guider"));
    const qt = document.createElement("div");
    qt.className = "sg-settings-content";
    const Pt = {
      guides: i,
      account: h,
      general: k,
      access: U,
      appearance: ft,
      orb: _t
    };
    Object.entries(Pt).forEach(([N, P]) => {
      P.classList.add("sg-settings-content__section"), P.dataset.settingsSection = N;
    }), qt.append(...Object.values(Pt));
    const ee = {
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
    }, ge = (N) => {
      this.settingsSection = Pt[N] ? N : "guides", Object.entries(Pt).forEach(([P, M]) => {
        M.hidden = P !== this.settingsSection;
      }), Lt.querySelectorAll(".sg-settings-sidebar__item").forEach((P) => {
        const M = P.dataset.section === this.settingsSection;
        P.classList.toggle("is-active", M), P.setAttribute("aria-current", M ? "page" : "false");
      }), qt.scrollTop = 0;
    }, Jt = (N, P, M) => {
      const W = document.createElement("button");
      return W.type = "button", W.className = "sg-settings-sidebar__item", W.innerHTML = ee[P] || ee.general, W.dataset.tooltip = N, W.dataset.section = M, W.setAttribute("aria-label", N), W.title = N, W.addEventListener("click", () => {
        ge(M);
      }), Lt.append(W), W;
    };
    Jt("Guides", "guides", "guides"), Jt("Account", "account", "account"), Jt("Defaults", "general", "general"), Jt("Access", "access", "access"), Jt("Appearance", "appearance", "appearance"), Jt("Orb", "orb", "orb"), Xt.append(Lt, qt), t.append(Xt), ge(this.settingsSection);
  }
  renderPlayback(t) {
    const {
      currentStep: e,
      currentIndex: s = 0,
      total: i = 0,
      failed: r,
      autoSkipping: o
    } = this.state, a = document.createElement("div");
    a.className = "sg-progress", a.append(
      B("span", "", `Step ${Math.min(s + 1, i)} of ${i}`),
      B("span", "", `${i ? Math.round((s + 1) / i * 100) : 0}%`)
    );
    const c = document.createElement("div");
    c.className = "sg-progress__bar";
    const l = document.createElement("span");
    if (l.style.width = `${i ? (s + 1) / i * 100 : 0}%`, c.append(l), t.append(a, c), e && t.append(
      B("h3", "sg-playback__title", e.title),
      B("p", "sg-playback__description", e.description)
    ), r) {
      const d = String(this.state.message || "").trim();
      t.append(B(
        "p",
        "sg-status sg-status--error",
        d || (o ? "Target not found. Skipping to the next step…" : "Target not found. Follow this guide's requirements first, then continue — or skip this step.")
      ));
    } else this.state.waiting && (this.state.waitKind === "target" || this.state.waitKind === "navigate") && t.append(B(
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
        icon: Ie,
        withLabel: !0,
        ariaLabel: "Play guide"
      });
      s.dataset.action = "play", s.classList.add("sg-panel__btn-play"), s.disabled = this.state.steps.length === 0;
      const i = document.createElement("div");
      i.className = "sg-panel__footer-more", i.append(
        gt("All guides", "open-manage", "ghost"),
        gt("Download", "download", "ghost"),
        gt("Download all", "download-all", "ghost"),
        gt("Copy JSON", "copy", "ghost"),
        gt("Close", "close", "ghost")
      ), e.append(s, i);
    } else {
      if (t === "manage-routes")
        return null;
      t === "playback" && (e.append(
        gt(this.labels.back, "prev", "secondary"),
        gt(this.labels.skip, "skip", "secondary"),
        gt(this.labels.next, "next", "primary"),
        gt(this.labels.close, "close", "ghost")
      ), e.querySelector('[data-action="prev"]').disabled = this.state.currentIndex <= 0, e.querySelector('[data-action="next"]').disabled = !!(this.state.waiting || this.state.failed));
    }
    return e;
  }
  handleClick(t) {
    var c, l, d, h, p, u, g;
    const e = zt(t);
    if (!e) return;
    e.closest(".sg-step__move-picker") || this.closeMoveMenus();
    const s = e.closest("[data-action]"), i = s == null ? void 0 : s.dataset.action;
    if (!i) return;
    if (t.preventDefault(), t.stopPropagation(), i === "toggle-collapse") {
      this.update({ collapsed: !this.state.collapsed });
      return;
    }
    const r = e.closest("[data-step-id]"), o = (c = e.closest("[data-guide-id]")) == null ? void 0 : c.dataset.guideId;
    if (i === "play-guide" || i === "delete-guide" || i === "edit-guide") {
      (d = (l = this.handlers)[i]) == null || d.call(l, o);
      return;
    }
    const a = (r == null ? void 0 : r.dataset.stepId) || ((p = (h = s == null ? void 0 : s.closest) == null ? void 0 : h.call(s, "[data-step-id]")) == null ? void 0 : p.dataset.stepId);
    (g = (u = this.handlers)[i]) == null || g.call(u, a);
  }
  closeMoveMenus() {
    this.root.querySelectorAll(".sg-step__move-menu:not([hidden])").forEach((t) => {
      t.hidden = !0;
    }), this.root.querySelectorAll('.sg-step__move-btn[aria-expanded="true"]').forEach((t) => {
      t.setAttribute("aria-expanded", "false");
    });
  }
  handleInput(t) {
    var l, d, h, p, u, g, f, b, m, v, w, C;
    const e = zt(t);
    if (!e) return;
    const s = e.dataset.setting;
    if (s) {
      const x = e.type === "checkbox" ? e.checked : e.value;
      (d = (l = this.handlers)["update-setting"]) == null || d.call(l, s, x);
      return;
    }
    const i = e.dataset.guideSetting;
    if (i) {
      const x = e.dataset.guideId || this.state.currentGuideId, _ = e.type === "checkbox" ? e.checked : e.value;
      (p = (h = this.handlers)["edit-guide-setting"]) == null || p.call(h, x, i, _);
      return;
    }
    const r = e.dataset.stepSetting;
    if (r) {
      const x = (u = e.closest("[data-step-id]")) == null ? void 0 : u.dataset.stepId, _ = e.type === "checkbox" ? e.checked : e.value;
      (f = (g = this.handlers)["edit-step-setting"]) == null || f.call(g, x, r, _);
      return;
    }
    const o = e.dataset.guideField;
    if (o) {
      (m = (b = this.handlers).editGuide) == null || m.call(b, o, e.value);
      return;
    }
    const a = e.dataset.field, c = (v = e.closest("[data-step-id]")) == null ? void 0 : v.dataset.stepId;
    !a || !c || (C = (w = this.handlers).edit) == null || C.call(w, c, a, a === "waitRequired" ? e.checked : e.value);
  }
  handlePreview(t) {
    var i, r, o;
    const e = zt(t), s = (i = e == null ? void 0 : e.closest) == null ? void 0 : i.call(e, "[data-step-id]");
    s && !s.contains(t.relatedTarget) && ((o = (r = this.handlers).preview) == null || o.call(r, s.dataset.stepId));
  }
  handlePreviewEnd(t) {
    var i, r, o;
    const e = zt(t), s = (i = e == null ? void 0 : e.closest) == null ? void 0 : i.call(e, "[data-step-id]");
    s && !s.contains(t.relatedTarget) && ((o = (r = this.handlers).previewEnd) == null || o.call(r));
  }
  handleDragStart(t) {
    const e = zt(t);
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
    const e = zt(t), s = (r = e == null ? void 0 : e.closest) == null ? void 0 : r.call(e, "[data-step-id]"), i = t.dataTransfer.getData("text/plain");
    i && s && i !== s.dataset.stepId && ((a = (o = this.handlers).drop) == null || a.call(o, i, s.dataset.stepId));
  }
  startDrag(t) {
    var o, a;
    if (t.button != null && t.button !== 0) return;
    const e = zt(t);
    if (e != null && e.closest("button, a, input, textarea, select, label, .sg-step__drag, .sg-step__controls")) return;
    const s = !!(e != null && e.closest(".sg-panel__header")), i = !!(e != null && e.matches(
      ".sg-panel, .sg-panel__body, .sg-settings-layout, .sg-settings-content, .sg-settings-sidebar"
    ));
    if (!s && !i) return;
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
const Qt = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, lt = (n) => String(n || "").replace(/\s+/g, " ").trim().toLowerCase(), ps = (n) => {
  var o, a, c, l;
  if (!(n instanceof Element)) return "";
  const t = ((o = n.closest) == null ? void 0 : o.call(n, ".p-float-label")) || n.parentElement, e = (a = t == null ? void 0 : t.querySelector) == null ? void 0 : a.call(t, ":scope > label, label");
  if (e) {
    const d = lt(e.textContent);
    if (d) return d;
  }
  const s = (c = n.querySelector) == null ? void 0 : c.call(n, '.nav-link-title, .menu-title, .sidebar-title, [class*="title"]');
  if (s) {
    const d = lt(s.textContent);
    if (d) return d;
  }
  const i = n.cloneNode(!0);
  (l = i.querySelectorAll) == null || l.call(i, "script, style, svg, i, .nav-icon, .sidebar-pending-dot, .badge, .p-dropdown-label, .p-multiselect-label").forEach((d) => d.remove());
  const r = lt(i.textContent);
  return r || lt(
    n.getAttribute("aria-label") || n.getAttribute("title") || n.getAttribute("placeholder") || n.getAttribute("name") || ""
  );
}, gs = (n) => {
  var e;
  if (!(n instanceof Element)) return "";
  const t = n.getAttribute("href") || n.getAttribute("data-href") || "";
  if (!t || t === "#" || t.startsWith("javascript:")) return "";
  try {
    const s = new URL(t, ((e = globalThis.location) == null ? void 0 : e.origin) || "http://localhost");
    return `${s.pathname}${s.search}`.replace(/\/+$/, "") || "/";
  } catch {
    return t.split("#")[0].replace(/\/+$/, "") || t;
  }
};
function fs(n) {
  var s, i, r, o;
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
    let c = e.previousElementSibling;
    for (; c; ) {
      if ((s = c.matches) != null && s.call(c, t))
        return lt(c.textContent).slice(0, 80);
      const h = (i = c.querySelector) == null ? void 0 : i.call(c, t);
      if (h) return lt(h.textContent).slice(0, 80);
      c = c.previousElementSibling;
    }
    const l = e.parentElement;
    if (!l || l === document.body) break;
    let d = l.previousElementSibling;
    for (; d; ) {
      if ((r = d.matches) != null && r.call(d, t))
        return lt(d.textContent).slice(0, 80);
      const h = (o = d.querySelector) == null ? void 0 : o.call(d, t);
      if (h) return lt(h.textContent).slice(0, 80);
      d = d.previousElementSibling;
    }
    e = l;
  }
  return "";
}
function Vs(n) {
  var f, b, m;
  if (!(n instanceof Element)) return null;
  const t = ((f = n.closest) == null ? void 0 : f.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")) || ((b = n.matches) != null && b.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? n : null), e = t || n, s = ps(e), i = gs(e), r = fs(e), o = e.getAttribute("data-guider") || "", a = lt(t ? "" : e.getAttribute("aria-label") || ""), c = e.getAttribute("name") || "", l = lt(e.getAttribute("placeholder") || ""), d = e.getAttribute("role") || (t ? "combobox" : ""), h = e.tagName.toLowerCase(), p = e.getAttribute("type") || "", u = t && ((m = [...t.querySelectorAll("[id]")].find((v) => v.id && !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(v.id))) == null ? void 0 : m.id) || "", g = !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(e.id || "") && e.id || u || "";
  return !s && !i && !o && !c && !a && !g ? null : {
    ...s ? { text: s } : {},
    ...i ? { href: i } : {},
    ...r ? { section: r } : {},
    ...o ? { dataGuider: o } : {},
    ...a ? { ariaLabel: a } : {},
    ...c ? { name: c } : {},
    ...l ? { placeholder: l } : {},
    ...d ? { role: d } : {},
    ...h ? { tag: h } : {},
    ...p ? { type: p } : {},
    ...g ? { id: g } : {}
  };
}
function ye(n, t) {
  const e = lt(n), s = lt(t);
  if (!e || !s) return 0;
  if (e === s) return 50;
  const i = e.split(/\s+/).filter(Boolean), r = s.split(/\s+/).filter(Boolean);
  if (i.length === r.length && r.every((o) => i.includes(o)))
    return 40;
  if (e.includes(s)) {
    const o = Math.max(0, i.length - r.length);
    return Math.max(4, 18 - o * 6);
  }
  return s.includes(e) && e.length >= 3 ? 8 : 0;
}
function Zs(n, t) {
  const e = lt(n).replace(/\/+$/, ""), s = lt(t).replace(/\/+$/, "");
  return !e || !s ? 0 : e === s ? 45 : e.endsWith(s) || s.endsWith(e) ? 28 : e.includes(s) || s.includes(e) ? 12 : -25;
}
function Xs(n, t) {
  const e = lt(n), s = lt(t);
  return !e || !s ? 0 : e === s ? 30 : e.includes(s) || s.includes(e) ? 12 : -20;
}
function es(n, t) {
  if (!(n instanceof Element) || !t || typeof t != "object") return 0;
  let e = 0;
  const s = n.getAttribute("data-guider") || "";
  return t.dataGuider && (s === t.dataGuider ? e += 100 : s && (e -= 40)), t.id && n.id && n.id === t.id && (e += 80), t.href && (e += Zs(gs(n), t.href)), t.text ? (e += ye(ps(n), t.text), t.ariaLabel && (e += Math.round(ye(n.getAttribute("aria-label") || "", t.ariaLabel) * 0.5))) : t.ariaLabel && (e += ye(n.getAttribute("aria-label") || "", t.ariaLabel)), t.section && (e += Xs(fs(n), t.section)), t.name && n.getAttribute("name") === t.name && (e += 25), t.placeholder && (e += Math.round(ye(n.getAttribute("placeholder") || "", t.placeholder) * 0.6)), t.tag && n.tagName.toLowerCase() === t.tag && (e += 4), t.role && n.getAttribute("role") === t.role && (e += 6), t.type && n.getAttribute("type") === t.type && (e += 6), e;
}
function Js(n) {
  const t = [];
  if (n != null && n.dataGuider && t.push(`[data-guider="${Qt(n.dataGuider)}"]`), n != null && n.id && t.push(`#${Qt(n.id)}`), n != null && n.href) {
    const e = String(n.href);
    t.push(`a[href="${Qt(e)}"]`), t.push(`a[href="${Qt(e)}/"]`);
    const s = e.replace(/^\//, "");
    s && s !== e && t.push(`a[href="/${Qt(s)}"]`);
  }
  return n != null && n.name && t.push(`[name="${Qt(n.name)}"]`), t.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label'), t.join(", ");
}
function Ys(n, t = document) {
  var r;
  const e = t instanceof Element || t === document ? t : document;
  let s = [];
  try {
    s = [...e.querySelectorAll(Js(n))];
  } catch {
    s = [...e.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-guider]')];
  }
  const i = [];
  for (const o of s)
    o instanceof Element && ((r = o.closest) != null && r.call(o, ".sg-panel, .sg-overlay, .sg-launcher") || (i.push(o), o.matches("label") && o.control instanceof Element && i.push(o.control)));
  return [...new Set(i)];
}
const Qs = 40;
function ss(n, {
  selector: t = "",
  root: e = document,
  threshold: s = Qs
} = {}) {
  const i = [];
  if (t)
    try {
      const o = document.querySelector(t);
      if (o instanceof Element) {
        const a = n ? es(o, n) : 35;
        i.push({ element: o, score: a, via: "selector" });
      }
    } catch {
    }
  if (n && typeof n == "object")
    for (const o of Ys(n, e)) {
      const a = es(o, n);
      a > 0 && i.push({ element: o, score: a, via: "score" });
    }
  if (!i.length) return null;
  i.sort((o, a) => a.score - o.score || (o.via === "selector" ? -1 : 1));
  const r = i[0];
  return !r || r.score < s ? (r == null ? void 0 : r.via) === "selector" && t && (t.startsWith("[data-guider=") || t.startsWith("#")) ? r.element : null : r.element;
}
const ne = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
};
function at(n) {
  return n instanceof Element ? n.matches(
    'input[type="password"], [data-guider-ignore], [contenteditable][data-sensitive]'
  ) : !0;
}
function is(n) {
  return !n || typeof n != "string" ? !0 : /^(pv_|apv_|pr_|p_)id_?\d+$/i.test(n) || /^[a-z]{1,5}_id_\d+$/i.test(n);
}
const ns = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect";
function ti(n) {
  var r, o;
  if (!(n instanceof Element)) return null;
  const t = (r = n.closest) == null ? void 0 : r.call(n, ns);
  t && (n = t);
  const e = n.getAttribute("data-guider");
  if (e) return `[data-guider="${ne(e)}"]`;
  if (n.id && !is(n.id)) {
    const a = `#${ne(n.id)}`;
    if (document.querySelectorAll(a).length === 1) return a;
  }
  if ((o = n.matches) != null && o.call(n, ns)) {
    const a = [...n.querySelectorAll("[id]")].find(
      (l) => l.id && !is(l.id)
    ), c = [...n.classList].find((l) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(l));
    if (a && c) {
      const l = `${n.tagName.toLowerCase()}.${ne(c)}:has(#${ne(a.id)})`;
      try {
        if (document.querySelectorAll(l).length === 1) return l;
      } catch {
      }
    }
  }
  const s = [];
  let i = n;
  for (; i && i !== document.body && s.length < 5; ) {
    let a = i.tagName.toLowerCase();
    const c = [...i.classList].find(
      (h) => !/^(active|selected|open|focus|hover|ng-|css-|jsx-|p-placeholder|p-focus|p-inputtext|p-disabled|p-highlight|p-inputwrapper|p-inputwrapper-filled|p-inputwrapper-focus|p-overlay-open)$/i.test(h)
    );
    c && (a += `.${ne(c)}`);
    const l = i.parentElement;
    if (l) {
      const h = [...l.children].filter(
        (p) => p.tagName === i.tagName
      );
      h.length > 1 && (a += `:nth-of-type(${h.indexOf(i) + 1})`);
    }
    s.unshift(a);
    const d = s.join(" > ");
    if (document.querySelectorAll(d).length === 1) return d;
    i = l;
  }
  return s.join(" > ") || null;
}
function te(n) {
  var t;
  if (!n || typeof n != "string") return null;
  try {
    let e = document.querySelector(n);
    if (!e && /\.p-placeholder|\.p-inputtext|\.p-focus/.test(n)) {
      const s = n.replace(/\.p-placeholder/g, "").replace(/\.p-inputtext/g, "").replace(/\.p-focus/g, "").replace(/\s{2,}/g, " ").replace(/>\s*>/g, ">").trim();
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
function xt(n) {
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
function xe(n) {
  return xt(n) && ei(n);
}
function si(n, { behavior: t = "smooth", block: e = "center" } = {}) {
  if (!(n instanceof Element) || !n.isConnected) return;
  const s = [];
  let i = n.parentElement;
  for (; i && i !== document.documentElement; )
    s.push(i), i = i.parentElement;
  s.forEach((r) => {
    const o = getComputedStyle(r), a = /(auto|scroll|overlay)/.test(o.overflowY) && r.scrollHeight > r.clientHeight + 1, c = /(auto|scroll|overlay)/.test(o.overflowX) && r.scrollWidth > r.clientWidth + 1;
    if (!a && !c) return;
    const l = r.getBoundingClientRect(), d = n.getBoundingClientRect();
    if (a) {
      const h = d.top + d.height / 2 - (l.top + r.clientHeight / 2);
      Math.abs(h) > 2 && (r.scrollTop += h);
    }
    if (c) {
      const h = d.left + d.width / 2 - (l.left + r.clientWidth / 2);
      Math.abs(h) > 2 && (r.scrollLeft += h);
    }
  });
  try {
    n.scrollIntoView({ behavior: t, block: e, inline: "nearest" });
  } catch {
    n.scrollIntoView();
  }
}
function de(n) {
  var i, r, o, a;
  if (!(n instanceof Element)) return null;
  const t = (i = n.closest) == null ? void 0 : i.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
  if (t && xt(t)) return t;
  if (xt(n)) {
    const c = (r = n.closest) == null ? void 0 : r.call(
      n,
      '.p-overlaypanel, .modal-content, .card, .offcanvas, [class*="overlay-custom"], .filter-panel'
    );
    return c && c !== n && !n.matches('input, textarea, select, button, a, [role="combobox"]'), n;
  }
  let e = n.parentElement;
  for (let c = 0; c < 8 && e && !((o = e.matches) != null && o.call(e, ".p-overlaypanel, .modal, .modal-content, .card, .offcanvas, body, html")); c += 1) {
    const l = (a = e.getBoundingClientRect) == null ? void 0 : a.call(e);
    if (l && (l.width > 420 || l.height > 280)) {
      e = e.parentElement;
      continue;
    }
    if (xe(e)) return e;
    e = e.parentElement;
  }
  const s = n.closest([
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
    const c = s.getBoundingClientRect();
    if (c.width <= 420 && c.height <= 280) return s;
  }
  return xt(n) ? n : null;
}
function ii(n) {
  return [n.top, n.left, n.width, n.height].map((t) => Math.round(t * 2) / 2).join(":");
}
async function ni(n, {
  timeout: t = 1500,
  stableFrames: e = 4,
  interval: s = 50
} = {}) {
  if (!(n instanceof Element)) return null;
  const i = Date.now() + t;
  let r = "", o = 0;
  for (; Date.now() <= i; ) {
    if (!n.isConnected) return null;
    if (!xt(n))
      o = 0, r = "";
    else {
      const a = ii(n.getBoundingClientRect());
      if (a === r ? o += 1 : (r = a, o = 1), o >= e) return n;
    }
    await new Promise((a) => setTimeout(a, s));
  }
  return xe(n) ? n : null;
}
const ri = /* @__PURE__ */ new Set(["none", "pulse", "wobble", "fade"]), oi = /* @__PURE__ */ new Set(["system", "inter", "arial", "roboto", "serif"]), ai = /* @__PURE__ */ new Set(["bottom-right", "bottom-left", "top-right", "top-left"]), rs = {
  system: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  inter: "Inter, ui-sans-serif, system-ui, sans-serif",
  arial: "Arial, Helvetica, sans-serif",
  roboto: "Roboto, Arial, sans-serif",
  serif: 'Georgia, "Times New Roman", serif'
}, Ue = () => ({
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
}), ms = () => ({
  size: 80,
  position: "bottom-right",
  animations: !0
}), ys = () => ({
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
  /** Show “Account ID: …” under the launcher search bar. Off by default. */
  showAccountId: !1,
  /**
   * Pathname prefixes/paths where the floating toolbar is hidden.
   * Default: login only. Add `/` if your app serves login (or no-guider pages) at the root.
   * Examples: /login, /time-log
   */
  hiddenUrls: ["/login"],
  launcher: ms(),
  ui: Ue()
});
function bs(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => String(t).trim()).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\s,;]+/).map((t) => t.trim()).filter(Boolean)
  )];
}
function vs(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => Oe(t)).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\n,;]+/).map((t) => Oe(t)).filter(Boolean)
  )];
}
function Oe(n) {
  let t = String(n || "").trim();
  if (!t) return "";
  try {
    /^https?:\/\//i.test(t) && (t = new URL(t).pathname);
  } catch {
  }
  return t = t.split("?")[0].split("#")[0], t.startsWith("/") || (t = `/${t}`), t.length > 1 && (t = t.replace(/\/+$/, "")), t.toLowerCase();
}
function li(n, t = []) {
  const e = Oe(n || "/"), s = vs(t);
  return s.length ? s.some((i) => {
    if (i.endsWith("*")) {
      const r = i.slice(0, -1);
      return e === r.replace(/\/+$/, "") || e.startsWith(r);
    }
    return e === i || e.startsWith(`${i}/`);
  }) : !1;
}
function ci(n, t = []) {
  const e = bs(t);
  if (!e.length || n == null || n === "") return !1;
  const s = String(n).trim();
  return e.includes(s);
}
function di(n, t = "123456") {
  return n == null ? String(t ?? "").replace(/\D/g, "").slice(0, 12) : String(n).replace(/\D/g, "").slice(0, 12);
}
function re(n, t) {
  const e = String(n || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(e)) return e.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(e)) {
    const [, s, i, r] = e;
    return `#${s}${s}${i}${i}${r}${r}`.toLowerCase();
  }
  return t;
}
function ue(n = {}) {
  const t = Ue();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = String(n.highlightMotion || t.highlightMotion), s = String(n.fontFamily || t.fontFamily).toLowerCase();
  return {
    fontFamily: oi.has(s) ? s : t.fontFamily,
    animations: n.animations !== !1,
    highlightMotion: ri.has(e) ? e : t.highlightMotion,
    spotlightFade: n.spotlightFade !== !1,
    animatedCursor: !!n.animatedCursor,
    tipBg: re(n.tipBg, t.tipBg),
    tipText: re(n.tipText, t.tipText),
    skipBg: re(n.skipBg, t.skipBg),
    skipText: re(n.skipText, t.skipText),
    spotlightColor: re(n.spotlightColor, t.spotlightColor),
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
function ui(n = {}) {
  const t = ms();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = String(n.position || t.position).toLowerCase(), s = Math.round(Number(n.size));
  return {
    size: Number.isFinite(s) ? Math.min(96, Math.max(48, s)) : t.size,
    position: ai.has(e) ? e : t.position,
    animations: n.animations !== !1
  };
}
function Nt(n = {}) {
  var r, o;
  const t = ys();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = Number((r = n.ui) == null ? void 0 : r.overlayOpacity), s = Number((o = n.ui) == null ? void 0 : o.transitionMs), i = {
    ...n.ui && typeof n.ui == "object" ? n.ui : {},
    overlayOpacity: Number.isFinite(e) ? e : t.ui.overlayOpacity,
    transitionMs: Number.isFinite(s) ? s : t.ui.transitionMs
  };
  return {
    ...t,
    ...n,
    resetBeforePlay: n.resetBeforePlay === "reload" ? "reload" : "none",
    reloadOnNavigate: !!n.reloadOnNavigate,
    resetBeforePlayDelay: Math.max(0, Number(n.resetBeforePlayDelay) || t.resetBeforePlayDelay),
    theme: String(n.theme || t.theme).toLowerCase() === "light" ? "light" : "dark",
    editorAccountIds: bs(
      n.editorAccountIds ?? n.guiderAccounts ?? t.editorAccountIds
    ),
    bypassPin: di(
      Object.prototype.hasOwnProperty.call(n, "bypassPin") ? n.bypassPin : t.bypassPin,
      t.bypassPin
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(n, "showAccountId") ? !!n.showAccountId : !!t.showAccountId,
    hiddenUrls: vs(
      n.hiddenUrls ?? n.hiddenRoutes ?? t.hiddenUrls
    ),
    launcher: ui(n.launcher),
    ui: ue(i)
  };
}
function oe(n = {}) {
  const t = Nt(n), e = t.ui, s = t.theme === "light" ? "light" : "dark", i = document.documentElement;
  return i && (i.dataset.sgTheme = s, i.style.setProperty("--sg-tip-bg", e.tipBg), i.style.setProperty("--sg-tip-text", e.tipText), i.style.setProperty("--sg-skip-bg", e.skipBg), i.style.setProperty("--sg-skip-text", e.skipText), i.style.setProperty("--sg-spotlight", e.spotlightColor), i.style.setProperty("--sg-overlay-opacity", String(e.overlayOpacity)), i.style.setProperty("--sg-spotlight-ms", `${e.transitionMs}ms`), i.style.setProperty("--sg-font-family", rs[e.fontFamily] || rs.system), i.dataset.sgAnimations = e.animations ? "on" : "off", i.dataset.sgHighlightMotion = e.highlightMotion, i.dataset.sgSpotlightFade = e.spotlightFade ? "on" : "off"), e;
}
const Tt = 'input:not([type="password"]), textarea, select', ws = [
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
].join(", "), hi = [
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
].join(", "), pi = [
  ".p-datepicker-prev",
  ".p-datepicker-next",
  ".p-datepicker-prev-icon",
  ".p-datepicker-next-icon",
  ".p-datepicker-header",
  ".p-datepicker-title",
  ".p-datepicker-month",
  ".p-datepicker-year",
  ".p-datepicker-buttonbar"
].join(", "), os = [
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
].join(", "), wt = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect", Se = [
  ".p-dropdown-panel",
  ".p-multiselect-panel",
  ".p-autocomplete-panel",
  ".p-cascadeselect-panel"
].join(", ");
function Ss(n) {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function it(n) {
  return n instanceof Element ? n.matches(wt) ? n : n.closest(wt) : null;
}
function gi(n) {
  var s;
  const t = (s = n.labels) == null ? void 0 : s[0];
  if (!t) return "";
  const e = t.cloneNode(!0);
  return e.querySelectorAll("input, select, textarea, button").forEach((i) => i.remove()), e.textContent.trim();
}
function fi(n) {
  var i;
  const t = it(n) || n, e = ((i = t.closest) == null ? void 0 : i.call(t, '.p-float-label, .form-group, .mb-1, .mb-3, .col, [class*="form-group"]')) || t.parentElement;
  if (!(e instanceof Element)) return "";
  const s = e.querySelector(":scope > label, label");
  return s instanceof Element ? s.textContent.trim().replace(/\s+/g, " ") : "";
}
function _s(n) {
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
function ks(n) {
  return String(n || "").replace(/\s+/g, " ").replace(/\s+\d+$/, "").trim().slice(0, 80);
}
function mi(n) {
  const t = String(n || "").trim();
  if (!t || t.length < 2 || /^(div|span|button|a|input|select|svg|path|g|rect|li|ul|td|th|tr|table|canvas)$/i.test(t) || /^(click|submit|button|link|here|null|undefined)$/i.test(t)) return !0;
  const e = t.replace(/\D/g, "");
  return !!(e.length >= 8 && e.length >= t.replace(/\s/g, "").length * 0.7 || !/\s/.test(t) && t.length > 28 || /^[.#\[]/.test(t) || /[{};>]/.test(t) || (t.match(/\b20\d{2}\b/g) || []).length >= 3);
}
function At(n) {
  const t = ks(n);
  return mi(t) ? "" : t;
}
function $e(n) {
  var s, i, r, o, a, c;
  if (!(n instanceof Element)) return "";
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
  let e = n;
  for (let l = 0; l < 10 && e; l += 1) {
    const d = (s = e.getAttribute) == null ? void 0 : s.call(e, "aria-labelledby");
    if (d) {
      const g = document.getElementById(d.split(/\s+/)[0]), f = At(g == null ? void 0 : g.textContent);
      if (f) return f;
    }
    const h = (i = e.getAttribute) == null ? void 0 : i.call(e, "data-guider-label");
    if (h) {
      const g = At(h);
      if (g) return g;
    }
    let p = e.previousElementSibling;
    for (; p; ) {
      if ((r = p.matches) != null && r.call(p, t)) {
        const f = At(p.textContent);
        if (f) return f;
      }
      const g = (o = p.querySelector) == null ? void 0 : o.call(p, t);
      if (g) {
        const f = At(g.textContent);
        if (f) return f;
      }
      p = p.previousElementSibling;
    }
    const u = (c = (a = e.parentElement) == null ? void 0 : a.querySelector) == null ? void 0 : c.call(
      a,
      ":scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > .card-title, :scope > .card-header"
    );
    if (u && !u.contains(n)) {
      const g = At(u.textContent);
      if (g) return g;
    }
    e = e.parentElement;
  }
  return "";
}
function We(n) {
  return n instanceof Element ? !!n.closest([
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
function yi(n) {
  return !(n instanceof Element) || !Rt(n) ? "" : At(_s(n) || n.textContent);
}
function bi(n) {
  var o;
  const t = it(n), e = At(fi(n));
  if (e) return e;
  const s = n.matches("input, textarea, select"), i = !s && !t ? At(_s(n)) : "";
  if (i) return i;
  const r = [
    t ? "" : n.getAttribute("aria-label"),
    n.getAttribute("title"),
    gi(n),
    s ? n.getAttribute("placeholder") : "",
    n.getAttribute("placeholder"),
    n.getAttribute("name"),
    n.getAttribute("data-guider-label"),
    $e(n),
    (o = t == null ? void 0 : t.matches) != null && o.call(t, ".p-autocomplete") ? "Search" : "",
    t ? "Dropdown" : ""
  ];
  for (const a of r) {
    const c = At(a);
    if (c) return c;
  }
  return We(n) ? $e(n) || "chart" : "";
}
function _e(n) {
  const t = ks(n);
  return t ? /^[A-Z0-9\s\-_/]+$/.test(t) && t.length <= 24 ? t : t.charAt(0).toUpperCase() + t.slice(1) : "";
}
function vi({
  label: n,
  choiceField: t,
  isNativeField: e,
  action: s,
  element: i,
  optionText: r = ""
}) {
  var c, l, d, h, p;
  const o = _e(n), a = _e(r);
  if (he(i) || i && Gt(i))
    return o && !/^date|calendar$/i.test(o) ? `Pick a date for ${o}` : "Pick a date";
  if (t)
    return a && o ? `Select ${o}: ${a}` : a ? `Choose “${a}”` : o ? `Select ${o}` : "Choose a value";
  if (e) {
    const u = (((c = i == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "type")) || "").toLowerCase();
    return u === "checkbox" || u === "radio" ? o ? `Toggle ${o}` : "Toggle this option" : (l = i == null ? void 0 : i.matches) != null && l.call(i, "textarea") ? o ? `Fill in ${o}` : "Enter details" : o ? `Enter ${o}` : "Enter a value";
  }
  return s === "click" || s === "input" ? We(i) ? o && o.toLowerCase() !== "chart" ? `Interact with ${o}` : "Interact with the chart" : (d = i == null ? void 0 : i.matches) != null && d.call(i, 'a, [role="link"]') || (h = i == null ? void 0 : i.closest) != null && h.call(i, "a[href]") ? o ? `Go to ${o}` : "Follow this link" : (p = i == null ? void 0 : i.matches) != null && p.call(i, 'button, [role="button"], input[type="submit"], input[type="button"]') ? /^(save|submit|continue|next|confirm|apply|search|login|sign in)$/i.test(o) ? o : o ? `Click ${o}` : "Click this button" : o ? `Click ${o}` : "Click here" : o || "Continue";
}
function wi({
  title: n,
  label: t,
  choiceField: e,
  isNativeField: s,
  element: i,
  optionText: r = ""
}) {
  var d, h, p;
  const o = _e(t), a = _e(r), c = $e(i);
  if (he(i) || i && Gt(i))
    return "Choose a day on the calendar to continue.";
  if (e && a)
    return o ? `Pick “${a}” from ${o}.` : `Pick “${a}” from the list.`;
  if (e)
    return o ? `Open ${o} and choose a value.` : "Open the dropdown and choose a value.";
  if (s) {
    const u = (((d = i == null ? void 0 : i.getAttribute) == null ? void 0 : d.call(i, "type")) || "").toLowerCase();
    return u === "checkbox" || u === "radio" ? o ? `Check or uncheck ${o}.` : "Toggle this option." : o ? `Type the value for ${o}.` : "Type a value in this field.";
  }
  if (We(i))
    return `Use ${o && o.toLowerCase() !== "chart" ? o : c || "the chart"} to continue to the next step.`;
  if ((h = i == null ? void 0 : i.matches) != null && h.call(i, 'a, [role="link"]') || (p = i == null ? void 0 : i.closest) != null && p.call(i, "a[href]"))
    return o ? `Open ${o} to move forward.` : "Follow this link to continue.";
  const l = String(n || "").replace(/^(click|select|enter|choose|go to|interact with|toggle|pick|fill in)\s+/i, "").trim();
  return o && l && o.toLowerCase() === l.toLowerCase() ? "" : c && o && c.toLowerCase() !== o.toLowerCase() ? `In ${c}, continue with ${o}.` : "";
}
function Rt(n) {
  var t;
  return !!((t = n == null ? void 0 : n.closest) != null && t.call(n, ws));
}
function he(n) {
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
function Si(n) {
  return !(n instanceof Element) || he(n) ? !1 : !!n.closest(pi);
}
function Gt(n) {
  if (!(n instanceof Element)) return !1;
  if (n instanceof HTMLInputElement && (["date", "datetime-local", "time", "month", "week"].includes(n.type) || n.getAttribute("inputmode") === "none" || /date|time/i.test(n.name || "") || /date|time/i.test(n.id || "") || n.className.toLowerCase().includes("date")) || n.closest(".p-calendar, .p-datepicker-trigger")) return !0;
  const t = n.closest(hi);
  return t ? /date|time|calendar|picker/i.test(t.className) ? !0 : !!t.querySelector('button, [class*="calendar"], table, .flatpickr-calendar, .dp__menu') : !1;
}
function as(n) {
  var c, l, d;
  if (!(n instanceof Element)) return null;
  const t = document.querySelectorAll(
    '.p-calendar input[aria-expanded="true"], .p-calendar [aria-expanded="true"], input[aria-expanded="true"]'
  );
  for (const h of t) {
    if (!(h instanceof Element) || at(h)) continue;
    const p = h.closest(".p-calendar") || h, u = (c = p.matches) != null && c.call(p, "input") ? p : (l = p.querySelector) == null ? void 0 : l.call(p, 'input:not([type="hidden"])');
    if (u && !at(u)) return u;
  }
  const e = document.querySelector(".p-calendar.p-inputwrapper-focus, .p-calendar.p-focus, .p-calendar.p-overlay-open");
  if (e) {
    const h = e.querySelector('input:not([type="hidden"])');
    if (h && !at(h)) return h;
  }
  const s = document.activeElement;
  if (s instanceof HTMLInputElement && Gt(s) && !at(s))
    return s;
  const r = [...(document.querySelector('.p-overlaypanel, .modal.show, [role="dialog"]') || document.body).querySelectorAll('input:not([type="hidden"]):not([type="password"])')].filter((h) => Gt(h) && !at(h));
  if (!r.length) return null;
  const o = ((d = n.getBoundingClientRect) == null ? void 0 : d.call(n).top) ?? 0, a = r.map((h) => ({ node: h, top: h.getBoundingClientRect().top })).filter((h) => h.top <= o + 8).sort((h, p) => p.top - h.top)[0];
  return (a == null ? void 0 : a.node) || r[0] || null;
}
function It(n) {
  return n instanceof Element ? !!(n instanceof HTMLSelectElement || Gt(n) || it(n) || n.closest(Se) || n.matches('[role="combobox"], [aria-autocomplete], [aria-haspopup="listbox"]') || n.getAttribute("aria-expanded") != null || n.closest('[role="combobox"]')) : !1;
}
function ke(n) {
  if (!n) return null;
  const t = it(n);
  if (t) return t;
  if (n.matches(Tt) || n.matches('[role="combobox"]')) return n;
  const e = n.querySelector(`${Tt}, [role="combobox"]`);
  return it(e) || e;
}
function De(n) {
  if (!(n instanceof Element)) return null;
  const t = n.querySelector('[role="listbox"], .p-dropdown-items, .p-multiselect-items, .p-autocomplete-items'), e = (t == null ? void 0 : t.id) || n.id;
  if (e) {
    const i = Ss(e), r = te(`[aria-controls="${i}"], [aria-owns="${i}"]`), o = it(r) || ke(r);
    if (o) return it(o) || o;
  }
  const s = document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-dropdown.p-inputwrapper-focus",
    ".p-multiselect.p-overlay-open",
    ".p-multiselect.p-inputwrapper-focus",
    ".p-autocomplete.p-focus",
    `${wt} [aria-expanded="true"]`,
    `${wt}[aria-expanded="true"]`
  ].join(", "));
  return it(s);
}
function Ge(n) {
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
function bt(n) {
  var c;
  if (!(n instanceof Element)) return null;
  const t = it(n);
  if (t) return t;
  if (he(n)) {
    const l = n.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .ant-picker-dropdown, .p-datepicker-panel"), d = as(l || n);
    if (d) return d;
  }
  const e = n.closest(Se);
  if (e) {
    const l = De(e);
    if (l) return l;
  }
  const s = n.closest(".p-calendar");
  if (s) {
    const l = s.querySelector('input:not([type="hidden"])');
    if (l) return l;
  }
  if (n.matches(Tt)) return n;
  const i = n.closest(Tt);
  if (i) return i;
  const r = n.matches('[role="combobox"]') ? n : n.closest('[role="combobox"]');
  if (r) return it(r) || r;
  const o = n.closest(ws);
  if (o) {
    if (he(o)) {
      const m = as(
        o.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .p-datepicker-panel") || o
      );
      if (m) return m;
    }
    const l = De(o.closest(Se) || o.closest(os));
    if (l) return l;
    const d = document.activeElement;
    if (d instanceof Element && (d.matches(Tt) || d.matches('[role="combobox"]') || it(d)) && !at(d))
      return it(d) || d;
    const h = o.closest(os);
    if (h != null && h.id) {
      const m = Ss(h.id), v = te(`[aria-controls="${m}"], [aria-owns="${m}"]`), w = ke(v);
      if (w) return w;
    }
    const p = document.querySelector(
      `${wt} [aria-expanded="true"], ${wt}[aria-expanded="true"], [aria-expanded="true"]`
    ), u = ke(p);
    if (u && !at(u)) return u;
    const g = Ge(h) || Ge(o) || Ge(p);
    if (g) {
      const m = g.querySelector(wt);
      if (m && !at(m)) return m;
      const v = g.querySelector(`select, ${Tt}, [role="combobox"]`);
      if (v && !at(v)) return it(v) || v;
    }
    const b = [...((h == null ? void 0 : h.closest('.modal.show, .modal, [role="dialog"], .p-overlaypanel, form')) || document.body).querySelectorAll(`${wt}, select, [role="combobox"]`)].filter((m) => !at(m)).map((m) => it(m) || m);
    if (b.length) {
      const m = ((c = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : c.call(h).top) ?? o.getBoundingClientRect().top, v = b.map((w) => ({ node: w, top: w.getBoundingClientRect().top })).filter((w) => w.top <= m + 8).sort((w, C) => C.top - w.top)[0];
      if (v) return v.node;
    }
  }
  const a = n.closest(".p-calendar, .input-group, .date, .mx-datepicker, .vdatetime, .flatpickr-wrapper, .dp__main");
  if (a) {
    const l = a.querySelector(Tt);
    if (l) return l;
  }
  return n.closest(`button, a, [role="button"], input, select, textarea, [role="combobox"], ${wt}, [data-guider]`) || n;
}
function _i(n = document) {
  const t = [
    ...n.querySelectorAll(`${wt}, select, [role="combobox"], input:not([type="hidden"]):not([type="password"]), textarea`)
  ], e = /* @__PURE__ */ new Set();
  return t.map((s) => it(s) || s).filter((s) => {
    if (e.has(s) || at(s)) return !1;
    e.add(s);
    const i = getComputedStyle(s);
    if (i.display === "none" || i.visibility === "hidden") return !1;
    const r = s.getBoundingClientRect();
    return r.width >= 2 && r.height >= 2;
  });
}
function Kt() {
  const n = De(document.querySelector(Se)) || it(document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-multiselect.p-overlay-open",
    `${wt} [aria-expanded="true"]`,
    `${wt}[aria-expanded="true"]`
  ].join(", ")));
  if (n && !at(n)) return n;
  const t = document.querySelector('[aria-expanded="true"]'), e = ke(t);
  if (e && !at(e)) return e;
  const s = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show, .p-overlaypanel');
  if (!s) return null;
  const i = document.activeElement;
  return i instanceof Element && s.contains(i) && (i.matches(Tt) || i.matches('[role="combobox"]') || it(i)) && !at(i) ? it(i) || i : null;
}
class ki {
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
    return !this.active || !(t instanceof Element) || at(t) || !!t.closest(".sg-panel, .sg-overlay, .sg-launcher, .sg-recording-indicator");
  }
  capture(t, e) {
    var v, w;
    if (this.shouldIgnore(t)) return;
    const s = e === "click" && Rt(t), i = bt(t);
    if (!i || at(i)) return;
    const r = ti(i);
    if (!r) return;
    const o = i.matches(Tt), a = It(i) || s, c = o || s || a ? "input" : e, l = Date.now(), d = `${c}:${r}`, h = c === "input" && d === this.lastKey, p = d === this.lastKey && l - this.lastAt < 300;
    if (h || p) return;
    this.lastKey = d, this.lastAt = l;
    const u = bi(i), g = s ? yi(t) : "", f = vi({
      label: u,
      choiceField: a,
      isNativeField: o,
      action: c,
      element: i,
      optionText: g
    }), b = wi({
      title: f,
      label: u,
      choiceField: a,
      isNativeField: o,
      element: i,
      optionText: g
    }), m = Vs(i);
    this.onStep({
      id: ((w = (v = globalThis.crypto) == null ? void 0 : v.randomUUID) == null ? void 0 : w.call(v)) || `step-${l}-${Math.random().toString(36).slice(2, 7)}`,
      selector: r,
      ...m ? { match: m } : {},
      action: c,
      title: f,
      description: b,
      waitFor: o || s || a ? {
        type: "input",
        required: !0,
        mode: a || s ? "interaction" : "value"
      } : null
    });
  }
  onClick(t) {
    const e = t.target instanceof Element ? t.target : null;
    e && (e instanceof HTMLSelectElement && !Rt(e) || Si(e) || this.capture(t.target, "click"));
  }
  onFocus(t) {
    var s;
    const e = t.target;
    if ((s = e.matches) != null && s.call(e, Tt) && !(e instanceof HTMLSelectElement)) {
      if (Gt(e)) {
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
const Ci = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>', xi = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>', Ei = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>', Ee = [
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
].join(", "), je = [
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
].join(", "), Cs = [
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
function He(n) {
  if (!(n instanceof HTMLElement) || n.closest(".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip")) return !1;
  const t = getComputedStyle(n);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = n.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function Ce(n) {
  var i;
  if (!(n instanceof Element)) return !1;
  const t = n.getBoundingClientRect(), s = ((i = n.matches) == null ? void 0 : i.call(
    n,
    ".p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel, .p-cascadeselect-panel"
  )) ? 900 : 520;
  if (t.width > s || t.height > s || n.matches('.p-overlaypanel, .modal, .modal-dialog, .modal-content, [class*="overlay-custom"], .offcanvas') || n.matches(".modal, .modal.show, .modal-dialog, .modal-content")) return !1;
  if (n.closest(".modal.show, .modal") && !n.matches('.dropdown-menu, .datepicker-dropdown, [class*="picker"], [class*="calendar"], .p-dropdown-panel, .p-multiselect-panel, .p-autocomplete-panel')) {
    const r = getComputedStyle(n);
    if (r.position !== "absolute" && r.position !== "fixed") return !1;
  }
  return !0;
}
function Ti(n) {
  if (!(n instanceof Element)) return null;
  const t = n.closest(Cs);
  if (t && Ce(t)) return t;
  const e = n.closest('table, [role="grid"]');
  return e && e.querySelector(Ee) && Ce(e) ? e : null;
}
function Mi(n) {
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
  ].join(", "))].filter((s) => {
    var c;
    if (!He(s) || !Ce(s) || s === n || n.contains(s) || !(s.matches(Cs) || !!((c = s.querySelector) != null && c.call(s, Ee))) && !s.matches(je)) return !1;
    const r = s.getBoundingClientRect(), o = r.top >= t.top - 48 && r.top <= t.bottom + 380, a = r.left < t.right + 140 && r.right > t.left - 140;
    return o && a;
  });
}
function ls(n = null) {
  const t = /* @__PURE__ */ new Set(), e = (s) => {
    var l;
    if (!(n instanceof Element)) return !0;
    const i = n.getBoundingClientRect(), r = s.getBoundingClientRect(), o = r.top >= i.top - 64 && r.top <= i.bottom + 420, a = r.left < i.right + 220 && r.right > i.left - 220;
    if (o && a) return !0;
    const c = [s.id];
    return (l = s.querySelectorAll) == null || l.call(s, "[id]").forEach((d) => {
      d.id && c.push(d.id);
    }), c.some((d) => {
      var u, g;
      if (!d) return !1;
      const h = ((g = (u = globalThis.CSS) == null ? void 0 : u.escape) == null ? void 0 : g.call(u, d)) || d.replace(/"/g, '\\"'), p = document.querySelector(`[aria-controls="${h}"], [aria-owns="${h}"]`);
      return !!(p && (n === p || n.contains(p) || p.contains(n)));
    });
  };
  return document.querySelectorAll(je).forEach((s) => {
    !He(s) || !Ce(s) || e(s) && t.add(s);
  }), document.querySelectorAll(Ee).forEach((s) => {
    const i = Ti(s);
    i && He(i) && e(i) && t.add(i);
  }), n instanceof Element && Mi(n).forEach((s) => t.add(s)), [...t];
}
class Li {
  constructor({
    overlayOpacity: t = 0.58,
    zIndex: e = 2147483e3,
    onSkip: s = null,
    onEnd: i = null,
    skipLabel: r = "Skip Step",
    onHighlightBox: o = null,
    onTargetLost: a = null,
    ui: c = null
  } = {}) {
    this.opacity = t, this.zIndex = e, this.onSkip = s, this.onEnd = i, this.skipLabel = r, this.onHighlightBox = o, this.onTargetLost = a, this.ui = ue(c || { overlayOpacity: t }), this.root = null, this.frame = null, this.blocks = null, this.skipChip = null, this.goChip = null, this.onGo = null, this.stepTip = null, this.stepTipContent = null, this.guideCursor = null, this.cursorTimer = null, this.warningBanner = null, this.waitingBanner = null, this.controlsEnabled = !1, this.raf = null, this.target = null, this.highlightHost = null, this.blockOutside = !1, this.raisedTarget = null, this.previousTargetStyle = null, this.resizeObserver = null, this.menuObserver = null, this.menuWatchTimer = null, this.menuRefreshTimer = null, this.relayoutTimers = [], this.elevatedMenus = [], this.syncing = !1, this.targetLostNotified = !1, this.lastHighlightCenter = null, this.onViewportChange = () => this.scheduleLayout(), this.onBlockInteraction = (l) => {
      this.allowsInteractionAt(l.clientX, l.clientY) || (l.preventDefault(), l.stopPropagation());
    }, this.onSkipClick = (l) => {
      var d;
      l.preventDefault(), l.stopPropagation(), (d = this.onSkip) == null || d.call(this);
    }, this.onEndClick = (l) => {
      var d;
      l.preventDefault(), l.stopPropagation(), (d = this.onEnd || this.onSkip) == null || d();
    }, this.onGoClick = (l) => {
      var d;
      l.preventDefault(), l.stopPropagation(), (d = this.onGo) == null || d.call(this);
    };
  }
  applyUiSettings(t) {
    this.ui = ue(t || {}), this.opacity = this.ui.overlayOpacity, this.root && (this.root.style.setProperty("--sg-overlay-opacity", String(this.opacity)), this.syncSpotlightMotionClass());
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
    return new Promise((i) => {
      var a;
      if (!this.motionsEnabled() || !((a = this.ui) != null && a.animatedCursor) || !t || !e) {
        i();
        return;
      }
      this.mountGuideCursor();
      const r = Math.max(0, Number(s) || this.ui.transitionMs || 220), o = this.guideCursor;
      o.hidden = !1, o.style.transition = "none", o.style.left = `${Math.round(t.x)}px`, o.style.top = `${Math.round(t.y)}px`, o.offsetWidth, o.style.transition = `left ${r}ms ease, top ${r}ms ease, opacity ${Math.max(120, r / 2)}ms ease`, o.style.left = `${Math.round(e.x)}px`, o.style.top = `${Math.round(e.y)}px`, clearTimeout(this.cursorTimer), this.cursorTimer = setTimeout(() => {
        this.hideGuideCursor(), i();
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
      const i = Math.max(0, Math.ceil(Number(e))), r = this.waitingBanner.dataset.seconds;
      this.waitingBanner.dataset.seconds = String(i), this.waitingBanner.innerHTML = `
        <span class="sg-waiting-banner__label">Waiting</span>
        <span class="sg-waiting-banner__count">${i}</span>
        <span class="sg-waiting-banner__unit">s</span>
      `;
      const o = this.waitingBanner.querySelector(".sg-waiting-banner__count");
      o && r !== String(i) && (o.classList.remove("sg-waiting-banner__count--tick"), o.offsetWidth, o.classList.add("sg-waiting-banner__count--tick"));
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
      const s = Number.parseFloat(this.frame.style.getPropertyValue("--sg-x")) || 0, i = Number.parseFloat(this.frame.style.getPropertyValue("--sg-y")) || 0, r = Number.parseFloat(this.frame.style.getPropertyValue("--sg-w")) || 0, o = Number.parseFloat(this.frame.style.getPropertyValue("--sg-h")) || 0;
      r > 0 && o > 0 && this.positionSkipChip(s, i, r, o);
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
    totalSteps: i = null
  } = {}) {
    this.mountStepTip();
    const r = String(t || "").trim(), o = String(e || "").trim(), a = Number.isFinite(Number(s)) ? Math.max(1, Number(s)) : null, c = Number.isFinite(Number(i)) ? Math.max(1, Number(i)) : null;
    if (this.stepTipContent = {
      title: r,
      description: o,
      stepNumber: a,
      totalSteps: c
    }, !r) {
      this.hideStepTip();
      return;
    }
    this.stepTip.replaceChildren(), this.skipChip && (this.skipChip.hidden = !0);
    const l = document.createElement("span");
    l.className = "sg-step-tip__arrow", l.setAttribute("aria-hidden", "true");
    const d = document.createElement("div");
    d.className = "sg-step-tip__header";
    const h = document.createElement("div");
    h.className = "sg-step-tip__badge", h.textContent = String(a || 1), h.setAttribute(
      "aria-label",
      c ? `Step ${a || 1} of ${c}` : `Step ${a || 1}`
    );
    const p = document.createElement("span");
    p.className = "sg-step-tip__counter", p.textContent = c ? `Step ${a || 1} of ${c}` : `Step ${a || 1}`;
    const u = document.createElement("button");
    u.type = "button", u.className = "sg-step-tip__close", u.setAttribute("aria-label", "End tutorial"), u.innerHTML = Ci, u.addEventListener("click", this.onEndClick), d.append(h, p, u);
    const g = document.createElement("div");
    if (g.className = "sg-step-tip__title", g.textContent = r, this.stepTip.append(l, d, g), o) {
      const x = document.createElement("div");
      x.className = "sg-step-tip__description", x.textContent = o, this.stepTip.append(x);
    }
    const f = document.createElement("div");
    f.className = "sg-step-tip__divider";
    const b = document.createElement("div");
    b.className = "sg-step-tip__actions";
    const m = document.createElement("button");
    m.type = "button", m.className = "sg-step-tip__end", m.innerHTML = `${Ei}<span>End Tutorial</span>`, m.addEventListener("click", this.onEndClick);
    const v = document.createElement("button");
    v.type = "button", v.className = "sg-step-tip__next";
    const C = (c ? Number(a) >= Number(c) : !1) ? "Finish" : this.skipLabel || "Skip Step";
    v.innerHTML = `<span>${C}</span>${xi}`, v.addEventListener("click", this.onSkipClick), b.append(m, v), this.stepTip.append(f, b), this.stepTip.hidden = !1;
  }
  hideStepTip() {
    this.stepTip && (this.stepTip.hidden = !0, this.stepTip.removeAttribute("data-arrow"), this.stepTip.style.removeProperty("--sg-arrow-offset"), this.stepTip.style.removeProperty("--sg-arrow-fill")), this.stepTipContent = null, this.skipChip && (this.skipChip.hidden = !this.controlsEnabled);
  }
  resolveStepTipFill() {
    const t = this.stepTip;
    if (!t) return "#0f1b33";
    const e = getComputedStyle(t).getPropertyValue("--sg-tip-bg").trim();
    if (e) return e;
    const s = getComputedStyle(document.documentElement).getPropertyValue("--sg-tip-bg").trim();
    if (s) return s;
    const i = getComputedStyle(t).backgroundColor;
    return i && i !== "rgba(0, 0, 0, 0)" && i !== "transparent" ? i : "#0f1b33";
  }
  /**
   * Point the tip caret toward the highlight box based on tip placement.
   */
  updateStepTipArrow(t, e, s, i) {
    if (!this.stepTip || this.stepTip.hidden) return;
    const r = this.stepTip, o = r.getBoundingClientRect(), a = o.left, c = o.top, l = o.width || r.offsetWidth || 220, d = o.height || r.offsetHeight || 48, h = a + l / 2, p = c + d / 2, u = t + s / 2, g = e + i / 2, f = a + l, b = c + d, m = t + s, v = e + i, w = {
      left: a - m,
      right: t - f,
      top: c - v,
      bottom: e - b
    };
    let C = "left", x = -1 / 0;
    for (const [k, L] of Object.entries(w))
      L > x && (x = L, C = k);
    if (x < 4) {
      const k = u - h, L = g - p;
      C = Math.abs(k) >= Math.abs(L) ? k < 0 ? "left" : "right" : L < 0 ? "top" : "bottom";
    }
    const _ = 18;
    let E = 0;
    C === "left" || C === "right" ? E = Math.min(Math.max(g - c, _), d - _) : E = Math.min(Math.max(u - a, _), l - _), r.dataset.arrow = C, r.style.setProperty("--sg-arrow-offset", `${Math.round(E)}px`), r.style.setProperty("--sg-arrow-fill", this.resolveStepTipFill());
  }
  positionSkipChip(t, e, s, i) {
    if (!this.controlsEnabled) return;
    const r = 10, o = 8, a = window.innerWidth, c = window.innerHeight, l = this.stepTip && !this.stepTip.hidden, d = l ? this.stepTip.offsetWidth || 220 : 0, h = l ? this.stepTip.offsetHeight || 48 : 0, p = this.goChip && !this.goChip.hidden, u = p ? this.goChip.offsetWidth || 72 : 0, g = p ? this.goChip.offsetHeight || 36 : 0, f = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, b = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, m = 8;
    let v = 0, w = 0;
    p && (v = t + s + r, w = e + Math.max(0, Math.round((i - g) / 2)), v + u > a - o && (v = Math.max(o, t - u - r)), w < o && (w = o), w + g > c - o && (w = Math.max(o, c - g - o)), this.goChip.style.left = `${v}px`, this.goChip.style.top = `${w}px`);
    const C = Math.max(d, f), x = (l ? h : 0) + (l && f ? m : 0) + (f ? b : 0), _ = t + s / 2, E = e + i / 2, k = (T, O) => ({
      left: Math.min(Math.max(o, T), Math.max(o, a - C - o)),
      top: Math.min(Math.max(o, O), Math.max(o, c - x - o))
    }), L = [
      k(_ - C / 2, e + i + r),
      // below, centered
      k(_ - C / 2, e - x - r),
      // above, centered
      k(t - C - r, E - x / 2),
      // left, centered
      k(t + s + r, E - x / 2),
      // right, centered
      k(t, e + i + r),
      // below-start
      k(t + s - C, e + i + r)
      // below-end
    ];
    p && L.unshift(
      k(v + u + r, Math.min(w, e)),
      k(v - C - r, Math.min(w, e))
    );
    let I = L[0], G = 1 / 0;
    for (const T of L) {
      const O = T.left + C / 2, $ = T.top + x / 2, K = O - _, q = $ - E;
      let R = K * K + q * q;
      const D = Math.max(0, Math.min(T.left + C, t + s) - Math.max(T.left, t)), et = Math.max(0, Math.min(T.top + x, e + i) - Math.max(T.top, e));
      D > 0 && et > 0 && (R += 1e6 + D * et), R < G && (G = R, I = T);
    }
    let J = I.left, j = I.top;
    l && (this.stepTip.style.left = `${J}px`, this.stepTip.style.top = `${j}px`, this.updateStepTipArrow(t, e, s, i), j += h + m), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${J}px`, this.skipChip.style.top = `${j}px`);
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
    const e = this.stepTip && !this.stepTip.hidden, s = e ? this.stepTip.offsetWidth || 220 : 0, i = e ? this.stepTip.offsetHeight || 48 : 0, r = this.goChip && !this.goChip.hidden, o = r ? this.goChip.offsetWidth || 72 : 0, a = r ? this.goChip.offsetHeight || 36 : 0, c = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, l = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, d = 8, h = this.warningBanner && !this.warningBanner.hidden, p = this.waitingBanner && !this.waitingBanner.hidden, u = h ? this.warningBanner.offsetHeight || 40 : 0, g = p ? this.waitingBanner.offsetHeight || 40 : 0, f = 24 + u + g + (h || p ? 12 : 0), b = (e ? i + d : 0) + (c ? l : 0), m = Math.max(8, Math.round((window.innerWidth - Math.max(s, c || s)) / 2));
    let v = Math.max(8, window.innerHeight - f - b - (r ? a + d : 0));
    e && (this.stepTip.style.left = `${m}px`, this.stepTip.style.top = `${v}px`, this.stepTip.removeAttribute("data-arrow"), v += i + d), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${m}px`, this.skipChip.style.top = `${v}px`, v += l + d), r && (this.goChip.style.left = `${Math.max(8, Math.round((window.innerWidth - o) / 2))}px`, this.goChip.style.top = `${v}px`);
  }
  createBlock(t) {
    const e = document.createElement("div");
    return e.className = `sg-overlay__block sg-overlay__block--${t}`, ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((s) => e.addEventListener(s, this.onBlockInteraction, !0)), e;
  }
  highlight(t, e = !0, { blockOutside: s = !1, tip: i = null } = {}) {
    var r, o;
    t instanceof Element && (this.hideWarning(), this.hideWaiting(), this.hideGuideCursor(), this.targetLostNotified = !1, this.mount(), this.controlsEnabled && (this.mountSkipChip(), this.mountStepTip()), this.root && (this.root.style.display = "", this.root.style.setProperty("--sg-overlay-opacity", String(((r = this.ui) == null ? void 0 : r.overlayOpacity) ?? this.opacity))), this.clearRelayoutTimers(), this.unobserveTarget(), this.target = t, this.highlightHost = de(t) || t, this.blockOutside = !!s, this.root.classList.toggle("sg-overlay--blocking", this.blockOutside), this.raiseTarget(this.blockOutside ? this.highlightHost : null), i && i.title ? this.setStepTip(i) : this.hideStepTip(), e && xt(this.highlightHost) && si(this.highlightHost, { behavior: "smooth", block: "center" }), this.observeTarget(this.highlightHost), this.watchMenus(), this.root.classList.add("sg-overlay--visible"), this.syncSpotlightMotionClass(), this.frame && this.motionsEnabled() && ((o = this.ui) != null && o.spotlightFade) && (this.frame.classList.remove("sg-spotlight--fade-in"), this.frame.offsetWidth, this.frame.classList.add("sg-spotlight--fade-in")), this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter(), [80, 180, 320, 520, 800].forEach((a) => {
      this.relayoutTimers.push(setTimeout(() => {
        this.target && (this.highlightHost = de(this.target) || this.target, this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter());
      }, a));
    }));
  }
  /** Refresh cutout/menus without re-raising the target (avoids closing open dropdowns). */
  refreshMenus() {
    !this.root || !this.target || this.syncing || (this.elevateOpenMenus(), this.scheduleLayout());
  }
  getVisibleMenus() {
    const t = this.highlightHost || this.target;
    return ls(t);
  }
  allowsInteractionAt(t, e) {
    const s = this.highlightHost || this.target, i = ls(s);
    return i.length ? i.some((r) => {
      const o = r.getBoundingClientRect();
      return t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
    }) : !1;
  }
  elevateOpenMenus() {
    if (!this.syncing) {
      this.syncing = !0;
      try {
        const t = this.getVisibleMenus(), e = this.elevatedMenus.map((i) => i.menu);
        if (t.length === e.length && t.every((i, r) => i === e[r])) {
          t.forEach((i) => {
            i.style.pointerEvents !== "auto" && (i.style.pointerEvents = "auto"), i.style.zIndex !== String(this.zIndex + 20) && (i.style.zIndex = String(this.zIndex + 20));
          });
          return;
        }
        this.restoreElevatedMenus(), t.forEach((i) => {
          this.elevatedMenus.push({
            menu: i,
            zIndex: i.style.zIndex,
            pointerEvents: i.style.pointerEvents,
            position: i.style.position
          }), getComputedStyle(i).position === "static" && (i.style.position = "relative"), i.style.zIndex = String(this.zIndex + 20), i.style.pointerEvents = "auto";
        });
      } finally {
        this.syncing = !1;
      }
    }
  }
  restoreElevatedMenus() {
    this.elevatedMenus.forEach(({ menu: t, zIndex: e, pointerEvents: s, position: i }) => {
      t.style.zIndex = e || "", t.style.pointerEvents = s || "", i !== void 0 && (t.style.position = i || "");
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
        const i = s.target instanceof Element ? s.target : (r = s.target) == null ? void 0 : r.parentElement;
        return !i || (o = i.closest) != null && o.call(i, ".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip") ? !1 : s.type === "childList" ? !0 : s.attributeName === "class" || s.attributeName === "aria-expanded" || s.attributeName === "hidden";
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
    var p, u;
    if (!this.root || this.syncing || !this.target) return;
    const t = de(this.target) || this.highlightHost || this.target;
    if (!(t instanceof Element) || !t.isConnected) {
      this.hide(), this.targetLostNotified || (this.targetLostNotified = !0, (p = this.onTargetLost) == null || p.call(this));
      return;
    }
    this.highlightHost = t;
    const e = t.getBoundingClientRect();
    if (e.width < 1 || e.height < 1)
      return;
    const s = 8;
    let i = e.left - s, r = e.top - s, o = e.right + s, a = e.bottom + s;
    this.getVisibleMenus().forEach((g) => {
      const f = g.getBoundingClientRect();
      i = Math.min(i, f.left - s), r = Math.min(r, f.top - s), o = Math.max(o, f.right + s), a = Math.max(a, f.bottom + s);
    });
    const c = Math.max(0, i), l = Math.max(0, r), d = Math.max(8, o - i), h = Math.max(8, a - r);
    this.applyCutout(c, l, d, h), this.positionSkipChip(c, l, d, h), this.root.classList.add("sg-overlay--visible"), (u = this.onHighlightBox) == null || u.call(this, {
      left: c,
      top: l,
      right: c + d,
      bottom: l + h,
      width: d,
      height: h
    });
  }
  layoutFullDim() {
    const t = window.innerWidth, e = window.innerHeight;
    this.frame.style.setProperty("--sg-x", `${Math.max(16, t / 2 - 40)}px`), this.frame.style.setProperty("--sg-y", `${Math.max(16, e / 2 - 24)}px`), this.frame.style.setProperty("--sg-w", "80px"), this.frame.style.setProperty("--sg-h", "48px"), this.blocks.top.style.cssText = `top:0;left:0;width:${t}px;height:${e}px;`, this.blocks.left.style.cssText = "top:0;left:0;width:0;height:0;", this.blocks.right.style.cssText = "top:0;left:0;width:0;height:0;", this.blocks.bottom.style.cssText = "top:0;left:0;width:0;height:0;", this.root.classList.add("sg-overlay--visible");
  }
  applyCutout(t, e, s, i) {
    const r = window.innerWidth, o = window.innerHeight;
    this.frame.style.setProperty("--sg-x", `${t}px`), this.frame.style.setProperty("--sg-y", `${e}px`), this.frame.style.setProperty("--sg-w", `${s}px`), this.frame.style.setProperty("--sg-h", `${i}px`), this.blocks.top.style.cssText = `top:0;left:0;width:${r}px;height:${e}px;`, this.blocks.left.style.cssText = `top:${e}px;left:0;width:${t}px;height:${i}px;`, this.blocks.right.style.cssText = `top:${e}px;left:${t + s}px;width:${Math.max(0, r - t - s)}px;height:${i}px;`, this.blocks.bottom.style.cssText = `top:${e + i}px;left:0;width:${r}px;height:${Math.max(0, o - e - i)}px;`;
  }
  raiseTarget(t) {
    if (this.raisedTarget && this.raisedTarget !== t && this.restoreTarget(), !t || this.raisedTarget === t || !xe(t)) return;
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
      ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((s) => e.removeEventListener(s, this.onBlockInteraction, !0));
    }), this.skipChip && (this.skipChip.removeEventListener("click", this.onSkipClick), this.skipChip.remove(), this.skipChip = null), this.goChip && (this.goChip.removeEventListener("click", this.onGoClick), this.goChip.remove(), this.goChip = null, this.onGo = null), this.stepTip && (this.stepTip.remove(), this.stepTip = null, this.stepTipContent = null), this.warningBanner && (this.warningBanner.remove(), this.warningBanner = null), this.waitingBanner && (this.waitingBanner.remove(), this.waitingBanner = null), this.guideCursor && (clearTimeout(this.cursorTimer), this.guideCursor.remove(), this.guideCursor = null), (t = this.root) == null || t.remove(), this.root = null, this.frame = null, this.blocks = null, this.target = null, this.highlightHost = null;
  }
}
function Ni(n, t) {
  var o, a, c, l;
  const e = n instanceof Element ? n : t;
  if (!(e instanceof Element)) return !1;
  const s = (o = e.closest) == null ? void 0 : o.call(e, 'a[href], [href], [data-inertia], .nav-link, .custom-nav-class, [role="link"]');
  if (!s || s.hasAttribute("download")) return !1;
  const i = (((a = s.getAttribute) == null ? void 0 : a.call(s, "target")) || "").toLowerCase();
  if (i && i !== "_self") return !1;
  const r = (((c = s.getAttribute) == null ? void 0 : c.call(s, "href")) || "").trim();
  return r && r !== "#" && !r.toLowerCase().startsWith("javascript:") ? !0 : ((l = s.matches) == null ? void 0 : l.call(s, 'a, .nav-link, .custom-nav-class, [data-inertia], [role="link"]')) || !1;
}
function Ai(n) {
  const t = String((n == null ? void 0 : n.title) || "").trim(), e = String((n == null ? void 0 : n.description) || "").trim();
  if (!e || e === t) return "";
  const s = e.replace(/^(click|select|enter|choose)\s+/i, "").trim(), i = t.replace(/^(click|select|enter|choose)\s+/i, "").trim();
  return s && i && s.toLowerCase() === i.toLowerCase() || /^(click|select|enter|choose)\s+.+/i.test(e) && e.length <= t.length + 12 ? "" : e;
}
class Bi {
  constructor({
    overlay: t,
    timeout: e = 5e3,
    autoAdvanceOnInput: s = !0,
    autoAdvanceDelay: i = 600,
    autoSkipMissing: r = !0,
    autoSkipMissingDelay: o = 400,
    stableWaitTimeout: a = 1500,
    targetWaitTimeout: c = 2e4,
    targetRetryInterval: l = 250,
    targetReadyHits: d = 2,
    stepDelay: h = 0,
    autoScroll: p = !0,
    ui: u = null,
    onChange: g,
    onFail: f,
    onComplete: b,
    onClickAdvance: m = null
  }) {
    this.overlay = t, this.timeout = e, this.autoAdvanceOnInput = s, this.autoAdvanceDelay = i, this.autoSkipMissing = r, this.autoSkipMissingDelay = o, this.stableWaitTimeout = a, this.targetWaitTimeout = Math.max(1e3, Number(c) || 2e4), this.targetRetryInterval = Math.max(50, Number(l) || 250), this.targetReadyHits = Math.max(1, Number(d) || 2), this.stepDelay = h, this.autoScroll = p !== !1, this.ui = ue(u || {}), this.onChange = g, this.onFail = f, this.onComplete = b, this.onClickAdvance = m, this.steps = [], this.index = 0, this.active = !1, this.token = 0, this.waitCleanup = null, this.autoSkipTimer = null, this.navWaitTimer = null, this.readyWaitInterval = null, this.readyWaitResolve = null, this.targetLostTimer = null, this.rebindDebounceTimer = null, this.waitingForNavigation = !1, this.lastChoiceField = null, this.lastCompletedField = null;
  }
  setUiOptions(t) {
    this.ui = ue(t || {});
  }
  setOptions(t = {}) {
    t.autoAdvanceDelay != null && (this.autoAdvanceDelay = Number(t.autoAdvanceDelay) || 0), t.stepDelay != null && (this.stepDelay = Number(t.stepDelay) || 0), t.autoScroll != null && (this.autoScroll = !!t.autoScroll), t.timeout != null && (this.timeout = Number(t.timeout) || this.timeout), t.stableWaitTimeout != null && (this.stableWaitTimeout = Number(t.stableWaitTimeout) || this.stableWaitTimeout), t.targetWaitTimeout != null && (this.targetWaitTimeout = Math.max(1e3, Number(t.targetWaitTimeout) || this.targetWaitTimeout)), t.targetRetryInterval != null && (this.targetRetryInterval = Math.max(50, Number(t.targetRetryInterval) || this.targetRetryInterval)), t.targetReadyHits != null && (this.targetReadyHits = Math.max(1, Number(t.targetReadyHits) || this.targetReadyHits));
  }
  resolveStepField(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ss(t.match, { selector: t.selector || "" }) || te(t.selector);
    return e ? bt(e) || e : null;
  }
  findStepTarget(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ss(t.match, { selector: t.selector || "" });
    if (e && xt(e)) return e;
    const s = te(t.selector);
    return s && xt(s) ? s : null;
  }
  clearReadyWait(t = null) {
    var s, i;
    this.readyWaitInterval != null && (clearInterval(this.readyWaitInterval), this.readyWaitInterval = null);
    const e = this.readyWaitResolve;
    this.readyWaitResolve = null, e && e(t), (i = (s = this.overlay).hideWaiting) == null || i.call(s);
  }
  /**
   * Poll until the step target exists in the DOM (SPA/page load safe).
   * Owns a single interval — always cleared via clearReadyWait / clearWait / stop.
   */
  waitUntilTargetReady(t, e) {
    this.clearReadyWait(null);
    const s = this.findStepTarget(t);
    if (s) return Promise.resolve(s);
    const i = Date.now(), r = Math.max(this.timeout, this.targetWaitTimeout);
    let o = 0, a = 0, c = null, l = null;
    return new Promise((d) => {
      this.readyWaitResolve = d;
      const h = (u) => {
        this.readyWaitResolve === d && this.clearReadyWait(u);
      }, p = () => {
        var b, m, v, w;
        if (!this.active || e !== this.token) {
          h(null);
          return;
        }
        o += 1;
        const u = this.findStepTarget(t);
        if (u) {
          if (a = u === c ? a + 1 : 1, c = u, a >= this.targetReadyHits) {
            h(u);
            return;
          }
        } else
          a = 0, c = null;
        const g = Date.now() - i;
        if (g >= r) {
          h(u || null);
          return;
        }
        const f = Math.max(0, Math.ceil((r - g) / 1e3));
        if (f !== l) {
          l = f;
          const C = `Waiting… ${f}s`;
          this.onChange(t, this.index, {
            waiting: !0,
            failed: !1,
            waitKind: "target",
            retryCount: o,
            message: C
          }), (m = (b = this.overlay).showWaiting) == null || m.call(b, C, { seconds: f }), (w = (v = this.overlay).positionSkipChipFallback) == null || w.call(v);
        }
      };
      p(), this.readyWaitResolve === d && (this.readyWaitInterval = setInterval(p, this.targetRetryInterval));
    });
  }
  dedupeSteps(t) {
    const e = [];
    let s = null;
    for (const i of t) {
      if (i.action === "input" && i.selector) {
        const r = this.resolveStepField(i);
        if (r && r === s) continue;
        s = r || null;
      } else
        s = null;
      e.push(i);
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
      return t.action === "click" || t.action === "input" ? Kt() : null;
    if (Rt(e))
      return bt(e) || e;
    if (t.action === "click") {
      const s = bt(e);
      if (s && It(s)) return s;
    }
    return e;
  }
  async showCurrent() {
    var p, u, g, f, b, m, v, w, C, x, _, E, k, L, I, G, J, j, T, O, $, K, q, R, D, et, tt, ct;
    if (!this.active) return;
    this.clearWait();
    const t = ++this.token, e = this.steps[this.index], s = ((u = (p = this.overlay) == null ? void 0 : p.getHighlightCenter) == null ? void 0 : u.call(p)) || ((g = this.overlay) == null ? void 0 : g.lastHighlightCenter) || null;
    this.onChange(e, this.index, { waiting: !1, failed: !1 }), this.overlay.hide();
    const i = Number((f = e == null ? void 0 : e.settings) == null ? void 0 : f.delay) || 0;
    if (i > 0 && (await new Promise((H) => setTimeout(H, i)), !this.active || t !== this.token))
      return;
    if (e.action === "manual" || !e.selector && !e.match) {
      this.overlay.hide();
      return;
    }
    const r = await this.waitUntilTargetReady(e, t);
    if (!this.active || t !== this.token) return;
    let o = this.normalizeStepTarget(e, r);
    if (o) {
      const H = !!this.lastCompletedField, U = H ? Math.min(220, this.stableWaitTimeout) : this.stableWaitTimeout;
      o = await ni(o, {
        timeout: U,
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
    const a = !!(o && (It(o) || Gt(o)) || ((b = e.waitFor) == null ? void 0 : b.mode) === "interaction" || Rt(r));
    if (a && (!o || !xe(o))) {
      const H = (F) => {
        var Z, X, Et, Mt;
        if (!(F instanceof Element)) return !1;
        if ((Z = F.matches) != null && Z.call(F, 'input[type="search"]')) return !0;
        const z = [
          (X = F.getAttribute) == null ? void 0 : X.call(F, "placeholder"),
          (Et = F.getAttribute) == null ? void 0 : Et.call(F, "name"),
          (Mt = F.getAttribute) == null ? void 0 : Mt.call(F, "aria-label"),
          F.id,
          F.className
        ].filter(Boolean).join(" ").toLowerCase();
        return /\bsearch\b/.test(z);
      }, U = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show');
      if (U) {
        const F = _i(U).filter((Z) => (Z.matches('select, [role="combobox"]') || It(Z)) && !H(Z));
        let z = Kt();
        if (z && H(z) && (z = null), !z && this.lastChoiceField && U.contains(this.lastChoiceField)) {
          const Z = ((v = (m = this.lastChoiceField).getBoundingClientRect) == null ? void 0 : v.call(m).top) ?? -1 / 0;
          z = F.find((X) => X.getBoundingClientRect().top > Z + 4) || null;
        }
        z || (z = F[0] || null), z && (o = z);
      }
    }
    const c = de(o) || o;
    if (!o && !c) {
      this.overlay.hide();
      const H = this.missingTargetMessage(e);
      (C = (w = this.overlay).showWarning) == null || C.call(w, H), this.onFail(e, this.index), this.onChange(e, this.index, {
        waiting: !1,
        failed: !0,
        autoSkipping: !1,
        failKind: "missing-target",
        message: H
      }), (_ = (x = this.overlay).positionSkipChipFallback) == null || _.call(x);
      return;
    }
    (k = (E = this.overlay).hideWarning) == null || k.call(E), (I = (L = this.overlay).hideWaiting) == null || I.call(L);
    const l = o || c;
    if (s && ((G = this.ui) != null && G.animatedCursor) && ((J = this.ui) != null && J.animations)) {
      const H = (j = l.getBoundingClientRect) == null ? void 0 : j.call(l);
      if (H && H.width >= 1 && H.height >= 1) {
        const U = {
          x: H.left + H.width / 2,
          y: H.top + H.height / 2
        };
        if (await ((O = (T = this.overlay).animateCursorTo) == null ? void 0 : O.call(T, s, U, this.ui.transitionMs)), !this.active || t !== this.token) return;
      }
    }
    const d = e.action === "input" || (($ = e.waitFor) == null ? void 0 : $.type) === "input" || a || It(l), h = ((K = e == null ? void 0 : e.settings) == null ? void 0 : K.autoScroll) !== !1;
    if (this.overlay.highlight(c || l, h, {
      // Keep spotlight cutout for selects so the active field stays bright.
      blockOutside: !0,
      tip: {
        title: e.title || "",
        description: Ai(e),
        stepNumber: this.index + 1,
        totalSteps: this.steps.length
      }
    }), d) {
      let H = (q = l.matches) != null && q.call(l, "input, textarea, select, .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? l : ((R = l.querySelector) == null ? void 0 : R.call(l, "input, textarea, select, .p-dropdown, .p-multiselect")) || l;
      const U = (D = H.closest) == null ? void 0 : D.call(H, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      U && (H = U);
      const F = Number((et = e == null ? void 0 : e.settings) == null ? void 0 : et.autoAdvanceDelay), z = this.autoAdvanceDelay;
      Number.isFinite(F) && (this.autoAdvanceDelay = F);
      const Z = a || It(H) || !!U || ((tt = e.waitFor) == null ? void 0 : tt.mode) === "interaction";
      this.watchInput(H, {
        ...e,
        waitFor: {
          type: "input",
          required: !0,
          mode: Z ? "interaction" : ((ct = e.waitFor) == null ? void 0 : ct.mode) || "value"
        }
      }, !0), this.autoAdvanceDelay = z;
      return;
    }
    e.action === "click" && this.watchClick(l, e);
  }
  watchClick(t, e) {
    const s = this.index;
    this.onChange(e, s, { waiting: !0, failed: !1, waitKind: "click" });
    const i = async (r) => {
      var l, d, h;
      const o = r.target instanceof Element ? r.target : null;
      if (!o || !(o === t || t.contains(o)) || !this.active || this.index !== s) return;
      this.overlay.hide(), this.clearWait();
      const a = this.resolveNextIndex(s), c = Ni(o, t);
      if ((l = this.onClickAdvance) == null || l.call(this, e, s, a, { mayNavigate: c }), await this.applyHideDelay(e), !!this.active) {
        if (a >= this.steps.length) {
          this.complete();
          return;
        }
        if (this.index = a, c) {
          this.waitingForNavigation = !0, this.onChange(this.steps[this.index], this.index, {
            waiting: !0,
            failed: !1,
            waitKind: "navigate",
            message: "Waiting…"
          }), (h = (d = this.overlay).showWaiting) == null || h.call(d, "Waiting…"), clearTimeout(this.navWaitTimer), this.navWaitTimer = setTimeout(() => {
            !this.active || !this.waitingForNavigation || (this.waitingForNavigation = !1, this.scheduleRebindCurrent({ force: !0, delay: 0 }));
          }, 1500);
          return;
        }
        this.showCurrent();
      }
    };
    t.addEventListener("click", i, !0), this.waitCleanup = () => {
      t.removeEventListener("click", i, !0);
    };
  }
  /** True when the current step spotlight is already live on a matching DOM node. */
  isCurrentStepBound() {
    var i, r, o, a;
    if (!this.active || this.readyWaitInterval != null || this.readyWaitResolve || this.waitingForNavigation) return !1;
    const t = this.steps[this.index];
    if (!t) return !1;
    const e = ((i = this.overlay) == null ? void 0 : i.target) || ((r = this.overlay) == null ? void 0 : r.highlightHost);
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
    let i = t + 1;
    for (; i < this.steps.length; ) {
      const r = this.steps[i];
      if ((e == null ? void 0 : e.action) !== "input" || (r == null ? void 0 : r.action) !== "input") break;
      if (r.selector === e.selector) {
        i += 1;
        continue;
      }
      if (s) {
        const o = this.resolveStepField(r);
        if (o && o === s) {
          i += 1;
          continue;
        }
      }
      break;
    }
    return i;
  }
  watchInput(t, e, s = !0) {
    var Ot, pe, dt, ft, $t, Dt, Vt, Ht, Ft, Ut, St, Bt;
    const i = this.index, r = (Ot = t == null ? void 0 : t.closest) == null ? void 0 : Ot.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
    r && (t = r);
    const o = t instanceof HTMLSelectElement, a = Gt(t), c = !!((pe = t == null ? void 0 : t.matches) != null && pe.call(t, ".p-autocomplete") || (dt = t == null ? void 0 : t.closest) != null && dt.call(t, ".p-autocomplete")), l = !!((ft = t == null ? void 0 : t.matches) != null && ft.call(t, ".p-multiselect") || ($t = t == null ? void 0 : t.closest) != null && $t.call(t, ".p-multiselect")), d = !!((Dt = t == null ? void 0 : t.matches) != null && Dt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") || (Vt = t == null ? void 0 : t.closest) != null && Vt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")), h = o || a || ((Ht = e.waitFor) == null ? void 0 : Ht.mode) === "interaction" || It(t) || d, p = t instanceof HTMLInputElement && ["date", "datetime-local", "time", "month", "week", "color", "range"].includes(t.type);
    let u = !1, g = !1, f = !1, b = null, m = null, v = null, w = null;
    const C = o || p || h || d || c ? Math.min(this.autoAdvanceDelay || 0, 50) : this.autoAdvanceDelay, x = ((Ft = t.closest) == null ? void 0 : Ft.call(t, '.modal.show, .modal, [role="dialog"], .p-overlaypanel')) || document.querySelector('.modal.show, [role="dialog"], .p-overlaypanel') || document, _ = je, E = [
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
    ].join(", "), k = [
      ".p-autocomplete-panel",
      ".p-dropdown-panel",
      ".p-multiselect-panel",
      ".p-cascadeselect-panel"
    ].join(", "), L = [
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
    ].join(", "), I = (y) => !!(y instanceof Element && (y.matches(Ee) || Rt(y))), G = () => {
      var nt, V, rt;
      if (!l || !(t instanceof Element)) return !1;
      if (t.classList.contains("p-overlay-open") || t.classList.contains("p-inputwrapper-focus") && t.querySelector('[aria-expanded="true"]') || t.getAttribute("aria-expanded") === "true" || (nt = t.querySelector) != null && nt.call(t, '[aria-expanded="true"]')) return !0;
      const y = document.querySelector(".p-multiselect-panel");
      if (!(y instanceof Element)) return !1;
      const S = (V = globalThis.getComputedStyle) == null ? void 0 : V.call(globalThis, y);
      if (S && (S.display === "none" || S.visibility === "hidden")) return !1;
      const A = bt(y) || Kt();
      return !!(A && (A === t || t.contains(A) || (rt = A.contains) != null && rt.call(A, t)));
    }, J = () => l && G(), j = () => {
      var A, nt;
      const y = (A = t.matches) != null && A.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? t : (nt = t.closest) == null ? void 0 : nt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (!y) return "";
      const S = y.querySelector(".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      return !S || S.classList.contains("p-placeholder") || S.classList.contains("p-dropdown-label-empty") ? "" : S instanceof HTMLInputElement ? String(S.value || "").trim() : String(S.textContent || "").trim();
    }, T = () => {
      var S;
      const y = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement ? t : ((S = t.querySelector) == null ? void 0 : S.call(t, 'input:not([type="hidden"]), textarea, select')) || t;
      return y instanceof HTMLInputElement && ["checkbox", "radio"].includes(y.type) ? String(y.checked) : y instanceof HTMLInputElement || y instanceof HTMLTextAreaElement || y instanceof HTMLSelectElement ? String(y.value ?? "") : j();
    };
    let O = T();
    const $ = () => h ? u : t instanceof HTMLInputElement && ["checkbox", "radio"].includes(t.type) ? t.checked : d ? u || !!j() : String(T()).trim().length > 0, K = () => {
      this.onChange(e, i, {
        waiting: s && !$(),
        failed: !1,
        waitKind: h || d ? "choice" : "input"
      });
    }, q = (y) => {
      var nt, V;
      if (!(y instanceof Element)) return;
      const S = de(y) || y;
      if (this.overlay.target === S || this.overlay.highlightHost === S || this.overlay.target === y || this.overlay.highlightHost === y) {
        (V = (nt = this.overlay).refreshMenus) == null || V.call(nt);
        return;
      }
      this.overlay.highlight(S, !1, { blockOutside: !0 });
    }, R = !h && !d && !c, D = () => {
      var S;
      const y = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : (S = t.querySelector) == null ? void 0 : S.call(t, 'input:not([type="hidden"]), textarea');
      if (y instanceof HTMLElement)
        try {
          y.blur();
        } catch {
        }
      try {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      } catch {
      }
    }, et = () => {
      this.active && this.index === i && this.next();
    }, tt = (y = t) => {
      var S, A;
      !this.active || this.index !== i || u || (u = !0, O = T(), clearTimeout(b), (A = (S = this.overlay).hideGoChip) == null || A.call(S), y instanceof Element && (this.lastChoiceField = y, this.lastCompletedField = bt(y) || y), K(), D(), this.overlay.hide(), b = setTimeout(et, R ? Math.min(C, 120) : C));
    }, ct = () => {
      var y, S, A, nt, V, rt;
      if (R) {
        if (!this.active || this.index !== i || u) {
          (S = (y = this.overlay).hideGoChip) == null || S.call(y);
          return;
        }
        $() ? (nt = (A = this.overlay).showGoChip) == null || nt.call(A, () => {
          var ut, _t;
          if (!(!this.active || this.index !== i || u)) {
            if (!$()) {
              K(), (_t = (ut = this.overlay).hideGoChip) == null || _t.call(ut);
              return;
            }
            tt(t);
          }
        }, "Go") : (rt = (V = this.overlay).hideGoChip) == null || rt.call(V);
      }
    }, H = (y = t) => {
      if (!this.active || this.index !== i || u || J()) return;
      if (!(h || d ? !0 : $())) {
        K(), ct();
        return;
      }
      if (R) {
        O = T(), K(), ct();
        return;
      }
      if (!this.autoAdvanceOnInput) {
        u = !0, O = T(), y instanceof Element && (this.lastChoiceField = y, this.lastCompletedField = bt(y) || y), K();
        return;
      }
      tt(y);
    }, U = (y) => {
      var rt, ut, _t, ot;
      if (!(y instanceof Element)) return !1;
      if (y === t || t.contains(y)) return !0;
      const S = (rt = t.querySelector) == null ? void 0 : rt.call(t, "input, textarea, select");
      if (S && (y === S || S.contains(y))) return !0;
      const A = bt(y);
      if (A && (A === t || t.contains(A) || (ut = A.contains) != null && ut.call(A, t)))
        return !0;
      if (y.closest(k) && (c || d)) {
        const pt = bt(y) || Kt();
        if (pt && (pt === t || t.contains(pt) || (_t = pt.contains) != null && _t.call(pt, t)))
          return !0;
        const kt = Kt();
        return !!(kt && (kt === t || t.contains(kt)));
      }
      const V = Kt();
      return !!(V && (V === t || t.contains(V) || (ot = V.contains) != null && ot.call(V, t)));
    }, F = (y = t) => {
      !this.active || this.index !== i || u || J() || (clearTimeout(b), b = setTimeout(() => H(y), 0));
    }, z = () => {
      !l || u || J() || (f || T() !== O) && F(t);
    }, Z = (y) => {
      const S = y == null ? void 0 : y.target;
      if (c) {
        if (!f) return;
        F(t);
        return;
      }
      if (l) {
        U(S instanceof Element ? S : t) && (f = !0, g = !0), z();
        return;
      }
      if (!(d && !a && !o && ((y == null ? void 0 : y.type) === "input" || (y == null ? void 0 : y.type) === "change" && !f && !g))) {
        if (h && S instanceof Element && (x.contains(S) || !!S.closest(_) || U(S)) && (S.matches("select, input, textarea") || It(S) || Rt(S))) {
          if (d && S.matches("input, textarea") && !Rt(S) && (y == null ? void 0 : y.type) === "input")
            return;
          F(bt(S) || t);
          return;
        }
        h && S instanceof Element && !U(S) || !h && !d && S instanceof Element && !U(S) || F(t);
      }
    }, X = (y) => {
      var pt, kt, Wt, Zt, jt, Xt, Lt, qt;
      if (!h || u) return;
      const S = y.target instanceof Element ? y.target : null;
      if (!S) return;
      const A = x.contains(S), V = !!S.closest(_), rt = S.closest(E), ut = I(S);
      if (l && !!S.closest([
        ".p-multiselect-close",
        ".p-multiselect-remove",
        '[data-pc-section="closebutton"]',
        '[data-pc-section="clearicon"]',
        ".p-multiselect-header .p-multiselect-close"
      ].join(", ")) && U(S)) {
        g = !0, setTimeout(z, 40);
        return;
      }
      if ((rt || ut) && U(S)) {
        if (g = !0, S.matches("input, textarea") && !rt && !ut) {
          (kt = (pt = this.overlay).refreshMenus) == null || kt.call(pt);
          return;
        }
        if (c && !rt) {
          (Zt = (Wt = this.overlay).refreshMenus) == null || Zt.call(Wt);
          return;
        }
        if (y.type === "pointerdown" || y.type === "pointerup" || y.type === "click" || ut) {
          if (f = !0, l) {
            (Xt = (jt = this.overlay).refreshMenus) == null || Xt.call(jt);
            return;
          }
          F(bt(S) || Kt() || t);
        }
        return;
      }
      if (!A && !V && !ut) {
        l && g && setTimeout(z, 40);
        return;
      }
      const ot = S.closest(L);
      if (ot && (A || x.contains(ot)) && !V && !rt && !ut) {
        g = !0;
        const Pt = bt(ot) || ot;
        if ((U(Pt) || U(ot)) && (q(Pt), (qt = (Lt = this.overlay).refreshMenus) == null || qt.call(Lt), l && setTimeout(z, 40)), ot instanceof HTMLSelectElement && y.type === "pointerdown") {
          const ee = () => F(Pt), ge = Date.now();
          ot.addEventListener("change", ee, { once: !0 }), ot.addEventListener("focusout", () => {
            Date.now() - ge < 280 || setTimeout(ee, 40);
          }, { once: !0 });
        }
      }
    };
    if (t.addEventListener("input", Z), t.addEventListener("change", Z), document.addEventListener("change", Z, !0), document.addEventListener("input", Z, !0), document.addEventListener("pointerdown", X, !0), document.addEventListener("pointerup", X, !0), document.addEventListener("click", X, !0), d && typeof MutationObserver < "u") {
      const y = (Ut = t.querySelector) == null ? void 0 : Ut.call(t, ".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      y && !c && (m = new MutationObserver(() => {
        if (T() !== O) {
          if (l) {
            f = !0, g = !0, z();
            return;
          }
          F(t);
        }
      }), m.observe(y, {
        characterData: !0,
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "value"]
      }));
      const S = ((St = t.querySelector) == null ? void 0 : St.call(t, "[aria-expanded]")) || ((Bt = t.hasAttribute) != null && Bt.call(t, "aria-expanded") ? t : null);
      S && (v = new MutationObserver(() => {
        if (!(!g || u) && S.getAttribute("aria-expanded") === "false" && !(c && !f)) {
          if (l) {
            z();
            return;
          }
          (f || T() !== O) && F(t);
        }
      }), v.observe(S, { attributes: !0, attributeFilter: ["aria-expanded"] })), l && (w = new MutationObserver(() => {
        z();
      }), w.observe(t, {
        attributes: !0,
        attributeFilter: ["class", "aria-expanded"]
      }));
    }
    const Et = setInterval(() => {
      if (!u) {
        if (c) {
          if (!f) return;
          F(t);
          return;
        }
        if (l) {
          T() !== O && (f = !0, g = !0), z();
          return;
        }
        if (T() !== O) {
          O = T(), F(t);
          return;
        }
        R && ct();
      }
    }, 80), Mt = (y) => {
      !R || u || y.key === "Enter" && U(y.target instanceof Element ? y.target : t) && $() && (y.preventDefault(), tt(t));
    };
    this.waitCleanup = () => {
      var y, S;
      clearTimeout(b), clearInterval(Et), m == null || m.disconnect(), v == null || v.disconnect(), w == null || w.disconnect(), (S = (y = this.overlay).hideGoChip) == null || S.call(y), t.removeEventListener("input", Z), t.removeEventListener("change", Z), document.removeEventListener("change", Z, !0), document.removeEventListener("input", Z, !0), document.removeEventListener("keydown", Mt, !0), document.removeEventListener("pointerdown", X, !0), document.removeEventListener("pointerup", X, !0), document.removeEventListener("click", X, !0);
    }, K(), R && (document.addEventListener("keydown", Mt, !0), ct());
  }
  async applyHideDelay(t) {
    var s;
    const e = Math.max(0, Number((s = t == null ? void 0 : t.settings) == null ? void 0 : s.hideDelay) || 0);
    e && (this.overlay.hide(), await new Promise((i) => setTimeout(i, e)));
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
    var t, e, s, i;
    this.active = !1, this.token += 1, this.waitingForNavigation = !1, clearTimeout(this.navWaitTimer), this.navWaitTimer = null, clearTimeout(this.targetLostTimer), this.targetLostTimer = null, clearTimeout(this.rebindDebounceTimer), this.rebindDebounceTimer = null, this.lastChoiceField = null, this.lastCompletedField = null, this.clearWait(), (e = (t = this.overlay).hideWarning) == null || e.call(t), (i = (s = this.overlay).hideWaiting) == null || i.call(s), this.overlay.hide();
  }
  destroy() {
    this.stop();
  }
}
function Y(n) {
  const t = String(n || "/").trim() || "/";
  try {
    if (/^https?:\/\//i.test(t))
      return new URL(t).pathname || "/";
  } catch {
  }
  const e = t.split("?")[0].split("#")[0] || "/";
  return e.startsWith("/") ? e : `/${e}`;
}
function Pi(n) {
  return Y(n).split("/").map((t) => t.trim()).filter(Boolean);
}
function Ii(n) {
  return String(n || "root").replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
}
function Ri(n = []) {
  const t = { path: "/", label: "Home", guides: [], children: /* @__PURE__ */ new Map() }, e = (i, r, o) => (i.children.has(r) || i.children.set(r, {
    path: o,
    label: Ii(r),
    guides: [],
    children: /* @__PURE__ */ new Map()
  }), i.children.get(r));
  for (const i of n) {
    if (!i || typeof i != "object") continue;
    const r = Y(i.url || "/"), o = Pi(r);
    if (!o.length) {
      t.guides.push(i);
      continue;
    }
    let a = t, c = "";
    o.forEach((l) => {
      c += `/${l}`, a = e(a, l, c);
    }), a.guides.push(i);
  }
  const s = (i) => ({
    path: i.path,
    label: i.label,
    guides: [...i.guides].sort((r, o) => String(r.title || "").localeCompare(String(o.title || ""))),
    children: [...i.children.values()].map(s).sort((r, o) => r.label.localeCompare(o.label))
  });
  return [s(t)].filter((i) => i.guides.length > 0 || i.children.length > 0);
}
function xs(n, t = 0, e = []) {
  for (const s of n || []) {
    const i = [];
    xs(s.children, t + 1, i);
    const r = s.guides || [];
    if (r.length) {
      e.push({ type: "section", depth: t, path: s.path, label: s.label });
      for (const o of r)
        e.push({ type: "guide", depth: t + 1, guide: o });
    }
    e.push(...i);
  }
  return e;
}
const Gi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="4" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="4" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
</svg>`, Oi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
</svg>`, $i = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M10.2 8.4L16.2 12L10.2 15.6V8.4Z" fill="currentColor"/>
</svg>`, Di = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" fill="currentColor"/>
</svg>`;
function Es(n = "sg") {
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
const Hi = Es("sgA"), Fi = Es("sgB"), Ui = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 3.75h6M5.25 6.75h13.5M8.25 6.75V18a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V6.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 10.5v6M13.5 10.5v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Wi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, ji = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`, qi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M6 14.5V6.5A1.5 1.5 0 0 1 7.5 5H15.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, zi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 6.5 16 12 9 17.5V6.5Z" fill="currentColor"/>
</svg>`, cs = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 3c.6 3.4 2.3 5.1 5.7 5.7-3.4.6-5.1 2.3-5.7 5.7-.6-3.4-2.3-5.1-5.7-5.7C9.7 8.1 11.4 6.4 12 3Z" fill="currentColor"/>
  <path d="M18.5 14.5c.25 1.3.9 1.95 2.2 2.2-1.3.25-1.95.9-2.2 2.2-.25-1.3-.9-1.95-2.2-2.2 1.3-.25 1.95-.9 2.2-2.2Z" fill="currentColor"/>
</svg>`, Ki = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
class Vi {
  constructor({
    zIndex: t,
    onOpenPanel: e,
    onBypassOpenPanel: s,
    onStartRecording: i,
    onPlayPageGuide: r,
    onDeleteGuide: o,
    onOpenManage: a,
    onStopTutorial: c,
    onSearchGuide: l
  }) {
    this.onOpenPanel = e, this.onBypassOpenPanel = s, this.onStartRecording = i, this.onPlayPageGuide = r, this.onDeleteGuide = o, this.onOpenManage = a, this.onStopTutorial = c, this.onSearchGuide = l, this.playing = !1, this.guideCount = 0, this.apiReady = !0, this.readOnly = !1, this.visible = !0, this.menuOpen = !1, this.searchGuides = [], this.searchCurrentUrl = "/", this.accountId = null, this.bypassPin = "123456", this.bypassBuffer = "", this.orbHovering = !1, this.showAccountId = !1, this.launcherSettings = {
      size: 80,
      position: "bottom-right",
      animations: !0
    }, this.root = document.createElement("div"), this.root.className = "sg-launcher", this.root.style.zIndex = String(t + 5), this.root.setAttribute("aria-label", "System Guider actions"), this.optionsRoot = document.createElement("section"), this.optionsRoot.className = "sg-guide-picker", this.optionsRoot.hidden = !0, this.optionsRoot.setAttribute("aria-label", "All guides"), this.trigger = document.createElement("button"), this.trigger.type = "button", this.trigger.className = "sg-launcher__trigger", this.trigger.dataset.action = "toggle-menu", this.trigger.setAttribute("aria-label", "Show System Guider toolbar"), this.trigger.setAttribute("aria-expanded", "false"), this.trigger.title = "Show toolbar", this.trigger.innerHTML = `
      <span class="sg-launcher__avatar">${Hi}</span>
    `, this.menu = this.createMenu(), this.recordButton = this.menu.querySelector('[data-action="start-recording"]'), this.panelButton = this.menu.querySelector('[data-action="open-panel"]'), this.playButton = this.menu.querySelector('[data-action="play-page"]'), this.playTitle = this.playButton.querySelector(".sg-launcher__tile-title"), this.root.append(this.optionsRoot, this.menu, this.trigger), this.bindOrbHover([this.trigger, this.orb].filter(Boolean)), this.applyControlsDisabled(), this.setMenuOpen(!1), this.onKeyDown = this.onKeyDown.bind(this), this.root.addEventListener("click", (d) => this.handleClick(d)), document.addEventListener("keydown", this.onKeyDown), document.body.append(this.root), this.setLauncherSettings(this.launcherSettings);
  }
  createMenu() {
    const t = document.createElement("div");
    t.className = "sg-launcher__menu", t.setAttribute("role", "dialog"), t.setAttribute("aria-label", "System Guider menu");
    const e = document.createElement("div");
    e.className = "sg-launcher__radial", this.radial = e;
    const s = document.createElement("div");
    s.className = "sg-launcher__petals";
    const i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    i.classList.add("sg-launcher__connector"), i.setAttribute("viewBox", "0 0 304 150"), i.setAttribute("aria-hidden", "true"), i.innerHTML = `
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
    `, this.connector = i, this.placeAllConnectorDots();
    const r = this.createTile({
      action: "start-recording",
      variant: "record",
      title: "Record",
      subtitle: "Create a guide",
      icon: Oi,
      shortcut: "R"
    }), o = this.createTile({
      action: "open-panel",
      variant: "panel",
      title: "Panel",
      subtitle: "Guide controls",
      icon: Gi,
      shortcut: "P"
    }), a = this.createTile({
      action: "play-page",
      variant: "play",
      title: "Play guides",
      subtitle: "Start a tutorial",
      icon: $i
    });
    this.stopButton = this.createTile({
      action: "stop-tutorial",
      variant: "stop",
      title: "Stop",
      subtitle: "End tutorial",
      icon: Di
    }), this.stopButton.hidden = !0, s.append(a, r, o, this.stopButton), this.petalGroup = s;
    const c = document.createElement("button");
    c.type = "button", c.className = "sg-launcher__orb", c.dataset.action = "toggle-menu", c.setAttribute("aria-label", "Hide System Guider toolbar"), c.title = "Close", c.innerHTML = `
      <span class="sg-launcher__avatar">${Fi}</span>
    `, this.orb = c, e.append(i, s, c);
    const l = document.createElement("form");
    l.className = "sg-launcher__search", l.setAttribute("role", "search"), l.innerHTML = `
      <span class="sg-launcher__search-spark">${cs}</span>
      <input
        type="text"
        class="sg-launcher__search-input"
        placeholder="Search guides or press /"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search guides"
      />
      <button type="submit" class="sg-launcher__search-go" aria-label="Search">${Ki}</button>
    `, this.searchInput = l.querySelector(".sg-launcher__search-input"), this.searchInput.addEventListener("input", () => this.renderSearchResults()), l.addEventListener("submit", (h) => {
      h.preventDefault(), this.submitSearch();
    }), this.searchResults = document.createElement("div"), this.searchResults.className = "sg-launcher__results", this.searchResults.hidden = !0, this.accountLabel = document.createElement("span"), this.accountLabel.className = "sg-launcher__account", this.accountLabel.hidden = !0;
    const d = document.createElement("div");
    return d.className = "sg-launcher__hint", d.innerHTML = "Press <kbd>Esc</kbd> to close", t.append(e, l, this.searchResults, this.accountLabel, d), this.syncAccountLabel(), t;
  }
  createTile({ action: t, variant: e, title: s, subtitle: i = "", icon: r, shortcut: o = "" }) {
    const a = document.createElement("button");
    return a.type = "button", a.className = `sg-launcher__tile sg-launcher__tile--${e}`, a.dataset.action = t, a.setAttribute("aria-label", s), a.title = s, a.innerHTML = `
      ${o ? `<span class="sg-launcher__shortcut">${o}</span>` : ""}
      <span class="sg-launcher__icon">${r}</span>
      <span class="sg-launcher__tile-copy">
        <span class="sg-launcher__tile-title">${s}</span>
        ${i ? `<span class="sg-launcher__tile-subtitle">${i}</span>` : ""}
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
    const s = t.some((o) => o.classList.contains("sg-launcher__tile--record")), i = t.some((o) => o.classList.contains("sg-launcher__tile--panel"));
    (r = this.radial) == null || r.classList.toggle("is-compact", !s && !i), this.syncConnectorLayout(t);
  }
  /** Place connector dots exactly on their path (by arc length). */
  placeConnectorDots(t, e = [0.36, 0.68, 1]) {
    if (!t) return;
    const s = t.querySelector("path");
    if (!s || typeof s.getTotalLength != "function") return;
    let i = 0;
    try {
      i = s.getTotalLength();
    } catch {
      return;
    }
    if (!i) return;
    const r = t.querySelectorAll("circle");
    e.forEach((o, a) => {
      const c = r[a];
      if (!c) return;
      const l = s.getPointAtLength(Math.min(1, Math.max(0, o)) * i);
      c.setAttribute("cx", String(Math.round(l.x * 10) / 10)), c.setAttribute("cy", String(Math.round(l.y * 10) / 10));
    });
  }
  placeAllConnectorDots() {
    this.connector && this.connector.querySelectorAll(".sg-launcher__connector-line").forEach((t) => {
      this.placeConnectorDots(t);
    });
  }
  syncConnectorLayout(t) {
    var h;
    if (!this.connector) return;
    const e = t || Array.from(((h = this.petalGroup) == null ? void 0 : h.children) || []).filter((p) => !p.hidden), s = e.length, i = e.some((p) => p.classList.contains("sg-launcher__tile--record")), r = e.some((p) => p.classList.contains("sg-launcher__tile--panel")), o = this.connector.querySelector(".sg-launcher__connector-line--play"), a = this.connector.querySelector(".sg-launcher__connector-line--record"), c = this.connector.querySelector(".sg-launcher__connector-line--panel");
    if (a && (a.style.display = i ? "" : "none"), c && (c.style.display = r ? "" : "none"), !o) return;
    const l = o.querySelector("path"), d = !i && !r;
    d && s === 1 ? l == null || l.setAttribute("d", "M54 112C58 118 72 122 96 120") : d && s === 2 ? l == null || l.setAttribute("d", "M52 100C48 84 64 72 96 74") : l == null || l.setAttribute("d", "M46 108C34 78 58 28 96 28"), this.placeConnectorDots(o), i && this.placeConnectorDots(a), r && this.placeConnectorDots(c);
  }
  matchGuides(t) {
    const e = String(t || "").trim().toLowerCase(), s = Array.isArray(this.searchGuides) ? this.searchGuides : [];
    return e ? s.map((i) => {
      const r = String(i.title || "").toLowerCase(), o = String(i.url || "").toLowerCase();
      let a = 0;
      return r.startsWith(e) && (a += 3), r.includes(e) && (a += 2), o.includes(e) && (a += 1), { guide: i, score: a };
    }).filter((i) => i.score > 0).sort((i, r) => r.score - i.score).slice(0, 6).map((i) => i.guide) : s.slice(0, 6);
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
      const i = document.createElement("div");
      i.className = "sg-launcher__result-empty", i.textContent = "No matching guides", this.searchResults.append(i), this.searchResults.hidden = !1;
      return;
    }
    e.forEach((i) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sg-launcher__result", r.dataset.action = "search-select", r.dataset.guideId = i.id;
      const o = Array.isArray(i.steps) ? i.steps.length : 0, a = String(i.title || "Untitled guide").trim(), c = a.split(" · "), l = (c[0] || "Untitled guide").trim(), d = c.slice(1).join(" · ").trim(), p = /^\d+\s+steps?$/i.test(l) ? d || "Untitled guide" : a;
      r.innerHTML = `
        <span class="sg-launcher__result-spark">${cs}</span>
        <span class="sg-launcher__result-copy">
          <span class="sg-launcher__result-title"></span>
          <span class="sg-launcher__result-meta"></span>
        </span>
        <span class="sg-launcher__result-arrow">→</span>
      `, r.querySelector(".sg-launcher__result-title").textContent = p, r.querySelector(".sg-launcher__result-meta").textContent = `${i.url || "/"} · ${o} step${o === 1 ? "" : "s"}`, this.searchResults.append(r);
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
    var s, i, r, o, a, c, l, d, h, p, u, g;
    const e = (s = t.target.closest("[data-action]")) == null ? void 0 : s.dataset.action;
    if (e) {
      if (e === "toggle-menu") {
        this.setMenuOpen(!this.menuOpen);
        return;
      }
      if (e === "start-recording") {
        if (this.readOnly) return;
        (i = this.onStartRecording) == null || i.call(this), this.setMenuOpen(!1);
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
        const f = (c = t.target.closest("[data-guide-id]")) == null ? void 0 : c.dataset.guideId, b = (l = this.searchGuides) == null ? void 0 : l.find((m) => m.id === f);
        b && this.selectSearchGuide(b);
        return;
      }
      if (e === "close-picker" && this.hideGuideOptions(), e === "open-manage") {
        if (this.readOnly) return;
        this.hideGuideOptions(), (d = this.onOpenManage) == null || d.call(this);
      }
      if (e === "select-guide") {
        const f = (h = t.target.closest("[data-guide-id]")) == null ? void 0 : h.dataset.guideId, b = (p = this.guides) == null ? void 0 : p.find((m) => m.id === f);
        if (b) {
          const m = this.onSelectGuide;
          this.hideGuideOptions(), m == null || m(b);
        }
      }
      if (e === "delete-guide") {
        if (this.readOnly) return;
        t.preventDefault(), t.stopPropagation();
        const f = (u = t.target.closest("[data-guide-id]")) == null ? void 0 : u.dataset.guideId;
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
    var r, o, a, c;
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
    const i = String(t.key || "").toLowerCase();
    i === "r" && !this.recordButton.disabled && (t.preventDefault(), (a = this.onStartRecording) == null || a.call(this), this.setMenuOpen(!1)), i === "p" && !this.panelButton.disabled && (t.preventDefault(), (c = this.onOpenPanel) == null || c.call(this), this.setMenuOpen(!1));
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
    const e = Math.min(96, Math.max(48, Math.round(Number(t.size) || 80))), s = ["bottom-right", "bottom-left", "top-right", "top-left"], i = s.includes(t.position) ? t.position : "bottom-right", r = t.animations !== !1;
    this.launcherSettings = { size: e, position: i, animations: r }, this.root.style.setProperty("--sg-orb-size", `${e}px`), s.forEach((o) => {
      this.root.classList.toggle(`is-position-${o}`, i === o);
    }), this.root.classList.toggle("is-orb-static", !r);
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
    const t = !this.apiReady, e = !!this.playing, s = !!this.readOnly;
    if (this.playButton.disabled = t || e || (this.guideCount ?? 0) < 1, t)
      this.playButton.title = "Waiting for guide API…";
    else if ((this.guideCount ?? 0) < 1)
      this.playButton.title = "No guides saved yet";
    else if (e)
      this.playButton.title = "Stop the tutorial first";
    else {
      const i = this.guideCount ?? 0;
      this.playButton.title = `${i} guide${i === 1 ? "" : "s"} available`;
    }
    this.recordButton.disabled = t || e || s, this.panelButton.disabled = t || e || s, this.stopButton.disabled = !e, this.stopButton.hidden = !e, this.stopButton.classList.toggle("is-disabled", !e), this.menuOpen && this.layoutPetals(), s ? (this.recordButton.title = "View-only: recording disabled", this.panelButton.title = "View-only: manage disabled") : t ? (this.recordButton.title = "Waiting for guide API…", this.panelButton.title = "Waiting for guide API…") : e ? (this.recordButton.title = "Stop the tutorial first", this.panelButton.title = "Stop the tutorial first") : (this.recordButton.title = "Start recording", this.panelButton.title = "Guide Panel"), this.stopButton.title = e ? "Stop tutorial" : "No tutorial playing";
  }
  showGuideOptions(t, e, { hierarchical: s = !0, currentUrl: i = "/" } = {}) {
    this.guides = t, this.onSelectGuide = e, this.optionsRoot.replaceChildren(), this.setMenuOpen(!1);
    const r = document.createElement("header");
    r.className = "sg-guide-picker__header";
    const o = document.createElement("div");
    o.className = "sg-guide-picker__brand";
    const a = document.createElement("span");
    a.className = "sg-guide-picker__brand-icon", a.setAttribute("aria-hidden", "true"), a.innerHTML = Wi;
    const c = document.createElement("div");
    c.className = "sg-guide-picker__brand-copy";
    const l = document.createElement("strong");
    l.className = "sg-guide-picker__title", l.textContent = s ? "All Guides" : "Page Guides";
    const d = document.createElement("span");
    d.className = "sg-guide-picker__subtitle", d.textContent = s ? "Manage your guides" : "Choose a guide to play", c.append(l, d), o.append(a, c);
    const h = document.createElement("div");
    h.className = "sg-guide-picker__actions";
    const p = document.createElement("button");
    p.type = "button", p.className = "sg-guide-picker__manage", p.dataset.action = "open-manage", p.innerHTML = `<span class="sg-guide-picker__manage-icon">${ji}</span><span>Manage</span>`, p.hidden = this.readOnly, this.manageButton = p;
    const u = document.createElement("button");
    u.type = "button", u.className = "sg-guide-picker__close", u.dataset.action = "close-picker", u.setAttribute("aria-label", "Close guide options"), u.textContent = "×", h.append(p, u), r.append(o, h);
    const g = document.createElement("div");
    if (g.className = "sg-guide-picker__list", t.length)
      if (s) {
        const f = xs(Ri(t));
        let b = 0;
        f.forEach((m) => {
          if (m.type === "section") {
            const v = document.createElement("div");
            v.className = "sg-guide-picker__section", v.style.setProperty("--sg-toc-depth", String(m.depth));
            const w = Y(i), C = Y(m.path);
            (w === C || C !== "/" && w.startsWith(`${C}/`)) && v.classList.add("is-current");
            const x = document.createElement("span");
            x.className = "sg-guide-picker__section-label", x.textContent = m.label;
            const _ = document.createElement("span");
            _.className = "sg-guide-picker__section-meta";
            const E = document.createElement("span");
            E.className = "sg-guide-picker__section-path", E.textContent = m.path;
            const k = document.createElement("button");
            k.type = "button", k.className = "sg-guide-picker__copy-path", k.title = "Copy path", k.setAttribute("aria-label", `Copy ${m.path}`), k.innerHTML = qi, k.addEventListener("click", async (L) => {
              var I, G;
              L.preventDefault(), L.stopPropagation();
              try {
                await ((G = (I = navigator.clipboard) == null ? void 0 : I.writeText) == null ? void 0 : G.call(I, m.path)), k.classList.add("is-copied"), setTimeout(() => k.classList.remove("is-copied"), 900);
              } catch {
              }
            }), _.append(E, k), v.append(x, _), g.append(v);
            return;
          }
          b += 1, g.append(this.createGuideRow(m.guide, b, {
            depth: m.depth,
            currentUrl: i
          }));
        });
      } else
        t.forEach((f, b) => {
          g.append(this.createGuideRow(f, b + 1, { depth: 0, currentUrl: i }));
        });
    else {
      const f = document.createElement("div");
      f.className = "sg-guide-picker__empty", f.textContent = "No guides saved yet.", g.append(f);
    }
    this.optionsRoot.append(r, g), this.optionsRoot.hidden = !1, this.syncClosedRail();
  }
  createGuideRow(t, e, { depth: s = 0, currentUrl: i = "/" } = {}) {
    const r = document.createElement("div");
    r.className = "sg-guide-picker__row", r.dataset.guideId = t.id, r.style.setProperty("--sg-toc-depth", String(s));
    const o = Y(t.url || "/");
    o === Y(i) && r.classList.add("is-current-page");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-guide-picker__option", a.dataset.action = "select-guide", a.dataset.guideId = t.id;
    const c = document.createElement("span");
    c.className = "sg-guide-picker__number", c.textContent = String(e).padStart(2, "0");
    const l = document.createElement("span");
    l.className = "sg-guide-picker__copy";
    const d = document.createElement("strong"), h = String(t.title || "Untitled guide").trim(), p = h.split(" · "), u = (p[0] || "Untitled guide").trim(), g = p.slice(1).join(" · ").trim(), f = /^\d+\s+steps?$/i.test(u);
    d.textContent = f ? g || "Untitled guide" : h;
    const b = document.createElement("small"), m = Array.isArray(t.steps) ? t.steps.length : Number(t.steps) || 0, v = document.createElement("span");
    v.className = "sg-guide-picker__path", v.textContent = o;
    const w = document.createElement("span");
    w.className = "sg-guide-picker__dot", w.textContent = "·";
    const C = document.createElement("span");
    C.textContent = `${m} step${m === 1 ? "" : "s"}`, b.append(v, w, C), l.append(d, b);
    const x = document.createElement("span");
    x.className = "sg-guide-picker__play", x.setAttribute("aria-hidden", "true"), x.innerHTML = zi, a.append(c, l, x);
    const _ = document.createElement("button");
    return _.type = "button", _.className = "sg-guide-picker__delete", _.dataset.action = "delete-guide", _.dataset.guideId = t.id, _.setAttribute("aria-label", `Delete ${t.title || "guide"}`), _.title = "Delete guide", _.innerHTML = Ui, this.readOnly && (_.hidden = !0), r.append(a, _), r;
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
const Zi = (n) => JSON.parse(JSON.stringify(n));
function vt(n) {
  if (!n || typeof n != "object" || !Array.isArray(n.steps))
    throw new TypeError("Guide must be an object with a steps array.");
  const t = /* @__PURE__ */ new Set();
  return n.steps.forEach((e, s) => {
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
  }), Zi({
    id: String(n.id || `guide-${Date.now()}`),
    title: String(n.title || "Untitled guide"),
    version: Number(n.version) || 1,
    ...n.url ? { url: String(n.url) } : {},
    ...n.settings && typeof n.settings == "object" && !Array.isArray(n.settings) ? { settings: n.settings } : {},
    steps: n.steps
  });
}
function ds(n) {
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
  const s = [], i = [];
  if (e.forEach((r, o) => {
    try {
      s.push(vt(r));
    } catch (a) {
      i.push(`Guide ${o + 1}: ${a.message}`);
    }
  }), !s.length)
    throw new TypeError(i[0] || "No valid guides found in the file.");
  return { guides: s, errors: i };
}
function Te(n) {
  return JSON.stringify(vt(n), null, 2);
}
function Xi(n) {
  const t = (Array.isArray(n) ? n : []).map((e) => vt(e));
  return JSON.stringify({
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    guides: t
  }, null, 2);
}
function Ji(n, t) {
  !n || typeof localStorage > "u" || localStorage.setItem(n, Te(t));
}
function Yi(n) {
  if (!n || typeof localStorage > "u") return null;
  const t = localStorage.getItem(n);
  return t ? vt(JSON.parse(t)) : null;
}
function Ts(n, t, e = "application/json") {
  const s = new Blob([n], { type: e }), i = URL.createObjectURL(s), r = document.createElement("a");
  r.href = i, r.download = t, r.click(), URL.revokeObjectURL(i);
}
function Qi(n, t = "system-guide.json") {
  Ts(Te(n), t);
}
function tn(n, t = "system-guider-guides.json") {
  Ts(Xi(n), t);
}
async function en(n) {
  var e;
  const t = Te(n);
  if (!((e = navigator.clipboard) != null && e.writeText))
    throw new Error("Clipboard API is unavailable in this browser.");
  return await navigator.clipboard.writeText(t), t;
}
function sn(n = ((e) => (e = globalThis.location) == null ? void 0 : e.href)(), t = "pathname") {
  var s;
  try {
    const i = new URL(n, ((s = globalThis.location) == null ? void 0 : s.origin) || "http://localhost");
    return t === "full" ? `${i.pathname}${i.search}` || "/" : i.pathname || "/";
  } catch {
    return "/";
  }
}
function nn(n = "pathname") {
  var t;
  return sn((t = globalThis.location) == null ? void 0 : t.href, n);
}
function Ms(n) {
  return `${n || "system-guider"}:by-url`;
}
function qe(n) {
  if (typeof localStorage > "u") return {};
  try {
    const t = localStorage.getItem(Ms(n)), e = t ? JSON.parse(t) : {};
    return e && typeof e == "object" ? e : {};
  } catch {
    return {};
  }
}
function Ls(n, t) {
  typeof localStorage > "u" || localStorage.setItem(Ms(n), JSON.stringify(t));
}
function ze(n) {
  return Array.isArray(n) ? n.filter(Boolean) : n ? [n] : [];
}
function be(n, t, e) {
  const s = qe(n), i = ze(s[t]), r = i.findIndex((o) => (o == null ? void 0 : o.id) === e.id);
  return r >= 0 ? i[r] = e : i.push(e), s[t] = i, Ls(n, s), i;
}
function rn(n) {
  const t = qe(n), e = [];
  return Object.entries(t).forEach(([s, i]) => {
    ze(i).forEach((r) => {
      e.push({ ...r, url: (r == null ? void 0 : r.url) || s });
    });
  }), e;
}
function on(n, t, e) {
  const s = qe(n), i = ze(s[t]).filter((r) => (r == null ? void 0 : r.id) !== e);
  return i.length ? s[t] = i : delete s[t], Ls(n, s), i;
}
function Ke(n) {
  return `${n || "system-guider"}:pending-play`;
}
function ve(n, t) {
  typeof sessionStorage > "u" || sessionStorage.setItem(Ke(n), JSON.stringify(t));
}
function an(n) {
  if (typeof sessionStorage > "u") return null;
  const t = Ke(n), e = sessionStorage.getItem(t);
  if (sessionStorage.removeItem(t), !e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function ae(n) {
  typeof sessionStorage > "u" || sessionStorage.removeItem(Ke(n));
}
function Ns(n) {
  return String(n || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";
}
function ln(n) {
  const t = String(n || "/").split(/[\\/]+/).map((e) => e.trim()).filter(Boolean).map(Ns);
  return t.length ? t.join("/") : "root";
}
function cn(n) {
  return `${Ns((n == null ? void 0 : n.title) || (n == null ? void 0 : n.id) || "guide")}.json`;
}
function Fe(n, t = n == null ? void 0 : n.url) {
  return `${ln(t)}/${cn(n)}`;
}
function dn(n = {}) {
  if (n === !1) return null;
  const t = n === !0 || n == null ? {} : n;
  return {
    baseUrl: t.baseUrl || "/__sg/guides",
    publicBase: t.publicBase || "/guides",
    downloadFallback: t.downloadFallback !== !1,
    ...t
  };
}
async function Ve(n, t, e) {
  const s = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }, i = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/);
  i != null && i[1] && (s["X-XSRF-TOKEN"] = decodeURIComponent(i[1]));
  const r = document.querySelector('meta[name="csrf-token"]');
  r != null && r.content && (s["X-CSRF-TOKEN"] = r.content);
  const o = await fetch(n, {
    method: t,
    headers: s,
    credentials: "same-origin",
    body: e ? JSON.stringify(e) : void 0
  });
  if (!o.ok) {
    const c = await o.text().catch(() => "");
    let l = c;
    try {
      const d = JSON.parse(c);
      l = d.message || d.error || `HTTP ${o.status}`, String(l).trim() || (l = `HTTP ${o.status}`);
    } catch {
      l || (l = `HTTP ${o.status}`);
    }
    throw new Error(l);
  }
  return (o.headers.get("content-type") || "").includes("application/json") ? o.json() : null;
}
async function we(n, t, e) {
  const s = Fe(t, e);
  try {
    const i = await Ve(n.baseUrl, "POST", {
      guide: t,
      urlKey: e || t.url || "/",
      path: s
    });
    return { ok: !0, path: (i == null ? void 0 : i.path) || s, via: "api" };
  } catch (i) {
    if (!n.downloadFallback) throw i;
    const r = s.replace(/\//g, "__"), o = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), a = URL.createObjectURL(o), c = document.createElement("a");
    return c.href = a, c.download = r, c.click(), URL.revokeObjectURL(a), { ok: !0, path: s, via: "download", error: i.message };
  }
}
async function un(n, { guideId: t, urlKey: e, path: s }) {
  try {
    return await Ve(n.baseUrl, "DELETE", { guideId: t, urlKey: e, path: s }), { ok: !0 };
  } catch {
    return { ok: !1 };
  }
}
async function hn(n) {
  const t = `${String(n.publicBase || "/guides").replace(/\/$/, "")}/index.json`, e = await fetch(t, { headers: { Accept: "application/json" } });
  if (!e.ok) return { version: 1, guides: [] };
  const s = await e.json();
  return s && typeof s == "object" ? { version: Number(s.version) || 1, guides: Array.isArray(s.guides) ? s.guides : [] } : { version: 1, guides: [] };
}
async function us(n) {
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
async function pn(n) {
  const t = await hn(n), e = String(n.publicBase || "/guides").replace(/\/$/, ""), s = [];
  for (const i of t.guides) {
    const r = i == null ? void 0 : i.path;
    if (r)
      try {
        const o = await fetch(`${e}/${r}`, {
          headers: { Accept: "application/json" }
        });
        if (!o.ok) continue;
        const a = await o.json();
        a && Array.isArray(a.steps) && s.push({
          ...a,
          url: a.url || i.url,
          title: a.title || i.title,
          id: a.id || i.id
        });
      } catch {
      }
  }
  return s;
}
async function gn(n) {
  const t = String(n.publicBase || "/guides").replace(/\/$/, ""), e = await fetch(`${t}/settings.json`, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });
  if (!e.ok) return null;
  const s = await e.json();
  return s && typeof s == "object" && !Array.isArray(s) ? s : null;
}
async function fn(n, t) {
  const e = await Ve(n.baseUrl, "POST", {
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
const mn = {
  next: "Next Step",
  back: "Back",
  close: "Close Guide",
  skip: "Skip Step",
  startRecording: "Start Recording",
  stopRecording: "Stop Recording"
}, le = (n = "") => ({
  id: `guide-${Date.now()}`,
  title: n ? `Guide for ${n}` : "New system guide",
  version: 1,
  url: n || void 0,
  steps: []
});
class yn {
  constructor(t = {}) {
    var e, s, i, r, o, a, c, l, d, h, p;
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
      labels: { ...mn, ...t.labels }
    }, this.settings = Nt({
      ...ys(),
      ...t.settings || {}
    }), this.options.resetBeforePlay = this.settings.resetBeforePlay || this.options.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay ?? this.options.resetBeforePlayDelay, oe(this.settings), this.fileStorage = dn(this.options.fileStorage), this.fileGuides = [], this.guideSaveTimer = null, this.settingsSaveTimer = null, this.apiReady = !this.fileStorage, this.apiProbeTimer = null, this.guide = le(this.getUrlKey()), this.mode = "idle", this.dirty = !1, this.recordingAppend = !1, this.destroyed = !1, this.recordingStepsBaseline = 0, this.panelVisible = !this.options.showLauncher, this.readOnly = !1, this.bypassUnlocked = !1, this.launcherVisible = this.options.showLauncher !== !1, this.accountId = t.accountId ?? null, this.overlay = new Li({
      ...this.options,
      skipLabel: ((e = this.options.labels) == null ? void 0 : e.skip) || "Skip Step",
      onSkip: () => this.skip(),
      onEnd: () => this.endPlayback(),
      onHighlightBox: (u) => {
        var g;
        return (g = this.panel) == null ? void 0 : g.avoidHighlight(u);
      },
      onTargetLost: () => {
        var u, g;
        return (g = (u = this.player) == null ? void 0 : u.onSpotlightTargetLost) == null ? void 0 : g.call(u);
      },
      ui: this.settings.ui
    }), this.recorder = new ki({ onStep: (u) => this.recordStep(u) }), this.player = new Bi({
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
      onChange: (u, g, f) => this.onPlaybackChange(u, g, f),
      onFail: (u, g) => this.onPlaybackFail(u, g),
      onComplete: () => this.onPlaybackComplete(),
      onClickAdvance: (u, g, f, b) => {
        this.persistPlaybackProgress(f, b);
      }
    }), this.playbackResumeTimer = null, this.panel = new Ks({
      labels: this.options.labels,
      zIndex: this.options.zIndex,
      handlers: this.createHandlers(),
      visible: this.panelVisible
    }), this.launcher = this.options.showLauncher ? new Vi({
      zIndex: this.options.zIndex,
      onOpenPanel: () => this.togglePanel(),
      onBypassOpenPanel: () => this.openPanelViaBypass(),
      onStartRecording: () => this.startRecording(),
      onPlayPageGuide: () => this.playPageGuide(),
      onDeleteGuide: (u) => this.deletePageGuide(u),
      onOpenManage: () => this.openManageRoutes(),
      onStopTutorial: () => this.close(!0),
      onSearchGuide: (u) => this.playGuide(u)
    }) : null, (s = this.launcher) == null || s.setApiReady(this.apiReady), (i = this.launcher) == null || i.setReadOnly(this.readOnly), (a = (r = this.launcher) == null ? void 0 : r.setBypassPin) == null || a.call(r, (o = this.settings) == null ? void 0 : o.bypassPin), (d = (c = this.launcher) == null ? void 0 : c.setLauncherSettings) == null || d.call(c, (l = this.settings) == null ? void 0 : l.launcher), (p = (h = this.launcher) == null ? void 0 : h.setAccountId) == null || p.call(h, this.accountId), this.onKeyDown = this.onKeyDown.bind(this), this.onUrlChange = this.onUrlChange.bind(this), document.addEventListener("keydown", this.onKeyDown), window.addEventListener("popstate", this.onUrlChange), this.installHistoryHooks(), this.applyAccessPolicy(), this.bootstrap();
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
      const e = await pn(this.fileStorage);
      if (this.fileGuides = Array.isArray(e) ? e : [], this.dirty && ((t = this.guide) != null && t.id)) {
        const s = structuredClone(this.guide), i = this.fileGuides.findIndex((r) => r.id === this.guide.id);
        i >= 0 ? this.fileGuides[i] = s : this.fileGuides = [...this.fileGuides, s];
      }
    } catch {
      this.fileGuides = [];
    }
    this.syncLauncher(), this.render();
  }
  async reloadFileSettings() {
    var t, e, s, i, r, o;
    if (this.fileStorage)
      try {
        const a = await gn(this.fileStorage);
        if (!a) return;
        this.settings = Nt({
          ...this.settings,
          ...a,
          ...this.options.settings || {}
        }), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, oe(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (i = (s = this.player) == null ? void 0 : s.setUiOptions) == null || i.call(s, this.settings.ui), (o = (r = this.launcher) == null ? void 0 : r.setLauncherSettings) == null || o.call(r, this.settings.launcher), this.applyAccessPolicy();
      } catch {
      }
  }
  /** Host app sets the logged-in account id used for editor allow-list checks. */
  setAccountId(t) {
    var e, s;
    return this.accountId = t == null || t === "" ? null : String(t), (s = (e = this.launcher) == null ? void 0 : e.setAccountId) == null || s.call(e, this.accountId), this.applyAccessPolicy(), this;
  }
  setReadOnly(t) {
    var s, i;
    const e = !!t;
    return this.readOnly === e ? ((s = this.launcher) == null || s.setReadOnly(this.readOnly), this) : (this.readOnly = e, (i = this.launcher) == null || i.setReadOnly(this.readOnly), this.readOnly && (this.mode === "recording" || this.mode === "manage" || this.mode === "manage-routes") && (this.mode === "recording" && this.stopRecording(), this.mode = "idle", this.closePanel()), this.render(), this);
  }
  setLauncherVisible(t) {
    var s, i, r, o;
    const e = !!t;
    return this.launcherVisible === e ? ((s = this.launcher) == null || s.setVisible(this.launcherVisible), this) : (this.launcherVisible = e, (i = this.launcher) == null || i.setVisible(this.launcherVisible), this.launcherVisible || ((o = (r = this.launcher) == null ? void 0 : r.setMenuOpen) == null || o.call(r, !1), this.mode !== "playback" && this.mode !== "recording" && this.closePanel()), this);
  }
  /** Sync read-only + toolbar visibility from settings + current account/url. */
  applyAccessPolicy() {
    var i, r, o, a, c, l, d, h, p, u, g;
    const t = this.bypassUnlocked || ci(this.accountId, (i = this.settings) == null ? void 0 : i.editorAccountIds);
    this.setReadOnly(!t);
    const e = li(this.getUrlKey(), (r = this.settings) == null ? void 0 : r.hiddenUrls), s = this.options.showLauncher !== !1 && !e;
    return this.setLauncherVisible(s), (c = (o = this.launcher) == null ? void 0 : o.setBypassPin) == null || c.call(o, (a = this.settings) == null ? void 0 : a.bypassPin), (h = (l = this.launcher) == null ? void 0 : l.setShowAccountId) == null || h.call(l, !!((d = this.settings) != null && d.showAccountId)), (g = (p = this.launcher) == null ? void 0 : p.setLauncherSettings) == null || g.call(p, (u = this.settings) == null ? void 0 : u.launcher), this;
  }
  /** Unlock editor mode via orb hover + PIN, then open Global Settings panel. */
  openPanelViaBypass() {
    var t, e;
    return this.mode === "playback" ? this : this.fileStorage && !this.apiReady ? this : (this.bypassUnlocked = !0, this.setReadOnly(!1), this.openManageRoutes(), (e = (t = this.launcher) == null ? void 0 : t.setMenuOpen) == null || e.call(t, !1), this);
  }
  async bootstrap() {
    var t, e, s, i;
    await Promise.all([this.reloadFileGuides(), this.reloadFileSettings()]);
    try {
      const r = this.getGuideForCurrentPage();
      if (r) this.load(r, { dirty: !1, mode: "idle" });
      else if (!this.fileStorage) {
        const o = Yi(this.options.storageKey);
        o && this.load(o, { dirty: !1, mode: "manage" });
      }
    } catch {
    }
    await this.ensureGuideApiReady(), this.syncLauncher(), this.render(), oe(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (i = (s = this.player) == null ? void 0 : s.setUiOptions) == null || i.call(s, this.settings.ui), this.resumePendingPlay();
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
    if (this.clearApiProbeTimer(), await us(this.fileStorage) || this.fileStorage.downloadFallback)
      return this.setApiReady(!0), !0;
    if (this.setApiReady(!1), this.destroyed) return !1;
    const e = async () => {
      if (this.destroyed || !this.fileStorage) return;
      if (await us(this.fileStorage) || this.fileStorage.downloadFallback) {
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
    return typeof this.options.getUrlKey == "function" ? String(this.options.getUrlKey() || "/") : nn(this.options.urlMatch);
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
      (Array.isArray(a) ? a : a ? [a] : []).forEach((l) => t.push({ ...l, url: l.url || o }));
    });
    const e = this.options.guidesByUrl ? rn(this.options.storageKey) : [], s = this.fileGuides || [], i = /* @__PURE__ */ new Map(), r = this.fileStorage ? [...t, ...e, ...s] : [...t, ...s, ...e];
    for (const o of r)
      try {
        const a = vt(o);
        i.set(a.id, a);
      } catch {
      }
    return [...i.values()].sort((o, a) => String(o.url || "").localeCompare(String(a.url || "")) || String(o.title || "").localeCompare(String(a.title || "")));
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
    if (this.guide = vt({
      ...this.guide,
      url: t,
      title: this.guide.title || `Guide for ${t}`
    }), this.options.guidesByUrl && be(this.options.storageKey, t, this.guide), this.dirty = !1, this.persistDraft(), Array.isArray(this.fileGuides)) {
      const s = this.fileGuides.findIndex((i) => i.id === this.guide.id);
      s >= 0 ? this.fileGuides[s] = { ...this.fileGuides[s], ...this.guide } : this.fileGuides = [...this.fileGuides, structuredClone(this.guide)];
    }
    return this.syncLauncher(), this.render({
      flashMessage: `Saved “${this.guide.title || "Untitled guide"}”.`
    }), this.fileStorage && (Fe(this.guide, t), we(this.fileStorage, this.guide, t).then(async (s) => {
      var i;
      await this.reloadFileGuides(), s.via === "download" && ((i = globalThis.alert) == null || i.call(
        globalThis,
        `Guide downloaded as ${String(s.path).replace(/\//g, "__")}. Place it in your app public/guides/ (same route folders).`
      ));
    }).catch((s) => {
      var i;
      (i = globalThis.alert) == null || i.call(globalThis, `Guide saved locally, but file storage failed: ${s.message}`);
    })), this;
  }
  playPageGuide(t) {
    var s, i, r;
    if (this.assertUsable(), this.fileStorage && !this.apiReady) return this;
    const e = this.getAllGuides();
    if (!e.length)
      return this.openPanel(), (s = globalThis.alert) == null || s.call(globalThis, "No guides saved yet. Record one first."), this;
    if (t) {
      const o = e.find((a) => a.id === t);
      return o ? this.playGuide(o) : ((i = globalThis.alert) == null || i.call(globalThis, "That guide could not be found."), this);
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
    const e = vt(t), s = Y(e.url || "/"), i = Y(this.getUrlKey());
    if (s !== i) {
      if (ve(this.options.storageKey, {
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
    const e = this.getAllGuides().find((c) => c.id === t), s = Y((e == null ? void 0 : e.url) || this.getUrlKey());
    this.options.guidesByUrl && on(this.options.storageKey, s, t), this.fileGuides = (this.fileGuides || []).filter((c) => c.id !== t), this.fileStorage && e && un(this.fileStorage, {
      guideId: t,
      urlKey: s,
      path: Fe(e, s)
    }).then(() => this.reloadFileGuides()).catch(() => {
    });
    const i = this.getAllGuides().filter((c) => c.id !== t);
    if (((o = this.guide) == null ? void 0 : o.id) === t) {
      const c = i.find((l) => Y(l.url) === Y(this.getUrlKey())) || i[0];
      c ? this.load(c, { dirty: !1, mode: this.mode === "manage-routes" ? "manage-routes" : "idle" }) : (this.guide = le(this.getUrlKey()), this.mode = this.mode === "manage-routes" ? "manage-routes" : "idle", this.dirty = !1, this.persistDraft());
    }
    return this.syncLauncher(), this.render(), i.length && this.launcher && !this.launcher.optionsRoot.hidden ? this.launcher.showGuideOptions(
      i,
      (c) => this.playGuide(c),
      { hierarchical: !0, currentUrl: this.getUrlKey() }
    ) : (a = this.launcher) == null || a.hideGuideOptions(), this;
  }
  startPageGuide(t, { skipReset: e = !1, stepIndex: s = 0 } = {}) {
    const i = vt(t), r = this.getGuidePlaybackSettings(i);
    if (!e && r.resetBeforePlay === "reload")
      return ve(this.options.storageKey, {
        guideId: i.id,
        urlKey: Y(i.url || this.getUrlKey()),
        guide: i,
        stepIndex: 0
      }), globalThis.location.reload(), this;
    e || ae(this.options.storageKey), this.load(i, { dirty: !1, mode: "manage" });
    const a = Math.max(0, Math.min(Number(s) || 0, Math.max(i.steps.length - 1, 0)));
    return this.startFrom(a);
  }
  persistPlaybackProgress(t, { mayNavigate: e = !1 } = {}) {
    var i, r;
    if (!((i = this.guide) != null && i.id)) return;
    const s = ((r = this.guide.steps) == null ? void 0 : r.length) || 0;
    if (t >= s) {
      ae(this.options.storageKey);
      return;
    }
    ve(this.options.storageKey, {
      guideId: this.guide.id,
      guide: this.guide,
      stepIndex: t,
      resumeAnyUrl: !0,
      mayNavigate: !!e,
      savedAt: Date.now()
    });
  }
  resumePendingPlay({ soft: t = !1 } = {}) {
    const e = an(this.options.storageKey);
    if (!(e != null && e.guideId) && !(e != null && e.guide)) return;
    const s = !!e.resumeAnyUrl, i = Y(e.urlKey || "/"), r = Y(this.getUrlKey());
    if (e.urlKey && !s && i !== r) {
      t && (ve(this.options.storageKey, e), window.setTimeout(() => this.resumePendingPlay({ soft: !0 }), 300));
      return;
    }
    const o = t ? 120 : Math.max(0, Number(this.settings.resetBeforePlayDelay || this.options.resetBeforePlayDelay) || 450);
    window.setTimeout(() => {
      var c, l;
      if (this.destroyed) return;
      let a = this.getAllGuides().find((d) => d.id === e.guideId);
      if (!a && e.guide)
        try {
          a = vt(e.guide);
        } catch {
          a = null;
        }
      if (!a) {
        (c = globalThis.alert) == null || c.call(globalThis, "The page guide could not be resumed after navigation.");
        return;
      }
      try {
        const d = t ? Math.max(0, Number(e.stepIndex) || 0) : 0;
        this.startPageGuide(a, { skipReset: !0, stepIndex: d });
      } catch (d) {
        (l = globalThis.alert) == null || l.call(globalThis, `Could not resume page guide: ${d.message}`);
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
    const e = Nt(this.settings), s = t != null && t.settings && typeof t.settings == "object" ? t.settings : {};
    return {
      reloadOnNavigate: s.reloadOnNavigate != null ? !!s.reloadOnNavigate : e.reloadOnNavigate,
      resetBeforePlay: s.resetBeforePlay === "reload" || s.resetBeforePlay === "none" ? s.resetBeforePlay : e.resetBeforePlay,
      resetBeforePlayDelay: Number.isFinite(Number(s.resetBeforePlayDelay)) ? Math.max(0, Number(s.resetBeforePlayDelay)) : e.resetBeforePlayDelay
    };
  }
  openManageRoutes() {
    return this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.mode = "manage-routes", this.render(), this.openPanel(), this);
  }
  openGuideForEdit(t) {
    var s;
    if (this.assertUsable(), this.readOnly) return this;
    const e = this.getAllGuides().find((i) => i.id === t);
    return e ? (this.load(e, { dirty: !1, mode: "manage" }), this.openPanel(), this) : ((s = globalThis.alert) == null || s.call(globalThis, "Guide not found."), this);
  }
  updateSetting(t, e) {
    var r, o, a, c, l, d, h, p;
    if (this.readOnly && (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "reloadOnNavigate" || t === "resetBeforePlay" || t === "resetBeforePlayDelay" || t === "theme" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.")))
      return this;
    const s = Nt({ ...this.settings });
    if (t === "reloadOnNavigate" && (s.reloadOnNavigate = !!e), t === "resetBeforePlay" && (s.resetBeforePlay = e ? "reload" : "none"), t === "resetBeforePlayDelay" && (s.resetBeforePlayDelay = Math.max(0, Number(e) || 0)), t === "theme" && (s.theme = String(e || "dark").toLowerCase() === "light" ? "light" : "dark"), t === "editorAccountIds" && (s.editorAccountIds = e), t === "hiddenUrls" && (s.hiddenUrls = e), t === "bypassPin" && (s.bypassPin = e), t === "showAccountId" && (s.showAccountId = !!e), String(t || "").startsWith("launcher.")) {
      const u = String(t).slice(9), g = { ...s.launcher };
      u === "size" && (g.size = Number(e)), u === "position" && (g.position = String(e || "bottom-right")), u === "animations" && (g.animations = !!e), s.launcher = g;
    }
    if (String(t || "").startsWith("ui.")) {
      const u = String(t).slice(3), g = { ...s.ui };
      if (u === "animations" || u === "spotlightFade" || u === "animatedCursor")
        g[u] = !!e;
      else if (u === "highlightMotion")
        g.highlightMotion = String(e || "pulse");
      else if (u === "overlayOpacity") {
        const f = Number(e);
        g.overlayOpacity = Number.isFinite(f) ? Math.min(0.9, Math.max(0, f > 1 ? f / 100 : f)) : g.overlayOpacity;
      } else u === "transitionMs" ? g.transitionMs = Math.max(0, Math.round(Number(e) || 0)) : u === "fontFamily" ? g.fontFamily = String(e || "system") : ["tipBg", "tipText", "skipBg", "skipText", "spotlightColor"].includes(u) && (g[u] = String(e || ""));
      s.ui = g;
    }
    return this.settings = Nt(s), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, oe(this.settings), (o = (r = this.overlay) == null ? void 0 : r.applyUiSettings) == null || o.call(r, this.settings.ui), (c = (a = this.player) == null ? void 0 : a.setUiOptions) == null || c.call(a, this.settings.ui), (d = (l = this.launcher) == null ? void 0 : l.setLauncherSettings) == null || d.call(l, this.settings.launcher), this.scheduleSettingsSave(), (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin") && this.applyAccessPolicy(), t === "showAccountId" && ((p = (h = this.launcher) == null ? void 0 : h.setShowAccountId) == null || p.call(h, this.settings.showAccountId)), t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.") && (t.includes("Bg") || t.includes("Text") || t.includes("Color") || t === "ui.overlayOpacity" || t === "ui.transitionMs" || t === "ui.fontFamily") || this.render(), this;
  }
  resetUiSettings() {
    var t, e, s, i;
    return this.settings = Nt({
      ...this.settings,
      ui: Ue()
    }), oe(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (i = (s = this.player) == null ? void 0 : s.setUiOptions) == null || i.call(s, this.settings.ui), this.scheduleSettingsSave(), this.render(), this;
  }
  scheduleSettingsSave() {
    clearTimeout(this.settingsSaveTimer), this.settingsSaveTimer = setTimeout(() => {
      this.flushSettingsSave().catch(() => {
      });
    }, 250);
  }
  async flushSettingsSave() {
    var s, i;
    if (!this.fileStorage) return;
    const t = Nt(this.settings), e = await fn(this.fileStorage, t);
    e != null && e.settings && typeof e.settings == "object" && (this.settings = Nt({
      ...this.settings,
      ...e.settings
    }), (i = (s = this.launcher) == null ? void 0 : s.setBypassPin) == null || i.call(s, this.settings.bypassPin), this.applyAccessPolicy());
  }
  editStepSetting(t, e, s) {
    const i = this.guide.steps.find((r) => r.id === t);
    if (i) {
      if (i.settings = { ...i.settings || {} }, e === "delay" || e === "hideDelay") {
        const r = Math.max(0, Math.round(Number(s) || 0));
        r ? i.settings[e] = r : delete i.settings[e];
      }
      e === "autoAdvanceDelay" && (s === "" || s == null ? delete i.settings.autoAdvanceDelay : i.settings.autoAdvanceDelay = Math.max(0, Number(s) || 0)), e === "autoScroll" && (s ? delete i.settings.autoScroll : i.settings.autoScroll = !1), e === "autoSkipMissing" && (s ? delete i.settings.autoSkipMissing : i.settings.autoSkipMissing = !1), Object.keys(i.settings).length === 0 && delete i.settings, this.dirty = !0, this.scheduleGuideSave();
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
        Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((e) => e.id === this.guide.id ? { ...this.guide } : e)), await we(this.fileStorage, this.guide, t);
        return;
      }
      if (this.options.guidesByUrl) {
        be(this.options.storageKey, Y(this.guide.url || this.getUrlKey()), this.guide);
        return;
      }
      this.persistDraft();
    }
  }
  editGuideSetting(t, e, s) {
    var o, a, c;
    const i = t || ((o = this.guide) == null ? void 0 : o.id);
    let r = ((a = this.guide) == null ? void 0 : a.id) === i ? this.guide : this.getAllGuides().find((l) => l.id === i);
    if (!r) return this;
    if (r = { ...r, settings: { ...r.settings || {} } }, e === "autoScroll" && (s ? delete r.settings.autoScroll : r.settings.autoScroll = !1), e === "reloadOnNavigate" && (s ? r.settings.reloadOnNavigate = !0 : delete r.settings.reloadOnNavigate), e === "resetBeforePlay" && (s ? r.settings.resetBeforePlay = "reload" : delete r.settings.resetBeforePlay), Object.keys(r.settings).length === 0 && delete r.settings, ((c = this.guide) == null ? void 0 : c.id) === r.id && (this.guide = r, this.dirty = !0, this.persistDraft()), Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((l) => l.id === r.id ? { ...l, ...r } : l)), this.fileStorage) {
      const l = Y(r.url || this.getUrlKey());
      we(this.fileStorage, r, l).then(() => this.reloadFileGuides()).catch(() => {
      });
    } else this.options.guidesByUrl && be(this.options.storageKey, Y(r.url || "/"), r);
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
    var e, s, i, r, o, a, c, l, d, h, p, u, g, f, b, m, v, w;
    const t = this.getAllGuides().length;
    (e = this.launcher) == null || e.setApiReady(this.apiReady), (s = this.launcher) == null || s.setReadOnly(this.readOnly), (o = (i = this.launcher) == null ? void 0 : i.setBypassPin) == null || o.call(i, (r = this.settings) == null ? void 0 : r.bypassPin), (l = (a = this.launcher) == null ? void 0 : a.setShowAccountId) == null || l.call(a, !!((c = this.settings) != null && c.showAccountId)), (p = (d = this.launcher) == null ? void 0 : d.setLauncherSettings) == null || p.call(d, (h = this.settings) == null ? void 0 : h.launcher), (g = (u = this.launcher) == null ? void 0 : u.setAccountId) == null || g.call(u, this.accountId), (f = this.launcher) == null || f.setVisible(this.launcherVisible), (b = this.launcher) == null || b.setSearchData(this.getAllGuides(), this.getUrlKey()), (m = this.launcher) == null || m.setPlayState(t), (v = this.launcher) == null || v.setPanelOpen(this.panelVisible), (w = this.launcher) == null || w.setPlaying(this.mode === "playback");
  }
  onUrlChange() {
    if (this.applyAccessPolicy(), this.mode === "recording") return;
    if (this.mode === "playback") {
      this.rebindPlaybackAfterNavigation();
      return;
    }
    const t = this.mode === "manage-routes" && !this.readOnly, e = this.getGuideForCurrentPage();
    e ? this.load(e, { dirty: !1, mode: t ? "manage-routes" : "idle" }) : (this.guide = le(this.getUrlKey()), this.mode = t ? "manage-routes" : "idle", this.dirty = !1, this.render()), this.syncLauncher();
  }
  render(t = {}) {
    var i, r, o;
    const e = this.guide.steps.map((a) => ({
      ...a,
      invalid: a.action !== "manual" && !te(a.selector)
    })), s = !!this.focusGuideTitle;
    this.focusGuideTitle = !1, this.panel.update({
      mode: this.mode,
      steps: e,
      guideTitle: this.guide.title,
      pageUrl: this.getUrlKey(),
      hasPageGuide: this.hasGuideForCurrentPage(),
      pageGuides: this.getGuidesForCurrentPage().map((a) => {
        var c;
        return {
          id: a.id,
          title: a.title,
          steps: ((c = a.steps) == null ? void 0 : c.length) || 0,
          url: a.url
        };
      }),
      allGuides: this.getAllGuides().map((a) => {
        var c;
        return {
          id: a.id,
          title: a.title,
          steps: ((c = a.steps) == null ? void 0 : c.length) || 0,
          url: a.url,
          settings: a.settings || {}
        };
      }),
      settings: { ...this.settings },
      guideSettings: ((i = this.guide) == null ? void 0 : i.settings) || {},
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
    return this.assertUsable(), this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.guide = le(this.getUrlKey()), this.dirty = !1, this.recordingAppend = !1, this.recordingStepsBaseline = 0, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  /** Append more recorded interactions to the current guide (from Manage steps). */
  continueRecording() {
    return this.assertUsable(), this.readOnly ? this : (this.guide || (this.guide = le(this.getUrlKey())), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.recordingAppend = !0, this.recordingStepsBaseline = this.guide.steps.length, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  stopRecording() {
    this.assertUsable(), this.recorder.stop(), this.mode = "manage", this.dirty = this.guide.steps.length > 0, this.guide.url = this.getUrlKey();
    const t = !!this.recordingAppend, e = Math.max(0, this.guide.steps.length - (Number(this.recordingStepsBaseline) || 0));
    this.recordingAppend = !1, this.recordingStepsBaseline = this.guide.steps.length;
    const s = (/* @__PURE__ */ new Date()).toLocaleString(), i = `${this.guide.steps.length} step${this.guide.steps.length === 1 ? "" : "s"} · ${s}`;
    return !!(this.guide.title && this.guide.title !== `Guide for ${this.guide.url}` && !/^\d+ steps? · /.test(this.guide.title)) || (this.guide.title = i), this.focusGuideTitle = !t, this.persistDraft(), this.guide.steps.length && this.saveGuideForCurrentPage(), this.render({
      flashMessage: t && e > 0 ? `${e} step${e === 1 ? "" : "s"} added. Rename below if needed.` : "Guide saved. Rename it below if you want a clearer title."
    }), structuredClone(this.guide);
  }
  recordStep(t) {
    var e, s;
    this.guide.steps.push(t), this.dirty = !0, this.persistDraft(), (s = (e = this.options).onRecordStep) == null || s.call(e, structuredClone(t)), this.render();
  }
  load(t, { dirty: e = !1, mode: s = "manage" } = {}) {
    this.assertUsable();
    const i = typeof t == "string" ? JSON.parse(t) : t;
    return this.guide = vt(i), this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.mode = s, this.dirty = e, this.render(), this;
  }
  updateSteps(t) {
    return this.guide.steps = vt({ ...this.guide, steps: t }).steps, this.changed(), this;
  }
  removeStep(t) {
    var i;
    const e = String(t || "").trim();
    if (!e || !((i = this.guide) != null && i.steps)) return this;
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
    const i = this.guide.steps.findIndex((a) => String(a.id) === s);
    if (i < 0) return this;
    const r = Math.max(0, Math.min(Number(e), this.guide.steps.length - 1));
    if (r === i) return this;
    const [o] = this.guide.steps.splice(i, 1);
    return this.guide.steps.splice(r, 0, o), this.changed(), this;
  }
  moveRelative(t, e) {
    const s = String(t || "").trim();
    if (!s || !e) return this;
    const i = this.guide.steps.findIndex((r) => String(r.id) === s);
    return i < 0 ? this : this.moveStep(s, i + e);
  }
  /** Move a step to a 1-based position (e.g. 1 = first step). */
  moveToPosition(t, e) {
    const s = String(t || "").trim(), i = Math.floor(Number(e));
    return !s || !Number.isFinite(i) || i < 1 ? this : this.moveStep(s, i - 1);
  }
  dropStep(t, e) {
    const s = String(t || "").trim(), i = String(e || "").trim();
    if (!s || !i || s === i) return this;
    const r = this.guide.steps.findIndex((o) => String(o.id) === i);
    return r < 0 ? this : this.moveStep(s, r);
  }
  editStep(t, e, s) {
    const i = this.guide.steps.find((r) => r.id === t);
    i && (e === "waitRequired" ? i.waitFor = s ? { type: "input", required: !0 } : null : ["title", "description"].includes(e) && (i[e] = String(s)), this.dirty = !0, this.persistDraft(), ["title", "description"].includes(e) && this.scheduleGuideSave(), e === "waitRequired" && this.render());
  }
  editGuide(t, e) {
    if (t !== "title") return;
    const s = String(e).trim() || this.guide.title;
    this.guide.title = s, this.dirty = !0, this.persistDraft(), Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((i) => i.id === this.guide.id ? { ...i, title: s } : i)), this.syncLauncher();
  }
  commitGuideTitle() {
    var t, e;
    return (e = (t = this.guide) == null ? void 0 : t.steps) != null && e.length ? this.saveGuideForCurrentPage() : this;
  }
  changed() {
    var t;
    if (this.dirty = !0, this.persistDraft(), Array.isArray(this.fileGuides) && ((t = this.guide) != null && t.id)) {
      const e = structuredClone(this.guide), s = this.fileGuides.findIndex((i) => i.id === this.guide.id);
      s >= 0 ? this.fileGuides[s] = e : this.fileGuides = [...this.fileGuides, e];
    }
    this.scheduleGuideSave(), this.render();
  }
  preview(t) {
    const e = this.guide.steps.find((i) => i.id === t), s = e && te(e.selector);
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
    var i, r;
    (r = (i = this.options).onStepChange) == null || r.call(i, structuredClone(t), e), this.render({
      currentStep: t,
      currentIndex: e,
      total: this.guide.steps.length,
      ...s
    });
  }
  onPlaybackFail(t, e) {
    var s, i, r, o;
    (i = (s = this.options).onStepFail) == null || i.call(s, structuredClone(t), e), this.render({
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
    ae(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), (e = (t = this.options).onComplete) == null || e.call(t);
  }
  endPlayback() {
    var t;
    return this.mode !== "playback" && !((t = this.player) != null && t.active) ? this : (ae(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), this);
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
    return !this.options.allowClose && !t || this.dirty && !t && globalThis.confirm && !globalThis.confirm("Close with unsaved guide changes?") ? !1 : (this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), ae(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.mode = "idle", this.render(), this.options.showLauncher && this.closePanel(), (s = (e = this.options).onClose) == null || s.call(e), !0);
  }
  exportJSON() {
    return Te(this.guide);
  }
  downloadJSON(t = `${this.guide.id}.json`) {
    return Qi(this.guide, t), this.dirty = !1, this;
  }
  downloadAllGuides() {
    var s;
    this.assertUsable();
    const t = this.getAllGuides();
    if (!t.length)
      return (s = globalThis.alert) == null || s.call(globalThis, "No guides to download yet."), this;
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return tn(t, `system-guider-guides-${e}.json`), this;
  }
  async copyJSON() {
    const t = await en(this.guide);
    return this.dirty = !1, t;
  }
  /** Persist one guide to local map + backend (file storage) without changing the active editor. */
  async persistImportedGuide(t) {
    const e = vt(t), s = Y(e.url || "/");
    if (e.url = s, this.options.guidesByUrl && be(this.options.storageKey, s, e), Array.isArray(this.fileGuides)) {
      const i = this.fileGuides.findIndex((r) => r.id === e.id);
      i >= 0 ? this.fileGuides[i] = { ...e } : this.fileGuides = [...this.fileGuides, { ...e }];
    } else
      this.fileGuides = [{ ...e }];
    return this.fileStorage && await we(this.fileStorage, e, s), e;
  }
  /**
   * Import one or more guides from JSON text/objects/files.
   * Auto-saves each guide to the backend when file storage is enabled.
   */
  async importGuides(t, { sourceLabel: e = "import" } = {}) {
    var c;
    if (this.readOnly) return [];
    this.assertUsable();
    const { guides: s, errors: i } = ds(t), r = [], o = [...i];
    for (const l of s)
      try {
        r.push(await this.persistImportedGuide(l));
      } catch (d) {
        o.push(`${l.title || l.id}: ${d.message}`);
      }
    if (this.fileStorage)
      try {
        await this.reloadFileGuides();
      } catch {
      }
    this.syncLauncher(), this.mode = "manage-routes", this.openPanel();
    const a = r.length ? `Loaded ${r.length} guide${r.length === 1 ? "" : "s"} from ${e}${this.fileStorage ? " and saved to backend" : ""}.` : `No guides loaded from ${e}.`;
    return this.render({ flashMessage: a }), o.length && ((c = globalThis.alert) == null || c.call(
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
      var o, a, c;
      const e = [...t.files || []];
      if (!e.length) return;
      const s = [], i = [];
      for (const l of e)
        try {
          const d = await l.text(), { guides: h, errors: p } = ds(d);
          s.push(...h), i.push(...p.map((u) => `${l.name}: ${u}`));
        } catch (d) {
          i.push(`${l.name}: ${d.message}`);
        }
      if (!s.length) {
        (o = globalThis.alert) == null || o.call(globalThis, i[0] || "No valid guide JSON selected.");
        return;
      }
      const r = [...new Map(s.map((l) => [l.id, l])).values()];
      try {
        await this.importGuides(
          { guides: r },
          { sourceLabel: e.length === 1 ? e[0].name : `${e.length} files` }
        ), i.length && ((a = globalThis.alert) == null || a.call(globalThis, `Loaded with warnings:
${i.slice(0, 8).join(`
`)}`));
      } catch (l) {
        (c = globalThis.alert) == null || c.call(globalThis, `Could not load guides: ${l.message}`);
      }
    }, { once: !0 }), t.click();
  }
  pasteGuide() {
    var e;
    const t = (e = globalThis.prompt) == null ? void 0 : e.call(globalThis, "Paste System Guider JSON (one guide, array, or { guides: [...] })");
    t && this.importGuides(t, { sourceLabel: "clipboard" }).catch((s) => {
      var i;
      (i = globalThis.alert) == null || i.call(globalThis, `Could not load guide: ${s.message}`);
    });
  }
  persistDraft() {
    this.fileStorage || Ji(this.options.storageKey, this.guide);
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
let ce = null;
const vn = {
  init(n = {}) {
    if (typeof window > "u" || typeof document > "u")
      throw new Error("System Guider can only be initialized in a browser.");
    return ce == null || ce.destroy(), ce = new yn(n), ce;
  }
};
export {
  vn as default
};
