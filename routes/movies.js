const { readFile } = require("fs");

const movies = require("express").Router();

movies.get("/", (req, res) => {
  readFile(db).then((data) => console.log(data));
});
