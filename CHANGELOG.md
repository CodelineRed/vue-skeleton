# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2024-11-01
### Added
- type = module in [`package.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/package.json)

### Changed
- [`src/app/is-env.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/is-env.js)
- [`src/app/lint.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/lint.js)
- [`npm-postinstall.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/npm-postinstall.js)
- [`.gitignore`](https://github.com/CodelineRed/vue-skeleton/blob/main/.gitignore)
- `lintAll` to `lint` in [`gulpfile.mjs`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.mjs)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- chalk 4.1.2 to 5.3.0
- del 6.1.1 to 8.0.0
- gulp-autoprefixer 8.0.0 to 9.0.0
- gulp-favicons 3.0.0 to 4.0.1
- gulp-imagemin 7.1.0 to 9.1.0
- node 16 to 18.17

### Removed
- src/app/gulpfile.dist.json and replaced with [`src/app/gulpfile-config.dist.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/gulpfile-config.dist.js)
- src/app/import-lint.json and replaced with [`src/app/import-lint.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/import-lint.js)
- src/app/js-lint.json and replaced with [`src/app/js-lint.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/js-lint.js)
- src/app/scss-lint.json and replaced with [`src/app/scss-lint.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/scss-lint.js)
- src/app/vue-lint.json and replaced with [`src/app/vue-lint.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/vue-lint.js)
- gulpfile.js and replaced with [`gulpfile.mjs`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.mjs)

## [2.3.0] - 2024-10-31
### Changed
- @babel/core 7.23.3 to 7.26.0
- @babel/plugin-transform-modules-amd 7.23.3 to 7.25.9
- @fancyapps/ui 5.0.28 to 5.0.36
- @fortawesome/fontawesome-free 6.4.2 to 6.6.0
- @fortawesome/fontawesome-svg-core 6.4.2 to 6.6.0
- @fortawesome/free-brands-svg-icons 6.4.2 to 6.6.0
- @fortawesome/free-regular-svg-icons 6.4.2 to 6.6.0
- @fortawesome/free-solid-svg-icons 6.4.2 to 6.6.0
- @fortawesome/vue-fontawesome 3.0.5 to 3.0.8
- bootstrap 5.3.2 to 5.3.3
- browser-sync 2.29.3 to 3.0.3
- eslint-plugin-import 2.29.0 to 2.31.0
- eslint-plugin-vue 9.18.1 to 9.30.0
- gulp-vue-single-file-component 1.2.8 to 1.2.12
- moment 2.29.4 to 2.30.1
- requirejs 2.3.6 to 2.3.7
- sass": "~1.64 to 1.77.6
- vanilla-lazyload 17.8.5 to 19.1.3
- vue 3.3.8 to 3.5.12
- vue-i18n 9.7.0 to 10.0.4
- vue-router 4.2.5 to 4.4.5

## [2.2.0] - 2023-11-19
### Added
- [`social-media.jpg`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/img/social-media.jpg)
- all texts to `de` in [`app/i18n-locales.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/i18n-locales.js)
- `mb-3` to "included" in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/page/home.vue)

### Changed
- [`app/routes.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/routes.js)
- Bootstrap icon in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/page/home.vue)
- dummy image URL in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/page/home.vue)
- template in [`partial/theme-switcher.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/partial/theme-switcher.vue)

### Fixed
- Lazyload Icon in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/page/home.vue)
- spacing between globe and chevron in [`partial/langswitch.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/partial/langswitch.vue)
- footer margin bottom in [`module/cookieconsent.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/module/cookieconsent.scss)

