function defineSuit(card) {
    let suitArr = card.split("");

    if (suitArr[suitArr.length-1] === "♣") {
      return "clubs";
    } else if (suitArr[suitArr.length-1] === "♦") {
      return "diamonds";
    } else if (suitArr[suitArr.length-1] === "♠") {
      return "spades";
    } else if (suitArr[suitArr.length-1] === "♧" || suitArr[suitArr.length-1] === "♥") {
      return "hearts";
    }
  }