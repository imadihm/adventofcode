
let fs = require('fs')
let fileName = 'inputs\\1input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    let group = data.split('\r\n').join(' ').split('  ')
    let allSumsArr = []

    console.log(group)
    group.forEach(el => {
        allSumsArr.push(el.split(' ').map(Number).reduce((summer, a) => summer + a, 0))
    })
    console.log(Math.max(...allSumsArr))
})