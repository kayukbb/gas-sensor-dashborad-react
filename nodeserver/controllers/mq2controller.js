import pool from '../db.config.cjs';

const saveSensorValue = (sensorValue) => {
    // Save the sensor value to the database
    pool.query('INSERT INTO test (num) VALUES (?)', [sensorValue], (error, results, fields) => {
        if (error) {
            console.error('Error saving sensor value:', error);
        } else {
            console.log('Sensor value saved to the database:', sensorValue);
        }
    });
};

const getSensorValues = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM test', (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const getLatestSensorValue = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT num FROM test ORDER BY id DESC LIMIT 1', (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                if (results.length > 0) {
                    resolve(results[0].num);
                } else {
                    resolve(null);
                }
            }
        });
    });
};

export { saveSensorValue, getSensorValues, getLatestSensorValue };