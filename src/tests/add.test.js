const add = (a, b) => a + b ;
const generateGreeting = (name) => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should should greet with given name', () => {
  const greetResult = generateGreeting("Stephen");
  expect(greetResult).toBe('Hello Stephen');
});
