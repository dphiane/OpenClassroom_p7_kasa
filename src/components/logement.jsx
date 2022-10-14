import { useParams ,Navigate} from "react-router-dom";
import data from "../data/logements.json";
import Collapsible from "./collapsible";
import Slider from "./Carousel";
import Stars from "./stars";
import "../styles/layout/logement.scss";
import NotFound from "./NotFound";


// fonction d'import du logement en fonction id, si existe pas redirection 404
//imbrication des blocs: carousel , les dropdown, les étoiles 
const Logement = () => {
  const { id } = useParams();
  const appartement = data.find((obj) => {
    return obj.id === id;
  });
  if (!appartement) {
    return <Navigate to="/404"/>
  } else {
    return (
      <div className="logement">
        {<Slider slides={appartement.pictures} />}
        <div className="bloc">
          <div className="bloc_info">
            <h1 className="title_logement">{appartement.title}</h1>
            <p className="location">{appartement.location}</p>

            <div>
              {appartement.tags.map((e, index) => (
                <button className="tag" key={index}>
                  {e}
                </button>
              ))}
            </div>
          </div>
          <div className="proprietaire">
            <div className="proprietaire_info">
              <p className="proprietaire_nom">{appartement.host.name}</p>
              <img
                className="photo_profile"
                alt="profil"
                src={appartement.host.picture}
              ></img>
            </div>
            <div className="proprietaire_note">
              <Stars scaleRating={appartement.rating}></Stars>
            </div>
          </div>
        </div>
        <div className="bloc_description_equipement">
          <div className="bloc_description">
            <Collapsible label="Description">
              <p className="description">{appartement.description}</p>
            </Collapsible>
          </div>
          <div className="bloc_equipement">
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
      </div>
    );
  }
};
export default Logement;
