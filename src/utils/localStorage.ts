import {AppState} from '../store';


export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app-state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('app-state', serializedState)
  } catch {

  }
}


export enum Stored {
  START = 'counter/start',
  LIMIT = 'counter/limit'
}

export const loadStored = (name: Stored) => {
  try {
    const serializedState = localStorage.getItem(name)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveStored = <T,>(name: Stored, value: T) => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(name, serializedState)
  } catch {

  }
}