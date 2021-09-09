import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CandyContainer from './components/layout/CandyContainer';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
         <div>
            <Navbar />
            <CandyContainer />
         </div>
      </BrowserRouter>
   );
  }
}

export default App;
