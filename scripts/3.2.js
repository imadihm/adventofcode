
let fs = require('fs')
let fileName = 'inputs\\3input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    let totalSum = 0

    let arrOfData = data.split('\n')
    let active = true;


    for (let index = 0; index < arrOfData.length; index += 3) {

        let tripleMfs = arrOfData.slice(index, index + 3)

        for (const iterator of tripleMfs[0]) {

            if (tripleMfs[1].includes(iterator) && tripleMfs[2].includes(iterator)) {

                if (iterator == iterator.toLowerCase()) {

                    totalSum += iterator.charCodeAt(0) - 96
                    break;
                } else {
                    totalSum += iterator.charCodeAt(0) - 38
                    break;
                }

            }
        }
    }
    console.log(totalSum)

})





// let elementOfFirstHalf = firstHalf[i]
// if (secondHalf.includes(elementOfFirstHalf)) {

//     let value = elementOfFirstHalf.charCodeAt(0)
//     if (elementOfFirstHalf == elementOfFirstHalf.toLowerCase()) {
//         totalSum += (value - 96)
//     } else {
//         totalSum += (value - 38)
//     }

//     break;
// }