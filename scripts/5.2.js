
let fs = require('fs')
let fileName = 'inputs\\5sitinput.txt'
let fileName2 = 'inputs\\5input.txt'

fs.readFile(fileName, 'utf8', (err, dataA) => {
    fs.readFile(fileName2, 'utf8', (err, dataB) => {

        dataA = dataA.split('\n')

        let arr1 = dataA[0].split(' ')
        let arr2 = dataA[1].split(' ')
        let arr3 = dataA[2].split(' ')
        let arr4 = dataA[3].split(' ')
        let arr5 = dataA[4].split(' ')
        let arr6 = dataA[5].split(' ')
        let arr7 = dataA[6].split(' ')
        let arr8 = dataA[7].split(' ')
        let arr9 = dataA[8].split(' ')

        let arrOfArrs = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9]

        dataB.split('\n').forEach(command => {
            command = command.split(' ').filter(Number).map(Number)
            let howMany = command[0]
            let from = command[1]
            let to = command[2]
            let container = arrOfArrs[from - 1].splice(arrOfArrs[from - 1].length - howMany)
            arrOfArrs[to - 1] = arrOfArrs[to - 1].concat(container)

        })

        console.table(arrOfArrs)
    })
})
