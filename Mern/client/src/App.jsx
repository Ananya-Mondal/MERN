import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Users from './Users'
import CreatUser from './CreatUser'
import Updateuser from './Updateuser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>} />
        <Route path='/Create' element={<CreatUser/>} />
        <Route path='/Update/:id' element={<Updateuser/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
