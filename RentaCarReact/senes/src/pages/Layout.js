import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { PiHandWaving } from "react-icons/pi";
import { IoCarSport } from "react-icons/io5";
const Layout = ({girisyapan,setGirisYapan,rentHistory,setRentHistory,rentDetails}) => {

  const [toHome,settoHome] = useState("disabled")

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
   
    return `${month}/${date}/${year}`;
  }

  return (
    <>
      <nav className='d-flex justify-content-around align-items-center py-2 bg-second'>
        <div id='logo' >
            <h3 className='roboto m-0'>
                SENESOZDEL
            </h3>
        </div>
        {girisyapan.name === "admin"?<ul className='d-flex gap-3 roboto m-0 p-0 fs-5 align-items-center '>

       <li className='list-unstyled '>
          <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/user-page">Reservation Details</Link>
        </li>   
        <li className='list-unstyled '>
            <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/services">Services</Link>
          </li>
          <li className='list-unstyled '>
            <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/contact">Contact</Link>
          </li> 

        </ul>  :
        <div>
        {
          girisyapan.name !== ""&&                
           <ul className='d-flex gap-3 roboto m-0 p-0 fs-5 align-items-center '>
          <li className='list-unstyled '>
            <Link className='text-decoration-none px-2 text-white nav-link bg-first toHome  rounded-1  ' to="/home">Home</Link>
          </li>
  
          <li className='list-unstyled '>
            <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/services">Services</Link>
          </li>
          <li className='list-unstyled '>
            <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/contact">Contact</Link>
          </li> 

          </ul>
        }
        </div>

        }


        {/* <ul className='d-flex gap-3 roboto m-0 p-0 fs-5 align-items-center '>
        <li className='list-unstyled '>
          <Link className='text-decoration-none px-2 text-white nav-link bg-first toHome  rounded-1  ' to="/home">Home</Link>
        </li>

        <li className='list-unstyled '>
          <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/services">Services</Link>
        </li>
        {girisyapan.name === "admin"? <li className='list-unstyled '>
          <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/user-page">Reservation Details</Link>
        </li>   :<li className='list-unstyled '>
          <Link  className='text-decoration-none px-2 text-white nav-link bg-first  rounded-1  ' to="/contact">Contact</Link>
        </li> }


        <li className='list-unstyled '>
          <Link  className='text-decoration-none px-2 text-white nav-link-sign nav-link bg-third   rounded-1  ' to="/sign-up">Sign-Up</Link>
        </li>
        </ul> */}


        {
  girisyapan.name === "" &&           <div className='lato fw-bold fs-3 d-flex align-items-center gap-3'>
    <IoCarSport className='fs-1' />
 The biggest filo company across the World !
</div>
}
<div className='d-flex gap-5'>
{girisyapan.name !== ""&&    <div  className='d-flex  gap-3 align-items-center  m-0 '>

<h4 className='m-0 p-0'>Hoşgeldin {girisyapan.name}</h4>
<PiHandWaving className='fs-3' />
</div>}



{
  girisyapan.name === "" &&           <li className='list-unstyled '>
  <Link  className='text-decoration-none p-2 text-white nav-link-sign nav-link bg-dark fw-bold  rounded-1  ' to="/sign-up">Sign-Up</Link>
</li>
}
{
  girisyapan.name !== ""&&  <div className='d-flex align-items-center gap-2'>
      <div> {getDate()}</div>    

   <div >
  <Link  className='text-decoration-none px-2 text-white btn btn-danger  rounded-1  ' onClick={()=>{setGirisYapan({name:""}); }} to="">Çıkış Yap</Link>
</div> 
  </div>
}
</div>

      
      </nav>
 

    <Outlet />
  </>
  )
}

export default Layout