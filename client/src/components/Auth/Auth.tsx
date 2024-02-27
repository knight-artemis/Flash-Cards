import { useEffect, useState } from 'react';
import axios from 'axios';
import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import Actions from '../../redux/actions';
import styles from './Auth.module.css';
import Switch from '../Switch/Switch';

export default function Auth(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initValue: InputType = { login: '', email: '', password: '' };
  const [inputs, setInputs] = useState<InputType>(initValue);
  const [LogOrReg, setLogOrReg] = useState(true);
  const [errors, setErrors] = useState({ login: '', email: '', password: '', server: '' });

  type InputType = {
    login: string;
    email: string;
    password: string;
  };

  type AuthResponse = {
    success?: {
      msg: string;
      userId: number;
      login: string;
    };
    error?: {
      login?: string;
      email?: string;
      password?: string;
      server?: string;
    };
  };

  useEffect(() => {
    setErrors({ login: '', email: '', password: '', server: '' });
  }, [LogOrReg]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setErrors((prev) => ({ ...prev, [event.target.name]: '' }));
  };

  const authUser = async (): Promise<void> => {
    // axios
    //   .post<InputType, AxiosResponse<UserType>>(`${import.meta.env.VITE_URL}/auth/${LogOrReg ? 'log' : 'reg'}`, inputs, { withCredentials: true })
    //   .then((res) => {
    //     console.log(res)
    //     dispatch(Actions.regLog(res.data))
    //   })
    //   // .then(() => navigate('/'))
    //   .catch((err) => console.log(err));

    const response: { status: number; data: AuthResponse } = await axios.post(`${import.meta.env.VITE_URL}/auth/${LogOrReg ? 'log' : 'reg'}`, inputs, {
      withCredentials: true,
    });
    if (response.status === 200) {
      const { success, error } = response.data;
      console.log(response.data)
      if (success) {
        const { userId, login } = success;
        console.log(success)
        dispatch(Actions.regLog({ userId, login }));
        navigate('/');
      }
      if (error) {
        setErrors((prev) => ({ ...prev, ...error }));
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(LogOrReg);
    
  }, [LogOrReg])

  return (
    <div className={styles.authPageWrapper}>
      {/* <h1>{LogOrReg ? 'Войти' : 'Регистрация'}</h1> */}
      <div>
        <form>
          {LogOrReg ? (
            <>
              <div>
                <input placeholder="Логин" onChange={changeHandler} type="text" name="login" value={inputs.login} />
                <span>{errors.login}</span>
              </div>
              <div>
                <input placeholder="Пароль" onChange={changeHandler} type="password" name="password" value={inputs.password} />
                <span>{errors.password}</span>
              </div>
            </>
          ) : (
            <>
              <div>
                <input placeholder="Логин" onChange={changeHandler} type="text" name="login" value={inputs.login} />
                <span>{errors.login}</span>
              </div>
              <div>
                <input placeholder="Почта" onChange={changeHandler} type="email" name="email" value={inputs.email} />
                <span>{errors.email}</span>
              </div>
              <div>
                <input placeholder="Пароль" onChange={changeHandler} type="password" name="password" value={inputs.password} />
                <span>{errors.password}</span>
              </div>
            </>
          )}
          <button onClick={() => void authUser()} type="button">
            {LogOrReg ? 'Войти' : 'Регистрация'}
          </button>
          <div className={`${styles.check_div}`}>
            <>Зарегаться</>
            <Switch isOn={LogOrReg} handleToggle={() => setLogOrReg((prev) => !prev)}/>
            <>Залогаться</>
          </div>
        </form>
      </div>
    </div>
  );
}
