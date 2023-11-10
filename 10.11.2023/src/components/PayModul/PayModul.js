import React, { useState } from 'react'
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PayModul = ({ sepet }) => {

    const [totalPrice, setTotalPrice] = useState(0)

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
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                {sepet.map((item) => <div>


                    <Modal.Body className='d-flex gap-3 align-items-center'>
                        <h5>{item.productName}</h5>
                        <h5>Price: {item.price}TL</h5>
                    </Modal.Body>
                </div>)}
                <ModalBody className='d-flex gap-3 align-items-center'>
                    <h5></h5>

                </ModalBody>
                <Modal.Footer className='d-flex gap-3 jusftify-content-between align-items-center'>
                    <h5>Total Price: {totalPrice} </h5>
                    <Button onClick={hesapla} variant="primary">Calculate Total Price</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    )
}

export default PayModul