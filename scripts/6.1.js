
let fs = require('fs')
const { format } = require('path')
let fileName = 'inputs\\6input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    let isLive = true;
    for (let i = 0; i < data.length; i++) {
        let element = data[i]
        let tempArr = [element]
        for (let index = i; index < i + 3; index++) {
            let followingElement = data[index + 1]
            if (!tempArr.includes(followingElement)) {
                tempArr.push(followingElement)
            } else {
                tempArr = []
                break;
            }
            if (tempArr.length == 4) {
                isLive = false
                console.log(i + tempArr.length)
            }
        }
        if (!isLive) {
            console.log(tempArr.join(''))
            break;
        }
    }
})

