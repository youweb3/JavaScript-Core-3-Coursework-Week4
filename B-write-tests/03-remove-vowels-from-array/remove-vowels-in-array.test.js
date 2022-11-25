let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const words = ["irina", "etza", "daniel"];
  // Act
  const outPut = removeVowelsFromWords(words);
  // Assert
  const expected = ["rn", "tz", "dnl"];

  expect(outPut).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
