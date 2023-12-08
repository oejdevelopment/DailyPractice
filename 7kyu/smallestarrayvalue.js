function min(arr, toReturn) {
  let sortArr = arr.sort((a, b) => a - b);
  if (toReturn === "value") {
    return sortArr[0];
  }
  if (toReturn === "index") {
    return arr.indexOf(sortArr[0]);
  }
}
