/** 
 * onetrust-banner-sdk
 * v202302.1.0
 * by OneTrust LLC
 * Copyright 2023 
 */
! function() {
    "use strict";
    var n = function(e, t) {
        return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    };

    function e(e, t) {
        function o() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }
    var k, t, o, r, l = function() {
        return (l = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function u(i, s, a, l) {
        return new(a = a || Promise)(function(e, t) {
            function o(e) {
                try {
                    r(l.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function n(e) {
                try {
                    r(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(t) {
                t.done ? e(t.value) : new a(function(e) {
                    e(t.value)
                }).then(o, n)
            }
            r((l = l.apply(i, s || [])).next())
        })
    }

    function g(o, n) {
        var r, i, s, e, a = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }), e;

        function t(t) {
            return function(e) {
                return function(t) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, i && (s = 2 & t[0] ? i.return : t[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, t[1])).done) return s;
                        switch (i = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return a.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = t[1], t = [0];
                                continue;
                            case 7:
                                t = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                    a.label = t[1];
                                    break
                                }
                                if (6 === t[0] && a.label < s[1]) {
                                    a.label = s[1], s = t;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2], a.ops.push(t);
                                    break
                                }
                                s[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        t = n.call(o, a)
                    } catch (e) {
                        t = [6, e], i = 0
                    } finally {
                        r = s = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }

    function b() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        var n = Array(e),
            r = 0;
        for (t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++, r++) n[r] = i[s];
        return n
    }(t = k = k || {})[t.ACTIVE = 0] = "ACTIVE", t[t.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", t[t.EXPIRED = 2] = "EXPIRED", t[t.NO_CONSENT = 3] = "NO_CONSENT", t[t.OPT_OUT = 4] = "OPT_OUT", t[t.PENDING = 5] = "PENDING", t[t.WITHDRAWN = 6] = "WITHDRAWN", (r = o = o || {}).ping = "ping", r.addEventListener = "addEventListener", r.removeEventListener = "removeEventListener", r.hasSection = "hasSection", r.getSection = "getSection", r.getField = "getField", r.getGPPData = "getGPPData";
    var i = setTimeout;

    function c(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function s() {}

    function a(e) {
        if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this)
    }

    function d(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 !== o._state ? (o._handled = !0, a._immediateFn(function() {
            var e = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (e) {
                    return void h(n.promise, e)
                }
                p(n.promise, t)
            } else(1 === o._state ? p : h)(n.promise, o._value)
        })) : o._deferreds.push(n)
    }

    function p(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof a) return t._state = 3, t._value = e, void C(t);
                if ("function" == typeof o) return void f((n = o, r = e, function() {
                    n.apply(r, arguments)
                }), t)
            }
            t._state = 1, t._value = e, C(t)
        } catch (e) {
            h(t, e)
        }
        var n, r
    }

    function h(e, t) {
        e._state = 2, e._value = t, C(e)
    }

    function C(e) {
        2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
            e._handled || a._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) d(e, e._deferreds[t]);
        e._deferreds = null
    }

    function y(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function f(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0, p(t, e))
            }, function(e) {
                o || (o = !0, h(t, e))
            })
        } catch (e) {
            if (o) return;
            o = !0, h(t, e)
        }
    }

    function v() {}
    a.prototype.catch = function(e) {
        return this.then(null, e)
    }, a.prototype.then = function(e, t) {
        var o = new this.constructor(s);
        return d(this, new y(e, t, o)), o
    }, a.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }, a.all = function(t) {
        return new a(function(n, r) {
            if (!c(t)) return r(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(t);
            if (0 === i.length) return n([]);
            var s = i.length;

            function a(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o) return void o.call(e, function(e) {
                            a(t, e)
                        }, r)
                    }
                    i[t] = e, 0 == --s && n(i)
                } catch (e) {
                    r(e)
                }
            }
            for (var e = 0; e < i.length; e++) a(e, i[e])
        })
    }, a.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === a ? t : new a(function(e) {
            e(t)
        })
    }, a.reject = function(o) {
        return new a(function(e, t) {
            t(o)
        })
    }, a.race = function(r) {
        return new a(function(e, t) {
            if (!c(r)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++) a.resolve(r[o]).then(e, t)
        })
    }, a._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        i(e, 0)
    }, a._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var m, S, P, T, A, I, L, _, E, V, B, w, O, x, G, N, D, H, J, F, R, q, M, U, j, z, K, W, Y, X, Q, $, Z, ee, te, oe, ne, re, ie, se, ae, le, ce, de, pe, ue, he, ge, Ce, ye, fe, ve, ke, me, be, Se, Pe, Te, Ae, Ie, Le, _e, Ee, Ve, Be, we, Oe, xe, Ge, Ne, De, He, Fe, Re, qe, Me, Ue, je, ze, Ke, We, Je, Ye, Xe = new(v.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
    }, v.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this),
                    r = parseInt(n.length, 10) || 0;
                if (0 === r) return !1;
                var i, s, a = t[1] || 0;
                for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r;) {
                    if (e === (s = n[i]) || e != e && s != s) return !0;
                    i++
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }, v.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }, v.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }, v.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }, v.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }, v.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), i = arguments[2], s = void 0 === i ? o : i >> 0, a = s < 0 ? Math.max(o + s, 0) : Math.min(s, o); r < a;) t[r] = e, r++;
                return t
            }
        })
    }, v.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, v.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]'),
            t = document.createElement("meta");
        t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
    }, v.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = a)
    }, v);
    (S = m = m || {})[S.Unknown = 0] = "Unknown", S[S.BannerCloseButton = 1] = "BannerCloseButton", S[S.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", S[S.AcceptAll = 3] = "AcceptAll", S[S.RejectAll = 4] = "RejectAll", S[S.BannerSaveSettings = 5] = "BannerSaveSettings", S[S.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (T = P = P || {})[T.Banner = 1] = "Banner", T[T.PC = 2] = "PC", T[T.API = 3] = "API", (I = A = A || {}).AcceptAll = "AcceptAll", I.RejectAll = "RejectAll", I.UpdateConsent = "UpdateConsent", (_ = L = L || {})[_.Purpose = 1] = "Purpose", _[_.SpecialFeature = 2] = "SpecialFeature", (V = E = E || {}).Legal = "legal", V.UserFriendly = "user_friendly", (w = B = B || {}).Top = "top", w.Bottom = "bottom", (x = O = O || {})[x.Banner = 0] = "Banner", x[x.PrefCenterHome = 1] = "PrefCenterHome", x[x.VendorList = 2] = "VendorList", x[x.CookieList = 3] = "CookieList", (N = G = G || {})[N.RightArrow = 39] = "RightArrow", N[N.LeftArrow = 37] = "LeftArrow", (H = D = D || {}).AfterTitle = "AfterTitle", H.AfterDescription = "AfterDescription", H.AfterDPD = "AfterDPD", (F = J = J || {}).PlusMinus = "Plusminus", F.Caret = "Caret", F.NoAccordion = "NoAccordion", (q = R = R || {}).Consent = "Consent", q.LI = "LI", q.AddtlConsent = "AddtlConsent", (U = M = M || {}).Iab1Pub = "eupubconsent", U.Iab2Pub = "eupubconsent-v2", U.Iab1Eu = "euconsent", U.Iab2Eu = "euconsent-v2", (z = j = j || {})[z.Disabled = 0] = "Disabled", z[z.Consent = 1] = "Consent", z[z.LegInt = 2] = "LegInt", (W = K = K || {})[W["Banner - Allow All"] = 1] = "Banner - Allow All", W[W["Banner - Reject All"] = 2] = "Banner - Reject All", W[W["Banner - Close"] = 3] = "Banner - Close", W[W["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", W[W["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", W[W["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (X = Y = Y || {}).Active = "1", X.InActive = "0", ($ = Q = Q || {}).Host = "Host", $.GenVendor = "GenVen", (ee = Z = Z || {})[ee.Host = 1] = "Host", ee[ee.GenVen = 2] = "GenVen", ee[ee.HostAndGenVen = 3] = "HostAndGenVen", (oe = te = te || {})[oe.minDays = 1] = "minDays", oe[oe.maxDays = 30] = "maxDays", oe[oe.maxYear = 31536e3] = "maxYear", oe[oe.maxSecToDays = 86400] = "maxSecToDays", (re = ne = ne || {})[re.RTL = 0] = "RTL", re[re.LTR = 1] = "LTR", (se = ie = ie || {})[se.GoogleVendor = 1] = "GoogleVendor", se[se.GeneralVendor = 2] = "GeneralVendor", (le = ae = ae || {})[le.Days = 1] = "Days", le[le.Weeks = 7] = "Weeks", le[le.Months = 30] = "Months", le[le.Years = 365] = "Years", (de = ce = ce || {}).Checkbox = "Checkbox", de.Toggle = "Toggle", (ue = pe = pe || {}).SlideIn = "Slide_In", ue.FadeIn = "Fade_In", ue.RemoveAnimation = "Remove_Animation", (ge = he = he || {}).Link = "Link", ge.Icon = "Icon", (ye = Ce = Ce || {}).consent = "consent", ye.set = "set", (ve = fe = fe || {}).update = "update", ve.default = "default", ve.ads_data_redaction = "ads_data_redaction", (me = ke = ke || {}).analytics_storage = "analytics_storage", me.ad_storage = "ad_storage", me.functionality_storage = "functionality_storage", me.personalization_storage = "personalization_storage", me.security_storage = "security_storage", me.region = "region", me.wait_for_update = "wait_for_update", (Se = be = be || {}).granted = "granted", Se.denied = "denied", (Te = Pe = Pe || {})[Te.HostList = 0] = "HostList", Te[Te.IabVendors = 1] = "IabVendors", Te[Te.VendorServices = 2] = "VendorServices", (Ie = Ae = Ae || {}).OBJECT_TO_LI = "ObjectToLI", Ie.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (_e = Le = Le || {}).cookies = "cookies", _e.vendors = "vendors", (Ve = Ee = Ee || {}).GDPR = "GDPR", Ve.IAB = "IAB", Ve.CCPA = "CCPA", Ve.IAB2 = "IAB2", Ve.GENERIC = "GENERIC", Ve.LGPD = "LGPD", Ve.GENERIC_PROMPT = "GENERIC_PROMPT", Ve.CPRA = "CPRA", Ve.CDPA = "CDPA", Ve.USNATIONAL = "USNATIONAL", Ve.CUSTOM = "CUSTOM", (we = Be = Be || {}).Name = "OTGPPConsent", we[we.ChunkSize = 4e3] = "ChunkSize", we.ChunkCountParam = "GPPCookiesCount", (xe = Oe = Oe || {}).MspaCoveredTransaction = "IsMSPAEnabled", xe.MspaOptOutOptionMode = "Opt-Out", xe.MspaServiceProviderMode = "Service Provider", (Ne = Ge = Ge || {}).MspaCoveredTransaction = "MspaCoveredTransaction", Ne.MspaOptOutOptionMode = "MspaOptOutOptionMode", Ne.MspaServiceProviderMode = "MspaServiceProviderMode", (He = De = De || {}).SensitiveDataProcessing = "SensitiveDataProcessing", He.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents", (Re = Fe = Fe || {}).CPRA = "uspcav1", Re.CCPA = "uspcav1", Re.USNATIONAL = "uspnatv1", (Me = qe = qe || {})[Me.CPRA = 8] = "CPRA", Me[Me.CCPA = 8] = "CCPA", Me[Me.USNATIONAL = 7] = "USNATIONAL", (je = Ue = Ue || {})[je.NotApplicable = 0] = "NotApplicable", je[je.OptOut = 1] = "OptOut", je[je.OptIn = 2] = "OptIn", (Ke = ze = ze || {})[Ke.NotApplicable = 0] = "NotApplicable", Ke[Ke.Yes = 1] = "Yes", Ke[Ke.No = 2] = "No", (Je = We = We || {})[Je.CmpId = 28] = "CmpId", Je[Je.CmpVersion = 1] = "CmpVersion";
    var Qe = "AwaitingReconsent",
        $e = "consentId",
        Ze = "geolocation",
        et = "interactionCount",
        tt = "isIABGlobal",
        ot = "NotLandingPage",
        nt = "isGpcEnabled",
        rt = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview",
            GPP_CONSENT: Be.Name
        },
        it = "CONFIRMED",
        st = "OPT_OUT",
        at = "NO_CHOICE",
        lt = "NOTGIVEN",
        ct = "NO_OPT_OUT",
        dt = "always active",
        pt = "active",
        ut = "inactive landingpage",
        ht = "inactive",
        gt = "dnt",
        Ct = "LOCAL",
        yt = "TEST",
        ft = "LOCAL_TEST",
        vt = "data-language",
        kt = "otCookieSettingsButton.json",
        mt = "otCookieSettingsButtonRtl.json",
        bt = "otCenterRounded",
        St = "otFlat",
        Pt = "otFloatingRoundedCorner",
        Tt = "otFloatingFlat",
        At = "otFloatingRoundedIcon",
        It = "otFloatingRounded",
        Lt = "otChoicesBanner",
        _t = "otNoBanner",
        Et = "otPcCenter",
        Vt = "otPcList",
        Bt = "otPcPanel",
        wt = "otPcPopup",
        Ot = "otPcTab",
        xt = "hidebanner",
        Gt = ((Ye = {})[ae.Days] = "PCenterVendorListLifespanDay", Ye[ae.Weeks] = "LfSpnWk", Ye[ae.Months] = "PCenterVendorListLifespanMonth", Ye[ae.Years] = "LfSpnYr", Ye),
        Nt = "DNAC",
        Dt = "Category",
        Ht = "Host",
        Ft = "General Vendor",
        Rt = "VendorService",
        qt = "aria-label",
        Mt = "aria-hidden",
        Ut = "BRANCH",
        jt = "COOKIE",
        zt = "IAB2_FEATURE",
        Kt = "IAB2_PURPOSE",
        Wt = "IAB2_SPL_FEATURE",
        Jt = "IAB2_SPL_PURPOSE",
        Yt = "IAB2_STACK",
        Xt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"],
        Qt = ["COOKIE", "BRANCH", "IAB2_STACK"],
        $t = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"],
        Zt = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"],
        eo = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
        to = new function() {};

    function oo(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            if (!e) return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"), t.trim()
        }
        var i = n(e.getAttribute("style")),
            s = n(t),
            r = "";
        r = o && i ? function() {
            for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                    return 0 !== e.length
                }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var r = e[n].substring(0, e[n].indexOf(":") + 1).trim();
                t.indexOf(r) < 0 && (t += r, o += e[n] + ";")
            }
            return o
        }() : s, e.setAttribute("style", r)
    }

    function no() {}
    var ro, io = new(no.prototype.convertKeyValueLowerCase = function(e) {
            for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
            return e
        }, no.prototype.arrToStr = function(e) {
            return e.toString()
        }, no.prototype.strToArr = function(e) {
            return e ? e.split(",") : []
        }, no.prototype.strToMap = function(e) {
            if (!e) return new Map;
            for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
                var r = n[o].split(":");
                t.set(r[0], "1" === r[1])
            }
            return t
        }, no.prototype.empty = function(e) {
            var t = document.getElementById(e);
            if (t)
                for (; t.hasChildNodes();) t.removeChild(t.lastChild)
        }, no.prototype.show = function(e) {
            var t = document.getElementById(e);
            t && oo(t, "display: block;", !0)
        }, no.prototype.remove = function(e) {
            var t = document.getElementById(e);
            t && t.parentNode && t.parentNode.removeChild(t)
        }, no.prototype.appendTo = function(e, t) {
            var o, n = document.getElementById(e);
            n && ((o = document.createElement("div")).innerHTML = t, n.appendChild(o))
        }, no.prototype.contains = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
            return !1
        }, no.prototype.indexOf = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o] === t) return o;
            return -1
        }, no.prototype.endsWith = function(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }, no.prototype.generateUUID = function() {
            var o = (new Date).getTime();
            return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = (o + 16 * Math.random()) % 16 | 0;
                return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }, no.prototype.getActiveIdArray = function(e) {
            return e.filter(function(e) {
                return "true" === e.split(":")[1]
            }).map(function(e) {
                return parseInt(e.split(":")[0])
            })
        }, no.prototype.distinctArray = function(e) {
            var t = new Array;
            return e.forEach(function(e) {
                t.indexOf(e) < 0 && t.push(e)
            }), t
        }, no.prototype.findIndex = function(e, t) {
            for (var o = -1, n = 0; n < e.length; n++)
                if (void 0 !== e[n] && t(e[n], n)) {
                    o = n;
                    break
                }
            return o
        }, no.prototype.getURL = function(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }, no.prototype.removeURLPrefixes = function(e) {
            return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
        }, no.prototype.removeChild = function(e) {
            if (e)
                if (e instanceof NodeList || e instanceof Array)
                    for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]);
                else e.parentElement.removeChild(e)
        }, no.prototype.getRelativeURL = function(e, t, o) {
            if (void 0 === o && (o = !1), t) {
                var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
                return o ? n : n + ".js"
            }
            return e
        }, no.prototype.setCheckedAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (t.setAttribute("aria-checked", o.toString()), o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
        }, no.prototype.setDisabledAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
        }, no.prototype.setHtmlAttributes = function(e, t) {
            for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
        }, no.prototype.calculateCookieLifespan = function(e) {
            if (e < 0) return uo.LifespanTypeText;
            var t = Math.floor(e / te.maxSecToDays);
            if (t < te.minDays) return "< 1 " + uo.PCenterVendorListLifespanDay;
            if (t < te.maxDays) return t + " " + uo.PCenterVendorListLifespanDays;
            var o = Math.floor(t / te.maxDays);
            return 1 === o ? o + " " + uo.PCenterVendorListLifespanMonth : o + " " + uo.PCenterVendorListLifespanMonths
        }, no.prototype.insertElement = function(e, t, o) {
            e && t && e.insertAdjacentElement(o, t)
        }, no.prototype.customQuerySelector = function(t) {
            return function(e) {
                return t.querySelector(e)
            }
        }, no.prototype.customQuerySelectorAll = function(t) {
            return function(e) {
                return t.querySelectorAll(e)
            }
        }, no),
        so = (ao.prototype.removeAlertBox = function() {
            null !== this.getCookie(rt.ALERT_BOX_CLOSED) && this.setCookie(rt.ALERT_BOX_CLOSED, "", 0, !0)
        }, ao.prototype.removeIab1 = function() {
            null !== this.getCookie(M.Iab1Pub) && this.setCookie(M.Iab1Pub, "", 0, !0)
        }, ao.prototype.removeIab2 = function() {
            null !== this.getCookie(M.Iab2Pub) && this.setCookie(M.Iab2Pub, "", 0, !0)
        }, ao.prototype.removeAddtlStr = function() {
            null !== this.getCookie(rt.ADDITIONAL_CONSENT_STRING) && this.setCookie(rt.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }, ao.prototype.removeVariant = function() {
            null !== this.getCookie(rt.SELECTED_VARIANT) && this.setCookie(rt.SELECTED_VARIANT, "", 0, !0)
        }, ao.prototype.removeOptanon = function() {
            null !== this.getCookie(rt.OPTANON_CONSENT) && this.setCookie(rt.OPTANON_CONSENT, "", 0, !0)
        }, ao.prototype.removePreview = function() {
            null !== this.getCookie(rt.OT_PREVIEW) && this.setCookie(rt.OT_PREVIEW, "", 0, !0)
        }, ao.prototype.writeCookieParam = function(e, t, o, n) {
            var r, i, s, a, l = {},
                c = this.getCookie(e);
            if (c)
                for (i = c.split("&"), r = 0; r < i.length; r += 1) s = i[r].split("="), l[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            l[t] = o;
            var d = to.moduleInitializer.TenantFeatures;
            d && d.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(), l.version = go.otSDKVersion, a = this.param(l), this.setCookie(e, a, uo.ReconsentFrequencyDays)
        }, ao.prototype.readCookieParam = function(e, t, o) {
            var n, r, i, s, a = this.getCookie(e);
            if (a) {
                for (r = {}, i = a.split("&"), n = 0; n < i.length; n += 1) s = i[n].split("="), r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                return t && r[t] ? r[t] : t && !r[t] ? "" : r
            }
            return ""
        }, ao.prototype.getCookie = function(e) {
            if (to && to.moduleInitializer && to.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t) return t.value
            }
            if (go.isAMP && (go.ampData = JSON.parse(localStorage.getItem(go.dataDomainId)) || {}, go.ampData)) return go.ampData[e] || null;
            var o, n, r = e + "=",
                i = document.cookie.split(";");
            for (o = 0; o < i.length; o += 1) {
                for (n = i[o];
                    " " === n.charAt(0);) n = n.substring(1, n.length);
                if (0 === n.indexOf(r)) return n.substring(r.length, n.length)
            }
            return null
        }, ao.prototype.setAmpStorage = function() {
            window.localStorage.setItem(go.dataDomainId, JSON.stringify(go.ampData))
        }, ao.prototype.removeAmpStorage = function() {
            window.localStorage.removeItem(go.dataDomainId)
        }, ao.prototype.handleAmp = function(e, t) {
            "" !== t ? go.ampData[e] = t : delete go.ampData[e], 0 === Object.keys(go.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }, ao.prototype.setCookie = function(e, t, o, n, r) {
            if (void 0 === n && (n = !1), void 0 === r && (r = new Date), go.isAMP) this.handleAmp(e, t);
            else {
                var i = void 0;
                i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
                var s = to.moduleInitializer,
                    a = s && s.Domain ? s.Domain.split("/") : [],
                    l = "";
                a.length <= 1 ? a[1] = "" : l = a.slice(1).join("/");
                var c = "Samesite=Lax";
                s.CookieSameSiteNoneEnabled && (c = "Samesite=None; Secure");
                var d = s.ScriptType === yt || s.ScriptType === ft;
                if (go.isPreview || !d && !s.MobileSDK) p = t + i + "; path=/" + l + "; domain=." + a[0] + "; " + c, document.cookie = e + "=" + p;
                else {
                    var p = t + i + "; path=/; " + c;
                    s.MobileSDK ? this.setCookieDataObj({
                        name: e,
                        value: t,
                        expires: i,
                        date: r,
                        domainAndPath: a
                    }) : document.cookie = e + "=" + p
                }
            }
        }, ao.prototype.setCookieDataObj = function(t) {
            if (t) {
                go.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? go.otCookieData = window.OneTrust.otCookieData : go.otCookieData = []);
                var e = io.findIndex(go.otCookieData, function(e) {
                    return e.name === t.name
                }); - 1 < e ? go.otCookieData[e] = t : go.otCookieData.push(t)
            }
        }, ao.prototype.getCookieDataObj = function(t) {
            go.otCookieData && 0 !== go.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? go.otCookieData = window.OneTrust.otCookieData : go.otCookieData = []);
            var e = io.findIndex(go.otCookieData, function(e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = go.otCookieData[e];
                if (o.date) return new Date(o.date) < new Date ? (go.otCookieData.splice(e, 1), null) : o
            }
            return null
        }, ao.prototype.param = function(e) {
            var t, o = "";
            for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }, ao);

    function ao() {}
    var lo = (co.prototype.setRegionRule = function(e) {
        this.rule = e
    }, co.prototype.getRegionRule = function() {
        return this.rule
    }, co.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }, co.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.UseGoogleVendors : this.rule.UseGoogleVendors)
    }, co.prototype.initVariables = function() {
        this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }, co.prototype.init = function(e) {
        this.getGPCSignal(), this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), uo.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), uo.GoogleConsent.GCEnable && this.initGCM()
    }, co.prototype.getGPCSignal = function() {
        this.gpcEnabled = !0 === navigator.globalPrivacyControl
    }, co.prototype.isValidConsentNoticeGroup = function(e, t) {
        if (!e.ShowInPopup) return !1;
        var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length,
            n = !1,
            r = !1,
            i = !1;
        if (e && !e.Parent) {
            e.SubGroups.length && (n = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
            }), r = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
            }), !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function(e) {
                return -1 === Xt.indexOf(e.Type)
            })));
            var s = e.SubGroups.some(function(e) {
                return -1 < Xt.indexOf(e.Type)
            });
            (-1 < Xt.indexOf(e.Type) || s) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0)
        }
        return o || -1 < Xt.indexOf(e.Type) || n || r || i
    }, co.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")), e
    }, co.prototype.populateGroups = function(e, r) {
        var i = this,
            s = {},
            a = [];
        e.forEach(function(e) {
            var t = e.CustomGroupId;
            if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !(!r.IsIabEnabled && -1 < Xt.indexOf(e.Type) || "IAB2" === i.iabType && (e.Type === Kt || e.Type === Yt) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === Wt && !e.HasConsentOptOut) && (t !== po.purposeOneGrpId || e.ShowInPopup || (i.purposeOneTreatment = !0), i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? a.push(e) : s[t] = e, "IAB2" === i.iabType && -1 < Xt.indexOf(e.Type))) {
                var o = i.extractGroupIdForIabGroup(t);
                i.iabGrpIdMap[t] = o, e.IabGrpId = o;
                var n = {
                    description: e.GroupDescription,
                    descriptionLegal: e.DescriptionLegal,
                    id: Number(o),
                    name: e.GroupName
                };
                switch (e.Type) {
                    case Kt:
                        i.iabGroups.purposes[o] = n;
                        break;
                    case Jt:
                        i.iabGroups.specialPurposes[o] = n;
                        break;
                    case zt:
                        i.iabGroups.features[o] = n;
                        break;
                    case Wt:
                        i.iabGroups.specialFeatures[o] = n
                }
            }
        }), a.forEach(function(e) {
            s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < Xt.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
        });
        var t = [];
        return Object.keys(s).forEach(function(e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }), t.push(s[e]))
        }), this.initGrpVar(t), t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }, co.prototype.initGrpVar = function(e) {
        var o = this,
            n = !0,
            r = !0;
        e.forEach(function(e) {
            b([e], e.SubGroups).forEach(function(e) {
                var t;
                e.Type !== jt && e.Type !== Kt && e.Type !== Wt || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < Qt.indexOf(e.Type) && o.consentableGrps.push(e), -1 < $t.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === Qt.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = ht), (t = o.DNTEnabled && e.IsDntEnabled ? gt : e.Status.toLowerCase()) !== pt && t !== ut && t !== gt || (n = !1), t !== ut && t !== dt && (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }), this.isOptInMode = n, this.isSoftOptInMode = r
    }, co.prototype.domainDataMapper = function(e) {
        var t, o, n = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BShowOptOutSignal: e.BShowOptOutSignal,
            BOptOutSignalText: e.BOptOutSignalText,
            BRegionAriaLabel: e.BRegionAriaLabel,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: null != (t = e.OverriddenVendors) ? t : {},
            OverridenGoogleVendors: null != (o = e.OverridenGoogleVendors) ? o : {},
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle || ce.Checkbox,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl,
            PCShowOptOutSignal: e.PCShowOptOutSignal,
            PCOptOutSignalText: e.PCOptOutSignalText,
            PCRegionAriaLabel: e.PCRegionAriaLabel,
            PCHostNotFound: e.PCHostNotFound,
            PCVendorNotFound: e.PCVendorNotFound,
            PCTechNotFound: e.PCTechNotFound
        };
        this.setPCDomainData(n, e), this.setAdditionalTechnologies(n, e), this.setVendorServiceConfigData(n, e), this.setDomainCommonDataDefaults(n, e), this.setDomainPCDataDefaults(n, e), this.setGppData(n, e), e.PCTemplateUpgrade && (e.Center || e.Panel) && (n.PCAccordionStyle = e.PCAccordionStyle), n.PCenterEnableAccordion = e.PCAccordionStyle !== J.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), to.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), uo = l(l({}, uo), n)
    }, co.prototype.setGppData = function(e, t) {
        e.GPPPurposes = l({}, t.GPPPurposes), e.IsGPPDataProcessingApplicable = t.IsGPPDataProcessingApplicable, e.IsGPPEnabled = t.IsGPPEnabled, e.IsGPPKnownChildApplicable = t.IsGPPKnownChildApplicable, e.IsMSPAEnabled = t.IsMSPAEnabled, e.MSPAOptionMode = t.MSPAOptionMode
    }, co.prototype.setPCDomainData = function(e, t) {
        e.PCAccordionStyle = J.Caret, e.PCActiveText = t.PCActiveText, e.PCCloseButtonType = t.PCCloseButtonType, e.PCContinueText = t.PCContinueText, e.PCCookiePolicyLinkScreenReader = t.PCCookiePolicyLinkScreenReader, e.PCCookiePolicyText = t.PCCookiePolicyText, e.PCenterAllowAllConsentText = t.PCenterAllowAllConsentText, e.PCenterApplyFiltersText = t.PCenterApplyFiltersText, e.PCenterBackText = t.PCenterBackText, e.PCenterCancelFiltersText = t.PCenterCancelFiltersText, e.PCenterClearFiltersText = t.PCenterClearFiltersText, e.PCenterCookiesListText = t.PCenterCookiesListText, e.PCenterEnableAccordion = t.PCenterEnableAccordion, e.PCenterFilterText = t.PCenterFilterText, e.PCenterGeneralVendorsText = t.PCenterGeneralVendorsText, e.PCenterRejectAllButtonText = t.PCenterRejectAllButtonText, e.PCenterSelectAllVendorsText = t.PCenterSelectAllVendorsText, e.PCenterShowRejectAllButton = t.PCenterShowRejectAllButton, e.PCenterUserIdDescriptionText = t.PCenterUserIdDescriptionText, e.PCenterUserIdNotYetConsentedText = t.PCenterUserIdNotYetConsentedText, e.PCenterUserIdTimestampTitleText = t.PCenterUserIdTimestampTitleText, e.PCenterUserIdTitleText = t.PCenterUserIdTitleText, e.PCenterVendorListDescText = t.PCenterVendorListDescText, e.PCenterVendorListDisclosure = t.PCenterVendorListDisclosure, e.PCenterVendorListLifespan = t.PCenterVendorListLifespan, e.PCenterVendorListLifespanDay = t.PCenterVendorListLifespanDay, e.PCenterVendorListLifespanDays = t.PCenterVendorListLifespanDays, e.PCenterVendorListLifespanMonth = t.PCenterVendorListLifespanMonth, e.PCenterVendorListLifespanMonths = t.PCenterVendorListLifespanMonths, e.PCenterVendorListNonCookieUsage = t.PCenterVendorListNonCookieUsage, e.PCenterVendorListStorageDomain = t.PCenterVendorListStorageDomain, e.PCVLSDomainsUsed = t.PCVLSDomainsUsed, e.PCVLSUse = t.PCVLSUse, e.PCenterVendorListStorageIdentifier = t.PCenterVendorListStorageIdentifier, e.PCenterVendorListStoragePurposes = t.PCenterVendorListStoragePurposes, e.PCenterVendorListStorageType = t.PCenterVendorListStorageType, e.PCenterVendorsListText = t.PCenterVendorsListText, e.PCenterViewPrivacyPolicyText = t.PCenterViewPrivacyPolicyText, e.PCGoogleVendorsText = t.PCGoogleVendorsText, e.PCGrpDescLinkPosition = t.PCGrpDescLinkPosition, e.PCGrpDescType = t.PCGrpDescType, e.PCGVenPolicyTxt = t.PCGeneralVendorsPolicyText, e.PCIABVendorsText = t.PCIABVendorsText, e.PCInactiveText = t.PCInactiveText, e.PCLogoAria = t.PCLogoScreenReader, e.PCOpensCookiesDetailsAlert = t.PCOpensCookiesDetailsAlert, e.PCenterVendorListScreenReader = t.PCenterVendorListScreenReader, e.PCOpensVendorDetailsAlert = t.PCOpensVendorDetailsAlert, e.PCenterDynamicRenderingEnable = t.PCenterDynamicRenderingEnable, e.PCTemplateUpgrade = t.PCTemplateUpgrade, e.PCVendorFullLegalText = t.PCVendorFullLegalText, e.PCViewCookiesText = t.PCViewCookiesText, e.PCLayout = {
            Center: t.Center,
            List: t.List,
            Panel: t.Panel,
            Popup: t.Popup,
            Tab: t.Tab
        }, e.PCenterVendorListLinkText = t.PCenterVendorListLinkText, e.PCenterVendorListLinkAriaLabel = t.PCenterVendorListLinkAriaLabel, e.PreferenceCenterPosition = t.PreferenceCenterPosition
    }, co.prototype.setVendorServiceConfigData = function(e, t) {
        e.VendorServiceConfig = {
            PCVSOptOut: t.PCVSOptOut,
            PCVSEnable: t.PCVSEnable,
            PCVSExpandCategory: t.PCVSExpandCategory,
            PCVSExpandGroup: t.PCVSExpandGroup,
            PCVSCategoryView: t.PCVSCategoryView,
            PCVSNameText: t.PCVSNameText,
            PCVSAllowAllText: t.PCVSAllowAllText,
            PCVSListTitle: t.PCVSListTitle,
            PCVSParentCompanyText: t.PCVSParentCompanyText,
            PCVSAddressText: t.PCVSAddressText,
            PCVSDefaultCategoryText: t.PCVSDefaultCategoryText,
            PCVSDefaultDescriptionText: t.PCVSDefaultDescriptionText,
            PCVSDPOEmailText: t.PCVSDPOEmailText,
            PCVSDPOLinkText: t.PCVSDPOLinkText,
            PCVSPrivacyPolicyLinkText: t.PCVSPrivacyPolicyLinkText,
            PCVSCookiePolicyLinkText: t.PCVSCookiePolicyLinkText,
            PCVSOptOutLinkText: t.PCVSOptOutLinkText,
            PCVSLegalBasisText: t.PCVSLegalBasisText
        }
    }, co.prototype.setAdditionalTechnologies = function(e, t) {
        e.AdditionalTechnologiesConfig = {
            PCShowTrackingTech: t.PCShowTrackingTech,
            PCCookiesLabel: t.PCCookiesLabel,
            PCTechDetailsText: t.PCTechDetailsText,
            PCTrackingTechTitle: t.PCTrackingTechTitle,
            PCLocalStorageLabel: t.PCLocalStorageLabel,
            PCSessionStorageLabel: t.PCSessionStorageLabel,
            PCTechDetailsAriaLabel: t.PCTechDetailsAriaLabel,
            PCLocalStorageDurationText: t.PCLocalStorageDurationText,
            PCSessionStorageDurationText: t.PCSessionStorageDurationText
        }
    }, co.prototype.setDomainCommonDataDefaults = function(e, t) {
        e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "", e.BannerDPDDescription = t.BannerDPDDescription || [], e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "", e.BannerDPDTitle = t.BannerDPDTitle || "", e.CategoriesText = t.CategoriesText || "Categories", e.CookiesText = t.CookiesText || "Cookies", e.CookiesDescText = t.CookiesDescText || "Description", e.LifespanText = t.LifespanText || "Lifespan", e.LifespanTypeText = t.LifespanTypeText || "Session", e.PCenterConsentText = t.PCenterConsentText || "Consent"
    }, co.prototype.setDomainPCDataDefaults = function(e, t) {
        e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter", e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search", e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search", e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied", e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared", e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest", e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest", e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter", e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search", e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search", e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies", e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels, e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
    }, co.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo,
            OTCloseBtnLogo: e.OTCloseBtnLogo,
            OTExternalLinkLogo: e.OTExternalLinkLogo
        };
        this.cookieListMapper(t, e), uo = l(l({}, uo), t), this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }, co.prototype.cookieListMapper = function(e, t) {
        e.TTLGroupByTech = t.TTLGroupByTech, e.TTLShowTechDesc = t.TTLShowTechDesc
    }, co.prototype.setPublicDomainData = function(r) {
        this.pubDomainData = {
            AboutCookiesText: r.AboutCookiesText,
            AboutLink: r.AboutLink,
            AboutText: r.AboutText,
            ActiveText: r.ActiveText,
            AddLinksToCookiepedia: r.AddLinksToCookiepedia,
            AlertAllowCookiesText: r.AlertAllowCookiesText,
            AlertCloseText: r.AlertCloseText,
            AlertLayout: r.AlertLayout,
            AlertMoreInfoText: r.AlertMoreInfoText,
            AlertNoticeText: r.AlertNoticeText,
            AllowAllText: r.PreferenceCenterConfirmText,
            AlwaysActiveText: r.AlwaysActiveText,
            BAnimation: r.BAnimation,
            BannerCloseButtonText: r.BannerCloseButtonText,
            BannerDPDDescription: r.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: r.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: r.BannerDPDTitle || "",
            BannerFeatureDescription: r.BannerFeatureDescription,
            BannerFeatureTitle: r.BannerFeatureTitle,
            BannerIABPartnersLink: r.BannerIABPartnersLink,
            BannerInformationDescription: r.BannerInformationDescription,
            BannerInformationTitle: r.BannerInformationTitle,
            BannerPosition: r.BannerPosition,
            BannerPurposeDescription: r.BannerPurposeDescription,
            BannerPurposeTitle: r.BannerPurposeTitle,
            BannerRejectAllButtonText: r.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: r.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: r.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: r.BannerShowRejectAllButton,
            BannerTitle: r.BannerTitle,
            BCategoryContainerColor: r.BCategoryContainerColor,
            BCategoryStyle: r.BCategoryStyle,
            BCategoryStyleColor: r.BCategoryStyleColor,
            BCloseButtonType: r.BCloseButtonType,
            BContinueText: r.BContinueText,
            BInitialFocus: r.BInitialFocus,
            BInitialFocusLinkAndButton: r.BInitialFocusLinkAndButton,
            BLineBreakColor: r.BLineBreakColor,
            BRejectConsentType: r.BRejectConsentType,
            BSaveBtnColor: r.BSaveBtnColor,
            BSaveBtnTxt: r.BSaveBtnText,
            BShowSaveBtn: r.BShowSaveBtn,
            CategoriesText: r.CategoriesText,
            cctId: r.cctId,
            ChoicesBanner: r.ChoicesBanner,
            CloseShouldAcceptAllCookies: r.CloseShouldAcceptAllCookies,
            CloseText: r.CloseText,
            ConfirmText: r.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: r.ConsentModel
            },
            CookieListDescription: r.CookieListDescription,
            CookieListTitle: r.CookieListTitle,
            CookieSettingButtonText: r.CookieSettingButtonText,
            CookiesText: r.CookiesText,
            CookiesDescText: r.CookiesDescText,
            CookiesUsedText: r.CookiesUsedText,
            CustomJs: r.CustomJs,
            Domain: to.moduleInitializer.Domain,
            FooterDescriptionText: r.FooterDescriptionText,
            ForceConsent: r.ForceConsent,
            GeneralVendors: r.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: r.GCAdStorage,
                GCAnalyticsStorage: r.GCAnalyticsStorage,
                GCEnable: r.GCEnable,
                GCFunctionalityStorage: r.GCFunctionalityStorage,
                GCPersonalizationStorage: r.GCPersonalizationStorage,
                GCRedactEnable: r.GCRedactEnable,
                GCSecurityStorage: r.GCSecurityStorage,
                GCWaitTime: r.GCWaitTime
            },
            Groups: null,
            HideToolbarCookieList: r.HideToolbarCookieList,
            IabType: r.IabType,
            InactiveText: r.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: r.IsConsentLoggingEnabled,
            IsIABEnabled: r.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: r.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: r.IsLifespanEnabled,
            Language: r.Language,
            LastReconsentDate: r.LastReconsentDate,
            LifespanDurationText: r.LifespanDurationText,
            LifespanText: r.LifespanText,
            LifespanTypeText: r.LifespanTypeText,
            MainInfoText: r.MainInfoText,
            MainText: r.MainText,
            ManagePreferenceText: r.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: r.NextPageAcceptAllCookies,
            NextPageCloseBanner: r.NextPageCloseBanner,
            NoBanner: r.NoBanner,
            OnClickAcceptAllCookies: r.OnClickAcceptAllCookies,
            OnClickCloseBanner: r.OnClickCloseBanner,
            OverridenGoogleVendors: r.OverridenGoogleVendors,
            PCAccordionStyle: J.Caret,
            PCCloseButtonType: r.PCCloseButtonType,
            PCContinueText: r.PCContinueText,
            PCenterAllowAllConsentText: r.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: r.PCenterApplyFiltersText,
            PCenterBackText: r.PCenterBackText,
            PCenterCancelFiltersText: r.PCenterCancelFiltersText,
            PCenterClearFiltersText: r.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: r.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: r.PCenterCookiesListText,
            PCenterEnableAccordion: r.PCenterEnableAccordion,
            PCenterExpandToViewText: r.PCenterExpandToViewText,
            PCenterFilterAppliedAria: r.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: r.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: r.PCenterFilterText,
            PCenterRejectAllButtonText: r.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: r.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: r.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: r.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: r.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: r.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: r.PCenterUserIdTitleText,
            PCenterVendorListDescText: r.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: r.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: r.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: r.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: r.PCFirstPartyCookieListText,
            PCGoogleVendorsText: r.PCGoogleVendorsText,
            PCGrpDescLinkPosition: r.PCGrpDescLinkPosition,
            PCGrpDescType: r.PCGrpDescType,
            PCIABVendorsText: r.PCIABVendorsText,
            PCLogoAria: r.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: r.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: r.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: r.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: r.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: r.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: r.PCTemplateUpgrade,
            PCVendorFullLegalText: r.PCVendorFullLegalText,
            PCViewCookiesText: r.PCViewCookiesText,
            PCLayout: {
                Center: r.Center,
                List: r.List,
                Panel: r.Panel,
                Popup: r.Popup,
                Tab: r.Tab
            },
            PCenterVendorListLinkText: r.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: r.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: r.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: r.PCenterImprintLinkText,
            PCenterImprintLinkUrl: r.PCenterImprintLinkUrl,
            PreferenceCenterPosition: r.PreferenceCenterPosition,
            ScrollAcceptAllCookies: r.ScrollAcceptAllCookies,
            ScrollCloseBanner: r.ScrollCloseBanner,
            ShowAlertNotice: r.ShowAlertNotice,
            showBannerCloseButton: r.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: r.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: r.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(r.PCTemplateUpgrade),
            VendorConsentModel: r.VendorConsentModel,
            VendorLevelOptOut: r.IsIabEnabled,
            VendorListText: r.VendorListText,
            CookiesV2NewCookiePolicy: !1
        }, r.PCTemplateUpgrade && (r.Center || r.Panel) && r.PCAccordionStyle !== J.NoAccordion && (this.pubDomainData.PCAccordionStyle = r.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = r.PCAccordionStyle !== J.NoAccordion;
        var i = [];
        r.Groups.forEach(function(e) {
            var t, o;
            if (r.IsIabEnabled || !e.IsIabPurpose) {
                e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function(e, t) {
                    return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                }, []);
                (t = e.Cookies).push.apply(t, n), i.push(e)
            }
        }), this.pubDomainData.Groups = i
    }, co.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e, this.setDomainElementAttributes()
    }, co.prototype.setGCMcallback = function() {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function(e) {
            e && "consent.changed" === e.event && (po.gcmUpdateCallback = e.listener)
        })
    }, co.prototype.setDomainElementAttributes = function() {
        this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html") && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
    }, co.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }, co.prototype.setPcName = function() {
        var e = uo.PCLayout;
        e.Center ? this.pcName = Et : e.Panel ? this.pcName = Bt : e.Popup ? this.pcName = wt : e.List ? this.pcName = Vt : e.Tab && (this.pcName = Ot)
    }, co.prototype.setBannerName = function() {
        uo.Flat ? this.bannerName = St : uo.FloatingRoundedCorner ? this.bannerName = Pt : uo.FloatingFlat ? this.bannerName = Tt : uo.FloatingRounded ? this.bannerName = It : uo.FloatingRoundedIcon ? this.bannerName = At : uo.CenterRounded ? this.bannerName = bt : uo.ChoicesBanner ? this.bannerName = Lt : uo.NoBanner && (this.bannerName = _t)
    }, co.prototype.populateGPCSignal = function() {
        var e = ro.readCookieParam(rt.OPTANON_CONSENT, nt),
            t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled, ro.writeCookieParam(rt.OPTANON_CONSENT, nt, t)
    }, co.prototype.initGCM = function() {
        var o = [];
        Object.keys(this.rule.States).forEach(function(t) {
            po.rule.States[t].forEach(function(e) {
                o.push((t + "-" + e).toUpperCase())
            })
        });
        var e = po.rule.Countries.map(function(e) {
            return e.toUpperCase()
        });
        po.gcmCountries = e.concat(o)
    }, co);

    function co() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.gpcValueChanged = !1, this.conditionalLogicEnabled = !1, this.allConditionsFailed = !1, this.canUseConditionalLogic = !1, this.gtmUpdatedinStub = !1, this.gcmDevIdSet = !1, this.purposeOneGrpId = "IABV2_1"
    }
    var po, uo = {};

    function ho() {
        this.otSDKVersion = "202302.1.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.isGacSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.initialGroupsConsent = [], this.hostsConsent = [], this.initialHostConsent = [], this.genVendorsConsent = {}, this.vsConsent = new Map, this.initialGenVendorsConsent = {}, this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.addtlConsentVersion = "1~", this.initialAddtlVendorsList = {}, this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        }, this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
            country: "",
            state: ""
        }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showVendorService = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.vsIsActiveAndOptOut = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.isKeyboardUser = !1, this.customerStyles = new Map, this.showTrackingTech = !1, this.currentTrackingTech = {}
    }
    var go = new(ho.prototype.getVendorsInDomain = function() {
            var e;
            if (!go._vendorsInDomain) {
                var t = new Map,
                    o = null != (e = uo.Groups) ? e : [];
                go.setVendorServicesMap(o, t), go._vendorsInDomain = t
            }
            return go._vendorsInDomain
        }, ho.prototype.setVendorServicesMap = function(e, t) {
            for (var o, n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                i.SubGroups && 0 < i.SubGroups.length && go.setVendorServicesMap(i.SubGroups, t);
                for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                    var l = a[s],
                        c = Object.assign({}, i);
                    delete c.VendorServices, l.groupRef = c, t.set(l.CustomVendorServiceId, l)
                }
            }
        }, ho.prototype.clearVendorsInDomain = function() {
            go._vendorsInDomain = null
        }, ho),
        Co = (yo.insertAfter = function(e, t) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }, yo.insertBefore = function(e, t) {
            t.parentNode.insertBefore(e, t)
        }, yo.inArray = function(e, t) {
            return t.indexOf(e)
        }, yo.ajax = function(e) {
            var t, o, n, r, i, s, a = null,
                l = new XMLHttpRequest;
            t = e.type, o = e.url, e.dataType, n = e.contentType, r = e.data, i = e.success, a = e.error, s = e.sync, l.open(t, o, !s), l.setRequestHeader("Content-Type", n), l.onload = function() {
                if (200 <= this.status && this.status < 400) {
                    var e = JSON.parse(this.responseText);
                    i(e)
                } else a({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
            }, l.onerror = function(e) {
                a(e)
            }, "post" === t.toLowerCase() || "put" === t.toLowerCase() ? l.send(r) : l.send()
        }, yo.prevNextHelper = function(o, e, n) {
            var r = [];

            function i(e, t, o) {
                t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
            }
            return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
                i(o, e, n)
            }) : i(o, e, n), r
        }, yo.browser = function() {
            var e, t, o;
            return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
                version: parseInt(navigator.sayswho.split(" ")[1]),
                type: navigator.sayswho.split(" ")[0],
                userAgent: navigator.userAgent
            }
        }, yo.isNodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object NodeList]" === t || "[object Array]" === t
        }, yo.prototype.fadeOut = function(e) {
            var t = this;
            if (void 0 === e && (e = 60), 1 <= this.el.length)
                for (var o = 0; o < this.el.length; o++) {
                    var n = "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ";
                    oo(this.el[o], n, !0)
                }
            var r = setInterval(function() {
                if (1 <= t.el.length)
                    for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (oo(t.el[e], "display: none;", !0), clearInterval(r), "optanon-popup-bg" === t.el[e].id && t.el[e].removeAttribute("style"))
            }, e);
            return this
        }, yo.prototype.hide = function() {
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) oo(this.el[e], "display: none;", !0), this.el[e].setAttribute(Mt, !0);
            else yo.isNodeList(this.el) || (oo(this.el, "display: none;", !0), this.el.setAttribute(Mt, !0));
            return this
        }, yo.prototype.show = function(e) {
            if (void 0 === e && (e = "block"), 1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) oo(this.el[t], "display: " + e + ";", !0), this.el[t].removeAttribute(Mt);
            else yo.isNodeList(this.el) || (oo(this.el, "display: " + e + ";", !0), this.el.removeAttribute(Mt));
            return this
        }, yo.prototype.remove = function() {
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
            else this.el.parentNode.removeChild(this.el);
            return this
        }, yo.prototype.css = function(e) {
            if (e)
                if (1 <= this.el.length) {
                    if (!e.includes(":")) return this.el[0].style[e];
                    for (var t = 0; t < this.el.length; t++) oo(this.el[t], e)
                } else {
                    if (!e.includes(":")) return this.el.style[e];
                    oo(this.el, e)
                }
            return this
        }, yo.prototype.removeClass = function(e) {
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            return this
        }, yo.prototype.addClass = function(e) {
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
            else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
            return this
        }, yo.prototype.on = function(r, i, s) {
            var e = this;
            if ("string" != typeof i)
                if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                        case "load":
                            window.onload = i;
                            break;
                        case "resize":
                            window.onresize = i;
                            break;
                        case "scroll":
                            window.onscroll = i
                    } else if (this.el && 1 <= this.el.length)
                        for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(r, i);
                    else this.el && this.el instanceof Element && this.el.addEventListener(r, i);
            else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                case "load":
                    window.onload = s;
                    break;
                case "resize":
                    window.onresize = s;
                    break;
                case "scroll":
                    window.onscroll = s
            } else {
                var a = function(o) {
                    var n = o.target;
                    e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                        ko["" + r + i] && delete ko["" + r + i], e.addEventListener(r, s), e === n && s && s.call(e, o)
                    }), e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
                };
                if (this.el && 1 <= this.el.length)
                    for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
                else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted && this.el instanceof Element && (ko["" + r + i] || (ko["" + r + i] = !0, this.el.addEventListener(r, a))))
            }
            return this
        }, yo.prototype.off = function(e, t) {
            if (1 <= this.el.length)
                for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t);
            else this.el.removeEventListener(e, t);
            return this
        }, yo.prototype.one = function(t, o) {
            var n = this;
            if (1 <= this.el.length)
                for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                    e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
                });
            else {
                var r = function(e) {
                    e.stopPropagation(), o(), n.off(t, r)
                };
                this.el.addEventListener(t, r)
            }
            return this
        }, yo.prototype.trigger = function(e) {
            var t = new CustomEvent(e, {
                customEvent: "yes"
            });
            return this.el.dispatchEvent(t), this
        }, yo.prototype.focus = function() {
            return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(), this
        }, yo.prototype.attr = function(e, t) {
            return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el && this.el.getAttribute(e)
        }, yo.prototype.html = function(e) {
            if (null == e) return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
            if (1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
            else this.el.innerHTML = e;
            return this
        }, yo.prototype.append = function(o) {
            if ("string" != typeof o || o.includes("<") || o.includes(">"))
                if (Array.isArray(o)) {
                    var n = this;
                    Array.prototype.forEach.call(o, function(e, t) {
                        document.querySelector(n.selector).appendChild(new yo(e, "ce").el)
                    })
                } else if ("string" == typeof o || Array.isArray(o))
                if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(new yo(o, "ce").el);
                else if (this.useEl) {
                var r = document.createDocumentFragment(),
                    i = !(!o.includes("<th") && !o.includes("<td"));
                if (i) {
                    var e = o.split(" ")[0].split("<")[1];
                    r.appendChild(document.createElement(e)), r.firstChild.innerHTML = o
                }
                Array.prototype.forEach.call(this.el, function(e, t) {
                    i ? e.appendChild(r.firstChild) : e.appendChild(new yo(o, "ce").el)
                })
            } else this.selector.appendChild(new yo(o, "ce").el);
            else if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(o);
            else if (1 <= o.length)
                for (var t = 0; t < o.length; t++) this.selector.appendChild(o[t]);
            else this.selector.appendChild(o);
            else this.el.insertAdjacentText("beforeend", o);
            return this
        }, yo.prototype.text = function(o) {
            if (this.el) {
                if (1 <= this.el.length) {
                    if (!o) return this.el[0].textContent;
                    Array.prototype.forEach.call(this.el, function(e, t) {
                        e.textContent = o
                    })
                } else {
                    if (!o) return this.el.textContent;
                    this.el.textContent = o
                }
                return this
            }
        }, yo.prototype.data = function(o, n) {
            if (this.el.length < 1) return this;
            if (!(1 <= this.el.length)) return r(this.el, n);

            function r(e, t) {
                if (!t) return JSON.parse(e.getAttribute("data-" + o));
                "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
            }
            return Array.prototype.forEach.call(this.el, function(e, t) {
                r(e, n)
            }), this
        }, yo.prototype.height = function(e) {
            this.el.length && (this.el = this.el[0]);
            for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++) 0 < s[l] && (a += s[l]);
            if (!e) return this.selector === document ? i : this.el.clientHeight - a;
            var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
                d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
            return (c && "px" === c || "%" === c || "em" === c || "rem" === c) && (0 < d ? oo(this.el, "height: " + (a + d + c) + ";", !0) : "auto" === e && oo(this.el, "height: " + e + ";", !0)), this
        }, yo.prototype.each = function(e) {
            var t = !1;
            return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
        }, yo.prototype.is = function(e) {
            return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
        }, yo.prototype.filter = function(e) {
            return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
        }, yo.prototype.animate = function(s, a) {
            var l, c = this;
            for (var e in this.el = document.querySelector(this.selector), s) l = e,
                function() {
                    var e = parseInt(s[l]),
                        t = s[l].split(parseInt(s[l]))[1] ? s[l].split(parseInt(s[l]))[1] : "px",
                        o = "\n                      @keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      ",
                        n = document.head.querySelector("#onetrust-style");
                    if (n ? n.innerHTML += o : ((i = document.createElement("style")).id = "onetrust-legacy-style", i.type = "text/css", i.innerHTML = o, document.head.appendChild(i)), yo.browser().type = yo.browser().version <= 8) {
                        var r = "top" === l ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + a + "ms ease-out forwards;";
                        oo(c.el, r)
                    } else {
                        var i = "\n                        animation-name: " + ("top" === l ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + a + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ";
                        oo(c.el, i, !0)
                    }
                }();
            return this
        }, yo.prototype.scrollTop = function() {
            return this.el.scrollTop
        }, yo);

    function yo(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case "ce":
                var o = yo.browser().type.toLowerCase(),
                    n = yo.browser().version;
                if (n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o) {
                    var r = document.implementation.createHTMLDocument();
                    r.body.innerHTML = e, this.el = r.body.children[0]
                } else {
                    var i = document.createRange().createContextualFragment(e);
                    this.el = i.firstChild
                }
                this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function fo(e, t) {
        return void 0 === t && (t = ""), new Co(e, t)
    }
    var vo, ko = {},
        mo = (bo.prototype.getDataLanguageCulture = function() {
            var e = po.bannerScriptElement;
            return e && e.getAttribute(vt) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(vt).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
        }, bo.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
            return e.replace(/\_/, "-")
        }, bo.prototype.detectDocumentOrBrowserLanguage = function() {
            var e = "";
            if (po.langSwitcherPldr) {
                var t = io.convertKeyValueLowerCase(po.langSwitcherPldr),
                    o = this.getUserLanguage().toLowerCase();
                if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                    if (2 === o.length)
                        for (var n = 0; n < Object.keys(t).length; n += 1) {
                            var r = Object.keys(t)[n];
                            if (r.substr(0, 2) === o) {
                                e = t[r];
                                break
                            }
                        } else 2 < o.length && (e = t[o.substr(0, 2)]);
                e = e || t.default
            }
            return e
        }, bo.prototype.getUserLanguage = function() {
            return po.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }, bo.prototype.isValidLanguage = function(e, t) {
            var o = io.convertKeyValueLowerCase(po.langSwitcherPldr);
            return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
        }, bo.prototype.getLangJsonUrl = function(e) {
            void 0 === e && (e = null);
            var t, o = po.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(), !this.isValidLanguage(o, e)) return null
            } else e = this.getDataLanguageCulture();
            return go.lang = e, go.consentLanguage = e.substr(0, 2), t = po.canUseConditionalLogic ? po.bannerDataParentURL + "/" + o.Id + "/" + po.Condition.Id + "/" + e : po.bannerDataParentURL + "/" + o.Id + "/" + e, po.multiVariantTestingEnabled && (t = po.bannerDataParentURL + "/" + o.Id + "/variants/" + po.selectedVariant.Id + "/" + e), t
        }, bo.prototype.populateLangSwitcherPlhdr = function() {
            var e = po.getRegionRule();
            if (e) {
                var t = e.Variants;
                if (po.multiVariantTestingEnabled && t) {
                    var o = ro.getCookie(rt.SELECTED_VARIANT),
                        n = void 0;
                    o && (n = t[io.findIndex(t, function(e) {
                        return e.Id === o
                    })]), o && n || (n = t[Math.floor(Math.random() * t.length)]), po.langSwitcherPldr = n.LanguageSwitcherPlaceholder, po.selectedVariant = n
                } else po.canUseConditionalLogic ? po.langSwitcherPldr = po.Condition.LanguageSwitcherPlaceholder : po.langSwitcherPldr = e.LanguageSwitcherPlaceholder
            }
        }, bo);

    function bo() {}
    var So, Po = (To.prototype.getLangJson = function(e) {
        if (void 0 === e && (e = null), po.previewMode) {
            var t = JSON.parse(window.sessionStorage.getItem("otPreviewData"));
            return Promise.resolve(t.langJson)
        }
        var o = vo.getLangJsonUrl(e);
        return o ? So.otFetch(o + ".json") : Promise.resolve(null)
    }, To.prototype.getPersistentCookieSvg = function(e) {
        var t = e || uo.cookiePersistentLogo;
        return t ? So.otFetch(t, !0) : Promise.resolve(null)
    }, To.prototype.fetchGvlObj = function() {
        return this.otFetch(to.moduleInitializer.IabV2Data.globalVendorListUrl)
    }, To.prototype.fetchGoogleVendors = function() {
        var e = Ao.updateCorrectIABUrl(to.moduleInitializer.GoogleData.googleVendorListUrl);
        return Ao.checkMobileOfflineRequest(Ao.getBannerVersionUrl()) ? Ao.otFetchOfflineFile(io.getRelativeURL(e, !0)) : (po.mobileOnlineURL.push(e), this.otFetch(e))
    }, To.prototype.getStorageDisclosure = function(t) {
        return u(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, this.otFetch(t, !1, !0)]
            })
        })
    }, To.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            Ao.jsonp(Ao.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, To.prototype.loadGPP = function() {
        return new Promise(function(e) {
            Ao.jsonp(Ao.getBannerVersionUrl() + "/otGPP.js", e, e)
        })
    }, To.prototype.getCSBtnContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = uo.useRTL ? ne.RTL : ne.LTR, go.csBtnAsset[t] ? [3, 2] : (o = Ao.getBannerSDKAssestsUrl() + "/" + (uo.useRTL ? mt : kt), n = go.csBtnAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, go.csBtnAsset[t]]
                }
            })
        })
    }, To.prototype.getPcContent = function(s) {
        return void 0 === s && (s = !1), u(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = uo.useRTL ? ne.RTL : ne.LTR, go.pcAsset[t] && !s ? [3, 2] : (o = Ao.getBannerSDKAssestsUrl(), uo.PCTemplateUpgrade && (o += "/v2"), n = o + "/" + po.pcName + (uo.useRTL ? "Rtl" : "") + ".json", r = go.pcAsset, i = t, [4, this.otFetch(n)]);
                    case 1:
                        r[i] = e.sent(), e.label = 2;
                    case 2:
                        return [2, go.pcAsset[t]]
                }
            })
        })
    }, To.prototype.getBannerContent = function(l, c) {
        return void 0 === l && (l = !1), void 0 === c && (c = null), u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (t = uo.useRTL ? ne.RTL : ne.LTR, o = c || vo.getDataLanguageCulture(), go.bAsset[t] && !l) return [3, 2];
                        if (n = po.getRegionRule(), r = void 0, to.fp.CookieV2SSR) {
                            if (po.previewMode) return i = JSON.parse(window.sessionStorage.getItem("otPreviewData")), [2, Promise.resolve(i.bLayout)];
                            r = po.bannerDataParentURL + "/" + n.Id, po.canUseConditionalLogic && (r += "/" + po.Condition.Id), r += "/bLayout-" + o + ".json"
                        } else r = Ao.getBannerSDKAssestsUrl() + "/" + po.bannerName + (uo.useRTL ? "Rtl" : "") + ".json";
                        return s = go.bAsset, a = t, [4, this.otFetch(r)];
                    case 1:
                        s[a] = e.sent(), e.label = 2;
                    case 2:
                        return [2, go.bAsset[t]]
                }
            })
        })
    }, To.prototype.getCommonStyles = function(i) {
        return void 0 === i && (i = !1), u(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = uo.useRTL ? ne.RTL : ne.LTR, go.cStyles[t] && !i ? [3, 2] : (o = Ao.getBannerSDKAssestsUrl() + "/otCommonStyles" + (uo.useRTL ? "Rtl" : "") + ".css", n = go.cStyles, r = t, [4, this.otFetch(o, !0)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, go.cStyles[t]]
                }
            })
        })
    }, To.prototype.getSyncNtfyContent = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = uo.useRTL ? ne.RTL : ne.LTR, go.syncNtfyContent[t] ? [3, 2] : (o = Ao.getBannerSDKAssestsUrl() + "/otSyncNotification" + (uo.useRTL ? "Rtl" : "") + ".json", n = go.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, go.syncNtfyContent[t]]
                }
            })
        })
    }, To.prototype.getConsentProfile = function(e, t) {
        var o = this,
            n = {
                Identifier: e,
                TenantId: go.tenantId,
                Authorization: t
            };
        return new Promise(function(e) {
            o.getJSON(go.consentApi, n, e, e)
        })
    }, To.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, To.prototype.otFetch = function(r, i, s) {
        return void 0 === i && (i = !1), void 0 === s && (s = !1), u(this, void 0, void 0, function() {
            var t, o, n = this;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return Ao.checkMobileOfflineRequest(r) ? [4, Ao.otFetchOfflineFile(r)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 9, , 10]), po.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                            n.getJSON(r, null, e, e, i)
                        })];
                    case 3:
                        return [4, fetch(r)];
                    case 4:
                        return t = e.sent(), s && t.headers.get("Access-Control-Allow-Credentials") ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [4, t.json()];
                    case 7:
                        return [2, e.sent()];
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                    case 10:
                        return [2]
                }
            })
        })
    }, To.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null), void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0), t)
            for (var s in t) i.setRequestHeader(s, t[s]);
        i.onload = function() {
            if (200 <= this.status && this.status < 400 && this.responseText) {
                var e = void 0;
                e = r ? this.responseText : JSON.parse(this.responseText), o(e)
            } else n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, i.onerror = function(e) {
            n(e)
        }, i.send()
    }, To);

    function To() {}
    var Ao, Io = (Lo.prototype.addLogoUrls = function() {
        Ao.checkMobileOfflineRequest(Ao.getBannerVersionUrl()) || (po.mobileOnlineURL.push(Ao.updateCorrectUrl(uo.optanonLogo)), po.mobileOnlineURL.push(Ao.updateCorrectUrl(uo.oneTrustFtrLogo)))
    }, Lo.prototype.getCookieLabel = function(e, t, o) {
        if (void 0 === o && (o = !0), !e) return "";
        var n = e.Name;
        return t && (n = '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + uo.NewWinTxt + "</span>\n                </a>\n            "), n
    }, Lo.prototype.getBannerSDKAssestsUrl = function() {
        return this.getBannerVersionUrl() + "/assets"
    }, Lo.prototype.getBannerVersionUrl = function() {
        var e = po.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + to.moduleInitializer.Version
    }, Lo.prototype.checkMobileOfflineRequest = function(e) {
        return to.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
    }, Lo.prototype.updateCorrectIABUrl = function(e) {
        var t = to.moduleInitializer.ScriptType;
        if (t === Ct || t === ft) {
            var o = io.getURL(e),
                n = po.bannerScriptElement,
                r = n && n.getAttribute("src") ? io.getURL(n.getAttribute("src")) : null;
            r && o && r.hostname !== o.hostname && (e = (e = (r = "" + po.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, r.hostname))
        }
        return e
    }, Lo.prototype.updateCorrectUrl = function(e, t) {
        if (void 0 === t && (t = !1), po.previewMode && new RegExp("^data:image/").test(e)) return e;
        var o = io.getURL(e),
            n = po.bannerScriptElement,
            r = n && n.getAttribute("src") ? io.getURL(n.getAttribute("src")) : null;
        if (r && o && r.hostname !== o.hostname) {
            var i = to.moduleInitializer.ScriptType;
            if (i === Ct || i === ft) {
                if (t) return e;
                e = (r = po.bannerDataParentURL + "/" + po.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
            } else e = null == e ? void 0 : e.replace(o.hostname, r.hostname)
        }
        return e
    }, Lo.prototype.isBundleOrStackActive = function(n, r) {
        void 0 === r && (r = null);
        var i = go.oneTrustIABConsent,
            s = !0;
        r = r || go.groupsConsent;
        for (var a = 0, e = function() {
                var t = n.SubGroups[a];
                if (t.Type === jt)(-1 < (e = io.findIndex(r, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                })) && "0" === r[e].split(":")[1] || !r.length) && (s = !1);
                else {
                    var e, o = t.Type === Wt ? i.specialFeatures : i.purpose;
                    (-1 < (e = io.findIndex(o, function(e) {
                        return e.split(":")[0] === t.IabGrpId
                    })) && "false" === o[e].split(":")[1] || !o.length) && (s = !1)
                }
                a++
            }; e(), s && a < n.SubGroups.length;);
        return s
    }, Lo.prototype.otFetchOfflineFile = function(r) {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return r = r.replace(".json", ".js"), t = r.split("/"), o = t[t.length - 1], n = o.split(".js")[0], [4, new Promise(function(e) {
                            function t() {
                                e(window[n])
                            }
                            Ao.jsonp(r, t, t)
                        })];
                    case 1:
                        return [2, e.sent()]
                }
            })
        })
    }, Lo.prototype.jsonp = function(e, t, o) {
        Ao.checkMobileOfflineRequest(e) || po.mobileOnlineURL.push(e);
        var n = document.createElement("script"),
            r = document.getElementsByTagName("head")[0];

        function i() {
            t()
        }
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || i()
        }, n.onload = i, n.onerror = function() {
            o()
        }, n.type = "text/javascript", n.async = !0, n.src = e, go.crossOrigin && n.setAttribute("crossorigin", go.crossOrigin), r.appendChild(n)
    }, Lo.prototype.isCookiePolicyPage = function(e) {
        var t = !1,
            o = io.removeURLPrefixes(window.location.href),
            n = fo("<div></div>", "ce").el;
        fo(n).html(e);
        for (var r = n.querySelectorAll("a"), i = 0; i < r.length; i++)
            if (io.removeURLPrefixes(r[i].href) === o) {
                t = !0;
                break
            }
        return t
    }, Lo.prototype.isBannerVisible = function() {
        var e = !1,
            t = document.getElementById("onetrust-banner-sdk");
        return t && t.getAttribute("style") && (e = -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none")), e
    }, Lo.prototype.hideBanner = function() {
        var e = this;
        go.bnrAnimationInProg ? setTimeout(function() {
            return e.hideBanner()
        }, 100) : fo("#onetrust-banner-sdk").fadeOut(400)
    }, Lo.prototype.resetFocusToBody = function() {
        document.activeElement && document.activeElement.blur()
    }, Lo.prototype.getDuration = function(e) {
        var t = e.Length,
            o = e.DurationType,
            n = "";
        if (!t || 0 === parseInt(t)) return uo.LfSpanSecs;
        var r = parseInt(t);
        if (o) {
            var i = 1 < (r = this.round_to_precision(r / o, .5)) ? Gt[o] + "s" : Gt[o];
            uo.LifespanDurationText && 1 === o && (i = "LifespanDurationText"), n = r + " " + uo[i]
        } else n = this.getDurationText(r);
        return n
    }, Lo.prototype.isDateCurrent = function(e) {
        var t = e.split("/"),
            o = parseInt(t[1]),
            n = parseInt(t[0]),
            r = parseInt(t[2]),
            i = new Date,
            s = i.getDate(),
            a = i.getFullYear(),
            l = i.getMonth() + 1;
        return a < r || r === a && l < n || r === a && n === l && s <= o
    }, Lo.prototype.insertFooterLogo = function(e) {
        var t = fo(e).el;
        if (t.length && uo.oneTrustFtrLogo) {
            var o = Ao.updateCorrectUrl(uo.oneTrustFtrLogo);
            Ao.checkMobileOfflineRequest(Ao.getBannerVersionUrl()) && (o = io.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img"),
                    i = "Powered by OneTrust " + uo.NewWinTxt;
                fo(t[n]).attr("href", uo.pCFooterLogoUrl), r.setAttribute("src", o), r.setAttribute("title", i), fo(t[n]).attr("aria-label", i)
            }
        }
    }, Lo.prototype.getUTCFormattedDate = function(e) {
        var t = new Date(e);
        return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + t.getUTCDate().toString().toString().padStart(2, "0") + " " + t.getUTCHours() + ":" + t.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + t.getUTCSeconds().toString().toString().padStart(2, "0")
    }, Lo.prototype.getDurationText = function(e) {
        return 365 <= e ? (e /= 365, (e = this.round_to_precision(e, .5)) + " " + (1 < e ? uo.LfSpnYrs : uo.LfSpnYr)) : uo.LifespanDurationText ? e + " " + uo.LifespanDurationText : e + " " + (1 < e ? uo.PCenterVendorListLifespanDays : uo.PCenterVendorListLifespanDay)
    }, Lo.prototype.round_to_precision = function(e, t) {
        var o = +e + (void 0 === t ? .5 : t / 2);
        return o - o % (void 0 === t ? 1 : +t)
    }, Lo.prototype.isOptOutEnabled = function() {
        return uo.PCTemplateUpgrade ? go.genVenOptOutEnabled : uo.allowHostOptOut
    }, Lo.prototype.findUserType = function(e) {
        go.isKeyboardUser = !(!e || 0 !== e.detail)
    }, Lo.prototype.getCSSPropsFromString = function(e) {
        if (e) {
            var t = e.length,
                n = {};
            return e.endsWith(";") && (e = e.substring(0, t - 1)), e.trim().split(";").forEach(function(e) {
                var t = e.trim().toString().split(":"),
                    o = JSON.parse('{ "' + t[0].trim() + '" : "' + t[1].trim() + '" }');
                n = Object.assign(n, o)
            }), n
        }
        return {}
    }, Lo.prototype.setCloseIcon = function(e) {
        var t = Ao.updateCorrectUrl(uo.OTCloseBtnLogo),
            o = fo(e);
        o.length && oo(o.el, 'background-image: url("' + t + '")', !0)
    }, Lo.prototype.createOptOutSignalElement = function(e, t) {
        var o = e(t ? "#ot-pc-content" : "#onetrust-policy"),
            n = document.createElement("div");
        n.classList.add("ot-optout-signal");
        var r = document.createElement("div");
        r.classList.add("ot-optout-icon");
        var i = document.createElement("span");
        return i.innerText = t ? uo.PCOptOutSignalText : uo.BOptOutSignalText, n.append(r), n.append(i), null != o && o.prepend(n), this.applyGuardLogo(), n
    }, Lo.prototype.applyGuardLogo = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = uo.cookiePersistentLogo).includes("ot_guard_logo.svg") || (o = uo.OTCloseBtnLogo, n = o.indexOf("static/"), t = o.replace(o.slice(n + 7), "ot_guard_logo.svg")), [4, So.getPersistentCookieSvg(t)];
                    case 1:
                        return r = e.sent(), fo(".ot-optout-icon").html(r), [2]
                }
            })
        })
    }, Lo);

    function Lo() {}
    var _o, Eo = {
            P_Content: "#ot-pc-content",
            P_Logo: ".ot-pc-logo",
            P_Title: "#ot-pc-title",
            P_Policy_Txt: "#ot-pc-desc",
            P_Vendor_Title_Elm: "#ot-lst-title",
            P_Vendor_Title: "#ot-lst-title h3",
            P_Manage_Cookies_Txt: "#ot-category-title",
            P_Label_Txt: ".ot-label-txt",
            P_Category_Header: ".ot-cat-header",
            P_Category_Grp: ".ot-cat-grp",
            P_Category_Item: ".ot-cat-item",
            P_Vendor_List: "#ot-pc-lst",
            P_Vendor_Content: "#ot-lst-cnt",
            P_Vendor_Container: "#ot-ven-lst",
            P_Ven_Bx: "ot-ven-box",
            P_Ven_Name: ".ot-ven-name",
            P_Ven_Link: ".ot-ven-link",
            P_Ven_Ctgl: "ot-ven-ctgl",
            P_Ven_Ltgl: "ot-ven-litgl",
            P_Ven_Ltgl_Only: "ot-ven-litgl-only",
            P_Ven_Opts: ".ot-ven-opts",
            P_Triangle: "#ot-anchor",
            P_Fltr_Modal: "#ot-fltr-modal",
            P_Fltr_Options: ".ot-fltr-opts",
            P_Fltr_Option: ".ot-fltr-opt",
            P_Select_Cntr: "#ot-sel-blk",
            P_Host_Cntr: "#ot-host-lst",
            P_Host_Hdr: ".ot-host-hdr",
            P_Host_Desc: ".ot-host-desc",
            P_Li_Hdr: ".ot-pli-hdr",
            P_Li_Title: ".ot-li-title",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Host_Title: ".ot-host-name",
            P_Leg_Select_All: ".ot-sel-all-hdr",
            P_Leg_Header: ".ot-li-hdr",
            P_Acc_Header: ".ot-acc-hdr",
            P_Cnsnt_Header: ".ot-consent-hdr",
            P_Tgl_Cntr: ".ot-tgl-cntr",
            P_CBx_Cntr: ".ot-chkbox",
            P_Sel_All_Host_El: "ot-selall-hostcntr",
            P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
            P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
            P_c_Name: "ot-c-name",
            P_c_Host: "ot-c-host",
            P_c_Duration: "ot-c-duration",
            P_c_Type: "ot-c-type",
            P_c_Category: "ot-c-category",
            P_c_Desc: "ot-c-description",
            P_Host_View_Cookies: ".ot-host-expand",
            P_Host_Opt: ".ot-host-opt",
            P_Host_Info: ".ot-host-info",
            P_Arrw_Cntr: ".ot-arw-cntr",
            P_Acc_Txt: ".ot-acc-txt",
            P_Vendor_CheckBx: "ot-ven-chkbox",
            P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
            P_Host_UI: "ot-hosts-ui",
            P_Host_Cnt: "ot-host-cnt",
            P_Host_Bx: "ot-host-box",
            P_Ven_Dets: ".ot-ven-dets",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Close_Btn: ".ot-close-icon",
            P_Ven_Lst_Cntr: ".ot-vlst-cntr",
            P_Host_Lst_cntr: ".ot-hlst-cntr",
            P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
            P_Subgrp_Desc: ".ot-subgrp-desc",
            P_Subgp_ul: ".ot-subgrps",
            P_Subgrp_li: ".ot-subgrp",
            P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
            P_Grp_Container: ".ot-grps-cntr",
            P_Privacy_Txt: "#ot-pvcy-txt",
            P_Privacy_Hdr: "#ot-pvcy-hdr",
            P_Active_Menu: "ot-active-menu",
            P_Desc_Container: ".ot-desc-cntr",
            P_Tab_Grp_Hdr: "ot-grp-hdr1",
            P_Search_Cntr: "#ot-search-cntr",
            P_Clr_Fltr_Txt: "#clear-filters-handler",
            P_Acc_Grp_Desc: ".ot-acc-grpdesc",
            P_Acc_Container: ".ot-acc-grpcntr",
            P_Line_Through: "line-through",
            P_Vendor_Search_Input: "#vendor-search-handler"
        },
        Vo = {
            P_Grp_Container: ".groups-container",
            P_Content: "#ot-content",
            P_Category_Header: ".category-header",
            P_Desc_Container: ".description-container",
            P_Label_Txt: ".label-text",
            P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
            P_Leg_Int_Hdr: ".leg-int-header",
            P_Not_Always_Active: "p:not(.ot-always-active)",
            P_Category_Grp: ".category-group",
            P_Category_Item: ".category-item",
            P_Sub_Grp_Cntr: ".cookie-subgroups-container",
            P_Acc_Container: ".ot-accordion-pc-container",
            P_Close_Btn: ".pc-close-button",
            P_Logo: ".pc-logo",
            P_Title: "#pc-title",
            P_Privacy_Txt: "#privacy-text",
            P_Privacy_Hdr: "#pc-privacy-header",
            P_Policy_Txt: "#pc-policy-text",
            P_Manage_Cookies_Txt: "#manage-cookies-text",
            P_Vendor_Title: "#vendors-list-title",
            P_Vendor_Title_Elm: "#vendors-list-title",
            P_Vendor_List: "#vendors-list",
            P_Vendor_Content: "#vendor-list-content",
            P_Vendor_Container: "#vendors-list-container",
            P_Ven_Bx: "vendor-box",
            P_Ven_Name: ".vendor-title",
            P_Ven_Link: ".vendor-privacy-notice",
            P_Ven_Ctgl: "ot-vendor-consent-tgl",
            P_Ven_Ltgl: "ot-leg-int-tgl",
            P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
            P_Ven_Opts: ".vendor-options",
            P_Triangle: "#ot-triangle",
            P_Fltr_Modal: "#ot-filter-modal",
            P_Fltr_Options: ".ot-group-options",
            P_Fltr_Option: ".ot-group-option",
            P_Select_Cntr: "#select-all-container",
            P_Host_Cntr: "#hosts-list-container",
            P_Host_Hdr: ".host-info",
            P_Host_Desc: ".host-description",
            P_Host_Opt: ".host-option-group",
            P_Host_Info: ".vendor-host",
            P_Ven_Dets: ".vendor-purpose-groups",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Arrw_Cntr: ".ot-arrow-container",
            P_Li_Hdr: ".leg-int-header",
            P_Li_Title: ".leg-int-title",
            P_Acc_Txt: ".accordion-text",
            P_Tgl_Cntr: ".ot-toggle-group",
            P_CBx_Cntr: ".ot-chkbox-container",
            P_Host_Title: ".host-title",
            P_Leg_Select_All: ".leg-int-sel-all-hdr",
            P_Leg_Header: ".leg-int-hdr",
            P_Cnsnt_Header: ".consent-hdr",
            P_Acc_Header: ".accordion-header",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Sel_All_Host_El: "select-all-hosts-input-container",
            P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
            P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
            P_c_Name: "cookie-name-container",
            P_c_Host: "cookie-host-container",
            P_c_Duration: "cookie-duration-container",
            P_c_Type: "cookie-type-container",
            P_c_Category: "cookie-category-container",
            P_c_Desc: "cookie-description-container",
            P_Host_View_Cookies: ".host-view-cookies",
            P_Vendor_CheckBx: "vendor-chkbox",
            P_Vendor_LegCheckBx: "vendor-leg-chkbox",
            P_Host_UI: "hosts-list",
            P_Host_Cnt: "host-list-content",
            P_Host_Bx: "host-box",
            P_Ven_Lst_Cntr: ".category-vendors-list-container",
            P_Host_Lst_cntr: ".category-host-list-container",
            P_Subgrp_Desc: ".cookie-subgroups-description-legal",
            P_Subgp_ul: ".cookie-subgroups",
            P_Subgrp_li: ".cookie-subgroup",
            P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
            P_Active_Menu: "active-group",
            P_Tab_Grp_Hdr: "group-toggle",
            P_Search_Cntr: "#search-container",
            P_Clr_Fltr_Txt: "#clear-filters-handler p",
            P_Vendor_Search_Input: "#vendor-search-handler"
        };

    function Bo() {}
    var wo, Oo = new(Bo.prototype.initializeBannerVariables = function(e) {
            var t, o = e.DomainData;
            po.iabType = o.IabType, t = o.PCTemplateUpgrade, _o = t ? Eo : Vo, po.init(e), go.showGeneralVendors = uo.GeneralVendorsEnabled && uo.PCTemplateUpgrade, go.showVendorService = to.fp.CookieV2VendorServiceScript && uo.VendorServiceConfig.PCVSEnable && "IAB2" !== uo.IabType && uo.PCTemplateUpgrade, go.vsIsActiveAndOptOut = go.showVendorService && uo.VendorServiceConfig.PCVSOptOut, go.showTrackingTech = to.fp.CookieV2TrackingTechPrefCenter && uo.AdditionalTechnologiesConfig.PCShowTrackingTech, go.genVenOptOutEnabled = go.showGeneralVendors && uo.GenVenOptOut, Ao.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
        }, Bo.prototype.initializeVendorInOverriddenVendors = function(e, t) {
            uo.OverriddenVendors[e] = {
                disabledCP: [],
                disabledLIP: [],
                active: t,
                legInt: !1,
                consent: !1
            }
        }, Bo.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
            var r = uo.GlobalRestrictions,
                i = uo.OverriddenVendors;
            switch (i[t] || this.initializeVendorInOverriddenVendors(t, !0), i[t].disabledCP || (i[t].disabledCP = []), i[t].disabledLIP || (i[t].disabledLIP = []), r[o]) {
                case j.Disabled:
                    n ? i[t].disabledCP.push(o) : i[t].disabledLIP.push(o), uo.Publisher.restrictions[o][t] = j.Disabled;
                    break;
                case j.Consent:
                    n ? (i[t].consent = !0, uo.Publisher.restrictions[o][t] = j.Consent) : (i[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                    break;
                case j.LegInt:
                    n ? (i[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0, uo.Publisher.restrictions[o][t] = j.LegInt);
                    break;
                case void 0:
                    n ? i[t].consent = !0 : i[t].legInt = !0
            }
        }, Bo.prototype.checkFlexiblePurpose = function(e, t, o, n) {
            e.flexiblePurposes.includes(o) ? (n ? uo.OverriddenVendors[t].legInt = !0 : uo.OverriddenVendors[t].consent = !0, uo.Publisher.restrictions[o][t] = n ? j.LegInt : j.Consent) : uo.Publisher.restrictions[o][t] = j.Disabled
        }, Bo.prototype.removeInActiveVendorsForTcf = function(i) {
            var s = this,
                a = go.iabData.vendorListVersion,
                e = uo.Publisher,
                l = uo.GlobalRestrictionEnabled,
                c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
            Object.keys(i.vendors).forEach(function(t) {
                var o = i.vendors[t];
                o.iab2GVLVersion > a && (uo.NewVendorsInactiveEnabled ? s.initializeVendorInOverriddenVendors(t, !1) : l && (o.purposes.forEach(function(e) {
                    s.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                }), o.legIntPurposes.forEach(function(e) {
                    s.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                })));
                var e = !1;
                uo.IsIabThirdPartyCookieEnabled || (po.legIntSettings.PAllowLI ? uo.OverriddenVendors[t] && !uo.OverriddenVendors[t].active && (e = !0) : -1 < uo.Vendors.indexOf(Number(t)) && (e = !0));
                var n = !o.purposes.length && !o.flexiblePurposes.length;
                uo.OverriddenVendors[t] && !uo.OverriddenVendors[t].consent && (n = !0);
                var r = !0;
                po.legIntSettings.PAllowLI && (!o.legIntPurposes.length || uo.OverriddenVendors[t] && !uo.OverriddenVendors[t].legInt || (r = !1)), !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0), !l && c && o.iab2GVLVersion > a && (e = !0), e && delete i.vendors[t]
            })
        }, Bo.prototype.setPublisherRestrictions = function() {
            var e = uo.Publisher;
            if (e && e.restrictions) {
                var s = this.iabStringSDK(),
                    t = e.restrictions,
                    a = go.iabData,
                    l = go.oneTrustIABConsent.vendorList.vendors;
                Object.keys(t).forEach(function(n) {
                    var r, i = t[n],
                        e = po.iabGroups.purposes[n];
                    e && (r = {
                        description: e.description,
                        purposeId: e.id,
                        purposeName: e.name
                    }), Object.keys(i).forEach(function(e) {
                        if (go.vendorsSetting[e]) {
                            var t = go.vendorsSetting[e].arrIndex;
                            1 === i[e] && -1 === l[e].purposes.indexOf(Number(n)) ? a.vendors[t].purposes.push(r) : 2 === i[e] && -1 === l[e].legIntPurposes.indexOf(Number(n)) && a.vendors[t].legIntPurposes.push(r);
                            var o = s.purposeRestriction(Number(n), i[e]);
                            go.tcModel.publisherRestrictions.add(Number(e), o)
                        }
                    })
                })
            }
        }, Bo.prototype.populateVendorListTCF = function() {
            return u(this, void 0, void 0, function() {
                var t, o, n, r, i, s, a, l, c;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = this.iabStringSDK(), o = go.iabData, n = Ao.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), Ao.checkMobileOfflineRequest(Ao.getBannerVersionUrl()) ? [3, 1] : (po.mobileOnlineURL.push(n), i = t.gvl(n, go.gvlObj), [3, 3]);
                        case 1:
                            return a = (s = t).gvl, l = [null], [4, Ao.otFetchOfflineFile(io.getRelativeURL(n, !0))];
                        case 2:
                            i = a.apply(s, l.concat([e.sent()])), e.label = 3;
                        case 3:
                            return this.removeInActiveVendorsForTcf(i), go.oneTrustIABConsent.vendorList = i, this.assignIABDataWithGlobalVendorList(i), c = go, [4, t.tcModel(i)];
                        case 4:
                            c.tcModel = e.sent(), r && this.setPublisherRestrictions(), go.tcModel.cmpId = parseInt(o.cmpId), go.tcModel.cmpVersion = parseInt(o.cmpVersion);
                            try {
                                go.tcModel.consentLanguage = go.consentLanguage
                            } catch (e) {
                                go.tcModel.consentLanguage = "EN"
                            }
                            return go.tcModel.consentScreen = parseInt(o.consentScreen), go.tcModel.isServiceSpecific = r, go.tcModel.purposeOneTreatment = po.purposeOneTreatment, uo.PublisherCC ? go.tcModel.publisherCountryCode = uo.PublisherCC : go.userLocation.country && (go.tcModel.publisherCountryCode = go.userLocation.country), go.cmpApi = t.cmpApi(go.tcModel.cmpId, go.tcModel.cmpVersion, r, uo.UseGoogleVendors ? {
                                getTCData: this.addtlConsentString,
                                getInAppTCData: this.addtlConsentString
                            } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                    }
                })
            })
        }, Bo.prototype.resetTCModel = function() {
            var e = this.iabStringSDK(),
                t = go.tcModel.clone();
            if (t.unsetAll(), po.legIntSettings.PAllowLI) {
                var o = po.consentableIabGrps.filter(function(e) {
                        return e.HasLegIntOptOut && e.Type === Kt
                    }).map(function(e) {
                        return parseInt(po.iabGrpIdMap[e.CustomGroupId])
                    }),
                    n = Object.keys(go.vendorsSetting).filter(function(e) {
                        return go.vendorsSetting[e].legInt
                    }).map(function(e) {
                        return parseInt(e)
                    });
                t.purposeLegitimateInterests.set(o), t.vendorLegitimateInterests.set(n), t.isServiceSpecific && t.publisherLegitimateInterests.set(o)
            }
            go.cmpApi.update(e.tcString().encode(t), !0)
        }, Bo.prototype.addtlConsentString = function(e, t, o) {
            t && t.tcString && (t.addtlConsent = "" + go.addtlConsentVersion + (go.isAddtlConsent ? go.addtlVendors.vendorConsent.join(".") : "")), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
        }, Bo.prototype.setIabData = function() {
            go.iabData = to.moduleInitializer.IabV2Data, go.iabData.consentLanguage = go.consentLanguage
        }, Bo.prototype.assignIABDataWithGlobalVendorList = function(r) {
            var i = uo.OverriddenVendors;
            go.iabData.vendorListVersion = r.vendorListVersion, go.iabData.vendors = [], Object.keys(r.vendors).forEach(function(n) {
                go.vendorsSetting[n] = {
                    consent: !0,
                    legInt: !0,
                    arrIndex: 0,
                    specialPurposesOnly: !1
                };
                var e = {},
                    t = r.vendors[n];
                e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, e.cookieMaxAge = io.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null;
                var o = !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length;
                po.legIntSettings.PAllowLI && ((!i[n] || i[n].legInt) && (i[n] || t.legIntPurposes.length) || o) || (go.vendorsSetting[n].legInt = !1), po.legIntSettings.PAllowLI && o && (go.vendorsSetting[n].specialPurposesOnly = !0), i[n] && !i[n].consent || !i[n] && !t.purposes.length && !t.flexiblePurposes.length ? go.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (go.vendorsSetting[n].consent = !1), e.features = t.features.map(function(e) {
                    var t, o = po.iabGroups.features[e];
                    return o && (t = {
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), t
                }), e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                    var o = po.iabGroups.specialFeatures[t];
                    return o && e.push({
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), e
                }, []), e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                    var o = po.iabGroups.purposes[t];
                    return !o || i[n] && i[n].disabledCP && -1 !== i[n].disabledCP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                    var o = po.iabGroups.purposes[t];
                    return !o || i[n] && i[n].disabledLIP && -1 !== i[n].disabledLIP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.specialPurposes = t.specialPurposes.map(function(e) {
                    var t, o = po.iabGroups.specialPurposes[e];
                    return o && (t = {
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), t
                }), go.iabData.vendors.push(e), go.vendorsSetting[n].arrIndex = go.iabData.vendors.length - 1
            })
        }, Bo.prototype.populateIABCookies = function() {
            return u(this, void 0, void 0, function() {
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!this.isIABCrossConsentEnabled()) return [3, 5];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(rt.EU_CONSENT, "", 0, !0)];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                        case 4:
                            return [3, 6];
                        case 5:
                            Oo.needReconsent() || this.setIABCookieData(), e.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, Bo.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
            var r = uo.iabThirdPartyConsentUrl;
            try {
                if (r && document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
                throw new ReferenceError
            } catch (e) {
                throw e
            }
        }, Bo.prototype.setIABCookieData = function() {
            go.oneTrustIABConsent.IABCookieValue = ro.getCookie(rt.EU_PUB_CONSENT)
        }, Bo.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
            return u(this, void 0, void 0, function() {
                var t, o;
                return g(this, function(e) {
                    return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (oo(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                        o.onload = function() {
                            po.thirdPartyiFrameResolve(), po.thirdPartyiFrameLoaded = !0, e()
                        }, o.onerror = function() {
                            throw po.thirdPartyiFrameResolve(), po.thirdPartyiFrameLoaded = !0, e(), new URIError
                        }
                    })])
                })
            })
        }, Bo.prototype.setIABVendor = function(n, r) {
            if (void 0 === n && (n = !0), void 0 === r && (r = !1), go.iabData.vendors.forEach(function(e) {
                    var t = e.vendorId;
                    if (po.legIntSettings.PAllowLI) {
                        var o = void 0;
                        o = r ? n : !!go.vendorsSetting[t].consent && n, go.oneTrustIABConsent.vendors.push(t.toString() + ":" + o), go.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + go.vendorsSetting[t].legInt)
                    } else go.oneTrustIABConsent.legIntVendors = [], go.oneTrustIABConsent.vendors.push(t.toString() + ":" + n)
                }), uo.UseGoogleVendors) {
                var t = go.addtlVendors;
                Object.keys(go.addtlVendorsList).forEach(function(e) {
                    n && (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
                })
            }
        }, Bo.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
            var e = this.getIABCrossConsentflagData();
            uo.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(uo.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
        }, Bo.prototype.isIABCrossConsentEnabled = function() {
            return "true" === this.getIABCrossConsentflagData()
        }, Bo.prototype.getIABCrossConsentflagData = function() {
            return ro.readCookieParam(rt.OPTANON_CONSENT, tt)
        }, Bo.prototype.setGeolocationInCookies = function() {
            var e = ro.readCookieParam(rt.OPTANON_CONSENT, Ze);
            if (go.userLocation && !e && this.isAlertBoxClosedAndValid()) {
                var t = go.userLocation.country + ";" + go.userLocation.state;
                this.setUpdateGeolocationCookiesData(t)
            } else this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData("")
        }, Bo.prototype.iabStringSDK = function() {
            var e = to.moduleInitializer.otIABModuleData;
            if (uo.IsIabEnabled && e) return {
                gvl: e.tcfSdkRef.gvl,
                tcModel: e.tcfSdkRef.tcModel,
                tcString: e.tcfSdkRef.tcString,
                cmpApi: e.tcfSdkRef.cmpApi,
                purposeRestriction: e.tcfSdkRef.purposeRestriction
            }
        }, Bo.prototype.setUpdateGeolocationCookiesData = function(e) {
            ro.writeCookieParam(rt.OPTANON_CONSENT, Ze, e)
        }, Bo.prototype.reconsentRequired = function() {
            return (to.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
        }, Bo.prototype.awaitingReconsent = function() {
            return "true" === ro.readCookieParam(rt.OPTANON_CONSENT, Qe)
        }, Bo.prototype.needReconsent = function() {
            var e = this.alertBoxCloseDate(),
                t = uo.LastReconsentDate;
            return e && t && new Date(t) > new Date(e)
        }, Bo.prototype.updateCrossConsentCookie = function(e) {
            ro.writeCookieParam(rt.OPTANON_CONSENT, tt, e)
        }, Bo.prototype.alertBoxCloseDate = function() {
            return ro.getCookie(rt.ALERT_BOX_CLOSED)
        }, Bo.prototype.isAlertBoxClosedAndValid = function() {
            return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
        }, Bo.prototype.generateLegIntButtonElements = function(e, t, o) {
            void 0 === o && (o = !1);
            var n = e ? "display:none;" : "";
            return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + uo.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? po.legIntSettings.PObjectLegIntText : po.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + uo.pcButtonColor + "; " + n + '"\n                    >\n                        ' + po.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
        }, Bo.prototype.syncAlertBoxCookie = function(e) {
            var t = uo.ReconsentFrequencyDays;
            ro.setCookie(rt.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
        }, Bo.prototype.syncCookieExpiry = function() {
            if (go.syncRequired) {
                var e = uo.ReconsentFrequencyDays,
                    t = ro.getCookie(rt.ALERT_BOX_CLOSED),
                    o = ro.getCookie(rt.OPTANON_CONSENT);
                ro.setCookie(rt.OPTANON_CONSENT, o, e, !1, new Date(t)), Oo.needReconsent() && ro.removeAlertBox();
                var n = ro.getCookie(rt.EU_PUB_CONSENT);
                n && (Oo.isIABCrossConsentEnabled() ? ro.removeIab2() : ro.setCookie(rt.EU_PUB_CONSENT, n, e, !1, new Date(t)));
                var r = ro.getCookie(rt.ADDITIONAL_CONSENT_STRING);
                r && ro.setCookie(rt.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t))
            }
        }, Bo.prototype.syncOtPreviewCookie = function() {
            var e = ro.getCookie(rt.OT_PREVIEW);
            e && ro.setCookie(rt.OT_PREVIEW, e, 1, !1)
        }, Bo.prototype.dispatchConsentEvent = function() {
            window.dispatchEvent(new CustomEvent("OTConsentApplied", {
                OTConsentApplied: "yes"
            }))
        }, Bo),
        xo = function() {};
    var Go, No = (Do.prototype.isAlwaysActiveGroup = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== dt && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === dt
        }
        return !0
    }, Do.prototype.getGrpStatus = function(e) {
        return e && e.Status ? po.DNTEnabled && e.IsDntEnabled ? gt : e.Status : ""
    }, Do.prototype.getParentGroup = function(t) {
        if (t) {
            var e = uo.Groups.filter(function(e) {
                return e.OptanonGroupId === t
            });
            return 0 < e.length ? e[0] : null
        }
        return null
    }, Do.prototype.checkIfGroupHasConsent = function(t) {
        var e = go.groupsConsent,
            o = io.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, Do.prototype.checkIsActiveByDefault = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== dt && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === dt || t === ut || t === pt || t === gt && !po.DNTEnabled
        }
        return !0
    }, Do.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = uo.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = b(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t) break
        }
        return t
    }, Do.prototype.isSoftOptInGrp = function(e) {
        if (e) {
            var t = e && !e.Parent ? e : Go.getParentGroup(e.Parent);
            return "inactive landingpage" === Go.getGrpStatus(t).toLowerCase()
        }
        return !1
    }, Do.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === Go.getGrpStatus(e).toLowerCase()
    }, Do.prototype.getParentByGrp = function(e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }, Do.prototype.getVSById = function(e) {
        return go.getVendorsInDomain().get(e)
    }, Do.prototype.getGrpByVendorId = function(e) {
        var t = null;
        return go.getVendorsInDomain().has(e) && (t = go.getVendorsInDomain().get(e).groupRef), t
    }, Do);

    function Do() {}
    var Ho, Fo = (Ro.prototype.ensureConsentId = function(e, t) {
        var o, n = !1,
            r = ro.readCookieParam(rt.OPTANON_CONSENT, $e, !0);
        if (o = !e && t ? (n = !0, 1) : 0, r) {
            var i = parseInt(ro.readCookieParam(rt.OPTANON_CONSENT, et), 10);
            isNaN(i) || (o = t ? ++i : i, n = !1)
        } else r = io.generateUUID(), ro.writeCookieParam(rt.OPTANON_CONSENT, $e, r);
        return ro.writeCookieParam(rt.OPTANON_CONSENT, et, o), {
            id: r,
            count: o,
            addDfltInt: n
        }
    }, Ro.prototype.isAnonymousConsent = function() {
        var e = !0,
            t = go.dsParams;
        return t && t.hasOwnProperty("isAnonymous") && (e = t.isAnonymous), e
    }, Ro.prototype.isAuthUsr = function(e) {
        go.consentPreferences ? ro.writeCookieParam(rt.OPTANON_CONSENT, "iType", "") : ro.writeCookieParam(rt.OPTANON_CONSENT, "iType", "" + K[e])
    }, Ro.prototype.createConsentTxn = function(e, t, o, n) {
        void 0 === t && (t = ""), void 0 === o && (o = !1), void 0 === n && (n = !0);
        var r = this.ensureConsentId(e, n),
            i = uo.ConsentIntegration,
            s = window.navigator.userAgent,
            a = /OneTrustBot/.test(s);
        if (i.ConsentApi && i.RequestInformation && r.id && !a) {
            var l = to.moduleInitializer;
            Ho.noOptOutToogle = l.TenantFeatures.CookieV2NoOptOut;
            var c = go.bannerCloseSource;
            Ho.isCloseByIconOrLink = c === m.BannerCloseButton || c === m.ContinueWithoutAcceptingButton;
            var d = {
                requestInformation: i.RequestInformation,
                identifier: r.id,
                customPayload: {
                    Interaction: r.count,
                    AddDefaultInteraction: r.addDfltInt
                },
                isAnonymous: this.isAnonymousConsent(),
                test: l.ScriptType === yt || l.ScriptType === ft,
                purposes: this.getConsetPurposes(e),
                dsDataElements: {}
            };
            go.isV2Stub && (d.syncGroup = go.syncGrpId, "IAB2" !== po.iabType || Oo.isIABCrossConsentEnabled() || (d.tcStringV2 = ro.getCookie(rt.EU_PUB_CONSENT)), uo.UseGoogleVendors && (d.gacString = ro.getCookie(rt.ADDITIONAL_CONSENT_STRING)));
            var p = Go.getGroupById(uo.AdvancedAnalyticsCategory);
            if (p && this.canSendAdvancedAnalytics(d.purposes, p) && (d.dsDataElements = {
                    InteractionType: t,
                    Country: go && go.userLocation ? go.userLocation.country : "",
                    UserAgent: s,
                    ConsentModel: uo.ConsentModel.Name
                }), !l.MobileSDK && n && d.purposes.length) {
                var u = JSON.stringify(d);
                e && navigator.sendBeacon ? (navigator.sendBeacon(i.ConsentApi, u), Oo.dispatchConsentEvent()) : !o && po.apiSource !== A.UpdateConsent && go.consentInteractionType === t || (go.isV2Stub && t && this.isAuthUsr(t), Co.ajax({
                    url: i.ConsentApi,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(d),
                    sync: e,
                    success: function() {
                        Oo.dispatchConsentEvent()
                    },
                    error: function() {
                        Oo.dispatchConsentEvent()
                    }
                }))
            }
            po.pubDomainData.ConsentIntegrationData = {
                consentApi: i.ConsentApi,
                consentPayload: d
            }
        }
        go.consentInteractionType = t
    }, Ro.prototype.getGrpDetails = function(e, i) {
        var s = [];
        return e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = "true" === t[1] ? "1" : "0",
                r = Ho.getOptanonIdForIabGroup(o, i);
            s.push(r + ":" + n)
        }), s
    }, Ro.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === L.Purpose ? o = "IABV2_" + e : t === L.SpecialFeature && (o = "ISFV2_" + e), o
    }, Ro.prototype.getConsetPurposes = function(r) {
        var e, t, i = this,
            s = [],
            o = [],
            n = go.oneTrustIABConsent;
        return e = n && n.purpose ? this.getGrpDetails(n.purpose, L.Purpose) : [], t = n && n.specialFeatures ? this.getGrpDetails(n.specialFeatures, L.SpecialFeature) : [], o = b(n.specialPurposes, n.features), b(go.groupsConsent, e, t).forEach(function(e) {
            var t = e.split(":"),
                o = Go.getGroupById(t[0]);
            if (o && o.PurposeId) {
                var n = i.getTransactionType(o, t, r);
                s.push({
                    Id: o.PurposeId,
                    TransactionType: n.txnType
                }), i.setVSConsentByGroup(o, n).forEach(function(e) {
                    return s.push(e)
                })
            }
        }), o.forEach(function(e) {
            e.purposeId && s.push({
                Id: e.purposeId,
                TransactionType: at
            })
        }), go.bannerCloseSource = m.Unknown, s
    }, Ro.prototype.setVSConsentByGroup = function(e, o) {
        var n = [];
        return go.showVendorService && e.VendorServices && e.VendorServices.forEach(function(e) {
            var t;
            t = o.useOwn ? go.vsConsent.get(e.CustomVendorServiceId) ? it : st : o.txnType, n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }), n
    }, Ro.prototype.getTransactionType = function(e, t, o) {
        var n = {
            txnType: at,
            useOwn: !1
        };
        return e.Status === dt ? n.txnType = at : e.Status === ht && Ho.isCloseByIconOrLink || o ? n.txnType = lt : e.Status === pt && Ho.isCloseByIconOrLink ? n.txnType = Ho.noOptOutToogle ? ct : it : (n.useOwn = !0, n.txnType = this.getTxnType(t[1])), n
    }, Ro.prototype.getTxnType = function(e) {
        return "0" === e ? st : it
    }, Ro.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [it, at];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, Ro.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }, Ro);

    function Ro() {}
    var qo, Mo = (Uo.prototype.isIabCookieValid = function() {
        var e = null;
        switch (po.iabType) {
            case "IAB2":
                e = ro.getCookie("eupubconsent-v2")
        }
        return null !== e
    }, Uo.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (ro.removeAlertBox(), ro.removeIab1())
    }, Uo.prototype.initializeIABModule = function() {
        return u(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return uo.IsIabEnabled ? (to.moduleInitializer.otIABModuleData = window.otIabModule, Oo.setIabData(), [4, Oo.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), Oo.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), Oo.populateIABCookies(), uo.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        ro.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, Uo.prototype.removeInActiveAddtlVendors = function() {
        var e = uo.OverridenGoogleVendors;
        for (var t in go.addtlVendorsList) e && e[t] && !e[t].active && delete go.addtlVendorsList[t]
    }, Uo.prototype.getIABConsentData = function() {
        var e = go.oneTrustIABConsent,
            t = Oo.iabStringSDK().tcString();
        go.tcModel.unsetAllPurposeConsents(), go.tcModel.unsetAllVendorConsents(), go.tcModel.unsetAllVendorLegitimateInterests(), go.tcModel.unsetAllSpecialFeatureOptins(), go.tcModel.unsetAllPurposeLegitimateInterests(), go.tcModel.publisherConsents.empty(), go.tcModel.publisherLegitimateInterests.empty(), go.tcModel.purposeConsents.set(io.getActiveIdArray(e.purpose)), go.tcModel.publisherConsents.set(io.getActiveIdArray(e.purpose));
        var o = po.legIntSettings.PAllowLI ? io.getActiveIdArray(e.legimateInterest) : [];
        go.tcModel.purposeLegitimateInterests.set(o), go.tcModel.publisherLegitimateInterests.set(o), go.tcModel.vendorConsents.set(io.getActiveIdArray(io.distinctArray(e.vendors))), po.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), go.tcModel.vendorLegitimateInterests.set(io.getActiveIdArray(io.distinctArray(e.legIntVendors))), go.tcModel.specialFeatureOptins.set(io.getActiveIdArray(e.specialFeatures));
        var n = new Date,
            r = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0);
        go.tcModel.lastUpdated = r, go.tcModel.created = r;
        var i = t.encode(go.tcModel);
        return go.cmpApi.update(i, !1), i
    }, Uo.prototype.decodeTCString = function(e) {
        return Oo.iabStringSDK().tcString().decode(e)
    }, Uo.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, Uo.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }), e.apply(this, t)
    }, Uo.prototype.populateVendorAndPurposeFromCookieData = function() {
        var r = go.oneTrustIABConsent,
            e = qo.decodeTCString(r.IABCookieValue),
            i = {},
            s = {};
        po.iabGrps.forEach(function(e) {
            e.Type === Kt ? i[po.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === Wt && (s[po.iabGrpIdMap[e.CustomGroupId]] = e)
        });
        var a = [];
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            go.vendorsSetting[t] && go.vendorsSetting[t].consent || !e || (a.push(t), o = !1), r.vendors.push(t + ":" + o)
        }), e.vendorConsents.unset(a), a = [], e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            go.vendorsSetting[t] && go.vendorsSetting[t].legInt || !e || (a.push(t), o = !1), r.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(a), a = [], e.purposeConsents.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasConsentOptOut || !e || (a.push(o), t = !1);
            var n = io.findIndex(r.purpose, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.purpose.push(o + ":" + t) : r.purpose[n] = o + ":" + t
        }), e.purposeConsents.unset(a), e.publisherConsents.unset(a), a = [], e.specialFeatureOptins.forEach(function(e, o) {
            var t = e;
            s[o] && s[o].HasConsentOptOut || !e || (a.push(o), t = !1);
            var n = io.findIndex(r.specialFeatures, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.specialFeatures.push(o + ":" + t) : r.specialFeatures[n] = o + ":" + t
        }), e.specialFeatureOptins.unset(a), a = [], e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasLegIntOptOut && po.legIntSettings.PAllowLI || !e || (a.push(o), t = !1);
            var n = io.findIndex(r.legimateInterest, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.legimateInterest.push(o + ":" + t) : r.legimateInterest[n] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(a), e.publisherLegitimateInterests.unset(a), this.syncBundleAndStack(), e.gvl = go.tcModel.gvl, e.isServiceSpecific = !Oo.isIABCrossConsentEnabled(), go.tcModel = e;
        var t = Oo.iabStringSDK().tcString().encode(e);
        Oo.isAlertBoxClosedAndValid() ? (r.IABCookieValue !== t && (r.IABCookieValue = t, Oo.isIABCrossConsentEnabled() ? Oo.setIAB3rdPartyCookie(rt.EU_CONSENT, r.IABCookieValue, uo.ReconsentFrequencyDays, !1) : ro.setCookie(rt.EU_PUB_CONSENT, r.IABCookieValue, uo.ReconsentFrequencyDays)), go.cmpApi.update(t, !1)) : Oo.resetTCModel()
    }, Uo.prototype.syncBundleAndStack = function() {
        var e = ro.readCookieParam(rt.OPTANON_CONSENT, "groups");
        go.groupsConsent = io.strToArr(e), uo.Groups.forEach(function(t) {
            if (t.Type === Ut || t.Type === Yt) {
                var e = Ao.isBundleOrStackActive(t),
                    o = io.findIndex(go.groupsConsent, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    }),
                    n = t.CustomGroupId + ":" + Number(e); - 1 < o ? go.groupsConsent[o] = n : go.groupsConsent.push(n)
            }
        }), ro.writeCookieParam(rt.OPTANON_CONSENT, "groups", go.groupsConsent.join(","))
    }, Uo.prototype.populateGoogleConsent = function() {
        if (uo.UseGoogleVendors) {
            var e = ro.getCookie(rt.ADDITIONAL_CONSENT_STRING);
            e && (go.isAddtlConsent = !0, go.addtlVendors.vendorConsent = e.replace(go.addtlConsentVersion, "").split("."))
        }
    }, Uo.prototype.isInitIABCookieData = function(e) {
        return "init" === e || Oo.needReconsent()
    }, Uo.prototype.updateFromGlobalConsent = function(e) {
        var t = go.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], qo.populateVendorAndPurposeFromCookieData(), ro.setCookie(rt.EU_PUB_CONSENT, "", -1)
    }, Uo);

    function Uo() {}
    var jo, zo = "groups",
        Ko = "hosts",
        Wo = "genVendors",
        Jo = "vs",
        Yo = (Xo.prototype.writeHstParam = function(e, t) {
            void 0 === t && (t = null), ro.writeCookieParam(e, "hosts", io.arrToStr(t || go.hostsConsent))
        }, Xo.prototype.writeGenVenCookieParam = function(e) {
            var t = uo.GeneralVendors,
                o = go.genVendorsConsent,
                n = "";
            t.forEach(function(e) {
                n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
            }), ro.writeCookieParam(e, "genVendors", n)
        }, Xo.prototype.writeVSConsentCookieParam = function(e) {
            var o = "";
            go.vsConsent.forEach(function(e, t) {
                return o += t + ":" + (e ? "1" : "0") + ","
            }), o = o.slice(0, -1), ro.writeCookieParam(e, Jo, o)
        }, Xo.prototype.updateGroupsInCookie = function(e, t) {
            void 0 === t && (t = null), ro.writeCookieParam(e, "groups", io.arrToStr(t || go.groupsConsent))
        }, Xo.prototype.writeGrpParam = function(e, t) {
            void 0 === t && (t = null), this.updateGroupsInCookie(e, t), uo.IsIabEnabled && Oo.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
        }, Xo.prototype.insertOrUpdateIabCookies = function() {
            var e = go.oneTrustIABConsent;
            if (e.purpose && e.vendors) {
                go.isAddtlConsent = uo.UseGoogleVendors, e.IABCookieValue = qo.getIABConsentData();
                var t = uo.ReconsentFrequencyDays;
                Oo.isIABCrossConsentEnabled() ? Oo.setIAB3rdPartyCookie(rt.EU_CONSENT, e.IABCookieValue, t, !1) : (ro.setCookie(rt.EU_PUB_CONSENT, e.IABCookieValue, t), uo.UseGoogleVendors && ro.setCookie(rt.ADDITIONAL_CONSENT_STRING, "" + go.addtlConsentVersion + go.addtlVendors.vendorConsent.join("."), t))
            }
        }, Xo);

    function Xo() {}
    var Qo, $o = (Zo.prototype.initGenVendorConsent = function() {
        var n = this;
        if (uo.GenVenOptOut) {
            var e = po.consentableGrps,
                t = ro.readCookieParam(rt.OPTANON_CONSENT, "genVendors");
            t ? (go.genVendorsConsent = {}, t.split(",").forEach(function(e) {
                if (e) {
                    var t = e.split(":");
                    "1" === t[1] && (go.genVendorsConsent[t[0]] = !0)
                }
            })) : (go.genVendorsConsent = {}, e.forEach(function(e) {
                var o = go.syncRequired ? Go.checkIfGroupHasConsent(e) : Go.checkIsActiveByDefault(e);
                e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                    go.genVendorsConsent[e] = t || o
                })
            }))
        } else go.genVendorsConsent = {}, jo.writeGenVenCookieParam(rt.OPTANON_CONSENT)
    }, Zo.prototype.populateGenVendorLists = function() {
        po.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (Go.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                go.alwaysActiveGenVendors.push(e)
            }) : Go.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                go.optInGenVendors.push(e)
            }) : Go.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                go.optInGenVendors.includes(e) || go.softOptInGenVendors.push(e)
            }))
        })
    }, Zo.prototype.updateGenVendorStatus = function(e, t) {
        go.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, Zo.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return go.alwaysActiveGenVendors.includes(e)
    }, Zo);

    function Zo() {}
    var en, tn = (on.prototype.synchroniseCookieGroupData = function(e) {
        var t = ro.readCookieParam(rt.OPTANON_CONSENT, "groups"),
            r = io.strToArr(t),
            i = io.strToArr(t.replace(/:0|:1/g, "")),
            o = Oo.needReconsent(),
            s = !1,
            a = !1;
        e.forEach(function(e) {
            var t = e.CustomGroupId;
            if (e.Type !== Ut && e.Type !== Yt)
                if (-1 === io.indexOf(i, t)) {
                    s = !0;
                    var o = Go.checkIsActiveByDefault(e);
                    a = !0, r.push(t + (o ? ":1" : ":0"))
                } else if (po.gpcEnabled && e.IsGpcEnabled && po.gpcValueChanged) {
                var n = r.indexOf(t + ":1"); - 1 < n && (a = !0, r[n] = t + ":0")
            }
        }), a = this.updateConsentForBundleGrps(e, r, i, a, o), (a = this.removeRedundantGrpsFromCookie(r, o, a)) && (go.fireOnetrustGrp = !0, jo.updateGroupsInCookie(rt.OPTANON_CONSENT, r), go.syncRequired && s && ro.removeAlertBox())
    }, on.prototype.removeRedundantGrpsFromCookie = function(e, o, t) {
        for (var n = e.length, r = t, i = function() {
                var t = e[n].replace(/:0|:1/g, "");
                uo.Groups.some(function(e) {
                    return (!o || e.Type !== Yt) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                        return e.CustomGroupId === t
                    }))
                }) || (r = !0, e.splice(n, 1))
            }; n--;) i();
        return r
    }, on.prototype.updateConsentForBundleGrps = function(e, s, a, t, l) {
        var c = t;
        return e.forEach(function(e) {
            var t = e.Type === Ut || e.Type === Yt,
                o = e.CustomGroupId;
            if (t)
                if (-1 === io.indexOf(a, o)) {
                    var n = Ao.isBundleOrStackActive(e, s);
                    c = !0, s.push(o + (n ? ":1" : ":0"))
                } else if (l && "false" === Oo.getIABCrossConsentflagData() || po.gpcEnabled && po.gpcValueChanged || go.syncRequired) {
                var r = Ao.isBundleOrStackActive(e, s),
                    i = s.indexOf(o + ":" + (r ? "0" : "1")); - 1 < i && (c = !0, s[i] = o + (r ? ":1" : ":0"))
            }
        }), c
    }, on.prototype.groupHasConsent = function(t) {
        var e = io.strToArr(ro.readCookieParam(rt.OPTANON_CONSENT, "groups")),
            o = io.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, on.prototype.synchroniseCookieHostData = function() {
        var n = this,
            e = ro.readCookieParam(rt.OPTANON_CONSENT, "hosts"),
            r = io.strToArr(e),
            i = io.strToArr(e.replace(/:0|:1/g, "")),
            s = !1;
        uo.Groups.forEach(function(e) {
            b(e.SubGroups, [e]).forEach(function(o) {
                o.Hosts.length && o.Hosts.forEach(function(e) {
                    if (-1 === io.indexOf(i, e.HostId)) {
                        s = !0;
                        var t = go.syncRequired ? n.groupHasConsent(o) : Go.checkIsActiveByDefault(o);
                        r.push(e.HostId + (t ? ":1" : ":0"))
                    }
                })
            })
        });
        for (var o = r.length, t = function() {
                var t = r[o].replace(/:0|:1/g, "");
                uo.Groups.some(function(e) {
                    return b(e.SubGroups, [e]).some(function(e) {
                        return e.Hosts.some(function(e) {
                            return e.HostId === t
                        })
                    })
                }) || (s = !0, r.splice(o, 1))
            }; o--;) t();
        s && (go.fireOnetrustGrp = !0, jo.writeHstParam(rt.OPTANON_CONSENT, r))
    }, on.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }, on.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            Qo.updateGenVendorStatus(e, t)
        })
    }, on.prototype.updateHostStatus = function(t, e) {
        var o = io.findIndex(go.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        if (-1 < o) {
            var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
            go.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
        }
    }, on.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return go.oneTrustAlwaysActiveHosts.includes(e)
    }, on);

    function on() {}
    var nn, rn = function() {
            this.assets = function() {
                return {
                    name: "otCookiePolicy",
                    html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                    css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                    cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                }
            }
        },
        sn = (an.prototype.isLandingPage = function() {
            var e = ro.readCookieParam(rt.OPTANON_CONSENT, "landingPath");
            return !e || e === location.href
        }, an.prototype.setLandingPathParam = function(e) {
            ro.writeCookieParam(rt.OPTANON_CONSENT, "landingPath", e)
        }, an);

    function an() {}
    var ln, cn = (dn.prototype.loadBanner = function() {
        to.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? fo(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            fo(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? fo(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            fo(window).trigger("otloadbanner")
        }), po.pubDomainData.IsBannerLoaded = !0
    }, dn.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        ln.consentChangedEventMap[t] || (ln.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, dn.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        var r = !1;
        if (to.moduleInitializer.GATrackToggle && ("AS" === to.moduleInitializer.GATrackAssignedCategory || "" === to.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + to.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0), !po.ignoreGoogleAnlyticsCall && r) {
            void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n);
            var i = window[po.otDataLayer.name];
            !po.otDataLayer.ignore && void 0 !== i && i && i.constructor === Array && i.push({
                event: "trackOptanonEvent",
                optanonCategory: e,
                optanonAction: t,
                optanonLabel: o,
                optanonValue: n
            })
        }
    }, dn.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString();
        e ? ro.setCookie(rt.ALERT_BOX_CLOSED, t, uo.ReconsentFrequencyDays) : ro.setCookie(rt.ALERT_BOX_CLOSED, t, 0);
        var o = fo(".onetrust-pc-dark-filter").el[0];
        o && "none" !== getComputedStyle(o).getPropertyValue("display") && fo(".onetrust-pc-dark-filter").fadeOut(400)
    }, dn.prototype.updateConsentFromCookie = function(t) {
        return u(this, void 0, void 0, function() {
            return g(this, function(e) {
                return t ? (qo.isInitIABCookieData(t) || qo.updateFromGlobalConsent(t), "init" === t && (ro.removeIab1(), Oo.isAlertBoxClosedAndValid() && Oo.resetTCModel(), ro.removeAlertBox())) : (Oo.resetTCModel(), Oo.updateCrossConsentCookie(!1), Oo.setIABCookieData()), ln.assetPromise.then(function() {
                    ln.loadBanner()
                }), [2]
            })
        })
    }, dn);

    function dn() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        })
    }
    var pn, un = "opt-out",
        hn = "OneTrust Cookie Consent",
        gn = "Banner Auto Close",
        Cn = "Banner Close Button",
        yn = "Banner - Continue without Accepting",
        fn = "Banner - Confirm",
        vn = "Preferences Close Button",
        kn = "Preference Center Opened From Banner",
        mn = "Preference Center Opened From Button",
        bn = "Preference Center Opened From Function",
        Sn = "Preferences Save Settings",
        Pn = "Vendors List Opened From Function",
        Tn = "Floating Cookie Settings Open Button",
        An = "Floating Cookie Settings Close Button",
        In = "Preferences Toggle On",
        Ln = "Preferences Toggle Off",
        _n = "General Vendor Toggle On",
        En = "General Vendor Toggle Off",
        Vn = "Host Toggle On",
        Bn = "Host Toggle Off",
        wn = "Preferences Legitimate Interest Objection",
        On = "Preferences Legitimate Interest Remove Objection",
        xn = "IAB Vendor Toggle ON",
        Gn = "IAB Vendor Toggle Off",
        Nn = "IAB Vendor Legitimate Interest Objection",
        Dn = "IAB Vendor Legitimate Interest Remove Objection",
        Hn = "Vendor Service Toggle On",
        Fn = "Vendor Service Toggle Off",
        Rn = (qn.prototype.initializeFeaturesAndSpecialPurposes = function() {
            go.oneTrustIABConsent.features = [], go.oneTrustIABConsent.specialPurposes = [], uo.Groups.forEach(function(e) {
                if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                    var t = {};
                    t.groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, "IAB2_FEATURE" === e.Type ? go.oneTrustIABConsent.features.push(t) : go.oneTrustIABConsent.specialPurposes.push(t)
                }
            })
        }, qn.prototype.initGrpsAndHosts = function() {
            this.initializeGroupData(po.consentableGrps), uo.showCookieList && Ao.isOptOutEnabled() ? this.initializeHostData(po.consentableGrps) : (go.hostsConsent = [], jo.writeHstParam(rt.OPTANON_CONSENT))
        }, qn.prototype.ensureHtmlGroupDataInitialised = function() {
            if (this.initGrpsAndHosts(), go.showGeneralVendors && (Qo.populateGenVendorLists(), Qo.initGenVendorConsent()), uo.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), go.vsIsActiveAndOptOut && this.initializeVendorsService(), Oo.setOrUpdate3rdPartyIABConsentFlag(), Oo.setGeolocationInCookies(), uo.IsConsentLoggingEnabled) {
                var e = window.OneTrust.dataSubjectParams || {},
                    t = ro.readCookieParam(rt.OPTANON_CONSENT, "iType"),
                    o = "",
                    n = !1;
                t && go.isV2Stub && e.id && e.token && (n = !0, o = K[t]), Ho.createConsentTxn(!1, o, !1, n)
            }
        }, qn.prototype.initializeVendorsService = function() {
            var n = Oo.isAlertBoxClosedAndValid(),
                e = ro.readCookieParam(rt.OPTANON_CONSENT, Jo),
                r = io.strToMap(e);
            go.getVendorsInDomain().forEach(function(e, t) {
                if (!r.has(t)) {
                    var o = !n && Go.checkIsActiveByDefault(e.groupRef);
                    r.set(t, o)
                }
            }), go.vsConsent = r
        }, qn.prototype.initializeGroupData = function(e) {
            var t = ro.readCookieParam(rt.OPTANON_CONSENT, zo);
            t ? (en.synchroniseCookieGroupData(e), t = ro.readCookieParam(rt.OPTANON_CONSENT, zo), go.groupsConsent = io.strToArr(t)) : (go.groupsConsent = [], e.forEach(function(e) {
                go.groupsConsent.push(e.CustomGroupId + (Go.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
            }), uo.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }, qn.prototype.initializeHostData = function(e) {
            var t = ro.readCookieParam(rt.OPTANON_CONSENT, "hosts");
            if (t) en.synchroniseCookieHostData(), t = ro.readCookieParam(rt.OPTANON_CONSENT, "hosts"), go.hostsConsent = io.strToArr(t), e.forEach(function(e) {
                Go.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    go.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            });
            else {
                go.hostsConsent = [];
                var r = {};
                e.forEach(function(e) {
                    var o = Go.isAlwaysActiveGroup(e),
                        n = go.syncRequired ? en.groupHasConsent(e) : Go.checkIsActiveByDefault(e);
                    e.Hosts.length && e.Hosts.forEach(function(e) {
                        if (r[e.HostId]) en.updateHostStatus(e, n);
                        else {
                            r[e.HostId] = !0, o && go.oneTrustAlwaysActiveHosts.push(e.HostId);
                            var t = en.isHostPartOfAlwaysActiveGroup(e.HostId);
                            go.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                        }
                    })
                })
            }
        }, qn.prototype.consentDefaulCall = function() {
            var e = parseInt(ro.readCookieParam(rt.OPTANON_CONSENT, et), 10);
            !isNaN(e) && 0 !== e || (ln.triggerGoogleAnalyticsEvent(hn, "Click", "No interaction"), uo.IsConsentLoggingEnabled && Ho.createConsentTxn(!0), window.removeEventListener("beforeunload", pn.consentDefaulCall))
        }, qn.prototype.fetchAssets = function(h) {
            return void 0 === h && (h = null), u(this, void 0, void 0, function() {
                var t, o, n, r, i, s, a, l, c, d, p, u;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return s = to.moduleInitializer, a = Oo.isAlertBoxClosedAndValid(), l = !!h, c = pn.isFetchBanner(s.IsSuppressBanner, a), d = pn.cookieSettingBtnPresent(), i = "IAB2" === uo.IabType ? uo.PCShowPersistentCookiesHoverButton && (!uo.PCenterDynamicRenderingEnable || uo.PCenterDynamicRenderingEnable && !d) : uo.PCShowPersistentCookiesHoverButton, p = "true" === go.urlParams.get(xt), go.hideBanner = p, [4, Promise.all([!c || uo.NoBanner || p ? Promise.resolve(null) : So.getBannerContent(l, h), !s.IsSuppressPC || go.isPCVisible ? So.getPcContent() : Promise.resolve(null), i ? So.getCSBtnContent() : Promise.resolve(null), So.getCommonStyles()])];
                        case 1:
                            return u = e.sent(), t = u[0], o = u[1], n = u[2], r = u[3], pn.fetchContent(t, o, n, r), pn.setCookieListGroupData(), [2]
                    }
                })
            })
        }, qn.prototype.fetchContent = function(e, t, o, n) {
            if (e) {
                var r = e.html;
                to.fp.CookieV2SSR || (r = atob(e.html)), this.bannerGroup = {
                    name: e.name,
                    html: r,
                    css: e.css
                }
            }
            t && (this.preferenceCenterGroup = {
                name: t.name,
                html: atob(t.html),
                css: t.css
            }, to.isV2Template = uo.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)), o && (this.csBtnGroup = {
                name: "CookieSettingsButton",
                html: atob(o.html),
                css: o.css
            }), n && (this.commonStyles = n)
        }, qn.prototype.cookieSettingBtnPresent = function() {
            return fo("#ot-sdk-btn").length || fo(".ot-sdk-show-settings").length || fo(".optanon-show-settings").length
        }, qn.prototype.isFetchBanner = function(e, t) {
            return !e || uo.ShowAlertNotice && !t && e && !fo("#onetrust-banner-sdk").length
        }, qn.prototype.setCookieListGroupData = function() {
            if (!to.fp.CookieV2TrackingTechnologies) {
                var e = (new rn).assets();
                pn.cookieListGroup = {
                    name: e.name,
                    html: e.html,
                    css: uo.useRTL ? e.cssRTL : e.css
                }
            }
        }, qn.prototype.initializeIabPurposeConsentOnReload = function() {
            var t = this;
            po.consentableIabGrps.forEach(function(e) {
                t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
            })
        }, qn.prototype.initializeIABData = function(o, n, r) {
            var i = this;
            void 0 === o && (o = !1), void 0 === n && (n = !1), void 0 === r && (r = !1);
            var e = go.oneTrustIABConsent;
            e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [];
            var t = go.addtlVendors,
                s = uo.VendorConsentModel === un;
            if (t.vendorConsent = [], !e.IABCookieValue || o || n || Oo.reconsentRequired()) {
                po.consentableIabGrps.forEach(function(e) {
                    if (n && !r) i.setIABConsent(e, Go.isAlwaysActiveGroup(e));
                    else if (r) e.HasConsentOptOut && i.setIABConsent(e, !1);
                    else {
                        var t = o && e.HasConsentOptOut;
                        i.setIABConsent(e, t), "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0, i.setIABConsent(e, e.HasLegIntOptOut))
                    }
                }), uo.IsIabEnabled && r && (go.oneTrustIABConsent.legimateInterest = go.vendors.selectedLegInt.slice());
                var a = o || !n && s;
                r && (a = s), Oo.setIABVendor(a, r), !Oo.reconsentRequired() || o || n || Oo.resetTCModel()
            } else this.initializeIabPurposeConsentOnReload(), qo.populateGoogleConsent(), qo.populateVendorAndPurposeFromCookieData()
        }, qn.prototype.canSoftOptInInsertForGroup = function(e) {
            var t = Go.getGroupById(e);
            if (t) {
                var o = t && !t.Parent ? t : Go.getParentGroup(t.Parent);
                return "inactive landingpage" !== Go.getGrpStatus(o).toLowerCase() || !nn.isLandingPage()
            }
        }, qn.prototype.setIABConsent = function(e, t) {
            e.Type === Wt ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }, qn.prototype.setIabPurposeConsent = function(o, n) {
            var r = !1;
            go.oneTrustIABConsent.purpose = go.oneTrustIABConsent.purpose.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || go.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }, qn.prototype.setIabLegIntConsent = function(o, n) {
            var r = !1;
            go.oneTrustIABConsent.legimateInterest = go.oneTrustIABConsent.legimateInterest.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || go.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }, qn.prototype.setIabSpeciFeatureConsent = function(o, n) {
            var r = !1;
            go.oneTrustIABConsent.specialFeatures = go.oneTrustIABConsent.specialFeatures.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || go.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }, qn);

    function qn() {}
    var Mn, Un = (jn.prototype.getAllowAllButton = function() {
        return fo("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, jn.prototype.getSelectedVendors = function() {
        return fo("#onetrust-pc-sdk " + _o.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }, jn);

    function jn() {}
    var zn, Kn = (Wn.prototype.setBannerFocus = function() {
        var e = Array.prototype.slice.call(fo("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
            t = Array.prototype.slice.call(fo('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
            o = Array.prototype.slice.call(fo("#onetrust-banner-sdk .ot-bnr-save-handler").el),
            n = Array.prototype.slice.call(fo("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
            r = Array.prototype.concat.call(Array.prototype.slice.call(fo("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(fo("#onetrust-banner-sdk .ot-cat-lst button").el), e),
            i = Array.prototype.concat.call(t, r),
            s = Array.prototype.slice.call(fo("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
        po.bannerName === Tt && (i = Array.prototype.concat.call(e, t));
        var a = Array.prototype.slice.call(fo("#onetrust-banner-sdk #onetrust-accept-btn-handler").el),
            l = Array.prototype.slice.call(fo("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
            c = Array.prototype.concat.call(o, a, l, n);
        (po.bannerName !== St || uo.IsIabEnabled) && po.bannerName !== bt && po.bannerName !== It || (c = Array.prototype.concat.call(n, l, a));
        var d = Array.prototype.slice.call(fo("#onetrust-banner-sdk .ot-gv-list-handler").el);
        po.bannerName === Lt ? (i = Array.prototype.concat.call(d, i), c = Array.prototype.slice.call(fo("#onetrust-banner-sdk #onetrust-button-group button").el)) : i = Array.prototype.concat.call(i, d), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(fo("#onetrust-banner-sdk #onetrust-cookie-btn").el), i, Array.prototype.slice.call(fo("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(fo("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), s), this.banner = fo("#onetrust-banner-sdk").el[0], (uo.BInitialFocus || uo.BInitialFocusLinkAndButton || uo.ForceConsent) && (uo.BInitialFocus ? this.banner.focus() : this.bannerEl[0].focus())
    }, Wn.prototype.handleBannerFocus = function(e, t) {
        var o = e.target,
            n = zn.bannerEl,
            r = n.indexOf(o),
            i = n.length - 1,
            s = null;
        if (this.handleBannerFocusBodyReset(t, r, i)) Ao.resetFocusToBody();
        else if (this.banner === o) s = this.handleInitialBannerFocus(t, n, i, s);
        else
            for (; !s;) {
                var a = void 0;
                0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
            }
        s && (e.preventDefault(), s.focus())
    }, Wn.prototype.handleBannerFocusBodyReset = function(e, t, o) {
        return !(uo.ForceConsent || !uo.BInitialFocus && !uo.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
    }, Wn.prototype.handleInitialBannerFocus = function(e, t, o, n) {
        return e && uo.ForceConsent ? n = t[o] : e || (n = t[0]), n
    }, Wn.prototype.setPCFocus = function(e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = uo.ShowPreferenceCenterCloseButton,
                n = o ? this.getElementForFocus(e, uo.PCLayout.Popup ? 2 : 1, !0) : null,
                r = {
                    preventScroll: !0
                };
            this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(), this.firstItem && fo(this.firstItem).on("keydown", zn.firstItemHandler), this.lastItem && fo(this.lastItem).on("keydown", zn.lastItemHandler)
        }
    }, Wn.prototype.setFirstAndLast = function(e) {
        this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }, Wn.prototype.setLastItem = function() {
        var e = this.getPCElements(),
            t = this.getElementForFocus(e, e.length - 1, !1);
        t !== this.lastItem && (fo(this.lastItem).off("keydown", zn.lastItemHandler), this.lastItem = t, fo(t).on("keydown", zn.lastItemHandler))
    }, Wn.prototype.getPCElements = function() {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + _o.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return go.pcLayer === O.CookieList ? e += " ,#onetrust-pc-sdk " + _o.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(fo(e).el)
    }, Wn.prototype.getActiveTab = function() {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }, Wn.prototype.getElementForFocus = function(e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
        return n
    }, Wn.prototype.firstItemHandler = function(e) {
        var t = document.getElementById("onetrust-banner-sdk");
        if (9 === e.keyCode && e.shiftKey && zn.firstItem !== t) e.preventDefault(), zn.lastItem.focus();
        else {
            var o = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
            if (uo.PCLayout.Tab && go.pcLayer === O.PrefCenterHome && !o) {
                var n = zn.getActiveTab();
                n && (e.preventDefault(), n.focus())
            }
        }
    }, Wn.prototype.lastItemHandler = function(e) {
        if (9 === e.keyCode && !e.shiftKey) {
            e.preventDefault();
            var t = go.pcLayer === O.VendorList || go.pcLayer === O.CookieList;
            uo.PCLayout.Tab && go.isPCVisible && !uo.ShowPreferenceCenterCloseButton && !t ? zn.getActiveTab().focus() : zn.firstItem.focus()
        }
    }, Wn);

    function Wn() {
        this.bannerEl = []
    }
    var Jn, Yn = (Xn.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + _o.P_Category_Grp + " " + _o.P_Category_Item + ":not(.ot-vnd-item)")
    }, Xn.prototype.toggleGrpElements = function(e, t, o, n) {
        void 0 === n && (n = !1), po.pcName === Ot && uo.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && (!n || s) || (io.setCheckedAttribute(null, r[i], o), r[i] && uo.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? uo.PCActiveText : uo.PCInactiveText))
        }
        po.legIntSettings.PAllowLI && po.legIntSettings.PShowLegIntBtn && t.Type === Kt && t.HasLegIntOptOut && !n && Jn.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, Xn.prototype.toogleAllSubGrpElements = function(e, t) {
        if (e.ShowSubgroup) {
            var o = e.CustomGroupId,
                n = this.getGroupElementByOptanonGroupId(o.toString());
            Jn.toogleSubGroupElement(n, t, e.IsLegIntToggle)
        } else this.updateHiddenSubGroupData(e, t)
    }, Xn.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1), po.pcName === Ot && uo.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll("li" + _o.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = Go.getGroupById(r[i].getAttribute("data-optanongroupid")),
                a = s.OptanonGroupId,
                l = Go.getParentGroup(s.Parent);
            po.legIntSettings.PAllowLI && po.legIntSettings.PShowLegIntBtn && o && s.Type === Kt && s.HasLegIntOptOut && l.ShowSubgroupToggle && Jn.updateLegIntBtnElement(r[i], t);
            var c = o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']",
                d = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + c);
            io.setCheckedAttribute(null, d, t), d && uo.PCShowConsentLabels && (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? uo.PCActiveText : uo.PCInactiveText), n || (s.IsLegIntToggle = o, Jn.toggleGrpStatus(s, t), s.IsLegIntToggle = !1, en.toggleGroupHosts(s, t), go.genVenOptOutEnabled && en.toggleGroupGenVendors(s, t))
        }
    }, Xn.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === Kt ? t ? On : wn : t ? In : Ln;
        ln.triggerGoogleAnalyticsEvent(hn, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, Xn.prototype.setInputID = function(e, t, o, n, r) {
        fo(e).attr("id", t), fo(e).attr("name", t), fo(e).data("optanonGroupId", o), io.setCheckedAttribute(null, e, n), fo(e).attr("aria-labelledby", r)
    }, Xn.prototype.updateEnabledGroupData = function(e) {
        if (-1 < $t.indexOf(e.Type)) this.updateIabGroupData(e, !0);
        else {
            var t = Jn.getGroupVariable(),
                o = io.indexOf(t, e.CustomGroupId + ":0"); - 1 !== o && (t[o] = e.CustomGroupId + ":1")
        }
    }, Xn.prototype.updateDisabledGroupData = function(e) {
        if (-1 < $t.indexOf(e.Type)) this.updateIabGroupData(e, !1);
        else if (e.Status !== dt) {
            var t = Jn.getGroupVariable(),
                o = io.indexOf(t, e.CustomGroupId + ":1"); - 1 !== o && (t[o] = e.CustomGroupId + ":0")
        }
    }, Xn.prototype.updateIabGroupData = function(e, t) {
        if (e.Type === Wt) this.updateIabSpecialFeatureData(e.IabGrpId, t);
        else {
            var o = e.IsLegIntToggle ? go.vendors.selectedLegInt : go.vendors.selectedPurpose;
            this.updateIabPurposeData(e.IabGrpId, t, o)
        }
    }, Xn.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return Jn.isGroupActive(e)
        })
    }, Xn.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return Jn.IsGroupInActive(e)
        })
    }, Xn.prototype.toggleGroupHtmlElement = function(e, t, o) {
        if (po.legIntSettings.PAllowLI && po.legIntSettings.PShowLegIntBtn && e.Type === Kt && e.HasLegIntOptOut) {
            var n = document.querySelector("[data-el-id=" + t + "]");
            n && this.updateLegIntBtnElement(n, o)
        }
        var r = fo("#ot-group-id-" + t).el[0];
        io.setCheckedAttribute(null, r, o), r && uo.PCShowConsentLabels && (r.parentElement.querySelector(".ot-label-status").innerHTML = o ? uo.PCActiveText : uo.PCInactiveText)
    }, Xn.prototype.updateLegIntBtnElement = function(e, t) {
        var o = po.legIntSettings,
            n = e.querySelector(".ot-obj-leg-btn-handler"),
            r = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, oo(r, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }, Xn.prototype.isGroupActive = function(e) {
        return -1 < $t.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== Co.inArray(e.CustomGroupId + ":1", Jn.getGroupVariable())
    }, Xn.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, Xn.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o, n = null != e && void 0 !== e,
            r = ro.readCookieParam(rt.OPTANON_CONSENT, "groups"),
            i = go.groupsConsent.join(","),
            s = ro.readCookieParam(rt.OPTANON_CONSENT, "hosts"),
            a = go.hostsConsent.join(",");
        if (t) return !0;
        r === i && s === a || pn.ensureHtmlGroupDataInitialised();
        var l = [];
        if (go.showGeneralVendors)
            for (var c = 0, d = Object.entries(go.genVendorsConsent); c < d.length; c++) {
                var p = d[c],
                    u = p[0],
                    h = p[1];
                l.push(u + ":" + (h ? "1" : "0"))
            }
        go.showVendorService && go.vsConsent.forEach(function(e, t) {
            l.push(t + ":" + (e ? "1" : "0"))
        });
        var g = go.groupsConsent.concat(go.hostsConsent).concat(l);
        o = io.contains(g, e + ":1");
        var C = this.doesHostExist(e),
            y = this.doesGroupExist(e),
            f = !1;
        go.showGeneralVendors ? f = this.doesGenVendorExist(e) : go.showVendorService && (f = this.doesVendorServiceExist(e));
        var v = !(!C && !f) || o && pn.canSoftOptInInsertForGroup(e);
        return !(!n || !(o && v || !y && !C && !f))
    }, Xn.prototype.setAllowAllButton = function() {
        var t = 0,
            e = uo.Groups.some(function(e) {
                if (-1 === Zt.indexOf(e.Type)) return Jn.IsGroupInActive(e) && t++, e.SubGroups.some(function(e) {
                    return Jn.IsGroupInActive(e)
                }) && t++, 1 <= t
            }),
            o = Mn.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), zn.lastItem && zn.setLastItem(), e
    }, Xn.prototype.isAnyGroupOptedOut = function() {
        for (var e = !1, t = 0, o = uo.Groups; t < o.length; t++) {
            var n = o[t];
            if (!0 === Jn.IsGroupInActive(n)) {
                e = !0;
                break
            }
        }
        return e
    }, Xn.prototype.getGroupVariable = function() {
        return go.groupsConsent
    }, Xn.prototype.IsGroupInActive = function(e) {
        return -1 < $t.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < Zt.indexOf(e.Type)) && -1 === Co.inArray(e.CustomGroupId + ":1", Jn.getGroupVariable())
    }, Xn.prototype.updateIabPurposeData = function(t, e, o) {
        var n = io.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[n = -1 === n ? Number(t) : n] = t + ":" + e
    }, Xn.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = io.findIndex(go.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        });
        o = -1 === o ? Number(t) : o, go.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, Xn.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + _o.P_Category_Grp + " " + _o.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, Xn.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            Jn.toggleGrpStatus(e, t), en.toggleGroupHosts(e, t), go.genVenOptOutEnabled && en.toggleGroupGenVendors(e, t)
        })
    }, Xn.prototype.isIabPurposeActive = function(e) {
        var t;
        return t = e.Type === Wt ? go.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? go.vendors.selectedLegInt : go.vendors.selectedPurpose, Co.inArray(e.IabGrpId + ":true", t)
    }, Xn.prototype.doesGroupExist = function(e) {
        return !!Go.getGroupById(e)
    }, Xn.prototype.doesHostExist = function(e) {
        var t = go.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, Xn.prototype.doesGenVendorExist = function(t) {
        return !!uo.GeneralVendors && !!uo.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }, Xn.prototype.doesVendorServiceExist = function(e) {
        return go.getVendorsInDomain().has(e)
    }, Xn);

    function Xn() {}
    var Qn, $n = (Zn.prototype.updateFilterSelection = function(e) {
        var t, o;
        void 0 === e && (e = !1), o = e ? (t = go.filterByCategories, "data-optanongroupid") : (t = go.filterByIABCategories, "data-purposeid");
        for (var n = fo("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o),
                s = -1 < t.indexOf(i);
            io.setCheckedAttribute(null, n[r], s)
        }
    }, Zn.prototype.cancelHostFilter = function() {
        for (var e = fo("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid"),
                n = 0 <= go.filterByCategories.indexOf(o);
            io.setCheckedAttribute(null, e[t], n)
        }
    }, Zn.prototype.updateHostFilterList = function() {
        for (var e = fo("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            if (e[t].checked && go.filterByCategories.indexOf(o) < 0) go.filterByCategories.push(o);
            else if (!e[t].checked && -1 < go.filterByCategories.indexOf(o)) {
                var n = go.filterByCategories;
                go.filterByCategories.splice(n.indexOf(o), 1)
            }
        }
        return go.filterByCategories
    }, Zn.prototype.InitializeHostList = function() {
        go.hosts.hostTemplate = fo(_o.P_Vendor_List + " " + _o.P_Host_Cntr + " li").el[0].cloneNode(!0), go.hosts.hostCookieTemplate = fo(_o.P_Vendor_List + " " + _o.P_Host_Cntr + " " + _o.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, Zn.prototype.getCookiesForGroup = function(t) {
        var o = [],
            n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(l(l({}, e), {
                groupName: t.GroupName
            }))
        }), t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(l(l({}, e), {
                isActive: "always active" === Go.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: Q.Host
            }))
        }), {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }, Zn.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, Zn.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode,
            o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length)
            for (var r = 0; r < n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, Zn.prototype.reactivateTag = function(e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"),
            r = 0 <= e.className.indexOf("optanon-category");
        n && r ? o = this.getGroupElements(e.className, go.showVendorService) : n ? go.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (go.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1));
        var i = !0;
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!Jn.canInsertForGroup(o[s].trim())) {
                    i = !1;
                    break
                }
            i && this.unBlockTag(t, e)
        }
    }, Zn.prototype.unBlockTag = function(e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }, Zn.prototype.getGroupElements = function(e, t) {
        return t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i)[1].split("-") : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-")
    }, Zn.prototype.substitutePlainTextScriptTags = function() {
        var t = this,
            e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]'));
        e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || [])))), o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || [])))), Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }, Zn);

    function Zn() {}
    var er, tr = (or.prototype.getSearchQuery = function(e) {
        var t = this,
            o = e.trim().split(/\s+/g);
        return new RegExp(o.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, or.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, or.prototype.setGlobalFilteredList = function(e) {
        return go.currentGlobalFilteredList = e
    }, or.prototype.filterList = function(t, e, n) {
        var o = n && n.length;
        if ("" === t && !o) return this.setGlobalFilteredList(e);
        if (o) {
            var r = fo("#onetrust-pc-sdk " + _o.P_Fltr_Options + " input").el.length,
                i = [],
                s = !1;
            r !== n.length ? e.forEach(function(o) {
                s = !0, o.vendorName && n.forEach(function(e) {
                    var t = parseInt(po.iabGrpIdMap[e]); - 1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }) : (o.purposes.forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }), o.legIntPurposes.forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }))
                })
            }) : i = e, s && (i = i.filter(function(e, t, o) {
                return o.indexOf(e) === t
            })), this.setGlobalFilteredList(i)
        }
        return "" === t ? go.currentGlobalFilteredList : go.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })
    }, or.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = go.vendors;
        go.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, go.filterByIABCategories = [], Qn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = go.filterByIABCategories;
        var n = this.filterList(o.searchParam, o.list, t);
        fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).el[0].scrollTop = 0, this.initVendorsData(e, n)
    }, or.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r = this.getSearchQuery(n),
                i = 0;
            for (var s in t)
                if (s) {
                    var a = o === ie.GoogleVendor ? s : t[s].VendorCustomId,
                        l = fo("" + e.vendorAccBtn + a).el[0].parentElement;
                    r.lastIndex = 0, r.test(t[s][e.name]) ? (oo(l, this._displayNull, !0), i++) : oo(l, "display: none;", !0)
                }
            0 === i ? (fo(e.accId).hide(), o === ie.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === ie.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, fo(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var c = fo(" " + e.venListId + ' li[style^="display: none"]').el, d = 0; d < c.length; d++) oo(c[d], this._displayNull, !0);
        var p = fo("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? io.setCheckedAttribute("", p, !0) : io.setCheckedAttribute("", p, !1), document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? p.parentElement.classList.add("line-through") : p.parentElement.classList.remove("line-through")
    }, or.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(go.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, or.prototype.initGenVendors = function() {
        this.populateGeneralVendors(), uo.GenVenOptOut && uo.GeneralVendors && uo.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, or.prototype.resetAddtlVendors = function() {
        er.searchVendors(er.googleSearchSelectors, go.addtlVendorsList, ie.GoogleVendor), this.showConsentHeader()
    }, or.prototype.venAdtlSelAllTglEvent = function() {
        er.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, or.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: _o.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        er.selectAllEventHandler(e)
    }, or.prototype.selectAllEventHandler = function(e) {
        for (var t = fo(e.vendorsList).el, o = fo(e.selAllCntr).el[0], n = fo(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++) s !== t.length - 1 || t[s].checked || (n.checked = !1);
        io.setCheckedAttribute("", n, n.checked)
    }, or.prototype.vendorLegIntToggleEvent = function() {
        for (var e = fo(_o.P_Vendor_Container + ' li:not([style^="display: none"]) .' + _o.P_Ven_Ltgl + " input").el, t = fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Leg_El).el[0], o = fo("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        io.setCheckedAttribute("", o, o.checked)
    }, or.prototype.vendorsListEvent = function() {
        for (var e = fo(_o.P_Vendor_Container + ' li:not([style^="display: none"]) .' + _o.P_Ven_Ctgl + " input").el, t = fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Consent_El).el[0], o = fo("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        io.setCheckedAttribute("", o, o.checked)
    }, or.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = fo("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, or.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(_o.P_Host_Cntr + " > li") : document.querySelectorAll(_o.P_Vendor_Container + ' li:not([style$="none;"]),' + _o.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length,
            n = fo('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, or.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o = fo("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
            var n = er.getNoResultsFound(t),
                r = document.createElement("div"),
                i = document.createElement("p"),
                s = document.createTextNode(n),
                a = document.createElement("span");
            return r.id = "no-results", a.id = "user-text", a.innerText = e, i.appendChild(a), i.appendChild(s), r.appendChild(i), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).addClass("no-results"), fo("#vendor-search-handler").el[0].setAttribute("aria-describedby", r.id), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).append(r)
        }
        o.querySelector("span").innerText = e
    }, or.prototype.searchHostList = function(e) {
        var t = {},
            o = [];
        go.showTrackingTech ? (t = go.currentTrackingTech, e && (t = er.getFilteredAdditionaTechtData(e, t)), o = t.Cookies) : (o = go.currentGlobalFilteredList, e && (o = this.searchList(e, o))), this.initHostData({
            searchString: e,
            cookiesList: o,
            addTechData: t
        })
    }, or.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, or.prototype.setListSearchValues = function(e) {
        var t = uo.PCenterVendorSearchAriaLabel,
            o = uo.PCenterVendorListSearch,
            n = uo.PCenterVendorsListText;
        e === Le.cookies && (t = uo.PCenterCookieSearchAriaLabel, o = uo.PCenterCookieListSearch, n = uo.PCenterCookiesListText), go.cookieListType !== Z.HostAndGenVen && go.cookieListType !== Z.Host || !go.showTrackingTech || (n = uo.AdditionalTechnologiesConfig.PCTrackingTechTitle), document.querySelector("#onetrust-pc-sdk " + _o.P_Vendor_Title).innerText = n;
        var r = fo("#onetrust-pc-sdk " + _o.P_Vendor_Search_Input);
        r.el[0].placeholder = o, r.attr("aria-label", t)
    }, or.prototype.initHostData = function(e) {
        var t = e.searchString,
            o = e.cookiesList,
            n = e.addTechData;
        go.optanonHostList = o;
        var r = !1;
        this.setBackBtnTxt(), fo(_o.P_Vendor_List + " #select-all-text-container p").html(uo.PCenterAllowAllConsentText);
        var i = er.getHostParentContainer(),
            s = o && 0 === o.length;
        go.showTrackingTech && (s = 0 === n.LocalStorages.length && 0 === n.SessionStorages.length && (0 === n.Cookies.length || 0 === n.Cookies[0].Cookies.length));
        var a = go.cookieListType === Z.Host;
        this.showEmptyResults(s, t, a), this.setHostListSearchValues(), fo("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, uo.PCenterCookieListFilterAria), fo("#filter-btn-handler title").html(uo.PCenterCookieListFilterAria), to.isV2Template && fo("#ot-sel-blk span:first-child").html(uo.PCenterAllowAllConsentText || uo.ConsentText);
        for (var l = document.createDocumentFragment(), c = 0; c < o.length; c++) {
            var d = go.hosts.hostTemplate.cloneNode(!0),
                p = o[c].DisplayName || o[c].HostName;
            this.createHostAccordions(p, d, c), r = this.createHostCheckboxes(p, o, c, d, r), p = this.populateHostDataIntoDOMElements(d, o, p, c, l)
        }
        er.setCookiesInsideHostContainer(i, l, n);
        var u = 1 === o.length && o[0].HostName === uo.PCFirstPartyCookieListText;
        if (Ao.isOptOutEnabled() && !u) {
            io.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !r);
            for (var h = fo("#onetrust-pc-sdk " + _o.P_Host_Cntr + " .ot-host-tgl input").el, g = 0; g < h.length; g++) h[g].addEventListener("click", this.hostsListEvent);
            fo("#onetrust-pc-sdk " + _o.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        } else fo("#onetrust-pc-sdk " + _o.P_Select_Cntr).addClass("ot-hide")
    }, or.prototype.setCookiesInsideHostContainer = function(e, t, o) {
        if (go.showTrackingTech && o) {
            var n = er.getAdditionalTechnologiesHtml(o);
            if (0 < n.children.length) {
                var r = n.querySelector("." + this.TECH_COOKIES_SELECTOR + " .ot-acc-txt");
                if (r) {
                    var i = e.querySelector("ul" + _o.P_Host_Cntr);
                    i.appendChild(t), r.appendChild(i)
                }
                e.appendChild(n)
            }
        } else e.appendChild(t)
    }, or.prototype.getHostParentContainer = function() {
        var e = null;
        return go.showTrackingTech ? (e = document.querySelector("#onetrust-pc-sdk " + _o.P_Vendor_Content + " .ot-sdk-column"), er.removeTrackingTechAccorions()) : (e = document.querySelector("#onetrust-pc-sdk " + _o.P_Vendor_Content + " ul" + _o.P_Host_Cntr)).innerHTML = "", e
    }, or.prototype.removeTrackingTechAccorions = function() {
        var e = document.querySelector("#onetrust-pc-sdk " + _o.P_Vendor_Content + " .ot-sdk-column"),
            t = e.querySelector("." + this.TECH_COOKIES_SELECTOR + " ul" + _o.P_Host_Cntr);
        if (t ? (t.innerHTML = "", e.appendChild(t)) : (t = e.querySelector("ul" + _o.P_Host_Cntr)).innerHTML = "", e)
            for (var o = e.querySelectorAll(".ot-add-tech"), n = o.length - 1; 0 <= n; n--) {
                var r = o.item(n);
                e.removeChild(r)
            }
    }, or.prototype.setHostListSearchValues = function() {
        var e = po.pcName;
        uo.GeneralVendorsEnabled && (to.isV2Template || e !== Ot) && this.setListSearchValues(Le.vendors), uo.GeneralVendorsEnabled || !to.isV2Template && e === Ot || this.setListSearchValues(Le.cookies)
    }, or.prototype.createHostAccordions = function(e, t, o) {
        var n = t.querySelector("." + _o.P_Host_Bx);
        n && io.setHtmlAttributes(n, {
            id: "host-" + o,
            name: "host-" + o,
            "aria-label": e + " " + uo.PCViewCookiesText,
            "aria-controls": "ot-host-acc-txt-" + o
        });
        var r = t.querySelector(_o.P_Acc_Txt);
        r && io.setHtmlAttributes(r, {
            id: "ot-host-acc-txt-" + o,
            role: "region",
            "aria-labelledby": n.id
        })
    }, or.prototype.createHostCheckboxes = function(e, t, o, n, r) {
        var i = Ao.isOptOutEnabled(),
            s = to.isV2Template,
            a = po.pcName;
        if (!i || t[o].isFirstParty) {
            var l = n.querySelector(".ot-host-tgl");
            l && l.parentElement.removeChild(l)
        } else {
            var c = void 0;
            s ? ((c = wo.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), c.querySelector("input").classList.add("host-checkbox-handler"), a === Ot ? n.querySelector(_o.P_Host_Hdr).insertAdjacentElement("beforebegin", c) : n.querySelector(_o.P_Tgl_Cntr).insertAdjacentElement("beforeend", c)) : c = n.querySelector(".ot-host-tgl"), io.setHtmlAttributes(c.querySelector("input"), {
                id: "ot-host-chkbox-" + o,
                "aria-label": e,
                hostId: t[o].HostId,
                ckType: t[o].Type
            }), c.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (t[o].Type === Q.GenVendor ? go.genVendorsConsent[t[o].HostId] : -1 !== go.hostsConsent.indexOf(t[o].HostId + ":1")) ? (io.setCheckedAttribute(null, c.querySelector("input"), !0), t[o].isActive ? io.setDisabledAttribute(null, c.querySelector("input"), !0) : r = r || !0) : (r = !0, io.setCheckedAttribute(null, c.querySelector("input"), !1)), c.querySelector(_o.P_Label_Txt).innerText = e
        }
        return r
    }, or.prototype.populateHostDataIntoDOMElements = function(o, n, e, r, t) {
        var i, s = this,
            a = to.isV2Template,
            l = po.pcName;
        if (uo.PCAccordionStyle === J.PlusMinus) o.querySelector(_o.P_Acc_Header).insertAdjacentElement("afterbegin", wo.plusMinusEl.cloneNode(!0));
        else if (a) {
            var c = wo.arrowEl.cloneNode(!0);
            l === Ot ? o.querySelector(_o.P_Host_View_Cookies).insertAdjacentElement("afterend", c) : o.querySelector(_o.P_Tgl_Cntr).insertAdjacentElement("beforeend", c)
        }
        uo.AddLinksToCookiepedia && !n[r].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + n[r].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + uo.NewWinTxt + "</span>\n                            </a>\n                        "), o.querySelector(_o.P_Host_Title).innerHTML = e, o.querySelector(_o.P_Host_Desc).innerHTML = n[r].Description, n[r].PrivacyPolicy && uo.pcShowCookieHost && o.querySelector(_o.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + n[r].PrivacyPolicy + '" rel="noopener" target="_blank">' + (a ? uo.PCGVenPolicyTxt : uo.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + uo.NewWinTxt + "</span></a>");
        var d = o.querySelector(_o.P_Host_View_Cookies);
        if (!go.showGeneralVendors || n[r].Cookies && n[r].Cookies.length ? uo.PCViewCookiesText && (d.innerHTML = uo.PCViewCookiesText) : (io.removeChild(d), fo(o).addClass("ot-hide-acc")), !n[r].Description || !uo.pcShowCookieHost) {
            var p = o.querySelector(_o.P_Host_Desc);
            p.parentElement.removeChild(p)
        }
        return fo(o.querySelector(_o.P_Host_Opt)).html(""), null !== (i = n[r].Cookies) && void 0 !== i && i.forEach(function(e) {
            var t = s.getCookieElement(e, n[r]);
            fo(o.querySelector(_o.P_Host_Opt)).append(t)
        }), t.append(o), e
    }, or.prototype.hostsListEvent = function() {
        for (var e = fo("#onetrust-pc-sdk " + _o.P_Host_Cntr + " .ot-host-tgl input").el, t = fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Host_El).el[0], o = fo("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = fo("#onetrust-pc-sdk " + _o.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        io.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + uo.PCenterSelectAllVendorsText)
    }, or.prototype.loadHostList = function(e, t) {
        var o = {},
            n = [];
        n = go.showTrackingTech ? (o = er.getAdditionalTechnologiesDataFromGroup(t), (go.currentTrackingTech = o).Cookies) : er.getCombinedCookieList(t), go.currentGlobalFilteredList = n, this.initHostData({
            searchString: e,
            cookiesList: n,
            addTechData: o
        })
    }, or.prototype.getCombinedCookieList = function(e) {
        var t = [],
            o = [],
            n = [];
        if (go.cookieListType !== Z.GenVen) {
            var r = er.getFirstsAndThirdCookisFromGroups(e);
            o = r.firstPartyCookiesList, t = r.thirdPartyCookiesList, o.length && t.unshift({
                HostName: uo.PCFirstPartyCookieListText,
                DisplayName: uo.PCFirstPartyCookieListText,
                HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
                isFirstParty: !0,
                Cookies: o,
                Description: ""
            })
        }
        if (go.showGeneralVendors) {
            var i = this.getFilteredGenVendorsList(e);
            n = b(t, this.mapGenVendorListToHostFormat(i))
        } else n = t;
        return n
    }, or.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: Q.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < go.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, or.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: Q.GenVendor
        }
    }, or.prototype.getFilteredGenVendorsList = function(t) {
        var o = [],
            e = [];
        if (t.length) {
            uo.Groups.forEach(function(e) {
                b(e.SubGroups, [e]).forEach(function(e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                        o.push(e)
                    })
                })
            });
            var n = uo.GeneralVendors;
            return o.length && (e = n.filter(function(e) {
                if (-1 < o.indexOf(e.VendorCustomId)) return e
            })), e
        }
        return uo.GeneralVendors
    }, or.prototype.initVendorsData = function(e, t) {
        var o = this,
            n = t,
            r = go.vendors.list;
        if (this.setBackBtnTxt(), fo(_o.P_Vendor_List + " #select-all-text-container p").html(uo.PCenterAllowAllConsentText), er.setConsentLegIntAndHeaderText(), fo("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, uo.PCenterVendorListFilterAria), fo("#onetrust-pc-sdk #filter-btn-handler title").html(uo.PCenterVendorListFilterAria), this.hasIabVendors = 0 < n.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), er.hideOrShowVendorList(n), fo("#onetrust-pc-sdk " + _o.P_Vendor_Container + " ." + _o.P_Ven_Bx).length !== r.length && this.attachVendorsToDOM(), n.length !== r.length) r.forEach(function(e) {
            var t = fo(_o.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement; - 1 === n.indexOf(e) ? oo(t, "display: none;", !0) : oo(t, o._displayNull, !0)
        });
        else
            for (var i = fo(_o.P_Vendor_Container + ' li[style^="display: none"]').el, s = 0; s < i.length; s++) oo(i[s], this._displayNull, !0);
        !to.isV2Template && po.pcName === Ot || this.setListSearchValues(Le.vendors);
        var a = document.querySelector("#vdr-lst-dsc");
        if (!a && uo.PCenterVendorListDescText)
            if ((a = document.createElement("p")).id = "vdr-lst-dsc", fo(a).html(uo.PCenterVendorListDescText), po.pcName !== Ot && po.pcName !== Vt) {
                var l = document.querySelector("#onetrust-pc-sdk " + _o.P_Vendor_Title_Elm);
                l && l.insertAdjacentElement("afterend", a)
            } else {
                var c = document.querySelector(_o.P_Vendor_Content + " .ot-sdk-row");
                c && c.insertAdjacentElement("beforebegin", a)
            }
        fo("#onetrust-pc-sdk " + _o.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), po.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, or.prototype.setConsentLegIntAndHeaderText = function() {
        to.isV2Template && (fo("#ot-sel-blk span:first-child").html(uo.PCenterAllowAllConsentText || uo.ConsentText), fo("#ot-sel-blk span:last-child").html(uo.LegitInterestText), fo("#onetrust-pc-sdk " + _o.P_Cnsnt_Header).html(uo.PCenterAllowAllConsentText), po.legIntSettings.PAllowLI && !po.legIntSettings.PShowLegIntBtn && fo("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(uo.PCenterLegitInterestText), po.legIntSettings.PAllowLI && !po.legIntSettings.PShowLegIntBtn || oo(fo("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0))
    }, or.prototype.hideOrShowVendorList = function(e) {
        0 === e.length ? fo("#ot-lst-cnt .ot-acc-cntr").hide() : fo("#ot-lst-cnt .ot-acc-cntr").show(), go.showTrackingTech && er.removeTrackingTechAccorions()
    }, or.prototype.updateVendorsDOMToggleStatus = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = fo(_o.P_Vendor_Container + " " + _o.P_Tgl_Cntr).el, n = uo.VendorConsentModel === un, r = 0; r < o.length; r++) {
            var i = o[r].querySelector("." + _o.P_Ven_Ctgl + " input"),
                s = o[r].querySelector("." + _o.P_Ven_Ltgl + " input");
            t ? (i && io.setCheckedAttribute("", i, n), s && io.setCheckedAttribute("", s, !0)) : (i && io.setCheckedAttribute("", i, e), s && io.setCheckedAttribute("", s, e))
        }
        var a = fo("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (a) {
            a.parentElement.classList.remove("line-through");
            var l = !!t || e;
            io.setCheckedAttribute("", a, l)
        }
        var c = fo("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        c && (c.parentElement.classList.remove("line-through"), l = t ? n : e, io.setCheckedAttribute("", c, l)), uo.UseGoogleVendors && (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)), go.showGeneralVendors && uo.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, or.prototype.updateGenVenCheckbox = function(e) {
        for (var t = fo(_o.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) io.setCheckedAttribute("", t[o], e);
        var n = fo("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), io.setCheckedAttribute("", n, e))
    }, or.prototype.updateGoogleCheckbox = function(e) {
        for (var t = fo("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) io.setCheckedAttribute("", t[o], e);
        var n = fo("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), io.setCheckedAttribute("", n, e))
    }, or.prototype.updateVendorDisclosure = function(e, t) {
        var o = fo(_o.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        if (t && t.disclosures) {
            var r = o.querySelector(_o.P_Ven_Dets),
                i = o.querySelector(_o.P_Ven_Disc).cloneNode(!0),
                n = i.cloneNode(!0);
            n.innerHTML = "<p><b>" + uo.PCenterVendorListDisclosure + ": </b></p>", r.insertAdjacentElement("beforeend", n), t.disclosures.forEach(function(e) {
                var t = i.cloneNode(!0),
                    o = "<p>" + uo.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                if (e.type && (o += "<p>" + uo.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds) {
                    var n = io.calculateCookieLifespan(e.maxAgeSeconds);
                    o += "<p>" + uo.PCenterVendorListLifespan + " </p> <p>" + n + " </p>"
                }
                e.domain && (o += "<p>" + uo.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (o += "<p>" + uo.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">', e.purposes.forEach(function(e) {
                    var t = po.iabGroups.purposes[e].name;
                    t && (o += ' <p class="disc-pur">' + t + " </p>")
                }), o += "</div>"), t.innerHTML = o, r.insertAdjacentElement("beforeend", t)
            }), this.updateDomainsUsageInDisclosures(t, i, r)
        }
    }, or.prototype.updateDomainsUsageInDisclosures = function(e, n, r) {
        if (e.domains && e.domains.length) {
            var t = n.cloneNode(!0);
            t.innerHTML = "<p><b>" + uo.PCVLSDomainsUsed + ": </b></p>", r.insertAdjacentElement("beforeend", t), e.domains.forEach(function(e) {
                var t, o = n.cloneNode(!0);
                e.domain && (t = "<p>" + uo.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.use && (t += "<p>" + uo.PCVLSUse + " </p> <p>" + e.use + " </p>"), o.innerHTML = t, r.insertAdjacentElement("beforeend", o)
            })
        }
    }, or.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "", e.parentNode.insertBefore(o, e)
    }, or.prototype.attachVendorsToDOM = function() {
        var R, q, M = go.vendors.list,
            U = uo.IabType,
            j = po.pcName,
            z = go.vendors.vendorTemplate.cloneNode(!0);
        go.discVendors = {}, to.isV2Template && (R = z.querySelector(".ot-ven-pur").cloneNode(!0), q = z.querySelector(_o.P_Ven_Disc).cloneNode(!0), fo(z.querySelector(".ot-ven-dets")).html(""));
        for (var K = document.createDocumentFragment(), e = function(e) {
                var t = z.cloneNode(!0),
                    o = M[e].vendorId,
                    n = M[e].vendorName,
                    r = t.querySelector("." + _o.P_Ven_Bx),
                    i = go.vendorsSetting[o],
                    s = t.querySelector(_o.P_Ven_Link);
                io.setHtmlAttributes(r, {
                    id: "IAB" + o,
                    name: "IAB" + o,
                    "aria-controls": "IAB-ACC-TXT" + o,
                    "aria-label": n
                }), r.nextElementSibling.setAttribute("for", "IAB" + o), t.querySelector(_o.P_Ven_Name).innerText = n, io.setHtmlAttributes(s, {
                    href: M[e].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), s.innerHTML = uo.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + uo.NewWinTxt + "</span>";
                var a = to.isV2Template ? wo.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox"),
                    l = a.cloneNode(!0),
                    c = a.cloneNode(!0),
                    d = t.querySelector(_o.P_Tgl_Cntr);
                to.isV2Template || a.parentElement.removeChild(a);
                var p = t.querySelector(_o.P_Arrw_Cntr);
                if (i.consent) {
                    c.classList.add(_o.P_Ven_Ctgl);
                    var u = -1 !== Co.inArray(o + ":true", go.vendors.selectedVendors),
                        h = c.querySelector("input");
                    if (to.isV2Template) {
                        h.classList.add("vendor-checkbox-handler");
                        var g = c.querySelector(".ot-label-status");
                        uo.PCShowConsentLabels ? g.innerHTML = u ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(g)
                    }
                    io.setCheckedAttribute("", h, u), io.setHtmlAttributes(h, {
                        id: _o.P_Vendor_CheckBx + "-" + e,
                        vendorid: o,
                        "aria-label": n
                    }), c.querySelector("label").setAttribute("for", _o.P_Vendor_CheckBx + "-" + e), c.querySelector(_o.P_Label_Txt).textContent = n, j === Ot ? uo.PCTemplateUpgrade ? d.insertAdjacentElement("beforeend", c) : fo(d).append(c) : d.insertBefore(c, p)
                }
                if (i.legInt && !i.specialPurposesOnly) {
                    var C = -1 !== Co.inArray(o + ":true", go.vendors.selectedLegIntVendors);
                    if (po.legIntSettings.PShowLegIntBtn) {
                        var y = Oo.generateLegIntButtonElements(C, o, !0);
                        t.querySelector(_o.P_Acc_Txt).insertAdjacentHTML("beforeend", y);
                        var f = t.querySelector(".ot-remove-objection-handler");
                        f && oo(f, f.getAttribute("data-style"))
                    } else h = l.querySelector("input"), to.isV2Template && (h.classList.add("vendor-checkbox-handler"), g = l.querySelector(".ot-label-status"), uo.PCShowConsentLabels ? g.innerHTML = C ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(g)), l.classList.add(_o.P_Ven_Ltgl), h.classList.remove("vendor-checkbox-handler"), h.classList.add("vendor-leg-checkbox-handler"), io.setCheckedAttribute("", h, C), io.setHtmlAttributes(h, {
                        id: _o.P_Vendor_LegCheckBx + "-" + e,
                        "leg-vendorid": o,
                        "aria-label": n
                    }), l.querySelector("label").setAttribute("for", _o.P_Vendor_LegCheckBx + "-" + e), l.querySelector(_o.P_Label_Txt).textContent = n, t.querySelector("." + _o.P_Ven_Ctgl) && (p = t.querySelector("." + _o.P_Ven_Ctgl)), j !== Ot || d.children.length ? d.insertBefore(l, p) : fo(d).append(l), i.consent || j !== Ot || l.classList.add(_o.P_Ven_Ltgl_Only)
                }
                to.isV2Template && (d.insertAdjacentElement("beforeend", wo.arrowEl.cloneNode(!0)), uo.PCAccordionStyle !== J.Caret && t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", wo.plusMinusEl.cloneNode(!0)));
                var v = t.querySelector(_o.P_Acc_Txt);
                if (v && io.setHtmlAttributes(v, {
                        id: "IAB-ACC-TXT" + o,
                        "aria-labelledby": "IAB-ACC-TXT" + o,
                        role: "region"
                    }), M[e].deviceStorageDisclosureUrl && (io.setHtmlAttributes(r, {
                        "disc-vid": o
                    }), go.discVendors[o] = {
                        isFetched: !1,
                        disclosureUrl: M[e].deviceStorageDisclosureUrl
                    }), to.isV2Template) W.populateVendorDetailsHtml(t, R, M[e], q);
                else {
                    var k = t.querySelector(".vendor-option-purpose"),
                        m = t.querySelector(".vendor-consent-group"),
                        b = t.querySelector(".legitimate-interest"),
                        S = t.querySelector(".legitimate-interest-group"),
                        P = t.querySelector(".spl-purpose"),
                        T = t.querySelector(".spl-purpose-grp"),
                        A = t.querySelector(".vendor-feature"),
                        I = t.querySelector(".vendor-feature-group"),
                        L = t.querySelector(".vendor-spl-feature"),
                        _ = t.querySelector(".vendor-spl-feature-grp"),
                        E = m.cloneNode(!0),
                        V = S.cloneNode(!0),
                        B = T.cloneNode(!0),
                        w = I.cloneNode(!0),
                        O = _.cloneNode(!0);
                    q = t.querySelector(_o.P_Ven_Disc);
                    var x = t.querySelector(_o.P_Ven_Dets),
                        G = q.cloneNode(!0);
                    q.parentElement.removeChild(q), W.attachVendorDisclosure(G, M[e]), x.insertAdjacentElement("afterbegin", G), m.parentElement.removeChild(m), i.consent && (fo(k.querySelector("p")).text(uo.ConsentPurposesText), M[e].purposes.forEach(function(e) {
                        fo(E.querySelector(".consent-category")).text(e.purposeName);
                        var t = E.querySelector(".consent-status");
                        t && E.removeChild(t), b.insertAdjacentHTML("beforebegin", E.outerHTML)
                    })), i.consent || k.parentElement.removeChild(k);
                    var N = V.querySelector(".vendor-opt-out-handler");
                    "IAB2" === uo.IabType && N.parentElement.removeChild(N), S.parentElement.removeChild(S), i.legInt && (fo(b.querySelector("p")).text(uo.LegitimateInterestPurposesText), po.legIntSettings.PAllowLI && "IAB2" === uo.IabType && M[e].legIntPurposes.forEach(function(e) {
                        fo(V.querySelector(".consent-category")).text(e.purposeName), b.insertAdjacentHTML("afterend", V.outerHTML)
                    })), i.legInt || b.parentElement.removeChild(b), T.parentElement.removeChild(T), "IAB2" === U && M[e].specialPurposes.forEach(function(e) {
                        fo(B.querySelector(".consent-category")).text(e.purposeName), P.insertAdjacentHTML("afterend", B.outerHTML)
                    }), 0 === M[e].specialPurposes.length ? P.parentElement.removeChild(P) : fo(P.querySelector("p")).text(uo.SpecialPurposesText), I.parentElement.removeChild(I), fo(A.querySelector("p")).text(uo.FeaturesText), M[e].features.forEach(function(e) {
                        fo(w.querySelector(".consent-category")).text(e.featureName), A.insertAdjacentHTML("afterend", w.outerHTML)
                    }), 0 === M[e].features.length && A.parentElement.removeChild(A), L.parentElement.removeChild(_), "IAB2" === U && M[e].specialFeatures.forEach(function(e) {
                        fo(O.querySelector(".consent-category")).text(e.featureName), L.insertAdjacentHTML("afterend", O.outerHTML)
                    }), 0 === M[e].specialFeatures.length ? L.parentElement.removeChild(L) : fo(L.querySelector("p")).text(uo.SpecialFeaturesText);
                    var D = r.parentElement.querySelector(".vendor-purposes p");
                    D.parentElement.removeChild(D)
                }
                K.appendChild(t);
                var H = fo("#onetrust-pc-sdk " + _o.P_Sel_All_Vendor_Consent_Handler).el[0];
                H && H.setAttribute(W.ARIA_LABEL_ATTRIBUTE, uo.PCenterSelectAllVendorsText + " " + uo.LegitInterestText);
                var F = fo("#onetrust-pc-sdk " + _o.P_Sel_All_Vendor_Leg_Handler).el[0];
                F && F.setAttribute(W.ARIA_LABEL_ATTRIBUTE, uo.PCenterSelectAllVendorsText + " " + uo.ConsentText)
            }, W = this, t = 0; t < M.length; t++) e(t);
        document.querySelector("#onetrust-pc-sdk " + _o.P_Vendor_Container).append(K)
    }, or.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r = e.querySelector(".ot-ven-dets"),
            i = go.vendorsSetting[o.vendorId],
            s = n.cloneNode(!0);
        if (this.attachVendorDisclosure(s, o), r.insertAdjacentElement("beforeEnd", s), i.consent) {
            var a = t.cloneNode(!0),
                l = "<h4>" + uo.ConsentPurposesText + "</h4>";
            l += "<ul>", o.purposes.forEach(function(e) {
                l += "<li><p>" + e.purposeName + "</p></li>"
            }), l += "</ul>", a.innerHTML = l, r.insertAdjacentElement("beforeEnd", a)
        }
        if (i.legInt && o.legIntPurposes.length) {
            var c = t.cloneNode(!0),
                d = "<h4>" + uo.LegitimateInterestPurposesText + "</h4>";
            d += "<ul>", o.legIntPurposes.forEach(function(e) {
                d += "<li><p>" + e.purposeName + "</p></li>"
            }), d += "</ul>", c.innerHTML = d, r.insertAdjacentElement("beforeEnd", c)
        }
        if ("IAB2" === po.iabType && o.specialPurposes.length) {
            var p = t.cloneNode(!0),
                u = "<h4>" + uo.SpecialPurposesText + "</h4>";
            u += "<ul>", o.specialPurposes.forEach(function(e) {
                u += "<li><p>" + e.purposeName + "</p></li>"
            }), u += "</ul>", p.innerHTML = u, r.insertAdjacentElement("beforeEnd", p)
        }
        if (o.features.length) {
            var h = t.cloneNode(!0),
                g = "<h4>" + uo.FeaturesText + "</h4>";
            g += "<ul>", o.features.forEach(function(e) {
                g += "<li><p>" + e.featureName + "</p></li>"
            }), g += "</ul>", h.innerHTML = g, r.insertAdjacentElement("beforeEnd", h)
        }
        if ("IAB2" === po.iabType && o.specialFeatures.length) {
            var C = t.cloneNode(!0),
                y = "<h4>" + uo.SpecialFeaturesText + "</h4>";
            y += "<ul>", o.specialFeatures.forEach(function(e) {
                y += "<li><p>" + e.featureName + "</p></li>"
            }), y += "</ul>", C.innerHTML = y, r.insertAdjacentElement("beforeEnd", C)
        }
    }, or.prototype.InitializeVendorList = function() {
        if (go.vendors.list = go.iabData ? go.iabData.vendors : null, go.vendors.vendorTemplate = fo(_o.P_Vendor_Container + " li").el[0].cloneNode(!0), fo("#onetrust-pc-sdk " + _o.P_Vendor_Container).html(""), !to.isV2Template && po.pcName === Ot) {
            var e, t = go.vendors.vendorTemplate.querySelectorAll(_o.P_Acc_Header);
            po.legIntSettings.PAllowLI && "IAB2" === po.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
        }
    }, or.prototype.cancelVendorFilter = function() {
        for (var e = fo("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid"),
                n = 0 <= go.filterByIABCategories.indexOf(o);
            io.setCheckedAttribute(null, e[t], n)
        }
    }, or.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h4>" + uo.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + uo.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, or.prototype.updateVendorFilterList = function() {
        for (var e = fo("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            if (e[t].checked && go.filterByIABCategories.indexOf(o) < 0) go.filterByIABCategories.push(o);
            else if (!e[t].checked && -1 < go.filterByIABCategories.indexOf(o)) {
                var n = go.filterByIABCategories;
                go.filterByIABCategories.splice(n.indexOf(o), 1)
            }
        }
        return go.filterByIABCategories
    }, or.prototype.saveVendorStatus = function() {
        var e = go.vendors,
            t = go.oneTrustIABConsent;
        t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice();
        var o = go.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected)
    }, or.prototype.updateIabVariableReference = function() {
        var e = go.oneTrustIABConsent,
            t = go.vendors;
        t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice();
        var o = go.addtlVendors;
        o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }, or.prototype.allowAllhandler = function() {
        pn.initializeIABData(!0, !1)
    }, or.prototype.rejectAllHandler = function(e) {
        void 0 === e && (e = !1), pn.initializeIABData(!1, !0, e)
    }, or.prototype.populateAddtlVendors = function(e) {
        var t = uo.PCAccordionStyle === J.Caret ? wo.arrowEl.cloneNode(!0) : wo.plusMinusEl.cloneNode(!0),
            o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            n = o.cloneNode(!0);
        io.removeChild(n.querySelector("#ot-selall-hostcntr")), io.removeChild(o.querySelector("#ot-selall-vencntr")), io.removeChild(o.querySelector("#ot-selall-licntr"));
        var r = wo.accordionEl.cloneNode(!0);
        r.classList.add("ot-iab-acc"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + uo.PCIABVendorsText + "</div>"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", fo("#ot-ven-lst").el[0]), fo("#ot-lst-cnt .ot-sdk-column").append(r), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, uo.PCIABVendorsText), this.iabAccInit = !0;
        var i = n.cloneNode(!0);
        io.removeChild(i.querySelector("#ot-selall-licntr")), i.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", i.querySelector("input").id = "ot-selall-adtlven-handler", i.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
        var s = wo.accordionEl.cloneNode(!0);
        s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), s.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + uo.PCGoogleVendorsText + "</div>"), s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", i), s.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), s.classList.add("ot-adtlv-acc"), s.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, uo.PCGoogleVendorsText);
        var a = go.vendors.vendorTemplate.cloneNode(!0);
        for (var l in a.querySelector("button").classList.remove("ot-ven-box"), a.querySelector("button").classList.add("ot-addtl-venbox"), io.removeChild(a.querySelector(".ot-acc-txt")), e)
            if (e[l]) {
                var c = a.cloneNode(!0),
                    d = e[l].name;
                c.querySelector(_o.P_Ven_Name).innerText = d;
                var p = c.querySelector("button");
                io.setHtmlAttributes(p, {
                    id: "Adtl-IAB" + l
                }), io.setHtmlAttributes(c.querySelector(_o.P_Ven_Link), {
                    href: e[l].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), c.querySelector(_o.P_Ven_Link).innerHTML = uo.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + d + " " + uo.NewWinTxt + "</span>";
                var u = wo.chkboxEl.cloneNode(!0);
                u.classList.remove("ot-ven-ctgl"), u.classList.add("ot-ven-adtlctgl");
                var h = Boolean(go.addtlVendors.vendorSelected[l]),
                    g = u.querySelector("input");
                g.classList.add("ot-addtlven-chkbox-handler");
                var C = u.querySelector(".ot-label-status");
                uo.PCShowConsentLabels ? C.innerHTML = h ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(C), io.setCheckedAttribute("", g, h), io.setHtmlAttributes(g, {
                    id: "ot-addtlven-chkbox-" + l,
                    "addtl-vid": l,
                    "aria-label": d
                }), u.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + l), u.querySelector(_o.P_Label_Txt).textContent = d;
                var y = c.querySelector(_o.P_Tgl_Cntr);
                fo(y).append(u), y.insertAdjacentElement("beforeend", wo.arrowEl.cloneNode(!0)), uo.PCAccordionStyle !== J.Caret && c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", wo.plusMinusEl.cloneNode(!0)), fo(s.querySelector("#ot-addtl-venlst")).append(c)
            }
        fo("#ot-lst-cnt .ot-sdk-column").append(s), fo("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            io.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, or.prototype.populateGeneralVendors = function() {
        var u = this,
            e = uo.GeneralVendors,
            t = document.querySelector(".ot-gv-acc"),
            h = !!t;
        if (!e.length) return this.hasGenVendors = !1, void(t && fo(t).hide());
        this.hasGenVendors = !0, t && fo(t).show();
        var o = uo.PCAccordionStyle === J.Caret ? wo.arrowEl.cloneNode(!0) : wo.plusMinusEl.cloneNode(!0);
        this.iabAccInit || this.addIabAccordion();
        var n = document.createElement("div");
        n.setAttribute("class", "ot-sel-all-chkbox");
        var r = wo.chkboxEl.cloneNode(!0);
        r.id = "ot-selall-gnvencntr", r.querySelector("input").id = "ot-selall-gnven-handler", r.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), fo(n).append(r);
        var g = wo.accordionEl.cloneNode(!0);
        g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)), g.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + uo.PCenterGeneralVendorsText + "</div>"), uo.GenVenOptOut && g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), g.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), g.classList.add("ot-gv-acc"), g.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, uo.PCenterGeneralVendorsText);
        var C = go.vendors.vendorTemplate.cloneNode(!0);
        C.querySelector("button").classList.remove("ot-ven-box"), C.querySelector("button").classList.add("ot-gv-venbox"), fo(C.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), h && fo("" + _o.P_Gven_List).html("");
        var y = !0;
        e.forEach(function(e) {
            var o = u.mapGenVendorToHostFormat(e),
                n = C.cloneNode(!0),
                t = e.VendorCustomId,
                r = e.Name,
                i = n.querySelector(_o.P_Ven_Link);
            n.querySelector(_o.P_Ven_Name).innerText = r;
            var s = n.querySelector("button");
            if (io.setHtmlAttributes(s, {
                    id: "Gn-" + t
                }), e.PrivacyPolicyUrl ? (io.setHtmlAttributes(i, {
                    href: e.PrivacyPolicyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), i.innerHTML = uo.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + r + " " + uo.NewWinTxt + "</span>") : i.classList.add("ot-hide"), u.addDescriptionElement(i, e.Description), uo.GenVenOptOut) {
                var a = wo.chkboxEl.cloneNode(!0);
                a.classList.remove("ot-ven-ctgl"), a.classList.add("ot-ven-gvctgl");
                var l = Boolean(go.genVendorsConsent[t]),
                    c = a.querySelector("input");
                c.classList.add("ot-gnven-chkbox-handler");
                var d = a.querySelector(".ot-label-status");
                uo.PCShowConsentLabels ? d.innerHTML = l ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(d), io.setCheckedAttribute("", c, l), io.setHtmlAttributes(c, {
                    id: "ot-gnven-chkbox-" + t,
                    "gn-vid": t,
                    "aria-label": r
                }), Qo.isGenVenPartOfAlwaysActiveGroup(t) ? io.setDisabledAttribute(null, c, !0) : y = !1, a.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t), a.querySelector(_o.P_Label_Txt).textContent = r;
                var p = n.querySelector(_o.P_Tgl_Cntr);
                fo(p).append(a), p.insertAdjacentElement("beforeend", wo.arrowEl.cloneNode(!0))
            }
            uo.PCAccordionStyle !== J.Caret && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", wo.plusMinusEl.cloneNode(!0)), e.Cookies.length || fo(n).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                var t = u.getCookieElement(e, o);
                fo(n.querySelector(".ot-host-opt")).append(t)
            }), h ? fo("" + _o.P_Gven_List).append(n) : fo(g.querySelector("" + _o.P_Gven_List)).append(n)
        }), h || fo("#ot-lst-cnt .ot-sdk-column").append(g), fo("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            io.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), y && io.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
    }, or.prototype.addIabAccordion = function() {
        var e = uo.PCAccordionStyle === J.Caret ? wo.arrowEl.cloneNode(!0) : wo.plusMinusEl.cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            o = t.cloneNode(!0);
        io.removeChild(o.querySelector("#ot-selall-hostcntr")), io.removeChild(t.querySelector("#ot-selall-vencntr")), io.removeChild(t.querySelector("#ot-selall-licntr"));
        var n = wo.accordionEl.cloneNode(!0);
        n.classList.add("ot-iab-acc"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + uo.PCIABVendorsText + "</div>"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", fo("#ot-ven-lst").el[0]), fo("#ot-lst-cnt .ot-sdk-column").append(n), n.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, uo.PCIABVendorsText), this.iabAccInit = !0
    }, or.prototype.showConsentHeader = function() {
        var e = po.legIntSettings;
        fo("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || fo("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, or.prototype.setBackBtnTxt = function() {
        to.isV2Template ? (fo(_o.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, uo.PCenterBackText), fo(_o.P_Vendor_List + " .back-btn-handler title").html(uo.PCenterBackText)) : fo(_o.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(uo.PCenterBackText)
    }, or.prototype.getCookieElement = function(e, t) {
        var o = go.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0);
        n.classList.remove("cookie-name-container"), fo(o).html("");
        var r = e.Name;
        uo.AddLinksToCookiepedia && t.isFirstParty && (r = Ao.getCookieLabel(e, uo.AddLinksToCookiepedia));
        var i = n.cloneNode(!0);
        if (i.classList.add(_o.P_c_Name), i.querySelector("div:nth-child(1)").innerHTML = uo.pcCListName, i.querySelector("div:nth-child(2)").innerHTML = r, fo(o).append(i), uo.pcShowCookieHost) {
            var s = n.cloneNode(!0);
            s.classList.add(_o.P_c_Host), s.querySelector("div:nth-child(1)").innerHTML = uo.pcCListHost, s.querySelector("div:nth-child(2)").innerHTML = e.Host, fo(o).append(s)
        }
        if (uo.pcShowCookieDuration) {
            var a = n.cloneNode(!0);
            a.classList.add(_o.P_c_Duration), a.querySelector("div:nth-child(1)").innerHTML = uo.pcCListDuration, a.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? uo.LifespanTypeText : Ao.getDuration(e), fo(o).append(a)
        }
        if (uo.pcShowCookieType) {
            var l = t.Type === Q.GenVendor ? !e.isThirdParty : t.isFirstParty,
                c = n.cloneNode(!0);
            c.classList.add(_o.P_c_Type), c.querySelector("div:nth-child(1)").innerHTML = uo.pcCListType, c.querySelector("div:nth-child(2)").innerHTML = l ? uo.firstPartyTxt : uo.thirdPartyTxt, fo(o).append(c)
        }
        if (uo.pcShowCookieCategory) {
            var d = void 0;
            if (d = t.Type === Q.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                var p = n.cloneNode(!0);
                p.classList.add(_o.P_c_Category), p.querySelector("div:nth-child(1)").innerHTML = uo.pcCListCategory, p.querySelector("div:nth-child(2)").innerHTML = d, fo(o).append(p)
            }
        }
        if (uo.pcShowCookieDescription && e.description) {
            var u = n.cloneNode(!0);
            u.classList.add(_o.P_c_Desc), u.querySelector("div:nth-child(1)").innerHTML = uo.pcCListDescription, u.querySelector("div:nth-child(2)").innerHTML = e.description, fo(o).append(u)
        }
        return o
    }, or.prototype.getNoResultsFound = function(e) {
        return " " + (go.showTrackingTech ? uo.PCTechNotFound : e ? uo.PCHostNotFound : uo.PCVendorNotFound) + "."
    }, or.prototype.getAdditionalTechnologiesHtml = function(e) {
        var t = document.createDocumentFragment(),
            o = uo.AdditionalTechnologiesConfig,
            n = 0 < e.Cookies.length;
        if (n && e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && (n = 0 < e.Cookies[0].Cookies.length), n) {
            var r = er.getMainAccordionContainer(o.PCCookiesLabel, o.PCCookiesLabel, !1);
            r.classList.add(this.TECH_COOKIES_SELECTOR), t.appendChild(r)
        }
        if (0 < e.LocalStorages.length) {
            var i = er.getMainAccordionContainer(o.PCLocalStorageLabel, o.PCLocalStorageLabel);
            i.classList.add("tech-local"), er.setSessionLocalStorageTemplate(i, e.LocalStorages, uo.AdditionalTechnologiesConfig.PCLocalStorageDurationText), t.appendChild(i)
        }
        if (0 < e.SessionStorages.length) {
            var s = er.getMainAccordionContainer(o.PCSessionStorageLabel, o.PCSessionStorageDurationText);
            s.classList.add("tech-session"), er.setSessionLocalStorageTemplate(s, e.SessionStorages, uo.AdditionalTechnologiesConfig.PCSessionStorageDurationText), t.appendChild(s)
        }
        return t
    }, or.prototype.getMainAccordionContainer = function(e, t, o) {
        void 0 === o && (o = !0);
        var n = er.getAccordionStyleElement(),
            r = wo.accordionEl.cloneNode(!0);
        return r.classList.add("ot-add-tech"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + e + "</div>"), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, t), o && r.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeend", '<ul id="ot-host-lst" style="display: block;"></ul>'), r.cloneNode(!0)
    }, or.prototype.setSessionLocalStorageTemplate = function(e, t, o) {
        var n = go.hosts.hostTemplate.cloneNode(!0);
        io.removeChild(n.querySelector(".ot-a scc-txt"));
        var r = e.querySelector(".ot-acc-txt " + _o.P_Host_Cntr);
        r.removeAttribute("style"), r.classList.add("ot-host-opt");
        for (var i = 0, s = t; i < s.length; i++) {
            var a = s[i],
                l = er.getSessionLocalStorageElement(a, o);
            r.append(l)
        }
    }, or.prototype.getSessionLocalStorageElement = function(e, t) {
        var o = go.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0);
        fo(o).html("");
        var r = er.createKeyValueDivEle(n, _o.P_c_Name, uo.pcCListName, e.Name);
        fo(o).append(r);
        var i = er.createKeyValueDivEle(n, _o.P_c_Host, uo.pcCListHost, e.Host);
        fo(o).append(i);
        var s = er.createKeyValueDivEle(n, _o.P_c_Duration, uo.pcCListDuration, t);
        fo(o).append(s);
        var a = er.createKeyValueDivEle(n, _o.P_c_Desc, uo.pcCListDescription, e.description);
        return fo(o).append(a), o
    }, or.prototype.createKeyValueDivEle = function(e, t, o, n) {
        var r = e.cloneNode(!0);
        return r.classList.add(t), r.querySelector("div:nth-child(1)").innerHTML = o, r.querySelector("div:nth-child(2)").innerHTML = n, r
    }, or.prototype.getAdditionalTechnologiesDataFromGroup = function(e) {
        for (var t, o, n, r, i, s = [], a = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            }, l = 0, c = er.getGroupsFromFilter(e); l < c.length; l++) {
            var d = c[l],
                p = Qn.getCookiesForGroup(d);
            s = b(s, null != (t = p.firstPartyCookiesList) ? t : []), a.Cookies = b(a.Cookies, p.thirdPartyCookiesList), a.LocalStorages = b(a.LocalStorages, null != (n = null === (o = d.TrackingTech) || void 0 === o ? void 0 : o.LocalStorages) ? n : []), a.SessionStorages = b(a.SessionStorages, null != (i = null === (r = d.TrackingTech) || void 0 === r ? void 0 : r.SessionStorages) ? i : [])
        }
        return s.length && a.Cookies.unshift({
            HostName: uo.PCFirstPartyCookieListText,
            DisplayName: uo.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: s,
            Description: ""
        }), a
    }, or.prototype.getFirstsAndThirdCookisFromGroups = function(e) {
        var o = [],
            n = [];
        return er.getGroupsFromFilter(e).forEach(function(e) {
            var t = Qn.getCookiesForGroup(e);
            o = b(o, t.firstPartyCookiesList), n = b(n, t.thirdPartyCookiesList)
        }), {
            firstPartyCookiesList: o,
            thirdPartyCookiesList: n
        }
    }, or.prototype.getGroupsFromFilter = function(t) {
        var o = [];
        return uo.Groups.forEach(function(e) {
            b(e.SubGroups, [e]).forEach(function(e) {
                t && t.length ? -1 !== t.indexOf(e.CustomGroupId) && o.push(e) : o.push(e)
            })
        }), o
    }, or.prototype.getAccordionStyleElement = function() {
        return uo.PCAccordionStyle === J.Caret ? wo.arrowEl.cloneNode(!0) : wo.plusMinusEl.cloneNode(!0)
    }, or.prototype.getFilteredAdditionaTechtData = function(e, t) {
        var o, n, r, i, s, a = {
                SessionStorages: [],
                LocalStorages: [],
                Cookies: []
            },
            l = this.getSearchQuery(e),
            c = JSON.parse(JSON.stringify(t));
        return c.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && ((s = c.Cookies.shift()).Cookies = null === (o = s.Cookies) || void 0 === o ? void 0 : o.filter(function(e) {
            return l.lastIndex = 0, l.test(e.Name || e.Host)
        })), a.Cookies = null === (n = c.Cookies) || void 0 === n ? void 0 : n.filter(function(e) {
            return l.lastIndex = 0, l.test(e.DisplayName || e.HostName)
        }), s && 0 < s.Cookies.length && a.Cookies.unshift(s), a.LocalStorages = null === (r = c.LocalStorages) || void 0 === r ? void 0 : r.filter(function(e) {
            return l.lastIndex = 0, l.test(e.Name || e.Host)
        }), a.SessionStorages = null === (i = c.SessionStorages) || void 0 === i ? void 0 : i.filter(function(e) {
            return l.lastIndex = 0, l.test(e.Name || e.Host)
        }), a
    }, or);

    function or() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.ARIA_LABEL_ATTRIBUTE = "aria-label", this.TECH_COOKIES_SELECTOR = "tech-cookies", this.FIRST_PARTY_COOKIES_GROUP_NAME = "first-party-cookies-group", this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }

    function nr() {
        return "IAB2" !== uo.IabType && uo.PCTemplateUpgrade && uo.PCCategoryStyle === ce.Toggle ? wo.toggleEl.cloneNode(!0) : wo.chkboxEl.cloneNode(!0)
    }
    var rr, ir = (sr.prototype.setHtmlTemplate = function(e) {
        rr.setInternalData(), rr.rootHtml = e, rr.cloneHtmlElements()
    }, sr.prototype.getVendorListEle = function(e) {
        var t = document.createDocumentFragment(),
            r = document.createElement("div");
        r.classList.add("ot-vs-list");
        var i = uo.VendorServiceConfig.PCVSExpandGroup;
        return e.forEach(function(e, t) {
            var o = "ot-vs-lst-id-" + t,
                n = rr.createVendor(e.groupRef, e, i, o);
            r.appendChild(n)
        }), t.appendChild(r), t
    }, sr.prototype.insertVendorServiceHtml = function(e, t) {
        if (!rr.checkIfIsInvalid(e, t)) {
            var o = document.createDocumentFragment();
            if (rr.setVendorContainer(o, e), rr.setVendorList(o, e), e.SubGroups && 0 < e.SubGroups.length) {
                o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt");
                var n = t.children[1];
                po.pcName === Ot && (n = t.children[2]), t.insertBefore(o, n)
            } else t.appendChild(o)
        }
    }, sr.prototype.toggleVendorService = function(e, t, o, n) {
        var r = Go.getGroupById(e),
            i = Go.getVSById(t);
        n = n || rr.getVendorInputElement(i.CustomVendorServiceId), rr.setVendorServiceState(n, i, o), o ? rr.changeGroupState(r, o, rr.isToggle) : rr.checkGroupChildrenState(r) || rr.changeGroupState(r, !1, rr.isToggle)
    }, sr.prototype.setVendorStateByGroup = function(e, t) {
        var o = e.VendorServices;
        if (go.showVendorService && o)
            for (var n = 0, r = o; n < r.length; n++) {
                var i = r[n],
                    s = rr.getVendorInputElement(i.CustomVendorServiceId);
                rr.setVendorServiceState(s, i, t)
            }
    }, sr.prototype.resetVendorUIState = function(e) {
        e.forEach(function(e, t) {
            var o = rr.getVendorInputElement(t);
            rr.changeVendorServiceUIState(o, e)
        })
    }, sr.prototype.setVendorServiceState = function(e, t, o) {
        rr.changeVendorServiceState(t, o), rr.changeVendorServiceUIState(e, o);
        var n = o ? Hn : Fn;
        ln.triggerGoogleAnalyticsEvent(hn, n, t.ServiceName + ": " + t.CustomVendorServiceId)
    }, sr.prototype.removeVSUITemplate = function(e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }, sr.prototype.consentAll = function(o) {
        go.getVendorsInDomain().forEach(function(e) {
            var t = o;
            o || (t = Go.isAlwaysActiveGroup(e.groupRef)), rr.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }, sr.prototype.cloneHtmlElements = function() {
        var e = rr.rootHtml.querySelector(this.MAIN_CONT_ELE);
        if (e) {
            var t = e.querySelector(".ot-vnd-serv-hdr-cntr"),
                o = e.querySelector(".ot-vnd-lst-cont"),
                n = o.querySelector(".ot-vnd-item"),
                r = n.querySelector(".ot-vnd-info");
            rr.vendorLabelContainerClone = t.cloneNode(!0), e.removeChild(t), rr.vendorInfoClone = r.cloneNode(!0), n.querySelector(".ot-vnd-info-cntr").removeChild(r), rr.vendorItemClone = n.cloneNode(!0), o.removeChild(n), rr.vendorListContainerClone = o.cloneNode(!0), e.removeChild(o), rr.vendorServMainContainerClone = e.cloneNode(!0), rr.rootHtml.removeChild(e)
        }
    }, sr.prototype.setInternalData = function() {
        rr.isToggle = uo.PCCategoryStyle === ce.Toggle;
        var e = uo.VendorServiceConfig;
        rr.stringTranslation = new Map, rr.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"), rr.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"), rr.stringTranslation.set("Address", e.PCVSAddressText || "Address"), rr.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"), rr.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"), rr.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"), rr.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"), rr.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"), rr.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"), rr.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"), rr.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }, sr.prototype.setVendorContainer = function(e, t) {
        var o = rr.vendorServMainContainerClone.cloneNode(!0);
        o.setAttribute("data-group-id", t.CustomGroupId);
        var n = rr.vendorLabelContainerClone.cloneNode(!0);
        n.querySelector(".ot-vnd-serv-hdr").innerHTML = uo.VendorServiceConfig.PCVSListTitle, o.appendChild(n), e.appendChild(o)
    }, sr.prototype.setVendorList = function(e, t) {
        for (var o = 0, n = rr.getVSFromGroupAndSubgroups(t), r = n.length, i = e.querySelector(this.MAIN_CONT_ELE), s = rr.vendorListContainerClone.cloneNode(), a = uo.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var l = rr.createVendor(t, n[o], a);
            s.appendChild(l)
        }
        i.appendChild(s)
    }, sr.prototype.getVSFromGroupAndSubgroups = function(e, t) {
        var o, n, r;
        void 0 === t && (t = !1);
        var i = null != (o = e.VendorServices) ? o : [];
        if (t)
            for (var s = 0, a = null != (n = e.SubGroups) ? n : []; s < a.length; s++) {
                var l = null != (r = a[s].VendorServices) ? r : [];
                i.push.apply(i, l)
            }
        return i
    }, sr.prototype.createVendor = function(e, t, o, n) {
        var r = rr.vendorItemClone.cloneNode(!0);
        if (r.setAttribute("data-vnd-id", t.CustomVendorServiceId), uo.PCAccordionStyle === J.NoAccordion) {
            r.classList.remove("ot-accordion-layout");
            var i = r.querySelector("button");
            i && r.removeChild(i)
        } else rr.setExpandVendorList(r, o);
        rr.setVendorHeader(e, t, r, n);
        var s = r.querySelector(".ot-vnd-info-cntr");
        return rr.setVendorInfo(s, t), r
    }, sr.prototype.setExpandVendorList = function(e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }, sr.prototype.setVendorHeader = function(e, t, o, n) {
        var r = uo.PCShowAlwaysActiveToggle,
            i = "always active" === Go.getGrpStatus(e).toLowerCase(),
            s = o.querySelector(".ot-acc-hdr");
        i && s.classList.add("ot-always-active-group");
        var a = null;
        i && uo.PCCategoryStyle === ce.Toggle || (a = rr.setHeaderInputStyle(e, t, i, n));
        var l = rr.setHeaderText(t, s);
        s.appendChild(l);
        var c = rr.getPositionForElement(uo.PCAccordionStyle, rr.isToggle),
            d = c.positionIcon,
            p = c.positionInput;
        if (a && s.insertAdjacentElement(p, a), i && r) {
            var u = rr.getAlwaysActiveElement();
            s.insertAdjacentElement("beforeend", u)
        }
        if (uo.PCAccordionStyle !== J.NoAccordion) {
            var h = rr.setHeaderAccordionIcon();
            s.insertAdjacentElement(d, h)
        }
    }, sr.prototype.getPositionForElement = function(e, t) {
        var o = "beforeend",
            n = "beforeend";
        return t && e === J.PlusMinus && (o = "afterbegin"), t || (n = "afterbegin"), {
            positionIcon: o,
            positionInput: n
        }
    }, sr.prototype.setHeaderAccordionIcon = function() {
        return uo.PCAccordionStyle === J.Caret ? wo.arrowEl.cloneNode(!0) : wo.plusMinusEl.cloneNode(!0)
    }, sr.prototype.setHeaderText = function(e, t) {
        var o = t.querySelector(".ot-cat-header"),
            n = o.cloneNode();
        return t.removeChild(o), n.innerText = e.ServiceName, n
    }, sr.prototype.setHeaderInputStyle = function(e, t, o, n) {
        if (!uo.VendorServiceConfig.PCVSOptOut) return null;
        var r = Go.checkIsActiveByDefault(e),
            i = !1,
            s = go.vsConsent;
        i = s.has(t.CustomVendorServiceId) ? s.get(t.CustomVendorServiceId) : r;
        var a = nr();
        a.querySelector("input").classList.add("category-switch-handler");
        var l = a.querySelector("input"),
            c = t.CustomVendorServiceId,
            d = null != n ? n : "ot-vendor-id-" + c,
            p = "ot-vendor-header-id-" + c;
        fo(l).attr("id", d), fo(l).attr("name", d), fo(l).attr("aria-labelledby", p), fo(l).data("ot-vs-id", c), fo(l).data("optanongroupid", t.groupRef.CustomGroupId), l.disabled = o, io.setCheckedAttribute(null, l, i);
        var u = rr.isToggle ? d : p;
        return fo(a.querySelector("label")).attr("for", u), fo(a.querySelector(".ot-label-txt")).html(t.ServiceName), a
    }, sr.prototype.getAlwaysActiveElement = function() {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"), e.innerText = uo.AlwaysActiveText, e
    }, sr.prototype.setVendorInfo = function(e, t) {
        var o, n = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t)
            if (!rr.skipVendorInfoKey(o, t)) {
                var r = t[o],
                    i = rr.vendorInfoClone.cloneNode(!0);
                i.dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId;
                var s = i.querySelector(".ot-vnd-lbl"),
                    a = i.querySelector(".ot-vnd-cnt");
                if (s.innerHTML = rr.getLocalizedString(o), n.includes(o)) {
                    a.remove();
                    var l = document.createElement("a");
                    fo(l).attr("href", r), fo(l).attr("target", "_blank"), fo(l).attr("rel", "noopener"), fo(l).attr("aria-label", r + " " + uo.NewWinTxt), l.classList.add("ot-vnd-cnt"), l.innerText = r, s.insertAdjacentElement("afterend", l)
                } else a.innerHTML = r;
                e.appendChild(i)
            }
    }, sr.prototype.skipVendorInfoKey = function(e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }, sr.prototype.getLocalizedString = function(e) {
        return rr.stringTranslation.has(e) ? rr.stringTranslation.get(e) : "DEFAULT"
    }, sr.prototype.checkGroupChildrenState = function(e) {
        for (var t, o, n = 0, r = null != (t = e.SubGroups) ? t : []; n < r.length; n++) {
            var i = r[n];
            if (rr.checkGroupChildrenState(i)) return !0
        }
        for (var s = 0, a = null != (o = e.VendorServices) ? o : []; s < a.length; s++) {
            var l = a[s];
            if (go.vsConsent.get(l.CustomVendorServiceId)) return !0
        }
        return !1
    }, sr.prototype.changeVendorServiceState = function(e, t) {
        go.vsConsent.set(e.CustomVendorServiceId, t)
    }, sr.prototype.changeVendorServiceUIState = function(e, t) {
        e && (io.setCheckedAttribute(null, e, t), rr.isToggle && e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }, sr.prototype.changeGroupState = function(e, t, o) {
        var n = Go.getParentByGrp(e);
        if (Jn.toggleGrpStatus(e, t), rr.updateGroupUIState(e.CustomGroupId, t, o, null !== n), n) {
            var r = rr.checkGroupChildrenState(n);
            rr.changeGroupState(n, r, o)
        }
    }, sr.prototype.updateGroupUIState = function(e, t, o, n) {
        void 0 === n && (n = !1);
        var r = n ? "#ot-sub-group-id-" : "#ot-group-id-",
            i = document.querySelector(r + e);
        i && (io.setCheckedAttribute(null, i, t), o && i.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }, sr.prototype.getVendorInputElement = function(e) {
        return document.getElementById("ot-vendor-id-" + e)
    }, sr.prototype.checkIfIsInvalid = function(e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    }, sr);

    function sr() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }
    var ar, lr = "#onetrust-banner-sdk",
        cr = ".banner_logo",
        dr = "#onetrust-pc-sdk",
        pr = (ur.prototype.insertPcHtml = function() {
            ar.jsonAddAboutCookies(uo);
            var t = document.createDocumentFragment();
            if (pn.preferenceCenterGroup) {
                var e = document.createElement("div");
                fo(e).html(pn.preferenceCenterGroup.html);
                var o = e.querySelector("#onetrust-pc-sdk");
                ar.addClassesPerConfig(o), fo(t).append(o);
                var n = function(e) {
                        return t.querySelector(e)
                    },
                    r = function(e) {
                        return t.querySelectorAll(e)
                    };
                ar.manageCloseButtons(o, r, n), uo.Language && uo.Language.Culture && fo(n("#onetrust-pc-sdk")).attr("lang", uo.Language.Culture), ar.addLogos(n, r), fo(n(_o.P_Title)).html(uo.MainText), uo.PCCloseButtonType === he.Link && uo.PCTemplateUpgrade && po.pcName === Ot && fo(n(_o.P_Title)).addClass("ot-pc-title-shrink"), uo.PCTemplateUpgrade && fo(n(dr + ' > div[role="alertdialog"]')).css("height: 100%;"), fo(n(dr + ' > div[role="alertdialog"]')).attr(this._ariaLabel, uo.MainText), uo.PCRegionAriaLabel && (fo(n("#onetrust-pc-sdk")).attr(this._ariaLabel, uo.PCRegionAriaLabel), fo(n("#onetrust-pc-sdk")).attr("role", "region")), po.pcName === Ot && (fo(n(_o.P_Privacy_Txt)).html(uo.AboutCookiesText), fo(n(_o.P_Privacy_Hdr)).html(uo.AboutCookiesText)), fo(n(_o.P_Policy_Txt)).html(uo.MainInfoText), ar.configureLinkFields(n), ar.configureSubjectDataFields(n), ar.configureButtons(n, r), ar.setManagePreferenceText(n), ar.initializePreferenceCenterGroups(n, t), ar.removeListsWhenAppropriate(n), uo.PCTemplateUpgrade && ar.setOptOutSignalNotification(n)
            }
            var i = document.createElement("iframe");
            i.setAttribute("class", "ot-text-resize"), i.setAttribute("title", "onetrust-text-resize"), oo(i, "position: absolute; top: -50000px; width: 100em;"), i.setAttribute(this._ariaHidden, "true"), fo(t.querySelector("#onetrust-pc-sdk")).append(i);
            var s = document.getElementById("onetrust-consent-sdk");
            fo(s).append(t), po.ignoreInjectingHtmlCss || fo(document.body).append(s), (uo.showCookieList || go.showGeneralVendors) && Qn.InitializeHostList()
        }, ur.prototype.addClassesPerConfig = function(e) {
            /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || fo(e).addClass("ot-sdk-not-webkit"), uo.useRTL && fo(e).attr("dir", "rtl"), po.legIntSettings.PAllowLI && "IAB2" === po.iabType && (fo(e).addClass("ot-leg-opt-out"), po.legIntSettings.PShowLegIntBtn && fo(e).addClass("ot-leg-btn")), uo.BannerRelativeFontSizesToggle && fo(e).addClass("otRelFont"), uo.PCShowConsentLabels && fo(e).addClass("ot-tgl-with-label"), (uo.UseGoogleVendors || go.showGeneralVendors) && fo(e).addClass("ot-addtl-vendors"), "right" === uo.PreferenceCenterPosition && fo(e).addClass(uo.useRTL ? "right-rtl" : "right")
        }, ur.prototype.manageCloseButtons = function(e, t, o) {
            var n = fo(t(_o.P_Close_Btn)).el;
            if (uo.ShowPreferenceCenterCloseButton) {
                uo.CloseText || (uo.CloseText = "Close Preference Center");
                for (var r = 0, i = n; r < i.length; r++) {
                    var s = i[r];
                    uo.PCCloseButtonType === he.Link && uo.PCTemplateUpgrade ? (fo(s).html(uo.PCContinueText), fo(e).addClass("ot-close-btn-link"), fo(s).el.removeAttribute(this._ariaLabel)) : (fo(s).el.setAttribute(this._ariaLabel, uo.CloseText), Ao.setCloseIcon(o("#onetrust-pc-sdk .ot-close-icon")))
                }
            } else
                for (var a = 0; a < n.length; a++) fo(n[a].parentElement).el.removeChild(n[a])
        }, ur.prototype.addLogos = function(e, t) {
            var o = e(_o.P_Logo);
            if (o && uo.optanonLogo) {
                var n = Ao.updateCorrectUrl(uo.optanonLogo);
                Ao.checkMobileOfflineRequest(Ao.getBannerVersionUrl()) && (n = io.getRelativeURL(n, !0, !0));
                var r = document.createElement("img");
                r.setAttribute("alt", uo.PCLogoAria), r.setAttribute("src", n), o.append(r), uo.PCLogoAria && fo(o).attr(this._ariaLabel, uo.PCLogoAria)
            }
            Ao.insertFooterLogo(t(".ot-pc-footer-logo a"))
        }, ur.prototype.configureLinkFields = function(e) {
            if (uo.AboutText && fo(e(_o.P_Policy_Txt)).html(fo(e(_o.P_Policy_Txt)).html() + '\n            <br/><a href="' + uo.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + uo.PCCookiePolicyLinkScreenReader + '">' + uo.AboutText + "</a>"), uo.PCenterImprintLinkText) {
                uo.AboutText || e(_o.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>");
                var t = document.createElement("a");
                t.classList.add("ot-link-btn", "ot-imprint-handler"), t.textContent = uo.PCenterImprintLinkText, t.setAttribute(this._ariaLabel, uo.PCenterImprintLinkScreenReader), t.setAttribute("href", uo.PCenterImprintLinkUrl), e(_o.P_Policy_Txt).appendChild(t)
            }
            if (uo.PCenterVendorListLinkText) {
                var o = !uo.IsIabEnabled && go.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler";
                e(_o.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + o + '" aria-label="' + uo.PCenterVendorListLinkAriaLabel + '">\n            ' + uo.PCenterVendorListLinkText + "\n            </button>")
            }
        }, ur.prototype.configureSubjectDataFields = function(e) {
            if (uo.PCTemplateUpgrade && uo.PCenterUserIdTitleText && uo.IsConsentLoggingEnabled) {
                var t = ro.readCookieParam(rt.OPTANON_CONSENT, $e);
                if (e(_o.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + uo.PCenterUserIdTitleText + ": </span> " + t + "</div>"), uo.PCenterUserIdDescriptionText && e(_o.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + uo.PCenterUserIdDescriptionText + "</div>"), uo.PCenterUserIdTimestampTitleText) {
                    var o = ro.getCookie(rt.ALERT_BOX_CLOSED),
                        n = o && Ao.getUTCFormattedDate(o),
                        r = n || uo.PCenterUserIdNotYetConsentedText;
                    e(_o.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + uo.PCenterUserIdTimestampTitleText + ": </span> " + r + "</div>")
                }
            }
        }, ur.prototype.setManagePreferenceText = function(e) {
            var t = e(_o.P_Manage_Cookies_Txt),
                o = fo(t);
            t && (o.html(uo.ManagePreferenceText), uo.ManagePreferenceText || o.attr(this._ariaHidden, !0))
        }, ur.prototype.configureButtons = function(e, t) {
            uo.ConfirmText.trim() ? fo(e("#accept-recommended-btn-handler")).html(uo.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
            for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++) fo(o[n]).html(uo.AllowAllText);
            var r = t(".ot-pc-refuse-all-handler");
            if (uo.PCenterShowRejectAllButton && uo.PCenterRejectAllButtonText.trim())
                for (n = 0; n < r.length; n++) fo(r[n]).html(uo.PCenterRejectAllButtonText);
            else io.removeChild(r)
        }, ur.prototype.removeListsWhenAppropriate = function(e) {
            if (!uo.IsIabEnabled) {
                var t = e(_o.P_Vendor_Container);
                t && t.parentElement.removeChild(t)
            }
            if (!uo.showCookieList && !go.showGeneralVendors) {
                var o = e(_o.P_Host_Cntr);
                o && o.parentElement.removeChild(o)
            }
        }, ur.prototype.setParentGroupName = function(e, t, o, n) {
            var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
            fo(r).html(t), fo(r).attr("id", o), po.pcName === Ot && (e.querySelector(_o.P_Category_Header).innerHTML = t, e.querySelector("" + _o.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
        }, ur.prototype.setLegIntButton = function(e, t, o, n) {
            void 0 === o && (o = !1);
            var r = !0; - 1 < go.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1);
            var i = Oo.generateLegIntButtonElements(r, t.OptanonGroupId);
            o ? n.insertAdjacentHTML("afterend", i) : e.insertAdjacentHTML("beforeend", i);
            var s = e.querySelector(".ot-remove-objection-handler");
            s && oo(s, s.getAttribute("data-style"))
        }, ur.prototype.setParentGroupDescription = function(e, t, o, n, r) {
            var i = Jn.safeFormattedGroupDescription(t),
                s = e.querySelector("p:not(.ot-always-active)"),
                a = e.querySelector(_o.P_Acc_Grp_Desc),
                l = s || a;
            return -1 < eo.indexOf(t.Type) && o.PCGrpDescType === E.Legal ? i = t.DescriptionLegal : l.classList.add("ot-category-desc"), po.legIntSettings.PAllowLI && !po.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
                return e.HasLegIntOptOut
            }) || t.HasLegIntOptOut ? l.parentElement.classList.add("ot-leg-border-color") : io.removeChild(e.querySelector(_o.P_Li_Hdr))), po.pcName !== Ot && l.setAttribute("id", n), fo(l).html(i), t.Type === Yt && io.removeChild(l), l
        }, ur.prototype.cloneOtHtmlEls = function(e) {
            var t = /otPcPanel|otPcCenter/;
            wo.toggleEl = fo(e(".ot-tgl")).el.cloneNode(!0), wo.arrowEl = fo(e('#onetrust-pc-sdk [role="alertdialog"] > ' + _o.P_Arrw_Cntr)).el.cloneNode(!0), wo.subGrpEl = fo(e(_o.P_Sub_Grp_Cntr)).el.cloneNode(!0), wo.vListEl = fo(e(_o.P_Ven_Lst_Cntr)).el.cloneNode(!0), wo.cListEl = fo(e(_o.P_Host_Lst_cntr)).el.cloneNode(!0), wo.chkboxEl = fo(e(_o.P_CBx_Cntr)).el.cloneNode(!0), wo.accordionEl = fo(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(po.pcName) && (wo.plusMinusEl = fo(e(".ot-plus-minus")).el.cloneNode(!0)), io.removeChild(e(".ot-tgl")), io.removeChild(e('#onetrust-pc-sdk [role="alertdialog"] > ' + _o.P_Arrw_Cntr)), io.removeChild(e(_o.P_Sub_Grp_Cntr)), io.removeChild(e(_o.P_Ven_Lst_Cntr)), io.removeChild(e(_o.P_Host_Lst_cntr)), io.removeChild(e(_o.P_CBx_Cntr)), io.removeChild(e(".ot-acc-cntr")), t.test(po.pcName) && io.removeChild(e(".ot-plus-minus"))
        }, ur.prototype.insertSelectAllEls = function(e) {
            var t = e(_o.P_Select_Cntr + " .ot-sel-all-chkbox"),
                o = go.showVendorService ? nr() : wo.chkboxEl.cloneNode(!0);
            o.id = _o.P_Sel_All_Host_El, o.querySelector("input").id = "select-all-hosts-groups-handler", o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), fo(t).append(o);
            var n = go.showVendorService ? nr() : wo.chkboxEl.cloneNode(!0);
            n.id = _o.P_Sel_All_Vendor_Consent_El, n.querySelector("input").id = "select-all-vendor-groups-handler", n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), fo(t).append(n);
            var r = go.showVendorService ? nr() : wo.chkboxEl.cloneNode(!0);
            r.id = _o.P_Sel_All_Vendor_Leg_El, r.querySelector("input").id = "select-all-vendor-leg-handler", r.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), fo(t).append(r)
        }, ur.prototype.initializePreferenceCenterGroups = function(e, t) {
            var o = po.pcName;
            if (to.isV2Template) {
                ar.cloneOtHtmlEls(e);
                var n = wo.chkboxEl.cloneNode(!0);
                n.querySelector("input").classList.add("category-filter-handler"), fo(e(_o.P_Fltr_Modal + " " + _o.P_Fltr_Option)).append(n), ar.insertSelectAllEls(e)
            }
            var r = fo(e("#onetrust-pc-sdk " + _o.P_Category_Grp));
            o === Et || o === Bt || o === Vt ? uo.PCenterEnableAccordion ? io.removeChild(r.el.querySelector(_o.P_Category_Item + ":not(.ot-accordion-layout)")) : io.removeChild(r.el.querySelector(_o.P_Category_Item + ".ot-accordion-layout")) : o === Ot && (uo.PCenterEnableAccordion = !1);
            var i, s = e("#onetrust-pc-sdk " + _o.P_Category_Item),
                a = to.isV2Template ? wo.subGrpEl.cloneNode(!0) : fo(e(_o.P_Sub_Grp_Cntr)),
                l = to.isV2Template ? null : fo(e(_o.P_Acc_Container + " " + _o.P_Sub_Grp_Cntr));
            uo.PCTemplateUpgrade && /otPcTab/.test(o) && (i = e(".ot-abt-tab").cloneNode(!0), io.removeChild(e(".ot-abt-tab"))), r.el.removeChild(s), ar.setVendorListClass(e, s), ar.setPCHeader(e, s), ar.createHtmlForEachGroup({
                fm: e,
                fragment: t,
                categoryGroupTemplate: s,
                cookiePreferencesContainer: r,
                popupSubGrpContainer: l,
                subGrpContainer: a
            }), ar.setPcTabLayout(e, t, i)
        }, ur.prototype.createHtmlForEachGroup = function(e) {
            var t = e.fm,
                o = e.fragment,
                n = e.categoryGroupTemplate,
                r = e.cookiePreferencesContainer,
                i = e.popupSubGrpContainer,
                s = e.subGrpContainer,
                a = uo.Groups.filter(function(e) {
                    return e.Order
                }),
                l = 0 === r.el.children.length;
            uo.PCTemplateUpgrade && (go.showVendorService ? rr.setHtmlTemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')) : rr.removeVSUITemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')));
            for (var c = 0, d = a; c < d.length; c++) {
                var p = d[c],
                    u = p.GroupName,
                    h = p.CustomGroupId,
                    g = n.cloneNode(!0),
                    C = "ot-group-id-" + h,
                    y = "ot-header-id-" + h,
                    f = "ot-desc-id-" + h;
                (g = fo(g).el).setAttribute("data-optanongroupid", h);
                var v = g.querySelector("input,button");
                v && (v.setAttribute("aria-controls", f), v.setAttribute("aria-labelledby", y)), ar.setParentGroupName(g, u, y, f), ar.setPopupData(p, g);
                var k = ar.setParentGroupDescription(g, p, uo, f, C);
                to.isV2Template ? ar.setToggle(g, k, p, C, y) : ar.setToggleProps(g, k, p, C, y);
                var m = !!t("#onetrust-pc-sdk " + _o.P_Category_Grp).querySelector(_o.P_Category_Item),
                    b = r.el.querySelectorAll(_o.P_Category_Item + ":not(.ot-vnd-item)");
                b = b[b.length - 1], l ? r.append(g) : m ? Co.insertAfter(g, b) : Co.insertAfter(g, r.el.querySelector(_o.P_Li_Hdr) || r.el.querySelector("h3")), ar.setSubGroupData(p, g, i, s);
                var S = uo.PCGrpDescLinkPosition === B.Top;
                p.Type === Yt && S && (k = g.querySelector(_o.P_Sub_Grp_Cntr));
                var P = S ? k : null;
                ar.setVendorListBtn(g, t, o, p, P, uo), ar.setHostListBtn(g, t, o, p), ar.setVendorServiceData(p, g), go.dataGroupState.push(p)
            }
        }, ur.prototype.setPopupData = function(e, t) {
            po.pcName === wt && (e.ShowVendorList && "IAB2" === uo.IabType ? (io.removeChild(t.querySelector("p:not(.ot-always-active)")), io.removeChild(t.querySelector(_o.P_Acc_Txt + ":not(" + _o.P_Acc_Container + ")")), e.SubGroups.length || to.isV2Template || io.removeChild(t.querySelector(_o.P_Sub_Grp_Cntr))) : io.removeChild(t.querySelector(_o.P_Acc_Container)))
        }, ur.prototype.setVendorServiceData = function(e, t) {
            var o = po.pcName;
            if (go.showVendorService && uo.VendorServiceConfig.PCVSCategoryView) {
                var n = _o.P_Acc_Txt;
                o === Ot && (n = _o.P_Desc_Container);
                var r = t.querySelector(n);
                uo.PCAccordionStyle === J.NoAccordion && (r = t), rr.insertVendorServiceHtml(e, r)
            }
        }, ur.prototype.jsonAddAboutCookies = function(e) {
            var t = {};
            return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
        }, ur.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
            var s = po.pcName;
            if (n.ShowVendorList) {
                var a = void 0,
                    l = void 0;
                if (to.isV2Template ? a = (l = wo.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : l = (a = e.querySelector(".category-vendors-list-handler")).parentElement, a.innerHTML = i.VendorListText + "&#x200E;", a.setAttribute(this._ariaLabel, uo.PCOpensVendorDetailsAlert), a.setAttribute("data-parent-id", n.CustomGroupId), i.PCGrpDescType === E.UserFriendly && (a.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), a.insertAdjacentHTML("afterend", "<a href='" + uo.IabLegalTextUrl + "?lang=" + go.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + i.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + uo.NewWinTxt + "</span></a>")), to.isV2Template) {
                    var c = e;
                    s === Ot ? c = e.querySelector("" + _o.P_Desc_Container) : i.PCenterEnableAccordion && (c = e.querySelector(_o.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                }
                r && r.insertAdjacentElement("beforebegin", l)
            } else if (!to.isV2Template) {
                if (s !== Bt && s !== Et || i.PCenterEnableAccordion) {
                    if (s === wt || s === Bt || s === Et && i.PCenterEnableAccordion) {
                        var d = t("#vendor-list-container"),
                            p = e.querySelector(_o.P_Acc_Txt);
                        d && o.querySelector("" + _o.P_Content).removeChild(d), to.isV2Template || fo(p).el.removeChild(p.querySelector(_o.P_Ven_Lst_Cntr))
                    }
                } else io.removeChild(e.querySelector(_o.P_Ven_Lst_Cntr));
                if (s === Ot || s === Vt) {
                    var u = e.querySelector(_o.P_Ven_Lst_Cntr);
                    u && u.parentElement.removeChild(u)
                }
            }
        }, ur.prototype.setHostListBtn = function(e, t, o, n) {
            var r = po.pcName,
                i = !1;
            uo.showCookieList && (i = -1 < io.findIndex(b(n.SubGroups, [n]), function(e) {
                return -1 === Xt.indexOf(e.Type) && e.FirstPartyCookies.length
            }));
            var s = go.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
            if (!go.showVendorService && (uo.showCookieList || go.showGeneralVendors) && (n.ShowHostList || i || s)) {
                var a = void 0;
                if (to.isV2Template) {
                    var l = wo.cListEl.cloneNode(!0);
                    a = l.querySelector(".category-host-list-handler");
                    var c = e;
                    r === Ot ? c = e.querySelector("" + _o.P_Desc_Container) : uo.PCenterEnableAccordion && (c = e.querySelector(_o.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                } else a = e.querySelector(".category-host-list-handler");
                ar.setcListHandler(a, n)
            } else ar.setHostListVendorList(t, o, e)
        }, ur.prototype.setcListHandler = function(e, t) {
            if (e) {
                var o = ar.setcListHeaderTitleAndScreenReader(),
                    n = o[0],
                    r = o[1];
                e.innerHTML = n + "&#x200E;", e.setAttribute(this._ariaLabel, r), e.setAttribute("data-parent-id", t.CustomGroupId)
            }
        }, ur.prototype.setcListHeaderTitleAndScreenReader = function() {
            var e, t;
            return e = go.showTrackingTech ? (t = uo.AdditionalTechnologiesConfig.PCTechDetailsText, uo.AdditionalTechnologiesConfig.PCTechDetailsAriaLabel) : go.showGeneralVendors ? (t = uo.GroupGenVenListLabel, uo.PCenterVendorListScreenReader) : (t = uo.ThirdPartyCookieListText, uo.PCOpensCookiesDetailsAlert), [t, e]
        }, ur.prototype.setHostListVendorList = function(e, t, o) {
            if (po.pcName === wt) {
                var n = e("#vendor-list-container"),
                    r = o.querySelector(_o.P_Acc_Txt);
                n && t.querySelector("" + _o.P_Content).removeChild(n), r.querySelector(_o.P_Host_Lst_cntr) && fo(r).el.removeChild(r.querySelector(_o.P_Host_Lst_cntr))
            } else {
                var i = o.querySelector(_o.P_Host_Lst_cntr);
                i && i.parentElement.removeChild(i)
            }
        }, ur.prototype.setSubGroupData = function(e, t, o, n) {
            if (0 < e.SubGroups.length && e.ShowSubgroup) {
                var r = po.pcName === wt && e.ShowVendorList && "IAB2" === uo.IabType && !uo.PCTemplateUpgrade;
                ar.setSubGrps(e, r ? o : n, t, uo)
            }
        }, ur.prototype.setSubGrps = function(t, o, n, r) {
            if (po.pcName === wt && t.ShowVendorList && "IAB2" === r.IabType && !uo.PCTemplateUpgrade) {
                var e = n.querySelector(_o.P_Sub_Grp_Cntr);
                e.parentElement.removeChild(e)
            }
            t.SubGroups.forEach(function(e) {
                ar.setSubGroups({
                    group: t,
                    subgroup: e,
                    grpEl: n,
                    subGrpEl: o,
                    json: r
                })
            })
        }, ur.prototype.setSubGroups = function(e) {
            var t, o = e.group,
                n = e.subgroup,
                r = e.grpEl,
                i = e.subGrpEl,
                s = e.json,
                a = po.pcName;
            "IAB2" !== po.iabType || n.Type !== Kt || n.HasConsentOptOut || (t = !0);
            var l, c, d = to.isV2Template ? i.cloneNode(!0) : i.el.cloneNode(!0),
                p = d.querySelector(_o.P_Subgp_ul),
                u = d.querySelector(_o.P_Subgrp_li).cloneNode(!0),
                h = n.CustomGroupId,
                g = "ot-sub-group-id-" + h,
                C = Go.getGrpStatus(n).toLowerCase(),
                y = u.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
                f = u.querySelector(_o.P_Tgl_Cntr);
            if (u.setAttribute("data-optanongroupid", h), to.isV2Template ? ((c = ar.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", h), c.querySelector("input").classList.add("cookie-subgroup-handler"), l = c.cloneNode(!0), f.insertAdjacentElement("beforeend", l)) : (l = u.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", h), fo(d.querySelector(_o.P_Subgp_ul)).html(""), fo(y).html(n.GroupName), go.showVendorService) {
                var v = document.createElement("div");
                v.classList.add("ot-acc-hdr"), y.classList.add("ot-cat-header"), v.appendChild(y);
                var k = "afterbegin";
                uo.PCCategoryStyle === ce.Toggle && (k = "beforeend"), v.insertAdjacentElement(k, l), u.removeChild(u.querySelector(_o.P_Subgrp_Tgl_Cntr)), u.insertAdjacentElement("afterbegin", v)
            }
            l.querySelector("input").setAttribute("id", g), l.querySelector("input").setAttribute(this._ariaLabel, n.GroupName), l.querySelector("label").setAttribute("for", g), ar.setSubGroupDescription({
                json: s,
                group: o,
                subgroup: n,
                subGroupClone: u
            });
            var m = b($t, Qt);
            o.ShowSubgroupToggle && -1 < m.indexOf(n.Type) ? ar.setSubGroupToggle({
                id: g,
                subGroupClone: u,
                group: o,
                subgroup: n,
                toggleGroup: f
            }) : C === dt && (o.ShowSubgroupToggle || -1 === Zt.indexOf(n.Type)) || (t = !0), ar.setSubGroupsProperties({
                removeConsentToggle: t,
                subGroupToggle: l,
                subGroupClone: u,
                status: C,
                subgroup: n,
                grpEl: r,
                pcName: a,
                json: s,
                subGrpElClone: d,
                ulParentContainerEle: p
            })
        }, ur.prototype.setSubGroupDescription = function(e) {
            var t = e.json,
                o = e.group,
                n = e.subgroup,
                r = e.subGroupClone,
                i = po.pcName,
                s = t.PCGrpDescType === E.Legal,
                a = i === wt && o.ShowVendorList && "IAB2" === t.IabType,
                l = fo(r.querySelector(_o.P_Subgrp_Desc));
            if (a) {
                var c = n.DescriptionLegal && s ? n.DescriptionLegal : n.GroupDescription;
                l.html(c)
            } else {
                c = Jn.safeFormattedGroupDescription(n);
                var d = !1; - 1 < eo.indexOf(n.Type) && s && (d = !0, c = n.DescriptionLegal), t.PCenterEnableAccordion && d || (l = fo(r.querySelector("p"))), o.ShowSubGroupDescription ? l.html(c) : l.html("")
            }
        }, ur.prototype.setSubGroupToggle = function(e) {
            var t = e.id,
                o = e.subGroupClone,
                n = e.group,
                r = e.subgroup,
                i = e.toggleGroup,
                s = Jn.isGroupActive(r);
            ar.setSubGroupActive({
                group: n,
                subgroup: r,
                subGroupClone: o
            }, s);
            var a = i.querySelector(".ot-label-status");
            if (uo.PCShowConsentLabels ? a.innerHTML = s ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(a), po.legIntSettings.PAllowLI && r.Type === Kt && r.HasLegIntOptOut)
                if (po.legIntSettings.PShowLegIntBtn) ar.setLegIntButton(o, r);
                else {
                    var l = i.cloneNode(!0);
                    i.insertAdjacentElement("afterend", l);
                    var c = l.querySelector(".ot-label-status"),
                        d = l.querySelector("input");
                    d.setAttribute("id", t + "-leg-out"), l.querySelector("label").setAttribute("for", t + "-leg-out"), r.IsLegIntToggle = !0;
                    var p = Jn.isGroupActive(r);
                    uo.PCShowConsentLabels ? c.innerHTML = p ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(c), io.setCheckedAttribute(null, d, p), r.IsLegIntToggle = !1
                }
        }, ur.prototype.setSubGroupActive = function(e, t) {
            if (t) {
                var o = e.group,
                    n = e.subgroup,
                    r = e.subGroupClone,
                    i = Go.getGrpStatus(o).toLowerCase();
                r.querySelector("input").setAttribute("checked", ""), i === dt && -1 === eo.indexOf(n.Type) && (r.querySelector("input").disabled = !0, r.querySelector("input").setAttribute("disabled", "true"))
            }
        }, ur.prototype.setSubGroupsProperties = function(e) {
            var t = e.removeConsentToggle,
                o = e.subGroupToggle,
                n = e.subGroupClone,
                r = e.status,
                i = e.subgroup,
                s = e.grpEl,
                a = e.pcName,
                l = e.json,
                c = e.subGrpElClone,
                d = e.ulParentContainerEle;
            if (t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(this._ariaHidden, "true")), r === dt && !t) {
                o && o.parentElement.removeChild(o);
                var p = n.querySelector(_o.P_Tgl_Cntr);
                p && p.classList.add("ot-always-active-subgroup"), ar.setAlwaysActive(n, !0)
            }
            if ("COOKIE" === i.Type && -1 !== i.Parent.indexOf("STACK") && oo(c, "display: none;"), fo(d).append(n), to.isV2Template) {
                var u = s;
                "otPcTab" === a ? u = s.querySelector("" + _o.P_Desc_Container) : l.PCenterEnableAccordion && (u = s.querySelector(_o.P_Acc_Txt)), u.insertAdjacentElement("beforeend", c)
            } else {
                var h = s.querySelector(_o.P_Category_Item + " " + _o.P_Ven_Lst_Cntr);
                h && h.insertAdjacentElement("beforebegin", c)
            }
            if (go.showVendorService && uo.VendorServiceConfig.PCVSCategoryView) {
                var g = d;
                rr.insertVendorServiceHtml(i, g)
            }
        }, ur.prototype.getInputEleForCategory = function(e) {
            return go.showVendorService && uo.PCCategoryStyle === ce.Checkbox && e.classList.add("ot-checkbox-consent"), ar.getInputEle()
        }, ur.prototype.getInputEle = function() {
            return "IAB2" !== uo.IabType && uo.PCTemplateUpgrade ? nr() : wo.toggleEl.cloneNode(!0)
        }, ur.prototype.setToggle = function(e, t, o, n, r) {
            var i = ar.getInputEleForCategory(e);
            i.querySelector("input").classList.add("category-switch-handler");
            var s = i.querySelector("input"),
                a = e.querySelector(_o.P_Category_Header),
                l = Jn.isGroupActive(o),
                c = Go.getGrpStatus(o).toLowerCase() === dt,
                d = o.OptanonGroupId.toString(),
                p = !0;
            if ("IAB2" !== po.iabType || o.Type !== Kt && o.Type !== Yt || o.HasConsentOptOut || (p = !1), fo(i.querySelector("label")).attr("for", n), fo(i.querySelector(".ot-label-txt")).html(o.GroupName), po.legIntSettings.PAllowLI && o.Type === Kt && o.HasLegIntOptOut)
                if (po.legIntSettings.PShowLegIntBtn) ar.setLegIntButton(e, o, !0, t);
                else {
                    var u = i.cloneNode(!0);
                    o.IsLegIntToggle = !0;
                    var h = Jn.isGroupActive(o),
                        g = u.querySelector(".ot-label-status");
                    uo.PCShowConsentLabels ? g.innerHTML = h ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(g), o.IsLegIntToggle = !1, Jn.setInputID(u.querySelector("input"), n + "-leg-out", d, h, r), fo(u.querySelector("label")).attr("for", n + "-leg-out"), a.insertAdjacentElement("afterend", u)
                }
            var C = i.querySelector(".ot-label-status");
            uo.PCShowConsentLabels ? C.innerHTML = l ? uo.PCActiveText : uo.PCInactiveText : io.removeChild(C);
            var y = uo.PCCategoryStyle === ce.Toggle;
            this.hideToggleContainer(c, p, y, i), p && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r), ar.setNoAccordionHeader(e, c)
        }, ur.prototype.setNoAccordionHeader = function(e, t) {
            if ("IAB2" !== uo.IabType && uo.PCTemplateUpgrade) {
                var o = uo.PCCategoryStyle === ce.Checkbox;
                if (uo.PCAccordionStyle === J.NoAccordion && o) {
                    var n = document.createElement("div");
                    n.classList.add("ot-acc-hdr");
                    var r = e.querySelector(".ot-chkbox"),
                        i = e.querySelector(".ot-always-active"),
                        s = e.querySelector(_o.P_Category_Header);
                    r && n.appendChild(r), n.appendChild(s), t && n.appendChild(i), e.insertBefore(n, e.firstChild)
                }
            }
        }, ur.prototype.hideToggleContainer = function(e, t, o, n) {
            !e && t || !o || (n.classList.add("ot-hide-tgl"), n.querySelector("input").setAttribute(this._ariaHidden, "true"))
        }, ur.prototype.setAlwaysActiveOrToggleInput = function(e, t, o, n, r, i) {
            var s = "always active" === Go.getGrpStatus(e).toLowerCase(),
                a = uo.PCCategoryStyle === ce.Toggle,
                l = e.OptanonGroupId.toString(),
                c = Jn.isGroupActive(e),
                d = t.querySelector(_o.P_Category_Header);
            "IAB2" !== uo.IabType && uo.PCTemplateUpgrade ? (s && uo.PCShowAlwaysActiveToggle && (ar.setAlwaysActive(t), o.querySelector("input").setAttribute("disabled", "true")), s && a || ar.insertAccordionInputHeader(d, o), Jn.setInputID(n, r, l, c, i), ar.insertAccordionPointer(t, d)) : (ar.insertAccordionPointer(t, d), s ? uo.PCShowAlwaysActiveToggle && ar.setAlwaysActive(t) : (ar.insertAccordionInputHeader(d, o), Jn.setInputID(n, r, l, c, i)))
        }, ur.prototype.setOptOutSignalVisibility = function(e) {
            var t = !0 === navigator.globalPrivacyControl && po.gpcForAGrpEnabled,
                o = Oo.isAlertBoxClosedAndValid() && Jn.isAnyGroupOptedOut();
            uo.PCShowOptOutSignal && (t || o || po.previewMode) ? e.classList.remove("ot-hide") : e.classList.add("ot-hide")
        }, ur.prototype.setOptOutSignalNotification = function(e) {
            var t = Ao.createOptOutSignalElement(e, !0);
            ar.setOptOutSignalVisibility(t)
        }, ur.prototype.insertAccordionInputHeader = function(e, t) {
            var o = ar.getPositionForInputEle();
            e.insertAdjacentElement(o, t)
        }, ur.prototype.getPositionForInputEle = function() {
            var e = "beforebegin";
            return "IAB2" !== uo.IabType && uo.PCTemplateUpgrade ? uo.PCCategoryStyle === ce.Toggle && (e = "afterend") : e = "afterend", e
        }, ur.prototype.insertAccordionPointer = function(e, t) {
            if (e.classList.add("ot-vs-config"), uo.PCenterEnableAccordion)
                if ("IAB2" !== uo.IabType && uo.PCTemplateUpgrade) {
                    var o = e.querySelector(_o.P_Acc_Header),
                        n = void 0,
                        r = void 0;
                    n = uo.PCAccordionStyle === J.Caret ? (r = "beforeend", wo.arrowEl.cloneNode(!0)) : (r = uo.PCCategoryStyle === ce.Checkbox ? "beforeend" : "afterbegin", wo.plusMinusEl.cloneNode(!0)), o.insertAdjacentElement(r, n)
                } else uo.PCAccordionStyle === J.Caret ? t.insertAdjacentElement("afterend", wo.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", wo.plusMinusEl.cloneNode(!0))
        }, ur.prototype.setToggleProps = function(e, t, o, n, r) {
            var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
                s = e.querySelectorAll("label"),
                a = Jn.isGroupActive(o),
                l = o.CustomGroupId,
                c = e.querySelector(".label-text");
            c && fo(c).html(o.GroupName);
            for (var d = 0; d < i.length; d++)
                if (s[d] && fo(s[d]).attr("for", n), 2 <= i.length && 0 === d) fo(i[d]).attr("id", n + "-toggle");
                else {
                    var p = !0;
                    if ("IAB2" !== po.iabType || o.Type !== Kt && o.Type !== Yt || o.HasConsentOptOut || (p = !1), po.legIntSettings.PAllowLI && o.Type === Kt && o.HasLegIntOptOut)
                        if (po.legIntSettings.PShowLegIntBtn) ar.setLegIntButton(e, o, !0, t);
                        else {
                            var u = e.querySelector(_o.P_Tgl_Cntr + ":not(" + _o.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle"),
                                h = u.cloneNode(!0);
                            u.insertAdjacentElement("afterend", h);
                            var g = h.querySelector("input");
                            o.IsLegIntToggle = !0;
                            var C = Jn.isGroupActive(o);
                            o.IsLegIntToggle = !1, Jn.setInputID(g, n + "-leg-out", l, C, r), fo(h.querySelector("label")).attr("for", n + "-leg-out"), io.removeChild(h.querySelector(_o.P_Arrw_Cntr))
                        }
                    var y = Go.getGrpStatus(o).toLowerCase() === dt;
                    if (y || !p) {
                        var f = i[d].closest(".ot-toggle");
                        f && (f.classList.add("ot-hide-tgl"), f.querySelector("input").setAttribute(this._ariaHidden, !0))
                    }
                    p && (y && ar.setAlwaysActive(e), Jn.setInputID(i[d], n, l, a, r))
                }
        }, ur.prototype.setAlwaysActive = function(e, t) {
            void 0 === t && (t = !1);
            var o = po.pcName;
            if (o === wt || o === Ot || t) {
                var n = e.querySelector(_o.P_Tgl_Cntr);
                n && n.insertAdjacentElement("afterbegin", fo("<div class='ot-always-active'>" + uo.AlwaysActiveText + "</div>", "ce").el)
            } else {
                var r = e.querySelector(_o.P_Category_Header);
                !to.isV2Template && uo.PCenterEnableAccordion && (r = e.querySelector(_o.P_Arrw_Cntr)), fo(r).el.insertAdjacentElement("afterend", fo("<div class='ot-always-active'>" + uo.AlwaysActiveText + "</div>", "ce").el)
            }
            if (uo.PCenterEnableAccordion) {
                var i = e.querySelector(_o.P_Acc_Header);
                i && i.classList.add("ot-always-active-group")
            } else {
                var s = e.querySelector("" + _o.P_Desc_Container);
                s && s.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group")
            }
        }, ur.prototype.setPcTabLayout = function(e, t, o) {
            var n = e(".ot-tab-desc");
            if ("otPcTab" === po.pcName)
                if (o && e("#onetrust-pc-sdk " + _o.P_Category_Grp).insertAdjacentElement("afterbegin", o), n && 640 < window.innerWidth && fo(n).append(t.querySelectorAll("#onetrust-pc-sdk " + _o.P_Desc_Container)), uo.IsIabEnabled) e(_o.P_Desc_Container + " .category-vendors-list-handler").innerHTML = uo.VendorListText + "&#x200E;";
                else {
                    var r = e(_o.P_Desc_Container + " .category-vendors-list-handler");
                    r && r.parentElement.removeChild(r)
                }
        }, ur.prototype.setVendorListClass = function(e, t) {
            to.isV2Template ? uo.PCAccordionStyle === J.Caret && (fo(e("#onetrust-pc-sdk " + _o.P_Vendor_List)).addClass("ot-enbl-chr"), uo.PCenterEnableAccordion && fo(e("#onetrust-pc-sdk " + _o.P_Content)).addClass("ot-enbl-chr")) : fo(t.querySelector(_o.P_Sub_Grp_Cntr)).remove()
        }, ur.prototype.setPCHeader = function(e, t) {
            var o = po.pcName,
                n = e(_o.P_Li_Hdr) || t.querySelector(_o.P_Li_Hdr);
            po.legIntSettings.PAllowLI && po.grpContainLegalOptOut && "IAB2" === uo.IabType && !po.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = uo.ConsentText, n.querySelector("span:last-child").innerText = uo.LegitInterestText, to.isV2Template && (n.querySelector("span:first-child").innerText = uo.PCenterConsentText, n.querySelector("span:last-child").innerText = uo.PCenterLegIntColumnHeader), uo.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (io.removeChild(e("#onetrust-pc-sdk " + _o.P_Li_Hdr)), io.removeChild(t.querySelector(_o.P_Li_Hdr)))
        }, ur);

    function ur() {
        this._ariaHidden = "aria-hidden", this._ariaLabel = "aria-label"
    }
    var hr, gr = (Cr.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        go.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", ""),
                o = Go.getGrpStatus(Go.getGroupById(t)).toLowerCase() === dt;
            io.endsWith(e, ":1") && (pn.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), go.hostsConsent.forEach(function(e) {
            io.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), go.showGeneralVendors && uo.GenVenOptOut && uo.GeneralVendors.forEach(function(e) {
            go.genVendorsConsent[e.VendorCustomId] && (go.softOptInGenVendors.includes(e.VendorCustomId) && nn.isLandingPage() || n.push(e.VendorCustomId))
        }), go.vsIsActiveAndOptOut && go.getVendorsInDomain().forEach(function(e) {
            go.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + io.arrToStr(n) + ",";
        uo.GoogleConsent.GCEnable && !po.otDataLayer.ignore && this.updateGCMTags(n), window.OnetrustActiveGroups = t, window.OptanonActiveGroups = t, po.gcmUpdateCallback && po.gcmUpdateCallback(), po.otDataLayer.ignore || void 0 === this._window[po.otDataLayer.name] || this._window[po.otDataLayer.name].constructor !== Array ? !po.otDataLayer.ignore && po.otDataLayer.name && (this._window[po.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        }]) : (this._window[po.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }), this._window[po.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        })), this.dispatchEvents(e, n, t)
    }, Cr.prototype.dispatchEvents = function(e, t, o) {
        var n, r;
        !e && po.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust", {
            detail: t
        }));
        var i = ro.readCookieParam(rt.OPTANON_CONSENT, "groups"),
            s = go.fireOnetrustGrp || !i || e || !po.gtmUpdatedinStub;
        s && (go.fireOnetrustGrp = !1, !po.otDataLayer.ignore && this._window[po.otDataLayer.name] && this._window[po.otDataLayer.name].constructor === Array && this._window[po.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }), r = new CustomEvent("OneTrustGroupsUpdated", {
            detail: t
        })), setTimeout(function() {
            n && s && window.dispatchEvent(n), r && window.dispatchEvent(r)
        })
    }, Cr.prototype.updateGCMTags = function(e) {
        var t = {};
        if (this.canUpdateGCMCategories()) {
            if (uo.GoogleConsent.GCAdStorage !== Nt) {
                var o = e.includes(uo.GoogleConsent.GCAdStorage) ? be.granted : be.denied;
                t[ke.ad_storage] = o
            }
            if (uo.GoogleConsent.GCAnalyticsStorage !== Nt) {
                var n = e.includes(uo.GoogleConsent.GCAnalyticsStorage) ? be.granted : be.denied;
                t[ke.analytics_storage] = n
            }
            if (uo.GoogleConsent.GCFunctionalityStorage !== Nt) {
                var r = e.includes(uo.GoogleConsent.GCFunctionalityStorage) ? be.granted : be.denied;
                t[ke.functionality_storage] = r
            }
            if (uo.GoogleConsent.GCPersonalizationStorage !== Nt) {
                var i = e.includes(uo.GoogleConsent.GCPersonalizationStorage) ? be.granted : be.denied;
                t[ke.personalization_storage] = i
            }
            if (uo.GoogleConsent.GCSecurityStorage !== Nt) {
                var s = e.includes(uo.GoogleConsent.GCSecurityStorage) ? be.granted : be.denied;
                t[ke.security_storage] = s
            }
        }
        var a = ro.getCookie(rt.ALERT_BOX_CLOSED),
            l = po.getRegionRule().Global;
        if ("function" != typeof window.gtag) {
            var c = this._window;
            window.gtag = function(e, t, o) {
                po.otDataLayer.ignore || (c[po.otDataLayer.name] ? c[po.otDataLayer.name].push(arguments) : c[po.otDataLayer.name] = [arguments])
            }
        }
        "function" == typeof window.gtag && (po.gcmDevIdSet || (window.gtag(Ce.set, "developer_id.dYWJhMj", !0), po.gcmDevIdSet = !0), a && (l || (t[ke.region] = po.gcmCountries), 0 !== Object.keys(t).length && window.gtag(Ce.consent, fe.update, t)))
    }, Cr.prototype.canUpdateGCMCategories = function() {
        return uo.GoogleConsent.GCAdStorage !== Nt || uo.GoogleConsent.GCAnalyticsStorage !== Nt || uo.GoogleConsent.GCFunctionalityStorage !== Nt || uo.GoogleConsent.GCPersonalizationStorage !== Nt || uo.GoogleConsent.GCSecurityStorage !== Nt
    }, Cr);

    function Cr() {
        this._window = window
    }
    var yr, fr, vr, kr = "Banner",
        mr = "Preference Center",
        br = "API",
        Sr = "Close",
        Pr = "Allow All",
        Tr = "Reject All",
        Ar = "Confirm",
        Ir = "Confirm",
        Lr = "Continue without Accepting",
        _r = (Er.prototype.BannerPushDownHandler = function() {
            this.checkIsBrowserIE11OrBelow() || (vr.pushPageDown(lr), fo(window).on("resize", function() {
                "none" !== fo(lr).css("display") && vr.pushPageDown(lr)
            }))
        }, Er.prototype.checkIsBrowserIE11OrBelow = function() {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, Er.prototype.addOTCssPropertiesToBody = function(e, t) {
            var o = vr.getCssData(e, t);
            go.customerStyles.set(e, o), vr.setStylesOnBody(t), e === yr.PC && vr.setStylesOnHtml(t)
        }, Er.prototype.removeAddedOTCssStyles = function(e) {
            void 0 === e && (e = yr.Banner);
            var t = go.customerStyles.get(e);
            t ? (vr.setStylesOnBody(t.customerBodyCSS), vr.setStylesOnHtml(t.customerHtmlCSS), go.customerStyles.delete(e)) : 0 < go.customerStyles.size && go.customerStyles.forEach(function(e, t) {
                return vr.removeAddedOTCssStyles(t)
            })
        }, Er.prototype.getCssData = function(e, t) {
            var o = fo("body").el[0],
                n = fo("html").el[0],
                r = {},
                i = {},
                s = go.customerStyles.get(e);
            if (s) {
                var a = s.scriptBodyCSS,
                    l = s.customerBodyCSS,
                    c = s.customerHtmlCSS;
                o.style.top !== a.top && (l.top = o.style.top), o.style.position !== a.position && (l.position = o.style.position), o.style.overflow !== a.overflow && (l.overflow = o.style.overflow), n.style.overflow !== a.overflow && (c.overflow = n.style.overflow), r = l, i = c
            } else r = {
                top: o.style.top,
                position: o.style.position,
                overflow: o.style.overflow
            }, i = {
                overflow: n.style.overflow
            };
            return {
                scriptBodyCSS: t,
                customerBodyCSS: r,
                customerHtmlCSS: i
            }
        }, Er.prototype.setStylesOnBody = function(e) {
            var t = fo("body").el[0];
            vr.setStylesOnHtmlElement(t, e)
        }, Er.prototype.setStylesOnHtml = function(e) {
            var t = fo("html").el[0];
            vr.setStylesOnHtmlElement(t, {
                overflow: e.overflow
            })
        }, Er.prototype.setStylesOnHtmlElement = function(e, t) {
            for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = r[n],
                    s = i[0],
                    a = i[1];
                a ? o += s + ": " + a + ";" : e.style.removeProperty(s)
            }
            o && oo(e, o, !0)
        }, Er.prototype.pushPageDown = function(e) {
            var t = fo(e).height() + "px";
            fo(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        ");
            var o = go.isPCVisible ? yr.PC : yr.Banner,
                n = {
                    position: "relative",
                    top: t
                };
            go.isPCVisible && (n.overflow = "hidden"), vr.addOTCssPropertiesToBody(o, n)
        }, Er);

    function Er() {}(fr = yr = yr || {}).Banner = "Banner", fr.PC = "PC";
    var Vr, Br = (wr.prototype.showConsentNotice = function() {
        switch (!uo.NoBanner || uo.ForceConsent ? fo(".onetrust-pc-dark-filter").removeClass("ot-hide") : fo(".onetrust-pc-dark-filter").addClass("ot-hide"), fo("#onetrust-pc-sdk").removeClass("ot-hide"), po.pcName) {
            case Bt:
                fo("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || fo("#onetrust-pc-sdk").addClass("ot-animated");
                var e = uo.PreferenceCenterPosition,
                    t = uo.useRTL,
                    o = t ? "right" : "left",
                    n = t ? "left" : "right";
                fo("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) && fo("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)), fo("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
        }
        Jn.setAllowAllButton(), zn.setPCFocus(zn.getPCElements()), uo.NoBanner && uo.ScrollCloseBanner || this.pcHasScroll()
    }, wr.prototype.hideConsentNoticeV2 = function() {
        if (0 !== fo(this.ONETRUST_PC_SDK).length) {
            if (to.isV2Template && this.closePCText(), uo.ForceConsent && !Ao.isCookiePolicyPage(uo.AlertNoticeText) && !Oo.isAlertBoxClosedAndValid() && uo.ShowAlertNotice ? fo("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : fo("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(uo.PCLayout.Panel ? 500 : 400), uo.PCLayout.Panel) {
                var e = uo.PreferenceCenterPosition,
                    t = uo.useRTL,
                    o = t ? "right" : "left",
                    n = t ? "left" : "right";
                fo("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)), fo("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
            }
            fo("" + this.ONETRUST_PC_SDK).fadeOut(uo.PCLayout.Panel ? 500 : 400), go.isPCVisible = !1, go.pcLayer = O.Banner, this.setFocus()
        } else this.setFocusOnPage()
    }, wr.prototype.setFocus = function() {
        if (go.pcSource || Oo.isAlertBoxClosedAndValid()) go.pcSource ? (go.pcSource.focus(), go.pcSource = null) : uo.BInitialFocus ? Ao.resetFocusToBody() : this.setFocusOnPage();
        else {
            var e = fo("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
            e && e.focus()
        }
    }, wr.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        go.isKeyboardUser && e.length && e[0].focus()
    }, wr.prototype.closePCText = function() {
        var e = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
            t = uo.AboutCookiesText;
        e.innerText = t + " " + uo.pcDialogClose
    }, wr.prototype.pcHasScroll = function() {
        var e = fo(_o.P_Grp_Container).el[0] || fo("#onetrust-pc-sdk " + _o.P_Content).el[0];
        if (e.scrollHeight > e.clientHeight) {
            this.bodyStyleChanged = !0;
            var t = fo("body");
            t && t.length && vr.addOTCssPropertiesToBody(yr.PC, {
                overflow: "hidden"
            })
        }
    }, wr.prototype.checkIfPcSdkContainerExist = function() {
        return !fo("#onetrust-pc-sdk").length
    }, wr);

    function wr() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter", this.bodyStyleChanged = !1
    }
    var Or, xr = (Gr.prototype.init = function() {
        this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
    }, Gr.prototype.getContent = function() {
        return u(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, So.getSyncNtfyContent().then(function(e) {
                    go.syncNtfyGrp = {
                        name: e.name,
                        html: atob(e.html),
                        css: e.css
                    }
                })]
            })
        })
    }, Gr.prototype.insertHtml = function() {
        function e(e) {
            return t.querySelector(e)
        }
        this.removeHtml();
        var t = document.createDocumentFragment(),
            o = document.createElement("div");
        fo(o).html(go.syncNtfyGrp.html);
        var n = o.querySelector(this.El);
        uo.BannerRelativeFontSizesToggle && fo(n).addClass("otRelFont"), uo.useRTL && fo(n).attr("dir", "rtl"), fo(t).append(n);
        var r = uo.NtfyConfig;
        this.initHtml("Sync", r.Sync, e, t.querySelector(this.El)), r.ShowCS ? fo(e(".ot-pc-handler")).html(r.CSTxt) : (fo(n).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
        var i = document.createElement("div");
        fo(i).append(t), fo("#onetrust-consent-sdk").append(i.firstChild)
    }, Gr.prototype.initHandler = function() {
        fo(this.El + " .ot-sync-close-handler").on("click", function() {
            return Or.close()
        })
    }, Gr.prototype.showNty = function() {
        var e = fo(this.El);
        e.css("bottom: -300px;"), e.animate({
            bottom: "1em;"
        }, 1e3), setTimeout(function() {
            e.css("bottom: 1rem;")
        }, 1e3), e.focus()
    }, Gr.prototype.changeState = function() {
        setTimeout(function() {
            Or.refreshState()
        }, 1500)
    }, Gr.prototype.refreshState = function() {
        function e(e) {
            return t.querySelector(e)
        }
        var t = fo(this.El).el[0];
        t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync");
        var o = uo.NtfyConfig;
        this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && fo(e(".ot-pc-handler")).addClass("ot-pc-link"), fo(".ot-sync-btncntr").show("inline-block"), this.alignContent(), fo(window).on("resize", function() {
            return Or.resizeEvent
        })), setTimeout(function() {
            Or.close()
        }, 1e3 * uo.NtfyConfig.NtfyDuration)
    }, Gr.prototype.insertCss = function() {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += go.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
    }, Gr.prototype.addCustomStyles = function() {
        var e = uo.NtfyConfig,
            t = e.Sync,
            o = e.Complete,
            n = e.CSButton,
            r = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
    }, Gr.prototype.initHtml = function(e, t, o, n) {
        var r = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check",
            i = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (fo(o(r)).show(), fo(o(i)).hide(), fo(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (fo(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? fo(o("#ot-sync-title")).html(t.Title) : fo(o("#ot-sync-title")).hide(), t.Desc ? fo(o(".ot-sync-desc")).html(t.Desc) : fo(o(".ot-sync-desc")).hide(), t.ShowClose ? (fo(o(".ot-sync-close-handler")).show("inline-block"), fo(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (fo(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
    }, Gr.prototype.close = function() {
        this.hideSyncNtfy(), Ao.resetFocusToBody()
    }, Gr.prototype.hideSyncNtfy = function() {
        uo.NtfyConfig.ShowCS && window.removeEventListener("resize", Or.resizeEvent), fo("#ot-sync-ntfy").fadeOut(400)
    }, Gr.prototype.removeHtml = function() {
        var e = fo(this.El).el;
        e && io.removeChild(e)
    }, Gr.prototype.alignContent = function() {
        fo(".ot-sync-btncntr").el[0].clientHeight > fo(".ot-sync-titlecntr").el[0].clientHeight && (fo(".ot-sync-titlecntr").addClass("ot-pos-abs"), fo(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }, Gr.prototype.resizeEvent = function() {
        window.innerWidth <= 896 && Or.alignContent()
    }, Gr);

    function Gr() {
        this.El = "#ot-sync-ntfy"
    }
    var Nr, Dr = (Hr.prototype.toggleVendorConsent = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = go.oneTrustIABConsent.vendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = fo(_o.P_Vendor_Container + " ." + _o.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
            r && io.setCheckedAttribute("", r, "true" === n)
        });
        var o = fo("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        if (o) {
            var n = io.getActiveIdArray(io.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Eo.P_Line_Through) : o.parentElement.classList.add(Eo.P_Line_Through), io.setCheckedAttribute("", o, t)
        }
    }, Hr.prototype.toggleVendorLi = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = go.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = fo(_o.P_Vendor_Container + " ." + _o.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
            r && io.setCheckedAttribute("", r, "true" === n)
        });
        var o = fo("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (o) {
            var n = io.getActiveIdArray(io.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Eo.P_Line_Through) : o.parentElement.classList.add(Eo.P_Line_Through), io.setCheckedAttribute("", o, t)
        }
    }, Hr.prototype.updateVendorLegBtns = function(e) {
        void 0 === e && (e = []), e.length || (e = go.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = fo(_o.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
            r && Jn.updateLegIntBtnElement(r, "true" === n)
        })
    }, Hr);

    function Hr() {}
    var Fr, Rr = (qr.prototype.setFilterList = function(t) {
        var o = this,
            n = fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal + " " + _o.P_Fltr_Option).el[0].cloneNode(!0);
        fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal + " " + _o.P_Fltr_Options).html(""), (to.isV2Template || uo.PCLayout.Popup) && fo("#onetrust-pc-sdk #filter-cancel-handler").html(uo.PCenterCancelFiltersText || "Cancel"), !to.isV2Template && uo.PCLayout.Popup || (fo("#onetrust-pc-sdk " + _o.P_Clr_Fltr_Txt).html(uo.PCenterClearFiltersText), fo("#filter-btn-handler").el[0].setAttribute("aria-label", uo.PCenterFilterText)), fo("#onetrust-pc-sdk #filter-apply-handler").html(uo.PCenterApplyFiltersText), t ? po.consentableGrps.forEach(function(e) {
            (go.cookieListType === Z.GenVen || go.cookieListType === Z.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t)
        }) : po.iabGrps.forEach(function(e) {
            o.filterGroupOptionSetter(n, e, t)
        })
    }, qr.prototype.setFilterListByGroup = function(e, t) {
        var o = this;
        if (!e || e.length <= 0) fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal + " " + _o.P_Fltr_Options).html("");
        else {
            var n = fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal + " " + _o.P_Fltr_Option).el[0].cloneNode(!0);
            fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal + " " + _o.P_Fltr_Options).html(""), (to.isV2Template || uo.PCLayout.Popup) && fo("#onetrust-pc-sdk #filter-cancel-handler").html(uo.PCenterCancelFiltersText || "Cancel"), !to.isV2Template && uo.PCLayout.Popup || (fo("#onetrust-pc-sdk " + _o.P_Clr_Fltr_Txt).html(uo.PCenterClearFiltersText), fo("#filter-btn-handler").el[0].setAttribute("aria-label", uo.PCenterFilterText)), fo("#onetrust-pc-sdk #filter-apply-handler").html(uo.PCenterApplyFiltersText), e.forEach(function(e) {
                o.filterGroupOptionSetter(n, e, t)
            })
        }
    }, qr.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId,
            r = n + "-filter",
            i = e.cloneNode(!0);
        fo(_o.P_Fltr_Modal + " " + _o.P_Fltr_Options).append(i), fo(i.querySelector("input")).attr("id", r), fo(i.querySelector("label")).attr("for", r), to.isV2Template ? fo(i.querySelector(_o.P_Label_Txt)).html(t.GroupName) : fo(i.querySelector("label span")).html(t.GroupName), fo(i.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }, qr);

    function qr() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var Mr, Ur, jr, zr, Kr, Wr, Jr, Yr, Xr, Qr = ($r.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", to.moduleInitializer.CookieV2CSPEnabled && go.nonce && e.setAttribute("nonce", go.nonce)), pn.commonStyles && (t += pn.commonStyles), pn.bannerGroup && (t += pn.bannerGroup.css, to.fp.CookieV2SSR || (t += this.addCustomBannerCSS()), uo.bannerCustomCSS && (t += uo.bannerCustomCSS)), pn.preferenceCenterGroup && (t += pn.preferenceCenterGroup.css, t += this.addCustomPreferenceCenterCSS()), pn.cookieListGroup && !to.fp.CookieV2TrackingTechnologies && (t += pn.cookieListGroup.css, t += this.addCustomCookieListCSS()), uo.cookiePersistentLogo && !uo.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + Ao.updateCorrectUrl(uo.cookiePersistentLogo) + "')}"), this.processedCSS = t, po.ignoreInjectingHtmlCss || (e.textContent = t, fo(document.head).append(e))
    }, $r.prototype.setButonColor = function() {
        var e = uo.pcButtonColor,
            t = uo.pcButtonTextColor,
            o = uo.pcLegIntButtonColor,
            n = uo.pcLegIntButtonTextColor,
            r = "";
        if (e || t) {
            var i = t ? "color: " + t + ";" : "",
                s = e ? "background-color: " + e + ";border-color: " + e + ";" : "",
                a = po.pcName === Vt ? "#onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Category_Item + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + _o.P_Li_Hdr + "{\n                    border-color: " + e + ";\n                }" : "",
                l = e ? "border-color: " + e + ";" : "",
                c = o ? "background-color: " + o + ";" : "",
                d = n ? "color: " + n + "; border-color: " + n + ";" : "";
            r = "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + s + "\n                " + i + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + _o.P_Active_Menu + " {\n                " + l + "\n            }\n            " + a + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + c + "\n                " + d + "\n            }"
        }
        return r
    }, $r.prototype.setFocusBorderColor = function() {
        var e = "",
            t = uo.PCFocusBorderColor;
        return t && (e += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + t + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + t + ";\n            }"), e
    }, $r.prototype.setCloseIconColor = function() {
        var e = "";
        return uo.PCCloseButtonType === he.Link && (e += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + uo.PCContinueColor + "}"), e
    }, $r.prototype.setTabLayoutStyles = function() {
        var e = "",
            t = uo.pcMenuColor,
            o = uo.pcMenuHighLightColor;
        return po.pcName === Ot && (t && (e += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + t + "\n                }"), o && (e += "#onetrust-consent-sdk #onetrust-pc-sdk ." + _o.P_Active_Menu + " {\n                    background-color: " + o + "\n                }")), e
    }, $r.prototype.setFocusIfTemplateUpgrade = function() {
        var e = "",
            t = uo.PCFocusBorderColor;
        return !uo.PCTemplateUpgrade && t && (e += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }"), e
    }, $r.prototype.setExtLnkUrl = function() {
        var e = "",
            t = Ao.updateCorrectUrl(uo.OTExternalLinkLogo);
        return t && (e += "#onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk {\n                    background-image: url('" + t + "');\n                }\n            "), e
    }, $r.prototype.setCustomCss = function() {
        var e = "";
        return uo.pcCustomCSS && (e += uo.pcCustomCSS), e
    }, $r);

    function $r() {
        this.processedCSS = "", this.addCustomBannerCSS = function() {
            var e = uo.backgroundColor,
                t = uo.buttonColor,
                o = uo.textColor,
                n = uo.buttonTextColor,
                r = uo.bannerMPButtonColor,
                i = uo.bannerMPButtonTextColor,
                s = uo.bannerAccordionBackgroundColor,
                a = uo.BSaveBtnColor,
                l = uo.BCategoryContainerColor,
                c = uo.BLineBreakColor,
                d = uo.BCategoryStyleColor,
                p = uo.bannerLinksTextColor,
                u = uo.BFocusBorderColor,
                h = "\n        " + (po.bannerName === Tt ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header,\n                    #onetrust-banner-sdk .ot-optout-signal\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (p ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + p + ";\n                        }" : "");
            if ((t || n) && (h += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"), u && (h += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + u + ";\n               outline-width: 1px;\n            }"), (i || r) && (h += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !uo.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), po.bannerName === Lt) {
                var g = void 0,
                    C = void 0,
                    y = void 0,
                    f = void 0,
                    v = void 0;
                a && (g = "color: " + n + ";border-color: " + n + ";background-color: " + a + ";"), l && (C = "background-color: " + l + ";"), c && (y = "border-color: " + c + ";"), d && (f = "background-color: " + d + ";", v = "border-color: " + d + ";"), u && (h += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + u + ";\n                    outline-width: 1px;\n                }"), h += "#onetrust-banner-sdk .ot-bnr-save-handler {" + g + "}#onetrust-banner-sdk .ot-cat-lst {" + C + "}#onetrust-banner-sdk .ot-cat-bdr {" + y + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + f + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + v + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
            }
            return uo.BCloseButtonType === he.Link && (h += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + uo.BContinueColor + "}"), h
        }, this.addCustomPreferenceCenterCSS = function() {
            var e = uo.pcBackgroundColor,
                t = uo.pcTextColor,
                o = uo.pcLinksTextColor,
                n = uo.PCenterEnableAccordion,
                r = uo.pcAccordionBackgroundColor,
                i = "\n            " + (e ? (po.pcName === Vt ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + _o.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + _o.P_Search_Cntr + ",\n                " + (n && po.pcName === Vt ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + _o.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Title + ":after\n                " + (to.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (t ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Vendor_Container + " " + _o.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Host_Cntr + " " + _o.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Vendor_List + " " + _o.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Vendor_List + " " + _o.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Vendor_List + " " + _o.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Vendor_List + " " + _o.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal\n                {\n                    color: " + t + ";\n                }" : "") + "\n            " + (o ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Host_Cntr + " " + _o.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Host_Cntr + " " + _o.P_Acc_Header + " " + _o.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Host_Cntr + " " + _o.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Content + " " + _o.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (n && r ? "#onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Acc_Container + _o.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Acc_Txt + " " + _o.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + r + ";\n            }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Host_Cntr + " " + _o.P_Host_Info + ",\n                    " + (to.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + _o.P_Acc_Txt + " " + _o.P_Ven_Opts) + "\n                            {\n                                background-color: " + r + ";\n                            }" : "") + "\n        ";
            return i += Mr.setButonColor(), i += Mr.setFocusBorderColor(), i += Mr.setCloseIconColor(), i += Mr.setTabLayoutStyles(), i += Mr.setTabLayoutStyles(), i += Mr.setFocusIfTemplateUpgrade(), i += Mr.setExtLnkUrl(), i += Mr.setCustomCss()
        }, this.addCustomCookieListCSS = function() {
            var e = uo.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                t = "\n                " + (uo.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + uo.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (uo.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + uo.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (uo.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + uo.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (uo.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + uo.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && uo.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + uo.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return uo.cookieListCustomCss && (t += uo.cookieListCustomCss), t
        }
    }(jr = Ur = Ur || {}).SaleOptOut = "SaleOptOutCID", jr.SharingOptOut = "SharingOptOutCID", jr.PersonalDataConsents = "PersonalDataCID", (Kr = zr = zr || {}).SharingOptOutNotice = "SharingOptOutCID", Kr.SaleOptOutNotice = "SaleOptOutCID", Kr.SensitiveDataLimitUseNotice = "SensitivePICID", (Jr = Wr = Wr || {}).KnownChildSensitiveDataConsents1 = "KnownChildSellPICID", Jr.KnownChildSensitiveDataConsents2 = "KnownChildSharePICID", (Xr = Yr = Yr || {}).SensitiveDataProcessing1 = "SensitivePICID", Xr.SensitiveDataProcessing2 = "SensitiveSICID", Xr.SensitiveDataProcessing3 = "GeolocationCID", Xr.SensitiveDataProcessing4 = "RREPInfoCID", Xr.SensitiveDataProcessing5 = "CommunicationCID", Xr.SensitiveDataProcessing6 = "GeneticCID", Xr.SensitiveDataProcessing7 = "BiometricCID", Xr.SensitiveDataProcessing8 = "HealthCID", Xr.SensitiveDataProcessing9 = "SexualOrientationCID";
    var Zr, ei = (ti.prototype.initialiseLandingPath = function() {
        var e = Oo.needReconsent();
        if (nn.isLandingPage()) nn.setLandingPathParam(location.href);
        else {
            if (e && !Oo.awaitingReconsent()) return nn.setLandingPathParam(location.href), void ro.writeCookieParam(rt.OPTANON_CONSENT, Qe, !0);
            e || ro.writeCookieParam(rt.OPTANON_CONSENT, Qe, !1), nn.setLandingPathParam(ot), po.isSoftOptInMode && !to.moduleInitializer.MobileSDK && ln.setAlertBoxClosed(!0), uo.NextPageCloseBanner && uo.ShowAlertNotice && zi.nextPageCloseBanner()
        }
    }, ti);

    function ti() {}
    var oi, ni = (ri.prototype.insertCookiePolicyHtml = function() {
        if (fo(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t = document.createDocumentFragment();
            if (pn.cookieListGroup) {
                var o = uo.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
                    n = document.createElement("div");
                fo(n).html(pn.cookieListGroup.html), n.removeChild(n.querySelector(o)), e = n.querySelector(".ot-sdk-cookie-policy"), uo.useRTL && fo(e).attr("dir", "rtl")
            }
            e.querySelector("#cookie-policy-title").innerHTML = uo.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = uo.CookieListDescription || "";
            var r = e.querySelector("section"),
                i = e.querySelector("section tbody tr"),
                s = null,
                a = null;
            uo.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"), a = e.querySelector("section.subgroup tbody tr"), fo(e).el.removeChild(e.querySelector("section.subgroup"))), fo(e).el.removeChild(e.querySelector("section")), !fo(this.COOKIE_POLICY_SELECTOR).length && fo(this.OPTANON_POLICY_SELECTOR).length ? fo(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (fo(this.COOKIE_POLICY_SELECTOR).html(""), fo(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = uo.Groups; l < c.length; l++) {
                var d = c[l],
                    p = {
                        json: uo,
                        group: d,
                        sectionTemplate: r,
                        tableRowTemplate: i,
                        cookieList: e,
                        fragment: t
                    };
                if (uo.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(p);
                else if (this.insertGroupHTML(p), d.ShowSubgroup)
                    for (var u = 0, h = d.SubGroups; u < h.length; u++) {
                        var g = h[u],
                            C = {
                                json: uo,
                                group: g,
                                sectionTemplate: s,
                                tableRowTemplate: a,
                                cookieList: e,
                                fragment: t
                            };
                        this.insertGroupHTML(C)
                    }
            }
        }
    }, ri.prototype.insertGroupHTMLV2 = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o = this,
            n = e.json,
            r = e.group,
            i = e.sectionTemplate,
            s = e.tableRowTemplate,
            a = e.cookieList,
            l = e.fragment,
            c = i.cloneNode(!0),
            d = r.SubGroups;
        fo(t("tbody")).html("");
        var p = r.Hosts.slice(),
            u = r.FirstPartyCookies.slice(),
            h = p.length || u.length ? r.GroupName : "";
        if (r.ShowSubgroup && d.length) {
            var g = c.querySelector("section.ot-sdk-subgroup ul li");
            d.forEach(function(e) {
                var t = g.cloneNode(!0);
                p = p.concat(e.Hosts), u = u.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (h += "," + e.GroupName), fo(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), fo(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(o.groupsClass.safeFormattedGroupDescription(e)), fo(g.parentElement).append(t)
            }), c.querySelector("section.ot-sdk-subgroup ul").removeChild(g)
        } else c.removeChild(c.querySelector("section.ot-sdk-subgroup"));
        uo.TTLGroupByTech && (this.setCookieListHeaderOrder(c), this.setCookieListBodyOrder(s)), n.IsLifespanEnabled ? fo(t("th.ot-life-span")).el.innerHTML = n.LifespanText : fo(t("thead tr")).el.removeChild(fo(t("th.ot-life-span")).el), fo(t("th.ot-cookies")).el.innerHTML = n.CookiesText, fo(t("th.ot-host")).el.innerHTML = n.CategoriesText, fo(t("th.ot-cookies-type")).el.innerHTML = n.CookiesUsedText, fo(t("th.ot-host-description")).el.innerHTML = n.CookiesDescText;
        var C = this.transformFirstPartyCookies(u, p, r),
            y = !1;
        (y = uo.TTLGroupByTech ? uo.TTLShowTechDesc : C.some(function(e) {
            return e.Description
        })) || fo(t("thead tr")).el.removeChild(fo(t("th.ot-host-description")).el), fo(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), fo(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), uo.TTLGroupByTech ? this.insertCookieLineByLine({
            json: n,
            hosts: C,
            tableRowTemplate: s,
            showHostDescription: y,
            st: t
        }) : this.insertHostHtmlV2({
            json: n,
            hosts: C,
            tableRowTemplate: s,
            showHostDescription: y,
            st: t
        }), 0 === C.length ? c.removeChild(c.querySelector("table")) : fo(t("caption")).el.innerHTML = h, fo(a).append(c), fo(l).append(a), fo(this.COOKIE_POLICY_SELECTOR).append(l)
    }, ri.prototype.insertHostHtmlV2 = function(e) {
        for (var c, d = e.json, t = e.hosts, p = e.tableRowTemplate, u = e.showHostDescription, h = e.st, o = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = p.cloneNode(!0);
                g.clearCookieRowElement(t);
                for (var n = [], r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                    var a = s[i];
                    (c = a).IsSession ? n.push(d.LifespanTypeText) : n.push(Ao.getDuration(c));
                    var l = c.Name;
                    e.Type && (l = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + c.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + c.Name + " " + uo.NewWinTxt + '">\n                        ' + c.Name + "\n                    </a>"), r.push(l)
                }
                g.setDataLabelAttribute(t, d), g.createCookieRowHtmlElement({
                    host: e,
                    subGroupCookie: c,
                    trt: t,
                    json: d,
                    lifespanText: n.join(", "),
                    hostType: r.join(", ")
                }), g.removeLifeSpanOrHostDescription(d, u, o, t), fo(h("tbody")).append(o)
            }, g = this, n = 0, r = t; n < r.length; n++) o(r[n])
    }, ri.prototype.insertGroupHTML = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o, n = e.json,
            r = e.group,
            i = e.sectionTemplate,
            s = e.tableRowTemplate,
            a = e.cookieList,
            l = e.fragment,
            c = i.cloneNode(!0);
        fo(t("caption")).el.innerHTML = r.GroupName, fo(t("tbody")).html(""), fo(t("thead tr")), n.IsLifespanEnabled ? fo(t("th.life-span")).el.innerHTML = n.LifespanText : fo(t("thead tr")).el.removeChild(fo(t("th.life-span")).el), fo(t("th.cookies")).el.innerHTML = n.CookiesText, fo(t("th.host")).el.innerHTML = n.CategoriesText;
        var d = !1;
        if (r.Hosts.some(function(e) {
                return e.description
            }) ? d = !0 : fo(t("thead tr")).el.removeChild(fo(t("th.host-description")).el), fo(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), fo(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), 0 < r.FirstPartyCookies.length) {
            fo(t(".cookies-used-header")).html(n.CookiesUsedText), fo(t(".cookies-list")).html("");
            for (var p = 0; p < r.FirstPartyCookies.length; p++) o = r.FirstPartyCookies[p], fo(t(".cookies-list")).append("<li> " + Ao.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else c.removeChild(t(".cookies-used-header")), c.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: d,
            st: t
        }), fo(a).append(c), fo(l).append(a), fo(this.COOKIE_POLICY_SELECTOR).append(l)
    }, ri.prototype.insertHostHtmlV1 = function(e) {
        for (var d = e.json, t = e.hosts, p = e.tableRowTemplate, u = e.showHostDescription, h = e.st, o = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = p.cloneNode(!0);
                fo(t(".cookies-td ul")).html(""), fo(t(".life-span-td ul")).html(""), fo(t(".host-td")).html(""), fo(t(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> ");
                for (var n = 0, r = 0, i = e.Cookies; r < i.length; r++) {
                    var s = i[r],
                        a = "";
                    a = s.IsSession ? d.LifespanTypeText : 0 === s.Length ? "<1 " + d.LifespanDurationText || d.PCenterVendorListLifespanDays : s.Length + " " + d.LifespanDurationText || d.PCenterVendorListLifespanDays;
                    var l = d.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                    if (fo(t(".cookies-td ul")).append("<li> " + s.Name + " " + l + " </li>"), d.IsLifespanEnabled) {
                        var c = s.Length ? s.Length + " days" : "N/A";
                        fo(t(".life-span-td ul")).append("<li>" + c + "</li>")
                    }
                    0 === n && (fo(t(".host-td")).append('<span class="ot-mobile-border"></span>'), fo(t(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + uo.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")), n++
                }
                u || o.removeChild(t("td.host-description-td")), fo(h("tbody")).append(o)
            }, n = 0, r = t; n < r.length; n++) o(r[n]);
        0 === t.length && fo(h("table")).el.removeChild(fo(h("thead")).el)
    }, ri.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this,
            r = t.slice();
        e.forEach(function(e) {
            n.populateHostGroup(e, r, uo.firstPartyTxt)
        });
        var i = o.GeneralVendorsIds;
        this.populateGenVendor(i, o, r);
        var s = o.SubGroups || [];
        return s.length && s.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }), r
    }, ri.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = uo.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                if (e.category === o.GroupName) {
                    var t = e.isThirdParty ? "" : uo.firstPartyTxt;
                    r.populateHostGroup(e, n, t)
                }
            })
        })
    }, ri.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o) return e.Cookies.push(t), !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }, ri.prototype.insertCookieLineByLine = function(e) {
        for (var t = e.json, o = e.hosts, n = e.tableRowTemplate, r = e.showHostDescription, i = e.st, s = 0, a = o; s < a.length; s++)
            for (var l = a[s], c = 0, d = l.Cookies; c < d.length; c++) {
                var p = d[c],
                    u = p.IsSession ? t.LifespanTypeText : Ao.getDuration(p),
                    h = p.Name;
                l.Type && (h = '<a href="https://cookiepedia.co.uk/cookies/' + h + '" \n                        rel="noopener" target="_blank" aria-label="' + h + " " + uo.NewWinTxt + '">' + h + "\n                    </a>");
                var g = n.cloneNode(!0),
                    C = this.queryToHtmlElement(g);
                this.clearCookieRowElement(C), this.createCookieRowHtmlElement({
                    host: l,
                    subGroupCookie: p,
                    trt: C,
                    json: t,
                    lifespanText: u,
                    hostType: h
                }), this.removeLifeSpanOrHostDescription(t, r, g, C), fo(i("tbody")).append(g)
            }
    }, ri.prototype.removeLifeSpanOrHostDescription = function(e, t, o, n) {
        e.IsLifespanEnabled || o.removeChild(n("td.ot-life-span-td")), t || o.removeChild(n("td.ot-host-description-td"))
    }, ri.prototype.createCookieRowHtmlElement = function(e) {
        var t = e.host,
            o = e.subGroupCookie,
            n = e.trt,
            r = e.json,
            i = e.lifespanText,
            s = e.hostType,
            a = ".ot-host-td";
        this.setDataLabelAttribute(n, r), fo(n(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + o.description + "</p> "), fo(n(a)).append('<span class="ot-mobile-border"></span>');
        var l = t.DisplayName || t.HostName;
        fo(n(a)).append(t.Type ? l : '<a href="https://cookiepedia.co.uk/host/' + o.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + l + " " + uo.NewWinTxt + '">\n                        ' + l + "\n                        </a>"), n(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", s), n(".ot-life-span-td .ot-life-span-td-content").innerText = i, n(".ot-cookies-type .ot-cookies-type-td-content").innerText = t.Type ? uo.firstPartyTxt : uo.thirdPartyTxt
    }, ri.prototype.setDataLabelAttribute = function(e, t) {
        var o = "data-label";
        e(".ot-host-td").setAttribute(o, t.CategoriesText), e(".ot-cookies-td").setAttribute(o, t.CookiesText), e(".ot-cookies-type").setAttribute(o, t.CookiesUsedText), e(".ot-life-span-td").setAttribute(o, t.LifespanText)
    }, ri.prototype.clearCookieRowElement = function(e) {
        fo(e(".ot-cookies-td span")).text(""), fo(e(".ot-life-span-td span")).text(""), fo(e(".ot-cookies-type span")).text(""), fo(e(".ot-cookies-td .ot-cookies-td-content")).html(""), fo(e(".ot-host-td")).html("")
    }, ri.prototype.setCookieListHeaderOrder = function(e) {
        var t = e.querySelector("section table thead tr"),
            o = t.querySelector("th.ot-host"),
            n = t.querySelector("th.ot-cookies"),
            r = t.querySelector("th.ot-life-span"),
            i = t.querySelector("th.ot-cookies-type"),
            s = t.querySelector("th.ot-host-description");
        t.innerHTML = "", t.appendChild(n.cloneNode(!0)), t.appendChild(o.cloneNode(!0)), t.appendChild(r.cloneNode(!0)), t.appendChild(i.cloneNode(!0)), t.appendChild(s.cloneNode(!0))
    }, ri.prototype.setCookieListBodyOrder = function(e) {
        var t = e.querySelector("td.ot-host-td"),
            o = e.querySelector("td.ot-cookies-td"),
            n = e.querySelector("td.ot-life-span-td"),
            r = e.querySelector("td.ot-cookies-type"),
            i = e.querySelector("td.ot-host-description-td");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, ri.prototype.queryToHtmlElement = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    }, ri);

    function ri() {
        this.groupsClass = Jn, this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy", this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy", this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    var ii, si = (ai.prototype.IsAlertBoxClosedAndValid = function() {
        return Oo.isAlertBoxClosedAndValid()
    }, ai.prototype.LoadBanner = function() {
        ln.loadBanner()
    }, ai.prototype.Init = function(e) {
        void 0 === e && (e = !1), Xe.insertViewPortTag(), pn.ensureHtmlGroupDataInitialised(), hr.updateGtmMacros(!1), Zr.initialiseLandingPath(), e || Mr.initialiseCssReferences()
    }, ai.prototype.FetchAndDownloadPC = function() {
        Mi.fetchAndSetupPC()
    }, ai.prototype.ToggleInfoDisplay = function() {
        ln.triggerGoogleAnalyticsEvent(hn, bn), Mi.toggleInfoDisplay()
    }, ai.prototype.Close = function(e) {
        Mi.close(e)
    }, ai.prototype.AllowAll = function(e) {
        zi.allowAllEvent(e)
    }, ai.prototype.RejectAll = function(e) {
        zi.rejectAllEvent(e)
    }, ai.prototype.setDataSubjectIdV2 = function(e, t) {
        void 0 === t && (t = !1), e && e.trim() && (e = e.replace(/ /g, ""), ro.writeCookieParam(rt.OPTANON_CONSENT, $e, e, !0), go.dsParams.isAnonymous = t)
    }, ai.prototype.getDataSubjectId = function() {
        return ro.readCookieParam(rt.OPTANON_CONSENT, $e, !0)
    }, ai.prototype.synchroniseCookieWithPayload = function(i) {
        var e = ro.readCookieParam(rt.OPTANON_CONSENT, "groups"),
            t = io.strToArr(e),
            s = [];
        t.forEach(function(e) {
            var t = e.split(":"),
                o = Go.getGroupById(t[0]),
                n = io.findIndex(i, function(e) {
                    return e.Id === o.PurposeId
                }),
                r = i[n];
            r ? r.TransactionType === it ? (s.push(t[0] + ":1"), o.Parent ? Mi.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : Mi.toggleV2Category(null, o, !0, o.CustomGroupId)) : (s.push(t[0] + ":0"), o.Parent ? Mi.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : Mi.toggleV2Category(null, o, !1, o.CustomGroupId)) : s.push(t[0] + ":" + t[1])
        }), jo.writeGrpParam(rt.OPTANON_CONSENT, s)
    }, ai.prototype.getGeolocationData = function() {
        return go.userLocation
    }, ai.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        ln.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, ai.prototype.ReconsentGroups = function() {
        var r = !1,
            e = ro.readCookieParam(rt.OPTANON_CONSENT, "groups"),
            i = io.strToArr(e),
            s = io.strToArr(e.replace(/:0|:1/g, "")),
            a = !1,
            t = ro.readCookieParam(rt.OPTANON_CONSENT, "hosts"),
            l = io.strToArr(t),
            c = io.strToArr(t.replace(/:0|:1/g, "")),
            d = ["inactive", "inactive landingpage", "do not track"];
        e && (uo.Groups.forEach(function(e) {
            b(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId,
                    o = io.indexOf(s, t);
                if (-1 !== o) {
                    var n = Go.getGrpStatus(e).toLowerCase(); - 1 < d.indexOf(n) && (r = !0, i[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                }
            })
        }), r && jo.writeGrpParam(rt.OPTANON_CONSENT, i)), t && (uo.Groups.forEach(function(e) {
            b(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t = io.indexOf(c, e.HostId);
                    if (-1 !== t) {
                        var o = Go.getGrpStatus(n).toLowerCase(); - 1 < d.indexOf(o) && (a = !0, l[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                    }
                })
            })
        }), a && jo.writeHstParam(rt.OPTANON_CONSENT, l))
    }, ai.prototype.SetAlertBoxClosed = function(e) {
        ln.setAlertBoxClosed(e)
    }, ai.prototype.GetDomainData = function() {
        return po.pubDomainData
    }, ai.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""), go.userLocation = {
            country: e,
            state: t
        }
    }, ai.prototype.changeLang = function(t) {
        if (t !== go.lang) {
            var o = to.moduleInitializer;
            So.getLangJson(t).then(function(e) {
                e ? (po.init(e), pn.fetchAssets(t).then(function() {
                    var e = document.getElementById("onetrust-style");
                    e && (e.textContent = ""), Mr.initialiseCssReferences(), o.IsSuppressPC && !go.isPCVisible || (io.removeChild(fo("#onetrust-pc-sdk").el), go.vendorDomInit = !1, go.genVendorDomInit = !1, ar.insertPcHtml(), Mi.initialiseConsentNoticeHandlers(), uo.IsIabEnabled && er.InitializeVendorList(), go.isPCVisible && Mi.restorePc());
                    var t = !0;
                    Oo.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || go.skipAddingHTML) || uo.NoBanner || (io.removeChild(fo("#onetrust-banner-sdk").el), Mi.initializeAlartHtmlAndHandler(), t = !1), ii.initCookiePolicyAndSettings(), io.removeChild(fo("#ot-sdk-btn-floating").el), Ji.insertCSBtn(t), ii.processedHtml = null
                })) : console.error("Language:" + t + " doesn't exist for the geo rule")
            })
        }
    }, ai.prototype.initCookiePolicyAndSettings = function(e) {
        var t, o;
        void 0 === e && (e = !1), e && (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.removeEventListener("click", Mi.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.removeEventListener("click", Mi.cookiesSettingsBoundListener)), to.fp.CookieV2TrackingTechnologies ? Ji.insertTrackingTechnologies() : oi.insertCookiePolicyHtml(), Mi.insertCookieSettingText(e)
    }, ai.prototype.showVendorsList = function() {
        go.pcLayer !== O.VendorList && (Mi.showAllVendors(), ln.triggerGoogleAnalyticsEvent(hn, Pn))
    }, ai.prototype.getTestLogData = function() {
        var e = uo.Groups,
            t = po.pubDomainData,
            o = to.moduleInitializer.Version;
        console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain ? t.Domain : uo.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("Script Version Published: " + o), console.info("The consent model is: " + t.ConsentModel.Name);
        var n = null !== Oo.alertBoxCloseDate();
        console.info("Consent has " + (n ? "" : "not ") + "been given " + (n ? "👍" : "🛑"));
        var r = [];
        e.forEach(function(e) {
            var t = "";
            t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : Jn.isGroupActive(e) ? "Active" : "Inactive", r.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }), console.groupCollapsed("Current Category Status"), console.table(r), console.groupEnd();
        var i = [];
        t.GeneralVendors.forEach(function(e) {
            i.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: ii.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }), console.groupCollapsed("General Vendor Ids"), console.table(i), console.groupEnd();
        var s = po.getRegionRule(),
            a = go.userLocation,
            l = to.moduleInitializer.GeoRuleGroupName;
        po.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"), go.userLocation.country && console.info("The Geolocation is " + a.country.toUpperCase()), console.info("The Geolocation rule is " + s.Name), console.info("The GeolocationRuleGroup is " + l), po.canUseConditionalLogic ? (console.info("The Condition name is " + po.Condition.Name), console.info("The TemplateName is " + po.Condition.TemplateName)) : console.info("The TemplateName is " + s.TemplateName), console.groupEnd();
        var c = e.filter(function(e) {
            return Jn.isGroupActive(e) && "COOKIE" === e.Type
        });
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), c.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            var t = ii.getAllFormatCookiesForAGroup(e);
            console.table(t, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, ai.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf("," + e + ",")
    }, ai.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t, o = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), o
    }, ai.prototype.updateSingularConsent = function(d, p) {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Mi.fetchAndSetupPC()];
                    case 1:
                        for (e.sent(), po.apiSource = A.UpdateConsent, t = p.split(","), o = [], n = 0, r = t; n < r.length; n++) i = r[n], s = i.split(":"), a = s[0], l = s[1], c = Boolean(Number(l)), d === Dt ? "always active" === Go.getGrpStatus(Go.getGroupById(a)) || (ii.updateConsentArray(go.groupsConsent, a, l), o.push({
                            id: a,
                            isEnabled: c
                        })) : d === Ht ? ii.updateConsentArray(go.hostsConsent, a, l) : d === Ft ? go.genVendorsConsent[a] = c : d === Rt && o.push({
                            id: a,
                            isEnabled: c
                        });
                        return zi.handleTogglesOnSingularConsentUpdate(d, o), [2]
                }
            })
        })
    }, ai.prototype.vendorServiceEnabled = function() {
        return go.showVendorService
    }, ai.prototype.updateGCM = function(e) {
        e || console.error("No callback passed to the UpdateGCM"), po.gcmUpdateCallback = e
    }, ai.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        }); - 1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    }, ai);

    function ai() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
            return Ji.initBanner()
        }, this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (ar.insertPcHtml(), Ni.insertAlertHtml()), ii.processedHtml || (ii.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), ii.processedHtml
        }, this.getCSS = function() {
            return Mr.processedCSS
        }, this.setConsentProfile = function(e) {
            if (e.customPayload) {
                var t = e.customPayload;
                t.Interaction && ro.writeCookieParam(rt.OPTANON_CONSENT, et, t.Interaction)
            }
            ii.setDataSubjectIdV2(e.identifier, e.isAnonymous), ii.synchroniseCookieWithPayload(e.purposes), zi.executeOptanonWrapper()
        }, this.InsertScript = function(e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n,
                l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (Jn.canInsertForGroup(r, l) && !io.contains(go.srcExecGrps, r)) {
                go.srcExecGrpsTemp.push(r), a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && io.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1, c.onload = c.onreadystatechange = function() {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, o())
                }), c.type = "text/javascript", c.src = e, i && (c.async = i), t) {
                    case "head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case "body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), a && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && io.show(t))
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var p = 0, u = n.makeElementsVisible; p < u.length; p++) {
                        var h = u[p];
                        io.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        io.remove(h)
                    }
            }
        }, this.InsertHtml = function(e, t, o, n, r) {
            var i = null != n && void 0 !== n,
                s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (Jn.canInsertForGroup(r, s) && !io.contains(go.htmlExecGrps, r)) {
                if (go.htmlExecGrpsTemp.push(r), i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && io.empty(t), io.appendTo(t, e), i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && io.show(t), i && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        io.show(c)
                    }
                if (i && void 0 !== n.deleteElements)
                    for (var d = 0, p = n.deleteElements; d < p.length; d++) {
                        c = p[d];
                        io.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !Jn.canInsertForGroup(t)
        }
    }
    var li = (ci.prototype.getFieldsValues = function(e, t, o, n) {
        var r = this.getSectionPurposeFieldValues(e),
            i = this.getStaticSectionFieldsValue(t),
            s = this.getDynamicFields(o, n),
            a = this.getMSPASectionFieldValue();
        return l(l(l(l({}, r), i), s), a)
    }, ci.prototype.getSectionPurposeFieldValues = function(e) {
        var t = this.getSectionFieldsMapping(e);
        return this.mapActiveGroupsWithFieldValues(t)
    }, ci.prototype.getMSPASectionFieldValue = function() {
        var e = {};
        return uo.IsMSPAEnabled ? (e.MspaCoveredTransaction = 1, uo.MSPAOptionMode === Oe.MspaServiceProviderMode ? (e.MspaServiceProviderMode = 1, e.MspaOptOutOptionMode = 2) : uo.MSPAOptionMode === Oe.MspaOptOutOptionMode ? (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 1) : (e.MspaServiceProviderMode = 2, e.MspaOptOutOptionMode = 2)) : (e.MspaCoveredTransaction = 2, e.MspaServiceProviderMode = 0, e.MspaOptOutOptionMode = 0), e
    }, ci.prototype.getStaticSectionFieldsValue = function(e) {
        var n = {},
            t = this.getSectionFieldsMapping(e);
        return Object.entries(t).forEach(function(e) {
            var t = e[0],
                o = e[1];
            n[t] = o ? 1 : 0
        }), n
    }, ci.prototype.getDynamicArrayFieldsValue = function(e, t) {
        for (var o = {}, n = [], r = this.getSectionFieldsMapping(t), i = this.mapActiveGroupsWithFieldValues(r), s = 1; s <= Object.keys(i).length; s++) n.push(i[e + s]);
        return o[e] = n, o
    }, ci.prototype.getDynamicFields = function(e, t) {
        var o = {};
        if (uo.IsGPPKnownChildApplicable && e) {
            var n = this.getDynamicArrayFieldsValue(De.KnownChildSensitiveDataConsents, e);
            o = l(l({}, o), n)
        }
        return uo.IsGPPDataProcessingApplicable && t && (n = this.getDynamicArrayFieldsValue(De.SensitiveDataProcessing, t), o = l(l({}, o), n)), o
    }, ci.prototype.mapActiveGroupsWithFieldValues = function(e) {
        var n = {};
        return Object.entries(e).forEach(function(e) {
            var t = e[0],
                o = e[1];
            n[t] = o ? ii.isCategoryActive(o) ? 2 : 1 : 0
        }), n
    }, ci.prototype.getSectionFieldsMapping = function(e) {
        var n = {};
        return Object.entries(e).forEach(function(e) {
            var t = e[0],
                o = e[1];
            n[t] = uo.GPPPurposes[o] || ""
        }), n
    }, ci);

    function ci() {}
    var di, pi = (e(ui, di = li), ui.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(Ur, zr, Wr, Yr)
    }, ui);

    function ui() {
        return null !== di && di.apply(this, arguments) || this
    }
    var hi, gi, Ci, yi, fi, vi, ki, mi, bi, Si = (e(Pi, hi = li), Pi.prototype.getSectionFieldsValues = function() {
        throw new Error("Method not implemented.")
    }, Pi);

    function Pi() {
        return null !== hi && hi.apply(this, arguments) || this
    }(Ci = gi = gi || {}).SaleOptOut = "SaleOptOutCID", Ci.SharingOptOut = "SharingOptOutCID", Ci.PersonalDataConsents = "PersonalDataCID", Ci.TargetedAdvertisingOptOut = "TargetedAdvertisingOptOutCID", (fi = yi = yi || {}).SharingNotice = "SharingOptOutCID", fi.SaleOptOutNotice = "SaleOptOutCID", fi.SharingOptOutNotice = "SharingOptOutCID", fi.SensitiveDataProcessingOptOutNotice = "SensitivePICID", fi.SensitiveDataLimitUseNotice = "SensitivePICID", fi.TargetedAdvertisingOptOutNotice = "TargetedAdvertisingOptOutCID", (ki = vi = vi || {}).KnownChildSensitiveDataConsents1 = "PDCAboveAgeCID", ki.KnownChildSensitiveDataConsents2 = "PDCBelowAgeCID", (bi = mi = mi || {}).SensitiveDataProcessing1 = "RaceCID", bi.SensitiveDataProcessing2 = "ReligionCID", bi.SensitiveDataProcessing3 = "HealthCID", bi.SensitiveDataProcessing4 = "SexualOrientationCID", bi.SensitiveDataProcessing5 = "ImmigrationCID", bi.SensitiveDataProcessing6 = "GeneticCID", bi.SensitiveDataProcessing7 = "BiometricCID", bi.SensitiveDataProcessing8 = "GeolocationCID", bi.SensitiveDataProcessing9 = "SensitivePICID", bi.SensitiveDataProcessing10 = "SensitiveSICID", bi.SensitiveDataProcessing11 = "UnionMembershipCID", bi.SensitiveDataProcessing12 = "SensitiveSICID";
    var Ti, Ai = (e(Ii, Ti = li), Ii.prototype.getSectionFieldsValues = function() {
        return this.getFieldsValues(gi, yi, vi, mi)
    }, Ii);

    function Ii() {
        return null !== Ti && Ti.apply(this, arguments) || this
    }

    function Li(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function _i(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var Ei = _i(function(e, t) {
        var o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CmpStatus = void 0, (o = t.CmpStatus || (t.CmpStatus = {})).STUB = "stub", o.LOADING = "loading", o.LOADED = "loaded", o.ERROR = "error"
    });
    Li(Ei);
    var Vi = Ei.CmpStatus,
        Bi = _i(function(e, t) {
            var o;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DisplayStatus = void 0, (o = t.DisplayStatus || (t.DisplayStatus = {})).VISIBLE = "visible", o.HIDDEN = "hidden", o.DISABLED = "disabled"
        });
    Li(Bi);
    var wi, Oi = Bi.DisplayStatus,
        xi = (Gi.prototype.initGppConsent = function() {
            this.cmpApi.setCmpStatus(Vi.LOADED), this.cmpApi.setApplicableSections(this.getApplicableSections());
            var e = this.readGppCookies(),
                t = this.getCurrentSectionName(),
                o = !1;
            e && (this.cmpApi.setGppString(e), o = !0), t && !this.cmpApi.hasSection(t) && this.setOrUpdateGppSectionString(t, o), window.OneTrust.OnConsentChanged(this.updateGppConsentString)
        }, Gi.prototype.setCmpDisplayStatus = function(e) {
            var t;
            "visible" === e ? t = Oi.VISIBLE : "hidden" === e ? t = Oi.HIDDEN : "disabled" === e && (t = Oi.DISABLED), this.cmpApi.setCmpDisplayStatus(t)
        }, Gi.prototype.setGppCookies = function(e, t) {
            if (t) this.updateGppCookies(e);
            else {
                var o = this.getCookiesChunk(e),
                    n = Object.keys(o).length;
                this.writeGppCookies(n, o)
            }
        }, Gi.prototype.readGppCookies = function() {
            var e = Number(ro.readCookieParam(rt.OPTANON_CONSENT, Be.ChunkCountParam) || 0);
            if (e <= 1) return 0 === e ? "" : ro.getCookie(rt.GPP_CONSENT);
            for (var t = "", o = 1; o <= e; o++) {
                var n = ro.getCookie("" + Be.Name + o);
                t = t.concat(n)
            }
            return t
        }, Gi.prototype.initGppSDK = function() {
            var e, t;
            return null === (t = null === (e = window.otIabModule) || void 0 === e ? void 0 : e.gppSdkRef) || void 0 === t ? void 0 : t.gppCmpApi(28, 1)
        }, Gi.prototype.setOrUpdateGppSectionString = function(n, e) {
            var r = this,
                t = this.gppSection.getSectionFieldsValues();
            Object.entries(t).forEach(function(e) {
                var t = e[0],
                    o = e[1];
                r.cmpApi.setFieldValue(n, t, o)
            }), this.cmpApi.fireSectionChange(n), this.setGppCookies(this.cmpApi.getGppString(), e)
        }, Gi.prototype.getCurrentSectionName = function() {
            var o = po.getRegionRule(),
                e = "",
                t = Object.entries(Fe).find(function(e) {
                    var t = e[0];
                    return e[1], t === o.Type
                });
            return null != t && t.length && 1 < t.length && (e = t[1]), e
        }, Gi.prototype.getCurrentSectionId = function() {
            var o = po.getRegionRule(),
                e = 0,
                t = Object.entries(qe).find(function(e) {
                    var t = e[0];
                    return e[1], t === o.Type
                });
            return null != t && t.length && 1 < t.length && (e = t[1]), e
        }, Gi.prototype.getSectionInstance = function() {
            switch (po.getRegionRule().Type) {
                case Ee.CPRA:
                case Ee.CCPA:
                    return new pi;
                case Ee.CDPA:
                    return new Si;
                case Ee.USNATIONAL:
                    return new Ai
            }
        }, Gi.prototype.updateGppCookies = function(e) {
            var t = this.getCookiesChunk(e),
                o = Object.keys(t).length,
                n = Number(ro.readCookieParam(rt.OPTANON_CONSENT, Be.ChunkCountParam) || 0);
            if (this.writeGppCookies(o, t), o < n)
                for (var r = o + 1; r <= n; r++) ro.setCookie("" + Be.Name + r, "", 0, !0)
        }, Gi.prototype.getCookiesChunk = function(e) {
            for (var t = {}, o = !1, n = e, r = 1; n.length;) {
                var i = void 0;
                if (n.length > Be.ChunkSize ? i = Be.ChunkSize : (i = n.length, o = 1 === r), o) t[Be.Name] = n, n = "";
                else {
                    var s = n.slice(0, i);
                    n = n.slice(i, n.length), t["" + Be.Name + r] = s
                }
                r++
            }
            return t
        }, Gi.prototype.writeGppCookies = function(e, t) {
            ro.writeCookieParam(rt.OPTANON_CONSENT, Be.ChunkCountParam, e);
            for (var o = 0, n = Object.entries(t); o < n.length; o++) {
                var r = n[o],
                    i = r[0],
                    s = r[1];
                ro.setCookie(i, s, uo.ReconsentFrequencyDays)
            }
        }, Gi.prototype.getSupportedAPIs = function() {
            return Object.values(Fe).filter(function(e, t, o) {
                return o.indexOf(e) === t
            })
        }, Gi.prototype.getApplicableSections = function() {
            return [this.getCurrentSectionId()]
        }, Gi);

    function Gi() {
        var t = this;
        this.gppSection = this.getSectionInstance(), this.cmpApi = this.initGppSDK(), this.updateGppConsentString = function() {
            t.cmpApi.getCmpDisplayStatus() === Oi.VISIBLE && t.cmpApi.setCmpDisplayStatus(Oi.HIDDEN);
            var e = t.getCurrentSectionName();
            t.setOrUpdateGppSectionString(e, !0)
        }
    }
    var Ni, Di = (Hi.prototype.showBanner = function() {
        var e = po.bannerName,
            t = fo(this.El);
        go.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== Pt && e !== St && e !== It ? t.css("display: block;") : uo.BAnimation === pe.SlideIn ? this.slideInAnimation(t, e) : uo.BAnimation === pe.FadeIn && t.addClass("ot-fade-in")
    }, Hi.prototype.insertAlertHtml = function() {
        function e(e) {
            return t.querySelector(e)
        }
        uo.IsGPPEnabled && wi.setCmpDisplayStatus("visible");
        var t = document.createDocumentFragment(),
            o = document.createElement("div");
        fo(o).html(pn.bannerGroup.html);
        var n = o.querySelector("#onetrust-banner-sdk");
        this.setAriaModalForBanner(n), to.fp.CookieV2SSR ? (fo(t).append(n), this._rejectBtn = e("#onetrust-reject-all-handler"), this._acceptBtn = e("#onetrust-accept-btn-handler")) : this.insertHtmlForNonSSRFlow(n, t, e, function(e) {
            return t.querySelectorAll(e)
        }), this.ssrAndNonSSRCommonHtml(t)
    }, Hi.prototype.insertHtmlForNonSSRFlow = function(e, t, o, n) {
        var r = po.bannerName;
        if (pn.bannerGroup) {
            uo.BannerRelativeFontSizesToggle && fo(e).addClass("otRelFont"), (uo.BInitialFocus || uo.BInitialFocusLinkAndButton) && (e.setAttribute("tabindex", "0"), e.setAttribute("role", "main")), uo.useRTL && fo(e).attr("dir", "rtl"), "IAB2" === po.iabType && uo.BannerDPDDescription.length && fo(e).addClass("ot-iab-2");
            var i = uo.BannerPosition;
            i && ("bottom-left" === i ? fo(e).addClass("ot-bottom-left") : "bottom-right" === i ? fo(e).addClass("ot-bottom-right") : fo(e).addClass(i)), fo(t).append(e), this.setBannerData(o);
            var s = this.setIAB2HtmlData(o);
            this.setAcceptAndRejectBtnHtml(o);
            var a = this.htmlForBannerButtons(e, o, n),
                l = uo.showBannerCloseButton,
                c = uo.BCloseButtonType === he.Link;
            if (this.setWidthForFlatBanner(o, s, a), l && r === Tt && "IAB2" === po.iabType && !c) {
                var d = o(".banner-close-btn-container");
                d.parentElement.removeChild(d), fo(e).el.insertAdjacentElement("beforeEnd", d), fo(o("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
            }
            this.setBannerOptions(o, s), this.setBannerLogo(e, o)
        }
    }, Hi.prototype.setBannerOptions = function(e, t) {
        var o = this,
            n = po.bannerName,
            r = this.isCmpEnabled(),
            i = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }],
            s = fo(e(this._bannerOptionsSelector)).el;
        r ? (n === At ? this.setFloatingRoundedIconBannerCmpOptions(e, i) : (this.setCmpBannerOptions(e, i), n === Lt && t.el.insertAdjacentElement("beforeend", s)), fo(window).on("resize", function() {
            window.innerWidth <= 896 && o.setBannerOptionContent()
        })) : (po.bannerName === Tt && (s = fo(e(".banner-options-card")).el), io.removeChild(s))
    }, Hi.prototype.setWidthForFlatBanner = function(e, t, o) {
        var n = po.bannerName,
            r = uo.showBannerCloseButton,
            i = this.hasNoActionButtons();
        n === St && ("IAB2" === po.iabType && (t.removeClass("ot-sdk-eight"), uo.showBannerAcceptButton && o.insertAdjacentElement("afterbegin", this._acceptBtn), uo.showBannerCookieSettings && o.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))), r && !i && "IAB2" === po.iabType ? t.addClass("ot-sdk-nine") : r && i ? t.addClass("ot-sdk-eleven") : !r && i ? t.addClass("ot-sdk-twelve") : r || i || "IAB2" !== po.iabType || (t.addClass("ot-sdk-ten"), fo(e(this._btnGrpParentSelector)).addClass("ot-sdk-two"), fo(e(this._btnGrpParentSelector)).removeClass("ot-sdk-three")))
    }, Hi.prototype.hasNoActionButtons = function() {
        return !uo.showBannerAcceptButton && !uo.showBannerCookieSettings && !uo.BannerShowRejectAllButton
    }, Hi.prototype.htmlForBannerButtons = function(e, t, o) {
        var n = po.bannerName;
        this.hasNoActionButtons() && t(this._btnGrpParentSelector).parentElement.removeChild(t(this._btnGrpParentSelector));
        var r = uo.showBannerCloseButton,
            i = fo(o(".banner-close-button")).el,
            s = t("#onetrust-button-group"),
            a = uo.BCloseButtonType === he.Link;
        if (r)
            for (l = 0; l < i.length; l++) a ? (fo(i[l]).html(uo.BContinueText), fo(e).addClass("ot-close-btn-link"), fo(i[l]).addClass("ot-close-link"), fo(i[l]).removeClass("onetrust-close-btn-ui"), fo(i[l]).removeClass("ot-close-icon"), n !== Tt && n !== At || (s.insertAdjacentElement("afterbegin", t(".onetrust-close-btn-handler").parentElement), fo(i[l]).attr("tabindex", "1"))) : (Ao.setCloseIcon(t("#onetrust-banner-sdk .ot-close-icon")), fo(i[l]).el.setAttribute(qt, uo.BannerCloseButtonText || "Close Cookie Banner"));
        else {
            for (var l = 0; l < i.length; l++) fo(i[l].parentElement).el.removeChild(i[l]);
            n !== St && n !== At || io.removeChild(t("#onetrust-close-btn-container-mobile"))
        }
        return s
    }, Hi.prototype.setAcceptAndRejectBtnHtml = function(e) {
        var t = po.bannerName;
        uo.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), fo(this._acceptBtn).html(uo.AlertAllowCookiesText), t !== It || uo.showBannerCookieSettings || uo.BannerShowRejectAllButton || fo(this._acceptBtn.parentElement).addClass("accept-btn-only")) : io.removeChild(e("#onetrust-accept-btn-handler")), uo.BannerShowRejectAllButton && uo.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), fo(this._rejectBtn).html(uo.BannerRejectAllButtonText), e(this._btnGrpParentSelector).classList.add("has-reject-all-button")) : (io.removeChild(e("#onetrust-reject-all-handler")), io.removeChild(e("#onetrust-reject-btn-container")));
        var o = fo(e("#onetrust-pc-btn-handler"));
        uo.showBannerCookieSettings ? (o.html(uo.AlertMoreInfoText), uo.BannerSettingsButtonDisplayLink && o.addClass("cookie-setting-link"), t !== It || uo.showBannerAcceptButton || o.addClass("cookie-settings-btn-only")) : io.removeChild(o.el)
    }, Hi.prototype.setIAB2HtmlData = function(e) {
        var t = po.bannerName;
        "IAB2" === uo.IabType && uo.BannerDPDDescription.length && t !== Lt ? (fo(e(".ot-dpd-container .ot-dpd-title")).html(uo.BannerDPDTitle), fo(e(".ot-dpd-container .ot-dpd-desc")).html(uo.BannerDPDDescription.join(",&nbsp;"))) : io.removeChild(e(".ot-dpd-container"));
        var o = fo(e(this._otGrpContainerSelector));
        "IAB2" === po.iabType && uo.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
        var n = "IAB2" === uo.IabType && uo.BannerDPDDescription.length ? t !== Lt ? fo(e(".ot-dpd-container .ot-dpd-desc")) : o : fo(e("#onetrust-policy-text"));
        return uo.IsIabEnabled && uo.BannerIABPartnersLink && n.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n        ' + uo.BannerIABPartnersLink + "\n        </button>"), o
    }, Hi.prototype.setBannerData = function(e) {
        if (uo.BannerTitle ? (fo(e("#onetrust-policy-title")).html(uo.BannerTitle), fo(e('[role="alertdialog"]')).attr(qt, uo.BannerTitle)) : (io.removeChild(e("#onetrust-policy-title")), fo(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), fo(e('[role="alertdialog"]')).attr(qt, uo.AriaPrivacy)), !uo.IsIabEnabled && go.showGeneralVendors && uo.BannerNonIABVendorListText) {
            var t = document.createElement("div");
            t.setAttribute("id", "ot-gv-link-ctnr"), fo(t).html('<button class="ot-link-btn ot-gv-list-handler">' + uo.BannerNonIABVendorListText + "</button>"), fo(e("#onetrust-policy")).el.appendChild(t)
        }
        fo(e("#onetrust-policy-text")).html(uo.AlertNoticeText), uo.BShowPolicyLink && uo.BShowImprintLink && fo(e(this.cookiePolicyLinkSelector)).length ? (fo(e("#onetrust-policy-text a:first-child")).attr(qt, uo.BCookiePolicyLinkScreenReader), fo(e("#onetrust-policy-text a:last-child")).attr(qt, uo.BImprintLinkScreenReader)) : uo.BShowPolicyLink && fo(e(this.cookiePolicyLinkSelector)).length ? fo(e(this.cookiePolicyLinkSelector)).attr(qt, uo.BCookiePolicyLinkScreenReader) : uo.BShowImprintLink && fo(e(this.cookiePolicyLinkSelector)).length && fo(e(this.cookiePolicyLinkSelector)).attr(qt, uo.BImprintLinkScreenReader)
    }, Hi.prototype.isCmpEnabled = function() {
        return uo.BannerPurposeTitle || uo.BannerPurposeDescription || uo.BannerFeatureTitle || uo.BannerFeatureDescription || uo.BannerInformationTitle || uo.BannerInformationDescription
    }, Hi.prototype.ssrAndNonSSRCommonHtml = function(t) {
        function e(e) {
            return t.querySelector(e)
        }
        var o, n = this,
            r = this.isCmpEnabled();
        this.setOptOutSignalNotification(e), uo.BRegionAriaLabel && (fo(e("#onetrust-banner-sdk")).attr("role", "region"), fo(e("#onetrust-banner-sdk")).attr(qt, uo.BRegionAriaLabel)), po.bannerName === Lt && to.moduleInitializer.IsSuppressPC && (go.dataGroupState = uo.Groups.filter(function(e) {
            return e.Order
        })), po.bannerName === Lt && (this._fourBtns = uo.BannerShowRejectAllButton && uo.showBannerAcceptButton && uo.showBannerCookieSettings && uo.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), uo.BShowSaveBtn ? fo(this._saveBtn).html(uo.BSaveBtnTxt) : (io.removeChild(this._saveBtn), this._saveBtn = null), Ao.insertFooterLogo((o = ".ot-bnr-footer-logo a", t.querySelectorAll(o))), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
            n.setBannerBtn()
        }), this._fourBtns && fo(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e));
        var i = document.createElement("div");
        fo(i).append(t), po.ignoreInjectingHtmlCss || (fo("#onetrust-consent-sdk").append(i.firstChild), r && this.setBannerOptionContent()), this.setBnrBtnGrpAlignment()
    }, Hi.prototype.setAriaModalForBanner = function(e) {
        uo.ForceConsent && e.querySelector('[role="alertdialog"]').setAttribute("aria-modal", "true")
    }, Hi.prototype.setBnrBtnGrpAlignment = function() {
        var e = fo(this._otGrpContainerSelector).el,
            t = fo(this._btnGrpParentSelector).el;
        (e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? fo("#onetrust-banner-sdk").removeClass("vertical-align-content"): fo("#onetrust-banner-sdk").addClass("vertical-align-content");
        var o = document.querySelector("#onetrust-button-group-parent button:first-of-type"),
            n = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        n && o && 1 < Math.abs(n.offsetTop - o.offsetTop) && fo("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, Hi.prototype.slideInAnimation = function(e, t) {
        t === St ? "bottom" === uo.BannerPosition ? (e.css("bottom: -99px;"), e.animate({
            bottom: "0px"
        }, 1e3), go.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 0px;"), go.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"), po.pagePushedDown && !vr.checkIsBrowserIE11OrBelow() ? vr.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3), go.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("top: 0px; bottom: auto;"), go.bnrAnimationInProg = !1
        }, 1e3))) : t !== Pt && t !== It || (e.css("bottom: -300px;"), e.animate({
            bottom: "1em"
        }, 2e3), go.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 1rem;"), go.bnrAnimationInProg = !1
        }, 2e3))
    }, Hi.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (io.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), io.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), io.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), io.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (io.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), io.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), io.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), io.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, Hi.prototype.setCmpBannerOptions = function(i, e) {
        var s = fo(i("#banner-options .banner-option")).el.cloneNode(!0);
        fo(i(this._bannerOptionsSelector)).html("");
        var a = 1;
        e.forEach(function(e) {
            var t = s.cloneNode(!0),
                o = uo[e.titleKey],
                n = uo[e.descriptionKey];
            if (o || n) {
                t.querySelector(".banner-option-header :first-child").innerHTML = o;
                var r = t.querySelector(".banner-option-details");
                n ? (r.setAttribute("id", "option-details-" + a++), r.innerHTML = n) : r.parentElement.removeChild(r), fo(i("#banner-options")).el.appendChild(t)
            }
        })
    }, Hi.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var i = this,
            s = fo(r("#banner-options button")).el.cloneNode(!0),
            n = fo(r(".banner-option-details")).el.cloneNode(!0);
        fo(r(this._bannerOptionsSelector)).html(""), e.forEach(function(e) {
            var t = s.cloneNode(!0),
                o = uo[e.titleKey],
                n = uo[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, fo(r(i._bannerOptionsSelector)).el.appendChild(t))
        }), e.forEach(function(e) {
            var t = uo[e.descriptionKey];
            if (t) {
                var o = n.cloneNode(!0);
                o.innerHTML = t, o.classList.add(e.identifier), fo(r(i._bannerOptionsSelector)).el.appendChild(o)
            }
        })
    }, Hi.prototype.setBannerOptionContent = function() {
        var t = this;
        po.bannerName !== St && po.bannerName !== At || setTimeout(function() {
            if (window.innerWidth < 769) {
                var e = fo(t._bannerOptionsSelector).el[0];
                fo(t._otGrpContainerSelector).el[0].appendChild(e)
            } else e = fo(t._bannerOptionsSelector).el[0], po.bannerName === At ? fo(".banner-content").el[0].appendChild(e) : fo("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
        })
    }, Hi.prototype.setAdditionalDesc = function(e) {
        var t = uo.BannerAdditionalDescPlacement,
            o = document.createElement("span");
        o.classList.add("ot-b-addl-desc"), o.innerHTML = uo.BannerAdditionalDescription;
        var n = e("#onetrust-policy-text");
        if (t === D.AfterTitle) n.insertAdjacentElement("beforeBegin", o);
        else if (t === D.AfterDescription) n.insertAdjacentElement("afterEnd", o);
        else if (t === D.AfterDPD) {
            var r = e(".ot-dpd-container .ot-dpd-desc");
            uo.ChoicesBanner && (r = e(this._otGrpContainerSelector)), r.insertAdjacentElement("beforeEnd", o)
        }
    }, Hi.prototype.insertGrps = function(e) {
        var u = e(".ot-cat-item").cloneNode(!0);
        io.removeChild(e(".ot-cat-item")), uo.BCategoryStyle === ce.Checkbox ? io.removeChild(u.querySelector(".ot-tgl")) : (io.removeChild(u.querySelector(".ot-chkbox")), fo(u).addClass("ot-cat-bdr"));
        var h = e(".ot-cat-lst ul");
        uo.Groups.forEach(function(e) {
            var t = u.cloneNode(!0),
                o = t.querySelector(".ot-tgl,.ot-chkbox"),
                n = e.GroupName,
                r = e.CustomGroupId,
                i = "ot-bnr-grp-id-" + r,
                s = "ot-bnr-hdr-id-" + r,
                a = -1 !== Zt.indexOf(e.Type),
                l = Go.getGrpStatus(e).toLowerCase() === dt || a,
                c = Jn.isGroupActive(e) || a;
            fo(o.querySelector("label")).attr("for", i), fo(o.querySelector(".ot-label-txt")).html(e.GroupName);
            var d = o.querySelector("input");
            l && (uo.BCategoryStyle === ce.Toggle ? (io.removeChild(o), t.insertAdjacentElement("beforeend", fo("<div class='ot-always-active'>" + uo.AlwaysActiveText + "</div>", "ce").el)) : fo(d).attr("disabled", !0)), d.classList.add("category-switch-handler"), Jn.setInputID(d, i, r, c, s);
            var p = t.querySelector("h4");
            fo(p).html(n), fo(p).attr("id", s), fo(h).append(t)
        })
    }, Hi.prototype.setBannerLogo = function(e, t) {
        if (to.fp.CookieV2BannerLogo && uo.BnrLogo) {
            var o = t(cr),
                n = "afterend";
            po.bannerName === At && (o = t("#onetrust-cookie-btn"), n = "beforeend");
            var r = Ao.updateCorrectUrl(uo.BnrLogo);
            fo(e).addClass("ot-bnr-w-logo"), fo(o).el.innerHTML = "", o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + r + "'\n            title='" + uo.BnrLogoAria + "'\n            alt='" + uo.BnrLogoAria + "'/>")
        }
    }, Hi.prototype.setOptOutSignalNotification = function(e) {
        var t = !0 === navigator.globalPrivacyControl && po.gpcForAGrpEnabled;
        uo.BShowOptOutSignal && (t || po.previewMode) && Ao.createOptOutSignalElement(e, !1)
    }, Hi);

    function Hi() {
        this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1, this._bannerOptionsSelector = "#banner-options", this._btnGrpParentSelector = "#onetrust-button-group-parent", this._otGrpContainerSelector = "#onetrust-group-container", this.cookiePolicyLinkSelector = "#onetrust-policy-text a"
    }
    var Fi, Ri = (qi.prototype.setHeaderConfig = function() {
        Fi.setHeader(), Fi.setSearchInput(), Fi.setHeaderUIConsent();
        var e = Fi.getGroupsForFilter();
        Fr.setFilterListByGroup(e, !1)
    }, qi.prototype.filterVendorByString = function(e) {
        Fi.searchQuery = e, Fi.filterVendorByGroupOrQuery()
    }, qi.prototype.filterVendorByGroup = function(e) {
        Fi.filterGroups = e, Fi.filterVendorByGroupOrQuery()
    }, qi.prototype.showVSList = function() {
        Fi.removeListeners(), Fi.showEmptyResults(!1, ""), Fi.clearUIElementsInMain(), Fi.addVSList(go.getVendorsInDomain())
    }, qi.prototype.showEmptyResults = function(e, t) {
        if (e) this.setNoResultsContent(t);
        else {
            fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).removeClass("no-results");
            var o = fo("#onetrust-pc-sdk #no-results");
            o.length && o.remove()
        }
    }, qi.prototype.setNoResultsContent = function(e) {
        var t = fo("#onetrust-pc-sdk #no-results").el[0];
        if (!t) {
            var o = document.createElement("div"),
                n = document.createElement("p"),
                r = document.createTextNode(" " + uo.PCVendorNotFound + "."),
                i = document.createElement("span");
            return o.id = "no-results", i.id = "user-text", i.innerText = e, n.appendChild(i), n.appendChild(r), o.appendChild(n), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).addClass("no-results"), fo("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).append(o)
        }
        t.querySelector("span").innerText = e
    }, qi.prototype.getGroupsFilter = function() {
        for (var e = [], t = 0, o = fo("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t],
                r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }, qi.prototype.cancelFilter = function() {
        for (var e = 0, t = fo("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e],
                n = o.getAttribute("data-optanongroupid"),
                r = 0 <= go.filterByCategories.indexOf(n);
            io.setCheckedAttribute(null, o, r)
        }
        var i = Fi.getGroupsFilter();
        Fi.filterVendorByGroup(i)
    }, qi.prototype.clearFilter = function() {
        Fi.searchQuery = "", Fi.filterGroups = []
    }, qi.prototype.toggleVendors = function(r) {
        go.getVendorsInDomain().forEach(function(e, t) {
            if (!Go.isAlwaysActiveGroup(e.groupRef)) {
                var o = document.getElementById("ot-vendor-id-" + t),
                    n = document.getElementById("ot-vs-lst-id-" + t);
                rr.toggleVendorService(e.groupRef.CustomGroupId, t, r, o), rr.toggleVendorService(e.groupRef.CustomGroupId, t, r, n)
            }
        })
    }, qi.prototype.hideVendorList = function() {
        Fi.removeListeners(), Fi.clearUIElementsInMain()
    }, qi.prototype.addListeners = function() {
        fo("#onetrust-pc-sdk " + _o.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", Fi.toggleVendorHandler), fo("#onetrust-pc-sdk").on("click", ".ot-vs-list", Mi.onCategoryItemToggle.bind(this))
    }, qi.prototype.removeListeners = function() {
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
            return e.removeEventListener("click", Mi.toggleGroupORVendorHandler)
        });
        var e = document.querySelector("#onetrust-pc-sdk .ot-vs-list");
        null != e && e.removeEventListener("click", Mi.onCategoryItemToggle)
    }, qi.prototype.toggleVendorHandler = function(e) {
        Mi.toggleVendorFromListHandler(e), Fi.checkAllowAllCheckedValue()
    }, qi.prototype.filterVendorByGroupOrQuery = function() {
        var o = new Map;
        go.getVendorsInDomain().forEach(function(e, t) {
            Fi.checkVendorConditions(e) && o.set(t, e)
        }), Fi.showEmptyResults(o.size <= 0, Fi.searchQuery), Fi.removeListeners(), Fi.clearUIElementsInMain(), Fi.addVSList(o)
    }, qi.prototype.checkVendorConditions = function(e) {
        return !("" !== Fi.searchQuery && e.ServiceName.toLowerCase().indexOf(Fi.searchQuery.toLowerCase()) < 0 || 0 < Fi.filterGroups.length && Fi.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }, qi.prototype.addVSList = function(e) {
        var t = fo("#onetrust-pc-sdk " + _o.P_Vendor_Content + " .ot-sdk-column"),
            o = rr.getVendorListEle(e);
        t.append(o), Fi.addListeners()
    }, qi.prototype.getGroupsForFilter = function() {
        var t = new Map;
        return go.getVendorsInDomain().forEach(function(e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }), Array.from(t.values())
    }, qi.prototype.clearUIElementsInMain = function() {
        fo("#onetrust-pc-sdk " + _o.P_Vendor_Content + " ul" + _o.P_Host_Cntr).html(""), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content + " ul" + _o.P_Host_Cntr).hide(), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content + " ul" + _o.P_Vendor_Container).html(""), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content + " ul" + _o.P_Vendor_Container).hide();
        var e = fo("#onetrust-pc-sdk " + _o.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }, qi.prototype.setHeader = function() {
        var e = uo.VendorServiceConfig.PCVSListTitle,
            t = document.querySelector("#onetrust-pc-sdk " + _o.P_Vendor_Title);
        t && (t.innerText = e)
    }, qi.prototype.setSearchInput = function() {
        var e = uo.PCenterCookieListSearch,
            t = uo.PCenterCookieSearchAriaLabel,
            o = fo("#onetrust-pc-sdk " + _o.P_Vendor_Search_Input);
        o.el[0].placeholder = e, o.attr("aria-label", t)
    }, qi.prototype.setHeaderUIConsent = function() {
        var e;
        if (fo("#onetrust-pc-sdk " + _o.P_Select_Cntr).addClass("ot-vnd-list-cnt"), fo("#onetrust-pc-sdk " + _o.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"), uo.PCCategoryStyle === ce.Toggle && (fo("#onetrust-pc-sdk " + _o.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"), uo.PCAccordionStyle === J.Caret && fo("#onetrust-pc-sdk " + _o.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf")), fo("#onetrust-pc-sdk " + _o.P_Leg_Select_All).hide(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Host_El).hide(), fo("#onetrust-pc-sdk " + _o.P_Host_Cntr).hide(), fo(_o.P_Vendor_List + " #select-all-text-container").hide(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Leg_El).hide(), fo("#onetrust-pc-sdk " + _o.P_Vendor_Container).show(), fo("#onetrust-pc-sdk " + _o.P_Select_Cntr).show(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Consent_El).show("inline-block"), fo("#onetrust-pc-sdk " + _o.P_Vendor_List).removeClass(_o.P_Host_UI), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).removeClass(_o.P_Host_Cnt), !document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr")) {
            var t = document.createElement("h4");
            t.className = "sel-all-hdr", t.textContent = (null === (e = uo.VendorServiceConfig) || void 0 === e ? void 0 : e.PCVSAllowAllText) || "PCVSAllowAllText";
            var o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
                n = uo.PCCategoryStyle === ce.Checkbox ? "beforeend" : "afterbegin";
            o.insertAdjacentElement(n, t)
        }
        Fi.checkAllowAllCheckedValue()
    }, qi.prototype.checkAllowAllCheckedValue = function() {
        var t = !0;
        go.vsConsent.forEach(function(e) {
            e || (t = !1)
        });
        var e = document.getElementById("#select-all-vendor-groups-handler");
        io.setCheckedAttribute(null, e, t)
    }, qi);

    function qi() {
        this.searchQuery = "", this.filterGroups = []
    }
    var Mi, Ui = (ji.prototype.initCookieSettingHandlers = function() {
        fo(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }, ji.prototype.initFlgtCkStgBtnEventHandlers = function() {
        fo(".ot-floating-button__open").on("click", Mi.floatingCookieSettingOpenBtnClicked), fo(".ot-floating-button__close").on("click", Mi.floatingCookieSettingCloseBtnClicked)
    }, ji.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        fo(Mi.fltgBtnSltr).addClass("ot-pc-open"), uo.cookiePersistentLogo.includes("ot_guard_logo.svg") && fo(Mi.fltgBtnFSltr).attr(Mt, "true"), fo(Mi.fltgBtnBSltr).attr(Mt, ""), fo(Mi.fltgBtnFrontBtn).el[0].setAttribute(Mt, !0), fo(Mi.fltgBtnBackBtn).el[0].setAttribute(qt, uo.AriaClosePreferences), fo(Mi.fltgBtnBackBtn).el[0].setAttribute(Mt, !1), ln.triggerGoogleAnalyticsEvent(hn, Tn), Mi.showCookieSettingsHandler(e)
    }, ji.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        fo(Mi.fltgBtnFrontBtn).el[0].setAttribute(qt, uo.AriaOpenPreferences), fo(Mi.fltgBtnFrontBtn).el[0].setAttribute(Mt, !1), fo(Mi.fltgBtnBackBtn).el[0].setAttribute(Mt, !0), e && (ln.triggerGoogleAnalyticsEvent(hn, An), Mi.hideCookieSettingsHandler(e))
    }, ji.prototype.initialiseLegIntBtnHandlers = function() {
        fo(document).on("click", ".ot-obj-leg-btn-handler", Mi.onLegIntButtonClick), fo(document).on("click", ".ot-remove-objection-handler", Mi.onLegIntButtonClick)
    }, ji.prototype.initialiseAddtlVenHandler = function() {
        fo("#onetrust-pc-sdk #ot-addtl-venlst").on("click", Mi.selectVendorsGroupHandler), fo("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", Mi.selAllAdtlVenHandler)
    }, ji.prototype.initializeGenVenHandlers = function() {
        fo("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", Mi.genVendorToggled), fo("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", Mi.genVendorDetails), fo("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", Mi.selectAllGenVenHandler)
    }, ji.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this,
            t = 37,
            o = 39;
        po.pcName === Ot && Mi.categoryMenuSwitchHandler(), fo("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", Mi.bannerCloseButtonHandler), fo("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", zi.allowAllEventHandler.bind(this, !0)), fo("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", zi.rejectAllEventHandler.bind(this, !0)), fo("#onetrust-pc-sdk #close-pc-btn-handler").on("click", Mi.hideCookieSettingsHandler), Mi.closePCWhenEscPressed(), fo("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", Mi.hideCookieSettingsHandler), fo("#onetrust-pc-sdk .category-switch-handler").on("click", Mi.toggleGroupORVendorHandler), fo("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", Mi.toggleSubCategory), fo("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
            po.pcName === Ot && (e.keyCode !== t && e.keyCode !== o || (uo.PCTemplateUpgrade ? Mi.changeSelectedTabV2(e) : Mi.changeSelectedTab(e)))
        }), fo("#onetrust-pc-sdk").on("click", _o.P_Category_Item + " > input:first-child," + _o.P_Category_Item + " > button:first-child", Mi.onCategoryItemToggle.bind(this)), (uo.showCookieList || go.showGeneralVendors) && (fo("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
            go.showGeneralVendors && uo.showCookieList ? go.cookieListType = Z.HostAndGenVen : go.showGeneralVendors ? go.cookieListType = Z.GenVen : go.cookieListType = Z.Host, Mi.pcLinkSource = e.target, Mi.loadCookieList(e.target)
        }), Ao.isOptOutEnabled() ? (fo("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", Mi.selectAllHostsGroupsHandler), fo("#onetrust-pc-sdk " + _o.P_Host_Cntr).on("click", Mi.selectHostsGroupHandler)) : fo("#onetrust-pc-sdk " + _o.P_Host_Cntr).on("click", Mi.toggleAccordionStatus)), Mi.addListenerWhenIabEnabled(), Mi.addEventListenerWhenIsHostOrVendorsAreEnabled(), Mi.adddListenerWhenNoBanner(), fo("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return u(e, void 0, void 0, function() {
                return g(this, function(e) {
                    return go.cookieListType = Z.GenVen, Mi.loadCookieList(t.target), [2]
                })
            })
        }), Mi.addListenerWhenVendorServices()
    }, ji.prototype.closePCWhenEscPressed = function() {
        fo(document).on("keydown", function(e) {
            var t = document.getElementById(Mi.pcSDKSelector),
                o = "none" !== window.getComputedStyle(t).display;
            if (27 === e.keyCode && t && o) {
                var n = fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal).el[0];
                "block" === n.style.display || "0px" < n.style.width ? (Mi.closeFilter(), fo("#onetrust-pc-sdk #filter-btn-handler").focus()) : uo.NoBanner && !uo.ShowPreferenceCenterCloseButton || Mi.hideCookieSettingsHandler(), Mi.confirmPC()
            }(o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && Ao.findUserType(e)
        })
    }, ji.prototype.addEventListenerWhenIsHostOrVendorsAreEnabled = function() {
        if (uo.IsIabEnabled || uo.showCookieList || go.showGeneralVendors || go.showVendorService) {
            fo(document).on("click", ".back-btn-handler", Mi.backBtnHandler), Mi.addListenerSearchKeyEvent(), fo("#onetrust-pc-sdk #filter-btn-handler").on("click", Mi.toggleVendorFiltersHandler), fo("#onetrust-pc-sdk #filter-apply-handler").on("click", Mi.applyFilterHandler), fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal).on("click", Mi.tglFltrOptionHandler), !to.isV2Template && po.pcName !== wt || fo("#onetrust-pc-sdk #filter-cancel-handler").on("click", Mi.cancelFilterHandler), !to.isV2Template && po.pcName === wt || fo("#onetrust-pc-sdk #clear-filters-handler").on("click", Mi.clearFiltersHandler), to.isV2Template ? fo("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), fo("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
            }) : fo("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), fo("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
            });
            var e = fo("#onetrust-pc-sdk .category-filter-handler").el;
            fo(e[0]).on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), fo("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
            })
        }
    }, ji.prototype.addListenerSearchKeyEvent = function() {
        fo(Mi.VENDOR_SEARCH_SELECTOR).on("keyup", function(e) {
            var t = e.target.value.trim();
            Mi.currentSearchInput !== t && (go.showVendorService ? Fi.filterVendorByString(t) : Mi.isCookieList ? (er.searchHostList(t), go.showTrackingTech && Mi.addEventAdditionalTechnologies()) : (er.loadVendorList(t, []), uo.UseGoogleVendors && er.searchVendors(er.googleSearchSelectors, go.addtlVendorsList, ie.GoogleVendor, t), go.showGeneralVendors && uo.GeneralVendors.length && er.searchVendors(er.genVendorSearchSelectors, uo.GeneralVendors, ie.GeneralVendor, t)), er.playSearchStatus(Mi.isCookieList), Mi.currentSearchInput = t)
        })
    }, ji.prototype.addListenerWhenIabEnabled = function() {
        uo.IsIabEnabled && (fo("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
            Mi.pcLinkSource = e.target, Mi.showVendorsList(e.target)
        }), fo("#onetrust-pc-sdk " + _o.P_Vendor_Container).on("click", Mi.selectVendorsGroupHandler), uo.UseGoogleVendors || Mi.bindSelAllHandlers(), Mi.initialiseLegIntBtnHandlers())
    }, ji.prototype.adddListenerWhenNoBanner = function() {
        uo.NoBanner && (uo.OnClickCloseBanner && document.body.addEventListener("click", zi.bodyClickEvent), uo.ScrollCloseBanner && window.addEventListener("scroll", zi.scrollCloseBanner))
    }, ji.prototype.addListenerWhenVendorServices = function() {
        go.showVendorService && (Mi.bindSelAllHandlers(), fo("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
            return Mi.showVendorsList(null, !0)
        }))
    }, ji.prototype.bindSelAllHandlers = function() {
        fo("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", Mi.selectAllVendorsLegIntHandler), fo("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", Mi.SelectAllVendorConsentHandler)
    }, ji.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event), ln.triggerGoogleAnalyticsEvent(hn, vn), vr.removeAddedOTCssStyles(yr.PC), Vr.hideConsentNoticeV2(), Mi.getResizeElement().removeEventListener("resize", Mi.setCenterLayoutFooterHeight), window.removeEventListener("resize", Mi.setCenterLayoutFooterHeight), !to.isV2Template && po.pcName !== wt || Mi.closeFilter(!1), po.pcName === Vt && fo("#onetrust-pc-sdk " + _o.P_Content).removeClass("ot-hide"), zi.hideVendorsList(), pn.csBtnGroup && (fo(Mi.fltgBtnSltr).removeClass("ot-pc-open"), Mi.floatingCookieSettingCloseBtnClicked(null)), Mi.confirmPC(e), zi.resetConsent(), !1
    }, ji.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked,
            o = fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Host_El).el[0],
            n = o.classList.contains("line-through"),
            r = fo("#onetrust-pc-sdk .host-checkbox-handler").el;
        io.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var i = 0; i < r.length; i++) r[i].getAttribute("disabled") || io.setCheckedAttribute(null, r[i], t);
        go.optanonHostList.forEach(function(e) {
            en.updateHostStatus(e, t)
        }), r.forEach(function(e) {
            Qo.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }), n && o.classList.remove("line-through")
    }, ji.prototype.selectHostsGroupHandler = function(e) {
        Mi.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"),
            o = e.target.getAttribute("ckType"),
            n = e.target.checked;
        if (null !== t) {
            if (o === Q.GenVendor) {
                var r = uo.GeneralVendors.find(function(e) {
                    return e.VendorCustomId === t
                }).Name;
                ln.triggerGoogleAnalyticsEvent(hn, n ? _n : En, r + ": VEN_" + t), Qo.updateGenVendorStatus(t, n)
            } else {
                var i = io.findIndex(go.optanonHostList, function(e) {
                        return e.HostId === t
                    }),
                    s = go.optanonHostList[i];
                Mi.toggleHostStatus(s, n)
            }
            io.setCheckedAttribute(null, e.target, n)
        }
    }, ji.prototype.onCategoryItemToggle = function(e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (po.pcName === Vt && this.setPcListContainerHeight(), Mi.toggleAccordionStatus(e))
    }, ji.prototype.toggleAccordionStatus = function(e) {
        var t = e.target;
        if (t && t.getAttribute("aria-expanded")) {
            var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
            t.setAttribute("aria-expanded", o)
        }
    }, ji.prototype.toggleHostStatus = function(e, t) {
        ln.triggerGoogleAnalyticsEvent(hn, t ? Vn : Bn, e.HostName + ": H_" + e.HostId), en.updateHostStatus(e, t)
    }, ji.prototype.toggleBannerOptions = function(e) {
        fo(".banner-option-input").each(function(e) {
            fo(e).el.setAttribute("aria-expanded", !1)
        }), Mi.toggleAccordionStatus(e)
    }, ji.prototype.bannerCloseButtonHandler = function(e) {
        if (fo(document).off("keydown", Mi.shiftBannerFocus), e && e.target && e.target.className) {
            var t = e.target.className;
            if (-1 < t.indexOf("save-preference-btn-handler")) go.bannerCloseSource = m.ConfirmChoiceButton, ln.triggerGoogleAnalyticsEvent(hn, Sn);
            else if (-1 < t.indexOf("banner-close-button")) {
                go.bannerCloseSource = m.BannerCloseButton;
                var o = Cn; - 1 < t.indexOf("ot-close-link") && (o = yn, go.bannerCloseSource = m.ContinueWithoutAcceptingButton), ln.triggerGoogleAnalyticsEvent(hn, o)
            } else -1 < t.indexOf("ot-bnr-save-handler") && (go.bannerCloseSource = m.BannerSaveSettings, ln.triggerGoogleAnalyticsEvent(hn, fn))
        }
        return vr.removeAddedOTCssStyles(), zi.hideVendorsList(), zi.bannerCloseButtonHandler()
    }, ji.prototype.onLegIntButtonClick = function(e) {
        if (e) {
            var t = e.currentTarget,
                o = "true" === t.parentElement.getAttribute("is-vendor"),
                n = t.parentElement.getAttribute("data-group-id"),
                r = !t.classList.contains("ot-leg-int-enabled");
            if (o) Mi.onVendorToggle(n, R.LI);
            else {
                var i = Go.getGroupById(n);
                i.Parent ? Mi.updateSubGroupToggles(i, r, !0) : Mi.updateGroupToggles(i, r, !0)
            }
            Jn.updateLegIntBtnElement(t.parentElement, r)
        }
    }, ji.prototype.updateGroupToggles = function(t, o, e) {
        en.toggleGroupHosts(t, o), go.genVenOptOutEnabled && en.toggleGroupGenVendors(t, o), t.IsLegIntToggle = e, Jn.toggleGrpStatus(t, o), t.SubGroups && t.SubGroups.length && (po.bannerName === Lt && to.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle, Jn.toggleGrpStatus(e, o), e.IsLegIntToggle = !1, en.toggleGroupHosts(e, o), go.genVenOptOutEnabled && en.toggleGroupGenVendors(e, o), rr.setVendorStateByGroup(e, o)
        }) : Jn.toogleAllSubGrpElements(t, o), t.SubGroups.forEach(function(e) {
            return rr.setVendorStateByGroup(e, o)
        })), rr.setVendorStateByGroup(t, o), this.allowAllVisible(Jn.setAllowAllButton()), t.IsLegIntToggle = !1
    }, ji.prototype.updateSubGroupToggles = function(e, t, o) {
        en.toggleGroupHosts(e, t), go.genVenOptOutEnabled && en.toggleGroupGenVendors(e, t);
        var n = Go.getGroupById(e.Parent);
        e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle;
        var r = Jn.isGroupActive(n);
        t ? (Jn.toggleGrpStatus(e, !0), Jn.isAllSubgroupsEnabled(n) && !r && (Jn.toggleGrpStatus(n, !0), en.toggleGroupHosts(n, t), go.genVenOptOutEnabled && en.toggleGroupGenVendors(n, t), Jn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (Jn.toggleGrpStatus(e, !1), Jn.isAllSubgroupsDisabled(n) && r ? (Jn.toggleGrpStatus(n, !1), en.toggleGroupHosts(n, t), go.genVenOptOutEnabled && en.toggleGroupGenVendors(n, t), Jn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (Jn.toggleGrpStatus(n, !1), en.toggleGroupHosts(n, !1), go.genVenOptOutEnabled && en.toggleGroupGenVendors(n, t), Jn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(Jn.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, ji.prototype.hideCategoryContainer = function(e) {
        void 0 === e && (e = !1);
        var t = po.pcName;
        this.isCookieList = e, uo.PCTemplateUpgrade ? fo("#onetrust-pc-sdk " + _o.P_Content).addClass("ot-hide") : fo("#onetrust-pc-sdk .ot-main-content").hide(), fo("#onetrust-pc-sdk " + _o.P_Vendor_List).removeClass("ot-hide"), t !== wt && t !== Vt && fo("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), t === Vt && oo(fo("#onetrust-pc-sdk").el[0], 'height: "";', !0), go.showVendorService ? Fi.setHeaderConfig() : (e ? Mi.setCookieListTemplate() : Mi.setVendorListTemplate(), Fr.setFilterList(e))
    }, ji.prototype.setCookieListTemplate = function() {
        var e = to.isV2Template;
        fo(_o.P_Vendor_List + " #select-all-text-container").show("inline-block"), fo("#onetrust-pc-sdk " + _o.P_Host_Cntr).show(), Ao.isOptOutEnabled() ? fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Host_El).show("inline-block") : fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Host_El).hide(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Leg_El).hide(), fo("#onetrust-pc-sdk " + _o.P_Leg_Header).hide(), e || fo("#onetrust-pc-sdk " + _o.P_Leg_Select_All).hide(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Consent_El).hide(), fo("#onetrust-pc-sdk  " + _o.P_Vendor_Container).hide(), (uo.UseGoogleVendors || go.showGeneralVendors) && fo("#onetrust-pc-sdk .ot-acc-cntr").hide(), fo("#onetrust-pc-sdk " + _o.P_Vendor_List).addClass(_o.P_Host_UI), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).addClass(_o.P_Host_Cnt)
    }, ji.prototype.setVendorListTemplate = function() {
        fo("#onetrust-pc-sdk " + _o.P_Vendor_Container).show(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Consent_El).show("inline-block"), uo.UseGoogleVendors && fo("#onetrust-pc-sdk .ot-acc-cntr").show(), po.legIntSettings.PAllowLI && "IAB2" === po.iabType ? (fo("#onetrust-pc-sdk " + _o.P_Select_Cntr).show(to.isV2Template ? void 0 : "inline-block"), fo("#onetrust-pc-sdk " + _o.P_Leg_Select_All).show("inline-block"), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Leg_El).show("inline-block"), fo(_o.P_Vendor_List + " #select-all-text-container").hide(), po.legIntSettings.PShowLegIntBtn ? (fo("#onetrust-pc-sdk " + _o.P_Leg_Header).hide(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Leg_El).hide()) : fo("#onetrust-pc-sdk " + _o.P_Leg_Header).show()) : (fo("#onetrust-pc-sdk " + _o.P_Select_Cntr).show(), fo(_o.P_Vendor_List + " #select-all-text-container").show("inline-block"), fo("#onetrust-pc-sdk " + _o.P_Leg_Select_All).hide(), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Leg_El).hide()), fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Host_El).hide(), fo("#onetrust-pc-sdk " + _o.P_Host_Cntr).hide(), fo("#onetrust-pc-sdk " + _o.P_Vendor_List).removeClass(_o.P_Host_UI), fo("#onetrust-pc-sdk " + _o.P_Vendor_Content).removeClass(_o.P_Host_Cnt)
    }, ji.prototype.showAllVendors = function(t) {
        return u(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Mi.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), Mi.showVendorsList(null, !0), go.isPCVisible ? [3, 3] : [4, Mi.showCookieSettingsHandler(t)];
                    case 2:
                        e.sent(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, ji.prototype.fetchAndSetupPC = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return to.moduleInitializer.IsSuppressPC && 0 === fo("#onetrust-pc-sdk").length ? [4, So.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), pn.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, to.isV2Template = uo.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (o = document.getElementById("onetrust-style")).innerHTML += pn.preferenceCenterGroup.css, o.innerHTML += Mr.addCustomPreferenceCenterCSS(), ar.insertPcHtml(), Mi.initialiseConsentNoticeHandlers(), uo.IsIabEnabled && er.InitializeVendorList(), e.label = 2;
                    case 2:
                        return 0 !== fo("#onetrust-pc-sdk").length && uo.PCTemplateUpgrade && (n = document.querySelector("#onetrust-pc-sdk .ot-optout-signal"), ar.setOptOutSignalVisibility(n)), [2]
                }
            })
        })
    }, ji.prototype.setVendorContent = function() {
        fo("#onetrust-pc-sdk #filter-count").text(go.filterByIABCategories.length.toString()), er.loadVendorList("", go.filterByIABCategories), uo.UseGoogleVendors && (go.vendorDomInit ? er.resetAddtlVendors() : (er.initGoogleVendors(), fo("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Mi.toggleAccordionStatus.bind(this)))), go.vendorDomInit || (go.vendorDomInit = !0, Mi.initialiseLegIntBtnHandlers(), uo.UseGoogleVendors && (Mi.initialiseAddtlVenHandler(), Mi.bindSelAllHandlers())), go.showGeneralVendors && !go.genVendorDomInit && (go.genVendorDomInit = !0, er.initGenVendors(), Mi.initializeGenVenHandlers(), uo.UseGoogleVendors || (Mi.bindSelAllHandlers(), fo("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Mi.toggleAccordionStatus.bind(this))))
    }, ji.prototype.addEventAdditionalTechnologies = function() {
        var e = document.querySelectorAll("#onetrust-pc-sdk .ot-acc-cntr.ot-add-tech > button");
        0 < e.length && (fo(e).off("click", Mi.toggleAccordionStatus), fo(e).on("click", Mi.toggleAccordionStatus))
    }, ji.prototype.showVendorsList = function(e, t) {
        if (void 0 === t && (t = !1), go.cookieListType = null, Mi.hideCategoryContainer(!1), vr.addOTCssPropertiesToBody(yr.PC, {}), go.showVendorService) Fi.showVSList();
        else {
            if (!t) {
                var o = e.getAttribute("data-parent-id");
                if (o) {
                    var n = Go.getGroupById(o);
                    if (n) {
                        var r = b(n.SubGroups, [n]).reduce(function(e, t) {
                            return -1 < Xt.indexOf(t.Type) && e.push(t.CustomGroupId), e
                        }, []);
                        go.filterByIABCategories = b(go.filterByIABCategories, r)
                    }
                }
            }
            Mi.setVendorContent(), Qn.updateFilterSelection(!1)
        }
        return go.pcLayer = O.VendorList, e && zn.setPCFocus(zn.getPCElements()), this.setSearchInputFocus(), !1
    }, ji.prototype.loadCookieList = function(e) {
        go.filterByCategories = [], Mi.hideCategoryContainer(!0);
        var t = e && e.getAttribute("data-parent-id");
        if (t) {
            var o = Go.getGroupById(t);
            go.filterByCategories.push(t), o.SubGroups.length && o.SubGroups.forEach(function(e) {
                if (-1 === Xt.indexOf(e.Type)) {
                    var t = e.CustomGroupId;
                    go.filterByCategories.indexOf(t) < 0 && go.filterByCategories.push(t)
                }
            })
        }
        return er.loadHostList("", go.filterByCategories), go.showTrackingTech && Mi.addEventAdditionalTechnologies(), fo("#onetrust-pc-sdk #filter-count").text(go.filterByCategories.length.toString()), Qn.updateFilterSelection(!0), go.pcLayer = O.CookieList, zn.setPCFocus(zn.getPCElements()), this.setSearchInputFocus(), !1
    }, ji.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = fo(_o.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            r = e.target.checked,
            i = {};
        go.vendors.selectedLegIntVendors.map(function(e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            io.setCheckedAttribute(null, n[s], r), uo.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? uo.PCActiveText : uo.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid"),
                l = i[a];
            void 0 === l && (l = a), go.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"), io.setCheckedAttribute(null, e.target, r)
    }, ji.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = fo("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = fo("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++) io.setCheckedAttribute(null, n[i], r), uo.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? uo.PCActiveText : uo.PCInactiveText);
        r ? uo.UseGoogleVendors && Object.keys(go.addtlVendorsList).forEach(function(e) {
            go.addtlVendors.vendorSelected[e] = !0
        }) : go.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, ji.prototype.selectAllGenVenHandler = function(e) {
        var t = e.target.checked;
        Mi.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", t)
    }, ji.prototype.selectAllHandler = function(e, t, o) {
        for (var n = fo(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = fo(e.vendorBoxes).el, s = 0; s < i.length; s++) "genven" === t && !o && go.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (io.setDisabledAttribute(null, i[s], !0), io.setCheckedAttribute(null, i[s], !0)) : io.setCheckedAttribute(null, i[s], o), uo.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? uo.PCActiveText : uo.PCInactiveText);
        o ? "googleven" === t && uo.UseGoogleVendors ? Object.keys(go.addtlVendorsList).forEach(function(e) {
            go.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && go.showGeneralVendors && uo.GeneralVendors.forEach(function(e) {
            go.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? go.addtlVendors.vendorSelected = {} : (go.genVendorsConsent = {}, go.alwaysActiveGenVendors.forEach(function(e) {
            go.genVendorsConsent[e] = !0
        })), r && n.classList.remove("line-through")
    }, ji.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = e.target.checked;
        if (go.showVendorService) Fi.toggleVendors(t);
        else {
            var o = fo("#onetrust-pc-sdk #" + _o.P_Sel_All_Vendor_Consent_El).el[0],
                n = o.classList.contains("line-through"),
                r = fo(_o.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
                i = {};
            go.vendors.selectedVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                io.setCheckedAttribute(null, r[s], t), uo.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? uo.PCActiveText : uo.PCInactiveText);
                var a = r[s].getAttribute("vendorid"),
                    l = i[a];
                void 0 === l && (l = a), go.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        io.setCheckedAttribute(null, e.target, t)
    }, ji.prototype.onVendorToggle = function(n, e) {
        var t = go.vendors,
            o = go.addtlVendors,
            r = e === R.LI ? t.selectedLegIntVendors : e === R.AddtlConsent ? [] : t.selectedVendors,
            i = !1,
            s = Number(n);
        r.some(function(e, t) {
            var o = e.split(":");
            if (o[0] === n) return s = t, i = "true" === o[1], !0
        }), e === R.LI ? (ln.triggerGoogleAnalyticsEvent(hn, i ? Nn : Dn, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedLegIntVendors[s] = n + ":" + !i, po.legIntSettings.PShowLegIntBtn || er.vendorLegIntToggleEvent()) : e === R.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0, er.venAdtlSelAllTglEvent()) : (ln.triggerGoogleAnalyticsEvent(hn, i ? Gn : xn, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedVendors[s] = n + ":" + !i, er.vendorsListEvent())
    }, ji.prototype.onVendorDisclosure = function(n) {
        return u(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = go.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0, [4, So.getStorageDisclosure(t[n].disclosureUrl)]);
                    case 1:
                        o = e.sent(), er.updateVendorDisclosure(n, o), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, ji.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && io.setCheckedAttribute(null, e.target, e.target.checked)
    }, ji.prototype.selectVendorsGroupHandler = function(e) {
        Mi.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
            o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"),
            r = e.target.getAttribute("disc-vid");
        t ? Mi.onVendorToggle(t, R.LI) : o ? Mi.onVendorToggle(o, R.Consent) : n && Mi.onVendorToggle(n, R.AddtlConsent), r && Mi.onVendorDisclosure(r), (t || o || n) && (io.setCheckedAttribute(null, e.target, e.target.checked), uo.PCShowConsentLabels && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? uo.PCActiveText : uo.PCInactiveText))
    }, ji.prototype.toggleVendorFiltersHandler = function() {
        var e = !1,
            t = fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal).el[0];
        switch (po.pcName) {
            case Bt:
            case Et:
            case Vt:
            case Ot:
                if (e = "block" === t.style.display) Mi.closeFilter();
                else {
                    var o = fo("#onetrust-pc-sdk " + _o.P_Triangle).el[0];
                    fo(o).attr("style", "display: block;"), fo(t).attr("style", "display: block;");
                    var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                    zn.setPCFocus(n)
                }
                break;
            case wt:
                896 < window.innerWidth || 896 < window.screen.height ? oo(t, "width: 400px;", !0) : oo(t, "height: 100%; width: 100%;"), t.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        to.isV2Template && !e && (fo("#onetrust-pc-sdk").addClass("ot-shw-fltr"), fo("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, ji.prototype.clearFiltersHandler = function() {
        Mi.setAriaLabelforButtonInFilter(uo.PCenterFilterClearedAria);
        for (var e = fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) io.setCheckedAttribute(null, e[t], !1);
        Mi.isCookieList ? go.filterByCategories = [] : go.filterByIABCategories = []
    }, ji.prototype.cancelFilterHandler = function() {
        go.showVendorService ? Fi.cancelFilter() : Mi.isCookieList ? Qn.cancelHostFilter() : er.cancelVendorFilter(), Mi.closeFilter(), fo("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, ji.prototype.applyFilterHandler = function() {
        var e;
        Mi.setAriaLabelforButtonInFilter(uo.PCenterFilterAppliedAria), go.showVendorService ? (e = Fi.getGroupsFilter(), Fi.filterVendorByGroup(e)) : Mi.isCookieList ? (e = Qn.updateHostFilterList(), er.loadHostList("", e), go.showTrackingTech && Mi.addEventAdditionalTechnologies()) : (e = er.updateVendorFilterList(), er.loadVendorList("", e)), fo("#onetrust-pc-sdk #filter-count").text(String(e.length)), Mi.closeFilter(), fo("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, ji.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = go.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
        if (!t) {
            (t = document.createElement("span")).classList.add("ot-scrn-rdr"), t.setAttribute("aria-atomic", "true");
            var o = void 0;
            if (go.isPCVisible ? o = document.getElementById(Mi.pcSDKSelector) : document.getElementById(Mi.bannerSelector) && (o = document.getElementById(Mi.bannerSelector)), !o) return;
            o.appendChild(t)
        }
        t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-relevant", "additions"), t.setAttribute("aria-live", "assertive"), t.setAttribute(qt, e), Mi.timeCallback && clearTimeout(Mi.timeCallback), Mi.timeCallback = setTimeout(function() {
            Mi.timeCallback = null, t.setAttribute(qt, "")
        }, 900)
    }, ji.prototype.setPcListContainerHeight = function() {
        fo("#onetrust-pc-sdk " + _o.P_Content).el[0].classList.contains("ot-hide") ? oo(fo("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !fo("#onetrust-pc-sdk " + _o.P_Content).el[0].scrollHeight || fo("#onetrust-pc-sdk " + _o.P_Content).el[0].scrollHeight >= e ? oo(fo("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : oo(fo("#onetrust-pc-sdk").el[0], "height: auto;", !0)
        })
    }, ji.prototype.changeSelectedTab = function(e) {
        var t, o = fo("#onetrust-pc-sdk .category-menu-switch-handler"),
            n = 0,
            r = fo(o.el[0]);
        o.each(function(e, t) {
            fo(e).el.classList.contains(_o.P_Active_Menu) && (n = t, fo(e).el.classList.remove(_o.P_Active_Menu), r = fo(e))
        }), e.keyCode === G.RightArrow ? t = n + 1 >= o.el.length ? fo(o.el[0]) : fo(o.el[n + 1]) : e.keyCode === G.LeftArrow && (t = fo(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
    }, ji.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement;
        e.keyCode === G.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === G.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(), this.groupTabClick(n)
    }, ji.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = fo("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function(e) {
            if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
        })
    }, ji.prototype.groupTabClick = function(e) {
        var t = fo("#onetrust-pc-sdk " + _o.P_Grp_Container).el[0],
            o = t.querySelector("." + _o.P_Active_Menu),
            n = e.currentTarget || e,
            r = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(_o.P_Active_Menu), t.querySelector(_o.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + r).classList.remove("ot-hide"), n.setAttribute("tabindex", 0), n.setAttribute("aria-selected", !0), n.classList.add(_o.P_Active_Menu)
    }, ji.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + _o.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + _o.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(_o.P_Active_Menu)
    }, ji.prototype.closeFilter = function(e) {
        if (void 0 === e && (e = !0), !Vr.checkIfPcSdkContainerExist()) {
            var t = fo("#onetrust-pc-sdk " + _o.P_Fltr_Modal).el[0],
                o = fo("#onetrust-pc-sdk " + _o.P_Triangle).el[0];
            po.pcName === wt ? 896 < window.innerWidth || 896 < window.screen.height ? oo(t, "width: 0;", !0) : oo(t, "height: 0;") : oo(t, "display: none;"), o && fo(o).attr("style", "display: none;"), to.isV2Template && fo("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && zn.setFirstAndLast(zn.getPCElements())
        }
    }, ji.prototype.setBackButtonFocus = function() {
        fo("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, ji.prototype.setSearchInputFocus = function() {
        fo(Mi.VENDOR_SEARCH_SELECTOR).el[0].focus()
    }, ji.prototype.setCenterLayoutFooterHeight = function() {
        var e = Mi.pc;
        if (Mi.setMainContentHeight(), po.pcName === Ot && e) {
            var t = e.querySelectorAll("" + _o.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + _o.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
            else e.querySelector(".category-menu-switch-handler + " + _o.P_Desc_Container) && 640 < window.innerWidth && fo(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, ji.prototype.setMainContentHeight = function() {
        var e = this.pc,
            t = e.querySelector(".ot-pc-footer"),
            o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"),
            r = n[n.length - 1],
            i = uo.PCLayout;
        if (e.classList.remove("ot-ftr-stacked"), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"), !uo.PCTemplateUpgrade && !i.Center) {
            var s = e.clientHeight - t.clientHeight - o.clientHeight - 3;
            if (uo.PCTemplateUpgrade && !i.Tab && uo.PCenterVendorListDescText) {
                var a = fo("#vdr-lst-dsc").el;
                s = s - (a.length && a[0].clientHeight) - 10
            }
            oo(e.querySelector("" + _o.P_Vendor_List), "height: " + s + "px;", !0)
        }
        var l = e.querySelector("" + _o.P_Content);
        if (uo.PCTemplateUpgrade && i.Center) {
            var c = 600 < window.innerWidth && 475 < window.innerHeight;
            if (!this.pcBodyHeight && c && (this.pcBodyHeight = l.scrollHeight), c) {
                var d = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                d > .8 * window.innerHeight || 0 === this.pcBodyHeight ? oo(e, "height: " + .8 * window.innerHeight + "px;", !0) : oo(e, "height: " + d + "px;", !0)
            } else oo(e, "height: 100%;", !0)
        } else oo(e.querySelector("" + _o.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }, ji.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && uo.PCLayout.Tab && uo.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(), this.allowVisible = e)
    }, ji.prototype.restorePc = function() {
        go.pcLayer === O.CookieList ? (Mi.hideCategoryContainer(!0), er.loadHostList("", go.filterByCategories), go.showTrackingTech && Mi.addEventAdditionalTechnologies(), fo("#onetrust-pc-sdk #filter-count").text(go.filterByCategories.length.toString())) : go.pcLayer === O.VendorList && (Mi.hideCategoryContainer(!1), Mi.setVendorContent()), go.isPCVisible = !1, Mi.toggleInfoDisplay(), go.pcLayer !== O.VendorList && go.pcLayer !== O.CookieList || (Qn.updateFilterSelection(go.pcLayer === O.CookieList), Mi.setBackButtonFocus(), zn.setPCFocus(zn.getPCElements()))
    }, ji.prototype.toggleInfoDisplay = function() {
        return u(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return pn.csBtnGroup && (fo(Mi.fltgBtnSltr).addClass("ot-pc-open"), Mi.otGuardLogoPromise.then(function() {
                            uo.cookiePersistentLogo.includes("ot_guard_logo.svg") && fo(Mi.fltgBtnFSltr).attr(Mt, "true")
                        }), fo(Mi.fltgBtnBSltr).attr(Mt, "")), [4, Mi.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), po.pcName === Vt && this.setPcListContainerHeight(), void 0 !== go.pcLayer && go.pcLayer !== O.Banner || (go.pcLayer = O.PrefCenterHome), t = fo("#onetrust-pc-sdk").el[0], fo(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), go.isPCVisible || (Vr.showConsentNotice(), go.isPCVisible = !0, uo.PCTemplateUpgrade && (this.pc = t, o = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = o && 0 < o.clientHeight, this.setCenterLayoutFooterHeight(), Mi.getResizeElement().addEventListener("resize", Mi.setCenterLayoutFooterHeight), window.addEventListener("resize", Mi.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                            OneTrustPCLoaded: "yes"
                        })), Mi.captureInitialConsent(), [2]
                }
            })
        })
    }, ji.prototype.close = function(e) {
        uo.BCloseButtonType === he.Link ? go.bannerCloseSource = m.ContinueWithoutAcceptingButton : go.bannerCloseSource = m.BannerCloseButton, zi.bannerCloseButtonHandler(e), Mi.getResizeElement().removeEventListener("resize", Mi.setCenterLayoutFooterHeight), window.removeEventListener("resize", Mi.setCenterLayoutFooterHeight)
    }, ji.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, ji.prototype.initializeAlartHtmlAndHandler = function() {
        go.skipAddingHTML = 0 < fo("#onetrust-banner-sdk").length, go.skipAddingHTML || Ni.insertAlertHtml(), this.initialiseAlertHandlers()
    }, ji.prototype.initialiseAlertHandlers = function() {
        var e = this;
        Ni.showBanner(), uo.ForceConsent && !Ao.isCookiePolicyPage(uo.AlertNoticeText) && fo(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), uo.OnClickCloseBanner && document.body.addEventListener("click", zi.bodyClickEvent), uo.ScrollCloseBanner && (window.addEventListener("scroll", zi.scrollCloseBanner), fo(document).on("click", ".onetrust-close-btn-handler", zi.rmScrollAndClickBodyEvents), fo(document).on("click", "#onetrust-accept-btn-handler", zi.rmScrollAndClickBodyEvents), fo(document).on("click", "#accept-recommended-btn-handler", zi.rmScrollAndClickBodyEvents)), (uo.IsIabEnabled || uo.UseGoogleVendors || go.showGeneralVendors) && !go.showVendorService && fo(document).on("click", ".onetrust-vendors-list-handler", Mi.showAllVendors), uo.FloatingRoundedIcon && fo("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
            go.pcSource = e.currentTarget, Mi.showCookieSettingsHandler(e)
        }), fo("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", Mi.bannerCloseButtonHandler), fo("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", Mi.showCookieSettingsHandler), fo("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", zi.allowAllEventHandler.bind(this, !1)), fo("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", zi.rejectAllEventHandler.bind(this, !1)), fo("#onetrust-banner-sdk .banner-option-input").on("click", po.bannerName === At ? Mi.toggleBannerOptions : Mi.toggleAccordionStatus), fo("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
            return u(e, void 0, void 0, function() {
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return go.cookieListType = Z.GenVen, [4, Mi.fetchAndSetupPC()];
                        case 1:
                            return e.sent(), Mi.loadCookieList(t.target), Mi.showCookieSettingsHandler(t), [2]
                    }
                })
            })
        }), fo("#onetrust-banner-sdk .category-switch-handler").on("click", Mi.toggleBannerCategory);
        var t = document.getElementById("onetrust-banner-sdk");
        uo.ForceConsent && t && "none" !== window.getComputedStyle(t).display && fo(document).on("keydown", Mi.shiftBannerFocus), fo("#onetrust-banner-sdk").on("keydown", function(e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || Ao.findUserType(e)
        })
    }, ji.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }, ji.prototype.insertCookieSettingText = function(e) {
        var t, o;
        void 0 === e && (e = !1);
        for (var n = uo.CookieSettingButtonText, r = fo(".ot-sdk-show-settings").el, i = fo(".optanon-toggle-display").el, s = 0; s < r.length; s++) fo(r[s]).text(n), fo(i[s]).text(n);
        e ? (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.addEventListener("click", this.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.addEventListener("click", this.cookiesSettingsBoundListener)) : Mi.initCookieSettingHandlers()
    }, ji.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid");
        Qo.updateGenVendorStatus(t, e.target.checked);
        var o = uo.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name;
        ln.triggerGoogleAnalyticsEvent(hn, e.target.checked ? _n : En, o + ": VEN_" + t), er.genVenSelectAllTglEvent()
    }, ji.prototype.genVendorDetails = function(e) {
        Mi.toggleAccordionStatus(e)
    }, ji.prototype.confirmPC = function(e) {
        var t = Oo.isAlertBoxClosedAndValid();
        uo.NoBanner && uo.ShowPreferenceCenterCloseButton && !t && zi.bannerCloseButtonHandler();
        var o = Ao.isBannerVisible();
        !to.moduleInitializer.MobileSDK || !t && o || Mi.closePreferenceCenter(e)
    }, ji.prototype.captureInitialConsent = function() {
        go.initialGroupsConsent = JSON.parse(JSON.stringify(go.groupsConsent)), go.initialHostConsent = JSON.parse(JSON.stringify(go.hostsConsent)), go.showGeneralVendors && (go.initialGenVendorsConsent = JSON.parse(JSON.stringify(go.genVendorsConsent))), uo.IsIabEnabled && (go.initialOneTrustIABConsent = JSON.parse(JSON.stringify(go.oneTrustIABConsent)), go.initialVendors = JSON.parse(JSON.stringify(go.vendors)), go.initialVendors.vendorTemplate = go.vendors.vendorTemplate), uo.UseGoogleVendors && (go.initialAddtlVendorsList = JSON.parse(JSON.stringify(go.addtlVendorsList)), go.initialAddtlVendors = JSON.parse(JSON.stringify(go.addtlVendors))), go.vsIsActiveAndOptOut && (go.initialVendorsServiceConsent = new Map(go.vsConsent))
    }, ji);

    function ji() {
        var t = this;
        this.allowVisible = !1, this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnSltr = "#ot-sdk-btn-floating", this.VENDOR_SEARCH_SELECTOR = "#onetrust-pc-sdk #vendor-search-handler", this.isCookieList = !1, this.pc = null, this.currentSearchInput = "", this.pcLinkSource = null, this.pcSDKSelector = "onetrust-pc-sdk", this.bannerSelector = "onetrust-banner-sdk", this.otGuardLogoResolve = null, this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }), this.showCookieSettingsHandler = function(s) {
            return u(t, void 0, void 0, function() {
                var t, o, n, r, i;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (t = document.getElementById(Mi.pcSDKSelector), t && "none" !== window.getComputedStyle(t).getPropertyValue("display")) ? [2] : (s && s.stopPropagation(), s && s.target && (o = s.target.className, n = "onetrust-pc-btn-handler" === s.target.id, r = "ot-sdk-show-settings" === o, (n || r) && (i = n ? kn : mn, ln.triggerGoogleAnalyticsEvent(hn, i)), go.pcSource = s.target), [4, Mi.toggleInfoDisplay()]);
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
            return go.showVendorService && Fi.hideVendorList(), go.showTrackingTech && (Mi.currentSearchInput = ""), zi.hideVendorsList(), po.pcName === Vt && (fo("#onetrust-pc-sdk " + _o.P_Content).removeClass("ot-hide"), fo("#onetrust-pc-sdk").el[0].removeAttribute("style"), t.setPcListContainerHeight()), fo("#onetrust-pc-sdk #filter-count").text("0"), fo(Mi.VENDOR_SEARCH_SELECTOR).length && (fo(Mi.VENDOR_SEARCH_SELECTOR).el[0].value = ""), go.currentGlobalFilteredList = [], go.filterByCategories = [], go.filterByIABCategories = [], go.vendors.searchParam = "", Mi.closeFilter(), go.pcLayer = O.PrefCenterHome, t.pcLinkSource ? (t.pcLinkSource.focus(), t.pcLinkSource = null) : zn.setPCFocus(zn.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleGroupORVendorHandler = function(e) {
            var t = e.currentTarget,
                o = t.dataset.otVsId;
            o ? Mi.toggleVendorServiceHandler.bind(this)(e) : (o = t.dataset.optanongroupid) && Mi.toggleV2Category.bind(this)()
        }, this.toggleVendorFromListHandler = function(e) {
            var t = e.currentTarget,
                o = t.checked,
                n = t.dataset.otVsId,
                r = t.dataset.optanongroupid,
                i = document.getElementById("ot-vendor-id-" + n);
            rr.toggleVendorService(r, n, o, i)
        }, this.toggleVendorServiceHandler = function(e) {
            var t = e.currentTarget,
                o = t.checked,
                n = t.dataset.otVsId,
                r = t.dataset.optanongroupid;
            rr.toggleVendorService(r, n, o, t);
            var i = Go.getVSById(n);
            Mi.setAriaLabelforButtonInFilter(i.ServiceName)
        }, this.toggleV2Category = function(e, t, o, n) {
            if (!t) {
                var r = this.getAttribute("data-optanongroupid"),
                    i = "function" == typeof this.getAttribute,
                    s = io.findIndex(go.dataGroupState, function(e) {
                        return i && e.CustomGroupId === r
                    });
                t = go.dataGroupState[s]
            }
            var a;
            if (void 0 === o && (o = fo(this).is(":checked")), uo.ChoicesBanner && io.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n) document.querySelector("#ot-group-id-" + n) && (io.setCheckedAttribute("#ot-group-id-" + n, null, o), a = document.querySelector("#ot-group-id-" + n));
            else {
                a = this, io.setCheckedAttribute(null, this, o);
                var l = a.parentElement.querySelector(".ot-switch-nob");
                to.fp.CookieV2VendorServiceScript ? uo.PCCategoryStyle === ce.Toggle && l && l.setAttribute("aria-checked", o) : uo.PCTemplateUpgrade && l && l.setAttribute("aria-checked", o)
            }
            uo.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? uo.PCActiveText : uo.PCInactiveText);
            var c = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Mi.setAriaLabelforButtonInFilter(t.GroupName), Mi.updateGroupToggles(t, o, c)
        }, this.toggleBannerCategory = function() {
            var t = this,
                e = io.findIndex(go.dataGroupState, function(e) {
                    return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                }),
                o = go.dataGroupState[e],
                n = fo(t).is(":checked");
            Mi.toggleV2Category(null, o, n, o.CustomGroupId)
        }, this.shiftBannerFocus = function(e) {
            var t = document.getElementById(Mi.pcSDKSelector),
                o = "none" !== window.getComputedStyle(t).display;
            "Tab" !== e.code || o || zn.handleBannerFocus(e, e.shiftKey)
        }, this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, i = Go.getGroupById(t);
            void 0 === o && (o = fo(this).is(":checked")), n ? (io.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : (r = this, io.setCheckedAttribute(null, this, o)), uo.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? uo.PCActiveText : uo.PCInactiveText);
            var s = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Mi.setAriaLabelforButtonInFilter(i.GroupName), Mi.updateSubGroupToggles(i, o, s), rr.setVendorStateByGroup(i, o)
        }
    }
    var zi, Ki = (Wi.prototype.updateDataSubjectTimestamp = function() {
        var e = Oo.alertBoxCloseDate(),
            t = e && Ao.getUTCFormattedDate(e);
        fo(".ot-userid-timestamp").html(uo.PCenterUserIdTimestampTitleText + ": " + t)
    }, Wi.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, Wi.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1), to.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, Wi.prototype.bannerActionsHandler = function(t, n, e) {
        var r = this;
        void 0 === e && (e = !1), nn.setLandingPathParam(ot), go.groupsConsent = [], go.hostsConsent = [], go.genVendorsConsent = {};
        var i = {};
        uo.Groups.forEach(function(e) {
            if (e.IsAboutGroup) return !1;
            b(e.SubGroups, [e]).forEach(function(e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e), e.Hosts.length && Ao.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    if (i[e.HostId]) en.updateHostStatus(e, o);
                    else {
                        i[e.HostId] = !0;
                        var t = en.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                        go.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                    }
                }), go.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    Qo.updateGenVendorStatus(e, o)
                })
            })
        }), uo.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)), vr.removeAddedOTCssStyles(), Vr.hideConsentNoticeV2(), jo.writeGrpParam(rt.OPTANON_CONSENT), jo.writeHstParam(rt.OPTANON_CONSENT), go.genVenOptOutEnabled && jo.writeGenVenCookieParam(rt.OPTANON_CONSENT), go.vsIsActiveAndOptOut && jo.writeVSConsentCookieParam(rt.OPTANON_CONSENT), Qn.substitutePlainTextScriptTags(), hr.updateGtmMacros(), this.executeOptanonWrapper()
    }, Wi.prototype.getGroupStatus = function(e, t, o) {
        return !!e || !!t && Go.isAlwaysActiveGroup(o)
    }, Wi.prototype.setGroupConsent = function(e, t) {
        -1 < Qt.indexOf(t.Type) && go.groupsConsent.push(t.CustomGroupId + ":" + (e && t.HasConsentOptOut ? "1" : "0"))
    }, Wi.prototype.nextPageCloseBanner = function() {
        nn.isLandingPage() || Oo.isAlertBoxClosedAndValid() || this.closeBanner(uo.NextPageAcceptAllCookies)
    }, Wi.prototype.rmScrollAndClickBodyEvents = function() {
        uo.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), uo.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, Wi.prototype.onClickCloseBanner = function(e) {
        Oo.isAlertBoxClosedAndValid() || (ln.triggerGoogleAnalyticsEvent(hn, gn), this.closeBanner(uo.OnClickAcceptAllCookies), e.stopPropagation()), zi.rmScrollAndClickBodyEvents()
    }, Wi.prototype.scrollCloseBanner = function() {
        var e = fo(document).height() - fo(window).height();
        0 === e && (e = fo(window).height());
        var t = 100 * fo(window).scrollTop() / e;
        t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)), 25 < t && !Oo.isAlertBoxClosedAndValid() && (!go.isPCVisible || uo.NoBanner) ? (ln.triggerGoogleAnalyticsEvent(hn, gn), zi.closeBanner(uo.ScrollAcceptAllCookies), zi.rmScrollAndClickBodyEvents()) : Oo.isAlertBoxClosedAndValid() && zi.rmScrollAndClickBodyEvents()
    }, Wi.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = Go.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        go.showVendorService && rr.consentAll(!0), this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), uo.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, Wi.prototype.rejectAll = function(e, t) {
        void 0 === t && (t = !1);
        var o, n, r = t ? K[5] : K[2],
            i = this.groupsClass.getAllGroupElements();
        n = to.fp.CookieV2RejectAll ? (o = this.initializeObjectToLIRejectAll(t), this.initializeAllowLIRejectAll(t)) : !(o = !0);
        for (var s = 0; s < i.length; s++) {
            var a = Go.getGroupById(i[s].getAttribute("data-optanongroupid"));
            "always active" !== Go.getGrpStatus(a).toLowerCase() && (Jn.toggleGrpElements(i[s], a, !1, n), this.groupsClass.toogleSubGroupElement(i[s], !1, !1, !0), (!uo.IsIabEnabled || uo.IsIabEnabled && o) && this.groupsClass.toogleSubGroupElement(i[s], !1, !0, !0))
        }
        go.showVendorService && rr.consentAll(!1), this.bannerActionsHandler(!1, !0, n), r !== go.consentInteractionType && this.consentTransactions(e, !1, t), uo.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1, n), n || this.updateVendorLegBtns(!1))
    }, Wi.prototype.initializeObjectToLIRejectAll = function(e) {
        return !e && uo.BannerShowRejectAllButton && uo.BRejectConsentType === Ae.OBJECT_TO_LI || e && uo.PCenterShowRejectAllButton && uo.BRejectConsentType === Ae.OBJECT_TO_LI
    }, Wi.prototype.initializeAllowLIRejectAll = function(e) {
        return uo.IsIabEnabled && (!e && uo.BannerShowRejectAllButton && uo.BRejectConsentType === Ae.LI_ACTIVE_IF_LEGAL_BASIS || e && uo.PCenterShowRejectAllButton && uo.BRejectConsentType === Ae.LI_ACTIVE_IF_LEGAL_BASIS)
    }, Wi.prototype.executeCustomScript = function() {
        uo.CustomJs && new Function(uo.CustomJs)()
    }, Wi.prototype.updateConsentData = function(e) {
        nn.setLandingPathParam(ot), uo.IsIabEnabled && !e && this.iab.saveVendorStatus(), jo.writeGrpParam(rt.OPTANON_CONSENT), jo.writeHstParam(rt.OPTANON_CONSENT), go.showGeneralVendors && uo.GenVenOptOut && jo.writeGenVenCookieParam(rt.OPTANON_CONSENT), go.vsIsActiveAndOptOut && jo.writeVSConsentCookieParam(rt.OPTANON_CONSENT), Qn.substitutePlainTextScriptTags(), hr.updateGtmMacros()
    }, Wi.prototype.close = function(e, t) {
        if (void 0 === t && (t = P.Banner), Vr.hideConsentNoticeV2(), this.updateConsentData(e), uo.IsConsentLoggingEnabled) {
            var o = t === P.PC ? Ar : t === P.Banner ? Sr : po.apiSource,
                n = t === P.PC ? mr : t === P.Banner ? kr : br;
            go.bannerCloseSource === m.ContinueWithoutAcceptingButton && (o = Lr), go.bannerCloseSource === m.BannerSaveSettings && (o = Ir), Ho.createConsentTxn(!1, n + " - " + o, t === P.PC)
        } else Oo.dispatchConsentEvent();
        this.executeOptanonWrapper()
    }, Wi.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = go.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e]; - 1 === go.srcExecGrps.indexOf(o) && go.srcExecGrps.push(o)
                }
                go.srcExecGrpsTemp = [];
                for (var n = 0, r = go.htmlExecGrpsTemp; n < r.length; n++) o = r[n], -1 === go.htmlExecGrps.indexOf(o) && go.htmlExecGrps.push(o);
                go.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, Wi.prototype.updateVendorLegBtns = function(e) {
        if (po.legIntSettings.PAllowLI && po.legIntSettings.PShowLegIntBtn)
            for (var t = fo(_o.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, Wi.prototype.showFltgCkStgButton = function() {
        var e = fo("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), uo.cookiePersistentLogo.includes("ot_guard_logo.svg") && fo(".ot-floating-button__front svg").attr("aria-hidden", ""), fo(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }, Wi.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1), Ho && !e && uo.IsConsentLoggingEnabled ? Ho.createConsentTxn(!1, (o ? mr : kr) + " - " + (t ? Pr : Tr), o) : Oo.dispatchConsentEvent()
    }, Wi.prototype.hideVendorsList = function() {
        Vr.checkIfPcSdkContainerExist() || (uo.PCTemplateUpgrade ? fo("#onetrust-pc-sdk " + _o.P_Content).removeClass("ot-hide") : fo("#onetrust-pc-sdk .ot-main-content").show(), fo("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), fo("#onetrust-pc-sdk " + _o.P_Vendor_List).addClass("ot-hide"))
    }, Wi.prototype.resetConsent = function() {
        var e = this;
        go.groupsConsent = JSON.parse(JSON.stringify(go.initialGroupsConsent)), go.hostsConsent = JSON.parse(JSON.stringify(go.initialHostConsent)), go.showGeneralVendors && (go.genVendorsConsent = JSON.parse(JSON.stringify(go.initialGenVendorsConsent))), go.vsIsActiveAndOptOut && (go.vsConsent = new Map(go.initialVendorsServiceConsent)), uo.IsIabEnabled && (go.oneTrustIABConsent = JSON.parse(JSON.stringify(go.initialOneTrustIABConsent)), go.vendors = JSON.parse(JSON.stringify(go.initialVendors)), go.vendors.vendorTemplate = go.initialVendors.vendorTemplate), uo.UseGoogleVendors && (go.addtlVendors = JSON.parse(JSON.stringify(go.initialAddtlVendors)), go.addtlVendorsList = JSON.parse(JSON.stringify(go.initialAddtlVendorsList))), this.updateConsentData(!1), setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }, Wi.prototype.resetConsentUI = function() {
        Jn.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid"),
                o = Go.getGroupById(t),
                n = zi.isGroupActive(o, t);
            po.pcName === Ot && uo.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
            var r = e.querySelector(".ot-label-status");
            if (uo.PCShowConsentLabels && r && (r.innerHTML = n ? uo.PCActiveText : uo.PCInactiveText), o.Type === Ut || o.Type === Yt) {
                var i = Ao.isBundleOrStackActive(o, go.initialGroupsConsent),
                    s = e.querySelector('input[class*="category-switch-handler"]');
                io.setCheckedAttribute(null, s, i);
                for (var a = e.querySelectorAll("li" + _o.P_Subgrp_li), l = 0; l < a.length; l++) {
                    var c = Go.getGroupById(a[l].getAttribute("data-optanongroupid")),
                        d = c.OptanonGroupId,
                        p = zi.isGroupActive(c, d),
                        u = a[l].querySelector('input[class*="cookie-subgroup-handler"]'),
                        h = a[l].querySelector(".ot-label-status");
                    uo.PCShowConsentLabels && h && (r.innerHTML = p ? uo.PCActiveText : uo.PCInactiveText), io.setCheckedAttribute(null, u, p), zi.resetLegIntButton(c, a[l])
                }
            } else s = e.querySelector('input[class*="category-switch-handler"]'), io.setCheckedAttribute(null, s, n), zi.resetLegIntButton(o, e)
        }), uo.IsIabEnabled && Nr.toggleVendorConsent();
        var e = fo("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (go.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = (l = o[t]).getAttribute("gn-vid"),
                    r = Boolean(go.genVendorsConsent[n]);
                io.setCheckedAttribute("", l, r), Qo.updateGenVendorStatus(n, r)
            }
            er.genVenSelectAllTglEvent()
        }
        var i = fo("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (uo.UseGoogleVendors && i && i.length)
            for (var s = 0, a = i; s < a.length; s++) {
                var l;
                n = (l = a[s]).getAttribute("addtl-vid"), go.addtlVendorsList[n] && (r = Boolean(go.addtlVendors.vendorSelected[n]), io.setCheckedAttribute("", l, r))
            }
        go.vsIsActiveAndOptOut && rr.resetVendorUIState(go.vsConsent)
    }, Wi.prototype.isGroupActive = function(e, t) {
        var o;
        if (e.IabGrpId) {
            var n = void 0;
            n = e.Type === Wt ? go.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? go.initialVendors.selectedLegInt : go.initialVendors.selectedPurpose, o = -1 !== Co.inArray(e.IabGrpId + ":true", n)
        } else o = -1 !== Co.inArray(t + ":1", go.initialGroupsConsent);
        return o
    }, Wi.prototype.resetLegIntButton = function(e, t) {
        if (po.legIntSettings.PAllowLI && e.Type === Kt && e.HasLegIntOptOut && po.legIntSettings.PShowLegIntBtn) {
            var o = !0; - 1 < go.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1), Jn.updateLegIntBtnElement(t, o)
        }
    }, Wi.prototype.handleTogglesOnSingularConsentUpdate = function(e, t) {
        if (this.closeOptanonAlertBox(), e === Dt)
            for (var o = function(e, t) {
                    for (var o = Go.getGroupById(e), n = a.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
                        var i = Go.getGroupById(n[r].getAttribute("data-optanongroupid"));
                        if (i.OptanonGroupId === o.OptanonGroupId && !i.Parent) {
                            Mi.toggleV2Category(null, i, t, i.CustomGroupId);
                            break
                        }
                        var s = i.SubGroups.find(function(e) {
                            return e.OptanonGroupId === o.OptanonGroupId
                        });
                        s && Mi.toggleSubCategory(null, s.CustomGroupId, t, s.CustomGroupId)
                    }
                }, a = this, n = 0, r = t; n < r.length; n++) {
                var i = r[n];
                o(d = i.id, p = i.isEnabled)
            } else if (e === Rt)
                for (var s = 0, l = t; s < l.length; s++) {
                    var c = l[s],
                        d = c.id,
                        p = c.isEnabled,
                        u = Go.getGrpByVendorId(d);
                    u && rr.toggleVendorService(u.CustomGroupId, d, p)
                }
        this.close(!1, P.API)
    }, Wi);

    function Wi() {
        var o = this;
        this.iab = er, this.groupsClass = Jn, this.closeOptanonAlertBox = function() {
            if (Ao.hideBanner(), uo.NtfyConfig.ShowNtfy && Or.hideSyncNtfy(), po.isOptInMode || !po.isOptInMode && !Oo.isAlertBoxClosedAndValid()) ln.setAlertBoxClosed(!0), uo.PCTemplateUpgrade && uo.PCenterUserIdTitleText && uo.IsConsentLoggingEnabled && o.updateDataSubjectTimestamp();
            else if (Oo.isAlertBoxClosedAndValid()) {
                var e = fo(".onetrust-pc-dark-filter").el[0];
                e && "none" !== getComputedStyle(e).getPropertyValue("display") && fo(".onetrust-pc-dark-filter").fadeOut(400)
            }
            pn.csBtnGroup && o.showFltgCkStgButton()
        }, this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || zi.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function(e) {
            if (void 0 === e && (e = !1), zi.closeOptanonAlertBox(), to.moduleInitializer.MobileSDK) window.OneTrust.Close();
            else {
                var t = go.bannerCloseSource === m.ConfirmChoiceButton ? P.PC : P.Banner;
                zi.close(e, t)
            }
            return !1
        }, this.allowAllEventHandler = function(e) {
            void 0 === e && (e = !1), fo(document).off("keydown", Mi.shiftBannerFocus);
            var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
            ln.triggerGoogleAnalyticsEvent(hn, t), o.allowAllEvent(!1, e), o.hideVendorsList()
        }, this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), zi.allowAll(e, t)
        }, this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1), fo(document).off("keydown", Mi.shiftBannerFocus);
            var t = e ? "Preferences Reject All" : "Banner Reject All";
            ln.triggerGoogleAnalyticsEvent(hn, t), to.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e), o.hideVendorsList())
        }, this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), Oo.isIABCrossConsentEnabled() ? po.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : po.thirdPartyiFramePromise.then(function() {
                o.rejectAll(e, t)
            }) : o.rejectAll(e, t)
        }
    }
    var Ji, Yi = (Xi.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(), to.moduleInitializer.CookieSPAEnabled ? fo(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : fo(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, Xi.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += pn.csBtnGroup.css;
        var t = document.createElement("div");
        fo(t).html(pn.csBtnGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && fo(o).removeClass("ot-hide"), fo("#onetrust-consent-sdk").append(o), uo.cookiePersistentLogo && (uo.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : fo(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }, Xi.prototype.applyPersistentSvgOnDOM = function() {
        return u(this, void 0, void 0, function() {
            var t;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, So.getPersistentCookieSvg()];
                    case 1:
                        return t = e.sent(), fo(this.FLOATING_COOKIE_FRONT_BTN).html(t), Mi.otGuardLogoResolve(!0), [2]
                }
            })
        })
    }, Xi.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !nn.isLandingPage() && "true" === ro.readCookieParam(rt.OPTANON_CONSENT, Qe) && this.checkForRefreshCloseImplied()
    }, Xi.prototype.isImpliedConsent = function() {
        return uo.ConsentModel && "implied consent" === uo.ConsentModel.Name.toLowerCase()
    }, Xi.prototype.checkForRefreshCloseImplied = function() {
        zi.closeOptanonAlertBox(), zi.close(!0)
    }, Xi.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && oo(e, "display: none;")
    }, Xi.prototype.shouldShowBanner = function(e) {
        return uo.ShowAlertNotice && !e && !uo.NoBanner && !go.hideBanner
    }, Xi.prototype.shouldShowPc = function(e) {
        return uo.ShowAlertNotice && !e && uo.NoBanner
    }, Xi.prototype.windowLoadBanner = function() {
        return u(this, void 0, void 0, function() {
            var t, o, n, r, i, s;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.core.substitutePlainTextScriptTags(), t = to.moduleInitializer, fo("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"), fo(n).attr("id", "onetrust-consent-sdk"), fo(document.body).append(n)), fo(".onetrust-pc-dark-filter").length || (o = document.createElement("div"), fo(o).attr("class", "onetrust-pc-dark-filter"), fo(o).attr("class", "ot-hide"), fo(o).attr("class", "ot-fade-in"), n.firstChild ? n.insertBefore(o, n.firstChild) : fo(n).append(o)), uo.IsIabEnabled && this.iab.updateIabVariableReference(), r = Oo.isAlertBoxClosedAndValid(), i = this.shouldShowBanner(r), s = this.shouldShowPc(r), go.ntfyRequired ? (this.hideCustomHtml(), Or.init(), Or.changeState()) : i ? Mi.initializeAlartHtmlAndHandler() : (uo.IsGPPEnabled && wi.setCmpDisplayStatus("disabled"), this.hideCustomHtml()), t.IsSuppressPC || (ar.insertPcHtml(), Mi.initialiseConsentNoticeHandlers(), uo.IsIabEnabled && this.iab.InitializeVendorList()), this.initializeHbbTvScript(), this.insertCSBtn(!i), s ? [4, Mi.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return Mi.insertCookieSettingText(), this.initializeFloatingButtonOnBannerLoad(s), Ji.insertTrackigTechOrCookiePolicy(), zi.executeOptanonWrapper(), this.initializeCookieParamsOnBannerLoad(i), [2]
                }
            })
        })
    }, Xi.prototype.initializeFloatingButtonOnBannerLoad = function(e) {
        var t = fo(this.FLOATING_COOKIE_BTN),
            o = fo(this.FLOATING_COOKIE_FRONT_BTN),
            n = fo(this.FLOATING_COOKIE_BACK_BTN);
        t.length && (t.attr("title", uo.CookieSettingButtonText), o.el[0].setAttribute("aria-label", uo.AriaOpenPreferences), n.el[0].setAttribute("aria-label", uo.AriaClosePreferences), e ? o.el[0].setAttribute("aria-hidden", !0) : n.el[0].setAttribute("aria-hidden", !0))
    }, Xi.prototype.initializeCookieParamsOnBannerLoad = function(e) {
        ro.readCookieParam(rt.OPTANON_CONSENT, zo) || jo.writeGrpParam(rt.OPTANON_CONSENT), ro.readCookieParam(rt.OPTANON_CONSENT, Ko) || jo.writeHstParam(rt.OPTANON_CONSENT), go.showGeneralVendors && !ro.readCookieParam(rt.OPTANON_CONSENT, Wo) && jo.writeGenVenCookieParam(rt.OPTANON_CONSENT), go.vsIsActiveAndOptOut && !ro.readCookieParam(rt.OPTANON_CONSENT, Jo) && jo.writeVSConsentCookieParam(rt.OPTANON_CONSENT), e && zn.setBannerFocus()
    }, Xi.prototype.initializeHbbTvScript = function() {
        if (to.moduleInitializer.RemoteActionsEnabled) {
            var e = document.getElementById("hbbtv");
            e && e.remove();
            var t = document.createElement("script");
            t.id = "hbbtv", t.src = go.storageBaseURL + "/scripttemplates/" + to.moduleInitializer.Version + "/hbbtv.js", t.type = "text/javascript", fo(document.body).append(t)
        }
    }, Xi.prototype.insertCSBtn = function(e) {
        pn.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), Mi.initFlgtCkStgBtnEventHandlers())
    }, Xi.prototype.insertTrackingTechnologies = function() {
        if (fo("#ot-sdk-cookie-policy, #optanon-cookie-policy").length)
            if (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml) window.OnetrustCookiePolicy.InsertCookiePolicyHtml(Ao, uo, fo);
            else {
                var e = document.createElement("script");
                e.id = "cookie-policy-script", e.onload = function() {
                    return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(Ao, uo, fo)
                }, e.type = "text/javascript", e.src = go.storageBaseURL + "/scripttemplates/" + to.moduleInitializer.Version + "/trackingTechnologies.js", document.head.appendChild(e)
            }
    }, Xi.prototype.insertTrackigTechOrCookiePolicy = function() {
        to.fp.CookieV2TrackingTechnologies ? Ji.insertTrackingTechnologies() : oi.insertCookiePolicyHtml()
    }, Xi);

    function Xi() {
        this.iab = er, this.core = Qn, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open", this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }
    var Qi, $i, Zi = (e(es, Qi = si), es.prototype.Close = function(e) {
        zi.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
    }, es.prototype.RejectAll = function(e) {
        zi.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
    }, es.prototype.AllowAll = function(e) {
        zi.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
    }, es.prototype.ToggleInfoDisplay = function() {
        Mi.toggleInfoDisplay()
    }, es);

    function es() {
        var e = null !== Qi && Qi.apply(this, arguments) || this;
        return e.mobileOnlineURL = po.mobileOnlineURL, e
    }
    var ts, os = (ns.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1), e ? (go.dsParams.id = e.trim(), ii.setDataSubjectIdV2(e)) : e = go.dsParams.id, o && (go.dsParams.isAnonymous = o), t = t || go.dsParams.token, e && t && So.getConsentProfile(e, t).then(function(e) {
            return ts.consentProfileCallback(e)
        })
    }, ns.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
            case k[k.ACTIVE]:
            case k[k.ALWAYS_ACTIVE]:
                t = Y.Active;
                break;
            case k[k.EXPIRED]:
            case k[k.OPT_OUT]:
            case k[k.PENDING]:
            case k[k.WITHDRAWN]:
                t = Y.InActive
        }
        return t
    }, ns.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }, ns.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = ro.getCookie(rt.ALERT_BOX_CLOSED),
            n = o,
            r = !1,
            i = !0,
            s = !1,
            a = io.strToArr(ro.readCookieParam(rt.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var l = 0, c = e.preferences; l < c.length; l++) {
                var d = c[l],
                    p = d.status === k[k.NO_CONSENT],
                    u = po.domainGrps[d.id];
                if (u)
                    if (-1 < go.grpsSynced.indexOf(u) && (go.syncedValidGrp = !0), p && a.length) {
                        for (var h = -1, g = 0; g < a.length; g++)
                            if (a[g].split(":")[0] === u) {
                                h = g;
                                break
                            } - 1 < h && (a.splice(h, 1), go.grpsSynced.push(u))
                    } else if (!p && (!o || new Date(d.lastInteractionDate) > new Date(n))) {
                    var C = this.getConsentValue(d.status);
                    if (s = !0, o = d.lastInteractionDate, !t && this.isCookieGroup(u)) {
                        var y = u + ":" + C,
                            f = -1;
                        for (g = 0; g < a.length; g++) {
                            var v = a[g].split(":");
                            if (v[0] === u) {
                                v[1] !== C && (a[g] = y, r = !0), f = g;
                                break
                            }
                        } - 1 === f && (a.push(y), r = !0)
                    }
                }
            } else i = !1;
        return {
            alertBoxCookieVal: o,
            groupsConsent: a,
            profileFound: i,
            syncRequired: r,
            syncOnlyDate: s = s && !r
        }
    }, ns.prototype.hideBannerAndPc = function() {
        var e = Ao.isBannerVisible();
        e && Ao.hideBanner(), (e || go.isPCVisible) && (vr.removeAddedOTCssStyles(), Vr.hideConsentNoticeV2())
    }, ns.prototype.setOptanonConsentCookie = function(e, t) {
        if (e.syncRequired) {
            ro.writeCookieParam(rt.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
            var o = ro.getCookie(rt.OPTANON_CONSENT);
            ro.setCookie(rt.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
        }
    }, ns.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[go.syncGrpId] && o.syncGroups[go.syncGrpId].tcStringV2 ? ro.getCookie(rt.EU_PUB_CONSENT) !== o.syncGroups[go.syncGrpId].tcStringV2 && (e.syncRequired = !0, ro.setCookie(rt.EU_PUB_CONSENT, o.syncGroups[go.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, ns.prototype.setAddtlVendorsCookie = function(e, t) {
        uo.UseGoogleVendors && (ro.getCookie(rt.ADDITIONAL_CONSENT_STRING) || ro.setCookie(rt.ADDITIONAL_CONSENT_STRING, go.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
    }, ns.prototype.createTrans = function() {
        var e = ro.readCookieParam(rt.OPTANON_CONSENT, "iType");
        Ho.createConsentTxn(!1, K[e], !1, !0)
    }, ns.prototype.updateGrpsDom = function() {
        for (var e = function(e) {
                var t = e.getAttribute("data-optanongroupid"),
                    o = Go.getGroupById(t),
                    n = !0,
                    r = io.findIndex(go.groupsConsent, function(e) {
                        return e.split(":")[0] === t
                    }); - 1 < r && go.groupsConsent[r].split(":")[1] === Y.InActive && (n = !1), Jn.toggleGrpElements(e, o, n), Jn.toogleSubGroupElement(e, n, !1, !0), Jn.toogleSubGroupElement(e, n, !0, !0)
            }, t = 0, o = Jn.getAllGroupElements(); t < o.length; t++) e(o[t])
    }, ns.prototype.updateVendorsDom = function() {
        uo.IsIabEnabled && (er.updateIabVariableReference(), Nr.toggleVendorConsent(), po.legIntSettings.PAllowLI && (po.legIntSettings.PShowLegIntBtn ? Nr.updateVendorLegBtns() : Nr.toggleVendorLi()))
    }, ns.prototype.consentProfileCallback = function(r) {
        return u(this, void 0, void 0, function() {
            var t, o, n;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = this.syncPreferences(r), o = uo.ReconsentFrequencyDays, n = Oo.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), uo.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (Oo.syncAlertBoxCookie(t.alertBoxCookieVal), Oo.syncCookieExpiry()), t.syncRequired && t.profileFound ? (go.syncRequired = t.syncRequired, Oo.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), pn.initGrpsAndHosts(), !n && uo.NtfyConfig.ShowNtfy && Oo.isAlertBoxClosedAndValid() ? [4, Or.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), Or.init(), Or.changeState(), e.label = 2;
                    case 2:
                        return uo.IsIabEnabled && (Oo.setIABCookieData(), qo.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), nn.setLandingPathParam(ot), Qn.substitutePlainTextScriptTags(), hr.updateGtmMacros(!0), zi.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, ns);

    function ns() {}
    var rs, is = (ss.prototype.removeCookies = function() {
        ro.removePreview(), ro.removeOptanon(), ro.removeAlertBox(), ro.removeIab2(), ro.removeAddtlStr(), ro.removeVariant(), go.isPreview && rs.setPreviewCookie(), go.urlParams.get("otreset") && go.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + go.urlParams.toString() + window.location.hash;
        rs.replaceHistory(e)
    }, ss.prototype.setPreviewCookie = function() {
        var e = new Date;
        e.setTime(e.getTime() + 864e5);
        var t = go.geoFromUrl ? "&geo=" + go.geoFromUrl : "",
            o = "expiry=" + e.toISOString() + t;
        ro.setCookie(rt.OT_PREVIEW, o, 1, !1)
    }, ss.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return rs.onMessage(e)
        })
    }, ss.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e), location.reload()
    }, ss.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === rs.CLEAR_COOKIES && (rs.removeCookies(), e.source && e.source.postMessage && e.source.postMessage(rs.CLEARED_COOKIES, e.origin))
    }, ss);

    function ss() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }

    function as(e) {
        if (e) {
            var t = window.atob(e);
            return Function('"use strict"; return ' + t)()
        }
    }
    Xe.initPolyfill(), ro = new so, Ao = new Io, po = new lo, vo = new mo, rs = new is,
        function() {
            var e, t = window.otStubData;
            if (t) {
                to.moduleInitializer = t.domainData, to.fp = to.moduleInitializer.TenantFeatures, go.isAMP = t.isAmp, go.dataDomainId = t.domainId, go.isPreview = t.isPreview, go.urlParams = t.urlParams, go.isV2Stub = t.isV2Stub || !1, po.gtmUpdatedinStub = t.gtmUpdated, t.isReset ? rs.removeCookies() : t.isPreview && rs.setPreviewCookie(), po.setBannerScriptElement(t.stubElement), po.setRegionRule(t.regionRule), to.fp.CookieV2TargetedTemplates && (po.conditionalLogicEnabled = !(null === (e = po.getRegionRule().Conditions) || void 0 === e || !e.length), po.conditionalLogicEnabled && (function() {
                    for (var e = po.getRegionRule(), t = 0; t < e.Conditions.length; t++) try {
                        if (as(e.Conditions[t].Expression)) return po.Condition = e.Conditions[t]
                    } catch (e) {
                        console.warn(e);
                        continue
                    }
                    po.allConditionsFailed = !0
                }(), po.canUseConditionalLogic = !po.allConditionsFailed)), go.userLocation = t.userLocation, go.crossOrigin = t.crossOrigin, po.bannerDataParentURL = t.bannerBaseDataURL, po.mobileOnlineURL = b(po.mobileOnlineURL, t.mobileOnlineURL);
                var o = po.getRegionRule();
                po.multiVariantTestingEnabled = to.moduleInitializer.MultiVariantTestingEnabled && 0 < o.Variants.length && Ao.isDateCurrent(o.TestEndTime), po.otDataLayer = t.otDataLayer, go.grpsSynced = t.grpsSynced || [], go.isIabSynced = t.isIabSynced, go.isGacSynced = t.isGacSynced, go.syncRequired = t.isIabSynced || t.isGacSynced || t.grpsSynced && 0 < t.grpsSynced.length, go.consentPreferences = t.preferences, go.syncGrpId = t.syncGrpId, go.consentApi = t.consentApi, go.tenantId = t.tenantId, go.geoFromUrl = t.geoFromUrl, go.nonce = t.nonce, go.setAttributePolyfillIsActive = t.setAttributePolyfillIsActive, go.storageBaseURL = t.storageBaseURL, po.previewMode = t.previewMode, vo.populateLangSwitcherPlhdr(), window.otStubData = {
                    userLocation: go.userLocation
                }, window.OneTrustStub = null
            }
        }(),
        function() {
            u(this, void 0, void 0, function() {
                var t, o, n, r, i, s;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return Go = new No, Jn = new Yn, Mn = new Un, er = new tr, Qn = new $n, zi = new Ki, Mi = new Ui, ar = new pr, Ni = new Di, Ji = new Yi, to.fp.CookieV2TrackingTechnologies || (oi = new ni), Mr = new Qr, Qo = new $o, pn = new Rn, hr = new gr, Zr = new ei, ln = new cn, wo = new xo, ts = new os, Nr = new Dr, So = new Po, zn = new Kn, Vr = new Br, rr = new ir, Fi = new Ri, to.moduleInitializer.MobileSDK ? $i = new Zi : ii = new si, qo = new Mo, po.setGCMcallback(), t = po.getRegionRule(), o = po.canUseConditionalLogic ? po.Condition.UseGoogleVendors : t.UseGoogleVendors, "IAB2" !== po.getRegionRuleType() ? [3, 2] : [4, Promise.all([So.getLangJson(), So.fetchGvlObj(), o ? So.fetchGoogleVendors() : Promise.resolve(null), So.loadCMP()])];
                        case 1:
                            return s = e.sent(), n = s[0], r = s[1], i = s[2], go.gvlObj = r, go.addtlVendorsList = i ? i.vendors : null, [3, 4];
                        case 2:
                            return [4, So.getLangJson()];
                        case 3:
                            n = e.sent(), e.label = 4;
                        case 4:
                            return n.DomainData.IsGPPEnabled ? [4, So.loadGPP()] : [3, 6];
                        case 5:
                            e.sent(), wi = new xi, e.label = 6;
                        case 6:
                            return function(r) {
                                u(this, void 0, void 0, function() {
                                    var o, n;
                                    return g(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                        var t, o = to.moduleInitializer.MobileSDK;
                                                        t = o ? $i : ii;
                                                        var n = {
                                                            AllowAll: t.AllowAll,
                                                            BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                            Close: t.Close,
                                                            getCSS: t.getCSS,
                                                            GetDomainData: t.GetDomainData,
                                                            getGeolocationData: t.getGeolocationData,
                                                            getHTML: t.getHTML,
                                                            Init: t.Init,
                                                            InitializeBanner: t.InitializeBanner,
                                                            initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                            InsertHtml: t.InsertHtml,
                                                            InsertScript: t.InsertScript,
                                                            IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                            IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                            LoadBanner: t.LoadBanner,
                                                            OnConsentChanged: ln.OnConsentChanged,
                                                            ReconsentGroups: t.ReconsentGroups,
                                                            RejectAll: t.RejectAll,
                                                            SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                            setGeoLocation: t.setGeoLocation,
                                                            ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                            TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                            useGeoLocationService: t.useGeoLocationService,
                                                            FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                            changeLanguage: t.changeLang,
                                                            testLog: t.getTestLogData,
                                                            UpdateConsent: t.updateSingularConsent,
                                                            IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                            UpdateGCM: t.updateGCM
                                                        };
                                                        e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, go.isV2Stub && (n.syncConsentProfile = ts.syncConsentProfile));
                                                        o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = go.otCookieData);
                                                        e.IsIabEnabled && (n.updateConsentFromCookies = ln.updateConsentFromCookie, n.getPingRequest = qo.getPingRequestForTcf, n.getVendorConsentsRequestV2 = qo.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                        return n
                                                    }(r.DomainData)), Oo.initializeBannerVariables(r), jo = new Yo, en = new tn, Ho = new Fo, vr = new _r, nn = new sn, Fr = new Rr, Or = new xr, r.DomainData.IsGPPEnabled && wi.initGppConsent(),
                                                    function() {
                                                        var o = window.OTExternalConsent;
                                                        if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                                            var n = [],
                                                                e = o.groups.split(",");
                                                            e.forEach(function(e) {
                                                                var t = e.split(":");
                                                                n.push({
                                                                    lastInteractionDate: o.consentedDate,
                                                                    status: "1" === t[1] ? k[k.ACTIVE] : k[k.OPT_OUT],
                                                                    id: t[0]
                                                                }), go.grpsSynced.push(t[0])
                                                            }), go.consentPreferences = {
                                                                preferences: n,
                                                                syncGroups: null
                                                            }, go.syncRequired = !0, jo.updateGroupsInCookie(rt.OPTANON_CONSENT, e), ro.setCookie(rt.ALERT_BOX_CLOSED, o.consentedDate, 365), o.tcString && (go.isIabSynced = !0, ro.setCookie(rt.EU_PUB_CONSENT, o.tcString, 365)), o.addtlString && (go.isGacSynced = !0, ro.setCookie(rt.ADDITIONAL_CONSENT_STRING, "" + o.addtlString, 365))
                                                        }
                                                    }(), go.isPreview && (Oo.syncOtPreviewCookie(), rs.bindStopPreviewEvent()), o = ts.syncPreferences(go.consentPreferences, !0), (go.syncRequired || o.syncRequired) && Oo.syncAlertBoxCookie(o.alertBoxCookieVal), Oo.syncCookieExpiry(), t = window.OneTrust.dataSubjectParams || {}, (go.dsParams = t).id && ii.setDataSubjectIdV2(t.id, t.isAnonymous), po.multiVariantTestingEnabled && po.selectedVariant && ro.setCookie(rt.SELECTED_VARIANT, po.selectedVariant.Id, uo.ReconsentFrequencyDays), [4, qo.initializeIABModule()];
                                            case 1:
                                                return e.sent(), window.OneTrust.Init(!0), [4, pn.fetchAssets()];
                                            case 2:
                                                return (e.sent(), Ji.initBanner(), ln.assetResolve(!0), Mr.initialiseCssReferences(), n = Oo.isIABCrossConsentEnabled(), (go.syncedValidGrp || go.isIabSynced || go.isGacSynced) && !n && uo.NtfyConfig.ShowNtfy && Oo.isAlertBoxClosedAndValid()) ? (go.ntfyRequired = !0, [4, Or.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return n || window.OneTrust.LoadBanner(), [2]
                                        }
                                        var t
                                    })
                                })
                            }(n), to.moduleInitializer.WebFormIntegrationEnabled && function() {
                                var e = window.otStubData,
                                    t = document.createElement("script");
                                t.type = "text/javascript", t.src = to.moduleInitializer.WebFormSrcUrl, t.setAttribute("dataId", to.moduleInitializer.TenantGuid), t.setAttribute("worker", to.moduleInitializer.WebFormWorkerUrl), e.charset && t.setAttribute("charset", e.charset);
                                e.crossOrigin && t.setAttribute("crossorigin", e.crossOrigin);
                                document.getElementsByTagName("head")[0].appendChild(t)
                            }(), [2]
                    }
                })
            })
        }()
}();