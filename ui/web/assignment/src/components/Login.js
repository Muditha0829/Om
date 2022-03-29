import './login.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextBox from './textField/textField';
import { Component } from 'react';
 
 
class Login extends Component {
 
constructor(props){
  super(props);
  this.onChangeEmail= this.onChangeEmail.bind(this);
  this.onChangePassword= this.onChangePassword.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
 
  this.state ={
    email:'',
    password:''
  }
}
onChangeEmail(e){
  this.setState({
    email:e.target.value
  });
}
onChangePassword(e){
  this.setState({
    password:e.target.value
  });
}
 
onSubmit(e){
  e.preventDefault();

  const {email,password} = this.state;
  const details ={
    email:email,
    password:password
  }
 
  console.log(details);
}
render(){
  return (
    <div className="card">
    <Card className="cardStyle" >
      <CardContent>
        <div className="signupText">Login</div>
 
        <TextBox label="Email"  
               value={this.state.email} 
               onChange={this.onChangeEmail}/>
 
        <TextBox label="Password" 
               value={this.state.password} 
               onChange={this.onChangePassword}/>
 
        </CardContent>
 
      <CardActions className="CardActions" >
        <Button style={{background:'black',color:'white'}} onClick={this.onSubmit}> Login</Button>
      </CardActions>
 
    </Card>
    </div>
  );
}
}
 
 
export default Login ;