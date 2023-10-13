/* eslint-disable react/prop-types */

import Modal from 'react-bootstrap/Modal'

const ModalWrapper =({show,handleModal,children})=> {
    return(
      <Modal show={show} onHide={handleModal}>
        {children}
      </Modal>
    )
  }
  export default ModalWrapper