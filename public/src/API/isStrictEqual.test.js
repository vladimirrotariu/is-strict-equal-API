import isStrictEqual from "./isStrictEqual.js";

describe("Given a function named strictEquals", () => {
  let valueA, valueB;
  describe("When given the numbers 1 and 1", () => {
    test("Then it should return true, meaning that they are strictly equal", () => {
      valueA = 1, valueB = 1;

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeTruthy();
    })
  })

  describe("When given the numbers NaN and NaN", () => {
    test("Then it should return false, meaning that they are not strictly equal", () => {
      valueA = NaN, valueB = NaN;

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeFalsy();
    })
  })

  describe("When given the numbers 0 and -0", () => {
    test("Then it should return true, meaning that they are strictly equal", () => {
      valueA = 0, valueB = -0;

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeTruthy();
    })
  })

  describe("When given the number 1 and the string '1'", () => {
    test("Then it should return false, meaning that they are not strictly equal", () => {
      valueA = 1, valueB = "1";

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeFalsy();
    })
  })

  describe("When given the boolean true and the boolean false", () => {
    test("Then it should return false, meaning that they are not strictly equal", () => {
      valueA = true, valueB = false;

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeFalsy();
    })
  })

  describe("When given the boolean false and the boolean true", () => {
    test("Then it should return false, meaning that they are not strictly equal", () => {
      valueA = false, valueB = true;

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeFalsy();
    })
  })

  describe("When given the string 'water' and the string 'Water'", () => {
    test("Then it should return false, meaning that they are not strictly equal", () => {
      valueA = "water", valueB = "Water";

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeFalsy();
    })
  })

  describe("When given the string 'water' and the string 'waterish'", () => {
    test("Then it should return false, meaning that they are not strictly equal", () => {
      valueA = "water", valueB = "waterish";

      const result = isStrictEqual(valueA, valueB);

      expect(result).toBeFalsy();
    })
  })
})
