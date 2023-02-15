const si = require('systeminformation');

si.networkInterfaces().then((data) => {
   console.log(data[0].mac);
});