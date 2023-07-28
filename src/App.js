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
    { id: 8, title: 'Ukraine in 2014 (RU)', type: 'presentation', date: '28.07.2023', url: 'https://docs.google.com/presentation/d/1G9JRMqqhYbD0xFAaJKFCv5ByN2xzIMzSDseRWnH5cCc/edit?usp=sharing' },
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
    <div className={`${theme} main-container`}>
        <div className="header-container">
            <h1>My Links</h1>
            <button className="theme-switch" onClick={switchTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
        <div>
            <Home posts={posts} />
            <Footer />
        </div>
    </div>
  );
}

export default App;
