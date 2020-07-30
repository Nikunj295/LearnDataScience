import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import log4 from "../ChoiceMethod/4.png"

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200
    },
});

const c = [
    {
        algo:"logisticRegression",
        name:"Logistic Regression"
    },
    {
        algo:"knear",
        name:"K-Near Algorithm"
    },
    {
        algo:"svm",
        name:"Support Vector Machine"
    },
    {
        algo:"naive",
        name:"Naive Bayesian Classification"
    },
    {
        algo:"dtree",
        name:"Decision Tree"
    },
    {
        algo:"rtree",
        name:"Random Tree"
    },
]

function Model() {

    let type = sessionStorage.getItem('type')
    const classes = useStyles();

    return (
        <div>
            <h1>Model</h1>
            {
                type==='classification'?
                <>
                    <Grid container spacing={10} style={{padding: '24px', textAlign:'center'}}>
                        {
                            c.map(item=>{
                                return (
                                    <Link style={{textDecoration: 'none',padding:'10px'}} 
                                    to={{ pathname: '/Test', data: { data: `${item.algo}` } }}>   
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={log4}
                                                title={item.name}
                                            />
                                            <CardContent style={{height:'100px',width:'250px'}}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                {item.name}
                                                </Typography>
                                            </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                            <Button size="small" color="primary" >
                                                Share
                                            </Button>
                                            </CardActions>
                                        </Card>
                                    </Link>
                                )
                            })
                        }
                    </Grid>
                </>
                :null
            }
            
        </div>
    )
}

export default Model
