import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {ILibraryState, ILibrary, ICard, IStack, IStackDetails} from './libraryModels'
import axios from 'axios'
import { IDeleteCard, IDeleteStack, IGetLibrary, IPostCard, IPostStack, IUpdateCardCompleted, IUpdateStackDetails} from '../../services/libraryApi/apiInterface'
import { create } from 'domain'


const initialState:ILibraryState = {
    loading: false,
    library: null,
    error: ""
}

const axiosCollection = axios.create({
    baseURL: "https://stacks-app.herokuapp.com/api/collection",
    timeout: 4000
})

const testLibraryId = "62b4dc559648f34fa61c5304"

export const fetchLibrary = createAsyncThunk('library/fetchlibrary', ()=>{
    return axiosCollection
        .get(`/libraries/${testLibraryId}`)
        .then((response)=>{
            console.log(response.data)
            return response.data
        })
        .catch((error) => console.log(error))
})

export const addStack = createAsyncThunk('library/addStack', (payload:IPostStack)=>{
    return axiosCollection
        .post(`/libraries/${payload.libraryId}/stacks`, payload)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => console.log(error))
})

export const updateStackDetails = createAsyncThunk('library/updateStackDetails', (payload:IUpdateStackDetails) => {
    return axiosCollection
        .patch(`/libraries/${payload.libraryId}/stacks/${payload.stackId}`, payload)
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
        .catch((error) => console.log(error))
})

export const deleteStack = createAsyncThunk('library/deleteStack', (payLoad: IDeleteStack) => {
    return axiosCollection
        .delete(`/libraries/${payLoad.libraryId}/stacks/${payLoad.stackId}`)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => console.log(error))
})

export const addCard = createAsyncThunk('library/addCard', (payload: IPostCard)=>{
    return axiosCollection
        .post(`/libraries/${payload.libraryId}/stacks/${payload.stackId}/cards`, payload)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => console.log(error))
})

export const deleteCard  = createAsyncThunk('library/deleteCard', (payload: IDeleteCard)=> {
    return axiosCollection
        .delete(`/libraries/${payload.libraryId}/stacks/${payload.stackId}/cards/${payload.cardId}`)
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
        .catch((error) => console.log(error))
})

export const updateCardCompleted = createAsyncThunk('library/updateCardComplete', (payload: IUpdateCardCompleted) => {
    return axiosCollection
        .patch(`/libraries/${payload.libraryId}/stacks/${payload.stackId}/cards/${payload.cardId}/completed`,payload)
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
        .catch((error) => console.log(error))
})



const librarySlice = createSlice({
    name: "library",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchLibrary.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchLibrary.fulfilled, (state,action) => {
            state.loading = false;
            state.library = action.payload;
            state.error = '';
        })
        .addCase(fetchLibrary.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong"
        })
        .addCase(addStack.pending, (state)=> {
            state.loading = true;
        })
        .addCase(addStack.fulfilled, (state,action) => {
            state.loading = false;
            state.library = action.payload;
            state.error = '';
        })
        .addCase(addStack.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong"
        })
        .addCase(updateStackDetails.pending, (state)=> {
            state.loading = true;
        })
        .addCase(updateStackDetails.fulfilled, (state,action) => {
            state.loading = false;
            state.library = action.payload;
            state.error = '';
        })
        .addCase(updateStackDetails.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong"
        })
        .addCase(deleteStack.pending, (state) => {
            state.loading = true
        })
        .addCase(deleteStack.fulfilled, (state,action) => {
            state.loading = false;
            state.library = action.payload
        })
        .addCase(deleteStack.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong"
        })
        .addCase(addCard.pending, (state) => {
            state.loading = true;
        })
        .addCase(addCard.fulfilled,(state,action) => {
            state.loading = false;
            state.library = action.payload;
            state.error = '';
        })
        .addCase(addCard.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong"
        })
        .addCase(deleteCard.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteCard.fulfilled, (state,action)=> {
            state.loading = false;
            state.library = action.payload;
            state.error = ''
        })
        .addCase(deleteCard.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong"
        })
        .addCase(updateCardCompleted.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateCardCompleted.fulfilled, (state,action)=> {
            state.loading = false;
            state.library = action.payload;
            state.error = '';
        })
        .addCase(updateCardCompleted.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Something went wrong"
        })
    }
})

export default librarySlice.reducer
export const libraryActions = librarySlice.actions
