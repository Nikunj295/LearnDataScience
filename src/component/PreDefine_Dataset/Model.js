import React, { useEffect } from 'react'
import Axios from 'axios'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom';

function Model() {

    let id = localStorage.getItem('myid')

    const getModel = (event) => {
        let payload = {
            id,
            algorithm:'logisticRegression'
        }
        Axios.post("http://127.0.0.1:5000/classification/model",null,{
            params:{
                payload
            }
        })
        .then(response=>console.log(response))
    }

    return (
        <div>
            <h1>Model</h1>
            <Button onClick={getModel}>Train</Button>
            <Link to="/Prediction">Test</Link>
        </div>
    )
}

export default Model
