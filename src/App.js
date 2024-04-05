import logo from "./logo.svg";
import "./App.css";
import Small from "./components/Smallsection/Small";
import Navbar from "./components/Navbar/Navbar";
import Iphone from "./components/Iphone/Iphone";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Small />
      <Navbar />
      <Iphone />
      <Category />
      <Products />
    </div>
  );
}

export default App;
