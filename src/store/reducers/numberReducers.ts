import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFactData, getFactNumber, getTriviaFactNumber } from "./ActionCreateNumbers";

interface InitialStateType {
    date: {
        eventOnDate: string,
        isLoading: boolean,
        error: string
    },
    mathFactNumber: {
        fackOnNumber: string,
        isLoading: boolean,
        error: string
    },
    triviaFactNumber: {
        triviaFackOnNumber: string,
        isLoading: boolean,
        error: string
    }
}

const initialState: InitialStateType = {
    date: {
        eventOnDate: '',
        isLoading: false,
        error: ""
    },
    mathFactNumber: {
        fackOnNumber: '',
        isLoading: false,
        error: ''
    },
    triviaFactNumber: {
        triviaFackOnNumber: '',
        isLoading: false,
        error: ''
    }
}

export const numbersReducers = createSlice({
    name: 'number',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getFactData.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.date.eventOnDate = action.payload
            state.date.isLoading = false
        },
        [getFactData.pending.type]: (state, action: PayloadAction<string>) => {
            state.date.eventOnDate = action.payload
            state.date.isLoading = true
        },
        [getFactData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.date.error = action.payload
            state.date.isLoading = false
        },
        [getFactNumber.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.mathFactNumber.fackOnNumber = action.payload
            state.mathFactNumber.isLoading = false
        },
        [getFactNumber.pending.type]: (state, action: PayloadAction<string>) => {
            state.mathFactNumber.fackOnNumber = action.payload
            state.mathFactNumber.isLoading = true
        },
        [getFactNumber.rejected.type]: (state, action: PayloadAction<string>) => {
            state.mathFactNumber.error = action.payload
            state.mathFactNumber.isLoading = false
        },
        
        [getTriviaFactNumber.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.triviaFactNumber.triviaFackOnNumber = action.payload
            state.triviaFactNumber.isLoading = false
        },
        [getTriviaFactNumber.pending.type]: (state, action: PayloadAction<string>) => {
            state.triviaFactNumber.triviaFackOnNumber = action.payload
            state.triviaFactNumber.isLoading = true
        },
        [getTriviaFactNumber.rejected.type]: (state, action: PayloadAction<string>) => {
            state.triviaFactNumber.error = action.payload
            state.triviaFactNumber.isLoading = false
        }
    }
})