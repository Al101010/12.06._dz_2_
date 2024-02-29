import Character from '../Character';

test('checking the Character', () => {
  const character = {name: 'Oleg', type: 'Bowerman', health: 100, level: 1, levelUp: function () {
    if (this.health <= 0) {
        throw new Error('Geme over, health <= 0');
      }
      this.level += 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
    }, attack: undefined, defence: undefined
  };
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


