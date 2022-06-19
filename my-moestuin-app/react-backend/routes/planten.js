const data = require("../moestuin_file/planten.json");

/* GET users listing. */
const Planten = (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));

  console.log("planten", JSON.stringify(data));
};

module.exports = Planten;
