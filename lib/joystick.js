"use strict";

var Cylon = require("cylon");

var Driver = require("./driver");

var GamePad = require( 'node-gamepad' );
var controller = new GamePad( 'ps3/dualshock3' );

var Joystick = module.exports = function Joystick(opts) {
  Joystick.__super__.constructor.apply(this, arguments);
  this.events = [
    "battery:change",
    "dpadUp:press",
    "dpadUp:release",
    "dpadDown:press",
    "dpadDown:release",
    "dpadRight:press",
    "dpadRight:release",
    "dpadLeft:press",
    "dpadLeft:release",
    "select:press",
    "select:release",
    "start:press",
    "start:release",
    "r1:press",
    "r1:release",
    "r2:press",
    "r2:release",
    "l1:press",
    "l1:release",
    "l2:press",
    "l2:release"
  ];

};

Cylon.Utils.subclass(Joystick, Driver);


Joystick.prototype.start = function(callback) {
  this.connect();
  this._handleEvents();
  callback();
};

Joystick.prototype._handleEvents = function(){
  this.events.forEach(function(ev){

    controller.on(ev, (function(data){
      this.emit(ev, data);
    }).bind(this));

  },this);
}

Joystick.prototype.connect = function(){
  controller.connect();
}
