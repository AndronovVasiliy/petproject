import moment from 'moment'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getFactData, getFactNumber, getTriviaFactNumber } from '../../store/reducers/ActionCreateNumbers'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Numbers.css'

const Numbers = () => {

    const dispatch = useAppDispatch()
    const { date } = useAppSelector(state => state.date)
    const { mathFactNumber} = useAppSelector(state => state.date)
    const { triviaFactNumber} = useAppSelector(state => state.date)

    useEffect(() => {
        const objDate = { day: moment().format('DD'), month: moment().format('MM') }
        dispatch(getFactData(objDate))
    }, [])

    return (
        <div className='numbers'>
            <div className='title'><h2 style={{textAlign: 'center'}}>На этой странице вы найдете интересные факты о дате и числах</h2></div>
            <div className='date'>
                <h4>Этот день в истории</h4>
                {date.isLoading ?
                    <p className='paragraphNumber'>Загрузка...</p>
                    :
                    date.error ?
                        <p>{date.error}</p>
                        :
                        <p className='paragraphNumber'>{date.eventOnDate}</p>}
            </div>
            <div className='factAboutNumber'>
                <h4>Матиматический факт о числах</h4>
                <AddMathFactNumberForm />
                {mathFactNumber.isLoading ?
                    <p className='paragraphNumber'>Загрузка...</p>
                    :
                    mathFactNumber.error ?
                        <p>{mathFactNumber.error}</p>
                        :
                        <p className='paragraphNumber'>{mathFactNumber.fackOnNumber}</p>}
            </div>
            <div className='factAboutNumber'>
                <h4>Интересны факты о числах</h4>
                <AddTriviaFactNumberForm />
                {triviaFactNumber.isLoading ?
                    <p className='paragraphNumber'>Загрузка...</p>
                    :
                    triviaFactNumber.error ?
                        <p>{triviaFactNumber.error}</p>
                        :
                        <p className='paragraphNumber'>{triviaFactNumber.triviaFackOnNumber}</p>}
            </div>
        </div>
    )
}

export default Numbers


type InputsForm = {
    number: string,
};

const schema = yup.object({
    number: yup.number()
        .typeError('')
        .max(10000, "Число до 10000")
        .positive("Число должно быть положительное")
        .integer("Число должно быть целое")
        .required("Поле должно быть заполнено"),
}).required();


export const AddMathFactNumberForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<InputsForm>({
        resolver: yupResolver(schema)
    });

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<InputsForm> = (data) => dispatch(getFactNumber(data.number));

    return (
        <form className='formNumber' onSubmit={handleSubmit(onSubmit)}>
            <input size={4} className='inputNumber' type="number" {...register("number")} />
            {errors.number && <div> <span>{errors.number.message}</span></div>}
            <input className='inputButton' type="submit" value='Узнать' />
        </form>
    );
}

export const AddTriviaFactNumberForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<InputsForm>({
        resolver: yupResolver(schema)
    });

    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<InputsForm> = (data) => dispatch(getTriviaFactNumber(data.number));

    return (
        <form className='formNumber' onSubmit={handleSubmit(onSubmit)}>
            <input size={4} className='inputNumber' type="number" {...register("number")} />
            {errors.number && <div> <span>{errors.number.message}</span></div>}
            <input className='inputButton' type="submit" value='Узнать' />
        </form>
    );
}