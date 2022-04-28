import './ModalMoleInHole.css'

interface PropsType {
    title: string
}

const ModalMoleInHole = (props: PropsType) => {
    return (
        <div className="modalMoleInHole">
            <h1 className='h1ModalMoleInHole'>{props.title}</h1>
        </div>
    );
}

export default ModalMoleInHole