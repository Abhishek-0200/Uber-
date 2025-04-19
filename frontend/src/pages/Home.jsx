import React, { useEffect } from 'react'

const Home = () => {

  const [panelOpen , setPanelOpen] = React.useState(false);
  const isPanelOpen = React.useRef(null);
  

  // useEffect(() => {
  //   if(panelOpen) {
  //     isPanelOpen.current.classList.remove('hidden');
  //     isPanelOpen.current.classList.add('h-[75%]');
      
  //   } else {
  //     isPanelOpen.current.classList.remove('flex');
  //     isPanelOpen.current.classList.add('hidden');
  //   }
  // },[panelOpen]);

  return (
    <div className='h-full w-full  flex flex-col justify-between relative'>
      <img  src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" className=' absolute top-5 left-5 w-16' alt="Uber Logo" />
      <img className='h-full w-full object-cover ' src="https://blog.imqa.io/content/images/2021/03/uber-sample.gif" alt="" />
      
      <div className='absolute  w-full h-full bg-white '>

          <div className=' bg-white w-full px-3 py-2 h-[25%] '>
            <h1 className='text-xl font-medium  ml-3 text-start mb-2 '>Find a trip</h1>
            
            <form onSubmit={(e) => submitHnandler(e)} className='flex  flex-col gap-2 w-full px-3'>
            <input type="text" onClick={ () => setPanelOpen(!panelOpen) } placeholder='enter the start point' className=' w-full bg-[#eee] text-lg px-5 py-2 rounded-md my-1' />
            <input type="text" placeholder='enter the end point' className=' w-full bg-[#eee] text-lg px-5 py-2 rounded-md my-1' />

            </form>
          </div>
            <div ref={isPanelOpen} className=' bg-red-400 h-0  '>

            </div>
      </div>
      
    </div>
  )
}

export default Home