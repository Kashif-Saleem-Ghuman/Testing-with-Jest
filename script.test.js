const stringLength = require("./script");
const reverseString = require("./revstr");
const calculator = require("./calculator");
const  capitalise = require('./capitalise');

// test case for task 1
test("checks string length Hello to be 5", () => {
  expect(stringLength("Hello")).toBe(5);
});

test("check if str length is zero", () => {
  expect(stringLength("")).toBe("Error");
});

test("check if str length is greater than ten", () => {
  expect(stringLength("123456789123")).toBe("Error");
});

// test case task 2 reversed string

test("check if string hello return as olleH ", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

// test calculator

const calc1 = new calculator(4, 8);
const calc2= new calculator(5, 10);
const calc3 = new calculator(15, 20);

// addition test
describe("calculator", () => {
  test("add", () => {
  expect(calc1.add()).toBe(12);
  });
  test("add", () => {
    expect(calc2.add()).toBe(15);
    });
  test("add", () => {
    expect(calc3.add()).toBe(35);
    });

  });
  
  // subtraction test
  describe("calculator", () => {
    test("subtract", () => {
    expect(calc1.subtract()).toBe(4);
    });
    test("subtract", () => {
      expect(calc2.subtract()).toBe(5);
      });
    test("subtract", () => {
      expect(calc3.subtract()).toBe(5);
      });
  
    });

    // multiply test
    describe("calculator", () => {
      test("multiply", () => {
      expect(calc1.multiply()).toBe(32);
      });
      test("multiply", () => {
        expect(calc2.multiply()).toBe(50);
        });
      test("multiply", () => {
        expect(calc3.multiply()).toBe(300);
        });
      });


         // divide test
    describe("calculator", () => {
      test("divide", () => {
      expect(calc1.divide()).toBe(0.5);
      });
      test("divide", () => {
        expect(calc2.divide()).toBe(0.5);
        });
      test("divide", () => {
        expect(calc3.divide()).toBe(0.75);
        });
      });

      test ( 'first letter should be uppercase', () => {
        expect(capitalise("hello")).toBe("Hello");
      })