import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import { DataContext } from '../Charts/files/DataProvider';

function Classification(){  
     useEffect(()=>{
        let id = localStorage.getItem('myid')     
        localStorage.setItem('method','classification')
        axios.post("http://127.0.0.1:5000/addId",null,{
            params:{
                id,
            }   
        })
        .then(response=>console.log(response))
    },[])

    return (
        <div style={{'text-align': 'center'}}>
            <h1>Classification</h1>
            <Link to="/Iris">Iris</Link>
            <Link to="/Wine">Wine</Link>
        </div>
    )
}

export default Classification
