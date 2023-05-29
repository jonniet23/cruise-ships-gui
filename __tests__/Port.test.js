/*global describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
  
  it('can be instantiated' , () => {
    const port = new Port();
    expect(port).toBeInstanceOf(Object);
  });

describe('new port variable', () => {
  describe('new port variable', () => {
    let port;
 
   beforeEach(() => {
     port = new Port('Southampton');
  });

  it('has a name', () => {
    
    expect(port.name).toBe('Southampton');
 });

 it('can add a ship', () => {
  const ship = {};

  port.addShip(ship);

  expect(port.ships).toContain(ship);
 });

 it('can remove a ship', () => {
   const qe1 = {};
    const qe2 = {};

    port.addShip(qe1);
    port.addShip(qe2);
    port.removeShip(qe2);

    expect(port.ships).toEqual([qe1]);
 });

});
});
});