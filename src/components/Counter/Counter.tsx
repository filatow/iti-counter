import React from 'react'
import styles from './Counter.module.css'
import SettingsWidget from '../SettingsWidget/SettingsWidget'
import MainWidget from '../MainWidget/MainWidget';


const Counter: React.FC = () => {
  // const startFromStorage = Number(localStorage.getItem('counter-start')) || 0
  // const limitFromStorage = Number(localStorage.getItem('counter-limit')) || 5

  return (
    <div className={styles.counter}>
      <SettingsWidget />
      <MainWidget />
    </div>
  );
}

export default Counter;