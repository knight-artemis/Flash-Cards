import React, { useState } from "react";

import styles from "./Game.module.css";

export default function GamePage() {
  const themes = [
    {
      title: "Животные",
      cards: [
        {
          themeId: 1,
          answer: "жеребец",
          question:
            "Какое животное является символом долголетия в китайской культуре?",
          points: 200,
        },
        {
          themeId: 1,
          answer: "гепард",
          question: "Как называется самое быстрое сухопутное животное?",
          points: 400,
        },
        {
          themeId: 1,
          answer: "лев",
          question: "Какой вид крупных кошачьих обычно охотится на слонов?",
          points: 600,
        },
        {
          themeId: 1,
          answer: "медведь",
          question: "Какое животное является национальным символом России??",
          points: 800,
        },
        {
          themeId: 1,
          answer: "песец",
          question: "Как называется наименьшая из кошачьих диких кошек?",
          points: 1000,
        },
      ],
    },
    {
      title: "Эльбрус",
      cards: [
        {
          themeId: 2,
          answer: "5642",
          question: "Какая высота Эльбруса, самой высокой горы в России?",
          points: 200,
        },
        {
          themeId: 2,
          answer: "кавказский хребет",
          question: "Какой хребет Кавказских гор проходит через Эльбрус?",
          points: 400,
        },
        {
          themeId: 2,
          answer: "восточный и западный",
          question: "Как называется северный и южный пик Эльбруса?",
          points: 600,
        },
        {
          themeId: 2,
          answer: "кабардино-балкария",
          question: "В каком регионе находится гора Эльбрус?",
          points: 800,
        },
        {
          themeId: 2,
          answer: "спящий вулкан",
          question:
            "Какой тип вулканического комплекса представляет собой Эльбрус?",
          points: 1000,
        },
      ],
    },
    {
      title: "История Руси",
      cards: [
        {
          themeId: 2,
          answer: "5642",
          question: "Какая высота Эльбруса, самой высокой горы в России?",
          points: 200,
        },
        {
          themeId: 2,
          answer: "кавказский хребет",
          question: "Какой хребет Кавказских гор проходит через Эльбрус?",
          points: 400,
        },
        {
          themeId: 2,
          answer: "восточный и западный",
          question: "Как называется северный и южный пик Эльбруса?",
          points: 600,
        },
        {
          themeId: 2,
          answer: "кабардино-балкария",
          question: "В каком регионе находится гора Эльбрус?",
          points: 800,
        },
        {
          themeId: 2,
          answer: "спящий вулкан",
          question:
            "Какой тип вулканического комплекса представляет собой Эльбрус?",
          points: 1000,
        },
      ],
    },
    {
      title: "Олег",
      cards: [
        {
          themeId: 2,
          answer: "5642",
          question: "Какая высота Эльбруса, самой высокой горы в России?",
          points: 200,
        },
        {
          themeId: 2,
          answer: "кавказский хребет",
          question: "Какой хребет Кавказских гор проходит через Эльбрус?",
          points: 400,
        },
        {
          themeId: 2,
          answer: "восточный и западный",
          question: "Как называется северный и южный пик Эльбруса?",
          points: 600,
        },
        {
          themeId: 2,
          answer: "кабардино-балкария",
          question: "В каком регионе находится гора Эльбрус?",
          points: 800,
        },
        {
          themeId: 2,
          answer: "спящий вулкан",
          question:
            "Какой тип вулканического комплекса представляет собой Эльбрус?",
          points: 1000,
        },
      ],
    },
    {
      title: "Буйволы",
      cards: [
        {
          themeId: 2,
          answer: "5642",
          question: "Какая высота Эльбруса, самой высокой горы в России?",
          points: 200,
        },
        {
          themeId: 2,
          answer: "кавказский хребет",
          question: "Какой хребет Кавказских гор проходит через Эльбрус?",
          points: 400,
        },
        {
          themeId: 2,
          answer: "восточный и западный",
          question: "Как называется северный и южный пик Эльбруса?",
          points: 600,
        },
        {
          themeId: 2,
          answer: "кабардино-балкария",
          question: "В каком регионе находится гора Эльбрус?",
          points: 800,
        },
        {
          themeId: 2,
          answer: "спящий вулкан",
          question:
            "Какой тип вулканического комплекса представляет собой Эльбрус?",
          points: 1000,
        },
      ],
    },
  ];

  const questionHandler = () => {
    console.log("Попали в кнопку");
  };

  return (
    <>
      <div className={styles.game}>
        <div className={styles.for_game}>
          {themes &&
            themes.map((theme) => (
              <div className={styles.row} key={theme.title}>
                <h3 className={styles.question}>{theme.title}</h3>
                <div className={styles.row}>
                  {theme.cards.map((price) => (
                    <button
                      onClick={questionHandler}
                      className={styles.price}
                      key={price.points}
                    >
                      {price.points}
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
