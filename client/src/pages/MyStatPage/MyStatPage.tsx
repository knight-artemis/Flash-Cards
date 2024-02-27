import React from 'react';
import { useAppSelector } from '../../redux/hooks';

function MyStatPage(): JSX.Element {
  const user = useAppSelector((store) => store.userReducer);
  return (
    <div>
      <h3>Статистика пользователя {user.login}</h3>
    </div>
  );
}

export default MyStatPage;
