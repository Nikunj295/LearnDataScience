import React, { useEffect,useState } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import knear from "../Other/Classification/knearcontent.png";
import knear1 from "../Other/Classification/knearcontent1.PNG";
import log from "../Other/Classification/logcontent.PNG";
import log1 from "../Other/Classification/logcontent1.PNG";
import svm from "../Other/Classification/svmcontent.PNG";
import naive from "../Other/Classification/naivecontent.jpeg";
import dtree from "../Other/Classification/dtreecontent.PNG";
import rtree from "../Other/Classification/rtreecontent.PNG";
import linear from "../Other/Regression/linearregression.png"

const cla = {
    "logisticRegression":{
        name:"Logistic Regression",
        heading:"Logistic regression is one of the most popular Machine Learning algorithms, which comes under the Supervised Learning technique. It is used for predicting the categorical dependent variable using a given set of independent variables.  ",
        body1:`Logistic regression predicts the output of a categorical dependent variable. Therefore the outcome must be a categorical or discrete value. It can be either Yes or No, 0 or 1, true or False, etc. but instead of giving the exact value as 0 and 1, it gives the probabilistic values which lie between 0 and 1.
        Logistic Regression is much similar to the Linear Regression except that how they are used. Linear Regression is used for solving Regression problems, whereas Logistic regression is used for solving the classification problems.
        In Logistic regression, instead of fitting a regression line, we fit an "S" shaped logistic function, which predicts two maximum values (0 or 1).`,
        body2:`The curve from the logistic function indicates the likelihood of something such as whether the cells are cancerous or not, a mouse is obese or not based on its weight, etc.
        Logistic Regression is a significant machine learning algorithm because it has the ability to provide probabilities and classify new data using continuous and discrete datasets.
        Logistic Regression can be used to classify the observations using different types of data and can easily determine the most effective variables used for the classification. The below image is showing the logistic function:`,
        body3:``,
        body4:"",
        adv:["Logistic Regression is one of the simplest machine learning algorithms and is easy to implement yet provides great training efficiency in some cases. Also due to these reasons, training a model with this algorithm doesn't require high computation power.",
        "The predicted parameters (trained weights) give inference about the importance of each feature. The direction of association i.e. positive or negative is also given. So we can use logistic regression to find out the relationship between the features.",
        "Logistic Regression outputs well-calibrated probabilities along with classification results. This is an advantage over models that only give the final classification as results. If a training example has a 95% probability for a class, and another has a 55% probability for the same class, we get an inference about which training examples are more accurate for the formulated problem.",
        "In a low dimensional dataset having a sufficient number of training examples, logistic regression is less prone to over-fitting.",
        "Logistic Regression proves to be very efficient when the dataset has features that are linearly separable.",
        "Due to its simple probabilistic interpretation, the training time of logistic regression algorithm comes out to be far less than most complex algorithms, such as an Artificial Neural Network.",
        ],
        dis:["Logistic Regression is a statistical analysis model that attempts to predict precise probabilistic outcomes based on independent features. On high dimensional datasets, this may lead to the model being over-fit on the training set, which means overstating the accuracy of predictions on the training set and thus the model may not be able to predict accurate results on the test set. This usually happens in the case when the model is trained on little training data with lots of features. So on high dimensional datasets, Regularization techniques should be considered to avoid over-fitting (but this makes the model complex). Very high regularization factors may even lead to the model being under-fit on the training data.",
        "It is difficult to capture complex relationships using logistic regression. More powerful and complex algorithms such as Neural Networks can easily outperform this algorithm.",
        "In Linear Regression independent and dependent variables should be related linearly. But Logistic Regression requires that independent variables are linearly related to the log odds (log(p/(1-p)).",
        "Only important and relevant features should be used to build a model otherwise the probabilistic predictions made by the model may be incorrect and the model's predictive value may degrade.",   
        "Logistic Regression requires a large dataset and also sufficient training examples for all the categories it needs to identify."],
        img:log,
        img1:log1,
    },
    "knear":{
        name:"K Nearest Neighbor Algorithm",
        heading:"K-Nearest Neighbors is one of the most basic yet essential classification algorithms in Machine Learning. It belongs to the supervised learning domain and finds intense application in pattern recognition, data mining and intrusion detection.",
        body1:"It is widely disposable in real-life scenarios since it is non-parametric, meaning, it does not make any underlying assumptions about the distribution of data (as opposed to other algorithms such as GMM, which assume a Gaussian distribution of the given data).",
        body2:`K-NN algorithm assumes the similarity between the new case/data and available cases and put the new case into the category that is most similar to the available categories.
        K-NN algorithm stores all the available data and classifies a new data point based on the similarity. This means when new data appears then it can be easily classified into a well suite category by using K- NN algorithm.
        K-NN algorithm can be used for Regression as well as for Classification but mostly it is used for the Classification problems.
        K-NN is a non-parametric algorithm, which means it does not make any assumption on underlying data.
        It is also called a lazy learner algorithm because it does not learn from the training set immediately instead it stores the dataset and at the time of classification, it performs an action on the dataset.
        KNN algorithm at the training phase just stores the dataset and when it gets new data, then it classifies that data into a category that is much similar to the new data.`,
        body3:`How does K-NN work?
The K-NN working can be explained on the basis of the below algorithm:

Step-1: Select the number K of the neighbors
Step-2: Calculate the Euclidean distance of K number of neighbors
Step-3: Take the K nearest neighbors as per the calculated Euclidean distance.
Step-4: Among these k neighbors, count the number of the data points in each category.
Step-5: Assign the new data points to that category for which the number of the neighbor is maximum.
Step-6: Our model is ready.`,
        body4:"",
        adv:["It is simple to implement.","It is robust to the noisy training data.","It can be more effective if the training data is large."],
        dis:["Always needs to determine the value of K which may be complex some time.","The computation cost is high because of calculating the distance between the data points for all the training samples."],
        img:knear,
        img1:knear1,
    },
    "svm":{
        name:"Support Vector Machine",
        heading:"Support Vector Machine or SVM is one of the most popular Supervised Learning algorithms, which is used for Classification as well as Regression problems. However, primarily, it is used for Classification problems in Machine Learning.        ",
        body1:"The goal of the SVM algorithm is to create the best line or decision boundary that can segregate n-dimensional space into classes so that we can easily put the new data point in the correct category in the future. This best decision boundary is called a hyperplane.        ",
        body2:"SVM chooses the extreme points/vectors that help in creating the hyperplane. These extreme cases are called as support vectors, and hence algorithm is termed as Support Vector Machine. Consider the given diagram in which there are two different categories that are classified using a decision boundary or hyperplane:",
        body4:"SVM can be of two types:Linear SVM: Linear SVM is used for linearly separable data, which means if a dataset can be classified into two classes by using a single straight line, then such data is termed as linearly separable data, and classifier is used called as Linear SVM classifier.Non-linear SVM: Non-Linear SVM is used for non-linearly separated data, which means if a dataset cannot be classified by using a straight line, then such data is termed as non-linear data and classifier used is called as Non-linear SVM classifier.",
        body3:"",
        img:svm,
        adv:["SVM’s are very good when we have no idea on the data.",
        "Works well with even unstructured and semi structured data like text, Images and trees.",
        "The kernel trick is real strength of SVM. With an appropriate kernel function, we can solve any complex problem.",
        "Unlike in neural networks, SVM is not solved for local optima.","It scales relatively well to high dimensional data",
        "SVM models have generalization in practice, the risk of over-fitting is less in SVM.",
        "SVM is always compared with ANN. When compared to ANN models, SVMs give better results."],
        dis:["Choosing an appropriate Kernel function (to handle the non-linear data) is not an easy task. It could be tricky and complex. In case of using a high dimension Kernel, you might generate too many support vectors which reduce the training speed drastically. ",
        "Algorithmic complexity and memory requirements of SVM are very high. You need a lot of memory since you have to store all the support vectors in the memory and this number grows abruptly with the training dataset size.",
        "One must do feature scaling of variables before applying SVM.",
        "SVM takes a long training time on large datasets.",
        "SVM model is difficult to understand and interpret by human beings unlike Decision Trees."],
        img1:"",
    },
    "dtree":{
        name:"Decision Tree",
        heading:"Decision Tree is a Supervised learning technique that can be used for both classification and Regression problems, but mostly it is preferred for solving Classification problems. It is a tree-structured classifier, where internal nodes represent the features of a dataset, branches represent the decision rules and each leaf node represents the outcome.",
        body1:`The decisions or the test are performed on the basis of features of the given dataset.
        It is a graphical representation for getting all the possible solutions to a problem/decision based on given conditions.
        It is called a decision tree because, similar to a tree, it starts with the root node, which expands on further branches and constructs a tree-like structure.
        In order to build a tree, we use the CART algorithm, which stands for Classification and Regression Tree algorithm.
        A decision tree simply asks a question, and based on the answer (Yes/No), it further split the tree into subtrees`,
        body2:"",
        body3:`The complete process can be better understood using the below algorithm:

Step-1: Begin the tree with the root node, says S, which contains the complete dataset.
Step-2: Find the best attribute in the dataset using Attribute Selection Measure (ASM).
Step-3: Divide the S into subsets that contains possible values for the best attributes.
Step-4: Generate the decision tree node, which contains the best attribute.
Step-5: Recursively make new decision trees using the subsets of the dataset created in step -3. 
        Continue this process until a stage is reached where you cannot further classify 
        the nodes and called the final node as a leaf node.
`,
        body4:`While implementing a Decision tree, the main issue arises that how to select the best attribute for the root node and for sub-nodes. So, to solve such problems there is a technique which is called as Attribute selection measure or ASM. By this measurement, we can easily select the best attribute for the nodes of the tree. There are two popular techniques for ASM, which are:
        1) Information Gain and
        2) Gini Index`,
        adv:["It is simple to understand as it follows the same process which a human follow while making any decision in real-life.",
        "It can be very useful for solving decision-related problems.",
        "It helps to think about all the possible outcomes for a problem.",
        "There is less requirement of data cleaning compared to other algorithms."],
        dis:["The decision tree contains lots of layers, which makes it complex.",
        "It may have an overfitting issue, which can be resolved using the Random Forest algorithm.",
        "For more class labels, the computational complexity of the decision tree may increase."],
        img:dtree,
        img1:"",
    },
    "rtree":{
        name:"Random Forest Tree",
        heading:`Random Forest is a popular machine learning algorithm that belongs to the supervised learning technique. It can be used for both Classification and Regression problems in ML. It is based on the concept of ensemble learning, which is a process of combining multiple classifiers to solve a complex problem and to improve the performance of the model.        `,
        body1:`As the name suggests, "Random Forest is a classifier that contains a number of decision trees on various subsets of the given dataset and takes the average to improve the predictive accuracy of that dataset." Instead of relying on one decision tree, the random forest takes the prediction from each tree and based on the majority votes of predictions, and it predicts the final output.
        The greater number of trees in the forest leads to higher accuracy and prevents the problem of overfitting.`,
        body2:`Since the random forest combines multiple trees to predict the class of the dataset, it is possible that some decision trees may predict the correct output, while others may not. But together, all the trees predict the correct output. Therefore, below are two assumptions for a better Random forest classifier:
        There should be some actual values in the feature variable of the dataset so that the classifier can predict accurate results rather than a guessed result.
        The predictions from each tree must have very low correlations.`,
        body3:`The Working process can be explained in the below steps and diagram:

Step-1: Select random K data points from the training set.
Step-2: Build the decision trees associated with the selected data points (Subsets).
Step-3: Choose the number N for decision trees that you want to build.
Step-4: Repeat Step 1 & 2.
Step-5: For new data points, find the predictions of each decision tree, and assign the new data points 
        to the category that wins the majority votes.`,
        body4:"",
        img:rtree,
        adv:["Random Forest is capable of performing both Classification and Regression tasks.","It is capable of handling large datasets with high dimensionality.",
        "It enhances the accuracy of the model and prevents the overfitting issue."],
        dis:["Although random forest can be used for both classification and regression tasks, it is not more suitable for Regression tasks."],
        img1:"",
    },
    "naive":{
        name:"Naive Bayes Algorithm",
        body1:"Naïve Bayes algorithm is a supervised learning algorithm, which is based on Bayes theorem and used for solving classification problems.It is mainly used in text classification that includes a high-dimensional training dataset.Naïve Bayes Classifier is one of the simple and most effective Classification algorithms which helps in building the fast machine learning models that can make quick predictions.",
        heading:"Bayes' theorem is also known as Bayes' Rule or Bayes' law, which is used to determine the probability of a hypothesis with prior knowledge. It depends on the conditional probability.",
        body2:"",
        body3:`Steps:
        -Convert the given dataset into frequency tables.
        -Generate Likelihood table by finding the probabilities of given features.
        -Now, use Bayes theorem to calculate the posterior probability.`,
        body4:`There are three types of Naive Bayes Model:
        1) Gaussian: The Gaussian model assumes that features follow a normal distribution. This means if predictors take continuous values instead of discrete, then the model assumes that these values are sampled from the Gaussian distribution.
        2) Multinomial: The Multinomial Naïve Bayes classifier is used when the data is multinomial distributed. It is primarily used for document classification problems, it means a particular document belongs to which category such as Sports, Politics, education, etc.
        3) The classifier uses the frequency of words for the predictors.
        Bernoulli: The Bernoulli classifier works similar to the Multinomial classifier, but the predictor variables are the independent Booleans variables. Such as if a particular word is present or not in a document. This model is also famous for document classification tasks.`,
        adv:["Naïve Bayes is one of the fast and easy ML algorithms to predict a class of datasets.","It can be used for Binary as well as Multi-class Classifications.",
        "It performs well in Multi-class predictions as compared to the other Algorithms.","It is the most popular choice for text classification problems."],
        dis:["Naive Bayes assumes that all features are independent or unrelated, so it cannot learn the relationship between features."],
        img:naive,
        img1:"",
    },
    "linearRegression":{
        name:"Linear Regression Algorithm",
        body1:`The linear equation assigns one scale factor to each input value or column, called a coefficient and represented by the capital Greek letter Beta (B). One additional coefficient is also added, giving the line an additional degree of freedom (e.g. moving up and down on a two-dimensional plot) and is often called the intercept or the bias coefficient.`,
        heading:`Linear regression is an attractive model because the representation is so simple.
        The representation is a linear equation that combines a specific set of input values (x) the solution to which is the predicted output for that set of input values (y). As such, both the input values (x) and the output value are numeric.`,
        body2:`For example, in a simple regression problem (a single x and a single y), the form of the model would be:
        y = B0 + B1*x`,
        body3:``,
        body4:`In higher dimensions when we have more than one input (x), the line is called a plane or a hyper-plane. The representation therefore is the form of the equation and the specific values used for the coefficients (e.g. B0 and B1 in the above example).
        It is common to talk about the complexity of a regression model like linear regression. This refers to the number of coefficients used in the model.When a coefficient becomes zero, it effectively removes the influence of the input variable on the model and therefore from the prediction made from the model (0 * x = 0). This becomes  relevant if you look at regularization methods that change the learning algorithm to reduce the complexity of regression models by putting pressure on the absolute size of the coefficients, driving some to zero.`,
        adv:["Linear Regression performs well when the dataset is linearly separable. We can use it to find the nature of the relationship among the variables.",
        "Linear Regression is easier to implement, interpret and very efficient to train.",
        "Linear Regression is prone to over-fitting but it can be easily avoided using some dimensionality reduction techniques, regularization (L1 and L2) techniques and cross-validation."],
        dis:[" Main limitation of Linear Regression is the assumption of linearity between the dependent variable and the independent variables. In the real world, the data is rarely linearly separable. It assumes that there is a straight-line relationship between the dependent and independent variables which is incorrect many times.",
        " If the number of observations are lesser than the number of features, Linear Regression should not be used, otherwise it may lead to overfit because is starts considering noise in this scenario while building the model.",
        " Linear regression is very sensitive to outliers (anomalies). So, outliers should be analyzed and removed before applying Linear Regression to the dataset."],
        img:linear,
        img1:"",
    }
}


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
        margin:"70px",
        textAlign:'justify'
    },
    im:{
        display: "block",
        marginTop:"50px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    short:{
        textAlign:'justify',
        marginLeft:"auto",
        marginRight:"auto",
        lineHeight:'1.8',
        marginTop:'30px',
        marginBottom:'50px',
    }, 
}))

