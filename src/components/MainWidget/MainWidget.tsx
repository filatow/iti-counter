import Button from '../Button/Button';
import React from 'react';
import styles from './MainWidget.module.css';

type MainWidgetPropsType = {
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  limit: number,
  start: number,
  error: string,
}

const MainWidget: React.FC<MainWidgetPropsType> = (props) => {
  const {value, setValue, limit, start, error} = props

  const isLimitReached = value >= limit
  const limitClassName = `${isLimitReached ? styles['text-alert'] : ''}`
  const monitorErrorClassName = `${error ? styles['counter__monitor_with-error'] : ''}`


  const isIncDisabled = isLimitReached
  const isResetDisabled = value === 0

  const handleIncClick = () => setValue(val => val + 1)
  const handleResetClick = () => setValue(start)

  return (
    <section className={`${styles['counter__widget']}`}>
      <div className={`
          ${styles['counter__top']} ${styles['counter__monitor']}
          ${limitClassName} ${monitorErrorClassName}
      `}>
        {error || value}
      </div>
      <div className={`${styles['counter__buttons']}`}>
        <Button
          caption="INC"
          onClick={handleIncClick}
          classes={`${styles['counter__button']}`}
          disabled={isIncDisabled}
        />
        <Button
          caption="RESET"
          onClick={handleResetClick}
          classes={`${styles['counter__button']}`}
          disabled={isResetDisabled}
        />
      </div>
    </section>
  );
}

export default MainWidget;