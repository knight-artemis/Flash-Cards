import React from "react";
import styles from "./LkPage.module.css";
import { useAppSelector } from "../../redux/hooks";
import { Outlet, useNavigate } from "react-router-dom";
import MyStatPage from "../MyStatPage/MyStatPage";
import GlobalStatPage from "../GlobalStatPage/GlobalStatPage";

export default function LkPage() {
  const navigate = useNavigate();
  const handlerMyStat = () => {
    navigate("/lk/myStat");
  };
  const handlerGlobal = () => {
    navigate("/lk/globalStat");
  };
  const handlerEditProfile = () => {
    navigate("/lk/editProfile");
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
        <button onClick={handlerEditProfile} type="button">
          Редактировать профиль
        </button>
      </div>
      <div className={styles.mainBlock}>
        <Outlet />
      </div>
    </div>
  );
}
