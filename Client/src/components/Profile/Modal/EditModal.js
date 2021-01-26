import React , {useState} from 'react';
import Modal from 'react-modal';
import {useSelector,useDispatch} from 'react-redux' ;
import {Redirect} from 'react-router-dom'
import "../Tabs.scss";
import { Form, Button, Col } from "react-bootstrap";


function EditModal(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {

  }
 
  function closeModal(){
    setIsOpen(false);
  }



  
    
  

      return (
        <div>
        <Modal className="login-box"
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
           <div>
      <h2>T-shirt</h2>
      <Form
   //     onSubmit={onSubmit}
       >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              type="number"
              name="code"
     //         value={code}
              // onChange={(e) => setCode(e.target.value)}
              placeholder="Code  de l'article"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="quantite"
              // onChange={(e) => setQuantite(e.target.value)}
              placeholder="Quantité par piéces"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="prix"
         //     onChange={(e) => setPrix(e.target.value)}
              placeholder="Prix"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleA"
          //    onChange={(e) => setSizeXS(e.target.value)}
              placeholder="XS"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleB"
              // onChange={(e) => setSizeS(e.target.value)}
              placeholder="S"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleC"
              // onChange={(e) => setSizeM(e.target.value)}
              placeholder="M"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleD"
              // onChange={(e) => setSizeL(e.target.value)}
              placeholder="L"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleE"
              // onChange={(e) => setSizeXL(e.target.value)}
              placeholder="XL"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              name="tailleF"
              // onChange={(e) => setSizeXXL(e.target.value)}
              placeholder="XXL"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              cols={33} rows="3"
              name="description"
              // onChange={(e) => setDescription(e.target.value)}
              placeholder="description de jeans .."
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Control
              type="color"
              name="couleur"
              // onChange={(e) => setCouleur(e.target.value)}
              placeholder="couleur"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress"></Form.Group>
        </Form.Row>
  
        <Button variant="light" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  
        </Modal>
      </div>
      );
  }

  export default EditModal ;