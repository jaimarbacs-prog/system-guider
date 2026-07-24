const gt = (n, t, e = "") => {
  const s = document.createElement("button");
  return s.type = "button", s.className = `sg-button ${e ? `sg-button--${e}` : ""}`.trim(), s.dataset.action = t, s.textContent = n, s;
}, A = (n, t, e) => {
  const s = document.createElement(n);
  return s.className = t, s.textContent = e, s;
}, Q = (n, t = "ghost", { icon: e = "", ariaLabel: s = "", withLabel: i = !1 } = {}) => {
  const r = document.createElement("button");
  return r.type = "button", r.className = `sg-button sg-button--tiny ${t ? `sg-button--${t}` : ""}`.trim(), e ? (r.classList.add(i ? "sg-button--with-icon" : "sg-button--icon"), i ? r.innerHTML = `${e}<span>${n}</span>` : r.innerHTML = e, r.setAttribute("aria-label", s || n), r.title = s || n) : r.textContent = n, r;
}, Is = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 3.25v9.5M3.25 8h9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, ts = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.6 2.7a1.5 1.5 0 0 1 2.1 2.1L5.8 12.7 2.5 13.5l.8-3.3L11.6 2.7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
`, Pe = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 4.5h9M6.2 4.5V3.4h3.6v1.1M5.2 4.5l.6 8.1h4.4l.6-8.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, gs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8.2 6.6 11.3 12.5 4.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Rs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, Os = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8h9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`, Gs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.8" width="6.6" height="6.6" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M6.4 5.1h4.4c.9 0 1.6.7 1.6 1.6v4.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, $s = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.4 4.4 11.6 11.6M11.6 4.4 4.4 11.6" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/>
  </svg>
`, Ie = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M5 3.2 12.2 8 5 12.8V3.2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>
`, Ds = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.8v7.2M5.2 7.2 8 10l2.8-2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Hs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M6.2 3.2h3.6v1.5H6.2V3.2Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M5.2 4h-.8A1.4 1.4 0 0 0 3 5.4v7.2A1.4 1.4 0 0 0 4.4 14h7.2A1.4 1.4 0 0 0 13 12.6V5.4A1.4 1.4 0 0 0 11.6 4h-.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, Fs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 9.8V2.8M5.2 5.2 8 2.4l2.8 2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Us = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M2.6 4.4h3.2l1.2 1.3h6.4v6.5H2.6V4.4Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, Ws = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 3.2h3.4A2.2 2.2 0 0 1 8 4.4v8.4a1.8 1.8 0 0 0-1.4-.6H3.2V3.2Zm9.6 0H9.4A2.2 2.2 0 0 0 8 4.4v8.4c.4-.4.9-.6 1.4-.6h3.4V3.2Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
  </svg>
