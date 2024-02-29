import Daemon from '../Daemon';

test('checking the Daemon', () => {
    const result = new Daemon('Oleg');
    const daemon = {name: 'Oleg', type: 'Daemon', health: 100, level: 1, attack: 25, defence: 25};
    expect(result).toEqual(daemon);
});
