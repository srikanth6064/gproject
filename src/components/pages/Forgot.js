import React, { Component } from "react";
import './forgot.css';

export default class ForgotPage extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          username: '',
          password: '',
          confirmPassword: '',
          match: null,
          charNumberValid: false,
          specialCharValid: false,
          uppercaseValid: false,
          numberValid: false
        }
      }
      checkPasswordLength = (password) => {
        if (password.length >= 8) {
          this.setState({
            charNumberValid: true
          })
        } else {
          this.setState({
            charNumberValid: false
          })
        }
      }
      checkSpecialCharacters = (password) => {
        const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
          if (pattern.test(password)) {
          this.setState({
            specialCharValid: true
          }) 
        } else {
          this.setState({
            specialCharValid: false
          }) 
        }
      }
      checkUppercase = (password) => {
        const pattern = /[A-Z]/;
        if (pattern.test(password)) {
          this.setState({
            uppercaseValid: true
          })
        } else {
          this.setState({
            uppercaseValid: false
          })
        }
      }
  
  // Check for a number
  checkNumber = (password) => {
    const pattern = /[0-9]/;
	  if (pattern.test(password)) {
      this.setState({
        numberValid: true
      }) 
    } else {
      this.setState({
        numberValid: false
      })
    }
  }
  
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
    
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
    
    this.checkPasswordLength(event.target.value);
    this.checkSpecialCharacters(event.target.value);
    this.checkUppercase(event.target.value);
    this.checkNumber(event.target.value);
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value,
      match: null
    })
  };

  comparePassword = (event) => {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({
        match: true
      })
    } else {
      this.setState({
        match: false
      })
    }
  }
  
  resetForm = () => {
    this.setState({
      username: '',
      password: '',
      confirmPassword: '',
      match: null
    })
    
    this.username.focus();
  }            
    render(){
        return(
            <section className="account__container">
        <div className="input__container">
            <h1 style={{color:'blue'}}>Forgot Password</h1>
          <label className="input__label">Username</label>
          <input
            className="input"
            ref={(input) => { this.username = input; }} 
            value={this.state.username}
            onChange={(event) => this.handleUsernameChange(event)}
          />          
        </div>
        <div className="password-container">
          <div className="password">
            <div className="input__container">
              <label className="input__label">Password</label>
              <input 
                className="input"
                type="password"
                value={this.state.password}
                onChange={(event) => this.handlePasswordChange(event)}
              />  
            </div>
            <div className="input__container">
              <label 
                className={`input__label ${this.state.match == false ? 'error-msg' : null}`}
                >Confirm Password</label>
              <input
                className={`input${ this.state.match == false ? '--error' : ''}`}
                type="password"
                value={this.state.confirmPassword}
                onChange={(event) => this.handleConfirmPasswordChange(event)}
                onBlur={this.comparePassword}
              />
            </div>
          </div>
          {/* <div className="validation">
            <div className="validator">
              <i className={this.state.charNumberValid ? "fas fa-check success" : "fas fa-times error"}></i>
              <p className="validation-item">8-20 characters</p>
            </div>
            <div className="validator">
              <i className={this.state.specialCharValid ? "fas fa-check success" : "fas fa-times error"}></i>
              <p className="validation-item">1 special character</p>
            </div>
            <div className="validator">
              <i className={this.state.uppercaseValid ? "fas fa-check success" : "fas fa-times error"}></i>
              <p className="validation-item">1 uppercase letter</p>
            </div>
            <div className="validator">
              <i className={this.state.numberValid ? "fas fa-check success" : "fas fa-times error"}></i>
              <p className="validation-item">1 number</p>
            </div>
          </div> */}
        </div>
        <div className="button__container">
          <button className="button--primary">Change Password</button>
          <button
            className="button--secondary"
            onClick={this.resetForm}
          >
            Reset
          </button>
        </div>
      </section>
        )
    }
}