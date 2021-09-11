import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CandyContainer from './components/layout/CandyContainer';
import HookCandyContainer from './components/layout/HookCnadyContainer';


const App = () => {
    return (
        <BrowserRouter>
           <div>
              <Navbar />
              <CandyContainer />
              <HookCandyContainer />
           </div>
        </BrowserRouter>
   );
};

export default App;
