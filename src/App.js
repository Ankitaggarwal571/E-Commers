import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import AdminAddMainCatagory from "./Components/Admin/AdminAddMainCatagory";
import AdminAddSubCatagory from "./Components/Admin/AdminAddSubCatagory";
import AdminHome from "./Components/Admin/AdminHome";
import AdminMainCatagories from "./Components/Admin/AdminMainCatagories";
import AdminSubCatagories from "./Components/Admin/AdminSubCatagory";
import AdminUpdateCatagories from "./Components/Admin/AdminUpdateCatagories";
import AdminUpdateSubCatagory from "./Components/Admin/AdminUpdateSubCatagory";
import Brands from "./Components/Admin/Brands";
import BrandsAdd from "./Components/Admin/BrandsAdd";
import BrandsUpdate from "./Components/Admin/BrandsUpdate";
import ProductAdd from "./Components/Admin/ProductAdd";
import ProductAdmin from "./Components/Admin/ProductAdmin";
import ProductUpdate from "./Components/Admin/ProductUpdate";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import SignUp from "./Components/SignUp";
import SingleProduct from "./Components/SingleProduct";
import Profile from "./Components/Profile";
import UpdateProfile from "./Components/UpdateProfile";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/shop/:filterd/" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/singleProduct/:id/" element={<SingleProduct/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} /> 
      <Route path="/adminhome" element={<AdminHome/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/UpdateProfile" element={<UpdateProfile/>} />


      <Route path="/adminHome" element={<AdminHome/>} />
      <Route path="/adminMaincatagories" element={<AdminMainCatagories/>} />
      <Route path="/addMainCatagory" element={<AdminAddMainCatagory/>} />
      <Route path="/adminUpdateMaincategory/:id" element={<AdminUpdateCatagories/>} />

      <Route path="/adminSubcatagories" element={<AdminSubCatagories/>} />
      <Route path="/addSubCatagory" element={<AdminAddSubCatagory/>} />
      <Route path="/adminUpdateSubCatagory/:id" element={<AdminUpdateSubCatagory/>} />

      <Route path="/adminBrands" element={<Brands/>} />
      <Route path="/addBrands" element={<BrandsAdd/>} />
      <Route path="/brandsUpdate/:id" element={<BrandsUpdate/>} />

      <Route path="/adminProduct" element={<ProductAdmin/>} />
      <Route path="/productAdd" element={<ProductAdd/>} />
      <Route path="/updateProduct/:id" element={<ProductUpdate/>} />
    </Routes>
    </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
