import "./layout.scss";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./routes/homePage/homePage";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      
      <div className="content">
        <Homepage />
      </div>
      
    </div>
  );
}

export default App;
