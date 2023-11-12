import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationbar from '../Navbar/NavigationBar';
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryCart = ({ productcard,setProductCard }) => {

    const [sepet, setSepet] = useState([]);


    const [counter, setCounter] = useState(0);


    const [gizle, setGizle] = useState(false);

const[newProName,setNewProName] = useState()
const[newProPrice,setNewProPrice] = useState()
const[newProImage,setNewProImage] = useState()
const[newProDesc,setNewProDesc] = useState()


    const sepeteEkle = (item) => {



        setSepet([...sepet, {
            productName: item.title,
            price: item.price
        }])
        setCounter(counter + 1)
    }

    return (
        <div>
            <Navigationbar sepet={sepet} setSepet={setSepet} counter={counter} setCounter={setCounter} setGizle={setGizle} />



            {gizle === false &&
                <div className='d-flex gap-1 mt-5 ms-5'>

                    <ul className='d-flex column-3 gap-3 p-0 flex-wrap  '>
                        {productcard.map((item) => <li className='list-unstyled'>
                            <Card style={{ width: '18rem' }} className='bg-light'>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text className=' text-start' >
                                        {item.desc}
                                    </Card.Text>
                                    <Card.Text className='d-flex gap-2 justify-content-center'>
                                        Price: <h5>{item.price}TL</h5>
                                    </Card.Text>
                                    <Button onClick={() => sepeteEkle(item)} variant="success">Sepete Ekle</Button>

                                </Card.Body>
                            </Card>
                        </li>)}
                    </ul>

                    <div className='d-flex flex-column gap-2 w-50'>

                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h3>Add Products</h3></ListGroup.Item>
                                <ListGroup.Item className='d-flex flex-column gap-2 align-items-center'>
                                    <input placeholder='Insert New Product Name' value={newProName} type="text" onChange={(e)=> setNewProName(e.target.value)}  />
                                    <input placeholder='Insert Price' value={newProPrice} type="number" onChange={(e)=> setNewProPrice(parseInt(e.target.value))}   />
                                    <input placeholder='Insert Desciription' value={newProDesc} type="text" onChange={(e)=> setNewProDesc(e.target.value)}   />
                                    <input placeholder='Insert Image Url' type="text" value={newProImage} onChange={(e)=> setNewProImage(e.target.value)}   />
                                    <Button className='w-50 ' onClick={()=> {setProductCard([...productcard,{title: newProName, desc: newProDesc, price: newProPrice, image: newProImage }]); setNewProPrice(" "); setNewProDesc(" "); setNewProImage(" ");setNewProName(" ")}}>Add Product</Button>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </div>
                </div>



            }







        </div>
    )
}

export default CategoryCart