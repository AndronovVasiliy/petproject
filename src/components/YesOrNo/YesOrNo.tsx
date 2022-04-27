import './YesOrNo.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getYesOrNo } from '../../store/reducers/ActionCreateYesOrNo'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
const url = "https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif"

const style = {
  width: '100%',
  flexGrow: '1',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  marginTop: '10px',
  backgroundImage: "url(" + `${url}` + ")",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
}

const YesOrNo = () => {

  const { error, yesOrNo, isLoading } = useAppSelector(state => state.yesorno)
  const [first, setfirst] = useState(style)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setfirst(prev => ({ ...prev, backgroundImage: "url(" + `${yesOrNo.image}` + ")" }))
  }, [yesOrNo.image])


  return (
    <div className='container'>
      <h3>Если вам тудно с чем-то определиться и вам сложно сделать простой выбор, используйте кнопку</h3>
      <Button onClick={() => dispatch(getYesOrNo())} variant="primary" size="lg">
        Сделать это?
      </Button>
      <div style={first as React.CSSProperties} >
        {isLoading ? <p>Загрузка</p> :
          <div className='answer'><h1>{yesOrNo.answer.toUpperCase()}</h1></div>
        }
      </div>
    </div>
  )
}

export default YesOrNo