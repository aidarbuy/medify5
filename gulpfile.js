var gulp = require('gulp'),
    src = 'src/',
    dest = 'public/',
    coffee = require('gulp-coffee'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus');

gulp.task('compile-coffee-root', function() {
    return gulp.src('./*.coffee').pipe(coffee()).pipe(gulp.dest('./'));
});

gulp.task('compile-coffee-routes', function() {
    return gulp.src('./routes/*.coffee').pipe(coffee()).pipe(gulp.dest('./routes'));
});

gulp.task('compile-coffee-models', function() {
    return gulp.src('./models/doctor.coffee').pipe(coffee()).pipe(gulp.dest('./models'));
});

gulp.task('compile-coffee-schema', function() {
    return gulp.src('./models/doctor-schema.coffee').pipe(coffee()).pipe(gulp.dest('./models'));
});

gulp.task('compile-coffee', function() {
    return gulp.src(src + 'coffee/*.coffee').pipe(coffee()).pipe(gulp.dest(dest + 'app'));
});

gulp.task('compile-controllers', function() {
    return gulp.src(src + 'coffee/controllers/*.coffee').pipe(coffee()).pipe(gulp.dest(dest + 'app/controllers'));
});

gulp.task('compile-jade', function() {
    return gulp.src(src + 'jade/*.jade').pipe(jade()).pipe(gulp.dest(dest + 'views'));
});

gulp.task('compile-stylus', function() {
    return gulp.src(src + 'stylus/*.stylus').pipe(stylus()).pipe(gulp.dest(dest + 'styles'));
});

gulp.task('watch', function() {
    gulp.watch('./*.coffee', ['compile-coffee-root']);
    gulp.watch('./routes/*.coffee', ['compile-coffee-routes']);
    gulp.watch('./models/doctor.coffee', ['compile-coffee-models']);
    gulp.watch('./models/doctor-schema.coffee', ['compile-coffee-schema']);
    gulp.watch(src + 'coffee/controllers/*.coffee', ['compile-controllers']);
    gulp.watch(src + 'coffee/*.coffee', ['compile-coffee']);
    gulp.watch(src + 'jade/*.jade', ['compile-jade']);
    gulp.watch(src + 'stylus/*.stylus', ['compile-stylus']);
});

gulp.task('default', ['compile-coffee-schema', 'compile-coffee-models', 'compile-coffee-routes', 'compile-coffee-root', 'compile-coffee', 'compile-controllers', 'compile-jade', 'compile-stylus', 'watch']);