import React from 'react'
import { Link } from 'react-router-dom'
import iconNav from '../img/tareas.svg'
import './styles/NavBar.css'

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
                            <Link className="nav-link" to="/home/tasks">Mis tareas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/dev">Desarrollador</Link>
                        </li>
                    </ul>
                </div>            
            </nav>
        )
    }
}

