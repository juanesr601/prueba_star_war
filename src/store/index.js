import { configureStore } from '@reduxjs/toolkit'
import coleccionista from './slices/coleccioniste.slice'

export default configureStore({
    reducer: {
        coleccionista
    }
})