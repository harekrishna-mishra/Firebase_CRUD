import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navb from "./components/Nav";
import Emp from "./pages/Employee";
import Users from "./pages/Users";
import { Provider } from "react-redux";
import { Store } from "./store/Store";

function App() {
  return (
    <div className="">
      <Provider store={Store}>
        <Navb />
        <div className="container">
        <Routes>
          <Route path="/" element={<Emp />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
        </div>
      </Provider>
    </div>
  );
}

export default App;
