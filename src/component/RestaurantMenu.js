import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  RESTAURANT_IMG_CDN_URL,
  MENU_ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  SWIGGY_MENU_API_URL,
} from "../utils/Contant";
import { ShimmerMenu } from "./Shimmer";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import useOnline from "../Hooks/useOnline";
import UserOffline from "./UserOffline";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component for displaying restaurant menu
const RestaurantMenu = () => {
  // Get restaurant ID from URL parameters
  const { resId } = useParams();
  // Fetch restaurant and menu items data
  const [restaurant ,menu] = useRestaurantMenu(
    resId,
    SWIGGY_MENU_API_URL,
    MENU_ITEM_TYPE_KEY
  );


  const [activeCategory, setActiveCategory] = useState(null);

  // Handler to change the active category
  const toggleCategory = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null); // If the same category is clicked, close it
    } else {
      setActiveCategory(categoryId); // Otherwise, open the clicked category
    }
  };

  const isOnline = useOnline();

  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
    notify();
  }

   // Function to display toast notification
   const notify = () => toast("Item added to cart!", {
    style: {
      marginTop : "100px"
    }
  });

  useEffect(() => {
    // Save cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(menu));
}, [menu]);

  // Display loading shimmer if restaurant data is not available
  if (!restaurant) {
    return <ShimmerMenu />;
  } else {
    // Render restaurant menu
    return (
      <>
      <ToastContainer />
      <div className="restaurant-menu">
        {/* Display restaurant summary */}
        <div className="restaurant-summary">
          <img
            className="restaurant-img"
            src={RESTAURANT_IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="restaurant-summary-details">
            <h2 className="restaurant-title">{restaurant?.name}</h2>
            <p className="restaurant-tags">
              {restaurant?.cuisines?.join(", ")}
            </p>
            <div className="restaurant-details">
              {/* Display restaurant rating with color coding */}
              <div
                className="restaurant-rating"
                style={
                  restaurant?.avgRating < 4.3
                    ? { backgroundColor: "red" }
                    : restaurant?.avgRating === "--"
                    ? { backgroundColor: "white", color: "black" }
                    : { color: "white" }
                }
              >
                <FontAwesomeIcon icon={faStar} className="star" />
                <span>{restaurant?.avgRating}</span>
              </div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.sla?.slaString}</div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.totalRatingsString}</div>
            </div>
          </div>
        </div>

        {/* Display menu items */}
        <div className="restaurant-menu-content">
          {menu.map((category, index) => (
            <div className="menu-items-container" key={index}>
              <div
                className="menu-title-wrap"
                onClick={() => toggleCategory(category?.title)}
              >
                <h4 className="menu-title">
                  {category?.title} ({category?.itemCards?.length})
                </h4>
                <FontAwesomeIcon
                  icon={activeCategory === category?.title ? faChevronUp : faChevronDown}
                  className="arrow"
                />
              </div>
              {activeCategory === category?.title && (
                <div className="menu-items-list">
                  {category.itemCards.map((item, itemIndex) => (
                    <div
                      className="menu-item"
                      key={item?.card?.info?.id || itemIndex}
                    >
                      <div className="menu-item-details">
                        <h3 className="item-title">{item?.card?.info?.name}</h3>
                        <p className="item-cost">
                          {item?.card?.info?.price > 0
                            ? new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                              }).format(item?.card?.info?.price / 100)
                            : " "}
                        </p>
                        <p className="item-rating">
                          Rating :-{" "}
                          {item?.card?.info?.ratings?.aggregatedRating?.rating}
                        </p>
                        <p className="item-desc">
                          {item?.card?.info?.description}
                        </p>
                      </div>
                      <div className="menu-img-wrapper">
                        {item?.card?.info?.imageId && (
                          <img
                            className="menu-item-img"
                            src={
                              MENU_ITEM_IMG_CDN_URL + item?.card?.info?.imageId
                            }
                            alt={item?.card?.info?.name}
                          />
                        )}
                        <button className="add-btn" onClick={ () => addFoodItem(item?.card?.info)}> ADD +</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
};

export default RestaurantMenu;
