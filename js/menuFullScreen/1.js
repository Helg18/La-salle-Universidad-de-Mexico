! function(e) {
    $(function() {
        e.init()
    }), e.initMethods = [], e.addInitMethod = function(a) {
        e.initMethods.push(a)
    }, e.init = function() {
        for (var a = 0; a < e.initMethods.length; a++) "function" == typeof e.initMethods[a] && e.initMethods[a]()
    }
}(window.app = {}),
function(e) {
}(window.app.environment = {}),
function(e) {
    e.init = function() {
    }
}(window.app.forms = {}),
function(e) {
    e.init = function() {
    }
}(window.app.gif_player = {}),
function(e) {
    e.init = function() {   
    }
}(window.app.lightbox = {}),
function(e) {
    e.init = function() {
    }, app.addInitMethod(e.init)
}(window.app.mail_to = {}),
function(e) {
    e.is_open = !1, e.locked = !1, e.scroll_occured = !1, e.scroll_pos = 0, e.timeout_id = !1, e.init = function() {
        $("#nav_main .close").bind("click", function(a) {
            a.preventDefault(), e.close()
        }), $("#nav_main .menu").bind("click", function(a) {
            a.preventDefault(), e.open()
        }), $("#nav_main .primary a").hover(function() {
            $("#nav_main .primary a").not(this).addClass("negative_hover")
        }, function() {
            $("#nav_main .primary a").removeClass("negative_hover")
        }), $(window).bind("scroll", e.scroll), setInterval(e.update, 250)
    }, app.addInitMethod(e.init), e.close = function(a) {
        e.is_open = !1, $("#nav_main_open .close").addClass("fade"), $("#nav_main_open .content_wrapper").removeClass("show").oneTransitionEnd(function() {
            $("#nav_main_open .background .layer").addClass("exit").last().oneTransitionEnd(function() {
                $("#nav_main_open .background .layer").removeClass("show exit"), a ? app.page_loader.switch() : e.overlay_hide()
            })
        })
    }, e.lock = function() {
        e.locked = !0, $("#nav_main_closed").addClass("")
    }, e.lock_scroll = function(a) {
        e.lock(), $(window).scrollTop(a), e.unlock()
    }, e.open = function() {
        e.is_open = !0, $("#nav_main_closed").removeClass("show").addClass("").oneAnimationEnd(function() {
            $("#nav_main_closed").find(".menu").addClass("fade"), $("#nav_main_open").removeClass("").addClass("show"), setTimeout(function() {
                $("#nav_main_open").addClass("overlay"), $("#nav_main_open").find(".background .layer").addClass("show").first().oneTransitionEnd(function() {
                    $("#nav_main_open .content_wrapper").addClass("show")
                })
            }, 100)
        })
    }, e.overlay_hide = function() {
        var e = $("#nav_main_open");
        e.hasClass("overlay") && $("#nav_main_open").removeClass("overlay").oneTransitionEnd(function() {
            $("#nav_main_open").removeClass("show").addClass("").find(".close").removeClass("fade"), setTimeout(function() {
                $("#nav_main_closed").removeClass("").addClass("show").find(".menu").removeClass("fade")
            }, 300)
        }, 200)
    }, e.scroll = function() {
        e.scroll_occured = !0
    }, e.unlock = function(a) {
        setTimeout(function() {
            e.locked = !1
        }, a ? a : 260)
    }, e.update = function() {
        if (e.locked && (e.scroll_occured = !1), !e.scroll_occured) return e.scroll_pos = $(window).scrollTop(), e.scroll_pos < 1 && $("#nav_main_closed").removeClass("bg"), void 0;
        e.scroll_occured = !1;
        var a = $(window).scrollTop();
        0 > a && (a = 0), Math.abs(e.scroll_pos - a) <= 25 || (e.scroll_pos < a ? $("#nav_main_closed").addClass("scroll_hide") : ($("#nav_main_closed").removeClass("scroll_hide"), clearInterval(e.timeout_id), e.timeout_id = setTimeout(function() {
            $(window).scrollTop() == e.scroll_pos && e.scroll_pos > 0 && $("#nav_main_closed").addClass("scroll_hide")
        }, 3e3)), a > 10 ? $("#nav_main_closed").addClass("") : $("#nav_main_closed").removeClass(""), e.scroll_pos = a)
    }, e.updateColor = function(e) {
        $("#nav_main_closed").removeClass("alt_yellow alt_white"), e && $("#nav_main_closed").addClass("alt_" + e)
    }
}(window.app.nav_main = {}),
function(e) {
    e.id = !1, e.enter_before = !1, e.enter_delay = 0, e.exit_complete = !0, e.full_loader_whitelist = ["safari", "chrome"], e.is_entered = !1, e.init = function() {
        "function" == typeof a && a(), app.forms.init(), app.gif_player.init(), app.mail_to.init(), app.environment.local && $('a[href^="/"]').not('[href="/"]').not("[data-local-env]").each(function() {
        }), app.waypoints.global(), app.waypoints.init(250), app.nav_main.updateColor($("section").eq(0).data("nav-alt")), $pre_load_images = $("body").find("img.preload"), $("body").find(".preload").each(function() {
        }), $pre_load_images.imagesLoaded().always(function() {
        })
    }, app.addInitMethod(e.init), e.destroy = function() {
    }
}(window.app.page = {}),
function(e) {
    e.init = function() {
    }
}(window.app.the_universe = {}),
function(e) {
    e.configs = [], e.init = function(a) {
    }, app.addInitMethod(e.init), e.destroy = function() {
        Waypoint.destroyAll(), e.configs = []
    }, e.global = function() {
    }
}(window.app.waypoints = {});


