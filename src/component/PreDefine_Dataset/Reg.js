import React, { useEffect, useState } from 'react'
import axios from "axios"
import CustomPaginationActionsTable from "../Tables/Table";
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    button: {
        margin: theme.spacing(1),
    },
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
        flexDirection:'column',
        overflow: 'auto',
    },
    body:{
        marginTop:"70px",
        marginBottom:"70px",
        textAlign:'justify'
    }
}))

const content = {
    "boston":{
        name:"Boston DataSet",
        heading:"The Boston Housing Dataset. A Dataset derived from information collected by the U.S. Census Service concerning housing in the area of Boston Mass. This dataset contains information collected by the U.S Census Service concerning housing in the area of Boston Mass",
        classes:"The medv variable is the target variable.",
        body1:"",
        body2:"",
        img:"",
        attri:`crim-per capita crime rate by town.
zn-proportion of residential land zoned for lots over 25,000 sq.ft.
indus-proportion of non-retail business acres per town.
chas-Charles River dummy variable (= 1 if tract bounds river; 0 otherwise).
nox-nitrogen oxides concentration (parts per 10 million).
rm-average number of rooms per dwelling.
age-proportion of owner-occupied units built prior to 1940.
dis-weighted mean of distances to five Boston employment centres.
rad-index of accessibility to radial highways.
tax-full-value property-tax rate per $10,000.
ptratio-pupil-teacher ratio by town.
black-1000(Bk - 0.63)^2 where Bk is the proportion of blacks by town.
lstat-lower status of the population (percent).
medv-median value of owner-occupied homes in $1000s.`
    },
    "RedWine":{
        name:"Red Wine Quality",
        heading:`The inputs include objective tests (e.g. PH values) and the output is based on sensory data
        (median of at least 3 evaluations made by wine experts). Each expert graded the wine quality
        between 0 (very bad) and 10 (very excellent)`,
        classes:"Predict the quality of red wine using following dataset.",
        body1:"",
        body2:"",
        img:"",
        attri:`1 - fixed acidity (tartaric acid - g / dm^3)
2 - volatile acidity (acetic acid - g / dm^3)
3 - citric acid (g / dm^3)
4 - residual sugar (g / dm^3)
5 - chlorides (sodium chloride - g / dm^3
6 - free sulfur dioxide (mg / dm^3)
7 - total sulfur dioxide (mg / dm^3)
8 - density (g / cm^3)
9 - pH
10 - sulphates (potassium sulphate - g / dm3)
11 - alcohol (% by volume)
Output variable (based on sensory data):
12 - quality (score between 0 and 10)`
    },
    "car":{
        name:"Car Mpg Dataset",
        heading:`This dataset is a slightly modified version of the dataset provided in
        the StatLib library. In line with the use by Ross Quinlan (1993) in
        predicting the attribute "mpg", 8 of the original instances were removed
        because they had unknown values for the "mpg" attribute. The original
        dataset is available in the file "auto-mpg.data-original".
        
        "The data concerns city-cycle fuel consumption in miles per gallon,
        to be predicted in terms of 3 multivalued discrete and 5 continuous
        attributes." (Quinlan, 1993)`,
        classes:"Predict Mpg of the car",
        body1:"",
        body2:"",
        img:"",
        attri:`mpg: continuous
cylinders: multi-valued discrete
displacement: continuous
horsepower: continuous
weight: continuous
acceleration: continuous
model year: multi-valued discrete
origin: multi-valued discrete
car name: string (unique for each instance)`
    },
    "insurance":{
        name:"Medical Cost Prediction",
        heading:"",
        classes:"Predict the charges of teh datasets.",
        body1:"",
        body2:"",
        img:"",
        attri:`age: age of primary beneficiary
sex: insurance contractor gender, female, male
bmi: Body mass index, providing an understanding of body, weights that are relatively high or low relative to height,
objective index of body weight (kg / m ^ 2) using the ratio of height to weight, ideally 18.5 to 24.9
children: Number of children covered by health insurance / Number of dependents
smoker: Smoking
region: the beneficiary's residential area in the US, northeast, southeast, southwest, northwest.
charges: Individual medical costs billed by health insurance`
    },
}

