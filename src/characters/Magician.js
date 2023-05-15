import Transit from '../Transit';

export default class Magician extends Transit {
  constructor(name, type = 'Magician', attack = 10, defence = 40) {
    super(name, type, attack, defence);
  }
}
