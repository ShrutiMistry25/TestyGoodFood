import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import useOnline from "../Hooks/useOnline";
import UserOffline from "./UserOffline";
import useRestaurant from "../Hooks/useRestaurant";
import { filterRestaurants } from "../utils/Helper";
import { SWIGGY_RESTAURANT_API_URL } from "../utils/Contant";

// Body component for displaying restaurant list and search functionality
const Body = () => {
  // State for search text input
  const [searchText, setSearchText] = useState("");

 

  // Fetching restaurants using custom hook
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant(SWIGGY_RESTAURANT_API_URL);

 // Check if user is online
 const isOnline = useOnline();
 
  // If user is offline, display UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  return (
    <>
      {/* Search bar */}
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Enter the Food Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Filter restaurants based on search text
            const data = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {/* Restaurant list */}
      <div className="restaurant-list">
        {allRestaurants?.length === 0 ? (
          // Display shimmer loading effect if no restaurants are loaded yet
          <>
              <Shimmer />
          </>
        ) : filteredRestaurants?.length === 0 ? (
          // Display message if no restaurants match the filter
          <h1>No restaurants match your filter!</h1>
        ) : (
          // Display filtered restaurants
          filteredRestaurants?.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
              className="link"
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
