import { ApexOptions } from 'apexcharts';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE', '#FF4560', '#00E396'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2, 2, 2],
    curve: 'smooth',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE', '#FF4560', '#00E396'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    hover: {
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [], // Placeholder for categories; will be set later
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      { name: 'Reading 1', data: [] },
      { name: 'Reading 2', data: [] },
      { name: 'Reading 3', data: [] },
      { name: 'Reading 4', data: [] },
    ],
    categories: [], // Initialize categories
  });

  const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Set the base URL here
  });

  // Function to fetch data from the backend API
  const fetchData = async () => {
    try {
      const amount = 10; // Limit to the last 10 records
      const response = await api.get(`gasHistory/${amount}`); // Adjust the endpoint as necessary

      const readings = response.data; // Assuming this is the object with reading arrays
      console.log('data is', readings);

      // Create categories based on the length of reading arrays
      const numberOfReadings = readings.reading1.length; // Assuming all reading arrays are of the same length
      const categories = Array.from({ length: numberOfReadings }, (_, index) =>
        index.toString(),
      );

      // Update the state with the new data
      setState({
        series: [
          { name: 'Reading 1', data: readings.reading1 },
          { name: 'Reading 2', data: readings.reading2 },
          { name: 'Reading 3', data: readings.reading3 },
          { name: 'Reading 4', data: readings.reading4 },
        ],
        categories, // Set the categories for the x-axis
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5"></div>
      </div>
      <div>
        <div className="flex justify-end w-full">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            onClick={fetchData}
          >
            Refresh
          </button>
        </div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={{
              ...options,
              xaxis: {
                ...options.xaxis,
                categories: state.categories, // Set the categories for the x-axis
              },
            }}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
