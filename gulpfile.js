var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');


var paths = {
  sass: ['./source/scss/**/*.scss'],
  // scripts: ['./source/js/*.js','./source/js/**/*.js', '!./www/js/app.bundle.min.js'], // exclude the file we write too
  scripts :  [
    /*config*/
    './source/js/config/config.js',
    './source/js/config/config.route.js',
    /*services*/
    './source/js/services/services.js',
    './source/js/services/cards.service.js',
    './source/js/services/food.service.js',
    './source/js/services/foursquare.service.js',
    /*controllers*/
    './source/js/controllers/controllers.js',
    './source/js/controllers/cards.controller.js',
    './source/js/controllers/home.controller.js',
    './source/js/controllers/places.controller.js',
    './source/js/controllers/venuedetail.controller.js',
    './source/js/controllers/food.controller.js',
    './source/js/controllers/fooddetail.controller.js',

    /*app*/
    './source/js/app.js',
  ],
  images: ['./source/img/**/*'],
  ionicbundle: ['./www/lib/ionic/js/ionic.bundle.min.js']
};

var files = {
  jsbundle: 'app.bundle.min.js',
  appcss: 'app.css'
};

gulp.task('default', ['build']);

gulp.task('build',['sass','scripts']);

gulp.task('clean', function() {
  return gulp.src(['./www/js'], {
    read: false
  })
      .pipe(clean());
});

gulp.task('sass', function(done) {
  gulp.src('./source/scss/app.scss')
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('./www/css/'))
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./www/css/'))
      .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('scripts', ['clean'], function() {
  gulp.src(paths.scripts)
  //.pipe(jshint())
  //.pipe(jshint.reporter('default'))
      .pipe(ngAnnotate({
        remove: true,
        add: true,
        single_quotes: true
      }))
      .pipe(uglify())
      .pipe(concat(files.jsbundle))
      .pipe(gulp.dest('./www/js'));
})

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
  gulp.src(paths.images)
      .pipe(imagemin())
      .pipe(gulp.dest('./www/img'));
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
      .on('log', function(data) {
        gutil.log('bower', gutil.colors.cyan(data.id), data.message);
      });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
        '  ' + gutil.colors.red('Git is not installed.'),
        '\n  Git, the version control system, is required to download Ionic.',
        '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
        '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
