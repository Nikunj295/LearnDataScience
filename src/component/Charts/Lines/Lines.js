import React, {useContext} from 'react'
import {LineChart, Line, XAxis,YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import { AxisContext } from "../files/Axis"

export default function Lines ({values}){
  const {x,z} = useContext(AxisContext)
  const [x_axis,setX_axis] = x
  const [tar,setTar] = z
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
          <XAxis dataKey={x_axis} />  
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={tar} stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="Original" stroke="blue" /> */}
      </LineChart> 
    </>
  );
}