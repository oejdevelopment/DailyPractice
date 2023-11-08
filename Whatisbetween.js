function between(a, b) {
  let ArrCall = [];

  let i = a;

  do {
    ArrCall.push(i);
    i++;
  } while (i <= b);

  return ArrCall;
}
