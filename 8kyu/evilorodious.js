// Purpose: Determine whether the binary representation of a given number has an even or odd number of '1's.
// Roles:
//   - n: Input number
//   - result: Resulting string indicating if the number is "Evil" or "Odious"

function evil(n) {
  // Entities:
  //   - result: Variable to store the result

  // Processes:
  //   1. Convert the input number to its binary representation.
  //   2. Use a regular expression to find all occurrences of '1' in the binary representation.
  //   3. Get the length of the array containing the matched '1's.
  //   4. Check if the length is even or odd.
  //   5. Assign the corresponding result string based on whether the length is even or odd.

  let result;
  if (n.toString(2).match(/1/g).length % 2 === 0) {
    // If the number of '1's is even
    result = "It's Evil!";
  } else {
    // If the number of '1's is odd
    result = "It's Odious!";
  }

  // Return the final result
  return result;
}
