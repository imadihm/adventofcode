
let fs = require('fs')
const { format } = require('path')
let fileName = 'inputs\\4input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {


    let formated = data.split('\n')

    let matches = 0


    for (let iterator of formated) {

        iterator = iterator.replaceAll('-', ' ').split(',')
        let elfOneSection = iterator[0].split(' ').map(Number)
        let elfTwoSection = iterator[1].split(' ').map(Number)

        let elfOneArr = new Array(elfOneSection[1]).fill(0)
        let elfTwoArr = new Array(elfTwoSection[1]).fill(0)

        for (let i = elfOneSection[0]; i < elfOneSection[1]; i++) {
            elfOneArr[i]++
        }
        for (let i = elfTwoSection[0]; i < elfTwoSection[1]; i++) {
            elfTwoArr[i]++
        }
        
        let listA = range(elfOneSection[0], elfOneSection[1])
        let listB = range(elfTwoSection[0], elfTwoSection[1])

        for (let i = 0; i < listA.length; i++) {

            let element = listA[i]
            if (listB.includes(element)) {
                matches++
                break;
            }

        }
    }

    console.log(matches)

})


function range(a, b) {
    if (a == b) {
        return [a]
    } else {
        return [a, ...range(a + 1, b)]
    }
}


