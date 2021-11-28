import React, { Component,useState} from "react";
import GoogleOAuth from "../components/GoogleLogin";
import img from "../static/img/login-image.png";
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {login} from '../actions/auth';
//Components
import Header from '../components/Header'

//style
import "./login.css";
import connectionExample from "../components/GoogleLogin";

const theme = createTheme({
  palette: {
    neutral: {
      main: 'white',
      contrastText: 'black',
    },
  },
});



const Login = ({login,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const {email,password} = formData;

  const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    login(email,password);
  };

  if (isAuthenticated) {
    return <Redirect to='/fitness' />
  }

return (
  <div>
    <Header/>
    <div className="login-container">
      <div className="empty">
      </div>
      <div className="photo">
        <img src={img} alt=""/>
      </div>
      <div className="some-text">
        <span className="custom-text">
          CUSTOMIZED<br />
          TRAINING <br />
          JUST FOR YOU
        </span>
      </div>
      <div className="login-form">
        <span className="sourcesanspro-bold-white-40px" >
          WELCOME BACK
        </span>
        <p className="bottom-padding"/>
        <form className="formFields" onSubmit={e => onSubmit(e)}>
          <div className="formField">
            <input
              type="email"
              id="email"
              className="loginformFieldInput"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className="formField">
            <input
              type="password"
              id="password"
              className="loginformFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength='6'
              required
            />
          </div>

          <div className="formField">
            <ThemeProvider theme={theme}>
              <Button color="neutral" 
              variant="contained"
              onClick={e => onSubmit(e)}>
                Sign In
              </Button>
            </ThemeProvider>
            <br/>
            <Link to="/signup" className="formFieldLink">
              <span className="sourcesanspro-normal-white-17px">Don't have an account? <b>Sign Up Now</b></span>
            </Link>
            <br/>
            <Link to="/reset-password">
              <span className="sourcesanspro-normal-white-17px">Forgot your password? <b>Reset Password</b></span>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  </div>
);}

const mapStatetoProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStatetoProps,{login}) (Login);