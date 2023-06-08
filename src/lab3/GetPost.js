import React, { Component, lazy } from 'react'
import axios from 'axios';
 class GetPost extends Component {
 constructor(props)
 {
    super(props)
    this.state={
        posts:[]
    }
 }
//  handle_submit=(e)=>{
    componentDidMount=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/',this.state.id)
    .then((response)=>{
        this.setState({posts:response.data})
        console.log(response)
       }).catch((err)=>{
        console.log(err);
         })
    
    }
    // handle_change=(e)=>{
    //     this.setState({[e.target.name]:e.target.value})
    // }
    render() {
    return (
      <div>

        {/* <form onSubmit={this.handle_submit}>
        <label>ID</label>
        <input type='number' name='id' placeholder='Enter your ID' onChange={this.handle_change}></input>
        <p>{this.state.post}</p>
        <button type='submit'>GetPost</button>
        </form> */}
       { this.state.posts.map(post=>(
            <div content-visibility="auto">
                <h3>{post.id}</h3>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
       }
      </div>
    )
  }
}
export default GetPost;
