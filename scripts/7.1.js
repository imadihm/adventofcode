
const { secureHeapUsed } = require('crypto')
let fs = require('fs')
const { format } = require('path')
let fileName = 'inputs\\7input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    data = data.split('\r\n')

    let path = []
    let totalSize = 0
    let finalSum = 0

    for (let index = 0; index < data.length; index++) {
        let line = data[index].split(' ')

        if (line[1] == '$ cd') {
            if (line[2] == '..') {
                path.pop()
            } else {
                path.push(line[2])
            }
        } else if (line[1] == '$ ls') {
            continue;
        } else if (line[0] == '$ dir') {
            continue;
        } else {
            let size = Number(line[0])

            // console.log(size)
        }
        console.log(path)

    }
})