const answers = require('./answers')
const SIZE = 3

const checkWinner = function (player1, player2, currentPlayer) {
  // win condition
  let isWin = false
  // all placeholder for each players cellsClicked
  let playerSelections = []

  // if player is O set their cells for player1 else set for player2
  currentPlayer === 0 ? playerSelections = player1.cellsClicked : playerSelections = player2.cellsClicked
  if (playerSelections.length >= SIZE) {
    for (let winningSet = 0; winningSet < answers.winners.length; winningSet++) {
      const sets = answers.winners[winningSet] // winning hand
      let setFound = true

      for (let r = 0; r < sets.length; r++) {
        let found = false

        // players cellsClicked
        for (let s = 0; s < playerSelections.length; s++) {
          if (sets[r] === playerSelections[s]) {
            found = true
            break
          }
        }

        // value not found in players cellsClicked
        // not a valid set, move on
        if (found === false) {
          setFound = false
          break
        }
      }

      if (setFound === true) {
        isWin = true
        break
      }
    }
  }

  return isWin
}
module.exports = {
  checkWinner
}
