
import './Components/styles.css'
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create'
import Navbar from './Components/Navbar';
import BlogDetails from './Components/BlogDetails';
import EditBlog from './Components/EditBlog';
function App() {
  return (
    <div className="App">
    
       
    
     <Router>
      <Navbar/>
      <Switch>
    <Route exact path="/">
<Home/>
    </Route>
    <Route path="/create">
<Create/>
    </Route>

    <Route path="/blog/:id">
<BlogDetails/>
    </Route>

    <Route path="/edit/:id">
<EditBlog/>
    </Route>
    </Switch>

   </Router>
   
    </div>
  
  );
}

export default App;
