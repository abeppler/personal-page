import { PDFDownloadLink } from "@react-pdf/renderer";
import MyResume from "./MyResume";

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
      {/* <a href="/src/assets/anderson-beppler-cv-pt.pdf" className="btn">
        Download Currículo
      </a> */}
      <PDFDownloadLink document={<MyResume />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </aside>
  );
};

export default Sidebar;
