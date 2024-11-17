import React, {useState} from 'react'
import styles from './Counter.module.css'
import SettingsWidget from '../SettingsWidget/SettingsWidget'
import MainWidget from '../MainWidget/MainWidget';


const Counter: React.FC = () => {
  const startFromStorage = Number(localStorage.getItem('counter-start')) || 0
  const limitFromStorage = Number(localStorage.getItem('counter-limit')) || 5

  const [value, setValue] = useState<number>(startFromStorage)
  const [start, setStart] = useState<number>(startFromStorage)
  const [limit, setLimit] = useState<number>(limitFromStorage)
  const [error, setError] = useState<string>('')


  return (
    <div className={styles.counter}>
      <SettingsWidget
        value={value}
        setValue={setValue}
        start={start}
        setStart={setStart}
        limit={limit}
        setLimit={setLimit}
        error={error}
        setError={setError}
      />
      <MainWidget
        value={value}
        setValue={setValue}
        start={start}
        limit={limit}
        error={error}
      />
    </div>
  );
}

export default Counter;