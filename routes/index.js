const express = require("express");

// import routers for /movies
const moviesRouter = require("./movies");

const router = express();

router.use("/movies", moviesRouter);

module.exports = router;
