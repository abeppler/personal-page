import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../styles/components/app.sass";

function Home() {
  return (
    <>
      <Navbar />
      <div id="portfolio">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default Home;
