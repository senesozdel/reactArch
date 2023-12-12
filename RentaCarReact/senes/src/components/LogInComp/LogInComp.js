import React from 'react'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';


const LogInComp = ({user,setGirisYapan,rentHistory,setRentHistory}) => {
    const [checkUserName, setCheckUserName] = useState();
    const [checkUserPassword, setCheckUserPassword] = useState();
    const [checkUserPasswordVerify, setCheckUserPasswordVerify] = useState("");
    const [basarili,setBasarili] = useState(false)
    const navigate = useNavigate();

    const gecis = ()=>{
        navigate('/services')
    }
    console.log(user)

    const girisKullanici = (i)=>{
        setGirisYapan({id:user.length, name: user[i].name, password: user[i].password})


    }
    const loggedIn = () => {
        if (checkUserName && checkUserPassword && checkUserPasswordVerify) {


            for(let i=0;i<user.length;i++){
                
                if(user[i].name === checkUserName){

                    if(user[i].password === checkUserPassword && checkUserPassword === checkUserPasswordVerify){

                        setBasarili(true)
                        girisKullanici(i)
                        setTimeout(gecis,3000)
                    }
                }
                

            }
        }
      





        //     user.map((item) => {
        //         if (item.name !== checkUserName) {
        //             alert("Böyle bir kullanıcı bulunamadı")
               
        //         }
        //         else {
        //             if (checkUserPassword === checkUserPasswordVerify) {
        //                 if (checkUserPassword !== item.password) {
        //                     alert("Şifreyi Yanlış Girdiniz.")
        //                 }
        //                 else {
        //                         alert("giriş başarılı")
        //                         navigate('/contact')
        //                 }
        //             }
        //             else{
        //                 alert("şifreler eşleşmiyor")
        //             }
        //         }
        //     }
        //     )
        // }
        // else{
        //     alert("Tüm inputları doldurun")
        // }
    }

    return (
        <div className='sign-modal d-flex flex-column rounded-3 align-items-center bg-info-subtle lato border border-2 justify-content-between p-2 mt-5' >
            <div className='modal-title '>
                <h3>Welcome to SENESOZDEL</h3>
            </div>

            <div className='modal-body d-flex flex-column gap-3 justify-content-center align-items-center'>
                <div className='username-block d-flex gap-2'>
                    <i></i>
                    <input className='rounded-1 bg-second' type="text" placeholder='Username' onChange={(e) => setCheckUserName(e.target.value)} />
                </div>
                <div className='password-blcok d-flex gap-2'>
                    <i></i>
                    <input className='rounded-1 bg-second' type="text" placeholder='Password' onChange={(e) => setCheckUserPassword(e.target.value)} />
                </div>
                <div className='password-verify-blcok d-flex gap-2'>
                    <i></i>
                    <input className='rounded-1 bg-second' type="text" placeholder='Verify Password' onChange={(e) => setCheckUserPasswordVerify(e.target.value)} />
                </div>
                {basarili == true && <div className='text-success d-flex gap-2'>Giriş Başarılı, Ana sayfaya yönlendiriliyorsunuz...</div>}

            </div>
            <div className='modal-footer d-flex flex-column justify-content-center gap-3'>
                <button className='rounded-2   px-3 btn btn-success '  onClick={()=> loggedIn()} >Login</button>
                <h6 className='rubik text-danger-emphasis'>Not Registered Yet?<span >  Please <Link className='text-decoration-none' to="/sign-up">Sign-Up</Link></span></h6>
            </div>
            {user.name}
        </div>
    )
}

export default LogInComp