import { useState } from "react";
import PostForm from './components/PostForm';

// import Counter from "./components/Counter";
// import InputText from "./components/InputText";
import PostList from "./components/PostList";

import './App.css';
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";

function App() {
  
  const [posts, setPosts] = useState([
        {id: 1, postTitle: 'аа', postDescription: 'бб'}, 
        {id: 2, postTitle: 'гг', postDescription: 'аа'}, 
        {id: 3, postTitle: 'вв', postDescription: 'яя'}, 
  ])

  const [modal, setModal] = useState(false);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        CreatePost
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm
          create={createPost}
        />
      </MyModal>
      <PostList
        title='List of Posts #1'
        posts={posts}
        setPosts={setPosts}
      />
    </div>
  );
}

export default App;
