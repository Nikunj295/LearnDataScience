import React from 'react'
import CanvasJSReact from '../files/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart


export default function ZoomPan({options}){	
	return (
		<div>
			<CanvasJSChart options={options}/>
		</div>
	);
}

 