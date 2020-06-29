import React, { Component } from 'react'
import CustomPaginationActionsTable from "../Tables/Table";
import ZoomPan from "../Charts/ZoomPan/ZoomPan";

class Classification extends Component {
    state = {
        data:{}
    }
    
    componentDidMount(){
        fetch("http://127.0.0.1:5000/classification?cols=1")
        .then(response=>response.json())
        .then(
            data => this.setState({data})
        )
    }

    render() {
        var { data } = this.state    
        var values = []
        for (var key in data){
            if(data.hasOwnProperty(key)){
                values.push(data[key])
            }
        }

        return (
            <div>
                <div>
                    <h1>Classification</h1>
                    <CustomPaginationActionsTable values={values}/>
                    <ZoomPan values={values}/>
                </div>
            </div>
        )
    }
}

export default Classification
