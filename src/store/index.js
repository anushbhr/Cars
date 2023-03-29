import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import {
  changeSearchTerm,
  addCarToList,
  removeCarFromList,
  carListReducer,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    carList: carListReducer,
  },
});

export {
  store,
  changeCost,
  changeName,
  changeSearchTerm,
  addCarToList,
  removeCarFromList,
};
