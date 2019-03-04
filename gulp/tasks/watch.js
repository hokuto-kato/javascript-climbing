import gulp from 'gulp';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import del from 'del';
import watch from 'gulp-watch';
import paths from '../config';

gulp.task('reload', () => {
	browserSync.reload();
});

gulp.task('imageClean', () => {
	del(paths.img_dest + '**/*.*');
});

gulp.task('imageCopy', () => {
	return gulp.src('./src/img/**/*.*')
	.pipe(gulp.dest(paths.img_dest));
});

gulp.task('pugDest', (cb) => {
	return runSequence(
		'setWatch',
		'pug',
		cb
	);
});

gulp.task('imageDest', (cb) => {
	return runSequence(
		'imageClean',
		'imageCopy',
		'reload',
		cb
	);
});

gulp.task("watch", () => {
	watch([`${paths.js_src}`], () => {gulp.start("webpack");});
	watch([`${paths.stylus_src}`], () => {gulp.start("stylus");});
	watch([`${paths.pug_src}`, `${paths.yaml_src}`], () => {gulp.start("pugDest");});
	watch([`${paths.img_src}*`], () => {gulp.start("imageDest");});
});