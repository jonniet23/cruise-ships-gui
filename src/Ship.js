function Ship(name) {
    this.name = name;
    this.startingPort = 'Southampton';

};

Ship.prototype.setSail = function() {

    if(this.startingPort ='') {
        return this.startingPort;
    }
    
};
module.exports = Ship;