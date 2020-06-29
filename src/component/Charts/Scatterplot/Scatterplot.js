import React, { Component } from 'react'
import CanvasJSReact from '../files/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Scatterplot extends Component {
    state={
        options:[]
    }

    componentWillReceiveProps(){
        var newArray = [];
        
        this.props.values.map(i=>{
            console.log("in")
            newArray.push({x: i['0'],y: i['1']});
        });	

        const options = {
            theme: "dark2",
			animationEnabled: true,
			zoomEnabled: true,
			title:{
				text: "Ice Cream Sales vs Temperature"
			},
			axisX: {
				title:"Original",
			},
			axisY:{
				title: "Predicted",
				includeZero: false,
			},
            data: [{
                type: "scatter",
				markerSize: 15,
                dataPoints: newArray
            }]
        }
        this.setState({options})
    }
    
    render() {
        const {options} = this.state
        return (
            <div>
                <h1>Scatterplot</h1>
                <CanvasJSChart options={options}/>       
            </div>
        )
    }
}

export default Scatterplot
