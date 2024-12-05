export const setValueAC = (value: number) => {
  return {
    type: 'SET_VALUE',
    payload: {value}
  } as const
}

export const setStartAC = (start: number) => {
  return {
    type: 'SET_START',
    payload: {start}
  } as const
}

export const setLimitAC = (limit: number) => {
  return {
    type: 'SET_LIMIT',
    payload: {limit}
  } as const
}

export const setErrorAC = (error: string) => {
  return {
    type: 'SET_ERROR',
    payload: {error}
  } as const
}

const initialState: State = {
  value: 0,
  start: 0,
  limit: 5,
  error: ''
}

export const reducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case 'SET_VALUE': {
      return {...state, value: action.payload.value}
    }
    case 'SET_START': {
      return {...state, start: action.payload.start}
    }
    case 'SET_LIMIT': {
      return {...state, limit: action.payload.limit}
    }
    case 'SET_ERROR': {
      return {...state, error: action.payload.error}
    }
    default:
      return state
  }
}

type State = {
  value: number
  start: number
  limit: number
  error: string
}

type SetValueAction = ReturnType<typeof setValueAC>
type SetStartAction = ReturnType<typeof setStartAC>
type SetLimitAction = ReturnType<typeof setLimitAC>
type SetErrorAction = ReturnType<typeof setErrorAC>

type Action =
  | SetValueAction
  | SetStartAction
  | SetLimitAction
  | SetErrorAction