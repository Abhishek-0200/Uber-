import React from 'react'

const LocationSearchPanel = (props) => {


    const locations = [
        { id: 1, name: '25, Shiv Sundar Vihar , Goner Road, Jaipur , Rajashthan' },
        { id: 2, name: '2B Laxmi Nagar , Goner Road, Jaipur , Rajashthan' },
        { id: 3, name: '3B Shiv Vihar , Goner Road, Jaipur , Rajashthan' },
    ]

  return (
      
      <div className=' flex flex-col items-center w-full h-full '>
    {
        locations.map((location) => (
          
          <div onClick={() =>{ props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} key={location.id} className=' w-full my-3 flex items-center border border-gray-100 py-4 rounded-2xl px-2 active:border-black justify-start gap-3'>
                <div className=' bg-[#eee] w-20 h-12 rounded-full flex items-center justify-center text-2xl'> <i className="ri-map-pin-2-fill"></i> </div>
                <div>
                    <h1 className=' text-xl font-medium '> {location.name}</h1>
                </div>
            </div>
        ))
    }
    </div>

  
  )
}

export default LocationSearchPanel