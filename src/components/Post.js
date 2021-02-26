import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Post = () => {
    const [post, setPost] = useState([])
    const {id} = useParams()

    const obtenerPost = async () =>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const posteos = await res.data
    setPost(posteos)
}
    useEffect( () =>{
        obtenerPost() 
    },[])




    return (
        <div>
            <h2>Detalles del Post seleccionado</h2>
            <p>ID : {post.id} </p>
            <p>TITLE: {post.title} </p>
            <p>Body: {post.body} </p>

        </div>
    )
}

export default Post
