import { useRef } from "react"
import { setColeccionistSlice } from "../store/slices/coleccioniste.slice"
import { useDispatch,} from 'react-redux'
import { useNavigate } from "react-router-dom"


const Welcome = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const inputColeccionist = useRef()
    const handleColeccionist = e => {
        e.preventDefault()
        dispatch(setColeccionistSlice(inputColeccionist.current.value.trim()))
        navigate('/album')
    }

    return (
    <div className="inicio">
        <h1 className="init__welcome">Bienvenido</h1>
        <p className="init__name">Ingresa tu nombre para comenzar</p>
        <form  onSubmit={handleColeccionist}>
        <input className="barra" ref={inputColeccionist} type="text" />
        <button className="button">Empezar</button>
        </form>
    </div>
    )
}

export default Welcome
