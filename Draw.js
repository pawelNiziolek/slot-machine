class Draw {
  constructor() {
    this.options = [
      "url(./images/black.png)",
      "url(./images/heart.jpg)",
      "url(./images/luck.png)"
    ];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }

  drawResult() {
    let colors = [];
    // uzupełnianie poprzez losowanie
    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];
      colors.push(color);
    }
    return colors;
  }
}
