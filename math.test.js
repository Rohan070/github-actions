// Import the arithmetic functions from the math module
const { add, subtract, divide, multiply } = require("./math");

// Define a test suite named "Math.js tests"
describe("Math.js tests", () => {

  // Test case for the add function
  it("should test add", () => {
    // Ensure the add function returns the correct sum of two numbers
    expect(add(2, 2)).toBe(4);
  });

  // Test case for the subtract function
  it("Should test subtract", () => {
    // Ensure the subtract function returns the correct difference
    expect(subtract(2, 2)).toBe(0);
  });

  // Test case for the divide function
  it("Should test divide", () => {
    // Ensure the divide function returns the correct quotient
    expect(divide(2, 2)).toBe(1);
  });

  // Test case for the multiply function
  it("Should test multiply", () => {
    // Ensure the multiply function returns the correct product
    expect(multiply(2, 2)).toBe(4);
  });
});
