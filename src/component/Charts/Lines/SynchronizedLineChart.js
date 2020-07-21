import React, { useContext } from 'react';
import {
  LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';
import { AxisContext } from "../files/Axis"

export default function Example(props){

    const {x,y,z} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [y_axis,setY_axis] = y
    const [tar,setTar] = z
    const values = props.values

    return (
    <>
        <div >
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
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
            <XAxis dataKey="0"/>
            <YAxis/>
            <Tooltip name="Original"/>
            <Line type="monotone" dataKey="Predicted" stroke="#82ca9d" fill="#82ca9d" />
            <Line type="monotone" dataKey="Original" opacity={0}/>
        </LineChart>
        </div>
    </>
    );
}

