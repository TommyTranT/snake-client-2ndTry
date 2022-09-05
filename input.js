let connection;


const handleUserInput = (key, conn) => {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === 'w') {
    conn.write("Move: up")
  }
  if (key === 'a') {
    conn.write("Move: left")
  }
  if (key === 's') {
    conn.write("Move: down")
  }
  if (key === 'd') {
    conn.write("Move: right")
  }
  if (key === 'h') {
    conn.write("Say: Hello Byran")
  }
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 
  stdin.on("data", (data) => {
    handleUserInput(data, conn)});
  
  return stdin;
};

module.exports = setupInput;