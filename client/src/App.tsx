import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage";
import EndGamePage from "./pages/EndGamePage/EndGamePage";

function App() {
  return (
    <div className="main">
      <h1>Header</h1>
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="log" element={<Auth />} />
          {/* <Route path="/auth" element={<AuthPage />} /> */}
          <Route path="/game" element={<GamePage />} />
          {/* <Route path="/lk" element={<LkPage />} /> */}
          {/* <Route path="/game" element={<GamePage />} /> */}
          <Route path="/endgame" element={<EndGamePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
