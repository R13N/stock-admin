import { Route, Routes } from "react-router-dom";
import { Categories } from "../pages/Categories";
import { Home } from "../pages/Home";
import { Incomings } from "../pages/Incomings";
import { Outgoings } from "../pages/Outgoings";
import { Products } from "../pages/Products";
// import { ProtectedRoute } from "./ProtectedRoute";

export default function MainRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      {/* <Route path="/login" element={<Home />}/> */}
      <Route path="/categories" element={<Categories />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/incomings" element={<Incomings />}/>
      <Route path="/outgoings" element={<Outgoings />}/>


      {/* <ProtectedRoute pathName="/categories" elementName={<Categories />}/>
      <ProtectedRoute pathName="/products" elementName={<Products />}/>
      <ProtectedRoute pathName="/incomings" elementName={<Incomings />}/>
      <ProtectedRoute pathName="/outgoings" elementName={<Outgoings />}/> */}
    </Routes>
  )
}