import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./EndGamePage.module.css";

export default function EndGamePage() {
  const [points, setPoints] = useState(0);
  const { gameId } = useParams()

  useEffect(() => {
    const res = axios
      .get(`${import.meta.env.VITE_URL}/endGame/${gameId}`, { withCredentials: true })
      .then((result) => {
        setPoints(result.data.game.score)
        console.log(result.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.endGamePage}>
      <div className={styles.windowContainer}>
        <div className={styles.windowEndGame}>
          <h3 className="endGameTitle">Текущая статистика по игре:</h3>
          <p className="points">Points: {points}</p>
          <Link to="/">
            <button className={styles.endButton}>На главную</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
