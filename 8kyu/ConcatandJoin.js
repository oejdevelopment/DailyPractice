function bigToSmall(arr) {
  let slot = [];
  return slot
    .concat(...arr)
    .sort((a, b) => a - b)
    .reverse()
    .join(">");
}
