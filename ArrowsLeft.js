function anyArrows(arrows) {
  return arrows.some(
    (arrow) => arrow.damaged === undefined || arrow.damaged !== true
  );
}
