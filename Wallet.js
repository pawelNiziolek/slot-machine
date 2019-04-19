class Wallet {
  constructor(money) {
    let _money = money;
    //retrieving current wallet content
    this.getWalletValue = () => _money;

    //checking if the user has the right amount of funds

    this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
    };

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("nieprawidłowy typ działania");
        }
      } else {
        throw new Error("nieprawidłowa liczba");
      }
    };
  }
}
