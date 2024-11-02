import "./App.css";
import Home from "./components/Home/Home";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchOutput from "./data/data.json";

function App() {
  return (
    <>
      <Home />
      <SearchBar placeholder="Seek But Find Not..." data={SearchOutput} />
    </>
  );
}

export default App;
