import React from 'react';
import { Link } from 'react-router-dom';
import { BsEnvelopeFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-full h-screen text-black sm:w-1/6 bg-slate-200">
      <div className='flex items-center gap-2'>
        <b className='ml-5 mt-6 text-3xl font-bold tracking-tight text-gray-500'>Review Inbox</b>
      </div>
      <div className=''>
        <br />
        {/* Content of the sidebar goes here */}
        <Link to='/newflow'>
          <p className='pl-4 text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            + New Flow
          </p>
        </Link>
        <Link to='/coffee'>
          <p className='pl-4  gap-2 flex items-center text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            Coffee Marisa Lu  <BsEnvelopeFill />
          </p>
        </Link>
        <Link to='/feedback'>
          <p className='pl-4 gap-2 flex items-center text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            FeedBack <BsEnvelopeFill />
          </p>
        </Link>
        <Link to='/postgrad'>
          <p className='pl-4  gap-2 flex items-center text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            Post-grad plans <BsEnvelopeFill />
          </p>
        </Link>
        <Link to='/launchplan'>
          <p className='pl-4  gap-2 flex items-center text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            Launch plan <BsEnvelopeFill />
          </p>
        </Link>
        <Link to='/vactoria'>
          <p className='pl-4 text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            Vactoria Wang
          </p>
        </Link>
        <Link to='/advait'>
          <p className='pl-4 text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            Advait kalakkad
          </p>
        </Link>
        <Link to='/danny'>
          <p className='pl-4 text-gray-500 hover:bg-slate-300 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
            Danny Trich
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { BsEnvelopeFill  } from "react-icons/bs";

// const Sidebar = () => {
//   return (
//     <>  
    
//       <div className="w-full h-screen text-black  sm:w-1/6 bg-slate-200">
        
//           <h1 className=' flex items-center'>
//             <b className=' ml-5 mt-6  text-3xl font-bold tracking-tight text-gray-500'>Review Inbox</b>
//           </h1>
//           <div className=''>
//          <br></br> 
//           {/* Content of the sidebar goes here */}
       
//          <Link to='/newflow' ><p className='pl-4 text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//          + New Flow</p>
//          </Link>
//         <Link to='/coffee' > <p className='pl-4 text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//          Coffee Marisa Lu <BsEnvelopeFill/>
//           </p>
//          </Link>

//           <Link to='/feedback'><p className='pl-4 text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//          FeedBack <BsEnvelopeFill />
//          </p>
//          </Link>
//           <Link to='/postgrad'><p className='pl-4  text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//           Post-grad plans <BsEnvelopeFill />
//             </p>
//           </Link>
//           <Link to='/launchplan'><p className='pl-4 text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//           Launch plan <BsEnvelopeFill />
//             </p>
//           </Link>
//           <Link to='/vactoria'><p className='pl-4 text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//           Vactoria Wang </p></Link>
//           <Link to='/advait'><p className='pl-4 text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//           Advait kalakkad</p></Link>
//           <Link to='/danny'><p className='pl-4 text-gray-500  hover:bg-slate-300 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
//           Danny Trich </p></Link>
         
//          </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;
