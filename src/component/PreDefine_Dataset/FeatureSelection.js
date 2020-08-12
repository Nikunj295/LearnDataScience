import React, { useEffect,useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CustomPaginationActionsTable from '../Tables/Table'
import {Link} from "react-router-dom"
import axios from 'axios';

function FeatureSelection(){
    const [data, setData] = useState([])
    let col = localStorage.getItem('selected').split(",")
    var arr = []
    col.map(item=>arr.push(item))
    let [item,setItem] = React.useState(arr)

    useEffect(()=>{
        const id = localStorage.getItem('myid')
        const dataset = localStorage.getItem('dataset')
        const raw = sessionStorage.getItem('raw')
        let payload = {
            id,
            item,
            dataset
        }


        if(raw==='true'){
            axios.post("http://127.0.0.1:5000/create/selection",null,{
                params:{
                    payload
                }
            })
            .then(response=>response.data)
            .then(data => {
                const tb = data
                var myData = Object.keys(tb).map(key => {
                    return tb[key];
                })
                setData(myData)
            })
        }
        else{
            axios.post("http://127.0.0.1:5000/selection",null,{
                params:{
                    payload
                }
            })
            .then(response=>response.data)
            .then(data => {
                const tb = data
                var myData = Object.keys(tb).map(key => {
                    return tb[key];
                })
                setData(myData)
            })
        }
        sessionStorage.setItem('train',item)
    },[item])

    const handleChange = (event) => {
        if(event.target.checked && !item.includes(event.target.name)){
            setItem([...item,`${event.target.name}`])
        }
        else{
            setItem(item.filter(i => i !== event.target.name))
        }
    }; 

    return (
        <div >
            {
                arr?
                arr.map(item=>
                    <FormControlLabel
                        control={<Checkbox defaultChecked={true} onChange={handleChange} name={item} />}
                        label={item} 
                    />
                ):null
            }
            <Link to={{
                pathname:"SplitData"
            }}>Split Data</Link>
            {
                data?
                    <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}><CustomPaginationActionsTable values={data}/></div>
                :null
            }
        </div>
    )
}

export default FeatureSelection
