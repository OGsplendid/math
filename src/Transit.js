import Character from './Character';

export default class Transit extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.cellsRange = 0;
    this.stoned = false;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    this._attack *= (1 - this.cellsRange / 10);
    if (this._stoned) {
      this._attack -= Math.log2(this.cellsRange) * 5;
    }
    return this._attack;
  }

  set stoned(isStoned) {
    this._stoned = isStoned;
  }

  get stoned() {
    return this._stoned;
  }
}
