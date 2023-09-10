import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    };

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body).then(() => {
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel("");
      setContributedBy("");

      navigate(`/beers`);
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Beer</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={first_brewed}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers Tips
          </label>
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewers_tips}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level
          </label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuation_level}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributed_by}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create New Beer
        </button>
      </form>
    </div>
  );
}

export default NewBeerPage;
