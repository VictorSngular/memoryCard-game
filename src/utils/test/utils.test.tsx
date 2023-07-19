import { generateUniqueNumbers, getRandomNumber } from "../cardsGame";
import { checkInputText } from "../formValidation";

describe("generateUniqueNumbers", () => {
  it("should return an array with 9 unique numbers", () => {
    const result = generateUniqueNumbers();
    const uniqueResult = Array.from(new Set(result));
    expect(result.length).toBe(9);
    expect(uniqueResult.length).toBe(9);
  });

  it("should return an array with numbers between 1 and 9", () => {
    const result = generateUniqueNumbers();
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(9);
    });
  });
});

describe("getRandomNumber", () => {
  it("should return a random number between 1 and 9", () => {
    const result = getRandomNumber();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(9);
  });
});

describe("checkInputText", () => {
  it("should return true for valid input", () => {
    const validInput = "Valid Input";
    expect(checkInputText(validInput)).toBeTruthy();
  });

  it("should return false for input with less than 3 characters", () => {
    const shortInput = "ab";
    expect(checkInputText(shortInput)).toBeFalsy();
  });

  it("should return false for input with non-alphabetical characters", () => {
    const invalidInput = "Invalid1";
    expect(checkInputText(invalidInput)).toBeFalsy();
  });

  it("should return false for empty input", () => {
    const emptyInput = "";
    expect(checkInputText(emptyInput)).toBeFalsy();
  });
});
