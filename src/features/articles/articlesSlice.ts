import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchArticles } from "./articlesAPI";

export interface ArticlesState {
  articles: [];
  fetchArticlesStatus: "idle" | "loading" | "failed";
}

const initialState: ArticlesState = {
  articles: [],
  fetchArticlesStatus: "idle"
};

export const fetchArticlesAsync = createAsyncThunk(
  "articles/fetchArticles",
  async (token: string) => {
    const response = await fetchArticles(token);
    return response.data;
  }
);

export const articlesSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    clearArticles: (state) => {
      state.articles = [];
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAsync.pending, (state) => {
        state.fetchArticlesStatus = "loading";
      })
      .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
        state.fetchArticlesStatus = "idle";
        state.articles = action.payload;
      })
  },
});

export const { clearArticles } = articlesSlice.actions;

export const selectedArticles = (state: RootState) => state.article.articles;

export default articlesSlice.reducer;
