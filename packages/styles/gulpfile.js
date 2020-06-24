var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var comments = require('postcss-discard-comments');
var rename = require('gulp-rename');
// var sourcemaps = require('gulp-sourcemaps');

var convertCssVar = require('./gulp-convert-css-var');
var cssVars = require('./css-vars');

var option = { base: 'src' };

var dist = __dirname + '/dist';

var autoprefixerOpts = ['iOS >= 7', 'Android >= 4.1']

function build() {
    fs.readdir(path.resolve(__dirname, 'src/lib'), (err, files) => {
        if (err) {
            console.error(err);
            this.emit('end');
        } else {
            for (var i = 0; i < files.length; i++) {
                buildStyle(`src/lib/${files[i]}`);
            }
        }
    })
}

function buildStyle(sourcePath) {
    gulp
        .src(sourcePath, option)
        // .pipe(sourcemaps.init())
        .pipe(
            less().on('error', function (e) {
                console.error(e.message);
                this.emit('end');
            }),
        )
        .pipe(postcss([autoprefixer(autoprefixerOpts), comments()]))
        .pipe(convertCssVar(cssVars))
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest(dist))
        .pipe(
            nano({
                reduceIdents: false,
                zindex: false,
                autoprefixer: false,
                svgo: false,
            }),
        )
        .pipe(gulp.dest(dist))
}

gulp.task('build:style', function () {
    gulp
        .src('src/weui.less', option)
        // .pipe(sourcemaps.init())
        .pipe(
            less().on('error', function (e) {
                console.error(e.message);
                this.emit('end');
            }),
        )
        .pipe(postcss([autoprefixer(autoprefixerOpts), comments()]))
        .pipe(convertCssVar(cssVars))
        // .pipe(sourcemaps.write())
        // .pipe(rename({ basename: "index" }))
        // .pipe(gulp.dest(dist))
        .pipe(
            nano({
                zindex: false,
                autoprefixer: false,
                svgo: false
            })
        )
        .pipe(rename({ basename: "index" }))
        .pipe(gulp.dest(dist));
});

gulp.task('build:lib', build());

gulp.task('build:test', buildStyle('src/lib/theme.less'));

gulp.task('build', ['build:style', 'build:lib']);
