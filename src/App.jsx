import CarForm from "./components/CarForm";
import CarValue from "./components/CarValue";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";

function App() {
  return (
    <div
      style={{
        width: "50%",
        borderStyle: "groove",
        borderWidth: "2px",
        // backgroundColor: "#b2f7e5",
        padding: "4px",
      }}
    >
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
