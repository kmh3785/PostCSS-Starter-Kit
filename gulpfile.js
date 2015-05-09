var gulp = require('gulp'),
    fs = require("fs"),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    replace = require('gulp-replace'),
    processors = [
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require("gulp-cssnext"),
        require('postcss-nested'),
        require('postcss-import'),
        require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] }),
    ];

// compile CSS
  gulp.task('styles', function() {
    return gulp.src('src/css/style.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('build/css/'))
  });

// compile HTML
  gulp.task('minify', function() {
    return gulp.src('src/**/*.php')
      .pipe(gulp.dest('build'))
  });

// Compile scripts
  gulp.task('scripts', function() {
    return gulp.src([
      'bower_components/jquery/dist/jquery.min.js', 
      'bower_components/d3/d3.min.js', 
      'bower_components/trianglify/dist/trianglify.min.js', 
      'src/js/scripts.js'])
      .pipe(concat('scripts.min.js'))
      .pipe(gulp.dest('build/js'));
  });

// Replace
  gulp.task('replace', ['minify'], function(){

  });
// Watch
  gulp.task('watch', function() {
   
    // Watch .scss files
    gulp.watch('src/css/**/*.css', ['styles']);
   
    //Watch .js files
    gulp.watch('src/js/**/*.js', ['scripts']);
   
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
    'styles', 
    'minify'
  ]);