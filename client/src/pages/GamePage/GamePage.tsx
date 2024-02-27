import React, { useEffect, useState } from 'react';
import modalStyles from '../../components/Modal/Modal.module.css';
import styles from './Game.module.css';
import Modal from '../../components/Modal/Modal';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Actions from '../../redux/actions';
import { redirect } from 'react-router-dom';

export default function GamePage() {
  const [themes, setThemes] = useState();
  const [modalActive, setModalActive] = useState(false);
  const [card, setCard] = useState(null);
  const [score, setScore] = useState(0);
  const [userAnswerInput, setUserAnswerInput] = useState({ userAnswer: '' });
  const [answerMessage, setAnswerMessage] = useState('');
  const game = useAppSelector((store) => store.gameReducer);
  const dispatch = useAppDispatch();

  console.log(themes);

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_URL}/game`, {}, { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/game`)
      .then((res) => setThemes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const answerHandler = (cardPoints, cardAnswer) => {
    if (userAnswerInput.userAnswer && cardAnswer.toLowerCase().includes(userAnswerInput.userAnswer.toLowerCase())) {
      setScore((prev) => prev + cardPoints);
      setAnswerMessage('Верно!');
    } else {
      setScore((prev) => prev - cardPoints / 2);
      setAnswerMessage('Не верно!');
    }

    setTimeout(() => {
      setModalActive(false);
      setAnswerMessage('');
    }, 600);
  };

  const userAnswerInputChangeHandler = (e) => {
    setUserAnswerInput(() => ({ userAnswer: e.target.value }));
  };

  const gameEndHandler = async () => {
    console.log(game, '<<<<< THIS IS GAME');
    await axios
      .patch(`${import.meta.env.VITE_URL}/game/${game.game.id}`, {}, { withCredentials: true })
      .then((res) => {
        dispatch(Actions.endGame(res.data));
        redirect('/endgame');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {modalActive && (
        <>
          <div className={`${modalStyles.background} ${modalActive && modalStyles.backgroundActive}`} />
          <div className={`${modalStyles.backgroundBlur} ${modalActive && modalStyles.backgroundBlurActive}`} />
          <div className={`${modalStyles.window} ${modalActive && modalStyles.windowActive}`}>
            {answerMessage ? (
              <h2>{answerMessage}</h2>
            ) : (
              <>
                <div className={modalStyles.headerWrapper}>
                  <div className={modalStyles.header}>
                    {themes[Math.ceil(card.id / 5) - 1].title} за {card.points}
                  </div>
                </div>
                <div className={modalStyles.contentWrapper}>
                  <p>{card.question}</p>
                  <div>
                    <input type="text" name="userAnswer" onChange={userAnswerInputChangeHandler} />
                    <button className={modalStyles.answerButton} type="button" onClick={() => answerHandler(card.points, card.answer)}>
                      Ответить
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      <div className={styles.game}>
        <div className={styles.for_game}>
          {themes?.map((el) => (
            <div className={styles.row} key={el.id}>
              <h3 className={styles.question}>{el.title}</h3>
              <div className={styles.row}>
                {el.Cards.toReversed().map((card) => (
                  <button
                    onClick={() => {
                      setModalActive(true);
                      setCard(card);
                    }}
                    className={styles.price}
                    key={card.points}
                  >
                    {card.points}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.state}>
          <h3>статистика игры : {score} </h3>
        </div>
      </div>
      <button className={styles.button} type="button" onClick={() => gameEndHandler()}>
        Завершить игру
      </button>
    </>
  );
}
