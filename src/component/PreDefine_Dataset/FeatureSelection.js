import React, { useEffect,useContext } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CustomPaginationActionsTable from '../Tables/Table'
import {Link} from "react-router-dom"
import { DataContext } from "../Charts/files/DataProvider"

function FeatureSelection(props) {

    const {mod1,data1,cols} = useContext(DataContext)
    const [mod,setMod] = mod1
    const [data,setData] = data1
    const [col,setCol] = cols

    let [item,setItem] = React.useState(col)

    const handleChange = (event) => {
        if(event.target.checked && !item.includes(event.target.name)){
            setItem([...item,`${event.target.name}`])
        }
        else{
            setItem(item.filter(i => i !== event.target.name))
        }
    }; 
    
    // const deleteProps = (obj, prop) => {
    //     for (const p of prop) {
    //         (p in obj) && (delete obj[p]);
    //     }    
    // }

    return (
        <div>
            {
                col?
                col.map(item=>
                    <FormControlLabel
                        control={<Checkbox defaultChecked={true} onChange={handleChange} name={item} />}
                        label={item} 
                    />
                ):null
            }
            <Link to={{
                pathname:"SplitData",
                selected:item
            }}>Split Data</Link>
            <CustomPaginationActionsTable values={mod}/>
        </div>
    )
}

export default FeatureSelection
