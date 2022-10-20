import React from 'react';
import '../styles/PostItem.css';
import MyButton from '../UI/button/MyButton';

const PostItem = (props) => {
    return (
        <div className='style-element'>
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}.{props.post.postTitle}</strong>
                    <div>
                        {props.post.postDescription}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem
