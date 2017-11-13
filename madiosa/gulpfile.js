var gulp         = require('gulp'), // Gulp
		sass         = require('gulp-sass'), //Sass
		browserSync  = require('browser-sync'), // Browser Sync
		concat       = require('gulp-concat'), // gulp-concat (для конкатенации файлов)
		uglify       = require('gulp-uglifyjs'), // gulp-uglifyjs (для сжатия JS)
		cssnano      = require('gulp-cssnano'), // пакет для минификации CSS
		rename       = require('gulp-rename'), // библиотека для переименования файлов
		del          = require('del'), // библиотека для удаления файлов и папок
		imagemin     = require('gulp-imagemin'), // библиотека для работы с изображениями
		pngquant     = require('imagemin-pngquant'), // библиотека для работы с png
		cache        = require('gulp-cache'), // библиотека кеширования
		autoprefixer = require('gulp-autoprefixer');// библиотека для автоматического добавления префиксов


gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})); // Об новляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: './app', // Директория для сервера - app
			index: 'index.html'
		},
		notify: false, // Отключаем уведомления
		browser: ['chrome']
	});
});

gulp.task('scripts', function() {
	return gulp.src([ // все необходимые библиотеки
		'app/lib/jquery/dist/jquery.min.js', // jQuery
		'app/lib/jquery.easing/js/jquery.easing.min.js', // jQuery easing
		'app/lib/slick-1.6.0/slick/slick.js', // Slick Slider
		'app/lib/device.js/lib/device.js' // device.js
		])
		.pipe(concat('lib.min.js')) // Собираем новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/lib.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'img', 'css-libs' , 'sass', 'scripts'], function() {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'app/css/main.css',
		'app/css/lib.min.css',
		'app/css/viewports.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function() {
	return cache.clearAll();
});

// gulp.task('default', ['watch']);