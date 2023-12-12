import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Enes from '../components/Enes/enes'

const Home = () => {

    const[helel,setApi] = useState([])

   useEffect=(()=> {axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{ setApi(response.data)})},[] )
console.log("https://jsonplaceholder.typicode.com/users")
  return (
    <div>

    <Enes >
        {helel}
        </Enes>    

    </div>
  )
}

export default Home