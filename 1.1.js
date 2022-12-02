
let fs = require('fs')
let fileName = '1input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    let group = data.split('\r\n').join(' ').split('  ')
    let allSumsArr = []

    group.forEach(el => {

        allSumsArr.push(el.split(' ').map(Number).reduce((summer, a) => summer + a, 0))
    })

    console.log(Math.max(...allSumsArr))
})