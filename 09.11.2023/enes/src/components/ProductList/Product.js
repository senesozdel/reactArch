import React, { useState } from 'react'

const Product = () => {

const[data,setData] = useState([]);
const[inputdata,setInputData] = useState();
const[id,setID] = useState(1);
const[update,setUpdate] = useState();


const add = ()=>{
    
    setData([...data,{ id: id, veri: inputdata}])
    setID(id+1);
}
const sil = (event) =>{

    const islemyapilmayanveriArrayi =   data.filter((item)=> item.id !== event.id);
    setData(islemyapilmayanveriArrayi);

}


  return (
    <div>
        <div className='form d-flex flex-column w-25 gap-3 mt-5 ms-5'>
        <input type="text"  onChange={(e)=>setInputData(e.target.value)} />
        <button onClick={add}>ekle</button>
        </div>

            {data.map((item) => 
                <ul className='w-25  p-0  gap-3 mt-5 ms-5'>
                <li className='list-unstyled'>Id: {item.id}</li>
                <li className='list-unstyled'>Data: {item.veri}</li>
                
                <li className='list-unstyled d-flex flex-column gap-2'>
                    <button onClick={()=> sil(item)} >Sil</button>
                    <button onClick={()=>{

                        


                    }  } >Düzenle</button>

                    </li>
            
                </ul>
            )}

    </div>
  )
}

export default Product