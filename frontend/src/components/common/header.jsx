import React from "react";
import history from '../../history';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/action';

class Header extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    if(this.props.user.success)
    history.push('/dashboard')
    else
    history.push('/login')
  }

  componentDidUpdate() {
    if(this.props.user.success)
    history.push('/dashboard')
    else
    history.push('/login')
  }

  redirectLoginPage=()=>{
    history.push('/login')
  }

  handelLogout=()=>{
    this.props.logoutAction()
  }

  loginOrProfileButton() {

    if(this.props.user.success) {
      return(
        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={this.handelLogout}>Logout</button>
      )
    } else {
      return(
        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={this.redirectLoginPage}>Login</button>
      )
    }
  }


  render() {
    return(
      <div className="">

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <div className="form-inline my-2 my-lg-0">
            {this.loginOrProfileButton()}
          </div>
          
        </div>
      </nav>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer
   };
};

export default connect(
  mapStateToProps,
  {logoutAction}
)(Header);
