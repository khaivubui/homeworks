import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';

const addLoggingToDispatch = ({
  getState
}) => next => action => {
  console.log(next);
  console.log('Initial state:', getState());
  console.log('Action:', action);
  next(action);
  console.log('Ending-state', getState());
};

const rickSanchez = state => next => action => {
  console.log('I\'m PICKLE RIIIICKK!');
  next(action);
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(addLoggingToDispatch, rickSanchez)
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;
