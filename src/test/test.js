const Port = require('../config/port');

const port1 = Port.getInstance();
const port2 = Port.getInstance();

console.log(port1 === port2);
