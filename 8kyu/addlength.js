// PREP: This function enhances each word in a given string by appending its length.

// Purpose: To create an array of strings, each containing a word followed by its length.
// Result: Returns an array of strings with words and their respective lengths.

// Example:
// Input: "Hello world"
// Output: [ 'Hello 5', 'world 5' ]

// Parameters:
// - str: The input string containing words to be processed.
function addLength(str) {
  // Split the input string into an array of words, then map over each word,
  // creating a string with the word and its length. Finally, return the array.
  return str.split(" ").map((word) => word + " " + word.length);
}
