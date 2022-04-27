import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type ResponceType = {
    answer: string,
    forced: boolean | null,
    image: string
}

export const getYesOrNo = createAsyncThunk(
    'yesOrNo',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get<ResponceType>(`https://yesno.wtf/api`)
            return responce.data
        } catch (error) {
            thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)