import { useDispatch, useSelector } from "react-redux";
import { addCarToList, removeCarFromList } from "../store";

const CartList = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeCarFromList(id));
  };

  const list = useSelector((state) => {
    //display the list of cars if their name contains the sub string
    return state.carList.carsListData.filter((ele) =>
      ele.name.toLowerCase().includes(state.carList.searchTerm.toLowerCase())
    );
  });

  const name = useSelector((state) => {
    return state.form.name;
  });

  return (
    <div>
      {list.map((ele) => (
        <div
          key={ele.id}
          style={{
            width: "90%",
            borderStyle: "groove",
            borderWidth: "2px",
            backgroundColor: "#b2f7e5",
            padding: "8px",
            marginTop: "16px",
          }}
        >
          <span
            style={{
              fontWeight:
                name &&
                ele.name.toLowerCase().includes(name.toLowerCase()) &&
                "bold",
            }}
          >
            {ele.name} - ${ele.cost}
          </span>
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => handleDelete(ele.id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;
