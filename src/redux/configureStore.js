import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
);

export default store;
