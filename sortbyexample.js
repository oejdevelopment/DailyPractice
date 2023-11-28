/**
 * Sorts an array based on the order of elements in another reference array.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {Array} exampleArr - The reference array that defines the desired order.
 * @returns {Array} - A new array sorted according to the order in exampleArr.
 */
function exampleSort(arr, exampleArr) {
    // Use the Array.sort() method with a custom comparison function
    // that compares the indices of elements in arr based on their order in exampleArr.
    return arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
  }
  
  // Example usage:
  // const sortedArray = exampleSort(['b', 'c', 'a'], ['a', 'b', 'c']);
  // Result: ['a', 'b', 'c']
  