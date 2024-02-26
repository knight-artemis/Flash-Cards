import React from "react";
import styles from "./LkPage.module.css";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import MyStatPage from "../MyStatPage/MyStatPage";
import GlobalStatPage from "../GlobalStatPage/GlobalStatPage";

export default function LkPage() {
  const user = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const handlerMyStat = () => {
    navigate("/lk/myStat");
  };
  const handlerGlobal = () => {
    navigate("/lk/globalStat");
  };
  return (
    <div className={styles.page}>
      <div className={styles.sideBlock}>
        <button onClick={handlerMyStat} type="button">
          Моя статистика
        </button>
        <button onClick={handlerGlobal} type="button">
          Глобальная статистика
        </button>
        <button type="button">Редактировать профиль</button>
      </div>
      <div className={styles.mainBlock}>
        <MyStatPage />
        <GlobalStatPage />
      </div>
    </div>
  );
}
