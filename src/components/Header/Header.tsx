import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <DropdownButton id="dropdown-basic-button" title="Разделы">
        <Dropdown.Item as={Link} to='/numbers'>O числах</Dropdown.Item>
        <Dropdown.Item as={Link} to='/yesorno'>Да или нет</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default Header