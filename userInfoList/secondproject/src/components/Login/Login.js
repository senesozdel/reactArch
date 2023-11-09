import React, { useState } from 'react'
import { Input, Button } from 'reactstrap';

const Login = () => {

const [username,setUsername] = useState(" ")
const [password,setPassword] = useState(" ")
const [age,setAge] = useState()
const [job,setJob] = useState()
const [address,setAddress] = useState()
const [tel,setTel] = useState()
const [gender,setGender] = useState()
const [isMarried,setIsmarried] = useState()
const[boy,setBoy]= useState()
const[kilo,setKilo] = useState()
const [productDetails,setProductDetails ] = useState([])
const [data,setData] = useState()

const sil = (index)=>{
  setProductDetails(productDetails.filter((j)=>j.password !== index.password))
}
const duzenle =()=>{
  const updateProducts = [...productDetails];
  updateProducts[data]= {username,password,age,job,address,gender,isMarried}
  setProductDetails(updateProducts)
  setData()
setPassword()
setUsername()
setAge()
setJob()
setAddress()
setTel()
setGender()
setIsmarried()
setBoy()
setKilo()
}
const duzenleOnay = (item,index)=>{
  setUsername(item.username)
  setPassword(item.password)
  setAge(item.age)
  setJob(item.job)
  setAddress(item.address)
  setTel(item.tel)
  setGender(item.gender)
  setIsmarried(item.isMarried)
  setBoy(item.boy)
  setKilo(item.kilo)
  setData(index)
}

  return (

<div className='d-flex gap-3'>
<div className='products w-25 d-flex flex-column gap-2 align-items-center'>
        <h3>
            Login Form
        </h3>
            <Input value={username} placeholder='username' onChange={(e)=> setUsername(e.target.value)} />
            <Input value={password} placeholder='info@gmail.com' onChange={(e)=>setPassword(e.target.value)} />
            <Input value={age} placeholder='age' onChange={(e)=>setAge(e.target.value)} />
            <Input value={job} placeholder='job' onChange={(e)=>setJob(e.target.value)} />
            <Input value={address} placeholder='adress' onChange={(e)=>setAddress(e.target.value)} />
            <Input value={tel} placeholder='tel' type='number' onChange={(e)=>setTel(e.target.value)} />
            <Input value={gender} placeholder='gender' onChange={(e)=>setGender(e.target.value)} />
            <Input value={isMarried} placeholder='IsMarried'  onChange={(e)=>setIsmarried(e.target.value)} />
            <Input value={boy} placeholder='boy' type='number' onChange={(e)=>setBoy(e.target.value)} />
            <Input value={kilo} placeholder='Kilo' type='number' onChange={(e)=>setKilo(e.target.value)} />
            <div className='button d-flex gap-2'>
              <Button onClick={()=> setProductDetails([...productDetails,{username,password,age,job,address,tel,gender,isMarried,boy,kilo}])} className="btn btn-info ">Listele </Button>
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
      <div className='' href="#">{`User Name: ${item.username} `} </div>
      <div> { `Password: ${item.password} ` }</div>
    <div> { `Job: ${item.job} ` }</div>
    <div> { `Adress: ${item.address} ` }</div>
    <div> { `Tel: ${item.tel} ` }</div>
    <div> { `Gender: ${item.gender} ` } </div>
    <div> { `IsMarried: ${item.isMarried} ` }</div>
    <div>  { `Boy: ${item.boy} ` }</div>
    <div>  { `Kilo: ${item.kilo} ` }</div>
   <div> { `Age: ${item.age} `} </div>
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





