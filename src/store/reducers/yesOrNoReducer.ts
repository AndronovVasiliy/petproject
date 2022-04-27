import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getYesOrNo, ResponceType } from "./ActionCreateYesOrNo";

interface InitialStateType {
    yesOrNo: {
        answer: string,
        forced: boolean | null,
        image: string
    },
    isLoading: boolean,
    error: string
}

const initialState: InitialStateType = {
    yesOrNo: {
        answer: "",
        forced: null,
        image: ""
    },
    isLoading: false,
    error: ''
}

export const yesOrNoReduser = createSlice({
    name: 'yesOrNo',
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [getYesOrNo.fulfilled.type]: (state, action: PayloadAction<ResponceType>) => {
            state.yesOrNo = {...action.payload}
            state.isLoading = false
        },
        [getYesOrNo.pending.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = true
        },
        [getYesOrNo.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})