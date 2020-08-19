import React, { useEffect,useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CustomPaginationActionsTable from '../Tables/Table'
import {Link} from "react-router-dom"
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) =>({
    button: {
        margin: theme.spacing(1),
    },
    prog:{
        width:"1200px",
        marginTop:"200px",
        [theme.breakpoints.down(500)]: {
            width: 400,
        }
    },
    body:{
        // marginTop:"70px",
        margin:"70px",
        textAlign:'justify'
    }
}))

function FeatureSelection(){
    const classes = useStyles();
    const [data, setData] = useState([])
    const [show,setShow] = useState(false)
    let col = sessionStorage.getItem('selected').split(",")
    var arr = []
    col.map(item=>arr.push(item))
    let [item,setItem] = React.useState(arr)
    const dataset = sessionStorage.getItem('db')
    
    useEffect(()=>{
        const id = localStorage.getItem('myid')
        const raw = sessionStorage.getItem('raw')
        
        let payload = {
            id,
            item,
            dataset
        }

        if(raw==='true'){
            axios.post("http://127.0.0.1:5000/create/selection",null,{
                params:{
                    payload
                }
            })
            .then(response=>response.data)
            .then(data => {
                const tb = data
                var myData = Object.keys(tb).map(key => {
                    return tb[key];
                })
                setData(myData)
                setShow(true)
            })
        }
        else{
            axios.post("http://127.0.0.1:5000/selection",null,{
                params:{
                    payload
                }
            })
            .then(response=>response.data)
            .then(data => {
                const tb = data
                var myData = Object.keys(tb).map(key => {
                    return tb[key];
                })
                setData(myData)
                setShow(true)
            })
        }
        sessionStorage.setItem('train',item)
    },[item])

    const handleChange = (event) => {
        if(event.target.checked && !item.includes(event.target.name)){
            setItem([...item,`${event.target.name}`])
        }
        else{
            setItem(item.filter(i => i !== event.target.name))
        }
    }; 

    return (
        <div >
            <Container maxWidth="lg">
            <div style={{marginTop:"30px"}}>
                <h1>Step 3: Feature Selection</h1>
            </div>
            <div>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{fontSize:'28px'}}>F</span>eature selection is the process of reducing the number of input variables when developing a predictive model.
                It is desirable to reduce the number of input variables to both reduce the computational cost of modeling and, 
                in some cases, to improve the performance of the model. Let's check first with all inputs</h5>
            </div>
            <div style={{marginTop:"50px"}}>
            {
                arr?
                arr.map(item=>
                    <FormControlLabel
                        control={<Checkbox defaultChecked={true} onChange={handleChange} name={item} />}
                        label={item} 
                    />
                ):null
            }
           
            <Link to={{pathname:"/SplitData"}}>
                <Button variant="contained"color="primary"className={classes.button}>
                        Split Data&nbsp;&nbsp; <i class="fa fa-mail-forward"></i>
                </Button>
            </Link>
            </div>
            {show? <>
                <CustomPaginationActionsTable values={data} /> 
                    </> 
                :<><LinearProgress className={classes.prog} color="secondary"/></>
            } 
            <div className={classes.body}>
                <h5>
                Statistical-based feature selection methods involve evaluating the relationship between each input variable and the 
                target variable using statistics and selecting those input variables that have the strongest relationship with the target variable. 
                These methods can be fast and effective, 
                although the choice of statistical measures depends on the data type of both the input and output variables.
                </h5>
            </div>
            <div className={classes.body}>
                <h5>
                The difference has to do with whether features are selected based on the target variable or not. Unsupervised feature selection techniques ignores the target variable, such as methods that remove redundant variables using correlation. 
                Supervised feature selection techniques use the target variable, such as methods that remove irrelevant variables..
                Another way to consider the mechanism used to select features which may be divided into wrapper and filter methods. 
                These methods are almost always supervised and are evaluated based on the performance of a resulting model on a hold out dataset.
                Wrapper feature selection methods create many models with different subsets of input features and select those features that result in the best performing model according to a performance metric. These methods are unconcerned with the variable types, although they can be computationally expensive. RFE is a good example of a wrapper feature selection method.
                </h5>
            </div>
            <div className={classes.body}>
                <h5>
                Filter feature selection methods use statistical techniques to evaluate the relationship between each input variable and the target variable, and these scores are used as the basis to choose (filter) those input variables that will be used in the model.
                </h5>
            </div>
            <div className={classes.body}>
                <h5>
                Finally, there are some machine learning algorithms that perform feature selection automatically as part of learning the model. We might refer to these techniques as intrinsic feature selection methods. These methods will come in the future updates.</h5>
            </div>
            <div>
                <h3>Now, next step is Split Data.</h3>
                <div style={{ alignItems: "230px", position: "relative"}}>
                    <Link to={{pathname:"/SplitData"}} style={{textDecoration:"none"}}>
                        <Button variant="contained"color="primary"className={classes.button}>
                            Split Data&nbsp;&nbsp; <i class="fa fa-mail-forward"></i>
                        </Button>
                    </Link>
                </div> 
            </div>
            </Container>
            <hr style={{borderWidth: "5px"}}/>
            <Footer/>
        </div>
    )
}

export default FeatureSelection
