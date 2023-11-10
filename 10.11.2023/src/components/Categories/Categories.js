import React from 'react'
import CategoryCart from './CategoryCart'


const Categories = () => {

    const productCart=[
        {
          title: "Telefon",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          price: 25
        },
        {
          title: "Laptop",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          price: 32
        },
        {
          title: "AirPods",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 50
        },
        {
          title: "Tablet",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          price: 70
        },
        {
          title: "Akıllı Saat",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          price: 80
        },
      ]

  return (  
    <div>
        <CategoryCart productcard={productCart}  />
    </div>
  )
}

export default Categories