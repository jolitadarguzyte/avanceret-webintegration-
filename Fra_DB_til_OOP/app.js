const express = require("express");
const server = express();



server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("port", process.env.PORT || 3399);
// Import routes
require("./router/index")(server);

var url = "http://localhost:",
    port = server.get('port'),
    name = "gallery";

server.listen(3399, function () {
    console.log('Server listening at: ' + url+port+"/", '\n' + 'Server name: ' + name);
});