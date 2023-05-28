/*global describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {

  it('can be instantiated' , () => {
    
    const port = new Port('Southampton');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

 it('has a starting port', () => {
    const port = new Port('Southampton');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
 });

 it('is able to set sail', () => {
    const southampton = new Port('Southampton');
    const copenhagen = new Port('Copenhagen');
    const itinerary = new Itinerary([southampton,copenhagen]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(southampton.ships).not.toContain(ship);
    
});

it('can dock at different ports', () => {
    const southampton = new Port('Southampton');
    const copenhagen = new Port('Copenhagen');
    const itinerary = new Itinerary([southampton, copenhagen])
    const ship = new Ship(itinerary);

    
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(copenhagen);
    expect(copenhagen.ships).toContain(ship);
});

it('can\'t sail futher than its itinerary', () => {
   const southampton = new Port('Southampton');
    const copenhagen = new Port('Copenhagen');
    const itinerary = new Itinerary([southampton, copenhagen])
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');

});

it('gets added to port on instatiation' , () => {
   
   const southampton = new Port('Southampton');
   const itinerary = new Itinerary([southampton]);
   const ship = new Ship(itinerary);

   expect(southampton.ships).toContain(ship);
});

});
