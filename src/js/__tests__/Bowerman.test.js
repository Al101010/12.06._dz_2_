import Bowerman from '../Bowerman';

test('checking the Bowerman', () => {
    const result = new Bowerman('Oleg');
    const bowerman = {name: 'Oleg', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25};
    expect(result).toEqual(bowerman);
});
