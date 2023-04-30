export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = 100;
    this.level = 1;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Inappropriate name length(must contain 2 to 10 symbols');
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    switch (value) {
      case 'Bowman':
      case 'Daemon':
      case 'Magician':
      case 'Swordsman':
      case 'Undead':
      case 'Zombie':
        this._type = value;
        break;
      default:
        throw new Error('Inappropriate type (must be Bowman, Daemon, Magician, Swordsman, Undead or Zombie');
    }
  }
}
