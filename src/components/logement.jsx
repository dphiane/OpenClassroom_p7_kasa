import { useParams } from "react-router-dom";
import { data } from "../data/logements.json";

const Logement = () => {
    const {id} = useParams();
    console.log(id)
  return (
    <div className="logement">
      <img src="" alt="photo du logement"></img>
      <div>
        <h1 className="title"></h1>
        <p className="location"></p>
        <div>
          <button className="tag"></button>
        </div>
        <p className="nom"></p>
        <img className="profile" alt="photo de profil"></img>
        <div className="stars"></div>
      </div>
      <div>
        <p className="descrition"></p>
        <p className="equipement"></p>
      </div>
    </div>
  );
};
export default Logement