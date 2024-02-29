import Magician from '../Magician';

test('checking the Magician', () => {
  const result = new Magician('Oleg');
  const magician = {name: 'Oleg', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40};
  expect(result).toEqual(magician);
});
