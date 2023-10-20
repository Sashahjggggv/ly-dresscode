jQuery(document).ready(function (t) {
        function e(t, e) {
            var n = window.location.href, a = location.hash;
            if ((n = n.replace(a, "")).indexOf(t + "=") >= 0) {
                var o = n.substring(0, n.indexOf(t)), i = n.substring(n.indexOf(t));
                n = o + t + "=" + e + (i = (i = i.substring(i.indexOf("=") + 1)).indexOf("&") >= 0 ? i.substring(i.indexOf("&")) : "")
            } else n.indexOf("?") < 0 ? n += "?" + t + "=" + e : n += "&" + t + "=" + e;
            history.pushState("", "", n + a)
        }

        function n() {
            t(".time-options").addClass("ajax_reload");
            var e = t("#datepicker").datepicker("getDate"), n = t.datepicker.formatDate("dd.mm.yy", e);
            jQuery.ajax({
                url: myajax.url,
                data: {action: "get_date_sign_up_fitting", fitting_date: n},
                type: "POST",
                success: function (e) {
                    var n = t.parseJSON(e);
                    t(".time-options").html(n.html), t(".ui-state-active").attr("data-time", n.output)
                }
            })
        }

        t("#selectCatagory").on("change", function () {
            var n = t(".select_category option:selected").val(), a = t(".select_year option:selected").val();
            history.pushState("", "", "/blog/"), n.length > 1 && e("category_filter", n), a.length > 1 && e("year_filter", a), jQuery.ajax({
                url: window.location.href,
                type: "POST",
                success: function (e) {
                    var n = t(e), a = n.find(".blog_wrapper").html(), o = t(".current-lang").text(), i = "";
                    i = "RU" == o ? "Извините за данным фильтром ничего не найдено" : "UA" == o ? "Вибачте за даним фільтром нічого не знайдено" : "Sorry, nothing has been found for this filter", a.length < 100 ? t(".blog_wrapper").html(i) : (t(".blog_wrapper").html(n.find(".blog_wrapper").html()), t(".pagination_wrapper").html(n.find(".pagination_wrapper").html()), _functions.initWatchers(), _functions.initSwiper())
                }
            })
        }), document.addEventListener("wpcf7mailsent", function (e) {
            var a = t("#appointment-form").data("id"), o = t("#email-form").data("id"), i = t("#order-form").data("id");
            if (a == e.detail.contactFormId) _functions.closePopup(), _functions.openPopup(t('.popup-content[data-rel="3"]')); else if (o == e.detail.contactFormId) {
                var r = d("account_id"), s = "", u = e.detail.inputs;
                r = r || "";
                for (var l = 0; l < u.length; l++) "your-email" == u[l].name && u[l].value && (s = u[l].value);
                (c = JSON.parse(r)).product.length > 0 ? (jQuery.ajax({
                    url: myajax.url,
                    dataType: "json",
                    data: {action: "client_mail", mail: s, posts: r},
                    type: "POST",
                    success: function (t) {
                    }
                }), _functions.closePopup(), _functions.openPopup(t('.popup-content[data-rel="11"]'))) : (_functions.closePopup(), _functions.openPopup(t('.popup-content[data-rel="22"]')))
            } else if ("348" == e.detail.contactFormId) {
                u = e.detail.inputs;
                var p = "", m = "";
                for (l = 0; l < u.length; l++) "first_name" == u[l].name ? u[l].value && (p = u[l].value) : "message" == u[l].name && u[l].value && (m = u[l].value);
                jQuery.ajax({
                    url: myajax.url,
                    data: {action: "insert_testimonial", tesimonial_name: p, testimonial_text: m},
                    type: "POST",
                    success: function (e) {
                        _functions.closePopup(), _functions.openPopup(t('.popup-content[data-rel="8"]'))
                    }
                })
            } else if ("563" == e.detail.contactFormId) console.log("this"), _functions.closePopup(), _functions.openPopup(t('.popup-content[data-rel="3"]')); else if (i == e.detail.contactFormId) _functions.closePopup(), _functions.openPopup(t('.popup-content[data-rel="3"]')); else if ("538" == e.detail.contactFormId) {
                _functions.closePopup(), _functions.openPopup(t('.popup-content[data-rel="9"]'));
                var f = t(".fitting-wrap"), h = t("#datepicker").datepicker("getDate"),
                    g = (t.datepicker.formatDate("dd.mm.yy", h), t.datepicker.formatDate("yymmdd", h)),
                    v = f.find("input[name=first_name]").val(), y = f.find("input[name=email]").val(),
                    _ = f.find("input[name=tel]").val(), b = f.find("input[name=time]:checked").val(),
                    x = f.find("select[name=select_name] option:selected").text();
                t("#name-output").html(v), t("#mail-output").html(y), t("#phone-output").html(_), t("#reminder-output").html(" " + x + " "), jQuery.ajax({
                    url: myajax.url,
                    data: {
                        action: "insert_post",
                        fitting_date: g,
                        fitting_name: v,
                        fitting_email: y,
                        fitting_time: b,
                        fitting_reminder: x,
                        fitting_phone: _
                    },
                    type: "POST",
                    success: function (t) {
                        n()
                    }
                });
                r = d("account_id"), s = "", u = e.detail.inputs;
                r = r || "", jQuery.ajax({
                    url: myajax.url,
                    dataType: "json",
                    data: {
                        action: "reserve_client_mail",
                        mail: y,
                        posts: r,
                        phone: _,
                        name: v,
                        time: b,
                        reminder: x,
                        date: g
                    },
                    type: "POST",
                    success: function (t) {
                    }
                })
            }
        });
        var a = ["2018-01-01"];
        if (t("#datepicker").length && t("#datepicker").datepicker({
            firstDay: 1, minDate: 0, 
            onSelect: function (e) {
                n(), i.date = e, t("#date-output").html(i.date);
                setBlackFridayDays();
            }, 
            beforeShowDay: function (t) {
                var e = jQuery.datepicker.formatDate("yy-mm-dd", t);
                return [-1 == a.indexOf(e)]
            },
            onChangeMonthYear: setBlackFridayDays,
        }), t("#fitting-wrap").length && t("#datepicker").length) {
            var o = t("#datepicker").datepicker("getDate"), i = {
                date: t.datepicker.formatDate("dd.mm.yy", o),
                reminder: t("#reminder-select option:selected").text()
            };
            t("#date-output").html(i.date), t("#reminder-output").html(i.reminder)
        }

        function r(t, e, n) {
            var a = new Date;
            a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
            var o = "expires=" + a.toUTCString();
            document.cookie = t + "=" + e + "; " + o + ";path=/;"
        }

        function d(t) {
            var e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : void 0
        }

        if (t(".page-template-sign-up-fitting .wpcf7-submit").click(function (e) {
            var n = t("input[name='time']:checked").val(), a = t(".ui-state-active").text(),
                o = t(".ui-datepicker-month").text();
            t(".input_time").val(n), t(".input_date").val(a + " " + o);
            var i = t("input:radio[name=time]"), r = window.location.href.split("/")[3];
            !1 === i.is(":checked") ? ("en" == r ? t(".requered_phone").html('<p>Please specify the hour to record</p><div class="bs-xs-25"></div>') : "ua" == r ? t(".requered_phone").html('<p>Будь-ласка вкажіть годину для запису</p><div class="bs-xs-25"></div>') : t(".requered_phone").html('<p>Пожалуйста укажите час для записи</p><div class="bs-xs-25"></div>'), e.preventDefault()) : t(".requered_phone").html("")
        }), t("body").on("click", ".product-button", function () {
            t(".wishlist-button").not(".fav-button") && t(".wishlist-button").addClass("fav-button").addClass("action"), t(".wishlist-button").hasClass("action") && (t(".wishlist-button").removeClass("action"), setTimeout(function () {
                t(".wishlist-button").addClass("action")
            }, 300));
            var e = d("account_id"), n = +new Date, a = t(this).data("post");
            if (void 0 !== e && e) {
                if (1 != (s = JSON.parse(e)).product.includes(a)) s.product.push(a), r("account_id", s = JSON.stringify(s), 365); else if (t(this).hasClass("icon") && 1 == s.product.includes(a)) {
                    var o = s.product.indexOf(a);
                    o > -1 && s.product.splice(o, 1), r("account_id", s = JSON.stringify(s), 365);
                    var i = d("account_id");
                    0 == (i = JSON.parse(i)).product.length && (t(".wishlist-button").removeClass("fav-button"), t(".wishlist-button").removeClass("action"))
                }
            } else {
                var s, c = [];
                c.push(a), (s = {}).account = n, s.product = c, r("account_id", s = JSON.stringify(s), 365)
            }
        }), t("body").on("click", ".delete-button", function () {
            var e = JSON.parse(d("account_id")), n = t(this).data("post");
            if (1 == e.product.includes(n)) {
                var a = e.product.indexOf(n);
                a > -1 && e.product.splice(a, 1), e.product < 1 && t(".show-button").addClass("hidden"), r("account_id", e = JSON.stringify(e), 365)
            }
        }), t("body").on("click", ".show-button", function () {
            var e = window.location + "?id=" + t(".show-button").data("link"),
                n = (document.createElement("P"), document.activeElement, document.getElementById("copyLink"));
            n.innerHTML = e;
            var a = document.createRange();
            a.selectNode(n), window.getSelection().addRange(a);
            try {
                document.execCommand("copy");
                t(".to-show-button").css("display", "none"), t(".after-show-button").css("display", "block"), setTimeout(function () {
                    t(".after-show-button").css("display", "none"), t(".to-show-button").css("display", "block")
                }, 2500)
            } catch (t) {
                console.log("Oops, unable to copy")
            }
            window.getSelection().removeAllRanges()
        }), t('input[type="tel"]').on("focus", function () {
            t(this).inputmask({mask: "+38(999)-999-99-99"})
        }), t("body").on("click", ".order-button", function () {
            var e = t(this).data("id"), n = t(this).data("link");
            t("#order-form").find("input[name=your-product]").val(e), t("#order-form").find("input[name=product-link]").val(n)
        }), t("body").on("click", ".product-fit-button", function () {
            var e = t(".order-button").data("id"), n = t(".order-button").data("link");
            console.log(e, n), t("#appointment-form").find("input[name=your-product]").val(e), t("#appointment-form").find("input[name=product-link]").val(n)
        }), t("body").hasClass("paged") && t("html,body").animate({scrollTop: t(".post-list-content").offset().top - t("header").height() + 100}, 1800), t(".more-text .close-more").on("click", function (e) {
            e.preventDefault(), t(this).parents(".more-text").toggleClass("open-more-text"), t(this).find(".hide-text, .showed-text").toggle(), t(this).parents().find(".simple-text").slideToggle(500)
        }), t("#email-form").length) {
            var s = d("account_id"), c = s ? JSON.parse(s) : "";
            c && c.product.length > 0 && t('input[name="product-user"]').val(c.product.join(", "))
        }
        navigator.userAgent.indexOf("Firefox") >= 0 && t("body").addClass("firefox"), navigator.userAgent.indexOf("Edge") >= 0 && t("body").addClass("edge"), navigator.userAgent.indexOf("Trident") >= 0 && t("body").addClass("ie"), navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.indexOf("Chrome") < 0 && t("body").addClass("safari"), navigator.userAgent.indexOf("Chrome") >= 0 && navigator.userAgent.indexOf("Edge") < 0 && t("body").addClass("chrome")
    });

    function setBlackFridayDays() {
        console.log('Fired');
        setTimeout(function(){
        document.querySelectorAll('td[data-month="10"][data-year="2020"]').forEach(function (tdElement) {
            var bfridayDays = ['23', '24', '25', '26', '27'];
            var dayOfMonth = tdElement.innerText;

            if (bfridayDays.indexOf(dayOfMonth) !== -1) {
                tdElement.classList.add('date-black-friday');
                tdElement.querySelector('a').dataset.title = 'Черная пятница';
            }
        });
        }, 10);
        
        document.querySelectorAll('.ui-corner-all[data-event="click"]:not(.ui-state-disabled)').forEach(function(item){item.removeAttribute('title')});
    }

    window.addEventListener('load', setBlackFridayDays);