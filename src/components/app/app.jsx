import React from 'react';
import Main from '../main/main';
import Technics from '../technics/technics';
import data from '../../utils/data'

const title = 'test';

function App() {
  return (
    <>
      <Main />
      <Technics data={data}/>
    </>
  
  );
}

export default App; 