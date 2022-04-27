import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatchType, RootReduserType } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootReduserType> = useSelector