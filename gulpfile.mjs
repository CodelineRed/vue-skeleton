import browserSync from 'browser-sync';
import chalk from 'chalk';
import {deleteAsync} from 'del';
import gulp from 'gulp';
import prefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import minifyCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import favicons from 'gulp-favicons';
import gulpIf from 'gulp-if';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import jsonminify from 'gulp-jsonminify';
import rename from 'gulp-rename';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sassLint from 'gulp-sass-lint';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify-es';
import vueSfc from 'gulp-vue-single-file-component';
import replace from 'replace';

import config from './src/app/gulpfile-config.js';
import isEnv from './src/app/is-env.js';
import lintFunc from './src/app/lint.js';

const sass = gulpSass(dartSass);
const browserSyncInstance = browserSync.create();

// initialize BrowserSync
export function browserSyncInit(done) {
    browserSyncInstance.init(config[config.browserSyncConfig]);
    done();
}

// reload browser
function browserSyncReload(done) {
    browserSyncInstance.reload();
    done();
}

// clean up folders
export function cleanUp() {
    // deleteAsync([
        // config.systemPath + 'css/styles.*',
        // config.systemPath + 'font/**/*',
        // config.systemPath + 'img/**/*',
        // config.systemPath + 'js/require/**/*',
        // config.systemPath + 'js/vue/**/*',
        // config.systemPath + 'js/scripts.*',
        // config.systemPath + 'json/**/*',
        // config.systemPath + 'svg/**/*'
    // ], {force: true});

    return deleteAsync([
        config.publicPath + 'css/styles.*',
        config.publicPath + 'font/**/*',
        config.publicPath + 'img/**/*',
        config.publicPath + 'js/require/**/*',
        config.publicPath + 'js/vue/**/*',
        config.publicPath + 'js/scripts.*',
        config.publicPath + 'json/**/*',
        config.publicPath + 'svg/**/*'
    ]);
}

// generate favicons
export function favicon() {
    return gulp.src('./src/img/favicon.png')
    .pipe(favicons({
        appName: 'Vue Skeleton',
        appShortName: 'Vue Skeleton',
        appDescription: 'A Vue.js Skeleton with Gulp',
        developerName: 'CodelineRed',
        developerURL: 'https://www.codelinered.net/',
        background: '#000',
        theme_color: '#000',
        lang: "en-US",
        path: '/img/favicons/',
        url: 'https://vue.codelinered.net/',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        version: 1.0,
        logging: false,
        html: 'index.html',
        pipeHTML: true,
        replace: true
    }))
    // .pipe(gulp.dest(config.systemPath + 'img/favicons/'))
    .pipe(gulp.dest(config.publicPath + 'img/favicons/'));
}

// copy font files
export function font() {
    return gulp.src([
        // 'node_modules/@fortawesome/fontawesome-free/webfonts/**',
        'node_modules/slick-carousel/slick/fonts/**',
        config.sourcePath + 'font/**'
    ])
    // .pipe(gulp.dest(config.systemPath + 'font/'))
    .pipe(gulp.dest(config.publicPath + 'font/'));
}

// compress images
export function img() {
    return gulp.src(config.sourcePath + 'img/**/*.{png,gif,jpg,jpeg,ico,xml,json,svg}')
    .pipe(imagemin([
        gifsicle({
            interlaced: true
        }),
        mozjpeg({
            progressive: true
        }),
        optipng({
            optimizationLevel: 5
        }),
        svgo({
            plugins: [
                {
                    name: 'removeViewBox',
                    active: true
                },
                {
                    name: 'cleanupIDs',
                    active: false
                }
            ]
        })
    ]))
    // .pipe(gulp.dest(config.systemPath + 'img/'))
    .pipe(gulp.dest(config.publicPath + 'img/'));
}

