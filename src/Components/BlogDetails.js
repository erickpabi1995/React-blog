import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BlogDetails = () => {

    const{id}=useParams()
    const [posts,setPosts]=useState(null)
    const[loading,setLoading]=useState(true)
  const history=  useHistory()
    useEffect(()=>{


setTimeout(()=>{

    fetch(" http://localhost:8000/post/" + id )
    .then(res=>res.json())
    .then(data => {
        setPosts([data])
    setLoading(false)
    })
},1000)
            },[id])

            const handleDelete=()=>{
                    fetch(" http://localhost:8000/post/" + id ,{
                        method:"Delete"
                    })
               const post2= posts.filter((item)=>console.log(item.id) )
               setPosts(post2)
               history.go(-1)
            }

         

          
            
    return ( 
        <div className="blogdetails">
            {loading && <div className="loading">Loading...</div>}
           
         
           {posts && posts.map(post=> (
            <div key={post.id}>
                <h2>{post.title}</h2>
<img src={post.img} alt="city"/>
 <p>{post.body} </p>
 <small>Written by:{post.author}</small> 
 <div className="edit">
            <button style={{backgroundColor:"crimson"}} onClick={handleDelete}>Delete</button> 
            <Link to ={`/edit/${post.id}`}>
            <button >Edit</button> 
            </Link>
            </div>
        </div>
          ))}
         
        </div>
     );
}
 
export default BlogDetails;