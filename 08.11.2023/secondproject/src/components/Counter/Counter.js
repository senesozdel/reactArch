import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap';



const Counter = () => {

    const [number, setNumber] = useState(0)
    

    
    return (
        <>
        
            <div className='counter d-flex flex-column w-25  align-items-center'>
                <h2>Count: {number}</h2>
                <div className='counter-buttons d-flex gap-3'>
                <div className='artır'>
                    <Button
                        color="success"
                        outline
                        onClick={()=> {
                            if(number===10){
                                setNumber(10)
                            }
                            else{
                                setNumber(number+1)
                            }
                          
                        }}
                    >
                        Artır
                    </Button>
                    {' '}
                </div>
                <div className='azalt'>
                    <Button
                        color="danger"
                        outline
                        onClick={()=> {
                            if(number===0){
                                setNumber(0)
                            }
                            else{
                                setNumber(number-1)
                            }
                          
                        }}
                    >
                        Azalt
                    </Button>
                    {' '}
                </div>
            </div>
            </div>


        </>

    )
}

export default Counter