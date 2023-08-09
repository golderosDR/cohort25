import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onChangeSearch(state, action) {
            // action (type, payload) => type: string, payload: string(title)
            state.searchValue = action.payload
        }
    }
})

export const selectSearch = (state) => state.search;

export const {
    onChangeSearch
} = searchSlice.actions

export default searchSlice.reducer;