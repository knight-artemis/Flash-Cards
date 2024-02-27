import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import axios from "axios";
import { useDispatch } from "react-redux";
import Actions from "../../redux/actions";

export default function EditProfile() {
  const user = useAppSelector((store) => store.userReducer);
  const [login, setLogin] = useState<LoginType>({ login: user.login });
  const dispatch = useDispatch();

  // const [passwords, setPasswords] = useState<PasswordType>({
  //   oldPassword: "",
  //   newPassword: "",
  // });

  console.log(user.login);
  type LoginType = {
    login?: string;
  };

  // type PasswordType = {
  //   oldPassword?: string;
  //   newPassword?: string;
  // };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    // setPasswords((prev) => ({
    //   ...prev,
    //   [event.target.name]: event.target.value,
    // }));
  };

  const editLoginHandler = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL}/auth/editLogin`,
        { login },
        { withCredentials: true }
      );

      console.log("user", user);

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
    console.log("storedUser", storedUser);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("parsedUser", parsedUser);
      dispatch(Actions.checkAuth(parsedUser));
    }
  }, [user.login]);

  return (
    <form>
      <input
        onChange={changeHandler}
        type="text"
        name="login"
        placeholder="Введите имя"
        defaultValue={login.login}
      />
      <button onClick={editLoginHandler} type="button">
        Изменить
      </button>
      <input
        type="text"
        name="oldPassword"
        placeholder="Введите старый пароль"
      />
      <input
        type="text"
        name="newPassword"
        placeholder="Введите новый пароль"
      />
      <button type="submit">Изменить пароль</button>
    </form>
  );
}
