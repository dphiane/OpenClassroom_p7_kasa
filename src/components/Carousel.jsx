import { useState } from "react";
import { ReactComponent as Prev } from "../data/icon/Vectorleft.svg";
import { ReactComponent as Next } from "../data/icon/Vectorright.svg";
import "../styles/components/carousel.scss";


//composant pour le carrousel et imbrication des fonctions précédent et suivant + affichage nombre de photo
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  //fonction affiche ou non les contrôles du carousel
  function showHide(props) {
    if (length > 1) {
      return props;
    } else {
      return null;
    }
  }
  return (
    <div className="img_container">
      {showHide(<Prev className="prev" onClick={prevSlide} />)}
      {showHide(<Next className="next" onClick={nextSlide} />)}
      {slides.map((slide, index) => {
        return (
          <div className="carousel_container" key={index}>
            {index === current && (
              <div className="carousel_inner">
                <img className="img_slide" src={slide} alt="logement"></img>
                {showHide(
                  <p className="index">
                    {current + 1}/{slides.length}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
