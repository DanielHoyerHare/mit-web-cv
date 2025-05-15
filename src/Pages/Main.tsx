import React from 'react';
import './Main.css';
import '../Global.css';

function Main() {
    return (
        <div className="page-container border-radius box-shadow">
            <div className="page-header">
                <div className="page-header-left">
                    <h1 className="name">Daniel Høyer Hare</h1>
                </div>
                <img className="pfp" src="/img/pfp.png" alt="English" />
            </div>
            <h1>Welcome to the React App</h1>
            <p className="testMargin">This is a simple React application.</p>
            
        </div>
    );
}

export default Main;