import React, { useState } from 'react';
import Main from '../main/main';
import Technics from '../technics/technics';
import Footer from '../footer/footer';
import data from '../../utils/data';
import Modal from '../../modal/modal';

function App() {

  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = (e) => {
    setIsShowModal(true);
  }

  const closeModal = () => {
    setIsShowModal(false);
  }

  return (
    <>
      <Main openHandler={openModal}/>
      <Technics data={data} openHandler={openModal} />
      <Footer />
      {isShowModal && <Modal closeHandler={closeModal} /> }
    </>
  
  );
}

export default App; 