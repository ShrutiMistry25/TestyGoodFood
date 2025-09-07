import React from "react";

// Footer component for displaying footer content
const Footer = () => {
  const currentDate = new Date(); // Current date
  const currentYear = currentDate.getFullYear(); // Current year

  return (
    <div className="footer">
     
      <h2>Created By <span className="heart">&hearts;</span> Shruti Mistry </h2>
    
      <h2>&copy; {currentYear} <span className="logo-name">TestyGoodFood</span></h2>
    </div>
  );
};

export default Footer; 
