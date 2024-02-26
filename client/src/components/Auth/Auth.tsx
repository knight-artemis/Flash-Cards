import React, { useState } from 'react';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import type { UserType } from '../../types';
import { useAppDispatch } from '../../redux/hooks';
import Actions from '../../redux/actions';

export default function Auth(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initValue: InputType = { login: '', email: '', password: '' };
  const [inputs, setInputs] = useState<InputType>(initValue);
  const [LogOrReg, setLogOrReg] = useState(true);

  type InputType = {
    login: string;
    email: string;
    password: string;
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const authUser = async (): Promise<void> => {
    axios
      .post<InputType, AxiosResponse<UserType>>(
        `${import.meta.env.VITE_URL}/user/${LogOrReg ? 'log' : 'reg'}`,
        inputs,
        { withCredentials: true },
      )
      .then((res) => dispatch(Actions.regLog(res.data)))
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>{LogOrReg ? 'Войти' : 'Зарегистрироваться'}</h1>
      <form>
      {LogOrReg ? (
        <>
        <input placeholder='Логин' onChange={changeHandler} type="text" name="login" value={inputs.login} />
        <input placeholder='Пароль' onChange={changeHandler} type="password" name="password" value={inputs.password} />
        </>
      ) : (
        <>
        <input placeholder='Логин' onChange={changeHandler} type="text" name="login" value={inputs.login} />
        <input placeholder='Почта' onChange={changeHandler} type="email" name="login" value={inputs.email} />
        <input placeholder='Пароль' onChange={changeHandler} type="password" name="password" value={inputs.password} />
        </>
      )}
        <button onClick={() => void authUser()} type="button">
          {LogOrReg ? 'Залогиниться' : 'Зарегистрироваться'}
        </button>
        <div className="check-div">
          <span>Хочу зарегистрироваться</span>
          <input
            id="check"
            name="check"
            type="checkbox"
            checked={!LogOrReg}
            onChange={() => setLogOrReg((prev) => !prev)}
          />
        </div>
      </form>
    </div>
  );
}
