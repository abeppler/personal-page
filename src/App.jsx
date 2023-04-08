import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/components/app.sass";

import Home from './components/Home';
import Linktree from './components/linktree/Linktree';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linktree" element={<Linktree />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
