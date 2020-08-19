import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Container from '@material-ui/core/Container';
import regression from "../Other/Images/regression.jpg"
import boston from "../Other/Regression/boston.jpg" 
import car from "../Other/Regression/car.jpg" 
import housing from "../Other/Regression/housing.jpeg" 
import insurance from "../Other/Regression/insurance.png" 
import redwine from "../Other/Regression/redwine.jpg" 
import crt from "../Other/Regression/Create.jpg"

const Details = [
    {
        db:'boston',
        name:'Boston Price',
        img:boston,
        detail:`The dataset for this project originates from the UCI Machine Learning Repository. The Boston housing data was collected in 1978 and each of the 506 entries represent aggregated data about 14 features for homes from various suburbs in Boston, Massachusetts.`
    },
    {
        db:'RedWine',
        img:redwine,
        name:'Red Wine Quality',
        detail:`The inputs include objective tests (e.g. PH values) and the output is based on sensory data
        (median of at least 3 evaluations made by wine experts). Each expert graded the wine quality
        between 0 (very bad) and 10 (very excellent).`
    },
    {
        db:'car',
        img:car,
        name:'Car Mileage',
        detail:`This dataset is a slightly modified version of the dataset provided in
        the StatLib library. In line with the use by Ross Quinlan (1993) in
        predicting the attribute "mpg", 8 of the original instances were removed
        because they had unknown values for the "mpg" attribute.`
    },
    {
        name:'Medical Cost',
        img:insurance,
        db:'insurance',
        detail:` This Data is a pratical is used in the book Machine Learning with R by Brett Lantz; which is a book that provides an introduction to machine learning using R. All of these datasets are in the public domain but simply needed some cleaning up and recoding to match the format in the book.`
    },
]

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
        margin:"30px",
    },
    im:{
        display: "block",
        marginTop:"50px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    ml:{
        marginTop:"40px",
        marginBottom:"60px",
        lineHeight: "1.8",
        textAlign:'justify',
    }
});

function Regression (){
    useEffect(()=>{
        let id = localStorage.getItem('myid')     
        sessionStorage.setItem('type','regression')
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
            <div className={classes.heading}><h1><i class="fa fa-area-chart" style={{fontSize:"32px"}} />&nbsp;&nbsp;&nbsp;Regression&nbsp;&nbsp;&nbsp;<i class="fa fa-bar-chart" style={{fontSize:"36px"}}></i></h1><br/></div>
            <div>
                <div>
                    <h4 className={classes.ml}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Regression analysis is a machine learning algorithm that can be used to measure how closely 
                        related independent variable(s) relate with a dependent variable. An extensive use of regression analysis is building 
                        models on datasets that accurately predict the values of the dependent variable.
                    </h4>
                </div>
            </div>
            
            <div>
                <h3 className={classes.heading}><u>Step 1: Obtain Data</u></h3>
                <div>
                    <h4 className={classes.ml}>The very first step of a data science project is straightforward. We obtain the data that we need from available data sources.
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
                        <Link style={{textDecoration: 'none'}}to={{ pathname: '/Reg', data: { data: `${item.db}` } }}>   
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
                <Link style={{textDecoration: 'none', padding:'10px'}} to={{ pathname: '/CCreate'}}>   
                    <Card className={classes.root}>
                        <CardActionArea >
                        <CardMedia
                            className={classes.media}
                            image={crt}
                            title="Create Your Own Data"
                        />
                        <CardContent style={{height:'200px'}}>
                            <Typography gutterBottom variant="h5" component="h3">
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
            <div>
                <div style={{marginTop:"60px"}}>
                    <h4 className={classes.ml}>
                        Regression Analysis is a very interesting machine learning technique that can be applied in different areas to predict numerical values such as predicting the price of a product/house, predicting the number of goals soccer players score in a season and predicting the BMI of people.
                    </h4>
                </div>

                <div><img src={regression} alt="content1_image" height="60%" width="60%" className={classes.im}/></div>
                
                <div>
                    <h4 className={classes.ml} >
                    At the beginning of regression analysis, a dataset can be split into two groups: a training dataset and a testing dataset. The training dataset can be used to create a model to figure out the best approach to apply the line of best fit into the graph. Thus, it can be a straight line or a curve that easily fits into the graph of the independent variable(s) vs the dependent variable.
                    </h4>
                </div>
                
                <div >
                    <h4 className={classes.ml}>
                    This newly created model can be used to predict the dependent variable of the testing dataset. Then, predicted values can be compared to the original dependent variable values by using different accuracy measures like R-squared, root mean square error, root mean average error, pearson correlation coefficient and others.
                    </h4>
                </div>
                
                <div>
                    <h4 className={classes.ml}>
                    If the accuracy score is not accurate enough and a stronger model wants to be built, the percentage of the datasets allocated to the training and testing datasets can be changed. For instance, if the training dataset had 70 % of the dataset with the testing dataset having 30%, the training dataset can now have 80% of the dataset with the testing dataset having 20%.
                    </h4>
                </div>
                
                <div>
                    <h4 className={classes.ml}>
                    There are different regression analysis approaches for continuous variables such as Linear Regression, Multiple Linear Regression, Polynomial Regression and Multiple Polynomial Regression.
                    </h4>
                </div>
            </div>
        </Container>
        <Footer/>
        </div>
    )
}


export default Regression
