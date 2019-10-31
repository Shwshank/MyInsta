import React from "react";
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Router } from 'react-router';
import history from '../../history';
import Page1 from "./page1";
import Fav from "./fav";
import Profile from "./profile";

class Dashboard extends React.Component {

  render() {
    return(
      
      <div>
        <Switch>
          <Route exact path="/dashboard/" component={Page1} />
          <Route path="/dashboard/page1" component={Page1} />
          <Route path="/dashboard/fav" component={Fav} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path='/404' component={Page1} />
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    )
  }
}

export default Dashboard
