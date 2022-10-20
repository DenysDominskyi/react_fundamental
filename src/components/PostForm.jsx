import React, { useState } from 'react';
// import { useRef } from 'react';

import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const PostForm = ({create}) => {
    // const bodyInputRef = useRef();

    const [post, setPost] = useState(
        {
            postTitle: '',
            postDescription: '',
        }
    );

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({
            postTitle: '',
            postDescription: ''
        })
    }
    
    return (
        <form style={{ textAlign: 'center' }}>
            {/* Управляємий компонент */}
            <MyInput
                value={post.postTitle}
                onChange={e => setPost({...post, postTitle: e.target.value})}
                type='text'
                placeholder='Name of post'
            />
            <MyInput
                value={post.postDescription}
                onChange={e => setPost({...post, postDescription: e.target.value})}
                type='text'
                placeholder='Description'
            />
            {/* Неуправляймий/неконтрольований компонент */}
            {/* <MyInput
                ref={bodyInputRef}
                type='text'
                placeholder='Description'
            /> */}
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    )
}

export default PostForm
