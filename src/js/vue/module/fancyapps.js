/*global Fancybox*/
const fancyApps = {
    methods: {
        /**
         * Init Fancybox
         * 
         * @returns {undefined}
         */
        initFancyapps: function() {
            let lang = this.$t('lang');
            let selector = '[data-fancybox], a[href$=".jpg"]';
            let options = {
                groupAll: true,
                idle: false
            };

            if (typeof Fancybox.l10n[lang] !== 'undefined') {
                options['l10n'] = Fancybox.l10n[lang];
            }

            Fancybox.bind(selector, options);
        }
    }
};

export default fancyApps;
