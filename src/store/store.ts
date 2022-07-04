import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from './library/librarySlice'

const store = configureStore({
    reducer: {
        library: libraryReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch