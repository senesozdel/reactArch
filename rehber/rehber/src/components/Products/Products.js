import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Products() {

    const card = [

        {
            id: 1,
            desc: "1. description",
            title: "First Title",
            price: 25.00

        },
        {
            id: 2,
            desc: "2. description",
            title: "2. Title",
            price: 27.50

        },
        {
            id: 3,
            desc: "3. description",
            title: "3. Title",
            price: 45.50


        },
        {
            id: 4,
            desc: "4. description",
            title: "4. Title",
            price: 75.75

        },
    ]

    const[cardId,setCardId] = useState(0);
    const[cardDesc,setCardDesc] = useState(" ");
    const[sepet,setSepet] = useState([]);


    const shoppingCart = (card)=>{

      setSepet(card.price)

    }

  return (
    <div>

      



{card.map((item,index) =>  <ul> <li className='list-unstyled' key={index}>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>{item.title}</Card.Title>
  <Card.Text>
{item.desc}
  </Card.Text>
  <Button onClick={()=> shoppingCart(item)} variant="primary">{item.id}. Butona Bas</Button>
</Card.Body>
</Card>
</li>
<li>
    {sepet}
</li>

</ul>
)}

       

    </div>
  )
}

export default Products