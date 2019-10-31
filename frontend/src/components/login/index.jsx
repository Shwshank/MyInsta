import React from "react";
import { connect } from 'react-redux';
import history from '../../history';
import { loginAction } from '../../redux/action';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  componentDidUpdate() {
    console.log(this.props.user);
    if(this.props.user.success)
    history.push('/dashboard')
  }

  loginButton = () =>{
    this.props.loginAction(this.state.email, this.state.password)
  }

  emailChanged = async event => {
    await this.setState({
      email: event.target.value
    });
  };

  passwordChanged = async event => {
    await this.setState({
      password: event.target.value
    });
  };

  inputForm() {
    return(
      <div>
        <input
          type = "text"
          value = {this.state.email}
          onChange = {this.emailChanged}
        /> <br/>
        <input
        type = "password"
          value = {this.state.password}
          onChange = {this.passwordChanged}
        /> <br/>
        <button onClick={this.loginButton} >
          Login
        </button>

      </div>
    )
  }

  render() {
    return(
      <div>
        Login works!
        {this.inputForm()}
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
  {loginAction}
)(Login);
