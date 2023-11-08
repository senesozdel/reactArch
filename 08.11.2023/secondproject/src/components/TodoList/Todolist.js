import React from 'react'
import { Input, InputGroup,Button } from 'reactstrap';
const Todolist = () => {

let array = [
    {
        id:1,
        name: "Birinci"
    },
    {
        id:2,
        name: "İkinci"
    },
    {
        id:3,
        name: "Üçüncü"
    }
]


  return (
    <>

<div className='gorev-list flex-column w-25'>
    <h2>Görev Listesi</h2>
<Input />
    <br />
  <InputGroup>
    <Input placeholder='yeni görev ekle' />
    <Button>
    Ekle
    </Button>
  </InputGroup>
</div>


    </>
  )
}

export default Todolist