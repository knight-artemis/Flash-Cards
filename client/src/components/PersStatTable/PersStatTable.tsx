import React, { useEffect } from "react";
import axios from "axios";
import PersStatLine from "../PersStatLine/PersStatLine";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Actions from "../../redux/actions";

export default function PersStatTable() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/stat/personalStat`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(Actions.getMyStat(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const myGames = useAppSelector((store) => store.statReducer);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th" scope="col">
            Номер игры
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
        {myGames.map((el, i) => (
          <PersStatLine key={el.id} game={el} index={i} />
        ))}
      </tbody>
    </table>
  );
}
