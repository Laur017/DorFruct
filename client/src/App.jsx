/* eslint-disable no-unused-vars */
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/NavbarPage/Navbar'
import HomePage from './components/HomePage/HomePage'

function App() {

  return (
    <div className='app-main-div'>
      <Routes>
          {/* <Route path='/' element={<Home handleCover={handleCover}/>} /> */}
      </Routes>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App
