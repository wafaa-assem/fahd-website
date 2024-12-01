import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import usReducer from "./usSlice";
import serviceReducer from "./serviceSlice";
import serviceDetailsReducer from "./serviceDetails";
import contactUsReducer from "./ContactUsSlice";
import footerReducer from "./footerSlice";

export const reduxStore = configureStore({
  reducer: {
    homeReducer,
    usReducer,
    serviceReducer,
    serviceDetailsReducer,
    contactUsReducer,
    footerReducer,  // store initialState hena => by useSelector => can select any store w destruct el data mno == initialState
  },
});
