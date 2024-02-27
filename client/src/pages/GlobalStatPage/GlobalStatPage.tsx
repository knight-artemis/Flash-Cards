import React from "react";
import GlobStatTable from "../../components/GlobStatTable/GlobStatTable";

export default function GlobalStatPage(): JSX.Element {
  return (
    <div>
      <h3>Статистика всех игроков</h3>
      <GlobStatTable />
    </div>
  );
}
