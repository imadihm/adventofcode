
let fs = require('fs')
let fileName = 'inputs\\3input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    console.log(data)

    let totalSum = 0

    let arrOfData = data.split('\n')
    let active = true;

    arrOfData.forEach(el => {
        let firstHalf = el.slice(0, (el.length / 2))
        let secondHalf = el.slice(firstHalf.length, el.length)

        for (let i = 0; i < firstHalf.length; i++) {

            let elementOfFirstHalf = firstHalf[i]
            if (secondHalf.includes(elementOfFirstHalf)) {

                let value = elementOfFirstHalf.charCodeAt(0)
                if (elementOfFirstHalf == elementOfFirstHalf.toLowerCase()) {
                    totalSum += (value - 96)
                } else {
                    totalSum += (value - 38)
                }

                break;
            }
        }

    })
    console.log(totalSum)
})



