class Traveler {
  constructor(name) {
    this.name = name;
  }

  food = 1;
  isHealthy = true;

  hunt() {
    this.food += 2;
  }

  eat() {
    if (this.food > 0) {
      this.food--;
    } else {
      this.isHealthy = false;
    }
  }

  get foods() {
    return this._food;
  }

  get Healthy() {
    return this._isHealthy;
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
  }
  passageiros = [];

  getAvailableSeatCount() {
    return this.capacity - this.passageiros.length;
  }

  join(passageiro) {
    if (this.capacity - this.passageiros.length > 0) {
      this.passageiros.push(passageiro);
    }
  }

  shouldQuarantine() {
    for (let i = 0; i < this.passageiros.length; i++) {
      if (this.passageiros[i].isHealthy === false) {
        return true;
      }
    }
  }

  totalFood() {
    let total = 0;
    this.passageiros.forEach((passageiro) => {
      total += passageiro.food;
    });
    return total;
  }
}
