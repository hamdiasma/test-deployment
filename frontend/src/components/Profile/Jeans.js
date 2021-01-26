import React  , {useState} from 'react'
import './Tabs.scss'; 
import {Form ,Button , Col , } from 'react-bootstrap';

import Uploaded from './Uploaded'


export default function Jeans() {
    return (
       <div>
              <div><h2>Jeans</h2></div>
          <Form>
         <Form.Row>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control type="text" name="code" placeholder="Nom de l'article" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Control type="number"   name="quantite" placeholder="Quantité par piéces" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Control type="number"  name="prix"  placeholder="Prix" />
         </Form.Group>
         </Form.Row>
       
         <Form.Row>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="numero serie" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="numero serie" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="numero serie" />
         </Form.Group>
         </Form.Row>
 
         <Form.Row>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="40-42" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="44-46" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="48-50" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="52-54" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="54-58" />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridAddress">
         <Form.Control placeholder="XL" />
         </Form.Group>
         </Form.Row>

          <Uploaded/>
  <Button variant="light" type="submit">
    Ajouter
  </Button>
  
  </Form>
            
        </div>
    )
}
