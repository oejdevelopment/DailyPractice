function warnTheSheep(queue) {
  let x = queue.indexOf("wolf");
  return x === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - x - 1
      }! You are about to be eaten by a wolf!`;
}
