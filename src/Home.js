
// Home.js

import React, { useState } from 'react';
import Post from './Post';

function Home({ posts }) {
    const [filterType, setFilterType] = useState('');

    const handleFilterClick = () => {
        setFilterType(filterType === 'presentation' ? '' : 'presentation');
    }

    const filteredPosts = filterType ? posts.filter(post => post.type === filterType) : posts;

    return (
        <div>
            <button className="filter-button" onClick={handleFilterClick}>
                {filterType === 'presentation' ? 'Show all posts' : 'Show presentations'}
            </button>
            <div className="posts">
                {filteredPosts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Home;