// concatinate and uglify js files
export function js() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        // 'node_modules/@fortawesome/fontawesome-free/js/all.js',
        config.sourcePath + 'js/lib/**/*.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'node_modules/cssuseragent/cssua.js',
        'node_modules/vanilla-lazyload/dist/lazyload.js',
        'node_modules/cookieconsent/src/cookieconsent.js',
        'node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js',
        'node_modules/@fancyapps/ui/dist/fancybox/l10n/de.umd.js',
        'node_modules/@fancyapps/ui/dist/fancybox/l10n/en.umd.js',
        config.sourcePath + 'js/plugin/**/*.js',
        config.sourcePath + 'js/module/**/*.js',
        config.sourcePath + 'js/scripts.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(gulpIf(isEnv(['test', 'prod'], config.env), uglify.default()))
    .pipe(sourcemaps.write('./'))
    // .pipe(gulp.dest(config.systemPath + 'js/'))
    .pipe(gulp.dest(config.publicPath + 'js/'));
}

// lint js files
export function jsLint() {
    return lintFunc(gulp, eslint, [
        config.sourcePath + 'js/{lib,module,plugin}/*.js',
        config.sourcePath + 'js/scripts.js',
    ], 'js');
}

// uglify require js files
export function jsRequire() {
    let returnValue;
    const modules = {
        'require': 'node_modules/requirejs/require.js',
        'vue': 'node_modules/vue/dist/vue.global.prod.js',
        'vue-i18n': 'node_modules/vue-i18n/dist/vue-i18n.global.prod.js',
        'vue-router': 'node_modules/vue-router/dist/vue-router.global.prod.js',
        'fontawesome-svg-core': 'node_modules/@fortawesome/fontawesome-svg-core/index.js',
        'free-brands-svg-icons': 'node_modules/@fortawesome/free-brands-svg-icons/index.js',
        'free-regular-svg-icons': 'node_modules/@fortawesome/free-regular-svg-icons/index.js',
        'free-solid-svg-icons': 'node_modules/@fortawesome/free-solid-svg-icons/index.js',
        'vue-fontawesome': 'node_modules/@fortawesome/vue-fontawesome/index.js'
    };

    if (isEnv('dev', config.env)) {
        modules['vue'] = 'node_modules/vue/dist/vue.global.js';
        modules['vue-i18n'] = 'node_modules/vue-i18n/dist/vue-i18n.global.js';
        modules['vue-router'] = 'node_modules/vue-router/dist/vue-router.global.js';
    }

    const moduleKeys = Object.keys(modules);

    for (const key of moduleKeys) {
        returnValue = gulp.src(modules[key])
            .pipe(rename({ basename: key }))
            .pipe(gulpIf(isEnv(['test', 'prod'], config.env), uglify.default()))
            // .pipe(gulp.dest(config.systemPath + 'js/require/'))
            .pipe(gulp.dest(config.publicPath + 'js/require/'));
    }
    return returnValue;
}

// search and replace text in third party files
export function jsRequireSAR() {
    return new Promise(function(resolve, reject) {
        replace({
            regex: '([a-z]{1,3})(\\.h\\(|\\.watch\\(|\\.computed\\(|\\.defineComponent\\()',
            replacement: 'Vue$2',
            paths: [
                // config.systemPath + 'js/require/vue-fontawesome.js',
                config.publicPath + 'js/require/vue-fontawesome.js'
            ],
            recursive: true,
            silent: true
        });
        resolve();
    });
}

// copy all json files and minify
export function json() {
    return gulp.src([
            config.sourcePath + 'json/**/*.json'
        ])
        .pipe(jsonminify())
        // .pipe(gulp.dest(config.systemPath + 'json/'))
        .pipe(gulp.dest(config.publicPath + 'json/'));
}

