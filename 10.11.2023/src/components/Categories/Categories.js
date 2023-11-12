import React, {useState} from 'react'
import CategoryCart from './CategoryCart'


const Categories = () => {

    const [productCart,setProductCard] = useState([
        {
          title: "Telefon",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          image: " https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg",
          price: 25
        },
        {
          title: "Laptop",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          image:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08478684.png",
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
        }])
      

  return (  
    <div className='bg-body-secondary'>

      
        <CategoryCart productcard={productCart} setProductCard={setProductCard}  />
    </div>
  )
}

export default Categories