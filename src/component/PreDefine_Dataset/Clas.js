import React, { useEffect, useState } from 'react'
import axios from "axios"
import CustomPaginationActionsTable from "../Tables/Table";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button';
import iris from "../Other/Classification/iris_dataset.png";
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';

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
        marginTop:"50px",
        marginBottom:"50px",
        textAlign:'justify',
        lineHeight:'1.8'
    },
}))

const content = {
    "iris":{
        name:'Iris Dataset',
        heading:"The data set consists of 50 samples from each of three species of Iris (Iris setosa, Iris virginica and Iris versicolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters. Based on the combination of these four features, Fisher developed a linear discriminant model to distinguish the species from each other.",
        classes:"There are three classes: 0-setosa, 1-versicolor, and 2-virginica",
        body1:"The use of this data set in cluster analysis however is not common, since the data set only contains two clusters with rather obvious separation. One of the clusters contains Iris setosa, while the other cluster contains both Iris virginica and Iris versicolor and is not separable without the species information Fisher used. This makes the data set a good example to explain the difference between supervised and unsupervised techniques in data mining: Fisher's linear discriminant model can only be obtained when the object species are known: class labels and clusters are not necessarily the same.",
        body2:"Nevertheless, all three species of Iris are separable in the projection on the nonlinear and branching principal component. The data set is approximated by the closest tree with some penalty for the excessive number of nodes, bending and stretching. Then the so-called `metro map` is constructed. The data points are projected into the closest node. For each node the pie diagram of the projected points is prepared. The area of the pie is proportional to the number of the projected points. It is clear from the diagram (left) that the absolute majority of the samples of the different Iris species belong to the different nodes. Only a small fraction of Iris-virginica is mixed with Iris-versicolor (the mixed blue-green nodes in the diagram). Therefore, the three species of Iris (Iris setosa, Iris virginica and Iris versicolor) are separable by the unsupervising procedures of nonlinear principal component analysis. To discriminate them, it is sufficient just to select the corresponding nodes on the principal tree.",
        img:iris,
        attri:`1. sepal length in cm
2. sepal width in cm 
3. petal length in cm
4. petal width in cm
5. class:
-- Iris Setosa
-- Iris Versicolour
-- Iris Virginica
        `
    },
    "wine":{
        name:"Wine Dataset",
        heading:"These data are the results of a chemical analysis of wines grown in the same region in Italy but derived from three different cultivars. The analysis determined the quantities of 13 constituents found in each of the three types of wines.",
        classes:"There are three classes to predict: 0, 1, and 2",
        body1:"",
        body2:"",
        img:"",
        attri:`1) Alcohol
2) Malic acid
3) Ash
4) Alcalinity of ash
5) Magnesium
6) Total phenols
7) Flavanoids
8) Nonflavanoid phenols
9) Proanthocyanins
10)Color intensity
11)Hue
12)OD280/OD315 of diluted wines
13)Proline
`   
    },
    "breast":{
        name:"Breast Cancer Dataset",
        heading:"Breast cancer (BC) is one of the most common cancers among women worldwide, representing the majority of new cancer cases and cancer-related deaths according to global statistics, making it a significant public health problem in today’s society.",
        classes:"There are two classes: 0-False/No, 1-True/Yes",
        body1:"The early diagnosis of BC can improve the prognosis and chance of survival significantly, as it can promote timely clinical treatment to patients. Further accurate classification of benign tumors can prevent patients undergoing unnecessary treatments. Thus, the correct diagnosis of BC and classification of patients into malignant or benign groups is the subject of much research. Because of its unique advantages in critical features detection from complex BC datasets, machine learning (ML) is widely recognized as the methodology of choice in BC pattern classification and forecast modelling.",
        body2:"The dataset used in this story is publicly available and was created by Dr. William H. Wolberg, physician at the University Of Wisconsin Hospital at Madison, Wisconsin, USA. To create the dataset Dr. Wolberg used fluid samples, taken from patients with solid breast masses and an easy-to-use graphical computer program called Xcyt, which is capable of perform the analysis of cytological features based on a digital scan. The program uses a curve-fitting algorithm, to compute ten features from each one of the cells in the sample, than it calculates the mean value, extreme value and standard error of each feature for the image, returning a 30 real-valuated vector",
        img:"",
        attri:`1)radius (mean of distances from center to points on the perimeter)
2)texture (standard deviation of gray-scale values)
3)perimeter
4)area
5)smoothness (local variation in radius lengths)
6)compactness (perimeter² / area — 1.0)
7)concavity (severity of concave portions of the contour)
8)concave points (number of concave portions of the contour)
9)symmetry
10)fractal dimension (“coastline approximation” — 1)`,
    },

    "diabete":{
        name:"Diabetes Dataset",
        heading:"This dataset is originally from the National Institute of Diabetes and Digestive and Kidney Diseases. The objective of the dataset is to diagnostically predict whether or not a patient has diabetes, based on certain diagnostic measurements included in the dataset. Several constraints were placed on the selection of these instances from a larger database. In particular, all patients here are females at least 21 years old of Pima Indian heritage.",
        classes:"There are two classes: 0-False/No, 1-True/Yes",
        body2:"The datasets consists of several medical predictor variables and one target variable, Outcome. Predictor variables includes the number of pregnancies the patient has had, their BMI, insulin level, age, and so on.",
        body1:"Diabetes is a chronic condition in which the body develops a resistance to insulin, a hormone which converts food into glucose. Diabetes affect many people worldwide and is normally divided into Type 1 and Type 2 diabetes. Both have different characteristics. This article intends to analyze and create a model on the PIMA Indian Diabetes dataset to predict if a particular observation is at a risk of developing diabetes, given the independent factors. This article contains the methods followed to create a suitable model, including EDA along with the model.",
        img:"",
        attri:`1)Pregnancies
2)Glucose
3)BloodPressure
4)SkinThickness
5)Insulin
6)BMI
7)DiabetesPedigreeFunction
8)Age`,
    },
}

function Clas(props){
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
        sessionStorage.setItem('raw','false')
        axios.post(`https://l-data-science.herokuapp.com/fetchData/${dataset}`)
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
        <h1 style={{marginTop:"30px"}}>Step 2: Explore the Data</h1>
        <h2 style={{marginTop:"30px"}}>{content[dataset].name}</h2>
        <h5 className={classes.body}>{content[dataset].heading}</h5>
        <div>
            <h3>Attribute Information</h3>
            <h5><pre>{content[dataset].attri}</pre></h5>
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
                        Feature Selection&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
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
            <h5 className={classes.body}>{content[dataset].body1}</h5>
            <h5 className={classes.body}>{content[dataset].body2}</h5>
            
            <div style={{marginBottom:"70px"}}>
                <h4>Below Table given is quick statistics of each columns:</h4>                
                {show? <CustomPaginationActionsTable values={infoData} type="info"/> : <LinearProgress className={classes.prog} color="secondary"/>}            
            </div>
            
            <div>
                <h4>Now, next step is Feature Selection. "What is Feature Selection?" you ask</h4>
                <div style={{ alignItems: "230px", position: "relative"}}>
                    <Link to={{pathname:"/FeatureSelection",data:{data:data}}} style={{textDecoration:"none"}}>
                        <Button variant="contained"color="primary"className={classes.button}>
                            Feature Selection&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
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

export default Clas
