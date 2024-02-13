
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import Laminas from '../ObternerLaminas/Laminas'

const People = () => {


  const url = "https://swapi.dev/api/people/?page=2&format=json"
  const [ peoples, getPeople ] = useFetch(url)


  useEffect(() => {
    getPeople()
  }, [])

 

  return (

      <div className='origin__people'>
        
        {
          peoples?.results.map(star => (
            <Laminas
            key={star.url}
            url={star.url}
            />
          ))
          
        }
      </div>
  )
}

export default People
