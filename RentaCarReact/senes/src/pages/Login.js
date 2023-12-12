import React from 'react'
import LogInComp from '../components/LogInComp/LogInComp';

const Login = (props) => {
    
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <LogInComp user={props.user} girisyapan={props.girisyapan} setGirisYapan={props.setGirisYapan} rentHistory={props.rentHistory} setRentHistory={props.setRentHistory}  />
        </div>
      )
    }

export default Login