import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    character: [],
}

export const getCharacter = createAsyncThunk(
    'caracter/getCaracter', async ({query, page}, { rejectWithValue, dispatch }) => {
        const res = await axios(`https://rickandmortyapi.com/api/${query}/?page=${page}`)
        dispatch(setCharacter(res.data))
    }
)

export const getSingleCharacter = createAsyncThunk(
    'caracter/getCaracter', async ({query, id}, { rejectWithValue, dispatch }) => {
        const res = await axios(`https://rickandmortyapi.com/api/${query}/${id}`)
        dispatch(setCharacter(res.data))
    }
)

export const characterSlice = createSlice({
    name: 'caracter',
    initialState,
    reducers: {
        setCharacter: (state, action) => {
            state.character = action.payload
        }
    },
    // extraReducers: {
    //     [getCharacter.fulfilled]: () => console.log('fulfilled'),
    //     [getCharacter.pending]: () => console.log('pending'),
    //     [getCharacter.rejected]: () => console.log('rejected'),
    // },
})

export const { setCharacter } = characterSlice.actions

export default characterSlice.reducer