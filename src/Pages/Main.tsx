import React from 'react';
import './Main.css';
import '../Global.css';

function Main() {
    return (
        <div className="page-container border-radius box-shadow">
            <div className="page-header">
                <h1>Welcome to the React App</h1>
                <img className="pfp" src="/img/pfp.png" alt="English" />
            </div>
            <h1>Welcome to the React App</h1>
            <p className="testMargin">This is a simple React application.</p>
            <p className="testMargin">Feel free to explore the components and styles.</p>
            <p className="testMargin">Modify the code to see live changes.</p>
            <p className="testMargin">Happy coding!</p>
            <p className="testMargin">Check out the <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React documentation</a> for more information.</p>
        </div>
    );
}

export default Main;