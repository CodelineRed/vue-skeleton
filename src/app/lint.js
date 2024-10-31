import importLint from './import-lint.js';
import jsLint from './js-lint.js';
import scssLint from './scss-lint.js';
import vueLint from './vue-lint.js';

/**
 * Lint given files
 *
 * @param gulp mixed
 * @param module mixed
 * @param paths array
 * @param file string
 * @return gulp signal
 */
function lint(gulp, module, paths, file) {
    let lintConfig = {};

    if (file === 'import') {
        lintConfig = importLint;
    } else if (file === 'js') {
        lintConfig = jsLint;
    } else if (file === 'scss') {
        lintConfig = scssLint;
    } else if (file === 'vue') {
        lintConfig = vueLint;
    }

    return gulp.src(paths)
        .pipe(module(lintConfig))
        .pipe(module.format())
        .pipe(module.failOnError());
}

export default lint;
