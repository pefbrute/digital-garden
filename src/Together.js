import React, { useState, useEffect } from 'react';
import Home from './Home';
import Footer from './Footer';
import './App.css'; // import the CSS file

const posts = [
    { id: 1, title: 'React States (RU)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1fGd-NcXoOdMCk-IcwgCOCFfQrD-fXWUXjWDROwGvPOc/edit?usp=sharing' },
    { id: 2, title: 'React Hooks', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1CfROA58Ruxk-PaABLvyNd4NvvPBeNQSEt9TYk5MXlXE/edit?usp=sharing' },
    { id: 3, title: 'JavaScript Variables (RU)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1OgdhgIyhV-r5CVxuSLxO8SysNtWEYBNQWHMuh1VV-r0/edit?usp=sharing' },
    { id: 5, title: 'JavaScript Desctructuring', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/171iP5FlOze8j4X-yfD709MJwllnNRKY8LVRPmsCXXVI/edit?usp=sharing' },
    { id: 6, title: 'Event Loop (RU)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1MpM4Y5k5xsNEcav9ZCX22vLOHPaWE3gQF26D8oFK0o4/edit?usp=sharing' },
    { id: 7, title: 'Ternary Operator', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/13L7tG-gHal5OqAz0MUUZZq8Vj34JbaSkd31G2FTto60/edit?usp=sharing' },
    { id: 8, title: 'Ukraine in 2014 (RU)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1G9JRMqqhYbD0xFAaJKFCv5ByN2xzIMzSDseRWnH5cCc/edit?usp=sharing', image: "ukraine-flag.jpeg" },
    { id: 9, title: 'Maidan (RU)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1M0AGTXy3vsnUNCvYa4NBIXsLl9cQTMKuInIwhcRwtAY/edit?usp=sharing' },
    { id: 10, title: 'WEB APIs (RU)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1StCj9dai1_NN3-Ug1DjzkWN3j9SxYPn2xydDRdGe8vY/edit?usp=sharing' },
    { id: 11, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 12, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 13, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 14, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 15, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 16, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 17, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 18, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 19, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 20, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 21, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },
    { id: 22, title: 'Post #', type: 'article', date: '25.07.2023', url: 'https://example.com/post#' },    
    // Add more posts as needed
];

function App() {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        if (theme === 'light') {
            document.body.style.backgroundColor = '#ffffff';
        } else {
            document.body.style.backgroundColor = '#264653';
        }
    }, [theme]);

  return (
    <div>
        <div className="header-container">
            <h1>My Links</h1>
            <button className="theme-switch" onClick={switchTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
        <div className={`${theme} main-container`}>
            <Home posts={posts} />
            <Footer theme={theme} />
        </div>
    </div>
  );
}

export default App;



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


import React from 'react';

// Post component creates a link to the external resource
function Post({ post }) {
    return (
        <div className="post">
            <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
                {post.image && <img src={post.image} alt={post.title} />}
                <h2>{post.title}</h2>
                <p>Created on {post.date}</p>
            </a>
        </div>
    );
}

export default Post;



import React from 'react';

// Footer component with the links to your contacts
function Footer({ theme }) {
    return (
        <footer className={theme}>
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


