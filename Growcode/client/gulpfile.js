var gulp = require("gulp"), // main
  sass = require('gulp-sass')(require('sass')),
  sourcemaps = require("gulp-sourcemaps"), // scss sourcemaps
  uglify = require("gulp-uglify"), // minify js files
  cssmin = require("gulp-cssmin"), // minify css files
  merge = require("merge-stream"), // mearge two task
  babel = require("gulp-babel"), // convert next generation JavaScript, today.
  npmlodash = require("lodash"), // perfoming oops in gulp
  smushit = require("gulp-smushit"), // image optimizer
  autoprefixer = require("gulp-autoprefixer"), // css propertys autoprefixer
  cssbeautify = require("gulp-cssbeautify"), // css cssbeautify
  fileinclude = require("gulp-file-include"), // include html files
  browsersync = require("browser-sync"), // browser reload
  htmlmin = require("gulp-htmlmin"); // html minify

const layout = {
  layouts: "vertical", // vertical / horizontal
  sublayouts: "",
  darktheme: "false", // true / false
  rtltheme: "false", // true / false
  bodyclass: "",
  menuclass: "",
  headerclass: "",
};

gulp.task('clean-js', function () {
  return del([
    'dist/assets/js/*.js'
  ]);
});

gulp.task('clean-css', function () {
  return del([
    'dist/assets/css/*.css'
  ]);
});

//  [ scss compiler ] start
gulp.task("sass", function () {
  // main style css
  return gulp
    .src("src/assets/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/assets/css"));
});
//  [ scss compiler ] end

//  [ Copy assets ] start
gulp.task("build", function () {
  var required_libs = {
    js: [
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/chart.js/dist/chart.min.js",
      "node_modules/bootstrap-slider/dist/bootstrap-slider.min.js",
      "node_modules/apexcharts/dist/apexcharts.min.js",
      "node_modules/morris.js/morris.js",
      "node_modules/gmaps/gmaps.min.js",
      "node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js",
      "node_modules/@ckeditor/ckeditor5-build-inline/build/ckeditor.js",
      "node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js",
      "node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js",
      "node_modules/quill/dist/quill.min.js",
      "node_modules/fullcalendar/main.min.js",
      "node_modules/dropzone/dist/min/dropzone-amd-module.min.js",
      "node_modules/sweetalert2/dist/sweetalert2.all.min.js",
      "node_modules/@popperjs/core/dist/umd/popper.min.js",
      "node_modules/tiny-slider/dist/min/tiny-slider.js",
      "node_modules/bootstrap-switch-button/dist/bootstrap-switch-button.min.js",
      "node_modules/bootstrap-datetimepicker-npm/build/js/bootstrap-datetimepicker.min.js",
      "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
      "node_modules/echarts/dist/echarts.min.js",
      "node_modules/simplebar/dist/simplebar.min.js",
      "node_modules/table2excel/dist/table2excel.js",
      "node_modules/html2canvas/dist/html2canvas.min.js",
      "node_modules/jspdf/dist/jspdf.umd.min.js",
      "node_modules/jspdf/dist/jspdf.umd.min.js.map",
      "node_modules/datatables/media/js/jquery.dataTables.min.js"
    ],
    css: [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/bootstrap/dist/css/bootstrap.rtl.min.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css.map",
      "node_modules/bootstrap/dist/css/bootstrap.rtl.min.css.map",
      "node_modules/quill/dist/quill.core.css",
      "node_modules/quill/dist/quill.snow.css",
      "node_modules/quill/dist/quill.bubble.css",
      "node_modules/fullcalendar/main.css",
      "node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css",
      "node_modules/tiny-slider/dist/tiny-slider.css",
      "node_modules/bootstrap-switch-button/css/bootstrap-switch-button.min.css",
      "node_modules/bootstrap-datetimepicker-npm/build/css/bootstrap-datetimepicker.min.css",
      "node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
      "node_modules/flag-icons/css/flag-icons.min.css",
      "node_modules/simplebar/dist/simplebar.css",
      "node_modules/datatables/media/css/jquery.dataTables.min.css"
    ],
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == "css") {
      gulp.src(assets).pipe(gulp.dest("dist/assets/css/plugins"));
    } else {
      gulp.src(assets).pipe(gulp.dest("dist/assets/js/plugins"));
    }
  });

  // font awesome file
  gulp.src("node_modules/font-awesome/css/font-awesome.min.css").pipe(gulp.dest("dist/assets/css"));

  // Tablesaw
  gulp.src("node_modules/tablesaw/dist/tablesaw.css").pipe(gulp.dest("dist/assets/css/plugins"));
  gulp.src("node_modules/tablesaw/dist/tablesaw-init.js").pipe(gulp.dest("dist/assets/js/plugins"));
  gulp.src("node_modules/tablesaw/dist/tablesaw.jquery.js").pipe(gulp.dest("dist/assets/js/plugins"));

  // jsgrid
  gulp.src("node_modules/jsgrid/dist/jsgrid.min.css").pipe(gulp.dest("dist/assets/css/plugins"));
  gulp.src("node_modules/jsgrid/dist/jsgrid-theme.min.css").pipe(gulp.dest("dist/assets/css/plugins"));
  gulp.src("node_modules/jsgrid/dist/jsgrid.min.js").pipe(gulp.dest("dist/assets/js/plugins"));

  // Scrollbar
  gulp.src("node_modules/simplebar/dist/simplebar.min.css",).pipe(gulp.dest("dist/assets/css/plugins"));
  gulp.src("node_modules/simplebar/dist/simplebar.min.js").pipe(gulp.dest("dist/assets/js/plugins"));
  gulp.src("node_modules/simplebar/dist/simplebar.esm.js").pipe(gulp.dest("dist/assets/js/plugins"));

  
  var required_libs = {
    classic: [
      "node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js",
    ],
    inline: [
      "node_modules/@ckeditor/ckeditor5-build-inline/build/ckeditor.js",
    ],
    balloon: [
      "node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js",
    ],
    document: [
      "node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js",
    ],
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == "classic") {
      gulp.src(assets).pipe(gulp.dest("dist/assets/js/plugins/ckeditor/classic"));
    }
    if (type == "inline") {
      gulp.src(assets).pipe(gulp.dest("dist/assets/js/plugins/ckeditor/inline"));
    }
    if (type == "balloon") {
      gulp.src(assets).pipe(gulp.dest("dist/assets/js/plugins/ckeditor/balloon"));
    }
    if (type == "document") {
      gulp.src(assets).pipe(gulp.dest("dist/assets/js/plugins/ckeditor/document"));
    }
  });
  var cpyassets = gulp
    .src(["src/assets/**/*.*", "!src/assets/scss/**/*.*"])
    .pipe(gulp.dest("dist/assets"));

  var cpytinymceassets = gulp
    .src(["node_modules/tinymce/**/*.*"])
    .pipe(gulp.dest("dist/assets/js/plugins/tinymce"));

  var cpytrumbowygassets = gulp
    .src(["node_modules/trumbowyg/dist/**/*.*"])
    .pipe(gulp.dest("dist/assets/js/plugins/trumbowyg"));
  return merge(cpyassets, cpytinymceassets, cpytrumbowygassets);
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

  return merge(layoutjs, pagesjs, mainjs);
});
//  [ build js ] end

