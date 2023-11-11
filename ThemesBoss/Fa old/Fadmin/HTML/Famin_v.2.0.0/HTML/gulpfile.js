const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include'); // Include this line

// Compile SCSS to CSS
gulp.task('sass', function () {
    return gulp
        .src('src/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());
});

// Minify CSS
gulp.task('minify-css', function () {
    return gulp
        .src('dist/assets/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());
});

// Minify JavaScript
gulp.task('minify-js', function () {
    return gulp
        .src('src/assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browserSync.stream());
});

// Minify HTML
gulp.task('minify-html', function () {
    return gulp
        .src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// Generate RTL CSS
gulp.task('rtl-css', function () {
    return gulp
        .src('dist/css/*.css')
        .pipe(rtlcss())
        .pipe(rename({ suffix: '-rtl' }))
        .pipe(gulp.dest('dist/assets/css'));
});

// Include common partials in HTML files
gulp.task('include-partials', function () {
    return gulp
        .src('src/*.html')
        .pipe(
            fileInclude({
                prefix: '@@',
                basepath: '@file',
            })
        )
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// ...

// Watch for changes and serve
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });

    gulp.watch('src/assets/scss/*.scss', gulp.series('sass', 'minify-css', 'rtl-css'));
    gulp.watch('src/assets/js/*.js', gulp.series('minify-js'));
    gulp.watch('src/assets/js/plugins/*.js', gulp.series('minify-js-plugin'));
    gulp.watch('src/partials/**/*.html', gulp.series('include-partials')); // Watch partials
    gulp.watch('src/*.html', gulp.series('minify-html', 'include-partials')); // Watch HTML
    gulp.watch('dist/*.html').on('change', browserSync.reload);
    gulp.watch('dist/assets/css/*.css').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'sass', 'minify-js'));

