import React, { useEffect } from "react";
import axios from "axios";
import GlobStatLine from "../GlobStatLine/GlobStatLine";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Actions from "../../redux/actions";

export default function GlobStatTable() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/stat/globalStat`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(Actions.getAllStat(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const allGames = useAppSelector((store) => store.globalStatReducer);
  console.log("🚀 ~ GlobStatTable ~ allGames:", allGames);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th" scope="col">
            Номер игры
          </th>
          <th className="th" scope="col">
            Игрок
          </th>
          <th className="th" scope="col">
            Количество очков
          </th>
          <th className="th" scope="col">
            Статус игры
          </th>
        </tr>
      </thead>
      <tbody>
        {allGames.map((el, i) => (
          <GlobStatLine key={el.id} game={el} index={i} />
        ))}
      </tbody>
    </table>
  );
}
