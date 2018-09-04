'use strict'

module.exports = mergeSort

function mergeSort (array) {
  if (array.length < 2) return array
  let mid = parseInt(array.length / 2)
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)))
}

function merge (left, right) {
  let final = []
  while (left.length && right.length) {
    final.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  return final.concat(left.concat(right))
}
