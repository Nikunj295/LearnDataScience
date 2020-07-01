import React, { Component } from 'react'
import RegressionOption from "../Select/RegressionOption";

class Regression extends Component {
        render() {
        return (
            <div>
                <div style={{'text-align': 'center'}}>
                <h1>Regression</h1>
                    <RegressionOption />
                </div>
            </div>
        )
    }
}

export default Regression
