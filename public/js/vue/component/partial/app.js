define(["exports"],(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={template:'<component :is="layout" ref="layout" />',data:function(){return{defaultLayout:"default"}},computed:{layout(){return"l-"+(this.$route.meta.layout||this.defaultLayout)}},mounted:function(){jQuery("html").attr("lang",this.$t("lang")),jQuery("html").removeClass("no-js")}};t.default=e}));