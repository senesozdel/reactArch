import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import PayModul from '../PayModul/PayModul';



const Navigationbar = ({sepet,counter,setSepet,setCounter,setGizle}) => {

const [goster,setGoster]= useState(false)


    
  return (
<div>
    <nav className='d-flex align-items-center justify-content-around mx-5 '> 
      <div className='logo'><h2>SENESOZDEL</h2></div>
      <div className='navbar-list d-flex gap-4'>
        <div className='navbar-item'><h4>Products</h4></div>
        <div className='navbar-item'><h4>Categories</h4></div>
        <div className='navbar-item'><h4>Services</h4></div>
        <div className='navbar-item d-flex gap-2'>
          <Button onClick={()=>{setGoster(true); setGizle(true)}}  >Shopping Cart</Button>
          {counter>0 && 
          <div className='rounded-circle d-flex align-items-center justify-content-center bg-success text-white px-3'>{counter }</div>
          }
          
        </div>
      </div>
    </nav>
    <div>
      {
       goster=== true && <PayModul sepet={sepet} setSepet = {setSepet} setCounter={setCounter} setGoster={setGoster} setGizle={setGizle}/>
      }


      
    </div>
 
  </div>
  )
}

export default Navigationbar