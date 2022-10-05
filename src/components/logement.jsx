import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Collapsible from "./collapsible";
import "../styles/logement.scss";

const Logement = () => {
  const { id } = useParams();
  console.log(id);
  const appartement = data.find((obj) => {
    return obj.id === id;
  });
  return (
    <div className="logement">
      <img src={appartement.cover} className="cover" alt="logement"></img>
      <div className="bloc">
        <p className="title">{appartement.title}</p>
        <p className="location">{appartement.location}</p>
        <div>
          <button className="tag">{appartement.tags}</button>
        </div>
        <p className="nom">{appartement.host.name}</p>
        <img
          className="profile"
          alt="profil"
          src={appartement.host.picture}
        ></img>
        <div className="stars">{appartement.rating}</div>
      </div>
      <div className="bloc_2">
        <Collapsible label="Description">
          <p className="descrition">{appartement.description}</p>
        </Collapsible>
        <Collapsible label="Equipments">
          <ul className="equipement">
            {appartement.equipments.map((e, index) => (
              <li key={index} className="list">{e}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};
export default Logement;
