import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div>
      <hr style={{ borderTop: "2px dashed #aaabb1" }} />
      <div>
        <span style={{ fontWeight: "bold", width: "60%" }}>My Cars</span>
        <span style={{ marginLeft: "327px" }}>
          <label style={{ marginRight: "4px" }}>Search</label>
          <input
            type="text"
            onChange={handleSearchChange}
            style={{
              height: "20px",
              width: "30%",
            }}
          />
        </span>
      </div>
    </div>
  );
}
export default CarSearch;
