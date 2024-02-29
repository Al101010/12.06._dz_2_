import Character from '../Character';

test('checking the Character', () => {
  const character = {name: 'Oleg', type: 'Bowerman', health: 100, level: 1, attack: undefined, defence: undefined};
  // result = new Character('Oleg', 'Bowerman');
  expect(new Character('Oleg', 'Bowerman')).toEqual(character);
});

test('if (10 < name < 2)', () => {
  expect(() => new Character('O', 'Bowerman')).toThrow('Имя должно содержать от 2 до 10 символов');
  expect(() => new Character('Olegggggggg', 'Bowerman')).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('if !types', () => {
  expect(() => new Character('Oleg')).toThrow('Неизвестное существо');
  expect(() => new Character('Oleg', 'He')).toThrow('Неизвестное существо');
});