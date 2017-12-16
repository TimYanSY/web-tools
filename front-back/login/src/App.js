import React, { Component } from 'react';
import Login from './Login.jsx'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={};
        this.checkExistence = this.checkExistence.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.getUserList = this.getUserList.bind(this);
        this.checkExistence();
    }
    
    checkExistence() {
        fetch('//sea-info6250-crud.herokuapp.com/users/test/me',{
             method: 'GET',
             credentials: 'include'
         }).then( response => response.ok ? response.json() : response.json().then( err => Promise.reject(err))).then( loginInfo => {
             this.setState({
                 user : loginInfo.username,
                 loggedIn : loginInfo.username !== undefined,
                 token : loginInfo.token,
         });}).catch( err => console.warn(err));
    }
    
    handleLogout(event) {
        fetch('//sea-info6250-crud.herokuapp.com/users/test/'+ this.state.user + '/session',{
             method: 'DELETE',
             credentials: 'include'
         }).then( response => response.ok ? response.json() : response.json().then( err => Promise.reject(err)) ).then( loginInfo => {this.setState ({
             loggedIn : false,
             user : "",
         }, () => {document.cookie += ";expires=Wed, 14 Jun 1970 07:00:00 GMT"});}).catch( err => console.warn(err) );
     }
     
     handleLogin(event) {
         const url = '//sea-info6250-crud.herokuapp.com/users/test/' + this.state.name + '/session';
         const pw = this.state.password;
         fetch(url, {method: 'POST', credentials: 'include', body: JSON.stringify({ password: pw })}).then( response => response.ok ? response.json() : response.json().then( err => {Promise.reject(err)})).then((loginInfo) => {
             this.setState ({
                 loggedIn : loginInfo.username !== undefined,
                 user : loginInfo.username,
                 token: loginInfo.token,
             }); 
             document.cookie=`userToken=${loginInfo.token}`;
             this.getUserList(loginInfo.username, 
                               loginInfo.token) 
         }
         ).catch( err => console.warn(err))
     }
    
    handleNameChange(event) {
         this.setState({
             name : event.target.value
         });
     }
     
     handlePasswordChange(event) {
         this.setState({
             password : event.target.value
         });
     }
    
    getUserList(user, token) {
            fetch(`/api/${user}/${token}`,{method: 'GET'})
    .then(response => response.ok ? response.json() : response.json().then( err => Promise.reject(err) ))
    .then((response) => this.setState({
                list: response
            })).catch(err => console.warn(err))
    }
    
  render() {
      if (!this.state.loggedIn) {
          return (
              <div className="APP">
              
              <h1>
                User Log in
              </h1>
              
              <Login handleNameChange={this.handleNameChange} handlePasswordChange={this.handlePasswordChange} handleLogin={this.handleLogin}></Login>
              
              </div>
          );
      } else {
          return (
              <div>

              {JSON.stringify(this.state.list)}
              
              <button id="log-out" type="submit" onClick={this.handleLogout}>Log {this.state.user} out</button>
              
              </div>
              
          );
      }
  }
}

export default App;
