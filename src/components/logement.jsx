import { useParams } from "react-router-dom";
import { data } from "../data/logements.json";

const Logement = () => {
    const {id} = useParams();
    console.log(id)
    const queryString=window.location.search
    console.log(queryString)
  return (
    <div className="logement">
      <img src="" alt="logement"></img>
      <div>
        <p className="title"></p>
        <p className="location"></p>
        <div>
          <button className="tag"></button>
        </div>
        <p className="nom"></p>
        <img className="profile" alt="profil"></img>
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