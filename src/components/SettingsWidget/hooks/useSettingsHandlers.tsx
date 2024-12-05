import React from 'react';
import {setErrorAC, setLimitAC, setStartAC, setValueAC} from '../../../reducer';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../SettingsWidget';
import {RootState} from '../../../store';


export const useSettingsHandlers = (
  state: State,
  setState: React.Dispatch<React.SetStateAction<State>>
) => {
  const dispatch = useDispatch()
  const {value, error} = useSelector<RootState, RootState>(state => state)

  const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = Number(e.target.value);

    if (newLimit <= state.start) {
      dispatch(setErrorAC('The maximum value must be greater than the initial value'))
    } else if (error) {
      dispatch(setErrorAC(''))
    }
    setState((state) => ({
      ...state, limit: newLimit,
    }))
  }

  const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStart = Number(e.target.value);

    if (newStart < 0) {
      dispatch(setErrorAC('The initial value must not be negative'))
    } else if (newStart >= state.limit) {
      dispatch(setErrorAC('The maximum value must be greater than the initial value'))
    } else if (error) {
      dispatch(setErrorAC(''))
    }
    setState((state) => ({
      ...state, start: newStart,
    }))
  }

  const handleSetClick = () => {
    if (error) return

    dispatch(setLimitAC(state.limit))
    // localStorage.setItem('counter-limit', String(state.limit))
    dispatch(setStartAC(state.start))
    // localStorage.setItem('counter-start', String(state.start))
    if (state.start > value) {
      dispatch(setValueAC(state.start))
    }
    if (state.limit < value) {
      dispatch(setValueAC(state.limit))
    }
  }

  return {
    handleMaxValueChange,
    handleStartValueChange,
    handleSetClick
  }
}
