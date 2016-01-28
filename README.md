== Basic Usage ==

1. npm install cylon cylon-octanis1-rover
2. run ´sudo cylon-ble-scan´ to find the UUID of the rover's BLE device
3. copy and adapt code in ´examples/basic_config.js´

== Current State ==
- This package currently provides a driver for the DS3 controller (using node-gamepad). cylon-joystick didn't work for me ;)
- It also provides a driver for the HM-10 serial terminal characteristic (using cylon-ble adaptor). This driver only forwards terminal rx/tx via events.
