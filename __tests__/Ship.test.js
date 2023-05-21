/*global describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {

  it('can be instantiated' , () => {
    const ship = new Ship();
    expect(ship).toBeInstanceOf(Object);
  });

 it('has a starting port', () => {
    const port = new Port('Southampton');
    const ship = new Ship(port);

    expect(ship.currentPort).toBe(port);
 });

 it('is able to set sail', () => {
    const port = new Port('Southampton');
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
});

it('can dock at different ports', () => {
    const southampton = new Port('Southampton');
    const ship = new Ship(southampton);

    const copenhagen = new Port('Copenhagen')

    ship.dock(copenhagen);

    expect(ship.currentPort).toBe(copenhagen);
});

});
