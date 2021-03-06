import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { numbersReducers } from "./reducers/numberReducers";
import { photosReducers } from "./reducers/photosReducer";
import { yesOrNoReduser } from "./reducers/yesOrNoReducer";

const rootReducer = combineReducers({
    date: numbersReducers.reducer,
    yesorno: yesOrNoReduser.reducer,
    photos: photosReducers.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootReduserType = ReturnType<typeof rootReducer>
export type RootStateType = ReturnType<typeof setupStore>
export type AppDispatchType = RootStateType['dispatch']