import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Iris from "../Other/Classification/Iris.jpg"
import cancer from "../Other/Classification/cancer.jpg"
import wine from "../Other/Classification/wine.jpg"
import Create from "../Other/Classification/Create.jpg"
import content from "../Other/Classification/content.jpg"
import Diabete from "../Other/Classification/Diabete.jpg"
import Footer from '../Footer/Footer';

const useStyles = makeStyles({
    root: {
      width: 345,
      textAlign:'justify'
    },
    media: {
      height: 300,
    },
    heading:{
        textAlign:'center',
        margin:"30px"
    },
    content:{
        textAlign:'justify'
    },
    short:{
        textAlign:'justify',
        marginLeft:"auto",
        marginBottom:"auto"
    },
    im:{
        display: "block",
        marginTop:"50px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    m:{
        marginTop:"60px"
    },
    ml:{
        marginTop:"60px",
        marginBottom:"60px"
    }
});

const Details = [
    {
        db:'iris',
        name:'Iris Dataset',
        detail:`This is a classic in the field and is referenced frequently to this day. The data set contains 3 classes of 50 instances each, where each class refers to a type of iris plant`,
        img: Iris
    },
    {
        db:'wine',
        name:'Wine Dataset',
        detail:'The wine dataset contains the results of a chemical analysis of wines grown in a specific area of Italy. Three types of wine are represented in the 178 samples, with the results of 13 chemical analyses recorded for each sample. The Type variable has been transformed into a categoric variable',
        img: wine    
    },
    {
        db:'breast',
        name:'Breast Cancer Dataset',
        detail:`This analysis aims to observe which features are most helpful in predicting malignant or benign cancer and to see general trends that may aid us in model selection and hyper parameter selection. The goal is to classify whether the breast cancer is benign or malignant.`,
        img:cancer
    },
    {
        name:'Diabete Dataset',
        db:'diabete',
        detail:'This dataset is originally from the National Institute of Diabetes and Digestive and Kidney Diseases. The objective of the dataset is to diagnostically predict whether or not a patient has diabetes, based on certain diagnostic measurements included in the dataset.',
        img:Diabete    
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
            <h1 className={classes.heading}><span>&#10004;</span>Classification&#10008;</h1><br/>
            <div className={classes.content}>
                <div><h4>
                &nbsp;&nbsp;&nbsp;&nbsp;Classification is the process of predicting the class of given data points. Classes are sometimes called as targets/ labels or categories. Classification predictive modeling is the task of approximating a mapping function (f) from input variables (X) to discrete output variables (y).
                </h4></div>
            </div>
            <div><br/><br/><br/>
                <h3 className={classes.heading}><u>Step 1: Obtain Data</u></h3>
                <div className={classes.short} >
                    <h4>The very first step of a data science project is straightforward. We obtain the data that we need from available data sources.
                    In this step, you will need to query databases, using technical skills like MySQL to process the data. You may also receive data in file formats like Microsoft Excel. If you are using Python or R, they have specific packages that can read data from these data sources directly into your data science programs.
                    Another popular option to gather data is connecting to Web APIs. Websites such as Facebook and Twitter allows users to connect to their web servers and access their data. All you need to do is to use their Web API to crawl their data.
                    We have provided some datasets to start with explore. Choice any one of it.
                    </h4>
                </div>
            </div>
            <div><h3 className={classes.heading}>Dataset:</h3></div>
            <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10} style={{ margin:"0px",marginTop:"10px",width:"auto"}}>
                {
                    Details.map(item=>{
                        return (
                        <Link style={{textDecoration: 'none'}} to={{ pathname: '/Clas', data: { data: `${item.db}` } }}>   
                            <Card className={classes.root}>
                                <CardActionArea >
                                <CardMedia
                                    className={classes.media}
                                    image={item.img}
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
                
                <Link style={{textDecoration: 'none',padding:'10px'}} to={{ pathname: '/CCreate'}}>   
                    <Card className={classes.root}>
                        <CardActionArea >
                        <CardMedia
                            className={classes.media}
                            image={Create}
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
            <div>
                <div className={classes.short} style={{marginTop:"60px"}}>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    In a classification task, each individual or situation where we’d like to make a prediction is 
                    called an observation. We ordinarily have many observations. Each observation has 
                    multiple attributes, which are known (for example, the total value of the order on Amazon, or the voter’s annual 
                    salary). Also, each observation has a class, which is the answer to the question we care about (for example, fraudulent or 
                    not, or voting for you or not).</h4>
                </div>
                <div><img src={content} alt="content1_image" height="60%" width="60%" className={classes.im}/></div>
                <div className={classes.short} >
                    <h4 className={classes.m}>
                    Classification requires data. It involves looking for patterns, and to find patterns, you need data. 
                    That’s where the data science comes in. In particular, we’re going to assume that we have access to training data: a 
                    bunch of observations, where we know the class of each observation. The collection of these pre-classified observations is also 
                    called a training set. A classification algorithm is going to analyze the training set, and then come up with a classifier: an algorithm for predicting the class of future observations.
                    </h4></div>
                <div className={classes.short}>
                    <h4 className={classes.ml}>
                    Classifiers do not need to be perfect to be useful. They can be useful even if their accuracy is less than 100%. For instance, 
                    if the online dating site occasionally makes a bad recommendation, that’s OK; their customers already expect to have to meet many people before they’ll find someone they hit it off with. 
                    Of course, you don’t want the classifier to make too many errors — but it doesn’t have to get the right answer every single time.
                    </h4>
                </div>
            </div>
        </Container>
        <Footer/>
        </div>
    )
}

export default Classification
