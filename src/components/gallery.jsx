import data from "../data/logements.json";
import { Link } from "react-router-dom";
import "../styles/layout/gallery.scss";

// composant pour afficher la gallery des logements
const Gallery = () => {
  return (
    <section className="gallery">
      {data.map((data) => (
        <Link to={"logement/" + data.id} key={data.id}>
          <div className="card">
            <img className="card_img" src={data.cover} alt="hébergement"></img>
            <p className="title">{data.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};
export default Gallery;
