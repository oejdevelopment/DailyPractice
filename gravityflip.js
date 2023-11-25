/**
 * Sorts an array in ascending or descending order based on the direction specified.
 *
 * @param {string} d - The direction of sorting ('R' for ascending, 'L' for descending).
 * @param {number[]} a - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * @example
 * const ascendingArray = flip('R', [3, 1, 4, 1, 5, 9, 2, 6]);
 * console.log(ascendingArray); // Output: [1, 1, 2, 3, 4, 5, 6, 9]
 *
 * const descendingArray = flip('L', [3, 1, 4, 1, 5, 9, 2, 6]);
 * console.log(descendingArray); // Output: [9, 6, 5, 4, 3, 2, 1, 1]
 *
 * @purpose
 * This function provides a way to sort an array either in ascending or descending order
 * based on the specified direction ('R' for ascending, 'L' for descending).
 */
const flip = (d, a) => {
  if (d === "R") {
    return a.sort((a, b) => a - b);
  } else if (d === "L") {
    return a.sort((a, b) => b - a);
  }
};
