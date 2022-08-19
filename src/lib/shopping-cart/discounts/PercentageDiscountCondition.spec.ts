import { PercentageDiscountCondition } from "./PercentageDiscountCondition";

describe("Percentage Discount Condition Class", () => {
  it("should throw an error when creates a percentage discount condition with quantity less than 2", () => {
    expect(() => {
      const test = new PercentageDiscountCondition(90, 1);
    }).toThrowError();
  });

  it("should throw an error when creates a percentage discount condition with percentage higher than 100", () => {
    expect(() => {
      const test = new PercentageDiscountCondition(101, 2);
    }).toThrowError();
  });

  it("should throw an error when creates a percentage discount condition with percentage equal to zero", () => {
    expect(() => {
      const test = new PercentageDiscountCondition(0, 2);
    }).toThrowError();
  });

  it("should throw an error when creates a percentage discount condition with negative percentage", () => {
    expect(() => {
      const test = new PercentageDiscountCondition(-30, 2);
    }).toThrowError();
  });
});
