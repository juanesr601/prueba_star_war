import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const LaminaStarship = ({ url }) => {

  const [starships, getStarships] = useFetch(url)
 
  useEffect(() => {
    getStarships()
   
  }, [])

  console.log(starships);
  
  return (
    <article className="naves">

      <header className="title__starships">
        <h2>{starships?.name}</h2>
      </header>
      <section className="info__starships">
        <ul className="info__cargo">
            <h3 className="title__cargo">Capacidad de carga</h3>
            {
                starships?.cargo_capacity
            }
        </ul>
        <ul className="info__consumables">
            <h3 className="title__consumables">Sumitros</h3>
            {
                starships?.consumables
            }
        </ul>
        <ul className="info__crew">
            <h3 className="title__crew">Capacidad de tripulantes</h3>
            {
                starships?.crew
            }
        </ul>
        <ul className="info__length">
            <h3 className="title__length">Tamaño</h3>
            {
                starships?.length
            }
           
        </ul>
      </section>
    </article>
  )
}



export default LaminaStarship
