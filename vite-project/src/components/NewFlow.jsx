import React from 'react'

function NewFlow() {
  return (
    <div>
       <main className="grid min-h-full rounded-2xl place-items-center bg-white px-6 py-24 sm:py-10 lg:px-8  ml-9 mt-9 items-center">
       <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            + New Flow
            </button>
              
           
           
           </div>
        <div className="text-center">
         <p className="text-base font-semibold">You can Add data</p>
          {/* <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1> */}
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the Data you’re looking for.</p>
          
        </div>
      </main>
    </div>
  )
}

export default NewFlow
