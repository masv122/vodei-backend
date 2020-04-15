import mysql from "mysql";

const myConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "vodeibdd",
  });

export default myConnection;