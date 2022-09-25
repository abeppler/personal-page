import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import "./styles/components/app.sass";

function App() {
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

export default App;
