/*
 * Octanis 1 Rover drivers
 * http://octanis.org
 *
 * Copyright (c) 2016 Sam Sulaimanov
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var upmDevices = {
  "wheel": {
    init: function() {
      //var u = require("jsupm_hmc5883l");
      //return new u.Hmc5883l(utils.i2cPortFor());
      return 1;
    },
    commands: [ "debug" ]
  }
};

var upmSensor = module.exports = function(opts) {
  upmSensor.__super__.constructor.apply(this, arguments);

  this.module = upmDevices[opts.driver].init(opts.pin);
  this.setupCommands(upmDevices[opts.driver].commands, this.module);
};

Cylon.Utils.subclass(upmSensor, Cylon.Driver);

upmSensor.prototype.start = function(callback) {
  callback();
};

upmSensor.prototype.halt = function(callback) {
  callback();
};
