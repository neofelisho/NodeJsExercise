const chai = require('chai')
const expect = chai.expect
const quickSort = require('../lib/quick_sort')

describe('Test for merge sort', () => {
  it('should pass', () => {
    let array = [9, 8, 7]
    let actual = quickSort(array)
    expect(actual).to.be.eql([7, 8, 9])
  })
  it('should pass', () => {
    let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    let actual = quickSort(array)
    expect(actual).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
