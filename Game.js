class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    // usuwanie animacji (klasy) active dla "dźwigni"
    function handFun() {
      hand.classList.remove("active");
    }
    const btn = document.getElementById("start");
    btn.addEventListener("click", () => {
      this.startGame();
      hand.classList.add("active");
      setTimeout(handFun, 1800);
    });

    this.spanWallet = document.querySelector(".span-money");
    this.boards = [...document.querySelectorAll(".image")];
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".span-result");
    this.spanGame = document.querySelector(".span-game");
    this.spanWins = document.querySelector(".span-win");
    this.spanLosses = document.querySelector(".span-loss");
    const hand = document.querySelector(".el2");

    this.render();
  }

  render(
    colors = [
      "linear-gradient(rgb(110, 110, 110), white, rgb(110, 110, 110)",
      "linear-gradient(rgb(110, 110, 110), white, rgb(110, 110, 110)",
      "linear-gradient(rgb(110, 110, 110), white, rgb(110, 110, 110)"
    ],
    money = this.wallet.getWalletValue(),
    result = "",
    stats = [0, 0, 0],
    bid = 0,
    wonMoney = 0
  ) {
    this.boards.forEach((board, i) => {
      board.style.backgroundImage = colors[i];
    });

    this.spanWallet.textContent = money;
    if (result) {
      result = `WYGRANA ${wonMoney}$`;
    } else if (!result && result !== "") {
      result = `PRZEGRANA ${bid}$`;
    }

    // zmienne i funkcja dla uruchomienia pop-up'a po przegranej
    const wrap = document.querySelector(".wrap");
    const modalWrap = document.querySelector(".modal-wrap");
    const h1 = document.querySelector(".machine-up h1");

    function youLose() {
      wrap.classList.add("blur");
      modalWrap.classList.add("show");
    }
    if (money <= 0) {
      setTimeout(youLose, 2000);
    } else if (money >= 1000) {
      h1.textContent = "BANDYTA lvl master";
      h1.classList.add("big-money");
    } else if (money < 1000) {
      h1.textContent = "JEDNORĘKI BANDYTA";
      h1.classList.remove("big-money");
    }

    this.spanResult.textContent = result;
    this.spanGame.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];

    this.inputBid.value = "";
  }

  startGame() {
    if (this.inputBid.value < 1) return alert("Kwota jest za mała!");
    const bid = Math.floor(this.inputBid.value);

    if (!this.wallet.checkCanPlay(bid)) {
      return alert("Masz za mało środków lub podałeś nieprawidłową wartość!");
    }

    this.wallet.changeWallet(bid, "-");

    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.chceckWinner(colors);
    const wonMoney = Result.moneyWinInGame(win, bid);
    this.wallet.changeWallet(wonMoney);
    this.stats.addGameToStatistic(win, bid);

    this.render(
      colors,
      this.wallet.getWalletValue(),
      win,
      this.stats.showGameStatistics(),
      bid,
      wonMoney
    );
  }
}
