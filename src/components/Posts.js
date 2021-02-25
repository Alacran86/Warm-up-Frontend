import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




const Posts = () => {
    const [post, setPosts] = useState([])

    const obtenerPosts = async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posteos = await res.data
    setPosts(posteos)
}
    useEffect( () =>{
        obtenerPosts() 
    },[])


    return (
        <div>
                <h2>Lista de posts</h2>
                {
                    post.map( (item) =>(
                        <div>
                            <Link key to={`/posts/${item.id}`}>{item.title}</Link>
                        </div>
                    ) )
                }    
        </div>
    )
}

export default Posts
      