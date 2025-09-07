import { RESTAURANT_IMG_CDN_URL } from "../utils/Contant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Component for rendering restaurant card.
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
  sla,
}) => {
  return (
    <div className="card">
      <img className="food-image" src={RESTAURANT_IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h3 className="food-name">{name}</h3>
      <span className="food-avg-min">
        <h4
          style={avgRating < 4.3 ? { backgroundColor: "red" } : { color: "white" }}
          className="food-avg"
        >
          <FontAwesomeIcon icon={faStar} className="star" /> {avgRating}
        </h4>
        <h4 className="food-min">{sla.slaString}</h4>
      </span>
      <h4 className="food-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="food-area">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
