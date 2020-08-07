import React, { useEffect } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'

function Test(props) {
    
    let id = localStorage.getItem('myid')

    let algo = ""
    if(props.location.data){
        sessionStorage.setItem('algo', props.location.data.data)
        algo = props.location.data.data
    }
    else{
        algo = sessionStorage.getItem('algo')
    }

    useEffect(()=>{
        let payload = {
            id,
            algorithm: algo
        }
        Axios.post("http://127.0.0.1:5000/model",null,{
            params:{
                payload
            }
        })
        .then(response=>console.log(response))
    },[])

    return (
        <div>
            <h1>Test</h1>
            <h3>Algo Information</h3>
            <Link to="/Prediction">Predict!!</Link>
        </div>
    )
}

export default Test
