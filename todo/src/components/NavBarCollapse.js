import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import iconNav from '../img/tareas.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus, faLaptopCode, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const NavBarCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark" light expand="md" style={{marginBottom: '20px'}}>
        <NavbarBrand>
            <Link to="/home" className="text-white" style={{textDecoration: 'none'}}>
            <img src={iconNav} width="40" height="40" alt="" className="icon"/>
            {'   '}toDo 
            </Link>            
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink>
                    <Link to="/home/tasks" className="text-white" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={ faAddressBook } /> Mis tareas</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/home/add" className="text-white" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={ faCalendarPlus } /> Crear Tarea</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/home/dev" className="text-white" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={ faLaptopCode } /> Desarrollador</Link>
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarCollapse;