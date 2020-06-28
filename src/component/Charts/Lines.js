import React from 'react'
import {LineChart, Line, XAxis,Scatter,ScatterChart ,YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';

export default function Lines ({values}){
    return (
      <>
        <LineChart
            width={1500}
            height={600}
            data={values}
            margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Predicted" stroke="red" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Original" stroke="blue" />
        </LineChart>
          
        <ScatterChart
          width={800}
          height={800}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="Predicted" name="Predicted" />
          <YAxis type="number" dataKey="Original" name="Original" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="DataScience" data={values} fill="#8884d8" />
        </ScatterChart>
        </>
      );
}