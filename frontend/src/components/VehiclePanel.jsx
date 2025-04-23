import React from 'react'

const VehiclePanel = (props) => {

    const vehicles = [
        { id: 1, name: 'UberGo', seats: 4, time: '2 mins away', price: 193, image: 'https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' },
        { id: 2, name: 'Moto', seats: 1, time: '4 mins away', price: 65, image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' },
        { id: 3, name: 'Uber Auto', seats: 3, time: '5 mins away', price: 118.34, image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' }
    ];

  return (
    <div className='p-2 w-full h-full '>
        
        <div onClick={() => props.setVehiclePanelOpen(false)} className=' text-center text-2xl'>
        <i className="ri-arrow-down-wide-fill"></i>
        </div>
            <h1 className='ml-5 text-2xl font-medium text-start mb-2 '>Select Vehicle</h1>
       
        {vehicles.map((vehicle, idx) => {

     return   <div key={idx} onClick={() => {props.setCofirmPanelOpen(true)
        props.setSelectedVehicle(vehicle)
        props.setVehiclePanelOpen(false)
     }} className=' flex items-center justify-evenly p-3 my-1 border border-gray-100 rounded-xl active:border-black w-full'>
            <img className=" h-10" src={vehicle.image} alt="" />
            <div className=" ml-3 w-1/2" >
                <h4 className=' font-medium'>{vehicle.name}  <span> <i className="ri-user-fill"></i></span>4 </h4>
                <h4 className=' font-medium text-base'>{vehicle.time}</h4>
                <p className=' text-xs text-gray-400'>Affordable compact rides</p>
            </div>
            <h4 className=' text-lg font-semibold'>  {vehicle.price}</h4>
        </div>
        })}
           </div>
  )
}

export default VehiclePanel