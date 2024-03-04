import Character from '../Character';

import Bowerman from '../Bowerman';

test('checking the Character - levelUp()', () => {
  const characterBowermanOleg = new Bowerman('Oleg');
  characterBowermanOleg.levelUp();
  const result = {name: 'Oleg', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30};
  expect(characterBowermanOleg).toEqual(result);
});

test('Geme over, health <= 0', () => {
  expect(() => {
    const characterBowermanOlga = new Bowerman('Olga');
    characterBowermanOlga.health = 0;
    characterBowermanOlga.levelUp();
  }).toThrow('Geme over, health <= 0');
});

test('if (10 < name < 2)', () => {
  expect(() => new Character('O', 'Bowerman')).toThrow('Имя должно содержать от 2 до 10 символов');
  expect(() => new Character('Olegggggggg', 'Bowerman')).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('if !types', () => {
  expect(() => new Character('Oleg')).toThrow('Неизвестное существо');
  expect(() => new Character('Oleg', 'He')).toThrow('Неизвестное существо');
});

test('checking the Character - damage()', () => {
  const characterBowermanIvan = new Bowerman('Ivan');
  characterBowermanIvan.damage(15);
  const result = {name: 'Ivan', type: 'Bowerman', health: 88.75, level: 1, attack: 25, defence: 25};
  expect(characterBowermanIvan).toEqual(result);
});

test('you cannot raise the level of the deceased', () => {
  expect(() => {
    const characterBowermanAnna = new Bowerman('Anna');
    characterBowermanAnna.damage(150);
    characterBowermanAnna.damage(15);
  }).toThrow('you cannot raise the level of the deceased');
});