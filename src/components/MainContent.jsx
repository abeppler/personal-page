import { AboutContainer } from "./AboutContainer";
import { TechnologiesContainer } from "./TechnologiesContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
    </main>
  );
};

export default MainContent;
