import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomPaginationActionsTable from '../Tables/Table';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import imgg from "../Other/Classification/traintest.png"

const useStyles = makeStyles((theme) =>({
    button: {
        margin: theme.spacing(1),
    },
    prog:{
        width:window.innerWidth/2,
        marginTop:"200px",
        [theme.breakpoints.down(500)]: {
            width: 400,
        }
    },
    img:{
        display: "flex",
        alignItems:'center',
        flexDirection:'column',
        overflow: 'auto',
    },
    body:{
        margin:"70px",
        textAlign:'justify'
    },
    short:{
        textAlign:'justify',
        marginLeft:"auto",
        marginRight:"auto",
        lineHeight:'1.8',
        marginTop:"30px",
        marginBottom:'50px'
    },
}))

function SplitData() {
    const classes = useStyles();
    const [train,setTrain] = useState([])
    const [test,setTest] = useState([])
    const [show,setShow] = useState(false)

    useEffect(()=>{
        const id = localStorage.getItem('myid')
        let payload = {
            id
        }
        axios.post('https://l-data-science.herokuapp.com/splitData',null,{
            params:{
                payload
            }
        })
        .then(response=>response.data)
        .then(data => {
            const tb = data[0]
            const ds = data[1]
            var myData = Object.keys(tb).map(key => {
                return tb[key];
            })
            var myData1 = Object.keys(ds).map(key => {
                return ds[key];
            })
            setTrain(myData)
            setTest(myData1)
            setShow(true)
        })
    },[])

    return (
        <div><Container maxWidth="lg">
            <div style={{marginTop:"30px"}}>
                <h1>Step 4: Split the data</h1>
            </div>
            <div style={{marginTop:"50px"}}>
                <h3>Training Data</h3>
                <h5 className={classes.short}>
                    The observations in the training set form the experience that the algorithm uses to learn. In supervised learning problems, each observation consists of an observed output variable and one or more observed input variables.
                </h5>
            </div>
            
            <div style={{ alignItems: "230px", position: "relative"}}>
                <Link to={{pathname:"/Model"}} style={{textDecoration:"none"}}>
                    <Button variant="contained"color="primary"className={classes.button}>
                        Model Selection&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
                    </Button>
                </Link>
            </div> 

            <div style={{marginTop:"50px"}}>
            {
                show?<>
                <CustomPaginationActionsTable values={train}/>
                </>: <LinearProgress className={classes.prog} color="secondary"/>
            }
            </div>

            <h3 style={{marginTop:"40px"}}>Test Data</h3>
            <h5 className={classes.short}>
                The test set is a set of observations used to evaluate the performance of the model using some performance metric. It is important that no observations from the training set are included in the test set. If the test set does contain examples from the training set, it will be difficult to assess whether the algorithm has learned to generalize from the training set or has simply memorized it.
            </h5>
            
            {
                show?<>
                <CustomPaginationActionsTable values={test}/>
                </>: <LinearProgress className={classes.prog} color="secondary"/>
            }
            <h5 className={classes.short}>
                A program that generalizes well will be able to effectively perform a task with new data. In contrast, a program that memorizes the training data by learning an overly complex model could predict the values of the response variable for the training set accurately, but will fail to predict the value of the response variable for new examples. Memorizing the training set is called over-fitting. A program that memorizes its observations may not perform its task well, as it could memorize relations and structures that are noise or coincidence. Balancing memorization and generalization, or over-fitting and under-fitting, is a problem common to many machine learning algorithms. Regularization may be applied to many models to reduce over-fitting.
            </h5>
            <h5 className={classes.short}>
                In addition to the training and test data, a third set of observations, called a validation or hold-out set, is sometimes required. The validation set is used to tune variables called hyper parameters, which control how the model is learned. The program is still evaluated on the test set to provide an estimate of its performance in the real world; its performance on the validation set should not be used as an estimate of the model's real-world performance since the program has been tuned specifically to the validation data. It is common to partition a single set of supervised observations into training, validation, and test sets. There are no requirements for the sizes of the partitions, and they may vary according to the amount of data available. It is common to allocate 50 percent or more of the data to the training set, 25 percent to the test set, and the remainder to the validation set.
            </h5>
            <div className={classes.img}>
                <img src={imgg} alt="traintest.png"/>
            </div>
            
            <h5 className={classes.short}>
                Some training sets may contain only a few hundred observations; others may include millions. Inexpensive storage, increased network connectivity, the ubiquity of sensor-packed smartphones, and shifting attitudes towards privacy have contributed to the contemporary state of big data, or training sets with millions or billions of examples.
            </h5>
            <h5 className={classes.short}>However, machine learning algorithms also follow the maxim "garbage in, garbage out." A student who studies for a test by reading a large, confusing textbook that contains many errors will likely not score better than a student who reads a short but well-written textbook. Similarly, an algorithm trained on a large collection of noisy, irrelevant, or incorrectly labeled data will not perform better than an algorithm trained on a smaller set of data that is more representative of problems in the real world.
            </h5>
            <div>
                <h3>Now, next step is Model Selection or create a model.</h3>
                <div style={{ alignItems: "230px", position: "relative"}}>
                    <Link to={{pathname:"/Model"}} style={{textDecoration:"none"}}>
                        <Button variant="contained"color="primary"className={classes.button}>
                            Model Selection&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
                        </Button>
                    </Link>
                </div> 
            </div>
            <hr style={{borderWidth: "5px"}}/>
            </Container>
            <Footer/>
        </div>
    )
}

export default SplitData
