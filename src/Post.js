import React from 'react';

// Post component creates a link to the external resource
function Post({ post }) {
    const postClass = post.image ? "post post--image" : "post";
    return (
        <div className={postClass}>
            <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
                {post.image && <img className="post-image" src={post.image} alt={post.title} />}
                <h2>{post.title}</h2>
                <p>Created on {post.date}</p>
            </a>
        </div>
    );
}

export default Post;

