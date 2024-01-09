import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navb from "./components/Nav";
import Emp from "./pages/Employee";
import Users from "./pages/Users";
import { Provider } from "react-redux";
import { Store } from "./store/Store";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Provider store={Store}>
        <Navb />
        <div className="">
        <Routes>
          <Route path="/" element={<Emp />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
        <Footer/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
