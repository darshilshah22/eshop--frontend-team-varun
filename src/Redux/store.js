import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import topDealsReducer from "./topDealsSlice";
import dealsOfMonthsReducer from "./dealsOfMonthSlice";
import recommendationReducer from "./recommendationSlice";
import currentProductReducer from "./currentProductSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  topDeals: topDealsReducer,
  dealsOfMonth: dealsOfMonthsReducer,
  recommendations: recommendationReducer,
  currentProduct: currentProductReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
