import Swordsman from '../Swordsman';

test('checking the Swordsman', () => {
    const result = new Swordsman('Oleg');
    const swordsman = {name: 'Oleg', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10};
    expect(result).toEqual(swordsman);
});
