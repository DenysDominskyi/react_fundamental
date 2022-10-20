import PostForm from './PostForm';
import PostItem from './PostItem';

const PostList = ({ posts, title, setPosts }) => {
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    return (
        <div>
            <PostForm create={createPost} />

            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.length !== 0
                ?
                ''
                :
                <h2 style={{textAlign: 'center'}}>Posts Undefined</h2>}
            {posts.map((post, index) => (
            <PostItem remove={removePost} number={index + 1} post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostList;
