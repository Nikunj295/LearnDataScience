import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import log4 from "../ChoiceMethod/4.png"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
      width: 345,
      textAlign:'justify'
    },
    media: {
      height: 350,
    },
});

const Details = [
    {
        db:'iris',
        name:'Iris Dataset',
        detail:`This is a classic in the field and is referenced frequently to this day. The data set contains 3 classes of 50 instances each, where each class refers to a type of iris plant`
    },
    {
        db:'wine',
        name:'Wine Dataset',
        detail:'The wine dataset contains the results of a chemical analysis of wines grown in a specific area of Italy. Three types of wine are represented in the 178 samples, with the results of 13 chemical analyses recorded for each sample. The Type variable has been transformed into a categoric variable'    
    },
    {
        db:'breast',
        name:'Breast Cancer Dataset',
        detail:`This analysis aims to observe which features are most helpful in predicting malignant or benign cancer and to see general trends that may aid us in model selection and hyper parameter selection. The goal is to classify whether the breast cancer is benign or malignant.`
    },
    {
        name:'Diabete Dataset',
        db:'diabete',
        detail:'This dataset is originally from the National Institute of Diabetes and Digestive and Kidney Diseases. The objective of the dataset is to diagnostically predict whether or not a patient has diabetes, based on certain diagnostic measurements included in the dataset.'    
    },
    
]

function Classification(){  
     useEffect(()=>{
        let id = localStorage.getItem('myid')
        sessionStorage.setItem('type','classification')     
        axios.post("http://127.0.0.1:5000/addId",null,{
            params:{
                id,
            }   
        })
        .then(response=>console.log(response))
    },[])
    const classes = useStyles();

    return (
        <div>
        <Container maxWidth="lg">
            <h1>Classification</h1>
            <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10} style={{padding: '24px', marginTop:"10px"}}>
                {
                    Details.map(item=>{
                        return (
                            <Link style={{textDecoration: 'none',padding:'10px'}} to={{ pathname: '/Clas', data: { data: `${item.db}` } }}>   
                                <Card className={classes.root}>
                                    <CardActionArea >
                                    <CardMedia
                                        className={classes.media}
                                        image={log4}
                                        title={item.name}
                                    />
                                    <CardContent style={{height:'200px'}}>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        {item.detail}
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        )
                    })
                }
                <Link style={{textDecoration: 'none',padding:'10px'}} to={{ pathname: '/CCreate' }}>   
                    <Card className={classes.root}>
                        <CardActionArea >
                        <CardMedia
                            className={classes.media}
                            image={log4}
                            title="Create Your Own Data"
                        />
                        <CardContent style={{height:'200px'}}>
                            <Typography gutterBottom variant="h5" component="h3">
                            Create Your Own Data
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Create Your Own Random Data with any number of rows, columns, and class...
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </Container>
        </div>
    )
}

export default Classification
