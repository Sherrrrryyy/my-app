// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col items-center">
                <nav className="mb-4">
                    <Link to="/signup" className="mr-4">Signup</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;