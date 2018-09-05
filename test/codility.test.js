const chai = require('chai')
const expect = chai.expect
const Codility = require('../lib/codility')

describe('Codility tests', () => {
  let codility = new Codility()

  describe('Tests for NumberSolitaire', () => {
    it('[1, -2, 0, 9, -1, -2]', () => {
      let array = [1, -2, 0, 9, -1, -2]
      let actual = codility.NumberSolitaire(array)
      expect(actual).to.be.equal(8)
    })
    it('[-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16]', () => {
      let array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16]
      let actual = codility.NumberSolitaire(array)
      expect(actual).to.be.equal(-31)
    })
  })
})
