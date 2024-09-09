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
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving data.',
    });
  }
};

// get all data from database, use for showing history graph of reading
exports.getData = async (req, res) => {
  try {
    // Fetch all records from the GasReading model
    const timeFrame = req.params.timeframe || 'minute';
    console.log('type is', timeFrame);
    if (timeFrame == 'day') {
    } else if (timeFrame == 'month') {
    } else if (timeFrame == 'year') {
    } else {
      console.log('timeframe is', timeFrame);
      const data = await GasReading.findAll({
        limit: 60, // Limit the number of records returned
        order: [['createdAt', 'DESC']], // Order by the most recent first (adjust based on your schema)
      });

      // Transform the data into the desired JSON format
      const formattedData = {
        reading1: [],
        reading2: [],
        reading3: [],
        reading4: [],
      };

      // Populate the arrays with values from the database records
      data.forEach((item) => {
        formattedData.reading1.push(item.reading1);
        formattedData.reading2.push(item.reading2);
        formattedData.reading3.push(item.reading3);
        formattedData.reading4.push(item.reading4);
      });

      // Send the formatted data as the response
      //console.log('\n\n\n\n\ndata is', formattedData);
      res.json(formattedData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving data.',
    });
  }
};

//get sensor data and save in database
exports.saveDataToDatabase = async (req, res) => {
  //console.log('received request');
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

exports.saveDataToDatabase = async (req, res) => {
  console.log('Received request');
  try {
    // Generate random sensor readings
    const reading1Value = Math.floor(Math.random() * 100); // Random number between 0 and 99
    const reading2Value = Math.floor(Math.random() * 100); // Random number between 0 and 99
    const reading3Value = Math.floor(Math.random() * 100); // Random number between 0 and 99
    const reading4Value = Math.floor(Math.random() * 100); // Random number between 0 and 99

    // Create a new instance of the model with the random data
    const newGasReading = await GasReading.create({
      reading1: reading1Value,
      reading2: reading2Value,
      reading3: reading3Value,
      reading4: reading4Value,
    });
    //console.log('data saved sucessfully');
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
