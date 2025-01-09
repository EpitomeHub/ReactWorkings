import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: '' }); // Clear error messages on input change
  };

  validateInputs = () => {
    const { fullName, email, password, confirmPassword } = this.state;

    // Check if full name is provided
    if (!fullName.trim()) {
      this.setState({ error: 'Full name is required.' });
      return false;
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      this.setState({ error: 'Email is required.' });
      return false;
    }
    if (!emailRegex.test(email)) {
      this.setState({ error: 'Please enter a valid email address.' });
      return false;
    }

    // Check password length
    if (password.length < 6) {
      this.setState({ error: 'Password must be at least 6 characters long.' });
      return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match.' });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateInputs()) {
      const { fullName, email, password } = this.state;
      this.props.onRegister(fullName, email, password);
    }
  };

  render() {
    const { onBackToLogin } = this.props;
    const { fullName, email, password, confirmPassword, error } = this.state;

    return (
      <div className="register">
        <h4>Register</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="text_input"
              value={fullName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="text_area">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text_input"
              value={email}
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
          <div className="text_area">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="text_input"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn">REGISTER</button>
          <button type="button" className="link" onClick={onBackToLogin}>
            Back to Login
          </button>
        </form>
      </div>
    );
  }
}


export default Register;