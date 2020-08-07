import React, { useContext } from 'react';
import {
  LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';
import { AxisContext } from "../files/Axis"

export default function Example(props){

    const {x,y,z} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [tar,setTar] = z
    const values = props.values

    return (
    <>
        <div style={{display:'flex',flexDirection: 'column',  justifyContent: 'space-between'}}>
        <LineChart
            width={500}
            height={200}
            data={values}
            syncId="anyId"
            margin={{
            top: 10, right: 30, left: 0, bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  />
            <YAxis dataKey={x_axis}/>
            <Tooltip />
            <Brush />
            <Line type="monotone" dataKey={tar} stroke="#8884d8" fill="#8884d8" />
        </LineChart>
        
        <LineChart
            width={500}
            height={200}
            data={values}
            syncId="anyId"
            margin={{
            top: 10, right: 30, left: 0, bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={x_axis} />
            <YAxis />
            <Tooltip name="Predicted"/>
            <Line type="monotone" dataKey="Predicted" stroke="#8884d8" fill="#8884d8" />
        </LineChart>

        </div>
        <div>
        <LineChart
            width={500}
            height={200}
            data={values}
            syncId="anyId"
            margin={{
                top: 10, right: 30, left: 0, bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={x_axis}/>
            <YAxis/>
            <Tooltip name="Target"/>
            <Line type="monotone" dataKey="Predicted" stroke="#82ca9d" fill="#82ca9d" />
            <Line type="monotone" dataKey="target" opacity={0}/>
        </LineChart>
        </div>
    </>
    );
}

