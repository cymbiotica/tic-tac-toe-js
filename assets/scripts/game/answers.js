
const winners = [] // array to hold winning combinations
const loadAnswers = function () {
  // arrays of winning combinations - straights and diangles.
  winners.push([1, 2, 3])
  winners.push([4, 5, 6])
  winners.push([7, 8, 9])
  winners.push([1, 4, 7])
  winners.push([2, 5, 8])
  winners.push([3, 6, 9])
  winners.push([1, 5, 9])
  winners.push([3, 5, 7])
}
module.exports = {
  loadAnswers
}
