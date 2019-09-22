import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header/Header';
import MyNavbar from './components/Navbar/Navbar';
import 'bootswatch/dist/slate/bootstrap.min.css';
import Mainpage from './components/Mainpage/Mainpage';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <MyNavbar />
                <Route path="/" component={Mainpage} />

            </div>
        </BrowserRouter>
    );
}

export default App;
