/*global describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {

  it('can be instantiated' , () => {
    const port = new Port();
    expect(port).toBeInstanceOf(Object);
  });

  it('has a name', () => {
    const port = new Port('Southampton');

    expect(port.name).toBe('Southampton');
 });

 it('can add a ship', () => {
  const port = new Port('Southampton');
  const ship = {};

  port.addShip(ship);

  expect(port.ships).toContain(ship);
 });

 it('can remove a ship', () => {
    const port = new Port('Southampton');
    const qe1 = {};
    const qe2 = {};

    port.addShip(qe1);
    port.addShip(qe2);
    port.removeShip(qe2);

    expect(port.ships).toEqual([qe1]);
 });

});