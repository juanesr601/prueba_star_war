import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const LaminaFilms = ({ url }) => {

  const [films, getFilms] = useFetch(url)
 
  useEffect(() => {
    getFilms()
   
  }, [])

  console.log(films);
  
  return (
    <article className="films">

      <header className="title__films">
        <h2>{films?.title}</h2>
      </header>
      <section className="info__films">
        <ul className="info__episode">
            <h3 className="episode__title">Episodio</h3>
            {
                films?.episode_id
            }
        </ul>
      </section>
    </article>
  )
}

export default LaminaFilms