`, Re = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.2" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.6 10.2V3.8A1.2 1.2 0 0 1 4.8 2.6h6.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, es = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" stroke-width="1.35"/>
    <path d="M8 1.8v1.4M8 12.8v1.4M1.8 8h1.4M12.8 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, js = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 4.2h9.6v8.2H3.2V4.2Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.2 2.8h5.6v1.8H5.2V2.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.5 7.2h5M5.5 9.6h3.6" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, qs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="5.4" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.4 13.2c.7-2.4 2.2-3.6 4.6-3.6s3.9 1.2 4.6 3.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, zs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.4 12.6 4.2v3.4c0 2.7-1.8 4.8-4.6 5.8-2.8-1-4.6-3.1-4.6-5.8V4.2L8 2.4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
    <path d="M6.1 8.1 7.4 9.4 10 6.8" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Ks = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="5.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M8 5v3.2l2.2 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Vs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.8 9.8A4.8 4.8 0 0 1 6.2 4.2 5.4 5.4 0 1 0 11.8 9.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, zt = (n) => {
  const t = n == null ? void 0 : n.target;
  return t instanceof Element ? t : (t == null ? void 0 : t.parentElement) instanceof Element ? t.parentElement : null;
}, ss = ({ value: n, placeholder: t, onChange: e, onSave: s, onCancel: i }) => {
  const r = document.createElement("li");
  r.className = "sg-string-list__item sg-string-list__item--draft";
  const o = document.createElement("input");
  o.type = "text", o.className = "sg-field sg-string-list__draft-input", o.value = n, o.placeholder = t, o.setAttribute("aria-label", t || "Value"), o.addEventListener("input", () => e(o.value)), o.addEventListener("keydown", (d) => {
    d.key === "Enter" && (d.preventDefault(), s()), d.key === "Escape" && (d.preventDefault(), i());
  });
  const a = document.createElement("div");
  a.className = "sg-string-list__actions";
  const c = Q("Save", "primary", { icon: gs, ariaLabel: "Save" });
  c.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), s();
  });
  const l = Q("Cancel", "ghost", { icon: Rs, ariaLabel: "Cancel" });
  return l.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), i();
  }), a.append(c, l), r.append(o, a), r;
};
class Zs {
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
    const r = A("span", "sg-recording-indicator__status", "Recording..."), o = document.createElement("span");
    o.className = "sg-recording-indicator__divider", o.setAttribute("aria-hidden", "true");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-recording-indicator__stop", a.title = "Stop recording", a.setAttribute("aria-label", "Stop recording");
    const c = document.createElement("span");
    c.className = "sg-recording-indicator__stop-icon", c.setAttribute("aria-hidden", "true"), c.innerHTML = `
      <svg viewBox="0 0 12 12" focusable="false">
        <rect x="1.5" y="1.5" width="9" height="9" rx="2"/>
      </svg>
    `;
    const l = A("span", "sg-recording-indicator__stop-label", "Stop");
    return a.append(c, l), a.addEventListener("click", (d) => {
      var u, g;
      d.preventDefault(), d.stopPropagation(), (g = (u = this.handlers)["stop-recording"]) == null || g.call(u);
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
    const r = 16, o = e.width, a = e.height, c = window.innerWidth, l = window.innerHeight, d = c - t.right - r, u = t.left - r, g = l - t.bottom - r, h = t.top - r;
    let p = e.left, f = e.top;
    d >= o ? (p = t.right + r, f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8))) : u >= o ? (p = t.left - o - r, f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8))) : g >= Math.min(a, 180) ? (p = this.clampPosition(e.left, 0).left, f = t.bottom + r) : h >= Math.min(a, 180) ? (p = this.clampPosition(e.left, 0).left, f = t.top - a - r) : d >= u ? (p = Math.max(8, Math.min(c - o - 8, t.right + r)), f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8))) : (p = Math.max(8, Math.min(c - o - 8, t.left - o - r)), f = Math.min(Math.max(8, t.top), Math.max(8, l - a - 8)));
    const y = this.clampPosition(p, f);
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
    const s = this.root.querySelector(".sg-panel__body"), i = s ? s.scrollTop : this._bodyScrollTop || 0;
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
    const c = document.createElement("div");
    c.className = "sg-panel__brand-copy", t === "recording" ? c.append(
      A("span", "sg-eyebrow", "● LIVE RECORDING"),
      A("h2", "sg-panel__title", this.titleForMode(t))
    ) : c.append(
      A("h2", "sg-panel__title", "System Guider"),
      A("div", "sg-panel__subtitle", this.titleForMode(t))
    ), o.append(a, c);
    const l = document.createElement("div");
    if (l.className = "sg-panel__header-actions", t === "manage-routes") {
      const h = Q(e ? "Open" : "Minimize", "ghost", {
        icon: e ? Gs : Os,
        ariaLabel: e ? "Open settings" : "Minimize"
      });
      if (h.dataset.action = "toggle-collapse", h.classList.add("sg-panel__chrome-btn", "sg-panel__header-minimize"), h.setAttribute("aria-expanded", String(!e)), l.append(h), !e) {
        const p = Q("Close", "ghost", {
          icon: $s,
          ariaLabel: "Close settings"
        });
        p.dataset.action = "close", p.classList.add("sg-panel__chrome-btn", "sg-panel__header-close"), l.append(p);
      }
    } else {
      const h = gt(e ? "Open" : "Minimize", "toggle-collapse", "ghost");
      h.setAttribute("aria-expanded", String(!e)), l.append(h);
    }
    if (r.append(o, l), this.root.append(r), e) {
      this.applyPosition();
      return;
    }
    const d = document.createElement("div");
    d.className = "sg-panel__body", t === "idle" && this.renderIdle(d), (t === "recording" || t === "manage") && this.renderSteps(d, t), t === "manage-routes" && this.renderManageRoutes(d), this.root.append(d);
    const u = this.renderFooter(t);
    u && this.root.append(u), this.applyPosition();
    const g = t === "recording" && (Number(this.state.newStepsCount) || 0) > 0;
    queueMicrotask(() => {
      const h = this.root.querySelector(".sg-panel__body");
      h && (g ? h.scrollTop = h.scrollHeight : h.scrollTop = i, this._bodyScrollTop = h.scrollTop);
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
    let c = [...s].map((h) => String(h)), l = null, d = "";
    const u = (h) => {
      var p, f;
      c = [...h], l = null, d = "", (f = (p = this.handlers)["update-setting"]) == null || f.call(p, e, c), g();
    }, g = () => {
      a.replaceChildren();
      const h = document.createElement("div");
      h.className = "sg-string-list__head", h.append(A("span", "sg-string-list__label", t));
      const p = Q(o, "secondary", { icon: Is, ariaLabel: o || "Add" });
      p.classList.add("sg-string-list__add"), p.disabled = l !== null, p.addEventListener("click", (y) => {
        var m;
        y.preventDefault(), y.stopPropagation(), l = "add", d = "", g(), (m = a.querySelector(".sg-string-list__draft-input")) == null || m.focus();
      }), h.append(p), a.append(h);
      const f = document.createElement("ul");
      if (f.className = "sg-string-list__items", l === "add" && f.append(ss({
        value: d,
        placeholder: i,
        onChange: (y) => {
          d = y;
        },
        onSave: () => {
          const y = String(d || "").trim();
          if (!y) {
            l = null, d = "", g();
            return;
          }
          if (c.includes(y)) {
            l = null, d = "", g();
            return;
          }
          u([...c, y]);
        },
        onCancel: () => {
          l = null, d = "", g();
        }
      })), !c.length && l !== "add") {
        const y = document.createElement("li");
        y.className = "sg-string-list__empty", y.textContent = r, f.append(y);
      }
      c.forEach((y, m) => {
        if (l === m) {
          f.append(ss({
            value: d,
            placeholder: i,
            onChange: (E) => {
              d = E;
            },
            onSave: () => {
              const E = String(d || "").trim();
              if (!E) {
                l = null, d = "", g();
                return;
              }
              const k = [...c];
              k[m] = E, u([...new Set(k)]);
            },
            onCancel: () => {
              l = null, d = "", g();
            }
          }));
          return;
        }
        const v = document.createElement("li");
        v.className = "sg-string-list__item";
        const w = document.createElement("code");
        w.className = "sg-string-list__value", w.textContent = y, w.title = y;
        const C = document.createElement("div");
        C.className = "sg-string-list__actions";
        const x = Q("Edit", "ghost", { icon: ts, ariaLabel: "Edit" });
        x.disabled = l !== null, x.addEventListener("click", (E) => {
          var k, M;
          E.preventDefault(), E.stopPropagation(), l = m, d = y, g(), (k = a.querySelector(".sg-string-list__draft-input")) == null || k.focus(), (M = a.querySelector(".sg-string-list__draft-input")) == null || M.select();
        });
        const _ = Q("Delete", "danger", { icon: Pe, ariaLabel: "Delete" });
        _.disabled = l !== null, _.addEventListener("click", (E) => {
          E.preventDefault(), E.stopPropagation(), u(c.filter((k, M) => M !== m));
        }), C.append(x, _), v.append(w, C), f.append(v);
      }), a.append(f);
    };
    return g(), a;
  }
  renderIdle(t) {
    t.append(
      A("p", "sg-lead", "Record actions, refine the steps, then replay a polished walkthrough.")
    ), this.state.pageUrl && t.append(A("p", "sg-page-key", `Page: ${this.state.pageUrl}`)), this.renderPageGuidesList(t);
    const e = document.createElement("div");
    e.className = "sg-empty", e.append(
      A("strong", "", this.state.hasPageGuide ? "Guide ready for this page" : "Ready when you are"),
      A(
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
    s.className = "sg-page-guides sg-settings-content__section", s.append(A("div", "sg-page-guides__label", "Saved guides on this page"));
    const i = document.createElement("ul");
    i.className = "sg-page-guides__list", e.forEach((r, o) => {
      const a = document.createElement("li");
      a.className = "sg-page-guides__item", r.id === this.state.currentGuideId && a.classList.add("is-current");
      const c = document.createElement("strong"), l = String(r.title || `Guide ${o + 1}`).trim(), d = l.split(" · "), u = (d[0] || `Guide ${o + 1}`).trim(), g = d.slice(1).join(" · ").trim(), h = /^\d+\s+steps?$/i.test(u);
      c.textContent = h ? g || `Guide ${o + 1}` : l;
      const p = document.createElement("span");
      p.textContent = `${r.steps} step${r.steps === 1 ? "" : "s"}`, a.append(c, p), i.append(a);
    }), s.append(i), t.append(s);
  }
  renderSteps(t, e) {
    var i, r;
    if (this.state.flashMessage && t.append(A("p", "sg-status", this.state.flashMessage)), e === "recording") {
      const o = !!this.state.recordingAppend, a = Number(this.state.newStepsCount) || 0, c = document.createElement("p");
      c.className = "sg-lead", o ? c.textContent = a > 0 ? `Keep going — ${a} new step${a === 1 ? "" : "s"} added. Interact again for more, then Stop Recording.` : "Interact with the page as many times as you need. Each action becomes a new step. Click Stop Recording when done." : c.textContent = a > 0 ? `Capturing… ${a} step${a === 1 ? "" : "s"} so far. Keep interacting, then Stop Recording.` : "Perform the flow on screen. Add as many steps as you need, then Stop Recording.", t.append(c);
    }
    if (e === "manage") {
      const o = this.state.steps.length, a = document.createElement("section");
      a.className = "sg-guide-editor";
      const c = document.createElement("div");
      c.className = "sg-guide-field sg-guide-field--rename";
      const l = document.createElement("span");
      l.className = "sg-guide-field__label-row";
      const d = document.createElement("span");
      d.className = "sg-guide-field__label-left";
      const u = document.createElement("span");
      u.className = "sg-guide-field__label-icon", u.setAttribute("aria-hidden", "true"), u.innerHTML = js, d.append(u, document.createTextNode("Guide name")), this.state.dirty && d.append(A("em", "sg-guide-editor__badge", "Unsaved"));
      const g = Q("Save", "primary", { icon: gs, withLabel: !0, ariaLabel: "Save guide" });
      g.dataset.action = "save-page", g.classList.add("sg-guide-field__save"), g.disabled = this.state.steps.length === 0, l.append(d, g), c.append(l);
      const h = document.createElement("input");
      h.className = "sg-field sg-field--guide-title", h.value = this.state.guideTitle || "", h.dataset.guideField = "title", h.placeholder = "Example: Create employee schedule", h.setAttribute("aria-label", "Guide name"), h.addEventListener("keydown", (M) => {
        M.key === "Enter" && (M.preventDefault(), h.blur());
      }), h.addEventListener("blur", () => {
        var M, P;
        (P = (M = this.handlers).commitGuideTitle) == null || P.call(M);
      }), c.append(h);
      const p = document.createElement("details");
      p.className = "sg-step-settings sg-guide-settings";
      const f = document.createElement("summary");
      f.className = "sg-step-settings__summary sg-step-settings__summary--split", f.innerHTML = '<span>Guide options</span><span class="sg-step-settings__chevron" aria-hidden="true">▾</span>', p.append(f);
      const y = document.createElement("div");
      y.className = "sg-step-settings__body";
      const m = document.createElement("label");
      m.className = "sg-check";
      const v = document.createElement("input");
      v.type = "checkbox", v.dataset.guideSetting = "reloadOnNavigate", v.checked = !!((i = this.state.guideSettings) != null && i.reloadOnNavigate), m.append(v, document.createTextNode(" Reload on other route"));
      const w = document.createElement("label");
      w.className = "sg-check";
      const C = document.createElement("input");
      C.type = "checkbox", C.dataset.guideSetting = "resetBeforePlay", C.checked = ((r = this.state.guideSettings) == null ? void 0 : r.resetBeforePlay) === "reload", w.append(C, document.createTextNode(" Reload before play")), y.append(m, w), p.append(y), c.append(p), a.append(c);
      const x = document.createElement("div");
      x.className = "sg-guide-editor__steps";
      const _ = document.createElement("div");
      _.className = "sg-guide-editor__steps-head";
      const E = document.createElement("div");
      E.className = "sg-guide-editor__steps-meta", E.append(
        A("span", "sg-guide-editor__steps-label", "Steps"),
        A("span", "sg-guide-editor__steps-count", String(o))
      );
      const k = gt("Add steps", "add-steps", "secondary");
      k.classList.add("sg-button--compact", "sg-guide-editor__add-steps"), _.append(E, k), x.append(_), a.append(x), t.append(a), this._stepsBlock = x, this.state.focusGuideTitle && queueMicrotask(() => {
        h.focus(), h.select();
      });
    } else
      this._stepsBlock = null;
    if (!this.state.steps.length) {
      const o = A("div", "sg-empty", e === "manage" ? "No steps in this guide yet." : "No steps yet — start interacting with the page.");
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
      const u = document.createElement("div");
      u.className = "sg-step__top";
      const g = document.createElement("div");
      if (g.className = "sg-step__top-left", e === "manage") {
        const _ = document.createElement("span");
        _.className = "sg-step__drag", _.draggable = !0, _.title = "Drag to reorder", _.setAttribute("aria-label", `Drag step ${a + 1}`), _.textContent = "⋮⋮", _.addEventListener("dragstart", (E) => {
          E.dataTransfer.setData("text/plain", o.id), E.dataTransfer.effectAllowed = "move", c.classList.add("sg-step--dragging");
        }), _.addEventListener("dragend", () => {
          c.classList.remove("sg-step--dragging");
        }), g.append(_);
      }
      if (g.append(
        A("span", "sg-step__number", String(a + 1)),
        A("span", "sg-step__action", o.action)
      ), d && g.append(A("span", "sg-step__new", "New")), o.invalid && g.append(A("span", "sg-step__warning", "Target missing")), u.append(g), e === "manage") {
        const _ = document.createElement("div");
        _.className = "sg-step__top-right";
        const E = Q("Play", "ghost", { icon: Ie, withLabel: !0, ariaLabel: "Play from here" });
        E.classList.add("sg-step__play"), E.addEventListener("click", (M) => {
          var P, R;
          M.preventDefault(), M.stopPropagation(), (R = (P = this.handlers)["play-here"]) == null || R.call(P, o.id);
        });
        const k = Q("Remove", "danger", { icon: Pe, ariaLabel: "Remove step" });
        k.classList.add("sg-step__remove-icon"), k.addEventListener("click", (M) => {
          var P, R;
          M.preventDefault(), M.stopPropagation(), (R = (P = this.handlers).remove) == null || R.call(P, o.id);
        }), _.append(E, k), u.append(_);
      }
      const h = document.createElement("input");
      h.className = "sg-field sg-step__title", h.value = o.title, h.dataset.field = "title", h.disabled = e === "recording", h.placeholder = "Step title", h.setAttribute("aria-label", `Step ${a + 1} title`);
      const p = document.createElement("div");
      p.className = "sg-step__selector-wrap";
      const f = A("code", "sg-step__selector", o.selector || "No target");
      if (p.append(f), e === "manage" && o.selector) {
        const _ = Q("Copy", "ghost", { icon: Re, ariaLabel: "Copy selector" });
        _.classList.add("sg-step__selector-copy"), _.addEventListener("click", async (E) => {
          var k, M;
          E.preventDefault(), E.stopPropagation();
          try {
            await ((M = (k = navigator.clipboard) == null ? void 0 : k.writeText) == null ? void 0 : M.call(k, String(o.selector))), _.title = "Copied", setTimeout(() => {
              _.title = "Copy selector";
            }, 1e3);
          } catch {
          }
        }), p.append(_);
      }
      const y = document.createElement("div");
      if (y.className = "sg-step__body", y.append(h, p), c.append(u, y), e === "manage" || e === "recording") {
        const _ = document.createElement("div");
        _.className = "sg-step__controls";
        const E = (P, R, J = "") => {
          const q = gt(P, R, J);
          return q.classList.add("sg-button--compact"), q.addEventListener("click", (T) => {
            var O, G;
            T.preventDefault(), T.stopPropagation(), (G = (O = this.handlers)[R]) == null || G.call(O, o.id);
          }), q;
        }, k = document.createElement("div");
        k.className = "sg-step__controls-left";
        const M = document.createElement("div");
        if (M.className = "sg-step__controls-right", e === "manage") {
          if (o.action === "input") {
            const q = document.createElement("label");
            q.className = "sg-check sg-check--compact";
            const T = document.createElement("input");
            T.type = "checkbox", T.dataset.field = "waitRequired", T.checked = !!((m = o.waitFor) != null && m.required), q.append(T, document.createTextNode(" Require value")), k.append(q);
          }
          const P = this.state.steps.length, R = a + 1, J = (q) => {
            const T = document.createElement("div");
            T.className = "sg-step__move-picker";
            const O = q === "up", G = gt(O ? "↑" : "↓", "", "ghost");
            G.classList.add("sg-button--compact", "sg-step__move-btn"), G.setAttribute("aria-haspopup", "listbox"), G.setAttribute("aria-expanded", "false"), G.title = O ? "Move to an earlier step" : "Move to a later step", G.setAttribute("aria-label", O ? `Move step ${R} to an earlier position` : `Move step ${R} to a later position`);
            const V = O ? Array.from({ length: a }, (I, $) => R - 1 - $) : Array.from({ length: P - R }, (I, $) => R + 1 + $);
            V.length || (G.disabled = !0);
            const z = document.createElement("div");
            return z.className = "sg-step__move-menu", z.hidden = !0, z.setAttribute("role", "listbox"), z.setAttribute("aria-label", O ? "Earlier step numbers" : "Later step numbers"), V.forEach((I) => {
              const $ = document.createElement("button");
              $.type = "button", $.className = "sg-step__move-option", $.textContent = String(I), $.setAttribute("role", "option"), $.title = `Move to step ${I}`, $.addEventListener("click", (et) => {
                var tt, ct;
                et.preventDefault(), et.stopPropagation(), this.closeMoveMenus(), (ct = (tt = this.handlers)["move-to"]) == null || ct.call(tt, o.id, I);
              }), z.append($);
            }), G.addEventListener("click", (I) => {
              if (I.preventDefault(), I.stopPropagation(), G.disabled) return;
              const $ = z.hidden;
              this.closeMoveMenus(), $ && (z.hidden = !1, G.setAttribute("aria-expanded", "true"));
            }), T.append(G, z), T;
          };
          k.append(J("up"), J("down"));
        } else
          M.append(
            E("Play", "play-here", "ghost"),
            E("Remove", "remove", "danger")
          );
        if (_.append(k), M.childNodes.length && _.append(M), e === "manage") {
          const P = document.createElement("details");
          P.className = "sg-step-settings";
          const R = document.createElement("summary");
          R.className = "sg-step-settings__summary sg-step-settings__summary--split", R.innerHTML = `
            <span class="sg-step-settings__summary-left">
              <span class="sg-step-settings__gear" aria-hidden="true">${es}</span>
              Settings
            </span>
            <span class="sg-step-settings__chevron" aria-hidden="true">▾</span>
          `, P.append(R);
          const J = document.createElement("div");
          J.className = "sg-step-settings__body";
          const q = document.createElement("label");
          q.className = "sg-step-settings__field", q.append(document.createTextNode("Step description"));
          const T = document.createElement("textarea");
          T.className = "sg-field sg-step__description", T.rows = 2, T.value = o.description || "", T.dataset.field = "description", T.placeholder = "Shown next to the highlight while playing", T.setAttribute("aria-label", `Step ${a + 1} description`), q.append(T);
          const O = document.createElement("label");
          O.className = "sg-check";
          const G = document.createElement("input");
          G.type = "checkbox", G.dataset.stepSetting = "autoScroll", G.checked = ((v = o.settings) == null ? void 0 : v.autoScroll) !== !1, O.append(G, document.createTextNode(" Auto-scroll"));
          const V = document.createElement("label");
          V.className = "sg-step-settings__field", V.append(document.createTextNode("Show delay (ms)"));
          const z = document.createElement("input");
          z.type = "number", z.min = "0", z.step = "50", z.className = "sg-field", z.value = String(((w = o.settings) == null ? void 0 : w.delay) ?? 0), z.dataset.stepSetting = "delay", V.append(z);
          const I = document.createElement("label");
          I.className = "sg-step-settings__field", I.append(document.createTextNode("Hide delay (ms)"));
          const $ = document.createElement("input");
          $.type = "number", $.min = "0", $.step = "50", $.className = "sg-field", $.value = String(((C = o.settings) == null ? void 0 : C.hideDelay) ?? 0), $.dataset.stepSetting = "hideDelay", I.append($);
          const et = document.createElement("label");
          et.className = "sg-check";
          const tt = document.createElement("input");
          tt.type = "checkbox", tt.dataset.stepSetting = "autoSkipMissing", tt.checked = ((x = o.settings) == null ? void 0 : x.autoSkipMissing) !== !1, et.append(tt, document.createTextNode(" Auto-skip if missing")), J.append(q, O, V, I, et), P.append(J), c.append(_, P);
        } else
          c.append(_);
      }
      s.append(c);
    }), e === "manage" && this._stepsBlock ? this._stepsBlock.append(s) : t.append(s);
  }
  renderManageRoutes(t) {
    this.state.flashMessage && t.append(A("p", "sg-status", this.state.flashMessage));
    const e = this.state.settings || {}, s = Array.isArray(this.state.allGuides) ? this.state.allGuides : [], i = document.createElement("div");
    i.className = "sg-page-guides";
    const r = document.createElement("div");
    r.className = "sg-page-guides__label-row";
    const o = document.createElement("span");
    if (o.className = "sg-page-guides__label-icon", o.setAttribute("aria-hidden", "true"), o.innerHTML = Ws, r.append(o, A("div", "sg-page-guides__label", `All guides (${s.length})`)), i.append(r), !s.length)
      i.append(A("p", "sg-lead", "No guides saved yet."));
    else {
      const N = /* @__PURE__ */ new Map();
      s.forEach((B) => {
        const L = B.url || "/";
        N.has(L) || N.set(L, []), N.get(L).push(B);
      }), [...N.entries()].sort((B, L) => B[0].localeCompare(L[0])).forEach(([B, L]) => {
        const j = document.createElement("div");
        j.className = "sg-manage-section";
        const it = document.createElement("div");
        it.className = "sg-manage-section__path";
        const mt = document.createElement("span");
        mt.className = "sg-manage-section__path-icon", mt.setAttribute("aria-hidden", "true"), mt.innerHTML = Us, it.append(mt, document.createTextNode(B)), j.append(it);
        const te = document.createElement("ul");
        te.className = "sg-page-guides__list", L.forEach((_t) => {
          const yt = document.createElement("li");
          yt.className = "sg-page-guides__item sg-page-guides__item--actions", yt.dataset.guideId = _t.id;
          const Le = document.createElement("div");
          Le.className = "sg-page-guides__copy";
          const Me = document.createElement("div");
          Me.className = "sg-page-guides__head";
          const Ne = document.createElement("div");
          Ne.className = "sg-page-guides__title-row";
          const Je = String(_t.title || "Untitled").split(" · "), Ye = (Je[0] || "Untitled").trim(), Qe = Je.slice(1).join(" · ").trim(), Ps = `${_t.steps} step${_t.steps === 1 ? "" : "s"}`, Ae = /^(\d+)\s+steps?$/i.test(Ye), ie = document.createElement("div");
          if (ie.className = "sg-page-guides__title-line", !Ae) {
            const ht = document.createElement("strong");
            ht.textContent = Ye, ie.append(ht);
          }
          if (Qe) {
            const ht = document.createElement("span");
            ht.className = `sg-page-guides__meta${Ae ? " sg-page-guides__meta--solo" : ""}`, ht.textContent = Qe, ie.append(ht);
          } else if (Ae) {
            const ht = document.createElement("span");
            ht.className = "sg-page-guides__meta sg-page-guides__meta--solo", ht.textContent = "Untitled guide", ie.append(ht);
          }
          const Be = document.createElement("span");
          Be.className = "sg-page-guides__badge", Be.textContent = Ps, Ne.append(ie, Be), Me.append(Ne), Le.append(Me);
          const fe = document.createElement("div");
          fe.className = "sg-page-guides__actions";
          const ne = Q("Play", "secondary", { icon: Ie, ariaLabel: "Play guide" });
          if (ne.classList.add("sg-page-guides__action", "sg-page-guides__action--play"), ne.dataset.action = "play-guide", ne.dataset.guideId = _t.id, this.state.readOnly)
            fe.append(ne);
          else {
            const ht = Q("Edit", "secondary", { icon: ts, ariaLabel: "Edit steps" });
            ht.classList.add("sg-page-guides__action", "sg-page-guides__action--edit"), ht.dataset.action = "edit-guide", ht.dataset.guideId = _t.id;
            const me = Q("Delete", "danger", { icon: Pe, ariaLabel: "Delete guide" });
            me.classList.add("sg-page-guides__action", "sg-page-guides__action--delete"), me.dataset.action = "delete-guide", me.dataset.guideId = _t.id, fe.append(ht, ne, me);
          }
          yt.append(Le, fe), te.append(yt);
        }), j.append(te), i.append(j);
      });
    }
    const a = document.createElement("div");
    a.className = "sg-guides-tools";
    const c = Q("Load", "secondary", { icon: Ds, withLabel: !0 });
    c.dataset.action = "load";
    const l = Q("Paste", "secondary", { icon: Hs, withLabel: !0 });
    l.dataset.action = "paste";
    const d = Q("Export", "primary", { icon: Fs, withLabel: !0 });
    d.dataset.action = "download-all", a.append(c, l, d), i.append(a), t.append(i);
    const u = document.createElement("div");
    u.className = "sg-settings sg-settings--nested sg-settings-card sg-account-panel";
    const g = document.createElement("div");
    g.className = "sg-account-panel__head";
    const h = document.createElement("span");
    h.className = "sg-account-panel__head-icon", h.setAttribute("aria-hidden", "true"), h.innerHTML = qs, g.append(h, A("div", "sg-page-guides__label", "Current account")), u.append(g);
    const p = this.state.accountId, f = !(p == null || p === ""), y = document.createElement("div");
    y.className = `sg-account-card${f ? "" : " sg-account-card--empty"}`;
    const m = document.createElement("div");
    m.className = "sg-account-card__left";
    const v = document.createElement("span");
    v.className = "sg-account-card__badge", v.textContent = "ID";
    const w = document.createElement("div");
    w.className = "sg-account-card__meta", w.append(A("span", "sg-account-card__caption", "Your account ID"));
    const C = document.createElement("strong");
    if (C.className = "sg-account-card__value", C.textContent = f ? String(p) : "Not signed in", C.title = f ? "Logged-in account ID from the host app" : "Host app has not passed an account ID yet", w.append(C), m.append(v, w), y.append(m), f) {
      const N = Q("Copy", "secondary", {
        icon: Re,
        withLabel: !0,
        ariaLabel: "Copy account ID"
      });
      N.classList.add("sg-account-card__copy"), N.addEventListener("click", async (B) => {
        var it, mt;
        B.preventDefault(), B.stopPropagation();
        const L = String(p), j = N.querySelector("span");
        try {
          await ((mt = (it = navigator.clipboard) == null ? void 0 : it.writeText) == null ? void 0 : mt.call(it, L)), j ? j.textContent = "Copied" : N.textContent = "Copied", setTimeout(() => {
            j ? j.textContent = "Copy" : N.innerHTML = `${Re}<span>Copy</span>`;
          }, 1200);
        } catch {
          j ? j.textContent = L : N.textContent = L;
        }
      }), y.append(N);
    }
    u.append(y);
    const x = document.createElement("p");
    x.className = "sg-account-panel__hint";
    const _ = document.createElement("span");
    _.className = "sg-account-panel__hint-icon", _.setAttribute("aria-hidden", "true"), _.innerHTML = zs;
    const E = document.createElement("span");
    f ? E.innerHTML = "Add this ID under <strong>Access</strong> to allow editing." : E.textContent = "Sign in or pass an account ID from the host app.", x.append(_, E), u.append(x);
    const k = document.createElement("div");
    k.className = "sg-settings sg-settings--nested sg-settings-card sg-defaults-panel";
    const M = document.createElement("div");
    M.className = "sg-defaults-panel__head";
    const P = document.createElement("span");
    P.className = "sg-defaults-panel__head-icon", P.setAttribute("aria-hidden", "true"), P.innerHTML = es, M.append(P, A("div", "sg-page-guides__label", "Default settings")), k.append(M);
    const R = document.createElement("div");
    R.className = "sg-defaults-panel__checks";
    const J = document.createElement("label");
    J.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const q = document.createElement("input");
    q.type = "checkbox", q.dataset.setting = "reloadOnNavigate", q.checked = !!e.reloadOnNavigate, J.append(q, document.createTextNode(" Reload when opening another route")), R.append(J);
    const T = document.createElement("label");
    T.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const O = document.createElement("input");
    O.type = "checkbox", O.dataset.setting = "resetBeforePlay", O.checked = e.resetBeforePlay === "reload", T.append(O, document.createTextNode(" Reload page before playing")), R.append(T), k.append(R);
    const G = document.createElement("label");
    G.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", G.append(document.createTextNode("Reload resume delay (ms)"));
    const V = document.createElement("div");
    V.className = "sg-field-shell";
    const z = document.createElement("span");
    z.className = "sg-field-shell__icon", z.setAttribute("aria-hidden", "true"), z.innerHTML = Ks;
    const I = document.createElement("input");
    I.type = "number", I.min = "0", I.max = "10000", I.step = "50", I.className = "sg-field sg-field--shell", I.dataset.setting = "resetBeforePlayDelay", I.value = String(e.resetBeforePlayDelay ?? 450), V.append(z, I), G.append(V), k.append(G);
    const $ = document.createElement("label");
    $.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", $.append(document.createTextNode("Theme mode"));
    const et = document.createElement("div");
    et.className = "sg-field-shell sg-field-shell--select";
    const tt = document.createElement("span");
    tt.className = "sg-field-shell__icon", tt.setAttribute("aria-hidden", "true"), tt.innerHTML = Vs;
    const ct = document.createElement("select");
    ct.className = "sg-field sg-field--shell", ct.dataset.setting = "theme", [
      ["dark", "Dark"],
      ["light", "Light"]
    ].forEach(([N, B]) => {
      const L = document.createElement("option");
      L.value = N, L.textContent = B, (e.theme || "dark") === N && (L.selected = !0), ct.append(L);
    });
    const D = document.createElement("span");
    D.className = "sg-field-shell__chevron", D.setAttribute("aria-hidden", "true"), D.textContent = "▾", et.append(tt, ct, D), $.append(et), k.append($);
    const W = document.createElement("div");
    W.className = "sg-settings sg-settings--nested sg-settings-card", W.append(A("div", "sg-page-guides__label", "Access & toolbar"));
    const H = this.createEditableStringList({
      label: "Editor account IDs (not listed = Play only)",
      settingKey: "editorAccountIds",
      items: Array.isArray(e.editorAccountIds) ? e.editorAccountIds : [],
      placeholder: "e.g. 12",
      emptyText: "No editor accounts — Play only for everyone",
      addLabel: "Add"
    });
    W.append(H);
    const K = document.createElement("label");
    K.className = "sg-step-settings__field sg-settings__row", K.append(document.createTextNode("Bypass PIN (hover orb + type to open panel)"));
    const Z = document.createElement("div");
    Z.className = "sg-password-field";
    const X = document.createElement("input");
    X.type = "password", X.className = "sg-field", X.inputMode = "numeric", X.autocomplete = "new-password", X.placeholder = "••••••", X.maxLength = 12, X.dataset.setting = "bypassPin", X.value = String(e.bypassPin ?? "123456");
    const Ct = Q("Show", "ghost", {
      icon: `
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M1.8 8s2.6-4.2 6.2-4.2S14.2 8 14.2 8s-2.6 4.2-6.2 4.2S1.8 8 1.8 8Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="8" cy="8" r="1.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      `,
      ariaLabel: "Show PIN"
    });
    Ct.classList.add("sg-password-field__toggle"), Ct.addEventListener("click", (N) => {
      N.preventDefault(), N.stopPropagation();
      const B = X.type === "password";
      X.type = B ? "text" : "password", Ct.title = B ? "Hide PIN" : "Show PIN", Ct.setAttribute("aria-label", B ? "Hide PIN" : "Show PIN");
    }), Z.append(X, Ct), K.append(Z), W.append(K);
    const Tt = document.createElement("label");
    Tt.className = "sg-check sg-settings__row";
    const It = document.createElement("input");
    It.type = "checkbox", It.dataset.setting = "showOrb", It.checked = e.showOrb !== !1, Tt.append(It, document.createTextNode(" Show floating orb (off = hide System Guider)")), W.append(Tt);
    const Vt = document.createElement("label");
    Vt.className = "sg-check sg-settings__row";
    const Rt = document.createElement("input");
    Rt.type = "checkbox", Rt.dataset.setting = "showAccountId", Rt.checked = !!e.showAccountId, Vt.append(Rt, document.createTextNode(" Show account ID on launcher")), W.append(Vt);
    const ge = this.createEditableStringList({
      label: "Hide toolbar on URLs",
      settingKey: "hiddenUrls",
      items: Array.isArray(e.hiddenUrls) ? e.hiddenUrls : [],
      placeholder: "/login",
      emptyText: "No hidden URLs — toolbar shows everywhere",
      addLabel: "Add"
    });
    W.append(ge), W.append(A(
      "p",
      "sg-lead",
      "Only listed IDs can record or manage. The bypass PIN provides recovery access."
    ));
    const dt = e.ui || {}, ft = document.createElement("div");
    ft.className = "sg-settings sg-settings--nested sg-settings-card", ft.append(A("div", "sg-page-guides__label", "Playback appearance"));
    const Ot = document.createElement("label");
    Ot.className = "sg-step-settings__field sg-settings__row", Ot.append(document.createTextNode("Font family"));
    const Gt = document.createElement("select");
    Gt.className = "sg-field", Gt.dataset.setting = "ui.fontFamily", [
      ["system", "System"],
      ["inter", "Inter"],
      ["arial", "Arial"],
      ["roboto", "Roboto"],
      ["serif", "Serif"]
    ].forEach(([N, B]) => {
      const L = document.createElement("option");
      L.value = N, L.textContent = B, (dt.fontFamily || "system") === N && (L.selected = !0), Gt.append(L);
    }), Ot.append(Gt), ft.append(Ot);
    const Zt = (N, B, L) => {
      const j = document.createElement("label");
      j.className = "sg-check sg-settings__row";
      const it = document.createElement("input");
      it.type = "checkbox", it.dataset.setting = N, it.checked = !!L, j.append(it, document.createTextNode(` ${B}`)), ft.append(j);
    };
    Zt("ui.animations", "Enable animations", dt.animations !== !1), Zt("ui.spotlightFade", "Spotlight fade in/out", dt.spotlightFade !== !1), Zt("ui.animatedCursor", "Animated cursor between steps", dt.animatedCursor);
    const $t = document.createElement("label");
    $t.className = "sg-step-settings__field sg-settings__row", $t.append(document.createTextNode("Highlight motion"));
    const Dt = document.createElement("select");
    Dt.className = "sg-field", Dt.dataset.setting = "ui.highlightMotion", [
      ["none", "None"],
      ["pulse", "Pulse"],
      ["wobble", "Wobble"],
      ["fade", "Fade"]
    ].forEach(([N, B]) => {
      const L = document.createElement("option");
      L.value = N, L.textContent = B, (dt.highlightMotion || "pulse") === N && (L.selected = !0), Dt.append(L);
    }), $t.append(Dt), ft.append($t);
    const Ht = document.createElement("label");
    Ht.className = "sg-step-settings__field sg-settings__row", Ht.append(document.createTextNode("Transition speed (ms)"));
    const b = document.createElement("input");
    b.type = "number", b.min = "0", b.max = "1000", b.step = "20", b.className = "sg-field", b.dataset.setting = "ui.transitionMs", b.value = String(dt.transitionMs ?? 220), Ht.append(b), ft.append(Ht);
    const S = document.createElement("div");
    S.className = "sg-appearance-dim sg-settings__row";
    const F = document.createElement("div");
    F.className = "sg-appearance-dim__head", F.append(A("span", "sg-appearance-dim__label", "Overlay dim"));
    const st = document.createElement("span");
    st.className = "sg-appearance-dim__value";
    const U = document.createElement("input");
    U.type = "range", U.min = "0", U.max = "90", U.step = "5", U.className = "sg-field sg-field--range", U.dataset.setting = "ui.overlayOpacity", U.value = String(Math.round((Number(dt.overlayOpacity) || 0.58) * 100)), st.textContent = `${U.value}%`, U.addEventListener("input", () => {
      st.textContent = `${U.value}%`, S.style.setProperty("--sg-dim-pct", `${U.value}%`);
    }), S.style.setProperty("--sg-dim-pct", `${U.value}%`), F.append(st), S.append(F, U), ft.append(S);
    const rt = document.createElement("div");
    rt.className = "sg-settings__colors";
    const ot = (N, B, L) => {
      const j = document.createElement("label");
      j.className = "sg-settings__color-row";
      const it = document.createElement("span");
      it.className = "sg-settings__color-meta", it.append(A("span", "sg-settings__color-label", B));
      const mt = document.createElement("span");
      mt.className = "sg-settings__color-hex";
      const te = String(L || "#000000").toLowerCase();
      mt.textContent = te, it.append(mt);
      const _t = document.createElement("span");
      _t.className = "sg-settings__color-swatch";
      const yt = document.createElement("input");
      yt.type = "color", yt.dataset.setting = N, yt.value = te, yt.setAttribute("aria-label", B), yt.addEventListener("input", () => {
        mt.textContent = String(yt.value || "").toLowerCase();
      }), _t.append(yt), j.append(it, _t), rt.append(j);
    };
    ot("ui.tipBg", "Tip background", dt.tipBg || "#0f1b33"), ot("ui.tipText", "Tip text", dt.tipText || "#f8fafc"), ot("ui.skipBg", "Skip background", dt.skipBg || "#2563eb"), ot("ui.skipText", "Skip text", dt.skipText || "#ffffff"), ot("ui.spotlightColor", "Spotlight", dt.spotlightColor || "#3b82f6"), ft.append(rt);
    const Lt = gt("Reset appearance", "reset-ui-settings", "secondary");
    Lt.classList.add("sg-button--compact", "sg-appearance-reset"), ft.append(Lt);
    const ut = e.launcher || {}, pt = document.createElement("div");
    pt.className = "sg-settings sg-settings--nested sg-settings-card", pt.append(A("div", "sg-page-guides__label", "Orb"));
    const St = document.createElement("label");
    St.className = "sg-step-settings__field sg-settings__row", St.append(document.createTextNode("Size"));
    const Ft = document.createElement("select");
    Ft.className = "sg-field", Ft.dataset.setting = "launcher.size", [
      ["56", "Small"],
      ["68", "Medium"],
      ["80", "Large"]
    ].forEach(([N, B]) => {
      const L = document.createElement("option");
      L.value = N, L.textContent = B, Number(ut.size ?? 80) === Number(N) && (L.selected = !0), Ft.append(L);
    }), St.append(Ft);
    const Ut = document.createElement("label");
    Ut.className = "sg-step-settings__field sg-settings__row", Ut.append(document.createTextNode("Position"));
    const Wt = document.createElement("select");
    Wt.className = "sg-field", Wt.dataset.setting = "launcher.position", [
      ["bottom-right", "Bottom right"],
      ["bottom-left", "Bottom left"],
      ["top-right", "Top right"],
      ["top-left", "Top left"]
    ].forEach(([N, B]) => {
      const L = document.createElement("option");
      L.value = N, L.textContent = B, (ut.position || "bottom-right") === N && (L.selected = !0), Wt.append(L);
    }), Ut.append(Wt);
    const Xt = document.createElement("label");
    Xt.className = "sg-check sg-settings__row";
    const jt = document.createElement("input");
    jt.type = "checkbox", jt.dataset.setting = "launcher.animations", jt.checked = ut.animations !== !1, Xt.append(jt, document.createTextNode(" Animate orb")), pt.append(St, Ut, Xt);
    const Jt = document.createElement("div");
    Jt.className = "sg-settings-layout";
    const xt = document.createElement("nav");
    xt.className = "sg-settings-sidebar", xt.setAttribute("aria-label", "Panel sections"), xt.append(A("div", "sg-settings-sidebar__title", "System Guider"));
    const qt = document.createElement("div");
    qt.className = "sg-settings-content";
    const Yt = {
      guides: i,
      account: u,
      general: k,
      access: W,
      appearance: ft,
      orb: pt
    };
    Object.entries(Yt).forEach(([N, B]) => {
      B.classList.add("sg-settings-content__section"), B.dataset.settingsSection = N;
    }), qt.append(...Object.values(Yt));
    const Ze = {
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
    }, Xe = (N) => {
      this.settingsSection = Yt[N] ? N : "guides", Object.entries(Yt).forEach(([B, L]) => {
        L.hidden = B !== this.settingsSection;
      }), xt.querySelectorAll(".sg-settings-sidebar__item").forEach((B) => {
        const L = B.dataset.section === this.settingsSection;
        B.classList.toggle("is-active", L), B.setAttribute("aria-current", L ? "page" : "false");
      }), qt.scrollTop = 0;
    }, Qt = (N, B, L) => {
      const j = document.createElement("button");
      return j.type = "button", j.className = "sg-settings-sidebar__item", j.innerHTML = Ze[B] || Ze.general, j.dataset.tooltip = N, j.dataset.section = L, j.setAttribute("aria-label", N), j.title = N, j.addEventListener("click", () => {
        Xe(L);
      }), xt.append(j), j;
    };
    Qt("Guides", "guides", "guides"), Qt("Account", "account", "account"), Qt("Defaults", "general", "general"), Qt("Access", "access", "access"), Qt("Appearance", "appearance", "appearance"), Qt("Orb", "orb", "orb"), Jt.append(xt, qt), t.append(Jt), Xe(this.settingsSection);
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
      A("span", "", `Step ${Math.min(s + 1, i)} of ${i}`),
      A("span", "", `${i ? Math.round((s + 1) / i * 100) : 0}%`)
    );
    const c = document.createElement("div");
    c.className = "sg-progress__bar";
    const l = document.createElement("span");
    if (l.style.width = `${i ? (s + 1) / i * 100 : 0}%`, c.append(l), t.append(a, c), e && t.append(
      A("h3", "sg-playback__title", e.title),
      A("p", "sg-playback__description", e.description)
    ), r) {
      const d = String(this.state.message || "").trim();
      t.append(A(
        "p",
        "sg-status sg-status--error",
        d || (o ? "Target not found. Skipping to the next step…" : "Target not found. Follow this guide's requirements first, then continue — or skip this step.")
      ));
    } else this.state.waiting && (this.state.waitKind === "target" || this.state.waitKind === "navigate") && t.append(A(
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
    var c, l, d, u, g, h, p;
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
    const a = (r == null ? void 0 : r.dataset.stepId) || ((g = (u = s == null ? void 0 : s.closest) == null ? void 0 : u.call(s, "[data-step-id]")) == null ? void 0 : g.dataset.stepId);
    (p = (h = this.handlers)[i]) == null || p.call(h, a);
  }
  closeMoveMenus() {
    this.root.querySelectorAll(".sg-step__move-menu:not([hidden])").forEach((t) => {
      t.hidden = !0;
    }), this.root.querySelectorAll('.sg-step__move-btn[aria-expanded="true"]').forEach((t) => {
      t.setAttribute("aria-expanded", "false");
    });
  }
  handleInput(t) {
    var l, d, u, g, h, p, f, y, m, v, w, C;
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
      (g = (u = this.handlers)["edit-guide-setting"]) == null || g.call(u, x, i, _);
      return;
    }
    const r = e.dataset.stepSetting;
    if (r) {
      const x = (h = e.closest("[data-step-id]")) == null ? void 0 : h.dataset.stepId, _ = e.type === "checkbox" ? e.checked : e.value;
      (f = (p = this.handlers)["edit-step-setting"]) == null || f.call(p, x, r, _);
      return;
    }
    const o = e.dataset.guideField;
    if (o) {
      (m = (y = this.handlers).editGuide) == null || m.call(y, o, e.value);
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
const ee = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, lt = (n) => String(n || "").replace(/\s+/g, " ").trim().toLowerCase(), fs = (n) => {
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
}, ms = (n) => {
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
function ys(n) {
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
      const u = (i = c.querySelector) == null ? void 0 : i.call(c, t);
      if (u) return lt(u.textContent).slice(0, 80);
      c = c.previousElementSibling;
    }
    const l = e.parentElement;
    if (!l || l === document.body) break;
    let d = l.previousElementSibling;
    for (; d; ) {
      if ((r = d.matches) != null && r.call(d, t))
        return lt(d.textContent).slice(0, 80);
      const u = (o = d.querySelector) == null ? void 0 : o.call(d, t);
      if (u) return lt(u.textContent).slice(0, 80);
      d = d.previousElementSibling;
    }
    e = l;
  }
  return "";
}
function Xs(n) {
  var f, y, m;
  if (!(n instanceof Element)) return null;
  const t = ((f = n.closest) == null ? void 0 : f.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")) || ((y = n.matches) != null && y.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? n : null), e = t || n, s = fs(e), i = ms(e), r = ys(e), o = e.getAttribute("data-guider") || "", a = lt(t ? "" : e.getAttribute("aria-label") || ""), c = e.getAttribute("name") || "", l = lt(e.getAttribute("placeholder") || ""), d = e.getAttribute("role") || (t ? "combobox" : ""), u = e.tagName.toLowerCase(), g = e.getAttribute("type") || "", h = t && ((m = [...t.querySelectorAll("[id]")].find((v) => v.id && !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(v.id))) == null ? void 0 : m.id) || "", p = !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(e.id || "") && e.id || h || "";
  return !s && !i && !o && !c && !a && !p ? null : {
    ...s ? { text: s } : {},
    ...i ? { href: i } : {},
    ...r ? { section: r } : {},
    ...o ? { dataGuider: o } : {},
    ...a ? { ariaLabel: a } : {},
    ...c ? { name: c } : {},
    ...l ? { placeholder: l } : {},
    ...d ? { role: d } : {},
    ...u ? { tag: u } : {},
    ...g ? { type: g } : {},
    ...p ? { id: p } : {}
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
function Js(n, t) {
  const e = lt(n).replace(/\/+$/, ""), s = lt(t).replace(/\/+$/, "");
  return !e || !s ? 0 : e === s ? 45 : e.endsWith(s) || s.endsWith(e) ? 28 : e.includes(s) || s.includes(e) ? 12 : -25;
}
function Ys(n, t) {
  const e = lt(n), s = lt(t);
  return !e || !s ? 0 : e === s ? 30 : e.includes(s) || s.includes(e) ? 12 : -20;
}
function is(n, t) {
  if (!(n instanceof Element) || !t || typeof t != "object") return 0;
  let e = 0;
  const s = n.getAttribute("data-guider") || "";
  return t.dataGuider && (s === t.dataGuider ? e += 100 : s && (e -= 40)), t.id && n.id && n.id === t.id && (e += 80), t.href && (e += Js(ms(n), t.href)), t.text ? (e += ye(fs(n), t.text), t.ariaLabel && (e += Math.round(ye(n.getAttribute("aria-label") || "", t.ariaLabel) * 0.5))) : t.ariaLabel && (e += ye(n.getAttribute("aria-label") || "", t.ariaLabel)), t.section && (e += Ys(ys(n), t.section)), t.name && n.getAttribute("name") === t.name && (e += 25), t.placeholder && (e += Math.round(ye(n.getAttribute("placeholder") || "", t.placeholder) * 0.6)), t.tag && n.tagName.toLowerCase() === t.tag && (e += 4), t.role && n.getAttribute("role") === t.role && (e += 6), t.type && n.getAttribute("type") === t.type && (e += 6), e;
}
function Qs(n) {
  const t = [];
  if (n != null && n.dataGuider && t.push(`[data-guider="${ee(n.dataGuider)}"]`), n != null && n.id && t.push(`#${ee(n.id)}`), n != null && n.href) {
    const e = String(n.href);
    t.push(`a[href="${ee(e)}"]`), t.push(`a[href="${ee(e)}/"]`);
    const s = e.replace(/^\//, "");
    s && s !== e && t.push(`a[href="/${ee(s)}"]`);
  }
  return n != null && n.name && t.push(`[name="${ee(n.name)}"]`), t.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label'), t.join(", ");
}
function ti(n, t = document) {
  var r;
  const e = t instanceof Element || t === document ? t : document;
  let s = [];
  try {
    s = [...e.querySelectorAll(Qs(n))];
  } catch {
    s = [...e.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-guider]')];
  }
  const i = [];
  for (const o of s)
    o instanceof Element && ((r = o.closest) != null && r.call(o, ".sg-panel, .sg-overlay, .sg-launcher") || (i.push(o), o.matches("label") && o.control instanceof Element && i.push(o.control)));
  return [...new Set(i)];
}
const ei = 40;
function ns(n, {
  selector: t = "",
  root: e = document,
  threshold: s = ei
} = {}) {
  const i = [];
  if (t)
    try {
      const o = document.querySelector(t);
      if (o instanceof Element) {
        const a = n ? is(o, n) : 35;
        i.push({ element: o, score: a, via: "selector" });
      }
    } catch {
    }
  if (n && typeof n == "object")
    for (const o of ti(n, e)) {
      const a = is(o, n);
      a > 0 && i.push({ element: o, score: a, via: "score" });
    }
  if (!i.length) return null;
  i.sort((o, a) => a.score - o.score || (o.via === "selector" ? -1 : 1));
  const r = i[0];
  return !r || r.score < s ? (r == null ? void 0 : r.via) === "selector" && t && (t.startsWith("[data-guider=") || t.startsWith("#")) ? r.element : null : r.element;
}
const re = (n) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
};
function at(n) {
  return n instanceof Element ? n.matches(
    'input[type="password"], [data-guider-ignore], [contenteditable][data-sensitive]'
  ) : !0;
}
function rs(n) {
  return !n || typeof n != "string" ? !0 : /^(pv_|apv_|pr_|p_)id_?\d+$/i.test(n) || /^[a-z]{1,5}_id_\d+$/i.test(n);
}
const os = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect";
function si(n) {
  var r, o;
  if (!(n instanceof Element)) return null;
  const t = (r = n.closest) == null ? void 0 : r.call(n, os);
  t && (n = t);
  const e = n.getAttribute("data-guider");
  if (e) return `[data-guider="${re(e)}"]`;
  if (n.id && !rs(n.id)) {
    const a = `#${re(n.id)}`;
    if (document.querySelectorAll(a).length === 1) return a;
  }
  if ((o = n.matches) != null && o.call(n, os)) {
    const a = [...n.querySelectorAll("[id]")].find(
      (l) => l.id && !rs(l.id)
    ), c = [...n.classList].find((l) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(l));
    if (a && c) {
      const l = `${n.tagName.toLowerCase()}.${re(c)}:has(#${re(a.id)})`;
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
      (u) => !/^(active|selected|open|focus|hover|ng-|css-|jsx-|p-placeholder|p-focus|p-inputtext|p-disabled|p-highlight|p-inputwrapper|p-inputwrapper-filled|p-inputwrapper-focus|p-overlay-open)$/i.test(u)
    );
    c && (a += `.${re(c)}`);
    const l = i.parentElement;
    if (l) {
      const u = [...l.children].filter(
        (g) => g.tagName === i.tagName
      );
      u.length > 1 && (a += `:nth-of-type(${u.indexOf(i) + 1})`);
    }
    s.unshift(a);
    const d = s.join(" > ");
    if (document.querySelectorAll(d).length === 1) return d;
    i = l;
  }
  return s.join(" > ") || null;
}
function se(n) {
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
function kt(n) {
  if (!(n instanceof Element) || !n.isConnected) return !1;
  const t = getComputedStyle(n);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = n.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function ii(n) {
  if (!(n instanceof Element)) return !1;
  const t = n.getBoundingClientRect();
  return !(t.bottom < 0 || t.right < 0 || t.top > window.innerHeight || t.left > window.innerWidth);
}
function xe(n) {
  return kt(n) && ii(n);
}
function ni(n, { behavior: t = "smooth", block: e = "center" } = {}) {
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
      const u = d.top + d.height / 2 - (l.top + r.clientHeight / 2);
      Math.abs(u) > 2 && (r.scrollTop += u);
    }
    if (c) {
      const u = d.left + d.width / 2 - (l.left + r.clientWidth / 2);
      Math.abs(u) > 2 && (r.scrollLeft += u);
    }
  });
  try {
    n.scrollIntoView({ behavior: t, block: e, inline: "nearest" });
  } catch {
    n.scrollIntoView();
  }
}
function ue(n) {
  var i, r, o, a;
  if (!(n instanceof Element)) return null;
  const t = (i = n.closest) == null ? void 0 : i.call(n, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
  if (t && kt(t)) return t;
  if (kt(n)) {
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
  if (s && kt(s)) {
    const c = s.getBoundingClientRect();
    if (c.width <= 420 && c.height <= 280) return s;
  }
  return kt(n) ? n : null;
}
function ri(n) {
  return [n.top, n.left, n.width, n.height].map((t) => Math.round(t * 2) / 2).join(":");
}
async function oi(n, {
  timeout: t = 1500,
  stableFrames: e = 4,
  interval: s = 50
} = {}) {
  if (!(n instanceof Element)) return null;
  const i = Date.now() + t;
  let r = "", o = 0;
  for (; Date.now() <= i; ) {
    if (!n.isConnected) return null;
    if (!kt(n))
      o = 0, r = "";
    else {
      const a = ri(n.getBoundingClientRect());
      if (a === r ? o += 1 : (r = a, o = 1), o >= e) return n;
    }
    await new Promise((a) => setTimeout(a, s));
  }
  return xe(n) ? n : null;
}
const ai = /* @__PURE__ */ new Set(["none", "pulse", "wobble", "fade"]), li = /* @__PURE__ */ new Set(["system", "inter", "arial", "roboto", "serif"]), ci = /* @__PURE__ */ new Set(["bottom-right", "bottom-left", "top-right", "top-left"]), as = {
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
}), bs = () => ({
  size: 80,
  position: "bottom-right",
  animations: !0
}), vs = () => ({
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
  launcher: bs(),
  ui: Ue()
});
function ws(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => String(t).trim()).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\s,;]+/).map((t) => t.trim()).filter(Boolean)
  )];
}
function Ss(n) {
  return Array.isArray(n) ? [...new Set(n.map((t) => Ge(t)).filter(Boolean))] : n == null || n === "" ? [] : [...new Set(
    String(n).split(/[\n,;]+/).map((t) => Ge(t)).filter(Boolean)
  )];
}
function Ge(n) {
  let t = String(n || "").trim();
  if (!t) return "";
  try {
    /^https?:\/\//i.test(t) && (t = new URL(t).pathname);
  } catch {
  }
  return t = t.split("?")[0].split("#")[0], t.startsWith("/") || (t = `/${t}`), t.length > 1 && (t = t.replace(/\/+$/, "")), t.toLowerCase();
}
function di(n, t = []) {
  const e = Ge(n || "/"), s = Ss(t);
  return s.length ? s.some((i) => {
    if (i.endsWith("*")) {
      const r = i.slice(0, -1);
      return e === r.replace(/\/+$/, "") || e.startsWith(r);
    }
    return e === i || e.startsWith(`${i}/`);
  }) : !1;
}
function ui(n, t = []) {
  const e = ws(t);
  if (!e.length || n == null || n === "") return !1;
  const s = String(n).trim();
  return e.includes(s);
}
function hi(n, t = "123456") {
  return n == null ? String(t ?? "").replace(/\D/g, "").slice(0, 12) : String(n).replace(/\D/g, "").slice(0, 12);
}
function oe(n, t) {
  const e = String(n || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(e)) return e.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(e)) {
    const [, s, i, r] = e;
    return `#${s}${s}${i}${i}${r}${r}`.toLowerCase();
  }
  return t;
}
function he(n = {}) {
  const t = Ue();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = String(n.highlightMotion || t.highlightMotion), s = String(n.fontFamily || t.fontFamily).toLowerCase();
  return {
    fontFamily: li.has(s) ? s : t.fontFamily,
    animations: n.animations !== !1,
    highlightMotion: ai.has(e) ? e : t.highlightMotion,
    spotlightFade: n.spotlightFade !== !1,
    animatedCursor: !!n.animatedCursor,
    tipBg: oe(n.tipBg, t.tipBg),
    tipText: oe(n.tipText, t.tipText),
    skipBg: oe(n.skipBg, t.skipBg),
    skipText: oe(n.skipText, t.skipText),
    spotlightColor: oe(n.spotlightColor, t.spotlightColor),
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
function pi(n = {}) {
  const t = bs();
  if (!n || typeof n != "object" || Array.isArray(n)) return t;
  const e = String(n.position || t.position).toLowerCase(), s = Math.round(Number(n.size));
  return {
    size: Number.isFinite(s) ? Math.min(96, Math.max(48, s)) : t.size,
    position: ci.has(e) ? e : t.position,
    animations: n.animations !== !1
  };
}
function Mt(n = {}) {
  var r, o;
  const t = vs();
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
    editorAccountIds: ws(
      n.editorAccountIds ?? n.guiderAccounts ?? t.editorAccountIds
    ),
    bypassPin: hi(
      Object.prototype.hasOwnProperty.call(n, "bypassPin") ? n.bypassPin : t.bypassPin,
      t.bypassPin
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(n, "showAccountId") ? !!n.showAccountId : !!t.showAccountId,
    showOrb: Object.prototype.hasOwnProperty.call(n, "showOrb") ? !!n.showOrb : Object.prototype.hasOwnProperty.call(n, "showLauncher") ? !!n.showLauncher : !!t.showOrb,
    hiddenUrls: Ss(
      n.hiddenUrls ?? n.hiddenRoutes ?? t.hiddenUrls
    ),
    launcher: pi(n.launcher),
    ui: he(i)
  };
}
function ae(n = {}) {
  const t = Mt(n), e = t.ui, s = t.theme === "light" ? "light" : "dark", i = document.documentElement;
  return i && (i.dataset.sgTheme = s, i.style.setProperty("--sg-tip-bg", e.tipBg), i.style.setProperty("--sg-tip-text", e.tipText), i.style.setProperty("--sg-skip-bg", e.skipBg), i.style.setProperty("--sg-skip-text", e.skipText), i.style.setProperty("--sg-spotlight", e.spotlightColor), i.style.setProperty("--sg-overlay-opacity", String(e.overlayOpacity)), i.style.setProperty("--sg-spotlight-ms", `${e.transitionMs}ms`), i.style.setProperty("--sg-font-family", as[e.fontFamily] || as.system), i.dataset.sgAnimations = e.animations ? "on" : "off", i.dataset.sgHighlightMotion = e.highlightMotion, i.dataset.sgSpotlightFade = e.spotlightFade ? "on" : "off"), e;
}
const Et = 'input:not([type="password"]), textarea, select', _s = [
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
].join(", "), gi = [
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
].join(", "), fi = [
  ".p-datepicker-prev",
  ".p-datepicker-next",
  ".p-datepicker-prev-icon",
  ".p-datepicker-next-icon",
  ".p-datepicker-header",
  ".p-datepicker-title",
  ".p-datepicker-month",
  ".p-datepicker-year",
  ".p-datepicker-buttonbar"
].join(", "), ls = [
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
function ks(n) {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(n) : String(n).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function nt(n) {
  return n instanceof Element ? n.matches(wt) ? n : n.closest(wt) : null;
}
function mi(n) {
  var s;
  const t = (s = n.labels) == null ? void 0 : s[0];
  if (!t) return "";
  const e = t.cloneNode(!0);
  return e.querySelectorAll("input, select, textarea, button").forEach((i) => i.remove()), e.textContent.trim();
}
function yi(n) {
  var i;
  const t = nt(n) || n, e = ((i = t.closest) == null ? void 0 : i.call(t, '.p-float-label, .form-group, .mb-1, .mb-3, .col, [class*="form-group"]')) || t.parentElement;
  if (!(e instanceof Element)) return "";
  const s = e.querySelector(":scope > label, label");
  return s instanceof Element ? s.textContent.trim().replace(/\s+/g, " ") : "";
}
function Cs(n) {
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
function xs(n) {
  return String(n || "").replace(/\s+/g, " ").replace(/\s+\d+$/, "").trim().slice(0, 80);
}
function bi(n) {
  const t = String(n || "").trim();
  if (!t || t.length < 2 || /^(div|span|button|a|input|select|svg|path|g|rect|li|ul|td|th|tr|table|canvas)$/i.test(t) || /^(click|submit|button|link|here|null|undefined)$/i.test(t)) return !0;
  const e = t.replace(/\D/g, "");
  return !!(e.length >= 8 && e.length >= t.replace(/\s/g, "").length * 0.7 || !/\s/.test(t) && t.length > 28 || /^[.#\[]/.test(t) || /[{};>]/.test(t) || (t.match(/\b20\d{2}\b/g) || []).length >= 3);
}
function Nt(n) {
  const t = xs(n);
  return bi(t) ? "" : t;
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
      const p = document.getElementById(d.split(/\s+/)[0]), f = Nt(p == null ? void 0 : p.textContent);
      if (f) return f;
    }
    const u = (i = e.getAttribute) == null ? void 0 : i.call(e, "data-guider-label");
    if (u) {
      const p = Nt(u);
      if (p) return p;
    }
    let g = e.previousElementSibling;
    for (; g; ) {
      if ((r = g.matches) != null && r.call(g, t)) {
        const f = Nt(g.textContent);
        if (f) return f;
      }
      const p = (o = g.querySelector) == null ? void 0 : o.call(g, t);
      if (p) {
        const f = Nt(p.textContent);
        if (f) return f;
      }
      g = g.previousElementSibling;
    }
    const h = (c = (a = e.parentElement) == null ? void 0 : a.querySelector) == null ? void 0 : c.call(
      a,
      ":scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > .card-title, :scope > .card-header"
    );
    if (h && !h.contains(n)) {
      const p = Nt(h.textContent);
      if (p) return p;
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
function vi(n) {
  return !(n instanceof Element) || !Bt(n) ? "" : Nt(Cs(n) || n.textContent);
}
function wi(n) {
  var o;
  const t = nt(n), e = Nt(yi(n));
  if (e) return e;
  const s = n.matches("input, textarea, select"), i = !s && !t ? Nt(Cs(n)) : "";
  if (i) return i;
  const r = [
    t ? "" : n.getAttribute("aria-label"),
    n.getAttribute("title"),
    mi(n),
    s ? n.getAttribute("placeholder") : "",
    n.getAttribute("placeholder"),
    n.getAttribute("name"),
    n.getAttribute("data-guider-label"),
    $e(n),
    (o = t == null ? void 0 : t.matches) != null && o.call(t, ".p-autocomplete") ? "Search" : "",
    t ? "Dropdown" : ""
  ];
  for (const a of r) {
    const c = Nt(a);
    if (c) return c;
  }
  return We(n) ? $e(n) || "chart" : "";
}
function _e(n) {
  const t = xs(n);
  return t ? /^[A-Z0-9\s\-_/]+$/.test(t) && t.length <= 24 ? t : t.charAt(0).toUpperCase() + t.slice(1) : "";
}
function Si({
  label: n,
  choiceField: t,
  isNativeField: e,
  action: s,
  element: i,
  optionText: r = ""
}) {
  var c, l, d, u, g;
  const o = _e(n), a = _e(r);
  if (pe(i) || i && Pt(i))
    return o && !/^date|calendar$/i.test(o) ? `Pick a date for ${o}` : "Pick a date";
  if (t)
    return a && o ? `Select ${o}: ${a}` : a ? `Choose “${a}”` : o ? `Select ${o}` : "Choose a value";
  if (e) {
    const h = (((c = i == null ? void 0 : i.getAttribute) == null ? void 0 : c.call(i, "type")) || "").toLowerCase();
    return h === "checkbox" || h === "radio" ? o ? `Toggle ${o}` : "Toggle this option" : (l = i == null ? void 0 : i.matches) != null && l.call(i, "textarea") ? o ? `Fill in ${o}` : "Enter details" : o ? `Enter ${o}` : "Enter a value";
  }
  return s === "click" || s === "input" ? We(i) ? o && o.toLowerCase() !== "chart" ? `Interact with ${o}` : "Interact with the chart" : (d = i == null ? void 0 : i.matches) != null && d.call(i, 'a, [role="link"]') || (u = i == null ? void 0 : i.closest) != null && u.call(i, "a[href]") ? o ? `Go to ${o}` : "Follow this link" : (g = i == null ? void 0 : i.matches) != null && g.call(i, 'button, [role="button"], input[type="submit"], input[type="button"]') ? /^(save|submit|continue|next|confirm|apply|search|login|sign in)$/i.test(o) ? o : o ? `Click ${o}` : "Click this button" : o ? `Click ${o}` : "Click here" : o || "Continue";
}
function _i({
  title: n,
  label: t,
  choiceField: e,
  isNativeField: s,
  element: i,
  optionText: r = ""
}) {
  var d, u, g;
  const o = _e(t), a = _e(r), c = $e(i);
  if (pe(i) || i && Pt(i))
    return "Choose a day on the calendar to continue.";
  if (e && a)
    return o ? `Pick “${a}” from ${o}.` : `Pick “${a}” from the list.`;
  if (e)
    return o ? `Open ${o} and choose a value.` : "Open the dropdown and choose a value.";
  if (s) {
    const h = (((d = i == null ? void 0 : i.getAttribute) == null ? void 0 : d.call(i, "type")) || "").toLowerCase();
    return h === "checkbox" || h === "radio" ? o ? `Check or uncheck ${o}.` : "Toggle this option." : o ? `Type the value for ${o}.` : "Type a value in this field.";
  }
  if (We(i))
    return `Use ${o && o.toLowerCase() !== "chart" ? o : c || "the chart"} to continue to the next step.`;
  if ((u = i == null ? void 0 : i.matches) != null && u.call(i, 'a, [role="link"]') || (g = i == null ? void 0 : i.closest) != null && g.call(i, "a[href]"))
    return o ? `Open ${o} to move forward.` : "Follow this link to continue.";
  const l = String(n || "").replace(/^(click|select|enter|choose|go to|interact with|toggle|pick|fill in)\s+/i, "").trim();
  return o && l && o.toLowerCase() === l.toLowerCase() ? "" : c && o && c.toLowerCase() !== o.toLowerCase() ? `In ${c}, continue with ${o}.` : "";
}
function Bt(n) {
  var t;
  return !!((t = n == null ? void 0 : n.closest) != null && t.call(n, _s));
}
function pe(n) {
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
function ki(n) {
  return !(n instanceof Element) || pe(n) ? !1 : !!n.closest(fi);
}
function Pt(n) {
  if (!(n instanceof Element)) return !1;
  if (n instanceof HTMLInputElement && (["date", "datetime-local", "time", "month", "week"].includes(n.type) || n.getAttribute("inputmode") === "none" || /date|time/i.test(n.name || "") || /date|time/i.test(n.id || "") || n.className.toLowerCase().includes("date")) || n.closest(".p-calendar, .p-datepicker-trigger")) return !0;
  const t = n.closest(gi);
  return t ? /date|time|calendar|picker/i.test(t.className) ? !0 : !!t.querySelector('button, [class*="calendar"], table, .flatpickr-calendar, .dp__menu') : !1;
}
function cs(n) {
  var c, l, d;
  if (!(n instanceof Element)) return null;
  const t = document.querySelectorAll(
    '.p-calendar input[aria-expanded="true"], .p-calendar [aria-expanded="true"], input[aria-expanded="true"]'
  );
  for (const u of t) {
    if (!(u instanceof Element) || at(u)) continue;
    const g = u.closest(".p-calendar") || u, h = (c = g.matches) != null && c.call(g, "input") ? g : (l = g.querySelector) == null ? void 0 : l.call(g, 'input:not([type="hidden"])');
    if (h && !at(h)) return h;
  }
  const e = document.querySelector(".p-calendar.p-inputwrapper-focus, .p-calendar.p-focus, .p-calendar.p-overlay-open");
  if (e) {
    const u = e.querySelector('input:not([type="hidden"])');
    if (u && !at(u)) return u;
  }
  const s = document.activeElement;
  if (s instanceof HTMLInputElement && Pt(s) && !at(s))
    return s;
  const r = [...(document.querySelector('.p-overlaypanel, .modal.show, [role="dialog"]') || document.body).querySelectorAll('input:not([type="hidden"]):not([type="password"])')].filter((u) => Pt(u) && !at(u));
  if (!r.length) return null;
  const o = ((d = n.getBoundingClientRect) == null ? void 0 : d.call(n).top) ?? 0, a = r.map((u) => ({ node: u, top: u.getBoundingClientRect().top })).filter((u) => u.top <= o + 8).sort((u, g) => g.top - u.top)[0];
  return (a == null ? void 0 : a.node) || r[0] || null;
}
function At(n) {
  return n instanceof Element ? !!(n instanceof HTMLSelectElement || Pt(n) || nt(n) || n.closest(Se) || n.matches('[role="combobox"], [aria-autocomplete], [aria-haspopup="listbox"]') || n.getAttribute("aria-expanded") != null || n.closest('[role="combobox"]')) : !1;
}
function ke(n) {
  if (!n) return null;
  const t = nt(n);
  if (t) return t;
  if (n.matches(Et) || n.matches('[role="combobox"]')) return n;
  const e = n.querySelector(`${Et}, [role="combobox"]`);
  return nt(e) || e;
}
function De(n) {
  if (!(n instanceof Element)) return null;
  const t = n.querySelector('[role="listbox"], .p-dropdown-items, .p-multiselect-items, .p-autocomplete-items'), e = (t == null ? void 0 : t.id) || n.id;
  if (e) {
    const i = ks(e), r = se(`[aria-controls="${i}"], [aria-owns="${i}"]`), o = nt(r) || ke(r);
    if (o) return nt(o) || o;
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
  return nt(s);
}
function Oe(n) {
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
  const t = nt(n);
  if (t) return t;
  if (pe(n)) {
    const l = n.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .ant-picker-dropdown, .p-datepicker-panel"), d = cs(l || n);
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
  if (n.matches(Et)) return n;
  const i = n.closest(Et);
  if (i) return i;
  const r = n.matches('[role="combobox"]') ? n : n.closest('[role="combobox"]');
  if (r) return nt(r) || r;
  const o = n.closest(_s);
  if (o) {
    if (pe(o)) {
      const m = cs(
        o.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .p-datepicker-panel") || o
      );
      if (m) return m;
    }
    const l = De(o.closest(Se) || o.closest(ls));
    if (l) return l;
    const d = document.activeElement;
    if (d instanceof Element && (d.matches(Et) || d.matches('[role="combobox"]') || nt(d)) && !at(d))
      return nt(d) || d;
    const u = o.closest(ls);
    if (u != null && u.id) {
      const m = ks(u.id), v = se(`[aria-controls="${m}"], [aria-owns="${m}"]`), w = ke(v);
      if (w) return w;
    }
    const g = document.querySelector(
      `${wt} [aria-expanded="true"], ${wt}[aria-expanded="true"], [aria-expanded="true"]`
    ), h = ke(g);
    if (h && !at(h)) return h;
    const p = Oe(u) || Oe(o) || Oe(g);
    if (p) {
      const m = p.querySelector(wt);
      if (m && !at(m)) return m;
      const v = p.querySelector(`select, ${Et}, [role="combobox"]`);
      if (v && !at(v)) return nt(v) || v;
    }
    const y = [...((u == null ? void 0 : u.closest('.modal.show, .modal, [role="dialog"], .p-overlaypanel, form')) || document.body).querySelectorAll(`${wt}, select, [role="combobox"]`)].filter((m) => !at(m)).map((m) => nt(m) || m);
    if (y.length) {
      const m = ((c = u == null ? void 0 : u.getBoundingClientRect) == null ? void 0 : c.call(u).top) ?? o.getBoundingClientRect().top, v = y.map((w) => ({ node: w, top: w.getBoundingClientRect().top })).filter((w) => w.top <= m + 8).sort((w, C) => C.top - w.top)[0];
      if (v) return v.node;
    }
  }
  const a = n.closest(".p-calendar, .input-group, .date, .mx-datepicker, .vdatetime, .flatpickr-wrapper, .dp__main");
  if (a) {
    const l = a.querySelector(Et);
    if (l) return l;
  }
  return n.closest(`button, a, [role="button"], input, select, textarea, [role="combobox"], ${wt}, [data-guider]`) || n;
}
function Ci(n = document) {
  const t = [
    ...n.querySelectorAll(`${wt}, select, [role="combobox"], input:not([type="hidden"]):not([type="password"]), textarea`)
  ], e = /* @__PURE__ */ new Set();
  return t.map((s) => nt(s) || s).filter((s) => {
    if (e.has(s) || at(s)) return !1;
    e.add(s);
    const i = getComputedStyle(s);
    if (i.display === "none" || i.visibility === "hidden") return !1;
    const r = s.getBoundingClientRect();
    return r.width >= 2 && r.height >= 2;
  });
}
function Kt() {
  const n = De(document.querySelector(Se)) || nt(document.querySelector([
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
  return i instanceof Element && s.contains(i) && (i.matches(Et) || i.matches('[role="combobox"]') || nt(i)) && !at(i) ? nt(i) || i : null;
}
class xi {
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
    const s = e === "click" && Bt(t), i = bt(t);
    if (!i || at(i)) return;
    const r = si(i);
    if (!r) return;
    const o = i.matches(Et), a = At(i) || s, c = o || s || a ? "input" : e, l = Date.now(), d = `${c}:${r}`, u = c === "input" && d === this.lastKey, g = d === this.lastKey && l - this.lastAt < 300;
    if (u || g) return;
    this.lastKey = d, this.lastAt = l;
    const h = wi(i), p = s ? vi(t) : "", f = Si({
      label: h,
      choiceField: a,
      isNativeField: o,
      action: c,
      element: i,
      optionText: p
    }), y = _i({
      title: f,
      label: h,
      choiceField: a,
      isNativeField: o,
      element: i,
      optionText: p
    }), m = Xs(i);
    this.onStep({
      id: ((w = (v = globalThis.crypto) == null ? void 0 : v.randomUUID) == null ? void 0 : w.call(v)) || `step-${l}-${Math.random().toString(36).slice(2, 7)}`,
      selector: r,
      ...m ? { match: m } : {},
      action: c,
      title: f,
      description: y,
      waitFor: o || s || a ? {
        type: "input",
        required: !0,
        mode: a || s ? "interaction" : "value"
      } : null
    });
  }
  onClick(t) {
    const e = t.target instanceof Element ? t.target : null;
    e && (e instanceof HTMLSelectElement && !Bt(e) || ki(e) || this.capture(t.target, "click"));
  }
  onFocus(t) {
    var s;
    const e = t.target;
    if ((s = e.matches) != null && s.call(e, Et) && !(e instanceof HTMLSelectElement)) {
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
const Ei = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>', Ti = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>', Li = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>', Ee = [
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
].join(", "), Es = [
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
function Mi(n) {
  if (!(n instanceof Element)) return null;
  const t = n.closest(Es);
  if (t && Ce(t)) return t;
  const e = n.closest('table, [role="grid"]');
  return e && e.querySelector(Ee) && Ce(e) ? e : null;
}
function Ni(n) {
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
    if (!He(s) || !Ce(s) || s === n || n.contains(s) || !(s.matches(Es) || !!((c = s.querySelector) != null && c.call(s, Ee))) && !s.matches(je)) return !1;
    const r = s.getBoundingClientRect(), o = r.top >= t.top - 48 && r.top <= t.bottom + 380, a = r.left < t.right + 140 && r.right > t.left - 140;
    return o && a;
  });
}
function ds(n = null) {
  const t = /* @__PURE__ */ new Set(), e = (s) => {
    var l;
    if (!(n instanceof Element)) return !0;
    const i = n.getBoundingClientRect(), r = s.getBoundingClientRect(), o = r.top >= i.top - 64 && r.top <= i.bottom + 420, a = r.left < i.right + 220 && r.right > i.left - 220;
    if (o && a) return !0;
    const c = [s.id];
    return (l = s.querySelectorAll) == null || l.call(s, "[id]").forEach((d) => {
      d.id && c.push(d.id);
    }), c.some((d) => {
      var h, p;
      if (!d) return !1;
      const u = ((p = (h = globalThis.CSS) == null ? void 0 : h.escape) == null ? void 0 : p.call(h, d)) || d.replace(/"/g, '\\"'), g = document.querySelector(`[aria-controls="${u}"], [aria-owns="${u}"]`);
      return !!(g && (n === g || n.contains(g) || g.contains(n)));
    });
  };
  return document.querySelectorAll(je).forEach((s) => {
    !He(s) || !Ce(s) || e(s) && t.add(s);
  }), document.querySelectorAll(Ee).forEach((s) => {
    const i = Mi(s);
    i && He(i) && e(i) && t.add(i);
  }), n instanceof Element && Ni(n).forEach((s) => t.add(s)), [...t];
}
class Ai {
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
    this.opacity = t, this.zIndex = e, this.onSkip = s, this.onEnd = i, this.skipLabel = r, this.onHighlightBox = o, this.onTargetLost = a, this.ui = he(c || { overlayOpacity: t }), this.root = null, this.frame = null, this.blocks = null, this.skipChip = null, this.goChip = null, this.onGo = null, this.stepTip = null, this.stepTipContent = null, this.guideCursor = null, this.cursorTimer = null, this.warningBanner = null, this.waitingBanner = null, this.controlsEnabled = !1, this.raf = null, this.target = null, this.highlightHost = null, this.blockOutside = !1, this.raisedTarget = null, this.previousTargetStyle = null, this.resizeObserver = null, this.menuObserver = null, this.menuWatchTimer = null, this.menuRefreshTimer = null, this.relayoutTimers = [], this.elevatedMenus = [], this.syncing = !1, this.targetLostNotified = !1, this.lastHighlightCenter = null, this.onViewportChange = () => this.scheduleLayout(), this.onBlockInteraction = (l) => {
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
    this.ui = he(t || {}), this.opacity = this.ui.overlayOpacity, this.root && (this.root.style.setProperty("--sg-overlay-opacity", String(this.opacity)), this.syncSpotlightMotionClass());
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
    const u = document.createElement("div");
    u.className = "sg-step-tip__badge", u.textContent = String(a || 1), u.setAttribute(
      "aria-label",
      c ? `Step ${a || 1} of ${c}` : `Step ${a || 1}`
    );
    const g = document.createElement("span");
    g.className = "sg-step-tip__counter", g.textContent = c ? `Step ${a || 1} of ${c}` : `Step ${a || 1}`;
    const h = document.createElement("button");
    h.type = "button", h.className = "sg-step-tip__close", h.setAttribute("aria-label", "End tutorial"), h.innerHTML = Ei, h.addEventListener("click", this.onEndClick), d.append(u, g, h);
    const p = document.createElement("div");
    if (p.className = "sg-step-tip__title", p.textContent = r, this.stepTip.append(l, d, p), o) {
      const x = document.createElement("div");
      x.className = "sg-step-tip__description", x.textContent = o, this.stepTip.append(x);
    }
    const f = document.createElement("div");
    f.className = "sg-step-tip__divider";
    const y = document.createElement("div");
    y.className = "sg-step-tip__actions";
    const m = document.createElement("button");
    m.type = "button", m.className = "sg-step-tip__end", m.innerHTML = `${Li}<span>End Tutorial</span>`, m.addEventListener("click", this.onEndClick);
    const v = document.createElement("button");
    v.type = "button", v.className = "sg-step-tip__next";
    const C = (c ? Number(a) >= Number(c) : !1) ? "Finish" : this.skipLabel || "Skip Step";
    v.innerHTML = `<span>${C}</span>${Ti}`, v.addEventListener("click", this.onSkipClick), y.append(m, v), this.stepTip.append(f, y), this.stepTip.hidden = !1;
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
    const r = this.stepTip, o = r.getBoundingClientRect(), a = o.left, c = o.top, l = o.width || r.offsetWidth || 220, d = o.height || r.offsetHeight || 48, u = a + l / 2, g = c + d / 2, h = t + s / 2, p = e + i / 2, f = a + l, y = c + d, m = t + s, v = e + i, w = {
      left: a - m,
      right: t - f,
      top: c - v,
      bottom: e - y
    };
    let C = "left", x = -1 / 0;
    for (const [k, M] of Object.entries(w))
      M > x && (x = M, C = k);
    if (x < 4) {
      const k = h - u, M = p - g;
      C = Math.abs(k) >= Math.abs(M) ? k < 0 ? "left" : "right" : M < 0 ? "top" : "bottom";
    }
    const _ = 18;
    let E = 0;
    C === "left" || C === "right" ? E = Math.min(Math.max(p - c, _), d - _) : E = Math.min(Math.max(h - a, _), l - _), r.dataset.arrow = C, r.style.setProperty("--sg-arrow-offset", `${Math.round(E)}px`), r.style.setProperty("--sg-arrow-fill", this.resolveStepTipFill());
  }
  positionSkipChip(t, e, s, i) {
    if (!this.controlsEnabled) return;
    const r = 10, o = 8, a = window.innerWidth, c = window.innerHeight, l = this.stepTip && !this.stepTip.hidden, d = l ? this.stepTip.offsetWidth || 220 : 0, u = l ? this.stepTip.offsetHeight || 48 : 0, g = this.goChip && !this.goChip.hidden, h = g ? this.goChip.offsetWidth || 72 : 0, p = g ? this.goChip.offsetHeight || 36 : 0, f = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, y = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, m = 8;
    let v = 0, w = 0;
    g && (v = t + s + r, w = e + Math.max(0, Math.round((i - p) / 2)), v + h > a - o && (v = Math.max(o, t - h - r)), w < o && (w = o), w + p > c - o && (w = Math.max(o, c - p - o)), this.goChip.style.left = `${v}px`, this.goChip.style.top = `${w}px`);
    const C = Math.max(d, f), x = (l ? u : 0) + (l && f ? m : 0) + (f ? y : 0), _ = t + s / 2, E = e + i / 2, k = (T, O) => ({
      left: Math.min(Math.max(o, T), Math.max(o, a - C - o)),
      top: Math.min(Math.max(o, O), Math.max(o, c - x - o))
    }), M = [
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
    g && M.unshift(
      k(v + h + r, Math.min(w, e)),
      k(v - C - r, Math.min(w, e))
    );
    let P = M[0], R = 1 / 0;
    for (const T of M) {
      const O = T.left + C / 2, G = T.top + x / 2, V = O - _, z = G - E;
      let I = V * V + z * z;
      const $ = Math.max(0, Math.min(T.left + C, t + s) - Math.max(T.left, t)), et = Math.max(0, Math.min(T.top + x, e + i) - Math.max(T.top, e));
      $ > 0 && et > 0 && (I += 1e6 + $ * et), I < R && (R = I, P = T);
    }
    let J = P.left, q = P.top;
    l && (this.stepTip.style.left = `${J}px`, this.stepTip.style.top = `${q}px`, this.updateStepTipArrow(t, e, s, i), q += u + m), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${J}px`, this.skipChip.style.top = `${q}px`);
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
    const e = this.stepTip && !this.stepTip.hidden, s = e ? this.stepTip.offsetWidth || 220 : 0, i = e ? this.stepTip.offsetHeight || 48 : 0, r = this.goChip && !this.goChip.hidden, o = r ? this.goChip.offsetWidth || 72 : 0, a = r ? this.goChip.offsetHeight || 36 : 0, c = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, l = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, d = 8, u = this.warningBanner && !this.warningBanner.hidden, g = this.waitingBanner && !this.waitingBanner.hidden, h = u ? this.warningBanner.offsetHeight || 40 : 0, p = g ? this.waitingBanner.offsetHeight || 40 : 0, f = 24 + h + p + (u || g ? 12 : 0), y = (e ? i + d : 0) + (c ? l : 0), m = Math.max(8, Math.round((window.innerWidth - Math.max(s, c || s)) / 2));
    let v = Math.max(8, window.innerHeight - f - y - (r ? a + d : 0));
    e && (this.stepTip.style.left = `${m}px`, this.stepTip.style.top = `${v}px`, this.stepTip.removeAttribute("data-arrow"), v += i + d), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${m}px`, this.skipChip.style.top = `${v}px`, v += l + d), r && (this.goChip.style.left = `${Math.max(8, Math.round((window.innerWidth - o) / 2))}px`, this.goChip.style.top = `${v}px`);
  }
  createBlock(t) {
    const e = document.createElement("div");
    return e.className = `sg-overlay__block sg-overlay__block--${t}`, ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((s) => e.addEventListener(s, this.onBlockInteraction, !0)), e;
  }
  highlight(t, e = !0, { blockOutside: s = !1, tip: i = null } = {}) {
    var r, o;
    t instanceof Element && (this.hideWarning(), this.hideWaiting(), this.hideGuideCursor(), this.targetLostNotified = !1, this.mount(), this.controlsEnabled && (this.mountSkipChip(), this.mountStepTip()), this.root && (this.root.style.display = "", this.root.style.setProperty("--sg-overlay-opacity", String(((r = this.ui) == null ? void 0 : r.overlayOpacity) ?? this.opacity))), this.clearRelayoutTimers(), this.unobserveTarget(), this.target = t, this.highlightHost = ue(t) || t, this.blockOutside = !!s, this.root.classList.toggle("sg-overlay--blocking", this.blockOutside), this.raiseTarget(this.blockOutside ? this.highlightHost : null), i && i.title ? this.setStepTip(i) : this.hideStepTip(), e && kt(this.highlightHost) && ni(this.highlightHost, { behavior: "smooth", block: "center" }), this.observeTarget(this.highlightHost), this.watchMenus(), this.root.classList.add("sg-overlay--visible"), this.syncSpotlightMotionClass(), this.frame && this.motionsEnabled() && ((o = this.ui) != null && o.spotlightFade) && (this.frame.classList.remove("sg-spotlight--fade-in"), this.frame.offsetWidth, this.frame.classList.add("sg-spotlight--fade-in")), this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter(), [80, 180, 320, 520, 800].forEach((a) => {
      this.relayoutTimers.push(setTimeout(() => {
        this.target && (this.highlightHost = ue(this.target) || this.target, this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter());
      }, a));
    }));
  }
  /** Refresh cutout/menus without re-raising the target (avoids closing open dropdowns). */
  refreshMenus() {
    !this.root || !this.target || this.syncing || (this.elevateOpenMenus(), this.scheduleLayout());
  }
  getVisibleMenus() {
    const t = this.highlightHost || this.target;
    return ds(t);
  }
  allowsInteractionAt(t, e) {
    const s = this.highlightHost || this.target, i = ds(s);
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
    var g, h;
    if (!this.root || this.syncing || !this.target) return;
    const t = ue(this.target) || this.highlightHost || this.target;
    if (!(t instanceof Element) || !t.isConnected) {
      this.hide(), this.targetLostNotified || (this.targetLostNotified = !0, (g = this.onTargetLost) == null || g.call(this));
      return;
    }
    this.highlightHost = t;
    const e = t.getBoundingClientRect();
    if (e.width < 1 || e.height < 1)
      return;
    const s = 8;
    let i = e.left - s, r = e.top - s, o = e.right + s, a = e.bottom + s;
    this.getVisibleMenus().forEach((p) => {
      const f = p.getBoundingClientRect();
      i = Math.min(i, f.left - s), r = Math.min(r, f.top - s), o = Math.max(o, f.right + s), a = Math.max(a, f.bottom + s);
    });
    const c = Math.max(0, i), l = Math.max(0, r), d = Math.max(8, o - i), u = Math.max(8, a - r);
    this.applyCutout(c, l, d, u), this.positionSkipChip(c, l, d, u), this.root.classList.add("sg-overlay--visible"), (h = this.onHighlightBox) == null || h.call(this, {
      left: c,
      top: l,
      right: c + d,
      bottom: l + u,
      width: d,
      height: u
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
function Bi(n, t) {
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
function Pi(n) {
  const t = String((n == null ? void 0 : n.title) || "").trim(), e = String((n == null ? void 0 : n.description) || "").trim();
  if (!e || e === t) return "";
  const s = e.replace(/^(click|select|enter|choose)\s+/i, "").trim(), i = t.replace(/^(click|select|enter|choose)\s+/i, "").trim();
  return s && i && s.toLowerCase() === i.toLowerCase() || /^(click|select|enter|choose)\s+.+/i.test(e) && e.length <= t.length + 12 ? "" : e;
}
class Ii {
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
    stepDelay: u = 0,
    autoScroll: g = !0,
    ui: h = null,
    onChange: p,
    onFail: f,
    onComplete: y,
    onClickAdvance: m = null
  }) {
    this.overlay = t, this.timeout = e, this.autoAdvanceOnInput = s, this.autoAdvanceDelay = i, this.autoSkipMissing = r, this.autoSkipMissingDelay = o, this.stableWaitTimeout = a, this.targetWaitTimeout = Math.max(1e3, Number(c) || 2e4), this.targetRetryInterval = Math.max(50, Number(l) || 250), this.targetReadyHits = Math.max(1, Number(d) || 2), this.stepDelay = u, this.autoScroll = g !== !1, this.ui = he(h || {}), this.onChange = p, this.onFail = f, this.onComplete = y, this.onClickAdvance = m, this.steps = [], this.index = 0, this.active = !1, this.token = 0, this.waitCleanup = null, this.autoSkipTimer = null, this.navWaitTimer = null, this.readyWaitInterval = null, this.readyWaitResolve = null, this.targetLostTimer = null, this.rebindDebounceTimer = null, this.waitingForNavigation = !1, this.lastChoiceField = null, this.lastCompletedField = null;
  }
  setUiOptions(t) {
    this.ui = he(t || {});
  }
  setOptions(t = {}) {
    t.autoAdvanceDelay != null && (this.autoAdvanceDelay = Number(t.autoAdvanceDelay) || 0), t.stepDelay != null && (this.stepDelay = Number(t.stepDelay) || 0), t.autoScroll != null && (this.autoScroll = !!t.autoScroll), t.timeout != null && (this.timeout = Number(t.timeout) || this.timeout), t.stableWaitTimeout != null && (this.stableWaitTimeout = Number(t.stableWaitTimeout) || this.stableWaitTimeout), t.targetWaitTimeout != null && (this.targetWaitTimeout = Math.max(1e3, Number(t.targetWaitTimeout) || this.targetWaitTimeout)), t.targetRetryInterval != null && (this.targetRetryInterval = Math.max(50, Number(t.targetRetryInterval) || this.targetRetryInterval)), t.targetReadyHits != null && (this.targetReadyHits = Math.max(1, Number(t.targetReadyHits) || this.targetReadyHits));
  }
  resolveStepField(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ns(t.match, { selector: t.selector || "" }) || se(t.selector);
    return e ? bt(e) || e : null;
  }
  findStepTarget(t) {
    if (!(t != null && t.selector) && !(t != null && t.match)) return null;
    const e = ns(t.match, { selector: t.selector || "" });
    if (e && kt(e)) return e;
    const s = se(t.selector);
    return s && kt(s) ? s : null;
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
      const u = (h) => {
        this.readyWaitResolve === d && this.clearReadyWait(h);
      }, g = () => {
        var y, m, v, w;
        if (!this.active || e !== this.token) {
          u(null);
          return;
        }
        o += 1;
        const h = this.findStepTarget(t);
        if (h) {
          if (a = h === c ? a + 1 : 1, c = h, a >= this.targetReadyHits) {
            u(h);
            return;
          }
        } else
          a = 0, c = null;
        const p = Date.now() - i;
        if (p >= r) {
          u(h || null);
          return;
        }
        const f = Math.max(0, Math.ceil((r - p) / 1e3));
        if (f !== l) {
          l = f;
          const C = `Waiting… ${f}s`;
          this.onChange(t, this.index, {
            waiting: !0,
            failed: !1,
            waitKind: "target",
            retryCount: o,
            message: C
          }), (m = (y = this.overlay).showWaiting) == null || m.call(y, C, { seconds: f }), (w = (v = this.overlay).positionSkipChipFallback) == null || w.call(v);
        }
      };
      g(), this.readyWaitResolve === d && (this.readyWaitInterval = setInterval(g, this.targetRetryInterval));
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
    if (Bt(e))
      return bt(e) || e;
    if (t.action === "click") {
      const s = bt(e);
      if (s && At(s)) return s;
    }
    return e;
  }
  async showCurrent() {
    var g, h, p, f, y, m, v, w, C, x, _, E, k, M, P, R, J, q, T, O, G, V, z, I, $, et, tt, ct;
    if (!this.active) return;
    this.clearWait();
    const t = ++this.token, e = this.steps[this.index], s = ((h = (g = this.overlay) == null ? void 0 : g.getHighlightCenter) == null ? void 0 : h.call(g)) || ((p = this.overlay) == null ? void 0 : p.lastHighlightCenter) || null;
    this.onChange(e, this.index, { waiting: !1, failed: !1 }), this.overlay.hide();
    const i = Number((f = e == null ? void 0 : e.settings) == null ? void 0 : f.delay) || 0;
    if (i > 0 && (await new Promise((D) => setTimeout(D, i)), !this.active || t !== this.token))
      return;
    if (e.action === "manual" || !e.selector && !e.match) {
      this.overlay.hide();
      return;
    }
    const r = await this.waitUntilTargetReady(e, t);
    if (!this.active || t !== this.token) return;
    let o = this.normalizeStepTarget(e, r);
    if (o) {
      const D = !!this.lastCompletedField, W = D ? Math.min(220, this.stableWaitTimeout) : this.stableWaitTimeout;
      o = await oi(o, {
        timeout: W,
        stableFrames: D ? 2 : 4
      }) || o;
    }
    if (!this.active || t !== this.token) return;
    if (o && !kt(o)) {
      const D = await this.waitUntilTargetReady(e, t);
      if (!this.active || t !== this.token) return;
      o = this.normalizeStepTarget(e, D);
    }
    if (!this.active || t !== this.token) return;
    const a = !!(o && (At(o) || Pt(o)) || ((y = e.waitFor) == null ? void 0 : y.mode) === "interaction" || Bt(r));
    if (a && (!o || !xe(o))) {
      const D = (H) => {
        var Z, X, Ct, Tt;
        if (!(H instanceof Element)) return !1;
        if ((Z = H.matches) != null && Z.call(H, 'input[type="search"]')) return !0;
        const K = [
          (X = H.getAttribute) == null ? void 0 : X.call(H, "placeholder"),
          (Ct = H.getAttribute) == null ? void 0 : Ct.call(H, "name"),
          (Tt = H.getAttribute) == null ? void 0 : Tt.call(H, "aria-label"),
          H.id,
          H.className
        ].filter(Boolean).join(" ").toLowerCase();
        return /\bsearch\b/.test(K);
      }, W = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show');
      if (W) {
        const H = Ci(W).filter((Z) => (Z.matches('select, [role="combobox"]') || At(Z)) && !D(Z));
        let K = Kt();
        if (K && D(K) && (K = null), !K && this.lastChoiceField && W.contains(this.lastChoiceField)) {
          const Z = ((v = (m = this.lastChoiceField).getBoundingClientRect) == null ? void 0 : v.call(m).top) ?? -1 / 0;
          K = H.find((X) => X.getBoundingClientRect().top > Z + 4) || null;
        }
        K || (K = H[0] || null), K && (o = K);
      }
    }
    const c = ue(o) || o;
    if (!o && !c) {
      this.overlay.hide();
      const D = this.missingTargetMessage(e);
      (C = (w = this.overlay).showWarning) == null || C.call(w, D), this.onFail(e, this.index), this.onChange(e, this.index, {
        waiting: !1,
        failed: !0,
        autoSkipping: !1,
        failKind: "missing-target",
        message: D
      }), (_ = (x = this.overlay).positionSkipChipFallback) == null || _.call(x);
      return;
    }
    (k = (E = this.overlay).hideWarning) == null || k.call(E), (P = (M = this.overlay).hideWaiting) == null || P.call(M);
    const l = o || c;
    if (s && ((R = this.ui) != null && R.animatedCursor) && ((J = this.ui) != null && J.animations)) {
      const D = (q = l.getBoundingClientRect) == null ? void 0 : q.call(l);
      if (D && D.width >= 1 && D.height >= 1) {
        const W = {
          x: D.left + D.width / 2,
          y: D.top + D.height / 2
        };
        if (await ((O = (T = this.overlay).animateCursorTo) == null ? void 0 : O.call(T, s, W, this.ui.transitionMs)), !this.active || t !== this.token) return;
      }
    }
    const d = e.action === "input" || ((G = e.waitFor) == null ? void 0 : G.type) === "input" || a || At(l), u = ((V = e == null ? void 0 : e.settings) == null ? void 0 : V.autoScroll) !== !1;
    if (this.overlay.highlight(c || l, u, {
      // Keep spotlight cutout for selects so the active field stays bright.
      blockOutside: !0,
      tip: {
        title: e.title || "",
        description: Pi(e),
        stepNumber: this.index + 1,
        totalSteps: this.steps.length
      }
    }), d) {
      let D = (z = l.matches) != null && z.call(l, "input, textarea, select, .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? l : ((I = l.querySelector) == null ? void 0 : I.call(l, "input, textarea, select, .p-dropdown, .p-multiselect")) || l;
      const W = ($ = D.closest) == null ? void 0 : $.call(D, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      W && (D = W);
      const H = Number((et = e == null ? void 0 : e.settings) == null ? void 0 : et.autoAdvanceDelay), K = this.autoAdvanceDelay;
      Number.isFinite(H) && (this.autoAdvanceDelay = H);
      const Z = a || At(D) || !!W || ((tt = e.waitFor) == null ? void 0 : tt.mode) === "interaction";
      this.watchInput(D, {
        ...e,
        waitFor: {
          type: "input",
          required: !0,
          mode: Z ? "interaction" : ((ct = e.waitFor) == null ? void 0 : ct.mode) || "value"
        }
      }, !0), this.autoAdvanceDelay = K;
      return;
    }
    e.action === "click" && this.watchClick(l, e);
  }
  watchClick(t, e) {
    const s = this.index;
    this.onChange(e, s, { waiting: !0, failed: !1, waitKind: "click" });
    const i = async (r) => {
      var l, d, u;
      const o = r.target instanceof Element ? r.target : null;
      if (!o || !(o === t || t.contains(o)) || !this.active || this.index !== s) return;
      this.overlay.hide(), this.clearWait();
      const a = this.resolveNextIndex(s), c = Bi(o, t);
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
          }), (u = (d = this.overlay).showWaiting) == null || u.call(d, "Waiting…"), clearTimeout(this.navWaitTimer), this.navWaitTimer = setTimeout(() => {
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
    if (!(e instanceof Element) || !e.isConnected || !kt(e) || !((a = (o = this.overlay) == null ? void 0 : o.root) != null && a.classList.contains("sg-overlay--visible"))) return !1;
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
    var It, Vt, Rt, ge, dt, ft, Ot, Gt, Zt, $t, Dt, Ht;
    const i = this.index, r = (It = t == null ? void 0 : t.closest) == null ? void 0 : It.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
    r && (t = r);
    const o = t instanceof HTMLSelectElement, a = Pt(t), c = !!((Vt = t == null ? void 0 : t.matches) != null && Vt.call(t, ".p-autocomplete") || (Rt = t == null ? void 0 : t.closest) != null && Rt.call(t, ".p-autocomplete")), l = !!((ge = t == null ? void 0 : t.matches) != null && ge.call(t, ".p-multiselect") || (dt = t == null ? void 0 : t.closest) != null && dt.call(t, ".p-multiselect")), d = !!((ft = t == null ? void 0 : t.matches) != null && ft.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") || (Ot = t == null ? void 0 : t.closest) != null && Ot.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")), u = o || a || ((Gt = e.waitFor) == null ? void 0 : Gt.mode) === "interaction" || At(t) || d, g = t instanceof HTMLInputElement && ["date", "datetime-local", "time", "month", "week", "color", "range"].includes(t.type);
    let h = !1, p = !1, f = !1, y = null, m = null, v = null, w = null;
    const C = o || g || u || d || c ? Math.min(this.autoAdvanceDelay || 0, 50) : this.autoAdvanceDelay, x = ((Zt = t.closest) == null ? void 0 : Zt.call(t, '.modal.show, .modal, [role="dialog"], .p-overlaypanel')) || document.querySelector('.modal.show, [role="dialog"], .p-overlaypanel') || document, _ = je, E = [
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
    ].join(", "), M = [
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
    ].join(", "), P = (b) => !!(b instanceof Element && (b.matches(Ee) || Bt(b))), R = () => {
      var st, U, rt;
      if (!l || !(t instanceof Element)) return !1;
      if (t.classList.contains("p-overlay-open") || t.classList.contains("p-inputwrapper-focus") && t.querySelector('[aria-expanded="true"]') || t.getAttribute("aria-expanded") === "true" || (st = t.querySelector) != null && st.call(t, '[aria-expanded="true"]')) return !0;
      const b = document.querySelector(".p-multiselect-panel");
      if (!(b instanceof Element)) return !1;
      const S = (U = globalThis.getComputedStyle) == null ? void 0 : U.call(globalThis, b);
      if (S && (S.display === "none" || S.visibility === "hidden")) return !1;
      const F = bt(b) || Kt();
      return !!(F && (F === t || t.contains(F) || (rt = F.contains) != null && rt.call(F, t)));
    }, J = () => l && R(), q = () => {
      var F, st;
      const b = (F = t.matches) != null && F.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? t : (st = t.closest) == null ? void 0 : st.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (!b) return "";
      const S = b.querySelector(".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      return !S || S.classList.contains("p-placeholder") || S.classList.contains("p-dropdown-label-empty") ? "" : S instanceof HTMLInputElement ? String(S.value || "").trim() : String(S.textContent || "").trim();
    }, T = () => {
      var S;
      const b = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement ? t : ((S = t.querySelector) == null ? void 0 : S.call(t, 'input:not([type="hidden"]), textarea, select')) || t;
      return b instanceof HTMLInputElement && ["checkbox", "radio"].includes(b.type) ? String(b.checked) : b instanceof HTMLInputElement || b instanceof HTMLTextAreaElement || b instanceof HTMLSelectElement ? String(b.value ?? "") : q();
    };
    let O = T();
    const G = () => u ? h : t instanceof HTMLInputElement && ["checkbox", "radio"].includes(t.type) ? t.checked : d ? h || !!q() : String(T()).trim().length > 0, V = () => {
      this.onChange(e, i, {
        waiting: s && !G(),
        failed: !1,
        waitKind: u || d ? "choice" : "input"
      });
    }, z = (b) => {
      var st, U;
      if (!(b instanceof Element)) return;
      const S = ue(b) || b;
      if (this.overlay.target === S || this.overlay.highlightHost === S || this.overlay.target === b || this.overlay.highlightHost === b) {
        (U = (st = this.overlay).refreshMenus) == null || U.call(st);
        return;
      }
      this.overlay.highlight(S, !1, { blockOutside: !0 });
    }, I = !u && !d && !c, $ = () => {
      var S;
      const b = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : (S = t.querySelector) == null ? void 0 : S.call(t, 'input:not([type="hidden"]), textarea');
      if (b instanceof HTMLElement)
        try {
          b.blur();
        } catch {
        }
      try {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      } catch {
      }
    }, et = () => {
      this.active && this.index === i && this.next();
    }, tt = (b = t) => {
      var S, F;
      !this.active || this.index !== i || h || (h = !0, O = T(), clearTimeout(y), (F = (S = this.overlay).hideGoChip) == null || F.call(S), b instanceof Element && (this.lastChoiceField = b, this.lastCompletedField = bt(b) || b), V(), $(), this.overlay.hide(), y = setTimeout(et, I ? Math.min(C, 120) : C));
    }, ct = () => {
      var b, S, F, st, U, rt;
      if (I) {
        if (!this.active || this.index !== i || h) {
          (S = (b = this.overlay).hideGoChip) == null || S.call(b);
          return;
        }
        G() ? (st = (F = this.overlay).showGoChip) == null || st.call(F, () => {
          var ot, Lt;
          if (!(!this.active || this.index !== i || h)) {
            if (!G()) {
              V(), (Lt = (ot = this.overlay).hideGoChip) == null || Lt.call(ot);
              return;
            }
            tt(t);
          }
        }, "Go") : (rt = (U = this.overlay).hideGoChip) == null || rt.call(U);
      }
    }, D = (b = t) => {
      if (!this.active || this.index !== i || h || J()) return;
      if (!(u || d ? !0 : G())) {
        V(), ct();
        return;
      }
      if (I) {
        O = T(), V(), ct();
        return;
      }
      if (!this.autoAdvanceOnInput) {
        h = !0, O = T(), b instanceof Element && (this.lastChoiceField = b, this.lastCompletedField = bt(b) || b), V();
        return;
      }
      tt(b);
    }, W = (b) => {
      var rt, ot, Lt, ut;
      if (!(b instanceof Element)) return !1;
      if (b === t || t.contains(b)) return !0;
      const S = (rt = t.querySelector) == null ? void 0 : rt.call(t, "input, textarea, select");
      if (S && (b === S || S.contains(b))) return !0;
      const F = bt(b);
      if (F && (F === t || t.contains(F) || (ot = F.contains) != null && ot.call(F, t)))
        return !0;
      if (b.closest(k) && (c || d)) {
        const pt = bt(b) || Kt();
        if (pt && (pt === t || t.contains(pt) || (Lt = pt.contains) != null && Lt.call(pt, t)))
          return !0;
        const St = Kt();
        return !!(St && (St === t || t.contains(St)));
      }
      const U = Kt();
      return !!(U && (U === t || t.contains(U) || (ut = U.contains) != null && ut.call(U, t)));
    }, H = (b = t) => {
      !this.active || this.index !== i || h || J() || (clearTimeout(y), y = setTimeout(() => D(b), 0));
    }, K = () => {
      !l || h || J() || (f || T() !== O) && H(t);
    }, Z = (b) => {
      const S = b == null ? void 0 : b.target;
      if (c) {
        if (!f) return;
        H(t);
        return;
      }
      if (l) {
        W(S instanceof Element ? S : t) && (f = !0, p = !0), K();
        return;
      }
      if (!(d && !a && !o && ((b == null ? void 0 : b.type) === "input" || (b == null ? void 0 : b.type) === "change" && !f && !p))) {
        if (u && S instanceof Element && (x.contains(S) || !!S.closest(_) || W(S)) && (S.matches("select, input, textarea") || At(S) || Bt(S))) {
          if (d && S.matches("input, textarea") && !Bt(S) && (b == null ? void 0 : b.type) === "input")
            return;
          H(bt(S) || t);
          return;
        }
        u && S instanceof Element && !W(S) || !u && !d && S instanceof Element && !W(S) || H(t);
      }
    }, X = (b) => {
      var pt, St, Ft, Ut, Wt, Xt, jt, Jt;
      if (!u || h) return;
      const S = b.target instanceof Element ? b.target : null;
      if (!S) return;
      const F = x.contains(S), U = !!S.closest(_), rt = S.closest(E), ot = P(S);
      if (l && !!S.closest([
        ".p-multiselect-close",
        ".p-multiselect-remove",
        '[data-pc-section="closebutton"]',
        '[data-pc-section="clearicon"]',
        ".p-multiselect-header .p-multiselect-close"
      ].join(", ")) && W(S)) {
        p = !0, setTimeout(K, 40);
        return;
      }
      if ((rt || ot) && W(S)) {
        if (p = !0, S.matches("input, textarea") && !rt && !ot) {
          (St = (pt = this.overlay).refreshMenus) == null || St.call(pt);
          return;
        }
        if (c && !rt) {
          (Ut = (Ft = this.overlay).refreshMenus) == null || Ut.call(Ft);
          return;
        }
        if (b.type === "pointerdown" || b.type === "pointerup" || b.type === "click" || ot) {
          if (f = !0, l) {
            (Xt = (Wt = this.overlay).refreshMenus) == null || Xt.call(Wt);
            return;
          }
          H(bt(S) || Kt() || t);
        }
        return;
      }
      if (!F && !U && !ot) {
        l && p && setTimeout(K, 40);
        return;
      }
      const ut = S.closest(M);
      if (ut && (F || x.contains(ut)) && !U && !rt && !ot) {
        p = !0;
        const xt = bt(ut) || ut;
        if ((W(xt) || W(ut)) && (z(xt), (Jt = (jt = this.overlay).refreshMenus) == null || Jt.call(jt), l && setTimeout(K, 40)), ut instanceof HTMLSelectElement && b.type === "pointerdown") {
          const qt = () => H(xt), Yt = Date.now();
          ut.addEventListener("change", qt, { once: !0 }), ut.addEventListener("focusout", () => {
            Date.now() - Yt < 280 || setTimeout(qt, 40);
          }, { once: !0 });
        }
      }
    };
    if (t.addEventListener("input", Z), t.addEventListener("change", Z), document.addEventListener("change", Z, !0), document.addEventListener("input", Z, !0), document.addEventListener("pointerdown", X, !0), document.addEventListener("pointerup", X, !0), document.addEventListener("click", X, !0), d && typeof MutationObserver < "u") {
      const b = ($t = t.querySelector) == null ? void 0 : $t.call(t, ".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      b && !c && (m = new MutationObserver(() => {
        if (T() !== O) {
          if (l) {
            f = !0, p = !0, K();
            return;
          }
          H(t);
        }
      }), m.observe(b, {
        characterData: !0,
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "value"]
      }));
      const S = ((Dt = t.querySelector) == null ? void 0 : Dt.call(t, "[aria-expanded]")) || ((Ht = t.hasAttribute) != null && Ht.call(t, "aria-expanded") ? t : null);
      S && (v = new MutationObserver(() => {
        if (!(!p || h) && S.getAttribute("aria-expanded") === "false" && !(c && !f)) {
          if (l) {
            K();
            return;
          }
          (f || T() !== O) && H(t);
        }
      }), v.observe(S, { attributes: !0, attributeFilter: ["aria-expanded"] })), l && (w = new MutationObserver(() => {
        K();
      }), w.observe(t, {
        attributes: !0,
        attributeFilter: ["class", "aria-expanded"]
      }));
    }
    const Ct = setInterval(() => {
      if (!h) {
        if (c) {
          if (!f) return;
          H(t);
          return;
        }
        if (l) {
          T() !== O && (f = !0, p = !0), K();
          return;
        }
        if (T() !== O) {
          O = T(), H(t);
          return;
        }
        I && ct();
      }
    }, 80), Tt = (b) => {
      !I || h || b.key === "Enter" && W(b.target instanceof Element ? b.target : t) && G() && (b.preventDefault(), tt(t));
    };
    this.waitCleanup = () => {
      var b, S;
      clearTimeout(y), clearInterval(Ct), m == null || m.disconnect(), v == null || v.disconnect(), w == null || w.disconnect(), (S = (b = this.overlay).hideGoChip) == null || S.call(b), t.removeEventListener("input", Z), t.removeEventListener("change", Z), document.removeEventListener("change", Z, !0), document.removeEventListener("input", Z, !0), document.removeEventListener("keydown", Tt, !0), document.removeEventListener("pointerdown", X, !0), document.removeEventListener("pointerup", X, !0), document.removeEventListener("click", X, !0);
    }, V(), I && (document.addEventListener("keydown", Tt, !0), ct());
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
function Ri(n) {
  return Y(n).split("/").map((t) => t.trim()).filter(Boolean);
}
function Oi(n) {
  return String(n || "root").replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
}
function Gi(n = []) {
  const t = { path: "/", label: "Home", guides: [], children: /* @__PURE__ */ new Map() }, e = (i, r, o) => (i.children.has(r) || i.children.set(r, {
    path: o,
    label: Oi(r),
    guides: [],
    children: /* @__PURE__ */ new Map()
  }), i.children.get(r));
  for (const i of n) {
    if (!i || typeof i != "object") continue;
    const r = Y(i.url || "/"), o = Ri(r);
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
function Ts(n, t = 0, e = []) {
  for (const s of n || []) {
    const i = [];
    Ts(s.children, t + 1, i);
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
const $i = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="4" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="4" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
</svg>`, Di = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
</svg>`, Hi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M10.2 8.4L16.2 12L10.2 15.6V8.4Z" fill="currentColor"/>
</svg>`, Fi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" fill="currentColor"/>
</svg>`;
function Ls(n = "sg") {
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
const Ui = Ls("sgA"), Wi = Ls("sgB"), ji = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 3.75h6M5.25 6.75h13.5M8.25 6.75V18a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V6.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 10.5v6M13.5 10.5v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, qi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, zi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`, Ki = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M6 14.5V6.5A1.5 1.5 0 0 1 7.5 5H15.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Vi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 6.5 16 12 9 17.5V6.5Z" fill="currentColor"/>
</svg>`, us = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 3c.6 3.4 2.3 5.1 5.7 5.7-3.4.6-5.1 2.3-5.7 5.7-.6-3.4-2.3-5.1-5.7-5.7C9.7 8.1 11.4 6.4 12 3Z" fill="currentColor"/>
  <path d="M18.5 14.5c.25 1.3.9 1.95 2.2 2.2-1.3.25-1.95.9-2.2 2.2-.25-1.3-.9-1.95-2.2-2.2 1.3-.25 1.95-.9 2.2-2.2Z" fill="currentColor"/>
</svg>`, Zi = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
class Xi {
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
    this.onOpenPanel = e, this.onBypassOpenPanel = s, this.onStartRecording = i, this.onPlayPageGuide = r, this.onDeleteGuide = o, this.onOpenManage = a, this.onStopTutorial = c, this.onSearchGuide = l, this.playing = !1, this.guideCount = 0, this.apiReady = !0, this.readOnly = !1, this.visible = !1, this.menuOpen = !1, this.searchGuides = [], this.searchCurrentUrl = "/", this.accountId = null, this.bypassPin = "123456", this.bypassBuffer = "", this.orbHovering = !1, this.showAccountId = !1, this.launcherSettings = {
      size: 80,
      position: "bottom-right",
      animations: !0
    }, this.root = document.createElement("div"), this.root.className = "sg-launcher is-hidden", this.root.hidden = !0, this.root.style.zIndex = String(t + 5), this.root.setAttribute("aria-label", "System Guider actions"), this.root.setAttribute("aria-hidden", "true"), this.optionsRoot = document.createElement("section"), this.optionsRoot.className = "sg-guide-picker", this.optionsRoot.hidden = !0, this.optionsRoot.setAttribute("aria-label", "All guides"), this.trigger = document.createElement("button"), this.trigger.type = "button", this.trigger.className = "sg-launcher__trigger", this.trigger.dataset.action = "toggle-menu", this.trigger.setAttribute("aria-label", "Show System Guider toolbar"), this.trigger.setAttribute("aria-expanded", "false"), this.trigger.title = "Show toolbar", this.trigger.innerHTML = `
      <span class="sg-launcher__avatar">${Ui}</span>
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
      icon: Di,
      shortcut: "R"
    }), o = this.createTile({
      action: "open-panel",
      variant: "panel",
      title: "Panel",
      subtitle: "Guide controls",
      icon: $i,
      shortcut: "P"
    }), a = this.createTile({
      action: "play-page",
      variant: "play",
      title: "Play guides",
      subtitle: "Start a tutorial",
      icon: Hi
    });
    this.stopButton = this.createTile({
      action: "stop-tutorial",
      variant: "stop",
      title: "Stop",
      subtitle: "End tutorial",
      icon: Fi
    }), this.stopButton.hidden = !0, s.append(a, r, o, this.stopButton), this.petalGroup = s;
    const c = document.createElement("button");
    c.type = "button", c.className = "sg-launcher__orb", c.dataset.action = "toggle-menu", c.setAttribute("aria-label", "Hide System Guider toolbar"), c.title = "Close", c.innerHTML = `
      <span class="sg-launcher__avatar">${Wi}</span>
    `, this.orb = c, e.append(i, s, c);
    const l = document.createElement("form");
    l.className = "sg-launcher__search", l.setAttribute("role", "search"), l.innerHTML = `
      <span class="sg-launcher__search-spark">${us}</span>
      <input
        type="text"
        class="sg-launcher__search-input"
        placeholder="Search guides or press /"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search guides"
      />
      <button type="submit" class="sg-launcher__search-go" aria-label="Search">${Zi}</button>
    `, this.searchInput = l.querySelector(".sg-launcher__search-input"), this.searchInput.addEventListener("input", () => this.renderSearchResults()), l.addEventListener("submit", (u) => {
      u.preventDefault(), this.submitSearch();
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
    var u;
    if (!this.connector) return;
    const e = t || Array.from(((u = this.petalGroup) == null ? void 0 : u.children) || []).filter((g) => !g.hidden), s = e.length, i = e.some((g) => g.classList.contains("sg-launcher__tile--record")), r = e.some((g) => g.classList.contains("sg-launcher__tile--panel")), o = this.connector.querySelector(".sg-launcher__connector-line--play"), a = this.connector.querySelector(".sg-launcher__connector-line--record"), c = this.connector.querySelector(".sg-launcher__connector-line--panel");
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
      const o = Array.isArray(i.steps) ? i.steps.length : 0, a = String(i.title || "Untitled guide").trim(), c = a.split(" · "), l = (c[0] || "Untitled guide").trim(), d = c.slice(1).join(" · ").trim(), g = /^\d+\s+steps?$/i.test(l) ? d || "Untitled guide" : a;
      r.innerHTML = `
        <span class="sg-launcher__result-spark">${us}</span>
        <span class="sg-launcher__result-copy">
          <span class="sg-launcher__result-title"></span>
          <span class="sg-launcher__result-meta"></span>
        </span>
        <span class="sg-launcher__result-arrow">→</span>
      `, r.querySelector(".sg-launcher__result-title").textContent = g, r.querySelector(".sg-launcher__result-meta").textContent = `${i.url || "/"} · ${o} step${o === 1 ? "" : "s"}`, this.searchResults.append(r);
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
    var s, i, r, o, a, c, l, d, u, g, h, p;
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
        const f = (c = t.target.closest("[data-guide-id]")) == null ? void 0 : c.dataset.guideId, y = (l = this.searchGuides) == null ? void 0 : l.find((m) => m.id === f);
        y && this.selectSearchGuide(y);
        return;
      }
      if (e === "close-picker" && this.hideGuideOptions(), e === "open-manage") {
        if (this.readOnly) return;
        this.hideGuideOptions(), (d = this.onOpenManage) == null || d.call(this);
      }
      if (e === "select-guide") {
        const f = (u = t.target.closest("[data-guide-id]")) == null ? void 0 : u.dataset.guideId, y = (g = this.guides) == null ? void 0 : g.find((m) => m.id === f);
        if (y) {
          const m = this.onSelectGuide;
          this.hideGuideOptions(), m == null || m(y);
        }
      }
      if (e === "delete-guide") {
        if (this.readOnly) return;
        t.preventDefault(), t.stopPropagation();
        const f = (h = t.target.closest("[data-guide-id]")) == null ? void 0 : h.dataset.guideId;
        if (!f) return;
        (p = this.onDeleteGuide) == null || p.call(this, f);
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
    a.className = "sg-guide-picker__brand-icon", a.setAttribute("aria-hidden", "true"), a.innerHTML = qi;
    const c = document.createElement("div");
    c.className = "sg-guide-picker__brand-copy";
    const l = document.createElement("strong");
    l.className = "sg-guide-picker__title", l.textContent = s ? "All Guides" : "Page Guides";
    const d = document.createElement("span");
    d.className = "sg-guide-picker__subtitle", d.textContent = s ? "Manage your guides" : "Choose a guide to play", c.append(l, d), o.append(a, c);
    const u = document.createElement("div");
    u.className = "sg-guide-picker__actions";
    const g = document.createElement("button");
    g.type = "button", g.className = "sg-guide-picker__manage", g.dataset.action = "open-manage", g.innerHTML = `<span class="sg-guide-picker__manage-icon">${zi}</span><span>Manage</span>`, g.hidden = this.readOnly, this.manageButton = g;
    const h = document.createElement("button");
    h.type = "button", h.className = "sg-guide-picker__close", h.dataset.action = "close-picker", h.setAttribute("aria-label", "Close guide options"), h.textContent = "×", u.append(g, h), r.append(o, u);
    const p = document.createElement("div");
    if (p.className = "sg-guide-picker__list", t.length)
      if (s) {
        const f = Ts(Gi(t));
        let y = 0;
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
            k.type = "button", k.className = "sg-guide-picker__copy-path", k.title = "Copy path", k.setAttribute("aria-label", `Copy ${m.path}`), k.innerHTML = Ki, k.addEventListener("click", async (M) => {
              var P, R;
              M.preventDefault(), M.stopPropagation();
              try {
                await ((R = (P = navigator.clipboard) == null ? void 0 : P.writeText) == null ? void 0 : R.call(P, m.path)), k.classList.add("is-copied"), setTimeout(() => k.classList.remove("is-copied"), 900);
              } catch {
              }
            }), _.append(E, k), v.append(x, _), p.append(v);
            return;
          }
          y += 1, p.append(this.createGuideRow(m.guide, y, {
            depth: m.depth,
            currentUrl: i
          }));
        });
      } else
        t.forEach((f, y) => {
          p.append(this.createGuideRow(f, y + 1, { depth: 0, currentUrl: i }));
        });
    else {
      const f = document.createElement("div");
      f.className = "sg-guide-picker__empty", f.textContent = "No guides saved yet.", p.append(f);
    }
    this.optionsRoot.append(r, p), this.optionsRoot.hidden = !1, this.syncClosedRail();
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
    const d = document.createElement("strong"), u = String(t.title || "Untitled guide").trim(), g = u.split(" · "), h = (g[0] || "Untitled guide").trim(), p = g.slice(1).join(" · ").trim(), f = /^\d+\s+steps?$/i.test(h);
    d.textContent = f ? p || "Untitled guide" : u;
    const y = document.createElement("small"), m = Array.isArray(t.steps) ? t.steps.length : Number(t.steps) || 0, v = document.createElement("span");
    v.className = "sg-guide-picker__path", v.textContent = o;
    const w = document.createElement("span");
    w.className = "sg-guide-picker__dot", w.textContent = "·";
    const C = document.createElement("span");
    C.textContent = `${m} step${m === 1 ? "" : "s"}`, y.append(v, w, C), l.append(d, y);
    const x = document.createElement("span");
    x.className = "sg-guide-picker__play", x.setAttribute("aria-hidden", "true"), x.innerHTML = Vi, a.append(c, l, x);
    const _ = document.createElement("button");
    return _.type = "button", _.className = "sg-guide-picker__delete", _.dataset.action = "delete-guide", _.dataset.guideId = t.id, _.setAttribute("aria-label", `Delete ${t.title || "guide"}`), _.title = "Delete guide", _.innerHTML = ji, this.readOnly && (_.hidden = !0), r.append(a, _), r;
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
const Ji = (n) => JSON.parse(JSON.stringify(n));
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
  }), Ji({
    id: String(n.id || `guide-${Date.now()}`),
    title: String(n.title || "Untitled guide"),
    version: Number(n.version) || 1,
    ...n.url ? { url: String(n.url) } : {},
    ...n.settings && typeof n.settings == "object" && !Array.isArray(n.settings) ? { settings: n.settings } : {},
    steps: n.steps
  });
}
function hs(n) {
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
function Yi(n) {
  const t = (Array.isArray(n) ? n : []).map((e) => vt(e));
  return JSON.stringify({
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    guides: t
  }, null, 2);
}
function Qi(n, t) {
  !n || typeof localStorage > "u" || localStorage.setItem(n, Te(t));
}
function tn(n) {
  if (!n || typeof localStorage > "u") return null;
  const t = localStorage.getItem(n);
  return t ? vt(JSON.parse(t)) : null;
}
function Ms(n, t, e = "application/json") {
  const s = new Blob([n], { type: e }), i = URL.createObjectURL(s), r = document.createElement("a");
  r.href = i, r.download = t, r.click(), URL.revokeObjectURL(i);
}
function en(n, t = "system-guide.json") {
  Ms(Te(n), t);
}
function sn(n, t = "system-guider-guides.json") {
  Ms(Yi(n), t);
}
async function nn(n) {
  var e;
  const t = Te(n);
  if (!((e = navigator.clipboard) != null && e.writeText))
    throw new Error("Clipboard API is unavailable in this browser.");
  return await navigator.clipboard.writeText(t), t;
}
function rn(n = ((e) => (e = globalThis.location) == null ? void 0 : e.href)(), t = "pathname") {
  var s;
  try {
    const i = new URL(n, ((s = globalThis.location) == null ? void 0 : s.origin) || "http://localhost");
    return t === "full" ? `${i.pathname}${i.search}` || "/" : i.pathname || "/";
  } catch {
    return "/";
  }
}
function on(n = "pathname") {
  var t;
  return rn((t = globalThis.location) == null ? void 0 : t.href, n);
}
function Ns(n) {
  return `${n || "system-guider"}:by-url`;
}
function qe(n) {
  if (typeof localStorage > "u") return {};
  try {
    const t = localStorage.getItem(Ns(n)), e = t ? JSON.parse(t) : {};
    return e && typeof e == "object" ? e : {};
  } catch {
    return {};
  }
}
function As(n, t) {
  typeof localStorage > "u" || localStorage.setItem(Ns(n), JSON.stringify(t));
}
function ze(n) {
  return Array.isArray(n) ? n.filter(Boolean) : n ? [n] : [];
}
function be(n, t, e) {
  const s = qe(n), i = ze(s[t]), r = i.findIndex((o) => (o == null ? void 0 : o.id) === e.id);
  return r >= 0 ? i[r] = e : i.push(e), s[t] = i, As(n, s), i;
}
function an(n) {
  const t = qe(n), e = [];
  return Object.entries(t).forEach(([s, i]) => {
    ze(i).forEach((r) => {
      e.push({ ...r, url: (r == null ? void 0 : r.url) || s });
    });
  }), e;
}
function ln(n, t, e) {
  const s = qe(n), i = ze(s[t]).filter((r) => (r == null ? void 0 : r.id) !== e);
  return i.length ? s[t] = i : delete s[t], As(n, s), i;
}
function Ke(n) {
  return `${n || "system-guider"}:pending-play`;
}
function ve(n, t) {
  typeof sessionStorage > "u" || sessionStorage.setItem(Ke(n), JSON.stringify(t));
}
function cn(n) {
  if (typeof sessionStorage > "u") return null;
  const t = Ke(n), e = sessionStorage.getItem(t);
  if (sessionStorage.removeItem(t), !e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function le(n) {
  typeof sessionStorage > "u" || sessionStorage.removeItem(Ke(n));
}
function Bs(n) {
  return String(n || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";
}
function dn(n) {
  const t = String(n || "/").split(/[\\/]+/).map((e) => e.trim()).filter(Boolean).map(Bs);
  return t.length ? t.join("/") : "root";
}
function un(n) {
  return `${Bs((n == null ? void 0 : n.title) || (n == null ? void 0 : n.id) || "guide")}.json`;
}
function Fe(n, t = n == null ? void 0 : n.url) {
  return `${dn(t)}/${un(n)}`;
}
function hn(n = {}) {
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
async function pn(n, { guideId: t, urlKey: e, path: s }) {
  try {
    return await Ve(n.baseUrl, "DELETE", { guideId: t, urlKey: e, path: s }), { ok: !0 };
  } catch {
    return { ok: !1 };
  }
}
async function gn(n) {
  const t = `${String(n.publicBase || "/guides").replace(/\/$/, "")}/index.json`, e = await fetch(t, { headers: { Accept: "application/json" } });
  if (!e.ok) return { version: 1, guides: [] };
  const s = await e.json();
  return s && typeof s == "object" ? { version: Number(s.version) || 1, guides: Array.isArray(s.guides) ? s.guides : [] } : { version: 1, guides: [] };
}
async function ps(n) {
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
async function fn(n) {
  const t = await gn(n), e = String(n.publicBase || "/guides").replace(/\/$/, ""), s = [];
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
async function mn(n) {
  const t = String(n.publicBase || "/guides").replace(/\/$/, ""), e = await fetch(`${t}/settings.json`, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });
  if (!e.ok) return null;
  const s = await e.json();
  return s && typeof s == "object" && !Array.isArray(s) ? s : null;
}
async function yn(n, t) {
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
const bn = {
  next: "Next Step",
  back: "Back",
  close: "Close Guide",
  skip: "Skip Step",
  startRecording: "Start Recording",
  stopRecording: "Stop Recording"
}, ce = (n = "") => ({
  id: `guide-${Date.now()}`,
  title: n ? `Guide for ${n}` : "New system guide",
  version: 1,
  url: n || void 0,
  steps: []
});
class vn {
  constructor(t = {}) {
    var e, s, i, r, o, a, c, l, d, u, g, h;
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
      labels: { ...bn, ...t.labels }
    }, this.settings = Mt({
      ...vs(),
      ...t.settings || {}
    }), this.options.resetBeforePlay = this.settings.resetBeforePlay || this.options.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay ?? this.options.resetBeforePlayDelay, ae(this.settings), this.fileStorage = hn(this.options.fileStorage), this.fileGuides = [], this.guideSaveTimer = null, this.settingsSaveTimer = null, this.apiReady = !this.fileStorage, this.apiProbeTimer = null, this.guide = ce(this.getUrlKey()), this.mode = "idle", this.dirty = !1, this.recordingAppend = !1, this.destroyed = !1, this.recordingStepsBaseline = 0, this.panelVisible = !this.options.showLauncher, this.readOnly = !1, this.bypassUnlocked = !1, this.launcherVisible = !1, this.settingsReady = !this.fileStorage, this.accountId = t.accountId ?? null, this.overlay = new Ai({
      ...this.options,
      skipLabel: ((e = this.options.labels) == null ? void 0 : e.skip) || "Skip Step",
      onSkip: () => this.skip(),
      onEnd: () => this.endPlayback(),
      onHighlightBox: (p) => {
        var f;
        return (f = this.panel) == null ? void 0 : f.avoidHighlight(p);
      },
      onTargetLost: () => {
        var p, f;
        return (f = (p = this.player) == null ? void 0 : p.onSpotlightTargetLost) == null ? void 0 : f.call(p);
      },
      ui: this.settings.ui
    }), this.recorder = new xi({ onStep: (p) => this.recordStep(p) }), this.player = new Ii({
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
      onChange: (p, f, y) => this.onPlaybackChange(p, f, y),
      onFail: (p, f) => this.onPlaybackFail(p, f),
      onComplete: () => this.onPlaybackComplete(),
      onClickAdvance: (p, f, y, m) => {
        this.persistPlaybackProgress(y, m);
      }
    }), this.playbackResumeTimer = null, this.panel = new Zs({
      labels: this.options.labels,
      zIndex: this.options.zIndex,
      handlers: this.createHandlers(),
      visible: this.panelVisible
    }), this.launcher = this.options.showLauncher ? new Xi({
      zIndex: this.options.zIndex,
      onOpenPanel: () => this.togglePanel(),
      onBypassOpenPanel: () => this.openPanelViaBypass(),
      onStartRecording: () => this.startRecording(),
      onPlayPageGuide: () => this.playPageGuide(),
      onDeleteGuide: (p) => this.deletePageGuide(p),
      onOpenManage: () => this.openManageRoutes(),
      onStopTutorial: () => this.close(!0),
      onSearchGuide: (p) => this.playGuide(p)
    }) : null, (s = this.launcher) == null || s.setApiReady(this.apiReady), (i = this.launcher) == null || i.setReadOnly(this.readOnly), (a = (r = this.launcher) == null ? void 0 : r.setBypassPin) == null || a.call(r, (o = this.settings) == null ? void 0 : o.bypassPin), (d = (c = this.launcher) == null ? void 0 : c.setLauncherSettings) == null || d.call(c, (l = this.settings) == null ? void 0 : l.launcher), (g = (u = this.launcher) == null ? void 0 : u.setAccountId) == null || g.call(u, this.accountId), (h = this.launcher) == null || h.setVisible(!1), this.onKeyDown = this.onKeyDown.bind(this), this.onUrlChange = this.onUrlChange.bind(this), document.addEventListener("keydown", this.onKeyDown), window.addEventListener("popstate", this.onUrlChange), this.installHistoryHooks(), this.applyAccessPolicy(), this.bootstrap();
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
      const e = await fn(this.fileStorage);
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
    if (!this.fileStorage) {
      this.settingsReady = !0;
      return;
    }
    try {
      const a = await mn(this.fileStorage);
      a && (this.settings = Mt({
        ...this.settings,
        ...a,
        ...this.options.settings || {}
      }), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, ae(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (i = (s = this.player) == null ? void 0 : s.setUiOptions) == null || i.call(s, this.settings.ui), (o = (r = this.launcher) == null ? void 0 : r.setLauncherSettings) == null || o.call(r, this.settings.launcher));
    } catch {
    } finally {
      this.settingsReady = !0, this.applyAccessPolicy();
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
    var r, o, a, c, l, d, u, g, h, p, f, y;
    const t = this.bypassUnlocked || ui(this.accountId, (r = this.settings) == null ? void 0 : r.editorAccountIds);
    if (this.setReadOnly(!t), this.fileStorage && !this.settingsReady)
      return this.setLauncherVisible(!1), this;
    const e = di(this.getUrlKey(), (o = this.settings) == null ? void 0 : o.hiddenUrls), s = ((a = this.settings) == null ? void 0 : a.showOrb) !== !1, i = this.options.showLauncher !== !1 && s && !e;
    return this.setLauncherVisible(i), (d = (c = this.launcher) == null ? void 0 : c.setBypassPin) == null || d.call(c, (l = this.settings) == null ? void 0 : l.bypassPin), (h = (u = this.launcher) == null ? void 0 : u.setShowAccountId) == null || h.call(u, !!((g = this.settings) != null && g.showAccountId)), (y = (p = this.launcher) == null ? void 0 : p.setLauncherSettings) == null || y.call(p, (f = this.settings) == null ? void 0 : f.launcher), this;
  }
  /** Unlock editor mode via orb hover + PIN, then open Global Settings panel. */
  openPanelViaBypass() {
    var t, e;
    return this.mode === "playback" ? this : this.fileStorage && !this.apiReady ? this : (this.bypassUnlocked = !0, this.setReadOnly(!1), this.openManageRoutes(), (e = (t = this.launcher) == null ? void 0 : t.setMenuOpen) == null || e.call(t, !1), this);
  }
  async bootstrap() {
    var t, e, s, i;
    await Promise.all([this.reloadFileGuides(), this.reloadFileSettings()]), this.settingsReady = !0, this.applyAccessPolicy();
    try {
      const r = this.getGuideForCurrentPage();
      if (r) this.load(r, { dirty: !1, mode: "idle" });
      else if (!this.fileStorage) {
        const o = tn(this.options.storageKey);
        o && this.load(o, { dirty: !1, mode: "manage" });
      }
    } catch {
    }
    await this.ensureGuideApiReady(), this.syncLauncher(), this.render(), ae(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (i = (s = this.player) == null ? void 0 : s.setUiOptions) == null || i.call(s, this.settings.ui), this.resumePendingPlay();
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
    if (this.clearApiProbeTimer(), await ps(this.fileStorage) || this.fileStorage.downloadFallback)
      return this.setApiReady(!0), !0;
    if (this.setApiReady(!1), this.destroyed) return !1;
    const e = async () => {
      if (this.destroyed || !this.fileStorage) return;
      if (await ps(this.fileStorage) || this.fileStorage.downloadFallback) {
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
    return typeof this.options.getUrlKey == "function" ? String(this.options.getUrlKey() || "/") : on(this.options.urlMatch);
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
    const e = this.options.guidesByUrl ? an(this.options.storageKey) : [], s = this.fileGuides || [], i = /* @__PURE__ */ new Map(), r = this.fileStorage ? [...t, ...e, ...s] : [...t, ...s, ...e];
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
    this.options.guidesByUrl && ln(this.options.storageKey, s, t), this.fileGuides = (this.fileGuides || []).filter((c) => c.id !== t), this.fileStorage && e && pn(this.fileStorage, {
      guideId: t,
      urlKey: s,
      path: Fe(e, s)
    }).then(() => this.reloadFileGuides()).catch(() => {
    });
    const i = this.getAllGuides().filter((c) => c.id !== t);
    if (((o = this.guide) == null ? void 0 : o.id) === t) {
      const c = i.find((l) => Y(l.url) === Y(this.getUrlKey())) || i[0];
      c ? this.load(c, { dirty: !1, mode: this.mode === "manage-routes" ? "manage-routes" : "idle" }) : (this.guide = ce(this.getUrlKey()), this.mode = this.mode === "manage-routes" ? "manage-routes" : "idle", this.dirty = !1, this.persistDraft());
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
    e || le(this.options.storageKey), this.load(i, { dirty: !1, mode: "manage" });
    const a = Math.max(0, Math.min(Number(s) || 0, Math.max(i.steps.length - 1, 0)));
    return this.startFrom(a);
  }
  persistPlaybackProgress(t, { mayNavigate: e = !1 } = {}) {
    var i, r;
    if (!((i = this.guide) != null && i.id)) return;
    const s = ((r = this.guide.steps) == null ? void 0 : r.length) || 0;
    if (t >= s) {
      le(this.options.storageKey);
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
    const e = cn(this.options.storageKey);
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
    const e = Mt(this.settings), s = t != null && t.settings && typeof t.settings == "object" ? t.settings : {};
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
    var r, o, a, c, l, d, u, g;
    if (this.readOnly && (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "showOrb" || t === "reloadOnNavigate" || t === "resetBeforePlay" || t === "resetBeforePlayDelay" || t === "theme" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.")))
      return this;
    const s = Mt({ ...this.settings });
    if (t === "reloadOnNavigate" && (s.reloadOnNavigate = !!e), t === "resetBeforePlay" && (s.resetBeforePlay = e ? "reload" : "none"), t === "resetBeforePlayDelay" && (s.resetBeforePlayDelay = Math.max(0, Number(e) || 0)), t === "theme" && (s.theme = String(e || "dark").toLowerCase() === "light" ? "light" : "dark"), t === "editorAccountIds" && (s.editorAccountIds = e), t === "hiddenUrls" && (s.hiddenUrls = e), t === "bypassPin" && (s.bypassPin = e), t === "showAccountId" && (s.showAccountId = !!e), t === "showOrb" && (s.showOrb = !!e), String(t || "").startsWith("launcher.")) {
      const h = String(t).slice(9), p = { ...s.launcher };
      h === "size" && (p.size = Number(e)), h === "position" && (p.position = String(e || "bottom-right")), h === "animations" && (p.animations = !!e), s.launcher = p;
    }
    if (String(t || "").startsWith("ui.")) {
      const h = String(t).slice(3), p = { ...s.ui };
      if (h === "animations" || h === "spotlightFade" || h === "animatedCursor")
        p[h] = !!e;
      else if (h === "highlightMotion")
        p.highlightMotion = String(e || "pulse");
      else if (h === "overlayOpacity") {
        const f = Number(e);
        p.overlayOpacity = Number.isFinite(f) ? Math.min(0.9, Math.max(0, f > 1 ? f / 100 : f)) : p.overlayOpacity;
      } else h === "transitionMs" ? p.transitionMs = Math.max(0, Math.round(Number(e) || 0)) : h === "fontFamily" ? p.fontFamily = String(e || "system") : ["tipBg", "tipText", "skipBg", "skipText", "spotlightColor"].includes(h) && (p[h] = String(e || ""));
      s.ui = p;
    }
    return this.settings = Mt(s), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, ae(this.settings), (o = (r = this.overlay) == null ? void 0 : r.applyUiSettings) == null || o.call(r, this.settings.ui), (c = (a = this.player) == null ? void 0 : a.setUiOptions) == null || c.call(a, this.settings.ui), (d = (l = this.launcher) == null ? void 0 : l.setLauncherSettings) == null || d.call(l, this.settings.launcher), this.scheduleSettingsSave(), (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showOrb") && this.applyAccessPolicy(), t === "showAccountId" && ((g = (u = this.launcher) == null ? void 0 : u.setShowAccountId) == null || g.call(u, this.settings.showAccountId)), t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "showOrb" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.") && (t.includes("Bg") || t.includes("Text") || t.includes("Color") || t === "ui.overlayOpacity" || t === "ui.transitionMs" || t === "ui.fontFamily") || this.render(), this;
  }
  resetUiSettings() {
    var t, e, s, i;
    return this.settings = Mt({
      ...this.settings,
      ui: Ue()
    }), ae(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (i = (s = this.player) == null ? void 0 : s.setUiOptions) == null || i.call(s, this.settings.ui), this.scheduleSettingsSave(), this.render(), this;
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
    const t = Mt(this.settings), e = await yn(this.fileStorage, t);
    e != null && e.settings && typeof e.settings == "object" && (this.settings = Mt({
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
    var e, s, i, r, o, a, c, l, d, u, g, h, p, f, y, m, v, w;
    const t = this.getAllGuides().length;
    (e = this.launcher) == null || e.setApiReady(this.apiReady), (s = this.launcher) == null || s.setReadOnly(this.readOnly), (o = (i = this.launcher) == null ? void 0 : i.setBypassPin) == null || o.call(i, (r = this.settings) == null ? void 0 : r.bypassPin), (l = (a = this.launcher) == null ? void 0 : a.setShowAccountId) == null || l.call(a, !!((c = this.settings) != null && c.showAccountId)), (g = (d = this.launcher) == null ? void 0 : d.setLauncherSettings) == null || g.call(d, (u = this.settings) == null ? void 0 : u.launcher), (p = (h = this.launcher) == null ? void 0 : h.setAccountId) == null || p.call(h, this.accountId), (f = this.launcher) == null || f.setVisible(this.launcherVisible), (y = this.launcher) == null || y.setSearchData(this.getAllGuides(), this.getUrlKey()), (m = this.launcher) == null || m.setPlayState(t), (v = this.launcher) == null || v.setPanelOpen(this.panelVisible), (w = this.launcher) == null || w.setPlaying(this.mode === "playback");
  }
  onUrlChange() {
    if (this.applyAccessPolicy(), this.mode === "recording") return;
    if (this.mode === "playback") {
      this.rebindPlaybackAfterNavigation();
      return;
    }
    const t = this.mode === "manage-routes" && !this.readOnly, e = this.getGuideForCurrentPage();
    e ? this.load(e, { dirty: !1, mode: t ? "manage-routes" : "idle" }) : (this.guide = ce(this.getUrlKey()), this.mode = t ? "manage-routes" : "idle", this.dirty = !1, this.render()), this.syncLauncher();
  }
  render(t = {}) {
    var i, r, o;
    const e = this.guide.steps.map((a) => ({
      ...a,
      invalid: a.action !== "manual" && !se(a.selector)
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
    return this.assertUsable(), this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.guide = ce(this.getUrlKey()), this.dirty = !1, this.recordingAppend = !1, this.recordingStepsBaseline = 0, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  /** Append more recorded interactions to the current guide (from Manage steps). */
  continueRecording() {
    return this.assertUsable(), this.readOnly ? this : (this.guide || (this.guide = ce(this.getUrlKey())), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.recordingAppend = !0, this.recordingStepsBaseline = this.guide.steps.length, this.mode = "recording", this.recorder.start(), this.render(), this);
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
    const e = this.guide.steps.find((i) => i.id === t), s = e && se(e.selector);
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
    le(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), (e = (t = this.options).onComplete) == null || e.call(t);
  }
  endPlayback() {
    var t;
    return this.mode !== "playback" && !((t = this.player) != null && t.active) ? this : (le(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), this);
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
    return !this.options.allowClose && !t || this.dirty && !t && globalThis.confirm && !globalThis.confirm("Close with unsaved guide changes?") ? !1 : (this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), le(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.mode = "idle", this.render(), this.options.showLauncher && this.closePanel(), (s = (e = this.options).onClose) == null || s.call(e), !0);
  }
  exportJSON() {
    return Te(this.guide);
  }
  downloadJSON(t = `${this.guide.id}.json`) {
    return en(this.guide, t), this.dirty = !1, this;
  }
  downloadAllGuides() {
    var s;
    this.assertUsable();
    const t = this.getAllGuides();
    if (!t.length)
      return (s = globalThis.alert) == null || s.call(globalThis, "No guides to download yet."), this;
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return sn(t, `system-guider-guides-${e}.json`), this;
  }
  async copyJSON() {
    const t = await nn(this.guide);
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
    const { guides: s, errors: i } = hs(t), r = [], o = [...i];
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
          const d = await l.text(), { guides: u, errors: g } = hs(d);
          s.push(...u), i.push(...g.map((h) => `${l.name}: ${h}`));
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
    this.fileStorage || Qi(this.options.storageKey, this.guide);
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
let de = null;
const Sn = {
  init(n = {}) {
    if (typeof window > "u" || typeof document > "u")
      throw new Error("System Guider can only be initialized in a browser.");
    return de == null || de.destroy(), de = new vn(n), de;
  }
};
export {
  Sn as default
};
