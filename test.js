// Import all the functions from app.js
const {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound
} = require('./app.js');

// First test
test('adds 14 + 9 to equal 23', () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

// Second test: euro -> dollar
test("One euro should be 1.07 dollars", function () {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;
  expect(dollars).toBe(expected);
});

// Third test: dollar -> yen
test("One dollar should be the correct amount in yen", function () {
  const yen = fromDollarToYen(1);
  // USD -> EUR -> JPY
  const expected = (1 / 1.07) * 156.5;
  expect(yen).toBe(expected);
});

// Fourth test: yen -> pound
test("One yen should be the correct amount in pounds", function () {
  const pounds = fromYenToPound(1);
  // JPY -> EUR -> GBP
  const expected = (1 / 156.5) * 0.87;
  expect(pounds).toBe(expected);
});