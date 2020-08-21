import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CustomPaginationActionsTable from '../Tables/Table'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) =>({
    button: {
        margin: theme.spacing(1),
    },
    prog:{
        width:"800px",
        marginTop:"200px",
        [theme.breakpoints.down(500)]: {
            width: 400,
        }
    },
    img:{
        display: "flex",
        alignItems:'center',
        flexDirection:'column',
        overflow: 'auto',
    },
    body:{
        marginTop:"70px",
        marginBottom:"70px",
        textAlign:'justify'
    },
    short:{
        textAlign:'justify',
        marginLeft:"auto",
        marginRight:"auto",
        lineHeight:'1.8',
        marginTop:'30px',
        marginBottom:'50px',
    }, 
}))

function Prediction() {
    const classes = useStyles();
    const [show,setShow] = useState(false)
    const [result,setResult] = useState([])
    const [final,setFinal] = useState([])

    useEffect(() => {
        let id = localStorage.getItem('myid')
        let payload={
            id
        }    

        axios.post("https://l-data-science.herokuapp.com/predict",null,{
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
            setShow(true)
        })

    }, [])

    return (
        <div>
        <Container maxWidth="lg">
            <div style={{marginTop:"30px", marginBottom:"30px"}}>
                <h1>Step 7: Predicted Data</h1>
                <h4 className={classes.short}>
                    Predictive analytics encompasses a variety of statistical techniques from data mining, predictive modelling, and machine learning, that analyze current and historical facts to make predictions about future or otherwise unknown events
                </h4>
            </div>
            <div style={{ position: "relative"}}>
                <Link to={{pathname:"/Check"}} style={{textDecoration:"none"}}>
                    <Button variant="contained"color="primary"className={classes.button}>
                        Visualization&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
                    </Button>
                </Link>
            </div>
            <div >
                <h3 className={classes.short}>Predicted Data Table:</h3>
            </div>
            {show? <>
                <CustomPaginationActionsTable values={result} /> 
                    </> 
                :<><LinearProgress className={classes.prog} color="secondary"/></>
            } 
            <div >
                <h3 className={classes.short}>Comparison of Predicted Data and Original Data(Target):</h3>
            </div>
            {show? <>
                <CustomPaginationActionsTable values={final} /> 
                    </> 
                :<><LinearProgress className={classes.prog} color="secondary"/></>
            } 
            <div className={classes.body}>

            </div>
            <div>
                <h3 className={classes.short}>Now, next step is Visualization. It is boring to watch data in tables instead of that lets analyze the data with Visualization in chart and many more....</h3>
                <div style={{ alignItems: "230px", position: "relative"}}>
                    <Link to={{pathname:"/Check"}} style={{textDecoration:"none"}}>
                        <Button variant="contained"color="primary"className={classes.button}>
                        Visualization&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
                        </Button>
                    </Link>
                </div> 
            </div>
            <hr style={{borderWidth: "5px"}}/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Prediction