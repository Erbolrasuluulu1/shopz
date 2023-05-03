import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import ProductDetails from "./page/ProductDetails";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/product"} element={ <Product/> }/>
            <Route path={"/basket"} element={ <Basket/> }/>
            <Route path={"/favorite"} element={ <Favorite/> }/>
            <Route path={"/details/:id"} element={ <ProductDetails/> }/>
        </Routes>

    </div>
  );
}

export default App;
