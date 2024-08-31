const db = require('../model');
const SwitchValue = db.switchvalue; 
const FanSpeed = db.fanspeed;

// const Op = db.Sequelize.Op;

//get ges reading from database, use for showing one reading
/*exports.getSwitchValue = async (req, res) => {
  console.log("switch---------------------------------");
    try {
      const data = await switchValue.findOne({
        attributes: ['switchValue'],
      });
  
      if (!data) {
        return res.status(404).send({ message: "No data found." });
      }
      console.log("data isisisissiis:", data);
      res.send(data);
    } catch (err) {
      if (err instanceof Sequelize.DatabaseError) {
        return res.status(500).send({ message: "Database error occurred." });
      } else {
        console.log(err);
        return res.status(500).send({ message: err.message || "Some error occurred while retrieving data." });
      }
    }
  };*/

  exports.getSwitchValue = async (req, res) => {
    console.log("switch---------------------------------");
    try {
      const result = await SwitchValue.findOne({
        where: {
          id: 1
        }
      });
  
      if (result) {
        const switchValue = result.switchValue;
        console.log("switchValue:", switchValue);
        res.status(200).json({ switchValue });
      } else {
        res.status(404).json({ message: 'No record found with id = 1' });
      }
    } catch (error) {
      console.log('Error occurred:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.postSwitchValue = async (req, res) => {
    console.log("-----------------------------------------------------------------", req.body);
    try {
        let { value } = req.body;
        console.log("switchValue:", value);
      const updatedSwitchValue = await SwitchValue.update({ switchValue: value }, { where: { id: 1 } });
  
      res.status(200).send(updatedSwitchValue);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err.message || "error when update switch value" });
    }
  };



  /*exports.getFanSpeed = async (req, res) => {
    console.log("fanspeed---------------------------------");
    try {
      const data = await switchValue.findOne({
        attributes: ['fanspeed'],
      });
  
      if (!data) {
        return res.status(404).send({ message: "No data found." });
      }
  
      res.send(data);
    } catch (err) {
      if (err instanceof Sequelize.DatabaseError) {
        return res.status(500).send({ message: "Database error occurred." });
      } else {
        console.log(err);
        return res.status(500).send({ message: err.message || "Some error occurred while retrieving data." });
      }
    }
  };*/

  exports.getFanSpeed = async (req, res) => {
    console.log("fanspeed---------------------------------");
    try {
      const result = await FanSpeed.findOne({
        where: {
          id: 1
        }
      });
  
      if (result) {
        const fanspeed = result.fanspeed;
        console.log("fanspeed:", fanspeed);
        res.status(200).json({ fanspeed });
      } else {
        res.status(404).json({ message: 'No record found with id = 1' });
      }
    } catch (error) {
      console.log('Error occurred:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
    

  exports.postFanSpeed = async (req, res) => {
    console.log("-----------------------------------------------------------------", req.body);
    try {
      let { fanSpeed } = req.body;
  
      // 如果 fanSpeed 为 null，将其设置为 0
      if (fanSpeed === null) {
        fanSpeed = 0;
      }
  
      const updatedFanSpeed = await FanSpeed.update({ fanspeed: fanSpeed }, { where: { id: 1 } });
  
      res.status(200).send(updatedFanSpeed);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err.message || "Some error occurred while updating fan speed record." });
    }
  };

