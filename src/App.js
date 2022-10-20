import { useState } from "react";

import Counter from "./components/Counter";
import InputText from "./components/InputText";
import PostList from "./components/PostList";

import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, postTitle: 'Javascript', postDescription: 'Javascript - is language of programming'}, 
    {id: 2, postTitle: 'Javascript 1', postDescription: 'Javascript - is language of programming'}, 
    {id: 3, postTitle: 'Javascript 2', postDescription: 'Javascript - is language of programming'}, 
  ])
  
  return (
    <div className="App">
      <PostList posts={posts} title='List of Posts #1' setPosts={setPosts}/>
    </div>
  );
}

export default App;
