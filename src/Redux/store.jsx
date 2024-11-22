import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userDataSlice from "./userData/userData";
import loaderSlice from "./loader/loader";

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  userDataSlice: userDataSlice,
  loaderSlice:loaderSlice
});

// Configuration for redux-persist to persist the Redux store
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer with redux-persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export default store;
