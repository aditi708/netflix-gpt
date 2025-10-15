import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // 👈 attach your slice reducer here
  },
});

export default appStore;
