import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import articlesSlice from "./Articles/articlesSlice";

const initialState = {
  articles: {
    articles: [],
    loading: false,
    responseURL: "",
  },
};
const reducer = {
  articles: articlesSlice,
};

const middleware = [thunk];
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
  preloadedState: initialState,
});

export default store;
