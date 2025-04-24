# Testing Basics (with jest)

## This was my first hands on repo on how to do TDD in real life

---

## How to use 
past the following in your console
```js
  npm install --save-dev jest
```

Then, create a file named sum.test.js. This will contain the test:

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Add the following section to your package.json:
```js
{
  "scripts": {
    "test": "jest"
  }
}
```

Finally, run npm test and Jest will print this message:

```js
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