## [2.1.0] - 2023-10-29
### Added
- Bootstrap theme in [`public/index.html`](https://github.com/CodelineRed/vue-skeleton/blob/main/public/index.html)
- Moon, Sun and Black Tie in [`app/fontawesome.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/fontawesome.js)
- Gallery and Cookie banner text in [`app/i18n-locales.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/i18n-locales.js)
- Fancyapps example in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/page/home.vue)
- theme cookie in [`partial/modal-cookie-policy.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/partial/modal-cookie-policy.vue)
- Theme Switcher in [`partial/naviagation.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/partial/naviagation.vue)
- [`partial/theme-switcher.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/partial/theme-switcher.vue)
- [`module/fancyapps.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/module/fancyapps.js)
- `getImagePlaceholder()` in [`module/image-lazyload.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/module/image-lazyload.js)
- variables-dark in [`lib/bootstrap.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/lib/bootstrap.scss)
- FA Pro imports in [`lib/fontawesome.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/lib/fontawesome.scss)
- [`module/theme-switcher.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/module/theme-switcher.scss)
- [`plugin/fancyapps.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/plugin/fancyapps.scss)
- Fancyapps in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- @fancyapps/ui 5.0.24

### Changed
- [`app/vue-lint.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/vue-lint.json)
- compliance in [`module/cookie-consent.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/module/cookie-consent.js)
- [`js/scripts.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/scripts.js)
- [`module/cookieconsent.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/module/cookieconsent.scss)
- [`module/slider.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/module/slider.scss)
- [`scss/_variables.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/_variables.scss)
- [`scss/styles.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/styles.scss)
- PHP port from 8080 to 80 in [`docker-compose.yml`](https://github.com/CodelineRed/vue-skeleton/blob/main/docker-compose.yml)
- `favicon()` in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- @babel/core 7.20.2 to 7.23.2
- @babel/plugin-transform-modules-amd 7.19.6 to 7.23.0
- @fortawesome/fontawesome-free 6.2.1 to 6.4.2
- @fortawesome/fontawesome-svg-core 6.2.1 to 6.4.2
- @fortawesome/free-brands-svg-icons 6.2.1 to 6.4.2
- @fortawesome/free-regular-svg-icons 6.2.1 to 6.4.2
- @fortawesome/free-solid-svg-icons 6.2.1 to 6.4.2
- @fortawesome/vue-fontawesome 6.2.1 to 6.4.2
- bootstrap 5.2.3 to 5.3.2
- browser-sync 2.27.10 to 2.29.3
- eslint-plugin-import 2.26.0 to 2.29.0
- eslint-plugin-vue 7.20.0 to 9.18.1
- gulp-vue-single-file-component 1.2.5 to 1.2.8
- jquery 3.6.2 to 3.7.1
- sass 1.57.0 to 1.64.2
- vanilla-lazyload 17.8.3 to 17.8.5
- vue 3.2.45 to 3.3.7
- vue-i18n 9.2.2 to 9.6.1
- vue-router 4.1.6 to 4.2.5

### Removed
- underscore `_` from all [`module/_*.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/module/)
- example date in [`partial/version.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/partial/version.vue)
- unnecessary `module/_modal.scss`
- `master` branch and replaced with `main`

## [2.0.0] - 2022-12-18
### Added
- examples in [`app/filters.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/filters.js)
- [`partial/version.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/partial/version.vue)
- component "version" in [`layout/default.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/layout/default.vue)
- `package-lock.json` back again to fix `vueLint` task
- `jsRequireSAR()` in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- `thankYou()` in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- chalk 4.1.2
- replace 1.2.2

### Changed
- host in [`public/.htaccess`](https://github.com/CodelineRed/vue-skeleton/blob/main/public/.htaccess)
- Docker port from 3050 to 7702 in [`app/gulpfile.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/gulpfile.dist.json)
- file for Vue 3 upgrade in [`app/fontawesome.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/fontawesome.js)
- nickname in [`app/i18n-locales.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/i18n-locales.js)
- file for Vue-i18n 9 upgrade in [`app/i18n.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/i18n.js)
- file for Vue-Router 4 upgrade in [`app/router.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/router.js)
- file for Vue-Router 4 upgrade in [`app/routes.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/routes.js)
- `font-awesome-icon` to `fa` in all `*.vue`
- `font-awesome-layers` to `fal` in all `*.vue`
- lazy load image colors in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/page/home.vue)
- syntax from BS4 to BS5 in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/page/home.vue)
- syntax from BS4 to BS5 in [`partial/langswitch.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/partial/langswitch.vue)
- syntax from BS4 to BS5 in [`partial/modal-cookie-policy.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/component/partial/modal-cookie-policy.vue)
- syntax from BS4 to BS5 in [`module/cookie-consent.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/module/cookie-consent.js)
- syntax from Vue 2 to Vue 3 in [`vue/app.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app.js)
- import in [`lib/bootstrap.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/lib/bootstrap.scss)
- import in [`lib/fontawesome.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/lib/fontawesome.scss)
- button hover style in [`module/_cookieconsent.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/module/_cookieconsent.scss)
- theme color and link decoration in [`scss/_variables.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/_variables.scss)
- php 7 to php 8 in [`docker-compose.yml`](https://github.com/CodelineRed/vue-skeleton/blob/main/docker-compose.yml)
- Docker port from 3050 to 7702 in [`docker-compose.yml`](https://github.com/CodelineRed/vue-skeleton/blob/main/docker-compose.yml)
- nickname in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- `jsRequire()` in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- [`.gitignore`](https://github.com/CodelineRed/vue-skeleton/blob/main/.gitignore)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- @babel/core 7.15.5 to 7.20.2
- @babel/plugin-transform-modules-amd 7.14.5 to 7.19.6
- @fortawesome/fontawesome-free 5.15.4 to 6.2.1
- @fortawesome/fontawesome-svg-core 1.2.36 to 6.2.1
- @fortawesome/free-brands-svg-icons 5.15.4 to 6.2.1
- @fortawesome/free-regular-svg-icons 5.15.4 to 6.2.1
- @fortawesome/free-solid-svg-icons 5.15.4 to 6.2.1
- @fortawesome/vue-fontawesome 2.0.2 to 3.0.2
- babel-eslint 10.1.0 to 9.0.0
- bootstrap 4.6.0 to 5.2.3
- browser-sync 2.27.5 to 2.27.10
- del 6.0.0 to 6.1.1
- eslint-plugin-import 2.24.2 to 2.26.0
- eslint-plugin-vue 7.18.0 to 7.20.0
- gulp-sass 5.0.0 to 5.1.0
- gulp-vue-single-file-component 1.1.7 to 1.2.5
- jquery 3.6.0 to 3.6.2
- moment 2.29.1 to 2.29.4
- sass 1.32.13 to 1.57.0
- vanilla-lazyload 17.4.0 to 17.8.3
- vue 2.6.14 to 3.2.45
- vue-i18n 8.25.1 to 9.2.2
- vue-router 3.5.2 to 4.1.6

## [1.8.0] - 2021-12-11
### Added
- ref attribute in [`layout/default.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/layout/default.vue) and [`partial/app.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/partial/app.vue)

### Changed
- [`.gitignore`](https://github.com/CodelineRed/vue-skeleton/blob/main/.gitignore)
- link to documentation in [`lib/bootstrap.scss`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/scss/lib/bootstrap.scss)

### Fixed
- favicon path in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)

### Removed
- `package-lock.json`

## [1.7.0] - 2021-11-19
### Added
- `engines` to [`package.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/package.json)
- sass 1.32.13

### Changed
- [`app/filters.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/filters.js) comments
- @babel/core 7.13.8 to 7.15.5
- @babel/plugin-transform-modules-amd 7.13.0 to 7.14.5
- @fortawesome/fontawesome-free 5.15.2 to 5.15.4
- @fortawesome/fontawesome-svg-core 1.2.34 to 1.2.36
- @fortawesome/free-brands-svg-icons 5.15.2 to 5.15.4
- @fortawesome/free-regular-svg-icons 5.15.2 to 5.15.4
- @fortawesome/free-solid-svg-icons 5.15.2 to 5.15.4
- browser-sync 2.26.14 to 2.27.5
- eslint-plugin-import 2.22.1 to 2.24.2
- eslint-plugin-vue 7.7.0 to 7.18.0
- gulp-autoprefixer 7.0.1 to 8.0.0
- gulp-sass 4.1.0 to 5.0.0
- gulp-uglify-es 2.0.0 to 3.0.0
- gulp-vue-single-file-component 1.0.15 to 1.1.7
- vanilla-lazyload 17.3.1 to 17.4.0
- vue 2.6.12 to 2.6.14
- vue-i18n 8.23.0 to 8.25.1
- vue-router 3.5.1 to 3.5.2

## [1.6.0] - 2021-03-06
### Changed
- [`partial/app.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/partial/app.vue)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- [`.gitignore`](https://github.com/CodelineRed/vue-skeleton/blob/main/.gitignore)
- @babel/core 7.12.16 to 7.13.8
- @babel/plugin-transform-modules-amd 7.12.13 to 7.13.0
- eslint-plugin-vue 7.5.0 to 7.7.0
- jquery 3.5.1 to 3.6.0
- vue-i18n 8.22.4 to 8.23.0

### Removed
- `vue/method` and replaced with [`vue/module`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/module)
- `vue/app/methods.js`

## [1.5.0] - 2021-02-14
### Changed
- [`public/.htaccess`](https://github.com/CodelineRed/vue-skeleton/blob/main/public/.htaccess)
- [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- [`.gitignore`](https://github.com/CodelineRed/vue-skeleton/blob/main/.gitignore)
- @babel/core 7.12.1 to 7.12.16
- @babel/plugin-transform-modules-amd 7.12.1 to 7.12.13
- @fortawesome/fontawesome-free 5.15.1 to 5.15.2
- @fortawesome/fontawesome-svg-core 1.2.32 to 1.2.34
- @fortawesome/free-brands-svg-icons 5.15.1 to 5.15.2
- @fortawesome/free-regular-svg-icons 5.15.1 to 5.15.2
- @fortawesome/free-solid-svg-icons 5.15.1 to 5.15.2
- bootstrap 4.5.3 to 4.6.0
- browser-sync 2.26.13 to 2.26.14
- eslint-plugin-vue 7.0.1 to 7.5.0
- gulp-favicons 2.4.0 to 3.0.0
- gulp-sourcemaps 2.6.5 to 3.0.0
- vanilla-lazyload 17.1.3 to 17.3.1
- vue-i18n 8.22.1 to 8.22.4
- vue-router 3.4.6 to 3.5.1

## [1.4.0] - 2020-10-20
### Changed
- [`app/vue-lint.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/vue-lint.json)
- [`app/router.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/router.js)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- @babel/core 7.11.6 to 7.12.3
- @fortawesome/fontawesome-free 5.14.0 to 5.15.1
- @fortawesome/fontawesome-svg-core 1.2.30 to 1.2.32
- @fortawesome/free-brands-svg-icons 5.14.0 to 5.15.1
- @fortawesome/free-regular-svg-icons 5.14.0 to 5.15.1
- @fortawesome/free-solid-svg-icons 5.14.0 to 5.15.1
- bootstrap 4.5.2 to 4.5.3
- del 5.1.0 to 6.0.0
- eslint-plugin-import 2.22.0 to 2.22.1
- eslint-plugin-vue 6.2.2 to 7.0.1
- gulp-vue-single-file-component 1.0.12 to 1.0.15
- moment 2.28.0 to 2.29.1
- vue-i18n 8.21.1 to 8.22.1
- vue-router 3.4.3 to 3.4.6

## [1.3.0] - 2020-09-20
### Added
- [`partial/naviagation.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/partial/naviagation.vue)
- CSS lazy class in [`page/home.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/page/home.vue)

### Changed
- [`app/filters.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/filters.js) comments
- [`layout/default.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/layout/default.vue)
- [`partial/langswitch.vue`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/component/partial/langswitch.vue)
- order in cleanUp task and how to remove files from js/css folder in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- favicon task in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- @babel/core 7.10.1 to 7.11.6
- @babel/plugin-transform-modules-amd 7.10.1 to 7.10.5
- @fortawesome/fontawesome-free 5.13.0 to 5.14.0
- @fortawesome/fontawesome-svg-core 1.2.28 to 1.2.30
- @fortawesome/free-brands-svg-icons 5.13.0 to 5.14.0
- @fortawesome/free-regular-svg-icons 5.13.0 to 5.14.0
- @fortawesome/free-solid-svg-icons 5.13.0 to 5.14.0
- @fortawesome/vue-fontawesome 0.1.9 to 2.0.0
- bootstrap 4.5.0 to 4.5.2
- browser-sync 2.26.7 to 2.26.12
- eslint-plugin-import 2.20.2 to 2.22.0
- moment 2.26.0 to 2.28.0
- vanilla-lazyload 15.2.0 to 17.1.2
- vue 2.6.11 to 2.6.12
- vue-i18n 8.18.1 to 8.21.1
- vue-router 3.3.2 to 3.4.3

### Removed
- partial/header.vue
- partial/footer.vue

## [1.2.0] - 2020-05-30
### Added
- gulp-favicons 2.4.0
- `require-config.js` watcher in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- favicon task in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- [`favicon.png`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/img/favicon.png)

### Changed
- order of tasks in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- favicon html in [`public/index.html`](https://github.com/CodelineRed/vue-skeleton/blob/main/public/index.html)
- [`require-config.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/module/require-config.js)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- @babel/core 7.9.0 to 7.10.1
- @babel/plugin-transform-modules-amd 7.9.0 to 7.10.1
- bootstrap 4.4.1 to 4.5.0
- jquery 3.4.1 to 3.5.1
- moment 2.24.0 to 2.26.0
- vanilla-lazyload 15.1.1 to 15.2.0
- vue-i18n 8.17.3 to 8.18.1
- vue-router 3.1.6 to 3.3.2

### Removed
- `src/img/favicons` folder
- browserSyncInit() config in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js) and moved in [`gulpfile.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/gulpfile.dist.json)

## [1.1.0] - 2020-04-26
### Added
- [`filters.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/filters.js)
- filters in [`app.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app.js)
- `window.app` in [`app.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app.js)
- moment and lintAll task in [`gulpfile.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/gulpfile.js)
- [`npm-postinstall.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/npm-postinstall.js)
- moment 2.24.0

### Changed
- all bg-info to bg-primary
- [`import-lint.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/import-lint.json)
- [`js-lint.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/js-lint.json)
- [`vue-lint.json`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/app/vue-lint.json)
- Date time fomats in [`i18n-locales.js`](https://github.com/CodelineRed/vue-skeleton/blob/main/src/js/vue/app/i18n-locales.js)
- [`README.md`](https://github.com/CodelineRed/vue-skeleton/blob/main/README.md)
- @babel/core 7.8.7 to 7.9.0
- @babel/plugin-transform-modules-amd 7.8.3 to 7.9.0
- eslint-plugin-import 2.20.1 to 2.20.2
- gulp-clean-css 4.2.0 to 4.3.0
- gulp-sass 4.0.2 to 4.1.0
- fontawesome 5.12.1 to 5.13.0
- vanilla-lazyload 13.0.1 to 15.1.1
- vue-i18n 8.15.5 to 8.17.3

### Removed
- `src/php/npm-postinstall.php`