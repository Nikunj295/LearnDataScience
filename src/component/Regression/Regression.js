import React, { useEffect } from 'react'
import RegressionOption from "../Select/RegressionOption";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import log4 from "../ChoiceMethod/4.png"

const Details = [
    {
        db:'boston',
        name:'Boston Price',
        detail:`This is perhaps the best known database to be found in the pattern recognition literature. Fisher's paper is a classic in the field and is referenced frequently to this day. The data set contains 3 classes of 50 instances each, where each class refers to a type of iris plant`
    },
    {
        db:'RedWine',
        name:'Red Wine Quality',
        detail:`This analysis aims to observe which features are most helpful in predicting malignant or benign cancer and to see general trends that may aid us in model selection and hyper parameter selection. The goal is to classify whether the breast cancer is benign or malignant.`
    },
    {
        db:'car',
        name:'Car Mileage',
        detail:`The Digit Dataset. This dataset is made up of 1797 8x8 images. Each image, like the one shown below, is of a hand-written digit. In order to utilize an 8x8 figure like this, we'd have to first transform it into a feature vector with length 64.`
    },
    {
        db:'housing',
        name:'House Cost Prediction',
        detail:`The Digit Dataset. This dataset is made up of 1797 8x8 images. Each image, like the one shown below, is of a hand-written digit. In order to utilize an 8x8 figure like this, we'd have to first transform it into a feature vector with length 64.`
    },
    {
        name:'Insurance',
        db:'insurance',
        detail:`The Digit Dataset. This dataset is made up of 1797 8x8 images. Each image, like the one shown below, is of a hand-written digit. In order to utilize an 8x8 figure like this, we'd have to first transform it into a feature vector with length 64.`
    },
]

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
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
            <h1>Regression</h1>
            <Grid container spacing={10} style={{padding: '24px'}}>
            {
                Details.map(item=>{
                    return (
                        <Link style={{textDecoration: 'none',padding:'10px'}} 
                        to={{ pathname: '/Reg', data: { data: `${item.db}` } }}>   
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
                                <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                                </CardActions>
                            </Card>
                        </Link>
                    )
                })
            }
            <Link style={{textDecoration: 'none', padding:'10px'}} 
                to={{ pathname: '/CCreate'}}>   
                    <Card  style={{width:'345px'}}>
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
                        <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                        </CardActions>
                    </Card>
                </Link>
            </Grid>
        </div>
    )
}


export default Regression
