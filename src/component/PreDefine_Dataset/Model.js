import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import log4 from "../ChoiceMethod/4.png"
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';

const useStyles = makeStyles({
    root: {
      width: 345,
    },
    media: {
      height: 200
    },
    body:{
        margin:"70px",
        textAlign:'justify'
    }
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

const r = [
    {
        algo:"linearRegression",
        name:"Linear Regression"
    },
    {
        algo:"logisticRegression",
        name:"Logistic Regression"
    },
    {
        algo:"svm",
        name:"Support Vector Machine"
    },
    {
        algo:"ridge",
        name:"Ridge"
    },


]

function Model() {

    let type = sessionStorage.getItem('type')
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="lg">
            <div style={{marginTop:"50px"}}>
                <h1>Step 4: Model Selection</h1>
            </div>
            <div style={{marginTop:"30px"}}>
                <h5>Model selection is the process of selecting one final machine learning model from among a collection of candidate machine learning models for a training dataset.</h5>
            </div>
            <div style={{marginTop:"30px"}}>
            {
                type==='classification'?
                <>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10} style={{ margin:"0px",marginTop:"10px",width:"auto"}}>
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
                                            <CardContent style={{height:'150px',width:'250px'}}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                {item.name}
                                                </Typography>
                                            </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Link>
                                )
                            })
                        }
                    </Grid>
                </>
                :
                <>
                    <Grid container spacing={10} style={{padding: '24px', textAlign:'center'}}>
                        {
                            r.map(item=>{
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
                                            <CardContent style={{height:'150px',width:'250px'}}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                {item.name}
                                                </Typography>
                                            </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Link>
                                )
                            })
                        }
                    </Grid>
                </>
            }
            </div>
            <div className={classes.body}>
                <h5>
                For example, we may have a dataset for which we are interested in developing a classification or regression predictive model. We do not know beforehand as to which model will perform best on this problem, as it is unknowable. Therefore, we fit and evaluate a suite of different models on the problem.
                </h5>
            </div>
            <div className={classes.body}>
                <h5>
                    Model selection is the process of choosing one of the models as the final model that addresses the problem.
                </h5>
                <h5>
                Model selection is different from model assessment.
                For example, we evaluate or assess candidate models in order to choose the best one, and this is model selection. Whereas once a model is chosen, it can be evaluated in order to communicate how well it is expected to perform in general; this is model assessment.
                </h5>
            </div>
            <div className={classes.body}>
                <h4>
                What do we care about when choosing a final model?
                </h4>
                <h5>
                The project stakeholders may have specific requirements, such as maintainability and limited model complexity. As such, a model that has lower skill but is simpler and easier to understand may be preferred.Alternately, if model skill is prized above all other concerns, then the ability of the model to perform well on out-of-sample data will be preferred regardless of the computational complexity involved.
                </h5>
            </div>
            <div className={classes.body}>
                <h4>
                What do we care about when choosing a final model?
                </h4>
                <h5>
                The project stakeholders may have specific requirements, such as maintainability and limited model complexity. As such, a model that has lower skill but is simpler and easier to understand may be preferred.Alternately, if model skill is prized above all other concerns, then the ability of the model to perform well on out-of-sample data will be preferred regardless of the computational complexity involved.
                </h5>
            </div>
            <div className={classes.body}>
                <h5>Therefore, a “good enough” model may refer to many things and is specific to your project, such as:
                <br/>-A model that meets the requirements and constraints of project stakeholders.
                <br/>-A model that is sufficiently skillful given the time and resources available.
                <br/>-A model that is skillful as compared to naive models.
                <br/>-A model that is skillful relative to other tested models.
                <br/>-A model that is skillful relative to the state-of-the-art</h5>
            </div>
            </Container>
            <hr style={{borderWidth: "5px"}}/>
            <Footer/>
        </div>
    )
}

export default Model
