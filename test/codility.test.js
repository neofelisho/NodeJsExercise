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

  describe('Tests for PairSum', () => {
    it('[2, -4, 6, -3, 11, 12] to 8', () => {
      let array = [2, -4, 6, -3, 11, 12]
      let actual = codility.PairSum(array, 8)
      expect(actual).to.be.eql([[-4, 12], [-3, 11], [2, 6]])
    })
    it('[3, 2, 4] to 6', () => {
      let array = [3, 2, 4]
      let actual = codility.PairSum(array, 6)
      expect(actual).to.be.eql([[2, 4]])
    })
    it('[3, 2, 2, 2, 4, 3, 4] to 6', () => {
      let array = [3, 2, 4]
      let actual = codility.PairSum(array, 6)
      expect(actual).to.be.eql([[2, 4]])
    })
  })
})
