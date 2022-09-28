import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Goods from "./pages/Goods";
import Car from "./pages/Car";
import Setting from "./pages/Setting";

import Spring from "./pages/Spring";
import Summer from "./pages/Summer";


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}


const rootElement = document.getElementById("root");
render(
  
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<App to='/home' />}>
        <Route path="home" element={<Home />} />
        <Route path="goods" element={<Goods />}>
          <Route path="spring/:id" element={<Spring />} />
          <Route path="summer" element={<Summer />} />  
        </Route>
        <Route path="car" element={<Car />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      
    </Routes>
  </BrowserRouter>,
  rootElement
);