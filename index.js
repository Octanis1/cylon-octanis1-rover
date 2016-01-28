"use strict";

var Adaptor = require("./lib/adaptor");

var Drivers = {
  "joystick": require("./lib/joystick"),
  "ble_cli": require("./lib/ble_cli")
};

module.exports = {
  adaptors: ["octanis1-rover"],
  drivers:  Object.keys(Drivers),
  dependencies: [],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    opts = opts || {};

    if (!Drivers[opts.driver]) {
      return null;
    }

    return new Drivers[opts.driver](opts);
  }
};
