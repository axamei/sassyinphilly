'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var ghPages = require('gulp-gh-pages');
var scsslint = require('gulp-sass-lint');

gulp.task('scss-lint', function() {
  return gulp.src('./app/styles/**/*.scss')
    .pipe(scsslint())
    .pipe(scsslint.format())
    .pipe(scsslint.failOnError())
});

gulp.task('styles', function () {
  return gulp.src('./app/styles/main.scss')
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>")}))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: [
        './node_modules/bootstrap-sass/assets/stylesheets/',
        require('bourbon').includePaths,
        './node_modules/susy/sass/',
        './node_modules/breakpoint-sass/stylesheets/'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.concat('main.css'))
    .pipe($.uncss({
      html: [
        './dist/index.html',
        './dist/about/index.html',
        './dist/contact/index.html',
        './dist/blog/**/*.html'
      ],
      ignore: [
        '.nav-collapse',
        '.nav-collapse ul',
        '.nav-collapse ul li',
        '.nav-collapse ul li a',
        '.nav-collapse.opened',
        '.js .nav-collapse',
        '.js .nav-collapse.closed',
        '.js .nav-collapse ul li a',
        '.nav-toggle',
        '.nav-toggle:hover']}))
    .pipe($.cssnano())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./dist/styles/'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function(){
  return gulp.src('./app/scripts/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.uglify({preserveComments: 'some'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/scripts/'))
    .pipe(reload({stream:true}));
  gulp.src('./app/scripts/vendor/**/*.js')
    .pipe(gulp.dest('./dist/scripts/vendor/'))
    .pipe(reload({stream:true}));
});

gulp.task('jekyll', function () {
  return gulp.src('_config.yml')
    .pipe($.shell([
      'jekyll build --config <%= file.path %>'
    ]))
    .pipe(reload({stream: true}));
});

gulp.task('jekyll:dev', function () {
  return gulp.src('_config_dev.yml')
    .pipe($.shell([
      'jekyll build --config <%= file.path %>'
    ]))
    .pipe(reload({stream: true}));
});

gulp.task('images', function () {
  return gulp.src('./app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('extras', function () {
  return gulp.src([
    './app/*.*',
    '!./app/feed.xml',
    '!./app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('./dist/'));
});

gulp.task('clean', require('del').bind(null, ['./dist/']));

gulp.task('default', ['clean'], function () {
  gulp.start('build:dev');
});

gulp.task('build', ['jekyll', 'styles', 'scripts', 'images', 'extras'], function () {
  return gulp.src('./dist/**/*')
    .pipe($.size({
      title: 'build',
      gzip: true
    }));
});

gulp.task('build:dev', ['jekyll:dev', 'styles', 'scripts', 'images'], function () {
  return gulp.src('./dist/**/*')
    .pipe($.size({
      title: 'build',
      gzip: true
    }));
});

gulp.task('serve', ['build:dev'], function () {
  browserSync({
    open: 'external',
    // tunnel: "sassyinphilly", // this creates a local tunnel for people outside of your network to see your project in development.. the url to use is displayed when you first run the gulp serve task if this is option is enabled. more info: http://localtunnel.me/
    server: {
      baseDir: ['./dist']
    }
  });

  gulp.watch('./app/**/*.{md,markdown,html}', ['build:dev']);
  gulp.watch('./app/styles/**/*.scss', ['styles']);
  gulp.watch('./app/scripts/**/*.js', ['scripts']);
  gulp.watch('./app/images/', ['images']);
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
