import React from "react";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { useAppSelector } from "../../redux/hooks";

export default function HomePage() {
  const user = useAppSelector((store) => store.userReducer);
  console.log(user);
  return (
    <div className="home-page">
      <h2>ДОБРО ПОЖАЛОВАТЬ НА НАШ САЙТ</h2>
      <h2>Перед началом зарегистрируйтесь или войдите!</h2>
      <div className={style.rulesContainer}>
        <h2>ПРАВИЛА ИГРЫ:</h2>
        <div className="onlyRules">
          <h4>1. Есть один игрок и не поверите, это-Вы!</h4>
          <h4>
            2. Есть 5 тем, каждая из которых содержит 5 вопросов разной
            сложности.
          </h4>
          <h4>
            3. Чем сложнее вопрос, тем больше очков вы получите за правильный
            ответ.
          </h4>
          <h4>
            4. Если вы ответили неверно, у игрока будет вычитаться половина
            стоимости данного вопроса.
          </h4>
          <h4>
            5. Ты можешь завершить игру не отвечая на все имеющиеся вопросы!
          </h4>
          <h4>6. Удачной игры!</h4>
        </div>
      </div>
      {user && user.userId > 0 ? (
        <Link to="/game">
          <button className={style.gameButton}>
            <b>Начать игру</b>
          </button>
        </Link>
      ) : (
        <>
            <Link to="/log">
              <button className={style.gameButton}>
                <b>Регистрация/Вход</b>
              </button>
            </Link>
        </>
      )}
    </div>
  );
}
