import React from 'react'
import { Button } from '@material-ui/core'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from "../component/Other/Images/logo.png"
import AlgoHome from "../component/Other/Images/AlgoHome.jpg"
import DataHome from "../component/Other/Images/DataHome.png"
import VisualHome from "../component/Other/Images/VisualHome.jpg"
import Datacycle from "../component/Other/Images/Datacycle.png"
import Footer from "../component/Footer/Footer";
import Container from '@material-ui/core/Container';
import { Fade, Bounce } from "react-awesome-reveal";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    margin: {
        marginTop: theme.spacing(6)
    },
    dfam:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop:'120px'
    },
    content1:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        marginTop:'100px', 
        textAlign:'justify',
        lineHeight:'1.8'
    },
    contact:{
        display:'flex',
        flexDirection: 'rows',
        justifyContent:"space-evenly",
        alignItems: 'center',
        marginTop:'20px',
        marginBottom:"50px"
    }
    
}));

  function Home() {
    const classes = useStyles();
    return (
        <>
        <Container maxWidth="md">
            <Fade duration={2000} >
                <div className={classes.dfam}>
                    <h1>Learn Data Science</h1>
                    <div> 
                        <img className={classes.margin} src={logo} height={250} width={250} alt="DataScience_HomeLogo" /> 
                    </div>
                    <Button component={Link} to="/Choicemethod" variant="contained" size="large" color="primary" className={classes.margin}>
                        Get Started
                    </Button>
                </div>
            </Fade>

            <Fade  delay={100} duration={1200}>
            <div className={classes.dfam} >
            
              <h1 style={{marginBottom:"50px"}}>What we provide</h1>
            
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={DataHome}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Various Data to Explore
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                We have various Dataset to explore with various scenario with real life examples. You can also create your own data to experiment !!  
                            </Typography>
                            </CardContent>
                    </Card>
                    <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={AlgoHome}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Different Algorithm
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Wide range of Algorithm are provided to analyze your dataset with classification and regression approach.  
                            </Typography>
                            </CardContent>
                    </Card>
                    <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={VisualHome}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Various Visualization
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Different Visualization Chart provided for better understanding of any data. For instance, scatterplot, trendline, and many more.,,   
                            </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </div>
            </Fade>
            <Fade  delay={100} duration={1200}>
            <div className={classes.content1}>
                <div><h2>What is Data Science?</h2></div><br/>
                <div>
                <span style={{fontSize:'160%'}}>D</span>ata science continues to evolve as one of the most promising and in-demand career paths for skilled professionals. 
                Today, successful data professionals understand that they must advance past the traditional skills
                of analyzing large amounts of data, data mining, and programming skills. In 
                order to uncover useful intelligence for their organizations, data scientists must master the full spectrum
                of the data science life cycle and possess a level of flexibility
                and understanding to maximize returns at each phase of the process.
                </div>
            </div>
            <div className={classes.content1}>
                <div><h2>What Does a Data Scientist Do?</h2></div><br/>
                <div>
                <span style={{fontSize:'160%'}}>D</span>ata scientists need to be curious and result-oriented, 
                with exceptional industry-specific knowledge and communication skills that allow them to explain 
                highly technical results to their non-technical counterparts. 
                These professionals are well-rounded, data-driven individuals with high-level technical skills who are capable of 
                building complex quantitative algorithms to organize and synthesize large amounts of information used to answer questions and drive
                strategy in their organization.They possess a strong quantitative
                background in statistics and linear algebra as well as programming knowledge with focuses in data warehousing, mining,
                and modeling to build and analyze algorithms.
                </div>
                <div style={{marginTop:'80px'}}><h2>Why Become a Data Scientist?</h2></div><br/>
                <div>
                <span style={{fontSize:'160%'}}>G</span>lassdoor ranked data scientist as the #1 Best Job in America in 2018 for the 
                third year in a row. 4 As increasing amounts of data become more accessible, large tech companies are no longer the 
                only ones in need of data scientists. The growing demand for data science professionals across industries, big and 
                small, is being challenged by a shortage of qualified candidates available to fill the open positions.
                The need for data scientists shows no sign of slowing down in the coming years. LinkedIn listed data scientist as one of 
                the most promising jobs in 2017 and 2018, along with multiple data-science-related skills as the most in-demand by companies
                </div>
            </div>
            </Fade>
            
            <Fade  delay={100} duration={1200}>
            <div className={classes.content1}>
                <img src={Datacycle} alt="Cycle_image"/><h4>Data Science Cycle</h4>
            </div>
            <div className={classes.content1}>
                <h2>Enough with talks, Let's get started</h2>
                <Button component={Link} to="/Choicemethod" variant="contained" size="large" color="primary"style={{margin:'25px'}}> 
                    Get Started
                </Button>
            </div>
            <hr style={{borderWidth: "5px"}}/>
            <h2 style={{display:'flex',flexDirection: 'column', alignItems: 'center', marginTop:'30px'}}><u>Contact</u></h2>
            <div className={classes.contact}>
                <i className="fa fa-github" style={{fontSize:"26px"}}>&nbsp;&nbsp;<a style={{ textDecoration: 'none',color: "inherit" }} target="blank" href="https://www.github.com/Nikunj295">Github</a></i>
                <i className="fa fa-linkedin" style={{fontSize:"26px"}}>&nbsp;&nbsp;<a style={{ textDecoration: 'none',color: "inherit" }} target="blank" href="https://www.linkedin.com/in/nikunj-viradiya-56a7a3179">LinkedIn</a></i>
                <i className="fa fa-twitter" style={{fontSize:"26px"}}>&nbsp;&nbsp;Twitter</i>
                <i className="fa fa-google" style={{fontSize:"26px"}}>&nbsp;&nbsp;Google+</i>
            </div>
            </Fade>
        <Footer/>
        </Container >  
        </>
    )
}

export default Home
