import { createSlice } from '@reduxjs/toolkit';

export const coleccionistSlice = createSlice({
    name: 'coleccionista',
    initialState: null,
    reducers: {
        setColeccionistSlice: (state, action) => action.payload
    }
})

export const {  setColeccionistSlice } = coleccionistSlice.actions;

export default coleccionistSlice.reducer;
