import React from 'react'


const CarBlog = () => {

  const blogBox = [

    {
      id: 1,
      image: "https://st.depositphotos.com/1529768/2366/i/600/depositphotos_23668151-stock-photo-used-car-sales.jpg",
      desc:" Compact cars offer great gas mileage and the ease of driving and parking in high traffic areas."
    },
    {
      id: 2,
      image: "https://st2.depositphotos.com/2931363/7793/i/600/depositphotos_77939392-stock-photo-woman-and-her-boyfriend-in.jpg",
      desc:"Enterprise Rent-A-Car provides more than just traditional car rental. We're your ",
    },
    {
      id: 3,
      image: "https://st3.depositphotos.com/12039320/17112/i/600/depositphotos_171123222-stock-photo-manager-shaking-hands-to-customer.jpg",
      desc:"Need something bigger for your business? Check out "
    },
    {
      id: 4,
      image: "https://st.depositphotos.com/1760224/3464/i/600/depositphotos_34645275-stock-photo-people-buying-new-car.jpg",
      desc:"Is your vehicle in the shop? After an accident the average time for repair is two weeks. We have the vehicle you need to keep your life moving."
    },
    {
      id: 5,
      image: "https://st2.depositphotos.com/3489481/5215/i/600/depositphotos_52152461-stock-photo-happy-smiling-young-attractive-woman.jpg",
      desc:"Our iOS and Android apps make it easier than ever to manage reservations on the go."
    },
    {
      id: 6,
      image: "https://st.depositphotos.com/1017986/3307/i/600/depositphotos_33073371-stock-photo-man-with-car-documents-outside.jpg",
      desc:"Every day at Enterprise Rent-A-Car is different. We care about what our customers think and how they feel."
    },
  ]

  return (
    <div className=' gap-3  mx-auto d-flex flex-wrap' style={{marginLeft:"200px", marginTop:"50px"}}>
{
      blogBox.map((i) => (      <div className='card w-25  d-flex flex-column justify-content-end p-0  ' style={{ height: "300px", backgroundImage: `url(${i.image})`, backgroundSize: "cover" }}>
      <div className='cardFooter p-3 d-flex flex-column '>
        <div className='card-desc bg-black text-white p-2 text-center font-weight-light  '><h6 className='m-0'>{i.desc}</h6></div>
        <button className='bg-third text-white m-0'>Detailed Info</button>
      </div>
    </div>)
  
      )
}
    </div>


  )
}

export default CarBlog