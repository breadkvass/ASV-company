import React, { useState } from 'react';
import Main from '../main/main';
import Technics from '../technics/technics';
import Footer from '../footer/footer';
import data from '../../utils/data';
import ModalForm from '../modal-form/modal-form';

function App() {

  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
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
      {isShowModal && <ModalForm closeHandler={closeModal} /> }
    </>
  
  );
}

export default App; 