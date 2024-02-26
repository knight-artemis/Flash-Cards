import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EndGamePage.module.css";

export default function EndGamePage() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const res = axios
      .get("http://localhost:3000/api/endGame")
      .then((result) => setPoints(result.data.points))
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
