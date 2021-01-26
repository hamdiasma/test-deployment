import React from 'react';
import './Entreprise.scss';
import {Row , Col , Navbar } from 'react-bootstrap'
import Cards from './Cards/Cards'
import Deconnexion from './Deconnexion';
import Search from '../Home/Search';

import {Link} from 'react-router-dom'
export default function Entreprise() {
    return (
        <div >
           <Navbar bg="light" variant="light">
             <Row>
               <Col>
           <Search/>
           </Col>
           <Col>
           <Deconnexion/>       
           </Col>
           </Row>
           </Navbar> 
           <header className="header" role="banner">
 
        <h1 className="logo">
          <a href="m">nom <span>d'Entreprise</span></a>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li><Link to ='/Profile/Entreprise/Tabs/TabsFemme'>Femme</Link></li>
              <li><Link to ='/Profile/Entreprise/Tabs/TabsHomme'>Hommes</Link></li>
              <li><Link to ='/Profile/Entreprise/Tabs/TabsEnfant'>Enfants</Link></li>
            </ul>
          </nav>
          <ul className="social-links list-inline unstyled list-hover-slide">
            <li><a href="m">Twitter</a></li>
            <li><a href="m">Google+</a></li>
            <li><a href="m">Facebook</a></li>
            <li><a href="m">instagram</a></li>
          </ul>
        </div>
        
  
    
      </header>  
           
      <div className="back">
      {/* <Cards/> */}
    
      </div> 
    

      
        </div>
    )
}
