let fs = require('fs')
let fileName = 'inputs\\2input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    let rounds = data.split('\n')

    let playerOneMoves = ['A', 'B', 'C']
    let playerTwoMoves = ['X', 'Y', 'Z']

    let scoreSum = 0

    rounds.forEach(element => {
        switch (element[2]) {
            // Lose
            case 'X':
                if (element[0] == 'A') {
                    scoreSum += 3
                } else if (element[0] == 'B') {
                    scoreSum += 1
                } else {
                    scoreSum += 2
                }
                break;
            // Draw
            case 'Y':
                if (element[0] == 'A') {
                    scoreSum += 3 + 1
                } else if (element[0] == 'B') {
                    scoreSum += 3 + 2
                } else {
                    scoreSum += 3 + 3
                }
                break;

            // Win
            case 'Z':
                if (element[0] == 'A') {
                    scoreSum += 6 + 2
                } else if (element[0] == 'B') {
                    scoreSum += 6 + 3
                } else {
                    scoreSum += 6 + 1
                }
                break;

        }
    })

    console.log(scoreSum)
})
// A = Rock B = Paper C = Scissors, // X = Rock Y = Paper Z = Scissors,
// X = Lose Y = Draw Z = Win



