const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "MyN3wP4ssw0rd",
    database: "movies_db",
  },
  console.log(`Connected to database`)
);

router.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

db.query("SELECT * FROM movies", function (err, results) {
  console.log("SHOULD BE MOVIE NAMES");
  console.log(results);
});
