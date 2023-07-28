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
