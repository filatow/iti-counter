import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer, CounterState} from './counterReducer';
import {loadState, saveState, loadStored, saveStored, Stored} from './utils/localStorage';

const rootReducer = combineReducers({
  counter: counterReducer,
})

// const persistedCounterStart = loadStored(Stored.START)
// const persistedCounterLimit = loadStored(Stored.LIMIT)
// console.log('persistedCounterStart', persistedCounterStart)
// console.log('persistedCounterLimit', persistedCounterLimit)
// const preloadedState = (persistedCounterStart !== undefined && persistedCounterLimit !== undefined)
//   ? ({
//     counter: {
//       value: persistedCounterStart,
//       start: persistedCounterStart,
//       limit: persistedCounterLimit,
//       error: ''
//     }
//   })
//   : undefined

let preloadedState = loadState()
preloadedState = preloadedState && {
  counter: {...preloadedState.counter, error: ''}
}

console.log('preloadedState ', preloadedState)

export const store = createStore(rootReducer, preloadedState as any)

store.subscribe(() => {
//   // const {start = 0, limit = 5} = store.getState().counter
//   // saveStored(Stored.START, start)
//   // saveStored(Stored.LIMIT, limit)

  saveState(store.getState())
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store