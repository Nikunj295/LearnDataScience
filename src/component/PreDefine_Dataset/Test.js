import React, { useEffect } from 'react'
import Axios from "axios"

function Test(props) {
    
    let id = localStorage.getItem('myid')
    let algo = props.location.data.data

    useEffect(()=>{
        let payload = {
            id,
            algorithm: algo
        }
        Axios.post("http://127.0.0.1:5000/classification/model",null,{
            params:{
                payload
            }
        })
        .then(response=>console.log(response))
    },[])

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default Test
