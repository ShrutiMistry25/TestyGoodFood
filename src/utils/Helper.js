
//Filter restaurants based on search text.

export const filterRestaurants = (searchText, restaurants) => {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestaurants;
};
