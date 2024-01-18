function pipeFix(numbers) {
  let arr = [];
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    arr.push(i);
  }
  return arr;
}
