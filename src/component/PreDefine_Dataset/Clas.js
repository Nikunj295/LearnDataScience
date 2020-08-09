import React, { useEffect, useState } from 'react'
import axios from "axios"
import CustomPaginationActionsTable from "../Tables/Table";
import { Link } from 'react-router-dom';

function Clas(props){

    let dataset = ""
    if(props.location.data){
        sessionStorage.setItem('db', props.location.data.data)
        dataset = props.location.data.data
    }
    else{
        dataset = sessionStorage.getItem('db')
    }


    const [infoData,setInfoData] = useState([])
    const [data,setData] = useState([])
    
    useEffect(()=>{
        localStorage.setItem('dataset',dataset)
        sessionStorage.setItem('raw','false')
        axios.post(`http://127.0.0.1:5000/fetchData/${dataset}`)
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
            setInfoData(myData1)
            setData(myData)

            let column = [] 
            let columns = []
            if(tb[0]){
                column = Object.keys(tb[0])
                for(let i=0;i<column.length-1;i++){
                    columns.push(column[i])
                }
            }
            localStorage.setItem("selected",columns)
        })
    },[dataset])

    return (
        <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                <Link to={{
                    pathname:"/FeatureSelection"
                }}>
                    Feature Selection
                </Link>
                {
                    data?
                    <div >
                        <CustomPaginationActionsTable values={data} /> 
                        <CustomPaginationActionsTable values={infoData} type="info"/>            
                    </div>
                    :null
                }
        </div>
    )
}

export default Clas
