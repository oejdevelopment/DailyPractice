// PREP breakdown:

// Parameters:
//   - A: an array of elements
// Return:
//   - The element that occurs an odd number of times in the array
// Example:
//   - Input: [1, 2, 2, 1, 3]
//   - Output: 3 (since 3 occurs once, while 1 and 2 occur twice)
// Pseudocode:
//   1. Iterate through each element, 'element', in the array 'A'.
//   2. Use the 'filter' method to count the occurrences of 'element' in 'A'.
//   3. Check if the count is odd (not divisible by 2).
//   4. If the count is odd, return the current 'element'.
//   5. If no element with an odd count is found, the function implicitly returns undefined.

function findOdd(A) {
  for (const element of A) {
    if (A.filter((x) => x === element).length % 2 !== 0) {
      return element;
    }
  }
}
