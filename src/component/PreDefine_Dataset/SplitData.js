import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomPaginationActionsTable from '../Tables/Table';
import { Link } from 'react-router-dom';

function SplitData() {
    const [train,setTrain] = useState([])
    const [test,setTest] = useState([])

    useEffect(()=>{
        const id = localStorage.getItem('myid')
        let payload = {
            id
        }
        axios.post('http://127.0.0.1:5000/splitData',null,{
            params:{
                payload
            }
        })
        .then(response=>response.data)
        .then(data => {
            const tb = data[0]
            const ds = data[1]
            var myData = Object.keys(tb).map(key => {
                return tb[key];
            })
            var myData1 = Object.keys(ds).map(key => {
                return ds[key];
            })
            setTrain(myData)
            setTest(myData1)
        })
    },[])

    return (
        <div>
            <h1>SplitData</h1>
            <Link to='/Model'>Create model To Predict</Link>
            <CustomPaginationActionsTable values={train}/>
            <CustomPaginationActionsTable values={test}/>
        </div>
    )
}

export default SplitData
