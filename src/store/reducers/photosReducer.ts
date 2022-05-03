import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSearchPhoto } from "./ActionCreatePhotos";

export interface PhotosSizeType {
    landscape: string
    large: string
    large2x: string
    medium: string
    original: string
    portrait: string
    small: string
    tiny: string
}

export interface PhotosType {
    alt: string
    avg_color: string
    height: number
    id: number
    liked: boolean
    photographer: string
    photographer_id: number
    photographer_url: string
    src: PhotosSizeType
    url: string
    width: number
}

export interface ResPhotos {
    next_page: string
    page: number
    per_page: number
    photos: Array<PhotosType>
    total_results: number
}

interface InitialStateType {
    foundPhotos: {
        arrayFoundPhotos: Array<PhotosType>
        isLoading: boolean,
        error: string
        per_page: number
        selectPage: number
        total_results: number
        nameSearchPhoto: string
    }
}

const initialState: InitialStateType = {
    foundPhotos: {
        arrayFoundPhotos: [] as Array<PhotosType>,
        isLoading: false,
        error: '',
        per_page: 20,
        selectPage: 1,
        total_results: 0,
        nameSearchPhoto: ''
    }
}

export const photosReducers = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setselectPage(state, action) {
            state.foundPhotos.selectPage = action.payload
        },
        setNameSearchPhoto(state, action) {
            state.foundPhotos.nameSearchPhoto = action.payload
        }
    },
    extraReducers: {
        [getSearchPhoto.fulfilled.type]: (state, action: PayloadAction<ResPhotos>) => {
            state.foundPhotos.arrayFoundPhotos = action.payload.photos
            state.foundPhotos.total_results = action.payload.total_results
            state.foundPhotos.isLoading = false
        },
        [getSearchPhoto.pending.type]: (state) => {
            state.foundPhotos.isLoading = true
        },
        [getSearchPhoto.rejected.type]: (state, action) => {
            state.foundPhotos.error = action.payload
            state.foundPhotos.isLoading = false
        },
    }
})