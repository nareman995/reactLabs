import React, { Component } from 'react'
import axios from 'axios';
class AddPost extends Component {
   constructor(props){
    super(props)
    this.state={
        id:"",
        username:"",
        password:""
    }
   }  
handle_change=(e)=>{
this.setState({[e.target.name]:e.target.value})
}
handle_submit=(e)=>{
e.preventDefault()
axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
.then((response)=>{
    console.log(response)
   }).catch((err)=>{
    console.log(err);
     })

}
    render() {
    return (
      <div>
        <form onSubmit={this.handle_submit}>
            <label>ID</label>
         <input type='number' name='id' placeholder='Enter your ID' onChange={this.handle_change}></input>
         <label>UserName</label>
         <input type='text' name='username' placeholder='Enter Your Username' onChange={this.handle_change}></input>
         <label>Password</label>
         <input type='password' name='password' placeholder='Enter Your Password' onChange={this.handle_change}></input>
        <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}
export default AddPost;