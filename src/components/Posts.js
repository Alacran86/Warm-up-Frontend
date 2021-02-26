import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




const Posts = () => {
    const [posts, setPosts] = useState([])

    const obtenerPosts = async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posteos = await res.data
    setPosts(posteos)
}
    useEffect( () =>{
        obtenerPosts() 
    },[])


    return (
        <div className="container justified-content-center">
                <h2>Lista de posts</h2>
                {
                    posts.map( (item) =>(
                        
                            <Link key to={`/post/${item.id}`}><li>{item.title}</li></Link>
                      
                    ) )
                }    
        </div>
    )
}

export default Posts
      