import React from 'react';
import ChartOne from '../../components/Charts/ChartOne';
import RadialBarChart1 from '../../components/Charts/RadialBarChart1';
import RadialBarChart2 from '../../components/Charts/RadialBarChart2';
import RadialBarChart3 from '../../components/Charts/RadialBarChart3';
import RadialBarChart4 from '../../components/Charts/RadialBarChart4';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <RadialBarChart1 />
        <RadialBarChart2 />
        <RadialBarChart3 />
        <RadialBarChart4 />

        <div className="col-span-12 xl:col-span-8"></div>
      </div>
    </>
  );
};

export default ECommerce;
