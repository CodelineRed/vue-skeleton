<script>
    import cssuaMonitor from '../../module/cssua-monitor';
    import fancyApps from '../../module/fancyapps';
    import imageLazyLoad from '../../module/image-lazyload';
    import slider from '../../module/slider';

    export default {
        mixins: [cssuaMonitor, fancyApps, imageLazyLoad, slider],
        mounted: function() {
            // initialize all tooltips
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')); // eslint-disable-line array-bracket-newline
            var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });

            this.initCssuaMonitor();
            this.initFancyapps();
            this.initImageLazyLoad();
            this.initSlider();
        }
    };
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-12 pb-5 text-center">
                    <h1>
                        {{ $t("app") }} - {{ $t("author") }}
                        <a href="https://github.com/CodelineRed/vue-skeleton" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub"><fa icon="fa-brands fa-github" class="fa-inverse" /></a>
                    </h1>
                </div>
            </div>
            <div class="row text-center justify-content-center">
                <div class="col-12 mb-3">
                    <span style="font-size: 1.75rem;">{{ $t("included") }}</span>
                </div>
                <div class="col-12 col-md-8 pb-5">
                    <!-- eslint-disable-next-line vue/html-quotes -->
                    <div class="slider slider-brands" data-slick='{"responsive": [{"breakpoint": 575,"settings": {"slidesToShow": 2, "slidesToScroll": 1}},{"breakpoint": 991, "settings": {"slidesToShow": 3, "slidesToScroll": 1}}]}'>
                        <div class="slider-item">
                            <!-- Vue.js Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-regular fa-square"></fa>
                                <fa icon="fa-brands fa-vuejs" class="fa-inverse" transform="shrink-6"></fa>
                            </fal>
                            <a href="https://vuejs.org/" target="_blank" class="d-block label">{{ $t("vuejs") }}</a>
                        </div>
                        <div class="slider-item">
                            <!-- Bootstrap Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-regular fa-square"></fa>
                                <fa icon="fa-brands fa-bootstrap" class="fa-inverse" transform="left-1 shrink-7"></fa>
                            </fal>
                            <a href="https://getbootstrap.com/" target="_blank" class="d-block label">{{ $t("bootstrap") }}</a>
                        </div>
                        <div class="slider-item">
                            <!-- Fontawesom Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-regular fa-square"></fa>
                                <fa icon="fa-brands fa-font-awesome-flag" class="fa-inverse" transform="shrink-6"></fa>
                            </fal>
                            <a href="https://fontawesome.com/" target="_blank" class="d-block label">{{ $t("fontawesome") }}</a>
                        </div>
                        <div class="slider-item">
                            <!-- Slick Carousel Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-solid fa-square"></fa>
                                <fa icon="fa-solid fa-image" class="fa-inverse" transform="shrink-7"></fa>
                                <fa icon="fa-solid fa-chevron-left" class="fa-inverse" transform="shrink-13 left-6"></fa>
                                <fa icon="fa-solid fa-chevron-right" class="fa-inverse" transform="shrink-13 right-6"></fa>
                            </fal>
                            <a href="http://kenwheeler.github.io/slick/" target="_blank" class="d-block label">{{ $t("slick") }}</a>
                        </div>
                        <div class="slider-item">
                            <!-- Lazyload Image Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-solid fa-square"></fa>
                                <fa icon="fa-solid fa-image" class="fa-inverse" transform="shrink-4"></fa>
                                <fa icon="fa-solid fa-sync" transform="shrink-12 up-2.75 right-3.8"></fa>
                            </fal>
                            <a href="https://www.andreaverlicchi.eu/lazyload/" target="_blank" class="d-block label">{{ $t("lazyload") }}</a>
                        </div>
                        <div class="slider-item">
                            <!-- CSS User Agent Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-solid fa-square"></fa>
                                <fa icon="fa-solid fa-user-secret" class="fa-inverse" transform="shrink-4"></fa>
                                <fa icon="fa-brands fa-css3" transform="shrink-14 down-4 right-3.5"></fa>
                                <fa icon="fa-brands fa-html5" transform="shrink-14 down-4 left-3.5"></fa>
                            </fal>
                            <a href="https://www.npmjs.com/package/cssuseragent" target="_blank" class="d-block label">{{ $t("cssua") }}</a>
                        </div>
                        <div class="slider-item">
                            <!-- Cookieconsent Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-solid fa-circle"></fa>
                                <fa icon="fa-solid fa-circle" class="fa-inverse" transform="shrink-15 up-4 left-4"></fa>
                                <fa icon="fa-solid fa-circle" class="fa-inverse" transform="shrink-15 down-0 left-5.5"></fa>
                                <fa icon="fa-solid fa-circle" class="fa-inverse" transform="shrink-15 down-4.2 right-4"></fa>
                                <fa icon="fa-solid fa-circle" class="fa-inverse" transform="shrink-13 down-4 left-2"></fa>
                                <fa icon="fa-solid fa-circle" class="fa-inverse" transform="shrink-13"></fa>
                                <fa icon="fa-solid fa-circle" class="fa-inverse" transform="shrink-14 right-5"></fa>
                                <fa icon="fa-solid fa-circle" class="fa-inverse" transform="shrink-14 up-5"></fa>
                            </fal>
                            <a href="https://github.com/insites/cookieconsent" target="_blank" class="d-block label">{{ $t("cookieconsent") }}</a>
                        </div>
                        <div class="slider-item">
                            <!-- Fancyapps Icon -->
                            <fal class="fa-10x">
                                <fa icon="fa-regular fa-square"></fa>
                                <fa icon="fa-brands fa-black-tie" class="fa-inverse" transform="shrink-6"></fa>
                            </fal>
                            <a href="https://fancyapps.com/" target="_blank" class="d-block label">{{ $t("fancyapps") }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 pb-5">
                    <div class="row">
                        <div class="col-12 col-md-6 pb-5 pb-md-0">
                            <!-- Ultimate Question of Life, the Universe, and Everything -->
                            <h3 class="pb-2">
                                {{ $t("lazyload-example") }}
                            </h3>
                            <a href="https://picsum.photos/id/82/1920/1080" data-fancybox="demo" :data-caption="$t('gallery-caption-1')">
                                <img :src="getImagePlaceholder(798, 420)" :data-src="'https://dummyimage.com/266x140/2e2e2e/ffffff?text=' + $t('open-gallery')" alt="image" class="img-fluid lazy">
                            </a>
                            <div class="d-none">
                                <a href="https://picsum.photos/id/64/1920/1080" data-fancybox="demo" :data-caption="$t('gallery-caption-2')">
                                    <img :src="'https://dummyimage.com/266x140/1a0e0e/ffffff?text=' + $t('image') + '%202'" alt="image">
                                </a>
                                <a href="https://picsum.photos/id/120/1920/1080" data-fancybox="demo" :data-caption="$t('gallery-caption-3')">
                                    <img :src="'https://dummyimage.com/266x140/0e1a12/ffffff?text=' + $t('image') + '%203'" alt="image">
                                </a>
                                <a href="https://picsum.photos/id/147/1920/1080" data-fancybox="demo" :data-caption="$t('gallery-caption-4')">
                                    <img :src="'https://dummyimage.com/266x140/0e0e1a/ffffff?text=' + $t('image') + '%204'" alt="image">
                                </a>
                                <a href="https://picsum.photos/id/190/1920/1080" data-fancybox="demo" :data-caption="$t('gallery-caption-5')">
                                    <img :src="'https://dummyimage.com/266x140/2a1b2f/ffffff?text=' + $t('image') + '%205'" alt="image">
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <h3 class="pb-2">
                                {{ $t("cssua-monitor") }}
                            </h3>
                            <div class="cssua-monitor"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
