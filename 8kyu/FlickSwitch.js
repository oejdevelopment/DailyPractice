function flickSwitch(arr) {
  let isSwitchOn = true;
  let stackArray = [];
  arr.forEach((element) => {
    if (element === "flick") {
      isSwitchOn = !isSwitchOn;
    }
    stackArray.push(isSwitchOn);
  });
  return stackArray;
}
