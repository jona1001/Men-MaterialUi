import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PermanentDrawerLeft from './components/Navigation1';
import users from './pages/users';
import Documents from './pages/Documents';
import home from './pages/home';
import Clientes from './pages/Clientes';


function App() {
    return (
        <div>
            <Router>
                <PermanentDrawerLeft />
                <div>
                    <Route path="/" exact component={home} />
                    <Route path="/users" exact component={users} />
                    <Route path="/docs" exact component={Documents} />
                    <Route path="/cliens" exact component={Clientes} />
                </div>
            </Router>
        </div>

    );
}

export default App;