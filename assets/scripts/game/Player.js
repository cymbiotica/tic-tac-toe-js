class Player {
  constructor (name, gameId) {
    this.name = name
    this.gameId = gameId
    this.id = null
    this.cellsClicked = []
    this.points = 0
    this.isCurrentPlayer = null
  }
}

module.exports = {
  Player
}
