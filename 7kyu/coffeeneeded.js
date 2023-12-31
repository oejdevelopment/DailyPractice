function howMuchCoffee(events) {
  const cupValues = {
    CW: 2,
    CAT: 2,
    DOG: 2,
    MOVIE: 2,
    movie: 1,
    cw: 1,
    cat: 1,
    dog: 1,
  };

  let cups = 0;

  for (let instance of events) {
    const CountInstance = instance;
    cups += cupValues[CountInstance] || 0;
  }

  return cups > 3 ? "You need extra sleep" : cups;
}
