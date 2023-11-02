import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetchData from '../../helpers/fetchData'


const initialState = {
    character: [],
}

export const getCharacter = createAsyncThunk(
    'caracter/getCaracter', async ({query, variables = {}}, { dispatch }) => {
        const data = await fetchData(
            query,
            {
                variables
            }
        )
        dispatch(setCharacter(data.data))
    }
)

export const characterSlice = createSlice({
    name: 'caracter',
    initialState,
    reducers: {
        setCharacter: (state, action) => {
            state.character = action.payload
        }
    }
})

export const { setCharacter } = characterSlice.actions

export default characterSlice.reducer