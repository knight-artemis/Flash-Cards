import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { UserType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Actions from '../../redux/actions';
import styles from './Navbar.module.css'

export default function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userReducer);

  const logoutHandler = async (): Promise<void> => {
    axios
      .get<UserType>(`${import.meta.env.VITE_URL}/auth/logout`, { withCredentials: true })
      .then((res) => {
        dispatch(Actions.logout(res.data));
        console.log('>>>>>>>> logout >>>>>>>>>>>', res.data);
        navigate('/');
      })
      .catch((err) => console.log('ERROROROROORR >> > < > <> >< ', err));
  };

  useEffect(() => {
    console.log(user);
  }, 
  [user])
 
  return (
    <div className={styles.navbar}>
      <button>
      <Link to="/">На главную</Link>
      </button>
      {user.userId ? (
        <>
        <button>
          Личный кабинет {user.login}
        </button>
        <button onClick={() => void logoutHandler()} type="button">
          Выйти
        </button>
        </>
      ) : (
        <Link to="/log">
          <button type="button">Войти</button>
        </Link>
      )}
    </div>
  );
}
