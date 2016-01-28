"use strict";

var Cylon = require("cylon");

var Driver = require("./driver");

var BLECLI = module.exports = function BLECLI(opts) {
  BLECLI.__super__.constructor.apply(this, arguments);

  this.serviceId = opts.serviceId;
  this.characteristicId = opts.characteristicId;

  this.commands = {
    tx: this.tx
  };
};

Cylon.Utils.subclass(BLECLI, Driver);


BLECLI.prototype.start = function(callback) {
  console.log("starting ble");
  this._handleRx();
  callback();
};

BLECLI.prototype.tx = function(value){
  this._writeCharacteristic(value, (function(err,data){
    this.emit("BLECLI:txcb", data);
  }).bind(this))
}

BLECLI.prototype._handleRx = function(){
  this.connection.notifyServiceCharacteristic(
    this.serviceId,
    this.characteristicId,
    true,
    (function(err, data) {
      this.emit("BLECLI:rx", data.toString())
    }).bind(this)
  );

};


BLECLI.prototype._writeCharacteristic = function(value, callback) {
  this.connection.writeServiceCharacteristic(this.serviceId,
                                             this.characteristicId,
                                             new Buffer(value),
    function(err, data) {
      if (typeof callback === "function") { callback(err, data); }
    }
  );
};
