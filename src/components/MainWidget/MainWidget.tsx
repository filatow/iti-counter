import Button from '../Button/Button';
import React from 'react';
import s from './MainWidget.module.css';

type MainWidgetProps = {
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  limit: number,
  start: number,
  error: string,
}

const MainWidget: React.FC<MainWidgetProps> = (props) => {
  const {value, setValue, limit, start, error} = props

  const isLimitReached = value >= limit
  const reachedLimitClassName = `${isLimitReached ? s.reachedLimit : ''}`
  const monitorErrorClassName = `${error ? s.monitorWithError : ''}`


  const isIncDisabled = isLimitReached
  const isResetDisabled = value === 0

  const handleIncClick = () => setValue(val => val + 1)
  const handleResetClick = () => setValue(start)

  return (
    <section className={s.widget}>
      <div className={`
          ${s.widgetTop} ${s.monitor}
          ${reachedLimitClassName} ${monitorErrorClassName}
      `}>
        {error || value}
      </div>
      <div className={s.buttons}>
        <Button
          caption="INC"
          onClick={handleIncClick}
          classes={s.button}
          disabled={isIncDisabled}
        />
        <Button
          caption="RESET"
          onClick={handleResetClick}
          classes={s.button}
          disabled={isResetDisabled}
        />
      </div>
    </section>
  );
}

export default MainWidget;