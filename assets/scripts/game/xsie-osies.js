'use trict'
// const config = require('../utility/gameConfig')
const SIZE = 3

const drawBoard = function () {
  const parent = document.querySelector('#game-board')
  let drawRow
  let drawColumn
  for (let rows = 0; rows < SIZE; rows++) {
    drawRow = document.createElement('tr')
    for (let columns = 0; columns < SIZE; columns++) {
      drawColumn = document.createElement('td')
      drawColumn.innerHTML = 'X'
      drawRow.appendChild(drawColumn)
    }
    parent.appendChild(drawRow)
  }
}
