import { useState } from 'react';

import { Link, useNavigate} from 'react-router-dom';


const SignUpComp = ({setUser,user }) => {

    const[newUserName,setnewUserName]= useState("");
    const[newUserPassword,setNewUserPassword]= useState("");
    const[newUserPasswordVerify,setNewUserPasswordVerify]= useState("");
    const navigate = useNavigate();

const signUp = ()=>{
    if(newUserName && newUserPassword && newUserPasswordVerify){


        for(let i=0;i<user.length;i++){
            if(user[i].name===newUserName){
                alert("Başka Kullanıcı Adı seçiniz")
                return
            }
            else{
                newUserPassword === newUserPasswordVerify && 
                setUser([...user,{
                    id: user.length+1,
                    name: newUserName,
                    password: newUserPassword

                 }])
                 alert("Kaydnız başarıyla Oluşturulmuştur Giriş ekranına yönlendiriliyorsunuz... ")
                 navigate('/')
                 return
            }
        }


    //     user.map((item)=>{
    //         if(item.name === newUserName){
    //             alert("Başka Kullanıcı Adı seçiniz")
    //            return
    //         }
    //         else{
    //             newUserPassword === newUserPasswordVerify && 
    //             setUser([...user,{
    //                 id: user.length+1,
    //                 name: newUserName,
    //                 password: newUserPassword

    //              }])
    //              alert("Kaydnız başarıyla Oluşturulmuştur Giriş ekranına yönlendiriliyorsunuz... ")
    //              return
    //         }
    //         }

    //   )

    }
}


  return (
    <div className='sign-modal d-flex flex-column rounded-3 align-items-center bg-dark-subtle lato border border-2 justify-content-between p-2 mt-5' >
        <div className='modal-title '>
            <h3>Welcome to SENESOZDEL</h3>
        </div>
        
        <div className='modal-body d-flex flex-column gap-3 justify-content-center'>
            <div className='username-block d-flex gap-2'>
            <i></i>
                <input className='rounded-1 bg-second' type="text" placeholder='Username' onChange={(e)=>setnewUserName(e.target.value)} />
            </div>
           <div className='password-blcok d-flex gap-2'>
            <i></i>
           <input  className='rounded-1 bg-second' type="email" placeholder='Password' onChange={(e)=>setNewUserPassword(e.target.value)} />
           </div>
           <div className='password-verify-blcok d-flex gap-2'>
            <i></i>
           <input  className='rounded-1 bg-second' type="email" placeholder='Verify Password'  onChange={(e)=>setNewUserPasswordVerify(e.target.value)} />
           </div>
          
   
        </div>
        <div className='modal-footer d-flex flex-column justify-content-center gap-3'>
            <button className='rounded-2   px-3 btn btn-success ' onClick={()=> signUp()}>SignUp</button>
            <h6 className='rubik text-danger-emphasis'>Are you already a member?<span >  Please <Link className='text-decoration-none' to="/">Login</Link></span></h6>
        </div>
    </div>
  )
}

export default SignUpComp