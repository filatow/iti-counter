import Button from '../Button/Button';
import React, {useEffect, useState} from 'react';
import s from './SettingsWidget.module.css';
import FieldNumber from '../FieldNumber/FieldNumber';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';
import {useSettingsHandlers} from './hooks/useSettingsHandlers';
import {CounterState} from '../../counterReducer';

type SettingsWidgetProps = {}
export type State = {
  start: number
  limit: number
}

const SettingsWidget: React.FC<SettingsWidgetProps> = () => {
  const {limit, start, error} = useSelector<AppState, CounterState>(state => state.counter)

  const [state, setState] = useState<State>({
    start, limit
  })

  const [isSetDisabled, setIsSetDisabled] = useState<boolean>(true)
  const inputErrorClassName = `${error ? s.inputWithError : ''}`

  const {
    handleMaxValueChange,
    handleStartValueChange,
    handleSetClick
  } = useSettingsHandlers(state, setState)

  useEffect(() => {
    setIsSetDisabled(!!error || (limit === state.limit && start === state.start))
  }, [state, error, limit, start])

  return (
    <section className={s.widget}>
      <div className={s.widgetTop}>
        <FieldNumber
          label={'Max value'}
          id={'maxValue'}
          defaultValue={state.limit}
          inputExtraClass={inputErrorClassName}
          onChange={handleMaxValueChange}
          min={0}
        />
        <FieldNumber
          label={'Start value'}
          id={'startValue'}
          defaultValue={state.start}
          inputExtraClass={inputErrorClassName}
          onChange={handleStartValueChange}
          min={0}
        />
      </div>
      <div className={s.buttons}>
        <Button
          caption="SET"
          onClick={handleSetClick}
          classes={s.button}
          disabled={isSetDisabled}
        />
      </div>
    </section>
  )
}

export default SettingsWidget;
