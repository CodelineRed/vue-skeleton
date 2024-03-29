const cookieConsent = {
    methods: {
        /**
         * Init cookie consent look and behavior
         *  
         * @returns {undefined}
         */
        initCookieConsent: function() {
            (function($, $this) {
                $('.cc-window, .cc-revoke').remove();
                window.cookieconsent.initialise({
                    window: '<div role="dialog" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window w-100 {{classes}}">'
                            + '<div class="container"><div class="row align-items-center">{{children}}</div></div></div>',
                    elements: {
                        messagelink: '<div class="col-12 col-sm-6 col-lg-8 pb-3 pb-sm-0"><span id="cookieconsent:desc" class="cc-message">{{message}} ' 
                                + '<a aria-label="' + $this.$t('cl-message-link') + '" tabindex="0" class="cc-link" href="{{href}}" data-bs-toggle="modal" data-bs-target="#cookie-policy">{{link}}</a></span></div>'
                    },
                    compliance: {
                        info: '<div class="cc-compliance cc-info col-12 col-sm-6 col-lg-4">{{dismiss}}</div>',
                        'opt-in':'<div class="cc-compliance cc-opt-in col-12 col-sm-6 col-lg-4">{{dismiss}}{{allow}}</div>',
                        'opt-out': '<div class="cc-compliance cc-opt-out col-12 col-sm-6 col-lg-4">{{deny}}{{dismiss}}</div>'
                    },
                    theme: 'classic',
                    type: 'info',
                    content: {
                        header: $this.$t('cl-header'),
                        message: $this.$t('cl-message'),
                        allow: $this.$t('cl-allow'),
                        dismiss: $this.$t('cl-dismiss'),
                        deny: $this.$t('cl-deny'),
                        link: $this.$t('cl-link'),
                        policy: $this.$t('cl-policy'),
                        href: $this.$t('cl-href')
                    },
                    onInitialise: function(status) {
                        let type = this.options.type;
                        let didConsent = this.hasConsented();

                        if (type === 'opt-in' && didConsent) {
                            // enable cookies
                        }

                        if (type === 'opt-out' && !didConsent) {
                            // disable cookies
                        }

                        // set .cc-window at the end of body to disable bottom margin on .container
                        setTimeout(function() {
                            $('body').append($('.cc-window'));
                        }, 1000);
                    },
                    onPopupOpen: function() {
                        // do something
                    },
                    onPopupClose: function() {
                        // do something
                    },
                    onStatusChange: function(status, chosenBefore) {
                        let type = this.options.type;
                        let didConsent = this.hasConsented();

                        if (type === 'opt-in' && didConsent) {
                            // enable cookies
                        }

                        if (type ==='opt-out' && !didConsent) {
                            // disable cookies
                        }

                        // set .cc-window at the end of body to disable bottom margin on .container
                        setTimeout(function() {
                            $('body').append($('.cc-window'));
                        }, 1000);
                    },
                    onRevokeChoice: function() {
                        let type = this.options.type;

                        if (type === 'opt-in') {
                            // disable cookies
                        }

                        if (type === 'opt-out') {
                            // enable cookies
                        }

                        // set .cc-window at the top of body to enable bottom margin on .container
                        $('body').prepend($('.cc-window'));
                    }
                });
            })(jQuery, this);
        }
    }
};

export default cookieConsent;
