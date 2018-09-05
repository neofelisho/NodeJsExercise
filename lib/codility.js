'use strict'

module.exports = Codility

function Codility () {}

Codility.prototype.FrogJmp = function (x, y, d) {
  let remainder = (y - x) % d
  let times = parseInt((y - x) / d)
  return remainder === 0 ? times : times + 1
}

Codility.prototype.NumberSolitaire = function (array) {
  let dp = []
  dp[0] = array[0]
  for (let i = 1; i < array.length; i++) {
    dp.push(Number.MIN_SAFE_INTEGER)
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j <= 6; j++) {
      let target = i + j
      if (target >= array.length) continue
      let temp = dp[i] + array[target]
      dp[target] = temp > dp[target] ? temp : dp[target]
    }
  }

  return dp[array.length - 1]
}
