class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistic(win, bid) {
    let gameResult = {
      win: win,
      bid: bid
    }
    this.gameResults.push(gameResult)
  }

  addShowGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win).length;
    let losses = this.gameResults.filter(result => !result.win).length;
    return [games, wins, losses]
  }
}