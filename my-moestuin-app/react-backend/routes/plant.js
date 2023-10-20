const fs = require("fs");
const moestuinFileLocation = "../moestuin_file/planten.json";
const fileName = moestuinFileLocation;
const file = require(fileName);

let plants = require(moestuinFileLocation);

// Post nieuwe plant op '/plant'
const addPlant = (req, res) => {
  const maxRecordId = plants.length > 0 ? Math.max(...plants.map((obj) => parseInt(obj.id))) : parseInt("0");

  const newPlant = {
    id: (maxRecordId + 1).toString(),
    naam_kort: req.body.naam_kort,
    naam_lang: req.body.naam_lang,
    plant_familie: req.body.plant_familie,
  };

  plants.push(newPlant);

  fs.writeFile(__dirname + "/" + moestuinFileLocation, JSON.stringify(plants), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log("writing to " + __dirname + "/" + moestuinFileLocation);
  });

  res.send("received plant" + newPlant.id);
};

module.exports = addPlant;
