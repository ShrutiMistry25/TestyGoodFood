import myProfile from "../assets/img/myProfile.jpeg";
import UserOffline from "./UserOffline";
import useOnline from "../Hooks/useOnline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// About component for displaying about content
const About = () => {

   // Check if user is online
 const isOnline = useOnline();

  // If user is offline, display UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br />
          <span>Tasty Good Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a <span>TestyGoodFood</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
      <div className="about-profile-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <div className="profile-user-card">
                <img
                  className="profile-user-img"
                  src={myProfile}
                />
                <p className="profile-user-bio">Full Stack Developer</p>
                <div className="social-media-container">
                  <a
                    href="https://in.linkedin.com/in/shruti-mistry-7b2663287"
                    title="Follow me on Linkedin"
                    className="icon-button linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i><FontAwesomeIcon icon={faLinkedinIn} title="Follow me on Linkedin" /></i>
                  </a>
                  <a
                    href="https://github.com/shrutimistry25"
                    title="Follow me on Github"
                    className="icon-button github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i><FontAwesomeIcon icon={faGithub} title="Follow me on Github" /></i>
                  </a>
                  <a
                    href="mailto:shrutimistry740@gmail.com"
                    title="Any Query! Mail me"
                    className="icon-button email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i><FontAwesomeIcon icon={faEnvelope} title="Any Query! Mail me" /></i>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About; // Exporting About component as default
