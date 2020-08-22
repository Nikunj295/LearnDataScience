import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contact:{
        display:'flex',
        flexDirection: 'rows',
        justifyContent:"space-evenly",
        alignItems: 'center',
        marginTop:'20px',
        marginBottom:"50px",
    }
}));

function About() {
    const classes = useStyles()
    return (<>
        <div style={{display:'flex',flexDirection: 'row', alignItems: 'center',height:"100%",marginTop:"9%",marginBottom:"9%"}}>

        <div style={{display:'flex',flexDirection: 'row',marginLeft:"200px"}}>  
            <i className="fa fa-quote-left" style={{fontSize:"100px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-quote-right" style={{fontSize:"100px"}}></i>
        </div>
        <Container maxWidth="md">
            <div style={{textAlign:'justify'}}>
                <h3 style={{lineHeight:'1.4'}}>This website came in the story as amount of the data is increasing exponetial which can be used for improve result in business or research,  
                    which result in rise in data science domain by day. As result, every one should have some gist amount of knowledge about it and how it works and how
                    it can be use in their business to make it efficient. We provide some easy real life exmaples to increase our your 
                    knowledge in Data science domain. Remember this is just a starting layer and hope you got something from this.
                </h3>
            </div>
        </Container>
    
        </div>
        <hr style={{borderWidth: "5px"}}/>
        <div>
            <h2 style={{display:'flex',flexDirection: 'column', alignItems: 'center', marginTop:'30px'}}><u>Contact</u></h2>
            <div className={classes.contact}>
                <i className="fa fa-github" style={{fontSize:"26px"}}>&nbsp;&nbsp;<a style={{ textDecoration: 'none',color: "inherit" }} target="blank" href="https://www.github.com/Nikunj295">Github</a></i>
                <i className="fa fa-linkedin" style={{fontSize:"26px"}}>&nbsp;&nbsp;<a style={{ textDecoration: 'none',color: "inherit" }} target="blank" href="https://www.linkedin.com/in/nikunj-viradiya-56a7a3179">LinkedIn</a></i>
                <i className="fa fa-twitter" style={{fontSize:"26px"}}>&nbsp;&nbsp;Twitter</i>
                <i className="fa fa-google" style={{fontSize:"26px"}}>&nbsp;&nbsp;Google+</i>
            </div>
        </div>
        </>
    )
}

export default About
