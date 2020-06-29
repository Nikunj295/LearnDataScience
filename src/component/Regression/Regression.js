import React, { Component } from 'react'
import CustomPaginationActionsTable from "../Tables/Table";

class Regression extends Component {
    state = {
        data:{}
    }
    
    componentDidMount(){
        fetch("http://127.0.0.1:5000/regression?rows=1000")
        .then(response=>response.json())
        .then(
        data => this.setState({data})
        )
    }
    render() {
        const { data } = this.state    
        var values = []
        for (var key in data){
          if(data.hasOwnProperty(key)){
            values.push(data[key])
          }
        }
        return (
            <div>
                <h1>Regression</h1>
                <CustomPaginationActionsTable values={values}/>
            </div>
        )
    }
}

export default Regression
