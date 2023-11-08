import React from 'react'
import { Input, InputGroup,Button } from 'reactstrap';
import { useState } from 'react';

const Todolist = () => {


const [name,setName] = useState()
const [veriler,setarrayeEkle]= useState(
  [
    {

        sira: "Birinci"
    },
    {

        sira: "İkinci"
    },
    {

        sira: "Üçüncü"
    }
  ]
)
function ekle(){
  setarrayeEkle([...veriler,{sira:name}])
}


  return (
    <>

<div className='gorev-list flex-column w-25'>
    <h2>Görev Listesi</h2>
    <div className='input'>
    <br />
  <InputGroup>
    <Input onChange={(e)=>setName(e.target.value)} placeholder='Yeni Görev Ekle' />
    <Button onClick={ekle}  >
    Ekle
    </Button>
  </InputGroup>
    </div>
    <ul className='d-flex flex-column gap-2 text-start mt-2 p-0'>
      {veriler.map((item)=><li class="list-group-item">{item.sira}</li>)}
    </ul>


</div>


    </>
  )
}

export default Todolist