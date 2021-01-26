import React , {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Signup from '../../Home/Signup'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
function Edit(){
    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(true);
    

  
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    };



      return (
        <div>
     
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

          </Modal>
        </div>
      );
  }

  export default Edit ;