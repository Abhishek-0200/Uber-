import React, { useRef, useEffect, use } from 'react'
import gsap from 'gsap';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {

  const [panelOpen , setPanelOpen] = React.useState(false);
  const [startPoint , setStartPoint] = React.useState("");
  const [endPoint , setEndPoint] = React.useState("");
  const [vehiclePanelOpen , setVehiclePanelOpen] = React.useState(false);
  const [confirmPanelOpen, setCofirmPanelOpen] = React.useState(false);
  const [selectedVehicle , setSelectedVehicle] = React.useState(null);
  const [vehicleConfirmed , setVehicleConfirmed] = React.useState(false);
  const [waitingForDriver, setWaitingForDriver] = React.useState(false);
  
  const confirmPanelRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const vehicleFoundRef = useRef(null)
    const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)


  const panelCloseRef = useRef(null)
  const submitHnandler = (e) => {
    e.preventDefault();
   }

  


   useEffect(() => {
    
    if(panelOpen)
    {
      gsap.to(panelRef.current, {
        height: "75%",
        duration: 0.5,
        padding: "1rem",
        onStart: () => {
          panelCloseRef.current.classList.remove('hidden');
        }
      },)
    }else {
      gsap.to(panelRef.current , {
        height: "0%",
        duration: 0.5,
        padding: "0rem",
        onStart: () => {
          panelCloseRef.current.classList.add('hidden');
        }
      })
    }
   } ,[panelOpen] )
   useEffect(() => {
    if(vehiclePanelOpen)
    {
      gsap.to(vehiclePanelRef.current, {
        translateY: "0%",
        duration: 0.5,
      })
    }else {
      gsap.to(vehiclePanelRef.current , {
        translateY: "100%",
        duration: 0.5,
      })
    }
   }, [vehiclePanelOpen] );
   useEffect(() => {
    if(confirmPanelOpen)
    {
      gsap.to(confirmPanelRef.current, {
        translateY: "0%",
        duration: 0.5,
      })
    }else {
      gsap.to(confirmPanelRef.current , {
        translateY: "100%",
        duration: 0.5,
      })
    }
   }, [confirmPanelOpen] );



   useEffect(() => {
    if(vehicleConfirmed)
    {
      gsap.to(vehicleFoundRef.current, {
        translateY: "0%",
        duration: 0.5,
      })
    }else {
      gsap.to(vehicleFoundRef.current , {
        translateY: "100%",
        duration: 0.5,
      })
    }
   }, [vehicleConfirmed] );
   useEffect(() => {
    if(waitingForDriver)
    {
      gsap.to(waitingForDriverRef.current, {
        translateY: "0%",
        duration: 0.5,
      })
    }else {
      gsap.to(waitingForDriverRef.current , {
        translateY: "100%",
        duration: 0.5,
      })
    }
   }, [vehicleConfirmed] );

  
  return (
    <div className='h-screen w-full overflow-hidden relative'>
      <img  src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" className=' absolute top-5 left-5 w-16' alt="Uber Logo" />
      <img className='h-full w-full object-cover 
       ' src="https://blog.imqa.io/content/images/2021/03/uber-sample.gif" alt="" />
      
      <div  className='  flex flex-col justify-end h-screen w-full   absolute top-0 '>

          <div  className='  relative bg-white  w-full px-3 h-[25%] py-2 '>
           <div ref={panelCloseRef} onClick={() => { setPanelOpen(false)}} className=' absolute top-2 right-5 text-3xl cursor-pointer  '>
          <i className="ri-arrow-down-s-line"></i>

           </div>
            <h1 className='text-xl font-medium  ml-3 text-start my-3 '>Find a trip</h1>
            
            <form onSubmit={(e) => submitHnandler(e)} className='flex  flex-col gap-2 w-full px-3'>
            <input value={startPoint} onChange={(e) => setStartPoint(e.target.value)} type="text" onClick={ () => {
          
              setPanelOpen(true)} } placeholder='enter the start point' className=' w-full bg-[#eee] text-lg px-5 py-2 rounded-md my-1' />
            <input type="text" onClick={() => {
              setPanelOpen(true)
            }} value={endPoint} onChange={(e) => setEndPoint(e.target.value)} placeholder='enter the end point' className=' w-full bg-[#eee] text-lg px-5 py-2 rounded-md my-1' />

            </form>
          </div>
            <div ref={panelRef} className=' bg-white  h-0  '>
                <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen = {setVehiclePanelOpen} />
            </div>
      </div>
      <div ref={vehiclePanelRef} className=' fixed bottom-0 w-full h-1/2 translate-y-full z-10  bg-white '>

          <VehiclePanel setSelectedVehicle ={setSelectedVehicle} setCofirmPanelOpen={setCofirmPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />

      </div>
      
      <div ref={confirmPanelRef} className=' fixed bottom-0 w-full h-[60%] translate-y-full z-10  bg-white '>

            <ConfirmRide setVehicleConfirmed={setVehicleConfirmed} selectedVehicle={selectedVehicle} setCofirmPanelOpen={setCofirmPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />

      </div>
      <div ref={vehicleFoundRef} className=' fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 '>

            <LookingForDriver setVehicleConfirmed={setVehicleConfirmed}  />

      </div>
      <div ref={waitingForDriverRef} className='fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver
                    setVehicleConfirmed={setVehicleConfirmed}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} />
            </div>
    </div>
  )
}

export default Home