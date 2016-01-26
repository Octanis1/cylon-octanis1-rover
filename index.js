"use strict";

var Adaptor = require("./lib/adaptor"),
    Driver = require("./lib/drivers");

module.exports = {
  adaptors: ["octanis1-rover"],
  drivers: ["wheel"],
  dependencies: ["cylon-ble"],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  }
};
