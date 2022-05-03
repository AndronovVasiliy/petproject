import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getSearchPhoto } from "../../store/reducers/ActionCreatePhotos";
import PortionPhotos from "./PortionPhotos";
import './Photo.css'
import Paginator from "./Paginator";
import SearchPhotoForm from "./SearchPhotoForm";

const Photo = () => {

  const { arrayFoundPhotos, selectPage, nameSearchPhoto } = useAppSelector(state => state.photos.foundPhotos)
  const [selectPhoto, setselectPhoto] = useState(0)


  const dispatch = useAppDispatch()
  useEffect(() => {
    if (nameSearchPhoto) {
      dispatch(getSearchPhoto({ page: selectPage, name: nameSearchPhoto }))
      setselectPhoto(0)
    }
    if (!nameSearchPhoto) {
      dispatch(getSearchPhoto({ page: selectPage }))
      setselectPhoto(0)
    }

  }, [selectPage, nameSearchPhoto])


  return (
    <div className="photo">
      <div className="searchPhoto">
        <SearchPhotoForm />
      </div>
      <div className="mainPhoto">
        {arrayFoundPhotos.length > 0 && <img className="imgphoto" src={arrayFoundPhotos[selectPhoto].src.original} />}
      </div>
      <div className="list">
        <PortionPhotos setselectPhoto={setselectPhoto} />
      </div>
      <div>
        <Paginator />
      </div>
    </div>
  )
}

export default Photo