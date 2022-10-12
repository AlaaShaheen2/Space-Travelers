import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/Rockets';
import missionsSliceReducer from './Missions/Missions';

const PeterReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsSliceReducer,
});

const store = configureStore({
  reducer: {
    reducer: PeterReducer,
  },
});
export default store;
