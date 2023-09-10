import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationMenu from "../components/NavigatorMenu";

function BeerDetailsPage() {
  const [beer, setBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      });
  }, [id]);



  return (
    <div>
     <NavigationMenu/>
      <div className="container-beer">
        <div>
            <img src={beer.image_url} alt={beer.name} className="card-img-top" /> 
        </div>
         <div className="container-beer-text" >
         <h2 className="beer-name">{beer.name}</h2>
              <h4><strong>Tagline:</strong> {beer.tagline}</h4>
              <h4><strong>Attenuation Level:</strong> {beer.attenuation_level}</h4>
              <h4><strong>Description:</strong> {beer.description}</h4>
              <h4><strong>Contributed by:</strong> {beer.contributed_by}</h4>
         </div>        
      </div> 
    </div>  
  );
}

export default BeerDetailsPage;
