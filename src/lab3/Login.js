import React, { Component } from 'react'

 class Login extends Component {
 constructor(props){
    super(props)
    this.state={
        email:"",
        password:""
    }
 }
 handle_email=(e)=>{
this.setState({email:e.target.value})
 }
 handle_pass=(e)=>{
    this.setState({password:e.target.value})
    console.log(this.state.email)
 }
 handle_Submit=(e)=>{
  alert("login successfully")
  e.preventdefault();
 }   
 render() {
    return (
      <form onSubmit={this.handle_Submit}>
      <div class="form_data">
        <label>Email</label>
        <input type="email" value={this.state.email} onChange={this.handle_email}></input>
        <label>Password</label>
        <input type='password' value={this.state.password} onChange={this.handle_pass} ></input>
        <button type="submit">Login</button>
      </div>
      </form>
    )
  }
}
export default Login;