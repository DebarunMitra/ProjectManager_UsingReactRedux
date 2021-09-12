import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CandyContainer from './components/layout/CandyContainer';
import HookCandyContainer from './components/layout/HookCnadyContainer';
import CookieConainer from './components/layout/CookieContainer';
import TakeCookiesNumbersToBuy from './components/layout/TakeCookiesNumbersToBuy';



const App = () => {
    return (
        <BrowserRouter>
           <div>
              <Navbar />
              <CandyContainer />
              {
                // <HookCandyContainer />
              }
              <CookieConainer />
              <TakeCookiesNumbersToBuy />
           </div>
        </BrowserRouter>
   );
};

export default App;
