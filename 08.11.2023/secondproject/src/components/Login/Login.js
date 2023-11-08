import React, { useState } from 'react'
import { Input, Button } from 'reactstrap';

const Login = () => {

const [username,setUsername] = useState(" ")
const [password,setPassword] = useState(" ")
const [productDetails,setProductDetails ] = useState([])
const [data,setData] = useState()

const sil = (index)=>{
  setProductDetails(productDetails.filter((j)=>j.password !== index.password))
}
const duzenle =()=>{
  const updateProducts = [...productDetails];
  updateProducts[data]= {username,password}
  setProductDetails(updateProducts)
  setData()
setPassword()
setUsername()

}
const duzenleOnay = (item,index)=>{
  setUsername(item.username)
  setPassword(item.password)
  setData(index)
}

  return (

<div className='d-flex gap-3'>
<div className='products w-25 d-flex flex-column gap-2 align-items-center'>
        <h3>
            Login Form
        </h3>
            <Input value={username} placeholder='Username' onChange={(e)=> setUsername(e.target.value)} />
            <Input value={password} placeholder='info@gmail.com' onChange={(e)=>setPassword(e.target.value)} />
            <div className='button d-flex gap-2'>
              <Button onClick={()=> setProductDetails([...productDetails,{username,password}])} className="btn btn-info ">Listele </Button>
            <Button onClick={duzenle} className="btn btn-danger">Düzenle </Button>
            </div>
            
            
    </div>
    <ul className='product-card d-flex flex-column gap-2 w-25 p-0'>
    <li className='list-unstyled  '>
      <h3>
      User Informations
      </h3></li>
    {productDetails.map((item,index)=>
    <li className='list-unstyled list-group-item d-flex flex-column align-items-center'>
      <a className='text-decoration-none' href="#">{`User Name: ${item.username}  Password: ${item.password} `}</a>
      <div className='d-flex gap-3'>
      <Button className='  btn-outline-danger ' onClick={()=>sil(item)}>Sil</Button>
      <Button className='  btn-success ' onClick={()=>duzenleOnay(item,index)}>Düzenle</Button>
      </div>

    </li>

  

    )}

    
    </ul>
</div>


  )
}

export default Login





