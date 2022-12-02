let fs = require('fs')
let fileName = '1input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    let group = data.split('\r\n').join(' ').split('  ')
    let allSumsArr = []
    let topThree = []

    group.forEach(el => {

        allSumsArr.push(el.split(' ').map(Number).reduce((summer, a) => summer + a, 0))
    })

    for (let i = 0; i < 3; i++) {
        let highest = Math.max(...allSumsArr)
        topThree.push(highest)
        allSumsArr.splice(allSumsArr.indexOf(highest), 1)
    }

    console.log(topThree.reduce((summer, a) => summer + a, 0))
})