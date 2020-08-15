import React, { useEffect } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) =>({
    button: {
        margin: theme.spacing(1),
    },
    prog:{
        width:"1200px",
        marginTop:"200px",
        [theme.breakpoints.down(500)]: {
            width: 400,
        }
    },
    body:{
        // marginTop:"70px",
        margin:"70px",
        textAlign:'justify'
    }
}))

function Test(props) {    
    const classes = useStyles();
    let id = localStorage.getItem('myid')

    let algo = ""
    if(props.location.data){
        sessionStorage.setItem('algo', props.location.data.data)
        algo = props.location.data.data
    }
    else{
        algo = sessionStorage.getItem('algo')
    }

    useEffect(()=>{
        let payload = {
            id,
            algorithm: algo
        }
        Axios.post("http://127.0.0.1:5000/model",null,{
            params:{
                payload
            }
        })
        .then(response=>console.log(response))
    },[])

    return (
        <div>
            
            <Container maxWidth="lg">
                <h1>Test</h1>
                <h3>Algo Information</h3>
                <Link to="/Prediction">Predict!!</Link>
            </Container>
        </div>
    )
}

export default Test
