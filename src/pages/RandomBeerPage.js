import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";

function RandomBeerPage() {

    const [beer, setBeer] = useState({});

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            console.log(response.data);
            setBeer(response.data);
          });
      }, []);
    
    

  return (
    
    <div>
    <HomePage/>
    
    <h2 className="title-random-beer" >Random Beer</h2>
    <div className="container-beer">
    
    
        <div>
            <img src={beer.image_url} alt={beer.name} className="card-img-top" /> 
        </div>
         <div className="container-beer-text" >
         <h2 className="beer-name">{beer.name}</h2>
              <h4><strong>Tagline:</strong> {beer.tagline}</h4>
              <h4><strong>ttenuation Level:</strong>A {beer.attenuation_level}</h4>
              <h4><strong>Description:</strong> {beer.description}</h4>
              <h4><strong>Contributed by:</strong> {beer.contributed_by}</h4>
         </div>
              
            </div> 
      </div>
  );
}

export default RandomBeerPage;