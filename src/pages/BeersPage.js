import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import NavigationMenu from '../components/NavigatorMenu';

function BeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('beers:', response.data);
        setBeers(response.data);
      });
  }, []);

  return (
    <div><NavigationMenu />
    <div className="container">
      <h2 className="text-center my-4">Beers</h2>
      <div className="row">
        {beers.map((beer) => (
          <div key={beer._id} className="col-md-4 mb-5">
          <NavLink to={`/beers/${beer._id}`}>
              <div className="card">
                <div className="card-body text-center">
                  <img src={beer.image_url} alt={beer.name} className="card-img-top mb-3" />
                  <h3 className="card-title">{beer.name}</h3>
                  <h4 className="card-subtitle mb-2 text-muted">{beer.tagline}</h4>
                  <p className="card-text">
                    <strong>Created by:</strong> {beer.contributed_by}
                  </p>
                </div>
              </div>
            </NavLink>
          </div> 
        ))}
      </div>
    </div>
    </div>
  );
}

export default BeersPage;
