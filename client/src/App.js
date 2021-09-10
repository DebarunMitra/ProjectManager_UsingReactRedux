import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CandyContainer from './components/layout/CandyContainer';

const App = () => {
    return (
        <BrowserRouter>
           <div>
              <Navbar />
              <CandyContainer />
           </div>
        </BrowserRouter>
   );
};

export default App;
