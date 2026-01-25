import { Container } from "react-bootstrap";
import "./App.css";
import Homepage from "./Component/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Play from "./Component/Play";
import CookieBanner from "./Component/CookieBanner";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/play/:id" element={<Play />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
