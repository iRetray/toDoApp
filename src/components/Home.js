import React from 'react'
import notes from '../img/note.png'
import { Jumbotron, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Link }  from 'react-router-dom'
import NavBarCollapse from './NavBarCollapse'

export default class Home extends React.Component {

    render() {
        return(
            <div>
                <NavBarCollapse />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <Jumbotron>
                            <center>
                                <h2>Guarda tus tareas facilmente</h2>
                                <p className="lead">Crea notas <i>interactivas y dinámicas</i> para no olvidar nunca lo que tienes pendiente por hacer</p>
                                <Link to="/home/tasks">
                                <Button color="warning" block><FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> <strong> Empezar</strong></Button>
                                </Link>
                            </center>
                            </Jumbotron>
                        </div>
                        <div className="col-sm-6">
                            <img src={notes} alt="" className="img-fluid"/>
                        </div>       
                    </div>
                </div>                
            </div>
        )
    }
}