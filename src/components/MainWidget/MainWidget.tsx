import Button from '../Button/Button';
import React from 'react';
import './MainWidget.css';

type MainWidgetPropsType = {
  value: number,
  setValue:  React.Dispatch<React.SetStateAction<number>>,
  limit: number,
  start: number,
  error: string,
  increment?: number,
}

const MainWidget: React.FC<MainWidgetPropsType> = (props) => {
  const {value, setValue, limit, start, error} = props
  const increment = props.increment || 1

  const isLimitReached = value >= limit
  const limitClassName = `${isLimitReached ? 'text-alert' : ''}`
  const errorClassName = `${error ? 'with-error' : ''}`


  const isIncDisabled = isLimitReached
  const isResetDisabled = value === 0

  const handleIncClick = () => setValue(val => val + increment)
  const handleResetClick = () => setValue(start)

  return (
    <section className="counter__widget counter__main">
      <div className={`counter__top counter__monitor ${limitClassName} ${errorClassName}`}>
        {error || value}
      </div>
      <div className="counter__buttons">
        <Button
          caption="INC"
          onClick={handleIncClick}
          classes="counter__button"
          disabled={isIncDisabled}
        />
        <Button
          caption="RESET"
          onClick={handleResetClick}
          classes="counter__button"
          disabled={isResetDisabled}
        />
      </div>
    </section>
  );
}

export default MainWidget;