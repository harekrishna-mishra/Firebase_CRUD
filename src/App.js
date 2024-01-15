import React from "react";
import "./App.css";
import Navv from "./components/Navv";
import Home from "./components/Home";
import About from "./components/About";
import PlaceOrder from "./components/PlaceOrder";
import { Routes, Route} from "react-router-dom"
import NoMathch from "./components/NoMathch";
import Porduct from "./components/Porduct";
import Electronics from "./components/Electronics";
import Groery from "./components/Groery";
import User from "./components/User";
import UsersDetails from "./components/UsersDetails";

function App() {
  return (
    <div className="">
      <Navv/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="order-summary" element={<PlaceOrder/>}></Route>
        <Route path="*" element={<NoMathch/>}></Route>
        <Route path="/product" element={<Porduct/>}>
          <Route index element={<Electronics/>}></Route>
          <Route path="electronics" element={<Electronics/>}></Route>
          <Route path="grocery" element={<Groery/>}></Route>
        </Route>
        <Route path="/users" element={<User/>}>
          <Route index path=":userId" element={<UsersDetails/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
