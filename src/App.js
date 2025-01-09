//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import ForgotPassword from './Components/ForgotPassword/Forgotpassword';
import SignUp from './Components/SignUp/SignUp';
import LoginSuccess from './Components/LoginSuccess/LoginSuccess'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'login', 
      userData: {}, 
    };
  }

  changeView = (view) => {
    this.setState({ currentView: view });
  };

  handleLogin = (username, password) => {
    console.log(`Logging in with username: ${username}, password: ${password}`);
    
    this.setState({ currentView: 'loginSuccess', userData: { username } });
  };

  handleSignUp = (username, email, password) => {
    console.log(`Signing up with username: ${username}, email: ${email}, password: ${password}`);
    alert('Registration successful! Please log in.');
    this.changeView('login');
  };

  handleForgotPassword = (email) => {
    console.log(`Resetting password for email: ${email}`);
    alert('Password reset link has been sent to your email.');
    this.changeView('login');
  };

  render() {
    const { currentView, userData } = this.state;

    return (
      <div className="app">
        {currentView === 'login' && (
          <Login
            onLogin={this.handleLogin}
            onForgotPassword={() => this.changeView('forgotPassword')}
            onSignUp={() => this.changeView('signup')}
          />
        )}
        {currentView === 'signup' && (
          <SignUp
            onSignUp={this.handleSignUp}
            onBackToLogin={() => this.changeView('login')}
          />
        )}
        {currentView === 'forgotPassword' && (
          <ForgotPassword
            onForgotPassword={this.handleForgotPassword}
            onBackToLogin={() => this.changeView('login')}
          />
        )}
        {currentView === 'loginSuccess' && (
          <LoginSuccess
            userData={userData}
            onLogout={() => this.changeView('login')}
          />
        )}
      </div>
    );
  }
}

export default App;
