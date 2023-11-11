import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const PayModul = ({ sepet,setSepet,setCounter,setGoster,setGizle }) => {

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
                <Button onClick={()=>{setSepet([]) ;setCounter(0)}}  variant="outline-dark">Sepeti Temizle</Button>
                    <h4>Total Price: {totalPrice}TL </h4>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    )
}

export default PayModul