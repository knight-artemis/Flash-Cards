import React from "react";

export default function PersStatLine({ game, index, key }): JSX.Element {
  return (
    <tr id={game.id} key={key} className="tableLine">
      <td>{index+1}</td>
      <td>{game.score}</td>
      <td>{game.isEnded ? "Завершена" : "Не завершена"}</td>
    </tr>
  );
}
