import {legacy_createStore as createStore} from 'redux';
import {reducer} from './reducer';

export const store = createStore(reducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store