import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
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
      <Navbar color="dark" light expand="md">
        <NavbarBrand to="/home" className="text-white">
            <img src={iconNav} width="40" height="40" alt="" className="icon"/>
                toDo 
        </NavbarBrand>
        <NavbarToggler color="light" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink>
                    <Link to="/home/tasks" className="text-white"><FontAwesomeIcon icon={ faAddressBook } /> Mis tareas</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/home/add" className="text-white"><FontAwesomeIcon icon={ faCalendarPlus } /> Crear Tarea</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Link to="/home/dev" className="text-white"><FontAwesomeIcon icon={ faLaptopCode } /> Desarrollador</Link>
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarCollapse;