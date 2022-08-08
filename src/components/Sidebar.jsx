import Avatar from "../img/me.jpg";
import InformationContainer from "./InformationContainer";
import SocialMedia from "./SocialMedia";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Anderson Beppler" />
      <p className="title">Fullstack Developer</p>
      <SocialMedia />
      <InformationContainer />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
