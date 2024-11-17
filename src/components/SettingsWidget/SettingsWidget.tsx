import Button from '../Button/Button';
import React, {useEffect, useState} from 'react';
import styles from './SettingsWidget.module.css';

type SettingsWidgetProps = {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  start: number
  setStart: React.Dispatch<React.SetStateAction<number>>
  limit: number
  setLimit: React.Dispatch<React.SetStateAction<number>>
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
type State = {
  start: number
  limit: number
  error: string
}

const SettingsWidget: React.FC<SettingsWidgetProps> = (
  {
    value,
    setValue,
    start,
    setStart,
    limit,
    setLimit,
    error,
    setError,
  }) => {
  const [state, setState] = useState<State>({
    start, limit, error
  })
  const [isSetDisabled, setIsSetDisabled] = useState<boolean>(true)
  const inputErrorClassName = `${error ? styles['input_with-error'] : ''}`

  useEffect(() => {
    setIsSetDisabled(!!error || (limit === state.limit && start === state.start))
  }, [state, error, limit, start])

  const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = Number(e.target.value);

    if (newLimit <= state.start) {
      setError('The maximum value must be greater than the initial value')
    } else if (error) {
      setError('')
    }
    setState((state) => ({
      ...state, limit: newLimit,
    }))
  }

  const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = Number(e.target.value);

    if (newStart < 0) {
      setError('The initial value must not be negative')
    }else if (newStart >= state.limit) {
      setError('The maximum value must be greater than the initial value')
    } else if (error) {
      setError('')
    }
    setState((state) => ({
      ...state, start: newStart,
    }))
  }

  const handleSetClick = () => {
    if (error) return

    setLimit(state.limit)
    localStorage.setItem('counter-limit', String(state.limit))
    setStart(state.start)
    localStorage.setItem('counter-start', String(state.start))
    if (state.start > value) {
      setValue(state.start)
    }
    if (state.limit < value) {
      setValue(state.limit)
    }
  }

  return (
    <section className={`${styles['counter__widget']}`}>
      <div className={`${styles['counter__top']} ${styles['counter__settings-form']}`}>
        <div className={`${styles['input-group']}`}>
          <label className={`${styles['input-group__label']}`} htmlFor="max-value">Max value:</label>
          <input
            className={`${styles['input-group__number']} ${inputErrorClassName}`}
            id="max-value"
            type="number"
            min={0}
            defaultValue={state.limit}
            onChange={handleMaxValueChange}
          />
        </div>
        <div className={`${styles['input-group']}`}>
          <label className={`${styles['input-group__label']}`} htmlFor="start-value">Start value:</label>
          <input
            className={`${styles['input-group__number']} ${inputErrorClassName}`}
            id="start-value"
            type="number"
            min={0}
            defaultValue={state.start}
            onChange={handleStartValueChange}
          />
        </div>
      </div>
      <div className={`${styles['counter__buttons']}`}>
        <Button
          caption="SET"
          onClick={handleSetClick}
          classes={`${styles['counter__button']}`}
          disabled={isSetDisabled}
        />
      </div>
    </section>
  )
}

export default SettingsWidget;