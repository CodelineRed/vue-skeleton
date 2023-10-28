/*global LazyLoad*/

const imageLazyLoad = {
    methods: {
        /**
         * Loads all lazyload images instantly
         * 
         * @returns {undefined}
         */
        forceImageLoad: function() {
            (function($) {
                $('img[data-src]:not(.loaded)').each(function() {
                    $(this).attr('src', $(this).data('src'));
                    $(this).addClass('loaded');
                });
            })(jQuery);
        },

        /**
         * Returns an empty SVG in given width and height
         * 
         * @returns {string}
         */
        getImagePlaceholder: function(width, height) {
            return 'data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 ' + width + ' ' + height + '\'%3e%3c/svg%3e';
        },

        /**
         * Init image lazy load
         * 
         * @returns {undefined}
         */
        initImageLazyLoad: function() {
            let lazyLoad = new LazyLoad({
                //elements_selector: '.lazyload' // eslint-disable-line camelcase
            });
        }
    }
};

export default imageLazyLoad;
