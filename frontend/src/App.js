import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Router } from 'react-router';

import history from './history';
import './style/style.scss';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Landing from './components/landing_page';
import Header from './components/common/header';

class App extends React.Component {

  onLanding = () =>{
    history.push('/')
  }

  onLogin = () =>{
    history.push('/login')
  }

  onDashboard = () =>{
    history.push('/dashboard')
  }

  render() {
    return (
      <div className="main-container ">

        <Header/>
        
        <Router history={history}>
          {/*
          <header className="App-header">
            <p>
            App header
            </p>
            <ul>
              <li>
                <Link to="/">Landing</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </header>
          */}


          {/*
            <button onClick={this.onLanding}>Landing</button>
            <button onClick={this.onLogin}>Login</button>
            <button onClick={this.onDashboard}>Dashboard</button>
          */}

          <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path='/404' component={Landing} />
          <Redirect from='*' to='/404' />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
