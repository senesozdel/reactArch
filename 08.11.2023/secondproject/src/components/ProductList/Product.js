import React, { useState } from 'react'
import { Input, Button } from 'reactstrap';

const Product = () => {

const [username,setUsername] = useState(" ")
const [password,setPassword] = useState(" ")

const [productDetails,setProductDetails ] = useState([])

  return (

<div className='d-flex gap-3'>
<div className='products w-25 d-flex flex-column gap-2'>
        <h3>
            Product Details
        </h3>
            <Input placeholder='Username' onChange={(e)=> setUsername(e.target.value)} />
            <Input placeholder='info@gmail.com' onChange={(e)=>setPassword(e.target.value)} />
            <Button onClick={()=> setProductDetails([...productDetails,[username,password]])} class="btn btn-info">Listele </Button>
    </div>
    <ul className='product-card d-flex flex-column gap-2 w-25 p-0'>
    <li className='list-unstyled  '>
      <h3>
      Kullanıcı Bilgileri
      </h3></li>
    {productDetails.map((item)=><li className='list-unstyled list-group-item '>{`User Name: ${item[0]}  Password: ${item[1]} `}</li>)}

    
    </ul>
</div>


  )
}

export default Product





