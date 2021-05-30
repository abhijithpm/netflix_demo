
import React from 'react';
import NavBar from './Components/navBar/navBar';
import {action,orginals} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';





function App() {
  return (
    <div>
   <NavBar/>
   <Banner/>
   <RowPost url={orginals} title="Netflix Orginals"  />
   <RowPost url={action} title="Action" isSmall/>
   <RowPost url={action} title="Action" isSmall/>
   
   </div>
  );
}

export default App;
