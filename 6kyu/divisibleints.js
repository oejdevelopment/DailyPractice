function getCount(n) {
  let resultArr = [];
  let holdArrSingle = n.toString().split("");
  let holdArrCombined = holdArrBlank.map(
    holdArrSingle[i] + holdArrSingle[i + 1]
  );
  for (let i = 0; i < holdArrCombined.length; i++) {
    if (holdArrCombined[i] % 2 === 0) {
      resultArr.push(holdArrCombined[i]);
    }
  }
  return resultArr.length;
}
//TODO: Finish
