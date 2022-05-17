import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [blogs,setBlogs]=useState(null)
const[loading,setLoading]=useState(true)
const[error,setError]=useState('')
    useEffect(()=>{

setTimeout(()=>{
    fetch(" http://localhost:8000/post")
    .then(res=>{
    if(!res.ok){
        throw new Error("link cannot be found")
    }
    return res.json()})
    .then(data => {
        setBlogs(data)
    setLoading(false)
    }
    )
    .catch(err=>{
        setError(err.message)
    })
},1000)



    },[])
  
    return ( 
        <div className="home">
            {error.length>1 ? <div>{error}</div> : null}
            {loading && <div className="loading">Loading...</div>}
            {blogs && blogs.map(blog=> (
            <div key={blog.id}>
                <Link to ={`/blog/${blog.id}`}> <h2>{blog.title}</h2></Link>


 <img src={blog.img} alt="city " height="400px" width="400px"/>
 <p>{blog.body.length > 60 ? blog.body.substring(0,60) + "..." : blog.body} </p>
 <br/>
 <small>Written by :{blog.author}</small>
 </div>
            ))}
         
        </div>
     );
}
 
export default Home;