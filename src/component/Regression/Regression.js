import React, { Component } from 'react'
import CustomPaginationActionsTable from "../Tables/Table";
import ZoomPan from "../Charts/ZoomPan/ZoomPan";

class Regression extends Component {
    state = {
        options:[],values:[]
    }
    
    componentDidMount(){
        fetch("http://127.0.0.1:5000/regression")
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

    getData = ({data})=>{
        var values = []
        for (var key in data){
          if(data.hasOwnProperty(key)){
            values.push(data[key])
          }
        }
    }

    render() {
        const {values,options} = this.state
        return (
            <div>
                <h1>Regression</h1> 
                {/* <CustomPaginationActionsTable values={values}/> */}
                <ZoomPan options={options}/>
            </div>
        )
    }
}

export default Regression
