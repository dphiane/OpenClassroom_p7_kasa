import "../styles/banner.scss";
import banner from "../data/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner_img" src={banner} alt='paysage'></img>
      <div className="banner_text">Chez vous, partout et ailleurs</div>
    </div>
  );
};

export default Banner;
