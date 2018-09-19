import { createStore, combineReducers } from 'redux';

// combineReducers
const reducerPrueba = (state = [], action) => state;

const reducers = combineReducers({
  // reducerPrueba: reducerPrueba,
  reducerPrueba,
});
const store = createStore(reducers);
export default store;
