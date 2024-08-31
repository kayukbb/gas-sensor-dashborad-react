const express = require('express');
const router = express.Router();
const fanController = require('../controllers/fan.controller');

router.get('/api/getSwitchValue', fanController.getSwitchValue);
router.get('/api/getFanSpeed', fanController.getFanSpeed);
router.post('/api/postFanSpeed', fanController.postFanSpeed);
router.post('/api/SwitchValue', fanController.postSwitchValue);


module.exports = router;