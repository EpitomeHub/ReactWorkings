import React, { Component } from 'react';
import './Forgotpassword.css'
//import './ForgotPassword.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ email: event.target.value, error: '' }); // Clear error on input change
  };

  validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;
    if (!email) {
      this.setState({ error: 'Email is required.' });
      return;
    }

    if (!this.validateEmail(email)) {
      this.setState({ error: 'Please enter a valid email address.' });
      return;
    }

    this.props.onForgotPassword(email);
  };

  render() {
    const { onBackToLogin } = this.props;
    const { email, error } = this.state;

    return (
      <div className="forgot-password">
        <h4>Forgot Password</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="text_area">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="text_input"
              value={email}
              onChange={this.handleInputChange}
            />
            {error && <p className="error">{error}</p>}
          </div>
          <div className="link-container">
          <button type="submit" className="btn">RESET PASSWORD</button>
          <button type="button" className="link" onClick={onBackToLogin}>
            Back to Login
          </button>
          </div>
        </form>
      </div>
    );
  }
}
  export default ForgotPassword;