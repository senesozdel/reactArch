



import React,{useState} from 'react'
import CarCard from './CarCard'

const CarsData = ({rentalTime,startDay,startMonth,startYear,endDay,endMonth,endYear,recieveDate}) => {



    const [carsData,setcarsData] = useState([
    
    
    
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
            title: "Mazda MX-5",
            start_production: 1989,
            class: "Sports car Roadster",
            price: 150,
            status: true
    
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
            title: "Volkswagen Kübelwagen",
            class: "Military vehicle",
            price: 170,
            status: true
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
            title: "Porsche Cayenne",
            price: 180,
            class: "Mid-size luxury crossover SUV",
            status: true
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
            title: "Vauxhall Chevette",
            price: 140,
            class: "Supermini",
            status: true
    
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
            title: "Dymaxion car",
            price: 135,
            class: "Concept car",
            status: false
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
            title: "Ford Crown Victoria",
            price: 78,
            class: "Full-size Ford",
            status: false
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
            title: "Plymouth Superbird",
            price: 185,
            class: "Muscle car(today) and Race car(Past)",
            status: true
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
            title: "Saab 9000",
            price: 210,
            class: "Executive car",
            status: true
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
            title: "Pontiac Sunfire",
            price: 140,
            class: "Compact",
            status: false
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG",
            title: "AMC Javelin",
            price: 130,
            class: "Unbulleted list| Pony car | Muscle car",
            status: true
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
            title: "Jaguar X-Type",
            price: 140,
            class: "Compact executive car",
            status: false
        },
    ]) 
    
  return (
    <div>
        <CarCard carsData={carsData} setcarsData={setcarsData} rentalTime={rentalTime} startDay={startDay} startMonth={startMonth} startYear={startYear}
            endDay={endDay} endMonth={endMonth} endYear={endYear} recieveDate={recieveDate} />
    </div>
  )
}

export default CarsData