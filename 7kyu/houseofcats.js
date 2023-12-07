function houseOfCats(legs) {
  let solutions = [];

  for (let cats = 0; cats <= legs / 4; cats++) {
    let people = (legs - cats * 4) / 2;

    if (Number.isInteger(people)) {
      solutions.unshift(people);
    }
  }

  return solutions;
}
