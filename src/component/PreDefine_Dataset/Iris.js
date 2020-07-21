import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import CustomPaginationActionsTable from "../Tables/Table";
import { Link } from 'react-router-dom';
import { DataContext } from '../Charts/files/DataProvider';

function Iris(){
    
    const [infoData,setInfoData] = useState([]) 
    const {data1,mod1,cols} = useContext(DataContext)
    const [data,setData] = data1
    const [mod,setMod] = mod1
    const [col,setCol] = cols
    
    useEffect(()=>{
        axios.post('http://127.0.0.1:5000/classification/fetchData/iris',null,{
            params:{
                type:'fetchData'
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
            setInfoData(myData1)
            setData(myData)
            setMod(myData)

            let column = [] 
            let columns = []
            if(tb[0]){
                column = Object.keys(tb[0])
                for(let i=0;i<column.length-1;i++){
                    columns.push(column[i])
                }
            }
            setCol(columns)
        })
    },[])

    return (
        <div>
                <Link to={{
                    pathname:"/FeatureSelection",
                    featureSelection:{
                        data:data
                    }
                }}>
                    Feature Selection
                </Link>
                {
                    data?<>
                        <CustomPaginationActionsTable values={data}/> 
                        <CustomPaginationActionsTable values={infoData}/>            
                        </>
                    :null
                }
        </div>
    )
}

export default Iris