// processing scss to css and minify result
export function scss() {
    return gulp.src(config.sourcePath + 'scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpIf(isEnv(['test', 'prod'], config.env), minifyCss({compatibility: 'ie8'})))
        .pipe(sourcemaps.write('./'))
        // .pipe(gulp.dest(config.systemPath + 'css/'))
        .pipe(gulp.dest(config.publicPath + 'css/'));
}

// lint scss files
export function scssLint() {
    return lintFunc(gulp, sassLint, [config.sourcePath + 'scss/**/*.scss'], 'scss');
}

// compress and copy svg files
export function svg() {
    return gulp.src([
        // 'node_modules/@fortawesome/fontawesome-free/svgs/**',
        // 'node_modules/@fortawesome/fontawesome-free/sprites/**',
        config.sourcePath + 'svg/**/*.svg'
    ])
    .pipe(imagemin([
        svgo({
            plugins: [
                {
                    name: 'removeViewBox',
                    active: true
                },
                {
                    name: 'cleanupIDs',
                    active: false
                }
            ]
        })
    ]))
    // .pipe(gulp.dest(config.systemPath + 'svg/'))
    .pipe(gulp.dest(config.publicPath + 'svg/'));
}

// thank you
export function thankYou() {
    return new Promise(function(resolve, reject) {
        console.log(chalk.redBright(' ♥ ') + chalk.bold('Thank you for using Vue Skeleton 3!') + chalk.redBright(' ♥ '));
        resolve();
    });
}

// transpile vue files
export function vue() {
    return gulp.src(config.sourcePath + 'js/vue/**/*.vue')
        .pipe(vueSfc({ debug: false, loadCssMethod: 'loadCss' }))
        .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
        .pipe(rename({ extname: '.js' }))
        .pipe(gulpIf(isEnv(['test', 'prod'], config.env), uglify.default()))
        // .pipe(gulp.dest(config.systemPath + 'js/vue/'))
        .pipe(gulp.dest(config.publicPath + 'js/vue/'));
}

// transpile vue js files
export function vueJs() {
    return gulp.src(config.sourcePath + 'js/vue/**/*.js')
        .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
        .pipe(gulpIf(isEnv(['test', 'prod'], config.env), uglify.default()))
        // .pipe(gulp.dest(config.systemPath + 'js/vue/'))
        .pipe(gulp.dest(config.publicPath + 'js/vue/'));
}

// lint vue js files
export function vueJsLint() {
    return lintFunc(gulp, eslint, [config.sourcePath + 'js/vue/**/*.js'], 'import');
}

// lint vue files
export function vueLint() {
    return lintFunc(gulp, eslint, [config.sourcePath + 'js/vue/**/*.vue'], 'vue');
}

// watch files
export function watch() {
    // watch fonts
    gulp.watch(config.sourcePath + 'font/**', font);
    // watch images
    gulp.watch(config.sourcePath + 'img/**', img);
    // watch favicon
    gulp.watch(config.sourcePath + 'img/favicon.png', favicon);
    // watch js files
    gulp.watch([
        config.sourcePath + 'js/{lib,module,plugin}/*.js',
        config.sourcePath + 'js/scripts.js'
    ], gulp.series(js, jsLint));
    // watch require js files
    gulp.watch(config.sourcePath + 'js/module/require-config.js', gulp.series(jsRequire, jsRequireSAR));
    // watch vue files
    gulp.watch(config.sourcePath + 'js/vue/**', gulp.series(vue, vueJs, vueJsLint, vueLint));
    // watch json files
    gulp.watch(config.sourcePath + 'json/**', json);
    // watch scss files
    gulp.watch(config.sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch svg
    gulp.watch(config.sourcePath + 'svg/**', svg);
}

// watch files and reload browser on file change
function watchAndReload() {
    watch();

    gulp.watch(config.publicPath + '**/*.{css,eot,html,ico,js,json,jpg,otf,png,svg,ttf,woff,woff2}', browserSyncReload);
}

// gulp
export default gulp.parallel(watchAndReload, browserSyncInit);

// gulp build
export const build = gulp.series(thankYou, cleanUp, favicon, font, img, js, jsLint, jsRequire, jsRequireSAR, json, scss, scssLint, svg, vue, vueJs, vueJsLint, vueLint);

// gulp lint
export const lint = gulp.series(jsLint, scssLint, vueJsLint, vueLint);
