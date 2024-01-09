import React from 'react'
import { BsEnvelopeFill,BsFillMicFill } from "react-icons/bs";
import { CgMoreR } from "react-icons/cg";
function Coffee() {
  return (
    
    <div >
       
        <main className="grid min-h-full  rounded-2xl  bg-white ml-9 mt-9 ">
         {/* <h1 className='bg-slate-100 h-8  min-w-full pl-8 rounded-2xl rounded-b-none'><BsEnvelopeFill /> <b>Cofffe?</b> Mail from Marisa Lu</h1>
            */}
         <h1 className='bg-slate-100 h-8 min-w-full pl-8 rounded-2xl rounded-b-none flex items-center'>
          <BsEnvelopeFill className="mr-2" />
          <b>Cofffe?</b> Mail from Marisa Lu
          <BsFillMicFill className='ml-auto mr-8' />
        </h1>
         <p className='justify-end text-right text-gray-300 mr-6 mt-2'>just now</p>
         <div className='lg:px-8 rounded-lg'>
        <p className=" place-items-start justify-start text-start mt-1 ">Marisa Lu</p>
         <p className='text-bold text-2xl sm:text-2xl mt-2'><b>Coffee?</b></p>
          <h1 className="mt-4   tracking-tight text-gray-900 sm:text-xl">Hey jason, </h1>
          <p className="mt-5 text-base leading-7  text-gray-500" >Was wodering if you i'd intersted meeting my tram it.</p>
           <p className='text-gray-500'> plase Coffee at 11 pm today no Presuree if you cant make it,</p>
           <p className=' text-gray-500'>althrough i think you gyus woulds really algoing!</p>
           
            <p>Marisa</p>

          <div className="mt-7 flex items-center  gap-x-6 sm:pb-5 ">
             <button
             className="rounded-md border px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reply
           </button> 
           <button
             className="rounded-md border px-2.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Forword
           </button> 
           <button
             className="rounded-md border px-2.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Delete
           </button> 
           </div>
  
          <h5 className='mb-2 text-gray-400 flex items-center'>
            <CgMoreR className="mr-2" /> More Action
          </h5>
            </div>
        </main>
        </div>
   
  )
}

export default Coffee
