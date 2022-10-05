import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Collapsible from "./collapsible";
import "../styles/logement.scss";
import Slider from "./Carousel";


const Logement = () => {
  const { id } = useParams();

  const appartement = data.find((obj) => {
    return obj.id === id;
  });
  return (
    <div className="logement">
      {<Slider slides={appartement.pictures}/>} 
      <div className="bloc">
        <div className="bloc_info">
          <h1 className="title_logement">{appartement.title}</h1>
          <h2 className="location">{appartement.location}</h2>
          <div>
            {appartement.tags.map((e, index) => (
              <button className="tag" key={index}>
                {e}
              </button>
            ))}
          </div>
        </div>
        <div className="bloc_owner">
          <p className="nom_owner">{appartement.host.name}</p>
          <img
            className="profile"
            alt="profil"
            src={appartement.host.picture}
          ></img>
          </div>
          <div className="stars">{appartement.rating}</div>
        
      </div>
      <div className="bloc_2">
        <Collapsible label="Description">
          <p className="description">{appartement.description}</p>
        </Collapsible>
        <Collapsible label="Equipements">
          <ul className="equipement">
            {appartement.equipments.map((e, index) => (
              <li key={index} className="list">
                {e}
              </li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};
export default Logement;
