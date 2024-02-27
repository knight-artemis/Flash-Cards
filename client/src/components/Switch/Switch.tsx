import React from 'react';
import styles from './Switch.module.css';

const Switch = ({ isOn, handleToggle }): JSX.Element => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={`${styles.react_switch_checkbox}`}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={`${styles.react_switch_label}`}
        htmlFor={`react-switch-new`}
      >
        <span
        className={`${styles.react_switch_button}`}
        />
      </label>
    </>
  );
};

export default Switch;