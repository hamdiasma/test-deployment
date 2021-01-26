import React from 'react'
import './Tabs.scss'; 
import {Form ,Button , Col , } from 'react-bootstrap';
import Uploaded from './Uploaded'
export default function Chaussure() {
    return (
         <div>
         <h2>Chaussure</h2>
       <Form>
       <Form.Row>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control type="text" placeholder="Nom de l'article" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Control type="number" placeholder="Quantité par piéces" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Control type="number" placeholder="Prix" />
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
       <Form.Control placeholder="36" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="37" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="38" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="39" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="40" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="41" />
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
