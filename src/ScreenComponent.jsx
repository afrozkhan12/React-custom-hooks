import React from 'react'
import useScreen from './useScreen'
export const ScreenComponent = () => {
    const screenSize = useScreen();
  return (
   <>
   <div className="text-slate-600 font-semibold mt-2" >
   <h1 className="text-3xl ">Screen width checker</h1>
   <h2 className="text-xl "  >Now we are in <span className='text-xl text-slate-800'>{screenSize}</span> screen </h2>
   </div>
   </>
  )
}
