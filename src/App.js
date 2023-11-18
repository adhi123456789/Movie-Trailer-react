import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { action, originals } from './urls'
import './App.css'
import Banner from './Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {

  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost title='Netflix Orginals' url={originals} />
      <RowPost title='Action' isSmall url={action} />
    </div>
  );
}

export default App;