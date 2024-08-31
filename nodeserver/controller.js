const DataModel = require('./models');

exports.saveData = async (req, res) => {
    try {
        const data = new DataModel(req.body);
        await data.save();
        res.status(200).send('Data saved successfully');
    } catch (error) {
        res.status(500).send('Error saving data');
    }
};
