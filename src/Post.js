import React from 'react';

// Post component creates a link to the external resource
function Post({ post }) {
    return (
        <div className="post">
            <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
                <h2>{post.title}</h2>
                <p>Created on {post.date}</p>
            </a>
        </div>
    );
}

export default Post;

