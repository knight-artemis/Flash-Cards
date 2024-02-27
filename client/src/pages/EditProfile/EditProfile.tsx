import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import axios from "axios";
import { useDispatch } from "react-redux";
import Actions from "../../redux/actions";

export default function EditProfile() {
  const user = useAppSelector((store) => store.userReducer);
  const [login, setLogin] = useState<LoginType>({ login: user.login });
  const dispatch = useDispatch();

  const [passwords, setPasswords] = useState<PasswordType>({
    oldPassword: "",
    newPassword: "",
  });

  type LoginType = {
    login?: string;
  };

  type PasswordType = {
    oldPassword?: string;
    newPassword?: string;
  };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setPasswords((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const editLoginHandler = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL}/auth/editLogin`,
        { login },
        { withCredentials: true }
      );
      if (response.status === 200) {
        const updatedUser = { ...user, login: response.data.login };
        dispatch(Actions.updateLog(response.data.login));
        dispatch(Actions.checkAuth(updatedUser));
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setLogin(response.data.login);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(Actions.checkAuth(parsedUser));
    }
  }, [user.login]);

  const editPasswordHandler = async (e) => {
    console.log("e.target", e.target);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL}/auth/editPassword`,
        passwords,
        { withCredentials: true }
      );
      console.log("response", response);

      if (response.status === 200) {
        setPasswords(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <input
        onChange={changeHandler}
        type="text"
        name="login"
        placeholder="Введите имя"
        defaultValue={user.login}
      />
      <button onClick={editLoginHandler} type="button">
        Изменить
      </button>
      <input
        onChange={changeHandler}
        type="password"
        name="oldPassword"
        placeholder="Введите старый пароль"
        defaultValue={passwords.oldPassword}
      />
      <input
        onChange={changeHandler}
        type="password"
        name="newPassword"
        placeholder="Введите новый пароль"
        defaultValue={passwords.newPassword}
      />
      <button onClick={editPasswordHandler} type="button">
        Изменить пароль
      </button>
    </form>
  );
}
