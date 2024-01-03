function numberOfSigfigs(n) {
  return n.toString().replace(/(?:^0*|(\d+))(\.\d*)?(?:0*)$/g, "$1");).length;
}