function Test(props) {    
    const classes = useStyles();
    let id = localStorage.getItem('myid')

    let algo = ""
    if(props.location.data){
        sessionStorage.setItem('algo', props.location.data.data)
        algo = props.location.data.data
    }
    else{
        algo = sessionStorage.getItem('algo')
    }

    useEffect(()=>{
        let payload = {
            id,
            algorithm: algo
        }
        Axios.post("https://l-data-science.herokuapp.com/model",null,{
            params:{
                payload
            }
        })
    },[])

    return (
        <div>  
            <Container maxWidth="lg">
                <div style={{marginTop:"30px"}}>
                    <h1>Step 6: Model Creation</h1>
                </div>
                <h2 style={{marginTop:"30px"}}>{cla[algo].name}</h2>
                <h4 className={classes.short}>
                    {cla[algo].heading}
                </h4>
                <div>
                   <div style={{ alignItems: "230px", position: "relative"}}>
                        <Link to={{pathname:"/Prediction"}} style={{textDecoration:"none"}}>
                            <Button variant="contained"color="primary"className={classes.button}>
                                Predict Test Data&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
                            </Button>
                        </Link>
                    </div> 
                </div>
                <div >
                    <img src={cla[algo].img} className={classes.im} height="40%" width="40%" alt="kear_img"/>
                </div>
                <div>
                    {cla[algo].body1?<h5 className={classes.short}>--{cla[algo].body1}</h5>:null}
                </div>
                <div>
                    {cla[algo].body2?<h5 className={classes.short}>--{cla[algo].body2}</h5>:null}
                </div>
                {cla[algo].img1?<div >
                    <img className={classes.im} src={cla[algo].img1} height="60%" width="60%" alt="kear_img"/>
                </div>:null}
                <div> 
                    {cla[algo].body3?<h5 className={classes.shrot}><pre>{cla[algo].body3}</pre></h5>:null}
                </div>
                <div> 
                    {cla[algo].body4?<h5 className={classes.short}>{cla[algo].body4}</h5>:null}
                </div>
                <div >
                    <h3>Advantages :</h3>
                    {
                        cla[algo].adv.map(i=><h5 className={classes.short} key={i}>-{">"}{i}</h5>)
                    }
                </div>
                <div >
                    <h3>Disadvantages :</h3>
                    {
                        cla[algo].dis.map(i=><h5 className={classes.short} key={i}>-{">"}{i}</h5>)
                    }
                </div>
                
                <div>
                    <h3>Now, next step is Test/Predict Data.</h3>
                    <div style={{ alignItems: "230px", position: "relative"}}>
                        <Link to={{pathname:"/Prediction"}} style={{textDecoration:"none"}}>
                            <Button variant="contained"color="primary"className={classes.button}>
                                Predict Test Data&nbsp;&nbsp; <i className="fa fa-mail-forward"></i>
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

export default Test
