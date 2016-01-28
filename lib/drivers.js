/*
 * cylon-joystick Driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Drivers = {"joystick": require("./joystick")}

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.module = Drivers[opts.driver].init();
  this.methods = Drivers[opts.driver].methods;
  this.events =  Drivers[opts.driver].events;
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  console.log("start driver " + this.name);
  this.methods.start.apply(this);

  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};
