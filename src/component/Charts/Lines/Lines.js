import React, { useContext,useEffect, useState} from 'react'
import {LineChart,ResponsiveContainer, Line, XAxis,YAxis, CartesianGrid, Tooltip, Legend,Brush} from 'recharts';
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
        props.values?<>
        <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
          <div style={{marginTop:"32px"}}><h2>Prediction and Target(Original) Comparison</h2></div>
          <ResponsiveContainer width="75%" height={400}>
            <LineChart
                data={props.values}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis/>
                
                <YAxis/>
                <Tooltip />
                <Legend />
                <Brush/>
                <Line type="monotone" dataKey='Predicted' stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line dataKey='target' stroke="red" />
            </LineChart> 
          </ResponsiveContainer>
          </div>
          
          <div style={{display:'flex',flexDirection: 'row',justifyContent: 'space-around'}}>
            <div style={{marginTop:"32px"}}><h2>Original Graph</h2></div>
            <div style={{marginTop:"42px"}}><h2>Prediction Graph</h2></div>
          </div>

        <div style={{display:'flex',flexDirection: 'row',justifyContent: 'center'}}>
          <ResponsiveContainer width="50%" height={400}>
            <LineChart
                data={props.values}
                syncId="id"
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <Brush />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis/>    
                <YAxis/>
                <Tooltip />
                <Legend />
                <Line dataKey='target' stroke="red" />
            </LineChart> 
          </ResponsiveContainer>

          <ResponsiveContainer width="50%" height={400}>
            <LineChart
                data={props.values}
                syncId="id"
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis/>    
                <Brush/>
                <YAxis/>
                <Tooltip />
                <Legend />
                <Line dataKey='Predicted' stroke="Green" />
            </LineChart> 
          </ResponsiveContainer>
        </div>
        </>:null
      }
    </>
  );
}