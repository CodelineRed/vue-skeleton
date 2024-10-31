# Vue Skeleton - CodelineRed

[**Demo page**](https://vue.codelinered.net)

## Table of contents
- [Included Third Party Code](#included)
- Install Guides
    - [Install Production Build (Recommended)](#install-production-build-recommended)
    - [Install Main/ Develop Build](#install-master-develop-build)
    - [Install with Docker (optional)](#install-with-docker-optional)
- [Project Commands](#project-commands)
- [`gulpfile-config.js`](#gulpfile-configjs)
- [Localization](#localization)
- [Links](#links)

## Included
* [jQuery 3](http://jquery.com)
* [Bootstrap 5](https://getbootstrap.com)
* [Font Awesome 6](https://fontawesome.com)
* [Slick Carousel 1](http://kenwheeler.github.io/slick/)
* [LazyLoad 19](https://www.andreaverlicchi.eu/vanilla-lazyload/)
* [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
* [Cookieconsent 3](https://github.com/insites/cookieconsent)
* [Vue 3](https://vuejs.org/)
* [Vue Router 4](https://router.vuejs.org/)
* [Vue i18n 10](https://kazupon.github.io/vue-i18n/)
* [Vue SFC 1](https://github.com/nfplee/gulp-vue-single-file-component)

## Install Production Build (Recommended)

Open console on your OS and navigate to your project folder.
[Download zip](https://github.com/CodelineRed/vue-skeleton/archive/production.zip) if you don't have git on your OS.
### With Composer
```shell
php composer create-project --ignore-platform-reqs --no-dev codelinered/vue-skeleton vue-skeleton "dev-production" && cd vue-skeleton
```

### With GIT
```shell
git clone https://github.com/CodelineRed/vue-skeleton.git && cd vue-skeleton && git checkout production
```

### With ZIP

Unix
```shell
wget -O vs-prod.zip https://github.com/CodelineRed/vue-skeleton/archive/production.zip && unzip vs-prod.zip && cd vue-skeleton-production
```

Windows 10+
```shell
curl -L -o vs-prod.zip https://github.com/CodelineRed/vue-skeleton/archive/production.zip && tar -xf vs-prod.zip && cd vue-skeleton-production
```
If you need PHP, you have to go to [Install with Docker](#install-with-docker-optional).

## Install Main/ Develop Build
### Required
- [Node.js](http://nodejs.org/en/download/) >= 18.17
- [npm](http://www.npmjs.com/get-npm) `$ npm i npm@latest -g`
- [gulp-cli](https://www.npmjs.com/package/gulp-cli) `$ npm i gulp-cli@latest -g`

Open console on your OS and navigate to your project folder.
[Download zip](https://github.com/CodelineRed/vue-skeleton/archive/master.zip) if you don't have git on your OS.

### With Composer
```shell
php composer create-project --ignore-platform-reqs codelinered/vue-skeleton && cd vue-skeleton && npm i && gulp build && gulp watch
```

### With GIT
```shell
git clone https://github.com/CodelineRed/vue-skeleton.git && cd vue-skeleton && git checkout main && npm i && gulp build && gulp watch
```

### With ZIP

Unix
```shell
wget -O vs-main.zip https://github.com/CodelineRed/vue-skeleton/archive/main.zip && unzip vs-main.zip && cd vue-skeleton-main && npm i && gulp build && gulp watch
```

Windows 10+
```shell
curl -L -o vs-main.zip https://github.com/CodelineRed/vue-skeleton/archive/main.zip && tar -xf vs-main.zip && cd vue-skeleton-main && npm i && gulp build && gulp watch
```
Open [localhost:3000](http://localhost:3000) for Website.

## Install with Docker (optional)
### Required
- [Docker](https://www.docker.com/)

Open console on your OS and navigate to the place where you want to install the project.

Unix
- Start Docker `systemctl docker start`
- Copy and run commands below
```shell
docker run --rm --interactive --tty --volume $PWD:/app composer create-project --ignore-platform-reqs --no-dev codelinered/vue-skeleton vue-skeleton "dev-production" && cd vue-skeleton && docker-compose up -d && xdg-open http://localhost:7702
```

Windows 10+
- Start Docker Desktop `"C:\Program Files\Docker\Docker Desktop.exe"`
- Copy and run commands below
```shell
docker run --rm --interactive --tty --volume %cd%:/app composer create-project --ignore-platform-reqs --no-dev codelinered/vue-skeleton vue-skeleton "dev-production" && cd vue-skeleton && docker-compose up -d && start http://localhost:7702
```
Open [localhost:7702](http://localhost:7702) for Website.

## Project Commands
|                     | Description                                                                                                                                           |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| gulp                | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                                                       |
| gulp build          | executes following tasks: cleanUp, favicon, font, img, js, jsLint, jsRequire, jsRequireSAR, json, scss, scssLint, svg, vue, vueJs, vueJsLint, vueLint |
| gulp lint           | executes following tasks: jsLint, scssLint, vueJsLint, vueLint                                                                                        |
| gulp cleanUp        | clean up public folder                                                                                                                                |
| gulp favicon        | generate favicons                                                                                                                                     |
| gulp font           | copy font files                                                                                                                                       |
| gulp img            | copy and compress images                                                                                                                              |
| gulp js             | uglify, minify and concat js files                                                                                                                    |
| gulp jsLint         | checks js follows [lint rules](https://github.com/CodelineRed/vue-skeleton/blob/master/src/app/js-lint.json)                                          | 
| gulp jsRequire      | copy, uglify and rename files for requirejs                                                                                                           |
| gulp jsRequireSAR   | search and replace text in third party files (use this after every gulp jsRequire)                                                                    |
| gulp json           | copy and minify json files                                                                                                                            |
| gulp scss           | compile, minify and concat scss files                                                                                                                 |
| gulp scssLint       | checks scss follows [lint rules](https://github.com/CodelineRed/vue-skeleton/blob/master/src/app/scss-lint.json)                                      |
| gulp svg            | copy and compress svg files                                                                                                                           |
| gulp thankYou       | a small thank for you                                                                                                                                 |
| gulp vue            | transpile vue files                                                                                                                                   |
| gulp vueJs          | transpile vue js files                                                                                                                                |
| gulp vueJsLint      | checks vue js follows [lint rules](https://github.com/CodelineRed/vue-skeleton/blob/master/src/app/import-lint.json)                                  |
| gulp vueLint        | checks vue follows [lint rules](https://github.com/CodelineRed/vue-skeleton/blob/master/src/app/vue-lint.json)                                        |
| gulp watch          | watch scss, js, json, vue, img, font and svg files                                                                                                    |

## Localization
- [`i18n-locales.js`](https://github.com/CodelineRed/vue-skeleton/blob/master/src/js/vue/app/i18n-locales.js)
- [`langswitch.vue`](https://github.com/CodelineRed/vue-skeleton/blob/master/src/js/vue/component/partial/langswitch.vue)

## [`gulpfile-config.js`](https://github.com/CodelineRed/vue-skeleton/blob/master/src/app/gulpfile-config.dist.js)
|                     | Description                                                                                                                                           |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| browserSyncConfig   | Required - Defines which config is used for [BrowserSync](https://www.npmjs.com/package/browser-sync) (default: browserSyncDev)                       |
| sourcePath          | Required - Path to raw files (default: src/)                                                                                                          |
| publicPath          | Required - Path to transpiled files (default: public/)                                                                                                |
| systemPath          | Optional - Alternative Path to transpiled files on CMS, ECS, PHP Framework, ... (default: path/to/system/)                                            |
| env                 | Required - Environment dev, test or prod (default: dev)                                                                                               |

## Links
* [ESLint Js Rules](https://eslint.org/docs/rules/)
* [ESLint Vue Rules](https://vuejs.github.io/eslint-plugin-vue/rules/)
* [ESLint Import Rules](https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules)
* [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
* [Vue SFC](https://github.com/nfplee/gulp-vue-single-file-component)
* [Path to RegExp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
