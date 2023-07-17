import React, { useState } from 'react';
import { Header, Footer, Navigation, } from './components';

function App() {
  const [section, setSection] = useState('about');

  return (
    <div>
      <Header setSection={setSection}/>
      <div style={{ marginTop: '100px', marginBottom: '100px'}}>
        <Navigation section={section} />
      </div>
      <Footer/>
    </div> 
  );
}

export default App;