function Reg(props){
    
    const classes = useStyles();
    const [infoData,setInfoData] = useState([])
    const [data,setData] = useState([])
    const [show,setShow] = useState(false)
    

    let dataset = ""
    if(props.location.data){
        sessionStorage.setItem('db', props.location.data.data)
        dataset = props.location.data.data
    }
    else{
        dataset = sessionStorage.getItem('db')
    }
    
    useEffect(()=>{
        sessionStorage.setItem('dataset',dataset)
        axios.post(`http://127.0.0.1:5000/fetchData/${dataset}`)
        .then(response=>response.data)
        .then(data => {
            console.log(data)
            const tb = data[0]
            const ds = data[1]
            var myData = Object.keys(tb).map(key => {
                return tb[key];
            })
            var myData1 = Object.keys(ds).map(key => {
                return ds[key];
            })
            setInfoData(myData1)
            setData(myData)

            let column = [] 
            let columns = []
            if(tb[0]){
                column = Object.keys(tb[0])
                for(let i=0;i<column.length-1;i++){
                    columns.push(column[i])
                }
            }
            setShow(true)
            sessionStorage.setItem("selected",columns)
        })
    },[dataset])

    return (
    <>
    <Container maxWidth="lg">
        <div style={{marginTop:"30px"}}>
            <h1>Step 2: Explore the Data</h1>
        <h2 style={{marginTop:"30px"}}>{content[dataset].name}</h2>
        </div>
        <div>
            {content[dataset].heading}
        </div>
        <div>
            <br/>
            <h3>Attribute Information</h3>
            <pre>{content[dataset].attri}</pre>
        </div>
        <div className={classes.img}>
            <img src={content[dataset].img} alt={content[dataset].img}/>
        </div>
        <div style={{marginBottom:"50px"}}>
            <div><h3>Target:</h3>
            <h5>{content[dataset].classes}</h5>
            </div>
            <div style={{ position: "relative"}}>
                <Link to={{pathname:"/FeatureSelection",data:{data:data}}} style={{textDecoration:"none"}}>
                    <Button variant="contained"color="primary"className={classes.button}>
                        Feature Selection&nbsp;&nbsp; <i class="fa fa-mail-forward"></i>
                    </Button>
                </Link>
            </div>
        </div>
        <div >
            <div>
                {show? <>
                    <CustomPaginationActionsTable values={data} /> 
                       </> 
                    :<><LinearProgress className={classes.prog} color="secondary"/></>
                } 
            </div>
            <div className={classes.body}>
                <h5 className={classes.body}>{content[dataset].body1}</h5>
                <h5 className={classes.body}>{content[dataset].body2}</h5>
            </div>
            <div style={{marginBottom:"70px"}}>
                <h3>Below Table given is quick statistics of each columns:</h3>                
                {show? <CustomPaginationActionsTable values={infoData} type="info"/> : <LinearProgress className={classes.prog} color="secondary"/>}            
            </div>
            <div>
                <h3>Now, next step is Feature Selection. "What is Feature Selection?" you ask</h3>
                <div style={{ alignItems: "230px", position: "relative"}}>
                    <Link to={{pathname:"/FeatureSelection",data:{data:data}}} style={{textDecoration:"none"}}>
                        <Button variant="contained"color="primary"className={classes.button}>
                            Feature Selection&nbsp;&nbsp; <i class="fa fa-mail-forward"></i>
                        </Button>
                    </Link>
                </div> 
            </div>
            <hr style={{borderWidth: "5px"}}/>
        </div>
    </Container>
    <Footer/>
    </>
    )
}

export default Reg
