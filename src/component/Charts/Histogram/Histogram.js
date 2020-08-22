import React ,{ useContext }from 'react'
import { Chart } from "react-google-charts";
import { AxisContext } from "../files/Axis"
import Container from '@material-ui/core/Container';

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
        <Container maxWidth="lg">
        <div style={{ display:'flex', flexDirection:'column', alignContent:'center'}}>  
            <Chart
                width={window.innerWidth/1.4}
                height={window.innerHeight/1.65}
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
        </Container>
        </div>
    )
}

export default Histogram
