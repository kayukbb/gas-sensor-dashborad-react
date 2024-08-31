const db = require('../model');
const GasReading = db.gasreading; 

// const Op = db.Sequelize.Op;

//get ges reading from database, use for showing one reading
exports.getOne = async (req, res) => {
  try {
    const data = await GasReading.findOne({
      order: [['id', 'DESC']],
    });
    res.send(data);
    //console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving data." });
  }
};
    

// get all data from database, use for showing history graph of reading
exports.getData = async (req, res) => {
  try {
  const data = await GasReading.findAll();
  res.send(data);
  //console.log(data);
  } catch (err) {
  console.log(err);
  res.status(500).send({ message: err.message || "Some error occurred while retrieving data." });
  }
  };

  //get sensor data and save in database
  exports.saveDataToDatabase = async (req, res) => {
   console.log("received request");
    try {
      const { reading1, reading2, reading3, reading4 } = req.body;
      console.log(req.body);
  
      // Set readings to 0 if they are null
      const reading1Value = reading1 || 0;
      const reading2Value = reading2 || 0;
      const reading3Value = reading3 || 0;
      const reading4Value = reading4 || 0;
  
      // Create a new instance of the model with the data
      const newGasReading = await GasReading.create({
        reading1: reading1Value,
        reading2: reading2Value,
        reading3: reading3Value,
        reading4: reading4Value,
      });
  
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Failed to save data' });
    }
  };
  /*exports.test = async (req, res) => {
    try {
      const data = 1;
      res.send({ data }); 
      console.log("data is", data);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err.message || "Some error occurred while retrieving data." });
    }
  };*/