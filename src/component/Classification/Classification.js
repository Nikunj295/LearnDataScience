import React, { Component } from 'react'
import ClassificationOption from "../Select/ClassificationOption"
class Classification extends Component {
    render() {
        return (
            <div style={{'text-align': 'center'}}>
                <h1>Classification</h1>
                <ClassificationOption/>
            </div>
        )
    }
}

export default Classification
