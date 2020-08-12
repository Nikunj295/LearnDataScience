import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../files/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

function Boxplot(props) {

    const [options,setOptions] = useState({})

    if(props.values){
        let op = {
            theme: "light2",
			animationEnabled: true,
			title:{
				text: "Energy in Baked Foods"
			},
			axisY: {
				title: "Energy Per 100 g (kcal/100g)"
			},
			data: [{
				type: "boxAndWhisker",
				yValueFormatString: "#,##0.# \"kcal/100g\"",
				dataPoints: [
					{ label: "Bread",  y: [179, 256, 300, 418, 274] },
					{ label: "Cake",  y: [252, 346, 409, 437, 374.5] },
					{ label: "Biscuit",  y: [236, 281.5, 336.5, 428, 313] },
					{ label: "Doughnut",  y: [340, 382, 430, 452, 417] },
					{ label: "Pancakes",  y: [194, 224.5, 342, 384, 251] },
					{ label: "Bagels",  y: [241, 255, 276.5, 294, 274.5] }
				]
			}]
        }

        setOptions(op)
    }

    return (
        <div>
            <CanvasJSChart options = {options}/>
        </div>
    )
}

export default Boxplot
