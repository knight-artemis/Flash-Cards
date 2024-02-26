import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='home-page'>
      <h2>ДОБРО ПОЖАЛОВАТЬ НА НАШ САЙТ</h2>
      <h2>Перед началом зарегистрируйтесь или войдите!</h2>
      <h2>ПРАВИЛА ИГРЫ ОПИСАТЬ ТУТ</h2>
      <p>
        Если зарегистрирован: <Link to='/game'><button>Начать игру</button></Link>
      </p>
    </div>
  );
}
