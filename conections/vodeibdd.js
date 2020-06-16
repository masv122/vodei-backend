import mysql from "mysql";

const myConnection = mysql.createConnection({
    host: "fdb24.awardspace.net",
    user: "3476357_vodeidbb",
    password: "lunar1234567890",
    database: "476357_vodeidbb",
  });

export default myConnection;