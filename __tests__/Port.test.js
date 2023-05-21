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
});