import React from 'react';
import './Contact.css';
import '../Global.css';

function Contact() {
    return (
        <div className="page-container border-radius box-shadow">
            <h1>Contact:</h1>
            <p className="testMargin">This is a simple React application.</p>
            <p className="testMargin">Feel free to explore the components and styles.</p>
            <p className="testMargin">Modify the code to see live changes.</p>
            <p className="testMargin">Happy coding!</p>
            <p className="testMargin">Check out the <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React documentation</a> for more information.</p>
        </div>
    );
}

export default Contact;