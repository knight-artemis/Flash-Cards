import React from 'react'

export default function PersStatLine(game, index) {
  return (
    <tr id={game.id} className="tableLine">
    <td>{index}</td>
    <td>{game.score}</td>
    <td>{game.isEnded}</td>
  </tr>
  )
}
