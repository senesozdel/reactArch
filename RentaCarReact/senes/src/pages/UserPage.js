import React, { useEffect,useState } from 'react'


const UserPage = ({rentHistory,setRentHistory,rentDetails}) => {

  const [hasRunOnce, setHasRunOnce] = useState(false);


// useEffect(() => {
  
//   if (!hasRunOnce) {
//     setRentHistory([...rentHistory,rentDetails])
//     setHasRunOnce(true);
//   }
// }, [hasRunOnce,setRentHistory,rentDetails,rentHistory])

console.log(rentHistory)

  return (
    <div className=''>
      
      {rentHistory.length !==0 ?    <div className='d-flex flex-wrap flex-column gap-2'>
        
        {rentHistory.map((i)=>
        
          <div className='d-flex flex-column  gap-2 border  px-2 '>
            <div ><span className='fw-bold'>Aracı Kiralayan Kullanıcı:</span> {i.userName}</div>
            <div><span className='fw-bold'>Kiralanan Araç : </span>{i.rentedCar}</div>
            <div><span className='fw-bold'>Ödenen Tutar:</span> ${i.payedAmount}</div>
            <div><span className='text-success'> Kiralama Başlangıç Tarihi:</span> {i.recieveDate}</div>
            <div><span className='text-danger'> Kiralama Başlangıç Tarihi:</span>  {i.returnDate}</div>
          </div>
        
        )}
      </div> : <h4>Henüz araç yok</h4> }
 
      
      
 
        
    </div>
  )
}

export default UserPage