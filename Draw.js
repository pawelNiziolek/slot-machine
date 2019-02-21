class Draw {
  constructor() {
    this.options = ['url(black.png)', 'url(heart.jpg)', 'url(luck.png)'];
    let _result = this.drawResult()
    this.getDrowResult = () => _result;
  }

  drawResult() {
    let colors = [];
    // uzupełnianie poprzez losowanie
    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];
      colors.push(color);
    }
    return colors
  }
}