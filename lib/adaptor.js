/*
 * Octanis 1 Rover adaptor
 * http://octanis.org
 *
 * Copyright (c) 2016 Sam Sulaimanov
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");


/**
 * An Octanis 1 Rover Adaptor
 *
 * @constructor IntelIoT
 *
 * @param {Object} opts options object
 * @param {Number} [opts.interval] update interval
 */
var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.events = [
    /**
     * Emitted when a digital pin being read has a new value
     *
     * @event digitalRead
     * @value val
     */
    "digitalRead",

    /**
     * Emitted when an analog pin being read has a new value
     *
     * @event analogRead
     * @value val
     */
    "analogRead"
  ];
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

Adaptor.prototype.commands = [
    "firmwareName"
];

/**
 * Gets the firmware name of the current platform Cylon is running on.
 *
 * For instance, running Cylon on the Edison and calling this function will
 * return `"Intel Edison"`.
 *
 * @return {String} platform
 * @publish
 */
Adaptor.prototype.firmwareName = function() {

      return "Unknown Platform";

};
