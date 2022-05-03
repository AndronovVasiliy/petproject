import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PhotosType, ResPhotos } from "./photosReducer";



const instance = axios.create({
    // baseURL: "https://api.pexels.com/v1/https://api.pexels.com/v1/search?",
    baseURL: "https://api.pexels.com/v1/",
    headers: {
      Authorization: "563492ad6f91700001000001e0f3950ca0724a17982ad7220b1a6034"
    }
  });


export const getSearchPhoto = createAsyncThunk(
    'photos/search',
    async ({page, name}: {page: number, name?: string}, thunkAPI) => {
        try {
            if(name){
                const responce = await instance.get<ResPhotos>(`search?query=${name}&per_page=20&page=${page}`)
                return responce.data
            }
            const responce = await instance.get<ResPhotos>(`search?query=nature&per_page=20&page=${page}`)
            return responce.data
        } catch (error) {
            thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)
