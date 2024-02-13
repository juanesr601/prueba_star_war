import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"




const Laminas = ({ url }) => {

 
  const [people, getPeople] = useFetch(url)
  

  useEffect(() => {
    
    getPeople()
    
  }, [])

  console.log(people);
  
  return (
    <article className="personajes">

      <header className="title__people">
        <h2>{people?.name}</h2>
      </header>
      <section className="info__people">
        <ul className="info__eyes">
          <h3 className="title__eyes">Color de ojos</h3>
         {
          people?.eye_color
         }
        </ul>
        <ul className="info__gender">
          <h3 className="title__gender">Genero</h3>
        {
          people?.gender
         }
        </ul>
        <ul className="info__hair">
          <h3 className="title__hair">Color de pelo</h3>
        {
          people?.hair_color
         }
        </ul>
        <ul className="info__skin">
          <h3 className="title__skin">Color de piel</h3>
        {
          people?.skin_color
         }
        </ul>
        <ul className="info__peso">
          <h3 className="title__peso">Peso</h3>
          {
            people?.mass
          }
          
        </ul>
        <ul className="info__height">
          <h3 className="title__height">Estatura</h3>
          {
            people?.height
          }
        </ul>
      </section>
    </article>
  )
}

export default Laminas
