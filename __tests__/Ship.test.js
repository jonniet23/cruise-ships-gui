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
         southampton = {
            addShip : jest.fn(),
            removeShip : jest.fn(),
            name : 'Southampton' ,
            ships : []
         };

         copenhagen = {
            addShip : jest.fn(),
            removeShip : jest.fn(),
            name : 'Copenhagen' ,
            ships : []
         };
         
          itinerary = {
            ports : [southampton,copenhagen]
          };
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
         expect(southampton.removeShip).toHaveBeenCalledWith(ship);
         
     });
     
     it('gets added to port on instatiation' , () => {
   
      expect(southampton.addShip).toHaveBeenCalledWith(ship);
   
   });
   
   
  it('can dock at different ports', () => {
    
    ship.setSail();  
    ship.dock();
 
    expect(ship.currentPort).toBe(copenhagen);
    expect(copenhagen.addShip).toHaveBeenCalledWith(ship);
});

it('can\'t sail futher than its itinerary', () => {
   
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');


   });

});
});

