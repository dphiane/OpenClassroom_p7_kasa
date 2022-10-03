import "../styles/banner.scss";
import banner from "../data/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner" src={banner} alt="paysage nature"></img>
      <p className="banner_text">Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;
