var gulp = require("gulp"), // main
  sass = require('gulp-sass')(require('sass')),
  sourcemaps = require("gulp-sourcemaps"), // scss sourcemaps
  uglify = require("gulp-uglify"), // minify js files
  cssmin = require("gulp-cssmin"), // minify css files
  merge = require("merge-stream"), // mearge two task
  babel = require("gulp-babel"), // convert next generation JavaScript, today.
  npmlodash = require("lodash"), // perfoming oops in gulp
  autoprefixer = require("gulp-autoprefixer"), // css propertys autoprefixer
  cssbeautify = require("gulp-cssbeautify"), // css cssbeautify
  fileinclude = require("gulp-file-include"), // include html files
  browsersync = require("browser-sync"), // browser reload
  rtlcss = require('gulp-rtlcss'), // rtl generate
  rename = require('gulp-rename'),
  fs = require('fs-extra');

const layout = {
  layouts: "vertical", // vertical / horizontal
  sublayouts: "",
  darktheme: "false", // true / false
  rtltheme: "false", // true / false
  bodyclass: "",
  menuclass: "",
  headerclass: "",
};

gulp.task('clean:dist', function (done) {
  fs.remove('dist', err => {
    if (err) {
      console.error("Error deleting dist", err);
    }
    done(); // Signal task completion
  });
});

//  [ scss compiler ] start
gulp.task("sass", function () {
  // main style css
  gulp
    .src(["src/assets/scss/style.scss", "src/assets/scss/icons.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/assets/css"));

    return gulp
      .src(["src/assets/scss/style.scss", "src/assets/scss/icons.scss"])
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(rtlcss())
      .pipe(rename({suffix: "-rtl"}))
      .pipe(gulp.dest("dist/assets/css"))
      .pipe(cssmin())
      .pipe(rename({suffix: ".min"}))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("dist/assets/css"));
});
//  [ scss compiler ] end

//  [ Copy assets ] start
gulp.task("build", function () {
  var required_libs = {
    js: [
      "node_modules/jquery/dist/jquery.min.js",
    ],
    css: [
      "node_modules/simplebar/dist/simplebar.min.css",
    ],
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == "css") {
      gulp.src(assets).pipe(gulp.dest("dist/assets/css/plugins"));
    } else {
      gulp.src(assets).pipe(gulp.dest("dist/assets/js/plugins"));
    }
  });

  // Scrollbar
  gulp.src("node_modules/simplebar/dist/simplebar.min.css",).pipe(gulp.dest("dist/assets/css/plugins"));
  gulp.src("node_modules/simplebar/dist/simplebar.min.js").pipe(gulp.dest("dist/assets/js/plugins"));
  return gulp.src("node_modules/simplebar/dist/simplebar.esm.js").pipe(gulp.dest("dist/assets/js/plugins"));

});
//  [ Copy assets ] end

//  [ build html ] start
gulp.task("build-html", function () {
  return gulp
    .src("src/html/**/*.html")
    .pipe(
      fileinclude({
        context: layout,
        prefix: "@@",
        basepath: "@file",
        indent: true,
      })
    )
    .pipe(gulp.dest("dist"));
});
//  [ build html ] end

//  [ build js ] start
gulp.task("build-js", function () {
  var layoutjs = gulp
    .src("src/assets/js/*.js")
    .pipe(gulp.dest("dist/assets/js"));
  var mainjs = gulp
    .src("src/assets/js/main/*.js")
    .pipe(gulp.dest("dist/assets/js/main"));

  var pagesjs = gulp
    .src("src/assets/js/pages/*.js")
    .pipe(gulp.dest("dist/assets/js/pages"));

  var copyPlugins = gulp.src('src/assets/js/plugins/**/*')
        .pipe(gulp.dest('dist/assets/js/plugins'));
  return merge(layoutjs, pagesjs, mainjs);
});
//  [ build js ] end

//  [ uglify js ] start
gulp.task("uglify", function () {
  var layoutjs = gulp
    .src("src/assets/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js"));

  var pagesjs = gulp
    .src("src/assets/js/pages/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js/pages"));

  return merge(layoutjs, pagesjs);
});
//  [ uglify js ] end

//  [ images copy ] start
gulp.task("copy-images", function () {
  return gulp.src('src/assets/images/**/*')
    .pipe(gulp.dest('dist/assets/images'));
});
//  [ images copy ] end

//  [ fonts copy ] start
gulp.task('copy-fonts', function () {
  return gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts'));
});
//  [ fonts copy ] end

//  [ browser reload ] start
gulp.task("browserSync", function () {
  browsersync.init({
    server: "dist/",
  });
});

gulp.task('browsersyncReload', function (callback) {
  browsersync.reload();
  callback();
});
//  [ browser reload ] end

//  [ watch ] start
gulp.task("watch", function () {
  gulp
    .watch(["src/assets/scss/**/*.scss", "src/assets/scss/*.scss"], gulp.series("sass", "browsersyncReload"));
  gulp
    .watch(["src/assets/js/**/*.js", "src/assets/js/*.js"], gulp.series("build-js", "browsersyncReload"));
  gulp
    .watch("src/html/**/*.html", gulp.series("build-html", "browsersyncReload"));
});
const compile = gulp.parallel("browserSync", "watch");
//  [ watch ] end

//  [ Default task ] start
gulp.task(
  "default",
  gulp.series('clean:dist', gulp.parallel("build", "sass", "build-js", "build-html", "copy-images", "copy-fonts"), compile)
);
//  [ Default task ] end

gulp.task(
  "build-prod",
  gulp.series('clean:dist', gulp.parallel("build", "sass", "build-js", "build-html", "copy-images"))
);