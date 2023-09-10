import React from 'react';
import { Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import homeIcon from '../assets/home.png' 



function NavigationBar() {
    return (
      <div className='container-menu'>
        <Navbar className='nav-bar' bg="primary">
            <nav className="mx-auto">
              <NavLink to="/">
                <img className='home-icon' src={homeIcon} alt='homeicon'></img>
              </NavLink>
            </nav> 
        </Navbar>
      </div>
       
    );
  }
  
  export default NavigationBar;
  