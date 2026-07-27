const ft = (i, t, e = "") => {
  const s = document.createElement("button");
  return s.type = "button", s.className = `sg-button ${e ? `sg-button--${e}` : ""}`.trim(), s.dataset.action = t, s.textContent = i, s;
}, R = (i, t, e) => {
  const s = document.createElement(i);
  return s.className = t, s.textContent = e, s;
}, tt = (i, t = "ghost", { icon: e = "", ariaLabel: s = "", withLabel: n = !1 } = {}) => {
  const r = document.createElement("button");
  return r.type = "button", r.className = `sg-button sg-button--tiny ${t ? `sg-button--${t}` : ""}`.trim(), e ? (r.classList.add(n ? "sg-button--with-icon" : "sg-button--icon"), n ? r.innerHTML = `${e}<span>${i}</span>` : r.innerHTML = e, r.setAttribute("aria-label", s || i), r.title = s || i) : r.textContent = i, r;
}, Yi = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 3.25v9.5M3.25 8h9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, mi = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.6 2.7a1.5 1.5 0 0 1 2.1 2.1L5.8 12.7 2.5 13.5l.8-3.3L11.6 2.7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>
`, qe = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 4.5h9M6.2 4.5V3.4h3.6v1.1M5.2 4.5l.6 8.1h4.4l.6-8.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Mi = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8.2 6.6 11.3 12.5 4.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, Qi = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>
`, ts = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.5 8h9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`, es = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.8" width="6.6" height="6.6" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M6.4 5.1h4.4c.9 0 1.6.7 1.6 1.6v4.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, is = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M4.4 4.4 11.6 11.6M11.6 4.4 4.4 11.6" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/>
  </svg>
`, je = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M5 3.2 12.2 8 5 12.8V3.2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>
`, ss = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.8v7.2M5.2 7.2 8 10l2.8-2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, ns = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M6.2 3.2h3.6v1.5H6.2V3.2Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M5.2 4h-.8A1.4 1.4 0 0 0 3 5.4v7.2A1.4 1.4 0 0 0 4.4 14h7.2A1.4 1.4 0 0 0 13 12.6V5.4A1.4 1.4 0 0 0 11.6 4h-.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, rs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 9.8V2.8M5.2 5.2 8 2.4l2.8 2.8M3.2 12.8h9.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, os = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M2.6 4.4h3.2l1.2 1.3h6.4v6.5H2.6V4.4Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, as = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 3.2h3.4A2.2 2.2 0 0 1 8 4.4v8.4a1.8 1.8 0 0 0-1.4-.6H3.2V3.2Zm9.6 0H9.4A2.2 2.2 0 0 0 8 4.4v8.4c.4-.4.9-.6 1.4-.6h3.4V3.2Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
  </svg>
`, ze = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <rect x="5.2" y="5.2" width="7.2" height="7.2" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.6 10.2V3.8A1.2 1.2 0 0 1 4.8 2.6h6.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, yi = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" stroke-width="1.35"/>
    <path d="M8 1.8v1.4M8 12.8v1.4M1.8 8h1.4M12.8 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, ls = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M3.2 4.2h9.6v8.2H3.2V4.2Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.2 2.8h5.6v1.8H5.2V2.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M5.5 7.2h5M5.5 9.6h3.6" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/>
  </svg>
`, cs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="5.4" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3.4 13.2c.7-2.4 2.2-3.6 4.6-3.6s3.9 1.2 4.6 3.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>
`, ds = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M8 2.4 12.6 4.2v3.4c0 2.7-1.8 4.8-4.6 5.8-2.8-1-4.6-3.1-4.6-5.8V4.2L8 2.4Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
    <path d="M6.1 8.1 7.4 9.4 10 6.8" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, us = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <circle cx="8" cy="8" r="5.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M8 5v3.2l2.2 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`, hs = `
  <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
    <path d="M11.8 9.8A4.8 4.8 0 0 1 6.2 4.2 5.4 5.4 0 1 0 11.8 9.8Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  </svg>
