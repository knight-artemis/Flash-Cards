import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import LkPage from "./pages/LkPage/LkPage";
import GamePage from "./pages/GamePage/GamePage";
import EndGamePage from "./pages/EndGamePage/EndGamePage";
import GlobalStatPage from "./pages/GlobalStatPage/GlobalStatPage";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import axios from "axios";
import Actions from "./redux/actions";
import EditProfile from "./pages/EditProfile/EditProfile";
import MyStatPage from "./pages/MyStatPage/MyStatPage";

function App() {
  const dispatch = useAppDispatch();
  const game = useAppSelector((store) => store.gameReducer);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/auth/`, { withCredentials: true })
      .then((res) => dispatch(Actions.checkAuth(res.data)))
      .catch((err) => console.log(err));

    axios
      .get(`${import.meta.env.VITE_URL}/game/check`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.game);
        dispatch(Actions.setGame(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="main">
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="log" element={<Auth />} />
          <Route path="/lk" element={<LkPage />}>
            <Route path="myStat" element={<MyStatPage />} />
            <Route path="globalStat" element={<GlobalStatPage />} />
            <Route path="editProfile" element={<EditProfile />} />
          </Route>
          {/* <Route path="/auth" element={<AuthPage />} /> */}
          <Route path="/game" element={<GamePage />} />
          <Route path="/endgame/:gameId" element={<EndGamePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
