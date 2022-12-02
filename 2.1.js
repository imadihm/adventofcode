let fs = require('fs')
let fileName = '2input.txt'
fs.readFile(fileName, 'utf8', (err, data) => {

    let rounds = data.split('\n')

    let playerOneMoves = ['A', 'B', 'C']
    let playerTwoMoves = ['X', 'Y', 'Z']

    let scoreSum = 0

    rounds.forEach(element => {

        let playerOneMove = playerOneMoves.indexOf(element[0])
        let playerTwoMove = playerTwoMoves.indexOf(element[2])

        if (playerOneMove == playerTwoMove) {
            scoreSum += playerOneMove + 4
        }
        else {
            switch (element[0]) {

                case 'A':
                    if (element[2] == 'Y') {
                        scoreSum += 8
                    } else {
                        scoreSum += playerTwoMove + 1
                    }

                    break;

                case 'B':
                    if (element[2] == 'Z') {
                        scoreSum += 9
                    } else {
                        scoreSum += playerTwoMove + 1
                    }

                    break;

                case 'C':
                    if (element[2] == 'X') {
                        scoreSum += 7
                    } else {
                        scoreSum += playerTwoMove + 1
                    }

                    break;

            }
        }
    });

    console.log(scoreSum)



})




// A = Rock B = Paper C = Scissors, // X = Rock Y = Paper Z = Scissors, 

