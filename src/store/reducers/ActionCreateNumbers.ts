import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFactData = createAsyncThunk(
    'number/date',
    async ({ day, month }: { day: string, month: string }, thunkAPI) => {
        try {
            const responce = await axios.get<string>(`http://numbersapi.com/${month}/${day}/date`)
            return responce.data
        } catch (error) {
            thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)

export const getFactNumber = createAsyncThunk(
    'number/math',
    async (number: string, thunkAPI) => {
        try {
            const responce = await axios.get<string>(`http://numbersapi.com/${number}/math`)
            return responce.data
        } catch (error) {
            thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)

export const getTriviaFactNumber = createAsyncThunk(
    'number/trivia',
    async (number: string, thunkAPI) => {
        try {
            const responce = await axios.get<string>(`http://numbersapi.com/${number}`)
            return responce.data
        } catch (error) {
            thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)