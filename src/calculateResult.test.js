import { calculateResult } from "./utils/CalculatorUtils"; 

describe("calculateResult function", () => {
  test("adds numbers correctly", () => {
    expect(calculateResult("2+3")).toBe(5);
  });

  test("subtracts numbers correctly", () => {
    expect(calculateResult("10-4")).toBe(6);
  });

  test("multiplies numbers correctly", () => {
    expect(calculateResult("3*5")).toBe(15);
  });

  test("divides numbers correctly", () => {
    expect(calculateResult("20/4")).toBe(5);
  });

  test("calculates square root correctly", () => {
    expect(calculateResult("√(16)")).toBe(4);
  });

  test("calculates sin correctly", () => {
    expect(calculateResult("sin(30)")).toBeCloseTo(0.5);
  });

  test("calculates cos correctly", () => {
    expect(calculateResult("cos(60)")).toBeCloseTo(0.5);
  });

  test("calculates tan correctly", () => {
    expect(calculateResult("tan(45)")).toBeCloseTo(1);
  });

  test("handles invalid expressions safely", () => {
    expect(() => calculateResult("2+*3")).toThrow("Invalid calculation");
  });

  test("rejects unsafe characters", () => {
    expect(() => calculateResult("2+alert(1)")).toThrow("Invalid characters in expression");
  });
});
