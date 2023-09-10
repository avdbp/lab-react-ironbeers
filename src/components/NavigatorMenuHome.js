import React from 'react';
import { NavLink } from "react-router-dom";
import beersPagePic from '../assets/beers.png'
import randomBeerPic from '../assets/random-beer.png'
import newBeerPic from '../assets/new-beer.png'


function NavigationMenuHome() {
    return (
      <div className='container-menu'>
        <div className='beers-pages' >
        <NavLink to="/">
        <div className='beer-div'>
            <img className='beers-pic' src={beersPagePic} alt='beers'></img>
            <h2 className='beers-title' >All Beers</h2>
            <p className='beers-text'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non providentAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
          </div>
        </NavLink>

        <NavLink to="/random">
        <div className='beer-div'>
            <img className='beers-pic' src={randomBeerPic} alt='beers'></img>
            <h2 className='beers-title' >Random Beer</h2>
            <p className='beers-text'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non providentAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non providentAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
          </div>
        </NavLink>

        <NavLink to="/new">
          <div className='beer-div'>
            <img className='beers-pic' src={newBeerPic} alt='beers'></img>
            <h2 className='beers-title' >New Beer</h2>
            <p className='beers-text'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non providentAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."</p>
          </div>
        </NavLink>
        </div>
       
      </div>
    );
  }
  
  export default NavigationMenuHome;
  