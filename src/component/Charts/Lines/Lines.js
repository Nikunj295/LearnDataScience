import React, { useContext,useEffect, useState} from 'react'
import {LineChart,ResponsiveContainer, Line, XAxis,YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import { AxisContext } from "../files/Axis"

export default function Lines (props){
  const {x,y,z} = useContext(AxisContext)
  const [x_axis,setX_axis] = x
  const [y_axis,setY_axis] = y
  const [tar,setTar] = z

  if(props.values[0]){
    console.log((props.values[0][x_axis]))
    console.log("X: "+props.values.reduce((max, b) => Math.max(max, b[x_axis]), props.values[0][x_axis]))
    console.log("y: "+props.values.reduce((max, b) => Math.max(max, b[y_axis]), props.values[0][y_axis]))
  }

  return (
    <>
      {
        props.values?
        <>
          <ResponsiveContainer width="95%" height={400}>
            <LineChart
                data={props.values}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis/>
                <YAxis dataKey={x_axis}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={tar} stroke="#8884d8" activeDot={{ r: 8 }} />\
            </LineChart> 
          </ResponsiveContainer>
        </>
        :null
      }
          </>
  );
}