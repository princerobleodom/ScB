var OneTrustStub = function(e) {
    "use strict";
    var t, n, i, a, o, r, s, l, p, c, u, d, m, h, g, f, v, A, b, C, I, y, S, L, T, w, D, R, P, E, _, B, O, G, U, N, k, M, F, V, x, H, j, q, z, K, W, J, Y, Q, X, Z, $, ee, te, ne, ie, ae, oe, re, se, le, pe, ce, ue, de, me, he, ge, fe, ve, Ae, be, Ce, Ie, ye, Se, Le, Te, we, De, Re, Pe, Ee = new function() {
        this.optanonCookieName = "OptanonConsent", this.optanonHtmlGroupData = [], this.optanonHostData = [], this.genVendorsData = [], this.vendorsServiceData = [], this.IABCookieValue = "", this.oneTrustIABCookieName = "eupubconsent", this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal", this.isStubReady = !0, this.geolocationCookiesParam = "geolocation", this.EUCOUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "HR", "LI", "NO", "IS"], this.stubFileName = "otSDKStub", this.DATAFILEATTRIBUTE = "data-domain-script", this.bannerScriptName = "otBannerSdk.js", this.mobileOnlineURL = [], this.isMigratedURL = !1, this.migratedCCTID = "[[OldCCTID]]", this.migratedDomainId = "[[NewDomainId]]", this.userLocation = {
            country: "",
            state: ""
        }
    };
    (n = t = t || {})[n.Unknown = 0] = "Unknown", n[n.BannerCloseButton = 1] = "BannerCloseButton", n[n.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", n[n.AcceptAll = 3] = "AcceptAll", n[n.RejectAll = 4] = "RejectAll", n[n.BannerSaveSettings = 5] = "BannerSaveSettings", n[n.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (a = i = i || {})[a.Banner = 1] = "Banner", a[a.PC = 2] = "PC", a[a.API = 3] = "API", (r = o = o || {}).AcceptAll = "AcceptAll", r.RejectAll = "RejectAll", r.UpdateConsent = "UpdateConsent", (l = s = s || {})[l.Purpose = 1] = "Purpose", l[l.SpecialFeature = 2] = "SpecialFeature", (c = p = p || {}).Legal = "legal", c.UserFriendly = "user_friendly", (d = u = u || {}).Top = "top", d.Bottom = "bottom", (h = m = m || {})[h.Banner = 0] = "Banner", h[h.PrefCenterHome = 1] = "PrefCenterHome", h[h.VendorList = 2] = "VendorList", h[h.CookieList = 3] = "CookieList", (f = g = g || {})[f.RightArrow = 39] = "RightArrow", f[f.LeftArrow = 37] = "LeftArrow", (A = v = v || {}).AfterTitle = "AfterTitle", A.AfterDescription = "AfterDescription", A.AfterDPD = "AfterDPD", (C = b = b || {}).PlusMinus = "Plusminus", C.Caret = "Caret", C.NoAccordion = "NoAccordion", (y = I = I || {}).Consent = "Consent", y.LI = "LI", y.AddtlConsent = "AddtlConsent", (L = S = S || {}).Iab1Pub = "eupubconsent", L.Iab2Pub = "eupubconsent-v2", L.Iab1Eu = "euconsent", L.Iab2Eu = "euconsent-v2", (w = T = T || {})[w.Disabled = 0] = "Disabled", w[w.Consent = 1] = "Consent", w[w.LegInt = 2] = "LegInt", (R = D = D || {})[R["Banner - Allow All"] = 1] = "Banner - Allow All", R[R["Banner - Reject All"] = 2] = "Banner - Reject All", R[R["Banner - Close"] = 3] = "Banner - Close", R[R["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", R[R["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", R[R["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (E = P = P || {}).Active = "1", E.InActive = "0", (B = _ = _ || {}).Host = "Host", B.GenVendor = "GenVen", (G = O = O || {})[G.Host = 1] = "Host", G[G.GenVen = 2] = "GenVen", G[G.HostAndGenVen = 3] = "HostAndGenVen", (N = U = U || {})[N.minDays = 1] = "minDays", N[N.maxDays = 30] = "maxDays", N[N.maxYear = 31536e3] = "maxYear", N[N.maxSecToDays = 86400] = "maxSecToDays", (M = k = k || {})[M.RTL = 0] = "RTL", M[M.LTR = 1] = "LTR", (V = F = F || {})[V.GoogleVendor = 1] = "GoogleVendor", V[V.GeneralVendor = 2] = "GeneralVendor", (H = x = x || {})[H.Days = 1] = "Days", H[H.Weeks = 7] = "Weeks", H[H.Months = 30] = "Months", H[H.Years = 365] = "Years", (q = j = j || {}).Checkbox = "Checkbox", q.Toggle = "Toggle", (K = z = z || {}).SlideIn = "Slide_In", K.FadeIn = "Fade_In", K.RemoveAnimation = "Remove_Animation", (J = W = W || {}).Link = "Link", J.Icon = "Icon", (Q = Y = Y || {}).consent = "consent", Q.set = "set", (Z = X = X || {}).update = "update", Z.default = "default", Z.ads_data_redaction = "ads_data_redaction", (ee = $ = $ || {}).analytics_storage = "analytics_storage", ee.ad_storage = "ad_storage", ee.functionality_storage = "functionality_storage", ee.personalization_storage = "personalization_storage", ee.security_storage = "security_storage", ee.region = "region", ee.wait_for_update = "wait_for_update", (ne = te = te || {}).granted = "granted", ne.denied = "denied", (ae = ie = ie || {})[ae.HostList = 0] = "HostList", ae[ae.IabVendors = 1] = "IabVendors", ae[ae.VendorServices = 2] = "VendorServices", (re = oe = oe || {}).OBJECT_TO_LI = "ObjectToLI", re.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (le = se = se || {}).cookies = "cookies", le.vendors = "vendors", (ce = pe = pe || {}).GDPR = "GDPR", ce.IAB = "IAB", ce.CCPA = "CCPA", ce.IAB2 = "IAB2", ce.GENERIC = "GENERIC", ce.LGPD = "LGPD", ce.GENERIC_PROMPT = "GENERIC_PROMPT", ce.CPRA = "CPRA", ce.CDPA = "CDPA", ce.USNATIONAL = "USNATIONAL", ce.CUSTOM = "CUSTOM", (de = ue = ue || {}).Name = "OTGPPConsent", de[de.ChunkSize = 4e3] = "ChunkSize", de.ChunkCountParam = "GPPCookiesCount", (he = me = me || {}).MspaCoveredTransaction = "IsMSPAEnabled", he.MspaOptOutOptionMode = "Opt-Out", he.MspaServiceProviderMode = "Service Provider", (fe = ge = ge || {}).MspaCoveredTransaction = "MspaCoveredTransaction", fe.MspaOptOutOptionMode = "MspaOptOutOptionMode", fe.MspaServiceProviderMode = "MspaServiceProviderMode", (Ae = ve = ve || {}).SensitiveDataProcessing = "SensitiveDataProcessing", Ae.KnownChildSensitiveDataConsents = "KnownChildSensitiveDataConsents", (Ce = be = be || {}).CPRA = "uspcav1", Ce.CCPA = "uspcav1", Ce.USNATIONAL = "uspnatv1", (ye = Ie = Ie || {})[ye.CPRA = 8] = "CPRA", ye[ye.CCPA = 8] = "CCPA", ye[ye.USNATIONAL = 7] = "USNATIONAL", (Le = Se = Se || {})[Le.NotApplicable = 0] = "NotApplicable", Le[Le.OptOut = 1] = "OptOut", Le[Le.OptIn = 2] = "OptIn", (we = Te = Te || {})[we.NotApplicable = 0] = "NotApplicable", we[we.Yes = 1] = "Yes", we[we.No = 2] = "No", (Re = De = De || {})[Re.CmpId = 28] = "CmpId", Re[Re.CmpVersion = 1] = "CmpVersion";
    var _e, Be, Oe, Ge, Ue = "geo",
        Ne = "otpreview",
        ke = (ue.Name, "PRODUCTION"),
        Me = ((Pe = {})[x.Days] = "PCenterVendorListLifespanDay", Pe[x.Weeks] = "LfSpnWk", Pe[x.Months] = "PCenterVendorListLifespanMonth", Pe[x.Years] = "LfSpnYr", Fe.prototype.camelize = function(e) {
            return e.split("-").map(function(e, t) {
                return 0 === t ? e : e[0].toUpperCase() + e.slice(1)
            }).join("")
        }, Fe.prototype.strToObj = function(e) {
            for (var t = {}, n = e.split(";").map(function(e) {
                    return e.trim()
                }), i = 0, a = void 0; i < n.length; ++i)
                if (/:/.test(n[i])) {
                    if (!(a = n[i].split(/:(.+)/))[1]) return null;
                    t[this.camelize(a[0])] = a[1].trim()
                }
            return t
        }, Fe);

    function Fe() {
        var e = this;
        this.implementThePolyfill = function() {
            var a = e,
                o = Element.prototype.setAttribute;
            return Element.prototype.setAttribute = function(e, t) {
                if ("style" !== e.toLowerCase() && o.apply(this, [e, t]), "style" !== e.toLowerCase() || t || this.removeAttribute("style"), "style" === e.toLowerCase() && t) {
                    this.removeAttribute("style");
                    var n = a.strToObj(t);
                    for (var i in n) this.style[i] = n[i]
                }
            }, !0
        }
    }

    function Ve(e, t, n) {
        void 0 === n && (n = !1);

        function i(e) {
            if (!e) return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"), t.trim()
        }
        var o = i(e.getAttribute("style")),
            r = i(t),
            a = "";
        a = n && o ? function() {
            for (var e = o.split(";").concat(r.split(";")).filter(function(e) {
                    return 0 !== e.length
                }), t = "", n = "", i = e.length - 1; 0 <= i; i--) {
                var a = e[i].substring(0, e[i].indexOf(":") + 1).trim();
                t.indexOf(a) < 0 && (t += a, n += e[i] + ";")
            }
            return n
        }() : r, e.setAttribute("style", a)
    }(Be = _e = _e || {})[Be.ACTIVE = 0] = "ACTIVE", Be[Be.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", Be[Be.EXPIRED = 2] = "EXPIRED", Be[Be.NO_CONSENT = 3] = "NO_CONSENT", Be[Be.OPT_OUT = 4] = "OPT_OUT", Be[Be.PENDING = 5] = "PENDING", Be[Be.WITHDRAWN = 6] = "WITHDRAWN", (Ge = Oe = Oe || {}).ping = "ping", Ge.addEventListener = "addEventListener", Ge.removeEventListener = "removeEventListener", Ge.hasSection = "hasSection", Ge.getSection = "getSection", Ge.getField = "getField", Ge.getGPPData = "getGPPData";
    var xe = new function() {
            var r = this;
            this.LOCATOR_NAME = "__gppLocator", this.win = window, this.customInit = "CUSTOMINIT", this.init = function() {
                r.win.__gpp && "function" == typeof r.win.__gpp || (r.win.__gpp = r.executeGppApi, window.addEventListener("message", r.messageHandler, !1), r.addFrame(r.LOCATOR_NAME))
            }, this.removeGppApi = function() {
                delete r.win.__gpp;
                var e = document.querySelectorAll("iframe[name=" + r.LOCATOR_NAME + "]")[0];
                e && e.parentElement.removeChild(e)
            }, this.executeGppApi = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                if (!t.length) return (null === (e = r.win) || void 0 === e ? void 0 : e.__gpp).queue || [];
                var i = t[0],
                    a = 1 < t.length ? t[1] : null,
                    o = 2 < t.length ? t[2] : null;
                switch (i) {
                    case Oe.ping:
                        return r.getPingRequest(a);
                    case Oe.addEventListener:
                        return r.addEventListener(a, o);
                    case Oe.removeEventListener:
                        return r.removeEventListener(o);
                    default:
                        return void r.addToQueue(i, a, o)
                }
            }, this.getPingRequest = function(e) {
                var t = {
                    gppVersion: 1,
                    cmpStatus: "stub",
                    cmpDisplayStatus: "hidden",
                    apiSupport: ["uspcav1", "uspvav1"],
                    currentAPI: "",
                    cmpId: 28
                };
                return e && e(t, !0), t
            }, this.addFrame = function(e) {
                var t = r.win.document,
                    n = Boolean(r.win.frames[e]);
                if (!n)
                    if (t.body) {
                        var i = t.createElement("iframe");
                        i.style.cssText = "display:none", i.name = e, i.setAttribute("title", "GPP Locator"), t.body.appendChild(i)
                    } else setTimeout(function() {
                        r.addFrame(e)
                    }, 5);
                return !n
            }, this.addEventListener = function(e, t) {
                var n = r.win.__gpp;
                return n.events = n.events || [], null != n && n.lastId || (n.lastId = 0), n.lastId++, n.events.push({
                    id: n.lastId,
                    callback: e,
                    parameter: t
                }), {
                    eventName: "listenerRegistered",
                    listenerId: n.lastId,
                    data: !0
                }
            }, this.removeEventListener = function(t) {
                var n = !1,
                    e = r.win.__gpp;
                return e.events = e.events || [], e.events = e.events.filter(function(e) {
                    return e.id.toString() !== t.toString() || !(n = !0)
                }), {
                    eventName: "listenerRemoved",
                    listenerId: t,
                    data: n
                }
            }, this.addToQueue = function(e, t, n) {
                var i = r.win.__gpp;
                i.queue = i.queue || [], i.queue.push([e, t, n])
            }, this.messageHandler = function(i) {
                var t, a = "string" == typeof i.data;
                try {
                    t = a ? JSON.parse(i.data) : i.data
                } catch (e) {
                    t = null
                }
                if (t && t.__gppCall) {
                    var o = t.__gppCall;
                    (0, r.win.__gpp)(o.command, function(e, t) {
                        var n = {
                            __gppReturn: {
                                returnValue: e,
                                success: t,
                                callId: o.callId
                            }
                        };
                        i.source.postMessage(a ? JSON.stringify(n) : n, i.source || "*")
                    }, o.parameter)
                }
            }, this.customInit || this.init()
        },
        He = (je.prototype.initConsentSDK = function() {
            this.initCustomEventPolyfill(), this.ensureHtmlGroupDataInitialised(), this.setStubScriptElement(), this.setOTDataLayer(), this.getParam(), this.fetchBannerSDKDependency(), this.captureNonce()
        }, je.prototype.captureNonce = function() {
            this.nonce = Ee.stubScriptElement.nonce || Ee.stubScriptElement.getAttribute("nonce") || null
        }, je.prototype.fetchBannerSDKDependency = function() {
            this.setDomainDataFileURL(), this.crossOrigin = Ee.stubScriptElement.getAttribute("crossorigin") || null, this.previewMode = "true" === Ee.stubScriptElement.getAttribute("data-preview-mode"), this.otFetch(Ee.bannerDataParentURL, this.getLocation.bind(this))
        }, je.prototype.setDomainIfBulkDomainEnabled = function(e) {
            var t = e && e.TenantFeatures,
                n = window.location.hostname,
                i = e.Domain,
                a = e.BulkDomainCheckUrl;
            if (t && t.CookieV2BulkDomainManagement && n !== i && e.ScriptType === ke) {
                var o = window.sessionStorage;
                if (o && o.getItem("bulkDomainMgmtEnabled")) this.handleBulkDomainMgmt({
                    isValid: "true" === window.sessionStorage.getItem("bulkDomainMgmtEnabled")
                }, e);
                else {
                    var r = {
                        location: Ee.storageBaseURL.replace(/^https?:\/\//, ""),
                        domainId: this.domainId,
                        url: n
                    };
                    this.otFetch(a, this.handleBulkDomainMgmt, !1, r, e)
                }
            }
        }, je.prototype.getLocation = function(e) {
            if (this.setDomainIfBulkDomainEnabled(e), (e.TenantFeatures && e.TenantFeatures.CookieV2CSP || e.CookieV2CSPEnabled) && this.nonce && (this.setAttributePolyfillIsActive = !0, (new Me).implementThePolyfill()), !e.RuleSet[0].Type) return this.iabTypeAdded = !1, window.__cmp = this.executeCmpApi, window.__tcfapi = this.executeTcfApi, this.intializeIabStub(), this.addBannerSDKScript(e);
            var t = window;
            if (t.OneTrust && t.OneTrust.geolocationResponse) {
                var n = t.OneTrust.geolocationResponse;
                this.setGeoLocation(n.countryCode, n.stateCode), this.addBannerSDKScript(e)
            } else {
                var i = this.readCookieParam(Ee.optanonCookieName, Ee.geolocationCookiesParam);
                if (i || e.SkipGeolocation) {
                    var a = i.split(";")[0],
                        o = i.split(";")[1];
                    this.setGeoLocation(a, o), this.addBannerSDKScript(e)
                } else this.getGeoLocation(e)
            }
        }, je.prototype.handleBulkDomainMgmt = function(e, t) {
            window.sessionStorage && window.sessionStorage.setItem("bulkDomainMgmtEnabled", JSON.stringify(e.isValid)), e.isValid && (t.Domain = window.location.hostname)
        }, je.prototype.getGeolocationURL = function(e) {
            e.TenantFeatures;
            var t = "" + Ee.stubScriptElement.getAttribute("src").split(Ee.stubFileName)[0] + e.Version;
            if (new RegExp("^file://", "i").test(t) && e.MobileSDK) {
                var n = "/" + e.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js";
                return Ee.storageBaseURL + n
            }
            return e.GeolocationUrl
        }, je.prototype.geoLocationJsonCallback = function(e, t) {
            t && this.setGeoLocation(t.country, t.state), this.addBannerSDKScript(e)
        }, je.prototype.getGeoLocation = function(e) {
            var t = this.getGeolocationURL(e);
            this.otFetch(t, this.geoLocationJsonCallback.bind(this, e), !0)
        }, je.prototype.setOTDataLayer = function() {
            var e = "data-dLayer-ignore",
                t = Ee.stubScriptElement.hasAttribute(e),
                n = Ee.stubScriptElement.getAttribute(e),
                i = t && "true" === n || t && "" === n;
            this.otDataLayer = {
                ignore: i,
                name: Ee.stubScriptElement.getAttribute("data-dLayer-name") || "dataLayer"
            }
        }, je.prototype.setGeoLocation = function(e, t) {
            void 0 === t && (t = ""), Ee.userLocation = {
                country: e,
                state: t
            }
        }, je.prototype.otFetch = function(e, n, t, i, a) {
            void 0 === t && (t = !1), void 0 === i && (i = null);
            var o = window.sessionStorage && window.sessionStorage.getItem("otPreviewData");
            if (new RegExp("^file://", "i").test(e)) this.otFetchOfflineFile(e, n);
            else if (0 <= e.indexOf("/consent/") && this.previewMode && o) {
                var r = JSON.parse(o).domainJson;
                n(r)
            } else {
                Ee.mobileOnlineURL.push(e);
                var s = new XMLHttpRequest;
                if (s.onload = function(e) {
                        var t;
                        this && this.responseText ? t = this.responseText : e && e.target && (t = e.target.responseText), a ? n(JSON.parse(t), a) : n(JSON.parse(t))
                    }, s.onerror = function() {
                        n()
                    }, s.open("GET", e), t && s.setRequestHeader("accept", "application/json"), i)
                    for (var l in i) s.setRequestHeader(l, i[l]);
                s.send()
            }
        }, je.prototype.otFetchOfflineFile = function(e, t) {
            var n = (e = e.replace(".json", ".js")).split("/"),
                i = n[n.length - 1].split(".js")[0];
            this.jsonp(e, function() {
                t(window[i])
            })
        }, je.prototype.jsonp = function(e, t) {
            var n = document.createElement("script");
            n.setAttribute("src", e), this.nonce && n.setAttribute("nonce", this.nonce), n.async = !0, n.type = "text/javascript", this.crossOrigin && n.setAttribute("crossorigin", this.crossOrigin), document.getElementsByTagName("head")[0].appendChild(n), new RegExp("^file://", "i").test(e) || Ee.mobileOnlineURL.push(e), t && (n.onload = n.onerror = function() {
                t()
            })
        }, je.prototype.getRegionSet = function(e) {
            var t, n, i, a = Ee.userLocation,
                o = e.RuleSet.filter(function(e) {
                    return !0 === e.Default
                });
            if (!a.country && !a.state) return o && 0 < o.length ? o[0] : null;
            for (var r = a.state.toLowerCase(), s = a.country.toLowerCase(), l = 0; l < e.RuleSet.length; l++)
                if (!0 === e.RuleSet[l].Global) i = e.RuleSet[l];
                else {
                    var p = e.RuleSet[l].States;
                    if (p[s] && 0 <= p[s].indexOf(r)) {
                        n = e.RuleSet[l];
                        break
                    }
                    0 <= e.RuleSet[l].Countries.indexOf(s) && (t = e.RuleSet[l])
                }
            return n || t || i
        }, je.prototype.ensureHtmlGroupDataInitialised = function() {
            this.initializeIABData(), this.initializeGroupData(), this.initializeHostData(), this.initializeGenVenData()
        }, je.prototype.initializeGroupData = function() {
            var e = this.readCookieParam(Ee.optanonCookieName, "groups");
            e && (Ee.optanonHtmlGroupData = this.deserialiseStringToArray(e))
        }, je.prototype.initializeHostData = function() {
            var e = this.readCookieParam(Ee.optanonCookieName, "hosts");
            e && (Ee.optanonHostData = this.deserialiseStringToArray(e))
        }, je.prototype.initializeGenVenData = function() {
            var e = this.readCookieParam(Ee.optanonCookieName, "genVendors");
            e && (Ee.genVendorsData = this.deserialiseStringToArray(e))
        }, je.prototype.initializeIABData = function() {
            this.validateIABGDPRApplied(), this.validateIABGlobalScope()
        }, je.prototype.validateIABGlobalScope = function() {
            var e = this.readCookieParam(Ee.optanonCookieName, Ee.oneTrustIsIABCrossConsentEnableParam);
            e ? "true" === e ? (Ee.hasIABGlobalScope = !0, Ee.isStubReady = !1) : (Ee.hasIABGlobalScope = !1, Ee.IABCookieValue = this.getCookie(Ee.oneTrustIABCookieName)) : Ee.isStubReady = !1
        }, je.prototype.validateIABGDPRApplied = function() {
            var e = this.readCookieParam(Ee.optanonCookieName, Ee.geolocationCookiesParam).split(";")[0];
            e ? this.isBoolean(e) ? Ee.oneTrustIABgdprAppliesGlobally = "true" === e : Ee.oneTrustIABgdprAppliesGlobally = 0 <= Ee.EUCOUNTRIES.indexOf(e) : Ee.isStubReady = !1
        }, je.prototype.isBoolean = function(e) {
            return "true" === e || "false" === e
        }, je.prototype.readCookieParam = function(e, t) {
            var n, i, a, o, r = this.getCookie(e);
            if (r) {
                for (i = {}, a = r.split("&"), n = 0; n < a.length; n += 1) o = a[n].split("="), i[decodeURIComponent(o[0])] = decodeURIComponent(o[1]).replace(/\+/g, " ");
                return t && i[t] ? i[t] : t && !i[t] ? "" : i
            }
            return ""
        }, je.prototype.getCookie = function(e) {
            if (this.isAmp) {
                var t = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
                if (t) return t[e] || null
            }
            var n, i, a = e + "=",
                o = document.cookie.split(";");
            for (n = 0; n < o.length; n += 1) {
                for (i = o[n];
                    " " == i.charAt(0);) i = i.substring(1, i.length);
                if (0 == i.indexOf(a)) return i.substring(a.length, i.length)
            }
            return null
        }, je.prototype.updateGtmMacros = function() {
            var e, t = [],
                n = Ee.optanonHtmlGroupData.length;
            for (e = 0; e < n; e++) this.endsWith(Ee.optanonHtmlGroupData[e], ":1") && t.push(Ee.optanonHtmlGroupData[e].replace(":1", ""));
            for (n = Ee.optanonHostData.length, e = 0; e < n; e++) this.endsWith(Ee.optanonHostData[e], ":1") && t.push(Ee.optanonHostData[e].replace(":1", ""));
            for (n = Ee.genVendorsData.length, e = 0; e < n; e++) this.endsWith(Ee.genVendorsData[e], ":1") && t.push(Ee.genVendorsData[e].replace(":1", ""));
            for (n = Ee.vendorsServiceData.length, e = 0; e < n; e++) this.endsWith(Ee.vendorsServiceData[e], ":1") && t.push(Ee.vendorsServiceData[e].replace(":1", ""));
            var i = "," + this.serialiseArrayToString(t) + ",";
            window.OnetrustActiveGroups = i, window.OptanonActiveGroups = i;
            var a = window;
            this.otDataLayer.ignore || void 0 === a[this.otDataLayer.name] ? this.otDataLayer.ignore || (a[this.otDataLayer.name] = [{
                event: "OneTrustLoaded",
                OnetrustActiveGroups: i
            }, {
                event: "OptanonLoaded",
                OptanonActiveGroups: i
            }]) : a[this.otDataLayer.name].constructor === Array && (a[this.otDataLayer.name].push({
                OnetrustActiveGroups: i
            }), a[this.otDataLayer.name].push({
                OptanonActiveGroups: i
            }));
            var o, r = new CustomEvent("consent.onetrust", {
                detail: t
            });
            !this.otDataLayer.ignore && t.length && (a[this.otDataLayer.name].constructor === Array && a[this.otDataLayer.name].push({
                event: "OneTrustGroupsUpdated",
                OnetrustActiveGroups: i
            }), o = new CustomEvent("OneTrustGroupsUpdated", {
                detail: t
            })), setTimeout(function() {
                t.length && window.dispatchEvent(r), o && window.dispatchEvent(o)
            })
        }, je.prototype.deserialiseStringToArray = function(e) {
            return e ? e.split(",") : []
        }, je.prototype.endsWith = function(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }, je.prototype.serialiseArrayToString = function(e) {
            return e.toString()
        }, je.prototype.setStubScriptElement = function() {
            Ee.stubScriptElement = document.querySelector("script[src*='" + Ee.stubFileName + "']");
            var e = Ee.stubScriptElement && 0 <= Ee.stubScriptElement.getAttribute("src").indexOf("did=");
            Ee.stubScriptElement && Ee.stubScriptElement.hasAttribute(Ee.DATAFILEATTRIBUTE) ? this.domainId = Ee.stubScriptElement.getAttribute(Ee.DATAFILEATTRIBUTE).trim() : e ? this.domainId = Ee.stubScriptElement.getAttribute("src").split("did=")[1] : Ee.stubScriptElement || (Ee.stubScriptElement = document.querySelector("script[src*='" + Ee.migratedCCTID + "']"), Ee.stubScriptElement && (Ee.isMigratedURL = !0, this.domainId = Ee.migratedDomainId.trim()))
        }, je.prototype.setDomainDataFileURL = function() {
            var e = Ee.stubScriptElement.getAttribute("src"),
                t = -1 < e.indexOf("/consent");
            e && (Ee.isMigratedURL ? Ee.storageBaseURL = e.split("/consent/" + Ee.migratedCCTID)[0] : Ee.storageBaseURL = t ? e.split("/consent")[0] : e.split("/scripttemplates/" + Ee.stubFileName)[0]), this.storageBaseURL = Ee.storageBaseURL, this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId = this.domainId + "-test" : this.isPreview = !1, Ee.bannerBaseDataURL = Ee.storageBaseURL && Ee.storageBaseURL + "/consent/" + this.domainId, Ee.bannerDataParentURL = Ee.bannerBaseDataURL + "/" + this.domainId + ".json"
        }, je.prototype.initCustomEventPolyfill = function() {
            if ("function" == typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }, je.prototype.removeTcf = function() {
            delete window.__tcfapi;
            var e = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
            e && e.parentElement.removeChild(e)
        }, je.prototype.getParamForIE = function() {
            return {
                get: function(e) {
                    var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.search);
                    return null === t ? null : decodeURI(t[1]) || ""
                }
            }
        }, je.prototype.getParam = function() {
            window.document.documentMode || !window.URLSearchParams ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
            var e = "true" === this.urlParams.get("otreset"),
                t = "true" === this.urlParams.get("otpreview");
            this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase();
            var n = this.readCookieParam(Ne, "expiry"),
                i = this.readCookieParam(Ne, Ue);
            this.isReset = e || n && new Date(n) < new Date, this.isPreview = !this.isReset && (t || n && new Date(n) > new Date), this.setGeoParam(this.geoFromUrl || i)
        }, je.prototype.setGeoParam = function(e) {
            if (e) {
                var t = window;
                t.OneTrust || (t.OneTrust = {});
                var n = e.split(",");
                t.OneTrust.geolocationResponse = {
                    countryCode: n[0],
                    stateCode: n[1]
                }
            }
        }, je);

    function je() {
        var p = this;
        this.iabType = null, this.iabTypeAdded = !0, this.crossOrigin = null, this.isAmp = !1, this.domainId = "", this.isReset = !1, this.isPreview = !1, this.geoFromUrl = "", this.nonce = "", this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.charset = null, this.addBannerSDKScript = function(e) {
            var t = p.getRegionSet(e);
            t.GCEnable || (p.updateGtmMacros(), p.gtmUpdated = !0), p.iabTypeAdded && ("IAB" !== t.Type && "IAB2" !== t.Type || (p.iabType = t.Type, p.intializeIabStub()), "IAB2" !== t.Type && p.removeTcf()), t.IsGPPEnabled ? xe.init() : xe.removeGppApi();
            var n = Ee.stubScriptElement.cloneNode(!0),
                i = "";
            i = e.UseSDKRefactor ? (Ee.isMigratedURL && (n.src = Ee.storageBaseURL + "/scripttemplates/new/scripttemplates/" + Ee.stubFileName + ".js"), Ee.storageBaseURL + "/scripttemplates/new/scripttemplates/" + e.Version + "/" + Ee.bannerScriptName) : "5.11.0" === e.Version ? (Ee.isMigratedURL && (n.src = Ee.storageBaseURL + "/scripttemplates/old/scripttemplates/" + Ee.stubFileName + ".js"), Ee.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + Ee.bannerScriptName) : (Ee.isMigratedURL && (n.src = Ee.storageBaseURL + "/scripttemplates/" + Ee.stubFileName + ".js"), Ee.storageBaseURL + "/scripttemplates/" + e.Version + "/" + Ee.bannerScriptName);
            ["charset", "data-language", "data-document-language", "data-domain-script", "crossorigin", "data-ignore-ga"].forEach(function(e) {
                Ee.stubScriptElement.getAttribute(e) && n.setAttribute(e, Ee.stubScriptElement.getAttribute(e))
            }), p.charset = Ee.stubScriptElement.getAttribute("charset"), p.isAmp = !!Ee.stubScriptElement.getAttribute("amp"), window.otStubData = {
                bannerBaseDataURL: Ee.bannerBaseDataURL,
                crossOrigin: p.crossOrigin,
                domainData: e,
                domainId: p.domainId,
                geoFromUrl: p.geoFromUrl,
                isAmp: p.isAmp,
                isPreview: p.isPreview,
                isReset: p.isReset,
                mobileOnlineURL: Ee.mobileOnlineURL,
                nonce: p.nonce,
                otDataLayer: p.otDataLayer,
                regionRule: t,
                setAttributePolyfillIsActive: p.setAttributePolyfillIsActive,
                storageBaseURL: p.storageBaseURL,
                stubElement: n,
                urlParams: p.urlParams,
                userLocation: Ee.userLocation,
                gtmUpdated: p.gtmUpdated,
                previewMode: p.previewMode,
                charset: p.charset
            }, p.jsonp(i, null)
        }, this.intializeIabStub = function() {
            var e = window;
            p.iabTypeAdded ? ("IAB" === p.iabType ? void 0 === e.__cmp && (window.__cmp = p.executeCmpApi) : void 0 === e.__tcfapi && (window.__tcfapi = p.executeTcfApi), p.addIabFrame()) : p.addBackwardIabFrame(), e.receiveOTMessage = p.receiveIabMessage, (e.attachEvent || window.addEventListener)("message", e.receiveOTMessage, !1)
        }, this.addIabFrame = function() {
            var e = window,
                t = "IAB" === p.iabType ? "__cmpLocator" : "__tcfapiLocator";
            !e.frames[t] && (e.document.body ? p.addLocator(t, "CMP") : setTimeout(p.addIabFrame, 5))
        }, this.addBackwardIabFrame = function() {
            var e = window,
                t = "__cmpLocator";
            !e.frames[t] && (e.document.body ? p.addLocator(t, "CMP") : setTimeout(p.addIabFrame, 5));
            var n = "__tcfapiLocator";
            !e.frames[n] && (e.document.body ? p.addLocator(n, "TCF") : setTimeout(p.addIabFrame, 5))
        }, this.addLocator = function(e, t) {
            var n = window,
                i = n.document.createElement("iframe");
            Ve(i, "display: none;", !0), i.name = e, i.setAttribute("title", t + " Locator"), n.document.body.appendChild(i)
        }, this.receiveIabMessage = function(i) {
            var a = "string" == typeof i.data,
                e = {};
            try {
                e = a ? JSON.parse(i.data) : i.data
            } catch (e) {}
            if (e.__cmpCall && "IAB" === p.iabType) {
                var o = e.__cmpCall.callId,
                    r = e.__cmpCall.command,
                    t = e.__cmpCall.parameter;
                p.executeCmpApi(r, t, function(e, t) {
                    var n = {
                        __cmpReturn: {
                            returnValue: e,
                            success: t,
                            callId: o,
                            command: r
                        }
                    };
                    i.source.postMessage(a ? JSON.stringify(n) : n, i.origin)
                })
            } else e.__cmpCall && "IAB2" === p.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");
            if (e.__tcfapiCall && "IAB2" === p.iabType) {
                var s = e.__tcfapiCall.callId,
                    l = e.__tcfapiCall.command,
                    n = (t = e.__tcfapiCall.parameter, e.__tcfapiCall.version);
                p.executeTcfApi(l, t, function(e, t) {
                    var n = {
                        __tcfapiReturn: {
                            returnValue: e,
                            success: t,
                            callId: s,
                            command: l
                        }
                    };
                    i && i.source && i.source.postMessage && i.source.postMessage(a ? JSON.stringify(n) : n, "*")
                }, n)
            } else e.__tcfapiCall && "IAB" === p.iabType && console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")
        }, this.executeCmpApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            p.iabType = "IAB";
            var n = e[0],
                i = e[1],
                a = e[2];
            if ("function" == typeof a && n)
                if (Ee.isStubReady && Ee.IABCookieValue) switch (n) {
                    case "ping":
                        p.getPingRequest(a, !0);
                        break;
                    case "getConsentData":
                        p.getConsentDataRequest(a);
                        break;
                    default:
                        p.addToQueue(n, i, a)
                } else p.addToQueue(n, i, a)
        }, this.executeTcfApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (p.iabType = "IAB2", !e.length) return window.__tcfapi.a || [];
            var n = e[0],
                i = e[1],
                a = e[2],
                o = e[3];
            "function" == typeof a && n && ("ping" === n ? p.getPingRequest(a) : p.addToQueue(n, i, a, o))
        }, this.addToQueue = function(e, t, n, i) {
            var a = window,
                o = "IAB" === p.iabType ? "__cmp" : "__tcfapi";
            a[o].a = a[o].a || [], a[o].a.push([e, t, n, i])
        }, this.getPingRequest = function(e, t) {
            if (void 0 === t && (t = !1), e) {
                var n = {},
                    i = !1;
                "IAB" === p.iabType ? (n = {
                    gdprAppliesGlobally: Ee.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: t
                }, i = !0) : "IAB2" === p.iabType && (n = {
                    gdprApplies: Ee.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: !1,
                    cmpStatus: "stub",
                    displayStatus: "stub",
                    apiVersion: "2.0",
                    cmpVersion: void 0,
                    cmpId: void 0,
                    gvlVersion: void 0,
                    tcfPolicyVersion: void 0
                }, i = !0), e(n, i)
            }
        }, this.getConsentDataRequest = function(e) {
            e && Ee.IABCookieValue && e({
                gdprApplies: Ee.oneTrustIABgdprAppliesGlobally,
                hasGlobalScope: Ee.hasIABGlobalScope,
                consentData: Ee.IABCookieValue
            }, !0)
        }, this.initConsentSDK()
    }
    var qe = new He;
    return e.OtSDKStub = He, e.otSdkStub = qe, e
}({});