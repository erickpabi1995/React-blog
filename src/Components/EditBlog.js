import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router";
const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Eric Nana Kwame Kpabi");
  const [pending, setPending] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const { id } = useParams();

  const updateblog = { title, body, author };
  console.log(updateblog);

  useEffect(() => {
      setLoading(true)
    setTimeout(() => {
      fetch(" http://localhost:8000/post/" + id)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setBody(data.body);
          setAuthor(data.author);
          setLoading(false)
        });
    }, 1000);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);

    fetch("http://localhost:8000/post/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(updateblog)
      
    })
    .then(()=>{
        console.log("update done")
        setPending(false)
        history.push("/")
    })

  };
  return (
      
    <div className="create">
        {loading && <div>Loading...</div> }
    <h2>Update your post</h2>
      <form onSubmit={handleSubmit} className="blog_form">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body</label>
          <input
            type="textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label>Author: </label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option>Sammy Adjei</option>
            <option>Kofi Asamoah</option>
            <option>Yaw Fosu</option>
            <option>Samuel Atubiga</option>
            <option>Eric Nana Kwame Kpabi</option>
          </select>
          <br />
          <button type="submit">{pending ? "Loading..." : "Update"}</button>
        </div>
        
      </form>

    </div>
  );
};

export default EditBlog;
