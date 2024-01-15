import React from "react";
import "./App.css";
import Navv from "./components/Navv";
import Home from "./components/Home";
// import About from "./components/About";
import PlaceOrder from "./components/PlaceOrder";
import { Routes, Route, useRoutes } from "react-router-dom";
import NoMathch from "./components/NoMathch";
import Porduct from "./components/Porduct";
import Electronics from "./components/Electronics";
import Groery from "./components/Groery";
import User from "./components/User";
import UsersDetails from "./components/UsersDetails";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: (
        <React.Suspense fallback="Loading">
          <LazyAbout />
        </React.Suspense>
      ),
    },
    {
      path: "*",
      element: <NoMathch />,
    },
    {
      path: "/order-summary",
      element: <PlaceOrder />,
    },
    {
      path: "/product",
      element: <Porduct/>,
      children:[
        {index: true, element: <Electronics/>},
        {path: "electronics", element: <Electronics/>},
        {path:"grocery", element:<Groery />}
      ]
    },
    {
      path:"/users",
      element: <User/>,
      children:[
        {index: true, path: ":userId", element: <UsersDetails/>}
      ]
    }
    
  ]);
  return (
    <div className="">
      <Navv />
      {route}
      {/* <Routes>
        <Route path="order-summary" element={<PlaceOrder />}></Route>
        <Route path="/product" element={<Porduct />}>
          <Route index element={<Electronics />}></Route>
          <Route path="electronics" element={<Electronics />}></Route>
          <Route path="grocery" element={<Groery />}></Route>
        </Route>
        <Route path="/users" element={<User />}>
          <Route index path=":userId" element={<UsersDetails />}></Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
