import React, { useEffect } from 'react';
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Set the base URL here
});

export default function TestJson() {
  const getTest = async () => {
    try {
      console.log('hi');
      const response = await api.get('/test'); // Now you can just use the endpoint
      console.log('res is', response.data); // Log the response data
    } catch (error) {
      console.error('Error fetching data:', error); // Handle errors
    }
  };

  useEffect(() => {
    getTest();
  }, []);

  return <div>123</div>;
}
