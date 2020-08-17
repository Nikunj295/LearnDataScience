import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import CustomPaginationActionsTable from "../Tables/Table";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
        margin: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

function RCreate() {
    sessionStorage.setItem('raw','true')
    const classes = useStyles();
    const [rows, setRows] = useState(10)
    const [cols, setCols] = useState(2)
    const [cluster, setCluster] = useState(2)
    const [values, setValues] = useState([])
    const [info, setInfo] = useState([])

    const getData = () => {
        let id = localStorage.getItem('myid')
        let type = sessionStorage.getItem('type')
        let payload = {
            id,
            rows,
            cols,
            cluster,
            type
        }
        axios.post('http://127.0.0.1:5000/create',null,{
            params:{payload}
        }).then(response=>response.data)
        .then(data => {
            const tb = data[0]
            const ds = data[1]
            var myData = Object.keys(tb).map(key => {
                return tb[key];
            })
            var myData1 = Object.keys(ds).map(key => {
                return ds[key];
            })
            setInfo(myData1)
            setValues(myData)

            let column = [] 
            let columns = []
            if(tb[0]){
                column = Object.keys(tb[0])
                for(let i=0;i<column.length-1;i++){
                    columns.push(column[i])
                }
            }
            sessionStorage.setItem("selected",columns)
        })
    }


    return (
        <div>
            <TextField className={classes.formControl} 
                        type="number" 
                        InputProps={{ inputProps: { min: 10, max: 100000 } }} 
                        id="standard-basic" 
                        label="Rows"
                        value={rows}
                        helperText="Some important text"
                        onChange={(e)=>setRows(e.target.value)}
            />
            <TextField className={classes.formControl} 
                        type="number" 
                        InputProps={{ inputProps: { min: 2, max: 50 } }} 
                        id="standard-basic" 
                        label="Columns" 
                        value={cols}
                        helperText="Some important text"
                        onChange={(e)=>setCols(e.target.value)}
            />    
            <TextField className={classes.formControl} 
                        type="number" 
                        InputProps={{ inputProps: { min: 2, max: 10 } }} 
                        id="standard-basic" 
                        label="No. of Classification"
                        value={cluster}
                        helperText="How many class you want to distinguish?"
                        onChange={(e)=>setCluster(e.target.value)}
            /> 
            <Button
                variant="contained"
                color="primary"
                onClick={getData}
                className={classes.button}
            >Create</Button>

            <Link to={{
                pathname:"/FeatureSelection",
                featureSelection:{
                    data:values
                }
            }}>
                Feature Selection
            </Link>
            {
                values?<>
                    <CustomPaginationActionsTable values={values}/> 
                    <CustomPaginationActionsTable values={info}/>            
                    </>
                :null
            }

        </div>
    )
}

export default RCreate
