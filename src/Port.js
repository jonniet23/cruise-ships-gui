function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function(ship) {
    const ships = this.ships;
    
    ships.push(ship); 
};

Port.prototype.removeShip = function(ship) {

    const ships = this.ships;
    
    ships.pop(ship);
}


module.exports = Port;