import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  data: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

export const fetchMarkdown = createAsyncThunk(
  "markdown/fetchMarkdown",
  async () => {
    const { data } = await axios.get("http://localhost:5000/api/markdown", {
      params: { defaultMarkdown: "# Welcome to the Markdown Editor" },
    });
    return data;
  }
);

export const postMarkdown = createAsyncThunk(
  "markdown/postMarkdown",
  async (payload) => {
    const { markdown } = payload;
    const { data } = await axios.post("http://localhost:5000/api/markdown", {
      markdown,
    });
    return data;
  }
);

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchMarkdown
      .addCase(fetchMarkdown.pending, (state) => {
        state.data = null;
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchMarkdown.fulfilled, (state, action) => {
        state.data = action.payload.markdown;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchMarkdown.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message
          ? action.error.message
          : "An unknown error occurred";
      })
      // postMarkdown
      .addCase(postMarkdown.pending, (state) => {
        state.data = null;
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(postMarkdown.fulfilled, (state, action) => {
        state.data = action.payload.markdown;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(postMarkdown.rejected, (state, action) => {
        state.data = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message
          ? action.error.message
          : "An unknown error occurred";
      });
  },
});

export default markdownSlice.reducer;
