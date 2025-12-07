import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "Movies",
    initialState: {},
    reducers: {
        addNowPlayingMovies :(state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const {addNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;