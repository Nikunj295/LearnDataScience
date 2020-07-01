import React, { Component } from 'react'
import CustomPaginationActionsTable from "../Tables/Table";
import ZoomPan from "../Charts/ZoomPan/ZoomPan";
import ControlledOpenSelect from "../Select/ControlledOpenSelect"

class Classification extends Component {
    state = {
        options:[],
        values:[]
    }
    
    componentDidMount(){
        fetch("http://127.0.0.1:5000/classification")
        .then(response=>response.json())
        .then(
            data => {
                var myData = Object.keys(data).map(key => {
                    return data[key];
                })
                this.setState({values:myData})
                const newArray = [];
                this.state.values.map(i=>{
                    newArray.push({y: i['0']});
                });	
                const options = {
                    theme: "light2", // "light1", "dark1", "dark2"
                    animationEnabled: true,
                    zoomEnabled: true,
                    title: {
                        text: "Try Zooming and Panning"
                    },
                    axisY: {
                        includeZero: false
                    },
                    data: [{
                        type: "area",
                        dataPoints: newArray
                    }]
                }
                this.setState({options})
            }
        )
    }

    render() {
        const {values,options} = this.state
        return (
            <div>
                <div>
                    <h1>Classification</h1>
                    <ZoomPan options={options}/>
                    <ControlledOpenSelect />
                    <CustomPaginationActionsTable values={values}/>
                </div>
            </div>
        )
    }
}

export default Classification
