function PointerEventsPolyfill(t) {
        this.options.usePolyfillIf() && this.register_mouse_events()
    }! function(t) {
        for (var e = t.easing = function(t, n, s, r) {
                var a, l, h = /(InOut|In|Out)(\w+)?/.exec(t),
                    c = i.In;
                return s = s || 0, r = r || 1, h && (l = h[2], a = o[l], c = i[h[1]]), a = a || [], t.call || (t = a[0] || e.easings[t] || function(t) {
                    return t
                }), 0 >= n ? s : n >= 1 ? r : c(t, n, a[1], a[2]) * (r - s) + s
            }, i = {
                In: function(t, e, i, n) {
                    return t(e, i, n)
                },
                Out: function(t, e, i, n) {
                    return 1 - t(1 - e, i, n)
                },
                InOut: function(t, e, i, n) {
                    return .5 > e ? t(2 * e, i, n) / 2 : t(-2 * e + 2, i, n) / -2 + 1
                }
            }, n = {
                s: function(t, e, i) {
                    return 1 - Math.pow(Math.sqrt(1 - Math.pow(t, e || 2)), i || 2)
                },
                e: function(t, e) {
                    return .97 * Math.sin(2 * Math.PI - t * Math.PI * (e + e - .5)) * n.s(t, 2, 1)
                },
                b: function(t, e) {
                    var i = 4 / 7 + e / 50,
                        o = 1 + t / (i / (Math.pow(2, e) - 1)),
                        s = ~~(Math.log(o) / Math.log(2));
                    return t > i ? 1 - n.s(1 - (-i + t) / (1 - i), 2) : Math.sqrt(1 - Math.pow(2 * (o / Math.pow(2, s) - 1) - 1, 2)) * n.s((s + 1) / e * i, 3)
                },
                back: function(t) {
                    return t * t * (3 * t - 2)
                }
            }, o = e.mappings = {
                Quad: [n.s, 2],
                Cubic: [n.s, 3],
                Quart: [n.s, 4],
                Quint: [n.s, 5],
                Expo: [n.s, 6, 1],
                Sine: [n.s, 2],
                Circ: [n.s, 2, 1],
                Elastic: [n.e, 3],
                Bounce: [n.b, 3],
                Back: [n.back]
            }, s = t.jQuery, r = 1; 7 > r; r++) o[r] = [n.s, r + 1, r > 4 ? 1 : 2];
        e.easings = {}, s && s.each(o, function(t) {
            s.each(i, function(i) {
                var n = "ease" + i + t;
                s.easing[n] = function(t, i, o, s, r) {
                    return e(n, i / r, o, s - o)
                }
            })
        })
    }(this), ! function(t, e, i, n) {
        "use strict";

        function o(t, e, i) {
            return setTimeout(c(t, i), e)
        }

        function s(t, e, i) {
            return Array.isArray(t) ? (r(t, i[e], i), !0) : !1
        }

        function r(t, e, i) {
            var o;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== n)
                for (o = 0; o < t.length;) e.call(i, t[o], o, t), o++;
            else
                for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
        }

        function a(t, e, i) {
            for (var o = Object.keys(e), s = 0; s < o.length;)(!i || i && t[o[s]] === n) && (t[o[s]] = e[o[s]]), s++;
            return t
        }

        function l(t, e) {
            return a(t, e, !0)
        }

        function h(t, e, i) {
            var n, o = e.prototype;
            n = t.prototype = Object.create(o), n.constructor = t, n._super = o, i && a(n, i)
        }

        function c(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function u(t, e) {
            return typeof t == ce ? t.apply(e ? e[0] || n : n, e) : t
        }

        function p(t, e) {
            return t === n ? e : t
        }

        function f(t, e, i) {
            r(g(e), function(e) {
                t.addEventListener(e, i, !1)
            })
        }

        function d(t, e, i) {
            r(g(e), function(e) {
                t.removeEventListener(e, i, !1)
            })
        }

        function m(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function v(t, e) {
            return t.indexOf(e) > -1
        }

        function g(t) {
            return t.trim().split(/\s+/g)
        }

        function y(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var n = 0; n < t.length;) {
                if (i && t[n][i] == e || !i && t[n] === e) return n;
                n++
            }
            return -1
        }

        function w(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function b(t, e, i) {
            for (var n = [], o = [], s = 0; s < t.length;) {
                var r = e ? t[s][e] : t[s];
                y(o, r) < 0 && n.push(t[s]), o[s] = r, s++
            }
            return i && (n = e ? n.sort(function(t, i) {
                return t[e] > i[e]
            }) : n.sort()), n
        }

        function T(t, e) {
            for (var i, o, s = e[0].toUpperCase() + e.slice(1), r = 0; r < le.length;) {
                if (i = le[r], o = i ? i + s : e, o in t) return o;
                r++
            }
            return n
        }

        function x() {
            return de++
        }

        function E(t) {
            var e = t.ownerDocument;
            return e.defaultView || e.parentWindow
        }

        function _(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                u(t.options.enable, [t]) && i.handler(e)
            }, this.init()
        }

        function A(t) {
            var e, i = t.options.inputClass;
            return new(e = i ? i : ge ? R : ye ? X : ve ? W : D)(t, k)
        }

        function k(t, e, i) {
            var n = i.pointers.length,
                o = i.changedPointers.length,
                s = e & _e && n - o === 0,
                r = e & (ke | Se) && n - o === 0;
            i.isFirst = !!s, i.isFinal = !!r, s && (t.session = {}), i.eventType = e, S(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function S(t, e) {
            var i = t.session,
                n = e.pointers,
                o = n.length;
            i.firstInput || (i.firstInput = I(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = I(e) : 1 === o && (i.firstMultiple = !1);
            var s = i.firstInput,
                r = i.firstMultiple,
                a = r ? r.center : s.center,
                l = e.center = P(n);
            e.timeStamp = fe(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = F(a, l), e.distance = C(a, l), L(i, e), e.offsetDirection = z(e.deltaX, e.deltaY), e.scale = r ? q(r.pointers, n) : 1, e.rotation = r ? M(r.pointers, n) : 0, O(i, e);
            var h = t.element;
            m(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h
        }

        function L(t, e) {
            var i = e.center,
                n = t.offsetDelta || {},
                o = t.prevDelta || {},
                s = t.prevInput || {};
            (e.eventType === _e || s.eventType === ke) && (o = t.prevDelta = {
                x: s.deltaX || 0,
                y: s.deltaY || 0
            }, n = t.offsetDelta = {
                x: i.x,
                y: i.y
            }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
        }

        function O(t, e) {
            var i, o, s, r, a = t.lastInterval || e,
                l = e.timeStamp - a.timeStamp;
            if (e.eventType != Se && (l > Ee || a.velocity === n)) {
                var h = a.deltaX - e.deltaX,
                    c = a.deltaY - e.deltaY,
                    u = $(l, h, c);
                o = u.x, s = u.y, i = pe(u.x) > pe(u.y) ? u.x : u.y, r = z(h, c), t.lastInterval = e
            } else i = a.velocity, o = a.velocityX, s = a.velocityY, r = a.direction;
            e.velocity = i, e.velocityX = o, e.velocityY = s, e.direction = r
        }

        function I(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                clientX: ue(t.pointers[i].clientX),
                clientY: ue(t.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: fe(),
                pointers: e,
                center: P(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function P(t) {
            var e = t.length;
            if (1 === e) return {
                x: ue(t[0].clientX),
                y: ue(t[0].clientY)
            };
            for (var i = 0, n = 0, o = 0; e > o;) i += t[o].clientX, n += t[o].clientY, o++;
            return {
                x: ue(i / e),
                y: ue(n / e)
            }
        }

        function $(t, e, i) {
            return {
                x: e / t || 0,
                y: i / t || 0
            }
        }

        function z(t, e) {
            return t === e ? Le : pe(t) >= pe(e) ? t > 0 ? Oe : Ie : e > 0 ? Pe : $e
        }

        function C(t, e, i) {
            i || (i = Me);
            var n = e[i[0]] - t[i[0]],
                o = e[i[1]] - t[i[1]];
            return Math.sqrt(n * n + o * o)
        }

        function F(t, e, i) {
            i || (i = Me);
            var n = e[i[0]] - t[i[0]],
                o = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(o, n) / Math.PI
        }

        function M(t, e) {
            return F(e[1], e[0], qe) - F(t[1], t[0], qe)
        }

        function q(t, e) {
            return C(e[0], e[1], qe) / C(t[0], t[1], qe)
        }

        function D() {
            this.evEl = Re, this.evWin = je, this.allow = !0, this.pressed = !1, _.apply(this, arguments)
        }

        function R() {
            this.evEl = Ye, this.evWin = We, _.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function j() {
            this.evTarget = Be, this.evWin = Ve, this.started = !1, _.apply(this, arguments)
        }

        function N(t, e) {
            var i = w(t.touches),
                n = w(t.changedTouches);
            return e & (ke | Se) && (i = b(i.concat(n), "identifier", !0)), [i, n]
        }

        function X() {
            this.evTarget = Ue, this.targetIds = {}, _.apply(this, arguments)
        }

        function Y(t, e) {
            var i = w(t.touches),
                n = this.targetIds;
            if (e & (_e | Ae) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var o, s, r = w(t.changedTouches),
                a = [],
                l = this.target;
            if (s = i.filter(function(t) {
                    return m(t.target, l)
                }), e === _e)
                for (o = 0; o < s.length;) n[s[o].identifier] = !0, o++;
            for (o = 0; o < r.length;) n[r[o].identifier] && a.push(r[o]), e & (ke | Se) && delete n[r[o].identifier], o++;
            return a.length ? [b(s.concat(a), "identifier", !0), a] : void 0
        }

        function W() {
            _.apply(this, arguments);
            var t = c(this.handler, this);
            this.touch = new X(this.manager, t), this.mouse = new D(this.manager, t)
        }

        function H(t, e) {
            this.manager = t, this.set(e)
        }

        function B(t) {
            if (v(t, ei)) return ei;
            var e = v(t, ii),
                i = v(t, ni);
            return e && i ? ii + " " + ni : e || i ? e ? ii : ni : v(t, ti) ? ti : Je
        }

        function V(t) {
            this.id = x(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = oi, this.simultaneous = {}, this.requireFail = []
        }

        function Q(t) {
            return t & hi ? "cancel" : t & ai ? "end" : t & ri ? "move" : t & si ? "start" : ""
        }

        function U(t) {
            return t == $e ? "down" : t == Pe ? "up" : t == Oe ? "left" : t == Ie ? "right" : ""
        }

        function G(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t
        }

        function K() {
            V.apply(this, arguments)
        }

        function Z() {
            K.apply(this, arguments), this.pX = null, this.pY = null
        }

        function J() {
            K.apply(this, arguments)
        }

        function te() {
            V.apply(this, arguments), this._timer = null, this._input = null
        }

        function ee() {
            K.apply(this, arguments)
        }

        function ie() {
            K.apply(this, arguments)
        }

        function ne() {
            V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function oe(t, e) {
            return e = e || {}, e.recognizers = p(e.recognizers, oe.defaults.preset), new se(t, e)
        }

        function se(t, e) {
            e = e || {}, this.options = l(e, oe.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = A(this), this.touchAction = new H(this, this.options.touchAction), re(this, !0), r(e.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function re(t, e) {
            var i = t.element;
            r(t.options.cssProps, function(t, n) {
                i.style[T(i.style, n)] = e ? t : ""
            })
        }

        function ae(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var le = ["", "webkit", "moz", "MS", "ms", "o"],
            he = e.createElement("div"),
            ce = "function",
            ue = Math.round,
            pe = Math.abs,
            fe = Date.now,
            de = 1,
            me = /mobile|tablet|ip(ad|hone|od)|android/i,
            ve = "ontouchstart" in t,
            ge = T(t, "PointerEvent") !== n,
            ye = ve && me.test(navigator.userAgent),
            we = "touch",
            be = "pen",
            Te = "mouse",
            xe = "kinect",
            Ee = 25,
            _e = 1,
            Ae = 2,
            ke = 4,
            Se = 8,
            Le = 1,
            Oe = 2,
            Ie = 4,
            Pe = 8,
            $e = 16,
            ze = Oe | Ie,
            Ce = Pe | $e,
            Fe = ze | Ce,
            Me = ["x", "y"],
            qe = ["clientX", "clientY"];
        _.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(E(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(E(this.element), this.evWin, this.domHandler)
            }
        };
        var De = {
                mousedown: _e,
                mousemove: Ae,
                mouseup: ke
            },
            Re = "mousedown",
            je = "mousemove mouseup";
        h(D, _, {
            handler: function(t) {
                var e = De[t.type];
                e & _e && 0 === t.button && (this.pressed = !0), e & Ae && 1 !== t.which && (e = ke), this.pressed && this.allow && (e & ke && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: Te,
                    srcEvent: t
                }))
            }
        });
        var Ne = {
                pointerdown: _e,
                pointermove: Ae,
                pointerup: ke,
                pointercancel: Se,
                pointerout: Se
            },
            Xe = {
                2: we,
                3: be,
                4: Te,
                5: xe
            },
            Ye = "pointerdown",
            We = "pointermove pointerup pointercancel";
        t.MSPointerEvent && (Ye = "MSPointerDown", We = "MSPointerMove MSPointerUp MSPointerCancel"), h(R, _, {
            handler: function(t) {
                var e = this.store,
                    i = !1,
                    n = t.type.toLowerCase().replace("ms", ""),
                    o = Ne[n],
                    s = Xe[t.pointerType] || t.pointerType,
                    r = s == we,
                    a = y(e, t.pointerId, "pointerId");
                o & _e && (0 === t.button || r) ? 0 > a && (e.push(t), a = e.length - 1) : o & (ke | Se) && (i = !0), 0 > a || (e[a] = t, this.callback(this.manager, o, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: s,
                    srcEvent: t
                }), i && e.splice(a, 1))
            }
        });
        var He = {
                touchstart: _e,
                touchmove: Ae,
                touchend: ke,
                touchcancel: Se
            },
            Be = "touchstart",
            Ve = "touchstart touchmove touchend touchcancel";
        h(j, _, {
            handler: function(t) {
                var e = He[t.type];
                if (e === _e && (this.started = !0), this.started) {
                    var i = N.call(this, t, e);
                    e & (ke | Se) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: we,
                        srcEvent: t
                    })
                }
            }
        });
        var Qe = {
                touchstart: _e,
                touchmove: Ae,
                touchend: ke,
                touchcancel: Se
            },
            Ue = "touchstart touchmove touchend touchcancel";
        h(X, _, {
            handler: function(t) {
                var e = Qe[t.type],
                    i = Y.call(this, t, e);
                i && this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: we,
                    srcEvent: t
                })
            }
        }), h(W, _, {
            handler: function(t, e, i) {
                var n = i.pointerType == we,
                    o = i.pointerType == Te;
                if (n) this.mouse.allow = !1;
                else if (o && !this.mouse.allow) return;
                e & (ke | Se) && (this.mouse.allow = !0), this.callback(t, e, i)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ge = T(he.style, "touchAction"),
            Ke = Ge !== n,
            Ze = "compute",
            Je = "auto",
            ti = "manipulation",
            ei = "none",
            ii = "pan-x",
            ni = "pan-y";
        H.prototype = {
            set: function(t) {
                t == Ze && (t = this.compute()), Ke && (this.manager.element.style[Ge] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return r(this.manager.recognizers, function(e) {
                    u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), B(t.join(" "))
            },
            preventDefaults: function(t) {
                if (!Ke) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) return void e.preventDefault();
                    var n = this.actions,
                        o = v(n, ei),
                        s = v(n, ni),
                        r = v(n, ii);
                    return o || s && i & ze || r && i & Ce ? this.preventSrc(e) : void 0
                }
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var oi = 1,
            si = 2,
            ri = 4,
            ai = 8,
            li = ai,
            hi = 16,
            ci = 32;
        V.prototype = {
            defaults: {},
            set: function(t) {
                return a(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (s(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = G(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return s(t, "dropRecognizeWith", this) ? this : (t = G(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (s(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = G(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (s(t, "dropRequireFailure", this)) return this;
                t = G(t, this);
                var e = y(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function e(e) {
                    i.manager.emit(i.options.event + (e ? Q(n) : ""), t)
                }
                var i = this,
                    n = this.state;
                ai > n && e(!0), e(), n >= ai && e(!0)
            },
            tryEmit: function(t) {
                return this.canEmit() ? this.emit(t) : void(this.state = ci)
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (ci | oi))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = a({}, t);
                return u(this.options.enable, [this, e]) ? (this.state & (li | hi | ci) && (this.state = oi), this.state = this.process(e), void(this.state & (si | ri | ai | hi) && this.tryEmit(e))) : (this.reset(), void(this.state = ci))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, h(K, V, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    i = t.eventType,
                    n = e & (si | ri),
                    o = this.attrTest(t);
                return n && (i & Se || !o) ? e | hi : n || o ? i & ke ? e | ai : e & si ? e | ri : si : ci
            }
        }), h(Z, K, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Fe
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & ze && e.push(ni), t & Ce && e.push(ii), e
            },
            directionTest: function(t) {
                var e = this.options,
                    i = !0,
                    n = t.distance,
                    o = t.direction,
                    s = t.deltaX,
                    r = t.deltaY;
                return o & e.direction || (e.direction & ze ? (o = 0 === s ? Le : 0 > s ? Oe : Ie, i = s != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === r ? Le : 0 > r ? Pe : $e, i = r != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
            },
            attrTest: function(t) {
                return K.prototype.attrTest.call(this, t) && (this.state & si || !(this.state & si) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = U(t.direction);
                e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
            }
        }), h(J, K, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ei]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & si)
            },
            emit: function(t) {
                if (this._super.emit.call(this, t), 1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + e, t)
                }
            }
        }), h(te, V, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Je]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    s = t.deltaTime > e.time;
                if (this._input = t, !n || !i || t.eventType & (ke | Se) && !s) this.reset();
                else if (t.eventType & _e) this.reset(), this._timer = o(function() {
                    this.state = li, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & ke) return li;
                return ci
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === li && (t && t.eventType & ke ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = fe(), this.manager.emit(this.options.event, this._input)))
            }
        }), h(ee, K, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ei]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & si)
            }
        }), h(ie, K, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: ze | Ce,
                pointers: 1
            },
            getTouchAction: function() {
                return Z.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, i = this.options.direction;
                return i & (ze | Ce) ? e = t.velocity : i & ze ? e = t.velocityX : i & Ce && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && pe(e) > this.options.velocity && t.eventType & ke
            },
            emit: function(t) {
                var e = U(t.direction);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), h(ne, V, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [ti]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    s = t.deltaTime < e.time;
                if (this.reset(), t.eventType & _e && 0 === this.count) return this.failTimeout();
                if (n && s && i) {
                    if (t.eventType != ke) return this.failTimeout();
                    var r = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                        a = !this.pCenter || C(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, a && r ? this.count += 1 : this.count = 1, this._input = t;
                    var l = this.count % e.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = o(function() {
                        this.state = li, this.tryEmit()
                    }, e.interval, this), si) : li
                }
                return ci
            },
            failTimeout: function() {
                return this._timer = o(function() {
                    this.state = ci
                }, this.options.interval, this), ci
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == li && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), oe.VERSION = "2.0.4", oe.defaults = {
            domEvents: !1,
            touchAction: Ze,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ee, {
                    enable: !1
                }],
                [J, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ie, {
                    direction: ze
                }],
                [Z, {
                        direction: ze
                    },
                    ["swipe"]
                ],
                [ne],
                [ne, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [te]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var ui = 1,
            pi = 2;
        se.prototype = {
            set: function(t) {
                return a(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? pi : ui
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var i, n = this.recognizers,
                        o = e.curRecognizer;
                    (!o || o && o.state & li) && (o = e.curRecognizer = null);
                    for (var s = 0; s < n.length;) i = n[s], e.stopped === pi || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (si | ri | ai) && (o = e.curRecognizer = i), s++
                }
            },
            get: function(t) {
                if (t instanceof V) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null
            },
            add: function(t) {
                if (s(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (s(t, "remove", this)) return this;
                var e = this.recognizers;
                return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
            },
            on: function(t, e) {
                var i = this.handlers;
                return r(g(t), function(t) {
                    i[t] = i[t] || [], i[t].push(e)
                }), this
            },
            off: function(t, e) {
                var i = this.handlers;
                return r(g(t), function(t) {
                    e ? i[t].splice(y(i[t], e), 1) : delete i[t]
                }), this
            },
            emit: function(t, e) {
                this.options.domEvents && ae(t, e);
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](e), n++
                }
            },
            destroy: function() {
                this.element && re(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, a(oe, {
            INPUT_START: _e,
            INPUT_MOVE: Ae,
            INPUT_END: ke,
            INPUT_CANCEL: Se,
            STATE_POSSIBLE: oi,
            STATE_BEGAN: si,
            STATE_CHANGED: ri,
            STATE_ENDED: ai,
            STATE_RECOGNIZED: li,
            STATE_CANCELLED: hi,
            STATE_FAILED: ci,
            DIRECTION_NONE: Le,
            DIRECTION_LEFT: Oe,
            DIRECTION_RIGHT: Ie,
            DIRECTION_UP: Pe,
            DIRECTION_DOWN: $e,
            DIRECTION_HORIZONTAL: ze,
            DIRECTION_VERTICAL: Ce,
            DIRECTION_ALL: Fe,
            Manager: se,
            Input: _,
            TouchAction: H,
            TouchInput: X,
            MouseInput: D,
            PointerEventInput: R,
            TouchMouseInput: W,
            SingleTouchInput: j,
            Recognizer: V,
            AttrRecognizer: K,
            Tap: ne,
            Pan: Z,
            Swipe: ie,
            Pinch: J,
            Rotate: ee,
            Press: te,
            on: f,
            off: d,
            each: r,
            merge: l,
            extend: a,
            inherit: h,
            bindFn: c,
            prefixed: T
        }), typeof define == ce && define.amd ? define(function() {
            return oe
        }) : "undefined" != typeof module && module.exports ? module.exports = oe : t[i] = oe
    }(window, document, "Hammer"),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            o = this,
            s = o.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, o = this.getListenersAsObject(t),
                s = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, o, s = this.getListenersAsObject(t);
            for (o in s) s.hasOwnProperty(o) && (n = e(s[o], i), -1 !== n && s[o].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, o, s = t ? this.removeListener : this.addListener,
                r = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) s.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, o, s, r = this.getListenersAsObject(t);
            for (o in r)
                if (r.hasOwnProperty(o))
                    for (n = r[o].length; n--;) i = r[o][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return o.EventEmitter = s, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var o = function() {};
        i.removeEventListener ? o = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : t.eventie = s
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function o(t) {
            return "[object Array]" === p.call(t)
        }

        function s(t) {
            var e = [];
            if (o(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function r(t, e, i) {
            if (!(this instanceof r)) return new r(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
            var o = this;
            setTimeout(function() {
                o.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var h = t.jQuery,
            c = t.console,
            u = void 0 !== c,
            p = Object.prototype.toString;
        r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var o = i.querySelectorAll("img"), s = 0, r = o.length; r > s; s++) {
                        var a = o[s];
                        this.addImage(a)
                    }
            }
        }, r.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, r.prototype.check = function() {
            function t(t, o) {
                return e.options.debug && u && c.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return this.complete(), void 0;
            for (var o = 0; n > o; o++) {
                var s = this.images[o];
                s.on("confirm", t), s.check()
            }
        }, r.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, h && (h.fn.imagesLoaded = function(t, e) {
            var i = new r(this, t, e);
            return i.jqDeferred.promise(h(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return this.confirm(t.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, r
    }),
    function() {
        var t, e;
        t = function() {
            function t(t, e) {
                var i, n;
                if (this.options = {
                        target: "instafeed",
                        get: "popular",
                        resolution: "thumbnail",
                        sortBy: "none",
                        links: !0,
                        mock: !1,
                        useHttp: !1
                    }, "object" == typeof t)
                    for (i in t) n = t[i], this.options[i] = n;
                this.context = null != e ? e : this, this.unique = this._genKey()
            }
            return t.prototype.hasNext = function() {
                return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
            }, t.prototype.next = function() {
                return this.hasNext() ? this.run(this.context.nextUrl) : !1
            }, t.prototype.run = function(e) {
                var i, n, o;
                if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (o = document.createElement("script"), o.id = "instafeed-fetcher", o.src = e || this._buildUrl(), i = document.getElementsByTagName("head"), i[0].appendChild(o), n = "instafeedCache" + this.unique, window[n] = new t(this.options, this), window[n].unique = this.unique), !0
            }, t.prototype.parse = function(t) {
                var e, i, n, o, s, r, a, l, h, c, u, p, f, d, m, v, g, y, w, b, T, x;
                if ("object" != typeof t) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                    throw new Error("Invalid JSON response")
                }
                if (200 !== t.meta.code) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
                    throw new Error("Error from Instagram: " + t.meta.error_message)
                }
                if (0 === t.data.length) {
                    if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                    throw new Error("No images were returned from Instagram")
                }
                if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (d = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), f = "least" === d[0] ? !0 : !1, d[1]) {
                    case "random":
                        t.data.sort(function() {
                            return .5 - Math.random()
                        });
                        break;
                    case "recent":
                        t.data = this._sortBy(t.data, "created_time", f);
                        break;
                    case "liked":
                        t.data = this._sortBy(t.data, "likes.count", f);
                        break;
                    case "commented":
                        t.data = this._sortBy(t.data, "comments.count", f);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
                if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                    if (l = t.data, null != this.options.limit && l.length > this.options.limit && (l = l.slice(0, this.options.limit + 1 || 9e9)), i = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (l = this._filter(l, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                        for (o = "", r = "", c = "", m = document.createElement("div"), v = 0, w = l.length; w > v; v++) s = l[v], a = s.images[this.options.resolution].url, this.options.useHttp || (a = a.replace("http://", "//")), r = this._makeTemplate(this.options.template, {
                            model: s,
                            id: s.id,
                            link: s.link,
                            image: a,
                            caption: this._getObjectProperty(s, "caption.text"),
                            likes: s.likes.count,
                            comments: s.comments.count,
                            location: this._getObjectProperty(s, "location.name")
                        }), o += r;
                        for (m.innerHTML = o, x = [].slice.call(m.childNodes), g = 0, b = x.length; b > g; g++) p = x[g], i.appendChild(p)
                    } else
                        for (y = 0, T = l.length; T > y; y++) s = l[y], h = document.createElement("img"), a = s.images[this.options.resolution].url, this.options.useHttp || (a = a.replace("http://", "//")), h.src = a, this.options.links === !0 ? (e = document.createElement("a"), e.href = s.link, e.appendChild(h), i.appendChild(e)) : i.appendChild(h);
                    document.getElementById(this.options.target).appendChild(i), n = document.getElementsByTagName("head")[0], n.removeChild(document.getElementById("instafeed-fetcher")), u = "instafeedCache" + this.unique, window[u] = void 0;
                    try {
                        delete window[u]
                    } catch (E) {}
                }
                return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
            }, t.prototype._buildUrl = function() {
                var t, e, i;
                switch (t = "https://api.instagram.com/v1", this.options.get) {
                    case "popular":
                        e = "media/popular";
                        break;
                    case "tagged":
                        if ("string" != typeof this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                        e = "tags/" + this.options.tagName + "/media/recent";
                        break;
                    case "location":
                        if ("number" != typeof this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                        e = "locations/" + this.options.locationId + "/media/recent";
                        break;
                    case "user":
                        if ("number" != typeof this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                        if ("string" != typeof this.options.accessToken) throw new Error("No access token. Use the 'accessToken' option.");
                        e = "users/" + this.options.userId + "/media/recent";
                        break;
                    default:
                        throw new Error("Invalid option for get: '" + this.options.get + "'.")
                }
                return i = "" + t + "/" + e, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse"
            }, t.prototype._genKey = function() {
                var t;
                return t = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                }, "" + t() + t() + t() + t()
            }, t.prototype._makeTemplate = function(t, e) {
                var i, n, o, s, r;
                for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = t; n.test(i);) o = i.match(n)[1], s = null != (r = this._getObjectProperty(e, o)) ? r : "", i = i.replace(n, "" + s);
                return i
            }, t.prototype._getObjectProperty = function(t, e) {
                var i, n;
                for (e = e.replace(/\[(\w+)\]/g, ".$1"), n = e.split("."); n.length;) {
                    if (i = n.shift(), !(null != t && i in t)) return null;
                    t = t[i]
                }
                return t
            }, t.prototype._sortBy = function(t, e, i) {
                var n;
                return n = function(t, n) {
                    var o, s;
                    return o = this._getObjectProperty(t, e), s = this._getObjectProperty(n, e), i ? o > s ? 1 : -1 : s > o ? 1 : -1
                }, t.sort(n.bind(this)), t
            }, t.prototype._filter = function(t, e) {
                var i, n, o, s, r;
                for (i = [], o = function(t) {
                        return e(t) ? i.push(t) : void 0
                    }, s = 0, r = t.length; r > s; s++) n = t[s], o(n);
                return i
            }, t
        }(), e = "undefined" != typeof exports && null !== exports ? exports : window, e.Instafeed = t
    }.call(this),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
    }(function(t, e) {
        function i(i, n) {
            var o = t(i);
            o.data("hammer") || o.data("hammer", new e(o[0], n))
        }
        t.fn.hammer = function(t) {
            return this.each(function() {
                i(this, t)
            })
        }, e.Manager.prototype.emit = function(e) {
            return function(i, n) {
                e.call(this, i, n), t(this.element).trigger({
                    type: i,
                    gesture: n
                })
            }
        }(e.Manager.prototype.emit)
    }),
    function(t) {
        t.fn.hoverIntent = function(e, i, n) {
            var o = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            };
            o = "object" == typeof e ? t.extend(o, e) : t.isFunction(i) ? t.extend(o, {
                over: e,
                out: i,
                selector: n
            }) : t.extend(o, {
                over: e,
                out: e,
                selector: i
            });
            var s, r, a, l, h = function(t) {
                    s = t.pageX, r = t.pageY
                },
                c = function(e, i) {
                    return i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.sqrt((a - s) * (a - s) + (l - r) * (l - r)) < o.sensitivity ? (t(i).off("mousemove.hoverIntent", h), i.hoverIntent_s = !0, o.over.apply(i, [e])) : (a = s, l = r, i.hoverIntent_t = setTimeout(function() {
                        c(e, i)
                    }, o.interval), void 0)
                },
                u = function(t, e) {
                    return e.hoverIntent_t = clearTimeout(e.hoverIntent_t), e.hoverIntent_s = !1, o.out.apply(e, [t])
                },
                p = function(e) {
                    var i = t.extend({}, e),
                        n = this;
                    n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)), "mouseenter" === e.type ? (a = i.pageX, l = i.pageY, t(n).on("mousemove.hoverIntent", h), n.hoverIntent_s || (n.hoverIntent_t = setTimeout(function() {
                        c(i, n)
                    }, o.interval))) : (t(n).off("mousemove.hoverIntent", h), n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                        u(i, n)
                    }, o.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": p,
                "mouseleave.hoverIntent": p
            }, o.selector)
        }
    }(jQuery),
    function(t, e, i, n) {
        "use strict";

        function o(e, i) {
            this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
            var n = {
                calibrateX: this.$context.data("calibrate-x") || null,
                calibrateY: this.$context.data("calibrate-y") || null,
                invertX: this.$context.data("invert-x") || null,
                invertY: this.$context.data("invert-y") || null,
                limitX: parseFloat(this.$context.data("limit-x")) || null,
                limitY: parseFloat(this.$context.data("limit-y")) || null,
                scalarX: parseFloat(this.$context.data("scalar-x")) || null,
                scalarY: parseFloat(this.$context.data("scalar-y")) || null,
                frictionX: parseFloat(this.$context.data("friction-x")) || null,
                frictionY: parseFloat(this.$context.data("friction-y")) || null,
                originX: parseFloat(this.$context.data("origin-x")) || null,
                originY: parseFloat(this.$context.data("origin-y")) || null
            };
            for (var o in n) null === n[o] && delete n[o];
            t.extend(this, a, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.gyroOnly || (this.onMouseMove = this.onMouseMove.bind(this)), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), t("html").hasClass("cursor_enabled") && (this.onAnimationFrame = function() {}), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
        }
        var s = "parallax",
            r = 30,
            a = {
                relativeInput: !1,
                clipRelativeInput: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: .1,
                frictionY: .1,
                originX: .5,
                originY: .5,
                setPosition: !1,
                gyroOnly: !1,
                resetLayerPosition: !0
            };
        o.prototype.transformSupport = function(t) {
            for (var o = i.createElement("div"), s = !1, r = null, a = !1, l = null, h = null, c = 0, u = this.vendors.length; u > c; c++)
                if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), o.style[h] !== n) {
                    s = !0;
                    break
                }
            switch (t) {
                case "2D":
                    a = s;
                    break;
                case "3D":
                    if (s) {
                        var p = i.body || i.createElement("body"),
                            f = i.documentElement,
                            d = f.style.overflow;
                        i.body || (f.style.overflow = "hidden", f.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(o), o.style[h] = "translate3d(1px,1px,1px)", r = e.getComputedStyle(o).getPropertyValue(l), a = r !== n && r.length > 0 && "none" !== r, f.style.overflow = d, p.removeChild(o)
                    }
            }
            return a
        }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"],
            ["-moz-", "Moz"],
            ["-o-", "O"],
            ["-ms-", "ms"]
        ], o.prototype.motionSupport = !!e.DeviceMotionEvent, o.prototype.orientationSupport = !!e.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function() {
            "static" === this.$context.css("position") && this.$context.css({
                position: "relative"
            }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
        }, o.prototype.updateLayers = function() {
            this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
                position: "absolute",
                display: "block"
            }), this.resetLayerPosition && this.$layers.css({
                left: 0,
                top: 0
            }), this.$layers.first().css({
                position: "relative"
            }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(e, i) {
                this.depths.push(t(i).data("depth") || 0)
            }, this))
        }, o.prototype.updateDimensions = function() {
            this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
        }, o.prototype.updateBounds = function() {
            this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
        }, o.prototype.queueCalibration = function(t) {
            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
        }, o.prototype.enable = function() {
            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : this.gyroOnly || (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame), t("html").hasClass("cursor_enabled") && (this.raf = null))
        }, o.prototype.disable = function() {
            this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.gyroOnly || e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
        }, o.prototype.calibrate = function(t, e) {
            this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
        }, o.prototype.invert = function(t, e) {
            this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
        }, o.prototype.friction = function(t, e) {
            this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
        }, o.prototype.scalar = function(t, e) {
            this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
        }, o.prototype.limit = function(t, e) {
            this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
        }, o.prototype.origin = function(t, e) {
            this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
        }, o.prototype.clamp = function(t, e, i) {
            return t = Math.max(t, e), t = Math.min(t, i)
        }, o.prototype.css = function(e, i, o) {
            var s = this.propertyCache[i];
            if (!s)
                for (var r = 0, a = this.vendors.length; a > r; r++)
                    if (s = null !== this.vendors[r] ? t.camelCase(this.vendors[r][1] + "-" + i) : i, e.style[s] !== n) {
                        this.propertyCache[i] = s;
                        break
                    }
            e.style[s] = o
        }, o.prototype.accelerate = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
            }
        }, o.prototype.setPosition = function(t, e, i) {
            e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
        }, o.prototype.onOrientationTimer = function() {
            this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
        }, o.prototype.onCalibrationTimer = function() {
            this.calibrationFlag = !0
        }, o.prototype.onWindowResize = function() {
            this.updateDimensions()
        }, o.prototype.onAnimationFrame = function() {
            this.updateBounds();
            var t = this.ix - this.cx,
                e = this.iy - this.cy;
            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
            for (var i = 0, n = this.$layers.length; n > i; i++) {
                var o = this.depths[i],
                    s = this.$layers[i],
                    r = this.vx * o * (this.invertX ? -1 : 1),
                    a = this.vy * o * (this.invertY ? -1 : 1);
                this.setPosition(s, r, a)
            }
            this.raf = requestAnimationFrame(this.onAnimationFrame)
        }, o.prototype.onDeviceOrientation = function(t) {
            if (!this.desktop && null !== t.beta && null !== t.gamma) {
                this.orientationStatus = 1;
                var i = (t.beta || 0) / r,
                    n = (t.gamma || 0) / r,
                    o = e.innerHeight > e.innerWidth;
                this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
            }
        }, o.prototype.onMouseMove = function(t) {
            var e = t.clientX,
                i = t.clientY;
            !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
        };
        var l = {
            enable: o.prototype.enable,
            disable: o.prototype.disable,
            updateLayers: o.prototype.updateLayers,
            calibrate: o.prototype.calibrate,
            friction: o.prototype.friction,
            invert: o.prototype.invert,
            scalar: o.prototype.scalar,
            limit: o.prototype.limit,
            origin: o.prototype.origin
        };
        t.fn[s] = function(e) {
            var i = arguments;
            return this.each(function() {
                var n = t(this),
                    r = n.data(s);
                r || (r = new o(this, e), n.data(s, r)), l[e] && r[e].apply(r, Array.prototype.slice.call(i, 1))
            })
        }
    }(window.jQuery || window.Zepto, window, document),
    function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - t)),
                o = window.setTimeout(function() {
                    e(i + n)
                }, n);
            return t = i + n, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(),
    function(t) {
    }(function(t) {
        "use strict";

        function e(e) {
            return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }

        function i(e) {
            return t.isFunction(e) || t.isPlainObject(e) ? e : {
                top: e,
                left: e
            }
        }
        var n = t.scrollTo = function(e, i, n) {
            return t(window).scrollTo(e, i, n)
        };
        return n.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, t.fn.scrollTo = function(o, s, r) {
            "object" == typeof s && (r = s, s = 0), "function" == typeof r && (r = {
                onAfter: r
            }), "max" === o && (o = 9e9), r = t.extend({}, n.defaults, r), s = s || r.duration;
            var a = r.queue && 1 < r.axis.length;
            return a && (s /= 2), r.offset = i(r.offset), r.over = i(r.over), this.each(function() {
                function l(e) {
                    var i = t.extend({}, r, {
                        queue: !0,
                        duration: s,
                        complete: e && function() {
                            e.call(u, f, r)
                        }
                    });
                    p.animate(d, i)
                }
                if (null !== o) {
                }
            })
        }, n.max = function(i, n) {
            var o = "x" === n ? "Width" : "Height",
                s = "scroll" + o;
            if (!e(i)) return i[s] - t(i)[o.toLowerCase()]();
            var o = "client" + o,
                r = i.ownerDocument || i.document,
                a = r.documentElement,
                r = r.body;
            return Math.max(a[s], r[s]) - Math.min(a[o], r[o])
        }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
            get: function(e) {
                return t(e.elem)[e.prop]()
            },
            set: function(e) {
                var i = this.get(e);
                if (e.options.interrupt && e._last && e._last !== i) return t(e.elem).stop();
                var n = Math.round(e.now);
                i !== n && (t(e.elem)[e.prop](n), e._last = this.get(e))
            }
        }, n
    }), ! function(t, e, i, n) {
        function o(e, i) {
            this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = s, this.init()
        }
        var s = "stellar",
            r = {
                scrollProperty: "scroll",
                positionProperty: "position",
                horizontalScrolling: !0,
                verticalScrolling: !0,
                horizontalOffset: 0,
                verticalOffset: 0,
                responsive: !1,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                hideDistantElements: !0,
                hideElement: function(t) {
                    t.hide()
                },
                showElement: function(t) {
                    t.show()
                }
            },
            a = {
                scroll: {
                    getLeft: function(t) {
                        return t.scrollLeft()
                    },
                    setLeft: function(t, e) {
                        t.scrollLeft(e)
                    },
                    getTop: function(t) {
                        return t.scrollTop()
                    },
                    setTop: function(t, e) {
                        t.scrollTop(e)
                    }
                },
                position: {
                    getLeft: function(t) {
                        return -1 * parseInt(t.css("left"), 10)
                    },
                    getTop: function(t) {
                        return -1 * parseInt(t.css("top"), 10)
                    }
                },
                margin: {
                    getLeft: function(t) {
                        return -1 * parseInt(t.css("margin-left"), 10)
                    },
                    getTop: function(t) {
                        return -1 * parseInt(t.css("margin-top"), 10)
                    }
                },
                transform: {
                    getLeft: function(t) {
                        var e = getComputedStyle(t[0])[c];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                    },
                    getTop: function(t) {
                        var e = getComputedStyle(t[0])[c];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                    }
                }
            },
            l = {
                position: {
                    setLeft: function(t, e) {
                        t.css("left", e)
                    },
                    setTop: function(t, e) {
                        t.css("top", e)
                    }
                },
                transform: {
                    setPosition: function(t, e, i, n, o) {
                        t[0].style[c] = "translate3d(" + (e - i) + "px, " + (n - o) + "px, 0)"
                    }
                }
            },
            h = function() {
                var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    n = t("script")[0].style,
                    o = "";
                for (e in n)
                    if (i.test(e)) {
                        o = e.match(i)[0];
                        break
                    }
                return "WebkitOpacity" in n && (o = "Webkit"), "KhtmlOpacity" in n && (o = "Khtml"),
                    function(t) {
                        return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                    }
            }(),
            c = h("transform"),
            u = t("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== n,
            p = u ? function(t, e, i) {
                t.css({
                    "background-position-x": e,
                    "background-position-y": i
                })
            } : function(t, e, i) {
                t.css("background-position", e + " " + i)
            },
            f = u ? function(t) {
                return [t.css("background-position-x"), t.css("background-position-y")]
            } : function(t) {
                return t.css("background-position").split(" ")
            },
            d = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            };
        o.prototype = {
            init: function() {
                this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                    firstLoad: !0
                }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            },
            _defineElements: function() {
                this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            },
            _defineGetters: function() {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function() {
                    return e.getLeft(t.$scrollElement)
                }, this._getScrollTop = function() {
                    return e.getTop(t.$scrollElement)
                }
            },
            _defineSetters: function() {
                var e = this,
                    i = a[e.options.scrollProperty],
                    n = l[e.options.positionProperty],
                    o = i.setLeft,
                    s = i.setTop;
                this._setScrollLeft = "function" == typeof o ? function(t) {
                    o(e.$scrollElement, t)
                } : t.noop, this._setScrollTop = "function" == typeof s ? function(t) {
                    s(e.$scrollElement, t)
                } : t.noop, this._setPosition = n.setPosition || function(t, i, o, s, r) {
                    e.options.horizontalScrolling && n.setLeft(t, i, o), e.options.verticalScrolling && n.setTop(t, s, r)
                }
            },
            _handleWindowLoadAndResize: function() {
                var i = this,
                    n = t(e);
                i.options.responsive && n.bind("load." + this.name, function() {
                    i.refresh()
                }), n.bind("resize." + this.name, function() {
                    i._detectViewport(), i.options.responsive && i.refresh()
                })
            },
            refresh: function(i) {
                var n = this,
                    o = n._getScrollLeft(),
                    s = n._getScrollTop();
                i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                    var t = n._getScrollLeft(),
                        e = n._getScrollTop();
                    n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
                }), this._setScrollLeft(o), this._setScrollTop(s)
            },
            _detectViewport: function() {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== n;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            },
            _findParticles: function() {
                var e = this;
                if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
                    for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                    var i, o, s, r, a, l, h, c, u, p = t(this),
                        f = 0,
                        d = 0,
                        m = 0,
                        v = 0;
                    if (p.data("stellar-elementIsActive")) {
                        if (p.data("stellar-elementIsActive") !== this) return
                    } else p.data("stellar-elementIsActive", this);
                    e.options.showElement(p), p.data("stellar-startingLeft") ? (p.css("left", p.data("stellar-startingLeft")), p.css("top", p.data("stellar-startingTop"))) : (p.data("stellar-startingLeft", p.css("left")), p.data("stellar-startingTop", p.css("top"))), s = p.position().left, r = p.position().top, a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), c = p.offset().left - a, u = p.offset().top - l, p.parents().each(function() {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (f = m, d = v, h = e, !1) : (m += e.position().left, void(v += e.position().top))
                    }), i = p.data("stellar-horizontal-offset") !== n ? p.data("stellar-horizontal-offset") : h !== n && h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : e.horizontalOffset, o = p.data("stellar-vertical-offset") !== n ? p.data("stellar-vertical-offset") : h !== n && h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                        $element: p,
                        $offsetParent: h,
                        isFixed: "fixed" === p.css("position"),
                        horizontalOffset: i,
                        verticalOffset: o,
                        startingPositionLeft: s,
                        startingPositionTop: r,
                        startingOffsetLeft: c,
                        startingOffsetTop: u,
                        parentOffsetLeft: f,
                        parentOffsetTop: d,
                        stellarRatio: p.data("stellar-ratio") !== n ? p.data("stellar-ratio") : 1,
                        width: p.outerWidth(!0),
                        height: p.outerHeight(!0),
                        isHidden: !1
                    })
                })
            },
            _findBackgrounds: function() {
                var e, i = this,
                    o = this._getScrollLeft(),
                    s = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                    var e, r, a, l, h, c, u, d = t(this),
                        m = f(d),
                        v = 0,
                        g = 0,
                        y = 0,
                        w = 0;
                    if (d.data("stellar-backgroundIsActive")) {
                        if (d.data("stellar-backgroundIsActive") !== this) return
                    } else d.data("stellar-backgroundIsActive", this);
                    d.data("stellar-backgroundStartingLeft") ? p(d, d.data("stellar-backgroundStartingLeft"), d.data("stellar-backgroundStartingTop")) : (d.data("stellar-backgroundStartingLeft", m[0]), d.data("stellar-backgroundStartingTop", m[1])), a = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), l = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), h = d.offset().left - a - o, c = d.offset().top - l - s, d.parents().each(function() {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (v = y, g = w, u = e, !1) : (y += e.position().left, void(w += e.position().top))
                    }), e = d.data("stellar-horizontal-offset") !== n ? d.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : i.horizontalOffset, r = d.data("stellar-vertical-offset") !== n ? d.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                        $element: d,
                        $offsetParent: u,
                        isFixed: "fixed" === d.css("background-attachment"),
                        horizontalOffset: e,
                        verticalOffset: r,
                        startingValueLeft: m[0],
                        startingValueTop: m[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(m[0], 10)) ? 0 : parseInt(m[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(m[1], 10)) ? 0 : parseInt(m[1], 10),
                        startingPositionLeft: d.position().left,
                        startingPositionTop: d.position().top,
                        startingOffsetLeft: h,
                        startingOffsetTop: c,
                        parentOffsetLeft: v,
                        parentOffsetTop: g,
                        stellarRatio: d.data("stellar-background-ratio") === n ? 1 : d.data("stellar-background-ratio")
                    })
                }))
            },
            _reset: function() {
                var t, e, i, n, o;
                for (o = this.particles.length - 1; o >= 0; o--) t = this.particles[o], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (o = this.backgrounds.length - 1; o >= 0; o--) n = this.backgrounds[o], n.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), p(n.$element, n.startingValueLeft, n.startingValueTop)
            },
            destroy: function() {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
            },
            _setOffsets: function() {
                var i = this,
                    n = t(e);
                n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                    i.horizontalOffset = i.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                    i.verticalOffset = i.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function() {
                var t, e, i, n, o, s, r, a, l, h, c = this._getScrollLeft(),
                    u = this._getScrollTop(),
                    f = !0,
                    d = !0;
                if (this.currentScrollLeft !== c || this.currentScrollTop !== u || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = c, this.currentScrollTop = u, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, h = this.particles.length - 1; h >= 0; h--) t = this.particles[h], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (s = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = s - t.startingPositionLeft + t.startingOffsetLeft) : (s = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (u + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (d = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : u) && l < (t.isFixed ? 0 : u) + this.viewportHeight + this.viewportOffsetTop), d && f ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, s, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (h = this.backgrounds.length - 1; h >= 0; h--) i = this.backgrounds[h], e = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (u + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, p(i.$element, n, o)
                }
            },
            _handleScrollEvent: function() {
                var t = this,
                    e = !1,
                    i = function() {
                        t._repositionElements(), e = !1
                    },
                    n = function() {
                        e || (d(i), e = !0)
                    };
                this.$scrollElement.bind("scroll." + this.name, n), n()
            },
            _startAnimationLoop: function() {
                var t = this;
                this._animationLoop = function() {
                    d(t._animationLoop), t._repositionElements()
                }, this._animationLoop()
            }
        }, t.fn[s] = function(e) {
            var i = arguments;
            return e === n || "object" == typeof e ? this.each(function() {
                t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
                var n = t.data(this, "plugin_" + s);
                n instanceof o && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + s, null)
            }) : void 0
        }, t[s] = function() {
            var i = t(e);
            return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
        }, t[s].scrollProperty = a, t[s].positionProperty = l, e.Stellar = o
    }(jQuery, this, document), ! function() {
        "use strict";

        function t(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
        }
        var e = 0,
            i = {};
        t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, t.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, t.prototype.disable = function() {
            return this.enabled = !1, this
        }, t.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, t.prototype.next = function() {
            return this.group.next(this)
        }, t.prototype.previous = function() {
            return this.group.previous(this)
        }, t.invokeAll = function(t) {
            var e = [];
            for (var n in i) e.push(i[n]);
            for (var o = 0, s = e.length; s > o; o++) e[o][t]()
        }, t.destroyAll = function() {
            t.invokeAll("destroy")
        }, t.disableAll = function() {
            t.invokeAll("disable")
        }, t.enableAll = function() {
            t.invokeAll("enable")
        }, t.refreshAll = function() {
            t.Context.refreshAll()
        }, t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, t.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, t.adapters = [], t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = t
    }(),
    function(t, e) {
    }(window, document), $(function() {
        $.fn.hoverRotate = function(t, e) {
        }, $.fn.oneAnimationEnd = function(t, e) {
            return e || (e = 0), $(this).on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                $(this).off("webkitAnimationEnd oanimationend msAnimationEnd animationend"), setTimeout(function() {
                    t()
                }, e)
            }), this
        }, $.fn.oneAnimationIteration = function(t, e) {
            return e || (e = 0), $(this).on("webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration", function() {
                $(this).off("webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration"), setTimeout(function() {
                    t()
                }, e)
            }), this
        }, $.fn.oneTransitionEnd = function(t, e) {
            return e || (e = 0), $(this).on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                $(this).off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"), setTimeout(function() {
                    t()
                }, e)
            }), this
        }, $.fn.scrollDisable = function() {
            return $(this).bind("wheel", function(t) {
                t.preventDefault()
            }), this
        }, $.fn.scrollEnable = function() {
            $(this).unbind("wheel")
        }
    }), PointerEventsPolyfill.initialize = function(t) {
        return null == PointerEventsPolyfill.singleton && (PointerEventsPolyfill.singleton = new PointerEventsPolyfill(t)), PointerEventsPolyfill.singleton
    }, PointerEventsPolyfill.prototype.register_mouse_events = function() {
    };