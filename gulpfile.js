var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    importCss = require('gulp-import-css'),
    cssimport = require("gulp-cssimport"),
    cssnext = require("gulp-cssnext"),
    processors = [
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] }),
    ];

// compile CSS
  gulp.task('css', function() {
    return gulp.src('src/css/style.css')
      .pipe(cssnext({
        compress: "false"
      }))
      // .pipe(postcss(processors))
      .pipe(gulp.dest('build/css/'))
  });

// compile html
  gulp.task('minify', function() {
    return gulp.src('src/**/*.php')
      .pipe(gulp.dest('build'))
  });