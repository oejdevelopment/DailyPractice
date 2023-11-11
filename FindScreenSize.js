function findScreenHeight(width, ratio) {
  return width + "x" + (width / ratio.split(":")[0]) * ratio.split(":")[1];
}
