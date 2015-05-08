var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    processors = [
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
    ];

// compile CSS
  gulp.task('css', function() {
    return gulp.src('src/css/style.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('build/css/'))
  });