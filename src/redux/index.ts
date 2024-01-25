import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk, { ThunkAction } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import countrySlice from './slices/countrySlice';
import walletSlice from './slices/walletSlice';

const persistConfig = {
  key: 'root',
  storage
  // blacklist: [],
  // whitelist: [],
};

const rootReducer = combineReducers({
  country: countrySlice,
  wallet: walletSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
  // devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
