define(["exports"],(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{initCookieConsent:function(){var e,i;e=jQuery,i=this,e(".cc-window, .cc-revoke").remove(),window.cookieconsent.initialise({window:'<div role="dialog" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window w-100 {{classes}}"><div class="container"><div class="row align-items-center">{{children}}</div></div></div>',elements:{messagelink:'<div class="col-12 col-sm-6 col-lg-8 pb-3 pb-sm-0"><span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="'+i.$t("cl-message-link")+'" tabindex="0" class="cc-link" href="{{href}}" data-bs-toggle="modal" data-bs-target="#cookie-policy">{{link}}</a></span></div>'},compliance:{info:'<div class="cc-compliance col-12 col-sm-6 col-lg-4">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance col-12 col-sm-6 col-lg-4">{{dismiss}}{{allow}}</div>',"opt-out":'<div class="cc-compliance col-12 col-sm-6 col-lg-4">{{deny}}{{dismiss}}</div>'},theme:"classic",type:"info",content:{header:i.$t("cl-header"),message:i.$t("cl-message"),allow:i.$t("cl-allow"),dismiss:i.$t("cl-dismiss"),deny:i.$t("cl-deny"),link:i.$t("cl-link"),policy:i.$t("cl-policy"),href:i.$t("cl-href")},onInitialise:function(i){this.options.type,this.hasConsented(),setTimeout((function(){e("body").append(e(".cc-window"))}),1e3)},onPopupOpen:function(){},onPopupClose:function(){},onStatusChange:function(i,o){this.options.type,this.hasConsented(),setTimeout((function(){e("body").append(e(".cc-window"))}),1e3)},onRevokeChoice:function(){this.options.type,e("body").prepend(e(".cc-window"))}})}}};e.default=i}));