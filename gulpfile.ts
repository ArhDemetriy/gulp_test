import * as Gulp from "gulp"
import * as Fs from "fs"

const enum PATHS {
    jsons = "src/*.json"
}

const returns = Gulp.task('default', function (done) {
    const src = Gulp.dest('dist')

    Gulp.src(PATHS.jsons)
        // .pipe(Fs.createWriteStream(''))
        .pipe(Gulp.dest('dist'))

    const result: { [k in string]: any } = {}
    for (const [key, value] of Object.entries(src))
        result[key] = (typeof value === 'function') ? value.toString() : value

    Fs.writeFileSync('srcConsist.json', JSON.stringify(result, undefined, 4))

    done()
})

// console.log('createWriteStream', Gulp.dest('dist'))
// console.log('task returns', returns)