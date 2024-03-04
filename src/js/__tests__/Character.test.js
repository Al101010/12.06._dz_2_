import Character from '../Character';

import Bowerman from '../Bowerman';

test('checking the Character', () => {
  const characterBowerman = new Bowerman('Oleg');
  characterBowerman.levelUp();
  const result = {name: 'Oleg', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30};
  expect(characterBowerman).toEqual(result);
});

test('Geme over, health <= 0', () => {
  const characterBowermanOlga = new Bowerman('Olga');
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
