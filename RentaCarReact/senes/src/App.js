import { Routes, Route } from "react-router-dom";
import './App.css';

import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import Services from "./pages/Services";



function App() {

  const[user,setUser]= useState([
    {id:1, name: "admin", password:"123"},
    {id:2, name: "a", password:"123"},
    {id:3, name: "Enes Özdel", password:"123"},
    {id:4, name: "Ahmet Selim", password:"123"},
]);
const [girisyapan,setGirisYapan] = useState({name:"", })
const [rentHistory,setRentHistory] = useState([])
const [rentDetails,setRentDetails] = useState()




console.log(rentDetails)
console.log(rentHistory)


  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout girisyapan={girisyapan} setGirisYapan={setGirisYapan} rentHistory={rentHistory} rentDetails={rentDetails} setRentHistory={setRentHistory} />}>
          <Route path="home" element={<Home rentDetails={rentDetails} setRentDetails={setRentDetails} girisyapan={girisyapan} rentHistory={rentHistory} setRentHistory={setRentHistory}  />} />
          <Route path="services" element={<Services />} />
          <Route path="sign-up" element={<SignUp user={user} setUser={setUser} />} />
          <Route index element={<Login user={user} girisyapan={girisyapan} setGirisYapan={setGirisYapan} rentHistory={rentHistory} setRentHistory={setRentHistory} />} />
          <Route path="user-page" element={<UserPage setRentHistory={setRentHistory}  rentHistory={rentHistory} rentDetails={rentDetails}/>} />

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <footer class="footer-distributed" >

<div class="footer-left">

  <h3>RentA<span>car</span></h3>



  <p class="footer-company-name">SENESOZDEL © 2023</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>Architect / Yeditepe Üniversitesi</span> Pendik, İstanbul</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+90 000 147 74 00</p>
  </div>

  <div className="fw-bold">
    <i class="fa fa-envelope"></i>
    <p><a >senes@senes.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span className="text-light">About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>


</div>
</footer>
    </div>


  );
}

export default App;
