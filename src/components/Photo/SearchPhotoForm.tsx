import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";
import { photosReducers } from "../../store/reducers/photosReducer";
import './SearchPhotoForm.css'

type Inputs = {
    nameSearchPhoto: string,
};

export default function SearchPhotoForm() {
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm<Inputs>();
    const {setNameSearchPhoto} = photosReducers.actions
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(setNameSearchPhoto(data.nameSearchPhoto))
    }

    return (
        <div className="searchPhotoForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Hазвание фотографии" {...register("nameSearchPhoto")} />
                <input type="submit" value='Найти'/>
            </form>
        </div>
    );
}