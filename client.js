const net = require("net");
const { rawListeners } = require("process");

const connect = function () { // <== establishes a connection with the game server
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8"); // <== Turn incoming data as text.
  conn.on("data", (data) => console.log(data))
  conn.on("connect", (connect) => console.log("Successfully connected to game server"))
  conn.write("Name: TTT ")
  conn.write("Move: Up")
  
  return conn;
};


module.exports = connect;

