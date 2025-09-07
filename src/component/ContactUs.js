import { useState } from "react";
import UserOffline from "./UserOffline";
import useOnline from "../Hooks/useOnline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ContactUs component for displaying contact form
const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false); // State for displaying message after submission

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    notify();
  };

  // Function to display toast notification
  const notify = () => toast("Message sent to admin!", {
    style: {
      marginTop : "100px"
    }
  });

  // Check if user is online
  const isOnline = useOnline();

  // If user is offline, display UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  return (
    <>
    <ToastContainer />
    <div className="contact-container">
      <div className="contact">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your Message here..." required></textarea>
          <button type="submit">Submit</button>
          {/* Displaying message after submission */}
          {messageSent && (
            <span>
              Thanks for contacting TestyGoodFood, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs; // Exporting ContactUs component as default
