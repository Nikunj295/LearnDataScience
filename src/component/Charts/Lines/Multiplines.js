import React, { Component } from 'react'
import CanvasJSReact from '../files/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Multiplines extends Component {
    state={
        options:[]
    }

    componentWillReceiveProps(){
        var newArray = [];
        this.props.values.map(i=>{
            console.log("in")
            newArray.push({x: i['Original'],y: i['Predicted']});
        });	

        var newArray1 = [];
        this.props.values.map(i=>{
            console.log("in")
            newArray1.push({x: i['0'],y: i['1']});
        });	

        const options = {
            animationEnabled: true,	
            title:{
                text: "Number of New Customers"
            },
            axisY : {
                title: "Number of Customers",
                includeZero: false
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "2016",
                showInLegend: true,
                dataPoints: newArray
            },
            {
                type: "spline",
                name: "2017",
                showInLegend: true,
                dataPoints: newArray1
            }]
        }
        this.setState({options})
    }

    render() {
        return (
            <div>
                <CanvasJSChart options={this.state.options}/>
            </div>
        )
    }
}

export default Multiplines
