import React from 'react'
import { Link } from 'react-router-dom'
import iconNav from '../img/tareas.svg'
import './styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import { faCalendarPlus, faLaptopCode, faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="/home">
                    <img src={iconNav} width="40" height="40" alt="" className="icon"/>
                    toDo
                </Link>                
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">   
                            <Link className="nav-link" to="/home/tasks"><FontAwesomeIcon icon={ faAddressBook } /> Mis tareas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/dev"><FontAwesomeIcon icon={ faCalendarPlus } /> Crear Tarea</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/dev"><FontAwesomeIcon icon={ faLaptopCode } /> Desarrollador</Link>
                        </li>
                    </ul>
                </div>            
            </nav>
        )
    }
}

