/*global describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
   describe('with ports and an itinerary', () => {
      let ship;
      let southampton;
      let copenhagen;
      let itinerary;

     beforeEach(() => {
          southampton = new Port('Southampton');
          copenhagen = new Port('Copenhagen');
          itinerary = new Itinerary([southampton,copenhagen]);
          ship = new Ship(itinerary);
 
      });

      it('can be instantiated' , () => {
    
         expect(ship).toBeInstanceOf(Object);
       });

       it('has a starting port', () => {
        
          expect(ship.currentPort).toBe(southampton);
     
         });
     
      it('is able to set sail', () => {
        
         ship.setSail();
     
         expect(ship.currentPort).toBeFalsy();
         expect(southampton.ships).not.toContain(ship);
         
     });
     
     it('gets added to port on instatiation' , () => {
   
      expect(southampton.ships).toContain(ship);
   
   });
   
   describe('with ports and an itinerary', () => {
      beforeEach(() => {
          const southampton = new Port('Southampton');
          const copenhagen = new Port('Copenhagen');
          const itinerary = new Itinerary([southampton,copenhagen]);
          const ship = new Ship(itinerary);
  
       });
  it('can dock at different ports', () => {
    
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(copenhagen);
    expect(copenhagen.ships).toContain(ship);
});

it('can\'t sail futher than its itinerary', () => {
   
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');


   });

});
});
});
