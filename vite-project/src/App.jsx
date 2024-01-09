import './App.css'
import Sidebar from './Sidebar'
import { Routes,Route} from 'react-router-dom';
import Coffee from './components/Coffee';
import NewFlow from './components/NewFlow';
import Feedback from './components/Feedback';
import Postgradplan from './components/Postgradplan';
import Launch from './components/Launch';
import Vactoria from './components/Vactoria';
import Advait from './components/Advait';
import Danny from './components/Danny';
function App() {

  return (
    <>
       <div className='flex h-screen bg-slate-200'>
       {/* <h1 className='bg-slate-300 h-dvh ml-2 mr-2 mt-2 rounded-lg text-4xl '> Review Inbox</h1>
       */}
       <Sidebar/>
       <div>
       <Routes>
          <Route path="/" element={<Sidebar/>} />
          <Route path="/newflow" element={<NewFlow/>} />
          <Route path="/coffee" element={<Coffee/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/postgrad" element={<Postgradplan/>} />
          <Route path="/launchplan" element={<Launch/>} />
          <Route path="/vactoria" element={<Vactoria/>} />
          <Route path="/advait" element={<Advait/>} />
          <Route path="/danny" element={<Danny/>} />
        </Routes>
       </div>
       </div>
     
    
    </>
  )
}

export default App
