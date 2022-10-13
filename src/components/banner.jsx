import "../styles/layout/banner.scss";
import banner from "../data/assets/banner.png";

//composant Bannière
const Banner = () => {
  return (
    <div className="banner">
      <img className="banner_img" src={banner} alt="paysage"></img>
      <div className="banner_text">
        Chez vous, <span className="text_break">partout et ailleurs</span>
      </div>
    </div>
  );
};

export default Banner;
