import { usePDF } from "@react-pdf/renderer";

import Resume from "./resume/index";
import Avatar from "../img/me.jpg";
import InformationContainer from "./InformationContainer";
import SocialMedia from "./SocialMedia";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const [instance] = usePDF({ document: Resume });

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Anderson Beppler" />
      <p className="title">Fullstack Developer</p>
      <SocialMedia />
      <InformationContainer />
      <a
        href={instance.url}
        download="anderson-beppler-pt-br.pdf"
        className={instance.loading ? "btn disabled-link" : "btn"}
      >
        {instance.loading ? "Renderizando..." : "Download Currículo"}
      </a>
    </aside>
  );
};

export default Sidebar;
