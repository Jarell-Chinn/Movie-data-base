const { readFile } = require("fs");

const router = require("express").Router();

router.get("/", (req, res) => {
  readFile("./db/schema.sql").then((data) => console.log(data));
});
