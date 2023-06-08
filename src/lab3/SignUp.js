import React, { Component } from 'react'
import Login from './Login';

 class SignUp extends Component {
  constructor(props){
    super(props)
   
    this.state={
        email:"",
        password:"",
        fname:"",
        lname:"",
        issubmited:false
    }
   
    this.handleChange = this.handleChange.bind(this);
    this.handle_submit = this.handle_submit.bind(this);
  }
handleChange=(e)=>{
 const input_name=e.target.name;
  this.setState({[input_name]:e.target.value});
}

  handle_submit=(e)=>{
alert(`welcome ${this.state.fname}`);
this.setState({issubmited:true})
   e.preventDefault();
   
  }
    render() {
      const issubmited=this.state.issubmited;
    return (
      <div class="reg_data">
        {[issubmited] ? (<Login/>):(
       <form onSubmit={this.handle_submit}>
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required></input>
         <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required></input>
          <label>First Name</label>
          <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} required></input>
          <label>Last Name</label>
          <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} required></input>
          <button type="submit" >signup</button>      
          </form>     
        )} 
        </div>
        
        )

  }
}
export default SignUp;