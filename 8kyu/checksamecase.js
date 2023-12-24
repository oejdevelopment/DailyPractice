function sameCase(a, b) {
  let result;

  if (!a.match(/^[A-Za-z]$/) || !b.match(/^[A-Za-z]$/)) {
    result = -1;
  } else if (
    (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
  ) {
    result = 1;
  } else if (
    (a != a.toUpperCase() || a != a.toLowerCase()) &&
    (b != b.toUpperCase() || b != b.toLowerCase())
  ) {
    result = 0;
  } else {
    result = 5;
  }
  return result;
}
