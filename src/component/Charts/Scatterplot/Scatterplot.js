import React,{ useContext} from 'react'
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'
import { AxisContext } from "../files/Axis"

function Scatterplot(props){
    const {x,y,z} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [y_axis,setY_axis] = y
    const [tar,setTar] = z

    const groupBy=(arr, property)=>{
        return arr.reduce(function(memo, x) {
          if (!memo[x[property]]) { memo[x[property]] = []; }
          memo[x[property]].push(x);
          return memo;
        }, []);
    }
    
    const groupByObj=(arr, property)=>{        
        if(arr){
            return arr.reduce(function(memo, x) {
                if (!memo[x[property]]) { memo[x[property]] = []; }
                memo[x[property]].push(x);
                return memo;
            }, {});
        }
    }

    var points = groupBy(props.values, 'Predicted');
    var newArray = []        
    points.map(item=>{
        item.map(i=>{
            newArray.push({x: i[x_axis],y: i[y_axis],z: i[tar]})
        })
    });	

    var final = groupByObj(newArray, 'z');
    const arr = ["star","traingle","circle","square"]
    let i=-1
    return (
        <div>
        {
            props.values?
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
                        Object.keys(final).map(function(key, index) {
                            return <Scatter name={key} data={final[key]} shape={""+arr[Math.floor(Math.random() * arr.length)]} fill={"#"+Math.floor(Math.random()*16777215).toString(16)}  />
                        })    
                    }
                </ScatterChart>
            :
            null 
        }   
        </div>
    )
}

export default Scatterplot
