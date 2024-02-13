import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import LaminaStarship from '../ObternerLaminas/LaminaStarship'

const Naves = () => {


  const url = "https://swapi.dev/api/starships/?page=2&format=json"
  const [ starships, getStarships ] = useFetch(url)


  useEffect(() => {
    getStarships()
  }, [])

  

  return (

      <div className='origin__starships'>
        {
          starships?.results.map(star => (
            <LaminaStarship
            key={star.url}
            url={star.url}
            />
          ))
        }
      
      </div>
  )
}

export default Naves