`, Zt = (i) => {
  const t = i == null ? void 0 : i.target;
  return t instanceof Element ? t : (t == null ? void 0 : t.parentElement) instanceof Element ? t.parentElement : null;
}, bi = ({ value: i, placeholder: t, onChange: e, onSave: s, onCancel: n }) => {
  const r = document.createElement("li");
  r.className = "sg-string-list__item sg-string-list__item--draft";
  const o = document.createElement("input");
  o.type = "text", o.className = "sg-field sg-string-list__draft-input", o.value = i, o.placeholder = t, o.setAttribute("aria-label", t || "Value"), o.addEventListener("input", () => e(o.value)), o.addEventListener("keydown", (d) => {
    d.key === "Enter" && (d.preventDefault(), s()), d.key === "Escape" && (d.preventDefault(), n());
  });
  const a = document.createElement("div");
  a.className = "sg-string-list__actions";
  const l = tt("Save", "primary", { icon: Mi, ariaLabel: "Save" });
  l.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), s();
  });
  const c = tt("Cancel", "ghost", { icon: Qi, ariaLabel: "Cancel" });
  return c.addEventListener("click", (d) => {
    d.preventDefault(), d.stopPropagation(), n();
  }), a.append(l, c), r.append(o, a), r;
};
class ps {
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
    const r = R("span", "sg-recording-indicator__status", "Recording..."), o = document.createElement("span");
    o.className = "sg-recording-indicator__divider", o.setAttribute("aria-hidden", "true");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-recording-indicator__stop", a.title = "Stop recording", a.setAttribute("aria-label", "Stop recording");
    const l = document.createElement("span");
    l.className = "sg-recording-indicator__stop-icon", l.setAttribute("aria-hidden", "true"), l.innerHTML = `
      <svg viewBox="0 0 12 12" focusable="false">
        <rect x="1.5" y="1.5" width="9" height="9" rx="2"/>
      </svg>
    `;
    const c = R("span", "sg-recording-indicator__stop-label", "Stop");
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
    var b;
    if (!t || this.root.classList.contains("sg-panel--hidden") || this.visible === !1 || ((b = this.state) == null ? void 0 : b.mode) === "playback" || this.dragging) return;
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
      R("span", "sg-eyebrow", "● LIVE RECORDING"),
      R("h2", "sg-panel__title", this.titleForMode(t))
    ) : l.append(
      R("h2", "sg-panel__title", "System Guider"),
      R("div", "sg-panel__subtitle", this.titleForMode(t))
    ), o.append(a, l);
    const c = document.createElement("div");
    if (c.className = "sg-panel__header-actions", t === "manage-routes") {
      const p = tt(e ? "Open" : "Minimize", "ghost", {
        icon: e ? es : ts,
        ariaLabel: e ? "Open settings" : "Minimize"
      });
      if (p.dataset.action = "toggle-collapse", p.classList.add("sg-panel__chrome-btn", "sg-panel__header-minimize"), p.setAttribute("aria-expanded", String(!e)), c.append(p), !e) {
        const g = tt("Close", "ghost", {
          icon: is,
          ariaLabel: "Close settings"
        });
        g.dataset.action = "close", g.classList.add("sg-panel__chrome-btn", "sg-panel__header-close"), c.append(g);
      }
    } else {
      const p = ft(e ? "Open" : "Minimize", "toggle-collapse", "ghost");
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
      p.className = "sg-string-list__head", p.append(R("span", "sg-string-list__label", t));
      const g = tt(o, "secondary", { icon: Yi, ariaLabel: o || "Add" });
      g.classList.add("sg-string-list__add"), g.disabled = c !== null, g.addEventListener("click", (m) => {
        var b;
        m.preventDefault(), m.stopPropagation(), c = "add", d = "", h(), (b = a.querySelector(".sg-string-list__draft-input")) == null || b.focus();
      }), p.append(g), a.append(p);
      const f = document.createElement("ul");
      if (f.className = "sg-string-list__items", c === "add" && f.append(bi({
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
      l.forEach((m, b) => {
        if (c === b) {
          f.append(bi({
            value: d,
            placeholder: n,
            onChange: (C) => {
              d = C;
            },
            onSave: () => {
              const C = String(d || "").trim();
              if (!C) {
                c = null, d = "", h();
                return;
              }
              const S = [...l];
              S[b] = C, u([...new Set(S)]);
            },
            onCancel: () => {
              c = null, d = "", h();
            }
          }));
          return;
        }
        const _ = document.createElement("li");
        _.className = "sg-string-list__item";
        const w = document.createElement("code");
        w.className = "sg-string-list__value", w.textContent = m, w.title = m;
        const k = document.createElement("div");
        k.className = "sg-string-list__actions";
        const E = tt("Edit", "ghost", { icon: mi, ariaLabel: "Edit" });
        E.disabled = c !== null, E.addEventListener("click", (C) => {
          var S, L;
          C.preventDefault(), C.stopPropagation(), c = b, d = m, h(), (S = a.querySelector(".sg-string-list__draft-input")) == null || S.focus(), (L = a.querySelector(".sg-string-list__draft-input")) == null || L.select();
        });
        const y = tt("Delete", "danger", { icon: qe, ariaLabel: "Delete" });
        y.disabled = c !== null, y.addEventListener("click", (C) => {
          C.preventDefault(), C.stopPropagation(), u(l.filter((S, L) => L !== b));
        }), k.append(E, y), _.append(w, k), f.append(_);
      }), a.append(f);
    };
    return h(), a;
  }
  renderIdle(t) {
    t.append(
      R("p", "sg-lead", "Record actions, refine the steps, then replay a polished walkthrough.")
    ), this.state.pageUrl && t.append(R("p", "sg-page-key", `Page: ${this.state.pageUrl}`)), this.renderPageGuidesList(t);
    const e = document.createElement("div");
    e.className = "sg-empty", e.append(
      R("strong", "", this.state.hasPageGuide ? "Guide ready for this page" : "Ready when you are"),
      R(
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
    s.className = "sg-page-guides sg-settings-content__section", s.append(R("div", "sg-page-guides__label", "Saved guides on this page"));
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
    if (this.state.flashMessage && t.append(R("p", "sg-status", this.state.flashMessage)), e === "recording") {
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
      u.className = "sg-guide-field__label-icon", u.setAttribute("aria-hidden", "true"), u.innerHTML = ls, d.append(u, document.createTextNode("Guide name")), this.state.dirty && d.append(R("em", "sg-guide-editor__badge", "Unsaved"));
      const h = tt("Save", "primary", { icon: Mi, withLabel: !0, ariaLabel: "Save guide" });
      h.dataset.action = "save-page", h.classList.add("sg-guide-field__save"), h.disabled = this.state.steps.length === 0, c.append(d, h), l.append(c);
      const p = document.createElement("input");
      p.className = "sg-field sg-field--guide-title", p.value = this.state.guideTitle || "", p.dataset.guideField = "title", p.placeholder = "Example: Create employee schedule", p.setAttribute("aria-label", "Guide name"), p.addEventListener("keydown", (L) => {
        L.key === "Enter" && (L.preventDefault(), p.blur());
      }), p.addEventListener("blur", () => {
        var L, M;
        (M = (L = this.handlers).commitGuideTitle) == null || M.call(L);
      }), l.append(p);
      const g = document.createElement("details");
      g.className = "sg-step-settings sg-guide-settings";
      const f = document.createElement("summary");
      f.className = "sg-step-settings__summary sg-step-settings__summary--split", f.innerHTML = '<span>Guide options</span><span class="sg-step-settings__chevron" aria-hidden="true">▾</span>', g.append(f);
      const m = document.createElement("div");
      m.className = "sg-step-settings__body";
      const b = document.createElement("label");
      b.className = "sg-check";
      const _ = document.createElement("input");
      _.type = "checkbox", _.dataset.guideSetting = "reloadOnNavigate", _.checked = !!((n = this.state.guideSettings) != null && n.reloadOnNavigate), b.append(_, document.createTextNode(" Reload on other route"));
      const w = document.createElement("label");
      w.className = "sg-check";
      const k = document.createElement("input");
      k.type = "checkbox", k.dataset.guideSetting = "resetBeforePlay", k.checked = ((r = this.state.guideSettings) == null ? void 0 : r.resetBeforePlay) === "reload", w.append(k, document.createTextNode(" Reload before play")), m.append(b, w), g.append(m), l.append(g), a.append(l);
      const E = document.createElement("div");
      E.className = "sg-guide-editor__steps";
      const y = document.createElement("div");
      y.className = "sg-guide-editor__steps-head";
      const C = document.createElement("div");
      C.className = "sg-guide-editor__steps-meta", C.append(
        R("span", "sg-guide-editor__steps-label", "Steps"),
        R("span", "sg-guide-editor__steps-count", String(o))
      );
      const S = ft("Add steps", "add-steps", "secondary");
      S.classList.add("sg-button--compact", "sg-guide-editor__add-steps"), y.append(C, S), E.append(y), a.append(E), t.append(a), this._stepsBlock = E, this.state.focusGuideTitle && queueMicrotask(() => {
        p.focus(), p.select();
      });
    } else
      this._stepsBlock = null;
    if (!this.state.steps.length) {
      const o = R("div", "sg-empty", e === "manage" ? "No steps in this guide yet." : "No steps yet — start interacting with the page.");
      e === "manage" && this._stepsBlock ? this._stepsBlock.append(o) : t.append(o);
      return;
    }
    const s = document.createElement("ol");
    s.className = "sg-step-list", this.state.steps.forEach((o, a) => {
      var b, _, w, k, E;
      const l = document.createElement("li");
      l.className = "sg-step", l.dataset.stepId = o.id, l.draggable = !1, o.invalid && l.classList.add("sg-step--invalid");
      const c = Number(this.state.recordingStepsBaseline) || 0, d = e === "recording" && a >= c;
      d && l.classList.add("sg-step--new");
      const u = document.createElement("div");
      u.className = "sg-step__top";
      const h = document.createElement("div");
      if (h.className = "sg-step__top-left", e === "manage") {
        const y = document.createElement("span");
        y.className = "sg-step__drag", y.draggable = !0, y.title = "Drag to reorder", y.setAttribute("aria-label", `Drag step ${a + 1}`), y.textContent = "⋮⋮", y.addEventListener("dragstart", (C) => {
          C.dataTransfer.setData("text/plain", o.id), C.dataTransfer.effectAllowed = "move", l.classList.add("sg-step--dragging");
        }), y.addEventListener("dragend", () => {
          l.classList.remove("sg-step--dragging");
        }), h.append(y);
      }
      if (h.append(
        R("span", "sg-step__number", String(a + 1)),
        R("span", "sg-step__action", o.action)
      ), d && h.append(R("span", "sg-step__new", "New")), o.invalid && h.append(R("span", "sg-step__warning", "Target missing")), u.append(h), e === "manage") {
        const y = document.createElement("div");
        y.className = "sg-step__top-right";
        const C = tt("Play", "ghost", { icon: je, withLabel: !0, ariaLabel: "Play from here" });
        C.classList.add("sg-step__play"), C.addEventListener("click", (L) => {
          var M, I;
          L.preventDefault(), L.stopPropagation(), (I = (M = this.handlers)["play-here"]) == null || I.call(M, o.id);
        });
        const S = tt("Remove", "danger", { icon: qe, ariaLabel: "Remove step" });
        S.classList.add("sg-step__remove-icon"), S.addEventListener("click", (L) => {
          var M, I;
          L.preventDefault(), L.stopPropagation(), (I = (M = this.handlers).remove) == null || I.call(M, o.id);
        }), y.append(C, S), u.append(y);
      }
      const p = document.createElement("input");
      p.className = "sg-field sg-step__title", p.value = o.title, p.dataset.field = "title", p.disabled = e === "recording", p.placeholder = "Step title", p.setAttribute("aria-label", `Step ${a + 1} title`);
      const g = document.createElement("div");
      g.className = "sg-step__selector-wrap";
      const f = Array.isArray(o.selectorAlternatives) ? o.selectorAlternatives.filter((y) => y == null ? void 0 : y.selector) : [];
      if (f.length > 1) {
        const y = document.createElement("select");
        y.className = "sg-field sg-step__selector-select", y.dataset.field = "selector", y.setAttribute("aria-label", `Step ${a + 1} target selector`);
        const C = String(o.selector || ""), S = /* @__PURE__ */ new Set(), L = (M, { selected: I = !1, suggested: V = !1 } = {}) => {
          const N = String(M.selector || "");
          if (!N || S.has(N)) return;
          S.add(N);
          const T = document.createElement("option");
          T.value = N;
          const B = String(M.title || "").trim(), $ = String(M.detail || "").trim(), z = N.length > 52 ? `${N.slice(0, 50)}…` : N;
          let G = B || $ || z;
          B && $ && $ !== B ? G = `${B} — ${$}` : B && z !== B && (G = `${B} (${z})`), (V || M.suggested) && (G = `★ ${G}`), T.textContent = G, T.title = N, (I || N === C) && (T.selected = !0), y.append(T);
        };
        f.forEach((M) => L(M)), C && !S.has(C) && L({ selector: C, title: "Current" }, { selected: !0 }), g.append(y);
      } else
        g.append(R("code", "sg-step__selector", o.selector || "No target"));
      if (e === "manage" && o.selector) {
        const y = tt("Copy", "ghost", { icon: ze, ariaLabel: "Copy selector" });
        y.classList.add("sg-step__selector-copy"), y.addEventListener("click", async (C) => {
          var S, L;
          C.preventDefault(), C.stopPropagation();
          try {
            await ((L = (S = navigator.clipboard) == null ? void 0 : S.writeText) == null ? void 0 : L.call(S, String(o.selector))), y.title = "Copied", setTimeout(() => {
              y.title = "Copy selector";
            }, 1e3);
          } catch {
          }
        }), g.append(y);
      }
      const m = document.createElement("div");
      if (m.className = "sg-step__body", m.append(p, g), l.append(u, m), e === "manage" || e === "recording") {
        const y = document.createElement("div");
        y.className = "sg-step__controls";
        const C = (M, I, V = "") => {
          const N = ft(M, I, V);
          return N.classList.add("sg-button--compact"), N.addEventListener("click", (T) => {
            var B, $;
            T.preventDefault(), T.stopPropagation(), ($ = (B = this.handlers)[I]) == null || $.call(B, o.id);
          }), N;
        }, S = document.createElement("div");
        S.className = "sg-step__controls-left";
        const L = document.createElement("div");
        if (L.className = "sg-step__controls-right", e === "manage") {
          if (o.action === "input") {
            const N = document.createElement("label");
            N.className = "sg-check sg-check--compact";
            const T = document.createElement("input");
            T.type = "checkbox", T.dataset.field = "waitRequired", T.checked = !!((b = o.waitFor) != null && b.required), N.append(T, document.createTextNode(" Require value")), S.append(N);
          }
          const M = this.state.steps.length, I = a + 1, V = (N) => {
            const T = document.createElement("div");
            T.className = "sg-step__move-picker";
            const B = N === "up", $ = ft(B ? "↑" : "↓", "", "ghost");
            $.classList.add("sg-button--compact", "sg-step__move-btn"), $.setAttribute("aria-haspopup", "listbox"), $.setAttribute("aria-expanded", "false"), $.title = B ? "Move to an earlier step" : "Move to a later step", $.setAttribute("aria-label", B ? `Move step ${I} to an earlier position` : `Move step ${I} to a later position`);
            const z = B ? Array.from({ length: a }, (D, F) => I - 1 - F) : Array.from({ length: M - I }, (D, F) => I + 1 + F);
            z.length || ($.disabled = !0);
            const G = document.createElement("div");
            return G.className = "sg-step__move-menu", G.hidden = !0, G.setAttribute("role", "listbox"), G.setAttribute("aria-label", B ? "Earlier step numbers" : "Later step numbers"), z.forEach((D) => {
              const F = document.createElement("button");
              F.type = "button", F.className = "sg-step__move-option", F.textContent = String(D), F.setAttribute("role", "option"), F.title = `Move to step ${D}`, F.addEventListener("click", (nt) => {
                var it, ct;
                nt.preventDefault(), nt.stopPropagation(), this.closeMoveMenus(), (ct = (it = this.handlers)["move-to"]) == null || ct.call(it, o.id, D);
              }), G.append(F);
            }), $.addEventListener("click", (D) => {
              if (D.preventDefault(), D.stopPropagation(), $.disabled) return;
              const F = G.hidden;
              this.closeMoveMenus(), F && (G.hidden = !1, $.setAttribute("aria-expanded", "true"));
            }), T.append($, G), T;
          };
          S.append(V("up"), V("down"));
        } else
          L.append(
            C("Play", "play-here", "ghost"),
            C("Remove", "remove", "danger")
          );
        if (y.append(S), L.childNodes.length && y.append(L), e === "manage") {
          const M = document.createElement("details");
          M.className = "sg-step-settings";
          const I = document.createElement("summary");
          I.className = "sg-step-settings__summary sg-step-settings__summary--split", I.innerHTML = `
            <span class="sg-step-settings__summary-left">
              <span class="sg-step-settings__gear" aria-hidden="true">${yi}</span>
              Settings
            </span>
            <span class="sg-step-settings__chevron" aria-hidden="true">▾</span>
          `, M.append(I);
          const V = document.createElement("div");
          V.className = "sg-step-settings__body";
          const N = document.createElement("label");
          N.className = "sg-step-settings__field", N.append(document.createTextNode("Step description"));
          const T = document.createElement("textarea");
          T.className = "sg-field sg-step__description", T.rows = 2, T.value = o.description || "", T.dataset.field = "description", T.placeholder = "Shown next to the highlight while playing", T.setAttribute("aria-label", `Step ${a + 1} description`), N.append(T);
          const B = document.createElement("label");
          B.className = "sg-check";
          const $ = document.createElement("input");
          $.type = "checkbox", $.dataset.stepSetting = "autoScroll", $.checked = ((_ = o.settings) == null ? void 0 : _.autoScroll) !== !1, B.append($, document.createTextNode(" Auto-scroll"));
          const z = document.createElement("label");
          z.className = "sg-step-settings__field", z.append(document.createTextNode("Show delay (ms)"));
          const G = document.createElement("input");
          G.type = "number", G.min = "0", G.step = "50", G.className = "sg-field", G.value = String(((w = o.settings) == null ? void 0 : w.delay) ?? 0), G.dataset.stepSetting = "delay", z.append(G);
          const D = document.createElement("label");
          D.className = "sg-step-settings__field", D.append(document.createTextNode("Hide delay (ms)"));
          const F = document.createElement("input");
          F.type = "number", F.min = "0", F.step = "50", F.className = "sg-field", F.value = String(((k = o.settings) == null ? void 0 : k.hideDelay) ?? 0), F.dataset.stepSetting = "hideDelay", D.append(F);
          const nt = document.createElement("label");
          nt.className = "sg-check";
          const it = document.createElement("input");
          it.type = "checkbox", it.dataset.stepSetting = "autoSkipMissing", it.checked = ((E = o.settings) == null ? void 0 : E.autoSkipMissing) !== !1, nt.append(it, document.createTextNode(" Auto-skip if missing")), V.append(N, B, z, D, nt), M.append(V), l.append(y, M);
        } else
          l.append(y);
      }
      s.append(l);
    }), e === "manage" && this._stepsBlock ? this._stepsBlock.append(s) : t.append(s);
  }
  renderManageRoutes(t) {
    this.state.flashMessage && t.append(R("p", "sg-status", this.state.flashMessage));
    const e = this.state.settings || {}, s = Array.isArray(this.state.allGuides) ? this.state.allGuides : [], n = document.createElement("div");
    n.className = "sg-page-guides";
    const r = document.createElement("div");
    r.className = "sg-page-guides__label-row";
    const o = document.createElement("span");
    if (o.className = "sg-page-guides__label-icon", o.setAttribute("aria-hidden", "true"), o.innerHTML = as, r.append(o, R("div", "sg-page-guides__label", `All guides (${s.length})`)), n.append(r), !s.length)
      n.append(R("p", "sg-lead", "No guides saved yet."));
    else {
      const P = /* @__PURE__ */ new Map();
      s.forEach((O) => {
        const A = O.url || "/";
        P.has(A) || P.set(A, []), P.get(A).push(O);
      }), [...P.entries()].sort((O, A) => O[0].localeCompare(A[0])).forEach(([O, A]) => {
        const K = document.createElement("div");
        K.className = "sg-manage-section";
        const ot = document.createElement("div");
        ot.className = "sg-manage-section__path";
        const vt = document.createElement("span");
        vt.className = "sg-manage-section__path-icon", vt.setAttribute("aria-hidden", "true"), vt.innerHTML = os, ot.append(vt, document.createTextNode(O)), K.append(ot);
        const re = document.createElement("ul");
        re.className = "sg-page-guides__list", A.forEach((Ct) => {
          const wt = document.createElement("li");
          wt.className = "sg-page-guides__item sg-page-guides__item--actions", wt.dataset.guideId = Ct.id;
          const De = document.createElement("div");
          De.className = "sg-page-guides__copy";
          const Fe = document.createElement("div");
          Fe.className = "sg-page-guides__head";
          const He = document.createElement("div");
          He.className = "sg-page-guides__title-row";
          const pi = String(Ct.title || "Untitled").split(" · "), gi = (pi[0] || "Untitled").trim(), fi = pi.slice(1).join(" · ").trim(), Ji = `${Ct.steps} step${Ct.steps === 1 ? "" : "s"}`, Ue = /^(\d+)\s+steps?$/i.test(gi), oe = document.createElement("div");
          if (oe.className = "sg-page-guides__title-line", !Ue) {
            const ht = document.createElement("strong");
            ht.textContent = gi, oe.append(ht);
          }
          if (fi) {
            const ht = document.createElement("span");
            ht.className = `sg-page-guides__meta${Ue ? " sg-page-guides__meta--solo" : ""}`, ht.textContent = fi, oe.append(ht);
          } else if (Ue) {
            const ht = document.createElement("span");
            ht.className = "sg-page-guides__meta sg-page-guides__meta--solo", ht.textContent = "Untitled guide", oe.append(ht);
          }
          const We = document.createElement("span");
          We.className = "sg-page-guides__badge", We.textContent = Ji, He.append(oe, We), Fe.append(He), De.append(Fe);
          const we = document.createElement("div");
          we.className = "sg-page-guides__actions";
          const ae = tt("Play", "secondary", { icon: je, ariaLabel: "Play guide" });
          if (ae.classList.add("sg-page-guides__action", "sg-page-guides__action--play"), ae.dataset.action = "play-guide", ae.dataset.guideId = Ct.id, this.state.readOnly)
            we.append(ae);
          else {
            const ht = tt("Edit", "secondary", { icon: mi, ariaLabel: "Edit steps" });
            ht.classList.add("sg-page-guides__action", "sg-page-guides__action--edit"), ht.dataset.action = "edit-guide", ht.dataset.guideId = Ct.id;
            const Se = tt("Delete", "danger", { icon: qe, ariaLabel: "Delete guide" });
            Se.classList.add("sg-page-guides__action", "sg-page-guides__action--delete"), Se.dataset.action = "delete-guide", Se.dataset.guideId = Ct.id, we.append(ht, ae, Se);
          }
          wt.append(De, we), re.append(wt);
        }), K.append(re), n.append(K);
      });
    }
    const a = document.createElement("div");
    a.className = "sg-guides-tools";
    const l = tt("Load", "secondary", { icon: ss, withLabel: !0 });
    l.dataset.action = "load";
    const c = tt("Paste", "secondary", { icon: ns, withLabel: !0 });
    c.dataset.action = "paste";
    const d = tt("Export", "primary", { icon: rs, withLabel: !0 });
    d.dataset.action = "download-all", a.append(l, c, d), n.append(a), t.append(n);
    const u = document.createElement("div");
    u.className = "sg-settings sg-settings--nested sg-settings-card sg-account-panel";
    const h = document.createElement("div");
    h.className = "sg-account-panel__head";
    const p = document.createElement("span");
    p.className = "sg-account-panel__head-icon", p.setAttribute("aria-hidden", "true"), p.innerHTML = cs, h.append(p, R("div", "sg-page-guides__label", "Current account")), u.append(h);
    const g = this.state.accountId, f = !(g == null || g === ""), m = document.createElement("div");
    m.className = `sg-account-card${f ? "" : " sg-account-card--empty"}`;
    const b = document.createElement("div");
    b.className = "sg-account-card__left";
    const _ = document.createElement("span");
    _.className = "sg-account-card__badge", _.textContent = "ID";
    const w = document.createElement("div");
    w.className = "sg-account-card__meta", w.append(R("span", "sg-account-card__caption", "Your account ID"));
    const k = document.createElement("strong");
    if (k.className = "sg-account-card__value", k.textContent = f ? String(g) : "Not signed in", k.title = f ? "Logged-in account ID from the host app" : "Host app has not passed an account ID yet", w.append(k), b.append(_, w), m.append(b), f) {
      const P = tt("Copy", "secondary", {
        icon: ze,
        withLabel: !0,
        ariaLabel: "Copy account ID"
      });
      P.classList.add("sg-account-card__copy"), P.addEventListener("click", async (O) => {
        var ot, vt;
        O.preventDefault(), O.stopPropagation();
        const A = String(g), K = P.querySelector("span");
        try {
          await ((vt = (ot = navigator.clipboard) == null ? void 0 : ot.writeText) == null ? void 0 : vt.call(ot, A)), K ? K.textContent = "Copied" : P.textContent = "Copied", setTimeout(() => {
            K ? K.textContent = "Copy" : P.innerHTML = `${ze}<span>Copy</span>`;
          }, 1200);
        } catch {
          K ? K.textContent = A : P.textContent = A;
        }
      }), m.append(P);
    }
    u.append(m);
    const E = document.createElement("p");
    E.className = "sg-account-panel__hint";
    const y = document.createElement("span");
    y.className = "sg-account-panel__hint-icon", y.setAttribute("aria-hidden", "true"), y.innerHTML = ds;
    const C = document.createElement("span");
    f ? C.innerHTML = "Add this ID under <strong>Access</strong> to allow editing." : C.textContent = "Sign in or pass an account ID from the host app.", E.append(y, C), u.append(E);
    const S = document.createElement("div");
    S.className = "sg-settings sg-settings--nested sg-settings-card sg-defaults-panel";
    const L = document.createElement("div");
    L.className = "sg-defaults-panel__head";
    const M = document.createElement("span");
    M.className = "sg-defaults-panel__head-icon", M.setAttribute("aria-hidden", "true"), M.innerHTML = yi, L.append(M, R("div", "sg-page-guides__label", "Default settings")), S.append(L);
    const I = document.createElement("div");
    I.className = "sg-defaults-panel__checks";
    const V = document.createElement("label");
    V.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const N = document.createElement("input");
    N.type = "checkbox", N.dataset.setting = "reloadOnNavigate", N.checked = !!e.reloadOnNavigate, V.append(N, document.createTextNode(" Reload when opening another route")), I.append(V);
    const T = document.createElement("label");
    T.className = "sg-check sg-settings__row sg-defaults-panel__check";
    const B = document.createElement("input");
    B.type = "checkbox", B.dataset.setting = "resetBeforePlay", B.checked = e.resetBeforePlay === "reload", T.append(B, document.createTextNode(" Reload page before playing")), I.append(T), S.append(I);
    const $ = document.createElement("label");
    $.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", $.append(document.createTextNode("Reload resume delay (ms)"));
    const z = document.createElement("div");
    z.className = "sg-field-shell";
    const G = document.createElement("span");
    G.className = "sg-field-shell__icon", G.setAttribute("aria-hidden", "true"), G.innerHTML = us;
    const D = document.createElement("input");
    D.type = "number", D.min = "0", D.max = "10000", D.step = "50", D.className = "sg-field sg-field--shell", D.dataset.setting = "resetBeforePlayDelay", D.value = String(e.resetBeforePlayDelay ?? 450), z.append(G, D), $.append(z), S.append($);
    const F = document.createElement("label");
    F.className = "sg-step-settings__field sg-settings__row sg-defaults-panel__field", F.append(document.createTextNode("Theme mode"));
    const nt = document.createElement("div");
    nt.className = "sg-field-shell sg-field-shell--select";
    const it = document.createElement("span");
    it.className = "sg-field-shell__icon", it.setAttribute("aria-hidden", "true"), it.innerHTML = hs;
    const ct = document.createElement("select");
    ct.className = "sg-field sg-field--shell", ct.dataset.setting = "theme", [
      ["dark", "Dark"],
      ["light", "Light"]
    ].forEach(([P, O]) => {
      const A = document.createElement("option");
      A.value = P, A.textContent = O, (e.theme || "dark") === P && (A.selected = !0), ct.append(A);
    });
    const H = document.createElement("span");
    H.className = "sg-field-shell__chevron", H.setAttribute("aria-hidden", "true"), H.textContent = "▾", nt.append(it, ct, H), F.append(nt), S.append(F);
    const j = document.createElement("div");
    j.className = "sg-settings sg-settings--nested sg-settings-card", j.append(R("div", "sg-page-guides__label", "Access & toolbar"));
    const U = this.createEditableStringList({
      label: "Editor account IDs (not listed = Play only)",
      settingKey: "editorAccountIds",
      items: Array.isArray(e.editorAccountIds) ? e.editorAccountIds : [],
      placeholder: "e.g. 12",
      emptyText: "No editor accounts — Play only for everyone",
      addLabel: "Add"
    });
    j.append(U);
    const Z = document.createElement("label");
    Z.className = "sg-step-settings__field sg-settings__row", Z.append(document.createTextNode("Bypass PIN (hover orb + type to open panel)"));
    const X = document.createElement("div");
    X.className = "sg-password-field";
    const J = document.createElement("input");
    J.type = "password", J.className = "sg-field", J.inputMode = "numeric", J.autocomplete = "new-password", J.placeholder = "••••••", J.maxLength = 12, J.dataset.setting = "bypassPin", J.value = String(e.bypassPin ?? "123456");
    const Tt = tt("Show", "ghost", {
      icon: `
        <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
          <path d="M1.8 8s2.6-4.2 6.2-4.2S14.2 8 14.2 8s-2.6 4.2-6.2 4.2S1.8 8 1.8 8Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="8" cy="8" r="1.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>
      `,
      ariaLabel: "Show PIN"
    });
    Tt.classList.add("sg-password-field__toggle"), Tt.addEventListener("click", (P) => {
      P.preventDefault(), P.stopPropagation();
      const O = J.type === "password";
      J.type = O ? "text" : "password", Tt.title = O ? "Hide PIN" : "Show PIN", Tt.setAttribute("aria-label", O ? "Hide PIN" : "Show PIN");
    }), X.append(J, Tt), Z.append(X), j.append(Z);
    const Nt = document.createElement("label");
    Nt.className = "sg-check sg-settings__row";
    const Ot = document.createElement("input");
    Ot.type = "checkbox", Ot.dataset.setting = "showOrb", Ot.checked = e.showOrb !== !1, Nt.append(Ot, document.createTextNode(" Show floating orb (off = hide System Guider)")), j.append(Nt);
    const Qt = document.createElement("label");
    Qt.className = "sg-check sg-settings__row";
    const Gt = document.createElement("input");
    Gt.type = "checkbox", Gt.dataset.setting = "showAccountId", Gt.checked = !!e.showAccountId, Qt.append(Gt, document.createTextNode(" Show account ID on launcher")), j.append(Qt);
    const ve = this.createEditableStringList({
      label: "Hide toolbar on URLs",
      settingKey: "hiddenUrls",
      items: Array.isArray(e.hiddenUrls) ? e.hiddenUrls : [],
      placeholder: "/login",
      emptyText: "No hidden URLs — toolbar shows everywhere",
      addLabel: "Add"
    });
    j.append(ve), j.append(R(
      "p",
      "sg-lead",
      "Only listed IDs can record or manage. The bypass PIN provides recovery access."
    ));
    const dt = e.ui || {}, yt = document.createElement("div");
    yt.className = "sg-settings sg-settings--nested sg-settings-card", yt.append(R("div", "sg-page-guides__label", "Playback appearance"));
    const Dt = document.createElement("label");
    Dt.className = "sg-step-settings__field sg-settings__row", Dt.append(document.createTextNode("Font family"));
    const Ft = document.createElement("select");
    Ft.className = "sg-field", Ft.dataset.setting = "ui.fontFamily", [
      ["system", "System"],
      ["inter", "Inter"],
      ["arial", "Arial"],
      ["roboto", "Roboto"],
      ["serif", "Serif"]
    ].forEach(([P, O]) => {
      const A = document.createElement("option");
      A.value = P, A.textContent = O, (dt.fontFamily || "system") === P && (A.selected = !0), Ft.append(A);
    }), Dt.append(Ft), yt.append(Dt);
    const te = (P, O, A) => {
      const K = document.createElement("label");
      K.className = "sg-check sg-settings__row";
      const ot = document.createElement("input");
      ot.type = "checkbox", ot.dataset.setting = P, ot.checked = !!A, K.append(ot, document.createTextNode(` ${O}`)), yt.append(K);
    };
    te("ui.animations", "Enable animations", dt.animations !== !1), te("ui.spotlightFade", "Spotlight fade in/out", dt.spotlightFade !== !1), te("ui.animatedCursor", "Animated cursor between steps", dt.animatedCursor);
    const Ht = document.createElement("label");
    Ht.className = "sg-step-settings__field sg-settings__row", Ht.append(document.createTextNode("Highlight motion"));
    const Ut = document.createElement("select");
    Ut.className = "sg-field", Ut.dataset.setting = "ui.highlightMotion", [
      ["none", "None"],
      ["pulse", "Pulse"],
      ["wobble", "Wobble"],
      ["fade", "Fade"]
    ].forEach(([P, O]) => {
      const A = document.createElement("option");
      A.value = P, A.textContent = O, (dt.highlightMotion || "pulse") === P && (A.selected = !0), Ut.append(A);
    }), Ht.append(Ut), yt.append(Ht);
    const Wt = document.createElement("label");
    Wt.className = "sg-step-settings__field sg-settings__row", Wt.append(document.createTextNode("Transition speed (ms)"));
    const v = document.createElement("input");
    v.type = "number", v.min = "0", v.max = "1000", v.step = "20", v.className = "sg-field", v.dataset.setting = "ui.transitionMs", v.value = String(dt.transitionMs ?? 220), Wt.append(v), yt.append(Wt);
    const x = document.createElement("div");
    x.className = "sg-appearance-dim sg-settings__row";
    const W = document.createElement("div");
    W.className = "sg-appearance-dim__head", W.append(R("span", "sg-appearance-dim__label", "Overlay dim"));
    const rt = document.createElement("span");
    rt.className = "sg-appearance-dim__value";
    const q = document.createElement("input");
    q.type = "range", q.min = "0", q.max = "90", q.step = "5", q.className = "sg-field sg-field--range", q.dataset.setting = "ui.overlayOpacity", q.value = String(Math.round((Number(dt.overlayOpacity) || 0.58) * 100)), rt.textContent = `${q.value}%`, q.addEventListener("input", () => {
      rt.textContent = `${q.value}%`, x.style.setProperty("--sg-dim-pct", `${q.value}%`);
    }), x.style.setProperty("--sg-dim-pct", `${q.value}%`), W.append(rt), x.append(W, q), yt.append(x);
    const at = document.createElement("div");
    at.className = "sg-settings__colors";
    const lt = (P, O, A) => {
      const K = document.createElement("label");
      K.className = "sg-settings__color-row";
      const ot = document.createElement("span");
      ot.className = "sg-settings__color-meta", ot.append(R("span", "sg-settings__color-label", O));
      const vt = document.createElement("span");
      vt.className = "sg-settings__color-hex";
      const re = String(A || "#000000").toLowerCase();
      vt.textContent = re, ot.append(vt);
      const Ct = document.createElement("span");
      Ct.className = "sg-settings__color-swatch";
      const wt = document.createElement("input");
      wt.type = "color", wt.dataset.setting = P, wt.value = re, wt.setAttribute("aria-label", O), wt.addEventListener("input", () => {
        vt.textContent = String(wt.value || "").toLowerCase();
      }), Ct.append(wt), K.append(ot, Ct), at.append(K);
    };
    lt("ui.tipBg", "Tip background", dt.tipBg || "#0f1b33"), lt("ui.tipText", "Tip text", dt.tipText || "#f8fafc"), lt("ui.skipBg", "Skip background", dt.skipBg || "#2563eb"), lt("ui.skipText", "Skip text", dt.skipText || "#ffffff"), lt("ui.spotlightColor", "Spotlight", dt.spotlightColor || "#3b82f6"), yt.append(at);
    const Mt = ft("Reset appearance", "reset-ui-settings", "secondary");
    Mt.classList.add("sg-button--compact", "sg-appearance-reset"), yt.append(Mt);
    const ut = e.launcher || {}, gt = document.createElement("div");
    gt.className = "sg-settings sg-settings--nested sg-settings-card", gt.append(R("div", "sg-page-guides__label", "Orb"));
    const kt = document.createElement("label");
    kt.className = "sg-step-settings__field sg-settings__row", kt.append(document.createTextNode("Size"));
    const qt = document.createElement("select");
    qt.className = "sg-field", qt.dataset.setting = "launcher.size", [
      ["56", "Small"],
      ["68", "Medium"],
      ["80", "Large"]
    ].forEach(([P, O]) => {
      const A = document.createElement("option");
      A.value = P, A.textContent = O, Number(ut.size ?? 80) === Number(P) && (A.selected = !0), qt.append(A);
    }), kt.append(qt);
    const jt = document.createElement("label");
    jt.className = "sg-step-settings__field sg-settings__row", jt.append(document.createTextNode("Position"));
    const zt = document.createElement("select");
    zt.className = "sg-field", zt.dataset.setting = "launcher.position", [
      ["bottom-right", "Bottom right"],
      ["bottom-left", "Bottom left"],
      ["top-right", "Top right"],
      ["top-left", "Top left"]
    ].forEach(([P, O]) => {
      const A = document.createElement("option");
      A.value = P, A.textContent = O, (ut.position || "bottom-right") === P && (A.selected = !0), zt.append(A);
    }), jt.append(zt);
    const ee = document.createElement("label");
    ee.className = "sg-check sg-settings__row";
    const Kt = document.createElement("input");
    Kt.type = "checkbox", Kt.dataset.setting = "launcher.animations", Kt.checked = ut.animations !== !1, ee.append(Kt, document.createTextNode(" Animate orb")), gt.append(kt, jt, ee);
    const ie = document.createElement("div");
    ie.className = "sg-settings-layout";
    const Lt = document.createElement("nav");
    Lt.className = "sg-settings-sidebar", Lt.setAttribute("aria-label", "Panel sections"), Lt.append(R("div", "sg-settings-sidebar__title", "System Guider"));
    const Vt = document.createElement("div");
    Vt.className = "sg-settings-content";
    const se = {
      guides: n,
      account: u,
      general: S,
      access: j,
      appearance: yt,
      orb: gt
    };
    Object.entries(se).forEach(([P, O]) => {
      O.classList.add("sg-settings-content__section"), O.dataset.settingsSection = P;
    }), Vt.append(...Object.values(se));
    const ui = {
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
    }, hi = (P) => {
      this.settingsSection = se[P] ? P : "guides", Object.entries(se).forEach(([O, A]) => {
        A.hidden = O !== this.settingsSection;
      }), Lt.querySelectorAll(".sg-settings-sidebar__item").forEach((O) => {
        const A = O.dataset.section === this.settingsSection;
        O.classList.toggle("is-active", A), O.setAttribute("aria-current", A ? "page" : "false");
      }), Vt.scrollTop = 0;
    }, ne = (P, O, A) => {
      const K = document.createElement("button");
      return K.type = "button", K.className = "sg-settings-sidebar__item", K.innerHTML = ui[O] || ui.general, K.dataset.tooltip = P, K.dataset.section = A, K.setAttribute("aria-label", P), K.title = P, K.addEventListener("click", () => {
        hi(A);
      }), Lt.append(K), K;
    };
    ne("Guides", "guides", "guides"), ne("Account", "account", "account"), ne("Defaults", "general", "general"), ne("Access", "access", "access"), ne("Appearance", "appearance", "appearance"), ne("Orb", "orb", "orb"), ie.append(Lt, Vt), t.append(ie), hi(this.settingsSection);
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
      R("span", "", `Step ${Math.min(s + 1, n)} of ${n}`),
      R("span", "", `${n ? Math.round((s + 1) / n * 100) : 0}%`)
    );
    const l = document.createElement("div");
    l.className = "sg-progress__bar";
    const c = document.createElement("span");
    if (c.style.width = `${n ? (s + 1) / n * 100 : 0}%`, l.append(c), t.append(a, l), e && t.append(
      R("h3", "sg-playback__title", e.title),
      R("p", "sg-playback__description", e.description)
    ), r) {
      const d = String(this.state.message || "").trim();
      t.append(R(
        "p",
        "sg-status sg-status--error",
        d || (o ? "Target not found. Skipping to the next step…" : "Target not found. Follow this guide's requirements first, then continue — or skip this step.")
      ));
    } else this.state.waiting && (this.state.waitKind === "target" || this.state.waitKind === "navigate") && t.append(R(
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
      const s = tt("Play guide", "secondary", {
        icon: je,
        withLabel: !0,
        ariaLabel: "Play guide"
      });
      s.dataset.action = "play", s.classList.add("sg-panel__btn-play"), s.disabled = this.state.steps.length === 0;
      const n = document.createElement("div");
      n.className = "sg-panel__footer-more", n.append(
        ft("All guides", "open-manage", "ghost"),
        ft("Download", "download", "ghost"),
        ft("Download all", "download-all", "ghost"),
        ft("Copy JSON", "copy", "ghost"),
        ft("Close", "close", "ghost")
      ), e.append(s, n);
    } else {
      if (t === "manage-routes")
        return null;
      t === "playback" && (e.append(
        ft(this.labels.back, "prev", "secondary"),
        ft(this.labels.skip, "skip", "secondary"),
        ft(this.labels.next, "next", "primary"),
        ft(this.labels.close, "close", "ghost")
      ), e.querySelector('[data-action="prev"]').disabled = this.state.currentIndex <= 0, e.querySelector('[data-action="next"]').disabled = !!(this.state.waiting || this.state.failed));
    }
    return e;
  }
  handleClick(t) {
    var l, c, d, u, h, p, g;
    const e = Zt(t);
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
    var c, d, u, h, p, g, f, m, b, _, w, k;
    const e = Zt(t);
    if (!e) return;
    const s = e.dataset.setting;
    if (s) {
      const E = e.type === "checkbox" ? e.checked : e.value;
      (d = (c = this.handlers)["update-setting"]) == null || d.call(c, s, E);
      return;
    }
    const n = e.dataset.guideSetting;
    if (n) {
      const E = e.dataset.guideId || this.state.currentGuideId, y = e.type === "checkbox" ? e.checked : e.value;
      (h = (u = this.handlers)["edit-guide-setting"]) == null || h.call(u, E, n, y);
      return;
    }
    const r = e.dataset.stepSetting;
    if (r) {
      const E = (p = e.closest("[data-step-id]")) == null ? void 0 : p.dataset.stepId, y = e.type === "checkbox" ? e.checked : e.value;
      (f = (g = this.handlers)["edit-step-setting"]) == null || f.call(g, E, r, y);
      return;
    }
    const o = e.dataset.guideField;
    if (o) {
      (b = (m = this.handlers).editGuide) == null || b.call(m, o, e.value);
      return;
    }
    const a = e.dataset.field, l = (_ = e.closest("[data-step-id]")) == null ? void 0 : _.dataset.stepId;
    !a || !l || (k = (w = this.handlers).edit) == null || k.call(w, l, a, a === "waitRequired" ? e.checked : e.value);
  }
  handlePreview(t) {
    var n, r, o;
    const e = Zt(t), s = (n = e == null ? void 0 : e.closest) == null ? void 0 : n.call(e, "[data-step-id]");
    s && !s.contains(t.relatedTarget) && ((o = (r = this.handlers).preview) == null || o.call(r, s.dataset.stepId));
  }
  handlePreviewEnd(t) {
    var n, r, o;
    const e = Zt(t), s = (n = e == null ? void 0 : e.closest) == null ? void 0 : n.call(e, "[data-step-id]");
    s && !s.contains(t.relatedTarget) && ((o = (r = this.handlers).previewEnd) == null || o.call(r));
  }
  handleDragStart(t) {
    const e = Zt(t);
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
    const e = Zt(t), s = (r = e == null ? void 0 : e.closest) == null ? void 0 : r.call(e, "[data-step-id]"), n = t.dataTransfer.getData("text/plain");
    n && s && n !== s.dataset.stepId && ((a = (o = this.handlers).drop) == null || a.call(o, n, s.dataset.stepId));
  }
  startDrag(t) {
    var o, a;
    if (t.button != null && t.button !== 0) return;
    const e = Zt(t);
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
const xt = (i) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(i) : String(i).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, Y = (i) => String(i || "").replace(/\s+/g, " ").trim().toLowerCase(), Jt = [
  ".branch-card",
  ".day-column",
  ".day-name",
  "[data-guider-tile]",
  '[class*="branch-card"]',
  ".schedule-card",
  ".stat-card",
  ".kpi-card"
].join(", "), ii = (i) => {
  var l, c, d, u, h, p, g, f, m, b, _, w;
  if (!(i instanceof Element)) return "";
  if (i.id)
    try {
      const k = document.querySelector(`label[for="${xt(i.id)}"]`);
      if (k) {
        const E = Y(k.textContent);
        if (E) return E;
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
    const k = t.querySelector(":scope > label, :scope label");
    if (k) {
      const y = Y(k.textContent);
      if (y) return y;
    }
    const E = (c = t.getAttribute) == null ? void 0 : c.call(t, "name");
    if (E) {
      const y = Y(E.replace(/_/g, " "));
      if (y) return y;
    }
  }
  const e = ((d = i.closest) == null ? void 0 : d.call(i, ".p-float-label")) || i.parentElement, s = (u = e == null ? void 0 : e.querySelector) == null ? void 0 : u.call(e, ":scope > label, label");
  if (s) {
    const k = Y(s.textContent);
    if (k) return k;
  }
  const n = (h = i.matches) != null && h.call(i, Jt) ? i : (p = i.closest) == null ? void 0 : p.call(i, Jt);
  if (n) {
    if ((g = n.matches) != null && g.call(n, ".day-column, .day-name")) {
      const C = (f = n.querySelector) == null ? void 0 : f.call(n, ".day-date"), S = Y((C == null ? void 0 : C.textContent) || "");
      if (S && S !== "—" && S.length <= 80) return S;
    }
    const k = (m = n.querySelector) == null ? void 0 : m.call(
      n,
      'h1, h2, h3, h4, h5, .card-title, [class*="card-title"], [class*="tile-title"]'
    );
    if (k) {
      const C = Y(k.textContent);
      if (C && C.length <= 80) return C;
    }
    const E = (b = n.querySelector) == null ? void 0 : b.call(n, ".day-name"), y = Y((E == null ? void 0 : E.textContent) || "");
    if (y && y !== "—" && y.length <= 40) return y;
  }
  const r = (_ = i.querySelector) == null ? void 0 : _.call(i, '.nav-link-title, .menu-title, .sidebar-title, [class*="title"]');
  if (r) {
    const k = Y(r.textContent);
    if (k) return k;
  }
  const o = i.cloneNode(!0);
  (w = o.querySelectorAll) == null || w.call(o, "script, style, svg, i, .nav-icon, .sidebar-pending-dot, .badge, .p-dropdown-label, .p-multiselect-label").forEach((k) => k.remove());
  const a = Y(o.textContent);
  return a || Y(
    i.getAttribute("aria-label") || i.getAttribute("title") || i.getAttribute("placeholder") || i.getAttribute("name") || ""
  );
}, Bi = (i) => {
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
function Pi(i) {
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
        return Y(l.textContent).slice(0, 80);
      const u = (n = l.querySelector) == null ? void 0 : n.call(l, t);
      if (u) return Y(u.textContent).slice(0, 80);
      l = l.previousElementSibling;
    }
    const c = e.parentElement;
    if (!c || c === document.body) break;
    let d = c.previousElementSibling;
    for (; d; ) {
      if ((r = d.matches) != null && r.call(d, t))
        return Y(d.textContent).slice(0, 80);
      const u = (o = d.querySelector) == null ? void 0 : o.call(d, t);
      if (u) return Y(u.textContent).slice(0, 80);
      d = d.previousElementSibling;
    }
    e = c;
  }
  return "";
}
function vi(i) {
  var f, m, b, _;
  if (!(i instanceof Element)) return null;
  const t = ((f = i.closest) == null ? void 0 : f.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")) || ((m = i.matches) != null && m.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? i : null), e = t || i, s = ii(e), n = Bi(e), r = Pi(e), o = e.getAttribute("data-guider") || "", a = Y(t ? "" : e.getAttribute("aria-label") || "");
  let l = e.getAttribute("name") || "";
  if (!l || /^(pv_|apv_|pr_|p_)/i.test(l)) {
    let w = e.parentElement;
    for (let k = 0; k < 14 && w && w !== document.body; k += 1) {
      const E = ((b = w.getAttribute) == null ? void 0 : b.call(w, "name")) || "";
      if (E && !/^(pv_|apv_|pr_|p_)/i.test(E) && E.length <= 80) {
        l = E;
        break;
      }
      w = w.parentElement;
    }
  }
  const c = Y(e.getAttribute("placeholder") || ""), d = e.getAttribute("role") || (t ? "combobox" : ""), u = e.tagName.toLowerCase(), h = e.getAttribute("type") || "", p = t && ((_ = [...t.querySelectorAll("[id]")].find((w) => w.id && !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(w.id))) == null ? void 0 : _.id) || "", g = !/^(pv_|apv_|pr_|p_)id_?\d+$/i.test(e.id || "") && e.id || p || "";
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
function _e(i, t) {
  const e = Y(i), s = Y(t);
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
function gs(i, t) {
  const e = Y(i).replace(/\/+$/, ""), s = Y(t).replace(/\/+$/, "");
  return !e || !s ? 0 : e === s ? 45 : e.endsWith(s) || s.endsWith(e) ? 28 : e.includes(s) || s.includes(e) ? 12 : -25;
}
function fs(i, t) {
  const e = Y(i), s = Y(t);
  return !e || !s ? 0 : e === s ? 30 : e.includes(s) || s.includes(e) ? 12 : -20;
}
function Ee(i, t) {
  var n, r, o;
  if (!(i instanceof Element) || !t || typeof t != "object") return 0;
  let e = 0;
  const s = i.getAttribute("data-guider") || "";
  if (t.dataGuider && (s === t.dataGuider ? e += 100 : s && (e -= 40)), t.id && i.id && i.id === t.id && (e += 80), t.href && (e += gs(Bi(i), t.href)), t.text ? (e += _e(ii(i), t.text), t.ariaLabel && (e += Math.round(_e(i.getAttribute("aria-label") || "", t.ariaLabel) * 0.5))) : t.ariaLabel && (e += _e(i.getAttribute("aria-label") || "", t.ariaLabel)), t.section && (e += fs(Pi(i), t.section)), t.name) {
    const a = i.getAttribute("name") || "", l = ((o = (r = (n = i.closest) == null ? void 0 : n.call(
      i,
      '.field, .form-group, .p-field, .n-form-item, .el-form-item, [class*="form-item"]'
    )) == null ? void 0 : r.getAttribute) == null ? void 0 : o.call(r, "name")) || "";
    (a === t.name || l === t.name) && (e += 45);
  }
  return t.placeholder && (e += Math.round(_e(i.getAttribute("placeholder") || "", t.placeholder) * 0.6)), t.tag && i.tagName.toLowerCase() === t.tag && (e += 4), t.role && i.getAttribute("role") === t.role && (e += 6), t.type && i.getAttribute("type") === t.type && (e += 6), e;
}
function ms(i) {
  const t = [];
  if (i != null && i.dataGuider && t.push(`[data-guider="${xt(i.dataGuider)}"]`), i != null && i.id && t.push(`#${xt(i.id)}`), i != null && i.href) {
    const e = String(i.href);
    t.push(`a[href="${xt(e)}"]`), t.push(`a[href="${xt(e)}/"]`);
    const s = e.replace(/^\//, "");
    s && s !== e && t.push(`a[href="/${xt(s)}"]`);
  }
  return i != null && i.name && (t.push(`[name="${xt(i.name)}"]`), t.push(`.field[name="${xt(i.name)}"]`), t.push(`.field[name="${xt(i.name)}"] textarea`), t.push(`.field[name="${xt(i.name)}"] input`)), t.push('a.nav-link, a[href], button, [role="button"], [data-guider], input:not([type="hidden"]):not([type="password"]), select, textarea, [role="combobox"], label'), t.push(Jt), t.join(", ");
}
function ys(i, t = document) {
  var o, a;
  const e = t instanceof Element || t === document ? t : document;
  let s = [];
  try {
    s = [...e.querySelectorAll(ms(i))];
  } catch {
    s = [...e.querySelectorAll(`a, button, [role="button"], input, select, textarea, [data-guider], ${Jt}`)];
  }
  const n = [];
  for (const l of s)
    l instanceof Element && ((o = l.closest) != null && o.call(l, ".sg-panel, .sg-overlay, .sg-launcher") || (n.push(l), l.matches("label") && l.control instanceof Element && n.push(l.control)));
  const r = Y((i == null ? void 0 : i.text) || "");
  if (r.length >= 2)
    try {
      for (const l of e.querySelectorAll(Jt)) {
        if (!(l instanceof Element) || (a = l.closest) != null && a.call(l, ".sg-panel, .sg-overlay, .sg-launcher")) continue;
        const c = ii(l);
        c && (c === r || c.includes(r) || r.includes(c)) && n.push(l);
      }
    } catch {
    }
  return [...new Set(n)];
}
const bs = 40;
function Ie(i) {
  const t = String(i || "").trim();
  return t ? /:nth-(?:of-type|child)\s*\(/i.test(t) ? !0 : t.includes("#") || t.includes("[data-guider") ? !1 : (t.match(/>/g) || []).length >= 2 : !1;
}
function vs(i) {
  const t = String(i || "").trim();
  return t ? t.replace(/^(fill\s+in|enter|type|pick\s+a|pick|select|choose|click)\s+/i, "").trim().toLowerCase() : "";
}
function ws(i) {
  const t = i != null && i.match && typeof i.match == "object" && !Array.isArray(i.match) ? { ...i.match } : {}, e = vs(i == null ? void 0 : i.title);
  if (e.length >= 3) {
    t.text ? t.text !== e && t.text.length <= e.length + 2 && !t.dataGuider && !t.id && !t.text.includes(e) && !e.includes(t.text) && (t.text = e) : t.text = e;
    const s = /^(input|textarea|select)$/i.test(String(t.tag || "")) || !!t.placeholder || !!t.type || t.role === "combobox";
    !t.name && s && e === e.toLowerCase() && /^[a-z][a-z0-9\s_-]*$/.test(e) && (t.name = e.replace(/\s+/g, "_"));
  }
  return t.text || t.dataGuider || t.id || t.name || t.ariaLabel || Object.keys(t).length ? t : null;
}
function Te(i, {
  root: t = document,
  tag: e = ""
} = {}) {
  var l, c;
  const s = String(i || "").trim();
  if (!s) return null;
  const n = xt(s), r = t instanceof Element || t === document ? t : document, o = String(e || "").toLowerCase(), a = [];
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
function Ss(i, {
  selector: t = "",
  root: e = document,
  threshold: s = bs
} = {}) {
  const n = [], r = i && typeof i == "object" && !Array.isArray(i), o = Ie(t), a = _s(t);
  if (t)
    try {
      const u = document.querySelector(t);
      if (u instanceof Element) {
        const h = r ? Ee(u, i) : 35, p = wi(u) || a;
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
    const u = Te(i.name, { root: e, tag: i.tag });
    if (u) {
      const h = Ee(u, i);
      n.push({ element: u, score: Math.max(h, 55), via: "name" });
    }
  }
  if (r)
    for (const u of ys(i, e)) {
      const h = Ee(u, i);
      h > 0 && n.push({ element: u, score: h, via: "score", tile: wi(u) });
    }
  const l = n.find((u) => u.via === "selector" && u.tile);
  let c = n;
  if (l && (c = n.filter((u) => {
    var h, p;
    return u.via === "selector" || u.via === "name" || u.tile || ks(u.element) && (i != null && i.name) ? !0 : (p = (h = u.element) == null ? void 0 : h.matches) != null && p.call(h, 'button, a, [role="button"], .p-button, .nav-link') ? u.score >= 50 : u.score >= l.score + 15;
  })), !c.length) return null;
  c.sort((u, h) => {
    if (h.score !== u.score) return h.score - u.score;
    if (l) {
      const m = { selector: 0, name: 1, score: 2 }, b = m[u.via] ?? 3, _ = m[h.via] ?? 3;
      return b !== _ ? b - _ : 0;
    }
    const p = { name: 0, score: 1, selector: 2 }, g = p[u.via] ?? 3, f = p[h.via] ?? 3;
    return o && g !== f ? g - f : u.via === "selector" ? -1 : 1;
  });
  const d = c[0];
  return !d || d.score < s ? (d == null ? void 0 : d.via) === "selector" && t && (t.startsWith("[data-guider=") || t.startsWith("#")) || (d == null ? void 0 : d.via) === "selector" && d.tile || (d == null ? void 0 : d.via) === "name" && d.score >= 40 ? d.element : null : d.element;
}
function wi(i) {
  var t, e;
  return i instanceof Element ? ((t = i.matches) == null ? void 0 : t.call(i, Jt)) || !!((e = i.closest) != null && e.call(i, Jt)) : !1;
}
function _s(i) {
  return /\.(day-column|branch-card|schedule-card|stat-card|kpi-card)|data-guider-tile|branch-card/i.test(
    String(i || "")
  );
}
function ks(i) {
  var t, e;
  return i instanceof Element ? !!((t = i.matches) != null && t.call(
    i,
    'input, textarea, select, [role="combobox"], .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect, .p-calendar, .field, .form-group'
  ) || (e = i.closest) != null && e.call(i, ".field, .form-group, .p-field, .p-float-label")) : !1;
}
const Et = (i) => {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(i) : String(i).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}, $e = [
  ".branch-card",
  ".day-column",
  ".day-name",
  "[data-guider-tile]",
  '[class*="branch-card"]',
  ".schedule-card",
  ".stat-card",
  ".kpi-card"
].join(", "), Cs = [
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
function It(i) {
  return i instanceof Element ? i.matches($e) : !1;
}
function Yt(i) {
  var s, n, r, o;
  if (!(i instanceof Element)) return null;
  const t = (s = i.closest) == null ? void 0 : s.call(i, $e);
  if (!t) return null;
  const e = (n = i.closest) == null ? void 0 : n.call(i, Cs);
  if (e && t.contains(e) && e !== t) return null;
  if ((r = t.matches) != null && r.call(t, ".day-name")) {
    const a = (o = t.closest) == null ? void 0 : o.call(t, ".day-column");
    if (a) return a;
  }
  return t;
}
function st(i) {
  return i instanceof Element ? i.matches(
    'input[type="password"], [data-guider-ignore], [contenteditable][data-sensitive]'
  ) : !0;
}
function me(i) {
  return !i || typeof i != "string" ? !0 : /^(pv_|apv_|pr_|p_)id_?\d+$/i.test(i) || /^[a-z]{1,5}_id_\d+$/i.test(i);
}
const Le = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect", xs = /^(pv_|apv_|pr_|p_)/i;
function Ii(i) {
  const t = String(i || "").trim();
  return !(!t || t.length > 80 || xs.test(t));
}
function $i(i) {
  var e;
  if (!(i instanceof Element)) return "";
  let t = i;
  for (let s = 0; s < 14 && t && t !== document.body; s += 1) {
    const n = ((e = t.getAttribute) == null ? void 0 : e.call(t, "name")) || "";
    if (Ii(n)) return n;
    t = t.parentElement;
  }
  return "";
}
function Si(i) {
  var e;
  if (!(i instanceof Element)) return null;
  let t = i;
  for (let s = 0; s < 14 && t && t !== document.body; s += 1) {
    if (Ii((e = t.getAttribute) == null ? void 0 : e.call(t, "name"))) return t;
    t = t.parentElement;
  }
  return null;
}
function Es(i, t) {
  var r, o, a, l;
  if (!(i instanceof Element) || !t) return null;
  const e = Et(t), s = i.tagName.toLowerCase(), n = [];
  if ((r = i.matches) != null && r.call(i, Le)) {
    const c = [...i.classList].find((d) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(d));
    c && (n.push(`[name="${e}"] .${Et(c)}`), n.push(`.field[name="${e}"] .${Et(c)}`), n.push(`.mb-0[name="${e}"] .${Et(c)}`), n.push(`[name="${e}"] ${s}.${Et(c)}`));
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
      if (d.length === 1 && ((a = (o = d[0]).contains) != null && a.call(o, i)) && i !== d[0] && (l = i.matches) != null && l.call(i, Le)) {
        const u = [...i.classList].find((h) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(h));
        if (u) {
          const h = `[name="${e}"] .${Et(u)}`;
          if (document.querySelectorAll(h).length === 1) return h;
        }
      }
    } catch {
    }
  return null;
}
function Ve(i) {
  var a, l, c, d;
  if (!(i instanceof Element)) return null;
  const t = (a = i.closest) == null ? void 0 : a.call(i, Le);
  t && (i = t);
  const e = i.getAttribute("data-guider");
  if (e) return `[data-guider="${Et(e)}"]`;
  if (i.id && !me(i.id)) {
    const u = `#${Et(i.id)}`;
    if (document.querySelectorAll(u).length === 1) return u;
  }
  const s = $i(i), n = Es(i, s);
  if (n) return n;
  if ((l = i.matches) != null && l.call(i, Le)) {
    const u = [...i.querySelectorAll("[id]")].find(
      (p) => p.id && !me(p.id)
    ), h = [...i.classList].find((p) => /^p-(dropdown|multiselect|autocomplete|cascadeselect)$/.test(p));
    if (u && h) {
      const p = `${i.tagName.toLowerCase()}.${Et(h)}:has(#${Et(u.id)})`;
      try {
        if (document.querySelectorAll(p).length === 1) return p;
      } catch {
      }
    }
  }
  if (It(i) || Yt(i)) {
    const u = It(i) ? i : Yt(i);
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
    h && (u += `.${Et(h)}`);
    const p = o.parentElement;
    if (p)
      if (h && It(o)) {
        if ([...p.children].filter(
          (m) => {
            var b;
            return m instanceof Element && ((b = m.classList) == null ? void 0 : b.contains(h));
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
    if (r.length === 1 && It(o) && p)
      try {
        if (p.querySelectorAll(`:scope > ${u}`).length === 1) return g;
      } catch {
      }
    o = p;
  }
  return r.join(" > ") || null;
}
function si(i) {
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
function _t(i) {
  if (!(i instanceof Element) || !i.isConnected) return !1;
  const t = getComputedStyle(i);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = i.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function Ts(i) {
  if (!(i instanceof Element)) return !1;
  const t = i.getBoundingClientRect();
  return !(t.bottom < 0 || t.right < 0 || t.top > window.innerHeight || t.left > window.innerWidth);
}
function Re(i) {
  return _t(i) && Ts(i);
}
function Ls(i, { behavior: t = "smooth", block: e = "center" } = {}) {
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
function pe(i) {
  var n, r, o, a;
  if (!(i instanceof Element)) return null;
  const t = (n = i.closest) == null ? void 0 : n.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
  if (t && _t(t)) return t;
  if (_t(i)) {
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
    if (Re(e)) return e;
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
  if (s && _t(s)) {
    const l = s.getBoundingClientRect();
    if (l.width <= 420 && l.height <= 280) return s;
  }
  return _t(i) ? i : null;
}
function As(i) {
  return [i.top, i.left, i.width, i.height].map((t) => Math.round(t * 2) / 2).join(":");
}
function Ae(i, { requirePresent: t = !0 } = {}) {
  var c;
  if (!(i != null && i.selector) && !(i != null && i.match) && !(i != null && i.title)) return null;
  const e = ws(i), s = Ss(e, { selector: (i == null ? void 0 : i.selector) || "" });
  if (s && (!t || _t(s)))
    return _i(s);
  const n = (e == null ? void 0 : e.name) || String((e == null ? void 0 : e.text) || "").replace(/\s+/g, "_");
  if (n) {
    const d = Te(n, { tag: e == null ? void 0 : e.tag });
    if (d && (!t || _t(d))) return d;
  }
  const r = (i == null ? void 0 : i.selector) || "", o = si(r);
  if (!o || t && !_t(o)) return null;
  const a = _i(o);
  if (!(Ie(r) && e)) return a;
  const l = e ? Ee(a, e) : 0;
  return l >= 18 || (It(a) || (c = a.closest) != null && c.call(a, $e)) && (l >= 8 || !(e != null && e.name) || !Te(e.name, { tag: e.tag })) ? a : e != null && e.name && Te(e.name, { tag: e.tag }) || e != null && e.dataGuider || e != null && e.id ? null : !(e != null && e.name) && !(e != null && e.href) ? a : null;
}
function _i(i) {
  return i instanceof Element && Yt(i) || i;
}
function Ns(i) {
  return !i || i.action === "manual" ? !0 : !i.selector && !i.match && !i.title ? !1 : !!Ae(i);
}
async function Ms(i, {
  timeout: t = 1500,
  stableFrames: e = 4,
  interval: s = 50
} = {}) {
  if (!(i instanceof Element)) return null;
  const n = Date.now() + t;
  let r = "", o = 0;
  for (; Date.now() <= n; ) {
    if (!i.isConnected) return null;
    if (!_t(i))
      o = 0, r = "";
    else {
      const a = As(i.getBoundingClientRect());
      if (a === r ? o += 1 : (r = a, o = 1), o >= e) return i;
    }
    await new Promise((a) => setTimeout(a, s));
  }
  return Re(i) ? i : null;
}
const Bs = /* @__PURE__ */ new Set(["none", "pulse", "wobble", "fade"]), Ps = /* @__PURE__ */ new Set(["system", "inter", "arial", "roboto", "serif"]), Is = /* @__PURE__ */ new Set(["bottom-right", "bottom-left", "top-right", "top-left"]), ki = {
  system: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  inter: "Inter, ui-sans-serif, system-ui, sans-serif",
  arial: "Arial, Helvetica, sans-serif",
  roboto: "Roboto, Arial, sans-serif",
  serif: 'Georgia, "Times New Roman", serif'
}, ni = () => ({
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
}), Ri = () => ({
  size: 80,
  position: "bottom-right",
  animations: !0
}), Oi = () => ({
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
  launcher: Ri(),
  ui: ni()
});
function Gi(i) {
  return Array.isArray(i) ? [...new Set(i.map((t) => String(t).trim()).filter(Boolean))] : i == null || i === "" ? [] : [...new Set(
    String(i).split(/[\s,;]+/).map((t) => t.trim()).filter(Boolean)
  )];
}
function Di(i) {
  return Array.isArray(i) ? [...new Set(i.map((t) => Ze(t)).filter(Boolean))] : i == null || i === "" ? [] : [...new Set(
    String(i).split(/[\n,;]+/).map((t) => Ze(t)).filter(Boolean)
  )];
}
function Ze(i) {
  let t = String(i || "").trim();
  if (!t) return "";
  try {
    /^https?:\/\//i.test(t) && (t = new URL(t).pathname);
  } catch {
  }
  return t = t.split("?")[0].split("#")[0], t.startsWith("/") || (t = `/${t}`), t.length > 1 && (t = t.replace(/\/+$/, "")), t.toLowerCase();
}
function $s(i, t = []) {
  const e = Ze(i || "/"), s = Di(t);
  return s.length ? s.some((n) => {
    if (n.endsWith("*")) {
      const r = n.slice(0, -1);
      return e === r.replace(/\/+$/, "") || e.startsWith(r);
    }
    return e === n || e.startsWith(`${n}/`);
  }) : !1;
}
function Rs(i, t = []) {
  const e = Gi(t);
  if (!e.length || i == null || i === "") return !1;
  const s = String(i).trim();
  return e.includes(s);
}
function Os(i, t = "123456") {
  return i == null ? String(t ?? "").replace(/\D/g, "").slice(0, 12) : String(i).replace(/\D/g, "").slice(0, 12);
}
function le(i, t) {
  const e = String(i || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(e)) return e.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(e)) {
    const [, s, n, r] = e;
    return `#${s}${s}${n}${n}${r}${r}`.toLowerCase();
  }
  return t;
}
function ye(i = {}) {
  const t = ni();
  if (!i || typeof i != "object" || Array.isArray(i)) return t;
  const e = String(i.highlightMotion || t.highlightMotion), s = String(i.fontFamily || t.fontFamily).toLowerCase();
  return {
    fontFamily: Ps.has(s) ? s : t.fontFamily,
    animations: i.animations !== !1,
    highlightMotion: Bs.has(e) ? e : t.highlightMotion,
    spotlightFade: i.spotlightFade !== !1,
    animatedCursor: !!i.animatedCursor,
    tipBg: le(i.tipBg, t.tipBg),
    tipText: le(i.tipText, t.tipText),
    skipBg: le(i.skipBg, t.skipBg),
    skipText: le(i.skipText, t.skipText),
    spotlightColor: le(i.spotlightColor, t.spotlightColor),
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
function Gs(i = {}) {
  const t = Ri();
  if (!i || typeof i != "object" || Array.isArray(i)) return t;
  const e = String(i.position || t.position).toLowerCase(), s = Math.round(Number(i.size));
  return {
    size: Number.isFinite(s) ? Math.min(96, Math.max(48, s)) : t.size,
    position: Is.has(e) ? e : t.position,
    animations: i.animations !== !1
  };
}
function Bt(i = {}) {
  var r, o;
  const t = Oi();
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
    theme: String(i.theme || t.theme).toLowerCase() === "light" ? "light" : "dark",
    editorAccountIds: Gi(
      i.editorAccountIds ?? i.guiderAccounts ?? t.editorAccountIds
    ),
    bypassPin: Os(
      Object.prototype.hasOwnProperty.call(i, "bypassPin") ? i.bypassPin : t.bypassPin,
      t.bypassPin
    ),
    showAccountId: Object.prototype.hasOwnProperty.call(i, "showAccountId") ? !!i.showAccountId : !!t.showAccountId,
    showOrb: Object.prototype.hasOwnProperty.call(i, "showOrb") ? !!i.showOrb : Object.prototype.hasOwnProperty.call(i, "showLauncher") ? !!i.showLauncher : !!t.showOrb,
    hiddenUrls: Di(
      i.hiddenUrls ?? i.hiddenRoutes ?? t.hiddenUrls
    ),
    launcher: Gs(i.launcher),
    ui: ye(n)
  };
}
function ce(i = {}) {
  const t = Bt(i), e = t.ui, s = t.theme === "light" ? "light" : "dark", n = document.documentElement;
  return n && (n.dataset.sgTheme = s, n.style.setProperty("--sg-tip-bg", e.tipBg), n.style.setProperty("--sg-tip-text", e.tipText), n.style.setProperty("--sg-skip-bg", e.skipBg), n.style.setProperty("--sg-skip-text", e.skipText), n.style.setProperty("--sg-spotlight", e.spotlightColor), n.style.setProperty("--sg-overlay-opacity", String(e.overlayOpacity)), n.style.setProperty("--sg-spotlight-ms", `${e.transitionMs}ms`), n.style.setProperty("--sg-font-family", ki[e.fontFamily] || ki.system), n.dataset.sgAnimations = e.animations ? "on" : "off", n.dataset.sgHighlightMotion = e.highlightMotion, n.dataset.sgSpotlightFade = e.spotlightFade ? "on" : "off"), e;
}
const Ds = [
  ".sg-panel",
  ".sg-overlay",
  ".sg-launcher",
  ".sg-recording-indicator",
  ".sg-target-picker",
  ".modal-backdrop"
].join(", "), Fs = [
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
].join(", "), Xe = [
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
  $e
].join(", ");
function Fi(i) {
  var s, n, r, o, a, l;
  if (!(i instanceof Element)) return "";
  const t = ((s = i.getAttribute) == null ? void 0 : s.call(i, "aria-label")) || ((n = i.getAttribute) == null ? void 0 : n.call(i, "placeholder")) || ((r = i.getAttribute) == null ? void 0 : r.call(i, "title")) || "";
  if (t) return String(t).trim().slice(0, 48);
  if ((o = i.matches) != null && o.call(i, 'button, a, [role="button"], .p-button, label') || It(i)) {
    if (It(i)) {
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
function Hs(i) {
  const t = i.tagName.toLowerCase(), e = i.getAttribute("name") || "", s = i.id && !me(i.id) ? i.id : "", n = i.getAttribute("data-guider") || "", r = i.getAttribute("href") || "", o = [...i.classList].filter((c) => !/^(p-focus|p-inputtext|p-placeholder|active|open|show|p-component)$/i.test(c)).slice(0, 2), a = [t];
  n ? a.push(`[data-guider="${n}"]`) : e ? a.push(`[name="${e}"]`) : s ? a.push(`#${s}`) : o.length && a.push(`.${o.join(".")}`), r && r !== "#" && a.push(r.slice(0, 32));
  const l = Fi(i);
  return {
    title: a.join(""),
    detail: l && l.toLowerCase() !== e.toLowerCase() ? l : e || s || n || ""
  };
}
function ge(i) {
  var e;
  if (!(i instanceof Element) || i === document.body || i === document.documentElement || (e = i.matches) != null && e.call(i, Fs)) return !0;
  const t = (i.id || "").toLowerCase();
  return !!["app", "root", "content", "__next", "main", "wrapper"].includes(t);
}
function fe(i, t) {
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
function Us(i, t) {
  var e;
  if (!(i instanceof Element) || ge(i) || fe(i, t)) return !1;
  if (i.getAttribute("data-guider") || i.getAttribute("name") || It(i) || (e = i.matches) != null && e.call(i, ".field, .form-group, .p-field, .p-float-label, .mb-0, .input-group, .btn-group"))
    return !0;
  if (i.id && !me(i.id)) {
    const s = i.getBoundingClientRect();
    if (s.width <= 480 && s.height <= 320) return !0;
  }
  return !1;
}
function Ws(i, t, { interactive: e = null, raw: s = null } = {}) {
  var a, l, c, d, u, h, p;
  let n = 0;
  if (!(i instanceof Element) || ge(i)) return -999;
  e && i === e && (n += 140), s && i === s && ((a = i.matches) != null && a.call(i, Xe)) && (n += 120), (l = i.matches) != null && l.call(i, Xe) && (n += 50), i.getAttribute("data-guider") && (n += 100), i.id && !me(i.id) && (n += 35), i.getAttribute("name") && (n += 95);
  const r = $i(i);
  r && (n += 55, i.getAttribute("name") === r && (n += 25)), (c = i.matches) != null && c.call(i, 'a[href]:not([href="#"])') && (n += 40), (d = i.matches) != null && d.call(i, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect, .p-button") && (n += 45), (u = i.matches) != null && u.call(i, "input, textarea, select, button") && (n += 40), (h = i.matches) != null && h.call(i, "a.nav-link, .nav-link") && (n += 35), (p = i.matches) != null && p.call(i, ".branch-card, .day-column, [data-guider-tile]") ? n += 70 : It(i) && (n += 40), Ie(t) && (n -= 25), fe(i, e || s) && (n -= 120);
  const o = Fi(i);
  return o && o.length <= 40 && (n += 8), n;
}
function qs(i, { interactive: t = null } = {}) {
  var u;
  if (!(i instanceof Element)) return [];
  const e = t instanceof Element ? t : i, s = Si(i) || Si(e), n = Yt(i) || Yt(e), r = /* @__PURE__ */ new Set(), o = [], a = (h) => {
    var f;
    if (!(h instanceof Element) || r.has(h) || h === document.body || h === document.documentElement || ge(h) || fe(h, e) && h !== e && h !== i || (f = h.closest) != null && f.call(h, Ds) || st(h)) return;
    const p = Ve(h);
    if (!p) return;
    r.add(h);
    const g = Hs(h);
    o.push({
      element: h,
      selector: p,
      title: g.title,
      detail: g.detail,
      score: Ws(h, p, { interactive: e, raw: i }),
      fragile: Ie(p)
    });
  };
  n && a(n), a(e), i !== e && ((u = i.matches) != null && u.call(i, Xe)) && a(i), s && !ge(s) && !fe(s, e) && a(s);
  let l = e.parentElement || i.parentElement;
  for (let h = 0; h < 6 && l && !(ge(l) || fe(l, e)); h += 1)
    Us(l, e) && a(l), l = l.parentElement;
  o.sort((h, p) => p.score - h.score);
  let c = o.slice(0, 6);
  if (!c.length && e && (a(e), c = o.slice(0, 1)), !c.length) return [];
  const d = c[0].score;
  return c.map((h, p) => ({
    ...h,
    suggested: p === 0 && d >= 40
  }));
}
const At = 'input:not([type="password"]), textarea, select', Hi = [
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
].join(", "), js = [
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
].join(", "), zs = [
  ".p-datepicker-prev",
  ".p-datepicker-next",
  ".p-datepicker-prev-icon",
  ".p-datepicker-next-icon",
  ".p-datepicker-header",
  ".p-datepicker-title",
  ".p-datepicker-month",
  ".p-datepicker-year",
  ".p-datepicker-buttonbar"
].join(", "), Ci = [
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
].join(", "), mt = ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect", Ne = [
  ".p-dropdown-panel",
  ".p-multiselect-panel",
  ".p-autocomplete-panel",
  ".p-cascadeselect-panel"
].join(", ");
function Ui(i) {
  var t;
  return (t = globalThis.CSS) != null && t.escape ? globalThis.CSS.escape(i) : String(i).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function et(i) {
  return i instanceof Element ? i.matches(mt) ? i : i.closest(mt) : null;
}
function Ks(i) {
  var s;
  const t = (s = i.labels) == null ? void 0 : s[0];
  if (!t) return "";
  const e = t.cloneNode(!0);
  return e.querySelectorAll("input, select, textarea, button").forEach((n) => n.remove()), e.textContent.trim();
}
function Vs(i) {
  var n;
  const t = et(i) || i, e = ((n = t.closest) == null ? void 0 : n.call(t, '.p-float-label, .form-group, .mb-1, .mb-3, .col, [class*="form-group"]')) || t.parentElement;
  if (!(e instanceof Element)) return "";
  const s = e.querySelector(":scope > label, label");
  return s instanceof Element ? s.textContent.trim().replace(/\s+/g, " ") : "";
}
function Je(i) {
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
function Wi(i) {
  return String(i || "").replace(/\s+/g, " ").replace(/\s+\d+$/, "").trim().slice(0, 80);
}
function Zs(i) {
  const t = String(i || "").trim();
  if (!t || t.length < 2 || /^(div|span|button|a|input|select|svg|path|g|rect|li|ul|td|th|tr|table|canvas)$/i.test(t) || /^(click|submit|button|link|here|null|undefined)$/i.test(t)) return !0;
  const e = t.replace(/\D/g, "");
  return !!(e.length >= 8 && e.length >= t.replace(/\s/g, "").length * 0.7 || !/\s/.test(t) && t.length > 28 || /^[.#\[]/.test(t) || /[{};>]/.test(t) || (t.match(/\b20\d{2}\b/g) || []).length >= 3);
}
function bt(i) {
  const t = Wi(i);
  return Zs(t) ? "" : t;
}
function Ye(i) {
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
      const g = document.getElementById(d.split(/\s+/)[0]), f = bt(g == null ? void 0 : g.textContent);
      if (f) return f;
    }
    const u = (n = e.getAttribute) == null ? void 0 : n.call(e, "data-guider-label");
    if (u) {
      const g = bt(u);
      if (g) return g;
    }
    let h = e.previousElementSibling;
    for (; h; ) {
      if ((r = h.matches) != null && r.call(h, t)) {
        const f = bt(h.textContent);
        if (f) return f;
      }
      const g = (o = h.querySelector) == null ? void 0 : o.call(h, t);
      if (g) {
        const f = bt(g.textContent);
        if (f) return f;
      }
      h = h.previousElementSibling;
    }
    const p = (l = (a = e.parentElement) == null ? void 0 : a.querySelector) == null ? void 0 : l.call(
      a,
      ":scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > .card-title, :scope > .card-header"
    );
    if (p && !p.contains(i)) {
      const g = bt(p.textContent);
      if (g) return g;
    }
    e = e.parentElement;
  }
  return "";
}
function ri(i) {
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
function Xs(i) {
  return !(i instanceof Element) || !Pt(i) ? "" : bt(Je(i) || i.textContent);
}
function xi(i) {
  var t, e, s, n, r;
  return i instanceof Element ? (t = i.matches) != null && t.call(i, 'input[type="checkbox"], input[type="radio"]') ? i : ((n = (s = (e = i.closest) == null ? void 0 : e.call(i, ".p-checkbox, .p-radiobutton")) == null ? void 0 : s.querySelector) == null ? void 0 : n.call(s, 'input[type="checkbox"], input[type="radio"]')) || ((r = i.querySelector) == null ? void 0 : r.call(i, 'input[type="checkbox"], input[type="radio"]')) || null : null;
}
function Js(i) {
  var a, l, c, d, u, h, p;
  const t = et(i), e = bt(Vs(i));
  if (e) return e;
  const s = Yt(i);
  if (s) {
    const g = bt((l = (a = s.querySelector) == null ? void 0 : a.call(s, ".day-date")) == null ? void 0 : l.textContent);
    if (g && g !== "—") return g;
    const f = bt(
      (d = (c = s.querySelector) == null ? void 0 : c.call(s, "h1, h2, h3, h4, h5, .card-title")) == null ? void 0 : d.textContent
    );
    if (f) return f;
    const m = bt((h = (u = s.querySelector) == null ? void 0 : u.call(s, ".day-name")) == null ? void 0 : h.textContent);
    if (m && m !== "—") return m;
    const b = bt(Je(s));
    if (b && b !== "—") return b;
  }
  const n = i.matches("input, textarea, select"), r = !n && !t ? bt(Je(i)) : "";
  if (r) return r;
  const o = [
    t ? "" : i.getAttribute("aria-label"),
    i.getAttribute("title"),
    Ks(i),
    n ? i.getAttribute("placeholder") : "",
    i.getAttribute("placeholder"),
    i.getAttribute("name"),
    i.getAttribute("data-guider-label"),
    // Skip section headings for tiles — they steal labels ("BRANCH").
    s ? "" : Ye(i),
    (p = t == null ? void 0 : t.matches) != null && p.call(t, ".p-autocomplete") ? "Search" : "",
    t ? "Dropdown" : ""
  ];
  for (const g of o) {
    const f = bt(g);
    if (f) return f;
  }
  return ri(i) ? Ye(i) || "chart" : "";
}
function Me(i) {
  const t = Wi(i);
  return t ? /^[A-Z0-9\s\-_/]+$/.test(t) && t.length <= 24 ? t : t.charAt(0).toUpperCase() + t.slice(1) : "";
}
function Ys({
  label: i,
  choiceField: t,
  isNativeField: e,
  action: s,
  element: n,
  optionText: r = ""
}) {
  var l, c, d, u, h;
  const o = Me(i), a = Me(r);
  if (be(n) || n && Rt(n))
    return o && !/^date|calendar$/i.test(o) ? `Pick a date for ${o}` : "Pick a date";
  if (t)
    return a && o ? `Select ${o}: ${a}` : a ? `Choose “${a}”` : o ? `Select ${o}` : "Choose a value";
  if (e) {
    const p = (((l = n == null ? void 0 : n.getAttribute) == null ? void 0 : l.call(n, "type")) || "").toLowerCase();
    return p === "checkbox" || p === "radio" ? o ? `Toggle ${o}` : "Toggle this option" : (c = n == null ? void 0 : n.matches) != null && c.call(n, "textarea") ? o ? `Fill in ${o}` : "Enter details" : o ? `Enter ${o}` : "Enter a value";
  }
  return s === "click" || s === "input" ? ri(n) ? o && o.toLowerCase() !== "chart" ? `Interact with ${o}` : "Interact with the chart" : (d = n == null ? void 0 : n.matches) != null && d.call(n, 'a, [role="link"]') || (u = n == null ? void 0 : n.closest) != null && u.call(n, "a[href]") ? o ? `Go to ${o}` : "Follow this link" : (h = n == null ? void 0 : n.matches) != null && h.call(n, 'button, [role="button"], input[type="submit"], input[type="button"]') ? /^(save|submit|continue|next|confirm|apply|search|login|sign in)$/i.test(o) ? o : o ? `Click ${o}` : "Click this button" : o ? `Click ${o}` : "Click here" : o || "Continue";
}
function Qs({
  title: i,
  label: t,
  choiceField: e,
  isNativeField: s,
  element: n,
  optionText: r = ""
}) {
  var d, u, h;
  const o = Me(t), a = Me(r), l = Ye(n);
  if (be(n) || n && Rt(n))
    return "Choose a day on the calendar to continue.";
  if (e && a)
    return o ? `Pick “${a}” from ${o}.` : `Pick “${a}” from the list.`;
  if (e)
    return o ? `Open ${o} and choose a value.` : "Open the dropdown and choose a value.";
  if (s) {
    const p = (((d = n == null ? void 0 : n.getAttribute) == null ? void 0 : d.call(n, "type")) || "").toLowerCase();
    return p === "checkbox" || p === "radio" ? o ? `Check or uncheck ${o}.` : "Toggle this option." : o ? `Type the value for ${o}.` : "Type a value in this field.";
  }
  if (ri(n))
    return `Use ${o && o.toLowerCase() !== "chart" ? o : l || "the chart"} to continue to the next step.`;
  if ((u = n == null ? void 0 : n.matches) != null && u.call(n, 'a, [role="link"]') || (h = n == null ? void 0 : n.closest) != null && h.call(n, "a[href]"))
    return o ? `Open ${o} to move forward.` : "Follow this link to continue.";
  const c = String(i || "").replace(/^(click|select|enter|choose|go to|interact with|toggle|pick|fill in)\s+/i, "").trim();
  return o && c && o.toLowerCase() === c.toLowerCase() ? "" : l && o && l.toLowerCase() !== o.toLowerCase() ? `In ${l}, continue with ${o}.` : "";
}
function Pt(i) {
  var t;
  return !!((t = i == null ? void 0 : i.closest) != null && t.call(i, Hi));
}
function be(i) {
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
function tn(i) {
  return !(i instanceof Element) || be(i) ? !1 : !!i.closest(zs);
}
function Rt(i) {
  if (!(i instanceof Element)) return !1;
  if (i instanceof HTMLInputElement && (["date", "datetime-local", "time", "month", "week"].includes(i.type) || i.getAttribute("inputmode") === "none" || /date|time/i.test(i.name || "") || /date|time/i.test(i.id || "") || i.className.toLowerCase().includes("date")) || i.closest(".p-calendar, .p-datepicker-trigger")) return !0;
  const t = i.closest(js);
  return t ? /date|time|calendar|picker/i.test(t.className) ? !0 : !!t.querySelector('button, [class*="calendar"], table, .flatpickr-calendar, .dp__menu') : !1;
}
function Ei(i) {
  var l, c, d;
  if (!(i instanceof Element)) return null;
  const t = document.querySelectorAll(
    '.p-calendar input[aria-expanded="true"], .p-calendar [aria-expanded="true"], input[aria-expanded="true"]'
  );
  for (const u of t) {
    if (!(u instanceof Element) || st(u)) continue;
    const h = u.closest(".p-calendar") || u, p = (l = h.matches) != null && l.call(h, "input") ? h : (c = h.querySelector) == null ? void 0 : c.call(h, 'input:not([type="hidden"])');
    if (p && !st(p)) return p;
  }
  const e = document.querySelector(".p-calendar.p-inputwrapper-focus, .p-calendar.p-focus, .p-calendar.p-overlay-open");
  if (e) {
    const u = e.querySelector('input:not([type="hidden"])');
    if (u && !st(u)) return u;
  }
  const s = document.activeElement;
  if (s instanceof HTMLInputElement && Rt(s) && !st(s))
    return s;
  const r = [...(document.querySelector('.p-overlaypanel, .modal.show, [role="dialog"]') || document.body).querySelectorAll('input:not([type="hidden"]):not([type="password"])')].filter((u) => Rt(u) && !st(u));
  if (!r.length) return null;
  const o = ((d = i.getBoundingClientRect) == null ? void 0 : d.call(i).top) ?? 0, a = r.map((u) => ({ node: u, top: u.getBoundingClientRect().top })).filter((u) => u.top <= o + 8).sort((u, h) => h.top - u.top)[0];
  return (a == null ? void 0 : a.node) || r[0] || null;
}
function $t(i) {
  return i instanceof Element ? !!(i instanceof HTMLSelectElement || Rt(i) || et(i) || i.closest(Ne) || i.matches('[role="combobox"], [aria-autocomplete], [aria-haspopup="listbox"]') || i.getAttribute("aria-expanded") != null || i.closest('[role="combobox"]')) : !1;
}
function Be(i) {
  if (!i) return null;
  const t = et(i);
  if (t) return t;
  if (i.matches(At) || i.matches('[role="combobox"]')) return i;
  const e = i.querySelector(`${At}, [role="combobox"]`);
  return et(e) || e;
}
function Qe(i) {
  if (!(i instanceof Element)) return null;
  const t = i.querySelector('[role="listbox"], .p-dropdown-items, .p-multiselect-items, .p-autocomplete-items'), e = (t == null ? void 0 : t.id) || i.id;
  if (e) {
    const n = Ui(e), r = si(`[aria-controls="${n}"], [aria-owns="${n}"]`), o = et(r) || Be(r);
    if (o) return et(o) || o;
  }
  const s = document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-dropdown.p-inputwrapper-focus",
    ".p-multiselect.p-overlay-open",
    ".p-multiselect.p-inputwrapper-focus",
    ".p-autocomplete.p-focus",
    `${mt} [aria-expanded="true"]`,
    `${mt}[aria-expanded="true"]`
  ].join(", "));
  return et(s);
}
function Ke(i) {
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
function pt(i) {
  var u, h, p;
  if (!(i instanceof Element)) return null;
  const t = et(i);
  if (t) return t;
  if (be(i)) {
    const g = i.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .ant-picker-dropdown, .p-datepicker-panel"), f = Ei(g || i);
    if (f) return f;
  }
  const e = i.closest(Ne);
  if (e) {
    const g = Qe(e);
    if (g) return g;
  }
  const s = i.closest(".p-calendar");
  if (s) {
    const g = s.querySelector('input:not([type="hidden"])');
    if (g) return g;
  }
  if (i.matches(At)) return i;
  const n = i.closest(At);
  if (n) return n;
  const r = i.matches('[role="combobox"]') ? i : i.closest('[role="combobox"]');
  if (r) return et(r) || r;
  const o = i.closest(Hi);
  if (o) {
    if (be(o)) {
      const y = Ei(
        o.closest(".p-datepicker, .flatpickr-calendar, .dp__menu, .p-datepicker-panel") || o
      );
      if (y) return y;
    }
    const g = Qe(o.closest(Ne) || o.closest(Ci));
    if (g) return g;
    const f = document.activeElement;
    if (f instanceof Element && (f.matches(At) || f.matches('[role="combobox"]') || et(f)) && !st(f))
      return et(f) || f;
    const m = o.closest(Ci);
    if (m != null && m.id) {
      const y = Ui(m.id), C = si(`[aria-controls="${y}"], [aria-owns="${y}"]`), S = Be(C);
      if (S) return S;
    }
    const b = document.querySelector(
      `${mt} [aria-expanded="true"], ${mt}[aria-expanded="true"], [aria-expanded="true"]`
    ), _ = Be(b);
    if (_ && !st(_)) return _;
    const w = Ke(m) || Ke(o) || Ke(b);
    if (w) {
      const y = w.querySelector(mt);
      if (y && !st(y)) return y;
      const C = w.querySelector(`select, ${At}, [role="combobox"]`);
      if (C && !st(C)) return et(C) || C;
    }
    const E = [...((m == null ? void 0 : m.closest('.modal.show, .modal, [role="dialog"], .p-overlaypanel, form')) || document.body).querySelectorAll(`${mt}, select, [role="combobox"]`)].filter((y) => !st(y)).map((y) => et(y) || y);
    if (E.length) {
      const y = ((u = m == null ? void 0 : m.getBoundingClientRect) == null ? void 0 : u.call(m).top) ?? o.getBoundingClientRect().top, C = E.map((S) => ({ node: S, top: S.getBoundingClientRect().top })).filter((S) => S.top <= y + 8).sort((S, L) => L.top - S.top)[0];
      if (C) return C.node;
    }
  }
  const a = i.closest(".p-calendar, .input-group, .date, .mx-datepicker, .vdatetime, .flatpickr-wrapper, .dp__main");
  if (a) {
    const g = a.querySelector(At);
    if (g) return g;
  }
  const l = i.closest(
    `button, a, [role="button"], input, select, textarea, [role="combobox"], ${mt}, [data-guider]`
  );
  if (l) return l;
  const c = Yt(i);
  if (c) return c;
  const d = (h = i.closest) == null ? void 0 : h.call(
    i,
    ".field, .form-group, .p-field, .p-float-label, .mb-0, .input-group, .p-calendar"
  );
  if (d) {
    const g = (p = d.querySelector) == null ? void 0 : p.call(
      d,
      `${mt}, input:not([type="hidden"]), textarea, select, button, a`
    );
    if (g) return et(g) || g;
  }
  return i;
}
function en(i = document) {
  const t = [
    ...i.querySelectorAll(`${mt}, select, [role="combobox"], input:not([type="hidden"]):not([type="password"]), textarea`)
  ], e = /* @__PURE__ */ new Set();
  return t.map((s) => et(s) || s).filter((s) => {
    if (e.has(s) || st(s)) return !1;
    e.add(s);
    const n = getComputedStyle(s);
    if (n.display === "none" || n.visibility === "hidden") return !1;
    const r = s.getBoundingClientRect();
    return r.width >= 2 && r.height >= 2;
  });
}
function Xt() {
  const i = Qe(document.querySelector(Ne)) || et(document.querySelector([
    ".p-dropdown.p-overlay-open",
    ".p-multiselect.p-overlay-open",
    `${mt} [aria-expanded="true"]`,
    `${mt}[aria-expanded="true"]`
  ].join(", ")));
  if (i && !st(i)) return i;
  const t = document.querySelector('[aria-expanded="true"]'), e = Be(t);
  if (e && !st(e)) return e;
  const s = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show, .p-overlaypanel');
  if (!s) return null;
  const n = document.activeElement;
  return n instanceof Element && s.contains(n) && (n.matches(At) || n.matches('[role="combobox"]') || et(n)) && !st(n) ? et(n) || n : null;
}
class sn {
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
    return !this.active || !(t instanceof Element) || st(t) || !!t.closest(".sg-panel, .sg-overlay, .sg-launcher, .sg-recording-indicator, .sg-target-picker");
  }
  buildSelectorAlternatives(t, e) {
    const s = pt(e) || e, n = qs(t, { interactive: s }), r = [], o = /* @__PURE__ */ new Set(), a = (l, c = {}) => {
      if (!(l instanceof Element)) return null;
      const d = c.selector || Ve(l);
      if (!d || o.has(d)) return null;
      o.add(d);
      const u = vi(l), h = {
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
    var S, L, M, I, V;
    if (!(t instanceof Element) || !t.isConnected || st(t)) return;
    const n = e === "click" && Pt(s);
    let r = pt(t) || t;
    if (!r || st(r)) return;
    if (!pt(t) && t.querySelector) {
      const N = t.querySelector(
        `${mt}, input:not([type="hidden"]), textarea, select`
      );
      N && (r = et(N) || N);
    }
    const o = this.buildSelectorAlternatives(s, r), a = o.find((N) => N.suggested) || o[0];
    (a == null ? void 0 : a.element) instanceof Element && (r = a.element);
    const l = (a == null ? void 0 : a.selector) || Ve(r);
    if (!l) return;
    const c = r.matches(At), d = xi(s) || xi(r), u = $t(r) || n, h = c || n || u ? "input" : e, p = Date.now(), g = `${h}:${l}`, f = h === "input" && g === this.lastKey, m = g === this.lastKey && p - this.lastAt < 300, b = !!(d && this.lastToggleEl && (this.lastToggleEl === d || (L = (S = this.lastToggleEl).contains) != null && L.call(S, d) || (M = d.contains) != null && M.call(d, this.lastToggleEl)) && p - this.lastAt < 600);
    if (f || m || b) return;
    this.lastKey = g, this.lastAt = p, this.lastToggleEl = d || null;
    const _ = Js(r), w = n ? Xs(s) : "", k = Ys({
      label: _,
      choiceField: u,
      isNativeField: c,
      action: h,
      element: r,
      optionText: w
    }), E = Qs({
      title: k,
      label: _,
      choiceField: u,
      isNativeField: c,
      element: r,
      optionText: w
    }), y = (a == null ? void 0 : a.match) || vi(r), C = o.map(({ selector: N, label: T, title: B, detail: $, suggested: z, match: G }) => ({
      selector: N,
      label: T,
      title: B,
      detail: $,
      suggested: z,
      ...G ? { match: G } : {}
    }));
    this.onStep({
      id: ((V = (I = globalThis.crypto) == null ? void 0 : I.randomUUID) == null ? void 0 : V.call(I)) || `step-${p}-${Math.random().toString(36).slice(2, 7)}`,
      selector: l,
      ...y ? { match: y } : {},
      ...C.length > 1 ? { selectorAlternatives: C } : {},
      action: h,
      title: k,
      description: E,
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
    if (!e || this.shouldIgnore(e) || typeof t.button == "number" && t.button !== 0 || e instanceof HTMLSelectElement && !Pt(e) || tn(e)) return;
    if (Pt(e)) {
      this.capture(e, "click");
      return;
    }
    const s = pt(e);
    !s || st(s) || this.commitCapture(s, "click", e);
  }
  onFocus(t) {
    var s;
    const e = t.target;
    if ((s = e == null ? void 0 : e.matches) != null && s.call(e, At) && !this.shouldIgnore(e) && !e.matches('input[type="checkbox"], input[type="radio"]') && !(e instanceof HTMLSelectElement)) {
      if (Rt(e)) {
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
const nn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>', rn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>', on = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>', Oe = [
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
].join(", "), oi = [
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
].join(", "), qi = [
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
function ti(i) {
  if (!(i instanceof HTMLElement) || i.closest(".sg-overlay, .sg-panel, .sg-launcher, .sg-skip-chip")) return !1;
  const t = getComputedStyle(i);
  if (t.display === "none" || t.visibility === "hidden" || Number(t.opacity) === 0)
    return !1;
  const e = i.getBoundingClientRect();
  return e.width >= 2 && e.height >= 2;
}
function Pe(i) {
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
function an(i) {
  if (!(i instanceof Element)) return null;
  const t = i.closest(qi);
  if (t && Pe(t)) return t;
  const e = i.closest('table, [role="grid"]');
  return e && e.querySelector(Oe) && Pe(e) ? e : null;
}
function ln(i) {
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
    if (!ti(s) || !Pe(s) || s === i || i.contains(s) || !(s.matches(qi) || !!((l = s.querySelector) != null && l.call(s, Oe))) && !s.matches(oi)) return !1;
    const r = s.getBoundingClientRect(), o = r.top >= t.top - 48 && r.top <= t.bottom + 380, a = r.left < t.right + 140 && r.right > t.left - 140;
    return o && a;
  });
}
function Ti(i = null) {
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
  return document.querySelectorAll(oi).forEach((s) => {
    !ti(s) || !Pe(s) || e(s) && t.add(s);
  }), document.querySelectorAll(Oe).forEach((s) => {
    const n = an(s);
    n && ti(n) && e(n) && t.add(n);
  }), i instanceof Element && ln(i).forEach((s) => t.add(s)), [...t];
}
class cn {
  constructor({
    overlayOpacity: t = 0.58,
    zIndex: e = 2147483e3,
    onSkip: s = null,
    onEnd: n = null,
    skipLabel: r = "Skip Step",
    onHighlightBox: o = null,
    onTargetLost: a = null,
    ui: l = null
  } = {}) {
    this.opacity = t, this.zIndex = e, this.onSkip = s, this.onEnd = n, this.skipLabel = r, this.onHighlightBox = o, this.onTargetLost = a, this.ui = ye(l || { overlayOpacity: t }), this.root = null, this.frame = null, this.blocks = null, this.skipChip = null, this.goChip = null, this.onGo = null, this.stepTip = null, this.stepTipContent = null, this.guideCursor = null, this.cursorTimer = null, this.warningBanner = null, this.waitingBanner = null, this.controlsEnabled = !1, this.raf = null, this.target = null, this.highlightHost = null, this.blockOutside = !1, this.raisedTarget = null, this.previousTargetStyle = null, this.resizeObserver = null, this.menuObserver = null, this.menuWatchTimer = null, this.menuRefreshTimer = null, this.relayoutTimers = [], this.elevatedMenus = [], this.syncing = !1, this.targetLostNotified = !1, this.lastHighlightCenter = null, this.onViewportChange = () => this.scheduleLayout(), this.onBlockInteraction = (c) => {
      this.allowsInteractionAt(c.clientX, c.clientY) || (c.preventDefault(), c.stopPropagation());
    }, this.onSkipClick = (c) => {
      var d;
      c.preventDefault(), c.stopPropagation(), (d = this.onSkip) == null || d.call(this);
    }, this.onEndClick = (c) => {
      var d;
      c.preventDefault(), c.stopPropagation(), (d = this.onEnd || this.onSkip) == null || d();
    }, this.onGoClick = (c) => {
      var d;
      c.preventDefault(), c.stopPropagation(), (d = this.onGo) == null || d.call(this);
    };
  }
  applyUiSettings(t) {
    this.ui = ye(t || {}), this.opacity = this.ui.overlayOpacity, this.root && (this.root.style.setProperty("--sg-overlay-opacity", String(this.opacity)), this.syncSpotlightMotionClass());
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
    totalSteps: n = null
  } = {}) {
    this.mountStepTip();
    const r = String(t || "").trim(), o = String(e || "").trim(), a = Number.isFinite(Number(s)) ? Math.max(1, Number(s)) : null, l = Number.isFinite(Number(n)) ? Math.max(1, Number(n)) : null;
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
    const c = document.createElement("span");
    c.className = "sg-step-tip__arrow", c.setAttribute("aria-hidden", "true");
    const d = document.createElement("div");
    d.className = "sg-step-tip__header";
    const u = document.createElement("div");
    u.className = "sg-step-tip__badge", u.textContent = String(a || 1), u.setAttribute(
      "aria-label",
      l ? `Step ${a || 1} of ${l}` : `Step ${a || 1}`
    );
    const h = document.createElement("span");
    h.className = "sg-step-tip__counter", h.textContent = l ? `Step ${a || 1} of ${l}` : `Step ${a || 1}`;
    const p = document.createElement("button");
    p.type = "button", p.className = "sg-step-tip__close", p.setAttribute("aria-label", "End tutorial"), p.innerHTML = nn, p.addEventListener("click", this.onEndClick), d.append(u, h, p);
    const g = document.createElement("div");
    if (g.className = "sg-step-tip__title", g.textContent = r, this.stepTip.append(c, d, g), o) {
      const E = document.createElement("div");
      E.className = "sg-step-tip__description", E.textContent = o, this.stepTip.append(E);
    }
    const f = document.createElement("div");
    f.className = "sg-step-tip__divider";
    const m = document.createElement("div");
    m.className = "sg-step-tip__actions";
    const b = document.createElement("button");
    b.type = "button", b.className = "sg-step-tip__end", b.innerHTML = `${on}<span>End Tutorial</span>`, b.addEventListener("click", this.onEndClick);
    const _ = document.createElement("button");
    _.type = "button", _.className = "sg-step-tip__next";
    const k = (l ? Number(a) >= Number(l) : !1) ? "Finish" : this.skipLabel || "Skip Step";
    _.innerHTML = `<span>${k}</span>${rn}`, _.addEventListener("click", this.onSkipClick), m.append(b, _), this.stepTip.append(f, m), this.stepTip.hidden = !1;
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
    const n = getComputedStyle(t).backgroundColor;
    return n && n !== "rgba(0, 0, 0, 0)" && n !== "transparent" ? n : "#0f1b33";
  }
  /**
   * Point the tip caret toward the highlight box based on tip placement.
   */
  updateStepTipArrow(t, e, s, n) {
    if (!this.stepTip || this.stepTip.hidden) return;
    const r = this.stepTip, o = r.getBoundingClientRect(), a = o.left, l = o.top, c = o.width || r.offsetWidth || 220, d = o.height || r.offsetHeight || 48, u = a + c / 2, h = l + d / 2, p = t + s / 2, g = e + n / 2, f = a + c, m = l + d, b = t + s, _ = e + n, w = {
      left: a - b,
      right: t - f,
      top: l - _,
      bottom: e - m
    };
    let k = "left", E = -1 / 0;
    for (const [S, L] of Object.entries(w))
      L > E && (E = L, k = S);
    if (E < 4) {
      const S = p - u, L = g - h;
      k = Math.abs(S) >= Math.abs(L) ? S < 0 ? "left" : "right" : L < 0 ? "top" : "bottom";
    }
    const y = 18;
    let C = 0;
    k === "left" || k === "right" ? C = Math.min(Math.max(g - l, y), d - y) : C = Math.min(Math.max(p - a, y), c - y), r.dataset.arrow = k, r.style.setProperty("--sg-arrow-offset", `${Math.round(C)}px`), r.style.setProperty("--sg-arrow-fill", this.resolveStepTipFill());
  }
  positionSkipChip(t, e, s, n) {
    if (!this.controlsEnabled) return;
    const r = 10, o = 8, a = window.innerWidth, l = window.innerHeight, c = this.stepTip && !this.stepTip.hidden, d = c ? this.stepTip.offsetWidth || 220 : 0, u = c ? this.stepTip.offsetHeight || 48 : 0, h = this.goChip && !this.goChip.hidden, p = h ? this.goChip.offsetWidth || 72 : 0, g = h ? this.goChip.offsetHeight || 36 : 0, f = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, m = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, b = 8;
    let _ = 0, w = 0;
    h && (_ = t + s + r, w = e + Math.max(0, Math.round((n - g) / 2)), _ + p > a - o && (_ = Math.max(o, t - p - r)), w < o && (w = o), w + g > l - o && (w = Math.max(o, l - g - o)), this.goChip.style.left = `${_}px`, this.goChip.style.top = `${w}px`);
    const k = Math.max(d, f), E = (c ? u : 0) + (c && f ? b : 0) + (f ? m : 0), y = t + s / 2, C = e + n / 2, S = (T, B) => ({
      left: Math.min(Math.max(o, T), Math.max(o, a - k - o)),
      top: Math.min(Math.max(o, B), Math.max(o, l - E - o))
    }), L = [
      S(y - k / 2, e + n + r),
      // below, centered
      S(y - k / 2, e - E - r),
      // above, centered
      S(t - k - r, C - E / 2),
      // left, centered
      S(t + s + r, C - E / 2),
      // right, centered
      S(t, e + n + r),
      // below-start
      S(t + s - k, e + n + r)
      // below-end
    ];
    h && L.unshift(
      S(_ + p + r, Math.min(w, e)),
      S(_ - k - r, Math.min(w, e))
    );
    let M = L[0], I = 1 / 0;
    for (const T of L) {
      const B = T.left + k / 2, $ = T.top + E / 2, z = B - y, G = $ - C;
      let D = z * z + G * G;
      const F = Math.max(0, Math.min(T.left + k, t + s) - Math.max(T.left, t)), nt = Math.max(0, Math.min(T.top + E, e + n) - Math.max(T.top, e));
      F > 0 && nt > 0 && (D += 1e6 + F * nt), D < I && (I = D, M = T);
    }
    let V = M.left, N = M.top;
    c && (this.stepTip.style.left = `${V}px`, this.stepTip.style.top = `${N}px`, this.updateStepTipArrow(t, e, s, n), N += u + b), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${V}px`, this.skipChip.style.top = `${N}px`);
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
    const e = this.stepTip && !this.stepTip.hidden, s = e ? this.stepTip.offsetWidth || 220 : 0, n = e ? this.stepTip.offsetHeight || 48 : 0, r = this.goChip && !this.goChip.hidden, o = r ? this.goChip.offsetWidth || 72 : 0, a = r ? this.goChip.offsetHeight || 36 : 0, l = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetWidth || 100 : 0, c = this.skipChip && !this.skipChip.hidden ? this.skipChip.offsetHeight || 36 : 0, d = 8, u = this.warningBanner && !this.warningBanner.hidden, h = this.waitingBanner && !this.waitingBanner.hidden, p = u ? this.warningBanner.offsetHeight || 40 : 0, g = h ? this.waitingBanner.offsetHeight || 40 : 0, f = 24 + p + g + (u || h ? 12 : 0), m = (e ? n + d : 0) + (l ? c : 0), b = Math.max(8, Math.round((window.innerWidth - Math.max(s, l || s)) / 2));
    let _ = Math.max(8, window.innerHeight - f - m - (r ? a + d : 0));
    e && (this.stepTip.style.left = `${b}px`, this.stepTip.style.top = `${_}px`, this.stepTip.removeAttribute("data-arrow"), _ += n + d), this.skipChip && !this.skipChip.hidden && (this.skipChip.style.left = `${b}px`, this.skipChip.style.top = `${_}px`, _ += c + d), r && (this.goChip.style.left = `${Math.max(8, Math.round((window.innerWidth - o) / 2))}px`, this.goChip.style.top = `${_}px`);
  }
  createBlock(t) {
    const e = document.createElement("div");
    return e.className = `sg-overlay__block sg-overlay__block--${t}`, ["click", "mousedown", "mouseup", "touchstart", "touchend", "pointerdown", "pointerup", "contextmenu"].forEach((s) => e.addEventListener(s, this.onBlockInteraction, !0)), e;
  }
  highlight(t, e = !0, { blockOutside: s = !1, tip: n = null } = {}) {
    var r, o;
    t instanceof Element && (this.hideWarning(), this.hideWaiting(), this.hideGuideCursor(), this.targetLostNotified = !1, this.mount(), this.controlsEnabled && (this.mountSkipChip(), this.mountStepTip()), this.root && (this.root.style.display = "", this.root.style.setProperty("--sg-overlay-opacity", String(((r = this.ui) == null ? void 0 : r.overlayOpacity) ?? this.opacity))), this.clearRelayoutTimers(), this.unobserveTarget(), this.target = t, this.highlightHost = pe(t) || t, this.blockOutside = !!s, this.root.classList.toggle("sg-overlay--blocking", this.blockOutside), this.raiseTarget(this.blockOutside ? this.highlightHost : null), n && n.title ? this.setStepTip(n) : this.hideStepTip(), e && _t(this.highlightHost) && Ls(this.highlightHost, { behavior: "smooth", block: "center" }), this.observeTarget(this.highlightHost), this.watchMenus(), this.root.classList.add("sg-overlay--visible"), this.syncSpotlightMotionClass(), this.frame && this.motionsEnabled() && ((o = this.ui) != null && o.spotlightFade) && (this.frame.classList.remove("sg-spotlight--fade-in"), this.frame.offsetWidth, this.frame.classList.add("sg-spotlight--fade-in")), this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter(), [80, 180, 320, 520, 800].forEach((a) => {
      this.relayoutTimers.push(setTimeout(() => {
        this.target && (this.highlightHost = pe(this.target) || this.target, this.scheduleLayout(), this.elevateOpenMenus(), this.lastHighlightCenter = this.getHighlightCenter());
      }, a));
    }));
  }
  /** Refresh cutout/menus without re-raising the target (avoids closing open dropdowns). */
  refreshMenus() {
    !this.root || !this.target || this.syncing || (this.elevateOpenMenus(), this.scheduleLayout());
  }
  getVisibleMenus() {
    const t = this.highlightHost || this.target;
    return Ti(t);
  }
  allowsInteractionAt(t, e) {
    const s = this.highlightHost || this.target, n = Ti(s);
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
    const t = pe(this.target) || this.highlightHost || this.target;
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
    if (this.raisedTarget && this.raisedTarget !== t && this.restoreTarget(), !t || this.raisedTarget === t || !Re(t)) return;
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
function dn(i, t) {
  var o, a, l, c;
  const e = i instanceof Element ? i : t;
  if (!(e instanceof Element)) return !1;
  const s = (o = e.closest) == null ? void 0 : o.call(e, 'a[href], [href], [data-inertia], .nav-link, .custom-nav-class, [role="link"]');
  if (!s || s.hasAttribute("download")) return !1;
  const n = (((a = s.getAttribute) == null ? void 0 : a.call(s, "target")) || "").toLowerCase();
  if (n && n !== "_self") return !1;
  const r = (((l = s.getAttribute) == null ? void 0 : l.call(s, "href")) || "").trim();
  return r && r !== "#" && !r.toLowerCase().startsWith("javascript:") ? !0 : ((c = s.matches) == null ? void 0 : c.call(s, 'a, .nav-link, .custom-nav-class, [data-inertia], [role="link"]')) || !1;
}
function un(i) {
  const t = String((i == null ? void 0 : i.title) || "").trim(), e = String((i == null ? void 0 : i.description) || "").trim();
  if (!e || e === t) return "";
  const s = e.replace(/^(click|select|enter|choose)\s+/i, "").trim(), n = t.replace(/^(click|select|enter|choose)\s+/i, "").trim();
  return s && n && s.toLowerCase() === n.toLowerCase() || /^(click|select|enter|choose)\s+.+/i.test(e) && e.length <= t.length + 12 ? "" : e;
}
class hn {
  constructor({
    overlay: t,
    timeout: e = 5e3,
    autoAdvanceOnInput: s = !0,
    autoAdvanceDelay: n = 600,
    autoSkipMissing: r = !0,
    autoSkipMissingDelay: o = 400,
    stableWaitTimeout: a = 1500,
    targetWaitTimeout: l = 2e4,
    targetRetryInterval: c = 250,
    targetReadyHits: d = 2,
    stepDelay: u = 0,
    autoScroll: h = !0,
    ui: p = null,
    onChange: g,
    onFail: f,
    onComplete: m,
    onClickAdvance: b = null
  }) {
    this.overlay = t, this.timeout = e, this.autoAdvanceOnInput = s, this.autoAdvanceDelay = n, this.autoSkipMissing = r, this.autoSkipMissingDelay = o, this.stableWaitTimeout = a, this.targetWaitTimeout = Math.max(1e3, Number(l) || 2e4), this.targetRetryInterval = Math.max(50, Number(c) || 250), this.targetReadyHits = Math.max(1, Number(d) || 2), this.stepDelay = u, this.autoScroll = h !== !1, this.ui = ye(p || {}), this.onChange = g, this.onFail = f, this.onComplete = m, this.onClickAdvance = b, this.steps = [], this.index = 0, this.active = !1, this.token = 0, this.waitCleanup = null, this.autoSkipTimer = null, this.navWaitTimer = null, this.readyWaitInterval = null, this.readyWaitResolve = null, this.targetLostTimer = null, this.rebindDebounceTimer = null, this.waitingForNavigation = !1, this.lastChoiceField = null, this.lastCompletedField = null;
  }
  setUiOptions(t) {
    this.ui = ye(t || {});
  }
  setOptions(t = {}) {
    t.autoAdvanceDelay != null && (this.autoAdvanceDelay = Number(t.autoAdvanceDelay) || 0), t.stepDelay != null && (this.stepDelay = Number(t.stepDelay) || 0), t.autoScroll != null && (this.autoScroll = !!t.autoScroll), t.timeout != null && (this.timeout = Number(t.timeout) || this.timeout), t.stableWaitTimeout != null && (this.stableWaitTimeout = Number(t.stableWaitTimeout) || this.stableWaitTimeout), t.targetWaitTimeout != null && (this.targetWaitTimeout = Math.max(1e3, Number(t.targetWaitTimeout) || this.targetWaitTimeout)), t.targetRetryInterval != null && (this.targetRetryInterval = Math.max(50, Number(t.targetRetryInterval) || this.targetRetryInterval)), t.targetReadyHits != null && (this.targetReadyHits = Math.max(1, Number(t.targetReadyHits) || this.targetReadyHits));
  }
  resolveStepField(t) {
    if (!(t != null && t.selector) && !(t != null && t.match) && !(t != null && t.title)) return null;
    const e = Ae(t, { requirePresent: !1 });
    return e ? pt(e) || e : null;
  }
  findStepTarget(t) {
    return Ae(t, { requirePresent: !0 });
  }
  clearReadyWait(t = null) {
    var s, n;
    this.readyWaitInterval != null && (clearInterval(this.readyWaitInterval), this.readyWaitInterval = null);
    const e = this.readyWaitResolve;
    this.readyWaitResolve = null, e && e(t), (n = (s = this.overlay).hideWaiting) == null || n.call(s);
  }
  /**
   * Poll until the step target exists in the DOM (SPA/page load safe).
   * Owns a single interval — always cleared via clearReadyWait / clearWait / stop.
   */
  waitUntilTargetReady(t, e) {
    this.clearReadyWait(null);
    const s = this.findStepTarget(t);
    if (s) return Promise.resolve(s);
    const n = Date.now(), r = Math.max(this.timeout, this.targetWaitTimeout);
    let o = 0, a = 0, l = null, c = null;
    return new Promise((d) => {
      this.readyWaitResolve = d;
      const u = (p) => {
        this.readyWaitResolve === d && this.clearReadyWait(p);
      }, h = () => {
        var m, b, _, w;
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
        const g = Date.now() - n;
        if (g >= r) {
          u(p || null);
          return;
        }
        const f = Math.max(0, Math.ceil((r - g) / 1e3));
        if (f !== c) {
          c = f;
          const k = `Waiting… ${f}s`;
          this.onChange(t, this.index, {
            waiting: !0,
            failed: !1,
            waitKind: "target",
            retryCount: o,
            message: k
          }), (b = (m = this.overlay).showWaiting) == null || b.call(m, k, { seconds: f }), (w = (_ = this.overlay).positionSkipChipFallback) == null || w.call(_);
        }
      };
      h(), this.readyWaitResolve === d && (this.readyWaitInterval = setInterval(h, this.targetRetryInterval));
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
  normalizeStepTarget(t, e) {
    if (!e)
      return t.action === "click" || t.action === "input" ? Xt() : null;
    if (Pt(e))
      return pt(e) || e;
    if (t.action === "click") {
      const s = pt(e);
      if (s && $t(s)) return s;
    }
    return e;
  }
  async showCurrent() {
    var h, p, g, f, m, b, _, w, k, E, y, C, S, L, M, I, V, N, T, B, $, z, G, D, F, nt, it, ct;
    if (!this.active) return;
    this.clearWait();
    const t = ++this.token, e = this.steps[this.index], s = ((p = (h = this.overlay) == null ? void 0 : h.getHighlightCenter) == null ? void 0 : p.call(h)) || ((g = this.overlay) == null ? void 0 : g.lastHighlightCenter) || null;
    this.onChange(e, this.index, { waiting: !1, failed: !1 }), this.overlay.hide();
    const n = Number((f = e == null ? void 0 : e.settings) == null ? void 0 : f.delay) || 0;
    if (n > 0 && (await new Promise((H) => setTimeout(H, n)), !this.active || t !== this.token))
      return;
    if (e.action === "manual" || !e.selector && !e.match) {
      this.overlay.hide();
      return;
    }
    const r = await this.waitUntilTargetReady(e, t);
    if (!this.active || t !== this.token) return;
    let o = this.normalizeStepTarget(e, r);
    if (o) {
      const H = !!this.lastCompletedField, j = H ? Math.min(220, this.stableWaitTimeout) : this.stableWaitTimeout;
      o = await Ms(o, {
        timeout: j,
        stableFrames: H ? 2 : 4
      }) || o;
    }
    if (!this.active || t !== this.token) return;
    if (o && !_t(o)) {
      const H = await this.waitUntilTargetReady(e, t);
      if (!this.active || t !== this.token) return;
      o = this.normalizeStepTarget(e, H);
    }
    if (!this.active || t !== this.token) return;
    const a = !!(o && ($t(o) || Rt(o)) || ((m = e.waitFor) == null ? void 0 : m.mode) === "interaction" || Pt(r));
    if (a && (!o || !Re(o))) {
      const H = (U) => {
        var X, J, Tt, Nt;
        if (!(U instanceof Element)) return !1;
        if ((X = U.matches) != null && X.call(U, 'input[type="search"]')) return !0;
        const Z = [
          (J = U.getAttribute) == null ? void 0 : J.call(U, "placeholder"),
          (Tt = U.getAttribute) == null ? void 0 : Tt.call(U, "name"),
          (Nt = U.getAttribute) == null ? void 0 : Nt.call(U, "aria-label"),
          U.id,
          U.className
        ].filter(Boolean).join(" ").toLowerCase();
        return /\bsearch\b/.test(Z);
      }, j = document.querySelector('.modal.show, [role="dialog"][aria-modal="true"], [role="dialog"].show');
      if (j) {
        const U = en(j).filter((X) => (X.matches('select, [role="combobox"]') || $t(X)) && !H(X));
        let Z = Xt();
        if (Z && H(Z) && (Z = null), !Z && this.lastChoiceField && j.contains(this.lastChoiceField)) {
          const X = ((_ = (b = this.lastChoiceField).getBoundingClientRect) == null ? void 0 : _.call(b).top) ?? -1 / 0;
          Z = U.find((J) => J.getBoundingClientRect().top > X + 4) || null;
        }
        Z || (Z = U[0] || null), Z && (o = Z);
      }
    }
    const l = pe(o) || o;
    if (!o && !l) {
      this.overlay.hide();
      const H = this.missingTargetMessage(e);
      (k = (w = this.overlay).showWarning) == null || k.call(w, H), this.onFail(e, this.index), this.onChange(e, this.index, {
        waiting: !1,
        failed: !0,
        autoSkipping: !1,
        failKind: "missing-target",
        message: H
      }), (y = (E = this.overlay).positionSkipChipFallback) == null || y.call(E);
      return;
    }
    (S = (C = this.overlay).hideWarning) == null || S.call(C), (M = (L = this.overlay).hideWaiting) == null || M.call(L);
    const c = o || l;
    if (s && ((I = this.ui) != null && I.animatedCursor) && ((V = this.ui) != null && V.animations)) {
      const H = (N = c.getBoundingClientRect) == null ? void 0 : N.call(c);
      if (H && H.width >= 1 && H.height >= 1) {
        const j = {
          x: H.left + H.width / 2,
          y: H.top + H.height / 2
        };
        if (await ((B = (T = this.overlay).animateCursorTo) == null ? void 0 : B.call(T, s, j, this.ui.transitionMs)), !this.active || t !== this.token) return;
      }
    }
    const d = e.action === "input" || (($ = e.waitFor) == null ? void 0 : $.type) === "input" || a || $t(c), u = ((z = e == null ? void 0 : e.settings) == null ? void 0 : z.autoScroll) !== !1;
    if (this.overlay.highlight(l || c, u, {
      // Keep spotlight cutout for selects so the active field stays bright.
      blockOutside: !0,
      tip: {
        title: e.title || "",
        description: un(e),
        stepNumber: this.index + 1,
        totalSteps: this.steps.length
      }
    }), d) {
      let H = (G = c.matches) != null && G.call(c, "input, textarea, select, .p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? c : ((D = c.querySelector) == null ? void 0 : D.call(c, "input, textarea, select, .p-dropdown, .p-multiselect")) || c;
      const j = (F = H.closest) == null ? void 0 : F.call(H, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      j && (H = j);
      const U = Number((nt = e == null ? void 0 : e.settings) == null ? void 0 : nt.autoAdvanceDelay), Z = this.autoAdvanceDelay;
      Number.isFinite(U) && (this.autoAdvanceDelay = U);
      const X = a || $t(H) || !!j || ((it = e.waitFor) == null ? void 0 : it.mode) === "interaction";
      this.watchInput(H, {
        ...e,
        waitFor: {
          type: "input",
          required: !0,
          mode: X ? "interaction" : ((ct = e.waitFor) == null ? void 0 : ct.mode) || "value"
        }
      }, !0), this.autoAdvanceDelay = Z;
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
      const a = this.resolveNextIndex(s), l = dn(o, t);
      if ((c = this.onClickAdvance) == null || c.call(this, e, s, a, { mayNavigate: l }), await this.applyHideDelay(e), !!this.active) {
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
    t.addEventListener("click", n, !0), this.waitCleanup = () => {
      t.removeEventListener("click", n, !0);
    };
  }
  /** True when the current step spotlight is already live on a matching DOM node. */
  isCurrentStepBound() {
    var n, r, o, a;
    if (!this.active || this.readyWaitInterval != null || this.readyWaitResolve || this.waitingForNavigation) return !1;
    const t = this.steps[this.index];
    if (!t) return !1;
    const e = ((n = this.overlay) == null ? void 0 : n.target) || ((r = this.overlay) == null ? void 0 : r.highlightHost);
    if (!(e instanceof Element) || !e.isConnected || !_t(e) || !((a = (o = this.overlay) == null ? void 0 : o.root) != null && a.classList.contains("sg-overlay--visible"))) return !1;
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
    var Ot, Qt, Gt, ve, dt, yt, Dt, Ft, te, Ht, Ut, Wt;
    const n = this.index, r = (Ot = t == null ? void 0 : t.closest) == null ? void 0 : Ot.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
    r && (t = r);
    const o = t instanceof HTMLSelectElement, a = Rt(t), l = !!((Qt = t == null ? void 0 : t.matches) != null && Qt.call(t, ".p-autocomplete") || (Gt = t == null ? void 0 : t.closest) != null && Gt.call(t, ".p-autocomplete")), c = !!((ve = t == null ? void 0 : t.matches) != null && ve.call(t, ".p-multiselect") || (dt = t == null ? void 0 : t.closest) != null && dt.call(t, ".p-multiselect")), d = !!((yt = t == null ? void 0 : t.matches) != null && yt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") || (Dt = t == null ? void 0 : t.closest) != null && Dt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect")), u = o || a || ((Ft = e.waitFor) == null ? void 0 : Ft.mode) === "interaction" || $t(t) || d, h = t instanceof HTMLInputElement && ["date", "datetime-local", "time", "month", "week", "color", "range"].includes(t.type);
    let p = !1, g = !1, f = !1, m = null, b = null, _ = null, w = null;
    const k = o || h || u || d || l ? Math.min(this.autoAdvanceDelay || 0, 50) : this.autoAdvanceDelay, E = ((te = t.closest) == null ? void 0 : te.call(t, '.modal.show, .modal, [role="dialog"], .p-overlaypanel')) || document.querySelector('.modal.show, [role="dialog"], .p-overlaypanel') || document, y = oi, C = [
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
    ].join(", "), S = [
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
    ].join(", "), M = (v) => !!(v instanceof Element && (v.matches(Oe) || Pt(v))), I = () => {
      var rt, q, at;
      if (!c || !(t instanceof Element)) return !1;
      if (t.classList.contains("p-overlay-open") || t.classList.contains("p-inputwrapper-focus") && t.querySelector('[aria-expanded="true"]') || t.getAttribute("aria-expanded") === "true" || (rt = t.querySelector) != null && rt.call(t, '[aria-expanded="true"]')) return !0;
      const v = document.querySelector(".p-multiselect-panel");
      if (!(v instanceof Element)) return !1;
      const x = (q = globalThis.getComputedStyle) == null ? void 0 : q.call(globalThis, v);
      if (x && (x.display === "none" || x.visibility === "hidden")) return !1;
      const W = pt(v) || Xt();
      return !!(W && (W === t || t.contains(W) || (at = W.contains) != null && at.call(W, t)));
    }, V = () => c && I(), N = () => {
      var W, rt;
      const v = (W = t.matches) != null && W.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect") ? t : (rt = t.closest) == null ? void 0 : rt.call(t, ".p-dropdown, .p-multiselect, .p-autocomplete, .p-cascadeselect");
      if (!v) return "";
      const x = v.querySelector(".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      return !x || x.classList.contains("p-placeholder") || x.classList.contains("p-dropdown-label-empty") ? "" : x instanceof HTMLInputElement ? String(x.value || "").trim() : String(x.textContent || "").trim();
    }, T = () => {
      var x;
      const v = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement ? t : ((x = t.querySelector) == null ? void 0 : x.call(t, 'input:not([type="hidden"]), textarea, select')) || t;
      return v instanceof HTMLInputElement && ["checkbox", "radio"].includes(v.type) ? String(v.checked) : v instanceof HTMLInputElement || v instanceof HTMLTextAreaElement || v instanceof HTMLSelectElement ? String(v.value ?? "") : N();
    };
    let B = T();
    const $ = () => u ? p : t instanceof HTMLInputElement && ["checkbox", "radio"].includes(t.type) ? t.checked : d ? p || !!N() : String(T()).trim().length > 0, z = () => {
      this.onChange(e, n, {
        waiting: s && !$(),
        failed: !1,
        waitKind: u || d ? "choice" : "input"
      });
    }, G = (v) => {
      var rt, q;
      if (!(v instanceof Element)) return;
      const x = pe(v) || v;
      if (this.overlay.target === x || this.overlay.highlightHost === x || this.overlay.target === v || this.overlay.highlightHost === v) {
        (q = (rt = this.overlay).refreshMenus) == null || q.call(rt);
        return;
      }
      this.overlay.highlight(x, !1, { blockOutside: !0 });
    }, D = !u && !d && !l, F = () => {
      var x;
      const v = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : (x = t.querySelector) == null ? void 0 : x.call(t, 'input:not([type="hidden"]), textarea');
      if (v instanceof HTMLElement)
        try {
          v.blur();
        } catch {
        }
      try {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      } catch {
      }
    }, nt = () => {
      this.active && this.index === n && this.next();
    }, it = (v = t) => {
      var x, W;
      !this.active || this.index !== n || p || (p = !0, B = T(), clearTimeout(m), (W = (x = this.overlay).hideGoChip) == null || W.call(x), v instanceof Element && (this.lastChoiceField = v, this.lastCompletedField = pt(v) || v), z(), F(), this.overlay.hide(), m = setTimeout(nt, D ? Math.min(k, 120) : k));
    }, ct = () => {
      var v, x, W, rt, q, at;
      if (D) {
        if (!this.active || this.index !== n || p) {
          (x = (v = this.overlay).hideGoChip) == null || x.call(v);
          return;
        }
        $() ? (rt = (W = this.overlay).showGoChip) == null || rt.call(W, () => {
          var lt, Mt;
          if (!(!this.active || this.index !== n || p)) {
            if (!$()) {
              z(), (Mt = (lt = this.overlay).hideGoChip) == null || Mt.call(lt);
              return;
            }
            it(t);
          }
        }, "Go") : (at = (q = this.overlay).hideGoChip) == null || at.call(q);
      }
    }, H = (v = t) => {
      if (!this.active || this.index !== n || p || V()) return;
      if (!(u || d ? !0 : $())) {
        z(), ct();
        return;
      }
      if (D) {
        B = T(), z(), ct();
        return;
      }
      if (!this.autoAdvanceOnInput) {
        p = !0, B = T(), v instanceof Element && (this.lastChoiceField = v, this.lastCompletedField = pt(v) || v), z();
        return;
      }
      it(v);
    }, j = (v) => {
      var at, lt, Mt, ut;
      if (!(v instanceof Element)) return !1;
      if (v === t || t.contains(v)) return !0;
      const x = (at = t.querySelector) == null ? void 0 : at.call(t, "input, textarea, select");
      if (x && (v === x || x.contains(v))) return !0;
      const W = pt(v);
      if (W && (W === t || t.contains(W) || (lt = W.contains) != null && lt.call(W, t)))
        return !0;
      if (v.closest(S) && (l || d)) {
        const gt = pt(v) || Xt();
        if (gt && (gt === t || t.contains(gt) || (Mt = gt.contains) != null && Mt.call(gt, t)))
          return !0;
        const kt = Xt();
        return !!(kt && (kt === t || t.contains(kt)));
      }
      const q = Xt();
      return !!(q && (q === t || t.contains(q) || (ut = q.contains) != null && ut.call(q, t)));
    }, U = (v = t) => {
      !this.active || this.index !== n || p || V() || (clearTimeout(m), m = setTimeout(() => H(v), 0));
    }, Z = () => {
      !c || p || V() || (f || T() !== B) && U(t);
    }, X = (v) => {
      const x = v == null ? void 0 : v.target;
      if (l) {
        if (!f) return;
        U(t);
        return;
      }
      if (c) {
        j(x instanceof Element ? x : t) && (f = !0, g = !0), Z();
        return;
      }
      if (!(d && !a && !o && ((v == null ? void 0 : v.type) === "input" || (v == null ? void 0 : v.type) === "change" && !f && !g))) {
        if (u && x instanceof Element && (E.contains(x) || !!x.closest(y) || j(x)) && (x.matches("select, input, textarea") || $t(x) || Pt(x))) {
          if (d && x.matches("input, textarea") && !Pt(x) && (v == null ? void 0 : v.type) === "input")
            return;
          U(pt(x) || t);
          return;
        }
        u && x instanceof Element && !j(x) || !u && !d && x instanceof Element && !j(x) || U(t);
      }
    }, J = (v) => {
      var gt, kt, qt, jt, zt, ee, Kt, ie;
      if (!u || p) return;
      const x = v.target instanceof Element ? v.target : null;
      if (!x) return;
      const W = E.contains(x), q = !!x.closest(y), at = x.closest(C), lt = M(x);
      if (c && !!x.closest([
        ".p-multiselect-close",
        ".p-multiselect-remove",
        '[data-pc-section="closebutton"]',
        '[data-pc-section="clearicon"]',
        ".p-multiselect-header .p-multiselect-close"
      ].join(", ")) && j(x)) {
        g = !0, setTimeout(Z, 40);
        return;
      }
      if ((at || lt) && j(x)) {
        if (g = !0, x.matches("input, textarea") && !at && !lt) {
          (kt = (gt = this.overlay).refreshMenus) == null || kt.call(gt);
          return;
        }
        if (l && !at) {
          (jt = (qt = this.overlay).refreshMenus) == null || jt.call(qt);
          return;
        }
        if (v.type === "pointerdown" || v.type === "pointerup" || v.type === "click" || lt) {
          if (f = !0, c) {
            (ee = (zt = this.overlay).refreshMenus) == null || ee.call(zt);
            return;
          }
          U(pt(x) || Xt() || t);
        }
        return;
      }
      if (!W && !q && !lt) {
        c && g && setTimeout(Z, 40);
        return;
      }
      const ut = x.closest(L);
      if (ut && (W || E.contains(ut)) && !q && !at && !lt) {
        g = !0;
        const Lt = pt(ut) || ut;
        if ((j(Lt) || j(ut)) && (G(Lt), (ie = (Kt = this.overlay).refreshMenus) == null || ie.call(Kt), c && setTimeout(Z, 40)), ut instanceof HTMLSelectElement && v.type === "pointerdown") {
          const Vt = () => U(Lt), se = Date.now();
          ut.addEventListener("change", Vt, { once: !0 }), ut.addEventListener("focusout", () => {
            Date.now() - se < 280 || setTimeout(Vt, 40);
          }, { once: !0 });
        }
      }
    };
    if (t.addEventListener("input", X), t.addEventListener("change", X), document.addEventListener("change", X, !0), document.addEventListener("input", X, !0), document.addEventListener("pointerdown", J, !0), document.addEventListener("pointerup", J, !0), document.addEventListener("click", J, !0), d && typeof MutationObserver < "u") {
      const v = (Ht = t.querySelector) == null ? void 0 : Ht.call(t, ".p-dropdown-label, .p-multiselect-label, .p-autocomplete-input");
      v && !l && (b = new MutationObserver(() => {
        if (T() !== B) {
          if (c) {
            f = !0, g = !0, Z();
            return;
          }
          U(t);
        }
      }), b.observe(v, {
        characterData: !0,
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "value"]
      }));
      const x = ((Ut = t.querySelector) == null ? void 0 : Ut.call(t, "[aria-expanded]")) || ((Wt = t.hasAttribute) != null && Wt.call(t, "aria-expanded") ? t : null);
      x && (_ = new MutationObserver(() => {
        if (!(!g || p) && x.getAttribute("aria-expanded") === "false" && !(l && !f)) {
          if (c) {
            Z();
            return;
          }
          (f || T() !== B) && U(t);
        }
      }), _.observe(x, { attributes: !0, attributeFilter: ["aria-expanded"] })), c && (w = new MutationObserver(() => {
        Z();
      }), w.observe(t, {
        attributes: !0,
        attributeFilter: ["class", "aria-expanded"]
      }));
    }
    const Tt = setInterval(() => {
      if (!p) {
        if (l) {
          if (!f) return;
          U(t);
          return;
        }
        if (c) {
          T() !== B && (f = !0, g = !0), Z();
          return;
        }
        if (T() !== B) {
          B = T(), U(t);
          return;
        }
        D && ct();
      }
    }, 80), Nt = (v) => {
      !D || p || v.key === "Enter" && j(v.target instanceof Element ? v.target : t) && $() && (v.preventDefault(), it(t));
    };
    this.waitCleanup = () => {
      var v, x;
      clearTimeout(m), clearInterval(Tt), b == null || b.disconnect(), _ == null || _.disconnect(), w == null || w.disconnect(), (x = (v = this.overlay).hideGoChip) == null || x.call(v), t.removeEventListener("input", X), t.removeEventListener("change", X), document.removeEventListener("change", X, !0), document.removeEventListener("input", X, !0), document.removeEventListener("keydown", Nt, !0), document.removeEventListener("pointerdown", J, !0), document.removeEventListener("pointerup", J, !0), document.removeEventListener("click", J, !0);
    }, z(), D && (document.addEventListener("keydown", Nt, !0), ct());
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
    var t, e, s, n;
    this.active = !1, this.token += 1, this.waitingForNavigation = !1, clearTimeout(this.navWaitTimer), this.navWaitTimer = null, clearTimeout(this.targetLostTimer), this.targetLostTimer = null, clearTimeout(this.rebindDebounceTimer), this.rebindDebounceTimer = null, this.lastChoiceField = null, this.lastCompletedField = null, this.clearWait(), (e = (t = this.overlay).hideWarning) == null || e.call(t), (n = (s = this.overlay).hideWaiting) == null || n.call(s), this.overlay.hide();
  }
  destroy() {
    this.stop();
  }
}
function Q(i) {
  const t = String(i || "/").trim() || "/";
  try {
    if (/^https?:\/\//i.test(t))
      return new URL(t).pathname || "/";
  } catch {
  }
  const e = t.split("?")[0].split("#")[0] || "/";
  return e.startsWith("/") ? e : `/${e}`;
}
function pn(i) {
  return Q(i).split("/").map((t) => t.trim()).filter(Boolean);
}
function gn(i) {
  return String(i || "root").replace(/[-_]+/g, " ").replace(/\b\w/g, (t) => t.toUpperCase());
}
function fn(i = []) {
  const t = { path: "/", label: "Home", guides: [], children: /* @__PURE__ */ new Map() }, e = (n, r, o) => (n.children.has(r) || n.children.set(r, {
    path: o,
    label: gn(r),
    guides: [],
    children: /* @__PURE__ */ new Map()
  }), n.children.get(r));
  for (const n of i) {
    if (!n || typeof n != "object") continue;
    const r = Q(n.url || "/"), o = pn(r);
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
function ji(i, t = 0, e = []) {
  for (const s of i || []) {
    const n = [];
    ji(s.children, t + 1, n);
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
const mn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="4" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="4" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="4" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
  <rect x="13" y="13" width="7" height="7" rx="1.8" fill="currentColor"/>
</svg>`, yn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
</svg>`, bn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M10.2 8.4L16.2 12L10.2 15.6V8.4Z" fill="currentColor"/>
</svg>`, vn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" fill="currentColor"/>
</svg>`;
function zi(i = "sg") {
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
const wn = zi("sgA"), Sn = zi("sgB"), _n = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 3.75h6M5.25 6.75h13.5M8.25 6.75V18a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V6.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 10.5v6M13.5 10.5v6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, kn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15.5H7.5A2.5 2.5 0 0 0 5 21V5.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
  <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, Cn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M19.4 13a7.7 7.7 0 0 0 .05-2l1.7-1.33-1.7-2.94-2.05.5a7.8 7.8 0 0 0-1.73-1L15.4 4h-3.4l-.27 2.23a7.8 7.8 0 0 0-1.73 1l-2.05-.5-1.7 2.94L8.55 11a7.7 7.7 0 0 0 0 2l-1.7 1.33 1.7 2.94 2.05-.5a7.8 7.8 0 0 0 1.73 1L12 20h3.4l.27-2.23a7.8 7.8 0 0 0 1.73-1l2.05.5 1.7-2.94L19.4 13Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`, xn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/>
  <path d="M6 14.5V6.5A1.5 1.5 0 0 1 7.5 5H15.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
</svg>`, En = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M9 6.5 16 12 9 17.5V6.5Z" fill="currentColor"/>
</svg>`, Li = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 3c.6 3.4 2.3 5.1 5.7 5.7-3.4.6-5.1 2.3-5.7 5.7-.6-3.4-2.3-5.1-5.7-5.7C9.7 8.1 11.4 6.4 12 3Z" fill="currentColor"/>
  <path d="M18.5 14.5c.25 1.3.9 1.95 2.2 2.2-1.3.25-1.95.9-2.2 2.2-.25-1.3-.9-1.95-2.2-2.2 1.3-.25 1.95-.9 2.2-2.2Z" fill="currentColor"/>
</svg>`, Tn = `
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
class Ln {
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
      <span class="sg-launcher__avatar">${wn}</span>
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
      icon: yn,
      shortcut: "R"
    }), o = this.createTile({
      action: "open-panel",
      variant: "panel",
      title: "Panel",
      subtitle: "Guide controls",
      icon: mn,
      shortcut: "P"
    }), a = this.createTile({
      action: "play-page",
      variant: "play",
      title: "Play guides",
      subtitle: "Start a tutorial",
      icon: bn
    });
    this.stopButton = this.createTile({
      action: "stop-tutorial",
      variant: "stop",
      title: "Stop",
      subtitle: "End tutorial",
      icon: vn
    }), this.stopButton.hidden = !0, s.append(a, r, o, this.stopButton), this.petalGroup = s;
    const l = document.createElement("button");
    l.type = "button", l.className = "sg-launcher__orb", l.dataset.action = "toggle-menu", l.setAttribute("aria-label", "Hide System Guider toolbar"), l.title = "Close", l.innerHTML = `
      <span class="sg-launcher__avatar">${Sn}</span>
    `, this.orb = l, e.append(n, s, l);
    const c = document.createElement("form");
    c.className = "sg-launcher__search", c.setAttribute("role", "search"), c.innerHTML = `
      <span class="sg-launcher__search-spark">${Li}</span>
      <input
        type="text"
        class="sg-launcher__search-input"
        placeholder="Search guides or press /"
        autocomplete="off"
        spellcheck="false"
        aria-label="Search guides"
      />
      <button type="submit" class="sg-launcher__search-go" aria-label="Search">${Tn}</button>
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
        <span class="sg-launcher__result-spark">${Li}</span>
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
        const f = (l = t.target.closest("[data-guide-id]")) == null ? void 0 : l.dataset.guideId, m = (c = this.searchGuides) == null ? void 0 : c.find((b) => b.id === f);
        m && this.selectSearchGuide(m);
        return;
      }
      if (e === "close-picker" && this.hideGuideOptions(), e === "open-manage") {
        if (this.readOnly) return;
        this.hideGuideOptions(), (d = this.onOpenManage) == null || d.call(this);
      }
      if (e === "select-guide") {
        const f = (u = t.target.closest("[data-guide-id]")) == null ? void 0 : u.dataset.guideId, m = (h = this.guides) == null ? void 0 : h.find((b) => b.id === f);
        if (m) {
          const b = this.onSelectGuide;
          this.hideGuideOptions(), b == null || b(m);
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
    a.className = "sg-guide-picker__brand-icon", a.setAttribute("aria-hidden", "true"), a.innerHTML = kn;
    const l = document.createElement("div");
    l.className = "sg-guide-picker__brand-copy";
    const c = document.createElement("strong");
    c.className = "sg-guide-picker__title", c.textContent = s ? "All Guides" : "Page Guides";
    const d = document.createElement("span");
    d.className = "sg-guide-picker__subtitle", d.textContent = s ? "Manage your guides" : "Choose a guide to play", l.append(c, d), o.append(a, l);
    const u = document.createElement("div");
    u.className = "sg-guide-picker__actions";
    const h = document.createElement("button");
    h.type = "button", h.className = "sg-guide-picker__manage", h.dataset.action = "open-manage", h.innerHTML = `<span class="sg-guide-picker__manage-icon">${Cn}</span><span>Manage</span>`, h.hidden = this.readOnly, this.manageButton = h;
    const p = document.createElement("button");
    p.type = "button", p.className = "sg-guide-picker__close", p.dataset.action = "close-picker", p.setAttribute("aria-label", "Close guide options"), p.textContent = "×", u.append(h, p), r.append(o, u);
    const g = document.createElement("div");
    if (g.className = "sg-guide-picker__list", t.length)
      if (s) {
        const f = ji(fn(t));
        let m = 0;
        f.forEach((b) => {
          if (b.type === "section") {
            const _ = document.createElement("div");
            _.className = "sg-guide-picker__section", _.style.setProperty("--sg-toc-depth", String(b.depth));
            const w = Q(n), k = Q(b.path);
            (w === k || k !== "/" && w.startsWith(`${k}/`)) && _.classList.add("is-current");
            const E = document.createElement("span");
            E.className = "sg-guide-picker__section-label", E.textContent = b.label;
            const y = document.createElement("span");
            y.className = "sg-guide-picker__section-meta";
            const C = document.createElement("span");
            C.className = "sg-guide-picker__section-path", C.textContent = b.path;
            const S = document.createElement("button");
            S.type = "button", S.className = "sg-guide-picker__copy-path", S.title = "Copy path", S.setAttribute("aria-label", `Copy ${b.path}`), S.innerHTML = xn, S.addEventListener("click", async (L) => {
              var M, I;
              L.preventDefault(), L.stopPropagation();
              try {
                await ((I = (M = navigator.clipboard) == null ? void 0 : M.writeText) == null ? void 0 : I.call(M, b.path)), S.classList.add("is-copied"), setTimeout(() => S.classList.remove("is-copied"), 900);
              } catch {
              }
            }), y.append(C, S), _.append(E, y), g.append(_);
            return;
          }
          m += 1, g.append(this.createGuideRow(b.guide, m, {
            depth: b.depth,
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
    const o = Q(t.url || "/");
    o === Q(n) && r.classList.add("is-current-page");
    const a = document.createElement("button");
    a.type = "button", a.className = "sg-guide-picker__option", a.dataset.action = "select-guide", a.dataset.guideId = t.id;
    const l = document.createElement("span");
    l.className = "sg-guide-picker__number", l.textContent = String(e).padStart(2, "0");
    const c = document.createElement("span");
    c.className = "sg-guide-picker__copy";
    const d = document.createElement("strong"), u = String(t.title || "Untitled guide").trim(), h = u.split(" · "), p = (h[0] || "Untitled guide").trim(), g = h.slice(1).join(" · ").trim(), f = /^\d+\s+steps?$/i.test(p);
    d.textContent = f ? g || "Untitled guide" : u;
    const m = document.createElement("small"), b = Array.isArray(t.steps) ? t.steps.length : Number(t.steps) || 0, _ = document.createElement("span");
    _.className = "sg-guide-picker__path", _.textContent = o;
    const w = document.createElement("span");
    w.className = "sg-guide-picker__dot", w.textContent = "·";
    const k = document.createElement("span");
    k.textContent = `${b} step${b === 1 ? "" : "s"}`, m.append(_, w, k), c.append(d, m);
    const E = document.createElement("span");
    E.className = "sg-guide-picker__play", E.setAttribute("aria-hidden", "true"), E.innerHTML = En, a.append(l, c, E);
    const y = document.createElement("button");
    return y.type = "button", y.className = "sg-guide-picker__delete", y.dataset.action = "delete-guide", y.dataset.guideId = t.id, y.setAttribute("aria-label", `Delete ${t.title || "guide"}`), y.title = "Delete guide", y.innerHTML = _n, this.readOnly && (y.hidden = !0), r.append(a, y), r;
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
const An = (i) => JSON.parse(JSON.stringify(i));
function St(i) {
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
  }), An({
    id: String(i.id || `guide-${Date.now()}`),
    title: String(i.title || "Untitled guide"),
    version: Number(i.version) || 1,
    ...i.url ? { url: String(i.url) } : {},
    ...i.settings && typeof i.settings == "object" && !Array.isArray(i.settings) ? { settings: i.settings } : {},
    steps: i.steps
  });
}
function Ai(i) {
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
      s.push(St(r));
    } catch (a) {
      n.push(`Guide ${o + 1}: ${a.message}`);
    }
  }), !s.length)
    throw new TypeError(n[0] || "No valid guides found in the file.");
  return { guides: s, errors: n };
}
function Ge(i) {
  return JSON.stringify(St(i), null, 2);
}
function Nn(i) {
  const t = (Array.isArray(i) ? i : []).map((e) => St(e));
  return JSON.stringify({
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    guides: t
  }, null, 2);
}
function Mn(i, t) {
  !i || typeof localStorage > "u" || localStorage.setItem(i, Ge(t));
}
function Bn(i) {
  if (!i || typeof localStorage > "u") return null;
  const t = localStorage.getItem(i);
  return t ? St(JSON.parse(t)) : null;
}
function Ki(i, t, e = "application/json") {
  const s = new Blob([i], { type: e }), n = URL.createObjectURL(s), r = document.createElement("a");
  r.href = n, r.download = t, r.click(), URL.revokeObjectURL(n);
}
function Pn(i, t = "system-guide.json") {
  Ki(Ge(i), t);
}
function In(i, t = "system-guider-guides.json") {
  Ki(Nn(i), t);
}
async function $n(i) {
  var e;
  const t = Ge(i);
  if (!((e = navigator.clipboard) != null && e.writeText))
    throw new Error("Clipboard API is unavailable in this browser.");
  return await navigator.clipboard.writeText(t), t;
}
function Rn(i = ((e) => (e = globalThis.location) == null ? void 0 : e.href)(), t = "pathname") {
  var s;
  try {
    const n = new URL(i, ((s = globalThis.location) == null ? void 0 : s.origin) || "http://localhost");
    return t === "full" ? `${n.pathname}${n.search}` || "/" : n.pathname || "/";
  } catch {
    return "/";
  }
}
function On(i = "pathname") {
  var t;
  return Rn((t = globalThis.location) == null ? void 0 : t.href, i);
}
function Vi(i) {
  return `${i || "system-guider"}:by-url`;
}
function ai(i) {
  if (typeof localStorage > "u") return {};
  try {
    const t = localStorage.getItem(Vi(i)), e = t ? JSON.parse(t) : {};
    return e && typeof e == "object" ? e : {};
  } catch {
    return {};
  }
}
function Zi(i, t) {
  typeof localStorage > "u" || localStorage.setItem(Vi(i), JSON.stringify(t));
}
function li(i) {
  return Array.isArray(i) ? i.filter(Boolean) : i ? [i] : [];
}
function ke(i, t, e) {
  const s = ai(i), n = li(s[t]), r = n.findIndex((o) => (o == null ? void 0 : o.id) === e.id);
  return r >= 0 ? n[r] = e : n.push(e), s[t] = n, Zi(i, s), n;
}
function Gn(i) {
  const t = ai(i), e = [];
  return Object.entries(t).forEach(([s, n]) => {
    li(n).forEach((r) => {
      e.push({ ...r, url: (r == null ? void 0 : r.url) || s });
    });
  }), e;
}
function Dn(i, t, e) {
  const s = ai(i), n = li(s[t]).filter((r) => (r == null ? void 0 : r.id) !== e);
  return n.length ? s[t] = n : delete s[t], Zi(i, s), n;
}
function ci(i) {
  return `${i || "system-guider"}:pending-play`;
}
function Ce(i, t) {
  typeof sessionStorage > "u" || sessionStorage.setItem(ci(i), JSON.stringify(t));
}
function Fn(i) {
  if (typeof sessionStorage > "u") return null;
  const t = ci(i), e = sessionStorage.getItem(t);
  if (sessionStorage.removeItem(t), !e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function de(i) {
  typeof sessionStorage > "u" || sessionStorage.removeItem(ci(i));
}
function Xi(i) {
  return String(i || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";
}
function Hn(i) {
  const t = String(i || "/").split(/[\\/]+/).map((e) => e.trim()).filter(Boolean).map(Xi);
  return t.length ? t.join("/") : "root";
}
function Un(i) {
  return `${Xi((i == null ? void 0 : i.title) || (i == null ? void 0 : i.id) || "guide")}.json`;
}
function ei(i, t = i == null ? void 0 : i.url) {
  return `${Hn(t)}/${Un(i)}`;
}
function Wn(i = {}) {
  if (i === !1) return null;
  const t = i === !0 || i == null ? {} : i;
  return {
    baseUrl: t.baseUrl || "/__sg/guides",
    publicBase: t.publicBase || "/guides",
    downloadFallback: t.downloadFallback !== !1,
    ...t
  };
}
async function di(i, t, e) {
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
async function xe(i, t, e) {
  const s = ei(t, e);
  try {
    const n = await di(i.baseUrl, "POST", {
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
async function qn(i, { guideId: t, urlKey: e, path: s }) {
  try {
    return await di(i.baseUrl, "DELETE", { guideId: t, urlKey: e, path: s }), { ok: !0 };
  } catch {
    return { ok: !1 };
  }
}
async function jn(i) {
  const t = `${String(i.publicBase || "/guides").replace(/\/$/, "")}/index.json`, e = await fetch(t, { headers: { Accept: "application/json" } });
  if (!e.ok) return { version: 1, guides: [] };
  const s = await e.json();
  return s && typeof s == "object" ? { version: Number(s.version) || 1, guides: Array.isArray(s.guides) ? s.guides : [] } : { version: 1, guides: [] };
}
async function Ni(i) {
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
async function zn(i) {
  const t = await jn(i), e = String(i.publicBase || "/guides").replace(/\/$/, ""), s = [];
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
async function Kn(i) {
  const t = String(i.publicBase || "/guides").replace(/\/$/, ""), e = await fetch(`${t}/settings.json`, {
    headers: { Accept: "application/json" },
    cache: "no-store"
  });
  if (!e.ok) return null;
  const s = await e.json();
  return s && typeof s == "object" && !Array.isArray(s) ? s : null;
}
async function Vn(i, t) {
  const e = await di(i.baseUrl, "POST", {
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
const Zn = {
  next: "Next Step",
  back: "Back",
  close: "Close Guide",
  skip: "Skip Step",
  startRecording: "Start Recording",
  stopRecording: "Stop Recording"
}, ue = (i = "") => ({
  id: `guide-${Date.now()}`,
  title: i ? `Guide for ${i}` : "New system guide",
  version: 1,
  url: i || void 0,
  steps: []
});
class Xn {
  constructor(t = {}) {
    var e, s, n, r, o, a, l, c, d, u, h, p;
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
      labels: { ...Zn, ...t.labels }
    }, this.settings = Bt({
      ...Oi(),
      ...t.settings || {}
    }), this.options.resetBeforePlay = this.settings.resetBeforePlay || this.options.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay ?? this.options.resetBeforePlayDelay, ce(this.settings), this.fileStorage = Wn(this.options.fileStorage), this.fileGuides = [], this.guideSaveTimer = null, this.settingsSaveTimer = null, this.apiReady = !this.fileStorage, this.apiProbeTimer = null, this.guide = ue(this.getUrlKey()), this.mode = "idle", this.dirty = !1, this.recordingAppend = !1, this.destroyed = !1, this.recordingStepsBaseline = 0, this.panelVisible = !this.options.showLauncher, this.readOnly = !1, this.bypassUnlocked = !1, this.launcherVisible = !1, this.settingsReady = !this.fileStorage, this.accountId = t.accountId ?? null, this.overlay = new cn({
      ...this.options,
      skipLabel: ((e = this.options.labels) == null ? void 0 : e.skip) || "Skip Step",
      onSkip: () => this.skip(),
      onEnd: () => this.endPlayback(),
      onHighlightBox: (g) => {
        var f;
        return (f = this.panel) == null ? void 0 : f.avoidHighlight(g);
      },
      onTargetLost: () => {
        var g, f;
        return (f = (g = this.player) == null ? void 0 : g.onSpotlightTargetLost) == null ? void 0 : f.call(g);
      },
      ui: this.settings.ui
    }), this.recorder = new sn({
      onStep: (g) => this.recordStep(g)
    }), this.player = new hn({
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
      onChange: (g, f, m) => this.onPlaybackChange(g, f, m),
      onFail: (g, f) => this.onPlaybackFail(g, f),
      onComplete: () => this.onPlaybackComplete(),
      onClickAdvance: (g, f, m, b) => {
        this.persistPlaybackProgress(m, b);
      }
    }), this.playbackResumeTimer = null, this.panel = new ps({
      labels: this.options.labels,
      zIndex: this.options.zIndex,
      handlers: this.createHandlers(),
      visible: this.panelVisible
    }), this.launcher = this.options.showLauncher ? new Ln({
      zIndex: this.options.zIndex,
      onOpenPanel: () => this.togglePanel(),
      onBypassOpenPanel: () => this.openPanelViaBypass(),
      onStartRecording: () => this.startRecording(),
      onPlayPageGuide: () => this.playPageGuide(),
      onDeleteGuide: (g) => this.deletePageGuide(g),
      onOpenManage: () => this.openManageRoutes(),
      onStopTutorial: () => this.close(!0),
      onSearchGuide: (g) => this.playGuide(g)
    }) : null, (s = this.launcher) == null || s.setApiReady(this.apiReady), (n = this.launcher) == null || n.setReadOnly(this.readOnly), (a = (r = this.launcher) == null ? void 0 : r.setBypassPin) == null || a.call(r, (o = this.settings) == null ? void 0 : o.bypassPin), (d = (l = this.launcher) == null ? void 0 : l.setLauncherSettings) == null || d.call(l, (c = this.settings) == null ? void 0 : c.launcher), (h = (u = this.launcher) == null ? void 0 : u.setAccountId) == null || h.call(u, this.accountId), (p = this.launcher) == null || p.setVisible(!1), this.onKeyDown = this.onKeyDown.bind(this), this.onUrlChange = this.onUrlChange.bind(this), document.addEventListener("keydown", this.onKeyDown), window.addEventListener("popstate", this.onUrlChange), this.installHistoryHooks(), this.applyAccessPolicy(), this.bootstrap();
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
      const e = await zn(this.fileStorage);
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
    var t, e, s, n, r, o;
    if (!this.fileStorage) {
      this.settingsReady = !0;
      return;
    }
    try {
      const a = await Kn(this.fileStorage);
      a && (this.settings = Bt({
        ...this.settings,
        ...a,
        ...this.options.settings || {}
      }), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, ce(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (n = (s = this.player) == null ? void 0 : s.setUiOptions) == null || n.call(s, this.settings.ui), (o = (r = this.launcher) == null ? void 0 : r.setLauncherSettings) == null || o.call(r, this.settings.launcher));
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
    const t = this.bypassUnlocked || Rs(this.accountId, (r = this.settings) == null ? void 0 : r.editorAccountIds);
    if (this.setReadOnly(!t), this.fileStorage && !this.settingsReady)
      return this.setLauncherVisible(!1), this;
    const e = $s(this.getUrlKey(), (o = this.settings) == null ? void 0 : o.hiddenUrls), s = ((a = this.settings) == null ? void 0 : a.showOrb) !== !1, n = this.options.showLauncher !== !1 && s && !e;
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
        const o = Bn(this.options.storageKey);
        o && this.load(o, { dirty: !1, mode: "manage" });
      }
    } catch {
    }
    await this.ensureGuideApiReady(), this.syncLauncher(), this.render(), ce(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (n = (s = this.player) == null ? void 0 : s.setUiOptions) == null || n.call(s, this.settings.ui), this.resumePendingPlay();
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
    if (this.clearApiProbeTimer(), await Ni(this.fileStorage) || this.fileStorage.downloadFallback)
      return this.setApiReady(!0), !0;
    if (this.setApiReady(!1), this.destroyed) return !1;
    const e = async () => {
      if (this.destroyed || !this.fileStorage) return;
      if (await Ni(this.fileStorage) || this.fileStorage.downloadFallback) {
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
    return typeof this.options.getUrlKey == "function" ? String(this.options.getUrlKey() || "/") : On(this.options.urlMatch);
  }
  getGuideForCurrentPage() {
    return this.getGuidesForCurrentPage()[0] || null;
  }
  getGuidesForCurrentPage() {
    const t = Q(this.getUrlKey());
    return this.getAllGuides().filter((e) => Q(e.url || "/") === t);
  }
  getAllGuides() {
    const t = [];
    Object.entries(this.options.guides || {}).forEach(([o, a]) => {
      (Array.isArray(a) ? a : a ? [a] : []).forEach((c) => t.push({ ...c, url: c.url || o }));
    });
    const e = this.options.guidesByUrl ? Gn(this.options.storageKey) : [], s = this.fileGuides || [], n = /* @__PURE__ */ new Map(), r = this.fileStorage ? [...t, ...e, ...s] : [...t, ...s, ...e];
    for (const o of r)
      try {
        const a = St(o);
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
    if (this.guide = St({
      ...this.guide,
      url: t,
      title: this.guide.title || `Guide for ${t}`
    }), this.options.guidesByUrl && ke(this.options.storageKey, t, this.guide), this.dirty = !1, this.persistDraft(), Array.isArray(this.fileGuides)) {
      const s = this.fileGuides.findIndex((n) => n.id === this.guide.id);
      s >= 0 ? this.fileGuides[s] = { ...this.fileGuides[s], ...this.guide } : this.fileGuides = [...this.fileGuides, structuredClone(this.guide)];
    }
    return this.syncLauncher(), this.render({
      flashMessage: `Saved “${this.guide.title || "Untitled guide"}”.`
    }), this.fileStorage && (ei(this.guide, t), xe(this.fileStorage, this.guide, t).then(async (s) => {
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
    const e = St(t), s = Q(e.url || "/"), n = Q(this.getUrlKey());
    if (s !== n) {
      if (Ce(this.options.storageKey, {
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
    const e = this.getAllGuides().find((l) => l.id === t), s = Q((e == null ? void 0 : e.url) || this.getUrlKey());
    this.options.guidesByUrl && Dn(this.options.storageKey, s, t), this.fileGuides = (this.fileGuides || []).filter((l) => l.id !== t), this.fileStorage && e && qn(this.fileStorage, {
      guideId: t,
      urlKey: s,
      path: ei(e, s)
    }).then(() => this.reloadFileGuides()).catch(() => {
    });
    const n = this.getAllGuides().filter((l) => l.id !== t);
    if (((o = this.guide) == null ? void 0 : o.id) === t) {
      const l = n.find((c) => Q(c.url) === Q(this.getUrlKey())) || n[0];
      l ? this.load(l, { dirty: !1, mode: this.mode === "manage-routes" ? "manage-routes" : "idle" }) : (this.guide = ue(this.getUrlKey()), this.mode = this.mode === "manage-routes" ? "manage-routes" : "idle", this.dirty = !1, this.persistDraft());
    }
    return this.syncLauncher(), this.render(), n.length && this.launcher && !this.launcher.optionsRoot.hidden ? this.launcher.showGuideOptions(
      n,
      (l) => this.playGuide(l),
      { hierarchical: !0, currentUrl: this.getUrlKey() }
    ) : (a = this.launcher) == null || a.hideGuideOptions(), this;
  }
  startPageGuide(t, { skipReset: e = !1, stepIndex: s = 0 } = {}) {
    const n = St(t), r = this.getGuidePlaybackSettings(n);
    if (!e && r.resetBeforePlay === "reload")
      return Ce(this.options.storageKey, {
        guideId: n.id,
        urlKey: Q(n.url || this.getUrlKey()),
        guide: n,
        stepIndex: 0
      }), globalThis.location.reload(), this;
    e || de(this.options.storageKey), this.load(n, { dirty: !1, mode: "manage" });
    const a = Math.max(0, Math.min(Number(s) || 0, Math.max(n.steps.length - 1, 0)));
    return this.startFrom(a);
  }
  persistPlaybackProgress(t, { mayNavigate: e = !1 } = {}) {
    var n, r;
    if (!((n = this.guide) != null && n.id)) return;
    const s = ((r = this.guide.steps) == null ? void 0 : r.length) || 0;
    if (t >= s) {
      de(this.options.storageKey);
      return;
    }
    Ce(this.options.storageKey, {
      guideId: this.guide.id,
      guide: this.guide,
      stepIndex: t,
      resumeAnyUrl: !0,
      mayNavigate: !!e,
      savedAt: Date.now()
    });
  }
  resumePendingPlay({ soft: t = !1 } = {}) {
    const e = Fn(this.options.storageKey);
    if (!(e != null && e.guideId) && !(e != null && e.guide)) return;
    const s = !!e.resumeAnyUrl, n = Q(e.urlKey || "/"), r = Q(this.getUrlKey());
    if (e.urlKey && !s && n !== r) {
      t && (Ce(this.options.storageKey, e), window.setTimeout(() => this.resumePendingPlay({ soft: !0 }), 300));
      return;
    }
    const o = t ? 120 : Math.max(0, Number(this.settings.resetBeforePlayDelay || this.options.resetBeforePlayDelay) || 450);
    window.setTimeout(() => {
      var l, c;
      if (this.destroyed) return;
      let a = this.getAllGuides().find((d) => d.id === e.guideId);
      if (!a && e.guide)
        try {
          a = St(e.guide);
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
    const e = Bt(this.settings), s = t != null && t.settings && typeof t.settings == "object" ? t.settings : {};
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
    var r, o, a, l, c, d, u, h;
    if (this.readOnly && (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "showOrb" || t === "reloadOnNavigate" || t === "resetBeforePlay" || t === "resetBeforePlayDelay" || t === "theme" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.")))
      return this;
    const s = Bt({ ...this.settings });
    if (t === "reloadOnNavigate" && (s.reloadOnNavigate = !!e), t === "resetBeforePlay" && (s.resetBeforePlay = e ? "reload" : "none"), t === "resetBeforePlayDelay" && (s.resetBeforePlayDelay = Math.max(0, Number(e) || 0)), t === "theme" && (s.theme = String(e || "dark").toLowerCase() === "light" ? "light" : "dark"), t === "editorAccountIds" && (s.editorAccountIds = e), t === "hiddenUrls" && (s.hiddenUrls = e), t === "bypassPin" && (s.bypassPin = e), t === "showAccountId" && (s.showAccountId = !!e), t === "showOrb" && (s.showOrb = !!e), String(t || "").startsWith("launcher.")) {
      const p = String(t).slice(9), g = { ...s.launcher };
      p === "size" && (g.size = Number(e)), p === "position" && (g.position = String(e || "bottom-right")), p === "animations" && (g.animations = !!e), s.launcher = g;
    }
    if (String(t || "").startsWith("ui.")) {
      const p = String(t).slice(3), g = { ...s.ui };
      if (p === "animations" || p === "spotlightFade" || p === "animatedCursor")
        g[p] = !!e;
      else if (p === "highlightMotion")
        g.highlightMotion = String(e || "pulse");
      else if (p === "overlayOpacity") {
        const f = Number(e);
        g.overlayOpacity = Number.isFinite(f) ? Math.min(0.9, Math.max(0, f > 1 ? f / 100 : f)) : g.overlayOpacity;
      } else p === "transitionMs" ? g.transitionMs = Math.max(0, Math.round(Number(e) || 0)) : p === "fontFamily" ? g.fontFamily = String(e || "system") : ["tipBg", "tipText", "skipBg", "skipText", "spotlightColor"].includes(p) && (g[p] = String(e || ""));
      s.ui = g;
    }
    return this.settings = Bt(s), this.options.resetBeforePlay = this.settings.resetBeforePlay, this.options.resetBeforePlayDelay = this.settings.resetBeforePlayDelay, ce(this.settings), (o = (r = this.overlay) == null ? void 0 : r.applyUiSettings) == null || o.call(r, this.settings.ui), (l = (a = this.player) == null ? void 0 : a.setUiOptions) == null || l.call(a, this.settings.ui), (d = (c = this.launcher) == null ? void 0 : c.setLauncherSettings) == null || d.call(c, this.settings.launcher), this.scheduleSettingsSave(), (t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showOrb") && this.applyAccessPolicy(), t === "showAccountId" && ((h = (u = this.launcher) == null ? void 0 : u.setShowAccountId) == null || h.call(u, this.settings.showAccountId)), t === "editorAccountIds" || t === "hiddenUrls" || t === "bypassPin" || t === "showAccountId" || t === "showOrb" || String(t || "").startsWith("launcher.") || String(t || "").startsWith("ui.") && (t.includes("Bg") || t.includes("Text") || t.includes("Color") || t === "ui.overlayOpacity" || t === "ui.transitionMs" || t === "ui.fontFamily") || this.render(), this;
  }
  resetUiSettings() {
    var t, e, s, n;
    return this.settings = Bt({
      ...this.settings,
      ui: ni()
    }), ce(this.settings), (e = (t = this.overlay) == null ? void 0 : t.applyUiSettings) == null || e.call(t, this.settings.ui), (n = (s = this.player) == null ? void 0 : s.setUiOptions) == null || n.call(s, this.settings.ui), this.scheduleSettingsSave(), this.render(), this;
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
    const t = Bt(this.settings), e = await Vn(this.fileStorage, t);
    e != null && e.settings && typeof e.settings == "object" && (this.settings = Bt({
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
        const t = Q(this.guide.url || this.getUrlKey());
        Array.isArray(this.fileGuides) && (this.fileGuides = this.fileGuides.map((e) => e.id === this.guide.id ? { ...this.guide } : e)), await xe(this.fileStorage, this.guide, t);
        return;
      }
      if (this.options.guidesByUrl) {
        ke(this.options.storageKey, Q(this.guide.url || this.getUrlKey()), this.guide);
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
      const c = Q(r.url || this.getUrlKey());
      xe(this.fileStorage, r, c).then(() => this.reloadFileGuides()).catch(() => {
      });
    } else this.options.guidesByUrl && ke(this.options.storageKey, Q(r.url || "/"), r);
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
    var e, s, n, r, o, a, l, c, d, u, h, p, g, f, m, b, _, w;
    const t = this.getAllGuides().length;
    (e = this.launcher) == null || e.setApiReady(this.apiReady), (s = this.launcher) == null || s.setReadOnly(this.readOnly), (o = (n = this.launcher) == null ? void 0 : n.setBypassPin) == null || o.call(n, (r = this.settings) == null ? void 0 : r.bypassPin), (c = (a = this.launcher) == null ? void 0 : a.setShowAccountId) == null || c.call(a, !!((l = this.settings) != null && l.showAccountId)), (h = (d = this.launcher) == null ? void 0 : d.setLauncherSettings) == null || h.call(d, (u = this.settings) == null ? void 0 : u.launcher), (g = (p = this.launcher) == null ? void 0 : p.setAccountId) == null || g.call(p, this.accountId), (f = this.launcher) == null || f.setVisible(this.launcherVisible), (m = this.launcher) == null || m.setSearchData(this.getAllGuides(), this.getUrlKey()), (b = this.launcher) == null || b.setPlayState(t), (_ = this.launcher) == null || _.setPanelOpen(this.panelVisible), (w = this.launcher) == null || w.setPlaying(this.mode === "playback");
  }
  onUrlChange() {
    if (this.applyAccessPolicy(), this.mode === "recording") return;
    if (this.mode === "playback") {
      this.rebindPlaybackAfterNavigation();
      return;
    }
    const t = this.mode === "manage-routes" && !this.readOnly, e = this.getGuideForCurrentPage();
    e ? this.load(e, { dirty: !1, mode: t ? "manage-routes" : "idle" }) : (this.guide = ue(this.getUrlKey()), this.mode = t ? "manage-routes" : "idle", this.dirty = !1, this.render()), this.syncLauncher();
  }
  render(t = {}) {
    var n, r, o;
    const e = this.guide.steps.map((a) => ({
      ...a,
      invalid: !Ns(a)
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
    return this.assertUsable(), this.readOnly ? this : this.fileStorage && !this.apiReady ? this : (this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.guide = ue(this.getUrlKey()), this.dirty = !1, this.recordingAppend = !1, this.recordingStepsBaseline = 0, this.mode = "recording", this.recorder.start(), this.render(), this);
  }
  /** Append more recorded interactions to the current guide (from Manage steps). */
  continueRecording() {
    return this.assertUsable(), this.readOnly ? this : (this.guide || (this.guide = ue(this.getUrlKey())), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.openPanel(), this.recordingAppend = !0, this.recordingStepsBaseline = this.guide.steps.length, this.mode = "recording", this.recorder.start(), this.render(), this);
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
    return this.guide = St(n), this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.mode = s, this.dirty = e, this.render(), this;
  }
  updateSteps(t) {
    return this.guide.steps = St({ ...this.guide, steps: t }).steps, this.changed(), this;
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
    const e = this.guide.steps.find((n) => n.id === t), s = e && Ae(e);
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
    var n, r;
    (r = (n = this.options).onStepChange) == null || r.call(n, structuredClone(t), e), this.render({
      currentStep: t,
      currentIndex: e,
      total: this.guide.steps.length,
      ...s
    });
  }
  onPlaybackFail(t, e) {
    var s, n, r, o;
    (n = (s = this.options).onStepFail) == null || n.call(s, structuredClone(t), e), this.render({
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
    de(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), (e = (t = this.options).onComplete) == null || e.call(t);
  }
  endPlayback() {
    var t;
    return this.mode !== "playback" && !((t = this.player) != null && t.active) ? this : (de(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), this.mode = this.options.showLauncher ? "idle" : "manage", this.render(), this.options.showLauncher ? this.closePanel() : this.openPanel(), this);
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
    return !this.options.allowClose && !t || this.dirty && !t && globalThis.confirm && !globalThis.confirm("Close with unsaved guide changes?") ? !1 : (this.recorder.stop(), this.player.stop(), this.overlay.setControlsEnabled(!1), this.overlay.hide(), de(this.options.storageKey), clearTimeout(this.playbackResumeTimer), this.mode = "idle", this.render(), this.options.showLauncher && this.closePanel(), (s = (e = this.options).onClose) == null || s.call(e), !0);
  }
  exportJSON() {
    return Ge(this.guide);
  }
  downloadJSON(t = `${this.guide.id}.json`) {
    return Pn(this.guide, t), this.dirty = !1, this;
  }
  downloadAllGuides() {
    var s;
    this.assertUsable();
    const t = this.getAllGuides();
    if (!t.length)
      return (s = globalThis.alert) == null || s.call(globalThis, "No guides to download yet."), this;
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return In(t, `system-guider-guides-${e}.json`), this;
  }
  async copyJSON() {
    const t = await $n(this.guide);
    return this.dirty = !1, t;
  }
  /** Persist one guide to local map + backend (file storage) without changing the active editor. */
  async persistImportedGuide(t) {
    const e = St(t), s = Q(e.url || "/");
    if (e.url = s, this.options.guidesByUrl && ke(this.options.storageKey, s, e), Array.isArray(this.fileGuides)) {
      const n = this.fileGuides.findIndex((r) => r.id === e.id);
      n >= 0 ? this.fileGuides[n] = { ...e } : this.fileGuides = [...this.fileGuides, { ...e }];
    } else
      this.fileGuides = [{ ...e }];
    return this.fileStorage && await xe(this.fileStorage, e, s), e;
  }
  /**
   * Import one or more guides from JSON text/objects/files.
   * Auto-saves each guide to the backend when file storage is enabled.
   */
  async importGuides(t, { sourceLabel: e = "import" } = {}) {
    var l;
    if (this.readOnly) return [];
    this.assertUsable();
    const { guides: s, errors: n } = Ai(t), r = [], o = [...n];
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
          const d = await c.text(), { guides: u, errors: h } = Ai(d);
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
    this.fileStorage || Mn(this.options.storageKey, this.guide);
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
let he = null;
const Yn = {
  init(i = {}) {
    if (typeof window > "u" || typeof document > "u")
      throw new Error("System Guider can only be initialized in a browser.");
    return he == null || he.destroy(), he = new Xn(i), he;
  }
};
export {
  Yn as default
};
