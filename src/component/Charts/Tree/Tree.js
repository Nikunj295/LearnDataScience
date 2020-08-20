import React, {useEffect, useState} from 'react'
import Axios from "axios"
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles';
import reg from "../../Other/Images/1.jpg"
import ReactImageZoom from 'react-image-zoom';

const useStyles = makeStyles((theme) =>({
    prog:{
        width:"800px",
        marginTop:"200px",
        [theme.breakpoints.down(500)]: {
            width: 400,
        }
    },
    img:{
        display: "flex",
        alignItems:'center',
        flexDirection:'row',
        // overflow: 'auto',
    },
    head:{
        margin:'auto',
        textAlign:'center',
        marginTop:"40px"
    },
    body:{
        margin:"70px",
        textAlign:'justify',
        lineHeight:'1.4'
    }
}))


function Tree() {
    
    const classes = useStyles();
    const [data,setData] = useState('')
    const [show,setShow] = useState(false)
    const [s,setS] = useState()
    useEffect(()=>{
        let id = localStorage.getItem('myid')
        let payload={
            id
        }    
        Axios.post("http://127.0.0.1:5000/getTree",null,{
            params:{
                payload
            }
        })
        .then(response=>setData(response.data))
        setS(`data:image/jpeg;base64,${data}`)
        setShow(true)    
    },[])

    const props = {width:600, zoomWidth: 500, img: `data:image/jpeg;base64,${data}`};

    return (
        <>
        <h1 className={classes.head}> Decision plot Tree</h1> 
        <div>
            <h4 className={classes.body}>
            Decision trees are a popular supervised learning method for a variety of reasons. Benefits of decision trees include that they can be used for both regression and classification, they don’t require feature scaling, and they are relatively easy to interpret as you can visualize decision trees. This is not only a powerful way to understand your model, but also to communicate how your model works. Consequently, it would help to know how to make a visualization based on your model.
            </h4>
        </div>
        <div className={classes.img}>
            {
            show?
            <div>
                <ReactImageZoom {...props} />
            </div>:
            <LinearProgress className={classes.prog} color="secondary"/>}
        </div>
        
        </>
    )
}

export default Tree
