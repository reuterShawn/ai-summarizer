import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  // Store is a GlOBAL STATE
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaulMidlleware) =>
    getDefaulMidlleware().concat(articleApi.middleware),
});
