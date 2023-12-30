// Problem: Determine whether a given sentence contains the word "english," regardless of the case.

// Requirements:
// 1. The function should be case-insensitive.
// 2. It should return `true` if the word "english" is found in the sentence, and `false` otherwise.
// 3. The function should handle different cases, including situations where the word "english" is a substring of a larger word.

// Examples:
// 1. Input: "Do you speak English?"
//    Output: `true`
// 2. Input: "I have a painting."
//    Output: `false`
// 3. Input: "The language spoken here is not english."
//    Output: `true`
// 4. Input: "The cat is playing in the garden."
//    Output: `false`

// Plan:
// The `toLowerCase()` method is used to make the comparison case-insensitive,
// and `includes("english")` checks if the word "english" is present in the lowercase version of the sentence.

function spEng(sentence) {
  // Convert the sentence to lowercase and check if it includes the word "english"
  return sentence.toLowerCase().includes("english");
}
