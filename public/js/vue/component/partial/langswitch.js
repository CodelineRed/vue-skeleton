define(["exports","../../method/cookie-consent","../../method/slider"],(function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=o(t),n=o(n);var a={template:'<div class="col-auto"><div class="btn-group" :class="getButtonClass()"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><font-awesome-icon :icon="[&#39;fas&#39;, &#39;globe&#39;]"></font-awesome-icon></button><div class="dropdown-menu"><a v-for="lang in languages" :key="lang" class="dropdown-item" onclick="javascript:return false;" href="#" @click="changeLang(lang)">{{ $t("lang-" + lang)&nbsp;}}</a></div></div></div>',mixins:[t.default,n.default],props:{drop:{type:String,default:"up"}},data:function(){return{currentLocale:window.localStorage.getItem("currentLocale")?window.localStorage.getItem("currentLocale"):"en",fallbackLocale:"en",languages:["en","de"]}},watch:{currentLocale(e){window.localStorage.currentLocale=e}},mounted:function(){this.changeLang(this.currentLocale)},methods:{changeLang:function(e){let t=this;t.$i18n.locale=e,localStorage.currentLocale=e,setTimeout((function(){t.initCookieConsent(),t.initSlider()}),100)},getButtonClass:function(){return"drop"+this.drop}}};e.default=a}));