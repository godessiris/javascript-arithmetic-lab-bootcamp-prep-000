var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

function add(a,b){
  var sum = a+b;
  return sum;
}

function subtract(a,b){
  var difference = a-b;
  return difference;
}

function multiply(a,b){
  var product = a*b;
  return product;
}

function divide(a,b){
  var quotient = a/b;
  return quotient;
}

function inc(a){
  var sum = a+1;
  return sum;
}

function dec(a){
  var difference = a-1;
  return difference;
}

funtion makeInt(a.toString){
  var 
  
}


describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
