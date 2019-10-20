var should = chai.should()
var x = 4
describe('function FizzBuzz', function () {
  it(`${x} is divisible by 3 and 5`, function () {
    var result = FizzBuzz(x)
    result.should.be.equal('FizzBuzz')
  })
  it(`${x} is divisible by 3`, function () {
    var result = FizzBuzz(x)
    const regexp = RegExp('Fizz')
    result.should.be.match(regexp)
  })
  it(`${x} is divisible by 5`, function () {
    var result = FizzBuzz(x)
    const regexp = RegExp('Buzz')
    result.should.be.match(regexp)
  })
  it(`${x} is unable to divisible by 3 and 5`, function () {
    var result = FizzBuzz(x)
    result.should.be.equal(x)
  })
})