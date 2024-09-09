const express = require('express');
const router = express.Router();
const gasController = require('../controllers/gasreading.controller');

router.get('/api/gasHistory/:timeframe', gasController.getData);
router.get('/api/gasReading', gasController.getOne);
router.post('/api/saveData', gasController.saveDataToDatabase);
let data = [
  {
    name: 'Alice',
    message: 'Hello, how are you?',
  },
  {
    name: 'Bob',
    message: "I'm doing well, thank you!",
  },
  {
    name: 'Charlie',
    message: "It's a beautiful day!",
  },
];

// Define the POST route to send the data
router.get('/api/test', (req, res) => {
  console.log('got');
  res.send(data); // Send the JSON data as the response
});

module.exports = router;
