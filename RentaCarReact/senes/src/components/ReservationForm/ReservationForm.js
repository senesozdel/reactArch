import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'



const ReservationForm = ({girisyapan,rentDetails,setRentDetails,rentHistory,setRentHistory, }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [secilenCar,setSecilenCar] = useState()
  const [recieveDate, setReceiveDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [totalRentalTime, setTotalRentalTime] = useState()
  const [arabalariGoster, setArabalariGoster] = useState(false)
  const [tarihiGoster, setTarihiGoster] = useState(true)
  const [carsModaliGoster,setCarsModaliGoster] = useState(false)
  const [onayModaliGoster,setOnayModaliGoster] = useState(false)
  const [carsData,setcarsData] = useState([
    
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
        title: "Mazda MX-5",
        start_production: 1989,
        class: "Sports car Roadster",
        price: 150,
        status: true

    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
        title: "Volkswagen Kübelwagen",
        class: "Military vehicle",
        price: 170,
        status: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
        title: "Porsche Cayenne",
        price: 180,
        class: "Mid-size luxury crossover SUV",
        status: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
        title: "Vauxhall Chevette",
        price: 140,
        class: "Supermini",
        status: true

    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
        title: "Dymaxion car",
        price: 135,
        class: "Concept car",
        status: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
        title: "Ford Crown Victoria",
        price: 78,
        class: "Full-size Ford",
        status: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
        title: "Plymouth Superbird",
        price: 185,
        class: "Muscle car(today) and Race car(Past)",
        status: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
        title: "Saab 9000",
        price: 210,
        class: "Executive car",
        status: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
        title: "Pontiac Sunfire",
        price: 140,
        class: "Compact",
        status: false
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG",
        title: "AMC Javelin",
        price: 130,
        class: "Unbulleted list| Pony car | Muscle car",
        status: true
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
        title: "Jaguar X-Type",
        price: 140,
        class: "Compact executive car",
        status: false
    },
]) 


  let startMonth = parseInt(recieveDate.slice(5, 7))
  let endMonth = parseInt(returnDate.slice(5, 7))
  let startDay = parseInt(recieveDate.slice(8, 10))
  let endDay = parseInt(returnDate.slice(8, 10))
  let startYear = parseInt(recieveDate.slice(0, 5))
  let endYear = parseInt(returnDate.slice(0, 5))

  const totalRentTime = () => {
    setTotalRentalTime((endMonth - startMonth) * 30 + Math.abs(endDay - startDay) + Math.abs(endYear - startYear) * 365)
  }
  const hata = () => {
    if (endYear < startYear) {

    }
    else {
      if (endMonth < startMonth) {

      }
      else if (endMonth == startMonth) {
        if (startDay > endDay) {
          alert("hata")
        }
      }
    }
  }

  const selectedCarModal = (i)=>{

    setSecilenCar({title: i.title, image: i.image, price: i.price, class: i.class, status: i.status})

  }
  const updateCarsStatus = ()=>{

    alert ( `Araç başarıyla kiralanmıştır.`)

    let bulunan =  carsData.find((i)=>i.title == secilenCar.title )
    bulunan.status = false;

   
  }
  // function first(){
  //   setRentDetails({userId: girisyapan.id,userName : girisyapan.name, rentedCar: secilenCar.title, payedAmount: secilenCar.price*totalRentalTime, recieveDate:recieveDate,returnDate:returnDate})

  // }
  // function second(){
  //   setRentHistory(rentDetails)
  // }
  // function third(){
  //   setRentHistory([...rentHistory,rentDetails])
  // }
  const reservationInfo = ()=>{
    setRentDetails({userId: girisyapan.id,userName : girisyapan.name, rentedCar: secilenCar.title, payedAmount: secilenCar.price*totalRentalTime, recieveDate:recieveDate,returnDate:returnDate})

   
  }
  const goCarsModal = () => {

    if (recieveDate && returnDate) {

      setArabalariGoster(true);
      setTarihiGoster(false);


    }
    else {
      alert("Tarih seçiniz")
    }
  }

  console.log(startYear)
  useEffect(() => {
    totalRentTime(); hata()
  })

console.log(girisyapan)
  return (
    <>
   
      {
        tarihiGoster == true &&
        <div className='reservation-form d-flex flex-column w-50 align-items-center gap-4 border p-3 border-2 bg-second rubik  'style={{marginTop:"50px"}}>
          <div className='form-title '><h3 >Welcome to SENES</h3></div>

          <div className='form-body d-flex flex-column'>

            <div className='date d-flex flex-column gap-3'>
              <div className='recieve-date d-flex justify-content-between align-items-center gap-4'>
                <h5 className='m-0'>Receive Date</h5>
                <input type="date" className='bg-first' onChange={(e) => setReceiveDate(e.target.value)} />
              </div>
              <div className='return-date d-flex justify-content-between align-items-center gap-4'>
                <h5 className='m-0'>Return Date</h5>
                <input className=' bg-first' type="date" onChange={(e) => setReturnDate(e.target.value)} />
              </div>
              {
                recieveDate && returnDate && <div className='total-rental-time d-flex justify-content-between align-items-center gap-4'>
                  <h5 className='m-0'>Total Rental Time</h5>
                  <h6 className='m-0'>  {totalRentalTime} Days </h6>
                </div>
              }


            </div>

          </div>

          <div className='form-footer'>
            <button className='rounded-2   px-3 btn btn-success ' onClick={() => goCarsModal()}  >Rent Today</button>
          </div>
        </div>
      }

      { arabalariGoster == true &&
      <div className='d-flex flex-column gap-2 mt-2'>
                    <Button variant='warning' className='rubik fs-5' onClick={()=>{setTarihiGoster(true);setArabalariGoster(false); setReceiveDate("");setReturnDate("")}}>Tarih Seçimine Geri Dön</Button>

<div className='d-flex flex-wrap gap-3 justify-content-center '>         {carsData.map((i)=>
         
         
         <div className='d-flex flex-column gap-2 text-center border bg-second justify-content-between pt-2'>
           <div><h4>{i.title}</h4></div>
          <img src={i.image}></img>
          <div className='fs-5 fw-bold'>{i.class}</div>
          <div>${i.price}/Hour</div>
          <div>{i.status == true ? <button className='w-100 btn btn-success p-2' onClick={()=> {setCarsModaliGoster(true); selectedCarModal(i); setArabalariGoster(false)} }>Rent the Car</button> : <div className='bg-danger  p-2'>Araç Kiralanmaya Uygun değil</div> }</div>
         
         </div>
         
         )}</div>

      </div>


      }
      {
        carsModaliGoster == true && 
          <div  className='d-flex flex-column border w-25 mx-auto mt-5 bg-second align-items-center position-relative'>
           <button className='end-0 position-absolute  bg-danger text-white  ' onClick={()=>{setArabalariGoster(true);setCarsModaliGoster(false);}}>x</button>
              {        <div className='d-flex flex-column gap-2 text-center bg-second align-items-center justify-content-between pt-4'>
                
           <div><h4>{secilenCar.title}</h4></div>
          <img className='w-75' src={secilenCar.image}></img>
          <div className='fs-5 fw-bold'>{secilenCar.class}</div>
          <div className=''>${secilenCar.price*totalRentalTime} <span className='fw-medium text-info-emphasis'>for {totalRentalTime} days</span></div>
          <div className='w-100'> <button className='w-100 btn btn-success p-2' onClick={()=> {    setRentDetails({userId: girisyapan.id,userName : girisyapan.name, rentedCar: secilenCar.title, payedAmount: secilenCar.price*totalRentalTime, recieveDate:recieveDate,returnDate:returnDate});
 setOnayModaliGoster(true);setCarsModaliGoster(false)}}>Sepete Ekle</button> </div>
         
         </div>}

          </div>
      }
      { onayModaliGoster == true &&
               <div  className='d-flex flex-column border mt-5  mx-auto bg-second align-items-center position-relative' style={{width:"150px", height:"200px  "}}>
               <button className='end-0 position-absolute  bg-danger text-white  ' onClick={()=>{setCarsModaliGoster(true); setOnayModaliGoster(false); setRentDetails()}}>x</button>
                        <div className='d-flex position-absolute bottom-0 pb-2  flex-column gap-3 text-center bg-second align-items-center justify-content-between '>
                    



              <div className='border-bottom border-2 text-info-subtle border-dark fs-5 fw-bold'> Kiralama işlemini tamamla </div>
              <div className='d-flex gap-2'>
                <div className='w-100'> <button className='w-100 btn btn-success p-1' onClick={()=> {updateCarsStatus();setArabalariGoster(true);setCarsModaliGoster(false);setOnayModaliGoster(false);setRentHistory([...rentHistory,rentDetails])}} >Tamam</button> </div>
                <div className='w-100'> <button className='w-100 btn btn-danger p-1'  onClick={()=>{setCarsModaliGoster(true);setOnayModaliGoster(false)}}>Vazgeç</button> </div>
              </div>
             
             </div>
    
              </div>
      }

    </>

  )
}

export default ReservationForm