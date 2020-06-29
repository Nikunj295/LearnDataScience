import React, {Component} from 'react'
import CanvasJSReact from './canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart


export default function ZoomPan({options}){	
	return (
		<div>
			<CanvasJSChart options={options}/>
		</div>
		);
}

 