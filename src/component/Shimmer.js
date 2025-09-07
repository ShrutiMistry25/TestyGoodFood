// Component for rendering a shimmer effect for a single food item card
export const Shimmer = () => {
  // Generating an array of indices for shimmer items
  const shimmerItems = Array.from({ length: 20 }, (_, index) => index);

  return (
    <>
      {shimmerItems.map((index) => (
        <div className="card shimmer" key={index}>
          <div className="food-image shimmer"></div>
          <div className="content">
            <div className="food-name-shimmer shimmer"></div>
            <div className="food-avg-shimmer shimmer"></div>
            <div className="food-min-shimmer shimmer"></div>
            <div className="food-cuisines-shimmer shimmer"></div>
            <div className="food-area-shimmer shimmer"></div>
          </div>
        </div>
      ))}
    </>
  );
};

// Component for rendering a shimmer effect for a restaurant menu
export const ShimmerMenu = () => {
  // Generating an array of indices for shimmer items
  const shimmerMenuItems = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="restaurant-menu">
      <div className="shimmer-restaurant-summary">
        <div className="shimmer-restaurant-img"></div>
        <div className="shimmer-restaurant-summary-details">
          <div className="shimmer-restaurant-title"></div>
          <div className="shimmer-restaurant-tags"></div>
          <div className="shimmer-restaurant-details">
            <div className="shimmer-restaurant-rating"></div>
            <div className="shimmer-restaurant-sla"></div>
            <div className="shimmer-restaurant-cost-for-two"></div>
          </div>
        </div>
      </div>

      {shimmerMenuItems.map((index) => (
        <div className="shimmer-restaurant-menu-content">
          <div className="shimmer-menu-items-container"></div>
        </div>
      ))}
    </div>
  );
};