//  [ build locales ] Start
gulp.task("build-locales", function () {
  return gulp
  .src("src/assets/locales/*.{json}")
  .pipe(gulp.dest("dist/locales"));
});

//  [ build locales ] end

//  [ scss compiler ] start
gulp.task("mincss", function () {
  // main style css
  return gulp
    .src("src/assets/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(cssmin())
    .pipe(gulp.dest("dist/assets/css"));
});
//  [ scss compiler ] end

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

//  [ minify html ] start
gulp.task("htmlmin", function () {
  return gulp
    .src("src/html/*.html")
    .pipe(
      fileinclude({
        context: layout,
        prefix: "@@",
        basepath: "@file",
        indent: true,
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("dist"));
});
//  [ minify html ] end

//  [ image optimizer ] start
gulp.task("imgmin", function () {
  return gulp
    .src("src/assets/img/**/*.{jpg,png,jpeg}")
    .pipe(smushit())
    .pipe(gulp.dest("dist/assets/img"));
});
//  [ image optimizer ] end

//  [ browser reload ] start
gulp.task("browserSync", function () {
  browsersync.init({
    server: "dist/",
  });
});
//  [ browser reload ] end

//  [ watch ] start
gulp.task("watch", function () {
  gulp
    .watch("src/assets/scss/**/*.scss", gulp.series("sass"))
    .on("change", browsersync.reload);
  gulp
    .watch("src/assets/js/**/*.js", gulp.series("build-js"))
    .on("change", browsersync.reload);
  gulp
    .watch("src/html/**/*.html", gulp.series("build-html"))
    .on("change", browsersync.reload);
  gulp
    .watch("src/doc/**/*.html", gulp.series("build"))
    .on("change", browsersync.reload);
  gulp
    .watch("src/assets/locales/*.json", gulp.series("build-locales"))
    .on("change", browsersync.reload);
});
const compile = gulp.parallel("browserSync", "watch");
//  [ watch ] end

//  [ Default task ] start
gulp.task(
  "default",
  gulp.series("build", "sass", "build-js", "build-html", "build-locales",  compile)
);
//  [ Default task ] end

//  [ watch minify ] start
gulp.task("watch-minify", function () {
  gulp.watch("src/assets/scss/**/*.scss", gulp.series("mincss"));
  gulp.watch("src/assets/js/**/*.js", gulp.series("uglify"));
  gulp.watch("src/html/**/*.html", gulp.series("htmlmin"));
  gulp.watch("src/documentation/**/*.html", gulp.series("build"));
});
//  [ watch minify ] start

gulp.task(
  "build-prod",
  gulp.series("build", "sass", "build-js", "build-html", "imgmin", "build-locales")
);
