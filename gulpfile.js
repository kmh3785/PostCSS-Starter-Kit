var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    replace = require('gulp-replace'),
    cssnext = require("gulp-cssnext"),
    processors = [
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] }),
    ];

// compile CSS
  gulp.task('styles', function() {
    return gulp.src('src/css/style.css')
      .pipe(cssnext({
        compress: "false"
      }))
      .pipe(postcss(processors))
      .pipe(gulp.dest('build/css/'))
  });

// compile html
  gulp.task('minify', function() {
    return gulp.src('src/**/*.php')
      .pipe(gulp.dest('build'))
  });
// Replace
  gulp.task('replace', ['minify'], function(){

  });
// Watch
  gulp.task('watch', function() {
   
    // Watch .scss files
    gulp.watch('src/css/**/*.css', ['styles']);
   
    // Watch .js files
    // gulp.watch('src/js/**/*.js', ['scripts']);
   
    // Watch image files
    // gulp.watch('src/img/**/*', ['images']);

    // Watch php files
    gulp.watch('src/*.php', ['replace']);
   
    // Create LiveReload server
    // livereload.listen();
   
    // Watch any files in build/, reload on change
    // gulp.watch(['/']).on('change', livereload.changed);
   
  });
 // Build project
  gulp.task('build', [
    'css', 
    'minify'
  ]);