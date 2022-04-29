import { useEffect, useState } from 'react'
import './MoleInHole.css'
import './img/mole.png'
import FormMoleInHole from './FormMoleInHole'
import ModalMoleInHole from './ModalMoleInHole'

const url = "https://image.winudf.com/v2/image1/YXBwaW52ZW50b3IuYWlfc2hhdXJ5YV91dGFuZS5Nb2xlTWFzaFYyX2ljb25fMTU4OTM1NDQzMV8wMjg/icon.png?w=100&fakeurl=1"

let styleFildPart = {
  backgroundColor: '#a2653e',
  width: '100%',
  height: '100%',
  borderRadius: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

let mole = {
  backgroundImage: "url(" + `${url}` + ")"  
}

const MoleInHole = () => {

  const [numberFields, setnumberFields] = useState(16)
  const [speed, setSspeed] = useState(700)
  const [show, setShow] = useState(0)
  const [hit, setHit] = useState(0)
  const [miss, setMiss] = useState(0)
  const [startStop, setstartStop] = useState(false)

  useEffect(() => {

    if (hit >= 10 || miss >= 3) {
      setstartStop(false)
    }
    const interval = setInterval(() => {
      if (startStop && hit < 10 && miss <= 5) {
        let show = Math.floor(Math.random() * numberFields)
        setShow(show)
      }
    }, speed)

    return () => {
      clearTimeout(interval)
    }
  }, [startStop, speed, numberFields, hit, miss])

  let arrs = []

  for (let i = 1; i <= numberFields; i++) {
    arrs.push(i)
  }

  const onClick = (e: any) => {
    +e.target.id === 1 ? setHit(prev => prev + 1) : setMiss(prev => prev + 1)
    // e.currentTarget.style = `${{...styleFildPart}}`
    e.currentTarget.style.backgroundImage = ""
    // e.currentTarget.style.backgroundColor = 'salmon';
  }

  return (
    <div className='moleInHole'>
      <FormMoleInHole start={setstartStop} size={setnumberFields} speed={setSspeed} hit={hit} miss={miss} setHit={setHit} setMiss={setMiss} />
      <div className={`containerMoleInHole${numberFields}`}>
        {(hit >= 10 || miss >= 5) && <ModalMoleInHole title={miss >= 5 ? false : true} />}
        {arrs.map(i => show === i ?
          <div key={i} id='1' onClick={(e) => onClick(e)} style={{ gridArea: `i${i}`, ...styleFildPart, ...mole }}></div>
          :
          <div key={i} id='0' onClick={(e) => onClick(e)} style={{ gridArea: `i${i}`, ...styleFildPart }}></div>)}
      </div>
    </div>
  )
}

export default MoleInHole