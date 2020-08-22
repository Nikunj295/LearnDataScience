import React, { useContext } from 'react'
import { Chart } from "react-google-charts";
import { AxisContext } from "../files/Axis"

function ScatterPlot1(props) {

  const {x,z} = useContext(AxisContext)
  const [x_axis,setX_axis] = x
  const [tar,setTar] = z
  let mod = []
    
  mod.push([x_axis,tar])
  props.data.map(i=>{
    mod.push([i[x_axis],i[tar]])
  })
  
  return (
    <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
      <Chart
        width={'100%'}
        height={'500px'}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={mod}
        options={{
          title: 'Trend line',
          hAxis: { title: x_axis },
          vAxis: { title: tar },
          legend: 'none',
          trendlines: { 0: {} },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default ScatterPlot1
