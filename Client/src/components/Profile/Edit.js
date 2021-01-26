import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Tshirt from './Tshirt'
 
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
   
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <Tshirt/>
          </Modal>
        </div>
      );
  }

  export default Edit ;