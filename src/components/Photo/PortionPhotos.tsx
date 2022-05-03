import { useAppSelector } from '../../hooks/redux'
import './PortionPhotos.css'

const PortionPhotos = (props: { setselectPhoto: React.Dispatch<React.SetStateAction<number>> }) => {

    const { arrayFoundPhotos } = useAppSelector(state => state.photos.foundPhotos)
    return (
        <div className='portion'>
            {arrayFoundPhotos.map((item, index) =>
                <div onClick={() => props.setselectPhoto(index)} key={item.id}>
                    <img className='imgPortion' src={item.src.small} />
                </div>)}
        </div>
    )
}

export default PortionPhotos