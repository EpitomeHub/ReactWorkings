
import React  from 'react'
import './LoginSuccess.css'
const LoginSuccess = ({ userData, onLogout }) => {
    return (
      <div className="login-success">
        <h4>Welcome, {userData.username}!</h4>
        <button className="btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    );
  };
  
  export default LoginSuccess;