import React, { useEffect, useContext } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Classification from "./component/Classification/Classification"
import Regression from "./component/Regression/Regression"
import ChoiceMethod from "./component/ChoiceMethod/ChoiceMethod";
import CusNavbar from "./component/Navbar/CusNavbar";
import Iris from './component/PreDefine_Dataset/Iris';
import Wine from './component/PreDefine_Dataset/Wine';
import FeatureSelection from './component/PreDefine_Dataset/FeatureSelection';
import { DataProvider, DataContext } from './component/Charts/files/DataProvider';
import SplitData from './component/PreDefine_Dataset/SplitData';
import Model from './component/PreDefine_Dataset/Model';
import Prediction from './component/PreDefine_Dataset/Prediction';

function App(){ 
  return (
        <>
        <DataProvider>
          <CusNavbar/>
          <Router>
            <Route path="/" exact component={ChoiceMethod}/>
            <Route path="/Classification" component={Classification}/>
            <Route path="/Regression" component={Regression}/>
            <Route path="/Iris" component={Iris}/>
            <Route path="/Wine" component={Wine}/>
            <Route path="/FeatureSelection" component={FeatureSelection}/>
            <Route path="/SplitData" component={SplitData}/>
            <Route path="/Model" component={Model}/>
            <Route path="/Prediction" component={Prediction}/>
          </Router>
        </DataProvider>
        </>
      )
  }

export default App
