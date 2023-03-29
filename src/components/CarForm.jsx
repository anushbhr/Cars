import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCarToList, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    return state.form.name;
  });
  const cost = useSelector((state) => {
    return state.form.cost;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    // here event.target.value will be of type string, so always convert to number bcs input type is number
    // if we type e in input of type "number", event.target.value is empty - so when value is empty or NaN we will set cost to 0

    dispatch(changeCost(parseInt(event.target.value)) || 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // default behaviour of form is to reload on submission and to avoid its  default behaviour
    dispatch(
      addCarToList({
        // name: name,
        // cost: cost,
        //both property and value are same so we can send like below
        name,
        cost,
      })
    );
  };
  return (
    <div>
      <header style={{ fontWeight: "bold" }}>Car Form</header>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "90%",
            borderStyle: "groove",
            borderWidth: "2px",
            backgroundColor: "#f5f18a",
            padding: "8px",
          }}
        >
          <span style={{ marginLeft: "16px" }}>
            <label style={{ marginRight: "4px" }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{
                height: "20px",
              }}
            />
          </span>

          <span style={{ marginLeft: "16px" }}>
            <label style={{ marginRight: "4px" }}>Cost</label>
            <input
              type="number"
              value={cost}
              onChange={handleCostChange}
              style={{
                height: "20px",
              }}
            />
          </span>
          <span style={{ marginLeft: "93px" }}>
            <button type="submit">Submit</button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
