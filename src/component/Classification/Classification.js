import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import log4 from "../ChoiceMethod/4.png"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
});

const Details = [
    {
        db:'iris',
        name:'Iris',
        detail:`This is perhaps the best known database to be found in the pattern recognition literature. Fisher's paper is a classic in the field and is referenced frequently to this day. The data set contains 3 classes of 50 instances each, where each class refers to a type of iris plant`
    },
    {
        db:'wine',
        name:'Wine',
        detail:'The wine dataset contains the results of a chemical analysis of wines grown in a specific area of Italy. Three types of wine are represented in the 178 samples, with the results of 13 chemical analyses recorded for each sample. The Type variable has been transformed into a categoric variable'    
    },
    {
        db:'breast',
        name:'Breast Cancer',
        detail:`This analysis aims to observe which features are most helpful in predicting malignant or benign cancer and to see general trends that may aid us in model selection and hyper parameter selection. The goal is to classify whether the breast cancer is benign or malignant.`
    },
    {
        name:'Diabete',
        db:'diabete',
        detail:'The wine dataset contains the results of a chemical analysis of wines grown in a specific area of Italy. Three types of wine are represented in the 178 samples, with the results of 13 chemical analyses recorded for each sample. The Type variable has been transformed into a categoric variable'    
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
            <h1>Classification</h1>
            <Grid container spacing={10} style={{padding: '24px',width:'100%',margin:'0' }}>
            {
                Details.map(item=>{
                    return (
                        <Link style={{textDecoration: 'none',padding:'10px'}} 
                        to={{ pathname: '/Clas', data: { data: `${item.db}` } }}>   
                            <Card className={classes.root}>
                                <CardActionArea >
                                <CardMedia
                                    className={classes.media}
                                    image={log4}
                                    title={item.name}
                                />
                                <CardContent style={{height:'200px'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
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

                        <Link style={{textDecoration: 'none',padding:'10px'}} 
                        to={{ pathname: '/CCreate' }}>   
                            <Card className={classes.root}>
                                <CardActionArea >
                                <CardMedia
                                    className={classes.media}
                                    image={log4}
                                    title="Create Your Own Data"
                                />
                                <CardContent style={{height:'200px'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Create Your Own Data
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Create Your Own Data
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
            </Grid>
        </div>
    )
}

export default Classification
