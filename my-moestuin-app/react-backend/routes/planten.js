var express = require("express");
var router = express.Router();

const data = require("../moestuin_file/planten.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

module.exports = router;
