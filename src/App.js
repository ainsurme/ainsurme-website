import React from 'react';

import { Footer, Header, Products, Company} from './containers';
import { Navbar } from './components';
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div>
                <Navbar />
                <Header />
            </div>
            <Products />
            <Company />
            <Footer />
        </div>
    )
}

export default App;