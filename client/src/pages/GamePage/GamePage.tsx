import React, { useEffect, useState } from "react";

import styles from "./Game.module.css";
import Modal from "../../components/Modal/Modal";
import axios from "axios";

export default function GamePage() {
  const [themes, setThemes] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/game`)
      .then((res) => setThemes(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(themes);

  const [modalActive, setModalActive] = useState(false);

  const [card, setCard] = useState(null);

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} card={card} />
      <div className={styles.game}>
        <div className={styles.for_game}>
          {themes?.map((el) => (
            <div className={styles.row} key={el.id}>
              <h3 className={styles.question}>{el.title}</h3>
              <div className={styles.row}>
                {el.Cards.toReversed().map((card) => (
                  <button
                    onClick={() => {
                      setModalActive(true);
                      setCard(card);
                    }}
                    className={styles.price}
                    key={card.points}
                  >
                    {card.points}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.state}>
          <h3>статистика игры : 2000 </h3>
        </div>
      </div>
      <button className={styles.button} type="button">
        Завершить игру
      </button>
    </>
  );
}
