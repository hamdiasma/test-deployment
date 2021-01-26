import React from 'react';
import './Tabs.scss'; 
import Jeans from './Jeans'
import Chaussure from './Chaussure'
import Tshirt from './Tshirt'

export default function Tabs() {
    return (
        <div>
        <div className="tabbed">
     
        <input type="radio" name="tabs" id="tab-nav-1" defaultChecked />       
        <label htmlFor="tab-nav-1">T-shirt</label>
        <input type="radio" name="tabs" id="tab-nav-2" />
        <label htmlFor="tab-nav-2">Jeans</label>
        <input type="radio" name="tabs" id="tab-nav-3" />
        <label htmlFor="tab-nav-3">Chaussure</label>
        <div className="tabs">
          <div>
           <Tshirt/>
       </div>
       <div>
          <Jeans/>
      </div>
      <div>
          <Chaussure/>
      </div>
        </div>
      </div>
        </div>
    )
}
