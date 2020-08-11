import React, {useEffect, useState} from 'react'
import Axios from "axios"

function Tree() {
    
    const [data,setData] = useState('')

    useEffect(()=>{
        let id = localStorage.getItem('myid')
        let payload={
            id
        }    
        Axios.post("http://127.0.0.1:5000/getTree",null,{
            params:{
                payload
            }
        })
        .then(response=>setData(response.data))    
    },[])

    return (
        <div>
            <h1>Tree</h1>
            <img src={`data:image/jpeg;base64,${data}`} style={{width:"50%",height:'50%'}}/>
        </div>
    )
}

export default Tree
