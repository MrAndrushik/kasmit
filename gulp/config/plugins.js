import replace from "gulp-replace"; // Поиск и ззамена
// import plumber from "gulp-plumber"; // Обработка ошибок
// import notify from "gulp-notify"; // Сообщения и подсказки
import browserSync from "browser-sync";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

export const plugins = {
    replace: replace,
    browserSync: browserSync,
    newer: newer,
    if: gulpIf,
};
