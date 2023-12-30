function add(callback) {
  return function (n) {
    return callback + n;
  };
}
