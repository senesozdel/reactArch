import React from 'react'
import CategoryCart from './CategoryCart'


const Categories = () => {

    const productCart=[
        {
          title: "Telefon",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          image: " https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg",
          price: 25
        },
        {
          title: "Laptop",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg",
          price: 32
        },
        {
          title: "AirPods",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg",
          price: 50
        },
        {
          title: "Tablet",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          image: " https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg",
          price: 70
        },
        {
          title: "Akıllı Saat",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg",
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