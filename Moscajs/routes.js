const ac = require("./ac/controller");
const lights = require("./lights/controller");
const door = require("./door/controller");
const chalk = require("chalk");

function router(packet, client) {
  switch (packet.topic) {
    case "esp32/lamp1":
      lights.changeStatus(packet, client);
      break;
    case "esp32/lamp2":
      lights.changeStatus(packet, client);
      break;
    case "esp32/ac":
      ac.changeStatus(packet, client);
      break;
    case "esp32/door":
      door.changeStatus(packet, client);
      break;
    case "test/message":
      console.log("Se recibio el mensaje de prueba");
      break;
  }
}

module.exports = router;
