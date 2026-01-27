import { Container } from "react-bootstrap";
import "./App.css";
import Homepage from "./Component/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Play from "./Component/Play";
import CookieBanner from "./Component/CookieBanner";
import PrivacyPolicy from "./Component/PrivacyPolicy";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/play/:id" element={<Play />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
