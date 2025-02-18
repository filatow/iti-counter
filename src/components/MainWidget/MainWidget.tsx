import Button from '../Button/Button';
import React from 'react';
import s from './MainWidget.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {CounterState, setValueAC} from '../../counterReducer';
import {AppState} from '../../store';

type MainWidgetProps = {}

const MainWidget: React.FC<MainWidgetProps> = () => {
  const dispatch = useDispatch()
  const {value, limit, start, error} = useSelector<AppState, CounterState>(state => state.counter)


  const isLimitReached = value >= limit
  const reachedLimitClassName = `${isLimitReached ? s.reachedLimit : ''}`
  const monitorErrorClassName = `${error ? s.monitorWithError : ''}`

  const isIncDisabled = isLimitReached
  const isResetDisabled = value === 0


  const handleIncClick = () => {
    dispatch(setValueAC(value + 1))
  }
  const handleResetClick = () => {
    dispatch(setValueAC(start))
  }

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