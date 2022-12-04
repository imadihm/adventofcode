
let fs = require('fs')
const { format } = require('path')
let fileName = 'inputs\\4input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {


    let formated = data.split('\n')

    let match = 0


    for (let iterator of formated) {

        iterator = iterator.replaceAll('-', ' ').split(',')
        let elfOneSection = iterator[0].split(' ').map(Number)
        let elfTwoSection = iterator[1].split(' ').map(Number)



        console.log(iterator)
    }
})


//789 too low bro wtf
// 1 - 3   4 - 6
// 4 - 6  1 -3