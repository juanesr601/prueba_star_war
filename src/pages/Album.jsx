import { useSelector } from 'react-redux'



import People from '../components/Album/People'
import Naves from '../components/Album/Naves'
import Peliculas from '../components/Album/Peliculas'


const Album = () => {

  const coleccionista = useSelector(store => store.coleccionista)


  return (
    
    <div className='album'>
      <p className='name__coleccionista'>Este es tu álbum {coleccionista}</p>
      <div className='films__album'>
      <h2 className='films__title'>Peliculas</h2>
        <Peliculas />
      </div>
      <div
      className='people__album'>
        <h2 className='people__title'>Personajes</h2>
        <People />
      </div>
      <div className='naves__album'>
        <h2 className='starship__title'>Naves</h2>
        <Naves />
      </div>
    </div>
  )
}

export default Album
