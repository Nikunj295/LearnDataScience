import React, { Component } from 'react'
import Iris from "../PreDefine_Dataset/Iris";
import { Link } from 'react-router-dom';
import { DataProvider } from '../Charts/files/DataProvider';
class Classification extends Component {
    render() {
        return (
            <div style={{'text-align': 'center'}}>
                <h1>Classification</h1>
                <Link to="/Iris">Iris</Link>
                <Link to="/Wine">Wine</Link>
            </div>
        )
    }
}

export default Classification
