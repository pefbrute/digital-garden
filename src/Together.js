import React, { useState } from 'react';
import Home from './Home';
import Footer from './Footer';
import './App.css'; // import the CSS file

const posts = [
    { id: 1, title: 'React States (Russian Presentation)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1fGd-NcXoOdMCk-IcwgCOCFfQrD-fXWUXjWDROwGvPOc/edit?usp=sharing' },
    { id: 2, title: 'Post 2', type: 'article', date: '26.07.2023', url: 'https://example.com/post2' },
    { id: 3, title: 'Post 3', type: 'article', date: '25.07.2023', url: 'https://example.com/post3' },
    // Add more posts as needed
];

function App() {
    const [theme, setTheme] = useState('light'); // Add a new state value for theme

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); // function to switch the theme
    }

    return (
        <div className={theme}>
            <h1>My Links</h1>
            <button onClick={switchTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button> {/* Button to switch the theme */}
            <Home posts={posts} />
            <Footer />
        </div>
    );
}

export default App;


import React, { useState } from 'react';
import Post from './Post';

function Home({ posts }) {
    const [filterType, setFilterType] = useState('');

    const handleFilterClick = () => {
        // Toggle between 'presentation' and all posts
        setFilterType(filterType === 'presentation' ? '' : 'presentation');
    }

    const filteredPosts = filterType
        ? posts.filter(post => post.type === filterType)
        : posts;

    return (
        <div>
            <button onClick={handleFilterClick}>
                {filterType === 'presentation' ? 'Show all posts' : 'Show presentations'}
            </button>
            {filteredPosts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Home;



import React from 'react';

// Post component creates a link to the external resource
function Post({ post }) {
    return (
        <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
            <h2>{post.title}</h2>
            <p>Created on {post.date}</p>
        </a>
    );
}

export default Post;


import React from 'react';

// Footer component with the links to your contacts
function Footer() {
    return (
        <footer>
            <a href="https://github.com/pefbrute" target="_blank" rel="noopener noreferrer">Github Main</a>
            <a href="https://github.com/pefbrute-zz?tab=overview&from=2019-12-01&to=2019-12-31" target="_blank" rel="noopener noreferrer">Github Fun (2019-2020)</a>
            <a href="https://docs.google.com/document/d/1U8YAxnZaMf-OFXrMvbIOzjZYlPRdrTfzN_z3OpYsJj0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="https://www.linkedin.com/in/fpasynkov/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://t.me/pefbrute" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://twitter.com/pefbrutezz" target="_blank" rel="noopener noreferrer">Twitter</a>
        </footer>
    );
}

export default Footer;


