import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "carsData",
  initialState: {
    searchTerm: "",
    carsListData: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCarToList(state, action) {
      // Assumption
      // getting payload as {name:"" , cost:23}
      state.carsListData.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCarFromList(state, action) {
      // Assumption
      // getting payload as id of item to remove from list
      const updatedList = state.carsListData.filter(
        (ele) => ele.id !== action.payload
      );
      state.carsListData = updatedList;
    },
  },
});

export const { changeSearchTerm, addCarToList, removeCarFromList } =
  carsSlice.actions;
export const carListReducer = carsSlice.reducer;
