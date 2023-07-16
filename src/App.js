import React, { useState } from 'react';
import { Header, Footer, Navigation, } from './components';

function App() {
  const [section, setSection] = useState('about');

  return (
    <div>
      <Header/>
      <Navigation/>
      <Footer/>
    </div>
    
  );
}

export default App;
