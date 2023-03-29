import { useSelector } from "react-redux";

const CarValue = () => {
  const listData = useSelector((state) => {
    return state.carList.carsListData.filter((ele) =>
      ele.name.toLowerCase().includes(state.carList.searchTerm.toLowerCase())
    );
  });

  const totalCost = listData.reduce(
    (accumulator, ele) => accumulator + ele.cost,
    0
  );

  return (
    <div>
      <hr style={{ borderTop: "2px dashed #aaabb1" }} />
      <p style={{ fontWeight: "bold" }}>Total Cost : ${totalCost}</p>
    </div>
  );
};
export default CarValue;
