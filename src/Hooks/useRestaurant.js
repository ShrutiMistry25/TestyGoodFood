// Custom hook for fetching and managing restaurant data from an API
import { useEffect, useState } from "react";

const useRestaurant = (API_URL) => {
  // State variables for storing all restaurants and filtered restaurants
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Fetch restaurant data from the provided API URL
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        const json = await response.json();
        
        // Extract Swiggy restaurant data from the JSON response
        const resData = await checkJsonData(json);

        // Update state variables with the fetched data
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error); // Log error to console
    }
  }

  // Function to extract Swiggy restaurant data from JSON response
  async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants]; // Return restaurant data and setter function for filtered restaurants
};

export default useRestaurant;
