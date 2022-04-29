import './ModalMoleInHole.css'

interface PropsType {
    title: boolean
}

const ModalMoleInHole = (props: PropsType) => {
    return (
        <div className="modalMoleInHole">

            { props.title ?
            <h1 className={`h1winModalMoleInHole`}>Выйграл</h1>
            :
            <h1 className={`h1lossModalMoleInHole`}>Проиграл</h1>
            }
        </div>
    );
}

export default ModalMoleInHole