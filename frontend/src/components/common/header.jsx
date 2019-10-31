import React from "react";
import history from '../../history';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/action';

class Header extends React.Component {

  constructor(props) {
    super(props);
    if(this.props.user.success)
    history.push('/dashboard')
    else
    history.push('/')
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

  userFavButton=()=>{
    history.push('/dashboard/fav')
  }

  userProfile=()=>{
    history.push('/dashboard/profile')
  }

  profileButton=()=>{
    if(this.props.user.name) {
      return(
        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={this.userProfile}>{this.props.user.name}</button>
      )
    }
  }

  favButton=()=>{
    if(this.props.user.name) {
      return(
        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={this.userFavButton}> fav </button>
      )
    }
  }

  loginOrLogoutButton=()=>{

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
        <a className="navbar-brand" href="/">myInsta</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>

          <div className="form-inline my-2 my-lg-0">
            {this.profileButton()}
          </div>
          &nbsp;
          <div className="form-inline my-2 my-lg-0">
            {this.favButton()}
          </div>
          &nbsp;
          <div className="form-inline my-2 my-lg-0">
            {this.loginOrLogoutButton()}
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
