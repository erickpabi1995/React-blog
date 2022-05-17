import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Button, MenuItem } from "@material-ui/core";
const Create = () => {

const[title,setTitle]=useState("")
const[body,setBody]=useState("")
const[imgaddress,setImgAddress]=useState("")
const[author,setAuthor]=useState("Eric Nana Kwame Kpabi")
 const[pending,setPending]=useState(false)
const history=useHistory()
const blog={title,body,author}
    console.log(blog)

    const handleSubmit=(e)=>{
e.preventDefault()
 
setPending(true)
 setTimeout(()=>{
    fetch("http://localhost:8000/post",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(blog)
           }
        ).then(()=>{
            console.log("blog added")
           setTitle("")
           setBody("")
           history.push("/")
           setPending(false)
           })
 },1000)

    }
   



    return ( 
        < div className="create">
            <h2>Create a new blog</h2>
<form onSubmit={handleSubmit} className="blog_form">  
    <TextField
          id="title"
          label="Title"
      className="title"
          fullWidth
          value={title}
          variant="outlined"
          onChange={(e)=>setTitle(e.target.value)}
          required
        />
        <br/>

  
    <TextField
          id="body"
          label="Body"
          multiline
          rows={4}
          fullWidth
          value={body}
          variant="outlined"
          onChange={(e)=>setBody(e.target.value)}
          required
        />

<TextField
          id="img_address"
          label="Image Address"
         type="text"
          fullWidth
          value={imgaddress}
          variant="outlined"
          onChange={(e)=>setImgAddress(e.target.value)}
          required
        />

    
<TextField
          id="author"
          label="Author"
         select
          fullWidth
          value={author}
         
          variant="outlined"
          onChange={(e)=>setAuthor(e.target.value)}
          required
        >
            <MenuItem value="sammy">Sammy Adjei   </MenuItem>
            <MenuItem value="kofi">Kofi Asamoah  </MenuItem>
            <MenuItem value="yaw">Yaw Fosu   </MenuItem>
            <MenuItem value="samuel">Samuel Atubiga   </MenuItem>
            <MenuItem value="eric">Eric Nana Kwame Kpabi   </MenuItem>
            </TextField>

  
    <br/>
    <Button type="submit">{pending ? "Loading..." : "Submit"}</Button>
  
</form>
        </div>
     );
}
 
export default Create;