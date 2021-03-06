require('postcss-neat/es6-reg');

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    cssmin = require('gulp-cssmin'),
    replace = require('gulp-replace'),
    cssnext = require("gulp-cssnext"),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    notify = require('gulp-notify')



// compile CSS
  gulp.task('styles', function() {
    return gulp.src('src/css/style.css')
      .pipe(postcss([
        require('postcss-import')({path: ['bower_components'], from: 'src/css/style.css'}),
        require('postcss-mixins')({mixins: require('postcss-neat')()}),
        require('postcss-nested')     
      ]))
      .pipe(cssnext()) // Autoprefixer is included in cssnext
      .pipe(cssmin())
      .pipe(gulp.dest('./build/css/'))
      .pipe(notify({ message: 'Styles task complete' }))
  });

// compile HTML
  gulp.task('minify', function() {
    return gulp.src('src/**/*.php')
      .pipe(gulp.dest('build'))
      .pipe(notify({ message: 'HTML compile finished' }))
  });


// Images
  gulp.task('images', function() {
    return gulp.src('src/img/**/*')
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('build/img'))
      .pipe(notify({ message: 'Images task complete' }));
  });
 

// Compile scripts
  gulp.task('scripts', function() {
    return gulp.src([
      'bower_components/**/*.min.js', 
      'src/js/scripts.js'])
      .pipe(concat('scripts.min.js'))
      .pipe(gulp.dest('build/js'))
      .pipe(notify({ message: 'Javascript compiled' }));
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
    gulp.watch('src/img/**/*', ['images']);

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
    'minify',
    'scripts',
    'images'
  ]);