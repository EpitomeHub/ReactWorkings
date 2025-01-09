import React , { Component } from 'react'
import './Login.css'


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        error: '',
      };
    }
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value, error: '' }); // Clear errors when input changes
    };
  
    validateInputs = () => {
      const { username, password } = this.state;
  
      if (!username) {
        this.setState({ error: 'Username is required.' });
        return false;
      }
  
      if (!password) {
        this.setState({ error: 'Password is required.' });
        return false;
      }
  
      if (password.length < 6) {
        this.setState({ error: 'Password must be at least 6 characters long.' });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      if (this.validateInputs()) {
        const { username, password } = this.state;
        this.props.onLogin(username, password); // Trigger login handler from props
      }
    };
  
    render() {
      const { onForgotPassword, onSignUp } = this.props;
      const { username, password, error } = this.state;
  
      return (
        <div className="login">
          <h4>Login</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="text_area">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="text_input"
                value={username}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="text_area">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="text_input"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="link-container">
            <button type="submit" className="btn">LOGIN</button>
            <button type="button" className="link" onClick={onForgotPassword}>
              Forgot Password
            </button>
            </div>
            <div className="link-containerone">
             <button type="button" className="link" onClick={onSignUp}>
             Don't have an account?  Register
            </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  
  export default Login;