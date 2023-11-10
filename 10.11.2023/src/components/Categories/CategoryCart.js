import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationbar from '../Navbar/NavigationBar';

const CategoryCart = ({ productcard }) => {

    const [sepet, setSepet] = useState([]);

    const sepeteEkle = (item)=>{
        setSepet([...sepet,{
            productName: item.title,
            price: item.price
        }])
    }

    return (
        <div>
                 <Navigationbar sepet={sepet}  />

            <ul className='d-flex column-3 gap-3 p-0 flex-wrap w-75'>
                {productcard.map((item) => <li className='list-unstyled'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text className=' text-start' >
                                {item.desc}
                            </Card.Text>
                            <Card.Text>
                                Price: {item.price}TL
                            </Card.Text>
                            <Button onClick={()=>sepeteEkle(item) } variant="success">Sepete Ekle</Button>
                            <Card.Text>

                             <ul>
                                {sepet.map((i)=>
                                
                                <li>
                                    {i.productName}
                                </li>

                                )}
                            </ul> 
                              


                            </Card.Text>
                        </Card.Body>
                    </Card>
                </li>)}
            </ul>
                   





        </div>
    )
}

export default CategoryCart