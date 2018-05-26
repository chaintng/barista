!(function (t, e) { typeof exports === 'object' && typeof module === 'object' ? module.exports = e() : typeof define === 'function' && define.amd ? define([], e) : typeof exports === 'object' ? exports.io = e() : t.io = e(); }(this, () => (function (t) { function e(r) { if (n[r]) return n[r].exports; const o = n[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports; } var n = {}; return e.m = t, e.c = n, e.p = '', e(0); }([function (t, e, n) {
  function r(t, e) {
    (typeof t === 'undefined' ? 'undefined' : o(t)) === 'object' && (e = t, t = void 0), e = e || {}; let n,
      r = i(t),
      s = r.source,
      u = r.id,
      h = r.path,
      f = p[u] && h in p[u].nsps,
      l = e.forceNew || e['force new connection'] || !1 === e.multiplex || f; return l ? (c('ignoring socket cache for %s', s), n = a(s, e)) : (p[u] || (c('new io instance for %s', s), p[u] = a(s, e)), n = p[u]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e);
  } var o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; },
    i = n(1),
    s = n(7),
    a = n(13),
    c = n(3)('socket.io-client'); t.exports = e = r; var p = e.managers = {}; e.protocol = s.protocol, e.connect = r, e.Manager = n(13), e.Socket = n(37);
}, function (t, e, n) {
  (function (e) {
    function r(t, n) {
      let r = t; n = n || e.location, t == null && (t = `${n.protocol}//${n.host}`), typeof t === 'string' && (t.charAt(0) === '/' && (t = t.charAt(1) === '/' ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (i('protocol-less url %s', t), t = typeof n !== 'undefined' ? `${n.protocol}//${t}` : `https://${t}`), i('parse %s', t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = '80' : /^(http|ws)s$/.test(r.protocol) && (r.port = '443')), r.path = r.path || '/'; let s = r.host.indexOf(':') !== -1,
        a = s ? `[${r.host}]` : r.host; return r.id = `${r.protocol}://${a}:${r.port}`, r.href = `${r.protocol}://${a}${n && n.port === r.port ? '' : `:${r.port}`}`, r;
    } var o = n(2),
      i = n(3)('socket.io-client:url'); t.exports = r;
  }).call(e, (function () { return this; }()));
}, function (t, e) {
  let n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    r = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor']; t.exports = function (t) {
    let e = t,
      o = t.indexOf('['),
      i = t.indexOf(']'); o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ';') + t.substring(i, t.length)); for (var s = n.exec(t || ''), a = {}, c = 14; c--;)a[r[c]] = s[c] || ''; return o != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ':'), a.authority = a.authority.replace('[', '').replace(']', '').replace(/;/g, ':'), a.ipv6uri = !0), a;
  };
}, function (t, e, n) {
  (function (r) {
    function o() { return !(typeof window === 'undefined' || !window.process || window.process.type !== 'renderer') || (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)); } function i(t) {
      const n = this.useColors; if (t[0] = `${(n ? '%c' : '') + this.namespace + (n ? ' %c' : ' ') + t[0] + (n ? '%c ' : ' ')}+${e.humanize(this.diff)}`, n) {
        const r = `color: ${this.color}`; t.splice(1, 0, r, 'color: inherit'); let o = 0,
          i = 0; t[0].replace(/%[a-zA-Z%]/g, (t) => { t !== '%%' && (o++, t === '%c' && (i = o)); }), t.splice(i, 0, r);
      }
    } function s() { return typeof console === 'object' && console.log && Function.prototype.apply.call(console.log, console, arguments); } function a(t) { try { t == null ? e.storage.removeItem('debug') : e.storage.debug = t; } catch (n) {} } function c() { let t; try { t = e.storage.debug; } catch (n) {} return !t && typeof r !== 'undefined' && 'env' in r && (t = r.env.DEBUG), t; } function p() { try { return window.localStorage; } catch (t) {} }e = t.exports = n(5), e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = typeof chrome !== 'undefined' && typeof chrome.storage !== 'undefined' ? chrome.storage.local : p(), e.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'], e.formatters.j = function (t) { try { return JSON.stringify(t); } catch (e) { return `[UnexpectedJSONParseError]: ${e.message}`; } }, e.enable(c());
  }).call(e, n(4));
}, function (t, e) {
  function n() { throw new Error('setTimeout has not been defined'); } function r() { throw new Error('clearTimeout has not been defined'); } function o(t) { if (u === setTimeout) return setTimeout(t, 0); if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0); try { return u(t, 0); } catch (e) { try { return u.call(null, t, 0); } catch (e) { return u.call(this, t, 0); } } } function i(t) { if (h === clearTimeout) return clearTimeout(t); if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t); try { return h(t); } catch (e) { try { return h.call(null, t); } catch (e) { return h.call(this, t); } } } function s() { y && l && (y = !1, l.length ? d = l.concat(d) : m = -1, d.length && a()); } function a() { if (!y) { const t = o(s); y = !0; for (let e = d.length; e;) { for (l = d, d = []; ++m < e;)l && l[m].run(); m = -1, e = d.length; }l = null, y = !1, i(t); } } function c(t, e) { this.fun = t, this.array = e; } function p() {} let u,
    h,
    f = t.exports = {}; !(function () { try { u = typeof setTimeout === 'function' ? setTimeout : n; } catch (t) { u = n; } try { h = typeof clearTimeout === 'function' ? clearTimeout : r; } catch (t) { h = r; } }()); var l,
    d = [],
    y = !1,
    m = -1; f.nextTick = function (t) { const e = new Array(arguments.length - 1); if (arguments.length > 1) for (let n = 1; n < arguments.length; n++)e[n - 1] = arguments[n]; d.push(new c(t, e)), d.length !== 1 || y || o(a); }, c.prototype.run = function () { this.fun.apply(null, this.array); }, f.title = 'browser', f.browser = !0, f.env = {}, f.argv = [], f.version = '', f.versions = {}, f.on = p, f.addListener = p, f.once = p, f.off = p, f.removeListener = p, f.removeAllListeners = p, f.emit = p, f.prependListener = p, f.prependOnceListener = p, f.listeners = function (t) { return []; }, f.binding = function (t) { throw new Error('process.binding is not supported'); }, f.cwd = function () { return '/'; }, f.chdir = function (t) { throw new Error('process.chdir is not supported'); }, f.umask = function () { return 0; };
}, function (t, e, n) {
  function r(t) {
    let n,
      r = 0; for (n in t)r = (r << 5) - r + t.charCodeAt(n), r |= 0; return e.colors[Math.abs(r) % e.colors.length];
  } function o(t) {
    function n() {
      if (n.enabled) {
        let t = n,
          r = +new Date(),
          o = r - (p || r); t.diff = o, t.prev = p, t.curr = r, p = r; for (var i = new Array(arguments.length), s = 0; s < i.length; s++)i[s] = arguments[s]; i[0] = e.coerce(i[0]), typeof i[0] !== 'string' && i.unshift('%O'); let a = 0; i[0] = i[0].replace(/%([a-zA-Z%])/g, (n, r) => { if (n === '%%') return n; a++; const o = e.formatters[r]; if (typeof o === 'function') { const s = i[a]; n = o.call(t, s), i.splice(a, 1), a--; } return n; }), e.formatArgs.call(t, i); const c = n.log || e.log || console.log.bind(console); c.apply(t, i);
      }
    } return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), typeof e.init === 'function' && e.init(n), n;
  } function i(t) { e.save(t), e.names = [], e.skips = []; for (let n = (typeof t === 'string' ? t : '').split(/[\s,]+/), r = n.length, o = 0; o < r; o++)n[o] && (t = n[o].replace(/\*/g, '.*?'), t[0] === '-' ? e.skips.push(new RegExp(`^${t.substr(1)}$`)) : e.names.push(new RegExp(`^${t}$`))); } function s() { e.enable(''); } function a(t) {
    let n,
      r; for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1; for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0; return !1;
  } function c(t) { return t instanceof Error ? t.stack || t.message : t; }e = t.exports = o.debug = o.default = o, e.coerce = c, e.disable = s, e.enable = i, e.enabled = a, e.humanize = n(6), e.names = [], e.skips = [], e.formatters = {}; let p;
}, function (t, e) {
  function n(t) {
    if (t = String(t), !(t.length > 100)) {
      const e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t); if (e) {
        let n = parseFloat(e[1]),
          r = (e[2] || 'ms').toLowerCase(); switch (r) { case 'years': case 'year': case 'yrs': case 'yr': case 'y': return n * u; case 'days': case 'day': case 'd': return n * p; case 'hours': case 'hour': case 'hrs': case 'hr': case 'h': return n * c; case 'minutes': case 'minute': case 'mins': case 'min': case 'm': return n * a; case 'seconds': case 'second': case 'secs': case 'sec': case 's': return n * s; case 'milliseconds': case 'millisecond': case 'msecs': case 'msec': case 'ms': return n; default: }
      }
    }
  } function r(t) { return t >= p ? `${Math.round(t / p)}d` : t >= c ? `${Math.round(t / c)}h` : t >= a ? `${Math.round(t / a)}m` : t >= s ? `${Math.round(t / s)}s` : `${t}ms`; } function o(t) { return i(t, p, 'day') || i(t, c, 'hour') || i(t, a, 'minute') || i(t, s, 'second') || `${t} ms`; } function i(t, e, n) { if (!(t < e)) return t < 1.5 * e ? `${Math.floor(t / e)} ${n}` : `${Math.ceil(t / e)} ${n}s`; } var s = 1e3,
    a = 60 * s,
    c = 60 * a,
    p = 24 * c,
    u = 365.25 * p; t.exports = function (t, e) { e = e || {}; const i = typeof t; if (i === 'string' && t.length > 0) return n(t); if (i === 'number' && isNaN(t) === !1) return e.long ? o(t) : r(t); throw new Error(`val is not a non-empty string or a valid number. val=${JSON.stringify(t)}`); };
}, function (t, e, n) {
  function r() {} function o(t) { let n = `${t.type}`; return e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += `${t.attachments}-`), t.nsp && t.nsp !== '/' && (n += `${t.nsp},`), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data)), h('encoded %j as %s', t, n), n; } function i(t, e) {
    function n(t) {
      let n = d.deconstructPacket(t),
        r = o(n.packet),
        i = n.buffers; i.unshift(r), e(i);
    }d.removeBlobs(t, n);
  } function s() { this.reconstructor = null; } function a(t) {
    let n = 0,
      r = { type: Number(t.charAt(0)) }; if (e.types[r.type] == null) return u(); if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) { for (var o = ''; t.charAt(++n) !== '-' && (o += t.charAt(n), n != t.length););if (o != Number(o) || t.charAt(n) !== '-') throw new Error('Illegal attachments'); r.attachments = Number(o); } if (t.charAt(n + 1) === '/') for (r.nsp = ''; ++n;) { var i = t.charAt(n); if (i === ',') break; if (r.nsp += i, n === t.length) break; } else r.nsp = '/'; const s = t.charAt(n + 1); if (s !== '' && Number(s) == s) { for (r.id = ''; ++n;) { var i = t.charAt(n); if (i == null || Number(i) != i) { --n; break; } if (r.id += t.charAt(n), n === t.length) break; }r.id = Number(r.id); } return t.charAt(++n) && (r = c(r, t.substr(n))), h('decoded %s as %j', t, r), r;
  } function c(t, e) { try { t.data = JSON.parse(e); } catch (n) { return u(); } return t; } function p(t) { this.reconPack = t, this.buffers = []; } function u() { return { type: e.ERROR, data: 'parser error' }; } var h = n(3)('socket.io-parser'),
    f = n(8),
    l = n(9),
    d = n(11),
    y = n(12); e.protocol = 4, e.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = s, r.prototype.encode = function (t, n) { if (t.type !== e.EVENT && t.type !== e.ACK || !l(t.data) || (t.type = t.type === e.EVENT ? e.BINARY_EVENT : e.BINARY_ACK), h('encoding packet %j', t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type)i(t, n); else { const r = o(t); n([r]); } }, f(s.prototype), s.prototype.add = function (t) { let n; if (typeof t === 'string')n = a(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new p(n), this.reconstructor.reconPack.attachments === 0 && this.emit('decoded', n)) : this.emit('decoded', n); else { if (!y(t) && !t.base64) throw new Error(`Unknown type: ${t}`); if (!this.reconstructor) throw new Error('got binary data when not reconstructing a packet'); n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit('decoded', n)); } }, s.prototype.destroy = function () { this.reconstructor && this.reconstructor.finishedReconstruction(); }, p.prototype.takeBinaryData = function (t) { if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) { const e = d.reconstructPacket(this.reconPack, this.buffers); return this.finishedReconstruction(), e; } return null; }, p.prototype.finishedReconstruction = function () { this.reconPack = null, this.buffers = []; };
}, function (t, e, n) {
  function r(t) { if (t) return o(t); } function o(t) { for (const e in r.prototype)t[e] = r.prototype[e]; return t; }t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks[`$${t}`] = this._callbacks[`$${t}`] || []).push(e), this; }, r.prototype.once = function (t, e) { function n() { this.off(t, n), e.apply(this, arguments); } return n.fn = e, this.on(t, n), this; }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this; const n = this._callbacks[`$${t}`]; if (!n) return this; if (arguments.length == 1) return delete this._callbacks[`$${t}`], this; for (var r, o = 0; o < n.length; o++) if (r = n[o], r === e || r.fn === e) { n.splice(o, 1); break; } return this; }, r.prototype.emit = function (t) {
    this._callbacks = this._callbacks || {}; let e = [].slice.call(arguments, 1),
      n = this._callbacks[`$${t}`]; if (n) { n = n.slice(0); for (let r = 0, o = n.length; r < o; ++r)n[r].apply(this, e); } return this;
  }, r.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks[`$${t}`] || []; }, r.prototype.hasListeners = function (t) { return !!this.listeners(t).length; };
}, function (t, e, n) {
  (function (e) {
    function r(t) { if (!t || typeof t !== 'object') return !1; if (o(t)) { for (let n = 0, i = t.length; n < i; n++) if (r(t[n])) return !0; return !1; } if (typeof e.Buffer === 'function' && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || typeof e.ArrayBuffer === 'function' && t instanceof ArrayBuffer || s && t instanceof Blob || a && t instanceof File) return !0; if (t.toJSON && typeof t.toJSON === 'function' && arguments.length === 1) return r(t.toJSON(), !0); for (const c in t) if (Object.prototype.hasOwnProperty.call(t, c) && r(t[c])) return !0; return !1; } var o = n(10),
      i = Object.prototype.toString,
      s = typeof e.Blob === 'function' || i.call(e.Blob) === '[object BlobConstructor]',
      a = typeof e.File === 'function' || i.call(e.File) === '[object FileConstructor]'; t.exports = r;
  }).call(e, (function () { return this; }()));
}, function (t, e) { const n = {}.toString; t.exports = Array.isArray || function (t) { return n.call(t) == '[object Array]'; }; }, function (t, e, n) {
  (function (t) {
    function r(t, e) { if (!t) return t; if (s(t)) { const n = { _placeholder: !0, num: e.length }; return e.push(t), n; } if (i(t)) { for (var o = new Array(t.length), a = 0; a < t.length; a++)o[a] = r(t[a], e); return o; } if (typeof t === 'object' && !(t instanceof Date)) { var o = {}; for (const c in t)o[c] = r(t[c], e); return o; } return t; } function o(t, e) { if (!t) return t; if (t && t._placeholder) return e[t.num]; if (i(t)) for (let n = 0; n < t.length; n++)t[n] = o(t[n], e); else if (typeof t === 'object') for (const r in t)t[r] = o(t[r], e); return t; } var i = n(10),
      s = n(12),
      a = Object.prototype.toString,
      c = typeof t.Blob === 'function' || a.call(t.Blob) === '[object BlobConstructor]',
      p = typeof t.File === 'function' || a.call(t.File) === '[object FileConstructor]'; e.deconstructPacket = function (t) {
      let e = [],
        n = t.data,
        o = t; return o.data = r(n, e), o.attachments = e.length, { packet: o, buffers: e };
    }, e.reconstructPacket = function (t, e) { return t.data = o(t.data, e), t.attachments = void 0, t; }, e.removeBlobs = function (t, e) {
      function n(t, a, u) { if (!t) return t; if (c && t instanceof Blob || p && t instanceof File) { r++; const h = new FileReader(); h.onload = function () { u ? u[a] = this.result : o = this.result, --r || e(o); }, h.readAsArrayBuffer(t); } else if (i(t)) for (let f = 0; f < t.length; f++)n(t[f], f, t); else if (typeof t === 'object' && !s(t)) for (const l in t)n(t[l], l, t); } var r = 0,
        o = t; n(o), r || e(o);
    };
  }).call(e, (function () { return this; }()));
}, function (t, e) { (function (e) { function n(t) { return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer; }t.exports = n; }).call(e, (function () { return this; }())); }, function (t, e, n) {
  function r(t, e) { if (!(this instanceof r)) return new r(t, e); t && (typeof t === 'undefined' ? 'undefined' : o(t)) === 'object' && (e = t, t = void 0), e = e || {}, e.path = e.path || '/socket.io', this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || 0.5), this.backoff = new l({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this.readyState = 'closed', this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = []; const n = e.parser || c; this.encoder = new n.Encoder(), this.decoder = new n.Decoder(), this.autoConnect = e.autoConnect !== !1, this.autoConnect && this.open(); } var o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; },
    i = n(14),
    s = n(37),
    a = n(8),
    c = n(7),
    p = n(39),
    u = n(40),
    h = n(3)('socket.io-client:manager'),
    f = n(36),
    l = n(41),
    d = Object.prototype.hasOwnProperty; t.exports = r, r.prototype.emitAll = function () { this.emit.apply(this, arguments); for (const t in this.nsps)d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments); }, r.prototype.updateSocketIds = function () { for (const t in this.nsps)d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t)); }, r.prototype.generateId = function (t) { return (t === '/' ? '' : `${t}#`) + this.engine.id; }, a(r.prototype), r.prototype.reconnection = function (t) { return arguments.length ? (this._reconnection = !!t, this) : this._reconnection; }, r.prototype.reconnectionAttempts = function (t) { return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts; }, r.prototype.reconnectionDelay = function (t) { return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay; }, r.prototype.randomizationFactor = function (t) { return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor; }, r.prototype.reconnectionDelayMax = function (t) { return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax; }, r.prototype.timeout = function (t) { return arguments.length ? (this._timeout = t, this) : this._timeout; }, r.prototype.maybeReconnectOnOpen = function () { !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect(); }, r.prototype.open = r.prototype.connect = function (t, e) {
    if (h('readyState %s', this.readyState), ~this.readyState.indexOf('open')) return this; h('opening %s', this.uri), this.engine = i(this.uri, this.opts); let n = this.engine,
      r = this; this.readyState = 'opening', this.skipReconnect = !1; let o = p(n, 'open', () => { r.onopen(), t && t(); }),
      s = p(n, 'error', (e) => { if (h('connect_error'), r.cleanup(), r.readyState = 'closed', r.emitAll('connect_error', e), t) { const n = new Error('Connection error'); n.data = e, t(n); } else r.maybeReconnectOnOpen(); }); if (!1 !== this._timeout) { const a = this._timeout; h('connect attempt will timeout after %d', a); const c = setTimeout(() => { h('connect attempt timed out after %d', a), o.destroy(), n.close(), n.emit('error', 'timeout'), r.emitAll('connect_timeout', a); }, a); this.subs.push({ destroy() { clearTimeout(c); } }); } return this.subs.push(o), this.subs.push(s), this;
  }, r.prototype.onopen = function () { h('open'), this.cleanup(), this.readyState = 'open', this.emit('open'); const t = this.engine; this.subs.push(p(t, 'data', u(this, 'ondata'))), this.subs.push(p(t, 'ping', u(this, 'onping'))), this.subs.push(p(t, 'pong', u(this, 'onpong'))), this.subs.push(p(t, 'error', u(this, 'onerror'))), this.subs.push(p(t, 'close', u(this, 'onclose'))), this.subs.push(p(this.decoder, 'decoded', u(this, 'ondecoded'))); }, r.prototype.onping = function () { this.lastPing = new Date(), this.emitAll('ping'); }, r.prototype.onpong = function () { this.emitAll('pong', new Date() - this.lastPing); }, r.prototype.ondata = function (t) { this.decoder.add(t); }, r.prototype.ondecoded = function (t) { this.emit('packet', t); }, r.prototype.onerror = function (t) { h('error', t), this.emitAll('error', t); }, r.prototype.socket = function (t, e) { function n() { ~f(o.connecting, r) || o.connecting.push(r); } var r = this.nsps[t]; if (!r) { r = new s(this, t, e), this.nsps[t] = r; var o = this; r.on('connecting', n), r.on('connect', () => { r.id = o.generateId(t); }), this.autoConnect && n(); } return r; }, r.prototype.destroy = function (t) { const e = f(this.connecting, t); ~e && this.connecting.splice(e, 1), this.connecting.length || this.close(); }, r.prototype.packet = function (t) { h('writing packet %j', t); const e = this; t.query && t.type === 0 && (t.nsp += `?${t.query}`), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, (n) => { for (let r = 0; r < n.length; r++)e.engine.write(n[r], t.options); e.encoding = !1, e.processPacketQueue(); })); }, r.prototype.processPacketQueue = function () { if (this.packetBuffer.length > 0 && !this.encoding) { const t = this.packetBuffer.shift(); this.packet(t); } }, r.prototype.cleanup = function () { h('cleanup'); for (let t = this.subs.length, e = 0; e < t; e++) { const n = this.subs.shift(); n.destroy(); } this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy(); }, r.prototype.close = r.prototype.disconnect = function () { h('disconnect'), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === 'opening' && this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.engine && this.engine.close(); }, r.prototype.onclose = function (t) { h('onclose'), this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.emit('close', t), this._reconnection && !this.skipReconnect && this.reconnect(); }, r.prototype.reconnect = function () { if (this.reconnecting || this.skipReconnect) return this; const t = this; if (this.backoff.attempts >= this._reconnectionAttempts)h('reconnect failed'), this.backoff.reset(), this.emitAll('reconnect_failed'), this.reconnecting = !1; else { const e = this.backoff.duration(); h('will wait %dms before reconnect attempt', e), this.reconnecting = !0; const n = setTimeout(() => { t.skipReconnect || (h('attempting reconnect'), t.emitAll('reconnect_attempt', t.backoff.attempts), t.emitAll('reconnecting', t.backoff.attempts), t.skipReconnect || t.open((e) => { e ? (h('reconnect attempt error'), t.reconnecting = !1, t.reconnect(), t.emitAll('reconnect_error', e.data)) : (h('reconnect success'), t.onreconnect()); })); }, e); this.subs.push({ destroy() { clearTimeout(n); } }); } }, r.prototype.onreconnect = function () { const t = this.backoff.attempts; this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', t); };
}, function (t, e, n) { t.exports = n(15), t.exports.parser = n(22); }, function (t, e, n) {
  (function (e) {
    function r(t, n) { if (!(this instanceof r)) return new r(t, n); n = n || {}, t && typeof t === 'object' && (n = t, t = null), t ? (t = u(t), n.hostname = t.host, n.secure = t.protocol === 'https' || t.protocol === 'wss', n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = u(n.host).host), this.secure = n.secure != null ? n.secure : e.location && location.protocol === 'https:', n.hostname && !n.port && (n.port = this.secure ? '443' : '80'), this.agent = n.agent || !1, this.hostname = n.hostname || (e.location ? location.hostname : 'localhost'), this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, typeof this.query === 'string' && (this.query = h.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = `${(n.path || '/engine.io').replace(/\/$/, '')}/`, this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || 't', this.timestampRequests = n.timestampRequests, this.transports = n.transports || ['polling', 'websocket'], this.transportOptions = n.transportOptions || {}, this.readyState = '', this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized, this.forceNode = !!n.forceNode; const o = typeof e === 'object' && e; o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open(); } function o(t) { const e = {}; for (const n in t)t.hasOwnProperty(n) && (e[n] = t[n]); return e; } var i = n(16),
      s = n(8),
      a = n(3)('engine.io-client:socket'),
      c = n(36),
      p = n(22),
      u = n(2),
      h = n(30); t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = p.protocol, r.Socket = r, r.Transport = n(21), r.transports = n(16), r.parser = n(22), r.prototype.createTransport = function (t) {
      a('creating transport "%s"', t); const e = o(this.query); e.EIO = p.protocol, e.transport = t; const n = this.transportOptions[t] || {}; this.id && (e.sid = this.id); const r = new i[t]({
        query: e, socket: this, agent: n.agent || this.agent, hostname: n.hostname || this.hostname, port: n.port || this.port, secure: n.secure || this.secure, path: n.path || this.path, forceJSONP: n.forceJSONP || this.forceJSONP, jsonp: n.jsonp || this.jsonp, forceBase64: n.forceBase64 || this.forceBase64, enablesXDR: n.enablesXDR || this.enablesXDR, timestampRequests: n.timestampRequests || this.timestampRequests, timestampParam: n.timestampParam || this.timestampParam, policyPort: n.policyPort || this.policyPort, pfx: n.pfx || this.pfx, key: n.key || this.key, passphrase: n.passphrase || this.passphrase, cert: n.cert || this.cert, ca: n.ca || this.ca, ciphers: n.ciphers || this.ciphers, rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate, extraHeaders: n.extraHeaders || this.extraHeaders, forceNode: n.forceNode || this.forceNode, localAddress: n.localAddress || this.localAddress, requestTimeout: n.requestTimeout || this.requestTimeout, protocols: n.protocols || void 0,
      }); return r;
    }, r.prototype.open = function () { let t; if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1)t = 'websocket'; else { if (this.transports.length === 0) { const e = this; return void setTimeout(() => { e.emit('error', 'No transports available'); }, 0); }t = this.transports[0]; } this.readyState = 'opening'; try { t = this.createTransport(t); } catch (n) { return this.transports.shift(), void this.open(); }t.open(), this.setTransport(t); }, r.prototype.setTransport = function (t) { a('setting transport %s', t.name); const e = this; this.transport && (a('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on('drain', () => { e.onDrain(); }).on('packet', (t) => { e.onPacket(t); }).on('error', (t) => { e.onError(t); }).on('close', () => { e.onClose('transport close'); }); }, r.prototype.probe = function (t) {
      function e() { if (f.onlyBinaryUpgrades) { const e = !this.supportsBinary && f.transport.supportsBinary; h = h || e; }h || (a('probe transport "%s" opened', t), u.send([{ type: 'ping', data: 'probe' }]), u.once('packet', (e) => { if (!h) if (e.type === 'pong' && e.data === 'probe') { if (a('probe transport "%s" pong', t), f.upgrading = !0, f.emit('upgrading', u), !u) return; r.priorWebsocketSuccess = u.name === 'websocket', a('pausing current transport "%s"', f.transport.name), f.transport.pause(() => { h || f.readyState !== 'closed' && (a('changing transport and sending upgrade packet'), p(), f.setTransport(u), u.send([{ type: 'upgrade' }]), f.emit('upgrade', u), u = null, f.upgrading = !1, f.flush()); }); } else { a('probe transport "%s" failed', t); const n = new Error('probe error'); n.transport = u.name, f.emit('upgradeError', n); } })); } function n() { h || (h = !0, p(), u.close(), u = null); } function o(e) { const r = new Error(`probe error: ${e}`); r.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), f.emit('upgradeError', r); } function i() { o('transport closed'); } function s() { o('socket closed'); } function c(t) { u && t.name !== u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n()); } function p() { u.removeListener('open', e), u.removeListener('error', o), u.removeListener('close', i), f.removeListener('close', s), f.removeListener('upgrading', c); }a('probing transport "%s"', t); var u = this.createTransport(t, { probe: 1 }),
        h = !1,
        f = this; r.priorWebsocketSuccess = !1, u.once('open', e), u.once('error', o), u.once('close', i), this.once('close', s), this.once('upgrading', c), u.open();
    }, r.prototype.onOpen = function () { if (a('socket open'), this.readyState = 'open', r.priorWebsocketSuccess = this.transport.name === 'websocket', this.emit('open'), this.flush(), this.readyState === 'open' && this.upgrade && this.transport.pause) { a('starting upgrade probes'); for (let t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]); } }, r.prototype.onPacket = function (t) { if (this.readyState === 'opening' || this.readyState === 'open' || this.readyState === 'closing') switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit('packet', t), this.emit('heartbeat'), t.type) { case 'open': this.onHandshake(JSON.parse(t.data)); break; case 'pong': this.setPing(), this.emit('pong'); break; case 'error': var e = new Error('server error'); e.code = t.data, this.onError(e); break; case 'message': this.emit('data', t.data), this.emit('message', t.data); } else a('packet received with socket readyState "%s"', this.readyState); }, r.prototype.onHandshake = function (t) { this.emit('handshake', t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), this.readyState !== 'closed' && (this.setPing(), this.removeListener('heartbeat', this.onHeartbeat), this.on('heartbeat', this.onHeartbeat)); }, r.prototype.onHeartbeat = function (t) { clearTimeout(this.pingTimeoutTimer); const e = this; e.pingTimeoutTimer = setTimeout(() => { e.readyState !== 'closed' && e.onClose('ping timeout'); }, t || e.pingInterval + e.pingTimeout); }, r.prototype.setPing = function () { const t = this; clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(() => { a('writing ping packet - expecting pong within %sms', t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout); }, t.pingInterval); }, r.prototype.ping = function () { const t = this; this.sendPacket('ping', () => { t.emit('ping'); }); }, r.prototype.onDrain = function () { this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit('drain') : this.flush(); }, r.prototype.flush = function () { this.readyState !== 'closed' && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a('flushing %d packets in socket', this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit('flush')); }, r.prototype.write = r.prototype.send = function (t, e, n) { return this.sendPacket('message', t, e, n), this; }, r.prototype.sendPacket = function (t, e, n, r) { if (typeof e === 'function' && (r = e, e = void 0), typeof n === 'function' && (r = n, n = null), this.readyState !== 'closing' && this.readyState !== 'closed') { n = n || {}, n.compress = !1 !== n.compress; const o = { type: t, data: e, options: n }; this.emit('packetCreate', o), this.writeBuffer.push(o), r && this.once('flush', r), this.flush(); } }, r.prototype.close = function () { function t() { r.onClose('forced close'), a('socket closing - telling transport to close'), r.transport.close(); } function e() { r.removeListener('upgrade', e), r.removeListener('upgradeError', e), t(); } function n() { r.once('upgrade', e), r.once('upgradeError', e); } if (this.readyState === 'opening' || this.readyState === 'open') { this.readyState = 'closing'; var r = this; this.writeBuffer.length ? this.once('drain', function () { this.upgrading ? n() : t(); }) : this.upgrading ? n() : t(); } return this; }, r.prototype.onError = function (t) { a('socket error %j', t), r.priorWebsocketSuccess = !1, this.emit('error', t), this.onClose('transport error', t); }, r.prototype.onClose = function (t, e) { if (this.readyState === 'opening' || this.readyState === 'open' || this.readyState === 'closing') { a('socket close with reason: "%s"', t); const n = this; clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners('close'), this.transport.close(), this.transport.removeAllListeners(), this.readyState = 'closed', this.id = null, this.emit('close', t, e), n.writeBuffer = [], n.prevBufferLen = 0; } }, r.prototype.filterUpgrades = function (t) { for (var e = [], n = 0, r = t.length; n < r; n++)~c(this.transports, t[n]) && e.push(t[n]); return e; };
  }).call(e, (function () { return this; }()));
}, function (t, e, n) {
  (function (t) {
    function r(e) {
      let n,
        r = !1,
        a = !1,
        c = !1 !== e.jsonp; if (t.location) {
        let p = location.protocol === 'https:',
          u = location.port; u || (u = p ? 443 : 80), r = e.hostname !== location.hostname || u !== e.port, a = e.secure !== p;
      } if (e.xdomain = r, e.xscheme = a, n = new o(e), 'open' in n && !e.forceJSONP) return new i(e); if (!c) throw new Error('JSONP disabled'); return new s(e);
    } var o = n(17),
      i = n(19),
      s = n(33),
      a = n(34); e.polling = r, e.websocket = a;
  }).call(e, (function () { return this; }()));
}, function (t, e, n) {
  (function (e) {
    const r = n(18); t.exports = function (t) {
      let n = t.xdomain,
        o = t.xscheme,
        i = t.enablesXDR; try { if (typeof XMLHttpRequest !== 'undefined' && (!n || r)) return new XMLHttpRequest(); } catch (s) {} try { if (typeof XDomainRequest !== 'undefined' && !o && i) return new XDomainRequest(); } catch (s) {} if (!n) {
        try {
          return new (e[['Active'].concat('Object').join('X')])('Microsoft.XMLHTTP');
        } catch (s) {}
      }
    };
  }).call(e, (function () { return this; }()));
}, function (t, e) { try { t.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest(); } catch (n) { t.exports = !1; } }, function (t, e, n) {
  (function (e) {
    function r() {} function o(t) {
      if (c.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, e.location) {
        let n = location.protocol === 'https:',
          r = location.port; r || (r = n ? 443 : 80), this.xd = t.hostname !== e.location.hostname || r !== t.port, this.xs = t.secure !== n;
      }
    } function i(t) { this.method = t.method || 'GET', this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create(); } function s() { for (const t in i.requests)i.requests.hasOwnProperty(t) && i.requests[t].abort(); } var a = n(17),
      c = n(20),
      p = n(8),
      u = n(31),
      h = n(3)('engine.io-client:polling-xhr'); t.exports = o, t.exports.Request = i, u(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function (t) { return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t); }, o.prototype.doWrite = function (t, e) {
      let n = typeof t !== 'string' && void 0 !== t,
        r = this.request({ method: 'POST', data: t, isBinary: n }),
        o = this; r.on('success', e), r.on('error', (t) => { o.onError('xhr post error', t); }), this.sendXhr = r;
    }, o.prototype.doPoll = function () {
      h('xhr poll'); let t = this.request(),
        e = this; t.on('data', (t) => { e.onData(t); }), t.on('error', (t) => { e.onError('xhr poll error', t); }), this.pollXhr = t;
    }, p(i.prototype), i.prototype.create = function () {
      const t = {
        agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR,
      }; t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized; let n = this.xhr = new a(t),
        r = this; try { h('xhr open %s: %s', this.method, this.uri), n.open(this.method, this.uri, this.async); try { if (this.extraHeaders) { n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0); for (const o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o]); } } catch (s) {} if (this.method === 'POST') try { this.isBinary ? n.setRequestHeader('Content-type', 'application/octet-stream') : n.setRequestHeader('Content-type', 'text/plain;charset=UTF-8'); } catch (s) {} try { n.setRequestHeader('Accept', '*/*'); } catch (s) {}'withCredentials' in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function () { r.onLoad(); }, n.onerror = function () { r.onError(n.responseText); }) : n.onreadystatechange = function () { if (n.readyState === 2) { let t; try { t = n.getResponseHeader('Content-Type'); } catch (e) {}t === 'application/octet-stream' && (n.responseType = 'arraybuffer'); }n.readyState === 4 && (n.status === 200 || n.status === 1223 ? r.onLoad() : setTimeout(() => { r.onError(n.status); }, 0)); }, h('xhr data %s', this.data), n.send(this.data); } catch (s) { return void setTimeout(() => { r.onError(s); }, 0); }e.document && (this.index = i.requestsCount++, i.requests[this.index] = this);
    }, i.prototype.onSuccess = function () { this.emit('success'), this.cleanup(); }, i.prototype.onData = function (t) { this.emit('data', t), this.onSuccess(); }, i.prototype.onError = function (t) { this.emit('error', t), this.cleanup(!0); }, i.prototype.cleanup = function (t) { if (typeof this.xhr !== 'undefined' && this.xhr !== null) { if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try { this.xhr.abort(); } catch (n) {}e.document && delete i.requests[this.index], this.xhr = null; } }, i.prototype.onLoad = function () { let t; try { let e; try { e = this.xhr.getResponseHeader('Content-Type'); } catch (n) {}t = e === 'application/octet-stream' ? this.xhr.response || this.xhr.responseText : this.xhr.responseText; } catch (n) { this.onError(n); }t != null && this.onData(t); }, i.prototype.hasXDR = function () { return typeof e.XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR; }, i.prototype.abort = function () { this.cleanup(); }, i.requestsCount = 0, i.requests = {}, e.document && (e.attachEvent ? e.attachEvent('onunload', s) : e.addEventListener && e.addEventListener('beforeunload', s, !1));
  }).call(e, (function () { return this; }()));
}, function (t, e, n) {
  function r(t) { const e = t && t.forceBase64; u && !e || (this.supportsBinary = !1), o.call(this, t); } var o = n(21),
    i = n(30),
    s = n(22),
    a = n(31),
    c = n(32),
    p = n(3)('engine.io-client:polling'); t.exports = r; var u = (function () {
    let t = n(17),
      e = new t({ xdomain: !1 }); return e.responseType != null;
  }()); a(r, o), r.prototype.name = 'polling', r.prototype.doOpen = function () { this.poll(); }, r.prototype.pause = function (t) { function e() { p('paused'), n.readyState = 'paused', t(); } var n = this; if (this.readyState = 'pausing', this.polling || !this.writable) { let r = 0; this.polling && (p('we are currently polling - waiting to pause'), r++, this.once('pollComplete', () => { p('pre-pause polling complete'), --r || e(); })), this.writable || (p('we are currently writing - waiting to pause'), r++, this.once('drain', () => { p('pre-pause writing complete'), --r || e(); })); } else e(); }, r.prototype.poll = function () { p('polling'), this.polling = !0, this.doPoll(), this.emit('poll'); }, r.prototype.onData = function (t) { const e = this; p('polling got data %s', t); const n = function (t, n, r) { return e.readyState === 'opening' && e.onOpen(), t.type === 'close' ? (e.onClose(), !1) : void e.onPacket(t); }; s.decodePayload(t, this.socket.binaryType, n), this.readyState !== 'closed' && (this.polling = !1, this.emit('pollComplete'), this.readyState === 'open' ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState)); }, r.prototype.doClose = function () { function t() { p('writing close packet'), e.write([{ type: 'close' }]); } var e = this; this.readyState === 'open' ? (p('transport open - closing'), t()) : (p('transport not open - deferring close'), this.once('open', t)); }, r.prototype.write = function (t) { const e = this; this.writable = !1; const n = function () { e.writable = !0, e.emit('drain'); }; s.encodePayload(t, this.supportsBinary, (t) => { e.doWrite(t, n); }); }, r.prototype.uri = function () {
    let t = this.query || {},
      e = this.secure ? 'https' : 'http',
      n = ''; !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && (e === 'https' && Number(this.port) !== 443 || e === 'http' && Number(this.port) !== 80) && (n = `:${this.port}`), t.length && (t = `?${t}`); const r = this.hostname.indexOf(':') !== -1; return `${e}://${r ? `[${this.hostname}]` : this.hostname}${n}${this.path}${t}`;
  };
}, function (t, e, n) {
  function r(t) { this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = '', this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress; } let o = n(22),
    i = n(8); t.exports = r, i(r.prototype), r.prototype.onError = function (t, e) { const n = new Error(t); return n.type = 'TransportError', n.description = e, this.emit('error', n), this; }, r.prototype.open = function () { return this.readyState !== 'closed' && this.readyState !== '' || (this.readyState = 'opening', this.doOpen()), this; }, r.prototype.close = function () { return this.readyState !== 'opening' && this.readyState !== 'open' || (this.doClose(), this.onClose()), this; }, r.prototype.send = function (t) { if (this.readyState !== 'open') throw new Error('Transport not open'); this.write(t); }, r.prototype.onOpen = function () { this.readyState = 'open', this.writable = !0, this.emit('open'); }, r.prototype.onData = function (t) { const e = o.decodePacket(t, this.socket.binaryType); this.onPacket(e); }, r.prototype.onPacket = function (t) { this.emit('packet', t); }, r.prototype.onClose = function () { this.readyState = 'closed', this.emit('close'); };
}, function (t, e, n) {
  (function (t) {
    function r(t, n) { const r = `b${e.packets[t.type]}${t.data.data}`; return n(r); } function o(t, n, r) {
      if (!n) return e.encodeBase64Packet(t, r); let o = t.data,
        i = new Uint8Array(o),
        s = new Uint8Array(1 + o.byteLength); s[0] = v[t.type]; for (let a = 0; a < i.length; a++)s[a + 1] = i[a]; return r(s.buffer);
    } function i(t, n, r) { if (!n) return e.encodeBase64Packet(t, r); const o = new FileReader(); return o.onload = function () { t.data = o.result, e.encodePacket(t, n, !0, r); }, o.readAsArrayBuffer(t.data); } function s(t, n, r) { if (!n) return e.encodeBase64Packet(t, r); if (g) return i(t, n, r); const o = new Uint8Array(1); o[0] = v[t.type]; const s = new k([o.buffer, t.data]); return r(s); } function a(t) { try { t = d.decode(t, { strict: !1 }); } catch (e) { return !1; } return t; } function c(t, e, n) { for (var r = new Array(t.length), o = l(t.length, n), i = function (t, n, o) { e(n, (e, n) => { r[t] = n, o(e, r); }); }, s = 0; s < t.length; s++)i(s, t[s], o); } var p,
      u = n(23),
      h = n(9),
      f = n(24),
      l = n(25),
      d = n(26); t && t.ArrayBuffer && (p = n(28)); var y = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent),
      m = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent),
      g = y || m; e.protocol = 3; var v = e.packets = {
        open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6,
      },
      b = u(v),
      w = { type: 'error', data: 'parser error' },
      k = n(29); e.encodePacket = function (e, n, i, a) { typeof n === 'function' && (a = n, n = !1), typeof i === 'function' && (a = i, i = null); const c = void 0 === e.data ? void 0 : e.data.buffer || e.data; if (t.ArrayBuffer && c instanceof ArrayBuffer) return o(e, n, a); if (k && c instanceof t.Blob) return s(e, n, a); if (c && c.base64) return r(e, a); let p = v[e.type]; return void 0 !== e.data && (p += i ? d.encode(String(e.data), { strict: !1 }) : String(e.data)), a(`${p}`); }, e.encodeBase64Packet = function (n, r) { let o = `b${e.packets[n.type]}`; if (k && n.data instanceof t.Blob) { const i = new FileReader(); return i.onload = function () { const t = i.result.split(',')[1]; r(o + t); }, i.readAsDataURL(n.data); } let s; try { s = String.fromCharCode.apply(null, new Uint8Array(n.data)); } catch (a) { for (var c = new Uint8Array(n.data), p = new Array(c.length), u = 0; u < c.length; u++)p[u] = c[u]; s = String.fromCharCode.apply(null, p); } return o += t.btoa(s), r(o); }, e.decodePacket = function (t, n, r) {
      if (void 0 === t) return w; if (typeof t === 'string') { if (t.charAt(0) === 'b') return e.decodeBase64Packet(t.substr(1), n); if (r && (t = a(t), t === !1)) return w; var o = t.charAt(0); return Number(o) == o && b[o] ? t.length > 1 ? { type: b[o], data: t.substring(1) } : { type: b[o] } : w; } var i = new Uint8Array(t),
        o = i[0],
        s = f(t, 1); return k && n === 'blob' && (s = new k([s])), { type: b[o], data: s };
    }, e.decodeBase64Packet = function (t, e) { const n = b[t.charAt(0)]; if (!p) return { type: n, data: { base64: !0, data: t.substr(1) } }; let r = p.decode(t.substr(1)); return e === 'blob' && k && (r = new k([r])), { type: n, data: r }; }, e.encodePayload = function (t, n, r) { function o(t) { return `${t.length}:${t}`; } function i(t, r) { e.encodePacket(t, !!s && n, !1, (t) => { r(null, o(t)); }); } typeof n === 'function' && (r = n, n = null); var s = h(t); return n && s ? k && !g ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, (t, e) => r(e.join(''))) : r('0:'); }, e.decodePayload = function (t, n, r) { if (typeof t !== 'string') return e.decodePayloadAsBinary(t, n, r); typeof n === 'function' && (r = n, n = null); let o; if (t === '') return r(w, 0, 1); for (var i, s, a = '', c = 0, p = t.length; c < p; c++) { const u = t.charAt(c); if (u === ':') { if (a === '' || a != (i = Number(a))) return r(w, 0, 1); if (s = t.substr(c + 1, i), a != s.length) return r(w, 0, 1); if (s.length) { if (o = e.decodePacket(s, n, !1), w.type === o.type && w.data === o.data) return r(w, 0, 1); const h = r(o, c + i, p); if (!1 === h) return; }c += i, a = ''; } else a += u; } return a !== '' ? r(w, 0, 1) : void 0; }, e.encodePayloadAsArrayBuffer = function (t, n) {
      function r(t, n) { e.encodePacket(t, !0, !0, t => n(null, t)); } return t.length ? void c(t, r, (t, e) => {
        let r = e.reduce((t, e) => { let n; return n = typeof e === 'string' ? e.length : e.byteLength, t + n.toString().length + n + 2; }, 0),
          o = new Uint8Array(r),
          i = 0; return e.forEach((t) => {
          let e = typeof t === 'string',
            n = t; if (e) { for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++)r[s] = t.charCodeAt(s); n = r.buffer; }e ? o[i++] = 0 : o[i++] = 1; for (var a = n.byteLength.toString(), s = 0; s < a.length; s++)o[i++] = parseInt(a[s]); o[i++] = 255; for (var r = new Uint8Array(n), s = 0; s < r.length; s++)o[i++] = r[s];
        }), n(o.buffer);
      }) : n(new ArrayBuffer(0));
    }, e.encodePayloadAsBlob = function (t, n) { function r(t, n) { e.encodePacket(t, !0, !0, (t) => { const e = new Uint8Array(1); if (e[0] = 1, typeof t === 'string') { for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++)r[o] = t.charCodeAt(o); t = r.buffer, e[0] = 0; } for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++)a[o] = parseInt(s[o]); if (a[s.length] = 255, k) { const c = new k([e.buffer, a.buffer, t]); n(null, c); } }); }c(t, r, (t, e) => n(new k(e))); }, e.decodePayloadAsBinary = function (t, n, r) { typeof n === 'function' && (r = n, n = null); for (var o = t, i = []; o.byteLength > 0;) { for (var s = new Uint8Array(o), a = s[0] === 0, c = '', p = 1; s[p] !== 255; p++) { if (c.length > 310) return r(w, 0, 1); c += s[p]; }o = f(o, 2 + c.length), c = parseInt(c); let u = f(o, 0, c); if (a) try { u = String.fromCharCode.apply(null, new Uint8Array(u)); } catch (h) { const l = new Uint8Array(u); u = ''; for (var p = 0; p < l.length; p++)u += String.fromCharCode(l[p]); }i.push(u), o = f(o, c); } const d = i.length; i.forEach((t, o) => { r(e.decodePacket(t, n, !0), o, d); }); };
  }).call(e, (function () { return this; }()));
}, function (t, e) {
  t.exports = Object.keys || function (t) {
    let e = [],
      n = Object.prototype.hasOwnProperty; for (const r in t)n.call(t, r) && e.push(r); return e;
  };
}, function (t, e) { t.exports = function (t, e, n) { const r = t.byteLength; if (e = e || 0, n = n || r, t.slice) return t.slice(e, n); if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || r === 0) return new ArrayBuffer(0); for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++)i[a] = o[s]; return i.buffer; }; }, function (t, e) { function n(t, e, n) { function o(t, r) { if (o.count <= 0) throw new Error('after called too many times'); --o.count, t ? (i = !0, e(t), e = n) : o.count !== 0 || i || e(null, r); } var i = !1; return n = n || r, o.count = t, t === 0 ? e() : o; } function r() {}t.exports = n; }, function (t, e, n) {
  let r; (function (t, o) {
    !(function (i) {
      function s(t) { for (var e, n, r = [], o = 0, i = t.length; o < i;)e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), (64512 & n) == 56320 ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e); return r; } function a(t) { for (var e, n = t.length, r = -1, o = ''; ++r < n;)e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e); return o; } function c(t, e) { if (t >= 55296 && t <= 57343) { if (e) throw Error(`Lone surrogate U+${t.toString(16).toUpperCase()} is not a scalar value`); return !1; } return !0; } function p(t, e) { return w(t >> e & 63 | 128); } function u(t, e) { if ((4294967168 & t) == 0) return w(t); let n = ''; return (4294965248 & t) == 0 ? n = w(t >> 6 & 31 | 192) : (4294901760 & t) == 0 ? (c(t, e) || (t = 65533), n = w(t >> 12 & 15 | 224), n += p(t, 6)) : (4292870144 & t) == 0 && (n = w(t >> 18 & 7 | 240), n += p(t, 12), n += p(t, 6)), n += w(63 & t | 128); } function h(t, e) { e = e || {}; for (var n, r = !1 !== e.strict, o = s(t), i = o.length, a = -1, c = ''; ++a < i;)n = o[a], c += u(n, r); return c; } function f() { if (b >= v) throw Error('Invalid byte index'); const t = 255 & g[b]; if (b++, (192 & t) == 128) return 63 & t; throw Error('Invalid continuation byte'); } function l(t) {
        let e,
          n,
          r,
          o,
          i; if (b > v) throw Error('Invalid byte index'); if (b == v) return !1; if (e = 255 & g[b], b++, (128 & e) == 0) return e; if ((224 & e) == 192) { if (n = f(), i = (31 & e) << 6 | n, i >= 128) return i; throw Error('Invalid continuation byte'); } if ((240 & e) == 224) { if (n = f(), r = f(), i = (15 & e) << 12 | n << 6 | r, i >= 2048) return c(i, t) ? i : 65533; throw Error('Invalid continuation byte'); } if ((248 & e) == 240 && (n = f(), r = f(), o = f(), i = (7 & e) << 18 | n << 12 | r << 6 | o, i >= 65536 && i <= 1114111)) return i; throw Error('Invalid UTF-8 detected');
      } function d(t, e) { e = e || {}; const n = !1 !== e.strict; g = s(t), v = g.length, b = 0; for (var r, o = []; (r = l(n)) !== !1;)o.push(r); return a(o); } let y = typeof e === 'object' && e,
        m = (typeof t === 'object' && t && t.exports == y && t, typeof o === 'object' && o); m.global !== m && m.window !== m || (i = m); var g,
        v,
        b,
        w = String.fromCharCode,
        k = { version: '2.1.2', encode: h, decode: d }; r = function () { return k; }.call(e, n, e, t), !(void 0 !== r && (t.exports = r));
    }(this));
  }).call(e, n(27)(t), (function () { return this; }()));
}, function (t, e) { t.exports = function (t) { return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t; }; }, function (t, e) {
  !(function () {
    for (var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', n = new Uint8Array(256), r = 0; r < t.length; r++)n[t.charCodeAt(r)] = r; e.encode = function (e) {
      let n,
        r = new Uint8Array(e),
        o = r.length,
        i = ''; for (n = 0; n < o; n += 3)i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]]; return o % 3 === 2 ? i = `${i.substring(0, i.length - 1)}=` : o % 3 === 1 && (i = `${i.substring(0, i.length - 2)}==`), i;
    }, e.decode = function (t) {
      let e,
        r,
        o,
        i,
        s,
        a = 0.75 * t.length,
        c = t.length,
        p = 0; t[t.length - 1] === '=' && (a--, t[t.length - 2] === '=' && a--); let u = new ArrayBuffer(a),
        h = new Uint8Array(u); for (e = 0; e < c; e += 4)r = n[t.charCodeAt(e)], o = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], s = n[t.charCodeAt(e + 3)], h[p++] = r << 2 | o >> 4, h[p++] = (15 & o) << 4 | i >> 2, h[p++] = (3 & i) << 6 | 63 & s; return u;
    };
  }());
}, function (t, e) {
  (function (e) {
    function n(t) { for (let e = 0; e < t.length; e++) { const n = t[e]; if (n.buffer instanceof ArrayBuffer) { let r = n.buffer; if (n.byteLength !== r.byteLength) { const o = new Uint8Array(n.byteLength); o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer; }t[e] = r; } } } function r(t, e) { e = e || {}; const r = new i(); n(t); for (let o = 0; o < t.length; o++)r.append(t[o]); return e.type ? r.getBlob(e.type) : r.getBlob(); } function o(t, e) { return n(t), new Blob(t, e || {}); } var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
      s = (function () { try { const t = new Blob(['hi']); return t.size === 2; } catch (e) { return !1; } }()),
      a = s && (function () { try { const t = new Blob([new Uint8Array([1, 2])]); return t.size === 2; } catch (e) { return !1; } }()),
      c = i && i.prototype.append && i.prototype.getBlob; t.exports = (function () { return s ? a ? e.Blob : o : c ? r : void 0; }());
  }).call(e, (function () { return this; }()));
}, function (t, e) { e.encode = function (t) { let e = ''; for (const n in t)t.hasOwnProperty(n) && (e.length && (e += '&'), e += `${encodeURIComponent(n)}=${encodeURIComponent(t[n])}`); return e; }, e.decode = function (t) { for (var e = {}, n = t.split('&'), r = 0, o = n.length; r < o; r++) { const i = n[r].split('='); e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]); } return e; }; }, function (t, e) { t.exports = function (t, e) { const n = function () {}; n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t; }; }, function (t, e) {
  function n(t) { let e = ''; do e = s[t % a] + e, t = Math.floor(t / a); while (t > 0);return e; } function r(t) { let e = 0; for (u = 0; u < t.length; u++)e = e * a + c[t.charAt(u)]; return e; } function o() { const t = n(+new Date()); return t !== i ? (p = 0, i = t) : `${t}.${n(p++)}`; } for (var i, s = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), a = 64, c = {}, p = 0, u = 0; u < a; u++)c[s[u]] = u; o.encode = n, o.decode = r, t.exports = o;
}, function (t, e, n) {
  (function (e) {
    function r() {} function o(t) { i.call(this, t), this.query = this.query || {}, a || (e.___eio || (e.___eio = []), a = e.___eio), this.index = a.length; const n = this; a.push((t) => { n.onData(t); }), this.query.j = this.index, e.document && e.addEventListener && e.addEventListener('beforeunload', () => { n.script && (n.script.onerror = r); }, !1); } var i = n(20),
      s = n(31); t.exports = o; let a,
      c = /\n/g,
      p = /\\n/g; s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function () { this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this); }, o.prototype.doPoll = function () {
      let t = this,
        e = document.createElement('script'); this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) { t.onError('jsonp poll error', e); }; const n = document.getElementsByTagName('script')[0]; n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e; const r = typeof navigator !== 'undefined' && /gecko/i.test(navigator.userAgent); r && setTimeout(() => { const t = document.createElement('iframe'); document.body.appendChild(t), document.body.removeChild(t); }, 100);
    }, o.prototype.doWrite = function (t, e) {
      function n() { r(), e(); } function r() { if (o.iframe) try { o.form.removeChild(o.iframe); } catch (t) { o.onError('jsonp polling iframe removal error', t); } try { const e = `<iframe src="javascript:0" name="${o.iframeId}">`; i = document.createElement(e); } catch (t) { i = document.createElement('iframe'), i.name = o.iframeId, i.src = 'javascript:0'; }i.id = o.iframeId, o.form.appendChild(i), o.iframe = i; } var o = this; if (!this.form) {
        var i,
          s = document.createElement('form'),
          a = document.createElement('textarea'),
          u = this.iframeId = `eio_iframe_${this.index}`; s.className = 'socketio', s.style.position = 'absolute', s.style.top = '-1000px', s.style.left = '-1000px', s.target = u, s.method = 'POST', s.setAttribute('accept-charset', 'utf-8'), a.name = 'd', s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a;
      } this.form.action = this.uri(), r(), t = t.replace(p, '\\\n'), this.area.value = t.replace(c, '\\n'); try { this.form.submit(); } catch (h) {} this.iframe.attachEvent ? this.iframe.onreadystatechange = function () { o.iframe.readyState === 'complete' && n(); } : this.iframe.onload = n;
    };
  }).call(e, (function () { return this; }()));
}, function (t, e, n) {
  (function (e) {
    function r(t) { const e = t && t.forceBase64; e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (l = o), i.call(this, t); } var o,
      i = n(21),
      s = n(22),
      a = n(30),
      c = n(31),
      p = n(32),
      u = n(3)('engine.io-client:websocket'),
      h = e.WebSocket || e.MozWebSocket; if (typeof window === 'undefined') try { o = n(35); } catch (f) {} var l = h; l || typeof window !== 'undefined' || (l = o), t.exports = r, c(r, i), r.prototype.name = 'websocket', r.prototype.supportsBinary = !0, r.prototype.doOpen = function () {
      if (this.check()) {
        let t = this.uri(),
          e = this.protocols,
          n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate }; n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress); try { this.ws = this.usingBrowserWebSocket ? e ? new l(t, e) : new l(t) : new l(t, e, n); } catch (r) { return this.emit('error', r); } void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = 'nodebuffer') : this.ws.binaryType = 'arraybuffer', this.addEventListeners();
      }
    }, r.prototype.addEventListeners = function () { const t = this; this.ws.onopen = function () { t.onOpen(); }, this.ws.onclose = function () { t.onClose(); }, this.ws.onmessage = function (e) { t.onData(e.data); }, this.ws.onerror = function (e) { t.onError('websocket error', e); }; }, r.prototype.write = function (t) { function n() { r.emit('flush'), setTimeout(() => { r.writable = !0, r.emit('drain'); }, 0); } var r = this; this.writable = !1; for (var o = t.length, i = 0, a = o; i < a; i++)!(function (t) { s.encodePacket(t, r.supportsBinary, (i) => { if (!r.usingBrowserWebSocket) { var s = {}; if (t.options && (s.compress = t.options.compress), r.perMessageDeflate) { const a = typeof i === 'string' ? e.Buffer.byteLength(i) : i.length; a < r.perMessageDeflate.threshold && (s.compress = !1); } } try { r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, s); } catch (c) { u('websocket closed before onclose event'); }--o || n(); }); }(t[i])); }, r.prototype.onClose = function () { i.prototype.onClose.call(this); }, r.prototype.doClose = function () { typeof this.ws !== 'undefined' && this.ws.close(); }, r.prototype.uri = function () {
      let t = this.query || {},
        e = this.secure ? 'wss' : 'ws',
        n = ''; this.port && (e === 'wss' && Number(this.port) !== 443 || e === 'ws' && Number(this.port) !== 80) && (n = `:${this.port}`), this.timestampRequests && (t[this.timestampParam] = p()), this.supportsBinary || (t.b64 = 1), t = a.encode(t), t.length && (t = `?${t}`); const r = this.hostname.indexOf(':') !== -1; return `${e}://${r ? `[${this.hostname}]` : this.hostname}${n}${this.path}${t}`;
    }, r.prototype.check = function () { return !(!l || '__initialize' in l && this.name === r.prototype.name); };
  }).call(e, (function () { return this; }()));
}, function (t, e) {}, function (t, e) { const n = [].indexOf; t.exports = function (t, e) { if (n) return t.indexOf(e); for (let r = 0; r < t.length; ++r) if (t[r] === e) return r; return -1; }; }, function (t, e, n) {
  function r(t, e, n) { this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open(); } let o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; },
    i = n(7),
    s = n(8),
    a = n(38),
    c = n(39),
    p = n(40),
    u = n(3)('socket.io-client:socket'),
    h = n(30); t.exports = e = r; let f = {
      connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1,
    },
    l = s.prototype.emit; s(r.prototype), r.prototype.subEvents = function () { if (!this.subs) { const t = this.io; this.subs = [c(t, 'open', p(this, 'onopen')), c(t, 'packet', p(this, 'onpacket')), c(t, 'close', p(this, 'onclose'))]; } }, r.prototype.open = r.prototype.connect = function () { return this.connected ? this : (this.subEvents(), this.io.open(), this.io.readyState === 'open' && this.onopen(), this.emit('connecting'), this); }, r.prototype.send = function () { const t = a(arguments); return t.unshift('message'), this.emit.apply(this, t), this; }, r.prototype.emit = function (t) {
    if (f.hasOwnProperty(t)) return l.apply(this, arguments), this; let e = a(arguments),
      n = { type: i.EVENT, data: e }; return n.options = {}, n.options.compress = !this.flags || !1 !== this.flags.compress, typeof e[e.length - 1] === 'function' && (u('emitting packet with ack id %d', this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), delete this.flags, this;
  }, r.prototype.packet = function (t) { t.nsp = this.nsp, this.io.packet(t); }, r.prototype.onopen = function () { if (u('transport is open - connecting'), this.nsp !== '/') if (this.query) { const t = o(this.query) === 'object' ? h.encode(this.query) : this.query; u('sending connect packet with query %s', t), this.packet({ type: i.CONNECT, query: t }); } else this.packet({ type: i.CONNECT }); }, r.prototype.onclose = function (t) { u('close (%s)', t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit('disconnect', t); }, r.prototype.onpacket = function (t) { if (t.nsp === this.nsp) switch (t.type) { case i.CONNECT: this.onconnect(); break; case i.EVENT: this.onevent(t); break; case i.BINARY_EVENT: this.onevent(t); break; case i.ACK: this.onack(t); break; case i.BINARY_ACK: this.onack(t); break; case i.DISCONNECT: this.ondisconnect(); break; case i.ERROR: this.emit('error', t.data); } }, r.prototype.onevent = function (t) { const e = t.data || []; u('emitting event %j', e), t.id != null && (u('attaching ack callback to event'), e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e); }, r.prototype.ack = function (t) {
    let e = this,
      n = !1; return function () { if (!n) { n = !0; const r = a(arguments); u('sending ack %j', r), e.packet({ type: i.ACK, id: t, data: r }); } };
  }, r.prototype.onack = function (t) { const e = this.acks[t.id]; typeof e === 'function' ? (u('calling ack %s with %j', t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : u('bad ack %s', t.id); }, r.prototype.onconnect = function () { this.connected = !0, this.disconnected = !1, this.emit('connect'), this.emitBuffered(); }, r.prototype.emitBuffered = function () { let t; for (t = 0; t < this.receiveBuffer.length; t++)l.apply(this, this.receiveBuffer[t]); for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]); this.sendBuffer = []; }, r.prototype.ondisconnect = function () { u('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect'); }, r.prototype.destroy = function () { if (this.subs) { for (let t = 0; t < this.subs.length; t++) this.subs[t].destroy(); this.subs = null; } this.io.destroy(this); }, r.prototype.close = r.prototype.disconnect = function () { return this.connected && (u('performing disconnect (%s)', this.nsp), this.packet({ type: i.DISCONNECT })), this.destroy(), this.connected && this.onclose('io client disconnect'), this; }, r.prototype.compress = function (t) { return this.flags = this.flags || {}, this.flags.compress = t, this; };
}, function (t, e) { function n(t, e) { const n = []; e = e || 0; for (let r = e || 0; r < t.length; r++)n[r - e] = t[r]; return n; }t.exports = n; }, function (t, e) {
  function n(t, e, n) { return t.on(e, n), { destroy() { t.removeListener(e, n); } }; }t.exports = n;
}, function (t, e) { const n = [].slice; t.exports = function (t, e) { if (typeof e === 'string' && (e = t[e]), typeof e !== 'function') throw new Error('bind() requires a function'); const r = n.call(arguments, 2); return function () { return e.apply(t, r.concat(n.call(arguments))); }; }; }, function (t, e) {
  function n(t) { t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0; }t.exports = n, n.prototype.duration = function () {
    let t = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) {
      let e = Math.random(),
        n = Math.floor(e * this.jitter * t); t = (1 & Math.floor(10 * e)) == 0 ? t - n : t + n;
    } return 0 | Math.min(t, this.max);
  }, n.prototype.reset = function () { this.attempts = 0; }, n.prototype.setMin = function (t) { this.ms = t; }, n.prototype.setMax = function (t) { this.max = t; }, n.prototype.setJitter = function (t) { this.jitter = t; };
}]))));
// # sourceMappingURL=socket.io.js.map
