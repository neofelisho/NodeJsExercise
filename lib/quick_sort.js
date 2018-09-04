'use strict'

module.exports = quickSort

function quickSort (array) {
  if (array.length < 2) return array
  let pivot = array[0]
  let left = []
  let right = [pivot]
  for (let i = 1; i < array.length; i++) {
    let candidate = array[i]
    if (candidate < pivot) left.push(candidate)
    else right.push(candidate)
  }
  return quickSort(left).concat(quickSort(right))
}
