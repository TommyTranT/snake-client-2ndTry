const net = require("net");
const { IP, PORT } = require("./constants");
const { rawListeners } = require("process");
const connect = function () { // <== establishes a connection with the game server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });


  conn.setEncoding("utf8"); // <== Turn incoming data as text.
  conn.on("data", (data) => console.log(data))
  conn.on("connect", (connect) => console.log("Successfully connected to game server"))
  conn.write("Name: TTT ")
  
  conn.write("Say: Hello")
  
  return conn;
};


module.exports = connect;

