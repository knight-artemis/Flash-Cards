import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/lk" element={<LkPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/endgame" element={<EndPage />} />
      </Routes>
    </div>
  );
}

export default App;
