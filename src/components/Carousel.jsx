import { useState } from "react";
import { ReactComponent as Prev } from "../data/icon/Vectorleft.svg";
import { ReactComponent as Next } from "../data/icon/Vectorright.svg";
import "../styles/components/carousel.scss";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
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
                <p className="index">
                  {current + 1}/{slides.length}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
