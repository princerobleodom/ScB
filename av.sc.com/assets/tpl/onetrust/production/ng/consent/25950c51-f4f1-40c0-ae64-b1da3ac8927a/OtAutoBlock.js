! function() {
    function q(b) {
        var c = [],
            a = [],
            e = function(f) {
                for (var d = {}, h = 0; h < x.length; h++) {
                    var g = x[h];
                    if (g.Tag === f) {
                        d = g;
                        break
                    }
                    var k = (y = g.Tag, r = v = l = void 0, l = -1 !== (r = y).indexOf("http:") ? r.replace("http:", "") : r.replace("https:", ""), -1 !== (v = l.indexOf("?")) ? l.replace(l.substring(v), "") : l);
                    if (f && (-1 !== f.indexOf(k) || -1 !== g.Tag.indexOf(f))) {
                        d = g;
                        break
                    }
                }
                var y, l, v, r;
                return d
            }(b);
        return e.CategoryId && (c = e.CategoryId), e.Vendor && (a = e.Vendor.split(":")), !e.Tag && F && (a = c = function(f) {
            var d = [],
                h = function(g) {
                    var k = document.createElement("a");
                    k.href = g;
                    g = k.hostname.split(".");
                    return -1 !== g.indexOf("www") || 2 < g.length ? g.slice(1).join(".") : k.hostname
                }(f);
            w.some(function(g) {
                return g === h
            }) && (d = ["C0004"]);
            return d
        }(b)), {
            categoryIds: c,
            vsCatIds: a
        }
    }

    function z(b) {
        return !b || !b.length || (b && window.OptanonActiveGroups ? b.every(function(c) {
            return -1 !== window.OptanonActiveGroups.indexOf("," + c + ",")
        }) : void 0)
    }

    function m(b, c) {
        void 0 === c && (c = null);
        var a = window,
            e = a.OneTrust && a.OneTrust.IsVendorServiceEnabled;
        a = e && a.OneTrust.IsVendorServiceEnabled();
        return "Categories" ===
            t || "All" === t && e && !a ? z(b) : ("Vendors" === t || "All" === t && e && a) && z(c)
    }

    function n(b) {
        b = b.getAttribute("class") || "";
        return -1 !== b.indexOf("optanon-category") || -1 !== b.indexOf("ot-vscat")
    }

    function p(b) {
        return b.hasAttribute("data-ot-ignore")
    }

    function A(b, c, a) {
        void 0 === a && (a = null);
        var e = b.join("-"),
            f = a && a.join("-"),
            d = c.getAttribute("class") || "",
            h = "",
            g = !1;
        b && b.length && -1 === d.indexOf("optanon-category-" + e) && (h = ("optanon-category-" + e).trim(), g = !0);
        a && a.length && -1 === d.indexOf("ot-vscat-" + f) && (h += " " + ("ot-vscat-" +
            f).trim(), g = !0);
        g && c.setAttribute("class", h + " " + d)
    }

    function B(b, c, a) {
        void 0 === a && (a = null);
        var e;
        b = b.join("-");
        a = a && a.join("-");
        return -1 === c.indexOf("optanon-category-" + b) && (e = ("optanon-category-" + b).trim()), -1 === c.indexOf("ot-vscat-" + a) && (e += " " + ("ot-vscat-" + a).trim()), e + " " + c
    }

    function C(b) {
        var c = q(b.src || "");
        if (c.categoryIds.length || c.vsCatIds.length) {
            A(c.categoryIds, b, c.vsCatIds);
            m(c.categoryIds, c.vsCatIds) || (b.type = "text/plain");
            var a = function(e) {
                "text/plain" === b.getAttribute("type") && e.preventDefault();
                b.removeEventListener("beforescriptexecute", a)
            };
            b.addEventListener("beforescriptexecute", a)
        }
    }

    function D(b) {
        var c = b.src || "",
            a = q(c);
        (a.categoryIds.length || a.vsCatIds.length) && (A(a.categoryIds, b, a.vsCatIds), m(a.categoryIds, a.vsCatIds) || (b.removeAttribute("src"), b.setAttribute("data-src", c)))
    }
    var x = JSON.parse('[{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://av.sc.com/assets/global/adobe/production/7b4b60abf672/7a8c22ed9c5e/217bb09d5cad/EX3720bd7637f1433592435505bbe4b0dd-libraryCode_source.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYvuZOgAAAEYsUgM5","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/plugins/ua/linkid.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/621295738320142","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://9154623.fls.doubleclick.net/activityi","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYi7jBQAAABjUywP8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dY_IZJwAAAEbaNAMg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYx58EQAAAFuWSgMg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://av.sc.com/assets/global/adobe/production/7b4b60abf672/7a8c22ed9c5e/f9e20c76cef0/EX3720bd7637f1433592435505bbe4b0dd-libraryCode_source.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/824186754/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.sc.com/global/av/forms/d1/assets/app.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://8581963.fls.doubleclick.net/activityi","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://preview.standardchartered.com/assets/global/adobe/staging/7b4b60abf672/7168c4455bd1/launch-763a6ba07262-staging.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/plugins/inferredevents.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://preview.standardchartered.com/development/assets/global/adobe/staging/7b4b60abf672/7a8c22ed9c5e/launch-b6f51810ac0d-staging.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://av.sc.com/assets/global/adobe/production/7b4b60abf672/7a8c22ed9c5e/launch-4d5fd6849f01.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYvuT_AAAAJ4ArAMg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYvE6wgAAAHc8kwM5","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dY5Uf7QAAAMVVCgN9","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cm.everesttech.net/cm/dd","CategoryId":["C0004"],"Vendor":null}]'),
        F = JSON.parse("true"),
        t = JSON.parse('"Categories"'),
        w = "addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" ");
    w = w.filter(function(b) {
        if ("null" !== b && b.trim().length) return b
    });
    var u = ["embed", "iframe", "img", "script"];
    (new MutationObserver(function(b) {
        Array.prototype.forEach.call(b, function(c) {
            Array.prototype.forEach.call(c.addedNodes, function(e) {
                1 === e.nodeType && (-1 === u.indexOf(e.tagName.toLowerCase()) || n(e) || p(e) || ("script" === e.tagName.toLowerCase() ? C : D)(e))
            });
            var a = c.target;
            c.attributeName && (n(a) && p(a) || ("script" === a.nodeName.toLowerCase() ? C(a) : -1 !== u.indexOf(c.target.nodeName.toLowerCase()) && D(a)))
        })
    })).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["src"]
    });
    var E = document.createElement;
    document.createElement = function() {
        for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
        if ("script" !== b[0].toLowerCase() && -1 === u.indexOf(b[0].toLowerCase())) return E.bind(document).apply(void 0, b);
        var a = E.bind(document).apply(void 0, b),
            e = a.setAttribute.bind(a);
        return Object.defineProperties(a, {
            src: {
                get: function() {
                    return a.getAttribute("src") || ""
                },
                set: function(f) {
                    var d = "";
                    "string" == typeof f ? d = f : f instanceof Object && (d = f.toString());
                    d = q(d);
                    !d.categoryIds.length && !d.vsCatIds.length || "script" !== b[0].toLowerCase() || n(a) || m(d.categoryIds, d.vsCatIds) || p(a) ? !d.categoryIds.length || -1 === u.indexOf(b[0].toLowerCase()) || n(a) || m(d.categoryIds, d.vsCatIds) || p(a) ? e("src", f) : (a.removeAttribute("src"), e("data-src", f), f = a.getAttribute("class"), f || (f = B(d.categoryIds, f || "", d.vsCatIds), e("class", f))) : (e("type", "text/plain"), e("src", f));
                    return !0
                }
            },
            type: {
                get: function() {
                    return a.getAttribute("type") || ""
                },
                set: function(f) {
                    return d = f, g = e, k = q((h = a).src || ""), g("type", !k.categoryIds.length && !k.vsCatIds.length || n(h) || m(k.categoryIds, k.vsCatIds) || p(h) ? d : "text/plain"), !0;
                    var d, h, g, k
                }
            },
            class: {
                set: function(f) {
                    return d = f, g = e, !(k = q((h = a).src)).categoryIds.length && !k.vsCatIds.length || n(h) || m(k.categoryIds, k.vsCatIds) || p(h) ? g("class", d) : g("class", B(k.categoryIds, d, k.vsCatIds)), !0;
                    var d, h, g, k
                }
            }
        }), a.setAttribute = function(f, d, h) {
            "type" !== f && "src" !== f || h ? e(f, d) : a[f] = d
        }, a
    }
}();