import { createSlice } from "@reduxjs/toolkit";
import { getAllArticles } from "./articlesAsync";

const name = "Articles/Slice";
const initialState = {
  articles: [],
  loading: false,
  responseURL: "",
};

const reducers = {
  getArticles(state) {
    return state;
  },
};

const extraReducers = {
  [getAllArticles.pending]: () => {
    return { loading: true, articles: [] };
  },
  [getAllArticles.fulfilled]: (state, action) => {
    return {
      loading: false,
      articles: action.payload.articles,
      responseURL: action.payload.responseURL,
      page: action.payload.page,
      pageSize: action.payload.pageSize,
      count: action.payload.count,
    };
  },
  [getAllArticles.rejected]: () => {
    return { loading: false, articles: [], error: "Something Went Wrong" };
  },
};

const articleSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});
export const { getArticles } = articleSlice.actions;
export default articleSlice.reducer;
