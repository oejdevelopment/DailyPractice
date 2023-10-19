function whoseMove(lastPlayer, win) {
  if (
    (lastPlayer == "white" && win == true) ||
    (lastPlayer == "black" && win == false)
  ) {
    return "white";
  } else {
    return "black";
  }
}
