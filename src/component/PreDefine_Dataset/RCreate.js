import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import CustomPaginationActionsTable from "../Tables/Table";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';


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
    
    const [show,setShow] = useState(false)

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
            setShow(true)
        })
    }


    return (
        <div>
            <Container maxWidth="lg">
            <div style={{marginTop:"30px"}}>
            <h1>Step 2: Explore the Data</h1>
                <h2 style={{marginTop:"30px"}}>Create Your own data</h2>
            </div>
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

            
                <Button disabled={!show} variant="contained"color="primary"className={classes.button}>
                <Link style={{textDecoration:"none",color:'inherit'}} to={{
                    pathname:"/FeatureSelection",
                    data:{data:values}
                }}>Feature Selection&nbsp;&nbsp; <i className="fa fa-mail-forward"></i></Link>
                </Button>
            
            
            {
                show?<>
                    <CustomPaginationActionsTable values={values}/> 
                    </>
                :null
            }
            <div style={{marginBottom:"70px"}}>
                              
                {show? <> 
                    <h3>Below Table given is quick statistics of each columns:</h3>  
                    <CustomPaginationActionsTable values={info} type="info"/>
                    <div>
                    <h3>Now, next step is Feature Selection. "What is Feature Selection?" you ask</h3>
                    <div style={{ alignItems: "230px", position: "relative"}}>
                    <Button disabled={!show} variant="contained" color="primary"className={classes.button}>
                    <Link  style={{textDecoration:"none",color:'inherit'}} to={{
                        pathname:"/FeatureSelection",data:{data:values}
                    }}>Feature Selection&nbsp;&nbsp; <i className="fa fa-mail-forward"></i></Link>
                    </Button>
                    </div></div>
                    <hr style={{borderWidth: "5px"}}/> 
                </>: null}            
            </div>
            
        </Container>
        <Footer/>
        </div>
    )
}

export default RCreate
