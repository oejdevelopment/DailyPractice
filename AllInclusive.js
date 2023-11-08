function containAllRots(strng, arr) {
  if (strng === "") {
    return true;
  }

  for (let i = 0; i < strng.length; i++) {
    let rotatedStr = strng.slice(i) + strng.slice(0, i);
    if (arr.indexOf(rotatedStr) === -1) {
      return false;
    }
  }

  return true;
}
