import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface RadialBarChartState {
  series: number[];
}

const RadialBarChart: React.FC = () => {
  const [state, setState] = useState<RadialBarChartState>({
    series: [100], // Example value, you can change this dynamically
  });

  // Function to get color based on the value
  const getFillColor = (value: number) => {
    const maxValue = 100; // Assuming 100 is the maximum value
    const minValue = 0; // Assuming 0 is the minimum value

    // Normalize the value to a range between 0 and 1
    const normalizedValue = (value - minValue) / (maxValue - minValue);

    // Calculate the color based on the normalized value
    const red = Math.round(255 * normalizedValue);
    const green = Math.round(171 - 171 * normalizedValue); // 171 is the RGB value for #ABE5A1
    const color = `rgb(${red}, ${green}, 0)`; // Adjust RGB values for desired gradient

    return color;
  };

  // Get the dynamic fill color
  const fillColor = getFillColor(state.series[0]);

  const options: ApexOptions = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#e7e7e7',
          strokeWidth: '80%',
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px',
          },
          value: {
            formatter: (val: number) => Math.round(val).toString(),
            color: '#111',
            fontSize: '36px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'solid', // Use solid fill type
      colors: [fillColor], // Set the dynamic color here
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Percent'],
  };

  return (
    <div className="sm:px-7.5 col-span-6 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div>
        <h5 className="text-xl font-semibold text-black dark:text-white">
          Gas Sensor 1
        </h5>
      </div>

      <div className="mb-2">
        <div id="chartRadial" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="radialBar"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>Value</span>
              <span>{state.series[0]}%</span>{' '}
              {/* Displaying the radial bar value */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialBarChart;
