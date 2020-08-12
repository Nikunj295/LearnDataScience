import React ,{ useContext, useState, useEffect}from 'react'
import { Chart } from "react-google-charts";
import { AxisContext } from "../files/Axis"

function Histogram(props) {
    const {x,b} = useContext(AxisContext)
    const [x_axis,setX_axis] = x
    const [bins,setBins] = b
    
    let mod = []
    mod.push([x_axis])
    props.values.map(i=>{
        mod.push([i[x_axis]])
    })
    
    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Histogram"
                loader={<div>Loading Chart</div>}
                data={mod}
                options={{
                    title: 'Number of Instance for every distribution',
                    legend: { position: 'none' },
                    histogram:{
                        bucketSize: bins
                    }
                }}
                rootProps={{ 'data-testid': '1' }}
                
                />
        </div>
    )
}

export default Histogram
