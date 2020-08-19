import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../files/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

function MultipeLines(props){
    const [options,setOptions] = useState([])
    let  [,setState] = useState()
	const toggleDataSeries = (e) => {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
        }
        setState({});
    }

    useEffect(()=>{
        var newArray = [];
        let count = 0;
        let count1 = 0;
        props.values.map(i=>{
            count++
            newArray.push({x: count,y:i["Predicted"]});
        });	

        var newArray1 = [];
        props.values.map(i=>{
            count1++
            newArray1.push({x: count1,y: i["target"]});
        });	

        const options = {
            zoomEnabled: true,
            animationEnabled: true,	
            axisY : {
                title: "Predicted",
                includeZero: false,
                scaleBreaks: {
                    autoCalculate: true
                }
            }
            ,
            axisY2: {
                title: "Target",
                includeZero: false,
                scaleBreaks: {
                    autoCalculate: true
                }
            },
            toolTip: {
                shared: true,
            },
            legend: {
				cursor: "pointer",
				itemclick: toggleDataSeries
			},
            data: [{
                type: "spline",
                name: "Predicted",
                showInLegend: true,
                dataPoints: newArray
            },
            {
                type: "spline",
                name: "Target",
                axisYType: "secondary",
                showInLegend: true,
                dataPoints: newArray1
            },
            ]
        }
        setOptions(options)
    },[props.values])

        return (
            <div>
                <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                    <div><h3>Prediction and Original Comparison</h3></div> 
                    <CanvasJSChart options={options}/>
                </div>
            </div>
        )
}

export default MultipeLines