import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationbar from '../Navbar/NavigationBar';

const CategoryCart = ({ productcard }) => {

    const [sepet, setSepet] = useState([]);

    const [counter,setCounter]= useState(0);


    const [gizle,setGizle] = useState(false);

      

    const sepeteEkle = (item)=>{



        setSepet([...sepet,{
            productName: item.title,
            price: item.price
        }])
        setCounter(counter+1)
    }

    return (
        <div>
                 <Navigationbar sepet={sepet} setSepet={setSepet} counter={counter} setCounter={setCounter} setGizle={setGizle}/>

                 {gizle === false &&
                 
                 <ul className='d-flex column-3 gap-3 p-0 flex-wrap w-75'>
                 {productcard.map((item) => <li className='list-unstyled'>
                     <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={item.image} />
                         <Card.Body>
                             <Card.Title>{item.title}</Card.Title>
                             <Card.Text className=' text-start' >
                                 {item.desc}
                             </Card.Text>
                             <Card.Text className='d-flex gap-2 justify-content-center'>
                                 Price: <h5>{item.price}TL</h5>
                             </Card.Text>
                             <Button onClick={()=>sepeteEkle(item) } variant="success">Sepete Ekle</Button>

                         </Card.Body>
                     </Card>
                 </li>)}
             </ul>
                    
                 
                 }

  





        </div>
    )
}

export default CategoryCart