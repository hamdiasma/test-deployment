import React , {useState} from 'react'
import './Tabs.scss'; 
import {Form ,Button , Col , } from 'react-bootstrap';
import { useDispatch} from 'react-redux' ;
import {addArticle} from '../../JS/actions/articleActions'

import Uploaded from './Uploaded';



export default function Tshirt() {

    const dispatch = useDispatch();
    const addnewArticle = (formData)=>dispatch(addArticle(formData))

  
  const [form , setForm] = useState({
   // "postedByuserid":"" ,
    "code" :"" ,
    "XS" :"" , 
    "S" :"" ,
    "M" :"" , 
    "L" :"" ,
    "XL":"" ,
    "XXL" :"" ,
    "quantite" :"" ,
    "prix" :"" ,
    "couleur" :"" ,
    "description" : ""
  })
  const handelChange =(e)=>{
    setForm({...form , [e.target.name] : e.target.value})
  
  }
  const handelSubmit = (e)=> {
    e.preventDefault();
    addnewArticle(form)
  }
    return (

         <div>
         <h2>T-shirt</h2>
       <Form>
       <Form.Row>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control onChange={handelChange}  type="text" name="code" value={form.code} placeholder="Nom de l'article" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Control onChange={handelChange} type="number" name="quantite" value={form.quantite} placeholder="Quantité par piéces" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Control onChange={handelChange} type="number" name="prix" value={form.prix} placeholder="Prix" />
       </Form.Group>
       </Form.Row>
     
       <Form.Row>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="numero serie"  onChange={handelChange} value={form.description = "hello"} name="description"  />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="numero serie" />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="numero serie" onChange={handelChange}  />
       </Form.Group>
       </Form.Row>

       <Form.Row>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control  name="XS" placeholder="XS" value={form.XS}  onChange={handelChange} />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="S" name="S"  value={form.S}onChange={handelChange}  />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="M"  name="M"  value={form.M} onChange={handelChange} />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="L"  name="L" value={form.L} onChange={handelChange}  />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="XL" name="XL" value={form.XL} onChange={handelChange}  />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridAddress">
       <Form.Control placeholder="XXL" name="XXL" value={form.XXL} onChange={handelChange}  />
       </Form.Group>
    
       </Form.Row>
        
    
        <Uploaded/>
        
    
         
         
      
         

        
      
      


<Button variant="light" type="submit" 
onClick={handelSubmit}
>
  Ajouter
</Button>

</Form>
        </div>
    )
}
