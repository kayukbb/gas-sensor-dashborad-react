import express from 'express';
import path from 'path';
import { saveSensorValue, getSensorValues } from './controllers/mq2controller.js';
const router = express.Router();

router.get('/', (req, res) => {
	const filePath = path.resolve('index.html');
	console.log(`Serving file from: ${filePath}`);
	res.sendFile(filePath);
});

router.post('/saveData', (req, res) => {
    const sensorValue = req.body.value;
    // Process the received sensor value here
    console.log('Received sensor value:', sensorValue);

    // Save the data to your database or perform any other desired actions
    saveSensorValue(sensorValue);

    res.send('Data received successfully'); // Send a response back to the ESP32
});

router.get('/sensorValues', async (req, res) => {
    try {
        const sensorValues = await getSensorValues();
        res.json(sensorValues);
    } catch (error) {
        console.error('Error fetching sensor values:', error);
        res.status(500).json({ error: 'Failed to fetch sensor values' });
    }
});

export default router;


