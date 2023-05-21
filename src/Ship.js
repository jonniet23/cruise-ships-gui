function Ship(port) {
    this.name = port;
    this.currentPort = port;

};

Ship.prototype.setSail = function() {

    if(this.currentPort ='') {
    return this.currentPort;
    }
    
};

Ship.prototype.dock = function(port) {

    
    
        this.currentPort = port;
    
};
    

    
       



module.exports = Ship;