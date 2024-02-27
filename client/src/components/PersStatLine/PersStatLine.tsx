import React from "react";

export default function PersStatLine({ game, index, key }): JSX.Element {
  return (
    <tr id={game.id} key={key} className="tableLine">
      <td>{index}</td>
      <td>{game.score}</td>
      <td>{game.isEnded}</td>
    </tr>
  );
}
