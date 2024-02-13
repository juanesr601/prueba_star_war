import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import LaminaFilms from '../ObternerLaminas/LaminaFilms'

const Peliculas = () => {


  const url = "https://swapi.dev/api/films/?format=json"
  const [ films, getFilms ] = useFetch(url)


  useEffect(() => {
    getFilms()
  }, [])

  

  return (

      <div className='origin__films'>
        {
          films?.results.map(star => (
            <LaminaFilms
            key={star.url}
            url={star.url}
            />
          ))
        }
      
      </div>
  )
}

export default Peliculas
