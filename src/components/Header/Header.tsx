import { useState } from 'react';
import { Button, Dropdown, Nav, Offcanvas } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='header'>
      {window.screen.width < 600 ?
        <>
          <Button variant="primary" onClick={handleShow}>
            Разделы
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Разделы</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Dropdown.Item onClick={() => handleClose()} as={Link} to='/numbers'>O числах</Dropdown.Item>
              <Dropdown.Item onClick={() => handleClose()} as={Link} to='/yesorno'>Да или нет</Dropdown.Item>
              <Dropdown.Item onClick={() => handleClose()} as={Link} to='/moleInHole'>MoleInHole</Dropdown.Item>
              <Dropdown.Item onClick={() => handleClose()} as={Link} to='/calculator'>Калькулятор</Dropdown.Item>
              <Dropdown.Item onClick={() => handleClose()} as={Link} to='/photos'>Фото</Dropdown.Item>
            </Offcanvas.Body>
          </Offcanvas>
        </>
        :
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link as={NavLink} to='/numbers'>O числах</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/yesorno'>Да или нет</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/moleInHole'>MoleInHole</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/calculator'>Калькулятор</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/photos'>Фото</Nav.Link>
          </Nav.Item>
        </Nav>
      }
    </div>
  )
}

export default Header