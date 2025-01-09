import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
      };
    }
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { username, email, password } = this.state;
      this.props.onSignUp(username, email, password);
    };
  
    render() {
      const { onBackToLogin } = this.props;
  
      return (
        <div className="signup">
          <h4>Sign Up</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="text_area">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="text_input"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="text_area">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="text_input"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="text_area">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="text_input"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="link-container">
            <button type="submit" className="btn">REGISTER</button>
            <button type="button" className="link" onClick={onBackToLogin}>
              Back to Login
            </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default SignUp;