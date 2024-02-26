import React, { useState } from "react";

import styles from "./Game.module.css";

export default function GamePage() {
  const themes = [
    {
      name: "История России",
      price: [200, 400, 600, 800, 1000],
    },
    {
      name: "Легенды эльбруса",
      price: [200, 400, 600, 800, 1000],
    },
    {
      name: "Игры",
      price: [200, 400, 600, 800, 1000],
    },
    {
      name: "Культура",
      price: [200, 400, 600, 800, 1000],
    },
    {
      name: "Путешествия",
      price: [200, 400, 600, 800, 1000],
    },
  ];

  return (
    <>
      <div className={styles.game}>
        <div>
          {themes &&
            themes.map((theme) => (
              <div className={styles.row} key={theme.name}>
                <h3 className={styles.question}>{theme.name}</h3>
                <div className={styles.row}>
                  {theme.price.map((price) => (
                    <button className={styles.price} key={price}>
                      {price}
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div>
          <h3>Здесь будет статистика игры</h3>
        </div>
      </div>
      <button className={styles.button} type="button">
        Завершить игру
      </button>
    </>
  );
}
