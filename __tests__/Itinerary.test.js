/*global describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');


describe('Itinerary', () => {

    it('can be instantiated' , () => {
      const itinerary = new Itinerary();
      expect(itinerary).toBeInstanceOf(Object);
    });

    it('can have ports' , () => {
        const southampton = jest.fn();
        const copenhagen = jest.fn();
        
        const itinerary = new Itinerary([southampton, copenhagen]);
        
        expect(itinerary.ports).toEqual([southampton, copenhagen]);
      });
});