import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkModeReducer from "./DarkModeSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedDarkMode = persistReducer(persistConfig, darkModeReducer);

export const store = configureStore({
  reducer: {
    darkMode: persistedDarkMode,
  },
});

export const persistor = persistStore(store);
