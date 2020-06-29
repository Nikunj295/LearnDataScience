import React, { Component } from 'react'
import CustomPaginationActionsTable from "../Tables/Table";
import ZoomPan from "../Charts/ZoomPan/ZoomPan";
import Scatterplot from "../Charts/Scatterplot/Scatterplot"
import Multiplines from "../Charts/Lines/Multiplines";

class Regression extends Component {
    state = {
        options:[],
        values:[]
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
                var newArray = [];
                this.state.values.map(i=>{
                    newArray.push({x: i['0'],y:i['1']});
                });	
                const options = {
                    theme: "light2", 
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

    // getData = ({data})=>{
    //     var values = []
    //     for (var key in data){
    //       if(data.hasOwnProperty(key)){
    //         values.push(data[key])
    //       }
    //     }
    // }

    render() {
        const {values,options} = this.state
        return (
            <div>
                <h1>Regression</h1> 
                {/* <CustomPaginationActionsTable values={values}/> */}
                {/* <ZoomPan options={options}/> */}
                {/* <Scatterplot values={values}/> */}
                <Multiplines values={values}/>
            </div>
        )
    }
}

export default Regression
