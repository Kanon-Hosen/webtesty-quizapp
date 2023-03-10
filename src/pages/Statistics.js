import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { contextData } from '../App';
const Statistics = () => {
    const quizData = useContext(contextData)
    return (
    <div className='md:mx-auto w-full md:w-1/2 mt-14 overflow-hidden'>
    <LineChart  width={500} height={300} data={quizData} margin={{ top: 5, right: 35, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
</div>
    );
};

export default Statistics;