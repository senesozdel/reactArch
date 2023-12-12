import React from 'react'
import SignUpComp from '../components/SignUpComp/SignUpComp'


const SignUp = ({user,setUser,}) => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <SignUpComp user={user} setUser={setUser} />
    </div>
  )
}

export default SignUp