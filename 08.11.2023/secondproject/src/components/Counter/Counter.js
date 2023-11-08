import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap';



const Counter = () => {

    const [number, setNumber] = useState(0)
    

    
    return (
        <>
            <div className='counter'>
                <h2>Count: {number}</h2>
            </div>
            <div className='counter-buttons d-flex gap-3'>
                <div className='artır'>
                    <Button
                        color="success"
                        outline
                        onClick={()=> setNumber(number+1)}
                    >
                        Artır
                    </Button>
                    {' '}
                </div>
                <div className='azalt'>
                    <Button
                        color="danger"
                        outline
                        onClick={()=> setNumber(number-1)}
                    >
                        Azalt
                    </Button>
                    {' '}
                </div>
            </div>

        </>

    )
}

export default Counter