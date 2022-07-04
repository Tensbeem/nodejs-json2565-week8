const path = require('path')
// 1.path.basename(path,[ext])
// const result = path.basename('/public/home/index.html')

// 2.path.extname(path)
// console.log(result)
// console.log(path.extname('app.js'))
// console.log(path.extname('index.html'))

// 3.path.format()
let pathToFile = path.format({
    dir:'public/home/js',
    base: 'app.js'
})
console.log(pathToFile)

let pathObj = path.parse('D:\Natchaa\nodejs\week8\public\home\index.html')
console.log(pathObj)