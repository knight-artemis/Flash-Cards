import React from "react";

export default function GlobStatLine({ game, index, key }): JSX.Element {
  // console.log("game.User.login", game.User);

  return (
    <tr id={game.id} key={key} className="tableLine">
      <td>{index + 1}</td>
      <td>{game.User?.login}</td>
      <td>{game.score}</td>
      <td>{game.isEnded ? "Завершена" : "Не завершена"}</td>
    </tr>
  );
}
