
let fs = require('fs')
let fileName = 'inputs\\8input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    data = data.split('\r\n')

    data.pop()
    data.shift()


    for (let iterator of data) {
        iterator.split('').shift()
    }

    console.log(data[0])
})