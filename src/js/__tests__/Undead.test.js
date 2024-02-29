import Undead from '../Undead';

test('checking the Undead', () => {
    const result = new Undead('Oleg');
    const undead = {name: 'Oleg', type: 'Undead', health: 100, level: 1, attack: 40, defence: 10};
    expect(result).toEqual(undead);
  });
