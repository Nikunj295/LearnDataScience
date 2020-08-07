import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Classification from "./component/Classification/Classification"
import ClassificationOption from "./component/Select/ClassificationOption";
import RegressionOption from "./component/Select/RegressionOption";
import Regression from "./component/Regression/Regression"
import ChoiceMethod from "./component/ChoiceMethod/ChoiceMethod";
import CusNavbar from "./component/Navbar/CusNavbar";
import Reg from './component/PreDefine_Dataset/Reg'
import Clas from './component/PreDefine_Dataset/Clas'
import Test from './component/PreDefine_Dataset/Test'
import CCreate from './component/PreDefine_Dataset/CCreate'
import Check from './component/PreDefine_Dataset/Check'
import FeatureSelection from './component/PreDefine_Dataset/FeatureSelection';
import SplitData from './component/PreDefine_Dataset/SplitData';
import Model from './component/PreDefine_Dataset/Model';
import Prediction from './component/PreDefine_Dataset/Prediction';
import { AxisProvider } from "../src/component/Charts/files/Axis";

function App(){ 
  return (
        <>
        <AxisProvider>
          <Router>
            <CusNavbar/>
            <Route path="/" exact component={ChoiceMethod}/>
            <Route path="/Classification" component={Classification}/>
            <Route path="/CCreate" component={CCreate}/>
            <Route path="/RegressionOption" component={RegressionOption}/>
            <Route path="/Regression" component={Regression}/>
            <Route path="/Reg" component={Reg}/>
            <Route path="/Clas" component={Clas}/>
            <Route path="/Test" component={Test}/>
            <Route path="/Check" component={Check}/>
            <Route path="/FeatureSelection" component={FeatureSelection}/>
            <Route path="/SplitData" component={SplitData}/>
            <Route path="/Model" component={Model}/>
            <Route path="/Prediction" component={Prediction}/>
          </Router>
          </AxisProvider>
        </>
      )
  }

export default App
