import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers,
});

