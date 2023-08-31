import React from 'react';
import Main from '../main/main';
import Technics from '../technics/technics';
import Footer from '../footer/footer';
import data from '../../utils/data'

const title = 'test';

function App() {
  return (
    <>
      <Main />
      <Technics data={data}/>
      <Footer />
    </>
  
  );
}

export default App; 