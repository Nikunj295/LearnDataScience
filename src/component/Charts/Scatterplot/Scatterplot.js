import React, { Component } from 'react'
import CanvasJSReact from '../files/canvasjs.react'
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
// var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Scatterplot extends Component {
    componentWillReceiveProps(){
        if(this.props.final){
            this.setState({data:this.props.final})
            const x = this.props.final
            const hello = Object.keys(x)
            this.setState({hello})
        } 
    }
    
    render() {
        const x = this.props.final       
        const arr = ["star","traingle","circle","square"]
        return (
            <div>
                {this.props.final?
                    <ScatterChart
                        width={1000}
                        height={500}
                        margin={{
                        top: 100, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="0"  />
                        <YAxis type="number" dataKey="y" name="1"  />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        {
                            Object.keys(x).map(function(key, index) {
                                return <Scatter name="1" data={x[key]} shape={""+arr[Math.floor(Math.random() * arr.length)]} fill={"#"+Math.floor(Math.random()*16777215).toString(16)}  />
                            }) 
                            
                        }
                    </ScatterChart>
                :
                null }   
           </div>
        )
    }
}

export default Scatterplot
