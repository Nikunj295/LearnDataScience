import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CustomPaginationActionsTable from '../Tables/Table'

function Prediction() {
    
    const [result,setResult] = useState([])
    const [final,setFinal] = useState([])

    useEffect(() => {
        let id = localStorage.getItem('myid')
        let payload={
            id
        }    

        axios.post("http://127.0.0.1:5000/classification/predict",null,{
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
            setResult(myData)
            setFinal(myData1)
        })

    }, [])

    return (
        <div>
            <h1>Prediction</h1>
            <CustomPaginationActionsTable values={result} />
            <CustomPaginationActionsTable values={final} />
        </div>
    )
}

export default Prediction