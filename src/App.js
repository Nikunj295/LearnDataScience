import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Classification from "./component/Classification/Classification"
import Regression from "./component/Regression/Regression"
import ChoiceMethod from "./component/ChoiceMethod/ChoiceMethod";
import CusNavbar from "./component/Navbar/CusNavbar";
export class App extends Component{  
  render() {
  return (
        <>
          <CusNavbar/>
          <Router>
            <Route path="/" exact component={ChoiceMethod}/>
            <Route path="/Classification" component={Classification}/>
            <Route path="/Regression" component={Regression}/>
          </Router>
        </>
      )
  }
}

export default App
