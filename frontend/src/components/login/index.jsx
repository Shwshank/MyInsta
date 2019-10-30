import React from "react";
import history from '../../history';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  loginButton = () =>{
    console.log(this.state.email);
    console.log(this.state.password);
    if(this.state.email==="test" && this.state.password==="test") {
      history.push('/dashboard')
    }
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

export default Login
