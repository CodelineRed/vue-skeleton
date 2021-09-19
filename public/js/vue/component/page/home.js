define(["exports","../../module/cssua-monitor","../../module/image-lazyload","../../module/slider"],(function(e,s,o,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s=n(s),o=n(o),a=n(a);var i={template:'<div class="row"> <div class="col-12"> <div class="row"> <div class="col-12 pb-5 text-center"> <h1> {{ $t("app") }} - {{ $t("author") }}&nbsp;&nbsp; <a href="https://github.com/InsanityMeetsHH/vue-skeleton" target="_blank" data-toggle="tooltip" data-placement="bottom" title="GitHub"><font-awesome-icon :icon="[\'fab\', \'github\']" class="fa-inverse" /></a> </h1> </div> </div> <div class="row text-center justify-content-center"> <div class="col-12"> <span style="font-size: 1.75rem;">{{ $t("included") }}</span> </div> <div class="col-12 col-md-8 pb-5"> \x3c!-- eslint-disable-next-line vue/html-quotes --\x3e <div class="slider slider-brands" data-slick=\'{"responsive": [{"breakpoint": 575,"settings": {"slidesToShow": 2, "slidesToScroll": 1}},{"breakpoint": 991, "settings": {"slidesToShow": 3, "slidesToScroll": 1}}]}\'> <div class="slider-item"> \x3c!-- Vue.js Icon --\x3e <font-awesome-layers class="fa-10x"> <font-awesome-icon :icon="[\'far\', \'square\']"></font-awesome-icon> <font-awesome-icon :icon="[\'fab\', \'vuejs\']" class="fa-inverse" transform="shrink-6"></font-awesome-icon> </font-awesome-layers> <a href="https://vuejs.org/" target="_blank" class="d-block label">{{ $t("vuejs") }}</a> </div> <div class="slider-item"> \x3c!-- Bootstrap Icon --\x3e <font-awesome-layers class="fa-10x"> <font-awesome-icon :icon="[\'far\', \'square\']"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'bold\']" class="fa-inverse" transform="shrink-6"></font-awesome-icon> </font-awesome-layers> <a href="https://getbootstrap.com/" target="_blank" class="d-block label">{{ $t("bootstrap") }}</a> </div> <div class="slider-item"> \x3c!-- Fontawesom Icon --\x3e <font-awesome-layers class="fa-10x"> <font-awesome-icon :icon="[\'far\', \'square\']"></font-awesome-icon> <font-awesome-icon :icon="[\'fab\', \'font-awesome-flag\']" class="fa-inverse" transform="shrink-6"></font-awesome-icon> </font-awesome-layers> <a href="https://fontawesome.com/" target="_blank" class="d-block label">{{ $t("fontawesome") }}</a> </div> <div class="slider-item"> \x3c!-- Slick Carousel Icon --\x3e <font-awesome-layers class="fa-10x"> <font-awesome-icon :icon="[\'fas\', \'square\']"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'image\']" class="fa-inverse" transform="shrink-7"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'chevron-left\']" class="fa-inverse" transform="shrink-13 left-6"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'chevron-right\']" class="fa-inverse" transform="shrink-13 right-6"></font-awesome-icon> </font-awesome-layers> <a href="http://kenwheeler.github.io/slick/" target="_blank" class="d-block label">{{ $t("slick") }}</a> </div> <div class="slider-item"> \x3c!-- Lazyload Image Icon --\x3e <font-awesome-layers class="fa-10x"> <font-awesome-icon :icon="[\'fas\', \'square\']"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'image\']" class="fa-inverse" transform="shrink-4"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'sync\']" transform="shrink-14 up-2.5 right-4"></font-awesome-icon> </font-awesome-layers> <a href="https://www.andreaverlicchi.eu/lazyload/" target="_blank" class="d-block label">{{ $t("lazyload") }}</a> </div> <div class="slider-item"> \x3c!-- CSS User Agent Icon --\x3e <font-awesome-layers class="fa-10x"> <font-awesome-icon :icon="[\'fas\', \'square\']"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'user-secret\']" class="fa-inverse" transform="shrink-4"></font-awesome-icon> <font-awesome-icon :icon="[\'fab\', \'css3\']" transform="shrink-14 down-4 right-3.5"></font-awesome-icon> <font-awesome-icon :icon="[\'fab\', \'html5\']" transform="shrink-14 down-4 left-3.5"></font-awesome-icon> </font-awesome-layers> <a href="https://www.npmjs.com/package/cssuseragent" target="_blank" class="d-block label">{{ $t("cssua") }}</a> </div> <div class="slider-item"> \x3c!-- Cookieconsent Icon --\x3e <font-awesome-layers class="fa-10x"> <font-awesome-icon :icon="[\'fas\', \'circle\']"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'circle\']" class="fa-inverse" transform="shrink-15 up-4 left-4"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'circle\']" class="fa-inverse" transform="shrink-15 down-0 left-5.5"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'circle\']" class="fa-inverse" transform="shrink-15 down-4.2 right-4"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'circle\']" class="fa-inverse" transform="shrink-13 down-4 left-2"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'circle\']" class="fa-inverse" transform="shrink-13"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'circle\']" class="fa-inverse" transform="shrink-14 right-5"></font-awesome-icon> <font-awesome-icon :icon="[\'fas\', \'circle\']" class="fa-inverse" transform="shrink-14 up-5"></font-awesome-icon> </font-awesome-layers> <a href="https://github.com/insites/cookieconsent" target="_blank" class="d-block label">{{ $t("cookieconsent") }}</a> </div> </div> </div> <div class="col-12 pb-5"> <div class="row"> <div class="col-12 col-md-6 pb-5 pb-md-0"> <h3 class="pb-2"> {{ $t("lazyload-example") }} </h3> <img src="img/slick/ajax-loader.gif" data-src="https://via.placeholder.com/266x140/2E97BF/212121?text=LazyLoad%20Image" alt="image" class="img-fluid lazy"> </div> <div class="col-12 col-md-6"> <h3 class="pb-2"> {{ $t("cssua-monitor") }} </h3> <div class="cssua-monitor"></div> </div> </div> </div> </div> </div> </div>',mixins:[s.default,o.default,a.default],mounted:function(){jQuery('[data-toggle="tooltip"]').tooltip(),this.initCssuaMonitor(),this.initImageLazyLoad(),this.initSlider()}};e.default=i}));