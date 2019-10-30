import React from "react";
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Router } from 'react-router';
import history from '../../history';
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

class Dashboard extends React.Component {

  render() {
    return(
      <div>

        <div className="main-container">
          <div  className="right-content">
            <Switch>
              <Route exact path="/dashboard/" component={Page1} />
              <Route path="/dashboard/page1" component={Page1} />
              <Route path="/dashboard/page2" component={Page2} />
              <Route path="/dashboard/page3" component={Page3} />
              <Route path="/dashboard/dashboard" component={Dashboard} />
              <Route path='/404' component={Page1} />
              <Redirect from='*' to='/404' />
            </Switch>
          </div>
        </div>

      </div>
    )
  }
}

export default Dashboard
