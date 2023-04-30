import Character from './Character';

export default class Math extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.cellsRange = 0;
    this.stoned = false;
  }

  set attack(value) {
    if (this.stoned) {
      this._attack = value - Math.log2(this.cellsRange) * 5;
    } else {
      this._attack = value * (1 - this.cellsRange / 10);
    }
  }

  get attack() {
    return this._attack;
  }

  set stoned(isStoned) {
    this._stoned = isStoned;
  }

  get stoned() {
    return this._stoned;
  }
}
