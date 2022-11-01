const { transform } = require('camaro')

test('camaro transform()', async () => {
  const result = await transform('<foo>bar</foo>', { foo: 'foo'})
  console.log('result', result);
  expect(result).toEqual({foo: 'bar'})
});
