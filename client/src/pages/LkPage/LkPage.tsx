import React from 'react';
import styles from './LkPage.module.css';

export default function LkPage() {
  return (
    <div className={styles.page}>
      <div className={styles.sideBlock}>
        <button type="button">Моя статистика</button>
        <button type="button">Глобальная статистика</button>
        <button type="button">Редактировать профиль</button>
      </div>
      <div className={styles.mainBlock}>
        <h2>Статистика пользователя ${'{login}'}</h2>
      </div>
    </div>
  );
}
