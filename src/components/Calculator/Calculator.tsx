import './Calculator.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

export const Calculator = () => {

  const [valueOutput, setValueOutput] = useState("")

  const onClick = (e: any) => {
    let value = e.target

    if (e.target.classList.contains('btn')) {
      switch (value.innerText) {
        case "=":
          setValueOutput(eval(valueOutput))
          break;
        case "C":
          setValueOutput('')
          break;
        default:
          setValueOutput(prev => prev + e.target.innerText)
          break;
      }
    }

  }

  return (
    <div onClick={(e) => onClick(e)} className='calculator'>
      <output className='calcResult'>{valueOutput}</output>
      <Button size="lg" variant="secondary" className='calcBtn'>7</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>8</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>9</Button>
      <Button size="lg" variant="warning" className='calcBtn'>+</Button>

      <Button size="lg" variant="secondary" className='calcBtn'>4</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>5</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>6</Button>
      <Button size="lg" variant="warning" className='calcBtn'>-</Button>

      <Button size="lg" variant="secondary" className='calcBtn'>1</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>2</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>3</Button>
      <Button size="lg" variant="warning" className='calcBtn'>*</Button>

      <Button size="lg" variant="secondary" className='calcBtn'>0</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>.</Button>
      <Button size="lg" variant="secondary" className='calcBtn'>00</Button>
      <Button size="lg" variant="warning" className='calcBtn'>/</Button>

      <Button size="lg" className='calcBtn_reset'>C</Button>
      <Button size="lg" variant="danger" className='calcBtn_equal'>=</Button>
    </div>
  )
}
