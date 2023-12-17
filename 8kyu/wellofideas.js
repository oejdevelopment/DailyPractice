function well(x) {
  let goodNum = 0;
  for (const element of x) {
    if (element === "good") {
      goodNum++;
    }
  }

  if (goodNum === 0) {
    return "Fail!";
  } else if (goodNum > 2) {
    return "I smell a series!";
  } else {
    return "Publish!";
  }
}
