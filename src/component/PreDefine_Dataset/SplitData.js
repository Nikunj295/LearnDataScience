import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { DataContext } from "../Charts/files/DataProvider";
import CustomPaginationActionsTable from '../Tables/Table';
import { Link } from 'react-router-dom';

function SplitData(props) {
    
    const col = props.location.selected
    const {data1} = useContext(DataContext)
    const [data,setData] = data1
    const [train,setTrain] = useState([])
    const [test,setTest] = useState([])

    useEffect(()=>{
        let payload = {
            col,
            data
        }
        axios.post('http://127.0.0.1:5000/classification/fetchData/iris',null,{
            params:{
                type: 'splitData',
                col: payload
            }
        })
        .then(response=>response.data)
        .then(data=>{
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
