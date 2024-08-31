const express = require('express');
const router = express.Router();
const gasController = require('../controllers/gasreading.controller');

router.get('/api/gasHistory', gasController.getData);
router.get("/api/gasReading", gasController.getOne);
router.post("/api/saveData", gasController.saveDataToDatabase);

module.exports = router;