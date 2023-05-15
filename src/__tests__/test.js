import Magician from '../characters/Magician';

test('should return correct hero\'s attack', () => {
  const hero = new Magician('Bob');
  hero.cellsRange = 3;
  expect(hero.attack).toBe(7);
});

test('should return correct hero\'s attack when stoned', () => {
  const hero = new Magician('Bob');
  hero.attack = 40;
  hero.cellsRange = 4;
  hero.stoned = true;
  expect(hero.attack).toBeCloseTo(14);
});
