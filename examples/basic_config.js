"use strict";

var Cylon = require('cylon');

Cylon.robot({
 connections: {
   octanis1_rover: {adaptor: 'octanis1-rover'},
   bluetooth: { adaptor: 'ble', uuid: 'cbef787e50934150ace41ce6385efabf'}
 },

 devices: {
  rover_ble: {
    driver: "ble_cli",
    serviceId: "ffe0", characteristicId: "ffe1",
    connection: "bluetooth"
  },
  rover_joystick: {
    driver: "joystick",
    connection: "octanis1_rover"
  }
 },

 work: function(my) {

  my.rover_ble.on("BLECLI:rx", function(data){
    console.log(data);
    my.rover_ble.tx("test tx");
  });

  my.rover_joystick.on("battery:change", function(data){
    console.log("test moo "+data);
  });

 }
}).start();
