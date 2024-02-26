import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>Header</h1>
      <div className="page">
        <HomePage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/lk" element={<LkPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/endgame" element={<EndPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
