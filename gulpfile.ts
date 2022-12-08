import * as Gulp from "gulp"

const enum PATHS {
    jsons = "src/*.json"
}

const q = Gulp.task('json', function (done) {
    console.log('task', 'this', this)
    PATHS.jsons
    done()
})

console.log('Gulp', 'task return', q)