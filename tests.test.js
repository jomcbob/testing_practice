const { sum, cap, reverse, calculator, caesarCipher, analyzeArray } = require('./script')

num1 = 4
num2 = 5
test(`adds ${num1} + ${num2} to equal ${num1 + num2}`, () => {
  expect(sum(num1, num2)).toBe(9)
})

test('capitalize', () => {
  expect(cap('word')).toBe('Word')
})

test('reverse string', () => {
  expect(reverse('words')).toBe('sdrow')
})

test('calculator', () => {
  expect(calculator.add(1, 2)).toBe(3)
  expect(calculator.multiply(1, 2)).toBe(2)
  expect(calculator.divide(4, 2)).toBe(2)
  expect(calculator.subtract(2, 1)).toBe(1)
})

test('caesar cipher', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})