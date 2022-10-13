import { ReactComponent as GrayStars } from "../data/icon/gray_stars.svg";
import { ReactComponent as PinkStars } from "../data/icon/stars.svg";
import "../styles/components/stars.scss";

//fonction ajout étoiles rose via logement.json + étoiles grise
const Stars = (props) => {
  const scaleRating = props.scaleRating;
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="stars_container">
      {range.map((rangeElement) =>
        scaleRating >= rangeElement ? (
          <span key={rangeElement}>
            <PinkStars className="stars"></PinkStars>
          </span>
        ) : (
          <span key={rangeElement}>
            <GrayStars className="stars"></GrayStars>
          </span>
        )
      )}
    </div>
  );
};
export default Stars;
