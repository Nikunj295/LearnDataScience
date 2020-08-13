import React, { useState, useContext, Component} from 'react'
import CanvasJSReact from '../files/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Range1 extends Component {
    state={
        data:[],
        options:{}
    }
    componentWillMount(){
        if(this.props.values){
            let mydata = this.props.values.map(a=>[a.target,a.Predicted])
            let data = []
            mydata.map(i=>{
                data.push({y:i})
            })

            let options = {
                theme: "light2",
                zoomEnabled: true,
                animationEnabled: true,
                exportEnabled: true,
                title:{
                    text: "Difference Between Predicted and Target"
                },
                data: [
                {
                    type: "rangeColumn",
                    toolTipContent: " <span style=\"Data:#6D78AD\">{x}</span><br><b>Target:</b> {y[0]}<br><b>Predicted:</b> {y[1]}",
                    dataPoints: data
                }]
            }
            this.setState({options:options})
        }
    }

    render(){
        return (
            <div>
                {this.props.values?< CanvasJSChart options = {this.state.options}/>:null}
            </div>
        )
    }
}
export default Range1
