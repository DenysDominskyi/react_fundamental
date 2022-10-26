import { useMemo, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PostFilter from './PostFilter';

import PostItem from './PostItem';

const PostList = ({ posts, setPosts, title }) => {
    
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        else {
            return posts;
        }
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.postTitle.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    return (
        <div>
            
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <h1 style={{ textAlign: 'center' }}>{title}</h1>

            <TransitionGroup>
                {sortedAndSearchedPosts.length !== 0
                    ?
                    ''
                    :
                    <h2 style={{textAlign: 'center'}}>Posts Undefined</h2>}
                {sortedAndSearchedPosts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem
                            remove={removePost}
                            number={index + 1}
                            post={post}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default PostList;
