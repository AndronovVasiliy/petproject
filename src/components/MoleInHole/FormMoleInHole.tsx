import './FormMoleInHole.css'
import { useForm, SubmitHandler } from "react-hook-form";

enum SpeedEnum {
    female = "female",
    male = "male",
    other = "other"
}

enum SizeFieldEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    size: SizeFieldEnum;
    speed: SpeedEnum;
}

interface PropsType {
    start: React.Dispatch<React.SetStateAction<boolean>>
    size: React.Dispatch<React.SetStateAction<number>>
    speed: React.Dispatch<React.SetStateAction<number>>
    hit: number
    miss: number
    setMiss: React.Dispatch<React.SetStateAction<number>>
    setHit: React.Dispatch<React.SetStateAction<number>>
}

const FormMoleInHole = (props: PropsType) => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(+data.speed);
        props.size(+data.size)
        props.speed(+data.speed)
        props.start(true)
        props.setHit(0)
        props.setMiss(0)
    }

    return (
        <form className='formMoleInHole' onSubmit={handleSubmit(onSubmit)}>
            <div className='missMoleInHole'>{props.miss}</div>
            <div className='speedSelection'>
                <label className='labelFormMoleInHole'>Размер</label>
                <select defaultValue={"16"} {...register("size")} >
                    <option value="9">3х3</option>
                    <option value="16">4х4</option>
                    <option value="25">5х5</option>
                </select>
            </div>
            <div >
                <button className='buttonFormMoleInHole' value='Начать' type="submit" >Начать</button>
            </div>
            <div className='sizedSelection'>
                <label className='labelFormMoleInHole'>Скорость</label>
                <select defaultValue={"700"} {...register("speed")} >
                    <option value="500">0.5c</option>
                    <option value="700">0.7c</option>
                    <option value="1000">1c</option>
                </select>
            </div>
            <div className='hitMoleInHole'>{props.hit}</div>
        </form>
    )
}

export default FormMoleInHole

