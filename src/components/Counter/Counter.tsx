import React, {useState} from 'react'
import styles from './Counter.module.css'
import SettingsWidget from '../SettingsWidget/SettingsWidget'
import MainWidget from '../MainWidget/MainWidget';

type CounterProps = {
  start: number
  limit: number
  increment?: number
}

const Counter: React.FC<CounterProps> = (props) => {
  const [value, setValue] = useState<number>(props.start)
  const [start, setStart] = useState<number>(props.start)
  const [limit, setLimit] = useState<number>(props.limit)
  const [error, setError] = useState<string>('')


  return (
    <div className={styles['counter']}>
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
        increment={props.increment}
      />
    </div>
  );
}

export default Counter;