import React from 'react'
import Categories from '../components/Categories/Categories'
import ReservationForm from '../components/ReservationForm/ReservationForm'

const Home = ({ girisyapan,rentDetails,setRentDetails,rentHistory,setRentHistory ,}) => {

    return (

        <div className='justify-content-center d-flex h-100 ' >
            <ReservationForm  girisyapan={girisyapan} rentDetails={rentDetails} setRentDetails={setRentDetails} rentHistory={rentHistory} setRentHistory={setRentHistory} />

        </div>
    )
}
export default Home