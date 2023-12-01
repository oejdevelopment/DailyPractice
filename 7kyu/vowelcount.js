function getCount(str) {
  let count = 0;

  for (let char of str) {
    if ("aeiou".includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}
