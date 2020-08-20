import React from 'react'
import { Container } from '@material-ui/core'

function About() {
    return (
        <div style={{display:'flex',flexDirection: 'row', alignItems: 'center',height:"100%",marginTop:"9%"}}>

        <div style={{display:'flex',flexDirection: 'row',marginLeft:"200px"}}>  
            <i className="fa fa-quote-left" style={{fontSize:"100px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-quote-right" style={{fontSize:"100px"}}></i>
        </div>
        <Container maxWidth="md">
            <div style={{marginLeft:"40px",marginTop:"40px",textAlign:'justify'}}>
                <h2 style={{lineHeight:'1.4'}}>This website came in the story as amount of the data is increasing exponetial which can be used for improve result in business or research,  
                    which result in rise in data science domain by day. As result, every one should have some gist amount of knowledge about it and how it works and how
                    it can be use in their business to make it efficient. We provide some easy real life exmaples to increase our your 
                    knowledge in Data science domain. Remember this is just a starting layer and hope you got something from this.
                </h2>
            </div>
        </Container>
        </div>
    )
}

export default About
