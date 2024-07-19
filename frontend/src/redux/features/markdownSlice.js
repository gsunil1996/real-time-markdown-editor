import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMarkdown = createAsyncThunk(
  "markdown/fetchMarkdown",
  async () => {
    const response = await axios.get("http://localhost:5000/api/markdown", {
      params: { defaultMarkdown: "# Welcome to the Markdown Editor" },
    });
    return response.data.markdown;
  }
);

export const saveMarkdown = createAsyncThunk(
  "markdown/saveMarkdown",
  async (markdown) => {
    await axios.post("http://localhost:5000/api/markdown", { markdown });
  }
);

const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    content: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setMarkdown: (state, action) => {
      state.content = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarkdown.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMarkdown.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.content = action.payload;
      })
      .addCase(fetchMarkdown.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setMarkdown } = markdownSlice.actions;

export default markdownSlice.reducer;
