(function ($) {
    'use strict';
    var _target="#backToTop";
    function BackToTop(options) {
        var _defaults = {
            speed: 400,
            _top: 0,
            _imges:'back.png'
        }
        this.settings = $.extend({}, _defaults, options);
        this._init.apply(this);
    }
    BackToTop.prototype = {
        _init: function () {
            this.createStyle();
            this.showOrHide();
            this.goToBack();
        },
        showOrHide: function showOrHide() {
            var _self = this, _document = document;

            $(_document).scroll(function () {
                $(document).scrollTop() > 10? $(_target).fadeIn() :
                    $(_target).fadeOut();
            });
        },
        goToBack: function goToBack() {
            var _self = this;
            $('body').on('click', _target, function () {
                $('html, body').animate({
                    scrollTop: _self.settings._top
                }, _self.settings.speed);
            })
        },
        createStyle: function createStyle() {
            var _self = this;
            var str = '<div id="backToTop">' +
                '<img class="backToTop" src="'+this.settings._imges+'">'+'</div>';
            $("div").data("backTops", str);
            $("body").append($("div").data("backTops"));
            $("#backToTop").css({'top': '90%', 'position': 'fixed', 'left': '90%'});
        },
    };
    BackToTop.prototype.init = BackToTop.prototype;
    window._initPlug = BackToTop;
}(jQuery));