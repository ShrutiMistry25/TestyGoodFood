import ErrorImage from "../assets/img/404.jpg";
import { useRouteError, Link } from "react-router-dom";

// PageNotFound component displays when a route is not found
const PageNotFound = () => {
  // Using useRouteError to get error data
  const err = useRouteError();

  return (
    // Rendering the error page with image, message, error data, and link back to home
    <div className="error-page">
      <img src={ErrorImage} alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      
      <h3 className="error-data">{err.data}</h3>
  
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default PageNotFound;
