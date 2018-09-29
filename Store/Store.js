import { createStore, combineReducers } from 'redux';

// combineReducers
const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};
const reducers = combineReducers({
  // reducerPrueba: reducerPrueba,
  reducerPrueba,
});
const store = createStore(reducers);
export default store;
