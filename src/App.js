import React from 'react';

import { Footer, Header, Features} from './containers';
import { Navbar } from './components';
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Features />
            {/* <Blog /> */}
            <Footer />
        </div>
    )
}

export default App;