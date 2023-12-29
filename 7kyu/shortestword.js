// Define a function named findShort that takes a string parameter s
function findShort(s) {
  // Step 1: Split the input string into an array of words using a space (' ') as the delimiter
  let arr = s.split(" ");

  // Step 2: Use the map method to create an array of word lengths
  // The arrow function x => x.length calculates the length of each word
  let wordLengths = arr.map((x) => x.length);

  // Step 3: Use the spread operator (...) to pass each element of the array as arguments to Math.min
  // Math.min is used to find the minimum length among all the words
  let minLength = Math.min(...wordLengths);

  // Step 4: Return the length of the shortest word
  return minLength;
}
