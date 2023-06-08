import React,{useState,useEffect} from 'react'
import axios from 'axios';
 function GetPostFun (){
 const [posts,setposts]=useState([]);
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((response)=>{
        setposts(response.data)
        console.log(posts)
       }).catch((err)=>{
        console.log(err);
         })
    
    },[])
    return (
      <div>
       {Array.from(posts).map(post=>
       (
            <div content-visibility="auto">
                <h3>{post.id}</h3>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )
        )
       }
      </div>
    )
  }
export default GetPostFun;
