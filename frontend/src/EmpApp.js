import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateOrUpdateEmployee from "./componenents/CreateOrUpdateEmployee";
import Footer from "./componenents/Footer";
import Header from "./componenents/Header"
import ListEmployee from "./componenents/ListEmployee";
import ViewEmployee from "./componenents/ViewEmployee";

const EmpApp = ()=>{

    return(
        <div>
        <Router>
              <Header />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployee}></Route>
                          <Route path = "/employees" component = {ListEmployee}></Route>
                          <Route path = "/add-employee/:id" component = {CreateOrUpdateEmployee}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployee}></Route>
                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>

        
    )
}

export default EmpApp