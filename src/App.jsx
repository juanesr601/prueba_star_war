
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Album from './pages/Album'
import ObtenerLaminas from './pages/ObtenerLaminas'
import Welcome from './pages/Welcome'
 './pages/ObtenerLaminas'

function App() {
 

  return (
    <>
    
      <div className="card">
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/obtenerLaminas' element={<ObtenerLaminas/>}/>
          <Route path='/album' element={<Album/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
