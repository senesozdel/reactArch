import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const PayModul = ({ sepet,setSepet,setCounter,setGoster,setGizle,bakiye,setBakiye }) => {

    const [totalPrice, setTotalPrice] = useState(0)


   
    useEffect( ()=>{
        hesapla()
    },[sepet]);

    const hesapla = () => {
        let total = 0;
        for (let i = 0; i < sepet.length; i++) {
            total += sepet[i].price

        }

        setTotalPrice(total)

    }
    const satinAl = ()=>{

        setBakiye(bakiye-totalPrice);

    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >

            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Shopping Cart</Modal.Title>
                    <Button onClick={()=>{setGoster(false); setGizle(false)}}  variant="outline-danger">X</Button>
                </Modal.Header>
                {sepet.map((item,index) => <div>


                    <Modal.Body className='d-flex justify-content-around align-items-center'>
                        <h5>{index+1}. Product: {item.productName}</h5>
                        <h5>Price: {item.price}TL</h5>
                    </Modal.Body>
                </div>)}

                <Modal.Footer className='d-flex gap-3 jusftify-content-center align-items-center'>
                    {typeof(sepet[0])=== 'object' &&  
                   <div className='btn-group d-flex gap-2'>
                   <Button className='rounded-2' onClick={()=>{setSepet([]) ;setCounter(0)}}  variant="outline-dark">Sepeti Temizle</Button>

             {bakiye>totalPrice ? 
 <Button className='rounded-2' variant='outline-success' onClick={()=> {setSepet([]); satinAl(); setCounter(0); }}>Satın Al</Button>   :
 <div className='navbar-item bg-danger align-items-center d-flex rounded-2'><h6 className='px-2 text-white'> Yetersiz Bakiye</h6></div>
 }
                   </div>
                }

                    <h4>Total Price: {totalPrice}TL </h4>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    )
}

export default PayModul