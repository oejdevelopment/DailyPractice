class Ghost {
  constructor() {
    let calc = Math.floor(Math.random() * 4) + 1;
    let colors = {
      1: "red",
      2: "white",
      3: "yellow",
      4: "purple",
    };

    this.color = colors[calc];
  }
}
